const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-CbMDZO-8.js",
      "assets/index-Bg1Tm6Y5.js",
      "assets/index-B_qvBgV5.css",
      "assets/IconInfo-DCPrcGSD.js",
      "assets/IconNotificationMention-ChAl94AE.js",
      "assets/IconChevronRight-CHGOa5Tt.js",
      "assets/IconChevronLeft-4Cj0xkqD.js",
      "assets/index-BlW3gCpc.css",
      "assets/index-BL2HiSGj.js",
      "assets/index-CK1Pveff.css",
      "assets/VoiceInput-Du8nad4O.js",
      "assets/IconPlay-BkGkbvM5.js",
      "assets/VoiceInput-TuIw8qFZ.css",
      "assets/PostMediaVideo-Br-HiYvW.js",
      "assets/VolumeGlyph-DZ-00ZIW.js",
      "assets/PostMediaVideo-CAOfrhe6.css",
      "assets/index-Dpnl0w2z.js",
      "assets/IconCheckCircle-CRMZt-ui.js",
      "assets/index-C8mCTcgQ.css",
      "assets/index-DAwS3OSh.js",
      "assets/index-Oh05MTFh.css",
      "assets/index-Cof8GaIR.js",
      "assets/index-DlbiSu8f.css",
      "assets/index-D2VmzBNL.js",
      "assets/index-BzUT4zfL.css",
      "assets/index-BAyj8Krn.js",
      "assets/index-Bj8pz_Hu.css",
      "assets/index-BXQLz6I6.js",
      "assets/useBodyScrollLock-DE6CqLjD.js",
      "assets/index-DxYb0DAj.css",
      "assets/index-BDyMSS7C.js",
      "assets/index-BdewxfoL.css",
      "assets/index-CIQJXaeU.js",
      "assets/index-D1q7O9c5.css",
      "assets/index-flb6PFMD.js",
      "assets/index-BkJQbXZB.css",
      "assets/index-BK3heeTV.js",
      "assets/IconCheck-Cr_I7s2Q.js",
      "assets/index-DbV4kwZS.css",
      "assets/index-B-XTplj8.js",
      "assets/index-Cjxqpv6t.css",
      "assets/index-BLWuSkdo.js",
      "assets/index-q4zI96j9.css",
      "assets/index-CbY91-jY.js",
      "assets/index-CAFNu6wt.css",
      "assets/index-CHL86PpH.js",
      "assets/index-DritIQKM.css",
      "assets/index-B5J-zILt.js",
      "assets/index-7l3diNtZ.css",
      "assets/index-DNpMN0c7.js",
      "assets/index-9YLJz5Gc.css",
      "assets/index-D0hUjtZN.js",
      "assets/index-BPjWzGLI.css",
      "assets/index-CMr5eite.js",
      "assets/index-CrZgTXjL.css",
      "assets/index-4daVaZdE.js",
      "assets/index-Dk3tVBta.css",
      "assets/index-BegVyLJ-.js",
      "assets/index-CJRxvqcI.css",
      "assets/index-wKQfQxYj.js",
      "assets/index-BIglA-IQ.css",
      "assets/index-CyNdNeAh.js",
      "assets/index-UwLK89Xq.css",
      "assets/index-BRvfMsCK.js",
      "assets/SubscriptionTerms.module-Cq-26Ti7.js",
      "assets/SubscriptionTerms-B390W-fB.css",
      "assets/index-P10XmEDR.js",
      "assets/index-BnqNnNe1.js",
      "assets/index-BjZiGhmq.js",
      "assets/index-Dr04obz3.css",
      "assets/index-IxAI1HCP.js",
      "assets/index-B_hhtO1_.css",
      "assets/IconEyeOff-ConI11na.js",
      "assets/index-BRTWwlUZ.css",
      "assets/index-BGzNKYiG.js",
      "assets/index-Czh76FiI.css",
      "assets/index-owc-R5yI.js",
      "assets/index-DMHlhARu.css",
      "assets/index-DlJ4aaHw.js",
      "assets/index-C_oJ8h8j.css",
      "assets/index-VnEx99Nf.js",
      "assets/index-CLUgPjDJ.css",
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
      (e._sentryDebugIds[t] = "3a023749-dd03-4f58-8d2d-31b679d6b2b0");
      (e._sentryDebugIdIdentifier = "sentry-dbid-3a023749-dd03-4f58-8d2d-31b679d6b2b0");
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
let Qn;
let X;
let dc;
let Gt;
let ti;
let fc;
let hc;
let pc;
let ds;
let Po;
let Lo;
let mc;
const qn = {};
const gc = [];
const Bu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function ct(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function fs(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function tt(e, t, n) {
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
    (a.children = arguments.length > 3 ? Qn.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return Vn(e, a, r, o, null);
}
function Vn(e, t, n, r, o) {
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
    __v: o ?? ++dc,
    __i: -1,
    __u: 0,
  };

  if (o == null && X.vnode != null) {
    X.vnode(s);
  }

  return s;
}
function Vu() {
  return { current: null };
}
function Ie(e) {
  return e.children;
}

class Ke {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  setState(e, t) {
    let n;

    (n = this.__s != null && this.__s != this.state
      ? this.__s
      : (this.__s = ct({}, this.state)));

    if (typeof e == "function") {
      (e = e(ct({}, n), this.props));
    }

    if (e) {
      ct(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      $o(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      $o(this);
    }
  }
}

function mn(e, t) {
  if (t == null) {
    return e.__ ? mn(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? mn(e) : null;
}
function _c(e) {
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

    return _c(e);
  }
}
function $o(e) {
  if (((!e.__d && (e.__d = true) && Gt.push(e) && !$r.__r++) || ti != X.debounceRendering)) {
    ((ti = X.debounceRendering) || fc)($r);
  }
}
function $r() {
  let e;
  let t;
  let n;
  let r;
  let o;
  let s;
  let a;
  let c = 1;

  while (Gt.length) {
    if (Gt.length > c) {
      Gt.sort(hc);
    }

    (e = Gt.shift());
    (c = Gt.length);

    if (e.__d) {
      (n = undefined);
      (r = undefined);
      (o = (r = (t = e).__v).__e);
      (s = []);
      (a = []);

      t.__P &&
        (((n = ct({}, r)).__v = r.__v + 1),
        X.vnode && X.vnode(n),
        hs(
          t.__P,
          n,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [o] : null,
          s,
          o ?? mn(r),
          !!(32 & r.__u),
          a
        ),
        (n.__v = r.__v),
        (n.__.__k[n.__i] = n),
        Ec(s, n, a),
        (r.__e = r.__ = null),
        n.__e != o && _c(n));
    }
  }

  $r.__r = 0;
}
function yc(e, t, n, r, o, s, a, c, l, u, f) {
  let d;
  let p;
  let h;
  let m;
  let g;
  let w;
  let _;
  const y = (r && r.__k) || gc;
  const t_length = t.length;
  l = Wu(n, t, y, l, t_length);

  for (d = 0; d < t_length; d++) {
    if ((h = n.__k[d]) != null) {
      (p = h.__i == -1 ? qn : y[h.__i] || qn);
      (h.__i = d);
      (w = hs(e, h, p, o, s, a, c, l, u, f));
      (m = h.__e);

      h.ref &&
        p.ref != h.ref &&
        (p.ref && ps(p.ref, null, h), f.push(h.ref, h.__c || m, h));

      g == null && m != null && (g = m);

      (_ = !!(4 & h.__u)) || p.__k === h.__k
        ? (l = vc(h, l, e, _))
        : typeof h.type == "function" && w !== undefined
        ? (l = w)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = g);
  return l;
}
function Wu(e, t, n, r, o) {
  let s;
  let a;
  let c;
  let l;
  let u;
  const n_length = n.length;
  let d = n_length;
  let p = 0;
  e.__k = new Array(o);

  for (s = 0; s < o; s++) {
    if ((a = t[s]) != null && typeof a != "boolean" && typeof a != "function") {
      typeof a == "string" ||
          typeof a == "number" ||
          typeof a == "bigint" ||
          a.constructor == String
            ? (a = e.__k[s] = Vn(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = Vn(Ie, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                Vn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + p);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = ju(a, n, l, d)) != -1 && (d--, (c = n[u]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (u == -1 && (o > n_length ? p-- : o < n_length && p++),
          typeof a.type != "function" && (a.__u |= 4))
        : u != l &&
          (u == l - 1
            ? p--
            : u == l + 1
            ? p++
            : (u > l ? p-- : p++, (a.__u |= 4)));
    } else {
      (e.__k[s] = null);
    }
  }

  if (d) {
    for (s = 0; s < n_length; s++) {
      if ((c = n[s]) != null &&
        (2 & c.__u) == 0) {
        c.__e == r && (r = mn(c));
        Sc(c, c);
      }
    }
  }
  return r;
}
function vc(e, t, n, r) {
  let o;
  let s;
  if (typeof e.type == "function") {
    o = e.__k;

    for (s = 0; o && s < o.length; s++) {
      if (o[s]) {
        (o[s].__ = e);
        (t = vc(o[s], t, n, r));
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
        (t && e.type && !t.parentNode && (t = mn(e)),
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
function ju(e, t, n, r) {
  let o;
  let s;
  let a;

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
function ni(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || Bu.test(t) ? n : `${n}px`);
  }
}
function lr(e, t, n, r, o) {
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
            ni(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            ni(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(pc, "$1")));
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
        (n.u = r.u);
      } else {
        (n.u = ds);
        e.addEventListener(t, s ? Lo : Po, s);
      }
    } else {
      e.removeEventListener(t, s ? Lo : Po, s);
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
function ri(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t.t == null) {
        t.t = ds++;
      } else if (t.t < n.u) {
        return;
      }
      return n(X.event ? X.event(t) : t);
    }
  };
}
function hs(e, t, n, r, o, s, a, c, l, u) {
  let f;
  let d;
  let p;
  let h;
  let m;
  let g;
  let w;
  let _;
  let y;
  let E;
  let I;
  let S;
  let C;
  let k;
  let R;
  let b;
  let v;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    (l = !!(32 & n.__u));
    (s = [(c = t.__e = n.__e)]);
  }

  if ((f = X.__b)) {
    f(t);
  }

  e: if (typeof t_type == "function") {
    try {
      (_ = t.props);
      (y = "prototype" in t_type && t_type.prototype.render);
      (E = (f = t_type.contextType) && r[f.__c]);
      (I = f ? (E ? E.props.value : f.__) : r);

      if (n.__c) {
        (w = (d = t.__c = n.__c).__ = d.__E);
      } else {
        y
              ? (t.__c = d = new t_type(_, I))
              : ((t.__c = d = new Ke(_, I)),
                (d.constructor = t_type),
                (d.render = qu));

        E && E.sub(d);
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
        d.__s == d.state && (d.__s = ct({}, d.__s));
        ct(d.__s, t_type.getDerivedStateFromProps(_, d.__s));
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
            _ !== h &&
            d.componentWillReceiveProps != null) {
          d.componentWillReceiveProps(_, I);
        }

        if (t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(_, d.__s, I) === false)) {
          if (t.__v != n.__v) {
            (d.props = _);
            (d.state = d.__s);
            (d.__d = false);
          }

          t.__e = n.__e;
          t.__k = n.__k;

          t.__k.some(T => {
            if (T) {
              (T.__ = t);
            }
          });

          for (S = 0; S < d._sb.length; S++) {
            d.__h.push(d._sb[S]);
          }

          (d._sb = []);

          if (d.__h.length) {
            a.push(d);
          }

          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(_, d.__s, I);
        }

        if (y &&
          d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(h, m, g);
          });
        }
      }

      (d.context = I);
      (d.props = _);
      (d.__P = e);
      (d.__e = false);
      (C = X.__r);
      (k = 0);

      if (y) {
        d.state = d.__s;
        d.__d = false;

        if (C) {
          C(t);
        }

        f = d.render(d.props, d.state, d.context);

        for (R = 0; R < d._sb.length; R++) {
          d.__h.push(d._sb[R]);
        }

        d._sb = [];
      } else {
        do {
          (d.__d = false);

          if (C) {
            C(t);
          }

          (f = d.render(d.props, d.state, d.context));
          (d.state = d.__s);
        } while (d.__d && ++k < 25);
      }

      (d.state = d.__s);

      if (d.getChildContext != null) {
        (r = ct(ct({}, r), d.getChildContext()));
      }

      if (y &&
        !p &&
        d.getSnapshotBeforeUpdate != null) {
        (g = d.getSnapshotBeforeUpdate(h, m));
      }

      (b = f);

      if (f != null &&
        f.type === Ie &&
        f.key == null) {
        (b = wc(f.props.children));
      }

      (c = yc(e, Array_isArray(b) ? b : [b], t, n, r, o, s, a, c, l, u));
      (d.base = t.__e);
      (t.__u &= -161);

      if (d.__h.length) {
        a.push(d);
      }

      if (w) {
        (d.__E = d.__ = null);
      }
    } catch (T) {
      (t.__v = null);

      if (l || s != null) {
        if (T.then) {
          for (t.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) {
            c = c.nextSibling;
          }
          (s[s.indexOf(c)] = null);
          (t.__e = c);
        } else {
          for (v = s.length; v--; ) {
            fs(s[v]);
          }
          xo(t);
        }
      } else {
        (t.__e = n.__e);
        (t.__k = n.__k);

        if (!T.then) {
          xo(t);
        }
      }

      X.__e(T, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = zu(n.__e, t, n, r, o, s, a, l, u));
    }
  }

  if ((f = X.diffed)) {
    f(t);
  }

  return 128 & t.__u ? undefined : c;
}
function xo(e) {
  if (e && e.__c) {
    (e.__c.__e = true);
  }

  if (e && e.__k) {
    e.__k.forEach(xo);
  }
}
function Ec(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    ps(n[r], n[++r], n[++r]);
  }

  if (X.__c) {
    X.__c(t, e);
  }

  e.some(o => {
    try {
      (e = o.__h);
      (o.__h = []);

      e.some(s => {
        s.call(o);
      });
    } catch (s) {
      X.__e(s, o.__v);
    }
  });
}
function wc(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(wc)
    : ct({}, e);
}
function zu(e, t, n, r, o, s, a, c, l) {
  let u;
  let f;
  let d;
  let p;
  let h;
  let m;
  let g;
  let w = n.props || qn;

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
      X.__m && X.__m(t, s);
      (c = false);
    }

    (s = null);
  }
  if (type == null) {
    if (w !== props && (!c || e.data != props)) {
      (e.data = props);
    }
  } else {
    (s = s && Qn.call(e.childNodes));

    if (!c && s != null) {
      w = {};

      for (u = 0; u < e.attributes.length; u++) {
        w[(h = e.attributes[u]).name] = h.value;
      }
    }

    for (u in w) {
      (h = w[u]);

      if (u != "children") {
        if (u == "dangerouslySetInnerHTML") {
          d = h;
        } else if (!(u in props)) {
          if ((u == "value" && "defaultValue" in props) ||
          (u == "checked" && "defaultChecked" in props)) {
            continue;
          }
          lr(e, u, null, h, o);
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
        (g = h);
        break;
      default:
        lr(e, u, h, w[u], o);
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

      yc(
        t.type == "template" ? e.content : e,
        Array_isArray(p) ? p : [p],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
        s,
        a,
        s ? s[0] : n.__k && mn(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          fs(s[u]);
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
            (type == "option" && m != w[u])) &&
          lr(e, u, m, w[u], o);

      (u = "checked");
      g != null && g != e[u] && lr(e, u, g, w[u], o);
    }
  }
  return e;
}
function ps(e, t, n) {
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
    X.__e(o, n);
  }
}
function Sc(e, t, n) {
  let r;
  let o;

  if (X.unmount) {
    X.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      ps(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (s) {
        X.__e(s, t);
      }
    }
    r.base = null;
    r.__P = null;
  }

  if ((r = e.__k)) {
    for (o = 0; o < r.length; o++) {
      if (r[o]) {
        Sc(r[o], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    fs(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function qu(e, t, n) {
  return this.constructor(e, n);
}
function Gn(e, t, n) {
  let r;
  let o;
  let s;
  let a;

  if (t == document) {
    (t = document.documentElement);
  }

  if (X.__) {
    X.__(e, t);
  }

  (o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (a = []);

  hs(
    t,
    (e = ((!r && n) || t).__k = tt(Ie, null, [e])),
    o || qn,
    qn,
    t.namespaceURI,
    !r && n ? [n] : o ? null : t.firstChild ? Qn.call(t.childNodes) : null,
    s,
    !r && n ? n : o ? o.__e : t.firstChild,
    r,
    a
  );

  Ec(s, e, a);
}
function bc(e, t) {
  Gn(e, t, bc);
}
function Cc(e, t, n) {
  let r;
  let o;
  let s;
  let a;
  const c = ct({}, e.props);

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
    (c.children = arguments.length > 3 ? Qn.call(arguments, 2) : n);
  }

  return Vn(e.type, c, r || e.key, o || e.ref, null);
}
function Sn(e) {
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
            $o(a);
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
  (t.__c = `__cC${mc++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
(Qn = gc.slice);

(X = {
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

(dc = 0);

(Ke.prototype.render = Ie);
(Gt = []);

(fc = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(hc = (e, t) => e.__v.__b - t.__v.__b);

($r.__r = 0);
(pc = /(PointerCapture)$|Capture$/i);
(ds = 0);
(Po = ri(false));
(Lo = ri(true));
(mc = 0);
let Gu = 0;
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
    __v: --Gu,
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

  if (X.vnode) {
    X.vnode(u);
  }

  return u;
}
const K = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const ce = globalThis;
const Jt = "10.52.0";
function qr() {
  Gr(ce);
  return ce;
}
function Gr(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || Jt);
  (t[Jt] = t[Jt] || {});
  return t[Jt];
}
function bn(e, t, n = ce) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {});
  const o = (r[Jt] = r[Jt] || {});
  return o[e] || (o[e] = t());
}
const Yu = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const Ku = "Sentry Logger ";
const xr = {};
function Cn(e) {
  if (!("console" in ce)) {
    return e();
  }
  const ce_console = ce.console;
  const n = {};
  const r = Object.keys(xr);
  r.forEach((o) => {
    const xr_o = xr[o];
    (n[o] = ce_console[o]);
    (ce_console[o] = xr_o);
  });
  try {
    return e();
  } finally {
    r.forEach((o) => {
      ce_console[o] = n[o];
    });
  }
}
function Xu() {
  gs().enabled = true;
}
function Zu() {
  gs().enabled = false;
}
function Tc() {
  return gs().enabled;
}
function Ju(...e) {
  ms("log", ...e);
}
function Qu(...e) {
  ms("warn", ...e);
}
function ed(...e) {
  ms("error", ...e);
}
function ms(e, ...t) {
  if (K &&
    Tc()) {
    Cn(() => {
      ce.console[e](`${Ku}[${e}]:`, ...t);
    });
  }
}
function gs() {
  return K ? bn("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const W = {
    enable: Xu,
    disable: Zu,
    isEnabled: Tc,
    log: Ju,
    warn: Qu,
    error: ed,
  };

const Nc = 50;
const en = "?";
const oi = /\(error: (.*)\)/;
const si = /captureMessage|captureException/;
function Ic(...e) {
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

      const u = oi.test(a_c) ? a_c.replace(oi, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const f of t) {
          const d = f(u);
          if (d) {
            s.push(d);
            break;
          }
        }
        if (s.length >= Nc + o) {
          break;
        }
      }
    }
    return nd(s.slice(o));
  };
}
function td(e) {
  return Array.isArray(e) ? Ic(...e) : e;
}
function nd(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(ur(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (si.test(ur(t).function || "")) {
    t.pop();
    si.test(ur(t).function || "") && t.pop();
  }

  return t
    .slice(0, Nc)
    .map(n => ({
    ...n,
    filename: n.filename || ur(t).filename,
    function: n.function || en
  }));
}
function ur(e) {
  return e[e.length - 1] || {};
}
const so = "<anonymous>";
function Lt(e) {
  try {
    return !e || typeof e != "function" ? so : e.name || so;
  } catch {
    return so;
  }
}
function ii(e) {
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
function Rc(e) {
  return "__v_isVNode" in e && e.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
}
const Dn = {};
const ai = {};
function rn(e, t) {
  (Dn[e] = Dn[e] || []);
  Dn[e].push(t);

  return () => {
    const Dn_e = Dn[e];
    if (Dn_e) {
      const r = Dn_e.indexOf(t);

      if (r !== -1) {
        Dn_e.splice(r, 1);
      }
    }
  };
}
function on(e, t) {
  if (!ai[e]) {
    ai[e] = true;
    try {
      t();
    } catch (n) {
      if (K) {
        W.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function et(e, t) {
  const n = e && Dn[e];
  if (n) {
    for (const r of n) {
      try {
        r(t);
      } catch (o) {
        if (K) {
          W.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Lt(r)}
Error:`,
            o
          );
        }
      }
    }
  }
}
let io = null;
function rd(e) {
  const t = "error";
  rn(t, e);
  on(t, od);
}
function od(...args) {
  (io = ce.onerror);

  (ce.onerror = function (e, t, n, r, o) {
    et("error", { column: r, error: o, line: n, msg: e, url: t });
    return io ? io.apply(this, args) : false;
  });

  (ce.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let ao = null;
function sd(e) {
  const t = "unhandledrejection";
  rn(t, e);
  on(t, id);
}
function id(...args) {
  (ao = ce.onunhandledrejection);

  (ce.onunhandledrejection = function (e) {
    et("unhandledrejection", e);
    return ao ? ao.apply(this, args) : true;
  });

  (ce.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const kc = Object.prototype.toString;
function tr(e) {
  switch (kc.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return $t(e, Error);
      }
  }
}
function Tn(e, t) {
  return kc.call(e) === `[object ${t}]`;
}
function Ac(e) {
  return Tn(e, "ErrorEvent");
}
function ci(e) {
  return Tn(e, "DOMError");
}
function ad(e) {
  return Tn(e, "DOMException");
}
function wt(e) {
  return Tn(e, "String");
}
function _s(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function Yr(e) {
  return (
    e === null || _s(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Yn(e) {
  return Tn(e, "Object");
}
function Kr(e) {
  return typeof Event !== "undefined" && $t(e, Event);
}
function cd(e) {
  return typeof Element !== "undefined" && $t(e, Element);
}
function ld(e) {
  return Tn(e, "RegExp");
}
function nr(e) {
  return !!(e?.then && typeof e.then == "function");
}
function ud(e) {
  return (
    Yn(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function $t(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function Oc(e) {
  return !!(
    typeof e == "object" &&
    e !== null &&
    (e.__isVue || e._isVue || e.__v_isVNode)
  );
}
function Pc(e) {
  return typeof Request !== "undefined" && $t(e, Request);
}
const ys = ce;
const dd = 80;
function Lc(e, t = {}) {
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
    const f = Array.isArray(t) ? t : t.keyAttrs;
    const d = (!Array.isArray(t) && t.maxStringLength) || dd;

    while (n &&
         s++ < r &&
         ((u = fd(n, f)),
         !(u === "html" || (s > 1 && a + o.length * c_length + u.length >= d)))) {
      o.push(u);
      (a += u.length);
      (n = n.parentNode);
    }

    return o.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function fd(e, t) {
  const n = e;
  const r = [];
  if (!n?.tagName) {
    return "";
  }
  if (ys.HTMLElement && n instanceof HTMLElement && n.dataset) {
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
      const a = n_className.split(/\s+/);
      for (const c of a) {
        r.push(`.${c}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const a = n.getAttribute(s);

    if (a) {
      r.push(`[${s}="${a}"]`);
    }
  }
  return r.join("");
}
function vs() {
  try {
    return ys.document.location.href;
  } catch {
    return "";
  }
}
function hd(e, t = 5) {
  if (!ys.HTMLElement) {
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
function We(e, t, n) {
  if (!(t in e)) {
    return;
  }
  const e_t = e[t];
  if (typeof e_t != "function") {
    return;
  }
  const o = n(e_t);

  if (typeof o == "function") {
    $c(o, e_t);
  }

  try {
    e[t] = o;
  } catch {
    if (K) {
      W.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function xt(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (K) {
      W.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function $c(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    xt(e, "__sentry_original__", t);
  } catch {}
}
function Es(e) {
  return e.__sentry_original__;
}
function xc(e) {
  if (tr(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...ui(e) };
  }
  if (Kr(e)) {
    const t = {
      type: e.type,
      target: li(e.target),
      currentTarget: li(e.currentTarget),
      ...ui(e),
    };

    if (typeof CustomEvent !== "undefined" && $t(e, CustomEvent)) {
      (t.detail = e.detail);
    }

    return t;
  } else {
    return e;
  }
}
function li(e) {
  try {
    return cd(e) ? Lc(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function ui(e) {
  return typeof e == "object" && e !== null
    ? Object.fromEntries(Object.entries(e))
    : {};
}
function pd(e) {
  const t = Object.keys(xc(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let ln;
function Xr(e) {
  if (ln !== undefined) {
    return ln ? ln(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = ce;
  return t in n && typeof n[t] == "function"
    ? ((ln = n[t]), ln(e))
    : ((ln = null), e());
}
function Mr() {
  return Xr(() => Math.random());
}
function Zr() {
  return Xr(() => Date.now());
}
function Mo(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function di(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const o of e) {
    try {
      if (Oc(o)) {
        n.push(Rc(o));
      } else {
        n.push(String(o));
      }
    } catch {
      n.push("[value cannot be serialized]");
    }
  }

  return n.join(t);
}
function Wn(e, t, n = false) {
  return wt(e)
    ? ld(t)
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
function Jr(e, t = [], n = false) {
  return t.some(r => Wn(e, r, n));
}
function md() {
  const e = ce;
  return e.crypto || e.msCrypto;
}
let co;
function gd() {
  return Mr() * 16;
}
function Xe(e = md()) {
  try {
    if (e?.randomUUID) {
      return Xr(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!co) {
    (co = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return co.replace(/[018]/g, t => (t ^ ((gd() & 15) >> (t / 4))).toString(16));
}
function Mc(e) {
  return e.exception?.values?.[0];
}
function Yt(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const r = Mc(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function Do(e, t, n) {
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
function gn(e, t) {
  const n = Mc(e);
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
function fi(e) {
  if (_d(e)) {
    return true;
  }
  try {
    xt(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function _d(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const Dc = 1000/* 1e3 */;
function rr() {
  return Zr() / Dc;
}
function yd() {
  const { performance } = ce;
  if (!performance?.now || !performance.timeOrigin) {
    return rr;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Xr(() => performance.now())) / Dc;
}
let hi;
function St() {
  return (hi ?? (hi = yd()))();
}
function vd(e) {
  const t = St();

  const n = {
    sid: Xe(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => wd(n),
  };

  if (e) {
    _n(n, e);
  }

  return n;
}
function _n(e, t = {}) {
  if (t.user) {
    !e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address);

    !e.did &&
      !t.did &&
      (e.did = t.user.id || t.user.email || t.user.username);
  }

  (e.timestamp = t.timestamp || St());

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
function Ed(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  _n(e, n);
}
function wd(e) {
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
function or(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const r = { ...e };
  for (const o in t) {
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      (r[o] = or(r[o], t[o], n - 1));
    }
  }
  return r;
}
function pi() {
  return Xe();
}
function Uc() {
  return Xe().substring(16);
}
const Uo = "_sentrySpan";
function mi(e, t) {
  if (t) {
    xt(e, Uo, t);
  } else {
    delete e[Uo];
  }
}
function gi(e) {
  return e[Uo];
}
const Sd = 100;
class lt {
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
    (this._propagationContext = { traceId: pi(), sampleRand: Mr() });
  }
  clone() {
    const t = new lt();
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
    mi(t, gi(this));
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
      _n(this._session, { user: t });
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
    const r = n instanceof lt ? n.getScopeData() : Yn(n) ? t : undefined;

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
    mi(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: pi(), sampleRand: Mr() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : Sd;
    if (r <= 0) {
      return this;
    }
    const o = {
      timestamp: rr(),
      ...t,
      message: t.message ? Mo(t.message, 2048) : t.message,
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
      span: gi(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = or(this._sdkProcessingMetadata, t, 2));
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
        W.warn("No client configured on scope - will not capture exception!");
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
        W.warn("No client configured on scope - will not capture message!");
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
      : (K && W.warn("No client configured on scope - will not capture event!"),
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
function bd() {
  return bn("defaultCurrentScope", () => new lt());
}
function Cd() {
  return bn("defaultIsolationScope", () => new lt());
}

const _i = e => e instanceof Promise && !e[Fc];

const Fc = Symbol("chained PromiseLike");

const Td = (e, t, n) => {
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
  return _i(r) && _i(e) ? r : Nd(e, r);
};

const Nd = (e, t) => {
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
    Object.assign(t, { [Fc]: true });
  }

  return t;
};

class Id {
  constructor(t, n) {
    let r;

    if (t) {
      (r = t);
    } else {
      (r = new lt());
    }

    let o;

    if (n) {
      (o = n);
    } else {
      (o = new lt());
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
    return nr(r)
      ? Td(
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
function yn() {
  const e = qr();
  const t = Gr(e);
  return (t.stack = t.stack || new Id(bd(), Cd()));
}
function Rd(e) {
  return yn().withScope(e);
}
function kd(e, t) {
  const n = yn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function yi(e) {
  return yn().withScope(() => e(yn().getIsolationScope()));
}
function Ad() {
  return {
    withIsolationScope: yi,
    withScope: Rd,
    withSetScope: kd,
    withSetIsolationScope: (e, t) => yi(t),
    getCurrentScope: () => yn().getScope(),
    getIsolationScope: () => yn().getIsolationScope(),
  };
}
function ws(e) {
  const t = Gr(e);
  return t.acs ? t.acs : Ad();
}
function dt() {
  const e = qr();
  return ws(e).getCurrentScope();
}
function ft() {
  const e = qr();
  return ws(e).getIsolationScope();
}
function Od() {
  return bn("globalScope", () => new lt());
}
function Ss(...e) {
  const t = qr();
  const n = ws(t);
  if (e.length === 2) {
    const [r, o] = e;
    return r ? n.withSetScope(r, o) : n.withScope(o);
  }
  return n.withScope(e[0]);
}
function Re() {
  return dt().getClient();
}
function Pd(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || Uc() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const Ld = "sentry.source";
const $d = "sentry.sample_rate";
const xd = "sentry.previous_trace_sample_rate";
const Md = "sentry.op";
const Dd = "sentry.origin";
const Hc = "sentry.profile_id";
const Bc = "sentry.exclusive_time";
const Ud = "gen_ai.conversation.id";
const Fd = 0;
const Hd = 1;
function Bd(e) {
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
const Vd = "_sentryScope";
const Wd = "_sentryIsolationScope";
function Vc(e) {
  const t = e;
  return { scope: t[Vd], isolationScope: Bd(t[Wd]) };
}
const vi = "sentry-";
function jd(e) {
  const t = zd(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((r, [o, s]) => {
    if (o.startsWith(vi)) {
      const a = o.slice(vi.length);
      r[a] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function zd(e) {
  if (!(!e || (!wt(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const r = Ei(n);

      Object.entries(r).forEach(([o, s]) => {
        t[o] = s;
      });

      return t;
    }, {})
      : Ei(e);
  }
}
function Ei(e) {
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
const qd = /^o(\d+)\./;

const Gd =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function Yd(e) {
  return e === "http" || e === "https";
}
function Nn(e, t = false) {
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
function Kd(e) {
  const t = Gd.exec(e);
  if (!t) {
    Cn(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, r, o = "", s = "", a = "", c = ""] = t.slice(1);
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

  return Wc({
    host: s,
    pass: o,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r,
  });
}
function Wc(e) {
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
function Xd(e) {
  if (!K) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (W.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? Yd(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (W.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (W.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (W.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function Zd(e) {
  return e.match(qd)?.[1];
}
function Jd(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let r;

  if (t.orgId) {
    (r = String(t.orgId));
  } else if (host) {
    (r = Zd(host));
  }

  return r;
}
function jc(e) {
  const t = typeof e == "string" ? Kd(e) : Wc(e);
  if (!(!t || !Xd(t))) {
    return t;
  }
}
function Qd(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const zc = 1;
function ef(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const o = isRemote ? spanId : Qr(e).parent_span_id;
  const s = Vc(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || Uc() : spanId;
  return { parent_span_id: o, span_id: a, trace_id: traceId };
}
function tf(e) {
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
        sampled: r === zc,
        attributes: s,
        ...o
      })
    );
  }
}
function Si(e) {
  if (typeof e == "number") {
    return bi(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return bi(e.getTime());
  }

  return St();
}
function bi(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function Qr(e) {
  if (of(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (rf(e)) {
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
      parent_span_id: nf(e),
      start_timestamp: Si(startTime),
      timestamp: Si(endTime) || undefined,
      status: af(status),
      op: attributes[Md],
      origin: attributes[Dd],
      links: tf(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function nf(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function rf(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function of(e) {
  return typeof e.getSpanJSON == "function";
}
function sf(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === zc;
}
function af(e) {
  if (!(!e || e.code === Fd)) {
    return e.code === Hd ? "ok" : e.message || "internal_error";
  }
}
const cf = "_sentryRootSpan";
const qc = lf;
function lf(e) {
  return e[cf] || e;
}
function Ci() {
  if (!wi) {
    Cn(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (wi = true);
  }
}
function uf(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = Re()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function Ti(e) {
  W.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function Ni(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (hf(n)) {
      if (e.description && Wn(e.description, n)) {
        if (K) {
          Ti(e);
        }

        return true;
      }
      continue;
    }
    const r = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !r) {
      continue;
    }
    const o = n.name ? e.description && Wn(e.description, n.name) : true;
    const s = n.op ? e.op && Wn(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => df(e.attributes?.[c], l)
        )
      : true;

    if (o && s && a) {
      if (K) {
        Ti(e);
      }

      return true;
    }
  }
  return false;
}
function df(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Wn(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e === t;
}
function ff(e, t) {
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
function hf(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const bs = "production";
const pf = "_frozenDsc";
function Gc(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const o = {
    environment: n.environment || bs,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: Jd(t),
  };

  t.emit("createDsc", o);
  return o;
}
function mf(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || Gc(n.traceId, e);
}
function gf(e) {
  const t = Re();
  if (!t) {
    return {};
  }
  const n = qc(e);

  const {
    data,
    description
  } = Qr(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[$d] ?? data[xd];
  function c(m) {
    if ((typeof a == "number" || typeof a == "string")) {
      (m.sample_rate = `${a}`);
    }

    return m;
  }
  const n_pf = n[pf];
  if (n_pf) {
    return c(n_pf);
  }
  const u = s?.get("sentry.dsc");
  const f = u && jd(u);
  if (f) {
    return c(f);
  }
  const d = Gc(e.spanContext().traceId, t);
  const p = data[Ld] ?? data["sentry.span.source"];

  if (p !== "url" && description) {
    (d.transaction = description);
  }

  if (uf()) {
    (d.sampled = String(sf(n)));

    (d.sample_rand = s?.get("sentry.sample_rand") ??
    Vc(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(d);
  t.emit("createDsc", d, n);
  return d;
}
function _f(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
const yf = Symbol.for("sentry.skipNormalization");
const vf = Symbol.for("sentry.overrideNormalizationDepth");
function Ef(e) {
  return !!e[yf];
}
function wf(e) {
  const e_vf = e[vf];
  return typeof e_vf == "number" ? e_vf : undefined;
}
function _t(e, t = 100, n = Infinity) {
  try {
    return Fo("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function Yc(e, t = 3, n = 100 * 1024) {
  const r = _t(e, t);
  return Tf(r) > n ? Yc(e, t - 1, n) : r;
}
function Fo(e, t, n = Infinity, r = Infinity, o = Nf()) {
  const [s, a] = o;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = Sf(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (Ef(t)) {
    return t;
  }
  const l = wf(t);
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
      return Fo("", m, u - 1, r, o);
    } catch {}
  }
  const d = Array.isArray(t) ? [] : {};
  let p = 0;
  const h = xc(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (p >= r) {
      d[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (d[m] = Fo(m, h_m, u - 1, r, o));
    p++;
  }
  a(t);
  return d;
}
function Sf(e, t) {
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
    if (Oc(t)) {
      return Rc(t);
    }
    if (ud(t)) {
      return "[SyntheticEvent]";
    }
    if (typeof t == "number" && !Number.isFinite(t)) {
      return `[${t}]`;
    }
    if (typeof t == "function") {
      return `[Function: ${Lt(t)}]`;
    }
    if (typeof t == "symbol") {
      return `[${String(t)}]`;
    }
    if (typeof t == "bigint") {
      return `[BigInt: ${String(t)}]`;
    }
    const n = bf(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function bf(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Cf(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Tf(e) {
  return Cf(JSON.stringify(e));
}
function Nf() {
  const e = new WeakSet();
  function t(r) {
    return e.has(r) ? true : (e.add(r), false);
  }
  function n(r) {
    e.delete(r);
  }
  return [t, n];
}
function In(e, t = []) {
  return [e, t];
}
function If(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function Ho(e, t) {
  const [, n] = e;
  for (const r of n) {
    const o = r[0].type;
    if (t(r, o)) {
      return true;
    }
  }
  return false;
}
function Rf(e, t) {
  return Ho(e, (n, r) => t.includes(r));
}
function Bo(e) {
  const t = Gr(ce);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function kf(e) {
  const [t, n] = e;
  let r = JSON.stringify(t);
  function o(s) {
    if (typeof r == "string") {
      (r = typeof s == "string" ? r + s : [Bo(r), s]);
    } else {
      r.push(typeof s == "string" ? Bo(s) : s);
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
        l = JSON.stringify(_t(c));
      }
      o(l);
    }
  }
  return typeof r == "string" ? r : Af(r);
}
function Af(e) {
  const t = e.reduce((o, s) => o + s.length, 0);

  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e) {
    n.set(o, r);
    (r += o.length);
  }
  return n;
}
function Of(e) {
  const t = typeof e.data == "string" ? Bo(e.data) : e.data;
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
const Kc = {
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
function Pf(e) {
  return e in Kc;
}
function Ii(e) {
  return Pf(e) ? Kc[e] : e;
}
function Xc(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function Lf(e, t, n, r) {
  const o = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: Nn(r) }),
    ...(o && { trace: o }),
  };
}
function $f(e, t) {
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
function xf(e, t, n, r) {
  const o = Xc(n);

  const s = {
    sent_at: new Date().toISOString(),
    ...(o && { sdk: o }),
    ...(!!r && t && { dsn: Nn(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return In(s, [a]);
}
function Mf(e, t, n, r) {
  const o = Xc(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  $f(e, n?.sdk);
  const a = Lf(e, o, r, t);
  delete e.sdkProcessingMetadata;
  return In(a, [[{ type: s }, e]]);
}
function Df(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  Uf(e, t);

  if (span) {
    Bf(e, span);
  }

  Vf(e, fingerprint);
  Ff(e, breadcrumbs);
  Hf(e, sdkProcessingMetadata);
}
function Ri(e, t) {
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
  An(e, "extra", extra);
  An(e, "tags", tags);
  An(e, "attributes", attributes);
  An(e, "user", user);
  An(e, "contexts", contexts);
  (e.sdkProcessingMetadata = or(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function An(e, t, n) {
  e[t] = or(e[t], n, 1);
}
function Zc(e, t) {
  const n = Od().getScopeData();

  if (e) {
    Ri(n, e.getScopeData());
  }

  if (t) {
    Ri(n, t.getScopeData());
  }

  return n;
}
function Uf(e, t) {
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
function Ff(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function Hf(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function Bf(e, t) {
  (e.contexts = { trace: ef(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: gf(t),
      ...e.sdkProcessingMetadata,
    });

  const n = qc(t);
  const r = Qr(n).description;

  if (r && !e.transaction && e.type === "transaction") {
    (e.transaction = r);
  }
}
function Vf(e, t) {
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
function lo(e) {
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
function Wf(e, t = true) {
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
function Jc(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([r, o]) => {
    if (o != null && !(r in n)) {
      (n[r] = o);
    }
  });
}
const uo = 0;
const ki = 1;
const Ai = 2;
function sr(e) {
  return new Kn((t) => {
    t(e);
  });
}
function Cs(e) {
  return new Kn((t, n) => {
    n(e);
  });
}
class Kn {
  constructor(t) {
    (this._state = uo);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new Kn((r, o) => {
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
    return new Kn((n, r) => {
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
    if (this._state === uo) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === ki && n[1](this._value);
        this._state === Ai && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === uo) {
          if (nr(a)) {
            a.then(r, o);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const r = (s) => {
      n(ki, s);
    };

    const o = (s) => {
      n(Ai, s);
    };

    try {
      t(r, o);
    } catch (s) {
      o(s);
    }
  }
}
function jf(e, t, n, r = 0) {
  try {
    const o = Vo(t, n, e, r);
    return nr(o) ? o : sr(o);
  } catch (o) {
    return Cs(o);
  }
}
function Vo(e, t, n, r) {
  const n_r = n[r];
  if (!e || !n_r) {
    return e;
  }
  const s = n_r({ ...e }, t);

  if (K && s === null) {
    W.log(`Event processor "${n_r.id || "?"}" dropped event`);
  }

  return nr(s) ? s.then(a => Vo(a, t, n, r + 1)) : Vo(s, t, n, r + 1);
}
let Ht;
let Oi;
let Pi;
let Ct;
function zf(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = ce;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const r = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const o = _debugIds ? Object.keys(_debugIds) : [];
  if (Ct && r.length === Oi && o.length === Pi) {
    return Ct;
  }
  (Oi = r.length);
  (Pi = o.length);
  (Ct = {});

  if (!Ht) {
    (Ht = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const f = Ht?.[l];
      if (f && Ct && c_l) {
        (Ct[f[0]] = c_l);

        if (Ht) {
          (Ht[l] = [f[0], c_l]);
        }
      } else if (c_l) {
        const d = e(l);
        for (let p = d.length - 1; p >= 0; p--) {
          const m = d[p]?.filename;
          if (m && Ct && Ht) {
            (Ct[m] = c_l);
            (Ht[l] = [m, c_l]);
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
function qf(e, t, n, r, o, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || Xe(),
    timestamp: t.timestamp || rr(),
  };

  const u = n.integrations || e.integrations.map(_ => _.name);

  Gf(l, e);
  Xf(l, u);

  if (o) {
    o.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    Yf(l, e.stackParser);
  }

  const f = Jf(r, n.captureContext);

  if (n.mechanism) {
    gn(l, n.mechanism);
  }

  const d = o ? o.getEventProcessors() : [];
  const p = Zc(s, f);
  const h = [...(n.attachments || []), ...p.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  Df(l, p);
  const m = [...d, ...p.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? sr(l) : jf(m, l, n)).then(
    _ => {
      if (_) {
        Kf(_);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? Zf(_, normalizeDepth, normalizeMaxBreadth) : _;
    }
  );
}
function Gf(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || bs);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = Mo(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = Mo(c.value, maxValueLength));
      }
    });
  }
}
function Yf(e, t) {
  const n = zf(t);
  e.exception?.values?.forEach((r) => {
    r.stacktrace?.frames?.forEach((o) => {
      if (o.filename) {
        (o.debug_id = n[o.filename]);
      }
    });
  });
}
function Kf(e) {
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
function Xf(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function Zf(e, t, n) {
  if (!e) {
    return null;
  }
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(o => ({
        ...o,
        ...(o.data && { data: _t(o.data, t, n) })
      })),
    }),
    ...(e.user && { user: _t(e.user, t, n) }),
    ...(e.contexts && { contexts: _t(e.contexts, t, n) }),
    ...(e.extra && { extra: _t(e.extra, t, n) }),
  };

  if (e.contexts?.trace &&
    r.contexts) {
    (r.contexts.trace = e.contexts.trace);

    e.contexts.trace.data &&
      (r.contexts.trace.data = _t(e.contexts.trace.data, t, n));
  }

  if (e.spans) {
    (r.spans = e.spans.map(o => ({
      ...o,
      ...(o.data && { data: _t(o.data, t, n) })
    })));
  }

  if (e.contexts?.flags &&
    r.contexts) {
    (r.contexts.flags = _t(e.contexts.flags, 3, n));
  }

  return r;
}
function Jf(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new lt();
  n.update(t);
  return n;
}
function Qf(e) {
  if (e) {
    return eh(e) ? { captureContext: e } : nh(e) ? { captureContext: e } : e;
  }
}
function eh(e) {
  return e instanceof lt || typeof e == "function";
}
const th = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function nh(e) {
  return Object.keys(e).some(t => th.includes(t));
}
function Qc(e, t) {
  return dt().captureException(e, Qf(t));
}
function el(e, t) {
  return dt().captureEvent(e, t);
}
function rh(e, t) {
  ft().setContext(e, t);
}
function Li(e) {
  ft().setUser(e);
}
function oh() {
  return ft().lastEventId();
}
function $i(e) {
  const t = ft();
  const { user } = Zc(t, dt());
  const { userAgent } = ce.navigator || {};
  const o = vd({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    _n(s, { status: "exited" });
  }

  tl();
  t.setSession(o);
  return o;
}
function tl() {
  const e = ft();
  const n = dt().getSession() || e.getSession();

  if (n) {
    Ed(n);
  }

  nl();
  e.setSession();
}
function nl() {
  const e = ft();
  const t = Re();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function fo(e = false) {
  if (e) {
    tl();
    return;
  }
  nl();
}
const sh = "7";
function rl(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function ih(e) {
  return `${rl(e)}${e.projectId}/envelope/`;
}
function ah(e, t) {
  const n = { sentry_version: sh };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function ch(e, t, n) {
  return t || `${ih(e)}?${ah(e, n)}`;
}
function lh(e, t) {
  const n = jc(e);
  if (!n) {
    return "";
  }
  const r = `${rl(n)}embed/error-page/`;
  let o = `dsn=${Nn(n)}`;
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
const xi = [];
function uh(e) {
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
function dh(e) {
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
  return uh(r);
}
function fh(e, t) {
  const n = {};

  t.forEach((r) => {
    if (r?.beforeSetup) {
      r.beforeSetup(e);
    }
  });

  t.forEach((r) => {
    if (r) {
      ol(e, r, n);
    }
  });

  return n;
}
function Mi(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function ol(e, t, n) {
  if (n[t.name]) {
    if (K) {
      W.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!xi.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    xi.push(t.name);
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

  if (K) {
    W.log(`Integration installed: ${t.name}`);
  }
}
function hh() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function ph() {
  return "npm";
}
function mh() {
  return (!hh() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function sl() {
  return typeof window !== "undefined" && (!mh() || gh());
}
function gh() {
  return ce.process?.type === "renderer";
}
function _h(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(sl() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function yh(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = Nn(r));
  }

  return In(s, [_h(e, o)]);
}
function Wo(e, t) {
  const n = t ?? vh(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();
  const o = yh(n, r._metadata, r.tunnel, e.getDsn(), r.sendDefaultPii);
  il().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(o);
}
function vh(e) {
  return il().get(e);
}
function il() {
  return bn("clientToLogBufferMap", () => new WeakMap());
}
function Eh(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(sl() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function wh(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = Nn(r));
  }

  return In(s, [Eh(e, o)]);
}
function al(e, t) {
  const n = t ?? Sh(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();
  const o = wh(n, r._metadata, r.tunnel, e.getDsn(), r.sendDefaultPii);
  cl().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(o);
}
function Sh(e) {
  return cl().get(e);
}
function cl() {
  return bn("clientToMetricBufferMap", () => new WeakMap());
}
function ll(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const Ts = Symbol.for("SentryBufferFullError");
function Ns(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function r(a) {
    t.delete(a);
  }
  function o(a) {
    if (!n()) {
      return Cs(Ts);
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
      return sr(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => ll(setTimeout(() => u(false), a)))];
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
const bh = 60 * 1000/* 1e3 */;
function Ch(e, t = Zr()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const r = Date.parse(`${e}`);
  return isNaN(r) ? bh : r - t;
}
function Th(e, t) {
  return e[t] || e.all || 0;
}
function Nh(e, t, n = Zr()) {
  return Th(e, t) > n;
}
function Ih(e, { statusCode: t, headers: n }, r = Zr()) {
  const o = { ...e };
  const s = n?.["x-sentry-rate-limits"];
  const a = n?.["retry-after"];
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
    if (a) {
      (o.all = r + Ch(a, r));
    } else if (t === 429) {
      (o.all = r + 60 * 1000/* 1e3 */);
    }
  }
  return o;
}
const ul = 64;
function Rh(e, t, n = Ns(e.bufferSize || ul)) {
  let r = {};
  const o = a => n.drain(a);
  function s(a) {
    const c = [];

    Ho(a, (d, p) => {
      const h = Ii(p);

      if (Nh(r, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(d);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = In(a[0], c);

    const u = (d) => {
      if (Rf(l, ["client_report"])) {
        if (K) {
          W.warn(
            `Dropping client report. Will not send outcomes (reason: ${d}).`
          );
        }

        return;
      }
      Ho(l, (p, h) => {
        e.recordDroppedEvent(d, Ii(h));
      });
    };

    const f = () => t({ body: kf(l) }).then(
      d => d.statusCode === 413
        ? (K &&
            W.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          d)
        : (K &&
            d.statusCode !== undefined &&
            (d.statusCode < 200 || d.statusCode >= 300) &&
            W.warn(
              `Sentry responded with status code ${d.statusCode} to sent event.`
            ),
          (r = Ih(r, d)),
          d),
      (d) => {
        u("network_error");

        if (K) {
          W.error("Encountered error running transport request:", d);
        }

        throw d;
      }
    );

    return n.add(f).then(
      d => d,
      (d) => {
        if (d === Ts) {
          if (K) {
            W.error("Skipped sending event because buffer is full.");
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
function kh(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: rr(), discarded_events: e },
  ];
  return In(t ? { dsn: t } : {}, [r]);
}
function dl(e) {
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
function Ah(e) {
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
    profile_id: data?.[Hc],
    exclusive_time: data?.[Bc],
    measurements: e.measurements,
    is_segment: true,
  };
}
function Oh(e) {
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
          ...(e.profile_id && { [Hc]: e.profile_id }),
          ...(e.exclusive_time && { [Bc]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const Di = "Not capturing exception because it's already been captured.";
const Ui = "Discarded session because of missing or non-string release";
const fl = Symbol.for("SentryInternalError");
const hl = Symbol.for("SentryDoNotSendEventError");
const Ph = 5000/* 5e3 */;
function Nr(e) {
  return { message: e, [fl]: true };
}
function ho(e) {
  return { message: e, [hl]: true };
}
function Fi(e) {
  return !!e && typeof e == "object" && fl in e;
}
function Hi(e) {
  return !!e && typeof e == "object" && hl in e;
}
function Bi(e, t, n, r, o) {
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
      (c = true);

      (a = ll(
            setTimeout(() => {
              o(e);
            }, Ph)
          ));
    }
  });

  e.on("flush", () => {
    o(e);
  });
}
class Lh {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = Ns(t.transportOptions?.bufferSize ?? ul));

    if (t.dsn) {
      (this._dsn = jc(t.dsn));
    } else if (K) {
      W.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const r = ch(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: r,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs);

    if (this._options.enableLogs) {
      Bi(this, "afterCaptureLog", "flushLogs", Dh, Wo);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      Bi(this, "afterCaptureMetric", "flushMetrics", Mh, al);
    }
  }
  captureException(t, n, r) {
    const o = Xe();
    if (fi(t)) {
      if (K) {
        W.log(Di);
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
    const s = { event_id: Xe(), ...r };
    const a = _s(t) ? t : String(t);
    const c = Yr(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, o)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, r) {
    const o = Xe();
    if (n?.originalException && fi(n.originalException)) {
      if (K) {
        W.log(Di);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = Vi(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || r, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    _n(t, { init: false });
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
    Wo(this);
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

    ol(this, t, this._integrations);

    if (!n) {
      Mi(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = Mf(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const o of n.attachments || []) {
      r = If(r, Of(o));
    }
    this.sendEnvelope(r).then(o => this.emit("afterSendEvent", t, o));
  }
  sendSession(t) {
    const { release, environment = bs } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (K) {
          W.warn(Ui);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (K) {
          W.warn(Ui);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const o = xf(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(o);
  }
  recordDroppedEvent(t, n, r = 1) {
    if (this._options.sendClientReports) {
      const o = `${t}:${n}`;

      if (K) {
        W.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`);
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
          W.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (K) {
      W.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = fh(this, integrations));
    Mi(this, integrations);
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
      _n(t, {
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
    const a = Object.keys(this._integrations);

    if (!n.integrations && a?.length) {
      (n.integrations = a);
    }

    this.emit("preprocessEvent", t, n);

    if (!t.type) {
      o.setLastEventId(t.event_id || n.event_id);
    }

    return qf(s, t, n, r, this, o).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...Pd(r) },
          ...c.contexts,
        });

      const l = mf(this, r);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, r = dt(), o = ft()) {
    if (K &&
      jo(t)) {
      W.log(`Captured error event \`${dl(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, r, o).then(
      s => s.event_id,
      (s) => {
        if (K) {
          if (Hi(s)) {
            W.log(s.message);
          } else if (Fi(s)) {
            W.warn(s.message);
          } else {
            W.warn(s);
          }
        }
      }
    );
  }
  _processEvent(t, n, r, o) {
    const s = this.getOptions();
    const { sampleRate } = s;
    const c = pl(t);
    const l = jo(t);
    const f = `before send for type \`${t.type || "error"}\``;
    const d = typeof sampleRate === "undefined" ? undefined : Qd(sampleRate);
    if (l && typeof d == "number" && Mr() > d) {
      this.recordDroppedEvent("sample_rate", "error");

      return Cs(
        ho(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        )
      );
    }
    const p = Vi(t.type);
    return this._prepareEvent(t, n, r, o)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", p);
          throw ho("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const g = xh(this, s, h, n);
        return $h(g, f);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", p);

        if (c) {
          const _ = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", _);
        }

        throw ho(`${f} returned \`null\`, will not send event.`);
      }
      const m = r.getSession() || o.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (c) {
        const w = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const _ = h.spans ? h.spans.length : 0;
        const y = w - _;

        if (y > 0) {
          this.recordDroppedEvent("before_send", "span", y);
        }
      }

      const h_transaction_info = h.transaction_info;
      if (c && h_transaction_info && h.transaction !== t.transaction) {
        const w = "custom";
        h.transaction_info = { ...h_transaction_info, source: w };
      }
      this.sendEvent(h, n);
      return h;
    })
      .then(null, (h) => {
        throw Hi(h) || Fi(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            Nr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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

        if (r === Ts) {
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
      W.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (K) {
        W.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (K) {
        W.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (K) {
      W.log("Sending outcomes:", t);
    }

    const n = kh(t, this._options.tunnel && Nn(this._dsn));
    this.sendEnvelope(n);
  }
}
function Vi(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function $h(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (nr(e)) {
    return e.then(
      (r) => {
        if (!Yn(r) && r !== null) {
          throw Nr(n);
        }
        return r;
      },
      (r) => {
        throw Nr(`${t} rejected with ${r}`);
      }
    );
  }
  if (!Yn(e) && e !== null) {
    throw Nr(n);
  }
  return e;
}
function xh(e, t, n, r) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !_f(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (jo(l) && beforeSend) {
    return beforeSend(l, r);
  }
  if (pl(l)) {
    if (c || ignoreSpans) {
      const u = Ah(l);
      if (ignoreSpans?.length &&
      Ni({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const f = c(u);

        if (f) {
          (l = or(n, Oh(f)));
        } else {
          Ci();
        }
      }
      if (l.spans) {
        const f = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            Ni({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            ff(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              f.push(m);
            } else {
              Ci();
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
function jo(e) {
  return e.type === undefined;
}
function pl(e) {
  return e.type === "transaction";
}
function Mh(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + ml(e.attributes);
}
function Dh(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + ml(e.attributes);
}
function ml(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * Wi(n[0]));
    } else if (Yr(n)) {
      (t += Wi(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function Wi(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function Uh(e) {
  return (
    tr(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function ji(e) {
  return Uh(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
function Fh(e, t) {
  if (t.debug === true) {
    if (K) {
      W.enable();
    } else {
      Cn(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  dt().update(t.initialScope);
  const r = new e(t);
  Hh(r);
  r.init();
  return r;
}
function Hh(e) {
  dt().setClient(e);
}
function Bh(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function gl(e, t, n = [t], r = "npm") {
  const o = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!o.name) {
    (o.name = `sentry.javascript.${t}`);

    (o.packages = n.map(s => ({
      name: `${r}:@sentry/${s}`,
      version: Jt
    })));

    (o.version = Jt);
  }
}
const Vh = 100;
function tn(e, t) {
  const n = Re();
  const r = ft();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = Vh } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: rr(), ...e };

  const l = beforeBreadcrumb ? Cn(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    r.addBreadcrumb(l, maxBreadcrumbs);
  }
}
let zi;
const Wh = "FunctionToString";
const qi = new WeakMap();

const zh = () => ({
  name: Wh,

  setupOnce() {
    zi = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...e) {
        const t = Es(this);
        const n = qi.has(Re()) && t !== undefined ? t : this;
        return zi.apply(n, e);
      };
    } catch {}
  },

  setup(e) {
    qi.set(e, true);
  }
});

const qh = [
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

const Gh = "EventFilters";

const Yh = (e = {}) => {
  let t;
  return {
    name: Gh,
    setup(n) {
      const r = n.getOptions();
      t = Gi(e, r);
    },
    processEvent(n, r, o) {
      if (!t) {
        const s = o.getOptions();
        t = Gi(e, s);
      }
      return Xh(n, t) ? null : n;
    },
  };
};

const Kh = (e = {}) => ({
  ...Yh(e),
  name: "InboundFilters"
});

function Gi(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : qh),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function Xh(e, t) {
  if (e.type) {
    if (e.type === "transaction" && Jh(e, t.ignoreTransactions)) {
      if (K) {
        W.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Yt(e)}`);
      }

      return true;
    }
  } else {
    if (Zh(e, t.ignoreErrors)) {
      if (K) {
        W.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Yt(e)}`);
      }

      return true;
    }
    if (np(e)) {
      if (K) {
        W.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Yt(e)}`);
      }

      return true;
    }
    if (Qh(e, t.denyUrls)) {
      if (K) {
        W.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Yt(e)}.
Url: ${Dr(e)}`);
      }

      return true;
    }
    if (!ep(e, t.allowUrls)) {
      if (K) {
        W.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Yt(e)}.
Url: ${Dr(e)}`);
      }

      return true;
    }
  }
  return false;
}
function Zh(e, t) {
  return t?.length ? dl(e).some(n => Jr(n, t)) : false;
}
function Jh(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? Jr(e_transaction, t) : false;
}
function Qh(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = Dr(e);
  return n ? Jr(n, t) : false;
}
function ep(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = Dr(e);
  return n ? Jr(n, t) : true;
}
function tp(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function Dr(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        r => r.mechanism?.parent_id === undefined && r.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? tp(n) : null;
  } catch {
    if (K) {
      W.error(`Cannot extract url for event ${Yt(e)}`);
    }

    return null;
  }
}
function np(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function rp(e, t, n, r, o, s) {
  if (!o.exception?.values || !s || !$t(s.originalException, Error)) {
    return;
  }
  const a =
    o.exception.values.length > 0
      ? o.exception.values[o.exception.values.length - 1]
      : undefined;

  if (a) {
    (o.exception.values = zo(
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
function zo(e, t, n, r, o, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if ($t(r[o], Error)) {
    Yi(a, c, r);
    const u = e(t, r[o]);
    const l_length = l.length;
    Ki(u, o, l_length, c);
    (l = zo(e, t, n, r[o], o, [u, ...l], u, l_length));
  }

  if (_l(r)) {
    r.errors.forEach((u, f) => {
      if ($t(u, Error)) {
        Yi(a, c, r);
        const d = e(t, u);
        const l_length = l.length;
        Ki(d, `errors[${f}]`, l_length, c);
        (l = zo(e, t, n, u, o, [d, ...l], d, l_length));
      }
    });
  }

  return l;
}
function _l(e) {
  return Array.isArray(e.errors);
}
function Yi(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(_l(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function Ki(e, t, n, r) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
function op(e) {
  const t = "console";
  const n = rn(t, e);
  on(t, sp);
  return n;
}
function sp() {
  if ("console" in ce) {
    Yu.forEach(e => {
      if (e in ce.console) {
        We(ce.console, e, t => {
          (xr[e] = t);

          return (...n) => {
            et("console", { args: n, level: e });
            xr[e]?.apply(ce.console, n);
          };
        });
      }
    });
  }
}
function ip(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const ap = "Dedupe";

const lp = () => {
  let e;
  return {
    name: ap,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (up(t, e)) {
          if (K) {
            W.warn(
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

function up(e, t) {
  return t ? !!(dp(e, t) || fp(e, t)) : false;
}
function dp(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !vl(e, t) ||
    !yl(e, t)
  );
}
function fp(e, t) {
  const n = Xi(t);
  const r = Xi(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !vl(e, t) ||
    !yl(e, t)
  );
}
function yl(e, t) {
  let n = ii(e);
  let r = ii(t);
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
function vl(e, t) {
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
function Xi(e) {
  return e.exception?.values?.[0];
}
const hp = "ConversationId";

const mp = () => ({
  name: hp,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = dt().getScopeData();
      const r = ft().getScopeData();
      const o = n.conversationId || r.conversationId;
      if (o) {
        const { op: op_1, data, description } = Qr(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(Ud, o);
      }
    });
  }
});

function El(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const Xn = ce;
function gp() {
  return "history" in Xn && !!Xn.history;
}
function _p() {
  if (!("fetch" in Xn)) {
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
function qo(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function yp() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!_p()) {
    return false;
  }
  if (qo(Xn.fetch)) {
    return true;
  }
  let e = false;
  const Xn_document = Xn.document;
  if (Xn_document && typeof Xn_document.createElement == "function") {
    try {
      const n = Xn_document.createElement("iframe");
      (n.hidden = true);
      Xn_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = qo(n.contentWindow.fetch));
      }

      Xn_document.head.removeChild(n);
    } catch (n) {
      if (K) {
        W.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function vp(e, t) {
  const n = "fetch";
  const r = rn(n, e);

  on(n, () => Ep(undefined, t));

  return r;
}
function Ep(e, t = false) {
  if (!t || yp()) {
    We(ce, "fetch", n => (...r) => {
      const o = new Error();
      const { method, url } = wp(r);

      const c = {
        args: r,
        fetchData: { method: method, url: url },
        startTimestamp: St() * 1000/* 1e3 */,
        virtualError: o,
        headers: Sp(r),
      };

      et("fetch", { ...c });

      return n.apply(ce, r).then(
        async l => {
          et("fetch", { ...c, endTimestamp: St() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          et("fetch", { ...c, endTimestamp: St() * 1000/* 1e3 */, error: l });

          if (tr(l) &&
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
function Ir(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function Zi(e) {
  return typeof e == "string"
    ? e
    : e
    ? Ir(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function wp(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: Zi(n),
      method: Ir(r, "method")
        ? String(r.method).toUpperCase()
        : Pc(n) && Ir(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: Zi(t),
    method: Ir(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function Sp(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (Pc(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const ue = ce;
let Go = 0;
function wl() {
  return Go > 0;
}
function bp() {
  Go++;

  setTimeout(() => {
    Go--;
  });
}
function vn(e, t = {}) {
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
    if (Es(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const r = function (...o) {
    try {
      const s = o.map(a => vn(a, t));
      return e.apply(this, s);
    } catch (s) {
      bp();

      Ss((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              Do(c, undefined);
              gn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: o });
            return c;
          }
        );

        Qc(s);
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
  $c(r, e);
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
function Ji() {
  const e = vs();
  const { referrer } = ue.document || {};
  const { userAgent } = ue.navigator || {};
  const r = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: r };
}
function Is(e, t) {
  const n = Rs(e, t);
  const r = { type: Rp(t), value: kp(t) };

  if (n.length) {
    (r.stacktrace = { frames: n });
  }

  if (r.type === undefined &&
    r.value === "") {
    (r.value = "Unrecoverable error caught");
  }

  return r;
}
function Cp(e, t, n, r) {
  const s = Re()?.getOptions().normalizeDepth;
  const a = $p(t);
  const c = { __serialized__: Yc(t, s) };
  if (a) {
    return { exception: { values: [Is(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: Kr(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
          value: Pp(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = Rs(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function po(e, t) {
  return { exception: { values: [Is(e, t)] } };
}
function Rs(e, t) {
  const n = t.stacktrace || t.stack || "";
  const r = Np(t);
  const o = Ip(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const Tp = /Minified React error #\d+;/i;
function Np(e) {
  return e && Tp.test(e.message) ? 1 : 0;
}
function Ip(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function Sl(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function Rp(e) {
  const t = e?.name;
  return !t && Sl(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function kp(e) {
  const t = e?.message;
  return Sl(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? ji(t.error)
      : ji(e)
    : "No error message";
}
function Ap(e, t, n, r) {
  const o = n?.syntheticException || undefined;
  const s = ks(e, t, o, r);
  gn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return sr(s);
}
function Op(e, t, n = "info", r, o) {
  const s = r?.syntheticException || undefined;
  const a = Yo(e, t, s, o);
  (a.level = n);

  if (r?.event_id) {
    (a.event_id = r.event_id);
  }

  return sr(a);
}
function ks(e, t, n, r, o) {
  let s;
  if (Ac(t) && t.error) {
    return po(e, t.error);
  }
  if (ci(t) || ad(t)) {
    const a = t;
    if ("stack" in t) {
      s = po(e, t);
    } else {
      const c = a.name || (ci(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = Yo(e, l, n, r));
      Do(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (tr(t)) {
    return po(e, t);
  }

  if (Yn(t) || Kr(t)) {
    (s = Cp(e, t, n, o));
    gn(s, { synthetic: true });
    return s;
  }

  (s = Yo(e, t, n, r));
  Do(s, `${t}`);
  gn(s, { synthetic: true });
  return s;
}
function Yo(e, t, n, r) {
  const o = {};
  if (r && n) {
    const s = Rs(e, n);

    if (s.length) {
      (o.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    gn(o, { synthetic: true });
  }
  if (_s(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (o.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return o;
  }
  (o.message = t);
  return o;
}
function Pp(e, { isUnhandledRejection: t }) {
  const n = pd(e);
  const r = t ? "promise rejection" : "exception";
  return Ac(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : Kr(e)
    ? `Event \`${Lp(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function Lp(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function $p(e) {
  return Object.values(e).find(t => t instanceof Error);
}
class xp extends Lh {
  constructor(t) {
    const n = Mp(t);
    const r = ue.SENTRY_SDK_SOURCE || ph();
    gl(n, "browser", ["browser"], r);

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
          enableLogs && Wo(this);
          u && al(this);
        }
      });
    }

    if (sendDefaultPii) {
      this.on("beforeSendSession", Bh);
    }
  }
  eventFromException(t, n) {
    return Ap(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return Op(
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
function Mp(e) {
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
const Dp = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Ue = ce;
const Up = 1000/* 1e3 */;
let Qi;
let Ko;
let Xo;
function Fp(e) {
  rn("dom", e);
  on("dom", Hp);
}
function Hp() {
  if (!Ue.document) {
    return;
  }
  const e = et.bind(null, "dom");
  const t = ea(e, true);
  Ue.document.addEventListener("click", t, false);
  Ue.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const o = Ue[n]?.prototype;

    if (o?.hasOwnProperty?.("addEventListener")) {
      We(o, "addEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const f = (u[a] = u[a] || { refCount: 0 });
            if (!f.handler) {
              const d = ea(e);
              (f.handler = d);
              s.call(this, a, d, l);
            }
            f.refCount++;
          } catch {}
        }
        return s.call(this, a, c, l);
      }));

      We(o, "removeEventListener", s => (function(a, c, l) {
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
function Bp(e) {
  if (e.type !== Ko) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== Xo) {
      return false;
    }
  } catch {}
  return true;
}
function Vp(e, t) {
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
function ea(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = Wp(n);
    if (Vp(n.type, r)) {
      return;
    }
    xt(n, "_sentryCaptured", true);

    if (r && !r._sentryId) {
      xt(r, "_sentryId", Xe());
    }

    const o = n.type === "keypress" ? "input" : n.type;

    if (!Bp(n)) {
      e({ event: n, name: o, global: t });
      (Ko = n.type);
      (Xo = r ? r._sentryId : undefined);
    }

    clearTimeout(Qi);

    (Qi = Ue.setTimeout(() => {
      (Xo = undefined);
      (Ko = undefined);
    }, Up));
  };
}
function Wp(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let dr;
function bl(e) {
  const t = "history";
  rn(t, e);
  on(t, jp);
}
function jp() {
  Ue.addEventListener("popstate", () => {
    const t = Ue.location.href;
    const n = dr;
    (dr = t);

    if (n === t) {
      return;
    }

    et("history", { from: n, to: t });
  });

  if (!gp()) {
    return;
  }

  function e(t) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : undefined;
      if (r) {
        const o = dr;
        const s = zp(String(r));
        (dr = s);

        if (o === s) {
          return t.apply(this, n);
        }

        et("history", { from: o, to: s });
      }
      return t.apply(this, n);
    };
  }
  We(Ue.history, "pushState", e);
  We(Ue.history, "replaceState", e);
}
function zp(e) {
  try {
    return new URL(e, Ue.location.origin).toString();
  } catch {
    return e;
  }
}
const Rr = {};
function qp(e) {
  const Rr_e = Rr[e];
  if (Rr_e) {
    return Rr_e;
  }
  let n = Ue[e];
  if (qo(n)) {
    return (Rr[e] = n.bind(Ue));
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
      if (Dp) {
        W.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          o
        );
      }
    }
  }
  return n && (Rr[e] = n.bind(Ue));
}
function Gp(e) {
  Rr[e] = undefined;
}
const Un = "__sentry_xhr_v3__";
function Yp(e) {
  rn("xhr", e);
  on("xhr", Kp);
}
function Kp() {
  if (!Ue.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, r) {
      const o = new Error();
      const s = St() * 1000/* 1e3 */;
      const a = wt(r[0]) ? r[0].toUpperCase() : undefined;
      const c = Xp(r[1]);
      if (!a || !c) {
        return t.apply(n, r);
      }
      (n[Un] = { method: a, url: c, request_headers: {} });

      if (a === "POST" &&
        c.match(/sentry_key/)) {
        (n.__sentry_own_request__ = true);
      }

      const l = () => {
        const n_Un = n[Un];
        if (n_Un && n.readyState === 4) {
          try {
            n_Un.status_code = n.status;
          } catch {}
          const f = {
            endTimestamp: St() * 1000/* 1e3 */,
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
          const f_Un = f[Un];

          if (f_Un && wt(p) && wt(h)) {
            (f_Un.request_headers[p.toLowerCase()] = h);
          }

          return u.apply(f, d);
        },
      }));

      return t.apply(n, r);
    },
  }));

  (XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
      apply(t, n, r) {
        const n_Un = n[Un];
        if (!n_Un) {
          return t.apply(n, r);
        }

        if (r[0] !== undefined) {
          (n_Un.body = r[0]);
        }

        const s = { startTimestamp: St() * 1000/* 1e3 */, xhr: n };
        et("xhr", s);
        return t.apply(n, r);
      },
    }));
}
function Xp(e) {
  if (wt(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
const Zp = 40;
function Jp(e, t = qp("fetch")) {
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
      Gp("fetch");
      throw l;
    } finally {
      (n -= a);
      r--;
    }
  }
  return Rh(e, o, Ns(e.bufferSize || Zp));
}
const En = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Qp = 30;
const em = 50;
function Zo(e, t, n, r) {
  const o = { filename: e, function: t === "<anonymous>" ? en : t, in_app: true };

  if (n !== undefined) {
    (o.lineno = n);
  }

  if (r !== undefined) {
    (o.colno = r);
  }

  return o;
}
const tm = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const nm =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const rm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const om = /at (.+?) ?\(data:(.+?),/;

const sm = (e) => {
  const t = e.match(om);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = tm.exec(e);
  if (n) {
    const [, o, s, a] = n;
    return Zo(o, en, Number(s), Number(a));
  }
  const r = nm.exec(e);
  if (r) {
    if (r[2]?.indexOf("eval") === 0) {
      const c = rm.exec(r[2]);

      if (c) {
        (r[2] = c[1]);
        (r[3] = c[2]);
        (r[4] = c[3]);
      }
    }
    const [s, a] = Cl(r[1] || en, r[2]);
    return Zo(a, s, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};

const im = [Qp, sm];

const am =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const cm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const lm = (e) => {
  const t = am.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = cm.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, r] = t;
    let o = t[1] || en;
    ([o, r] = Cl(o, r));
    return Zo(r, o, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const um = [em, lm];
const dm = [im, um];
const fm = Ic(...dm);

const Cl = (e, t) => {
  const n = e.includes("safari-extension");
  const r = e.includes("safari-web-extension");
  return n || r
    ? [
        e.includes("@") ? e.split("@")[0] : en,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const fr = 1024;
const hm = "Breadcrumbs";

const mm = (e = {}) => {
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
    name: hm,
    setup(n) {
      if (t.console) {
        op(ym(n));
      }

      if (t.dom) {
        Fp(_m(n, t.dom));
      }

      if (t.xhr) {
        Yp(vm(n));
      }

      if (t.fetch) {
        vp(Em(n));
      }

      if (t.history) {
        bl(wm(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", gm(n));
      }
    },
  };
};

function gm(e) {
  return n => {
    if (Re() === e) {
      tn(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: Yt(n),
        },
        { event: n }
      );
    }
  };
}
function _m(e, t) {
  return r => {
    if (Re() !== e) {
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
      c > fr) {
      En &&
          W.warn(
            `\`dom.maxStringLength\` cannot exceed ${fr}, but a value of ${c} was configured. Sentry will use ${fr} instead.`
          );

      (c = fr);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const r_event = r.event;
      const f = Sm(r_event) ? r_event.target : r_event;
      (o = Lc(f, { keyAttrs: a, maxStringLength: c }));
      (s = hd(f));
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

    tn(l, { event: r.event, name: r.name, global: r.global });
  };
}
function ym(e) {
  return function (n) {
    if (Re() !== e) {
      return;
    }
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: ip(n.level),
      message: di(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (r.message = `Assertion failed: ${
          di(n.args.slice(1), " ") || "console.assert"
        }`);

        (r.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    tn(r, { input: n.args, level: n.level });
  };
}
function vm(e) {
  return n => {
    if (Re() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    const s = n.xhr[Un];
    if (!startTimestamp || !endTimestamp || !s) {
      return;
    }
    const { method, url, status_code, body } = s;
    const f = { method: method, url: url, status_code: status_code };
    const d = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const p = { category: "xhr", data: f, type: "http", level: El(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", p, d);
    tn(p, d);
  };
}
function Em(e) {
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

        const a = {
          category: "fetch",
          data: n.fetchData,
          level: "error",
          type: "http",
        };

        e.emit("beforeOutgoingRequestBreadcrumb", a, s);
        tn(a, s);
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
          level: El(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        tn(l, c);
      }
    }
  };
}
function wm(e) {
  return n => {
    if (Re() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = lo(ue.location.href);
    let a = from ? lo(from) : undefined;
    const c = lo(to_2);

    if (!a?.path) {
      (a = s);
    }

    if (s.protocol === c.protocol && s.host === c.host) {
      (to_2 = c.relative);
    }

    if (s.protocol === a.protocol && s.host === a.host) {
      (from = a.relative);
    }

    tn({ category: "navigation", data: { from: from, to: to_2 } });
  };
}
function Sm(e) {
  return !!e && !!e.target;
}

const bm =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const Cm = "BrowserApiErrors";

const Nm = (e = {}) => {
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
    name: Cm,
    setupOnce() {
      if (t.setTimeout) {
        We(ue, "setTimeout", ta);
      }

      if (t.setInterval) {
        We(ue, "setInterval", ta);
      }

      if (t.requestAnimationFrame) {
        We(ue, "requestAnimationFrame", Im);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in ue) {
        We(XMLHttpRequest.prototype, "send", Rm);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : bm).forEach(o => km(o, t));
      }
    },
  };
};

function ta(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = vn(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${Lt(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function Im(e) {
  return function (t) {
    return e.apply(this, [
      vn(t, {
        mechanism: {
          data: { handler: Lt(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function Rm(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((o) => {
      if (o in n &&
        typeof n[o] == "function") {
        We(n, o, s => {
          const a = {
              mechanism: {
                data: { handler: Lt(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${o}`,
              },
            };

          const c = Es(s);

          if (c) {
            (a.mechanism.data.handler = Lt(c));
          }

          return vn(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function km(e, t) {
  const r = ue[e]?.prototype;

  if (r?.hasOwnProperty?.("addEventListener")) {
    We(r, "addEventListener", o => (function(s, a, c) {
      try {
        if (Am(a)) {
          (a.handleEvent = vn(a.handleEvent, {
              mechanism: {
                data: { handler: Lt(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        Om(this, s, a);
      }

      return o.apply(this, [
        s,
        vn(a, {
          mechanism: {
            data: { handler: Lt(a), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    We(r, "removeEventListener", o => (function(s, a, c) {
      try {
        const a_sentry_wrapped = a.__sentry_wrapped__;

        if (a_sentry_wrapped) {
          o.call(this, s, a_sentry_wrapped, c);
        }
      } catch {}
      return o.call(this, s, a, c);
    }));
  }
}
function Am(e) {
  return typeof e.handleEvent == "function";
}
function Om(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const Pm = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof ue.document === "undefined") {
          if (En) {
            W.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        $i({ ignoreDuration: true });
        fo();
        const n = ft();
        let r = n.getUser();

        n.addScopeListener((o) => {
          const s = o.getUser();

          if ((r?.id !== s?.id || r?.ip_address !== s?.ip_address)) {
            fo();
            (r = s);
          }
        });

        if (t === "route") {
          bl(({ from: o, to: s }) => {
            if (o !== s) {
              $i({ ignoreDuration: true });
              fo();
            }
          });
        }
      },
    };
  };

const Lm = "CultureContext";

const xm = () => ({
  name: Lm,

  preprocessEvent(e) {
    const t = na();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = na();

    if (t) {
      Jc(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function na() {
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
const Mm = "GlobalHandlers";

const Um = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: Mm,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        Fm(n);
        ra("onerror");
      }

      if (t.onunhandledrejection) {
        Hm(n);
        ra("onunhandledrejection");
      }
    },
  };
};

function Fm(e) {
  rd((t) => {
    const { stackParser, attachStacktrace } = Tl();
    if (Re() !== e || wl()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = Wm(ks(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    el(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function Hm(e) {
  sd((t) => {
    const { stackParser, attachStacktrace } = Tl();
    if (Re() !== e || wl()) {
      return;
    }
    const o = Bm(t);
    const s = Yr(o) ? Vm(o) : ks(stackParser, o, undefined, attachStacktrace, true);
    (s.level = "error");

    el(s, {
      originalException: o,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function Bm(e) {
  if (Yr(e)) {
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
function Vm(e) {
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
function Wm(e, t, n, r) {
  const o = (e.exception = e.exception || {});
  const s = (o.values = o.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: r,
      lineno: n,
      filename: jm(t) ?? vs(),
      function: en,
      in_app: true,
    });
  }

  return e;
}
function ra(e) {
  if (En) {
    W.log(`Global Handler attached: ${e}`);
  }
}
function Tl() {
  return Re()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function jm(e) {
  if (!(!wt(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${Wf(e, false)}>` : e;
  }
}

const zm = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = Ji();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = Ji();
    Jc(e, {
      "url.full": t.url || undefined,
      "http.request.header.user_agent": t.headers["User-Agent"],
      "http.request.header.referer": t.headers.Referer,
    });
  }
});

const qm = "cause";
const Gm = 5;
const Ym = "LinkedErrors";

const Xm = (e = {}) => {
  const t = e.limit || Gm;
  const n = e.key || qm;
  return {
    name: Ym,
    preprocessEvent(r, o, s) {
      const a = s.getOptions();
      rp(Is, a.stackParser, n, t, r, o);
    },
  };
};

function Zm() {
  return Jm()
    ? (En &&
        Cn(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function Jm() {
  if (typeof ue.window === "undefined") {
    return false;
  }
  const e = ue;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = vs();
  return !(
    ue === ue.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function Qm(e) {
  return [Kh(), zh(), mp(), Nm(), mm(), Um(), Xm(), lp(), zm(), xm(), Pm()];
}
function eg(e = {}) {
  const t = !e.skipBrowserExtensionCheck && Zm();
  let n = e.defaultIntegrations == null ? Qm() : e.defaultIntegrations;
  const r = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: td(e.stackParser || fm),
    integrations: dh({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || Jp,
  };
  return Fh(xp, r);
}
function oa(e = {}) {
  const ue_document = ue.document;
  const n = ue_document?.head || ue_document?.body;
  if (!n) {
    if (En) {
      W.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const r = dt();
  const s = Re()?.getDsn();
  if (!s) {
    if (En) {
      W.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...r.getUser(), ...e.user },
      eventId: e.eventId || oh(),
    };

  const c = ue.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = lh(s, a));
  const { onLoad, onClose } = a;

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
let Mt;
let me;
let mo;
let sa;
let wn = 0;
const Nl = [];
const ve = X;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = ve;

function Rn(e, t) {
  if (ve.__h) {
    ve.__h(me, e, wn || t);
  }

  (wn = 0);
  const n = me.__H || (me.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function L(e) {
  (wn = 1);
  return As(kl, e);
}
function As(e, t, n) {
  const r = Rn(Mt++, 2);
  (r.t = e);

  if (!r.__c &&
    ((r.__ = [
      n ? n(t) : kl(undefined, t),
      c => {
        const l = r.__N ? r.__N[0] : r.__[0];
        const u = r.t(l, c);

        if (l !== u) {
          (r.__N = [u, r.__[1]]);
          r.__c.setState({});
        }
      },
    ]),
    (r.__c = me),
    !me.__f)) {
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
    me.__f = true;

    var {
      shouldComponentUpdate,
      componentWillUpdate
    } = me;

    (me.componentWillUpdate = function (c, l, u) {
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

    (me.shouldComponentUpdate = o);
  }

  return r.__N || r.__;
}
function F(e, t) {
  const n = Rn(Mt++, 3);

  if (!ve.__s && Ps(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    me.__H.__h.push(n);
  }
}
function Dt(e, t) {
  const n = Rn(Mt++, 4);

  if (!ve.__s && Ps(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    me.__h.push(n);
  }
}
function O(e) {
  (wn = 5);

  return we(() => ({
    current: e
  }), []);
}
function Os(e, t, n) {
  (wn = 6);

  Dt(
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
function we(e, t) {
  const n = Rn(Mt++, 7);

  if (Ps(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function N(e, t) {
  (wn = 8);

  return we(() => e, t);
}
function eo(e) {
  const t = me.context[e.__c];
  const n = Rn(Mt++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(me)), t.props.value) : e.__;
}
function Il(e, t) {
  if (ve.useDebugValue) {
    ve.useDebugValue(t ? t(e) : e);
  }
}
function Rl() {
  const e = Rn(Mt++, 11);
  if (!e.__) {
    for (var t = me.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function tg() {
  for (let e; (e = Nl.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(kr);
        e.__H.__h.forEach(Jo);
        (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []);
        ve.__e(t, e.__v);
      }
    }
  }
}

(ve.__b = e => {
  (me = null);

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

  (Mt = 0);
  const t = (me = e.__c).__H;

  if (t) {
    if (mo === me) {
      (t.__h = []);
      (me.__h = []);

      t.__.forEach(n => {
        if (n.__N) {
          (n.__ = n.__N);
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.forEach(kr);
      t.__h.forEach(Jo);
      (t.__h = []);
      (Mt = 0);
    }
  }

  (mo = me);
});

(ve.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((Nl.push(e_c) !== 1 && sa === ve.requestAnimationFrame) ||
          ((sa = ve.requestAnimationFrame) || ng)(tg));

    e_c.__H.__.forEach(n => {
      if (n.u) {
        (n.__H = n.u);
      }

      (n.u = undefined);
    });
  }

  mo = null;
  me = null;
});

(ve.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.forEach(kr);

      (n.__h = n.__h.filter(r => !r.__ || Jo(r)));
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
          kr(r);
        } catch (o) {
          t = o;
        }
      });

    (e_c.__H = undefined);
    t && ve.__e(t, e_c.__v);
  }
});

const fa = typeof requestAnimationFrame == "function";
function ng(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (fa) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (fa) {
    (t = requestAnimationFrame(n));
  }
}
function kr(e) {
  const t = me;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (me = t);
}
function Jo(e) {
  const t = me;
  (e.__c = e.__());
  (me = t);
}
function Ps(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, r) => n !== e[r]);
}
function kl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Qo(e, t) {
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
function Ol(e, t) {
  const n = t();
  const r = L({ t: { __: n, u: t } });
  const o = r[0].t;
  const [, s] = r;

  Dt(
    () => {
      (o.__ = n);
      (o.u = t);

      if (go(o)) {
        s({ t: o });
      }
    },
    [e, n, t]
  );

  F(
    () => {
      if (go(o)) {
        s({ t: o });
      }

      return e(() => {
        if (go(o)) {
          s({ t: o });
        }
      });
    },
    [e]
  );

  return n;
}
function go(e) {
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
function Pl(e) {
  e();
}
function Ll(e) {
  return e;
}
function $l() {
  return [false, Pl];
}
const xl = Dt;

class es {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return Qo(this.props, e) || Qo(this.state, t);
    }
}

function to(e, t) {
  function n(o) {
    const s = this.props.ref;
    const a = s == o.ref;

    if (!a && s) {
      if (s.call) {
        s(null);
      } else {
        (s.current = null);
      }
    }

    if (t) {
      if (!!t(this.props, o)) {
        return !a;
      }
    }

    return Qo(this.props, o);
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
((es.prototype = new Ke()).isPureReactComponent = true);

const {
  __b: _b_1,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2
} = X;

X.__b = e => {
  if (e.type && e.type.__f && e.ref) {
    (e.props.ref = e.ref);
    (e.ref = null);
  }

  if (_b_1) {
    _b_1(e);
  }
};
const rg =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Ml(e) {
  class t {
    constructor(n) {
      const r = Al({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      Gn(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = rg);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const pa = (e, t) => e == null ? null : Qe(Qe(e).map(t));

const og = {
  map: pa,
  forEach: pa,
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

X.__e = (e, t, n, r) => {
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
function Dl(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(r => {
      if (typeof r.__c == "function") {
        r.__c();
      }
    }),
        (e.__c.__H = null));

    (e = Al({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(r => Dl(r, t, n)));
  }

  return e;
}
function Ul(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(r => Ul(r, t, n)));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class Ce {
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
        this.__v.__k[0] = Dl(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const o = t.__a && tt(Ie, null, e.fallback);

    if (o) {
      (o.__u &= -33);
    }

    return [tt(Ie, null, t.__a ? null : e.children), o];
  }
}

function Fl(e) {
  const t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function ne(e) {
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
    return o ? tt(o, a) : null;
  }
  (s.displayName = "Lazy");
  (s.__f = true);
  return s;
}

class Fn {
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

(X.unmount = e => {
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

((Ce.prototype = new Ke()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    (r.o = []);
  }

  r.o.push(t_c);
  const o = Fl(r.__v);

  const a = () => {
    if (!s) {
      (s = true);
      (t_c.__R = null);
      o ? o(c) : c();
    }
  };

  t_c.__R = a;
  var c = () => {
    if (!--r.__u) {
      if (r.state.__a) {
        const l = r.state.__a;
        r.__v.__k[0] = Ul(l, l.__c.__P, l.__c.__O);
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

  e.then(a, a);
});

const ga = (e, t, n) => {
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
function ig(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function ag(e) {
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

  Gn(tt(ig, { context: t.context }, e.__v), t.v);
}

export function $(e, t) {
  const n = tt(ag, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((Fn.prototype = new Ke()).__a = function (e) {
  const t = this;
  const n = Fl(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return o => {
    const s = () => {
      if (t.props.revealOrder) {
        r.push(o);
        ga(t, e, r);
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

(Fn.prototype.componentDidUpdate = Fn.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        ga(e, n, t);
      });
    });

const Hl =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const cg =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const lg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const ug = /[A-Z0-9]/g;
const dg = typeof document !== "undefined";

const fg = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function Bl(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Gn(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function hg(e, t, n) {
  bc(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
(Ke.prototype.isReactComponent = {});

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach(e => {
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

function pg() {}
function mg() {
  return this.cancelBubble;
}
function gg() {
  return this.defaultPrevented;
}
X.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.persist = pg);
  (e.isPropagationStopped = mg);
  (e.isDefaultPrevented = gg);
  (e.nativeEvent = e);
  return e.nativeEvent;
};
let Ls;

const _g = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};

X.vnode = e => {
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
            (dg && a === "children" && type === "noscript") ||
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
                  fg(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (lg.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && cg.test(a)) {
            (a = a.replace(ug, "-$&").toLowerCase());
          } else if (props_a === null) {
            (props_a = undefined);
          }

          if (l === "oninput" && o[(a = l)]) {
            (a = "oninputCapture");
          }

          (o[a] = props_a);
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
        Object.defineProperty(o, "className", _g);
      } else if (((props.className && !props.class) || (props.class && props.className))) {
        (o.class = o.className = props.className);
      }

      (t.props = o);
    })(e);
  }

  (e.$$typeof = Hl);

  if (vnode) {
    vnode(e);
  }
};
X.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (Ls = e.__c);
};
X.diffed = e => {
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

  (Ls = null);
};

const yg = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return Ls.__n[e.__c].props.value;
        },
        useCallback: N,
        useContext: eo,
        useDebugValue: Il,
        useDeferredValue: Ll,
        useEffect: F,
        useId: Rl,
        useImperativeHandle: Os,
        useInsertionEffect: xl,
        useLayoutEffect: Dt,
        useMemo: we,
        useReducer: As,
        useRef: O,
        useState: L,
        useSyncExternalStore: Ol,
        useTransition: $l,
      },
    },
  };

const Vl = "18.3.1";
function vg(e) {
  return tt.bind(null, e);
}
function ir(e) {
  return !!e && e.$$typeof === Hl;
}
function Eg(e) {
  return ir(e) && e.type === Ie;
}
function wg(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function Sg(e) {
  return ir(e) ? Cc(...arguments) : e;
}
function Wl(e) {
  return !!e.__k && (Gn(null, e), true);
}
function bg(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Cg = (e, t) => e(t);

const Tg = (e, t) => e(t);

const jl = Ie;
const Ng = ir;

const Hn = {
  useState: L,
  useId: Rl,
  useReducer: As,
  useEffect: F,
  useLayoutEffect: Dt,
  useInsertionEffect: xl,
  useTransition: $l,
  useDeferredValue: Ll,
  useSyncExternalStore: Ol,
  startTransition: Pl,
  useRef: O,
  useImperativeHandle: Os,
  useMemo: we,
  useCallback: N,
  useContext: eo,
  useDebugValue: Il,
  version: "18.3.1",
  Children: og,
  render: Bl,
  hydrate: hg,
  unmountComponentAtNode: Wl,
  createPortal: $,
  createElement: tt,
  createContext: Sn,
  createFactory: vg,
  cloneElement: Sg,
  createRef: Vu,
  Fragment: Ie,
  isValidElement: ir,
  isElement: Ng,
  isFragment: Eg,
  isMemo: wg,
  findDOMNode: bg,
  Component: Ke,
  PureComponent: es,
  memo: to,
  forwardRef: Ml,
  flushSync: Tg,
  unstable_batchedUpdates: Cg,
  StrictMode: jl,
  Suspense: Ce,
  SuspenseList: Fn,
  lazy: ne,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: yg,
};

function Ig(e) {
  const t = { ...e };
  gl(t, "react");
  rh("react", { version: Vl });
  return eg(t);
}
function Rg(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function kg(e, t) {
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
function Ag(e, { componentStack: t }, n) {
  if (Rg(Vl) && tr(e) && t) {
    const r = new Error(e.message);
    (r.name = `React ErrorBoundary ${e.name}`);
    (r.stack = t);
    kg(e, r);
  }
  return Ss(r => {
    r.setContext("react", { componentStack: t });
    return Qc(e, n);
  });
}
const Og = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const _o = { componentStack: null, error: null, eventId: null };
class Pg extends Ke {
  constructor(t) {
    super(t);
    (this.state = _o);
    (this._openFallbackReportDialog = true);
    const n = Re();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (r) => {
        if (!r.type &&
          this._lastEventId &&
          r.event_id === this._lastEventId) {
          oa({ ...t.dialogOptions, eventId: this._lastEventId });
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

    Ss((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const f = Ag(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, f);
      }

      if (showDialog) {
        (this._lastEventId = f);
        this._openFallbackReportDialog && oa({ ...dialogOptions, eventId: f });
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
      if (this.state === _o) {
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

    this.setState(_o);
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
    return ir(o)
      ? o
      : (fallback && Og && W.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
Ig({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function Lg(e) {
  return {
    render(t) {
      Bl(t, e);
    },
    unmount() {
      Wl(e);
    },
  };
}
const $g = "modulepreload";

const xg = e => `/${e}`;

const wa = {};

const Z = (t, n, r) => {
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
    const a = document.querySelector("meta[property=csp-nonce]");
    const c = a?.nonce || a?.getAttribute("nonce");
    o = l(
      n.map((u) => {
        (u = xg(u));

        if (u in wa) {
          return;
        }

        wa[u] = true;
        const f = u.endsWith(".css");
        const d = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${d}`)) {
          return;
        }
        const p = document.createElement("link");
        (p.rel = f ? "stylesheet" : $g);

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

const Mg = {};
function hr(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function zl(e, t, n) {
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
  (e = ts(e.replace(o, "")));
  (t = ts(t || ""));
  for (let f = Math.max(e.length, t.length), d = 0; d < f; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const p = t[d].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[d].match(/[+*?]+$/) || Mg)[0] || "";
      const m = ~h.indexOf("+");
      const g = ~h.indexOf("*");
      const w = e[d] || "";
      if (!w && !g && (!h.includes("?") || m)) {
        r = false;
        break;
      }
      (a[p] = decodeURIComponent(w));

      if (m || g) {
        a[p] = e.slice(d).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[d] !== e[d]) {
      r = false;
      break;
    }
  }
  return (n.default === true || r !== false) && a;
}
function Dg(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Ug(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : ts(n.props.path).map(Fg).join(""))(e));

  return e.props;
}
function ts(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Fg(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const Hg = {};
const Qt = [];
const jn = [];
let Ve = null;
const $s = { url: xs() };
const ql = Sn($s);
function ar() {
  const e = eo(ql);
  if (e === $s) {
    const t = L()[1];
    F(() => {
      jn.push(t);

      return () => jn.splice(jn.indexOf(t), 1);
    }, []);
  }
  return [e, je];
}
function xs() {
  let e;
  return `${(e =
  Ve && Ve.location
    ? Ve.location
    : Ve && Ve.getCurrentLocation
    ? Ve.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : Hg).pathname || ""}${e.search || ""}`;
}
function je(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let r = Qt.length; r--; ) {
      if (Qt[r].canRoute(n)) {
        return true;
      }
    }
    return false;
  })(e)) {
    ((n, r = "push") => {
      if (Ve && Ve[r]) {
        Ve[r](n);
      } else if (typeof history !== "undefined" &&
          history[`${r}State`]) {
        history[`${r}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return Gl(e);
}
function Gl(e) {
  let t = false;
  for (let n = 0; n < Qt.length; n++) {
    if (Qt[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function Bg(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return je(t);
    }
  }
}
function Vg(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function Wg(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (Bg(e_target)) {
          return Vg(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Yl(e) {
  if (e.history) {
    (Ve = e.history);
  }

  (this.state = { url: e.url || xs() });
}
hr((Yl.prototype = new Ke()), {
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

    if (!Sa) {
      (Sa = true);

      Ve ||
        addEventListener("popstate", () => {
          Gl(xs());
        });

      addEventListener("click", Wg);
    }

    Qt.push(this);

    if (Ve) {
      (this.u = Ve.listen(t => {
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

    Qt.splice(Qt.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(Ug).sort(Dg);

    for (const r of e) {
      const o = zl(t, r.props.path, r.props);
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
    const c = this.g(Qe(e.children), t_url);

    if (c) {
      (r = Cc(
            c[0],
            hr(hr({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      hr(
        $s,
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
      for (let l = jn.length; l--; ) {
        jn[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return tt(ql.Provider, { value: a }, r);
  },
});

const ba = (e) => {
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

const jg = e => e ? ba(e) : ba;

const zg = e => e;

function qg(e, t = zg) {
  const n = Hn.useSyncExternalStore(
    e.subscribe,
    Hn.useCallback(() => t(e.getState()), [e, t]),
    Hn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Hn.useDebugValue(n);
  return n;
}

const Ca = (e) => {
  const t = jg(e);

  const n = r => qg(t, r);

  Object.assign(n, t);
  return n;
};

const rt = e => e ? Ca(e) : Ca;

function Ms(e, t) {
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

const ns = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return ns(r)(n);
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
          return ns(r)(n);
        },
      };
    }
  };

const Kl = (e, t) => (n, r, o) => {
  let s = {
      storage: Ms(() => localStorage),
      partialize: g => g,
      version: 0,
      merge: (g, w) => ({
        ...w,
        ...g
      }),
      ...t,
    };

  let a = false;
  const c = new Set();
  const l = new Set();
  let s_storage = s.storage;
  if (!s_storage) {
    return e(
      (...g) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        );

        n(...g);
      },
      r,
      o
    );
  }

  const f = () => {
      const g = s.partialize({ ...r() });
      return s_storage.setItem(s.name, { state: g, version: s.version });
    };

  const o_setState = o.setState;
  o.setState = (g, w) => {
    o_setState(g, w);
    return f();
  };
  const p = e((...g) => {
    n(...g);
    return f();
  }, r, o);
  o.getInitialState = () => p;
  let h;
  const m = () => {
    let w;
    if (!s_storage) {
      return;
    }
    (a = false);

    c.forEach((y) => {
      let E;
      return y((E = r()) != null ? E : p);
    });

    const _ =
      ((w = s.onRehydrateStorage) == null
        ? undefined
        : w.call(s, (g = r()) != null ? g : p)) || undefined;
    return ns(s_storage.getItem.bind(s_storage))(s.name)
      .then((y) => {
        if (y) {
          if (typeof y.version == "number" && y.version !== s.version) {
            if (s.migrate) {
              const E = s.migrate(y.state, y.version);
              return E instanceof Promise ? E.then(I => [true, I]) : [true, E];
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
      let E;
      const [I, S] = y;
      (h = s.merge(S, (E = r()) != null ? E : p));
      n(h, true);

      if (I) {
        return f();
      }
    })
      .then(() => {
      _?.(h, undefined);
      (h = r());
      (a = true);

      l.forEach(y => y(h));
    })
      .catch((y) => {
        _?.(undefined, y);
      });
  };

  (o.persist = {
    setOptions: (g) => {
      (s = { ...s, ...g });

      if (g.storage) {
        (s_storage = g.storage);
      }
    },
    clearStorage: () => {
      s_storage?.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => m(),
    hasHydrated: () => a,
    onHydrate: g => {
      c.add(g);

      return () => {
        c.delete(g);
      };
    },
    onFinishHydration: g => {
      l.add(g);

      return () => {
        l.delete(g);
      };
    },
  });

  if (!s.skipHydration) {
    m();
  }

  return h || p;
};

const Xl = rt((e, t) => ({
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

const Yg = rt((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const Kg = rt((e, t) => ({
  navigatedInApp: false,

  markNavigated: () => {
    if (!t().navigatedInApp) {
      e({ navigatedInApp: true });
    }
  }
}));

const He = {
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

function Ne(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}

const U = {
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

const Xg = 4000/* 4e3 */;

const Ur = rt((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const o = n.duration ?? Xg;

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

const yt = {
  success: (e, t) => Ur.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => Ur.getState().addToast({ type: "error", message: e, duration: t }),
};

const Zg = {
  [U.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [U.FILE_TOO_LARGE]: "Файл слишком большой",
  [U.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [U.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [U.VIDEO_REQUIRES_VERIFICATION]:
    "Видео — только для верифицированных пользователей",
  [U.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [U.UNAUTHORIZED]: "Требуется авторизация",
  [U.ACCESS_DENIED]: "Доступ запрещён",
  [U.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [U.TIMEOUT]: "Превышено время ожидания",
  [U.VALIDATION_ERROR]: "Проверьте правильность введённых данных",
  [U.ENTITY_NOT_FOUND]: "Запрошенные данные не найдены",
  [U.ENTITY_ALREADY_EXISTS]: "Такая запись уже существует",
  [U.CAPTCHA_FAILED]: "Проверка captcha не пройдена. Попробуйте снова",
  [U.OTP_INVALID]: "Неверный код. Попробуйте снова",
  [U.ACCOUNT_DEACTIVATED]: "Аккаунт деактивирован",
  [U.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED]:
    "Почта этого домена не поддерживается",
  [U.ACCOUNT_INVALID_CREDENTIALS]: "Неверный email или пароль",
  [U.ACCOUNT_TEMPORARILY_LOCKED]:
    "Аккаунт временно заблокирован. Попробуйте позже",
  [U.ACCOUNT_CURRENT_PASSWORD_INCORRECT]: "Неверный текущий пароль",
  [U.MISSING_FLOW_TOKEN]: "Сессия истекла. Начните заново",
  [U.PROFILE_USERNAME_TAKEN]: "Этот username уже занят",
  [U.PROFILE_USERNAME_RESERVED]: "Этот username зарезервирован системой",
};

const Jg = {
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

const Qg = [
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

const e_ = {
  INVALID_EMAIL: U.VALIDATION_ERROR,
  INVALID_PASSWORD: U.VALIDATION_ERROR,
  EMAIL_DOMAIN_NOT_ALLOWED: U.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED,
  CONFLICT: U.ENTITY_ALREADY_EXISTS,
  INVALID_CREDENTIALS: U.ACCOUNT_INVALID_CREDENTIALS,
  USER_INACTIVE: U.ACCOUNT_DEACTIVATED,
  TURNSTILE_TOKEN_MISSING: U.CAPTCHA_FAILED,
  TURNSTILE_API_ERROR: U.CAPTCHA_FAILED,
  TURNSTILE_ERROR: U.CAPTCHA_FAILED,
  TURNSTILE_VERIFICATION_FAILED: U.CAPTCHA_FAILED,
  INVALID_FLOW_TOKEN: U.MISSING_FLOW_TOKEN,
  NO_PENDING_OTP: U.MISSING_FLOW_TOKEN,
  INVALID_OTP_FORMAT: U.OTP_INVALID,
  ACCOUNT_NOT_FOUND: U.ENTITY_NOT_FOUND,
  CURRENT_PASSWORD_INCORRECT: U.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  INVALID_OLD_PASSWORD: U.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  USERNAME_TAKEN: U.PROFILE_USERNAME_TAKEN,
  USERNAME_RESERVED: U.PROFILE_USERNAME_RESERVED,
  PROFILE_NOT_FOUND: U.ENTITY_NOT_FOUND,
  USER_NOT_FOUND: U.ENTITY_NOT_FOUND,
  FILE_NOT_FOUND: U.ENTITY_NOT_FOUND,
  NOT_FOUND: U.ENTITY_NOT_FOUND,
  FORBIDDEN: U.ACCESS_DENIED,
  TOO_MANY_REQUESTS: U.RATE_LIMIT_EXCEEDED,
};

function Zl(e) {
  return e_[e] ?? e;
}
function t_(e) {
  const Jg_e = Jg[e];
  if (Jg_e) {
    return Jg_e;
  }
  for (const { pattern, translate } of Qg) {
    const o = e.match(pattern);
    if (o) {
      return translate(o);
    }
  }
  return e;
}
function Ds(e, t = "Произошла ошибка") {
  const n = t_(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : Zg[Zl(e)] ?? n;
}
const Jl = "/api";

const x = {
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
  files: { upload: "/files/upload", delete: e => `/files/${e}` },
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

let Zn = null;
const rs = new Set();
function Fr() {
  return Zn;
}
function n_(e) {
  if (Zn !== e) {
    Zn = e;
    for (const t of rs) {
      t(e);
    }
  }
}
function vI(e) {
  rs.add(e);

  return () => {
    rs.delete(e);
  };
}
function Ta() {
  return Zn ? { Authorization: `Bearer ${Zn}` } : {};
}
let os = null;
function r_(e) {
  os = e;
}
async function o_(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function ss() {
  return os
    ? On ||
        ((On = o_(os).finally(() => {
          On = null;
        })),
        On)
    : null;
}
async function s_(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = Fr();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const r = await n();
  return r.status !== 401 || !(await ss()) ? r : n();
}
function i_() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const Na = i_();
class Ql {
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
    if (t.status !== He.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        yt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      yt.error(Ds(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${n}${r}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ...Ta() });
    n.set("X-Device-Id", Na);
    return n;
  }
  async handleResponse(t) {
    if (t.status === He.NO_CONTENT) {
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
      case He.BAD_REQUEST:
        {
          return U.BAD_REQUEST;
        }
      case He.UNAUTHORIZED:
        {
          return U.UNAUTHORIZED;
        }
      case He.FORBIDDEN:
        {
          return U.ACCESS_DENIED;
        }
      case He.NOT_FOUND:
        {
          return U.ENTITY_NOT_FOUND;
        }
      case He.CONFLICT:
        {
          return U.ENTITY_ALREADY_EXISTS;
        }
      case He.UNPROCESSABLE_ENTITY:
        {
          return U.VALIDATION_ERROR;
        }
      case He.TOO_MANY_REQUESTS:
        {
          return U.RATE_LIMIT_EXCEEDED;
        }
      default:
        {
          return U.UNKNOWN_ERROR;
        }
    }
  }
  createApiError(t, n, r, o) {
    const s = new Error(n);
    (s.status = t);
    (s.code = Zl(r));
    (s.errors = o);
    (s.name = "ApiError");
    return s;
  }
  async executeRequest(t, n, r, o, s = false) {
    const a = this.buildUrl(n);
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

      const { headers, skipErrorToast, ...g } = o ?? {};

      const w = await fetch(a, {
        method: t,
        body: p,
        signal: l.signal,
        credentials: "include",
        ...g,
        headers: c,
      });

      clearTimeout(f);
      const _ =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (w.status === He.UNAUTHORIZED && !s && !_ && Fr()) {
        if (await ss()) {
          return this.executeRequest(t, n, r, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          He.UNAUTHORIZED,
          "Session expired",
          U.UNAUTHORIZED
        );
      }
      return await this.handleResponse(w);
    } catch (d) {
      clearTimeout(f);

      if (d instanceof Error) {
        const p = m => !s && !this.isToastSkipped(o?.skipErrorToast, m.status);
        if (d.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", U.TIMEOUT);

          if (p(m)) {
            this.notifyError(m);
          }

          throw m;
        }
        if (d.name === "ApiError") {
          const m = d;

          if (p(m)) {
            this.notifyError(m);
          }

          throw d;
        }
        const h = this.createApiError(
          0,
          d.message || "Network error",
          U.NETWORK_ERROR
        );

        if (p(h)) {
          this.notifyError(h);
        }

        throw h;
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
  async uploadFormData(t, n, r, o = false) {
    const s = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": Na, ...Ta() };
    const c = new AbortController();
    const l = r?.timeout ?? this.defaultTimeout;

    const u = setTimeout(() => c.abort(), l);

    try {
      const f = await fetch(s, {
        method: "POST",
        headers: a,
        body: n,
        signal: c.signal,
        credentials: "include",
      });
      clearTimeout(u);

      if (f.status === He.UNAUTHORIZED && !o && Fr()) {
        if (await ss()) {
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          He.UNAUTHORIZED,
          "Session expired",
          U.UNAUTHORIZED
        );
      }

      return await this.handleResponse(f);
    } catch (f) {
      clearTimeout(u);

      if (f instanceof Error) {
        if (f.name === "AbortError") {
          const p = this.createApiError(0, "Request timeout", U.TIMEOUT);

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
          U.NETWORK_ERROR
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
const M = new Ql({ baseURL: Jl, timeout: 30000/* 3e4 */ });
const ot = new Ql({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const Us = rt((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const n = await M.get("/v1/portal");
        e({ portal: n, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  }
}));

const eu = () => Us(e => e.portal);

const Jn = new Set();
let zn = null;
const a_ = 30000/* 3e4 */;
function c_() {
  if (zn === null) {
    (zn = window.setInterval(() => {
        Jn.forEach(e => e());
      }, a_));
  }
}
function l_() {
  if (zn !== null) {
    clearInterval(zn);
    (zn = null);
  }
}
function u_(e) {
  Jn.add(e);

  if (Jn.size === 1) {
    c_();
  }
}
function d_(e) {
  Jn.delete(e);

  if (Jn.size === 0) {
    l_();
  }
}
function yo(e) {
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
function tu(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [o, s] = L(() => n ? yo(new Date(r)) : "");

  F(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(r);
    s(yo(a));
    const c = () => {
      s(yo(a));
    };
    u_(c);

    return () => d_(c);
  }, [r, n]);

  return o;
}
const Ia = 1174;
function bt() {
  const [e, t] = L(() => typeof window === "undefined" ? false : window.innerWidth < Ia);

  F(() => {
    const n = window.matchMedia(`(max-width: ${Ia - 1}px)`);

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
const f_ = Sn({ isHidden: false });

const h_ = () => {
  const [e, t] = L(false);
  const n = O(0);

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

function no(e = "", t = []) {
  const [n, r] = L(e);
  const [o, s] = L(t);
  const a = O(null);

  const c = N((f, d) => {
    r(f);
    s(d);
  }, []);

  const l = N((f) => {
    a.current?.insertText(f);
  }, []);

  const u = N(() => {
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
function p_({
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
function m_({
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

  const f = () => a ? a.clientHeight : typeof window !== "undefined" ? window.innerHeight : 0;

  const d = O(s ?? new Map());
  const p = O(null);
  const h = O(null);
  const m = O(new Map());
  const g = O(o);
  g.current = o;

  const w = k => d.current.get(o(k)) ?? t;

  const _ = (k) => {
    let R = 0;
    for (let b = 0; b < k; b++) {
      R += w(b) + r;
    }
    return R;
  };

  const y = () => {
    if (e === 0) {
      return 0;
    }
    let k = 0;
    for (let R = 0; R < e; R++) {
      k += w(R);
    }
    (k += Math.max(0, e - 1) * r);
    return k;
  };

  const E = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const k = u();
    const R = f();
    let b = 0;
    let v = 0;
    for (let P = 0; P < e; P++) {
      const B = w(P) + r;
      if (v + B > k) {
        b = P;
        break;
      }
      v += B;
    }
    let A = b;
    let T = 0;
    for (let P = b; P < e && ((T += w(P) + r), (A = P), !(T >= R)); P++)
      {}
    return { start: Math.max(0, b - n), end: Math.min(e - 1, A + n) };
  };

  const I = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = E();
    const b = [];
    for (let v = start; v <= end; v++) {
      b.push({ index: v, key: o(v), start: _(v) });
    }
    return b;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((k) => {
      let R = false;
      for (const b of k) {
        const b_target = b.target;
        const A = m.current.get(b_target);
        if (A === undefined) {
          continue;
        }
        const T = b.borderBoxSize && b.borderBoxSize[0];
        const P = T ? T.blockSize : b_target.getBoundingClientRect().height;

        if (P > 0 && d.current.get(A) !== P) {
          d.current.set(A, P);
          (R = true);
        }
      }

      if (R) {
        l(b => b + 1);
      }
    }));
  }

  const S = N((k, R) => {
    if (!k) {
      return;
    }
    const b = g.current(R);
    m.current.set(k, b);
    h.current?.observe(k, { box: "border-box" });
    const v = k.getBoundingClientRect().height;

    if (v > 0 && d.current.get(b) !== v) {
      d.current.set(b, v);
      l(A => A + 1);
    }
  }, []);

  Dt(() => {
    const k = a ?? window;

    const R = () => {
      if (!p.current) {
        (p.current = requestAnimationFrame(() => {
          (p.current = null);

          l(b => b + 1);
        }));
      }
    };

    k.addEventListener("scroll", R, { passive: true });

    l(b => b + 1);

    return () => {
      k.removeEventListener("scroll", R);

      if (p.current) {
        cancelAnimationFrame(p.current);
      }
    };
  }, [a]);

  F(
    () => () => {
      h.current?.disconnect();
      m.current.clear();
    },
    []
  );

  const C = N(() => new Map(d.current), []);
  return {
    virtualItems: I(),
    totalSize: y(),
    measureElement: S,
    getMeasuredHeights: C,
  };
}
const g_ = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const Ra = "itd:icons:checkedAt";
const __ = 1800 * 1000/* 1e3 */;
const Hr = new Map();
const vo = new Map();
const Ar = new Map();

const y_ = e => `${g_}/${e}.svg`;

const v_ = (() => {
  try {
    const e = Number(localStorage.getItem(Ra) ?? 0);
    return Date.now() - e < __
      ? false
      : (localStorage.setItem(Ra, String(Date.now())), true);
  } catch {
    return false;
  }
})();

const E_ = e => /^\s*<svg[\s>]/i.test(e) &&
!/<script|<foreignObject|\son[a-z]+\s*=/i.test(e);

const w_ = { liked: "--accent-liked" };
const S_ = /fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/;

const b_ = (e, t) => {
  const w_e = w_[e];
  if (!w_e || typeof document === "undefined") {
    return;
  }
  const r = S_.exec(t)?.[1];

  if (r) {
    document.documentElement.style.setProperty(w_e, r);
  }
};

const C_ = (e, t) => {
  Hr.set(e, t);
  b_(e, t);

  Ar.get(e)?.forEach(n => n(t));
};

const T_ = (e, t = false) => {
  if (!t) {
    const o = Hr.get(e);
    if (o) {
      return Promise.resolve(o);
    }
    const s = vo.get(e);
    if (s) {
      return s;
    }
  }
  const n = t ? "reload" : v_ ? "no-cache" : "force-cache";

  const r = fetch(y_(e), { cache: n })
    .then(async (o) => {
      if (!o.ok) {
        return null;
      }
      const s = await o.text();
      return E_(s) ? (C_(e, s), s) : null;
    })
    .catch(() => null)
    .finally(() => vo.delete(e));

  vo.set(e, r);
  return r;
};

const N_ = (e, t) => e.replace(/<svg\b([^>]*)>/i, (n, r) => {
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

const Fs = ({ name: e, size: t = 20, className: n }) => {
  const [r, o] = L(() => Hr.get(e) ?? null);
  F(() => {
    o(Hr.get(e) ?? null);
    const a = Ar.get(e) ?? new Set();
    a.add(o);
    Ar.set(e, a);
    T_(e);

    return () => {
      a.delete(o);

      if (a.size === 0) {
        Ar.delete(e);
      }
    };
  }, [e]);
  const s = typeof t == "number" ? `${t}px` : t;
  return i("span", {
    "data-icon": e,
    "aria-hidden": "true",
    className: n,
    style: { display: "block", width: s, height: s, lineHeight: 0 },
    dangerouslySetInnerHTML: r ? { __html: N_(r, t) } : undefined,
  });
};

const I_ = ({ size: e = 18 }) => i("svg", {
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

const R_ = ({ size: e = 18 }) => i("svg", {
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

const k_ = ({ size: e = 18 }) => i("svg", {
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

const nu = ({ size: e = 18 }) => i("svg", {
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

const A_ = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const O_ = ({ size: e = 18 }) => i("svg", {
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

const P_ = ({ size: e = 18 }) => i("svg", {
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

const L_ = ({ size: e = 18 }) => i("svg", {
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

const $_ = ({ size: e = 18 }) => i("svg", {
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

const x_ = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const M_ = ({ size: e = 24 }) => i("svg", {
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

const ru = ({ size: e = 20 }) => i("svg", {
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

const D_ = ({ size: e = 8 }) => i("svg", {
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

const U_ = ({ size: e = 8 }) => i("svg", {
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

const F_ = () => i("svg", {
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

const ut = ({ size: e = 24 }) => i("svg", {
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

const ou = ({ size: e = 20 }) => i(Fs, { name: "comment", size: e });

const su = ({ size: e = 18 }) => i("svg", {
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

const H_ = ({ size: e = 24 }) => i("svg", {
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

const iu = () => i("svg", {
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

const au = ({ size: e = 18 }) => i("svg", {
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

const cu = ({ size: e = 24 }) => i("svg", {
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

const Hs = ({ filled: e = false, size: t = 20, className: n }) => i(Fs, { name: e ? "liked" : "like", size: t, className: n });

const Bs = ({ size: e = 24 }) => i("svg", {
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

const B_ = ({ size: e = 24 }) => i("svg", {
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

const lu = ({ size: e = 18 }) => i("svg", {
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

const uu = ({ size: e = 24 }) => i("svg", {
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

const V_ = ({ size: e = 24 }) => i("svg", {
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

const is = ({ size: e = 24 }) => i("svg", {
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

const ka = ({ size: e = 18 }) => i("svg", {
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

const Vs = ({ size: e = 24 }) => i("svg", {
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

const W_ = ({ size: e = 20 }) => i("svg", {
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

const Ws = ({ size: e = 20 }) => i(Fs, { name: "share", size: e });

const du = ({ size: e = 24 }) => i("svg", {
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

const fu = ({ size: e = 24 }) => i("svg", {
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

const j_ = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const z_ = ({ size: e = 24 }) => i("svg", {
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

const q_ = ({ size: e = 48 }) => i("svg", {
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

const hu = ({ size: e = 18 }) => i("svg", {
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

const G_ = ({ size: e = 16 }) => i("svg", {
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

const Y_ = ({ size: e = 20 }) => i("svg", {
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

function K_(e) {
  const t = ar()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: zl(t.path || t.url, e.path, {}) !== false,
  });
}
const X_ = "wLPp";
const Z_ = "ES2x";
const J_ = "hLAP";
const Q_ = "yoar";
const ey = "J5NZ";
const ty = "ujo1";
const ny = "LOmd";
const ry = "OCC4";
const oy = "qs3a";
const sy = "adUs";
const iy = "C8Ah";
const ay = "CjaL";
const cy = "TOWC";

const Oe = {
  aside: X_,
  asideBottom: Z_,
  logoutButton: J_,
  asideBrand: Q_,
  asideBrandVersion: ey,
  nav: ty,
  navItem: ny,
  active: ry,
  iconWrapper: oy,
  portalButton: sy,
  portalActive: iy,
  portalImage: ay,
  badge: cy,
};

const ae = {
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
  SHOP: "/shop",
  SUBSCRIPTION_TERMS: "/subscription-terms",
};

const Aa = [
  ae.SHOP,
  ae.LOGIN,
  ae.REGISTER,
  ae.FORGOT_PASSWORD,
  ae.RESET_PASSWORD,
  ae.VERIFY_EMAIL,
  ae.TERMS,
  ae.PRIVACY,
  ae.COOKIES,
  ae.EXTERNAL,
  ae.SUPPORT,
  ae.CHILD_SAFETY,
  ae.SUBSCRIPTION_TERMS,
];

const js = [
  ae.LOGIN,
  ae.REGISTER,
  ae.FORGOT_PASSWORD,
  ae.RESET_PASSWORD,
  ae.VERIFY_EMAIL,
  ae.ONBOARDING,
];

const ly = {
  like: "post_reaction",
  comment_like: "comment_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  wall_post: "wall_post",
};

function pu(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: ly[e.type] ?? "follow",
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

const Pn = {
    async getNotifications(e = {}) {
      const t = new URLSearchParams();
      const n = e.limit ?? 20;
      t.set("limit", n.toString());
      const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

      if (r > 0) {
        t.set("offset", r.toString());
      }

      const o = t.toString();
      const s = `${x.notifications.list}${o ? `?${o}` : ""}`;
      const a = await M.get(s);
      const c = a.notifications ?? [];
      const l = a.hasMore ? String(r + c.length) : null;
      return { notifications: c.map(pu), nextCursor: l };
    },
    async getUnreadCount() {
      return (await M.get(x.notifications.count)).count;
    },
    async markAllAsRead() {
      await M.post(x.notifications.markAllRead);
    },
    async getSettings() {
      const e = await M.get(x.notifications.settings);
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

      await M.put(x.notifications.settings, t);
    },
  };

const Oa = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const uy = 0.3;
const dy = 15;
function fy(e) {
  const t = Oa[Math.min(e, Oa.length - 1)];
  const n = t * uy * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let Tt = null;
let pr = null;
let Ln = 0;
let Bt = null;
function hy(e) {
  const { url, onMessage, onStatusChange } = e;
  function o() {
    if (Tt) {
      return;
    }
    if (!Fr()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    (Tt = new AbortController());

    (async () => {
      try {
        const c = await s_(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
          },
          signal: Tt?.signal,
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
        (Ln = 0);
        onStatusChange("connected");

        if (Bt) {
          Bt.cancel().catch(() => {});
          (Bt = null);
        }

        const l = c.body.getReader();
        Bt = l;
        const u = new TextDecoder();
        let f = "";

        while (true) {
          const { done, value } = await l.read();
          if (done) {
            break;
          }
          f += u.decode(value, { stream: true });
          const h = f.split(`
`);
          f = h.pop() || "";
          let m = "";
          let g = "";
          for (const w of h) {
            if (w.startsWith("event: ")) {
              m = w.slice(7);
            } else if (w.startsWith("data: ")) {
              g = w.slice(6);
            } else if (w === "" && g) {
              try {
                const _ = JSON.parse(g);
                const y = m || _.type;
                onMessage(y, _);
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

        if (Ln >= dy) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          (Tt = null);
          return;
        }

        const l = fy(Ln);
        Ln++;

        (pr = setTimeout(() => {
          (Tt = null);
          o();
        }, l));
      }
    })();
  }
  function s() {
    if (pr) {
      clearTimeout(pr);
      (pr = null);
    }

    if (Bt) {
      Bt.cancel().catch(() => {});
      (Bt = null);
    }

    if (Tt) {
      Tt.abort();
      (Tt = null);
    }

    (Ln = 0);
    onStatusChange("disconnected");
  }
  return { connect: o, disconnect: s };
}

const Pa = {
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

const mr = hy({
  url: `${Jl}${x.notifications.stream}`,
  onMessage: (e, t) => {
    if (e === "notification") {
      const n = pu(t);
      const r = n.payload.actors[0];

      const o = {
        id: n.id,
        type: n.type,
        actorName: r?.displayName || "Пользователь",
        actorUsername: r?.username || "",
        actorAvatar: r?.avatar || "",
        count: n.payload.count,
        message: my(
          n.type,
          r?.displayName || "Пользователь",
          n.payload.count
        ),
        entityId: n.entityId,
        parentEntityId: n.parentEntityId,
      };

      nn.setState(s => ({
        notifications: [n, ...s.notifications],
        unreadCount: s.unreadCount + 1,
        lastSseToast: o
      }));

      if (t.sound) {
        gy();
      }
    }
  },
  onStatusChange: (e) => {
    nn.setState({
      sseStatus: e,
      error: e === "error" ? "SSE connection error" : null,
    });
  },
});

const nn = rt()((e, t) => ({
  ...Pa,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      mr.connect();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status, nextCursor, notifications } = t();
    if (status !== "loading" && !(!n && nextCursor === null && notifications.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const a = n ? undefined : nextCursor ?? undefined;
        const c = await Pn.getNotifications({ cursor: a, limit: 20 });
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
      const n = await Pn.getUnreadCount();
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
      await Pn.markAllAsRead();
    } catch {}
  },

  connectSSE: () => mr.connect(),
  disconnectSSE: () => mr.disconnect(),

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await Pn.getSettings();
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
      await Pn.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    mr.disconnect();
    e(Pa);
  }
}));

const py = {
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

function my(e, t, n) {
  const py_e = py[e];
  return py_e ? py_e(t, n) : "Новое уведомление";
}
function gy() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const mu = () => nn(e => e.unreadCount);

const _y = () => nn(e => e.lastSseToast);

const yy = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const vy = ["video/mp4", "video/webm", "video/quicktime"];
const as = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const Ey = ".mp4,.webm,.mov";

const hn = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await M.uploadFormData(x.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await M.delete(x.files.delete(e));
  },
  isValidImageType(e) {
    return yy.includes(e.type);
  },
  isValidVideoType(e) {
    return vy.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const wy = {
  async getChangelog() {
    const e = await M.get(x.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await M.get(x.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class zs {
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
function La(e) {
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
const At = new zs(100, 300 * 1000/* 1e3 */);
const Sy = 60 * 1000/* 1e3 */;
setInterval(() => At.cleanup(), 120 * 1000/* 1e3 */);
const gr = {
  async checkUsername(e) {
    return (
      await M.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await M.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await M.get(x.users.me);
    return La(e);
  },
  async updateProfile(e) {
    return await M.put(x.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = At.get(t);

    if (n && At.isFresh(t, Sy)) {
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
    return At.get(e.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await M.get(x.users.profile(e), {
        skipErrorToast: [He.NOT_FOUND],
      });

    const r = La(n);
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
    await M.post(x.users.follow(e), {});
  },
  async unfollowUser(e) {
    await M.delete(x.users.follow(e));
  },
  async pinPost(e) {
    await M.post(x.posts.pin(e));
  },
  async unpinPost(e) {
    await M.delete(x.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await M.get(x.users.privacy);
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

    await M.put(x.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await M.get(x.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await M.post(x.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await M.get(x.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await M.put(x.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await M.delete(x.users.setPin);
  },
  async deleteAccount() {
    await M.delete(x.users.deleteAccount);
  },
  async restoreAccount() {
    await M.post(x.users.restoreAccount);
  },
};
function $a(e) {
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
const vt = rt(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(r => ({
    statuses: { ...r.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let cs = new Set();
function by() {
  if (!Eo) {
    (null = setTimeout(async () => {
      Eo = null;
      const e = Array.from(cs);
      cs.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await ls.batchFollowStatus(n);
            vt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50));
  }
}
function Cy(e) {
  const t = Ee(s => s.profile?.id);

  const n = vt(s => s.statuses);

  const r = O("");

  F(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of s) {
        cs.add(c);
      }
      by();
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
const zt = new zs(500, 120 * 1000/* 1e3 */);
setInterval(() => zt.cleanup(), 60 * 1000/* 1e3 */);
const ls = {
  async followUser(e) {
    const t = await M.post(x.users.follow(e), {});
    zt.delete(e);
    vt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await M.delete(x.users.follow(e));
    zt.delete(e);
    vt.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const a = `${x.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await M.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const d = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map($a), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const a = `${x.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await M.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const d = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map($a), nextCursor: d };
  },
  async blockUser(e) {
    await M.post(x.users.block(e), {});
    zt.delete(e);
  },
  async unblockUser(e) {
    await M.delete(x.users.block(e));
    zt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const o = t.toString();
    const s = `${x.users.blocked}${o ? `?${o}` : ""}`;
    const a = await M.get(s);
    const c = a.data ?? a;
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

    return (await M.post(x.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    zt.delete(e);
  },
  clearSocialCache() {
    zt.clear();
  },
};
function Ty(e) {
  const t = vt(o => o.statuses[e]);

  const n = N(async () => {
    vt.getState().setStatus(e, true);
    try {
      await ls.followUser(e);
    } catch {
      vt.getState().setStatus(e, false);
    }
  }, [e]);

  const r = N(async () => {
    vt.getState().setStatus(e, false);
    try {
      await ls.unfollowUser(e);
    } catch {
      vt.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: r };
}
const Ny = "dttt";
const Iy = "lFdI";
const Ry = "frMP";
const ky = "jv10";
const Ay = "VyO1";
const Oy = "mxcx";
const Py = "zDR5";
const Ly = "xTLs";
const $y = "m2YB";
const xy = "id8m";
const My = "jY7Q";
const Dy = "D9kH";
const Uy = "H1E3";
const Fy = "uXvK";

const xe = {
  overlay: Ny,
  modalWrapper: Iy,
  wide: Ry,
  modal: ky,
  frameless: Ay,
  header: Oy,
  title: Py,
  closeButton: Ly,
  externalCloseButton: $y,
  mobileOverlay: xy,
  closing: My,
  bottomSheet: Dy,
  dragHandle: Uy,
  dragIndicator: Fy,
};

const Hy = Sn(null);
const By = 100;
const Vy = 0.5;
function sn({
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
  const f = O(null);
  const d = O(null);
  const p = O(null);
  const h = bt();
  const m = O(0);
  const g = O(false);
  const [w, _] = L(false);
  const y = O(0);
  const E = O(0);
  const I = O(0);
  F(() => {
    const q = (re) => {
        if (re.key === "Escape") {
          if (u && !u()) {
            return;
          }
          t();
        }
      };

    const te = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", q);

    return () => {
      document.removeEventListener("keydown", q);
      (document.documentElement.style.overflow = te);
    };
  }, [t]);

  const S = (q) => {
      p.current = q.target;
    };

  const C = (q) => {
    if (p.current === f.current && q.target === f.current) {
      if (h) {
        k();
      } else {
        if (u && !u()) {
          return;
        }
        t();
      }
    }
    p.current = null;
  };

  const k = N(() => {
    if (u && !u()) {
      A(0, "transform 0.2s ease-out");
      T(0);
      (m.current = 0);
      return;
    }
    _(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, u]);

  const R = O(false);
  const b = O(false);

  const v = (q) => {
    let te = q;

    while (te && te !== d.current) {
      const V = window.getComputedStyle(te).overflowY;
      if ((V === "auto" || V === "scroll") &&
      te.scrollHeight > te.clientHeight) {
        return te;
      }
      te = te.parentElement;
    }

    return null;
  };

  const A = (q, te) => {
    if (d.current) {
      (d.current.style.transform = q > 0 ? `translateY(${q}px)` : "");
      (d.current.style.transition = te || "");
    }
  };

  const T = (q) => {
    if (f.current && q > 0) {
      (f.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - q / 500
          )})`);
    } else if (f.current) {
      (f.current.style.backgroundColor = "");
    }
  };

  const P = (q) => {
    if (!h) {
      return;
    }
    (y.current = q.touches[0].clientY);
    (E.current = Date.now());
    (I.current = q.touches[0].clientY);
    const q_target = q.target;
    if (q_target.closest(`.${xe.dragHandle}`)) {
      (R.current = true);
      (b.current = true);
      (g.current = true);

      if (d.current) {
        (d.current.style.transition = "none");
      }

      return;
    }
    (R.current = false);

    if (q_target.closest(
      'button, a, input, textarea, select, video, [role="button"]'
    )) {
      b.current = false;
      return;
    }

    if (q_target.tagName === "CANVAS" || q_target.closest("canvas")) {
      b.current = false;
      return;
    }
    const ge = v(q_target);
    b.current = !ge || ge.scrollTop === 0;
  };

  const B = (q) => {
    if (!h) {
      return;
    }
    const te = q.touches[0].clientY;
    const re = te - y.current;
    (I.current = te);

    if (R.current) {
      if (re > 0) {
        (m.current = re);
        A(re);
        T(re);
        q.preventDefault();
      }

      return;
    }

    if (b.current) {
      if (g.current && m.current > 0) {
        if (re > 0) {
          (m.current = re);
          A(re);
          T(re);
          q.preventDefault();
        } else {
          (m.current = 0);
          (g.current = false);
          A(0);
          T(0);
        }

        return;
      }

      if (re > 0) {
        g.current ||
            ((g.current = true),
            d.current && (d.current.style.transition = "none"));

        (m.current = re);
        A(re);
        T(re);
        q.preventDefault();
      }
    }
  };

  const ie = () => {
    if (!h) {
      return;
    }
    const q = I.current - y.current;
    const te = Date.now() - E.current;
    const re = q / te;

    if (g.current && (q > By || re > Vy)) {
      k();
    } else if (m.current > 0) {
      A(0, "transform 0.2s ease-out");
      T(0);
      (m.current = 0);
    }

    (g.current = false);
    (R.current = false);
    (b.current = false);
  };

  const pe = (() => {
    if (h && w) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const se = { onClose: t, isMobile: h, isClosing: w, handleClose: k };
  return i(Hy.Provider, {
    value: se,
    children: i("div", {
      ref: f,
      className: `${xe.overlay} ${h ? xe.mobileOverlay : ""} ${
        w ? xe.closing : ""
      }`,
      onMouseDown: S,
      onMouseUp: C,
      children: i("div", {
        ref: d,
        className: `${xe.modalWrapper} ${l === "wide" ? xe.wide : ""} ${
          h ? xe.bottomSheet : ""
        }`,
        style: pe,
        onTouchStart: P,
        onTouchMove: B,
        onTouchEnd: ie,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: xe.externalCloseButton,
              onClick: (q) => {
                q.stopPropagation();
                t();
              },
              children: i(ut, { size: 24 }),
            }),
          h &&
            i("div", {
              className: xe.dragHandle,
              children: i("div", { className: xe.dragIndicator }),
            }),
          i("div", {
            className: `${xe.modal} ${s ? xe.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                r &&
                !h &&
                i("div", {
                  className: xe.header,
                  children: [
                    i("span", { className: xe.title, children: n }),
                    o &&
                      i("button", {
                        type: "button",
                        className: xe.closeButton,
                        onClick: (q) => {
                          q.stopPropagation();
                          t();
                        },
                        children: i(ut, { size: 16 }),
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
const Wy = "ujU2";
const jy = "tiwv";
const zy = "XGHn";
const qy = "wcit";
const Gy = "gyMa";
const Yy = "Cm2w";
const xa = { spinner: Wy, spin: jy, xs: zy, sm: qy, md: Gy, lg: Yy };
function gu({ size: e = "md", className: t }) {
  const n = [xa.spinner, xa[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(Bs, {}) });
}
const Ky = "aNU0";
const Xy = "JXpE";
const Zy = "A1uA";
const Jy = "ILbZ";
const Qy = "yZjX";
const ev = "CcLO";
const tv = "vdcE";
const nv = "lIi3";
const rv = "QWOK";
const ov = "mGs9";
const sv = "cgyI";
const iv = "kUMZ";

const un = {
  button: Ky,
  primary: Xy,
  secondary: Zy,
  ghost: Jy,
  accent: Qy,
  danger: ev,
  sm: tv,
  md: nv,
  lg: rv,
  fullWidth: ov,
  iconOnly: sv,
  loading: iv,
};

function ze({
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
  const f = [
    un.button,
    un[t],
    un[n],
    r && un.fullWidth,
    o && un.iconOnly,
    s && un.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return i("button", {
    type: c,
    className: f,
    disabled: l || s,
    ...u,
    children: s ? i(gu, { size: "sm" }) : e,
  });
}
const av = "ktOh";
const cv = "cazq";
const lv = "hTaE";
const uv = "jg33";
const _r = { content: av, title: cv, subtitle: lv, actions: uv };
function dv({ displayName: e, onConfirm: t, onClose: n }) {
  return i(sn, {
    onClose: n,
    showHeader: false,
    children: i("div", {
      className: _r.content,
      children: [
        i("h2", { className: _r.title, children: "Отписаться?" }),
        i("p", {
          className: _r.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            i("strong", { children: e }),
            "?",
          ],
        }),
        i("div", {
          className: _r.actions,
          children: [
            i(ze, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            i(ze, {
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
const _u = Sn(null);
let fv = 0;
function hv({ children: e }) {
  const [t, n] = L([]);

  const r = N((a) => {
    const c = `modal-${++fv}`;

    n(l => [...l, { id: c, component: a }]);

    return c;
  }, []);

  const o = N((a) => {
    n(c => a ? c.filter(l => l.id !== a) : c.slice(0, -1));
  }, []);

  const s = N(() => {
    n([]);
  }, []);

  F(() => {
    let a = window.location.pathname + window.location.search;
    const c = () => {
      const f = window.location.pathname + window.location.search;

      if (f !== a) {
        (a = f);
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

  return i(_u.Provider, {
    value: { openModal: r, closeModal: o, closeAllModals: s },
    children: [e, t.length > 0 && i(pv, { modals: t })],
  });
}
function pv({ modals: e }) {
  return $(
    i(Ie, {
      children: e.map(({ id: t, component: n }) => i(Ce, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function an() {
  const e = eo(_u);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const mv = "JKpI";
const gv = "Lvjk";
const _v = "l4Dx";
const yv = "P9DJ";
const vv = "V4kZ";
const Ev = "W5Ur";
const wv = "Z5yI";
const Sv = "qeJf";
const bv = "Zt4g";
const Cv = "Fi9h";
const Tv = "kEO2";
const Nv = "YG29";

const Nt = {
  avatar: mv,
  xs: gv,
  emoji: _v,
  onlineDot: yv,
  sm: vv,
  md: Ev,
  lg: wv,
  xl: Sv,
  badge: bv,
  followBadge: Cv,
  notFollowing: Tv,
  following: Nv,
};

function Iv(e) {
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
  onFollowBadgeClick: a,
  className: c,
}) {
  const l = e ? Iv(e) : false;
  return i("div", {
    className: `${Nt.avatar} ${Nt[n]} ${c || ""}`,
    children: [
      l && e
        ? i("img", { src: e, alt: t || "" })
        : i("span", { className: Nt.emoji, children: e || "👤" }),
      r && i("div", { className: Nt.badge, children: r }),
      s !== undefined
        ? i("button", {
            type: "button",
            className: `${Nt.followBadge} ${
              s ? Nt.following : Nt.notFollowing
            }`,
            onClick: (u) => {
              u.preventDefault();
              u.stopPropagation();
              a?.(u);
            },
            children: s ? i(U_, { size: 8 }) : i(D_, { size: 8 }),
          })
        : o && i("span", { className: Nt.onlineDot }),
    ],
  });
}
const Rv = "OxgK";
const kv = "nxxT";
const Av = "rgRA";
const Ov = "seMT";
const Pv = "wJH9";
const Lv = "ncqT";
const $v = "Hrso";
const xv = "dmtW";
const Mv = "FdKQ";
const Dv = "b915";
const Uv = "fP7G";
const Fv = "tXAO";
const Hv = "sHJk";
const Bv = "t5At";
const Vv = "G48J";

const Fe = {
  userName: Rv,
  pinBadge: kv,
  text: Av,
  nukstaGlow: Ov,
  xs: Pv,
  sm: Lv,
  md: $v,
  lg: xv,
  pinWrapper: Mv,
  pinClickable: Dv,
  pinTooltip: Uv,
  pinTooltipFadeIn: Fv,
  pinTooltipRow: Hv,
  pinTooltipLabel: Bv,
  pinTooltipArrow: Vv,
};

const Wv = ne(() => Z(
  () => import("./index-CbMDZO-8.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const jv = { xs: 12, sm: 14, md: 16, lg: 22 };
const zv = "subscription_nuksta";
function cr({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: o = "md",
  className: s,
}) {
  const jv_o = jv[o];
  const c = O(null);
  const [l, u] = L(null);
  const [f, d] = L(false);
  const p = r?.slug === zv;

  const h = N(() => {
    if (!c.current) {
      return;
    }
    const g = c.current.getBoundingClientRect();
    u({ x: g.left + g.width / 2, y: g.top });
  }, []);

  const m = N(() => {
    u(null);
  }, []);

  return i("span", {
    className: `${Fe.userName} ${Fe[o]} ${s || ""}`,
    children: [
      n
        ? i("span", {
            className: Fe.nukstaGlow,
            children: i("span", { className: Fe.text, children: e }),
          })
        : i("span", { className: Fe.text, children: e }),
      t && i(G_, {}),
      r &&
        i("span", {
          ref: c,
          className: `${Fe.pinWrapper} ${p ? Fe.pinClickable : ""}`,
          onMouseEnter: h,
          onMouseLeave: m,
          onClick: p
            ? (g) => {
            g.stopPropagation();
            g.preventDefault();
            d(true);
          }
            : undefined,
          children: [
            i("img", {
              src: r.url,
              alt: r.name,
              className: Fe.pinBadge,
              width: jv_o,
              height: jv_o,
            }),
            l &&
              $(
                i("div", {
                  className: Fe.pinTooltip,
                  style: { left: `${l.x}px`, top: `${l.y}px` },
                  children: [
                    i("span", {
                      className: Fe.pinTooltipRow,
                      children: [
                        i("span", {
                          className: Fe.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        r.name,
                      ],
                    }),
                    r.description &&
                      i("span", {
                        className: Fe.pinTooltipRow,
                        children: [
                          i("span", {
                            className: Fe.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          r.description,
                        ],
                      }),
                    i("span", { className: Fe.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
      f &&
        i(Ce, {
          fallback: null,
          children: i(Wv, { isOpen: true, onClose: () => d(false) }),
        }),
    ],
  });
}
function qv(e) {
  return "accessToken" in e;
}
function Gv(e) {
  return "accessToken" in e;
}
const Vt = { skipErrorToast: true };

const It = {
  async register(e) {
    return await ot.post(x.auth.signUp, e, Vt);
  },
  async login(e) {
    return await ot.post(x.auth.signIn, e, Vt);
  },
  async verifyOtp(e) {
    return await ot.post(x.auth.verifyOtp, e, Vt);
  },
  async resendOtp(e) {
    await ot.post(x.auth.resendOtp, e, Vt);
  },
  async refreshSession() {
    return await ot.post(x.auth.refresh);
  },
  async logout() {
    await ot.post(x.auth.logout);
  },
  async logoutAll() {
    await ot.post(`${x.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await ot.post(x.auth.forgotPassword, e, Vt);
  },
  async resetPassword(e) {
    await ot.post(x.auth.resetPassword, e, Vt);
  },
  async changePassword(e) {
    await ot.post(x.auth.changePassword, e, Vt);
  },
};

function Wt(e, t) {
  if (!e) {
    Li(null);
    return;
  }
  Li({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
}

const yr = {
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

const Ee = rt()(
  Kl(
    (e, t) => {
      const n = n_;

      r_(async () => {
        try {
          const s = await It.refreshSession();
          n(s.accessToken);
          return s.accessToken;
        } catch (s) {
          return Ne(s) && s.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      M.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...yr,
        register: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await It.register(o);

            e({
              status: "needs_verification",
              pendingEmail: o.email,
              pendingPassword: o.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const a = Ne(s) ? s.message : "Registration failed";
            const c = Ne(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        login: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await It.login(o);
            if (Gv(s)) {
              n(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: o.email,
                    });

                  Wt(t().profile, o.email);
                }
              } catch (c) {
                if (Ne(c) &&
                (c.code === U.ENTITY_NOT_FOUND || c.status === 404)) {
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
            const a = Ne(s) ? s.message : "Login failed";
            const c = Ne(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        verifyOtp: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail: s, pendingPassword: a, flowToken: c } = t();
          try {
            const l = await It.verifyOtp({
              email: s || "",
              password: a || "",
              otp: o,
              flowToken: c || "",
            });
            e({ pendingPassword: null });

            if (qv(l)) {
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

                  Wt(t().profile, u);
                }
              } catch (f) {
                if (Ne(f) &&
                (f.code === U.ENTITY_NOT_FOUND || f.status === 404)) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: u,
                  });
                } else {
                  throw f;
                }
              }
              return "authenticated";
            }

            e({ status: "needs_verification" });
            return "password_reset";
          } catch (l) {
            const u = Ne(l) ? l.message : "Verification failed";
            const f = Ne(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: f });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail: o, flowToken: s } = t();
          try {
            await It.resendOtp({ email: o || "", flowToken: s || "" });
          } catch (a) {
            const c = Ne(a) ? a.message : "Failed to resend code";
            const l = Ne(a) ? a.code : null;
            e({ error: c, errorCode: l });
            throw a;
          }
        },
        createProfile: async (o) => {
          e({ error: null, errorCode: null });
          try {
            await gr.createProfile(o);
            await t().fetchProfile();
            e({ status: "authenticated" });
            Wt(t().profile, t().email);
          } catch (s) {
            const a = Ne(s) ? s.message : "Failed to create profile";
            const c = Ne(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        logout: async () => {
          try {
            await It.logout();
          } catch {
          } finally {
            n(null);
            e({ ...yr, status: "unauthenticated" });
            Wt(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await It.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...yr, status: "unauthenticated" });
            Wt(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const o = await It.refreshSession();
            n(o.accessToken);
            return o.accessToken;
          } catch (o) {
            return Ne(o) && o.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const o = await gr.getMyProfile();
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
                Wt(t().profile, t().email);
              }
            } catch (a) {
              if (Ne(a) &&
              (a.code === U.ENTITY_NOT_FOUND || a.status === 404)) {
                e({ status: "needs_profile" });
              } else {
                throw a;
              }
            }
          } catch (s) {
            if (Ne(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await gr.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await gr.restoreAccount();
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
          e({ ...yr, status: "unauthenticated" });
          Wt(null, null);
        },
        setProfile: (o) => {
          e({ profile: o });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Ms(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const yu = () => Ee(e => e.status);

const qs = () => Ee(e => e.profile);

const ro = () => Ee(e => e.status === "authenticated");

const Yv = "iWID";
const Kv = "Bmu8";
const Xv = "BL2Z";
const Zv = "NLpY";
const Jv = "OdGL";
const Qv = "O3df";

const dn = {
  screen: Yv,
  fullscreen: Kv,
  image: Xv,
  title: Zv,
  description: Jv,
  action: Qv,
};

const e0 = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const vu = ({ kind: e, title: t, description: n, action: r, fullscreen: o = false }) => i("div", {
  className: `${dn.screen} ${o ? dn.fullscreen : ""}`,
  children: [
    i("img", {
      className: dn.image,
      src: e0[e],
      alt: "",
      width: 256,
      height: 256,
      "aria-hidden": "true",
    }),
    i("h1", { className: dn.title, children: t }),
    n && i("p", { className: dn.description, children: n }),
    r && i("div", { className: dn.action, children: r }),
  ],
});

function t0({ children: e, currentPath: t }) {
  const n = yu();

  const r = Ee(s => s.initialize);

  F(() => {
    if (n === "idle") {
      r();
    }
  }, [n, r]);

  F(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const s = Aa.some(a => t.startsWith(a));

    if (n === "unauthenticated" && !s) {
      if (!je(ae.LOGIN)) {
        window.location.replace(ae.LOGIN);
      }
    } else if (n === "needs_profile" && t !== ae.ONBOARDING) {
      if (!je(ae.ONBOARDING)) {
        window.location.replace(ae.ONBOARDING);
      }
    } else if (n === "authenticated" &&
        (t === ae.LOGIN || t === ae.REGISTER || t === ae.ONBOARDING)) {
      je(ae.HOME);
    }
  }, [n, t]);

  const o = Aa.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !o)
    ? null
    : n === "service_error"
    ? i(n0, {})
    : n === "account_deleted"
    ? i(r0, {})
    : (n === "unauthenticated" && !o) ||
      (n === "needs_profile" && t !== ae.ONBOARDING)
    ? null
    : i(Ie, { children: e });
}
function n0() {
  const e = Ee(o => o.initialize);

  const [t, n] = L(false);
  return i(vu, {
    kind: "server",
    fullscreen: true,
    title: "Сервис недоступен",
    description:
      "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
    action: i(ze, {
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
function r0() {
  const e = Ee(l => l.canRestore);

  const t = Ee(l => l.restoreDeadline);

  const n = Ee(l => l.restoreAccount);

  const r = Ee(l => l.logout);

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
          ? i(Ie, {
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
                    i(ze, { onClick: c, children: "Восстановить аккаунт" }),
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
          : i(Ie, {
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
                  children: i(ze, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
const o0 = "U8ns";
const s0 = "PLG7";
const i0 = "TTtB";
const a0 = "tE0G";
const vr = { content: o0, icon: s0, text: i0, button: a0 };
const Ma = "phone-verification-required";
function c0() {
  const [e, t] = L(false);

  const n = Ee(o => o.profile?.id ?? "");

  F(() => {
    const o = () => t(true);
    window.addEventListener(Ma, o);

    return () => window.removeEventListener(Ma, o);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${n}`;
  return i(sn, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: i("div", {
      className: vr.content,
      children: [
        i("div", { className: vr.icon, children: i(q_, { size: 48 }) }),
        i("p", {
          className: vr.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        i("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: vr.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
function $n(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const at = new zs(50, 300 * 1000/* 1e3 */);
const l0 = 60 * 1000/* 1e3 */;
setInterval(() => at.cleanup(), 120 * 1000/* 1e3 */);
function u0(e) {
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
function Ot(e) {
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
  const a = e.stats?.reposts ?? e.repostsCount ?? 0;
  const c = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const l = e.viewerStatus?.isReposted ?? e.isReposted ?? false;
  const u = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: u0(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: o, comments: s, reposts: a },
    reposted: l,
    originalPost: e.originalPost ? Ot(e.originalPost) : null,
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
      const o = `${x.posts.list}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: $n(s.data) };
    },
    async getPost(e) {
      const t = await M.get(x.posts.single(e));
      return Ot(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const r = at.get(n);
        const o = r && r.pinnedPostId === (t.pinnedPostId ?? null);

        if (r && o && at.isFresh(n, l0)) {
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
      const n = at.get(e);
      return !n || n.pinnedPostId !== (t ?? null)
        ? null
        : { data: n.posts, nextCursor: n.nextCursor };
    },
    async _fetchAndCacheWall(e, t, n) {
      const r = await this._fetchWall(e, t);

      at.set(n, {
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
      const o = `${x.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: $n(s.data) };
    },
    invalidateWallCache(e) {
      at.delete(e);
    },
    updatePostInWallCache(e, t, n) {
      const r = at.get(e);
      if (r) {
        const o = r.posts.map(s => s.id === t ? { ...s, ...n } : s);
        at.set(e, { ...r, posts: o });
      }
    },
    removePostFromWallCache(e, t) {
      const n = at.get(e);
      if (n) {
        const r = n.posts.filter(o => o.id !== t);
        at.set(e, { ...n, posts: r });
      }
    },
    async likePost(e) {
      return await M.post(x.posts.like(e));
    },
    async unlikePost(e) {
      return await M.delete(x.posts.like(e));
    },
    async createPost(e) {
      return await M.post(x.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
      });
    },
    async createRepost(e, t) {
      const n = await M.post(x.posts.repost(e), { content: t });
      return Ot(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await M.post(`${x.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await M.put(x.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await M.delete(x.posts.delete(e));
    },
    async restorePost(e) {
      await M.post(x.posts.restore(e));
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
      const o = `${x.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: $n(s.data) };
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
      const o = `${x.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: $n(s.data) };
    },
    async pinPost(e) {
      await M.post(x.posts.pin(e));
    },
    async unpinPost(e) {
      await M.delete(x.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await M.post(x.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await M.delete(x.posts.repost(e));
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
      const o = `${x.hashtags.posts(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: $n(s.data) };
    },
  };

const d0 = { new: "newest", old: "oldest", popular: "popular" };
function f0(e) {
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
function us(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const o = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: f0(e.author),
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
        ? (e.previewReplies ?? e.replies).map(us)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const st = {
    async getComments(e, t = {}) {
      const n = new URLSearchParams();

      if (t.limit) {
        n.set("limit", t.limit.toString());
      }

      if (t.sort) {
        n.set("sort", d0[t.sort]);
      }

      if (t.cursor) {
        n.set("cursor", t.cursor);
      }

      const r = n.toString();
      const o = `${x.posts.comments(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
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
      return { data: a.map(us), nextCursor: c };
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
      const o = `${x.comments.replies(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
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
      return { data: a.map(us), nextCursor: c };
    },
    async createComment(e, t, n, r, o) {
      return await M.post(x.posts.comments(e), {
        content: t,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async createReply(e, t, n, r, o) {
      return await M.post(x.comments.replies(e), {
        content: t,
        replyToUserId: r,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async editComment(e, t, n) {
      await M.patch(x.comments.edit(e), { content: t });
    },
    async deleteComment(e) {
      await M.delete(x.comments.delete(e));
    },
    async likeComment(e) {
      await M.post(x.comments.like(e));
    },
    async unlikeComment(e) {
      await M.delete(x.comments.like(e));
    },
  };

const Q = rt((e, t) => ({
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
        const a = await Le.getFeed(r, { limit: 20 });
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
          error: Ne(a) ? Ds(a.code, a.message) : "Не удалось загрузить ленту",
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
        const a = await Le.getFeed(n, { limit: 20, cursor: s ?? undefined });
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
  }) => {
    const c = Ee.getState().profile;
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
        poll: a
          ? {
              question: a.question,
              options: a.options,
              multipleChoice: a.multipleChoice ?? false,
            }
          : undefined,
      });

      const f = s.map(({ url: p }, h) => ({
        id: `temp-${h}`,
        url: p,
        type: "image"
      }));

      if (a) {
        f.push({
          id: `temp-poll-${Date.now()}`,
          type: "poll",
          question: a.question,
          options: a.options.map((p, h) => ({
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

    const a = r.find(c => c.id === n);

    e({
      posts: r.filter(c => c.id !== n),
      currentPost: o?.id === n ? null : o,
    });
    try {
      await Le.deletePost(n);
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
      const f = c.get(u.id);
      const d = u.originalPost ? l(u.originalPost) : u.originalPost;
      return !f && d === u.originalPost
        ? u
        : {
            ...u,
            ...(f && {
              reactions: {
                ...u.reactions,
                total: a(u.id) ? u.reactions.total : f.likesCount,
              },
              stats: {
                ...u.stats,
                views: f.viewsCount,
                comments: f.commentsCount,
                reposts: f.repostsCount,
              },
              dominantEmoji: f.dominantEmoji,
            }),
            originalPost: d,
          };
    };

    e((u) => {
      const f = { ...u.postStatsCache };
      for (const d of n) {
        const p = f[d.id];

        if (p) {
          (f[d.id] = {
              ...p,
              likesTotal: a(d.id) ? p.likesTotal : d.likesCount,
              commentsCount: d.commentsCount,
              repostsCount: d.repostsCount,
              viewsCount: d.viewsCount,
              dominantEmoji: d.dominantEmoji,
            });
        }
      }
      return {
        posts: u.posts.map(l),
        currentPost: u.currentPost ? l(u.currentPost) : u.currentPost,
        postStatsCache: f,
        _lastStatsBatch: n.map(d => a(d.id)
          ? { ...d, likesCount: f[d.id]?.likesTotal ?? d.likesCount }
          : d
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

      const f = o ? 0 : 1;

      const d = {
        ...l,
        options: u,
        totalVotes: (l.totalVotes ?? 0) + f,
        myVote: r,
      };

      const p = [...a.attachments];
      (p[c] = d);
      return { ...a, attachments: p };
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

  reset: () => {
    t().feedMeasuredHeights.clear();

    Z(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => g0
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

const wo = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: Q },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Or = rt()(
  Kl(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: Ms(() => localStorage) }
  )
);

const Ge = new Map();
const h0 = 60 * 1000/* 1e3 */;
const p0 = 300 * 1000/* 1e3 */;
const Da = 20;
const Ua = 500;
function m0() {
  const e = Date.now();
  for (const [t, n] of Ge.entries()) {
    if (e - n.timestamp > p0) {
      Ge.delete(t);
    }
  }
  if (Ge.size > Da) {
    const t = Array.from(Ge.entries()).sort(
      (r, o) => r[1].timestamp - o[1].timestamp
    );
    t.slice(0, t.length - Da).forEach(([r]) => Ge.delete(r));
  }
}

const Pt = rt((e, t) => ({
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
    const { usePostsStore: r } = await Z(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => wo);
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
    m0();
    const s = Or.getState().commentsSort;
    const a = n;
    const c = Ge.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < h0) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        st
          .getComments(n, { limit: 100, sort: s })
          .then((f) => {
          const f_data = f.data;

          Ge.set(a, {
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
      const u = await st.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      Ge.set(a, {
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
    const a = Or.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await st.getComments(n, {
        limit: 100,
        sort: a,
        cursor: s ?? undefined,
      });
      e((l) => {
        const u = [...l.comments, ...c.data];
        return {
          comments: u.length > Ua ? u.slice(-Ua) : u,
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
        const _ = (r[g].previewReplies ?? []).findIndex(y => y.id === n);
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
    const f = l.reactions.total;
    const d = u !== null;
    const p = d ? Math.max(0, f - 1) : f + 1;
    const h = d ? null : "love";
    const m = [...r];
    if (s) {
      const g = [...(m[a].previewReplies ?? [])];
      (g[c] = { ...g[c], reactions: { total: p, myReaction: h } });
      (m[a] = { ...m[a], previewReplies: g });
    } else {
      m[o] = { ...m[o], reactions: { total: p, myReaction: h } };
    }
    e({ comments: m });
    try {
      if (d) {
        await st.unlikeComment(n);
      } else {
        await st.likeComment(n);
      }
    } catch (g) {
      console.error("Failed to toggle comment like:", g);
      const w = [...t().comments];
      if (s) {
        const _ = w.findIndex(y => y.previewReplies?.some(E => E.id === n)
        );
        if (_ !== -1) {
          const y = w[_].previewReplies.findIndex(E => E.id === n);
          if (y !== -1) {
            const E = [...w[_].previewReplies];
            (E[y] = { ...E[y], reactions: { total: f, myReaction: u } });
            (w[_] = { ...w[_], previewReplies: E });
          }
        }
      } else {
        const _ = w.findIndex(y => y.id === n);

        if (_ !== -1) {
          (w[_] = { ...w[_], reactions: { total: f, myReaction: u } });
        }
      }
      e({ comments: w });
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
          ? await st.createReply(s, r, o, c, a)
          : await st.createComment(n, r, o, undefined, a);

      const f = Ee.getState().profile;
      if (f) {
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

        const w = {
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
            comments: _.comments.map(y => y.id === s
              ? {
                  ...y,
                  previewReplies: [...(y.previewReplies || []), w],
                  stats: { ...y.stats, replies: y.stats.replies + 1 },
                }
              : y
            ),

            highlightedCommentId: u.id
          })
            : _ => ({
            comments: [w, ..._.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: d } = await Z(async () => {
          const { usePostsStore: g } = await Promise.resolve().then(() => wo);
          return { usePostsStore: g };
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

      const h = Or.getState().commentsSort;
      const m = Ge.get(n);

      if (m) {
        Ge.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        Ge.set(n, {
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
        const s = await st.getReplies(n, { limit: 100 });
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
    e({ comments: a(s) });
    try {
      await st.editComment(n, r, o);
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

    const a = r;

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

    const { usePostsStore: c } = await Z(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => wo);
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
      await st.deleteComment(n);
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
    Ge.clear();

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

const g0 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Pt },
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

const _0 = 0;
const y0 = 1;
const v0 = 2;
const E0 = 3;
const Fa = 4;
const w0 = 5;
const S0 = 250;
const b0 = 0.5;
const C0 = 30000/* 3e4 */;
const T0 = 2000/* 2e3 */;
const N0 = 20;
const Ha = "dwell_sid";

const I0 = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function R0() {
  try {
    let e = sessionStorage.getItem(Ha);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Ha, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function k0(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= b0 ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class A0 {
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
    (this.sessionId = R0());

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
        { threshold: I0 }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const r of n) {
      window.addEventListener(r, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const r = document.hidden ? v0 : null;
      this.evaluateAll(r);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(y0);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(E0);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), T0);
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
        this.evaluate(c, Fa);
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
      this.evaluate(r, Fa);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < C0 && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const o = !!t_lastEntry && k0(t_lastEntry);
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

      if (u < S0) {
        return;
      }

      const f = n ?? (o ? w0 : _0);
      const d = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const p = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: f, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (p) {
        (h.s = Br[t.source]);
      }

      if (d) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, Br[t.source]);
    }
  }
  enqueue(t, n, r) {
    this.buffer.push(t);

    if (this.buffer.length >= N0) {
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
    M.post(x.posts.dwellLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    M.post(
      x.posts.dwellLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const Ba = new A0();
function O0(e, t, n, r = "", o = undefined) {
  F(() => {
    const t_current = t.current;
    if (!(!t_current || !o)) {
      Ba.observe(t_current, e, n, r, o);

      return () => {
        Ba.unobserve(t_current);
      };
    }
  }, [e, t, n, r, o]);
}
function Gs(e) {
  const t = Q(n => n.postStatsCache[e.id]);
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
const Eu = "shop-cart";
function Va() {
  try {
    const e = localStorage.getItem(Eu);
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
function wu() {
  const [e, t] = L(Va);

  F(() => {
    const n = (r) => {
      if (r.key === null || r.key === Eu) {
        t(Va());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}

const P0 = ne(() => Z(() => import("./index-BL2HiSGj.js"), __vite__mapDeps([8, 9])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const L0 = ne(() => Z(
  () => import("./index-CbMDZO-8.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const Su = ({
  href: e,
  icon: t,
  children: n,
  badge: r,
  onActiveClick: o,
  isActive: s = false,
}) => {
  const [a] = ar();
  const c = a.url || "/";
  const u = c === e || c.startsWith(`${e}/`) || s;
  return i("a", {
    href: e,
    className: `${Oe.navItem} ${u ? Oe.active : ""}`,
    onClick: (f) => {
      if (u && o) {
        f.preventDefault();
        o();
      }
    },
    children: [
      i("span", {
        className: Oe.iconWrapper,
        children: [
          t,
          r !== undefined &&
            r > 0 &&
            i("span", { className: Oe.badge, children: r > 99 ? "99+" : r }),
        ],
      }),
      i("span", { children: n }),
    ],
  });
};

const Er = e => i(Su, { ...e });

const $0 = () => {
  const [e] = ar();

  const t = Q(S => S.fetchFeed);

  const n = Q(S => S.isRefreshing);

  const r = Ee(S => S.logout);

  const o = ro();
  const s = qs();
  const a = mu();
  const c = wu();
  const { initialize: l, disconnectSSE: u } = nn();
  const [f, d] = L(false);
  const [p, h] = L(false);
  const m = eu();

  const g = Us(S => S.fetchPortal);

  const w = s?.username ? `/@${s.username}` : "/profile";

  F(
    () => {
      if (o) {
        l();
      }

      return () => {
        u();
      };
    },
    [o, l, u]
  );

  F(() => {
    g();
  }, [g]);

  const _ = N(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      t(true);
    }
  }, [t]);

  const y = N(() => {
    r();
  }, [r]);

  const E = we(() => {
    const S = e.url || "/";
    return js.some(C => S.startsWith(C));
  }, [e.url]);

  const I = we(() => {
    const S = e.url || "/";
    return s?.username
      ? S === `/@${s.username}` || S.startsWith(`/@${s.username}/`)
      : false;
  }, [e.url, s?.username]);

  return E
    ? null
    : i("aside", {
        className: Oe.aside,
        children: [
          i("div", {
            className: Oe.asideTop,
            children: [
              i("div", {
                className: Oe.asideBrand,
                children: [
                  i(F_, {}),
                  i("button", {
                    className: Oe.asideBrandVersion,
                    onClick: () => d(true),
                    title: "Что нового",
                    children: ["v", "1.1.2"],
                  }),
                ],
              }),
              i("nav", {
                className: Oe.nav,
                children: [
                  i(Er, {
                    href: "/",
                    icon: n ? i(Bs, {}) : i(iu, {}),
                    onActiveClick: _,
                    children: "Лента",
                  }),
                  i(Er, {
                    href: "/search",
                    icon: i(du, {}),
                    children: "Поиск",
                  }),
                  i(Er, {
                    href: "/shop",
                    icon: i(fu, {}),
                    badge: c,
                    children: "Магаз",
                  }),
                  i(K_, {
                    path: "/event",
                    children: ({ matches: S }) => i("a", {
                      href: m.active && m.url ? m.url : "/event",
                      target: m.active && m.url ? "_blank" : undefined,
                      rel:
                        m.active && m.url ? "noopener noreferrer" : undefined,
                      className: `${Oe.portalButton} ${
                        m.active ? Oe.portalActive : ""
                      } ${S ? Oe.active : ""}`,
                      title: "Ивент",
                      children: [
                        i("img", {
                          src: m.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: Oe.portalImage,
                        }),
                        i("span", { children: "Ивент" }),
                      ],
                    }),
                  }),
                  i(Er, {
                    href: "/notifications",
                    icon: i(uu, {}),
                    badge: a,
                    children: "Уведомления",
                  }),
                  i(Su, {
                    href: w,
                    icon: i(is, {}),
                    isActive: I,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: Oe.asideBottom,
            children: o
              ? i(Ie, {
                  children: [
                    !s?.subscription?.isActive &&
                      i("button", {
                        className: Oe.logoutButton,
                        onClick: () => h(true),
                        children: [
                          i("span", { children: "⭐" }),
                          i("span", { children: "ИТД НУКСТА" }),
                        ],
                      }),
                    i("button", {
                      className: Oe.logoutButton,
                      onClick: y,
                      children: [
                        i(B_, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: Oe.logoutButton,
                  href: ae.LOGIN,
                  children: [
                    i(is, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          f &&
            i(Ce, {
              fallback: null,
              children: i(P0, { isOpen: f, onClose: () => d(false) }),
            }),
          p &&
            i(Ce, {
              fallback: null,
              children: i(L0, { isOpen: p, onClose: () => h(false) }),
            }),
        ],
      });
};

const x0 = "cr1H";
const M0 = "V37z";
const D0 = "lHxu";
const U0 = "Zttl";
const xn = { sidebar: x0, sidebarContent: M0, sidebarBottom: D0, legalLinks: U0 };

const F0 = () => {
  const [e] = ar();
  return we(() => {
    const n = e.url || "/";
    return js.some(r => n.startsWith(r));
  }, [e.url])
    ? null
    : i("aside", {
        className: xn.sidebar,
        children: [
          i("div", { className: xn.sidebarContent }),
          i("div", {
            className: xn.sidebarBottom,
            children: [
              i("ul", {
                className: xn.legalLinks,
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
                className: xn.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const H0 = "S6as";
const B0 = "Ty1e";
const V0 = "z2Tn";
const W0 = "NROe";
const j0 = "xVkU";
const z0 = "Vls2";
const q0 = "q6HQ";
const G0 = "TW08";
const Y0 = "xoHw";
const K0 = "Qc4j";
const X0 = "PSqE";
const Z0 = "XASg";

const Me = {
  mobileNavigationWrapper: H0,
  navigation: B0,
  indicator: V0,
  indicatorHidden: W0,
  navItem: j0,
  label: z0,
  active: q0,
  createButton: G0,
  iconWrapper: Y0,
  portalImage: K0,
  portalImageActive: X0,
  badge: Z0,
};

const Wa = e => Symbol.iterator in e;

const ja = e => "entries" in e;

const za = (e, t) => {
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

const J0 = (e, t) => {
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

function Q0(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : Wa(e) && Wa(t)
    ? ja(e) && ja(t)
      ? za(e, t)
      : J0(e, t)
    : za(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function qa(e) {
  const t = Hn.useRef(undefined);
  return (n) => {
    const r = e(n);
    return Q0(t.current, r) ? t.current : (t.current = r);
  };
}
const eE = "uLrz";
const tE = "Bo41";
const nE = "J74N";
const rE = "B3lS";
const oE = "aGg7";
const sE = "eDUk";
const iE = "hA2v";
const aE = "htI5";
const cE = "VoMD";
const lE = "N76X";
const uE = "P4qm";
const dE = "xv02";
const fE = "dYWJ";
const hE = "SRgU";
const pE = "FpDO";
const mE = "fgPn";
const gE = "DbWw";
const _E = "OivR";
const yE = "vC5C";
const vE = "ghHG";
const EE = "X7Qc";
const wE = "EHnY";
const SE = "a7iA";

const Y = {
  skeleton: eE,
  comment: tE,
  content: nE,
  header: rE,
  headerLeft: oE,
  body: sE,
  actions: iE,
  likeBtn: aE,
  shimmer: cE,
  avatar: lE,
  more: uE,
  likeIcon: dE,
  name: fE,
  time: hE,
  line: pE,
  w100: mE,
  w85: gE,
  w65: _E,
  w50: yE,
  w40: vE,
  replyLabel: EE,
  likeCount: wE,
  list: SE,
};

function bE(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: Y.body,
          children: i("div", { className: `${Y.shimmer} ${Y.line} ${Y.w50}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: Y.body,
          children: [
            i("div", { className: `${Y.shimmer} ${Y.line} ${Y.w100}` }),
            i("div", { className: `${Y.shimmer} ${Y.line} ${Y.w65}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: Y.body,
          children: [
            i("div", { className: `${Y.shimmer} ${Y.line} ${Y.w100}` }),
            i("div", { className: `${Y.shimmer} ${Y.line} ${Y.w85}` }),
            i("div", { className: `${Y.shimmer} ${Y.line} ${Y.w40}` }),
          ],
        });
      }
  }
}
function Ys({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("div", {
    className: Y.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: Y.comment,
      children: [
        i("div", { className: `${Y.shimmer} ${Y.avatar}` }),
        i("div", {
          className: Y.content,
          children: [
            i("div", {
              className: Y.header,
              children: [
                i("div", {
                  className: Y.headerLeft,
                  children: [
                    i("div", { className: `${Y.shimmer} ${Y.name}` }),
                    i("div", { className: `${Y.shimmer} ${Y.time}` }),
                  ],
                }),
                i("div", { className: `${Y.shimmer} ${Y.more}` }),
              ],
            }),
            bE(e),
            i("div", {
              className: Y.actions,
              children: [
                i("div", { className: `${Y.shimmer} ${Y.replyLabel}` }),
                i("div", {
                  className: Y.likeBtn,
                  children: [
                    i("div", { className: `${Y.shimmer} ${Y.likeIcon}` }),
                    i("div", { className: `${Y.shimmer} ${Y.likeCount}` }),
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
const Ga = ["medium", "short", "long", "medium", "short"];
function CE({ count: e = 4 }) {
  return i("div", {
    className: Y.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(Ys, { variant: Ga[n % Ga.length], delayMs: n * 120 }, n)
    ),
  });
}

const Et = {
    MAX_CHARS: 1000/* 1e3 */,
    MIN_POLL_OPTIONS: 2,
    MAX_POLL_OPTIONS: 10,
    MAX_POLL_QUESTION_LENGTH: 200,
    MAX_POLL_OPTION_LENGTH: 100,
    MAX_TEXTAREA_HEIGHT: 400,
  };

const So = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function TE() {
  const [e, t] = L(false);
  const [n, r] = L(So);

  const o = N((m) => {
    if (m.length <= Et.MAX_POLL_QUESTION_LENGTH) {
      r(g => ({
        ...g,
        question: m
      }));
    }
  }, []);

  const s = N((m, g) => {
    if (g.length <= Et.MAX_POLL_OPTION_LENGTH) {
      r(w => ({
        ...w,
        options: w.options.map(_ => _.id === m ? { ..._, text: g } : _)
      }));
    }
  }, []);

  const a = N(() => {
    if (n.options.length < Et.MAX_POLL_OPTIONS) {
      r(m => ({
        ...m,
        options: [...m.options, { id: Date.now().toString(), text: "" }]
      }));
    }
  }, [n.options.length]);

  const c = N(
    (m) => {
      if (n.options.length > Et.MIN_POLL_OPTIONS) {
        r(g => ({
          ...g,
          options: g.options.filter(w => w.id !== m)
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
    r(So);
  }, []);

  const f = N(() => {
    t(m => !m);
  }, []);

  const d = N(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const g = n.options.filter(w => w.text.trim().length > 0);

    return m && g.length >= Et.MIN_POLL_OPTIONS;
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
    r(So);
  }, []);

  return {
    isPollOpen: e,
    poll: n,
    togglePoll: f,
    handlePollQuestionChange: o,
    handlePollOptionChange: s,
    handleAddPollOption: a,
    handleRemovePollOption: c,
    handleMultipleChoiceToggle: l,
    handleClosePoll: u,
    isPollValid: d,
    getPollData: p,
    resetPoll: h,
  };
}
function bu(e = 10, t = false) {
  const [n, r] = L([]);
  const [o, s] = L([]);
  const a = O(null);
  const c = O(n);
  const l = O(o);
  (c.current = n);
  (l.current = o);

  F(
    () => () => {
      c.current.forEach(E => URL.revokeObjectURL(E.previewUrl));

      l.current.forEach(E => URL.revokeObjectURL(E.previewUrl));
    },
    []
  );

  const u = o.length > 0;

  const f = n.some(E => E.type === "video") || o.some(E => E.type === "video");

  const d = n.some(E => E.type === "image") || o.some(E => E.type === "image");

  const p = N(() => {
    a.current?.click();
  }, []);

  const h = N(
    async (E) => {
      const I = hn.isValidVideoType(E);
      const S = hn.isValidImageType(E);
      if (I && !t) {
        yt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!S && !I) {
        yt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const R =
        c_current.some(P => P.type === "video") ||
        l_current.some(P => P.type === "video");

      const b =
        c_current.some(P => P.type === "image") ||
        l_current.some(P => P.type === "image");

      if (I && b) {
        yt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (S && R) {
        yt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (I && R) {
        yt.error("Можно загрузить только 1 видео");
        return;
      }
      const v = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const A = URL.createObjectURL(E);
      const T = I ? "video" : "image";
      s(P => [
        ...P,
        { id: v, file: E, previewUrl: A, progress: 0, type: T },
      ]);
      try {
        const P = await hn.uploadMedia(E);

        s(B => B.filter(ie => ie.id !== v));

        r(B => [
          ...B,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: P.id,
            url: P.url,
            previewUrl: A,
            type: T,
          },
        ]);
      } catch (P) {
        let B = "Ошибка загрузки";

        if (Ne(P)) {
          (B = Ds(P.code, P.message));
        } else if (P instanceof Error) {
          (B = P.message);
        }

        yt.error(B);

        s(ie => ie.filter(de => de.id !== v));

        URL.revokeObjectURL(A);
      }
    },
    [t]
  );

  const m = N(
    (E) => {
      const E_target = E.target;
      const E_target_files = E_target.files;
      if (!E_target_files || E_target_files.length === 0) {
        return;
      }
      const C = n.length + o.length;
      const k = e - C;
      if (k <= 0) {
        return;
      }
      Array.from(E_target_files).slice(0, k).forEach(h);
      (E_target.value = "");
    },
    [n.length, o.length, e, h]
  );

  const g = N((E) => {
    r((I) => {
      const S = I.find(C => C.id === E);

      if (S) {
        URL.revokeObjectURL(S.previewUrl);
      }

      return I.filter(C => C.id !== E);
    });

    s((I) => {
      const S = I.find(C => C.id === E);

      if (S) {
        URL.revokeObjectURL(S.previewUrl);
      }

      return I.filter(C => C.id !== E);
    });
  }, []);

  const w = N(
    (E) => {
      const I = E.filter(k => t ? hn.isValidMediaType(k) : hn.isValidImageType(k)
      );
      if (I.length === 0) {
        return;
      }
      const S = c.current.length + l.current.length;
      const C = e - S;

      if (C > 0) {
        I.slice(0, C).forEach(h);
      }
    },
    [e, h, t]
  );

  const _ = N(
    async (E) => {
      const [I, S] = E.split(",");
      const C = I.match(/:(.*?);/)?.[1] || "image/png";
      const k = atob(S);
      const R = new Uint8Array(k.length);
      for (let A = 0; A < k.length; A++) {
        R[A] = k.charCodeAt(A);
      }
      const b = new Blob([R], { type: C });
      const v = new File([b], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(v);
    },
    [h]
  );

  const y = N(() => {
    n.forEach(E => URL.revokeObjectURL(E.previewUrl));

    o.forEach(E => URL.revokeObjectURL(E.previewUrl));

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
    removeImage: g,
    addImage: _,
    uploadFiles: w,
    clearAll: y,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const NE = "Pyxw";
const IE = "uvLn";
const RE = "Zfnd";
const kE = "DmkF";
const AE = "ZUmX";
const OE = "xuTf";
const PE = "wxSw";
const LE = "lnMW";
const $E = "ydOI";
const xE = "eDKS";
const ME = "vbPj";
const DE = "KhVi";
const UE = "FFTO";
const FE = "p1CY";
const HE = "V33T";
const BE = "T75D";
const VE = "vv4u";
const WE = "rhwN";
const jE = "zsBE";
const zE = "a71k";
const qE = "YDou";
const GE = "giJU";
const YE = "gke0";
const KE = "FD8P";
const XE = "uecI";
const ZE = "AfR7";
const JE = "dqdR";
const QE = "SQ2k";
const ew = "cQ1S";
const tw = "cS7D";
const nw = "MpgP";
const rw = "iJdU";
const ow = "JDEh";
const sw = "zYzi";
const iw = "en0c";

const J = {
  form: NE,
  dragActive: IE,
  whatsNew: RE,
  editor: kE,
  dragOverlay: AE,
  attachments: OE,
  attachmentPreview: PE,
  uploading: LE,
  uploadError: $E,
  videoPreviewWrapper: xE,
  videoPlayIcon: ME,
  uploadOverlay: DE,
  spinner: UE,
  errorOverlay: FE,
  errorText: HE,
  removeAttachment: BE,
  actions: VE,
  mediaButtons: WE,
  mediaButton: jE,
  submitGroup: zE,
  charCount: qE,
  error: GE,
  pollContainer: YE,
  pollHeader: KE,
  pollTitle: XE,
  pollClose: ZE,
  pollQuestion: JE,
  pollOptions: QE,
  pollOptionRow: ew,
  pollOption: tw,
  removeOption: nw,
  addOption: rw,
  pollFooter: ow,
  pollToggle: sw,
  active: iw,
};

function Ya({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: J.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: J.videoPlayIcon,
            children: i(x_, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function Cu({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: J.attachments,
        children: [
          e.map(o => i(
            "div",
            {
              className: J.attachmentPreview,
              children: [
                i(Ya, { src: o.previewUrl, type: o.type }),
                i("button", {
                  className: J.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(ut, {}),
                }),
              ],
            },
            o.id
          )
          ),
          t.map(o => i(
            "div",
            {
              className: `${J.attachmentPreview} ${
                o.error ? J.uploadError : J.uploading
              }`,
              children: [
                i(Ya, { src: o.previewUrl, type: o.type }),
                !o.error &&
                  i("div", {
                    className: J.uploadOverlay,
                    children: i("div", { className: J.spinner }),
                  }),
                o.error &&
                  i("div", {
                    className: J.errorOverlay,
                    children: i("span", {
                      className: J.errorText,
                      children: o.error,
                    }),
                  }),
                i("button", {
                  className: J.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(ut, {}),
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
function aw({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: r,
  onRemoveOption: o,
  onMultipleChoiceToggle: s,
  onClose: a,
}) {
  return i("div", {
    className: J.pollContainer,
    children: [
      i("div", {
        className: J.pollHeader,
        children: [
          i("span", { className: J.pollTitle, children: "Опрос" }),
          i("button", {
            className: J.pollClose,
            onClick: a,
            children: i(ut, {}),
          }),
        ],
      }),
      i("input", {
        type: "text",
        className: J.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: c => t(c.target.value),
      }),
      i("div", {
        className: J.pollOptions,
        children: e.options.map((c, l) => i(
          "div",
          {
            className: J.pollOptionRow,
            children: [
              i("input", {
                type: "text",
                className: J.pollOption,
                placeholder: `Вариант ${l + 1}`,
                value: c.text,
                maxLength: 50,
                onInput: u => n(c.id, u.target.value),
              }),
              e.options.length > Et.MIN_POLL_OPTIONS &&
                i("button", {
                  className: J.removeOption,
                  onClick: () => o(c.id),
                  children: i(ut, {}),
                }),
            ],
          },
          c.id
        )
        ),
      }),
      e.options.length < Et.MAX_POLL_OPTIONS &&
        i("button", {
          className: J.addOption,
          onClick: r,
          children: [i(Vs, {}), i("span", { children: "Добавить вариант" })],
        }),
      i("div", {
        className: J.pollFooter,
        children: i("label", {
          className: J.pollToggle,
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
const cw = "yevv";
const lw = "iVWm";
const uw = "lNeL";
const dw = "HbYB";
const fw = "kv1p";
const hw = "EaVz";
const pw = "me9G";
const mw = "QPGD";
const gw = "qot4";
const _w = "q83T";
const yw = "g0S3";
const vw = "N71h";
const Ew = "Ablm";
const ww = "Gan3";
const Sw = "VKfo";
const bw = "uOrb";

const $e = {
  editor: cw,
  empty: lw,
  bold: uw,
  italic: dw,
  underline: fw,
  strike: hw,
  spoiler: pw,
  monospace: mw,
  quote: gw,
  link: _w,
  menu: yw,
  buttons: vw,
  button: Ew,
  linkForm: ww,
  linkInput: Sw,
  linkSubmit: bw,
};

const Vr = {
  bold: $e.bold,
  italic: $e.italic,
  underline: $e.underline,
  strike: $e.strike,
  spoiler: $e.spoiler,
  monospace: $e.monospace,
  quote: $e.quote,
  link: $e.link,
};

function bo(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function Cw(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Tw(e) {
  return e !== "mention" && e !== "hashtag";
}
function Ka(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!Tw(r.type)) {
      continue;
    }
    const o = Vr[r.type];
    const s = r.type === "link" ? ` data-url="${Cw(r.url)}"` : "";
    n = `<span class="${o}"${s}>${n}</span>`;
  }
  return n;
}
function Nw(e, t, n) {
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
function Iw(e, t) {
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
function Rw(e) {
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
      for (const [u, f] of Object.entries(Vr)) {
        if (s.classList.contains(f)) {
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
function kw(e, t) {
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
function Aw(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const Ow = [
    { type: "bold", icon: I_, title: "Жирный" },
    { type: "italic", icon: k_, title: "Курсив" },
    { type: "underline", icon: L_, title: "Подчёркнутый" },
    { type: "strike", icon: P_, title: "Зачёркнутый" },
    { type: "spoiler", icon: O_, title: "Спойлер" },
    { type: "monospace", icon: R_, title: "Моноширинный" },
    { type: "quote", icon: A_, title: "Цитата" },
    { type: "link", icon: nu, title: "Ссылка" },
  ];

const oo = Ml((
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
    onSubmit: f,
    disableFormatting: d = false,
    onImagePaste: p,
  },
  h
) => {
  const m = O(null);
  const [g, w] = L(false);
  const [_, y] = L({ x: 0, y: 0 });
  const [E, I] = L(false);
  const [S, C] = L("");
  const k = O(null);
  const R = O(null);
  const b = O(null);
  const v = O(false);
  const A = O(false);
  const T = O(t);
  const P = O(n);
  const B = O(r);

  F(() => {
    (T.current = t);
    (P.current = n);
    (B.current = r);
  }, [t, n, r]);

  Os(
    h,
    () => ({
      insertText: ($) => {
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        m_current.focus();
        const j = window.getSelection();
        if (!j) {
          return;
        }
        let ee = 0;
        if (j.rangeCount > 0) {
          const oe = j.getRangeAt(0);
          ee = Nw(m_current, oe.startContainer, oe.startOffset);
        }
        const T_current = T.current;
        const P_current = P.current;
        const fe = T_current.slice(0, ee) + $ + T_current.slice(ee);

        const ke = P_current.map(oe => oe.offset >= ee
          ? { ...oe, offset: oe.offset + $.length }
          : oe.offset + oe.length > ee
          ? { ...oe, length: oe.length + $.length }
          : oe
        );

        (A.current = true);
        (T.current = fe);
        (P.current = ke);
        const Te = document.createTextNode($);
        if (j.rangeCount > 0) {
          const oe = j.getRangeAt(0);
          oe.deleteContents();
          oe.insertNode(Te);
          oe.setStartAfter(Te);
          oe.setEndAfter(Te);
          j.removeAllRanges();
          j.addRange(oe);
        }
        B.current(fe, ke);
      },

      focus: () => {
        m.current?.focus();
      }
    }),
    []
  );

  const ie = N(() => {
    if (!t) {
      return "";
    }
    if (n.length === 0) {
      return bo(t);
    }

    const $ = [...n].sort((G, fe) => G.offset - fe.offset);

    const D = [];
    for (const G of $) {
      D.push({ pos: G.offset, type: "start", span: G });
      D.push({ pos: G.offset + G.length, type: "end", span: G });
    }
    D.sort((G, fe) => G.pos !== fe.pos
      ? G.pos - fe.pos
      : G.type !== fe.type
      ? G.type === "end"
        ? -1
        : 1
      : 0
    );
    let j = "";
    let ee = 0;
    const z = [];
    for (const G of D) {
      if (G.pos > ee) {
        const fe = t.substring(ee, G.pos);
        (j += Ka(bo(fe), z));
        (ee = G.pos);
      }
      if (G.type === "start") {
        z.push(G.span);
      } else {
        const fe = z.indexOf(G.span);

        if (fe !== -1) {
          z.splice(fe, 1);
        }
      }
    }
    if (ee < t.length) {
      const G = t.substring(ee);
      j += Ka(bo(G), z);
    }
    return j || "<br>";
  }, [t, n]);

  F(() => {
    if (A.current) {
      A.current = false;
      return;
    }
    const m_current = m.current;
    if (!m_current || (document.activeElement === m_current && t !== "")) {
      return;
    }
    const D = ie();

    if (m_current.innerHTML !== D) {
      (m_current.innerHTML = D);
    }
  }, [ie, t]);

  F(() => {
    if (a && m.current) {
      const m_current = m.current;
      m_current.focus();

      if (m_current.childNodes.length > 0) {
        const D = window.getSelection();
        if (D) {
          const j = document.createRange();
          j.selectNodeContents(m_current);
          j.collapse(false);
          D.removeAllRanges();
          D.addRange(j);
        }
      }
    }
  }, [a]);

  F(() => {
    if (E && R.current) {
      R.current.focus();
    }
  }, [E]);

  const de = N(
      ($) => {
        if (v.current) {
          return;
        }
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        if ($?.data === " ") {
          const z = window.getSelection();
          if (z && z.rangeCount > 0) {
            const fe = z.getRangeAt(0).startContainer;
            let ke = null;
            let Te = fe;

            while (Te && Te !== m_current) {
              if (Te.nodeType === Node.ELEMENT_NODE) {
                const oe = Te;
                if (oe.tagName === "SPAN" && oe.className) {
                  ke = oe;
                  break;
                }
              }
              Te = Te.parentNode;
            }

            if (ke) {
              const oe = ke.textContent || "";
              if (oe.endsWith(" ")) {
                ke.textContent = oe.slice(0, -1);
                const Ft = document.createTextNode(" ");
                ke.parentNode?.insertBefore(Ft, ke.nextSibling);
                const ht = document.createRange();
                ht.setStartAfter(Ft);
                ht.setEndAfter(Ft);
                z.removeAllRanges();
                z.addRange(ht);
              }
            }
          }
        }
        const j = m_current.innerText.replace(/\n$/, "");
        if (j.length > s) {
          const z = j.substring(0, s);
          (A.current = true);
          r(z, Iw(n, z));
          return;
        }
        const ee = Rw(m_current);
        (A.current = true);
        r(j, ee);
      },
      [s, r, n]
    );

  const pe = N(
    ($) => {
      if (d) {
        return;
      }
      const D = window.getSelection();
      if (!D || D.isCollapsed) {
        return;
      }
      $.preventDefault();
      (b.current = D.getRangeAt(0).cloneRange());

      const j = Math.max(
          10,
          Math.min($.clientX - 150, window.innerWidth - 310)
        );

      const ee = Math.max(10, $.clientY - 50);
      y({ x: j, y: ee });
      w(true);
    },
    [d]
  );

  const se = N(
    ($) => {
      $.preventDefault();

      if (p && $.clipboardData?.files?.length) {
        const G = Array.from($.clipboardData.files).filter(fe => fe.type.startsWith("image/")
        );
        if (G.length > 0) {
          p(G);
          return;
        }
      }

      const D = $.clipboardData?.getData("text/plain") || "";
      if (!D) {
        return;
      }
      const j = window.getSelection();
      if (!j || !j.rangeCount) {
        return;
      }
      const ee = j.getRangeAt(0);
      ee.deleteContents();
      const z = document.createTextNode(D);
      ee.insertNode(z);
      ee.setStartAfter(z);
      ee.setEndAfter(z);
      j.removeAllRanges();
      j.addRange(ee);
      de();
    },
    [de, p]
  );

  const q = N(() => {
    const m_current = m.current;
    if (m_current && !T.current) {
      const D = window.getSelection();
      if (D) {
        const j = document.createRange();
        j.setStart(m_current, 0);
        j.collapse(true);
        D.removeAllRanges();
        D.addRange(j);
      }
    }
  }, []);

  const te = N(
    ($) => {
      if ($.key === "Enter" && !$.shiftKey && f) {
        $.preventDefault();
        f();
        return;
      }
      if (!d && ($.ctrlKey || $.metaKey)) {
        let D = null;
        switch ($.key.toLowerCase()) {
          case "b":
            {
              D = "bold";
              break;
            }
          case "i":
            {
              D = "italic";
              break;
            }
          case "u":
            {
              D = "underline";
              break;
            }
        }

        if (D) {
          $.preventDefault();
          re(D);
        }
      }
    },
    [f, d]
  );

  const re = N(
    ($, D) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const ee = window.getSelection();
      if (!ee ||
      (b.current && (ee.removeAllRanges(), ee.addRange(b.current)),
      ee.isCollapsed)) {
        return;
      }
      const z = ee.getRangeAt(0);
      const G = document.createElement("span");
      (G.className = Vr[$]);

      if ($ === "link" && D) {
        (G.dataset.url = D);
      }

      const fe = kw(z.commonAncestorContainer, Vr[$]);
      if (fe) {
        Aw(fe);
      } else {
        try {
          z.surroundContents(G);
        } catch {
          const ke = z.extractContents();
          G.appendChild(ke);
          z.insertNode(G);
        }
      }
      de();
      w(false);
      I(false);
      C("");
      (b.current = null);
      m_current.focus();
    },
    [de]
  );

  const V = N(
    ($) => {
      if ($ === "link") {
        I(true);
      } else {
        re($);
      }
    },
    [re]
  );

  const _e = N(
    ($) => {
      $.preventDefault();

      if (S.trim()) {
        re("link", S.trim());
      }
    },
    [re, S]
  );

  F(() => {
    if (!g) {
      return;
    }

    const $ = (j) => {
      if (k.current &&
        !k.current.contains(j.target)) {
        w(false);
        I(false);
        C("");
        (b.current = null);
      }
    };

    const D = () => {
      w(false);
      I(false);
      C("");
      (b.current = null);
    };

    document.addEventListener("mousedown", $);
    window.addEventListener("scroll", D, true);

    return () => {
      document.removeEventListener("mousedown", $);
      window.removeEventListener("scroll", D, true);
    };
  }, [g]);
  const ge = !t;
  return i(Ie, {
    children: [
      i("div", {
        ref: m,
        className: `${$e.editor} ${c} ${ge ? $e.empty : ""}`,
        contentEditable: true,
        "data-placeholder": o,
        onInput: $ => de($),
        onFocus: q,
        onPaste: se,
        onContextMenu: pe,
        onKeyDown: te,
        onCompositionStart: () => {
          v.current = true;
        },
        onCompositionEnd: () => {
          (v.current = false);
          de();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      g &&
        $(
          i("div", {
            ref: k,
            className: $e.menu,
            style: { left: _.x, top: _.y },
            children: E
              ? i("form", {
                  className: $e.linkForm,
                  onSubmit: _e,
                  children: [
                    i("input", {
                      ref: R,
                      type: "url",
                      className: $e.linkInput,
                      placeholder: "https://...",
                      value: S,
                      onInput: $ => C($.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: $e.linkSubmit,
                      disabled: !S.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: $e.buttons,
                  children: Ow.map(({ type: $, icon: D, title: j }) => i(
                    "button",
                    {
                      type: "button",
                      className: $e.button,
                      onClick: () => V($),
                      title: j,
                      children: i(D, { size: 16 }),
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

const Pw = "FbnL";
const Lw = "tD91";
const $w = "Yysz";
const xw = "RKbi";
const Mw = "HKSV";
const Dw = "y7VM";
const Uw = "raNw";
const Fw = "BnUH";
const Hw = "gWTK";
const Bw = "fiig";
const Vw = "pTsa";
const Ww = "IzrZ";
const jw = "OnM1";
const zw = "MDGR";
const qw = "Wl1P";
const Gw = "A8dS";
const Yw = "gy0c";
const Kw = "VkPz";
const Xw = "GDBS";
const Zw = "qHHC";
const Jw = "Hb9t";

const ye = {
  commentInput: Pw,
  replyMode: Lw,
  inputRow: $w,
  attachmentStrip: xw,
  circleButton: Mw,
  micButton: Dw,
  sendButton: Uw,
  submitting: Fw,
  textareaContainer: Hw,
  expanded: Bw,
  voiceMode: Vw,
  inputWrapper: Ww,
  commentCharCount: jw,
  error: zw,
  input: qw,
  replyHeader: Gw,
  replyText: Yw,
  replyName: Kw,
  replyClose: Xw,
  dragActive: Zw,
  dragOverlay: Jw,
};

const Qw = "bCUO";
const eS = "A8Dy";
const tS = "jd50";
const Co = { textInput: Qw, entering: eS, sendButton: tS };
const nS = 1000/* 1e3 */;
function rS({
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
  const f = nS - e.length;
  const d = f < 0;
  const p = [Co.textInput, s ? Co.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: p,
    children: [
      i("div", {
        className: ye.inputWrapper,
        children: [
          i(oo, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: r,
            autoFocus: a,
            className: ye.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d ? undefined : o,
            disableFormatting: true,
            onImagePaste: u,
          }),
          d &&
            i("span", {
              className: `${ye.commentCharCount} ${ye.error}`,
              children: f,
            }),
        ],
      }),
      i("button", {
        className: `${ye.circleButton} ${ye.sendButton} ${Co.sendButton} ${
          c ? ye.submitting : ""
        }`,
        onClick: o,
        disabled: c || l || d,
        children: c ? i(gu, { size: "xs" }) : i(M_, { size: 20 }),
      }),
    ],
  });
}
const oS = ne(() => Z(
  () => import("./VoiceInput-Du8nad4O.js"),
  __vite__mapDeps([10, 11, 12])
).then(e => ({
  default: e.VoiceInput
}))
);
function Tu({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: o,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = no();
  const [f, d] = L("text");
  const [p, h] = L(false);
  const [m, g] = L(false);
  const [w, _] = L(false);
  const [y, E] = L(false);
  const I = O(false);
  const S = O(null);
  const C = O(0);

  const {
    images: k,
    uploadingImages: R,
    isUploading: b,
    openFilePicker: v,
    removeImage: A,
    uploadFiles: T,
    clearAll: P,
    fileInputRef: B,
    handleFileChange: ie,
  } = bu(4);

  F(
    () => () => {
      if (S.current) {
        clearTimeout(S.current);
      }
    },
    []
  );
  const de = k.length > 0 || R.length > 0;
  const pe = a.length > 0 || w || de;
  const se = f === "voice";
  const q = 1000/* 1e3 */;

  const te = async () => {
    const z = a.trim().length > 0;
    const G = k.length > 0;
    if ((!z && !G) || w || b || a.length > q) {
      return;
    }
    const fe = a.trim();
    const ke = [...c];

    const Te = k.map(oe => ({
      mediaId: oe.mediaId
    }));

    _(true);
    try {
      await e(fe, ke, Te.length > 0 ? Te : undefined);
      u();
      P();
    } catch (oe) {
      console.error("Failed to submit comment:", oe);
    } finally {
      _(false);
    }
  };

  const re = () => {
    (I.current = true);
    d("voice");
    g(false);
  };

  const V = () => {
    h(true);
  };

  const _e = () => {
    h(false);
    d("text");
    g(true);

    if (S.current) {
      clearTimeout(S.current);
    }

    (S.current = window.setTimeout(() => {
      (S.current = null);
      g(false);
    }, 300));
  };

  const ge = N((z) => {
    z.preventDefault();
    z.stopPropagation();
    C.current++;

    if (z.dataTransfer?.types.includes("Files")) {
      E(true);
    }
  }, []);

  const $ = N((z) => {
    z.preventDefault();
    z.stopPropagation();
  }, []);

  const D = N((z) => {
    z.preventDefault();
    z.stopPropagation();
    C.current--;

    if (C.current === 0) {
      E(false);
    }
  }, []);

  const j = N(
    (z) => {
      z.preventDefault();
      z.stopPropagation();
      (C.current = 0);
      E(false);
      const G = z.dataTransfer?.files;

      if (G && G.length > 0) {
        T(Array.from(G));
      }
    },
    [T]
  );

  const ee = [
    ye.commentInput,
    pe ? ye.expanded : "",
    se ? ye.voiceMode : "",
    r ? ye.replyMode : "",
    y ? ye.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return i("div", {
    className: ee,
    onDragEnter: ge,
    onDragOver: $,
    onDragLeave: D,
    onDrop: j,
    children: [
      y &&
        i("div", {
          className: ye.dragOverlay,
          children: [
            i(cu, { size: 24 }),
            i("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        i("div", {
          className: ye.replyHeader,
          children: [
            i("span", {
              className: ye.replyText,
              children: [
                "Ответ для ",
                i("span", { className: ye.replyName, children: r.authorName }),
              ],
            }),
            i("button", {
              className: ye.replyClose,
              onClick: o,
              children: i(ut, { size: 16 }),
            }),
          ],
        }),
      !se &&
        !p &&
        de &&
        i("div", {
          className: ye.attachmentStrip,
          children: i(Cu, { images: k, uploadingImages: R, onRemove: A }),
        }),
      i("div", {
        className: ye.inputRow,
        children: [
          i("button", {
            className: ye.circleButton,
            onClick: se ? V : v,
            children: se ? i(ut, { size: 20 }) : i(ru, { size: 20 }),
          }),
          i("div", {
            className: ye.textareaContainer,
            children:
              se || p
                ? i(Ce, {
                    fallback: null,
                    children: i(oS, {
                      onCancel: V,
                      onSend: t,
                      isExiting: p,
                      onExitComplete: _e,
                    }),
                  })
                : i(rS, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: te,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: w,
                    sendDisabled: b,
                    onImagePaste: T,
                  }),
          }),
          !se &&
            !p &&
            i("button", {
              className: `${ye.circleButton} ${ye.micButton}`,
              onClick: re,
              children: i($_, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: B,
        type: "file",
        accept: as,
        multiple: true,
        onChange: ie,
        style: { display: "none" },
      }),
    ],
  });
}
const sS = "OiGP";
const iS = "VJHu";
const aS = "Vist";
const cS = "m0VT";
const lS = "sFfg";
const uS = "uPGS";
const dS = "IrFz";

const jt = {
  counter: sS,
  digit: iS,
  prev: aS,
  current: cS,
  animating: lS,
  up: uS,
  down: dS,
};

function fS(e) {
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
function Bn({ value: e }) {
  const t = fS(e);
  const n = O(e);
  const r = O(t.length);
  const o = O(Date.now());

  const [s, a] = L(() => t
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

    const g = Math.max(h.length, m.length);
    const w = m.join("").padStart(g, " ").split("");

    const y = h
      .join("")
      .padStart(g, " ")
      .split("")
      .map((I, S) => {
      const C = w[S] || " ";
      const k = s[S - (g - s.length)];
      return I !== C
        ? (r.current++,
          { char: I, prevChar: C, isAnimating: true, key: r.current })
        : { char: I, prevChar: I, isAnimating: false, key: k?.key ?? S };
    })
      .filter(I => I.char !== " " || I.isAnimating);

    a(y);
    const E = setTimeout(() => {
      a(I => I.map(S => ({
        ...S,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(E);
  }, [e]);

  if (!s.some(d => d.isAnimating)) {
    return i("span", { children: t });
  }

  const f = c === "up" ? jt.up : c === "down" ? jt.down : "";
  return i("span", {
    className: jt.counter,
    children: s.map(d => d.isAnimating
      ? i(
          "span",
          {
            className: `${jt.digit} ${jt.animating} ${f}`,
            children: [
              i("span", { className: jt.prev, children: d.prevChar }),
              i("span", { className: jt.current, children: d.char }),
            ],
          },
          d.key
        )
      : i("span", { children: d.char }, d.key)
    ),
  });
}
const hS = "YBFR";
const pS = "yv6V";
const mS = "Dt3w";
const gS = "vxyi";
const _S = "ediv";
const yS = "aAyj";
const vS = "ZhUK";
const ES = "Vis2";
const wS = "Enzz";

const mt = {
  dropdownWrapper: hS,
  trigger: pS,
  menu: mS,
  hidden: gS,
  menuItem: _S,
  danger: yS,
  itemIcon: vS,
  itemLabel: ES,
  divider: wS,
};

function Nu({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: o,
}) {
  const [s, a] = L(false);
  const [c, l] = L(false);
  const [u, f] = L({ top: 0, left: 0 });
  const d = O(null);
  const p = O(null);

  const h = N(() => {
    if (!d.current) {
      return;
    }
    const _ = d.current.getBoundingClientRect();
    const y = p.current?.offsetHeight || 150;
    const E = p.current?.offsetWidth || 160;
    let I = 0;
    let S = 0;

    if (n.startsWith("bottom")) {
      (I = _.bottom + 4);
    } else {
      (I = _.top - y - 4);
    }

    if (n.endsWith("right")) {
      (S = _.right - E);
    } else {
      (S = _.left);
    }

    const {
      innerWidth,
      innerHeight
    } = window;

    if (S + E > innerWidth) {
      (S = innerWidth - E - 8);
    }

    if (S < 8) {
      (S = 8);
    }

    if (I + y > innerHeight) {
      (I = _.top - y - 4);
    }

    if (I < 8) {
      (I = _.bottom + 4);
    }

    f({ top: I, left: S });
    l(true);
  }, [n]);

  const m = N((_) => {
    const _target = _.target;

    if (d.current &&
      !d.current.contains(_target) &&
      p.current &&
      !p.current.contains(_target)) {
      a(false);
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

  const g = (_) => {
    _.stopPropagation();

    if (s) {
      a(false);
      l(false);
    } else {
      a(true);
    }
  };

  const w = (_, y) => {
    _.stopPropagation();
    y.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${mt.dropdownWrapper} ${o || ""}`,
    children: [
      i("div", { ref: d, className: mt.trigger, onClick: g, children: e }),
      s &&
        $(
          i("div", {
            ref: p,
            className: `${mt.menu} ${c ? "" : mt.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((_, y) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${mt.menuItem} ${_.danger ? mt.danger : ""}`,
                    onClick: E => w(E, _),
                    children: [
                      _.icon &&
                        i("span", {
                          className: mt.itemIcon,
                          children: _.icon,
                        }),
                      i("span", {
                        className: mt.itemLabel,
                        children: _.label,
                      }),
                    ],
                  }),
                  r.includes(_.id) &&
                    y < t.length - 1 &&
                    i("div", { className: mt.divider }),
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
const SS = "fvNT";
const bS = "VgLv";
const CS = "stBL";
const TS = "TzMT";
const NS = "ZUI3";
const IS = "Vrbg";
const RS = "zL2u";
const kS = "r0SJ";

const Rt = {
  underline: SS,
  monospace: bS,
  quote: CS,
  spoiler: TS,
  revealed: NS,
  link: IS,
  mention: RS,
  hashtag: kS,
};

function AS(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function OS(e) {
  if (!AS(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const o = btoa(r);
  return `/external?url=${encodeURIComponent(o)}`;
}
function Iu({ text: e, spans: t = [], className: n = "" }) {
  const [r, o] = L(new Set());

  const s = we(() => {
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
        let g;
        let w;
        let _;

        d.forEach((y) => {
          m.add(y.type);

          if (y.type === "link" && y.url) {
            (g = y.url);
          }

          if (y.type === "mention" &&
            (y.username || y.id)) {
            (w = y.username || y.id);
          }

          if (y.type === "hashtag" && y.tag) {
            (_ = y.tag);
          }
        });

        u.push({ text: h, styles: m, url: g, mentionId: w, hashtag: _ });
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

  const a = (l, u) => {
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
      (l_text = i("strong", { children: l_text }));
    }

    if (l.styles.has("italic")) {
      (l_text = i("em", { children: l_text }));
    }

    if (l.styles.has("underline")) {
      (l_text = i("span", { className: Rt.underline, children: l_text }));
    }

    if (l.styles.has("strike")) {
      (l_text = i("s", { children: l_text }));
    }

    if (l.styles.has("monospace")) {
      (l_text = i("code", { className: Rt.monospace, children: l_text }));
    }

    if (l.styles.has("quote")) {
      (l_text = i("span", { className: Rt.quote, children: l_text }));
    }

    if (l.styles.has("spoiler")) {
      const d = r.has(u);
      l_text = i("span", {
        className: `${Rt.spoiler} ${d ? Rt.revealed : ""}`,
        onClick: p => a(p, u),
        children: l_text,
      });
    }

    if (l.styles.has("link") && l.url) {
      const d = OS(l.url);
      l_text = i("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Rt.link,
        onClick: p => p.stopPropagation(),
        children: l_text,
      });
    }
    if (l.styles.has("mention") && l.mentionId) {
      const d = `/@${l.mentionId}`;
      l_text = i("a", {
        href: d,
        className: Rt.mention,
        onClick: (p) => {
          p.preventDefault();
          p.stopPropagation();
          je(d);
        },
        children: l_text,
      });
    }
    if (l.styles.has("hashtag") && l.hashtag) {
      const d = `/hashtag/${encodeURIComponent(l.hashtag)}`;
      l_text = i("a", {
        href: d,
        className: Rt.hashtag,
        onClick: (p) => {
          p.preventDefault();
          p.stopPropagation();
          je(d);
        },
        children: l_text,
      });
    }
    return i("span", { children: l_text }, u);
  };

  return i("span", { className: n, children: s.map((l, u) => c(l, u)) });
}
function PS(e, t, n) {
  const { isVisible: r, isRevealing: o, onRevealComplete: s } = n;
  const a = O([]);
  const c = O(null);
  const l = O(null);
  const u = O({ width: 0, height: 0 });
  const f = O(1);

  const d = N((g, w) => {
    const _ = Math.random() * 80 + 60;
    return {
      x: Math.random() * g,
      y: Math.random() * w,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * _,
      maxLife: _,
    };
  }, []);

  const p = N(
    (g, w) => {
      const _ = Math.floor((g * w) / 600);
      const y = [];
      for (let E = 0; E < _; E++) {
        y.push(d(g, w));
      }
      a.current = y;
    },
    [d]
  );

  const h = N(() => {
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
      const E = e_current.getContext("2d");

      if (E) {
        E.setTransform(y, 0, 0, y, 0, 0);
        (l.current = E);
      }

      p(_.width, _.height);
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
    const g = () => {
      const l_current = l.current;
      const { width: _, height: y } = u.current;
      if (!l_current || _ === 0 || y === 0) {
        c.current = requestAnimationFrame(g);
        return;
      }
      if (o && ((f.current -= 0.05), f.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, _, y);

      a.current.forEach((E, I) => {
        (E.x += E.speedX);
        (E.y += E.speedY);
        E.life--;

        if (E.x < 0) {
          (E.x = _);
        }

        if (E.x > _) {
          (E.x = 0);
        }

        if (E.y < 0) {
          (E.y = y);
        }

        if (E.y > y) {
          (E.y = 0);
        }

        if (E.life <= 0) {
          a.current[I] = d(_, y);
          return;
        }

        const S = E.life / E.maxLife;
        const C = S < 0.3 ? S / 0.3 : 1;
        const k = E.opacity * C * f.current;
        l_current.beginPath();
        l_current.arc(E.x, E.y, E.size, 0, Math.PI * 2);
        (l_current.fillStyle = `rgba(255, 255, 255, ${k})`);
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
  }, [r, o, d, h, s]);

  return { resetOpacity: m };
}
const LS = "g80T";
const $S = "zLGu";
const xS = "ZPYc";
const MS = "C5kA";
const DS = "Jjwo";
const Mn = { container: LS, hidden: $S, image: xS, revealing: MS, canvas: DS };
const Xa = 5;
function Za({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: r,
  height: o,
  className: s = "",
  onClick: a,
}) {
  const [c, l] = L(!n);
  const [u, f] = L(false);
  const [d, p] = L(false);
  const h = O(null);
  const m = O(null);
  const g = O(null);
  const w = O(false);

  const { resetOpacity: _ } = PS(h, m, {
    isVisible: d && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  F(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const R = new IntersectionObserver(
      (b) => {
        b.forEach((v) => {
          p(v.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    R.observe(m_current);

    return () => {
      R.disconnect();
    };
  }, []);

  const y = (k) => {
    (g.current = { x: k.clientX, y: k.clientY });
    (w.current = false);
  };

  const E = (k) => {
    if (!g.current) {
      return;
    }
    const R = Math.abs(k.clientX - g.current.x);
    const b = Math.abs(k.clientY - g.current.y);

    if ((R > Xa || b > Xa)) {
      (w.current = true);
    }
  };

  const I = (k) => {
    if (w.current) {
      (w.current = false);
      k.stopPropagation();
      return;
    }

    if (!c && !u && n) {
      k.stopPropagation();
      f(true);
      _();
    } else if (a) {
      a(k);
    }
  };

  const S = !c && n;
  const C = r && o ? { aspectRatio: `${r} / ${o}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${Mn.container} ${s} ${S ? Mn.hidden : ""} ${
          u ? Mn.revealing : ""
        }`,
        style: C,
        onPointerDown: y,
        onPointerMove: E,
        onClick: I,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: Mn.image,
            loading: "lazy",
            width: r,
            height: o,
            draggable: false,
            "data-post-media-image": true,
          }),
          S && i("canvas", { ref: h, className: Mn.canvas }),
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
function US(e) {
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
function To(e, t) {
  const r =
      (e
        ? [
            ...(e.matches("img") ? [e] : []),
            ...Array.from(e.querySelectorAll("img")),
          ]
        : []
      ).find((w) => {
        const _ = w.getBoundingClientRect();
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
  const f = Math.max(o.left, a);
  const d = Math.max(o.top, c);
  const p = Math.min(o.right, l);
  const h = Math.min(o.bottom, u);
  const m = Math.max(0, p - f);
  const g = Math.max(0, h - d);
  return m <= 0 || g <= 0
    ? null
    : {
        left: f,
        top: d,
        width: m,
        height: g,
        hiddenLeft: f - o.left,
        hiddenTop: d - o.top,
        hiddenRight: o.right - p,
        hiddenBottom: o.bottom - h,
        borderRadius: US(r),
      };
}
const Ja = { photo_open: 1, video_progress: 2 };
const FS = 2000/* 2e3 */;
const HS = 20;
const Qa = "dwell_sid";
function BS() {
  try {
    let e = sessionStorage.getItem(Qa);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Qa, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class VS {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = BS());
      window.setInterval(() => this.flush(), FS);
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
    const s = { t: Ja.photo_open, v: t, ai: n };

    if (r !== undefined) {
      (s.mi = r);
    }

    if (o) {
      (s.s = Br[o]);
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
      t: Ja.video_progress,
      v: t,
      ai: n,
      pm: Math.round(r),
      dm: Math.round(o),
    };

    if (s) {
      (a.s = Br[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= HS) {
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
    M.post(x.posts.interactionLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    M.post(
      x.posts.interactionLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const WS = new VS();
function jS(e, t) {
  return N(
    (n, r) => {
      if (!e || !n) {
        return;
      }
      const o = t === "post_page" || t === "link";
      WS.trackPhotoOpen(e, n, r, o ? t : undefined);
    },
    [e, t]
  );
}
const zS = "X8Cf";
const qS = "fOTa";
const GS = "SPe0";
const YS = "hK7g";
const KS = "Pg3i";
const XS = "GdvF";
const ZS = "IZs0";

const Ae = {
  mediaWrapper: zS,
  isFeed: qS,
  single: GS,
  image: YS,
  singleVideo: KS,
  media: XS,
  dragging: ZS,
};

const ec = ne(() => Z(
  () => import("./PostMediaVideo-Br-HiYvW.js"),
  __vite__mapDeps([13, 14, 15])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const JS = 5;
const QS = 0.95;
const No = 0.5;
const e1 = 650;
const t1 = 500;
const n1 = 300;
function r1(e, t, n, r) {
  const o = e / t;
  return o > n / r ? Math.min(e, n) : Math.min(t, r) * o;
}
function Ks({ media: e, isFeed: t = false, postVs: n, source: r }) {
  const o = e?.filter(T => T.type === "image") ?? [];

  const s = e?.filter(T => T.type === "video") ?? [];

  const a = O(null);

  const c = Xl(T => T.open);

  const u = bt() ? n1 : t1;
  const f = jS(n, r);
  const d = O(false);
  const p = O(0);
  const h = O(0);
  const m = O(false);
  const g = O(0);
  const w = O(0);
  const _ = O(0);
  const y = O(null);

  const E = () => {
    if (y.current) {
      cancelAnimationFrame(y.current);
      (y.current = null);
    }
  };

  const I = () => {
    const a_current = a.current;
    if (a_current) {
      (_.current *= QS);

      if (Math.abs(_.current) < No) {
        E();
        return;
      }

      (a_current.scrollLeft += _.current);
      (y.current = requestAnimationFrame(I));
    }
  };

  const S = (T) => {
    const a_current = a.current;

    if (a_current && o.length + s.length > 1) {
      E();
      (d.current = true);
      a_current.classList.add(Ae.dragging);
      (p.current = T.clientX);
      (g.current = T.clientX);
      (w.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (_.current = 0);
      T.preventDefault();
    }
  };

  const C = (T) => {
    if (!d.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const B = Date.now();
    const ie = T.clientX - p.current;
    const de = T.clientX - g.current;
    const pe = B - w.current;

    if (Math.abs(ie) > JS) {
      (m.current = true);
    }

    if (pe > 0) {
      (_.current = (-de / pe) * 16);
    }

    (g.current = T.clientX);
    (w.current = B);
    (a_current.scrollLeft = h.current - ie);
  };

  const k = () => {
    if (d.current && Math.abs(_.current) > No) {
      I();
    }

    (d.current = false);
    a.current?.classList.remove(Ae.dragging);
  };

  const R = () => {
    if (d.current) {
      Math.abs(_.current) > No && I();
      (d.current = false);
      a.current?.classList.remove(Ae.dragging);
    }
  };

  F(
    () => () => {
      E();
      a.current?.classList.remove(Ae.dragging);
    },
    []
  );

  const b = (T, P) => {
    if (m.current) {
      (m.current = false);
      P.stopPropagation();
      return;
    }
    const o_T = o[T];

    if (o_T) {
      f(o_T.id, T);
    }

    const ie = P.currentTarget ?? null;
    const de = To(ie, a.current);

    const pe = (se) => {
      const a_current = a.current;
      if (!a_current) {
        return se !== T || !ie?.isConnected ? null : To(ie, null);
      }
      const te = a_current.querySelectorAll("[data-post-media-image]")[se];
      return te
        ? (te.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          To(te, a_current))
        : null;
    };

    c(
      o.map(se => ({
        id: se.id,
        url: se.url,
        width: se.width || 800,
        height: se.height || 600
      })),
      T,
      de,
      pe
    );
  };

  const v = (T) => {
    T.stopPropagation();
    (m.current = false);
  };

  if (o.length === 0 && s.length === 0) {
    return null;
  }
  const A = o.length + s.length;
  if (A === 1) {
    if (o.length === 1) {
      const [T] = o;

      const P =
        T.width && T.height
          ? {
              width: `${Math.round(r1(T.width, T.height, e1, u))}px`,
              aspectRatio: `${T.width} / ${T.height}`,
            }
          : undefined;

      return i("div", {
        className: `${Ae.mediaWrapper} ${t ? Ae.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: Ae.single,
          style: P,
          onClick: (B) => {
            B.stopPropagation();
            b(0, B);
          },
          children: i(
            Za,
            {
              src: T.url,
              spoiler: T.spoiler,
              width: T.width,
              height: T.height,
              className: Ae.image,
              onClick: (B) => {
                B.stopPropagation();
                b(0, B);
              },
            },
            T.id
          ),
        }),
      });
    }
    if (s.length === 1) {
      const [T] = s;
      return i("div", {
        className: `${Ae.mediaWrapper} ${t ? Ae.isFeed : ""}`,
        "data-count": 1,
        onClick: P => P.stopPropagation(),
        children: i("div", {
          className: Ae.singleVideo,
          children: i(Ce, {
            fallback: null,
            children: i(
              ec,
              {
                src: T.url,
                spoiler: T.spoiler,
                width: T.width,
                height: T.height,
                duration: T.duration,
                postVs: n,
                source: r,
                attachmentId: T.id,
              },
              T.id
            ),
          }),
        }),
      });
    }
  }
  return i("div", {
    className: `${Ae.mediaWrapper} ${t ? Ae.isFeed : ""}`,
    "data-count": A,
    children: i("div", {
      ref: a,
      className: `${Ae.media} ${t ? Ae.isFeed : ""}`,
      "data-count": A,
      onClick: v,
      onMouseDown: S,
      onMouseMove: C,
      onMouseUp: k,
      onMouseLeave: R,
      children: [
        s.map(T => i(
          Ce,
          {
            fallback: null,
            children: i(ec, {
              src: T.url,
              spoiler: T.spoiler,
              width: T.width,
              height: T.height,
              duration: T.duration,
              className: Ae.image,
              postVs: n,
              source: r,
              attachmentId: T.id,
            }),
          },
          T.id
        )
        ),
        o.map((T, P) => i(
          Za,
          {
            src: T.url,
            spoiler: T.spoiler,
            width: T.width,
            height: T.height,
            className: Ae.image,
            onClick: B => b(P, B),
          },
          T.id
        )
        ),
      ],
    }),
  });
}
const Ru = 0.5;
const o1 = 250;
const s1 = 1000/* 1e3 */;
const i1 = 50;
const a1 = [0, Ru, 1];
const Zt = new Set();
const Pr = new WeakMap();
const Kt = new Map();
const Xt = new Map();
const Wr = new Set();
const wr = new Set();
let Io = null;
let pn = null;
function c1(e) {
  if (Wr.size !== 0) {
    wr.add(e);

    Io === null &&
      (Io = setTimeout(() => {
      (Io = null);

      if (wr.size === 0) {
        return;
      }

      const t = Array.from(wr);
      wr.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const r of Wr) {
        r(n);
      }
    }, i1));
  }
}
function l1() {
  return (pn || (typeof IntersectionObserver === "undefined" ? null : ((pn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Pr.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const r = t.intersectionRatio >= Ru;
            for (const o of n) {
              if (r) {
                const s = Xt.get(o);
                if (s !== undefined) {
                  clearTimeout(s);
                  Xt.delete(o);
                  continue;
                }
                if (Zt.has(o) || Kt.has(o)) {
                  continue;
                }
                const a = setTimeout(() => {
                  Kt.delete(o);
                  Zt.add(o);
                  c1(o);
                }, o1);
                Kt.set(o, a);
              } else {
                const s = Kt.get(o);

                if (s !== undefined) {
                  clearTimeout(s);
                  Kt.delete(o);
                }

                if (!Zt.has(o) || Xt.has(o)) {
                  continue;
                }

                const a = setTimeout(() => {
                  Xt.delete(o);
                  Zt.delete(o);
                }, s1);
                Xt.set(o, a);
              }
            }
          }
        },
        { threshold: a1 }
      )), pn)));
}

const jr = {
    observe(e, t) {
      const n = l1();
      if (!n) {
        return;
      }
      const r = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (r.length !== 0) {
        Pr.set(e, r);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!pn) {
        return;
      }
      const t = Pr.get(e);
      pn.unobserve(e);
      Pr.delete(e);

      if (!!t) {
        for (const n of t) {
          const r = Kt.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            Kt.delete(n);
          }

          const o = Xt.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            Xt.delete(n);
          }

          Zt.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(Zt);
    },
    size() {
      return Zt.size;
    },
    onAppear(e) {
      Wr.add(e);

      return () => {
        Wr.delete(e);
      };
    },
  };

const u1 = "DZlS";
const d1 = "GApG";
const f1 = "jBpW";
const Ro = { hint: u1, multiline: d1, arrow: f1 };
function Lr({ text: e, children: t, className: n, multiline: r }) {
  const o = O(null);
  const [s, a] = L(null);

  const c = N(() => {
    if (!o.current) {
      return;
    }
    const f = o.current.getBoundingClientRect();
    a({ x: f.left + f.width / 2, y: f.top });
  }, []);

  const l = N(() => {
    a(null);
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
            className: `${Ro.hint} ${r ? Ro.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: Ro.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const h1 = "G3et";
const p1 = "WfiV";
const m1 = "VtfC";
const g1 = "c07H";
const _1 = "QNGi";
const y1 = "Fpij";
const v1 = "PxAl";
const E1 = "A3Q3";

const kt = {
  header: h1,
  headerMain: p1,
  moreDropdown: m1,
  pinnedBadge: g1,
  authorInfo: _1,
  authorLink: y1,
  time: v1,
  edited: E1,
};

function w1({
  author: e,
  createdAt: t,
  editedAt: n,
  postId: r,
  showAvatar: o = true,
  isOnOwnProfile: s = false,
  isPinned: a = false,
  onReport: c,
  onEdit: l,
  onDelete: u,
  onPin: f,
  onCopyLink: d,
}) {
  const p = tu(t);

  const h = Ee(y => y.profile?.id);

  const m = e.id === h;
  const g = 2880 * 60 * 1000/* 1e3 */;
  const w = m && Date.now() - new Date(t).getTime() < g;

  const _ = we(() => {
    const y = [];

    y.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(nu, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (w) {
      y.push({
        id: "edit",
        label: "Редактировать",
        icon: i(su, { size: 16 }),
        onClick: () => l?.(r),
      });
    }

    if (s) {
      y.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: i(ka, { size: 16 }),
        onClick: () => f?.(r),
      });
    }

    if ((m || s)) {
      y.push({
        id: "delete",
        label: "Удалить",
        icon: i(hu, { size: 16 }),
        danger: true,
        onClick: () => u?.(r),
      });
    }

    if (!m) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(au, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return y;
  }, [m, w, s, a, r, l, u, f, c, d]);

  return i("header", {
    className: kt.header,
    children: [
      a &&
        i("div", {
          className: kt.pinnedBadge,
          children: [
            i(ka, { size: 14 }),
            i("span", { children: "Закреплённый пост" }),
          ],
        }),
      i("div", {
        className: kt.headerMain,
        children: [
          o &&
            i("a", {
              href: `/@${e.username}`,
              children: i(nt, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          i("div", {
            className: kt.authorInfo,
            children: [
              i("a", {
                href: `/@${e.username}`,
                className: kt.authorLink,
                children: i(cr, {
                  name: e.displayName,
                  verified: e.isVerified,
                  hasNuksta: e.hasNuksta,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              i("time", {
                dateTime: t,
                className: kt.time,
                children: [
                  p,
                  n &&
                    i(Lr, {
                      text: new Date(n).toLocaleString("ru-RU"),
                      children: i("span", {
                        className: kt.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          i(Nu, {
            trigger: i(lu, { size: 18 }),
            items: _,
            position: "bottom-right",
            className: kt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const S1 = "jJfK";
const b1 = "zeKL";
const C1 = "CBQ7";
const T1 = "STdm";
const N1 = "NAfG";
const I1 = "QFtG";
const R1 = "HMcI";
const k1 = "VQDr";
const A1 = "exPX";
const O1 = "dLqG";
const P1 = "jK3Y";
const L1 = "v9px";
const $1 = "U3O4";
const x1 = "aJfw";
const M1 = "a4wd";
const D1 = "HA12";
const U1 = "ENmw";
const F1 = "ZEHX";

const be = {
  actions: S1,
  compact: b1,
  action: C1,
  views: T1,
  flush: N1,
  actionsLeft: I1,
  disabled: R1,
  liked: k1,
  unliked: A1,
  reposted: O1,
  noAnimation: P1,
  reactionWrapper: L1,
  actionsRight: $1,
  captured: x1,
  capturedEmoji: M1,
  capturedText: D1,
  capturedMobile: U1,
  capturedSolo: F1,
};

function ku({
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
  disableRepost: f = false,
  compact: d = false,
  emojiOnly: p = false,
  flush: h = false,
  infiniteLike: m = false,
}) {
  const g = O(false);
  const w = d ? 17 : 20;
  return i("footer", {
    className: `${be.actions} ${d ? be.compact : ""} ${h ? be.flush : ""}`,
    children: [
      i("div", {
        className: be.actionsLeft,
        children: [
          i("div", {
            className: be.reactionWrapper,
            onClick: _ => _.stopPropagation(),
            children: i("button", {
              className: `${be.action} ${e ? be.liked : ""} ${
                g.current && !e ? be.unliked : ""
              } ${!g.current && e ? be.noAnimation : ""}`,
              onClick: (_) => {
                _.stopPropagation();
                (g.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                i(
                  Hs,
                  { filled: e, size: w },
                  m ? `liked-${n}` : e ? "liked" : "not-liked"
                ),
                i(Bn, { value: n }),
              ],
            }),
          }),
          i("button", {
            className: be.action,
            onClick: (_) => {
              _.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [i(ou, { size: w }), i(Bn, { value: o })],
          }),
          i("button", {
            className: `${be.action} ${t ? be.reposted : ""} ${
              f ? be.disabled : ""
            }`,
            onClick: (_) => {
              _.stopPropagation();

              if (!f) {
                l();
              }
            },
            disabled: f,
            "aria-label": "Репост",
            children: [i(Ws, { size: w }), i(Bn, { value: r })],
          }),
        ],
      }),
      i("div", {
        className: be.actionsRight,
        children: [
          a &&
            (p
              ? i(Lr, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: be.capturedSolo,
                  children: i("span", {
                    className: be.capturedEmoji,
                    children: a,
                  }),
                })
              : i(Ie, {
                  children: [
                    i(Lr, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: be.captured,
                      children: [
                        i("span", { className: be.capturedEmoji, children: a }),
                        i("span", {
                          className: be.capturedText,
                          children: "Пост захвачен",
                        }),
                      ],
                    }),
                    i(Lr, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: be.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: be.views,
            children: [i(Y_, { size: w }), i(Bn, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const H1 = ne(() => Z(() => import("./index-Dpnl0w2z.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function Au(e, t) {
  const { openModal: n, closeModal: r, onDelete: o } = t;
  const s = bt();

  const a = Q(v => v.deletePost);

  const c = Q(v => v.updatePostLike);

  const l = Q(v => v.beginLikeMutation);

  const u = Q(v => v.endLikeMutation);

  const f = Q(v => v.updatePollVote);

  const d = Q(v => v.updatePollData);

  const p = Gs(e);
  const h = p.myReaction !== null;
  const p_likesTotal = p.likesTotal;

  const g = we(() => Pu(e.attachments), [e.attachments]);

  const w = N(async () => {
    const v = h;
    const A = v ? -1 : 1;
    c(e.id, v ? null : "love", A);
    l(e.id);
    try {
      const T = v ? await Le.unlikePost(e.id) : await Le.likePost(e.id);
      u(e.id, T?.likesCount);
    } catch (T) {
      c(e.id, v ? "love" : null, -A);
      u(e.id);
      console.error("Failed to toggle like:", T);
    }
  }, [e.id, h, c, l, u]);

  const _ = N(() => {
    if (!h) {
      w();
    }
  }, [h, w]);

  const y = N(
    (v) => {
      const A = e.author.username ?? e.author.id;
      const T = `${window.location.origin}/@${A}/post/${v}`;
      navigator.clipboard.writeText(T);
      yt.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const E = N(
    (v) => {
      n(i(H1, { targetType: "post", targetId: v, onClose: r }));
    },
    [n, r]
  );

  const I = N(
    (v) => {
      n(
        i(MC, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const S = N(
    async (v) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await a(v);
          o?.(v);
        } catch (A) {
          console.error("Failed to delete post:", A);
        }
      }
    },
    [a, o]
  );

  const C = N(() => {
    if (s) {
      n(i(wC, { postId: e.id, onClose: r }));
    } else {
      const v = e.author.username ?? e.author.id;
      je(`/@${v}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, r]);

  const k = N(() => {
    n(i(qC, { post: e, onClose: r }));
  }, [n, r, e]);

  const R = N(
    async (v) => {
      const A = g?.myVote ?? null;
      f(e.id, v, A);
      try {
        const T = await Le.votePoll(e.id, [v]);
        if (T) {
          d(e.id, T);
          return T;
        }
      } catch (T) {
        console.error("[Poll] Failed to vote:", T);

        if (A) {
          f(e.id, A, v);
        }
      }
      return null;
    },
    [e.id, g?.myVote, f, d]
  );

  const b = N(
    async (v) => {
      try {
        const A = await Le.votePoll(e.id, v);
        if (A) {
          d(e.id, A);
          return A;
        }
      } catch (A) {
        console.error("[Poll] Failed to vote multiple:", A);
      }
      return null;
    },
    [e.id, d]
  );

  return {
    liked: h,
    totalLikes: p_likesTotal,
    handleLike: w,
    handleDoubleTap: _,
    handleComment: C,
    handleRepost: k,
    handleReport: E,
    handleEdit: I,
    handleDelete: S,
    handleCopyLink: y,
    handlePollVote: R,
    handlePollVoteMultiple: b,
  };
}
function Ou(e) {
  const t = N(() => {
      Q.getState().updatePostLike(e, "love", 1);
    }, [e]);

  const n = N(() => {
    const { postStatsCache: o, applyStatsUpdates: s } = Q.getState();
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

  const r = N(() => {
    Q.getState().updatePostReposted(e, true, 1);
  }, [e]);

  return { handleLike: t, handleComment: n, handleRepost: r };
}
const B1 = "L9bN";
const V1 = "dnvv";
const W1 = "t2dR";
const j1 = "Agiy";
const z1 = "y3mL";
const q1 = "hV85";
const G1 = "HaZI";
const Y1 = "BGYA";
const K1 = "DaNH";
const X1 = "h4ay";
const Z1 = "bw84";
const J1 = "XP6c";
const Q1 = "cIIi";
const eb = "YrtI";
const tb = "kwfM";

const De = {
  post: B1,
  postInner: V1,
  isFeed: W1,
  avatarLink: j1,
  postContent: z1,
  postBody: q1,
  textWrapper: G1,
  text: Y1,
  collapsed: K1,
  expandButton: X1,
  originalPost: Z1,
  originalPostHeader: J1,
  originalPostTime: Q1,
  originalPostText: eb,
  originalPostMedia: tb,
};

function nb(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function rb({ attachments: e, postVs: t, source: n }) {
  const r = we(() => zr(e), [e]);
  return r.length === 0
    ? null
    : i("div", {
        className: De.originalPostMedia,
        children: i(Ks, { media: r, postVs: t, source: n }),
      });
}
function ob({ originalPost: e, source: t, showcase: n = false }) {
  const r = nb(e.createdAt);
  const { openModal: o, closeModal: s } = an();

  const {
    liked: a,
    totalLikes: c,
    handleLike: l,
    handleComment: u,
    handleRepost: f,
  } = Au(e, { openModal: o, closeModal: s });

  const { handleLike: d, handleComment: p, handleRepost: h } = Ou(e.id);
  const m = Gs(e);

  const g = N(
    (w) => {
      w.stopPropagation();

      if (n) {
        return;
      }

      const _ = e.author.username ?? e.author.id;
      je(`/@${_}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id, n]
  );

  return i("div", {
    className: De.originalPost,
    onClick: g,
    children: [
      i("div", {
        className: De.originalPostHeader,
        children: [
          i(Ws, { size: 14 }),
          i(nt, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          i(cr, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          i("span", { className: De.originalPostTime, children: r }),
        ],
      }),
      e.text && i("div", { className: De.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        i(rb, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(ku, {
        liked: a,
        reposted: m.reposted,
        likesCount: c,
        repostsCount: m.repostsCount,
        commentsCount: m.commentsCount,
        viewsCount: m.viewsCount,
        dominantEmoji: m.dominantEmoji,
        onLike: n ? d : l,
        onRepost: n ? h : f,
        onComment: n ? p : u,
        compact: true,
        emojiOnly: n,
        infiniteLike: n,
      }),
    ],
  });
}
const sb = ne(() => Z(() => import("./index-DAwS3OSh.js"), __vite__mapDeps([19, 20])).then(
  e => ({
    default: e.Poll
  })
)
);
function ib(e) {
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
function zr(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function Pu(e) {
  return e.find(t => t.type === "poll");
}
const ab = 300;
const cb = 500;

const lb = to(
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
      onEdit: f,
      onPin: d,
      onDelete: p,
    }
  ) => {
    const h = n === "feed";
    const m = bt();
    const { openModal: g, closeModal: w } = an();

    const _ = Q(he => he.setCurrentPost);

    const y = Q(he => he.seedPostStats);

    const E = Q(he => he.posts.find(Be => Be.id === t.id));

    const I = Ee(he => he.profile);

    F(() => {
      y(t);
    }, [t, y]);
    const S = Gs(t);
    const { isFollowing: C, follow: k, unfollow: R } = Ty(t.author.id);
    const b = h && I?.id !== t.author.id ? C : undefined;

    const {
      liked: v,
      totalLikes: A,
      handleLike: T,
      handleDoubleTap: P,
      handleComment: B,
      handleRepost: ie,
      handleReport: de,
      handleEdit: pe,
      handleDelete: se,
      handleCopyLink: q,
      handlePollVote: te,
      handlePollVoteMultiple: re,
    } = Au(t, { openModal: g, closeModal: w, onDelete: p });

    const { handleLike: V, handleComment: _e, handleRepost: ge } = Ou(t.id);

    const $ = N(() => {
      if (b !== undefined) {
        if (b) {
          g(
                  i(dv, {
                    displayName: t.author.displayName,
                    onConfirm: R,
                    onClose: w,
                  })
                );
        } else {
          k();
        }
      }
    }, [b, t.author.displayName, k, R, g, w]);

    const D = O(null);
    const j = O(null);
    const ee = O(null);
    const [z, G] = L(ab);
    const [fe, ke] = L(0);
    const Te = fe > z;
    F(
      () => () => {
        if (ee.current) {
          cancelAnimationFrame(ee.current);
          (ee.current = null);
        }
      },
      []
    );

    const oe = N(
        (he) => {
          if (he &&
            h) {
            ee.current && cancelAnimationFrame(ee.current);

            (ee.current = requestAnimationFrame(() => {
              (ee.current = null);
              ke(he.scrollHeight);
            }));
          }

          if (j) {
            (j.current = he);
          }
        },
        [h]
      );

    const Ft = N((he) => {
      he.stopPropagation();

      G(Be => Be + cb);
    }, []);

    O0(t.id, D, c, l, t.vs);
    const ht = t.originalPost?.id;
    F(() => {
      const D_current = D.current;
      if (!D_current) {
        return;
      }
      const Be = ht ? [t.id, ht] : t.id;
      jr.observe(D_current, Be);

      return () => jr.unobserve(D_current);
    }, [t.id, ht]);
    const cn = O(null);
    const kn = O(0);

    const Se = N((he) => {
      cn.current = he.target;
    }, []);

    const pt = N(() => {
      _(E ?? t);
      const Be = t.author.username ?? t.author.id;
      je(`/@${Be}/post/${t.id}`);
    }, [t, E, _]);

    const Fu = N(
      (he) => {
        const he_target = he.target;
        if (he_target.closest("button") ||
        he_target.closest("a") ||
        he_target.closest("video") ||
        he_target.closest("img")) {
          return;
        }
        if (m) {
          const ei = Date.now();
          if (ei - kn.current < 300) {
            (kn.current = 0);
            P();
            return;
          }
          kn.current = ei;
          return;
        }
        if (cn.current !== he_target) {
          cn.current = null;
          return;
        }
        cn.current = null;
        const Qs = window.getSelection();

        if (!Qs || Qs.toString().length <= 0) {
          pt();
        }
      },
      [m, P, pt]
    );

    const Hu = we(() => ib(t.author), [t.author]);

    const Zs = we(() => zr(t.attachments), [t.attachments]);

    const Ze = we(() => Pu(t.attachments), [t.attachments]);

    const Js = i("div", {
      className: `${De.postInner} ${h ? De.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: De.avatarLink,
            children: i(nt, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: b,
              onFollowBadgeClick: $,
            }),
          }),
        i("div", {
          className: De.postContent,
          children: [
            i(w1, {
              author: Hu,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: o,
              isPinned: s,
              onReport: de,
              onEdit: f ?? pe,
              onDelete: se,
              onPin: d,
              onCopyLink: q,
            }),
            i("div", {
              className: De.postBody,
              children: [
                t.text &&
                  i("div", {
                    className: De.textWrapper,
                    children: [
                      i("div", {
                        ref: oe,
                        className: `${De.text} ${Te ? De.collapsed : ""}`,
                        style: h && Te ? { maxHeight: `${z}px` } : undefined,
                        children: i(Iu, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        Te &&
                        i("button", {
                          type: "button",
                          className: De.expandButton,
                          onClick: Ft,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Zs.length > 0 &&
                  i(Ks, { media: Zs, isFeed: h, postVs: t.vs, source: c }),
                Ze &&
                  i(Ce, {
                    fallback: null,
                    children: i(sb, {
                      title: Ze.question,
                      options: Ze.options.map(he => ({
                        id: he.id,
                        text: he.text,
                        votes: he.votes ?? 0
                      })),
                      totalVotes: Ze.totalVotes ?? 0,
                      voted:
                        (Ze.myVotes ?? []).length > 0 ||
                        (Ze.myVote !== undefined && Ze.myVote !== null),
                      selectedOptionId: Ze.myVote,
                      selectedOptionIds: Ze.myVotes ?? [],
                      multipleChoice: Ze.multipleChoice ?? false,
                      onVote: te,
                      onVoteMultiple: re,
                      disabled: Ze.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  i(ob, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                i(ku, {
                  compact: u,
                  emojiOnly: u,
                  flush: u,
                  infiniteLike: u,
                  liked: v,
                  reposted: S.reposted,
                  likesCount: A,
                  repostsCount: S.repostsCount,
                  commentsCount: S.commentsCount,
                  viewsCount: S.viewsCount,
                  dominantEmoji: S.dominantEmoji,
                  onLike: u ? V : T,
                  onRepost: u ? ge : ie,
                  onComment: u ? _e : B,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? i("article", {
          ref: D,
          className: `${De.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: Se,
          onClick: Fu,
          children: Js,
        })
      : i("div", { ref: D, children: Js });
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
  e.showcase === t.showcase &&
  e.sourceContext === t.sourceContext
);

const ub = "dsrL";
const db = "oIP0";
const fb = "cowT";
const hb = "smDs";
const pb = "lqcU";
const mb = "JvvA";
const gb = "Ccvd";
const _b = "vRqK";
const yb = "nzQg";
const vb = "f7C4";
const Eb = "zPnc";
const wb = "CguZ";
const Sb = "BI8r";
const bb = "MKdB";
const Cb = "N3uP";
const Tb = "CUEx";
const Nb = "af3L";
const Ib = "rfWr";
const Rb = "cJPq";
const kb = "cbZS";
const Ab = "wpbz";
const Ob = "qHu3";
const Pb = "H8ur";
const Lb = "kzxR";

const le = {
  commentWrapper: ub,
  threadItem: db,
  avatarWrapper: fb,
  threadLine: hb,
  commentBody: pb,
  showMoreBtn: mb,
  avatarPlaceholder: gb,
  comment: _b,
  small: yb,
  commentTime: vb,
  commentText: Eb,
  commentActions: wb,
  commentContent: Sb,
  avatarLink: bb,
  authorLink: Cb,
  commentHeader: Tb,
  moreButton: Nb,
  commentHeaderLeft: Ib,
  replyMention: Rb,
  commentMedia: kb,
  reactionWrapper: Ab,
  commentAction: Ob,
  liked: Pb,
  replyButton: Lb,
};

const $b = ne(() => Z(() => import("./index-Cof8GaIR.js"), __vite__mapDeps([21, 11, 22])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const xb = to((
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
    onLike: f,
    onReply: d,
    onReport: p,
    onEdit: h,
    onDelete: m,
    replyTo: g,
    hideAvatar: w = false,
    isWallOwner: _ = false,
  }
) => {
  const y = tu(a);

  const E = Ee(b => b.profile?.id);

  const I = t.id === E;
  const S = I || _;
  const C = u === "xs";

  const k = we(() => {
    const b = [];

    if (I &&
      h) {
      b.push({
        id: "edit",
        label: "Редактировать",
        icon: i(su, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (S &&
      m) {
      b.push({
        id: "delete",
        label: "Удалить",
        icon: i(hu, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!I) {
      b.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(au, { size: 16 }),
        danger: true,
        onClick: () => p(n),
      });
    }

    return b;
  }, [I, S, n, h, m, p]);

  const R = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${le.comment} ${C ? le.small : ""}`,
    children: [
      !w &&
        i("a", {
          href: R,
          className: le.avatarLink,
          children: i(nt, { src: t.avatar, alt: t.displayName, size: u }),
        }),
      i("div", {
        className: le.commentContent,
        children: [
          i("div", {
            className: le.commentHeader,
            children: [
              i("div", {
                className: le.commentHeaderLeft,
                children: [
                  i("a", {
                    href: R,
                    className: le.authorLink,
                    children: i(cr, {
                      name: t.displayName,
                      verified: t.isVerified,
                      hasNuksta: t.hasNuksta,
                      pin: t.pin,
                      size: u,
                    }),
                  }),
                  i("span", { className: le.commentTime, children: y }),
                ],
              }),
              i(Nu, {
                trigger: i(lu, { size: C ? 14 : 16 }),
                items: k,
                position: "bottom-right",
                className: le.moreButton,
              }),
            ],
          }),
          (g || r) &&
            i("div", {
              className: le.commentText,
              children: [
                g &&
                  i(Ie, {
                    children: [
                      i("a", {
                        href: `/@${g.username}`,
                        className: le.replyMention,
                        children: ["@", g.displayName],
                      }),
                      ", ",
                    ],
                  }),
                r && i(Iu, { text: r, spans: o }),
              ],
            }),
          zr(s).length > 0 &&
            i("div", {
              className: le.commentMedia,
              children: i(Ks, { media: zr(s) }),
            }),
          s
            .filter(b => b.type === "audio")
            .map(b => i(
            Ce,
            {
              fallback: null,
              children: i($b, { src: b.url, duration: b.duration }),
            },
            b.id
          )
            ),
          i("div", {
            className: le.commentActions,
            children: [
              i("button", {
                className: le.replyButton,
                onClick: d,
                children: "Ответить",
              }),
              i("div", {
                className: le.reactionWrapper,
                children: i("button", {
                  className: `${le.commentAction} ${l ? le.liked : ""}`,
                  onClick: () => f(),
                  children: [
                    i(Hs, { size: 14, filled: l }),
                    i(Bn, { value: c }),
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

const Lu = to((
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
    onReport: f,
    onEdit: d,
    onDelete: p,
    isLoadingReplies: h = false,
    flashingCommentId: m,
    isWallOwner: g = false,
  }
) => {
  const w = o?.commentId === t.id;

  const _ = {
    id: t.author.id,
    username: t.author.username,
    avatar: t.author.avatar ?? "",
    displayName: t.author.displayName,
    isVerified: t.author.isVerified,
    pin: t.author.pin,
  };

  const y = t.previewReplies ?? [];
  const E = m === t.id;
  const I = t.stats.replies > y.length;

  const S = [
    { type: "parent", data: t, author: _ },
    ...y.map(C => ({
      type: "reply",
      data: C,

      author: {
        id: C.author.id,
        username: C.author.username,
        avatar: C.author.avatar ?? "",
        displayName: C.author.displayName,
        isVerified: C.author.isVerified,
        pin: C.author.pin,
      }
    })),
  ];

  return i("div", {
    className: `${le.commentWrapper} ${E ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      S.map((C, k) => {
        const b = !(k === S.length - 1 && !w && !I);
        const v = m === C.data.id;
        return i(
          "div",
          {
            "data-comment-id": C.data.id,
            className: `${le.threadItem} ${v ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: le.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${C.author.username ?? C.author.id}`,
                    className: le.avatarLink,
                    children: i(nt, {
                      src: C.author.avatar,
                      alt: C.author.displayName,
                      size: "sm",
                    }),
                  }),
                  b && i("div", { className: le.threadLine }),
                ],
              }),
              i("div", {
                className: le.commentBody,
                children: i(xb, {
                  author: C.author,
                  commentId: C.data.id,
                  text: C.data.text,
                  spans: C.data.spans ?? [],
                  attachments: C.data.attachments ?? [],
                  replyTo: C.data.replyTo,
                  createdAt: C.data.createdAt,
                  reactionsCount: C.data.reactions.total,
                  isReacted: C.data.reactions.myReaction !== null,
                  size: "sm",
                  onLike: C.type === "parent" ? n : () => r(C.data.id),
                  onReply: () => C.type === "parent"
                    ? s(
                        t.id,
                        t.author.username ?? t.author.id,
                        t.author.displayName,
                        t.author.id
                      )
                    : s(
                        t.id,
                        C.data.author.username ?? C.data.author.id,
                        C.data.author.displayName,
                        C.data.author.id,
                        C.data.id
                      ),
                  onReport: f,
                  onEdit: d,
                  onDelete: p,
                  hideAvatar: true,
                  isWallOwner: g,
                }),
              }),
            ],
          },
          C.data.id
        );
      }),
      w &&
        i("div", {
          className: le.threadItem,
          children: [
            i("div", {
              className: le.avatarWrapper,
              children: [
                i("div", { className: le.avatarPlaceholder }),
                I && i("div", { className: le.threadLine }),
              ],
            }),
            i("div", {
              className: le.commentBody,
              children: i(Tu, {
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
      I &&
        !h &&
        i("button", {
          className: le.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - y.length, " ответов"],
        }),
    ],
  });
});

function Mb({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = o => o,
}) {
  const o = O(null);
  const [s, a] = L(0);
  const [c, l] = L(0);
  const u = O(new Map());
  const f = O(new Map());
  const d = O(0);

  if (d.current !== e) {
    (d.current = e);
    f.current.clear();
  }

  const p = N(
      (S) => {
        const C = r(S);
        return u.current.get(C) ?? t;
      },
      [r, t]
    );

  const h = N(
    (S) => {
      if (S === 0) {
        return 0;
      }
      const C = f.current.get(S);
      if (C !== undefined) {
        return C;
      }
      let k = 0;
      let R = 0;
      for (let b = S - 1; b >= 0; b--) {
        const v = f.current.get(b);
        if (v !== undefined) {
          (k = b);
          (R = v);
          break;
        }
      }
      for (let b = k; b < S; b++) {
        R += p(b);
      }
      f.current.set(S, R);
      return R;
    },
    [p]
  );

  const m = we(() => e === 0 ? 0 : h(e - 1) + p(e - 1), [e, h, p]);

  const { startIndex: g, endIndex: w } = we(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let S = 0;
    let C = e - 1;

    while (S < C) {
      const v = Math.floor((S + C) / 2);
      const A = h(v);
      const T = p(v);

      if (A + T < s) {
        (S = v + 1);
      } else {
        (C = v);
      }
    }

    const k = Math.max(0, S - n);
    let R = S;
    let b = h(S) - s;

    while (R < e && b < c + t * n) {
      (b += p(R));
      R++;
    }

    (R = Math.min(e - 1, R + n));
    return { startIndex: k, endIndex: R };
  }, [e, s, c, h, p, n, t]);

  const _ = we(() => {
    if (e === 0) {
      return [];
    }
    const S = [];
    for (let C = g; C <= w; C++) {
      S.push({ index: C, key: r(C), start: h(C), size: p(C) });
    }
    return S;
  }, [g, w, r, h, p, e]);

  const y = N(
    (S, C) => {
      if (!S) {
        return;
      }
      const k = r(C);
      const R = S.getBoundingClientRect().height;
      if (R <= 0) {
        return;
      }
      const b = u.current.get(k);

      if ((b === undefined || Math.abs(b - R) > 2)) {
        u.current.set(k, R);
        f.current.clear();
      }
    },
    [r]
  );

  const E = N(() => {
    if (o.current) {
      a(o.current.scrollTop);
    }
  }, []);

  const I = N(
    (S) => {
      if (o.current) {
        o.current.removeEventListener("scroll", E);
      }

      (o.current = S);

      if (S) {
        l(S.clientHeight);
        a(S.scrollTop);
        S.addEventListener("scroll", E, { passive: true });
      }
    },
    [E]
  );

  F(() => {
    if (!o.current) {
      return;
    }
    const S = new ResizeObserver((C) => {
      for (const k of C) {
        l(k.contentRect.height);
      }
    });
    S.observe(o.current);

    return () => S.disconnect();
  }, []);

  F(
    () => () => {
      if (o.current) {
        o.current.removeEventListener("scroll", E);
      }
    },
    [E]
  );

  return { containerRef: I, virtualItems: _, totalSize: m, measureElement: y };
}
const Db = "mZD9";
const Ub = "i0qm";
const Fb = "PtMl";
const Hb = "DHyP";
const Bb = "bXub";
const Vb = "gXKt";
const Wb = "T4y7";
const jb = "w7Et";
const zb = "eOfj";
const qb = "krx8";
const Gb = "KfFJ";

const Je = {
  comments: Db,
  sortWrapper: Ub,
  sortSelect: Fb,
  commentsList: Hb,
  commentItem: Bb,
  empty: Vb,
  loadMoreSentinel: Wb,
  virtualContainer: jb,
  virtualContent: zb,
  virtualItem: qb,
  inputWrapper: Gb,
};

const Yb = 120;
function Kb({
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
  onStartReply: f,
  onCancelReply: d,
  onSubmitReply: p,
  onVoiceSend: h,
  onLoadReplies: m,
  onReport: g,
  onEdit: w,
  onDelete: _,
}) {
  const y = O(false);

  const {
    containerRef: E,
    virtualItems: I,
    totalSize: S,
    measureElement: C,
  } = Mb({
    itemCount: e.length,
    estimatedItemHeight: Yb,
    overscan: 3,
    getItemKey: R => e[R]?.id ?? R,
  });

  F(() => {
    if (!t || n || I.length === 0) {
      y.current = false;
      return;
    }
    const R = I[I.length - 1]?.index ?? 0;
    const b = e.length - 5;

    if (R >= b && !y.current) {
      (y.current = true);
      r();
    }
  }, [I, e.length, t, n, r]);

  F(() => {
    if (!n) {
      (y.current = false);
    }
  }, [n]);

  const k = N(
    (R, b) => {
      C(R, b);
    },
    [C]
  );
  return i("div", {
    ref: E,
    className: Je.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: Je.virtualContent,
        style: { height: `${S}px` },
        children: I.map((R) => {
          const b = e[R.index];
          return b
            ? i(
                "div",
                {
                  ref: v => k(v, R.index),
                  className: Je.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${R.start}px)`,
                  },
                  children: i(Lu, {
                    comment: b,
                    onLike: () => l(b.id),
                    onLikeReply: u,
                    replyingTo: o?.commentId === b.id ? o : null,
                    onStartReply: f,
                    onCancelReply: d,
                    onSubmitReply: p,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: g,
                    onEdit: w,
                    onDelete: _,
                    isLoadingReplies: a === b.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                R.key
              )
            : null;
        }),
      }),
      n && i(Ys, { variant: "medium" }),
    ],
  });
}
const Xb = "yKFf";
const Zb = "gDEG";
const Jb = "TBjD";
const ko = { wrapper: Xb, popup: Zb, closing: Jb };

const Qb = ne(() => Z(() => import("./index-D2VmzBNL.js"), __vite__mapDeps([23, 24])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const tc = 280;
const nc = 380;
const Ao = 8;
const eC = 100;
const rc = 150;
const tC = 150;
function Xs({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, o] = L(false);
  const [s, a] = L(false);
  const [c, l] = L(null);
  const u = O(null);
  const f = O(null);
  const d = O(null);
  const p = O(null);
  const h = O(null);
  const m = O(null);

  const g = N(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const R = u_current.getBoundingClientRect();

    const {
      innerHeight,
      innerWidth
    } = window;

    const A = innerHeight - R.bottom;
    const T = innerWidth - R.left;
    const R_right = R.right;
    const B = A >= nc + Ao ? "bottom" : "top";
    const ie = T >= tc || T > R_right ? "left" : "right";
    let de;
    let pe;

    if (B === "top") {
      (de = R.top - nc - Ao);
    } else {
      (de = R.bottom + Ao);
    }

    if (ie === "left") {
      (pe = R.left);
    } else {
      (pe = R.right - tc);
    }

    l({
      top: de,
      left: pe,
      transformOrigin: `${B === "top" ? "bottom" : "top"} ${
        ie === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const w = N(() => {
    if (!r && !s) {
      g();
      o(true);
    }
  }, [r, s, g]);

  const _ = N(() => {
    if (r && !s) {
      a(true);

      (m.current = window.setTimeout(() => {
        o(false);
        a(false);
      }, tC));
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
      a(false);
    }

    if (!r) {
      (p.current = window.setTimeout(() => {
          w();
        }, eC));
    }
  };

  const E = () => {
    if (p.current) {
      clearTimeout(p.current);
      (p.current = null);
    }

    (h.current = window.setTimeout(() => {
        _();
      }, rc));
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
      a(false);
    }
  };

  const S = () => {
    h.current = window.setTimeout(() => {
      _();
    }, rc);
  };

  const C = (k) => {
    k.preventDefault();
  };

  return i("div", {
    ref: f,
    className: ko.wrapper,
    onMouseEnter: y,
    onMouseLeave: E,
    onMouseDown: C,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(j_, { size: n }),
      }),
      r &&
        c &&
        $(
          i("div", {
            ref: d,
            className: `${ko.popup} ${s ? ko.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: I,
            onMouseLeave: S,
            onMouseDown: C,
            children: i(Ce, {
              fallback: null,
              children: i(Qb, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const nC = "DNDx";
const rC = "YqOX";
const oC = "osCN";
const sC = "CTSN";
const iC = "nyRQ";
const aC = "X9FK";
const cC = "WwrU";
const lC = "lmHF";
const uC = "DPuC";
const dC = "nWnm";
const fC = "QleM";
const hC = "kJ0u";

const qe = {
  editCommentModal: nC,
  form: rC,
  header: oC,
  title: sC,
  content: iC,
  editor: aC,
  actions: cC,
  mediaButtons: lC,
  mediaButton: uC,
  submitGroup: dC,
  charCount: fC,
  error: hC,
};

const oc = 2000/* 2e3 */;
function pC({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = an();

  const o = Pt(S => S.editComment);

  const s = Ee(S => S.profile);

  const a = bt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: d,
  } = no(t, n);

  const [p, h] = L(false);
  const m = oc - c.length;
  const g = m < 0;
  const w = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const y = w || _;

  const E = N(
    (S) => {
      d(S.emoji);
    },
    [d]
  );

  const I = N(async () => {
    if (!(!c.trim() || g || !y || p)) {
      h(true);
      try {
        await o(e, c, l);
        r();
      } catch (S) {
        console.error("Failed to update comment:", S);
      } finally {
        h(false);
      }
    }
  }, [c, l, g, y, p, o, e, r]);

  return i(sn, {
    frameless: true,
    onClose: r,
    className: qe.editCommentModal,
    children: i("div", {
      className: qe.form,
      children: [
        i("div", {
          className: qe.header,
          children: i("span", {
            className: qe.title,
            children: "Редактирование комментария",
          }),
        }),
        i("div", {
          className: qe.content,
          children: [
            i(nt, { src: s?.avatar ?? "", size: "sm" }),
            i(oo, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Комментарий...",
              maxLength: oc,
              autoFocus: true,
              className: qe.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        i("div", {
          className: qe.actions,
          children: [
            i("div", {
              className: qe.mediaButtons,
              children:
                !a &&
                i(Xs, { onEmojiSelect: E, buttonClassName: qe.mediaButton }),
            }),
            i("div", {
              className: qe.submitGroup,
              children: [
                g &&
                  i("span", {
                    className: `${qe.charCount} ${qe.error}`,
                    children: m,
                  }),
                i(ze, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                i(ze, {
                  size: "md",
                  disabled: !c.trim() || g || !y || p,
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
const mC = ne(() => Z(() => import("./index-Dpnl0w2z.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function gC({
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
  isWallOwner: f = false,
  variant: d = "modal",
  hideInput: p = false,
}) {
  const m = bt() && d === "modal";
  const [g, w] = L(null);
  const [_, y] = L(null);
  const [E, I] = L(null);
  const [S, C] = L(null);
  const k = O(null);
  const { openModal: R } = an();

  const b = Pt(V => V.highlightedCommentId);

  const v = Pt(V => V.clearHighlightedComment);

  const A = Pt(V => V.loadReplies);

  const T = Pt(V => V.deleteComment);

  const P = Pt(V => V.toggleCommentLike);

  p_({
    sentinelRef: k,
    hasMore: r,
    isLoading: n,
    onLoadMore: u,
    rootMargin: "200px",
  });

  F(
    () => () => {
      v();
    },
    [v]
  );

  F(() => {
    if (!b) {
      return;
    }
    let V = false;
    const _e = [];

    const ge = ($) => {
      if (V) {
        return;
      }
      const D = document.querySelector(`[data-comment-id="${b}"]`);
      if (!D) {
        if ($ > 0) {
          _e.push(window.setTimeout(() => ge($ - 1), 150));
        } else {
          v();
        }

        return;
      }
      D.scrollIntoView({ behavior: "smooth", block: "center" });
      y(b);
      v();

      _e.push(window.setTimeout(() => y(null), 900));
    };

    ge(40);

    return () => {
      (V = true);

      _e.forEach($ => clearTimeout($));
    };
  }, [b, v]);

  const B = async (V, _e, ge) => {
    if (g) {
      await c({
          text: V,
          spans: _e,
          parentId: g.commentId,
          replyToUserId: g.userId,
          replyToInfo: {
            id: g.userId,
            username: g.username,
            displayName: g.displayName,
          },
          attachments: ge,
        });

      w(null);
    }
  };

  const ie = (V, _e, ge, $, D) => {
    w({ commentId: V, username: _e, displayName: ge, userId: $, replyId: D });
  };

  const de = () => {
    w(null);
  };

  const pe = N(
    (V) => {
      P(V);
    },
    [P]
  );

  const se = N(
    async (V) => {
      I(V);
      try {
        await A(V);
      } finally {
        I(null);
      }
    },
    [A]
  );

  const q = N((V) => {
    C(V);
  }, []);

  const te = N(
    (V) => {
      let _e = "";
      let ge = [];
      for (const $ of e) {
        if ($.id === V) {
          (_e = $.text);
          (ge = $.spans ?? []);
          break;
        }
        const D = $.previewReplies?.find(j => j.id === V);
        if (D) {
          (_e = D.text);
          (ge = D.spans ?? []);
          break;
        }
      }
      R(i(pC, { commentId: V, initialText: _e, initialSpans: ge }));
    },
    [e, R]
  );

  const re = N(
    (V) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        T(V);
      }
    },
    [T]
  );

  return i("div", {
    className: Je.comments,
    children: [
      i("div", {
        className: Je.sortWrapper,
        children: i("select", {
          value: o,
          onChange: V => s(V.target.value),
          className: Je.sortSelect,
          children: [
            i("option", { value: "new", children: "Новые" }),
            i("option", { value: "old", children: "Старые" }),
            i("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? i(CE, { count: 5 })
        : e.length === 0
        ? i("div", { className: Je.empty, children: "Нет комментариев" })
        : m
        ? i(Kb, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: g,
            flashingCommentId: _,
            loadingRepliesId: E,
            isWallOwner: f,
            onLikeComment: a,
            onLikeReply: pe,
            onStartReply: ie,
            onCancelReply: de,
            onSubmitReply: B,
            onVoiceSend: l,
            onLoadReplies: se,
            onReport: q,
            onEdit: te,
            onDelete: re,
          })
        : i("div", {
            className: Je.commentsList,
            children: [
              e.map(V => i(
                "div",
                {
                  className: Je.commentItem,
                  children: i(Lu, {
                    comment: V,
                    onLike: () => a(V.id),
                    onLikeReply: pe,
                    replyingTo: g?.commentId === V.id ? g : null,
                    onStartReply: ie,
                    onCancelReply: de,
                    onSubmitReply: B,
                    onVoiceSend: l,
                    onLoadReplies: se,
                    onReport: q,
                    onEdit: te,
                    onDelete: re,
                    isLoadingReplies: E === V.id,
                    flashingCommentId: _,
                    isWallOwner: f,
                  }),
                },
                V.id
              )
              ),
              r &&
                i("div", {
                  ref: k,
                  className: Je.loadMoreSentinel,
                  children: n && i(Ys, { variant: "medium" }),
                }),
            ],
          }),
      !p &&
        i("div", {
          className: Je.inputWrapper,
          children: i(Tu, {
            onSubmit: (V, _e, ge) => c({ text: V, spans: _e, attachments: ge }),
            onVoiceSend: l,
          }),
        }),
      S &&
        i(Ce, {
          fallback: null,
          children: i(mC, {
            targetType: "comment",
            targetId: S,
            onClose: () => C(null),
          }),
        }),
    ],
  });
}
const _C = "Zmxo";
const yC = "AYQQ";
const vC = "S292";
const EC = "tTsN";
const Sr = { commentsModal: _C, header: yC, title: vC, content: EC };
function wC({ postId: e, onClose: t }) {
  const n = O(null);

  const {
    comments: r,
    commentsLoading: o,
    commentsLoadingMore: s,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: l,
    loadMoreComments: u,
    toggleCommentLike: f,
    addComment: d,
  } = Pt(
    qa(E => ({
      comments: E.comments,
      commentsLoading: E.commentsLoading,
      commentsLoadingMore: E.commentsLoadingMore,
      commentsHasMore: E.commentsHasMore,
      clearComments: E.clearComments,
      fetchComments: E.fetchComments,
      loadMoreComments: E.loadMoreComments,
      toggleCommentLike: E.toggleCommentLike,
      addComment: E.addComment
    }))
  );

  const { commentsSort: p, setCommentsSort: h } = Or(
    qa(E => ({
      commentsSort: E.commentsSort,
      setCommentsSort: E.setCommentsSort
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
      (E) => {
        h(E);
        l(e);
      },
      [h, l, e]
    );

  const g = N(() => {
    if (a && !s) {
      u(e);
    }
  }, [a, s, u, e]);

  const w = N(
    (E) => {
      f(E);
    },
    [f]
  );

  const _ = N(
    async (E) => {
      await d(e, E);
    },
    [d, e]
  );

  const y = N(
    async (E) => {
      const I = `voice_${Date.now()}.webm`;
      const S = new File([E], I, { type: E.type || "audio/webm" });
      const C = await hn.uploadMedia(S);
      await d(e, { text: "", attachments: [{ mediaId: C.id }] });
    },
    [d, e]
  );

  return i(sn, {
    frameless: true,
    onClose: t,
    className: Sr.commentsModal,
    children: [
      i("div", {
        className: Sr.header,
        children: i("span", { className: Sr.title, children: "Комментарии" }),
      }),
      i("div", {
        className: Sr.content,
        "data-comments-modal": true,
        children: i(gC, {
          comments: r,
          isLoading: o,
          isLoadingMore: s,
          hasMore: a,
          sort: p,
          onSortChange: m,
          onLikeComment: w,
          onAddComment: _,
          onVoiceSend: y,
          onLoadMore: g,
        }),
      }),
    ],
  });
}
const SC = ne(() => Z(() => import("./index-BAyj8Krn.js"), __vite__mapDeps([25, 26])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);
function $u({
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
    } = no();

  const [u, f] = L(false);
  const [d, p] = L(false);
  const [h, m] = L(false);
  const g = O(0);
  const w = bt();
  const y = qs()?.subscription?.isActive ?? false;

  const {
    images: E,
    uploadingImages: I,
    isUploading: S,
    hasVideo: C,
    openFilePicker: k,
    removeImage: R,
    addImage: b,
    uploadFiles: v,
    clearAll: A,
    fileInputRef: T,
    handleFileChange: P,
  } = bu(10, y);

  const {
    isPollOpen: B,
    poll: ie,
    togglePoll: de,
    handlePollQuestionChange: pe,
    handlePollOptionChange: se,
    handleAddPollOption: q,
    handleRemovePollOption: te,
    handleMultipleChoiceToggle: re,
    handleClosePoll: V,
    isPollValid: _e,
    getPollData: ge,
    resetPoll: $,
  } = TE();

  const D = Et.MAX_CHARS - r.length;
  const j = D < 0;
  const ee = B && _e();
  const z = E.length > 0 || I.length > 0;
  const G = r.trim().length > 0 || ee || z;
  const fe = y ? `${as},${Ey}` : as;

  const ke = N(async () => {
    if (!(!G || j || S || d)) {
      p(true);
      try {
        const Se = E.map(pt => ({
          mediaId: pt.mediaId,
          url: pt.url
        }));
        await e?.(r, o, Se, ge());
        l();
        A();
        $();
      } catch {
      } finally {
        p(false);
      }
    }
  }, [G, j, S, d, r, o, E, ge, e, l, A, $]);

  const Te = N(
    (Se) => {
      b(Se);
    },
    [b]
  );

  const oe = N(
    (Se) => {
      c(Se.emoji);
    },
    [c]
  );

  const Ft = N((Se) => {
    Se.preventDefault();
    Se.stopPropagation();
    g.current++;

    if (Se.dataTransfer?.types.includes("Files")) {
      m(true);
    }
  }, []);

  const ht = N((Se) => {
    Se.preventDefault();
    Se.stopPropagation();
  }, []);

  const cn = N((Se) => {
    Se.preventDefault();
    Se.stopPropagation();
    g.current--;

    if (g.current === 0) {
      m(false);
    }
  }, []);

  const kn = N(
    (Se) => {
      Se.preventDefault();
      Se.stopPropagation();
      (g.current = 0);
      m(false);
      const pt = Se.dataTransfer?.files;

      if (pt && pt.length > 0) {
        v(Array.from(pt));
      }
    },
    [v]
  );

  return i("div", {
    className: `${J.form} ${h ? J.dragActive : ""}`,
    onDragEnter: Ft,
    onDragOver: ht,
    onDragLeave: cn,
    onDrop: kn,
    children: [
      h &&
        i("div", {
          className: J.dragOverlay,
          children: [
            i(cu, { size: 32 }),
            i("span", {
              children: y ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      i("div", {
        className: J.whatsNew,
        children: i(oo, {
          ref: s,
          value: r,
          spans: o,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: J.editor,
          minHeight: 40,
          maxHeight: Et.MAX_TEXTAREA_HEIGHT,
          onImagePaste: v,
        }),
      }),
      i(Cu, { images: E, uploadingImages: I, onRemove: R }),
      i("input", {
        ref: T,
        type: "file",
        accept: fe,
        multiple: !C,
        onChange: P,
        style: { display: "none" },
      }),
      B &&
        i(aw, {
          poll: ie,
          onQuestionChange: pe,
          onOptionChange: se,
          onAddOption: q,
          onRemoveOption: te,
          onMultipleChoiceToggle: re,
          onClose: V,
        }),
      i("div", {
        className: J.actions,
        children: [
          i("div", {
            className: J.mediaButtons,
            children: [
              i("button", {
                className: J.mediaButton,
                onClick: k,
                title: y ? "Добавить медиа" : "Добавить изображение",
                children: i(ru, {}),
              }),
              !w &&
                i(Xs, { onEmojiSelect: oe, buttonClassName: J.mediaButton }),
              i("button", {
                className: J.mediaButton,
                onClick: () => f(true),
                title: "Нарисовать",
                disabled: C,
                children: i(V_, { size: 20 }),
              }),
              i("button", {
                className: `${J.mediaButton} ${B ? J.active : ""}`,
                onClick: de,
                title: "Добавить опрос",
                children: i(W_, {}),
              }),
            ],
          }),
          i("div", {
            className: J.submitGroup,
            children: [
              j &&
                i("span", {
                  className: `${J.charCount} ${J.error}`,
                  children: D,
                }),
              i(ze, {
                size: "lg",
                disabled: !G || j || S || d,
                loading: d,
                onClick: ke,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        i(Ce, {
          fallback: null,
          children: i(SC, {
            isOpen: u,
            onClose: () => f(false),
            onSave: Te,
            mode: "post",
          }),
        }),
    ],
  });
}
const bC = "LPWK";
const CC = "eYtH";
const sc = { createPostModal: bC, title: CC };
function TC({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: r } = an();

  const o = Ee(c => c.profile);

  const s = Q(c => c.createPost);

  const a = async (c, l, u, f) => {
    if (!o) {
      return;
    }
    const d = e ?? o.id;
    await s({ wallOwnerId: d, text: c, spans: l, attachments: u, poll: f });
    await n?.();
    r();
  };

  return i(sn, {
    frameless: true,
    onClose: r,
    className: sc.createPostModal,
    children: [
      i("h2", { className: sc.title, children: "Создать пост" }),
      i($u, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const NC = "EWvN";
const IC = "Vjyj";
const RC = "uAOU";
const kC = "zOkC";
const AC = "eUpb";
const OC = "OiRs";
const PC = "h7ZH";
const LC = "nje3";
const $C = "AtyE";
const xC = "M2PK";

const it = {
  editPostModal: NC,
  form: IC,
  whatsNew: RC,
  editor: kC,
  actions: AC,
  mediaButtons: OC,
  mediaButton: PC,
  submitGroup: LC,
  charCount: $C,
  error: xC,
};

const ic = 5000/* 5e3 */;
function MC({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = an();

  const o = Q(S => S.editPost);

  const s = Ee(S => S.profile);

  const a = bt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: d,
  } = no(t, n);

  const [p, h] = L(false);
  const m = ic - c.length;
  const g = m < 0;
  const w = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const y = w || _;

  const E = N(
    (S) => {
      d(S.emoji);
    },
    [d]
  );

  const I = N(async () => {
    if (!(!c.trim() || g || !y || p)) {
      h(true);
      try {
        await o(e, c, l);
        r();
      } catch (S) {
        console.error("Failed to update post:", S);
      } finally {
        h(false);
      }
    }
  }, [c, l, g, y, p, o, e, r]);

  return i(sn, {
    frameless: true,
    onClose: r,
    className: it.editPostModal,
    children: i("div", {
      className: it.form,
      children: [
        i("div", {
          className: it.whatsNew,
          children: [
            i(nt, { src: s?.avatar ?? "", size: "md" }),
            i(oo, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Что нового?",
              maxLength: ic,
              autoFocus: true,
              className: it.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        i("div", {
          className: it.actions,
          children: [
            i("div", {
              className: it.mediaButtons,
              children:
                !a &&
                i(Xs, { onEmojiSelect: E, buttonClassName: it.mediaButton }),
            }),
            i("div", {
              className: it.submitGroup,
              children: [
                g &&
                  i("span", {
                    className: `${it.charCount} ${it.error}`,
                    children: m,
                  }),
                i(ze, {
                  size: "lg",
                  disabled: !c.trim() || g || !y,
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
const DC = "Mw4Y";
const UC = "cLS2";
const FC = "Z5Ow";
const HC = "iFZk";
const BC = "KsUN";
const VC = "PRmW";
const WC = "AK1b";
const jC = "uKBi";
const zC = "tkF0";

const gt = {
  repostModal: DC,
  content: UC,
  title: FC,
  inputSection: HC,
  textarea: BC,
  originalPost: VC,
  postHeader: WC,
  postText: jC,
  actions: zC,
};

function qC({ post: e, onClose: t, onSuccess: n }) {
  const [r, o] = L("");
  const [s, a] = L(false);

  const c = Ee(d => d.profile);

  const l = Q(d => d.updatePostReposted);

  const u = Q(d => d.prependPost);

  const f = async () => {
    a(true);
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
      a(false);
    }
  };

  return i(sn, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: gt.repostModal,
    children: i("div", {
      className: gt.content,
      children: [
        i("h2", { className: gt.title, children: "Репост" }),
        i("div", {
          className: gt.inputSection,
          children: [
            c && i(nt, { src: c.avatar, alt: c.displayName, size: "sm" }),
            i("textarea", {
              className: gt.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: d => o(d.target.value),
              rows: 3,
            }),
          ],
        }),
        i("div", {
          className: gt.originalPost,
          children: [
            i("div", {
              className: gt.postHeader,
              children: [
                i(nt, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                i(cr, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            i("p", { className: gt.postText, children: e.text }),
          ],
        }),
        i("div", {
          className: gt.actions,
          children: [
            i(ze, {
              variant: "secondary",
              onClick: (d) => {
                d.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            i(ze, {
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

const GC = () => {
  const e = qs();
  const t = ro();
  const { initialize: n, disconnectSSE: r } = nn();
  const o = eu();

  const s = Us(v => v.fetchPortal);

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

  const a = e?.username ? `/@${e.username}` : "/profile";

  const c = we(
    () => [
      { id: "feed", label: "Лента", icon: iu, href: "/" },
      { id: "shop", label: "Магаз", icon: fu, href: "/shop" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: uu,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: is, href: a },
    ],
    [a]
  );

  const [l, u] = L({});
  const [f, d] = L(true);
  const p = O([]);
  const h = O(null);
  const [m] = ar();
  const { openModal: g } = an();

  const w = Q(v => v.fetchFeed);

  const _ = Q(v => v.isRefreshing);

  const y = mu();
  const E = wu();

  const I = N(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      w(true);
    }
  }, [w]);

  const S = we(() => {
    const v = m.url || "/";
    return js.some(A => v.startsWith(A));
  }, [m.url]);

  const C = we(() => {
    const v = m.url || "/";
    return e?.username
      ? v === `/@${e.username}` || v.startsWith(`/@${e.username}/`)
      : false;
  }, [m.url, e?.username]);

  const k = O(null);

  const R = N((v, A = false) => {
    if (!A && k.current === v) {
      return;
    }
    k.current = v;
    const T = p.current[v];
    const h_current = h.current;
    if (T && h_current) {
      const B = parseFloat(getComputedStyle(h_current).paddingLeft) || 0;

      u({
        width: T.offsetWidth,
        transform: `translateX(${T.offsetLeft - B}px)`,
      });

      d(true);
    }
  }, []);

  F(() => {
    const v = m.url || "/";

    const A = c.findIndex(
      T => v === T.href ||
      v.startsWith(`${T.href}/`) ||
      (T.id === "profile" && C)
    );

    if (A === -1) {
      d(false);
    } else {
      R(A, true);
    }
  }, [m.url, c, C, R]);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }
    const A = h_current.querySelector(`.${Me.active}`);
    if (A) {
      const T = p.current.indexOf(A);

      if (T !== -1) {
        (k.current = null);
        R(T);
      }
    }
  }, []);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }

    const A = () => {
        const P = h_current.querySelector(`.${Me.active}`);
        if (P) {
          const B = p.current.indexOf(P);

          if (B !== -1) {
            R(B, true);
          }
        }
      };

    const T = new ResizeObserver(A);
    T.observe(h_current);
    window.addEventListener("resize", A);

    return () => {
      T.disconnect();
      window.removeEventListener("resize", A);
    };
  }, [R]);

  const b = () => {
    g(i(TC, {}));
  };
  return S
    ? null
    : i("div", {
        className: Me.mobileNavigationWrapper,
        children: [
          i("nav", {
            ref: h,
            className: Me.navigation,
            children: [
              i("div", {
                className: `${Me.indicator} ${f ? "" : Me.indicatorHidden}`,
                style: l,
              }),
              c.map((v, A) => {
                const v_icon = v.icon;
                const P = v.id === "event";
                const B = P && o.active && !!o.url;
                const ie = m.url || "/";

                const pe =
                  ie === v.href ||
                  ie.startsWith(`${v.href}/`) ||
                  (v.id === "profile" && C);

                return i(
                  "a",
                  {
                    href: B ? o.url : v.href,
                    target: B ? "_blank" : undefined,
                    rel: B ? "noopener noreferrer" : undefined,
                    ref: (se) => {
                      (p.current[A] = se);

                      if (se && pe) {
                        R(A);
                      }
                    },
                    className: `${Me.navItem} ${pe ? Me.active : ""}`,
                    onClick: (se) => {
                      if (pe && v.id === "feed") {
                        se.preventDefault();
                        I();
                      }
                    },
                    children: [
                      i("span", {
                        className: Me.iconWrapper,
                        children: P
                          ? i("img", {
                              src: o.active
                                ? "/assets/portal/portal-active.gif"
                                : "/assets/portal/portal-inactive.png",
                              alt: "Ивент",
                              className: `${Me.portalImage} ${
                                o.active ? Me.portalImageActive : ""
                              }`,
                            })
                          : i(Ie, {
                              children: [
                                v.id === "feed" && _ ? i(Bs, {}) : i(v_icon, {}),
                                v.id === "notifications" &&
                                  y > 0 &&
                                  i("span", {
                                    className: Me.badge,
                                    children: y > 99 ? "99+" : y,
                                  }),
                                v.id === "shop" &&
                                  E > 0 &&
                                  i("span", {
                                    className: Me.badge,
                                    children: E,
                                  }),
                              ],
                            }),
                      }),
                      i("span", { className: Me.label, children: v.label }),
                    ],
                  },
                  v.id
                );
              }),
            ],
          }),
          t &&
            i("button", {
              className: Me.createButton,
              onClick: b,
              "aria-label": "Создать пост",
              children: i(Vs, {}),
            }),
        ],
      });
};

const YC = "nSHk";
const KC = "hAvQ";
const XC = "jDOB";
const ZC = "dcBp";
const br = { badge: YC, red: KC, green: XC, blue: ZC };
function JC({ type: e }) {
  const t =
    e === "like"
      ? br.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? br.green
      : br.blue;
  return i("div", {
    className: `${br.badge} ${t}`,
    children: [
      e === "follow" && i(Vs, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(ou, { size: 12, filled: true }),
      e === "like" && i(Hs, { size: 12, filled: true }),
      e === "repost" && i(Ws, { size: 12 }),
    ],
  });
}
const QC = "h1pX";
const eT = "BdFa";
const tT = "DClf";
const nT = "pHG3";
const rT = "IZbx";
const oT = "Kz4r";
const sT = "AFOJ";
const iT = "xJr0";
const aT = "EY2D";
const cT = "ey3A";
const lT = "z3rF";

const Ye = {
  container: QC,
  clearAllButton: eT,
  toastList: tT,
  toast: nT,
  toastLeft: rT,
  toastData: oT,
  title: sT,
  message: iT,
  dragging: aT,
  closeButton: cT,
  belowTabs: lT,
};

const uT = Sn(null);
function dT({ children: e }) {
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

  const a = _y();

  F(() => {
    if (a) {
      const c = pT(a.type);

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

      nn.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return i(uT.Provider, {
    value: { toasts: t, addToast: r, removeToast: o, clearAll: s },
    children: [e, i(fT, { toasts: t, onRemove: o, onClearAll: s })],
  });
}
function fT({ toasts: e, onRemove: t, onClearAll: n }) {
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
    className: `${Ye.container} ${s ? Ye.belowTabs : ""} ym-hide-content`,
    children: [
      i("div", {
        className: `${Ye.toastList} ${r ? Ye.clearing : ""}`,
        children: a.map((l, u) => i(
          gT,
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
        i(ze, {
          className: Ye.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const hT = 80;
function pT(e) {
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
function mT(e) {
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
function gT({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const o = O(null);
  const [s, a] = L(0);
  const [c, l] = L(false);
  const [u, f] = L(false);
  const d = O(0);
  const p = O(false);

  const h = (S) => {
    (d.current = S.clientX);
    (p.current = false);
    l(true);
  };

  const m = N(
    (S) => {
      if (!c) {
        return;
      }
      const C = S.clientX - d.current;

      if (Math.abs(C) > 5) {
        (p.current = true);
      }

      a(C);
    },
    [c]
  );

  const g = N(() => {
    if (c) {
      l(false);

      if (Math.abs(s) > hT) {
        f(true);
        a(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!p.current) {
          const S = mT(e);

          if (S) {
            je(S);
            t(e.id);
          }
        }
      }
    }
  }, [c, s, t, e]);

  F(() => {
    if (c) {
      document.addEventListener("mousemove", m);
      document.addEventListener("mouseup", g);

      return () => {
        document.removeEventListener("mousemove", m);
        document.removeEventListener("mouseup", g);
      };
    }
  }, [c, m, g]);

  const w = (S) => {
    (d.current = S.touches[0].clientX);
    l(true);
  };

  const _ = (S) => {
    if (!c) {
      return;
    }
    const C = S.touches[0].clientX - d.current;
    a(C);
  };

  const y = () => {
    g();
  };

  const E = u || r ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const I = r ? 400 : s;
  return i("div", {
    ref: o,
    className: `${Ye.toast} ${c ? Ye.dragging : ""}`,
    style: {
      transform: `translateX(${I}px)`,
      opacity: E,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: h,
    onTouchStart: w,
    onTouchMove: _,
    onTouchEnd: y,
    children: [
      i("div", {
        className: Ye.toastLeft,
        children: [
          i(nt, {
            src: e.actorAvatar || "",
            badge: i(JC, { type: e.notificationType }),
          }),
          i("div", {
            className: Ye.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: Ye.title,
                  children: i(cr, { name: e.actorName }),
                }),
              i("p", { className: Ye.message, children: e.message }),
            ],
          }),
        ],
      }),
      i("button", {
        className: Ye.closeButton,
        onClick: (S) => {
          S.stopPropagation();
          t(e.id);
        },
        onMouseDown: S => S.stopPropagation(),
        onTouchStart: S => S.stopPropagation(),
        children: i(ut, { size: 16 }),
      }),
    ],
  });
}
const _T = "WKYS";
const yT = "sqTS";
const vT = "GXLf";
const ET = "gBWQ";
const wT = "zG6b";
const ST = "EoLp";
const bT = "NLnM";
const CT = "quUH";
const TT = "PHvZ";
const NT = "H5NH";

const qt = {
  container: _T,
  toast: yT,
  slideUp: vT,
  leaving: ET,
  fadeOut: wT,
  success: ST,
  icon: bT,
  message: CT,
  closeButton: TT,
  error: NT,
};

const IT = { success: z_, error: H_ };
function RT({ id: e, type: t, message: n, onRemove: r }) {
  const [o, s] = L(false);
  const IT_t = IT[t];

  const c = N(() => {
    s(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return i("div", {
    className: `${qt.toast} ${qt[t]} ${o ? qt.leaving : ""}`,
    children: [
      i("span", { className: qt.icon, children: i(IT_t, { size: 20 }) }),
      i("span", { className: qt.message, children: n }),
      i("button", {
        className: qt.closeButton,
        onClick: c,
        children: i(ut, { size: 14 }),
      }),
    ],
  });
}
function kT() {
  const e = Ur(n => n.toasts);

  const t = Ur(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: qt.container,
        children: e.map(n => i(
          RT,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const AT = "L22P";
const OT = "JyBn";
const PT = "whwZ";
const LT = "Da9S";
const Cr = { tabs: AT, indicator: OT, button: PT, active: LT };
function $T({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: o = "",
}) {
  const [s, a] = L(t);
  const c = n !== undefined ? n : s;
  const [l, u] = L({});
  const f = O([]);
  const d = O(null);
  const p = O(false);

  const h = N(() => {
    const _ = f.current[c];
    if (_) {
      const _parentElement = _.parentElement;
      const E = _parentElement ? parseFloat(getComputedStyle(_parentElement).paddingLeft) : 0;
      const I = !p.current;

      u({
        width: _.offsetWidth,
        transform: `translateX(${_.offsetLeft - E}px)`,
        ...(I ? { transition: "none" } : {}),
      });

      if (I) {
        requestAnimationFrame(() => {
          (p.current = true);

          u((S) => {
            const { transition: C, ...k } = S;
            return k;
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

  const m = (_) => {
    if (n === undefined) {
      a(_);
    }

    r?.(_, e[_]);
  };

  const g = _ => typeof _ == "string" ? _ : _.label;

  const w = (_, y) => typeof _ == "string" ? `${y}` : _.id;

  return i("div", {
    ref: d,
    className: `${Cr.tabs} ${o}`,
    children: [
      i("div", { className: Cr.indicator, style: l }),
      e.map((_, y) => i(
        "button",
        {
          ref: (E) => {
            f.current[y] = E;
          },
          onClick: () => m(y),
          className: `${Cr.button} ${c === y ? Cr.active : ""}`,
          children: g(_),
        },
        w(_, y)
      )
      ),
    ],
  });
}
const xT = ne(() => Z(
  () => import("./index-BXQLz6I6.js"),
  __vite__mapDeps([27, 28, 6, 5, 29])
).then(e => ({
  default: e.ImageViewer
}))
);
function MT() {
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
  } = Xl();
  return e
    ? i(Ce, {
        fallback: null,
        children: i(
          xT,
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
const DT = "cBXC";
const UT = "yzIi";
const FT = "Ra5N";
const HT = "Ba7P";
const Tr = { layout: DT, wrapper: UT, wrapperShop: FT, content: HT };

const BT = ne(() => Z(() => import("./index-BDyMSS7C.js"), __vite__mapDeps([30, 31])).then(
  e => ({
    default: e.AuthLayout
  })
)
);

const VT = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const WT = [
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

const jT = ["/shop"];

const zT = ({ children: e }) => {
  const t = bt();
  const n = ro();
  const r = h_();
  const [o, s] = L(window.location.pathname);
  F(() => {
    const f = () => {
      s(window.location.pathname);
    };
    window.addEventListener("popstate", f);
    const d = history.pushState.bind(history);
    const p = history.replaceState.bind(history);

    (history.pushState = (...h) => {
      d(...h);
      f();
    });

    (history.replaceState = (...h) => {
      p(...h);
      f();
    });

    return () => {
      window.removeEventListener("popstate", f);
      (history.pushState = d);
      (history.replaceState = p);
    };
  }, []);
  const a = VT.includes(o);

  const c = jT.some(f => o === f || o.startsWith(`${f}/`));

  const l = WT.includes(o);
  const u = (n || c) && !l;
  return a
    ? i(Ce, { fallback: null, children: i(BT, { children: e }) })
    : i(f_.Provider, {
        value: { isHidden: r },
        children: i("div", {
          className: Tr.layout,
          children: i("div", {
            className: `${Tr.wrapper} ${c ? Tr.wrapperShop : ""}`,
            children: [
              u && (t ? i(GC, {}) : i($0, {})),
              u && !t && i(F0, {}),
              i("div", { className: Tr.content, children: e }),
            ],
          }),
        }),
      });
};

const qT = "ZdK3";
const GT = "ZzpC";
const YT = "nCI4";
const KT = "udhH";
const XT = "FYEB";
const ZT = "TmRn";
const JT = "a5m6";
const QT = "upl8";
const eN = "NMh1";
const tN = "KFeQ";
const nN = "vnmX";
const rN = "EERW";
const oN = "eiOp";
const sN = "Cjoz";
const iN = "gl03";

const Pe = {
  overlay: qT,
  card: GT,
  imageWrap: YT,
  image: KT,
  body: XT,
  titleRow: ZT,
  title: JT,
  badge: QT,
  texts: eN,
  text: tN,
  moreButton: nN,
  buttons: rN,
  button: oN,
  primary: sN,
  secondary: iN,
};

const xu = "seen_announcements";
function Mu() {
  try {
    const e = localStorage.getItem(xu);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function aN(e) {
  try {
    const t = Mu();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(xu, JSON.stringify(t));
    }
  } catch {}
}
function cN() {
  const e = ro();
  const [t, n] = L(null);
  const [r, o] = L(false);

  const s = N(() => {
    o(false);

    n(m => {
      if (m) {
        aN(m.id);
      }

      return null;
    });
  }, []);

  F(() => {
    if (!e) {
      return;
    }
    let m = false;

    wy
      .getAnnouncements()
      .then((g) => {
      if (m) {
        return;
      }
      const w = Mu();

      const _ = g.find(y => y?.id && !w.includes(y.id));

      if (_) {
        n(_);
      }
    })
      .catch(() => {});

    return () => {
      m = true;
    };
  }, [e]);

  F(() => {
    if (!t) {
      return;
    }

    const m = (w) => {
      if (w.key === "Escape") {
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
    title: f,
    description: d,
    additional_text: p,
    buttons: h,
  } = t;

  return $(
    i("div", {
      className: Pe.overlay,
      onClick: c,
      children: i("div", {
        className: Pe.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": f,
        children: [
          l?.url &&
            i("div", {
              className: Pe.imageWrap,
              style:
                l.width && l.height
                  ? { aspectRatio: `${l.width} / ${l.height}` }
                  : undefined,
              children: i("img", {
                className: Pe.image,
                src: l.url,
                alt: "",
                width: l.width,
                height: l.height,
              }),
            }),
          i("div", {
            className: Pe.body,
            children: [
              i("div", {
                className: Pe.titleRow,
                children: [
                  i("h2", { className: Pe.title, children: f }),
                  u && i("span", { className: Pe.badge, children: u }),
                ],
              }),
              (d || p) &&
                i("div", {
                  className: Pe.texts,
                  children: [
                    d && i("p", { className: Pe.text, children: d }),
                    p &&
                      (r
                        ? i("p", { className: Pe.text, children: p })
                        : i("button", {
                            type: "button",
                            className: Pe.moreButton,
                            onClick: () => o(true),
                            children: "Подробнее",
                          })),
                  ],
                }),
              !!h?.length &&
                i("div", {
                  className: Pe.buttons,
                  children: h.map((m, g) => i(
                    "button",
                    {
                      type: "button",
                      className: `${Pe.button} ${
                        m.style === "secondary" ? Pe.secondary : Pe.primary
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
const ac = 3000/* 3e3 */;
const lN = 500;
const uN = 30000/* 3e4 */;
const cc = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function dN() {
  const e = Q(n => n.applyStatsUpdates);

  const t = yu();
  F(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let r = Infinity;
    let o = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > uN;

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
      const h = jr.getSnapshot();
      if (h.length === 0) {
        return;
      }
      o = true;
      const m = Date.now();
      try {
        const g = h.length > 20 ? h.slice(0, 20) : h;
        const w = await Le.getPostsStats(g);

        if (w.length > 0) {
          e(w, m);
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
            u(ac);
          }
        }, h));
      }
    };

    const f = () => {
      (a = Date.now());

      if (s) {
        (s = false);
        u(0);
      }
    };

    for (const h of cc) {
      window.addEventListener(h, f, { passive: true });
    }
    const d = () => {
      if (!document.hidden) {
        f();
      }
    };
    document.addEventListener("visibilitychange", d);
    const p = jr.onAppear(() => {
      if (!s && !document.hidden) {
        u(lN);
      }
    });
    u(ac);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", d);
      for (const h of cc) {
        window.removeEventListener(h, f);
      }
      p();
    };
  }, [e, t]);
}

const Du = () => i(vu, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(ze, {
    onClick: () => je("/"),
    children: "Вернуться на главную",
  }),
});

const fN = "OpVc";
const hN = "FpH1";
const pN = "BBSi";
const mN = "C2Pt";
const gN = "bUaf";
const _N = "KOl5";
const yN = "F5Dh";
const vN = "DakI";
const EN = "ztzi";
const wN = "svX9";
const SN = "qYLS";
const bN = "kMcJ";
const CN = "Nuc6";
const TN = "NRew";
const NN = "XgRu";
const IN = "hHzH";
const RN = "tVKZ";
const kN = "ixOs";
const AN = "LH3O";
const ON = "s5kO";
const PN = "N3Qt";
const LN = "ee1d";

const H = {
  skeleton: fN,
  inner: hN,
  content: pN,
  header: mN,
  body: gN,
  actions: _N,
  shimmer: yN,
  avatar: vN,
  name: EN,
  time: wN,
  line: SN,
  w100: bN,
  w92: CN,
  w85: TN,
  w78: NN,
  w65: IN,
  w50: RN,
  w40: kN,
  media: AN,
  mediaTall: ON,
  pill: PN,
  list: LN,
};

function $N(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: H.body,
          children: i("div", { className: `${H.shimmer} ${H.line} ${H.w65}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: H.body,
          children: [
            i("div", { className: `${H.shimmer} ${H.line} ${H.w100}` }),
            i("div", { className: `${H.shimmer} ${H.line} ${H.w78}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: H.body,
          children: [
            i("div", { className: `${H.shimmer} ${H.line} ${H.w100}` }),
            i("div", { className: `${H.shimmer} ${H.line} ${H.w92}` }),
            i("div", { className: `${H.shimmer} ${H.line} ${H.w85}` }),
            i("div", { className: `${H.shimmer} ${H.line} ${H.w50}` }),
          ],
        });
      }
    case "media":
      {
        return i("div", {
          className: H.body,
          children: [
            i("div", { className: `${H.shimmer} ${H.line} ${H.w92}` }),
            i("div", { className: `${H.shimmer} ${H.line} ${H.w40}` }),
            i("div", { className: `${H.shimmer} ${H.media}` }),
          ],
        });
      }
    case "mediaTall":
      {
        return i("div", {
          className: H.body,
          children: [
            i("div", { className: `${H.shimmer} ${H.line} ${H.w78}` }),
            i("div", { className: `${H.shimmer} ${H.mediaTall}` }),
          ],
        });
      }
  }
}
function Uu({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("article", {
    className: H.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: H.inner,
      children: [
        i("div", { className: `${H.shimmer} ${H.avatar}` }),
        i("div", {
          className: H.content,
          children: [
            i("div", {
              className: H.header,
              children: [
                i("div", { className: `${H.shimmer} ${H.name}` }),
                i("div", { className: `${H.shimmer} ${H.time}` }),
              ],
            }),
            $N(e),
            i("div", {
              className: H.actions,
              children: [
                i("div", { className: `${H.shimmer} ${H.pill}` }),
                i("div", { className: `${H.shimmer} ${H.pill}` }),
                i("div", { className: `${H.shimmer} ${H.pill}` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const lc = ["medium", "media", "short", "long", "mediaTall"];
function xN({ count: e = 4 }) {
  return i("div", {
    className: H.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(Uu, { variant: lc[n % lc.length], delayMs: n * 120 }, n)
    ),
  });
}
const MN = "dMOe";
const DN = "QzYF";
const UN = "mcxn";
const Oo = { virtualFeed: MN, virtualContent: DN, virtualItem: UN };
function FN({
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
  const f = O(null);
  const d = O(false);
  const [p, h] = L(null);
  const [m, g] = L(window.innerWidth < 1174);

  const w = Q(b => b.highlightedPostId);

  const _ = Q(b => b.clearHighlightedPost);

  F(() => {
    const b = () => g(window.innerWidth < 1174);
    window.addEventListener("resize", b);

    return () => window.removeEventListener("resize", b);
  }, []);
  const y = m ? 0 : c;

  const E = N(
    (b) => {
      const e_b = e[b];
      if (!e_b) {
        return b;
      }
      const A = e_b.attachments?.[0]?.id ?? "";
      return `${e_b.id}-${A}`;
    },
    [e]
  );

  const {
    virtualItems: I,
    totalSize: S,
    measureElement: C,
    getMeasuredHeights: k,
  } = m_({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: y,
    getItemKey: E,
    initialMeasuredHeights: l,
  });

  F(
    () => () => {
      if (u) {
        u(k());
      }
    },
    [u, k]
  );

  F(() => {
    if (!w) {
      return;
    }
    f.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const b = setTimeout(() => {
      h(w);
      _();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(b);
  }, [w, _]);

  const R = N(() => {
    if (!o || !r || n) {
      return;
    }
    const b =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (b < 500 && !d.current) {
      (d.current = true);
      o();
    }

    if (b > 600) {
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
      window.addEventListener("scroll", R, { passive: true });

      return () => window.removeEventListener("scroll", R);
    },
    [R]
  );

  return i("div", {
    ref: f,
    className: Oo.virtualFeed,
    children: [
      i("div", {
        className: Oo.virtualContent,
        style: { height: `${S}px` },
        children: I.map((b) => {
          const v = e[b.index];
          return v
            ? i(
                "div",
                {
                  ref: A => C(A, b.index),
                  className: Oo.virtualItem,
                  style: { transform: `translateY(${b.start}px)` },
                  children: t(v, b.index, v.id === p),
                },
                b.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${y}px` },
          children: i(Uu, { variant: "medium" }),
        }),
    ],
  });
}
const HN = "UNE8";
const BN = "iqT4";
const VN = "UHJE";
const WN = "RLXq";
const jN = "FB2e";
const zN = "W51h";

const fn = {
  page: HN,
  createPostWrapper: BN,
  tabsWrapper: VN,
  searchButton: WN,
  error: jN,
  empty: zN,
};

const qN = (e) => {
  const t = Q(v => v.posts);

  const n = Q(v => v.activeFeed);

  const r = Q(v => v.isLoading);

  const o = Q(v => v.isLoadingMore);

  const s = Q(v => v.hasMore);

  const a = Q(v => v.error);

  const c = Q(v => v.feedScrollPosition);

  const l = Q(v => v.feedMeasuredHeights);

  const u = Q(v => v.feedRestoreToken);

  const f = Q(v => v.setActiveFeed);

  const d = Q(v => v.fetchFeed);

  const p = Q(v => v.loadMoreFeed);

  const h = Q(v => v.createPost);

  const m = Q(v => v.cacheFeedHeights);

  const g = Ee(v => v.profile);

  const w = Ee(v => v.status);

  const _ = O(false);

  const y = we(() => t.map(v => v.author.id), [t]);

  Cy(y);

  F(() => {
    if (w === "authenticated" && t.length === 0 && !r) {
      d();
    }
  }, [n, w]);

  Dt(() => {
    if (!_.current) {
      if (t.length !== 0) {
        (_.current = true);

        c > 0 &&
          (window.scrollTo(0, c),
          requestAnimationFrame(() => window.scrollTo(0, c)));
      }
    }
  }, [t.length, c]);

  const E = O(null);
  Dt(() => {
    if (E.current === null) {
      E.current = u;
      return;
    }
    if (E.current === u) {
      return;
    }
    E.current = u;
    const v = c;
    window.scrollTo(0, v);

    requestAnimationFrame(() => window.scrollTo(0, v));
  }, [u, c]);

  const I = N(
      (v) => {
        m(n, v);
      },
      [n, m]
    );

  const S = (v) => {
    const T = ["global", "clan", "following"][v] ?? "global";

    if (T !== n) {
      f(T);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      d(true);
    }
  };

  const C = async (v, A, T, P) => {
    if (g) {
      (await h({
          wallOwnerId: g.id,
          text: v,
          spans: A,
          attachments: T,
          poll: P,
        }));
    }
  };

  const k = N(() => {
    if (s && !o) {
      p();
    }
  }, [s, o, p]);

  const R =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const b = N(
    (v, A, T) => i(lb, { post: v, isHighlighted: T, source: R }, v.id),
    [R]
  );

  return i("div", {
    className: fn.page,
    children: [
      i("div", {
        className: fn.tabsWrapper,
        children: [
          i($T, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: S,
          }),
          i("a", {
            href: "/search",
            className: fn.searchButton,
            "aria-label": "Поиск",
            children: i(du, {}),
          }),
        ],
      }),
      i("div", {
        className: fn.createPostWrapper,
        children: [
          g && i(nt, { src: g.avatar ?? "", alt: g.displayName, size: "sm" }),
          i($u, { onSubmit: C }),
        ],
      }),
      a
        ? i("div", {
            className: fn.error,
            children: [
              i("p", { children: a }),
              i("button", { onClick: () => d(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? i(xN, { count: 4 })
        : t.length === 0
        ? i("div", { className: fn.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            FN,
            {
              posts: t,
              renderPost: b,
              isLoadingMore: o,
              hasMore: s,
              onLoadMore: k,
              estimatedPostHeight: 250,
              overscan: 3,
              initialMeasuredHeights: l,
              onMeasuredHeightsChange: I,
            },
            n
          )
        : null,
    ],
  });
};

const GN = ne(() => Z(
  () => import("./index-CIQJXaeU.js"),
  __vite__mapDeps([32, 28, 14, 33])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

const YN = ne(() => Z(() => import("./index-flb6PFMD.js"), __vite__mapDeps([34, 6, 35])).then(
  e => ({
    default: e.Hashtag
  })
)
);

const KN = ne(() => Z(
  () => import("./index-BK3heeTV.js"),
  __vite__mapDeps([36, 37, 1, 2, 38])
).then(e => ({
  default: e.Profile
}))
);

const XN = ne(() => Z(() => import("./index-B-XTplj8.js"), __vite__mapDeps([39, 6, 40])).then(
  e => ({
    default: e.PostPage
  })
)
);

const ZN = ne(() => Z(
  () => import("./index-BLWuSkdo.js"),
  __vite__mapDeps([41, 4, 37, 42])
).then(e => ({
  default: e.Notifications
}))
);

const JN = ne(() => Z(() => import("./index-CbY91-jY.js"), __vite__mapDeps([43, 44])).then(
  e => ({
    default: e.Search
  })
)
);

const QN = ne(() => Z(() => import("./index-CHL86PpH.js"), __vite__mapDeps([45, 46])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const eI = ne(() => Z(() => import("./index-B5J-zILt.js"), __vite__mapDeps([47, 6, 48])).then(
  e => ({
    default: e.DeleteAccount
  })
)
);

const tI = ne(() => Z(() => import("./index-DNpMN0c7.js"), __vite__mapDeps([49, 6, 50])).then(
  e => ({
    default: e.Terms
  })
)
);

const nI = ne(() => Z(() => import("./index-D0hUjtZN.js"), __vite__mapDeps([51, 6, 52])).then(
  e => ({
    default: e.Privacy
  })
)
);

const rI = ne(() => Z(() => import("./index-CMr5eite.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.Cookies
  })
)
);

const oI = ne(() => Z(
  () => import("./index-4daVaZdE.js"),
  __vite__mapDeps([55, 6, 3, 56])
).then(e => ({
  default: e.ExternalLink
}))
);

const sI = ne(() => Z(() => import("./index-BegVyLJ-.js"), __vite__mapDeps([57, 6, 58])).then(
  e => ({
    default: e.Support
  })
)
);

const iI = ne(() => Z(() => import("./index-wKQfQxYj.js"), __vite__mapDeps([59, 6, 60])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const aI = ne(() => Z(() => import("./index-CyNdNeAh.js"), __vite__mapDeps([61, 62])).then(
  e => ({
    default: e.Event
  })
)
);

const cI = ne(() => Z(
  () => import("./index-BRvfMsCK.js"),
  __vite__mapDeps([63, 64, 65, 6])
).then(e => ({
  default: e.SubscriptionTerms
}))
);

const lI = ne(() => Z(
  () => import("./index-P10XmEDR.js"),
  __vite__mapDeps([66, 64, 65, 6])
).then(e => ({
  default: e.RecurringTerms
}))
);

const uI = ne(() => Z(
  () => import("./index-BnqNnNe1.js"),
  __vite__mapDeps([67, 68, 69, 70, 71, 72, 73])
).then(e => ({
  default: e.Login
}))
);

const dI = ne(() => Z(
  () => import("./index-BGzNKYiG.js"),
  __vite__mapDeps([74, 68, 69, 70, 71, 72, 75])
).then(e => ({
  default: e.Register
}))
);

const fI = ne(() => Z(
  () => import("./index-owc-R5yI.js"),
  __vite__mapDeps([76, 68, 69, 72, 77])
).then(e => ({
  default: e.ForgotPassword
}))
);

const hI = ne(() => Z(() => import("./index-DlJ4aaHw.js"), __vite__mapDeps([78, 72, 79])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const pI = ne(() => Z(() => import("./index-ziFz4oqg.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const mI = ne(() => Z(() => import("./index-VnEx99Nf.js"), __vite__mapDeps([80, 81])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const gI = ne(() => Z(() => import("./index-CVeOSJFo.js"), []).then(e => ({
  default: e.Verification
}))
);

function uc(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const _I = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(Du, {});
  }
  const t = e.slice(1);
  return i(KN, { username: t });
};
function yI() {
  const [e, t] = L(window.location.pathname);

  const n = Yg(o => o.isOpen);

  dN();

  return i(dT, {
    children: i(hv, {
      children: i(t0, {
        currentPath: e,
        children: [
          i(MT, {}),
          n && i(Ce, { fallback: null, children: i(GN, {}) }),
          i(kT, {}),
          i(c0, {}),
          i(cN, {}),
          i(zT, {
            children: i(Ce, {
              fallback: null,
              children: i(Yl, {
                onChange: (o) => {
                  const s = e;
                  t(o.url);

                  if (o.url === s) {
                    return;
                  }

                  Kg.getState().markNavigated();
                  const a = Q.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = uc(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = o.url === "/";
                  const l = !!uc(o.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(qN, { path: "/" }),
                  i(ZN, { path: "/notifications" }),
                  i(uI, { path: "/login" }),
                  i(dI, { path: "/register" }),
                  i(fI, { path: "/forgot-password" }),
                  i(hI, { path: "/reset-password" }),
                  i(pI, { path: "/verify-email" }),
                  i(tI, { path: "/terms" }),
                  i(nI, { path: "/privacy" }),
                  i(rI, { path: "/cookies" }),
                  i(mI, { path: "/onboarding" }),
                  i(JN, { path: "/search" }),
                  i(QN, { path: "/shop/:rest*" }),
                  i(YN, { path: "/hashtag/:name" }),
                  i(oI, { path: "/external" }),
                  i(sI, { path: "/support" }),
                  i(eI, { path: "/delete-account" }),
                  i(iI, { path: "/child-safety" }),
                  i(aI, { path: "/event" }),
                  i(gI, { path: "/verification" }),
                  i(cI, { path: "/subscription-terms" }),
                  i(lI, { path: "/recurring-terms" }),
                  i(XN, { path: "/:username/post/:postId" }),
                  i(_I, { path: "/:slug" }),
                  i(Du, { default: true }),
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

Lg(document.getElementById("root")).render(
  i(jl, {
    children: i(Pg, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(yI, {}),
    }),
  })
);
export {
  $ as $,
  O as A,
  ze as B,
  ls as C,
  Nu as D,
  bt as E,
  ro as F,
  dv as G,
  He as H,
  lu as I,
  TC as J,
  vu as K,
  $T as L,
  sn as M,
  $u as N,
  qa as O,
  xN as P,
  Pt as Q,
  Kg as R,
  Or as S,
  we as T,
  cr as U,
  FN as V,
  gC as W,
  Tu as X,
  su as Y,
  ou as Z,
  Dt as __1,
  Yg as a,
  Hs as a0,
  Ws as a1,
  nn as a2,
  mu as a3,
  p_ as a4,
  gu as a5,
  M as a6,
  x as a7,
  zs as a8,
  du as a9,
  Cy as aA,
  vt as aB,
  Ty as aC,
  vI as __r,
  Fr as ab,
  eu as ac,
  Us as ad,
  U as ae,
  F_ as af,
  It as ag,
  Ds as ah,
  Ma as ai,
  M_ as aj,
  rt as ak,
  Kl as al,
  t_ as am,
  Ml as an,
  ar as ao,
  Os as ap,
  B_ as aq,
  Lr as ar,
  Bs as as,
  ut as at,
  uu as au,
  is as av,
  to as aw,
  WS as ax,
  PS as ay,
  wy as az,
  Q as b,
  lb as c,
  L as d,
  je as e,
  nt as f,
  G_ as g,
  au as h,
  qs as i,
  Ce as j,
  Ie as k,
  Z as l,
  Vs as m,
  an as n,
  gr as o,
  Le as p,
  N as q,
  hn as r,
  V_ as s,
  yt as t,
  i as u,
  hu as v,
  Ee as w,
  Ne as x,
  F as y,
  ne as z,
};
