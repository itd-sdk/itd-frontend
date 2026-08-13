const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BKHOFK-U.js",
      "assets/index-DO8sDby2.js",
      "assets/index-BJ988M_V.css",
      "assets/IconInfo-C8NLXfbe.js",
      "assets/IconNotificationMention-C1DaoUQe.js",
      "assets/IconChevronRight-C6tvOD4p.js",
      "assets/IconChevronLeft-DoFeid_h.js",
      "assets/index-DDRp8Qcc.css",
      "assets/index-DeNr0ifZ.js",
      "assets/index-BGu-gDlU.css",
      "assets/VoiceInput-CHkDQJ-6.js",
      "assets/IconPlay-BwitoxO4.js",
      "assets/VoiceInput-K9QpTewi.css",
      "assets/PostMediaVideo-CEy3P87p.js",
      "assets/VolumeGlyph-BaO6jcyf.js",
      "assets/PostMediaVideo-CRcEJHbN.css",
      "assets/index-DKRt0yGY.js",
      "assets/IconCheckCircle-DTjbRj58.js",
      "assets/index-CcINdfyw.css",
      "assets/index-FAS7kX6W.js",
      "assets/index-DY2RSXWh.css",
      "assets/index-CN7XvCc5.js",
      "assets/index-Bylj1MbC.css",
      "assets/index-1bYLec0_.js",
      "assets/index-DF_WYBIA.css",
      "assets/index-BuRXce-4.js",
      "assets/index-D0FoDbTf.css",
      "assets/index-DD8APvRL.js",
      "assets/useBodyScrollLock-B9AhjdDt.js",
      "assets/index-aU88IOT1.css",
      "assets/index-Dx7OUJsy.js",
      "assets/index-DuEj9rq4.css",
      "assets/index-D3HiqNCk.js",
      "assets/index-CwsaOv53.css",
      "assets/index-C3sI-6cW.js",
      "assets/index-CiG5JKQo.css",
      "assets/index-BZXa54kP.js",
      "assets/IconCheck-DJ0tSd1B.js",
      "assets/index-C2Lujth5.css",
      "assets/index-CpnEsoFE.js",
      "assets/index-Dd5N-iio.css",
      "assets/index-DFscgJ__.js",
      "assets/index-DoT5GWNd.css",
      "assets/index-DdZbKtMk.js",
      "assets/index-DS0h-Gtp.css",
      "assets/index-17blSS6O.js",
      "assets/index-CAhxZUt4.css",
      "assets/index-CEC7l0pE.js",
      "assets/index-B-v_N3Hv.css",
      "assets/index-CkEO0zLq.js",
      "assets/index-2y7woC4A.css",
      "assets/index-C_q3y8dV.js",
      "assets/index-D7IUeFYX.css",
      "assets/index-B5mwk_5V.js",
      "assets/index-CKUREe_Y.css",
      "assets/index-DWVhiFd6.js",
      "assets/index-Blkk-ndF.css",
      "assets/index-mXqA_D_a.js",
      "assets/index-CPwFKZt5.css",
      "assets/index-CaqgUs8a.js",
      "assets/index-DkiLKsCo.css",
      "assets/index-DPSDjPg_.js",
      "assets/index-DPJR_Oqh.css",
      "assets/index-Br_ZXLSB.js",
      "assets/SubscriptionTerms.module-CZJjpLXw.js",
      "assets/SubscriptionTerms-C84gFi0D.css",
      "assets/index-0vQdi2bt.js",
      "assets/index-Dxatl4MB.js",
      "assets/index-CanNJpc-.js",
      "assets/index-mShkmJ0m.css",
      "assets/index-baAbDm8Z.js",
      "assets/index-PK7XGESX.css",
      "assets/IconEyeOff-D9eoRMHE.js",
      "assets/index-C2TyLGY2.css",
      "assets/index-Uc3Ql2Ua.js",
      "assets/index-C1Sm8uvd.css",
      "assets/index-DeG8gK6Y.js",
      "assets/index-Bz3rjah2.css",
      "assets/index-biKBsHOn.js",
      "assets/index-B3IM48J8.css",
      "assets/index-D8bCVWSE.js",
      "assets/index-DHmXnW-u.css",
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
      (e._sentryDebugIds[t] = "05ba1c8e-ff57-4ae2-9f1e-165091bf5935");
      (e._sentryDebugIdIdentifier = "sentry-dbid-05ba1c8e-ff57-4ae2-9f1e-165091bf5935");
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
let K;
let ic;
let Gt;
let Zs;
let ac;
let cc;
let lc;
let cs;
let ko;
let Ao;
let uc;
const qn = {};
const dc = [];
const $u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function ct(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function ls(e) {
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
    __v: o ?? ++ic,
    __i: -1,
    __u: 0,
  };

  if (o == null && K.vnode != null) {
    K.vnode(s);
  }

  return s;
}
function Mu() {
  return { current: null };
}
function Ne(e) {
  return e.children;
}

class Xe {
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
      Oo(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Oo(this);
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
function fc(e) {
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

    return fc(e);
  }
}
function Oo(e) {
  if (((!e.__d && (e.__d = true) && Gt.push(e) && !Lr.__r++) || Zs != K.debounceRendering)) {
    ((Zs = K.debounceRendering) || ac)(Lr);
  }
}
function Lr() {
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
      Gt.sort(cc);
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
        K.vnode && K.vnode(n),
        us(
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
        mc(s, n, a),
        (r.__e = r.__ = null),
        n.__e != o && fc(n));
    }
  }

  Lr.__r = 0;
}
function hc(e, t, n, r, o, s, a, c, l, u, f) {
  let d;
  let p;
  let h;
  let m;
  let g;
  let w;
  let _;
  const y = (r && r.__k) || dc;
  const t_length = t.length;
  l = Du(n, t, y, l, t_length);

  for (d = 0; d < t_length; d++) {
    if ((h = n.__k[d]) != null) {
      (p = h.__i == -1 ? qn : y[h.__i] || qn);
      (h.__i = d);
      (w = us(e, h, p, o, s, a, c, l, u, f));
      (m = h.__e);

      h.ref &&
        p.ref != h.ref &&
        (p.ref && ds(p.ref, null, h), f.push(h.ref, h.__c || m, h));

      g == null && m != null && (g = m);

      (_ = !!(4 & h.__u)) || p.__k === h.__k
        ? (l = pc(h, l, e, _))
        : typeof h.type == "function" && w !== undefined
        ? (l = w)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = g);
  return l;
}
function Du(e, t, n, r, o) {
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
            ? (a = e.__k[s] = Vn(Ne, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                Vn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + p);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = Uu(a, n, l, d)) != -1 && (d--, (c = n[u]) && (c.__u |= 2));

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
        _c(c, c);
      }
    }
  }
  return r;
}
function pc(e, t, n, r) {
  let o;
  let s;
  if (typeof e.type == "function") {
    o = e.__k;

    for (s = 0; o && s < o.length; s++) {
      if (o[s]) {
        (o[s].__ = e);
        (t = pc(o[s], t, n, r));
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
function Uu(e, t, n, r) {
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
function Js(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || $u.test(t) ? n : `${n}px`);
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
            Js(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            Js(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(lc, "$1")));
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
        (n.u = cs);
        e.addEventListener(t, s ? Ao : ko, s);
      }
    } else {
      e.removeEventListener(t, s ? Ao : ko, s);
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
function Qs(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t.t == null) {
        t.t = cs++;
      } else if (t.t < n.u) {
        return;
      }
      return n(K.event ? K.event(t) : t);
    }
  };
}
function us(e, t, n, r, o, s, a, c, l, u) {
  let f;
  let d;
  let p;
  let h;
  let m;
  let g;
  let w;
  let _;
  let y;
  let v;
  let R;
  let E;
  let T;
  let k;
  let C;
  let b;
  let S;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    (l = !!(32 & n.__u));
    (s = [(c = t.__e = n.__e)]);
  }

  if ((f = K.__b)) {
    f(t);
  }

  e: if (typeof t_type == "function") {
    try {
      (_ = t.props);
      (y = "prototype" in t_type && t_type.prototype.render);
      (v = (f = t_type.contextType) && r[f.__c]);
      (R = f ? (v ? v.props.value : f.__) : r);

      if (n.__c) {
        (w = (d = t.__c = n.__c).__ = d.__E);
      } else {
        y
              ? (t.__c = d = new t_type(_, R))
              : ((t.__c = d = new Xe(_, R)),
                (d.constructor = t_type),
                (d.render = Bu));

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
          d.componentWillReceiveProps(_, R);
        }

        if (t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(_, d.__s, R) === false)) {
          if (t.__v != n.__v) {
            (d.props = _);
            (d.state = d.__s);
            (d.__d = false);
          }

          t.__e = n.__e;
          t.__k = n.__k;

          t.__k.some(I => {
            if (I) {
              (I.__ = t);
            }
          });

          for (E = 0; E < d._sb.length; E++) {
            d.__h.push(d._sb[E]);
          }

          (d._sb = []);

          if (d.__h.length) {
            a.push(d);
          }

          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(_, d.__s, R);
        }

        if (y &&
          d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(h, m, g);
          });
        }
      }

      (d.context = R);
      (d.props = _);
      (d.__P = e);
      (d.__e = false);
      (T = K.__r);
      (k = 0);

      if (y) {
        d.state = d.__s;
        d.__d = false;

        if (T) {
          T(t);
        }

        f = d.render(d.props, d.state, d.context);

        for (C = 0; C < d._sb.length; C++) {
          d.__h.push(d._sb[C]);
        }

        d._sb = [];
      } else {
        do {
          (d.__d = false);

          if (T) {
            T(t);
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
        f.type === Ne &&
        f.key == null) {
        (b = gc(f.props.children));
      }

      (c = hc(e, Array_isArray(b) ? b : [b], t, n, r, o, s, a, c, l, u));
      (d.base = t.__e);
      (t.__u &= -161);

      if (d.__h.length) {
        a.push(d);
      }

      if (w) {
        (d.__E = d.__ = null);
      }
    } catch (I) {
      (t.__v = null);

      if (l || s != null) {
        if (I.then) {
          for (t.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) {
            c = c.nextSibling;
          }
          (s[s.indexOf(c)] = null);
          (t.__e = c);
        } else {
          for (S = s.length; S--; ) {
            ls(s[S]);
          }
          Po(t);
        }
      } else {
        (t.__e = n.__e);
        (t.__k = n.__k);

        if (!I.then) {
          Po(t);
        }
      }

      K.__e(I, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = Fu(n.__e, t, n, r, o, s, a, l, u));
    }
  }

  if ((f = K.diffed)) {
    f(t);
  }

  return 128 & t.__u ? undefined : c;
}
function Po(e) {
  if (e && e.__c) {
    (e.__c.__e = true);
  }

  if (e && e.__k) {
    e.__k.forEach(Po);
  }
}
function mc(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    ds(n[r], n[++r], n[++r]);
  }

  if (K.__c) {
    K.__c(t, e);
  }

  e.some(o => {
    try {
      (e = o.__h);
      (o.__h = []);

      e.some(s => {
        s.call(o);
      });
    } catch (s) {
      K.__e(s, o.__v);
    }
  });
}
function gc(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(gc)
    : ct({}, e);
}
function Fu(e, t, n, r, o, s, a, c, l) {
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
      K.__m && K.__m(t, s);
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

      hc(
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
          ls(s[u]);
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
function ds(e, t, n) {
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
    K.__e(o, n);
  }
}
function _c(e, t, n) {
  let r;
  let o;

  if (K.unmount) {
    K.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      ds(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (s) {
        K.__e(s, t);
      }
    }
    r.base = null;
    r.__P = null;
  }

  if ((r = e.__k)) {
    for (o = 0; o < r.length; o++) {
      if (r[o]) {
        _c(r[o], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    ls(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Bu(e, t, n) {
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

  if (K.__) {
    K.__(e, t);
  }

  (o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (a = []);

  us(
    t,
    (e = ((!r && n) || t).__k = tt(Ne, null, [e])),
    o || qn,
    qn,
    t.namespaceURI,
    !r && n ? [n] : o ? null : t.firstChild ? Qn.call(t.childNodes) : null,
    s,
    !r && n ? n : o ? o.__e : t.firstChild,
    r,
    a
  );

  mc(s, e, a);
}
function yc(e, t) {
  Gn(e, t, yc);
}
function vc(e, t, n) {
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
            Oo(a);
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
  (t.__c = `__cC${uc++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
(Qn = dc.slice);

(K = {
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

(ic = 0);

(Xe.prototype.render = Ne);
(Gt = []);

(ac = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(cc = (e, t) => e.__v.__b - t.__v.__b);

(Lr.__r = 0);
(lc = /(PointerCapture)$|Capture$/i);
(cs = 0);
(ko = Qs(false));
(Ao = Qs(true));
(uc = 0);
let Hu = 0;
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
    __v: --Hu,
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

  if (K.vnode) {
    K.vnode(u);
  }

  return u;
}
const X = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const ce = globalThis;
const Jt = "10.52.0";
function jr() {
  zr(ce);
  return ce;
}
function zr(e) {
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
const Vu = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const Wu = "Sentry Logger ";
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
function ju() {
  hs().enabled = true;
}
function zu() {
  hs().enabled = false;
}
function wc() {
  return hs().enabled;
}
function qu(...e) {
  fs("log", ...e);
}
function Gu(...e) {
  fs("warn", ...e);
}
function Yu(...e) {
  fs("error", ...e);
}
function fs(e, ...t) {
  if (X &&
    wc()) {
    Cn(() => {
      ce.console[e](`${Wu}[${e}]:`, ...t);
    });
  }
}
function hs() {
  return X ? bn("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const W = {
    enable: ju,
    disable: zu,
    isEnabled: wc,
    log: qu,
    warn: Gu,
    error: Yu,
  };

const Ec = 50;
const en = "?";
const ei = /\(error: (.*)\)/;
const ti = /captureMessage|captureException/;
function Sc(...e) {
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

      const u = ei.test(a_c) ? a_c.replace(ei, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const f of t) {
          const d = f(u);
          if (d) {
            s.push(d);
            break;
          }
        }
        if (s.length >= Ec + o) {
          break;
        }
      }
    }
    return Ku(s.slice(o));
  };
}
function Xu(e) {
  return Array.isArray(e) ? Sc(...e) : e;
}
function Ku(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(ur(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (ti.test(ur(t).function || "")) {
    t.pop();
    ti.test(ur(t).function || "") && t.pop();
  }

  return t
    .slice(0, Ec)
    .map(n => ({
    ...n,
    filename: n.filename || ur(t).filename,
    function: n.function || en
  }));
}
function ur(e) {
  return e[e.length - 1] || {};
}
const ro = "<anonymous>";
function Lt(e) {
  try {
    return !e || typeof e != "function" ? ro : e.name || ro;
  } catch {
    return ro;
  }
}
function ni(e) {
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
function bc(e) {
  return "__v_isVNode" in e && e.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
}
const Dn = {};
const ri = {};
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
  if (!ri[e]) {
    ri[e] = true;
    try {
      t();
    } catch (n) {
      if (X) {
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
        if (X) {
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
let oo = null;
function Zu(e) {
  const t = "error";
  rn(t, e);
  on(t, Ju);
}
function Ju(...args) {
  (oo = ce.onerror);

  (ce.onerror = function (e, t, n, r, o) {
    et("error", { column: r, error: o, line: n, msg: e, url: t });
    return oo ? oo.apply(this, args) : false;
  });

  (ce.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let so = null;
function Qu(e) {
  const t = "unhandledrejection";
  rn(t, e);
  on(t, ed);
}
function ed(...args) {
  (so = ce.onunhandledrejection);

  (ce.onunhandledrejection = function (e) {
    et("unhandledrejection", e);
    return so ? so.apply(this, args) : true;
  });

  (ce.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const Cc = Object.prototype.toString;
function tr(e) {
  switch (Cc.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return xt(e, Error);
      }
  }
}
function Tn(e, t) {
  return Cc.call(e) === `[object ${t}]`;
}
function Tc(e) {
  return Tn(e, "ErrorEvent");
}
function oi(e) {
  return Tn(e, "DOMError");
}
function td(e) {
  return Tn(e, "DOMException");
}
function Et(e) {
  return Tn(e, "String");
}
function ps(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function qr(e) {
  return (
    e === null || ps(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Yn(e) {
  return Tn(e, "Object");
}
function Gr(e) {
  return typeof Event !== "undefined" && xt(e, Event);
}
function nd(e) {
  return typeof Element !== "undefined" && xt(e, Element);
}
function rd(e) {
  return Tn(e, "RegExp");
}
function nr(e) {
  return !!(e?.then && typeof e.then == "function");
}
function od(e) {
  return (
    Yn(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function xt(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function Ic(e) {
  return !!(
    typeof e == "object" &&
    e !== null &&
    (e.__isVue || e._isVue || e.__v_isVNode)
  );
}
function Nc(e) {
  return typeof Request !== "undefined" && xt(e, Request);
}
const ms = ce;
const sd = 80;
function Rc(e, t = {}) {
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
    const d = (!Array.isArray(t) && t.maxStringLength) || sd;

    while (n &&
         s++ < r &&
         ((u = id(n, f)),
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
function id(e, t) {
  const n = e;
  const r = [];
  if (!n?.tagName) {
    return "";
  }
  if (ms.HTMLElement && n instanceof HTMLElement && n.dataset) {
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
    if (n_className && Et(n_className)) {
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
function gs() {
  try {
    return ms.document.location.href;
  } catch {
    return "";
  }
}
function ad(e, t = 5) {
  if (!ms.HTMLElement) {
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
    kc(o, e_t);
  }

  try {
    e[t] = o;
  } catch {
    if (X) {
      W.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function $t(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (X) {
      W.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function kc(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    $t(e, "__sentry_original__", t);
  } catch {}
}
function _s(e) {
  return e.__sentry_original__;
}
function Ac(e) {
  if (tr(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...ii(e) };
  }
  if (Gr(e)) {
    const t = {
      type: e.type,
      target: si(e.target),
      currentTarget: si(e.currentTarget),
      ...ii(e),
    };

    if (typeof CustomEvent !== "undefined" && xt(e, CustomEvent)) {
      (t.detail = e.detail);
    }

    return t;
  } else {
    return e;
  }
}
function si(e) {
  try {
    return nd(e) ? Rc(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function ii(e) {
  return typeof e == "object" && e !== null
    ? Object.fromEntries(Object.entries(e))
    : {};
}
function cd(e) {
  const t = Object.keys(Ac(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let ln;
function Yr(e) {
  if (ln !== undefined) {
    return ln ? ln(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = ce;
  return t in n && typeof n[t] == "function"
    ? ((ln = n[t]), ln(e))
    : ((ln = null), e());
}
function $r() {
  return Yr(() => Math.random());
}
function Xr() {
  return Yr(() => Date.now());
}
function Lo(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function ai(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const o of e) {
    try {
      if (Ic(o)) {
        n.push(bc(o));
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
  return Et(e)
    ? rd(t)
      ? t.test(e)
      : Et(t)
      ? n
        ? e === t
        : e.includes(t)
      : typeof t == "function"
      ? t(e)
      : false
    : false;
}
function Kr(e, t = [], n = false) {
  return t.some(r => Wn(e, r, n));
}
function ld() {
  const e = ce;
  return e.crypto || e.msCrypto;
}
let io;
function ud() {
  return $r() * 16;
}
function Ke(e = ld()) {
  try {
    if (e?.randomUUID) {
      return Yr(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!io) {
    (io = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return io.replace(/[018]/g, t => (t ^ ((ud() & 15) >> (t / 4))).toString(16));
}
function Oc(e) {
  return e.exception?.values?.[0];
}
function Yt(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const r = Oc(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function xo(e, t, n) {
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
  const n = Oc(e);
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
function ci(e) {
  if (dd(e)) {
    return true;
  }
  try {
    $t(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function dd(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const Pc = 1000/* 1e3 */;
function rr() {
  return Xr() / Pc;
}
function fd() {
  const { performance } = ce;
  if (!performance?.now || !performance.timeOrigin) {
    return rr;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Yr(() => performance.now())) / Pc;
}
let li;
function St() {
  return (li ?? (li = fd()))();
}
function hd(e) {
  const t = St();

  const n = {
    sid: Ke(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => md(n),
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
    (e.sid = t.sid.length === 32 ? t.sid : Ke());
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
function pd(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  _n(e, n);
}
function md(e) {
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
function ui() {
  return Ke();
}
function Lc() {
  return Ke().substring(16);
}
const $o = "_sentrySpan";
function di(e, t) {
  if (t) {
    $t(e, $o, t);
  } else {
    delete e[$o];
  }
}
function fi(e) {
  return e[$o];
}
const gd = 100;
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
    (this._propagationContext = { traceId: ui(), sampleRand: $r() });
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
    di(t, fi(this));
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
    di(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: ui(), sampleRand: $r() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : gd;
    if (r <= 0) {
      return this;
    }
    const o = {
      timestamp: rr(),
      ...t,
      message: t.message ? Lo(t.message, 2048) : t.message,
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
      span: fi(this),
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
    const r = n?.event_id || Ke();
    if (!this._client) {
      if (X) {
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
    const o = r?.event_id || Ke();
    if (!this._client) {
      if (X) {
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
    const r = t.event_id || n?.event_id || Ke();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
      : (X && W.warn("No client configured on scope - will not capture event!"),
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
function _d() {
  return bn("defaultCurrentScope", () => new lt());
}
function yd() {
  return bn("defaultIsolationScope", () => new lt());
}

const hi = e => e instanceof Promise && !e[xc];

const xc = Symbol("chained PromiseLike");

const vd = (e, t, n) => {
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
  return hi(r) && hi(e) ? r : wd(e, r);
};

const wd = (e, t) => {
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
    Object.assign(t, { [xc]: true });
  }

  return t;
};

class Ed {
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
      ? vd(
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
  const e = jr();
  const t = zr(e);
  return (t.stack = t.stack || new Ed(_d(), yd()));
}
function Sd(e) {
  return yn().withScope(e);
}
function bd(e, t) {
  const n = yn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function pi(e) {
  return yn().withScope(() => e(yn().getIsolationScope()));
}
function Cd() {
  return {
    withIsolationScope: pi,
    withScope: Sd,
    withSetScope: bd,
    withSetIsolationScope: (e, t) => pi(t),
    getCurrentScope: () => yn().getScope(),
    getIsolationScope: () => yn().getIsolationScope(),
  };
}
function ys(e) {
  const t = zr(e);
  return t.acs ? t.acs : Cd();
}
function dt() {
  const e = jr();
  return ys(e).getCurrentScope();
}
function ft() {
  const e = jr();
  return ys(e).getIsolationScope();
}
function Td() {
  return bn("globalScope", () => new lt());
}
function vs(...e) {
  const t = jr();
  const n = ys(t);
  if (e.length === 2) {
    const [r, o] = e;
    return r ? n.withSetScope(r, o) : n.withScope(o);
  }
  return n.withScope(e[0]);
}
function Re() {
  return dt().getClient();
}
function Id(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || Lc() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const Nd = "sentry.source";
const Rd = "sentry.sample_rate";
const kd = "sentry.previous_trace_sample_rate";
const Ad = "sentry.op";
const Od = "sentry.origin";
const $c = "sentry.profile_id";
const Mc = "sentry.exclusive_time";
const Pd = "gen_ai.conversation.id";
const Ld = 0;
const xd = 1;
function $d(e) {
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
const Md = "_sentryScope";
const Dd = "_sentryIsolationScope";
function Dc(e) {
  const t = e;
  return { scope: t[Md], isolationScope: $d(t[Dd]) };
}
const mi = "sentry-";
function Ud(e) {
  const t = Fd(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((r, [o, s]) => {
    if (o.startsWith(mi)) {
      const a = o.slice(mi.length);
      r[a] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function Fd(e) {
  if (!(!e || (!Et(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const r = gi(n);

      Object.entries(r).forEach(([o, s]) => {
        t[o] = s;
      });

      return t;
    }, {})
      : gi(e);
  }
}
function gi(e) {
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
const Bd = /^o(\d+)\./;

const Hd =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function Vd(e) {
  return e === "http" || e === "https";
}
function In(e, t = false) {
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
function Wd(e) {
  const t = Hd.exec(e);
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

  return Uc({
    host: s,
    pass: o,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r,
  });
}
function Uc(e) {
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
function jd(e) {
  if (!X) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (W.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? Vd(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (W.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (W.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (W.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function zd(e) {
  return e.match(Bd)?.[1];
}
function qd(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let r;

  if (t.orgId) {
    (r = String(t.orgId));
  } else if (host) {
    (r = zd(host));
  }

  return r;
}
function Fc(e) {
  const t = typeof e == "string" ? Wd(e) : Uc(e);
  if (!(!t || !jd(t))) {
    return t;
  }
}
function Gd(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const Bc = 1;
function Yd(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const o = isRemote ? spanId : Zr(e).parent_span_id;
  const s = Dc(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || Lc() : spanId;
  return { parent_span_id: o, span_id: a, trace_id: traceId };
}
function Xd(e) {
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
        sampled: r === Bc,
        attributes: s,
        ...o
      })
    );
  }
}
function yi(e) {
  if (typeof e == "number") {
    return vi(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return vi(e.getTime());
  }

  return St();
}
function vi(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function Zr(e) {
  if (Jd(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (Zd(e)) {
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
      parent_span_id: Kd(e),
      start_timestamp: yi(startTime),
      timestamp: yi(endTime) || undefined,
      status: ef(status),
      op: attributes[Ad],
      origin: attributes[Od],
      links: Xd(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function Kd(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function Zd(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Jd(e) {
  return typeof e.getSpanJSON == "function";
}
function Qd(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === Bc;
}
function ef(e) {
  if (!(!e || e.code === Ld)) {
    return e.code === xd ? "ok" : e.message || "internal_error";
  }
}
const tf = "_sentryRootSpan";
const Hc = nf;
function nf(e) {
  return e[tf] || e;
}
function wi() {
  if (!_i) {
    Cn(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (_i = true);
  }
}
function rf(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = Re()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function Ei(e) {
  W.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function Si(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (af(n)) {
      if (e.description && Wn(e.description, n)) {
        if (X) {
          Ei(e);
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
      ? Object.entries(n.attributes).every(([c, l]) => of(e.attributes?.[c], l)
        )
      : true;

    if (o && s && a) {
      if (X) {
        Ei(e);
      }

      return true;
    }
  }
  return false;
}
function of(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Wn(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e === t;
}
function sf(e, t) {
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
function af(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const ws = "production";
const cf = "_frozenDsc";
function Vc(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const o = {
    environment: n.environment || ws,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: qd(t),
  };

  t.emit("createDsc", o);
  return o;
}
function lf(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || Vc(n.traceId, e);
}
function uf(e) {
  const t = Re();
  if (!t) {
    return {};
  }
  const n = Hc(e);

  const {
    data,
    description
  } = Zr(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[Rd] ?? data[kd];
  function c(m) {
    if ((typeof a == "number" || typeof a == "string")) {
      (m.sample_rate = `${a}`);
    }

    return m;
  }
  const n_cf = n[cf];
  if (n_cf) {
    return c(n_cf);
  }
  const u = s?.get("sentry.dsc");
  const f = u && Ud(u);
  if (f) {
    return c(f);
  }
  const d = Vc(e.spanContext().traceId, t);
  const p = data[Nd] ?? data["sentry.span.source"];

  if (p !== "url" && description) {
    (d.transaction = description);
  }

  if (rf()) {
    (d.sampled = String(Qd(n)));

    (d.sample_rand = s?.get("sentry.sample_rand") ??
    Dc(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(d);
  t.emit("createDsc", d, n);
  return d;
}
function df(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
const ff = Symbol.for("sentry.skipNormalization");
const hf = Symbol.for("sentry.overrideNormalizationDepth");
function pf(e) {
  return !!e[ff];
}
function mf(e) {
  const e_hf = e[hf];
  return typeof e_hf == "number" ? e_hf : undefined;
}
function _t(e, t = 100, n = Infinity) {
  try {
    return Mo("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function Wc(e, t = 3, n = 100 * 1024) {
  const r = _t(e, t);
  return vf(r) > n ? Wc(e, t - 1, n) : r;
}
function Mo(e, t, n = Infinity, r = Infinity, o = wf()) {
  const [s, a] = o;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = gf(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (pf(t)) {
    return t;
  }
  const l = mf(t);
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
      return Mo("", m, u - 1, r, o);
    } catch {}
  }
  const d = Array.isArray(t) ? [] : {};
  let p = 0;
  const h = Ac(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (p >= r) {
      d[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (d[m] = Mo(m, h_m, u - 1, r, o));
    p++;
  }
  a(t);
  return d;
}
function gf(e, t) {
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
    if (Ic(t)) {
      return bc(t);
    }
    if (od(t)) {
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
    const n = _f(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function _f(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function yf(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function vf(e) {
  return yf(JSON.stringify(e));
}
function wf() {
  const e = new WeakSet();
  function t(r) {
    return e.has(r) ? true : (e.add(r), false);
  }
  function n(r) {
    e.delete(r);
  }
  return [t, n];
}
function Nn(e, t = []) {
  return [e, t];
}
function Ef(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function Do(e, t) {
  const [, n] = e;
  for (const r of n) {
    const o = r[0].type;
    if (t(r, o)) {
      return true;
    }
  }
  return false;
}
function Sf(e, t) {
  return Do(e, (n, r) => t.includes(r));
}
function Uo(e) {
  const t = zr(ce);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function bf(e) {
  const [t, n] = e;
  let r = JSON.stringify(t);
  function o(s) {
    if (typeof r == "string") {
      (r = typeof s == "string" ? r + s : [Uo(r), s]);
    } else {
      r.push(typeof s == "string" ? Uo(s) : s);
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
  return typeof r == "string" ? r : Cf(r);
}
function Cf(e) {
  const t = e.reduce((o, s) => o + s.length, 0);

  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e) {
    n.set(o, r);
    (r += o.length);
  }
  return n;
}
function Tf(e) {
  const t = typeof e.data == "string" ? Uo(e.data) : e.data;
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
const jc = {
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
function If(e) {
  return e in jc;
}
function bi(e) {
  return If(e) ? jc[e] : e;
}
function zc(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function Nf(e, t, n, r) {
  const o = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: In(r) }),
    ...(o && { trace: o }),
  };
}
function Rf(e, t) {
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
function kf(e, t, n, r) {
  const o = zc(n);

  const s = {
    sent_at: new Date().toISOString(),
    ...(o && { sdk: o }),
    ...(!!r && t && { dsn: In(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return Nn(s, [a]);
}
function Af(e, t, n, r) {
  const o = zc(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  Rf(e, n?.sdk);
  const a = Nf(e, o, r, t);
  delete e.sdkProcessingMetadata;
  return Nn(a, [[{ type: s }, e]]);
}
function Of(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  Pf(e, t);

  if (span) {
    $f(e, span);
  }

  Mf(e, fingerprint);
  Lf(e, breadcrumbs);
  xf(e, sdkProcessingMetadata);
}
function Ci(e, t) {
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
function qc(e, t) {
  const n = Td().getScopeData();

  if (e) {
    Ci(n, e.getScopeData());
  }

  if (t) {
    Ci(n, t.getScopeData());
  }

  return n;
}
function Pf(e, t) {
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
function Lf(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function xf(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function $f(e, t) {
  (e.contexts = { trace: Yd(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: uf(t),
      ...e.sdkProcessingMetadata,
    });

  const n = Hc(t);
  const r = Zr(n).description;

  if (r && !e.transaction && e.type === "transaction") {
    (e.transaction = r);
  }
}
function Mf(e, t) {
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
function ao(e) {
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
function Df(e, t = true) {
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
function Gc(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([r, o]) => {
    if (o != null && !(r in n)) {
      (n[r] = o);
    }
  });
}
const co = 0;
const Ti = 1;
const Ii = 2;
function sr(e) {
  return new Xn((t) => {
    t(e);
  });
}
function Es(e) {
  return new Xn((t, n) => {
    n(e);
  });
}
class Xn {
  constructor(t) {
    (this._state = co);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new Xn((r, o) => {
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
    return new Xn((n, r) => {
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
    if (this._state === co) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === Ti && n[1](this._value);
        this._state === Ii && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === co) {
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
      n(Ti, s);
    };

    const o = (s) => {
      n(Ii, s);
    };

    try {
      t(r, o);
    } catch (s) {
      o(s);
    }
  }
}
function Uf(e, t, n, r = 0) {
  try {
    const o = Fo(t, n, e, r);
    return nr(o) ? o : sr(o);
  } catch (o) {
    return Es(o);
  }
}
function Fo(e, t, n, r) {
  const n_r = n[r];
  if (!e || !n_r) {
    return e;
  }
  const s = n_r({ ...e }, t);

  if (X && s === null) {
    W.log(`Event processor "${n_r.id || "?"}" dropped event`);
  }

  return nr(s) ? s.then(a => Fo(a, t, n, r + 1)) : Fo(s, t, n, r + 1);
}
let Bt;
let Ni;
let Ri;
let Ct;
function Ff(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = ce;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const r = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const o = _debugIds ? Object.keys(_debugIds) : [];
  if (Ct && r.length === Ni && o.length === Ri) {
    return Ct;
  }
  (Ni = r.length);
  (Ri = o.length);
  (Ct = {});

  if (!Bt) {
    (Bt = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const f = Bt?.[l];
      if (f && Ct && c_l) {
        (Ct[f[0]] = c_l);

        if (Bt) {
          (Bt[l] = [f[0], c_l]);
        }
      } else if (c_l) {
        const d = e(l);
        for (let p = d.length - 1; p >= 0; p--) {
          const m = d[p]?.filename;
          if (m && Ct && Bt) {
            (Ct[m] = c_l);
            (Bt[l] = [m, c_l]);
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
function Bf(e, t, n, r, o, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || Ke(),
    timestamp: t.timestamp || rr(),
  };

  const u = n.integrations || e.integrations.map(_ => _.name);

  Hf(l, e);
  jf(l, u);

  if (o) {
    o.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    Vf(l, e.stackParser);
  }

  const f = qf(r, n.captureContext);

  if (n.mechanism) {
    gn(l, n.mechanism);
  }

  const d = o ? o.getEventProcessors() : [];
  const p = qc(s, f);
  const h = [...(n.attachments || []), ...p.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  Of(l, p);
  const m = [...d, ...p.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? sr(l) : Uf(m, l, n)).then(
    _ => {
      if (_) {
        Wf(_);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? zf(_, normalizeDepth, normalizeMaxBreadth) : _;
    }
  );
}
function Hf(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || ws);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = Lo(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = Lo(c.value, maxValueLength));
      }
    });
  }
}
function Vf(e, t) {
  const n = Ff(t);
  e.exception?.values?.forEach((r) => {
    r.stacktrace?.frames?.forEach((o) => {
      if (o.filename) {
        (o.debug_id = n[o.filename]);
      }
    });
  });
}
function Wf(e) {
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
function jf(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function zf(e, t, n) {
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
function qf(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new lt();
  n.update(t);
  return n;
}
function Gf(e) {
  if (e) {
    return Yf(e) ? { captureContext: e } : Kf(e) ? { captureContext: e } : e;
  }
}
function Yf(e) {
  return e instanceof lt || typeof e == "function";
}
const Xf = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function Kf(e) {
  return Object.keys(e).some(t => Xf.includes(t));
}
function Yc(e, t) {
  return dt().captureException(e, Gf(t));
}
function Xc(e, t) {
  return dt().captureEvent(e, t);
}
function Zf(e, t) {
  ft().setContext(e, t);
}
function ki(e) {
  ft().setUser(e);
}
function Jf() {
  return ft().lastEventId();
}
function Ai(e) {
  const t = ft();
  const { user } = qc(t, dt());
  const { userAgent } = ce.navigator || {};
  const o = hd({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    _n(s, { status: "exited" });
  }

  Kc();
  t.setSession(o);
  return o;
}
function Kc() {
  const e = ft();
  const n = dt().getSession() || e.getSession();

  if (n) {
    pd(n);
  }

  Zc();
  e.setSession();
}
function Zc() {
  const e = ft();
  const t = Re();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function lo(e = false) {
  if (e) {
    Kc();
    return;
  }
  Zc();
}
const Qf = "7";
function Jc(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function eh(e) {
  return `${Jc(e)}${e.projectId}/envelope/`;
}
function th(e, t) {
  const n = { sentry_version: Qf };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function nh(e, t, n) {
  return t || `${eh(e)}?${th(e, n)}`;
}
function rh(e, t) {
  const n = Fc(e);
  if (!n) {
    return "";
  }
  const r = `${Jc(n)}embed/error-page/`;
  let o = `dsn=${In(n)}`;
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
const Oi = [];
function oh(e) {
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
function sh(e) {
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
  return oh(r);
}
function ih(e, t) {
  const n = {};

  t.forEach((r) => {
    if (r?.beforeSetup) {
      r.beforeSetup(e);
    }
  });

  t.forEach((r) => {
    if (r) {
      Qc(e, r, n);
    }
  });

  return n;
}
function Pi(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function Qc(e, t, n) {
  if (n[t.name]) {
    if (X) {
      W.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!Oi.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    Oi.push(t.name);
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

  if (X) {
    W.log(`Integration installed: ${t.name}`);
  }
}
function ah() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function ch() {
  return "npm";
}
function lh() {
  return (!ah() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function el() {
  return typeof window !== "undefined" && (!lh() || uh());
}
function uh() {
  return ce.process?.type === "renderer";
}
function dh(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(el() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function fh(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = In(r));
  }

  return Nn(s, [dh(e, o)]);
}
function Bo(e, t) {
  const n = t ?? hh(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();
  const o = fh(n, r._metadata, r.tunnel, e.getDsn(), r.sendDefaultPii);
  tl().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(o);
}
function hh(e) {
  return tl().get(e);
}
function tl() {
  return bn("clientToLogBufferMap", () => new WeakMap());
}
function ph(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(el() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function mh(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = In(r));
  }

  return Nn(s, [ph(e, o)]);
}
function nl(e, t) {
  const n = t ?? gh(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();
  const o = mh(n, r._metadata, r.tunnel, e.getDsn(), r.sendDefaultPii);
  rl().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(o);
}
function gh(e) {
  return rl().get(e);
}
function rl() {
  return bn("clientToMetricBufferMap", () => new WeakMap());
}
function ol(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const Ss = Symbol.for("SentryBufferFullError");
function bs(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function r(a) {
    t.delete(a);
  }
  function o(a) {
    if (!n()) {
      return Es(Ss);
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
    const l = [c, new Promise(u => ol(setTimeout(() => u(false), a)))];
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
const _h = 60 * 1000/* 1e3 */;
function yh(e, t = Xr()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const r = Date.parse(`${e}`);
  return isNaN(r) ? _h : r - t;
}
function vh(e, t) {
  return e[t] || e.all || 0;
}
function wh(e, t, n = Xr()) {
  return vh(e, t) > n;
}
function Eh(e, { statusCode: t, headers: n }, r = Xr()) {
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
      (o.all = r + yh(a, r));
    } else if (t === 429) {
      (o.all = r + 60 * 1000/* 1e3 */);
    }
  }
  return o;
}
const sl = 64;
function Sh(e, t, n = bs(e.bufferSize || sl)) {
  let r = {};
  const o = a => n.drain(a);
  function s(a) {
    const c = [];

    Do(a, (d, p) => {
      const h = bi(p);

      if (wh(r, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(d);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = Nn(a[0], c);

    const u = (d) => {
      if (Sf(l, ["client_report"])) {
        if (X) {
          W.warn(
            `Dropping client report. Will not send outcomes (reason: ${d}).`
          );
        }

        return;
      }
      Do(l, (p, h) => {
        e.recordDroppedEvent(d, bi(h));
      });
    };

    const f = () => t({ body: bf(l) }).then(
      d => d.statusCode === 413
        ? (X &&
            W.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          d)
        : (X &&
            d.statusCode !== undefined &&
            (d.statusCode < 200 || d.statusCode >= 300) &&
            W.warn(
              `Sentry responded with status code ${d.statusCode} to sent event.`
            ),
          (r = Eh(r, d)),
          d),
      (d) => {
        u("network_error");

        if (X) {
          W.error("Encountered error running transport request:", d);
        }

        throw d;
      }
    );

    return n.add(f).then(
      d => d,
      (d) => {
        if (d === Ss) {
          if (X) {
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
function bh(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: rr(), discarded_events: e },
  ];
  return Nn(t ? { dsn: t } : {}, [r]);
}
function il(e) {
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
function Ch(e) {
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
    profile_id: data?.[$c],
    exclusive_time: data?.[Mc],
    measurements: e.measurements,
    is_segment: true,
  };
}
function Th(e) {
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
          ...(e.profile_id && { [$c]: e.profile_id }),
          ...(e.exclusive_time && { [Mc]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const Li = "Not capturing exception because it's already been captured.";
const xi = "Discarded session because of missing or non-string release";
const al = Symbol.for("SentryInternalError");
const cl = Symbol.for("SentryDoNotSendEventError");
const Ih = 5000/* 5e3 */;
function Ir(e) {
  return { message: e, [al]: true };
}
function uo(e) {
  return { message: e, [cl]: true };
}
function $i(e) {
  return !!e && typeof e == "object" && al in e;
}
function Mi(e) {
  return !!e && typeof e == "object" && cl in e;
}
function Di(e, t, n, r, o) {
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

      (a = ol(
            setTimeout(() => {
              o(e);
            }, Ih)
          ));
    }
  });

  e.on("flush", () => {
    o(e);
  });
}
class Nh {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = bs(t.transportOptions?.bufferSize ?? sl));

    if (t.dsn) {
      (this._dsn = Fc(t.dsn));
    } else if (X) {
      W.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const r = nh(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: r,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs);

    if (this._options.enableLogs) {
      Di(this, "afterCaptureLog", "flushLogs", Oh, Bo);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      Di(this, "afterCaptureMetric", "flushMetrics", Ah, nl);
    }
  }
  captureException(t, n, r) {
    const o = Ke();
    if (ci(t)) {
      if (X) {
        W.log(Li);
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
    const s = { event_id: Ke(), ...r };
    const a = ps(t) ? t : String(t);
    const c = qr(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, o)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, r) {
    const o = Ke();
    if (n?.originalException && ci(n.originalException)) {
      if (X) {
        W.log(Li);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = Ui(t.type);

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
    Bo(this);
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

    Qc(this, t, this._integrations);

    if (!n) {
      Pi(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = Af(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const o of n.attachments || []) {
      r = Ef(r, Tf(o));
    }
    this.sendEnvelope(r).then(o => this.emit("afterSendEvent", t, o));
  }
  sendSession(t) {
    const { release, environment = ws } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (X) {
          W.warn(xi);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (X) {
          W.warn(xi);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const o = kf(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(o);
  }
  recordDroppedEvent(t, n, r = 1) {
    if (this._options.sendClientReports) {
      const o = `${t}:${n}`;

      if (X) {
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
        if (X) {
          W.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (X) {
      W.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = ih(this, integrations));
    Pi(this, integrations);
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

    return Bf(s, t, n, r, this, o).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...Id(r) },
          ...c.contexts,
        });

      const l = lf(this, r);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, r = dt(), o = ft()) {
    if (X &&
      Ho(t)) {
      W.log(`Captured error event \`${il(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, r, o).then(
      s => s.event_id,
      (s) => {
        if (X) {
          if (Mi(s)) {
            W.log(s.message);
          } else if ($i(s)) {
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
    const c = ll(t);
    const l = Ho(t);
    const f = `before send for type \`${t.type || "error"}\``;
    const d = typeof sampleRate === "undefined" ? undefined : Gd(sampleRate);
    if (l && typeof d == "number" && $r() > d) {
      this.recordDroppedEvent("sample_rate", "error");

      return Es(
        uo(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        )
      );
    }
    const p = Ui(t.type);
    return this._prepareEvent(t, n, r, o)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", p);
          throw uo("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const g = kh(this, s, h, n);
        return Rh(g, f);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", p);

        if (c) {
          const _ = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", _);
        }

        throw uo(`${f} returned \`null\`, will not send event.`);
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
        throw Mi(h) || $i(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            Ir(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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

        if (r === Ss) {
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
    if (X) {
      W.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (X) {
        W.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (X) {
        W.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (X) {
      W.log("Sending outcomes:", t);
    }

    const n = bh(t, this._options.tunnel && In(this._dsn));
    this.sendEnvelope(n);
  }
}
function Ui(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function Rh(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (nr(e)) {
    return e.then(
      (r) => {
        if (!Yn(r) && r !== null) {
          throw Ir(n);
        }
        return r;
      },
      (r) => {
        throw Ir(`${t} rejected with ${r}`);
      }
    );
  }
  if (!Yn(e) && e !== null) {
    throw Ir(n);
  }
  return e;
}
function kh(e, t, n, r) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !df(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (Ho(l) && beforeSend) {
    return beforeSend(l, r);
  }
  if (ll(l)) {
    if (c || ignoreSpans) {
      const u = Ch(l);
      if (ignoreSpans?.length &&
      Si({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const f = c(u);

        if (f) {
          (l = or(n, Th(f)));
        } else {
          wi();
        }
      }
      if (l.spans) {
        const f = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            Si({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            sf(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              f.push(m);
            } else {
              wi();
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
function Ho(e) {
  return e.type === undefined;
}
function ll(e) {
  return e.type === "transaction";
}
function Ah(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + ul(e.attributes);
}
function Oh(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + ul(e.attributes);
}
function ul(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * Fi(n[0]));
    } else if (qr(n)) {
      (t += Fi(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function Fi(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function Ph(e) {
  return (
    tr(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function Bi(e) {
  return Ph(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
function Lh(e, t) {
  if (t.debug === true) {
    if (X) {
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
  xh(r);
  r.init();
  return r;
}
function xh(e) {
  dt().setClient(e);
}
function $h(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function dl(e, t, n = [t], r = "npm") {
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
const Mh = 100;
function tn(e, t) {
  const n = Re();
  const r = ft();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = Mh } = n.getOptions();
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
let Hi;
const Dh = "FunctionToString";
const Vi = new WeakMap();

const Fh = () => ({
  name: Dh,

  setupOnce() {
    Hi = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...e) {
        const t = _s(this);
        const n = Vi.has(Re()) && t !== undefined ? t : this;
        return Hi.apply(n, e);
      };
    } catch {}
  },

  setup(e) {
    Vi.set(e, true);
  }
});

const Bh = [
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

const Hh = "EventFilters";

const Vh = (e = {}) => {
  let t;
  return {
    name: Hh,
    setup(n) {
      const r = n.getOptions();
      t = Wi(e, r);
    },
    processEvent(n, r, o) {
      if (!t) {
        const s = o.getOptions();
        t = Wi(e, s);
      }
      return jh(n, t) ? null : n;
    },
  };
};

const Wh = (e = {}) => ({
  ...Vh(e),
  name: "InboundFilters"
});

function Wi(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Bh),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function jh(e, t) {
  if (e.type) {
    if (e.type === "transaction" && qh(e, t.ignoreTransactions)) {
      if (X) {
        W.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Yt(e)}`);
      }

      return true;
    }
  } else {
    if (zh(e, t.ignoreErrors)) {
      if (X) {
        W.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Yt(e)}`);
      }

      return true;
    }
    if (Kh(e)) {
      if (X) {
        W.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Yt(e)}`);
      }

      return true;
    }
    if (Gh(e, t.denyUrls)) {
      if (X) {
        W.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Yt(e)}.
Url: ${Mr(e)}`);
      }

      return true;
    }
    if (!Yh(e, t.allowUrls)) {
      if (X) {
        W.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Yt(e)}.
Url: ${Mr(e)}`);
      }

      return true;
    }
  }
  return false;
}
function zh(e, t) {
  return t?.length ? il(e).some(n => Kr(n, t)) : false;
}
function qh(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? Kr(e_transaction, t) : false;
}
function Gh(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = Mr(e);
  return n ? Kr(n, t) : false;
}
function Yh(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = Mr(e);
  return n ? Kr(n, t) : true;
}
function Xh(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function Mr(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        r => r.mechanism?.parent_id === undefined && r.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? Xh(n) : null;
  } catch {
    if (X) {
      W.error(`Cannot extract url for event ${Yt(e)}`);
    }

    return null;
  }
}
function Kh(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function Zh(e, t, n, r, o, s) {
  if (!o.exception?.values || !s || !xt(s.originalException, Error)) {
    return;
  }
  const a =
    o.exception.values.length > 0
      ? o.exception.values[o.exception.values.length - 1]
      : undefined;

  if (a) {
    (o.exception.values = Vo(
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
function Vo(e, t, n, r, o, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (xt(r[o], Error)) {
    ji(a, c, r);
    const u = e(t, r[o]);
    const l_length = l.length;
    zi(u, o, l_length, c);
    (l = Vo(e, t, n, r[o], o, [u, ...l], u, l_length));
  }

  if (fl(r)) {
    r.errors.forEach((u, f) => {
      if (xt(u, Error)) {
        ji(a, c, r);
        const d = e(t, u);
        const l_length = l.length;
        zi(d, `errors[${f}]`, l_length, c);
        (l = Vo(e, t, n, u, o, [d, ...l], d, l_length));
      }
    });
  }

  return l;
}
function fl(e) {
  return Array.isArray(e.errors);
}
function ji(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(fl(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function zi(e, t, n, r) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
function Jh(e) {
  const t = "console";
  const n = rn(t, e);
  on(t, Qh);
  return n;
}
function Qh() {
  if ("console" in ce) {
    Vu.forEach(e => {
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
function ep(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const tp = "Dedupe";

const rp = () => {
  let e;
  return {
    name: tp,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (op(t, e)) {
          if (X) {
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

function op(e, t) {
  return t ? !!(sp(e, t) || ip(e, t)) : false;
}
function sp(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !pl(e, t) ||
    !hl(e, t)
  );
}
function ip(e, t) {
  const n = qi(t);
  const r = qi(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !pl(e, t) ||
    !hl(e, t)
  );
}
function hl(e, t) {
  let n = ni(e);
  let r = ni(t);
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
function pl(e, t) {
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
function qi(e) {
  return e.exception?.values?.[0];
}
const ap = "ConversationId";

const lp = () => ({
  name: ap,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = dt().getScopeData();
      const r = ft().getScopeData();
      const o = n.conversationId || r.conversationId;
      if (o) {
        const { op: op_1, data, description } = Zr(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(Pd, o);
      }
    });
  }
});

function ml(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const Kn = ce;
function up() {
  return "history" in Kn && !!Kn.history;
}
function dp() {
  if (!("fetch" in Kn)) {
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
function Wo(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function fp() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!dp()) {
    return false;
  }
  if (Wo(Kn.fetch)) {
    return true;
  }
  let e = false;
  const Kn_document = Kn.document;
  if (Kn_document && typeof Kn_document.createElement == "function") {
    try {
      const n = Kn_document.createElement("iframe");
      (n.hidden = true);
      Kn_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = Wo(n.contentWindow.fetch));
      }

      Kn_document.head.removeChild(n);
    } catch (n) {
      if (X) {
        W.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function hp(e, t) {
  const n = "fetch";
  const r = rn(n, e);

  on(n, () => pp(undefined, t));

  return r;
}
function pp(e, t = false) {
  if (!t || fp()) {
    We(ce, "fetch", n => (...r) => {
      const o = new Error();
      const { method, url } = mp(r);

      const c = {
        args: r,
        fetchData: { method: method, url: url },
        startTimestamp: St() * 1000/* 1e3 */,
        virtualError: o,
        headers: gp(r),
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
            $t(l, "framesToPop", 1);
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
                $t(l, "__sentry_fetch_url_host__", h);
              }
            } catch {}
          }
          throw l;
        }
      );
    });
  }
}
function Nr(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function Gi(e) {
  return typeof e == "string"
    ? e
    : e
    ? Nr(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function mp(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: Gi(n),
      method: Nr(r, "method")
        ? String(r.method).toUpperCase()
        : Nc(n) && Nr(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: Gi(t),
    method: Nr(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function gp(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (Nc(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const ue = ce;
let jo = 0;
function gl() {
  return jo > 0;
}
function _p() {
  jo++;

  setTimeout(() => {
    jo--;
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
    if (_s(e)) {
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
      _p();

      vs((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              xo(c, undefined);
              gn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: o });
            return c;
          }
        );

        Yc(s);
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
  kc(r, e);
  $t(e, "__sentry_wrapped__", r);
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
function Yi() {
  const e = gs();
  const { referrer } = ue.document || {};
  const { userAgent } = ue.navigator || {};
  const r = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: r };
}
function Cs(e, t) {
  const n = Ts(e, t);
  const r = { type: Sp(t), value: bp(t) };

  if (n.length) {
    (r.stacktrace = { frames: n });
  }

  if (r.type === undefined &&
    r.value === "") {
    (r.value = "Unrecoverable error caught");
  }

  return r;
}
function yp(e, t, n, r) {
  const s = Re()?.getOptions().normalizeDepth;
  const a = Rp(t);
  const c = { __serialized__: Wc(t, s) };
  if (a) {
    return { exception: { values: [Cs(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: Gr(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
          value: Ip(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = Ts(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function fo(e, t) {
  return { exception: { values: [Cs(e, t)] } };
}
function Ts(e, t) {
  const n = t.stacktrace || t.stack || "";
  const r = wp(t);
  const o = Ep(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const vp = /Minified React error #\d+;/i;
function wp(e) {
  return e && vp.test(e.message) ? 1 : 0;
}
function Ep(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function _l(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function Sp(e) {
  const t = e?.name;
  return !t && _l(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function bp(e) {
  const t = e?.message;
  return _l(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? Bi(t.error)
      : Bi(e)
    : "No error message";
}
function Cp(e, t, n, r) {
  const o = n?.syntheticException || undefined;
  const s = Is(e, t, o, r);
  gn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return sr(s);
}
function Tp(e, t, n = "info", r, o) {
  const s = r?.syntheticException || undefined;
  const a = zo(e, t, s, o);
  (a.level = n);

  if (r?.event_id) {
    (a.event_id = r.event_id);
  }

  return sr(a);
}
function Is(e, t, n, r, o) {
  let s;
  if (Tc(t) && t.error) {
    return fo(e, t.error);
  }
  if (oi(t) || td(t)) {
    const a = t;
    if ("stack" in t) {
      s = fo(e, t);
    } else {
      const c = a.name || (oi(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = zo(e, l, n, r));
      xo(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (tr(t)) {
    return fo(e, t);
  }

  if (Yn(t) || Gr(t)) {
    (s = yp(e, t, n, o));
    gn(s, { synthetic: true });
    return s;
  }

  (s = zo(e, t, n, r));
  xo(s, `${t}`);
  gn(s, { synthetic: true });
  return s;
}
function zo(e, t, n, r) {
  const o = {};
  if (r && n) {
    const s = Ts(e, n);

    if (s.length) {
      (o.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    gn(o, { synthetic: true });
  }
  if (ps(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (o.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return o;
  }
  (o.message = t);
  return o;
}
function Ip(e, { isUnhandledRejection: t }) {
  const n = cd(e);
  const r = t ? "promise rejection" : "exception";
  return Tc(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : Gr(e)
    ? `Event \`${Np(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function Np(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function Rp(e) {
  return Object.values(e).find(t => t instanceof Error);
}
class kp extends Nh {
  constructor(t) {
    const n = Ap(t);
    const r = ue.SENTRY_SDK_SOURCE || ch();
    dl(n, "browser", ["browser"], r);

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
          enableLogs && Bo(this);
          u && nl(this);
        }
      });
    }

    if (sendDefaultPii) {
      this.on("beforeSendSession", $h);
    }
  }
  eventFromException(t, n) {
    return Cp(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return Tp(
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
function Ap(e) {
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
const Op = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Ue = ce;
const Pp = 1000/* 1e3 */;
let Xi;
let qo;
let Go;
function Lp(e) {
  rn("dom", e);
  on("dom", xp);
}
function xp() {
  if (!Ue.document) {
    return;
  }
  const e = et.bind(null, "dom");
  const t = Ki(e, true);
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
              const d = Ki(e);
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
function $p(e) {
  if (e.type !== qo) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== Go) {
      return false;
    }
  } catch {}
  return true;
}
function Mp(e, t) {
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
function Ki(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = Dp(n);
    if (Mp(n.type, r)) {
      return;
    }
    $t(n, "_sentryCaptured", true);

    if (r && !r._sentryId) {
      $t(r, "_sentryId", Ke());
    }

    const o = n.type === "keypress" ? "input" : n.type;

    if (!$p(n)) {
      e({ event: n, name: o, global: t });
      (qo = n.type);
      (Go = r ? r._sentryId : undefined);
    }

    clearTimeout(Xi);

    (Xi = Ue.setTimeout(() => {
      (Go = undefined);
      (qo = undefined);
    }, Pp));
  };
}
function Dp(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let dr;
function yl(e) {
  const t = "history";
  rn(t, e);
  on(t, Up);
}
function Up() {
  Ue.addEventListener("popstate", () => {
    const t = Ue.location.href;
    const n = dr;
    (dr = t);

    if (n === t) {
      return;
    }

    et("history", { from: n, to: t });
  });

  if (!up()) {
    return;
  }

  function e(t) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : undefined;
      if (r) {
        const o = dr;
        const s = Fp(String(r));
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
function Fp(e) {
  try {
    return new URL(e, Ue.location.origin).toString();
  } catch {
    return e;
  }
}
const Rr = {};
function Bp(e) {
  const Rr_e = Rr[e];
  if (Rr_e) {
    return Rr_e;
  }
  let n = Ue[e];
  if (Wo(n)) {
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
      if (Op) {
        W.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          o
        );
      }
    }
  }
  return n && (Rr[e] = n.bind(Ue));
}
function Hp(e) {
  Rr[e] = undefined;
}
const Un = "__sentry_xhr_v3__";
function Vp(e) {
  rn("xhr", e);
  on("xhr", Wp);
}
function Wp() {
  if (!Ue.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, r) {
      const o = new Error();
      const s = St() * 1000/* 1e3 */;
      const a = Et(r[0]) ? r[0].toUpperCase() : undefined;
      const c = jp(r[1]);
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

          if (f_Un && Et(p) && Et(h)) {
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
function jp(e) {
  if (Et(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
const zp = 40;
function qp(e, t = Bp("fetch")) {
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
      Hp("fetch");
      throw l;
    } finally {
      (n -= a);
      r--;
    }
  }
  return Sh(e, o, bs(e.bufferSize || zp));
}
const wn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Gp = 30;
const Yp = 50;
function Yo(e, t, n, r) {
  const o = { filename: e, function: t === "<anonymous>" ? en : t, in_app: true };

  if (n !== undefined) {
    (o.lineno = n);
  }

  if (r !== undefined) {
    (o.colno = r);
  }

  return o;
}
const Xp = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const Kp =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const Zp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const Jp = /at (.+?) ?\(data:(.+?),/;

const Qp = (e) => {
  const t = e.match(Jp);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = Xp.exec(e);
  if (n) {
    const [, o, s, a] = n;
    return Yo(o, en, Number(s), Number(a));
  }
  const r = Kp.exec(e);
  if (r) {
    if (r[2]?.indexOf("eval") === 0) {
      const c = Zp.exec(r[2]);

      if (c) {
        (r[2] = c[1]);
        (r[3] = c[2]);
        (r[4] = c[3]);
      }
    }
    const [s, a] = vl(r[1] || en, r[2]);
    return Yo(a, s, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};

const em = [Gp, Qp];

const tm =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const nm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const rm = (e) => {
  const t = tm.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = nm.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, r] = t;
    let o = t[1] || en;
    ([o, r] = vl(o, r));
    return Yo(r, o, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const om = [Yp, rm];
const sm = [em, om];
const im = Sc(...sm);

const vl = (e, t) => {
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
const am = "Breadcrumbs";

const lm = (e = {}) => {
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
    name: am,
    setup(n) {
      if (t.console) {
        Jh(fm(n));
      }

      if (t.dom) {
        Lp(dm(n, t.dom));
      }

      if (t.xhr) {
        Vp(hm(n));
      }

      if (t.fetch) {
        hp(pm(n));
      }

      if (t.history) {
        yl(mm(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", um(n));
      }
    },
  };
};

function um(e) {
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
function dm(e, t) {
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
      wn &&
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
      const f = gm(r_event) ? r_event.target : r_event;
      (o = Rc(f, { keyAttrs: a, maxStringLength: c }));
      (s = ad(f));
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
function fm(e) {
  return function (n) {
    if (Re() !== e) {
      return;
    }
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: ep(n.level),
      message: ai(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (r.message = `Assertion failed: ${
          ai(n.args.slice(1), " ") || "console.assert"
        }`);

        (r.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    tn(r, { input: n.args, level: n.level });
  };
}
function hm(e) {
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
    const p = { category: "xhr", data: f, type: "http", level: ml(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", p, d);
    tn(p, d);
  };
}
function pm(e) {
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
          level: ml(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        tn(l, c);
      }
    }
  };
}
function mm(e) {
  return n => {
    if (Re() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = ao(ue.location.href);
    let a = from ? ao(from) : undefined;
    const c = ao(to_2);

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
function gm(e) {
  return !!e && !!e.target;
}

const _m =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const ym = "BrowserApiErrors";

const wm = (e = {}) => {
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
    name: ym,
    setupOnce() {
      if (t.setTimeout) {
        We(ue, "setTimeout", Zi);
      }

      if (t.setInterval) {
        We(ue, "setInterval", Zi);
      }

      if (t.requestAnimationFrame) {
        We(ue, "requestAnimationFrame", Em);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in ue) {
        We(XMLHttpRequest.prototype, "send", Sm);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : _m).forEach(o => bm(o, t));
      }
    },
  };
};

function Zi(e) {
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
function Em(e) {
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
function Sm(e) {
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

          const c = _s(s);

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
function bm(e, t) {
  const r = ue[e]?.prototype;

  if (r?.hasOwnProperty?.("addEventListener")) {
    We(r, "addEventListener", o => (function(s, a, c) {
      try {
        if (Cm(a)) {
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
        Tm(this, s, a);
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
function Cm(e) {
  return typeof e.handleEvent == "function";
}
function Tm(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const Im = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof ue.document === "undefined") {
          if (wn) {
            W.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        Ai({ ignoreDuration: true });
        lo();
        const n = ft();
        let r = n.getUser();

        n.addScopeListener((o) => {
          const s = o.getUser();

          if ((r?.id !== s?.id || r?.ip_address !== s?.ip_address)) {
            lo();
            (r = s);
          }
        });

        if (t === "route") {
          yl(({ from: o, to: s }) => {
            if (o !== s) {
              Ai({ ignoreDuration: true });
              lo();
            }
          });
        }
      },
    };
  };

const Nm = "CultureContext";

const km = () => ({
  name: Nm,

  preprocessEvent(e) {
    const t = Ji();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = Ji();

    if (t) {
      Gc(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function Ji() {
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
const Am = "GlobalHandlers";

const Pm = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: Am,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        Lm(n);
        Qi("onerror");
      }

      if (t.onunhandledrejection) {
        xm(n);
        Qi("onunhandledrejection");
      }
    },
  };
};

function Lm(e) {
  Zu((t) => {
    const { stackParser, attachStacktrace } = wl();
    if (Re() !== e || gl()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = Dm(Is(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    Xc(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function xm(e) {
  Qu((t) => {
    const { stackParser, attachStacktrace } = wl();
    if (Re() !== e || gl()) {
      return;
    }
    const o = $m(t);
    const s = qr(o) ? Mm(o) : Is(stackParser, o, undefined, attachStacktrace, true);
    (s.level = "error");

    Xc(s, {
      originalException: o,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function $m(e) {
  if (qr(e)) {
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
function Mm(e) {
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
function Dm(e, t, n, r) {
  const o = (e.exception = e.exception || {});
  const s = (o.values = o.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: r,
      lineno: n,
      filename: Um(t) ?? gs(),
      function: en,
      in_app: true,
    });
  }

  return e;
}
function Qi(e) {
  if (wn) {
    W.log(`Global Handler attached: ${e}`);
  }
}
function wl() {
  return Re()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function Um(e) {
  if (!(!Et(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${Df(e, false)}>` : e;
  }
}

const Fm = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = Yi();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = Yi();
    Gc(e, {
      "url.full": t.url || undefined,
      "http.request.header.user_agent": t.headers["User-Agent"],
      "http.request.header.referer": t.headers.Referer,
    });
  }
});

const Bm = "cause";
const Hm = 5;
const Vm = "LinkedErrors";

const jm = (e = {}) => {
  const t = e.limit || Hm;
  const n = e.key || Bm;
  return {
    name: Vm,
    preprocessEvent(r, o, s) {
      const a = s.getOptions();
      Zh(Cs, a.stackParser, n, t, r, o);
    },
  };
};

function zm() {
  return qm()
    ? (wn &&
        Cn(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function qm() {
  if (typeof ue.window === "undefined") {
    return false;
  }
  const e = ue;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = gs();
  return !(
    ue === ue.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function Gm(e) {
  return [Wh(), Fh(), lp(), wm(), lm(), Pm(), jm(), rp(), Fm(), km(), Im()];
}
function Ym(e = {}) {
  const t = !e.skipBrowserExtensionCheck && zm();
  let n = e.defaultIntegrations == null ? Gm() : e.defaultIntegrations;
  const r = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: Xu(e.stackParser || im),
    integrations: sh({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || qp,
  };
  return Lh(kp, r);
}
function ea(e = {}) {
  const ue_document = ue.document;
  const n = ue_document?.head || ue_document?.body;
  if (!n) {
    if (wn) {
      W.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const r = dt();
  const s = Re()?.getDsn();
  if (!s) {
    if (wn) {
      W.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...r.getUser(), ...e.user },
      eventId: e.eventId || Jf(),
    };

  const c = ue.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = rh(s, a));
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
let ho;
let ta;
let En = 0;
const El = [];
const ve = K;

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
    ve.__h(me, e, En || t);
  }

  (En = 0);
  const n = me.__H || (me.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function L(e) {
  (En = 1);
  return Ns(Cl, e);
}
function Ns(e, t, n) {
  const r = Rn(Mt++, 2);
  (r.t = e);

  if (!r.__c &&
    ((r.__ = [
      n ? n(t) : Cl(undefined, t),
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

  if (!ve.__s && ks(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    me.__H.__h.push(n);
  }
}
function Dt(e, t) {
  const n = Rn(Mt++, 4);

  if (!ve.__s && ks(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    me.__h.push(n);
  }
}
function A(e) {
  (En = 5);

  return Ee(() => ({
    current: e
  }), []);
}
function Rs(e, t, n) {
  (En = 6);

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
function Ee(e, t) {
  const n = Rn(Mt++, 7);

  if (ks(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function N(e, t) {
  (En = 8);

  return Ee(() => e, t);
}
function Jr(e) {
  const t = me.context[e.__c];
  const n = Rn(Mt++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(me)), t.props.value) : e.__;
}
function Sl(e, t) {
  if (ve.useDebugValue) {
    ve.useDebugValue(t ? t(e) : e);
  }
}
function bl() {
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
function Xm() {
  for (let e; (e = El.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(kr);
        e.__H.__h.forEach(Xo);
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
    if (ho === me) {
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
      t.__h.forEach(Xo);
      (t.__h = []);
      (Mt = 0);
    }
  }

  (ho = me);
});

(ve.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((El.push(e_c) !== 1 && ta === ve.requestAnimationFrame) ||
          ((ta = ve.requestAnimationFrame) || Km)(Xm));

    e_c.__H.__.forEach(n => {
      if (n.u) {
        (n.__H = n.u);
      }

      (n.u = undefined);
    });
  }

  ho = null;
  me = null;
});

(ve.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.forEach(kr);

      (n.__h = n.__h.filter(r => !r.__ || Xo(r)));
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

const ca = typeof requestAnimationFrame == "function";
function Km(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (ca) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (ca) {
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
function Xo(e) {
  const t = me;
  (e.__c = e.__());
  (me = t);
}
function ks(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, r) => n !== e[r]);
}
function Cl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Tl(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Ko(e, t) {
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
function Il(e, t) {
  const n = t();
  const r = L({ t: { __: n, u: t } });
  const o = r[0].t;
  const [, s] = r;

  Dt(
    () => {
      (o.__ = n);
      (o.u = t);

      if (po(o)) {
        s({ t: o });
      }
    },
    [e, n, t]
  );

  F(
    () => {
      if (po(o)) {
        s({ t: o });
      }

      return e(() => {
        if (po(o)) {
          s({ t: o });
        }
      });
    },
    [e]
  );

  return n;
}
function po(e) {
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
function Nl(e) {
  e();
}
function Rl(e) {
  return e;
}
function kl() {
  return [false, Nl];
}
const Al = Dt;

class Zo {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return Ko(this.props, e) || Ko(this.state, t);
    }
}

function Qr(e, t) {
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

    return Ko(this.props, o);
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
((Zo.prototype = new Xe()).isPureReactComponent = true);

const {
  __b: _b_1,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2
} = K;

K.__b = e => {
  if (e.type && e.type.__f && e.ref) {
    (e.props.ref = e.ref);
    (e.ref = null);
  }

  if (_b_1) {
    _b_1(e);
  }
};
const Zm =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Ol(e) {
  class t {
    constructor(n) {
      const r = Tl({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      Gn(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = Zm);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const ua = (e, t) => e == null ? null : Qe(Qe(e).map(t));

const Jm = {
  map: ua,
  forEach: ua,
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

K.__e = (e, t, n, r) => {
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
function Pl(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(r => {
      if (typeof r.__c == "function") {
        r.__c();
      }
    }),
        (e.__c.__H = null));

    (e = Tl({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(r => Pl(r, t, n)));
  }

  return e;
}
function Ll(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(r => Ll(r, t, n)));

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
        this.__v.__k[0] = Pl(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const o = t.__a && tt(Ne, null, e.fallback);

    if (o) {
      (o.__u &= -33);
    }

    return [tt(Ne, null, t.__a ? null : e.children), o];
  }
}

function xl(e) {
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

(K.unmount = e => {
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

((Ce.prototype = new Xe()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    (r.o = []);
  }

  r.o.push(t_c);
  const o = xl(r.__v);

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
        r.__v.__k[0] = Ll(l, l.__c.__P, l.__c.__O);
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

const fa = (e, t, n) => {
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
function eg(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function tg(e) {
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

  Gn(tt(eg, { context: t.context }, e.__v), t.v);
}
function Ut(e, t) {
  const n = tt(tg, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((Fn.prototype = new Xe()).__a = function (e) {
  const t = this;
  const n = xl(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return o => {
    const s = () => {
      if (t.props.revealOrder) {
        r.push(o);
        fa(t, e, r);
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
        fa(e, n, t);
      });
    });

const $l =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const ng =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const rg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const og = /[A-Z0-9]/g;
const sg = typeof document !== "undefined";

const ig = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function Ml(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Gn(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function ag(e, t, n) {
  yc(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
(Xe.prototype.isReactComponent = {});

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach(e => {
  Object.defineProperty(Xe.prototype, e, {
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

function cg() {}
function lg() {
  return this.cancelBubble;
}
function ug() {
  return this.defaultPrevented;
}
K.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.persist = cg);
  (e.isPropagationStopped = lg);
  (e.isDefaultPrevented = ug);
  (e.nativeEvent = e);
  return e.nativeEvent;
};
let As;

const dg = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};

K.vnode = e => {
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
            (sg && a === "children" && type === "noscript") ||
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
                  ig(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (rg.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && ng.test(a)) {
            (a = a.replace(og, "-$&").toLowerCase());
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
        Object.defineProperty(o, "className", dg);
      } else if (((props.className && !props.class) || (props.class && props.className))) {
        (o.class = o.className = props.className);
      }

      (t.props = o);
    })(e);
  }

  (e.$$typeof = $l);

  if (vnode) {
    vnode(e);
  }
};
K.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (As = e.__c);
};
K.diffed = e => {
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

  (As = null);
};

const fg = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return As.__n[e.__c].props.value;
        },
        useCallback: N,
        useContext: Jr,
        useDebugValue: Sl,
        useDeferredValue: Rl,
        useEffect: F,
        useId: bl,
        useImperativeHandle: Rs,
        useInsertionEffect: Al,
        useLayoutEffect: Dt,
        useMemo: Ee,
        useReducer: Ns,
        useRef: A,
        useState: L,
        useSyncExternalStore: Il,
        useTransition: kl,
      },
    },
  };

const Dl = "18.3.1";
function hg(e) {
  return tt.bind(null, e);
}
function ir(e) {
  return !!e && e.$$typeof === $l;
}
function pg(e) {
  return ir(e) && e.type === Ne;
}
function mg(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function gg(e) {
  return ir(e) ? vc(...arguments) : e;
}
function Ul(e) {
  return !!e.__k && (Gn(null, e), true);
}
function _g(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const yg = (e, t) => e(t);

const vg = (e, t) => e(t);

const Fl = Ne;
const wg = ir;

const Bn = {
  useState: L,
  useId: bl,
  useReducer: Ns,
  useEffect: F,
  useLayoutEffect: Dt,
  useInsertionEffect: Al,
  useTransition: kl,
  useDeferredValue: Rl,
  useSyncExternalStore: Il,
  startTransition: Nl,
  useRef: A,
  useImperativeHandle: Rs,
  useMemo: Ee,
  useCallback: N,
  useContext: Jr,
  useDebugValue: Sl,
  version: "18.3.1",
  Children: Jm,
  render: Ml,
  hydrate: ag,
  unmountComponentAtNode: Ul,
  createPortal: Ut,
  createElement: tt,
  createContext: Sn,
  createFactory: hg,
  cloneElement: gg,
  createRef: Mu,
  Fragment: Ne,
  isValidElement: ir,
  isElement: wg,
  isFragment: pg,
  isMemo: mg,
  findDOMNode: _g,
  Component: Xe,
  PureComponent: Zo,
  memo: Qr,
  forwardRef: Ol,
  flushSync: vg,
  unstable_batchedUpdates: yg,
  StrictMode: Fl,
  Suspense: Ce,
  SuspenseList: Fn,
  lazy: ne,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fg,
};

function Eg(e) {
  const t = { ...e };
  dl(t, "react");
  Zf("react", { version: Dl });
  return Ym(t);
}
function Sg(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function bg(e, t) {
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
function Cg(e, { componentStack: t }, n) {
  if (Sg(Dl) && tr(e) && t) {
    const r = new Error(e.message);
    (r.name = `React ErrorBoundary ${e.name}`);
    (r.stack = t);
    bg(e, r);
  }
  return vs(r => {
    r.setContext("react", { componentStack: t });
    return Yc(e, n);
  });
}
const Tg = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const mo = { componentStack: null, error: null, eventId: null };
class Ig extends Xe {
  constructor(t) {
    super(t);
    (this.state = mo);
    (this._openFallbackReportDialog = true);
    const n = Re();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (r) => {
        if (!r.type &&
          this._lastEventId &&
          r.event_id === this._lastEventId) {
          ea({ ...t.dialogOptions, eventId: this._lastEventId });
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

    vs((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const f = Cg(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, f);
      }

      if (showDialog) {
        (this._lastEventId = f);
        this._openFallbackReportDialog && ea({ ...dialogOptions, eventId: f });
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
      if (this.state === mo) {
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

    this.setState(mo);
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
      : (fallback && Tg && W.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
Eg({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function Ng(e) {
  return {
    render(t) {
      Ml(t, e);
    },
    unmount() {
      Ul(e);
    },
  };
}
const Rg = "modulepreload";

const kg = e => `/${e}`;

const _a = {};

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
        (u = kg(u));

        if (u in _a) {
          return;
        }

        _a[u] = true;
        const f = u.endsWith(".css");
        const d = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${d}`)) {
          return;
        }
        const p = document.createElement("link");
        (p.rel = f ? "stylesheet" : Rg);

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

const Ag = {};
function hr(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Bl(e, t, n) {
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
  (e = Jo(e.replace(o, "")));
  (t = Jo(t || ""));
  for (let f = Math.max(e.length, t.length), d = 0; d < f; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const p = t[d].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[d].match(/[+*?]+$/) || Ag)[0] || "";
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
function Og(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Pg(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : Jo(n.props.path).map(Lg).join(""))(e));

  return e.props;
}
function Jo(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Lg(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const xg = {};
const Qt = [];
const jn = [];
let Ve = null;
const Os = { url: Ps() };
const Hl = Sn(Os);
function ar() {
  const e = Jr(Hl);
  if (e === Os) {
    const t = L()[1];
    F(() => {
      jn.push(t);

      return () => jn.splice(jn.indexOf(t), 1);
    }, []);
  }
  return [e, je];
}
function Ps() {
  let e;
  return `${(e =
  Ve && Ve.location
    ? Ve.location
    : Ve && Ve.getCurrentLocation
    ? Ve.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : xg).pathname || ""}${e.search || ""}`;
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

  return Vl(e);
}
function Vl(e) {
  let t = false;
  for (let n = 0; n < Qt.length; n++) {
    if (Qt[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function $g(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return je(t);
    }
  }
}
function Mg(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function Dg(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if ($g(e_target)) {
          return Mg(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Wl(e) {
  if (e.history) {
    (Ve = e.history);
  }

  (this.state = { url: e.url || Ps() });
}
hr((Wl.prototype = new Xe()), {
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

    if (!ya) {
      (ya = true);

      Ve ||
        addEventListener("popstate", () => {
          Vl(Ps());
        });

      addEventListener("click", Dg);
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
    e = e.filter(Pg).sort(Og);

    for (const r of e) {
      const o = Bl(t, r.props.path, r.props);
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
      (r = vc(
            c[0],
            hr(hr({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      hr(
        Os,
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

    return tt(Hl.Provider, { value: a }, r);
  },
});

const va = (e) => {
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

const Ug = e => e ? va(e) : va;

const Fg = e => e;

function Bg(e, t = Fg) {
  const n = Bn.useSyncExternalStore(
    e.subscribe,
    Bn.useCallback(() => t(e.getState()), [e, t]),
    Bn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Bn.useDebugValue(n);
  return n;
}

const wa = (e) => {
  const t = Ug(e);

  const n = r => Bg(t, r);

  Object.assign(n, t);
  return n;
};

const rt = e => e ? wa(e) : wa;

function Ls(e, t) {
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

const Qo = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Qo(r)(n);
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
          return Qo(r)(n);
        },
      };
    }
  };

const jl = (e, t) => (n, r, o) => {
  let s = {
      storage: Ls(() => localStorage),
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
      let v;
      return y((v = r()) != null ? v : p);
    });

    const _ =
      ((w = s.onRehydrateStorage) == null
        ? undefined
        : w.call(s, (g = r()) != null ? g : p)) || undefined;
    return Qo(s_storage.getItem.bind(s_storage))(s.name)
      .then((y) => {
        if (y) {
          if (typeof y.version == "number" && y.version !== s.version) {
            if (s.migrate) {
              const v = s.migrate(y.state, y.version);
              return v instanceof Promise ? v.then(R => [true, R]) : [true, v];
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
      const [R, E] = y;
      (h = s.merge(E, (v = r()) != null ? v : p));
      n(h, true);

      if (R) {
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

const zl = rt((e, t) => ({
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

const Vg = rt((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const Wg = rt((e, t) => ({
  navigatedInApp: false,

  markNavigated: () => {
    if (!t().navigatedInApp) {
      e({ navigatedInApp: true });
    }
  }
}));

const Be = {
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

const jg = 4000/* 4e3 */;

const Dr = rt((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const o = n.duration ?? jg;

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
  success: (e, t) => Dr.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => Dr.getState().addToast({ type: "error", message: e, duration: t }),
};

const zg = {
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

const qg = {
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

const Gg = [
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

const Yg = {
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

function ql(e) {
  return Yg[e] ?? e;
}
function Xg(e) {
  const qg_e = qg[e];
  if (qg_e) {
    return qg_e;
  }
  for (const { pattern, translate } of Gg) {
    const o = e.match(pattern);
    if (o) {
      return translate(o);
    }
  }
  return e;
}
function xs(e, t = "Произошла ошибка") {
  const n = Xg(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : zg[ql(e)] ?? n;
}
let Zn = null;
const es = new Set();
function Ur() {
  return Zn;
}
function Kg(e) {
  if (Zn !== e) {
    Zn = e;
    for (const t of es) {
      t(e);
    }
  }
}
function nN(e) {
  es.add(e);

  return () => {
    es.delete(e);
  };
}
function Ea() {
  return Zn ? { Authorization: `Bearer ${Zn}` } : {};
}
let ts = null;
function Zg(e) {
  ts = e;
}
async function Jg(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function ns() {
  return ts
    ? On ||
        ((On = Jg(ts).finally(() => {
          On = null;
        })),
        On)
    : null;
}
async function Qg(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = Ur();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const r = await n();
  return r.status !== 401 || !(await ns()) ? r : n();
}
function e_() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const Sa = e_();
class Gl {
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
    if (t.status !== Be.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        yt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      yt.error(xs(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${n}${r}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ...Ea() });
    n.set("X-Device-Id", Sa);
    return n;
  }
  async handleResponse(t) {
    if (t.status === Be.NO_CONTENT) {
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
      case Be.BAD_REQUEST:
        {
          return U.BAD_REQUEST;
        }
      case Be.UNAUTHORIZED:
        {
          return U.UNAUTHORIZED;
        }
      case Be.FORBIDDEN:
        {
          return U.ACCESS_DENIED;
        }
      case Be.NOT_FOUND:
        {
          return U.ENTITY_NOT_FOUND;
        }
      case Be.CONFLICT:
        {
          return U.ENTITY_ALREADY_EXISTS;
        }
      case Be.UNPROCESSABLE_ENTITY:
        {
          return U.VALIDATION_ERROR;
        }
      case Be.TOO_MANY_REQUESTS:
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
    (s.code = ql(r));
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
      if (w.status === Be.UNAUTHORIZED && !s && !_ && Ur()) {
        if (await ns()) {
          return this.executeRequest(t, n, r, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Be.UNAUTHORIZED,
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
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": Sa, ...Ea() };
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

      if (f.status === Be.UNAUTHORIZED && !o && Ur()) {
        if (await ns()) {
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Be.UNAUTHORIZED,
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
const M = new Gl({ baseURL: "/api", timeout: 30000/* 3e4 */ });
const ot = new Gl({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const $s = rt((e, t) => ({
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

const Yl = () => $s(e => e.portal);

const Jn = new Set();
let zn = null;
const t_ = 30000/* 3e4 */;
function n_() {
  if (zn === null) {
    (zn = window.setInterval(() => {
        Jn.forEach(e => e());
      }, t_));
  }
}
function r_() {
  if (zn !== null) {
    clearInterval(zn);
    (zn = null);
  }
}
function o_(e) {
  Jn.add(e);

  if (Jn.size === 1) {
    n_();
  }
}
function s_(e) {
  Jn.delete(e);

  if (Jn.size === 0) {
    r_();
  }
}
function go(e) {
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
function Xl(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [o, s] = L(() => n ? go(new Date(r)) : "");

  F(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(r);
    s(go(a));
    const c = () => {
      s(go(a));
    };
    o_(c);

    return () => s_(c);
  }, [r, n]);

  return o;
}
const ba = 1174;
function bt() {
  const [e, t] = L(() => typeof window === "undefined" ? false : window.innerWidth < ba);

  F(() => {
    const n = window.matchMedia(`(max-width: ${ba - 1}px)`);

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
const i_ = Sn({ isHidden: false });

const a_ = () => {
  const [e, t] = L(false);
  const n = A(0);

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

function eo(e = "", t = []) {
  const [n, r] = L(e);
  const [o, s] = L(t);
  const a = A(null);

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
function c_({
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
function l_({
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

  const d = A(s ?? new Map());
  const p = A(null);
  const h = A(null);
  const m = A(new Map());
  const g = A(o);
  g.current = o;

  const w = k => d.current.get(o(k)) ?? t;

  const _ = (k) => {
    let C = 0;
    for (let b = 0; b < k; b++) {
      C += w(b) + r;
    }
    return C;
  };

  const y = () => {
    if (e === 0) {
      return 0;
    }
    let k = 0;
    for (let C = 0; C < e; C++) {
      k += w(C);
    }
    (k += Math.max(0, e - 1) * r);
    return k;
  };

  const v = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const k = u();
    const C = f();
    let b = 0;
    let S = 0;
    for (let P = 0; P < e; P++) {
      const H = w(P) + r;
      if (S + H > k) {
        b = P;
        break;
      }
      S += H;
    }
    let O = b;
    let I = 0;
    for (let P = b; P < e && ((I += w(P) + r), (O = P), !(I >= C)); P++)
      {}
    return { start: Math.max(0, b - n), end: Math.min(e - 1, O + n) };
  };

  const R = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = v();
    const b = [];
    for (let S = start; S <= end; S++) {
      b.push({ index: S, key: o(S), start: _(S) });
    }
    return b;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((k) => {
      let C = false;
      for (const b of k) {
        const b_target = b.target;
        const O = m.current.get(b_target);
        if (O === undefined) {
          continue;
        }
        const I = b.borderBoxSize && b.borderBoxSize[0];
        const P = I ? I.blockSize : b_target.getBoundingClientRect().height;

        if (P > 0 && d.current.get(O) !== P) {
          d.current.set(O, P);
          (C = true);
        }
      }

      if (C) {
        l(b => b + 1);
      }
    }));
  }

  const E = N((k, C) => {
    if (!k) {
      return;
    }
    const b = g.current(C);
    m.current.set(k, b);
    h.current?.observe(k, { box: "border-box" });
    const S = k.getBoundingClientRect().height;

    if (S > 0 && d.current.get(b) !== S) {
      d.current.set(b, S);
      l(O => O + 1);
    }
  }, []);

  Dt(() => {
    const k = a ?? window;

    const C = () => {
      if (!p.current) {
        (p.current = requestAnimationFrame(() => {
          (p.current = null);

          l(b => b + 1);
        }));
      }
    };

    k.addEventListener("scroll", C, { passive: true });

    l(b => b + 1);

    return () => {
      k.removeEventListener("scroll", C);

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

  const T = N(() => new Map(d.current), []);
  return {
    virtualItems: R(),
    totalSize: y(),
    measureElement: E,
    getMeasuredHeights: T,
  };
}

const u_ = ({ size: e = 18 }) => i("svg", {
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

const d_ = ({ size: e = 18 }) => i("svg", {
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

const f_ = ({ size: e = 18 }) => i("svg", {
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

const Kl = ({ size: e = 18 }) => i("svg", {
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

const h_ = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const p_ = ({ size: e = 18 }) => i("svg", {
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

const m_ = ({ size: e = 18 }) => i("svg", {
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

const g_ = ({ size: e = 18 }) => i("svg", {
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

const __ = ({ size: e = 18 }) => i("svg", {
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

const y_ = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const v_ = ({ size: e = 24 }) => i("svg", {
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

const Zl = ({ size: e = 20 }) => i("svg", {
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

const w_ = ({ size: e = 8 }) => i("svg", {
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

const E_ = ({ size: e = 8 }) => i("svg", {
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

const S_ = () => i("svg", {
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

const Jl = ({ filled: e = false, size: t = 20 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: t,
  height: t,
  fill: "none",
  viewBox: "0 0 20 20",
  children: i("path", {
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M14.953 5.046c-2.73-2.728-7.173-2.728-9.903 0-2.07 2.07-2.634 5.247-1.41 7.888.136.336.232.59.232.798 0 .247-.105.553-.205.849-.195.573-.416 1.222.058 1.696.475.475 1.125.251 1.697.055.294-.1.598-.205.84-.205.215 0 .486.109.798.235a7.034 7.034 0 0 0 7.893-1.412c2.73-2.73 2.73-7.172 0-9.904Z",
    clipRule: "evenodd",
    fill: e ? "currentColor" : "none",
  }),
});

const Ql = ({ size: e = 18 }) => i("svg", {
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

const b_ = ({ size: e = 24 }) => i("svg", {
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

const eu = () => i("svg", {
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

const tu = ({ size: e = 18 }) => i("svg", {
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

const nu = ({ size: e = 24 }) => i("svg", {
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

const Ms = ({ filled: e = false, size: t = 20, className: n }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: t,
  height: t,
  viewBox: "0 0 20 20",
  fill: "none",
  className: n,
  children: i("path", {
    fill: e ? "currentColor" : "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.667",
    d: "M10 4.583C8.75 2.917 6.25 2.5 4.583 3.75 2.917 5 2.083 7.5 3.333 10S10 16.667 10 16.667 15.417 12.5 16.667 10s0-5-1.667-6.25-4.167-.833-5 .833Z",
  }),
});

const Ds = ({ size: e = 24 }) => i("svg", {
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

const C_ = ({ size: e = 24 }) => i("svg", {
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

const ru = ({ size: e = 18 }) => i("svg", {
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

const ou = ({ size: e = 24 }) => i("svg", {
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

const T_ = ({ size: e = 24 }) => i("svg", {
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

const rs = ({ size: e = 24 }) => i("svg", {
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

const Ca = ({ size: e = 18 }) => i("svg", {
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

const Us = ({ size: e = 24 }) => i("svg", {
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

const I_ = ({ size: e = 20 }) => i("svg", {
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

const Fs = ({ size: e = 20 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: [
    i("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m2 9 3-3 3 3",
    }),
    i("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 18H7a2 2 0 0 1-2-2V6M22 15l-3 3-3-3",
    }),
    i("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 6h6a2 2 0 0 1 2 2v10",
    }),
  ],
});

const su = ({ size: e = 24 }) => i("svg", {
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

const iu = ({ size: e = 24 }) => i("svg", {
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

const N_ = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const R_ = ({ size: e = 24 }) => i("svg", {
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

const k_ = ({ size: e = 48 }) => i("svg", {
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

const au = ({ size: e = 18 }) => i("svg", {
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

const A_ = ({ size: e = 16 }) => i("svg", {
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

const O_ = ({ size: e = 20 }) => i("svg", {
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

function P_(e) {
  const t = ar()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: Bl(t.path || t.url, e.path, {}) !== false,
  });
}
const L_ = "PkFC";
const x_ = "fNiH";
const $_ = "OKOo";
const M_ = "Y11M";
const D_ = "pyjU";
const U_ = "Mxh6";
const F_ = "cv03";
const B_ = "kQ9D";
const H_ = "lTfT";
const V_ = "x9uc";
const W_ = "wU1W";
const j_ = "AkjS";
const z_ = "F9ry";

const Oe = {
  aside: L_,
  asideBottom: x_,
  logoutButton: $_,
  asideBrand: M_,
  asideBrandVersion: D_,
  nav: U_,
  navItem: F_,
  active: B_,
  iconWrapper: H_,
  portalButton: V_,
  portalActive: W_,
  portalImage: j_,
  badge: z_,
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

const Ta = [
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

const Bs = [
  ae.LOGIN,
  ae.REGISTER,
  ae.FORGOT_PASSWORD,
  ae.RESET_PASSWORD,
  ae.VERIFY_EMAIL,
  ae.ONBOARDING,
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

const q_ = {
  like: "post_reaction",
  comment_like: "comment_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  wall_post: "wall_post",
};

function cu(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: q_[e.type] ?? "follow",
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
      const s = `${$.notifications.list}${o ? `?${o}` : ""}`;
      const a = await M.get(s);
      const c = a.notifications ?? [];
      const l = a.hasMore ? String(r + c.length) : null;
      return { notifications: c.map(cu), nextCursor: l };
    },
    async getUnreadCount() {
      return (await M.get($.notifications.count)).count;
    },
    async markAllAsRead() {
      await M.post($.notifications.markAllRead);
    },
    async getSettings() {
      const e = await M.get($.notifications.settings);
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

      await M.put($.notifications.settings, t);
    },
  };

const Ia = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const G_ = 0.3;
const Y_ = 15;
function X_(e) {
  const t = Ia[Math.min(e, Ia.length - 1)];
  const n = t * G_ * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let Tt = null;
let pr = null;
let Ln = 0;
let Ht = null;
function K_(e) {
  const { url, onMessage, onStatusChange } = e;
  function o() {
    if (Tt) {
      return;
    }
    if (!Ur()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    (Tt = new AbortController());

    (async () => {
      try {
        const c = await Qg(url, {
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

        if (Ht) {
          Ht.cancel().catch(() => {});
          (Ht = null);
        }

        const l = c.body.getReader();
        Ht = l;
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

        if (Ln >= Y_) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          (Tt = null);
          return;
        }

        const l = X_(Ln);
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

    if (Ht) {
      Ht.cancel().catch(() => {});
      (Ht = null);
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

const Na = {
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

const mr = K_({
  url: "/api/notifications/stream",
  onMessage: (e, t) => {
    if (e === "notification") {
      const n = cu(t);
      const r = n.payload.actors[0];

      const o = {
        id: n.id,
        type: n.type,
        actorName: r?.displayName || "Пользователь",
        actorUsername: r?.username || "",
        actorAvatar: r?.avatar || "",
        count: n.payload.count,
        message: J_(
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
        Q_();
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
  ...Na,

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
    e(Na);
  }
}));

const Z_ = {
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

function J_(e, t, n) {
  const Z_e = Z_[e];
  return Z_e ? Z_e(t, n) : "Новое уведомление";
}
function Q_() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const lu = () => nn(e => e.unreadCount);

const ey = () => nn(e => e.lastSseToast);

const ty = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const ny = ["video/mp4", "video/webm", "video/quicktime"];
const os = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const ry = ".mp4,.webm,.mov";

const hn = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await M.uploadFormData($.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await M.delete($.files.delete(e));
  },
  isValidImageType(e) {
    return ty.includes(e.type);
  },
  isValidVideoType(e) {
    return ny.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const oy = {
  async getChangelog() {
    const e = await M.get($.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await M.get($.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class Hs {
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
function Ra(e) {
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
const At = new Hs(100, 300 * 1000/* 1e3 */);
const sy = 60 * 1000/* 1e3 */;
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
    const e = await M.get($.users.me);
    return Ra(e);
  },
  async updateProfile(e) {
    return await M.put($.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = At.get(t);

    if (n && At.isFresh(t, sy)) {
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
    const n = await M.get($.users.profile(e), {
        skipErrorToast: [Be.NOT_FOUND],
      });

    const r = Ra(n);
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
    await M.post($.users.follow(e), {});
  },
  async unfollowUser(e) {
    await M.delete($.users.follow(e));
  },
  async pinPost(e) {
    await M.post($.posts.pin(e));
  },
  async unpinPost(e) {
    await M.delete($.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await M.get($.users.privacy);
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

    await M.put($.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await M.get($.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await M.post($.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await M.get($.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await M.put($.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await M.delete($.users.setPin);
  },
  async deleteAccount() {
    await M.delete($.users.deleteAccount);
  },
  async restoreAccount() {
    await M.post($.users.restoreAccount);
  },
};
function ka(e) {
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
let ss = new Set();
function iy() {
  if (!_o) {
    (null = setTimeout(async () => {
      _o = null;
      const e = Array.from(ss);
      ss.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await is.batchFollowStatus(n);
            vt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50));
  }
}
function ay(e) {
  const t = we(s => s.profile?.id);

  const n = vt(s => s.statuses);

  const r = A("");

  F(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of s) {
        ss.add(c);
      }
      iy();
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
const zt = new Hs(500, 120 * 1000/* 1e3 */);
setInterval(() => zt.cleanup(), 60 * 1000/* 1e3 */);
const is = {
  async followUser(e) {
    const t = await M.post($.users.follow(e), {});
    zt.delete(e);
    vt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await M.delete($.users.follow(e));
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
    const a = `${$.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await M.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const d = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(ka), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const a = `${$.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await M.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const d = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(ka), nextCursor: d };
  },
  async blockUser(e) {
    await M.post($.users.block(e), {});
    zt.delete(e);
  },
  async unblockUser(e) {
    await M.delete($.users.block(e));
    zt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const o = t.toString();
    const s = `${$.users.blocked}${o ? `?${o}` : ""}`;
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

    return (await M.post($.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    zt.delete(e);
  },
  clearSocialCache() {
    zt.clear();
  },
};
function cy(e) {
  const t = vt(o => o.statuses[e]);

  const n = N(async () => {
    vt.getState().setStatus(e, true);
    try {
      await is.followUser(e);
    } catch {
      vt.getState().setStatus(e, false);
    }
  }, [e]);

  const r = N(async () => {
    vt.getState().setStatus(e, false);
    try {
      await is.unfollowUser(e);
    } catch {
      vt.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: r };
}
const ly = "F37J";
const uy = "tWjY";
const dy = "lpUJ";
const fy = "Ong8";
const hy = "rnZ5";
const py = "jHQt";
const my = "JQ4x";
const gy = "QDLn";
const _y = "U5LM";
const yy = "YDIU";
const vy = "skZ8";
const wy = "uuI4";
const Ey = "arsx";
const Sy = "K7F2";

const $e = {
  overlay: ly,
  modalWrapper: uy,
  wide: dy,
  modal: fy,
  frameless: hy,
  header: py,
  title: my,
  closeButton: gy,
  externalCloseButton: _y,
  mobileOverlay: yy,
  closing: vy,
  bottomSheet: wy,
  dragHandle: Ey,
  dragIndicator: Sy,
};

const by = Sn(null);
const Cy = 100;
const Ty = 0.5;
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
  const f = A(null);
  const d = A(null);
  const p = A(null);
  const h = bt();
  const m = A(0);
  const g = A(false);
  const [w, _] = L(false);
  const y = A(0);
  const v = A(0);
  const R = A(0);
  F(() => {
    const q = (re) => {
        if (re.key === "Escape") {
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

  const T = (q) => {
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
      O(0, "transform 0.2s ease-out");
      I(0);
      (m.current = 0);
      return;
    }
    _(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, u]);

  const C = A(false);
  const b = A(false);

  const S = (q) => {
    let ee = q;

    while (ee && ee !== d.current) {
      const V = window.getComputedStyle(ee).overflowY;
      if ((V === "auto" || V === "scroll") &&
      ee.scrollHeight > ee.clientHeight) {
        return ee;
      }
      ee = ee.parentElement;
    }

    return null;
  };

  const O = (q, ee) => {
    if (d.current) {
      (d.current.style.transform = q > 0 ? `translateY(${q}px)` : "");
      (d.current.style.transition = ee || "");
    }
  };

  const I = (q) => {
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
    (v.current = Date.now());
    (R.current = q.touches[0].clientY);
    const q_target = q.target;
    if (q_target.closest(`.${$e.dragHandle}`)) {
      (C.current = true);
      (b.current = true);
      (g.current = true);

      if (d.current) {
        (d.current.style.transition = "none");
      }

      return;
    }
    (C.current = false);

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
    const ge = S(q_target);
    b.current = !ge || ge.scrollTop === 0;
  };

  const H = (q) => {
    if (!h) {
      return;
    }
    const ee = q.touches[0].clientY;
    const re = ee - y.current;
    (R.current = ee);

    if (C.current) {
      if (re > 0) {
        (m.current = re);
        O(re);
        I(re);
        q.preventDefault();
      }

      return;
    }

    if (b.current) {
      if (g.current && m.current > 0) {
        if (re > 0) {
          (m.current = re);
          O(re);
          I(re);
          q.preventDefault();
        } else {
          (m.current = 0);
          (g.current = false);
          O(0);
          I(0);
        }

        return;
      }

      if (re > 0) {
        g.current ||
            ((g.current = true),
            d.current && (d.current.style.transition = "none"));

        (m.current = re);
        O(re);
        I(re);
        q.preventDefault();
      }
    }
  };

  const ie = () => {
    if (!h) {
      return;
    }
    const q = R.current - y.current;
    const ee = Date.now() - v.current;
    const re = q / ee;

    if (g.current && (q > Cy || re > Ty)) {
      k();
    } else if (m.current > 0) {
      O(0, "transform 0.2s ease-out");
      I(0);
      (m.current = 0);
    }

    (g.current = false);
    (C.current = false);
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
  return i(by.Provider, {
    value: se,
    children: i("div", {
      ref: f,
      className: `${$e.overlay} ${h ? $e.mobileOverlay : ""} ${
        w ? $e.closing : ""
      }`,
      onMouseDown: E,
      onMouseUp: T,
      children: i("div", {
        ref: d,
        className: `${$e.modalWrapper} ${l === "wide" ? $e.wide : ""} ${
          h ? $e.bottomSheet : ""
        }`,
        style: pe,
        onTouchStart: P,
        onTouchMove: H,
        onTouchEnd: ie,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: $e.externalCloseButton,
              onClick: (q) => {
                q.stopPropagation();
                t();
              },
              children: i(ut, { size: 24 }),
            }),
          h &&
            i("div", {
              className: $e.dragHandle,
              children: i("div", { className: $e.dragIndicator }),
            }),
          i("div", {
            className: `${$e.modal} ${s ? $e.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                r &&
                !h &&
                i("div", {
                  className: $e.header,
                  children: [
                    i("span", { className: $e.title, children: n }),
                    o &&
                      i("button", {
                        type: "button",
                        className: $e.closeButton,
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
const Iy = "ZkdI";
const Ny = "hu2G";
const Ry = "jtFd";
const ky = "W3oz";
const Ay = "s9cB";
const Oy = "LIdU";
const Aa = { spinner: Iy, spin: Ny, xs: Ry, sm: ky, md: Ay, lg: Oy };
function uu({ size: e = "md", className: t }) {
  const n = [Aa.spinner, Aa[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(Ds, {}) });
}
const Py = "cjGs";
const Ly = "WkHM";
const xy = "NY7q";
const $y = "rmQu";
const My = "a5gK";
const Dy = "XcDq";
const Uy = "sYgQ";
const Fy = "wnyL";
const By = "Ozv4";
const Hy = "TpUe";
const Vy = "IyiA";
const Wy = "nULS";

const un = {
  button: Py,
  primary: Ly,
  secondary: xy,
  ghost: $y,
  accent: My,
  danger: Dy,
  sm: Uy,
  md: Fy,
  lg: By,
  fullWidth: Hy,
  iconOnly: Vy,
  loading: Wy,
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
    children: s ? i(uu, { size: "sm" }) : e,
  });
}
const jy = "zhmv";
const zy = "chE0";
const qy = "k4ua";
const Gy = "AYFj";
const _r = { content: jy, title: zy, subtitle: qy, actions: Gy };
function Yy({ displayName: e, onConfirm: t, onClose: n }) {
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
const du = Sn(null);
let Xy = 0;
function Ky({ children: e }) {
  const [t, n] = L([]);

  const r = N((a) => {
    const c = `modal-${++Xy}`;

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

  return i(du.Provider, {
    value: { openModal: r, closeModal: o, closeAllModals: s },
    children: [e, t.length > 0 && i(Zy, { modals: t })],
  });
}
function Zy({ modals: e }) {
  return Ut(
    i(Ne, {
      children: e.map(({ id: t, component: n }) => i(Ce, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function an() {
  const e = Jr(du);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const Jy = "pkbF";
const Qy = "HOoe";
const ev = "g3j7";
const tv = "uUDh";
const nv = "MnK8";
const rv = "KTnU";
const ov = "whrP";
const sv = "GnBQ";
const iv = "ULrS";
const av = "yFa1";
const cv = "xh8b";
const lv = "zmaZ";

const It = {
  avatar: Jy,
  xs: Qy,
  emoji: ev,
  onlineDot: tv,
  sm: nv,
  md: rv,
  lg: ov,
  xl: sv,
  badge: iv,
  followBadge: av,
  notFollowing: cv,
  following: lv,
};

function uv(e) {
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
  const l = e ? uv(e) : false;
  return i("div", {
    className: `${It.avatar} ${It[n]} ${c || ""}`,
    children: [
      l && e
        ? i("img", { src: e, alt: t || "" })
        : i("span", { className: It.emoji, children: e || "👤" }),
      r && i("div", { className: It.badge, children: r }),
      s !== undefined
        ? i("button", {
            type: "button",
            className: `${It.followBadge} ${
              s ? It.following : It.notFollowing
            }`,
            onClick: (u) => {
              u.preventDefault();
              u.stopPropagation();
              a?.(u);
            },
            children: s ? i(E_, { size: 8 }) : i(w_, { size: 8 }),
          })
        : o && i("span", { className: It.onlineDot }),
    ],
  });
}
const dv = "cVVM";
const fv = "tInm";
const hv = "IotL";
const pv = "mb1F";
const mv = "zU9H";
const gv = "hBpn";
const _v = "zAnI";
const yv = "WHCH";
const vv = "r8Ms";
const wv = "hJIA";
const Ev = "Rc67";
const Sv = "Yy7S";
const bv = "DF9e";
const Cv = "XGLG";
const Tv = "US3h";

const Fe = {
  userName: dv,
  pinBadge: fv,
  text: hv,
  nukstaGlow: pv,
  xs: mv,
  sm: gv,
  md: _v,
  lg: yv,
  pinWrapper: vv,
  pinClickable: wv,
  pinTooltip: Ev,
  pinTooltipFadeIn: Sv,
  pinTooltipRow: bv,
  pinTooltipLabel: Cv,
  pinTooltipArrow: Tv,
};

const Iv = ne(() => Z(
  () => import("./index-BKHOFK-U.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const Nv = { xs: 12, sm: 14, md: 16, lg: 22 };
const Rv = "subscription_nuksta";
function cr({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: o = "md",
  className: s,
}) {
  const Nv_o = Nv[o];
  const c = A(null);
  const [l, u] = L(null);
  const [f, d] = L(false);
  const p = r?.slug === Rv;

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
      t && i(A_, {}),
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
              width: Nv_o,
              height: Nv_o,
            }),
            l &&
              Ut(
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
          children: i(Iv, { isOpen: true, onClose: () => d(false) }),
        }),
    ],
  });
}
function kv(e) {
  return "accessToken" in e;
}
function Av(e) {
  return "accessToken" in e;
}
const Vt = { skipErrorToast: true };

const Nt = {
  async register(e) {
    return await ot.post($.auth.signUp, e, Vt);
  },
  async login(e) {
    return await ot.post($.auth.signIn, e, Vt);
  },
  async verifyOtp(e) {
    return await ot.post($.auth.verifyOtp, e, Vt);
  },
  async resendOtp(e) {
    await ot.post($.auth.resendOtp, e, Vt);
  },
  async refreshSession() {
    return await ot.post($.auth.refresh);
  },
  async logout() {
    await ot.post($.auth.logout);
  },
  async logoutAll() {
    await ot.post(`${$.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await ot.post($.auth.forgotPassword, e, Vt);
  },
  async resetPassword(e) {
    await ot.post($.auth.resetPassword, e, Vt);
  },
  async changePassword(e) {
    await ot.post($.auth.changePassword, e, Vt);
  },
};

function Wt(e, t) {
  if (!e) {
    ki(null);
    return;
  }
  ki({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
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

const we = rt()(
  jl(
    (e, t) => {
      const n = Kg;

      Zg(async () => {
        try {
          const s = await Nt.refreshSession();
          n(s.accessToken);
          return s.accessToken;
        } catch (s) {
          return Ie(s) && s.status >= 500
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
            const s = await Nt.register(o);

            e({
              status: "needs_verification",
              pendingEmail: o.email,
              pendingPassword: o.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const a = Ie(s) ? s.message : "Registration failed";
            const c = Ie(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        login: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Nt.login(o);
            if (Av(s)) {
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
                if (Ie(c) &&
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
            const a = Ie(s) ? s.message : "Login failed";
            const c = Ie(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        verifyOtp: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail: s, pendingPassword: a, flowToken: c } = t();
          try {
            const l = await Nt.verifyOtp({
              email: s || "",
              password: a || "",
              otp: o,
              flowToken: c || "",
            });
            e({ pendingPassword: null });

            if (kv(l)) {
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
                if (Ie(f) &&
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
            const u = Ie(l) ? l.message : "Verification failed";
            const f = Ie(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: f });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail: o, flowToken: s } = t();
          try {
            await Nt.resendOtp({ email: o || "", flowToken: s || "" });
          } catch (a) {
            const c = Ie(a) ? a.message : "Failed to resend code";
            const l = Ie(a) ? a.code : null;
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
            const a = Ie(s) ? s.message : "Failed to create profile";
            const c = Ie(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        logout: async () => {
          try {
            await Nt.logout();
          } catch {
          } finally {
            n(null);
            e({ ...yr, status: "unauthenticated" });
            Wt(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await Nt.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...yr, status: "unauthenticated" });
            Wt(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const o = await Nt.refreshSession();
            n(o.accessToken);
            return o.accessToken;
          } catch (o) {
            return Ie(o) && o.status >= 500
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
              if (Ie(a) &&
              (a.code === U.ENTITY_NOT_FOUND || a.status === 404)) {
                e({ status: "needs_profile" });
              } else {
                throw a;
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
      storage: Ls(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const fu = () => we(e => e.status);

const Vs = () => we(e => e.profile);

const to = () => we(e => e.status === "authenticated");

const Ov = "urS1";
const Pv = "Lv3i";
const Lv = "h2jF";
const xv = "kiSv";
const $v = "apnL";
const Mv = "ksIZ";

const dn = {
  screen: Ov,
  fullscreen: Pv,
  image: Lv,
  title: xv,
  description: $v,
  action: Mv,
};

const Dv = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const hu = ({ kind: e, title: t, description: n, action: r, fullscreen: o = false }) => i("div", {
  className: `${dn.screen} ${o ? dn.fullscreen : ""}`,
  children: [
    i("img", {
      className: dn.image,
      src: Dv[e],
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

function Uv({ children: e, currentPath: t }) {
  const n = fu();

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
    const s = Ta.some(a => t.startsWith(a));

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

  const o = Ta.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !o)
    ? null
    : n === "service_error"
    ? i(Fv, {})
    : n === "account_deleted"
    ? i(Bv, {})
    : (n === "unauthenticated" && !o) ||
      (n === "needs_profile" && t !== ae.ONBOARDING)
    ? null
    : i(Ne, { children: e });
}
function Fv() {
  const e = we(o => o.initialize);

  const [t, n] = L(false);
  return i(hu, {
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
function Bv() {
  const e = we(l => l.canRestore);

  const t = we(l => l.restoreDeadline);

  const n = we(l => l.restoreAccount);

  const r = we(l => l.logout);

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
                  children: i(ze, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
const Hv = "uj5w";
const Vv = "pLCF";
const Wv = "J0Lh";
const jv = "Rshq";
const vr = { content: Hv, icon: Vv, text: Wv, button: jv };
const Oa = "phone-verification-required";
function zv() {
  const [e, t] = L(false);

  const n = we(o => o.profile?.id ?? "");

  F(() => {
    const o = () => t(true);
    window.addEventListener(Oa, o);

    return () => window.removeEventListener(Oa, o);
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
        i("div", { className: vr.icon, children: i(k_, { size: 48 }) }),
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
function xn(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const at = new Hs(50, 300 * 1000/* 1e3 */);
const qv = 60 * 1000/* 1e3 */;
setInterval(() => at.cleanup(), 120 * 1000/* 1e3 */);
function Gv(e) {
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
    author: Gv(e.author),
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
      const o = `${$.posts.list}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: xn(s.data) };
    },
    async getPost(e) {
      const t = await M.get($.posts.single(e));
      return Ot(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const r = at.get(n);
        const o = r && r.pinnedPostId === (t.pinnedPostId ?? null);

        if (r && o && at.isFresh(n, qv)) {
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
      const o = `${$.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: xn(s.data) };
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
      await M.post($.posts.like(e));
    },
    async unlikePost(e) {
      await M.delete($.posts.like(e));
    },
    async createPost(e) {
      return await M.post($.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
      });
    },
    async createRepost(e, t) {
      const n = await M.post($.posts.repost(e), { content: t });
      return Ot(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await M.post(`${$.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await M.put($.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await M.delete($.posts.delete(e));
    },
    async restorePost(e) {
      await M.post($.posts.restore(e));
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
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: xn(s.data) };
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
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: xn(s.data) };
    },
    async pinPost(e) {
      await M.post($.posts.pin(e));
    },
    async unpinPost(e) {
      await M.delete($.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await M.post($.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await M.delete($.posts.repost(e));
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
      const s = await M.get(o);
      return { data: s.data.posts.map(Ot), nextCursor: xn(s.data) };
    },
  };

const Yv = { new: "newest", old: "oldest", popular: "popular" };
function Xv(e) {
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
function as(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const o = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: Xv(e.author),
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
        ? (e.previewReplies ?? e.replies).map(as)
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
        n.set("sort", Yv[t.sort]);
      }

      if (t.cursor) {
        n.set("cursor", t.cursor);
      }

      const r = n.toString();
      const o = `${$.posts.comments(e)}${r ? `?${r}` : ""}`;
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
      return { data: a.map(as), nextCursor: c };
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
      return { data: a.map(as), nextCursor: c };
    },
    async createComment(e, t, n, r, o) {
      return await M.post($.posts.comments(e), {
        content: t,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async createReply(e, t, n, r, o) {
      return await M.post($.comments.replies(e), {
        content: t,
        replyToUserId: r,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async editComment(e, t, n) {
      await M.patch($.comments.edit(e), { content: t });
    },
    async deleteComment(e) {
      await M.delete($.comments.delete(e));
    },
    async likeComment(e) {
      await M.post($.comments.like(e));
    },
    async unlikeComment(e) {
      await M.delete($.comments.like(e));
    },
  };

const te = rt((e, t) => ({
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
          error: Ie(a) ? xs(a.code, a.message) : "Не удалось загрузить ленту",
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

  applyStatsUpdates: (n) => {
    if (n.length === 0) {
      return;
    }

    const r = new Map(n.map(s => [s.id, s]));

    const o = (s) => {
      const a = r.get(s.id);
      const c = s.originalPost ? o(s.originalPost) : s.originalPost;
      return !a && c === s.originalPost
        ? s
        : {
            ...s,
            ...(a && {
              reactions: { ...s.reactions, total: a.likesCount },
              stats: {
                ...s.stats,
                views: a.viewsCount,
                comments: a.commentsCount,
                reposts: a.repostsCount,
              },
              dominantEmoji: a.dominantEmoji,
            }),
            originalPost: c,
          };
    };

    e((s) => {
      const a = { ...s.postStatsCache };
      for (const c of n) {
        const l = a[c.id];

        if (l) {
          (a[c.id] = {
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
        postStatsCache: a,
        _lastStatsBatch: n,
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
        () => Qv
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
      postStatsCache: {},
      currentPost: null,
      currentPostLoading: false,
      currentPostError: false,
    });
  }
}));

const yo = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: te },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Ar = rt()(
  jl(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: Ls(() => localStorage) }
  )
);

const Ge = new Map();
const Kv = 60 * 1000/* 1e3 */;
const Zv = 300 * 1000/* 1e3 */;
const Pa = 20;
const La = 500;
function Jv() {
  const e = Date.now();
  for (const [t, n] of Ge.entries()) {
    if (e - n.timestamp > Zv) {
      Ge.delete(t);
    }
  }
  if (Ge.size > Pa) {
    const t = Array.from(Ge.entries()).sort(
      (r, o) => r[1].timestamp - o[1].timestamp
    );
    t.slice(0, t.length - Pa).forEach(([r]) => Ge.delete(r));
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
        const { usePostsStore: u } = await Promise.resolve().then(() => yo);
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
    Jv();
    const s = Ar.getState().commentsSort;
    const a = n;
    const c = Ge.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < Kv) {
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
    const a = Ar.getState().commentsSort;
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
          comments: u.length > La ? u.slice(-La) : u,
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
        const _ = w.findIndex(y => y.previewReplies?.some(v => v.id === n)
        );
        if (_ !== -1) {
          const y = w[_].previewReplies.findIndex(v => v.id === n);
          if (y !== -1) {
            const v = [...w[_].previewReplies];
            (v[y] = { ...v[y], reactions: { total: f, myReaction: u } });
            (w[_] = { ...w[_], previewReplies: v });
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

      const f = we.getState().profile;
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
          const { usePostsStore: g } = await Promise.resolve().then(() => yo);
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

      const h = Ar.getState().commentsSort;
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
        const { usePostsStore: u } = await Promise.resolve().then(() => yo);
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

const Qv = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Pt },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Fr = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const e0 = 0;
const t0 = 1;
const n0 = 2;
const r0 = 3;
const xa = 4;
const o0 = 5;
const s0 = 250;
const i0 = 0.5;
const a0 = 30000/* 3e4 */;
const c0 = 2000/* 2e3 */;
const l0 = 20;
const $a = "dwell_sid";

const u0 = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function d0() {
  try {
    let e = sessionStorage.getItem($a);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem($a, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function f0(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= i0 ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class h0 {
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
    (this.sessionId = d0());

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
        { threshold: u0 }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const r of n) {
      window.addEventListener(r, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const r = document.hidden ? n0 : null;
      this.evaluateAll(r);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(t0);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(r0);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), c0);
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
        this.evaluate(c, xa);
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
      this.evaluate(r, xa);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < a0 && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const o = !!t_lastEntry && f0(t_lastEntry);
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

      if (u < s0) {
        return;
      }

      const f = n ?? (o ? o0 : e0);
      const d = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const p = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: f, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (p) {
        (h.s = Fr[t.source]);
      }

      if (d) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, Fr[t.source]);
    }
  }
  enqueue(t, n, r) {
    this.buffer.push(t);

    if (this.buffer.length >= l0) {
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
    M.post($.posts.dwellLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    M.post(
      $.posts.dwellLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const Ma = new h0();
function p0(e, t, n, r = "", o = undefined) {
  F(() => {
    const t_current = t.current;
    if (!(!t_current || !o)) {
      Ma.observe(t_current, e, n, r, o);

      return () => {
        Ma.unobserve(t_current);
      };
    }
  }, [e, t, n, r, o]);
}
function Ws(e) {
  const t = te(n => n.postStatsCache[e.id]);
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
const pu = "shop-cart";
function Da() {
  try {
    const e = localStorage.getItem(pu);
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
function mu() {
  const [e, t] = L(Da);

  F(() => {
    const n = (r) => {
      if (r.key === null || r.key === pu) {
        t(Da());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}

const m0 = ne(() => Z(() => import("./index-DeNr0ifZ.js"), __vite__mapDeps([8, 9])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const g0 = ne(() => Z(
  () => import("./index-BKHOFK-U.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const gu = ({
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

const wr = e => i(gu, { ...e });

const _0 = () => {
  const [e] = ar();

  const t = te(E => E.fetchFeed);

  const n = te(E => E.isRefreshing);

  const r = we(E => E.logout);

  const o = to();
  const s = Vs();
  const a = lu();
  const c = mu();
  const { initialize: l, disconnectSSE: u } = nn();
  const [f, d] = L(false);
  const [p, h] = L(false);
  const m = Yl();

  const g = $s(E => E.fetchPortal);

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

  const v = Ee(() => {
    const E = e.url || "/";
    return Bs.some(T => E.startsWith(T));
  }, [e.url]);

  const R = Ee(() => {
    const E = e.url || "/";
    return s?.username
      ? E === `/@${s.username}` || E.startsWith(`/@${s.username}/`)
      : false;
  }, [e.url, s?.username]);

  return v
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
                  i(S_, {}),
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
                  i(wr, {
                    href: "/",
                    icon: n ? i(Ds, {}) : i(eu, {}),
                    onActiveClick: _,
                    children: "Лента",
                  }),
                  i(wr, {
                    href: "/search",
                    icon: i(su, {}),
                    children: "Поиск",
                  }),
                  i(wr, {
                    href: "/shop",
                    icon: i(iu, {}),
                    badge: c,
                    children: "Магаз",
                  }),
                  i(P_, {
                    path: "/event",
                    children: ({ matches: E }) => i("a", {
                      href: m.active && m.url ? m.url : "/event",
                      target: m.active && m.url ? "_blank" : undefined,
                      rel:
                        m.active && m.url ? "noopener noreferrer" : undefined,
                      className: `${Oe.portalButton} ${
                        m.active ? Oe.portalActive : ""
                      } ${E ? Oe.active : ""}`,
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
                  i(wr, {
                    href: "/notifications",
                    icon: i(ou, {}),
                    badge: a,
                    children: "Уведомления",
                  }),
                  i(gu, {
                    href: w,
                    icon: i(rs, {}),
                    isActive: R,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: Oe.asideBottom,
            children: o
              ? i(Ne, {
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
                        i(C_, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: Oe.logoutButton,
                  href: ae.LOGIN,
                  children: [
                    i(rs, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          f &&
            i(Ce, {
              fallback: null,
              children: i(m0, { isOpen: f, onClose: () => d(false) }),
            }),
          p &&
            i(Ce, {
              fallback: null,
              children: i(g0, { isOpen: p, onClose: () => h(false) }),
            }),
        ],
      });
};

const y0 = "fNno";
const v0 = "R5f1";
const w0 = "thFG";
const E0 = "jycp";
const $n = { sidebar: y0, sidebarContent: v0, sidebarBottom: w0, legalLinks: E0 };

const S0 = () => {
  const [e] = ar();
  return Ee(() => {
    const n = e.url || "/";
    return Bs.some(r => n.startsWith(r));
  }, [e.url])
    ? null
    : i("aside", {
        className: $n.sidebar,
        children: [
          i("div", { className: $n.sidebarContent }),
          i("div", {
            className: $n.sidebarBottom,
            children: [
              i("ul", {
                className: $n.legalLinks,
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
                className: $n.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const b0 = "mbIk";
const C0 = "YY8u";
const T0 = "wJKx";
const I0 = "omrU";
const N0 = "TFdK";
const R0 = "WKUL";
const k0 = "Ah5t";
const A0 = "U3Rv";
const O0 = "ymWO";
const P0 = "sEjs";
const L0 = "KMvU";
const x0 = "j9gf";

const Me = {
  mobileNavigationWrapper: b0,
  navigation: C0,
  indicator: T0,
  indicatorHidden: I0,
  navItem: N0,
  label: R0,
  active: k0,
  createButton: A0,
  iconWrapper: O0,
  portalImage: P0,
  portalImageActive: L0,
  badge: x0,
};

const Ua = e => Symbol.iterator in e;

const Fa = e => "entries" in e;

const Ba = (e, t) => {
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

const $0 = (e, t) => {
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

function M0(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : Ua(e) && Ua(t)
    ? Fa(e) && Fa(t)
      ? Ba(e, t)
      : $0(e, t)
    : Ba(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Ha(e) {
  const t = Bn.useRef(undefined);
  return (n) => {
    const r = e(n);
    return M0(t.current, r) ? t.current : (t.current = r);
  };
}
const D0 = "uP05";
const U0 = "Wo5t";
const F0 = "hLBv";
const B0 = "ssoa";
const H0 = "CNFs";
const V0 = "EQfx";
const W0 = "dSID";
const j0 = "DyMJ";
const z0 = "a11k";
const q0 = "hPdV";
const G0 = "vx8h";
const Y0 = "tGDa";
const X0 = "dTgs";
const K0 = "dwi7";
const Z0 = "g6OF";
const J0 = "nHH7";
const Q0 = "rPyJ";
const ew = "It2b";
const tw = "Qz29";
const nw = "sBWr";
const rw = "Ydom";
const ow = "nPvy";
const sw = "xePi";

const Y = {
  skeleton: D0,
  comment: U0,
  content: F0,
  header: B0,
  headerLeft: H0,
  body: V0,
  actions: W0,
  likeBtn: j0,
  shimmer: z0,
  avatar: q0,
  more: G0,
  likeIcon: Y0,
  name: X0,
  time: K0,
  line: Z0,
  w100: J0,
  w85: Q0,
  w65: ew,
  w50: tw,
  w40: nw,
  replyLabel: rw,
  likeCount: ow,
  list: sw,
};

function iw(e) {
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
function js({ variant: e = "medium", delayMs: t = 0 }) {
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
            iw(e),
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
const Va = ["medium", "short", "long", "medium", "short"];
function aw({ count: e = 4 }) {
  return i("div", {
    className: Y.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(js, { variant: Va[n % Va.length], delayMs: n * 120 }, n)
    ),
  });
}

const wt = {
    MAX_CHARS: 1000/* 1e3 */,
    MIN_POLL_OPTIONS: 2,
    MAX_POLL_OPTIONS: 10,
    MAX_POLL_QUESTION_LENGTH: 200,
    MAX_POLL_OPTION_LENGTH: 100,
    MAX_TEXTAREA_HEIGHT: 400,
  };

const vo = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function cw() {
  const [e, t] = L(false);
  const [n, r] = L(vo);

  const o = N((m) => {
    if (m.length <= wt.MAX_POLL_QUESTION_LENGTH) {
      r(g => ({
        ...g,
        question: m
      }));
    }
  }, []);

  const s = N((m, g) => {
    if (g.length <= wt.MAX_POLL_OPTION_LENGTH) {
      r(w => ({
        ...w,
        options: w.options.map(_ => _.id === m ? { ..._, text: g } : _)
      }));
    }
  }, []);

  const a = N(() => {
    if (n.options.length < wt.MAX_POLL_OPTIONS) {
      r(m => ({
        ...m,
        options: [...m.options, { id: Date.now().toString(), text: "" }]
      }));
    }
  }, [n.options.length]);

  const c = N(
    (m) => {
      if (n.options.length > wt.MIN_POLL_OPTIONS) {
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
    r(vo);
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

    return m && g.length >= wt.MIN_POLL_OPTIONS;
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
    r(vo);
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
function _u(e = 10, t = false) {
  const [n, r] = L([]);
  const [o, s] = L([]);
  const a = A(null);
  const c = A(n);
  const l = A(o);
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
    a.current?.click();
  }, []);

  const h = N(
    async (v) => {
      const R = hn.isValidVideoType(v);
      const E = hn.isValidImageType(v);
      if (R && !t) {
        yt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!E && !R) {
        yt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const C =
        c_current.some(P => P.type === "video") ||
        l_current.some(P => P.type === "video");

      const b =
        c_current.some(P => P.type === "image") ||
        l_current.some(P => P.type === "image");

      if (R && b) {
        yt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (E && C) {
        yt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (R && C) {
        yt.error("Можно загрузить только 1 видео");
        return;
      }
      const S = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const O = URL.createObjectURL(v);
      const I = R ? "video" : "image";
      s(P => [
        ...P,
        { id: S, file: v, previewUrl: O, progress: 0, type: I },
      ]);
      try {
        const P = await hn.uploadMedia(v);

        s(H => H.filter(ie => ie.id !== S));

        r(H => [
          ...H,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: P.id,
            url: P.url,
            previewUrl: O,
            type: I,
          },
        ]);
      } catch (P) {
        let H = "Ошибка загрузки";

        if (Ie(P)) {
          (H = xs(P.code, P.message));
        } else if (P instanceof Error) {
          (H = P.message);
        }

        yt.error(H);

        s(ie => ie.filter(de => de.id !== S));

        URL.revokeObjectURL(O);
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
      const T = n.length + o.length;
      const k = e - T;
      if (k <= 0) {
        return;
      }
      Array.from(v_target_files).slice(0, k).forEach(h);
      (v_target.value = "");
    },
    [n.length, o.length, e, h]
  );

  const g = N((v) => {
    r((R) => {
      const E = R.find(T => T.id === v);

      if (E) {
        URL.revokeObjectURL(E.previewUrl);
      }

      return R.filter(T => T.id !== v);
    });

    s((R) => {
      const E = R.find(T => T.id === v);

      if (E) {
        URL.revokeObjectURL(E.previewUrl);
      }

      return R.filter(T => T.id !== v);
    });
  }, []);

  const w = N(
    (v) => {
      const R = v.filter(k => t ? hn.isValidMediaType(k) : hn.isValidImageType(k)
      );
      if (R.length === 0) {
        return;
      }
      const E = c.current.length + l.current.length;
      const T = e - E;

      if (T > 0) {
        R.slice(0, T).forEach(h);
      }
    },
    [e, h, t]
  );

  const _ = N(
    async (v) => {
      const [R, E] = v.split(",");
      const T = R.match(/:(.*?);/)?.[1] || "image/png";
      const k = atob(E);
      const C = new Uint8Array(k.length);
      for (let O = 0; O < k.length; O++) {
        C[O] = k.charCodeAt(O);
      }
      const b = new Blob([C], { type: T });
      const S = new File([b], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(S);
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
    removeImage: g,
    addImage: _,
    uploadFiles: w,
    clearAll: y,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const lw = "F43Y";
const uw = "WrZP";
const dw = "z3mc";
const fw = "fCLr";
const hw = "awmR";
const pw = "B429";
const mw = "qANI";
const gw = "yUMz";
const _w = "hC2k";
const yw = "yKLB";
const vw = "XQ7X";
const ww = "cqWe";
const Ew = "mGaF";
const Sw = "zWTA";
const bw = "Mx4i";
const Cw = "a2Uq";
const Tw = "xXvi";
const Iw = "iSFn";
const Nw = "RTvZ";
const Rw = "OBo1";
const kw = "p936";
const Aw = "rpPs";
const Ow = "ML4N";
const Pw = "clJG";
const Lw = "Pk62";
const xw = "HSQN";
const $w = "LRQt";
const Mw = "tuyM";
const Dw = "XYPz";
const Uw = "neNC";
const Fw = "ZDDc";
const Bw = "l3QA";
const Hw = "kA84";
const Vw = "WCUm";
const Ww = "Ietb";

const J = {
  form: lw,
  dragActive: uw,
  whatsNew: dw,
  editor: fw,
  dragOverlay: hw,
  attachments: pw,
  attachmentPreview: mw,
  uploading: gw,
  uploadError: _w,
  videoPreviewWrapper: yw,
  videoPlayIcon: vw,
  uploadOverlay: ww,
  spinner: Ew,
  errorOverlay: Sw,
  errorText: bw,
  removeAttachment: Cw,
  actions: Tw,
  mediaButtons: Iw,
  mediaButton: Nw,
  submitGroup: Rw,
  charCount: kw,
  error: Aw,
  pollContainer: Ow,
  pollHeader: Pw,
  pollTitle: Lw,
  pollClose: xw,
  pollQuestion: $w,
  pollOptions: Mw,
  pollOptionRow: Dw,
  pollOption: Uw,
  removeOption: Fw,
  addOption: Bw,
  pollFooter: Hw,
  pollToggle: Vw,
  active: Ww,
};

function Wa({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: J.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: J.videoPlayIcon,
            children: i(y_, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function yu({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: J.attachments,
        children: [
          e.map(o => i(
            "div",
            {
              className: J.attachmentPreview,
              children: [
                i(Wa, { src: o.previewUrl, type: o.type }),
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
                i(Wa, { src: o.previewUrl, type: o.type }),
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
function jw({
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
              e.options.length > wt.MIN_POLL_OPTIONS &&
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
      e.options.length < wt.MAX_POLL_OPTIONS &&
        i("button", {
          className: J.addOption,
          onClick: r,
          children: [i(Us, {}), i("span", { children: "Добавить вариант" })],
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
const zw = "y2pF";
const qw = "eMRc";
const Gw = "W4cW";
const Yw = "sBhc";
const Xw = "vv5U";
const Kw = "T2zX";
const Zw = "aBaV";
const Jw = "qEGq";
const Qw = "L6zi";
const eE = "brED";
const tE = "JG7X";
const nE = "QDNh";
const rE = "L2bJ";
const oE = "IFuA";
const sE = "N4I4";
const iE = "Boop";

const xe = {
  editor: zw,
  empty: qw,
  bold: Gw,
  italic: Yw,
  underline: Xw,
  strike: Kw,
  spoiler: Zw,
  monospace: Jw,
  quote: Qw,
  link: eE,
  menu: tE,
  buttons: nE,
  button: rE,
  linkForm: oE,
  linkInput: sE,
  linkSubmit: iE,
};

const Br = {
  bold: xe.bold,
  italic: xe.italic,
  underline: xe.underline,
  strike: xe.strike,
  spoiler: xe.spoiler,
  monospace: xe.monospace,
  quote: xe.quote,
  link: xe.link,
};

function wo(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function aE(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function cE(e) {
  return e !== "mention" && e !== "hashtag";
}
function ja(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!cE(r.type)) {
      continue;
    }
    const o = Br[r.type];
    const s = r.type === "link" ? ` data-url="${aE(r.url)}"` : "";
    n = `<span class="${o}"${s}>${n}</span>`;
  }
  return n;
}
function lE(e, t, n) {
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
function uE(e, t) {
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
function dE(e) {
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
      for (const [u, f] of Object.entries(Br)) {
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
function fE(e, t) {
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
function hE(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const pE = [
    { type: "bold", icon: u_, title: "Жирный" },
    { type: "italic", icon: f_, title: "Курсив" },
    { type: "underline", icon: g_, title: "Подчёркнутый" },
    { type: "strike", icon: m_, title: "Зачёркнутый" },
    { type: "spoiler", icon: p_, title: "Спойлер" },
    { type: "monospace", icon: d_, title: "Моноширинный" },
    { type: "quote", icon: h_, title: "Цитата" },
    { type: "link", icon: Kl, title: "Ссылка" },
  ];

const no = Ol((
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
  const m = A(null);
  const [g, w] = L(false);
  const [_, y] = L({ x: 0, y: 0 });
  const [v, R] = L(false);
  const [E, T] = L("");
  const k = A(null);
  const C = A(null);
  const b = A(null);
  const S = A(false);
  const O = A(false);
  const I = A(t);
  const P = A(n);
  const H = A(r);

  F(() => {
    (I.current = t);
    (P.current = n);
    (H.current = r);
  }, [t, n, r]);

  Rs(
    h,
    () => ({
      insertText: (x) => {
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        m_current.focus();
        const j = window.getSelection();
        if (!j) {
          return;
        }
        let Q = 0;
        if (j.rangeCount > 0) {
          const oe = j.getRangeAt(0);
          Q = lE(m_current, oe.startContainer, oe.startOffset);
        }
        const I_current = I.current;
        const P_current = P.current;
        const fe = I_current.slice(0, Q) + x + I_current.slice(Q);

        const ke = P_current.map(oe => oe.offset >= Q
          ? { ...oe, offset: oe.offset + x.length }
          : oe.offset + oe.length > Q
          ? { ...oe, length: oe.length + x.length }
          : oe
        );

        (O.current = true);
        (I.current = fe);
        (P.current = ke);
        const Te = document.createTextNode(x);
        if (j.rangeCount > 0) {
          const oe = j.getRangeAt(0);
          oe.deleteContents();
          oe.insertNode(Te);
          oe.setStartAfter(Te);
          oe.setEndAfter(Te);
          j.removeAllRanges();
          j.addRange(oe);
        }
        H.current(fe, ke);
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
      return wo(t);
    }

    const x = [...n].sort((G, fe) => G.offset - fe.offset);

    const D = [];
    for (const G of x) {
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
    let Q = 0;
    const z = [];
    for (const G of D) {
      if (G.pos > Q) {
        const fe = t.substring(Q, G.pos);
        (j += ja(wo(fe), z));
        (Q = G.pos);
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
    if (Q < t.length) {
      const G = t.substring(Q);
      j += ja(wo(G), z);
    }
    return j || "<br>";
  }, [t, n]);

  F(() => {
    if (O.current) {
      O.current = false;
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
    if (v && C.current) {
      C.current.focus();
    }
  }, [v]);

  const de = N(
      (x) => {
        if (S.current) {
          return;
        }
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        if (x?.data === " ") {
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
          (O.current = true);
          r(z, uE(n, z));
          return;
        }
        const Q = dE(m_current);
        (O.current = true);
        r(j, Q);
      },
      [s, r, n]
    );

  const pe = N(
    (x) => {
      if (d) {
        return;
      }
      const D = window.getSelection();
      if (!D || D.isCollapsed) {
        return;
      }
      x.preventDefault();
      (b.current = D.getRangeAt(0).cloneRange());

      const j = Math.max(
          10,
          Math.min(x.clientX - 150, window.innerWidth - 310)
        );

      const Q = Math.max(10, x.clientY - 50);
      y({ x: j, y: Q });
      w(true);
    },
    [d]
  );

  const se = N(
    (x) => {
      x.preventDefault();

      if (p && x.clipboardData?.files?.length) {
        const G = Array.from(x.clipboardData.files).filter(fe => fe.type.startsWith("image/")
        );
        if (G.length > 0) {
          p(G);
          return;
        }
      }

      const D = x.clipboardData?.getData("text/plain") || "";
      if (!D) {
        return;
      }
      const j = window.getSelection();
      if (!j || !j.rangeCount) {
        return;
      }
      const Q = j.getRangeAt(0);
      Q.deleteContents();
      const z = document.createTextNode(D);
      Q.insertNode(z);
      Q.setStartAfter(z);
      Q.setEndAfter(z);
      j.removeAllRanges();
      j.addRange(Q);
      de();
    },
    [de, p]
  );

  const q = N(() => {
    const m_current = m.current;
    if (m_current && !I.current) {
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

  const ee = N(
    (x) => {
      if (x.key === "Enter" && !x.shiftKey && f) {
        x.preventDefault();
        f();
        return;
      }
      if (!d && (x.ctrlKey || x.metaKey)) {
        let D = null;
        switch (x.key.toLowerCase()) {
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
          x.preventDefault();
          re(D);
        }
      }
    },
    [f, d]
  );

  const re = N(
    (x, D) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const Q = window.getSelection();
      if (!Q ||
      (b.current && (Q.removeAllRanges(), Q.addRange(b.current)),
      Q.isCollapsed)) {
        return;
      }
      const z = Q.getRangeAt(0);
      const G = document.createElement("span");
      (G.className = Br[x]);

      if (x === "link" && D) {
        (G.dataset.url = D);
      }

      const fe = fE(z.commonAncestorContainer, Br[x]);
      if (fe) {
        hE(fe);
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
      R(false);
      T("");
      (b.current = null);
      m_current.focus();
    },
    [de]
  );

  const V = N(
    (x) => {
      if (x === "link") {
        R(true);
      } else {
        re(x);
      }
    },
    [re]
  );

  const _e = N(
    (x) => {
      x.preventDefault();

      if (E.trim()) {
        re("link", E.trim());
      }
    },
    [re, E]
  );

  F(() => {
    if (!g) {
      return;
    }

    const x = (j) => {
      if (k.current &&
        !k.current.contains(j.target)) {
        w(false);
        R(false);
        T("");
        (b.current = null);
      }
    };

    const D = () => {
      w(false);
      R(false);
      T("");
      (b.current = null);
    };

    document.addEventListener("mousedown", x);
    window.addEventListener("scroll", D, true);

    return () => {
      document.removeEventListener("mousedown", x);
      window.removeEventListener("scroll", D, true);
    };
  }, [g]);
  const ge = !t;
  return i(Ne, {
    children: [
      i("div", {
        ref: m,
        className: `${xe.editor} ${c} ${ge ? xe.empty : ""}`,
        contentEditable: true,
        "data-placeholder": o,
        onInput: x => de(x),
        onFocus: q,
        onPaste: se,
        onContextMenu: pe,
        onKeyDown: ee,
        onCompositionStart: () => {
          S.current = true;
        },
        onCompositionEnd: () => {
          (S.current = false);
          de();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      g &&
        Ut(
          i("div", {
            ref: k,
            className: xe.menu,
            style: { left: _.x, top: _.y },
            children: v
              ? i("form", {
                  className: xe.linkForm,
                  onSubmit: _e,
                  children: [
                    i("input", {
                      ref: C,
                      type: "url",
                      className: xe.linkInput,
                      placeholder: "https://...",
                      value: E,
                      onInput: x => T(x.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: xe.linkSubmit,
                      disabled: !E.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: xe.buttons,
                  children: pE.map(({ type: x, icon: D, title: j }) => i(
                    "button",
                    {
                      type: "button",
                      className: xe.button,
                      onClick: () => V(x),
                      title: j,
                      children: i(D, { size: 16 }),
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
});

const mE = "sUfP";
const gE = "sqZ6";
const _E = "gx2C";
const yE = "NfJB";
const vE = "NuGt";
const wE = "GBiB";
const EE = "uXC9";
const SE = "pUVV";
const bE = "F1oq";
const CE = "DEaC";
const TE = "LahS";
const IE = "rY8E";
const NE = "BZnt";
const RE = "rvnG";
const kE = "JCYO";
const AE = "AEG6";
const OE = "KhE8";
const PE = "BZb7";
const LE = "qUF8";
const xE = "l7kL";
const $E = "ifIb";

const ye = {
  commentInput: mE,
  replyMode: gE,
  inputRow: _E,
  attachmentStrip: yE,
  circleButton: vE,
  micButton: wE,
  sendButton: EE,
  submitting: SE,
  textareaContainer: bE,
  expanded: CE,
  voiceMode: TE,
  inputWrapper: IE,
  commentCharCount: NE,
  error: RE,
  input: kE,
  replyHeader: AE,
  replyText: OE,
  replyName: PE,
  replyClose: LE,
  dragActive: xE,
  dragOverlay: $E,
};

const ME = "Z4St";
const DE = "QKvr";
const UE = "SMGI";
const Eo = { textInput: ME, entering: DE, sendButton: UE };
const FE = 1000/* 1e3 */;
function BE({
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
  const f = FE - e.length;
  const d = f < 0;
  const p = [Eo.textInput, s ? Eo.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: p,
    children: [
      i("div", {
        className: ye.inputWrapper,
        children: [
          i(no, {
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
        className: `${ye.circleButton} ${ye.sendButton} ${Eo.sendButton} ${
          c ? ye.submitting : ""
        }`,
        onClick: o,
        disabled: c || l || d,
        children: c ? i(uu, { size: "xs" }) : i(v_, { size: 20 }),
      }),
    ],
  });
}
const HE = ne(() => Z(
  () => import("./VoiceInput-CHkDQJ-6.js"),
  __vite__mapDeps([10, 11, 12])
).then(e => ({
  default: e.VoiceInput
}))
);
function vu({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: o,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = eo();
  const [f, d] = L("text");
  const [p, h] = L(false);
  const [m, g] = L(false);
  const [w, _] = L(false);
  const [y, v] = L(false);
  const R = A(false);
  const E = A(null);
  const T = A(0);

  const {
    images: k,
    uploadingImages: C,
    isUploading: b,
    openFilePicker: S,
    removeImage: O,
    uploadFiles: I,
    clearAll: P,
    fileInputRef: H,
    handleFileChange: ie,
  } = _u(4);

  F(
    () => () => {
      if (E.current) {
        clearTimeout(E.current);
      }
    },
    []
  );
  const de = k.length > 0 || C.length > 0;
  const pe = a.length > 0 || w || de;
  const se = f === "voice";
  const q = 1000/* 1e3 */;

  const ee = async () => {
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
    (R.current = true);
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

    if (E.current) {
      clearTimeout(E.current);
    }

    (E.current = window.setTimeout(() => {
      (E.current = null);
      g(false);
    }, 300));
  };

  const ge = N((z) => {
    z.preventDefault();
    z.stopPropagation();
    T.current++;

    if (z.dataTransfer?.types.includes("Files")) {
      v(true);
    }
  }, []);

  const x = N((z) => {
    z.preventDefault();
    z.stopPropagation();
  }, []);

  const D = N((z) => {
    z.preventDefault();
    z.stopPropagation();
    T.current--;

    if (T.current === 0) {
      v(false);
    }
  }, []);

  const j = N(
    (z) => {
      z.preventDefault();
      z.stopPropagation();
      (T.current = 0);
      v(false);
      const G = z.dataTransfer?.files;

      if (G && G.length > 0) {
        I(Array.from(G));
      }
    },
    [I]
  );

  const Q = [
    ye.commentInput,
    pe ? ye.expanded : "",
    se ? ye.voiceMode : "",
    r ? ye.replyMode : "",
    y ? ye.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return i("div", {
    className: Q,
    onDragEnter: ge,
    onDragOver: x,
    onDragLeave: D,
    onDrop: j,
    children: [
      y &&
        i("div", {
          className: ye.dragOverlay,
          children: [
            i(nu, { size: 24 }),
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
          children: i(yu, { images: k, uploadingImages: C, onRemove: O }),
        }),
      i("div", {
        className: ye.inputRow,
        children: [
          i("button", {
            className: ye.circleButton,
            onClick: se ? V : S,
            children: se ? i(ut, { size: 20 }) : i(Zl, { size: 20 }),
          }),
          i("div", {
            className: ye.textareaContainer,
            children:
              se || p
                ? i(Ce, {
                    fallback: null,
                    children: i(HE, {
                      onCancel: V,
                      onSend: t,
                      isExiting: p,
                      onExitComplete: _e,
                    }),
                  })
                : i(BE, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: ee,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: w,
                    sendDisabled: b,
                    onImagePaste: I,
                  }),
          }),
          !se &&
            !p &&
            i("button", {
              className: `${ye.circleButton} ${ye.micButton}`,
              onClick: re,
              children: i(__, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: H,
        type: "file",
        accept: os,
        multiple: true,
        onChange: ie,
        style: { display: "none" },
      }),
    ],
  });
}
const VE = "y18O";
const WE = "kR6Y";
const jE = "neEl";
const zE = "ckvZ";
const qE = "bp5c";
const GE = "sbQj";
const YE = "L0xg";

const jt = {
  counter: VE,
  digit: WE,
  prev: jE,
  current: zE,
  animating: qE,
  up: GE,
  down: YE,
};

function XE(e) {
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
function Hn({ value: e }) {
  const t = XE(e);
  const n = A(e);
  const r = A(t.length);
  const o = A(Date.now());

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

    const m = s.map(R => R.char);

    const g = Math.max(h.length, m.length);
    const w = m.join("").padStart(g, " ").split("");

    const y = h
      .join("")
      .padStart(g, " ")
      .split("")
      .map((R, E) => {
      const T = w[E] || " ";
      const k = s[E - (g - s.length)];
      return R !== T
        ? (r.current++,
          { char: R, prevChar: T, isAnimating: true, key: r.current })
        : { char: R, prevChar: R, isAnimating: false, key: k?.key ?? E };
    })
      .filter(R => R.char !== " " || R.isAnimating);

    a(y);
    const v = setTimeout(() => {
      a(R => R.map(E => ({
        ...E,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(v);
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
const KE = "owHs";
const ZE = "CBZL";
const JE = "Zc6t";
const QE = "Dwuw";
const eS = "dOIJ";
const tS = "pkp7";
const nS = "IgaQ";
const rS = "WST6";
const oS = "qVd4";

const mt = {
  dropdownWrapper: KE,
  trigger: ZE,
  menu: JE,
  hidden: QE,
  menuItem: eS,
  danger: tS,
  itemIcon: nS,
  itemLabel: rS,
  divider: oS,
};

function wu({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: o,
}) {
  const [s, a] = L(false);
  const [c, l] = L(false);
  const [u, f] = L({ top: 0, left: 0 });
  const d = A(null);
  const p = A(null);

  const h = N(() => {
    if (!d.current) {
      return;
    }
    const _ = d.current.getBoundingClientRect();
    const y = p.current?.offsetHeight || 150;
    const v = p.current?.offsetWidth || 160;
    let R = 0;
    let E = 0;

    if (n.startsWith("bottom")) {
      (R = _.bottom + 4);
    } else {
      (R = _.top - y - 4);
    }

    if (n.endsWith("right")) {
      (E = _.right - v);
    } else {
      (E = _.left);
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

    if (R + y > innerHeight) {
      (R = _.top - y - 4);
    }

    if (R < 8) {
      (R = _.bottom + 4);
    }

    f({ top: R, left: E });
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
        Ut(
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
                    onClick: v => w(v, _),
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
const sS = "tztF";
const iS = "JcSg";
const aS = "HOPz";
const cS = "y8Hz";
const lS = "XLHy";
const uS = "XAWn";
const dS = "HUCe";
const fS = "BWrq";

const Rt = {
  underline: sS,
  monospace: iS,
  quote: aS,
  spoiler: cS,
  revealed: lS,
  link: uS,
  mention: dS,
  hashtag: fS,
};

function hS(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function pS(e) {
  if (!hS(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const o = btoa(r);
  return `/external?url=${encodeURIComponent(o)}`;
}
function Eu({ text: e, spans: t = [], className: n = "" }) {
  const [r, o] = L(new Set());

  const s = Ee(() => {
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
      const d = pS(l.url);
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
function mS(e, t, n) {
  const { isVisible: r, isRevealing: o, onRevealComplete: s } = n;
  const a = A([]);
  const c = A(null);
  const l = A(null);
  const u = A({ width: 0, height: 0 });
  const f = A(1);

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
      for (let v = 0; v < _; v++) {
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
      const v = e_current.getContext("2d");

      if (v) {
        v.setTransform(y, 0, 0, y, 0, 0);
        (l.current = v);
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

      a.current.forEach((v, R) => {
        (v.x += v.speedX);
        (v.y += v.speedY);
        v.life--;

        if (v.x < 0) {
          (v.x = _);
        }

        if (v.x > _) {
          (v.x = 0);
        }

        if (v.y < 0) {
          (v.y = y);
        }

        if (v.y > y) {
          (v.y = 0);
        }

        if (v.life <= 0) {
          a.current[R] = d(_, y);
          return;
        }

        const E = v.life / v.maxLife;
        const T = E < 0.3 ? E / 0.3 : 1;
        const k = v.opacity * T * f.current;
        l_current.beginPath();
        l_current.arc(v.x, v.y, v.size, 0, Math.PI * 2);
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
const gS = "s6H1";
const _S = "dSFH";
const yS = "Qcmg";
const vS = "jbCC";
const wS = "Frod";
const Mn = { container: gS, hidden: _S, image: yS, revealing: vS, canvas: wS };
const za = 5;
function qa({
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
  const h = A(null);
  const m = A(null);
  const g = A(null);
  const w = A(false);

  const { resetOpacity: _ } = mS(h, m, {
    isVisible: d && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  F(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const C = new IntersectionObserver(
      (b) => {
        b.forEach((S) => {
          p(S.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    C.observe(m_current);

    return () => {
      C.disconnect();
    };
  }, []);

  const y = (k) => {
    (g.current = { x: k.clientX, y: k.clientY });
    (w.current = false);
  };

  const v = (k) => {
    if (!g.current) {
      return;
    }
    const C = Math.abs(k.clientX - g.current.x);
    const b = Math.abs(k.clientY - g.current.y);

    if ((C > za || b > za)) {
      (w.current = true);
    }
  };

  const R = (k) => {
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

  const E = !c && n;
  const T = r && o ? { aspectRatio: `${r} / ${o}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${Mn.container} ${s} ${E ? Mn.hidden : ""} ${
          u ? Mn.revealing : ""
        }`,
        style: T,
        onPointerDown: y,
        onPointerMove: v,
        onClick: R,
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
          E && i("canvas", { ref: h, className: Mn.canvas }),
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
function ES(e) {
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
function So(e, t) {
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
        borderRadius: ES(r),
      };
}
const Ga = { photo_open: 1, video_progress: 2 };
const SS = 2000/* 2e3 */;
const bS = 20;
const Ya = "dwell_sid";
function CS() {
  try {
    let e = sessionStorage.getItem(Ya);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Ya, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class TS {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = CS());
      window.setInterval(() => this.flush(), SS);
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
    const s = { t: Ga.photo_open, v: t, ai: n };

    if (r !== undefined) {
      (s.mi = r);
    }

    if (o) {
      (s.s = Fr[o]);
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
      t: Ga.video_progress,
      v: t,
      ai: n,
      pm: Math.round(r),
      dm: Math.round(o),
    };

    if (s) {
      (a.s = Fr[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= bS) {
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
    M.post($.posts.interactionLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    M.post(
      $.posts.interactionLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const IS = new TS();
function NS(e, t) {
  return N(
    (n, r) => {
      if (!e || !n) {
        return;
      }
      const o = t === "post_page" || t === "link";
      IS.trackPhotoOpen(e, n, r, o ? t : undefined);
    },
    [e, t]
  );
}
const RS = "WGe6";
const kS = "hxQs";
const AS = "DIi9";
const OS = "npTn";
const PS = "TvVu";
const LS = "oMAi";
const xS = "xPuD";

const Ae = {
  mediaWrapper: RS,
  isFeed: kS,
  single: AS,
  image: OS,
  singleVideo: PS,
  media: LS,
  dragging: xS,
};

const Xa = ne(() => Z(
  () => import("./PostMediaVideo-CEy3P87p.js"),
  __vite__mapDeps([13, 14, 15])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const $S = 5;
const MS = 0.95;
const bo = 0.5;
const DS = 650;
const US = 500;
const FS = 300;
function BS(e, t, n, r) {
  const o = e / t;
  return o > n / r ? Math.min(e, n) : Math.min(t, r) * o;
}
function zs({ media: e, isFeed: t = false, postVs: n, source: r }) {
  const o = e?.filter(I => I.type === "image") ?? [];

  const s = e?.filter(I => I.type === "video") ?? [];

  const a = A(null);

  const c = zl(I => I.open);

  const u = bt() ? FS : US;
  const f = NS(n, r);
  const d = A(false);
  const p = A(0);
  const h = A(0);
  const m = A(false);
  const g = A(0);
  const w = A(0);
  const _ = A(0);
  const y = A(null);

  const v = () => {
    if (y.current) {
      cancelAnimationFrame(y.current);
      (y.current = null);
    }
  };

  const R = () => {
    const a_current = a.current;
    if (a_current) {
      (_.current *= MS);

      if (Math.abs(_.current) < bo) {
        v();
        return;
      }

      (a_current.scrollLeft += _.current);
      (y.current = requestAnimationFrame(R));
    }
  };

  const E = (I) => {
    const a_current = a.current;

    if (a_current && o.length + s.length > 1) {
      v();
      (d.current = true);
      a_current.classList.add(Ae.dragging);
      (p.current = I.clientX);
      (g.current = I.clientX);
      (w.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (_.current = 0);
      I.preventDefault();
    }
  };

  const T = (I) => {
    if (!d.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const H = Date.now();
    const ie = I.clientX - p.current;
    const de = I.clientX - g.current;
    const pe = H - w.current;

    if (Math.abs(ie) > $S) {
      (m.current = true);
    }

    if (pe > 0) {
      (_.current = (-de / pe) * 16);
    }

    (g.current = I.clientX);
    (w.current = H);
    (a_current.scrollLeft = h.current - ie);
  };

  const k = () => {
    if (d.current && Math.abs(_.current) > bo) {
      R();
    }

    (d.current = false);
    a.current?.classList.remove(Ae.dragging);
  };

  const C = () => {
    if (d.current) {
      Math.abs(_.current) > bo && R();
      (d.current = false);
      a.current?.classList.remove(Ae.dragging);
    }
  };

  F(
    () => () => {
      v();
      a.current?.classList.remove(Ae.dragging);
    },
    []
  );

  const b = (I, P) => {
    if (m.current) {
      (m.current = false);
      P.stopPropagation();
      return;
    }
    const o_I = o[I];

    if (o_I) {
      f(o_I.id, I);
    }

    const ie = P.currentTarget ?? null;
    const de = So(ie, a.current);

    const pe = (se) => {
      const a_current = a.current;
      if (!a_current) {
        return se !== I || !ie?.isConnected ? null : So(ie, null);
      }
      const ee = a_current.querySelectorAll("[data-post-media-image]")[se];
      return ee
        ? (ee.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          So(ee, a_current))
        : null;
    };

    c(
      o.map(se => ({
        id: se.id,
        url: se.url,
        width: se.width || 800,
        height: se.height || 600
      })),
      I,
      de,
      pe
    );
  };

  const S = (I) => {
    I.stopPropagation();
    (m.current = false);
  };

  if (o.length === 0 && s.length === 0) {
    return null;
  }
  const O = o.length + s.length;
  if (O === 1) {
    if (o.length === 1) {
      const [I] = o;

      const P =
        I.width && I.height
          ? {
              width: `${Math.round(BS(I.width, I.height, DS, u))}px`,
              aspectRatio: `${I.width} / ${I.height}`,
            }
          : undefined;

      return i("div", {
        className: `${Ae.mediaWrapper} ${t ? Ae.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: Ae.single,
          style: P,
          onClick: (H) => {
            H.stopPropagation();
            b(0, H);
          },
          children: i(
            qa,
            {
              src: I.url,
              spoiler: I.spoiler,
              width: I.width,
              height: I.height,
              className: Ae.image,
              onClick: (H) => {
                H.stopPropagation();
                b(0, H);
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
        className: `${Ae.mediaWrapper} ${t ? Ae.isFeed : ""}`,
        "data-count": 1,
        onClick: P => P.stopPropagation(),
        children: i("div", {
          className: Ae.singleVideo,
          children: i(Ce, {
            fallback: null,
            children: i(
              Xa,
              {
                src: I.url,
                spoiler: I.spoiler,
                width: I.width,
                height: I.height,
                duration: I.duration,
                postVs: n,
                source: r,
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
    className: `${Ae.mediaWrapper} ${t ? Ae.isFeed : ""}`,
    "data-count": O,
    children: i("div", {
      ref: a,
      className: `${Ae.media} ${t ? Ae.isFeed : ""}`,
      "data-count": O,
      onClick: S,
      onMouseDown: E,
      onMouseMove: T,
      onMouseUp: k,
      onMouseLeave: C,
      children: [
        s.map(I => i(
          Ce,
          {
            fallback: null,
            children: i(Xa, {
              src: I.url,
              spoiler: I.spoiler,
              width: I.width,
              height: I.height,
              duration: I.duration,
              className: Ae.image,
              postVs: n,
              source: r,
              attachmentId: I.id,
            }),
          },
          I.id
        )
        ),
        o.map((I, P) => i(
          qa,
          {
            src: I.url,
            spoiler: I.spoiler,
            width: I.width,
            height: I.height,
            className: Ae.image,
            onClick: H => b(P, H),
          },
          I.id
        )
        ),
      ],
    }),
  });
}
const Su = 0.5;
const HS = 250;
const VS = 1000/* 1e3 */;
const WS = 50;
const jS = [0, Su, 1];
const Zt = new Set();
const Or = new WeakMap();
const Xt = new Map();
const Kt = new Map();
const Hr = new Set();
const Er = new Set();
let Co = null;
let pn = null;
function zS(e) {
  if (Hr.size !== 0) {
    Er.add(e);

    Co === null &&
      (Co = setTimeout(() => {
      (Co = null);

      if (Er.size === 0) {
        return;
      }

      const t = Array.from(Er);
      Er.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const r of Hr) {
        r(n);
      }
    }, WS));
  }
}
function qS() {
  return (pn || (typeof IntersectionObserver === "undefined" ? null : ((pn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Or.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const r = t.intersectionRatio >= Su;
            for (const o of n) {
              if (r) {
                const s = Kt.get(o);
                if (s !== undefined) {
                  clearTimeout(s);
                  Kt.delete(o);
                  continue;
                }
                if (Zt.has(o) || Xt.has(o)) {
                  continue;
                }
                const a = setTimeout(() => {
                  Xt.delete(o);
                  Zt.add(o);
                  zS(o);
                }, HS);
                Xt.set(o, a);
              } else {
                const s = Xt.get(o);

                if (s !== undefined) {
                  clearTimeout(s);
                  Xt.delete(o);
                }

                if (!Zt.has(o) || Kt.has(o)) {
                  continue;
                }

                const a = setTimeout(() => {
                  Kt.delete(o);
                  Zt.delete(o);
                }, VS);
                Kt.set(o, a);
              }
            }
          }
        },
        { threshold: jS }
      )), pn)));
}

const Vr = {
    observe(e, t) {
      const n = qS();
      if (!n) {
        return;
      }
      const r = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (r.length !== 0) {
        Or.set(e, r);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!pn) {
        return;
      }
      const t = Or.get(e);
      pn.unobserve(e);
      Or.delete(e);

      if (!!t) {
        for (const n of t) {
          const r = Xt.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            Xt.delete(n);
          }

          const o = Kt.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            Kt.delete(n);
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
      Hr.add(e);

      return () => {
        Hr.delete(e);
      };
    },
  };

const GS = "ZXf9";
const YS = "Q3ud";
const XS = "afZ9";
const To = { hint: GS, multiline: YS, arrow: XS };
function Pr({ text: e, children: t, className: n, multiline: r }) {
  const o = A(null);
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
        Ut(
          i("div", {
            className: `${To.hint} ${r ? To.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: To.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const KS = "sqjR";
const ZS = "XfYj";
const JS = "kfUK";
const QS = "aoYP";
const e1 = "VWxZ";
const t1 = "qxx6";
const n1 = "yph2";
const r1 = "hnKw";

const kt = {
  header: KS,
  headerMain: ZS,
  moreDropdown: JS,
  pinnedBadge: QS,
  authorInfo: e1,
  authorLink: t1,
  time: n1,
  edited: r1,
};

function o1({
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
  const p = Xl(t);

  const h = we(y => y.profile?.id);

  const m = e.id === h;
  const g = 2880 * 60 * 1000/* 1e3 */;
  const w = m && Date.now() - new Date(t).getTime() < g;

  const _ = Ee(() => {
    const y = [];

    y.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(Kl, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (w) {
      y.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Ql, { size: 16 }),
        onClick: () => l?.(r),
      });
    }

    if (s) {
      y.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: i(Ca, { size: 16 }),
        onClick: () => f?.(r),
      });
    }

    if ((m || s)) {
      y.push({
        id: "delete",
        label: "Удалить",
        icon: i(au, { size: 16 }),
        danger: true,
        onClick: () => u?.(r),
      });
    }

    if (!m) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(tu, { size: 16 }),
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
            i(Ca, { size: 14 }),
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
                    i(Pr, {
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
          i(wu, {
            trigger: i(ru, { size: 18 }),
            items: _,
            position: "bottom-right",
            className: kt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const s1 = "i8Yx";
const i1 = "Hv7a";
const a1 = "R5a4";
const c1 = "q8Mn";
const l1 = "C6ew";
const u1 = "WGNj";
const d1 = "hf5F";
const f1 = "x2v2";
const h1 = "ZcjH";
const p1 = "RSa3";
const m1 = "hAT6";
const g1 = "Uu2F";
const _1 = "s0oB";
const y1 = "nB2o";
const v1 = "PVuF";
const w1 = "GJHk";
const E1 = "v6DV";
const S1 = "nMdY";

const be = {
  actions: s1,
  compact: i1,
  action: a1,
  views: c1,
  flush: l1,
  actionsLeft: u1,
  disabled: d1,
  liked: f1,
  unliked: h1,
  reposted: p1,
  noAnimation: m1,
  reactionWrapper: g1,
  actionsRight: _1,
  captured: y1,
  capturedEmoji: v1,
  capturedText: w1,
  capturedMobile: E1,
  capturedSolo: S1,
};

function bu({
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
  const g = A(false);
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
                  Ms,
                  { filled: e, size: w },
                  m ? `liked-${n}` : e ? "liked" : "not-liked"
                ),
                i(Hn, { value: n }),
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
            children: [i(Jl, { size: w }), i(Hn, { value: o })],
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
            children: [i(Fs, { size: w }), i(Hn, { value: r })],
          }),
        ],
      }),
      i("div", {
        className: be.actionsRight,
        children: [
          a &&
            (p
              ? i(Pr, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: be.capturedSolo,
                  children: i("span", {
                    className: be.capturedEmoji,
                    children: a,
                  }),
                })
              : i(Ne, {
                  children: [
                    i(Pr, {
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
                    i(Pr, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: be.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: be.views,
            children: [i(O_, { size: w }), i(Hn, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const b1 = ne(() => Z(() => import("./index-DKRt0yGY.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function Cu(e, t) {
  const { openModal: n, closeModal: r, onDelete: o } = t;
  const s = bt();

  const a = te(C => C.deletePost);

  const c = te(C => C.updatePostLike);

  const l = te(C => C.updatePollVote);

  const u = te(C => C.updatePollData);

  const f = Ws(e);
  const d = f.myReaction !== null;
  const f_likesTotal = f.likesTotal;

  const h = Ee(() => Iu(e.attachments), [e.attachments]);

  const m = N(async () => {
    const C = d;
    const b = C ? -1 : 1;
    c(e.id, C ? null : "love", b);
    try {
      if (C) {
        await Le.unlikePost(e.id);
      } else {
        await Le.likePost(e.id);
      }
    } catch (S) {
      c(e.id, C ? "love" : null, -b);
      console.error("Failed to toggle like:", S);
    }
  }, [e.id, d, c]);

  const g = N(() => {
    if (!d) {
      m();
    }
  }, [d, m]);

  const w = N(
    (C) => {
      const b = e.author.username ?? e.author.id;
      const S = `${window.location.origin}/@${b}/post/${C}`;
      navigator.clipboard.writeText(S);
      yt.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const _ = N(
    (C) => {
      n(i(b1, { targetType: "post", targetId: C, onClose: r }));
    },
    [n, r]
  );

  const y = N(
    (C) => {
      n(
        i(vC, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const v = N(
    async (C) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await a(C);
          o?.(C);
        } catch (b) {
          console.error("Failed to delete post:", b);
        }
      }
    },
    [a, o]
  );

  const R = N(() => {
    if (s) {
      n(i(oC, { postId: e.id, onClose: r }));
    } else {
      const C = e.author.username ?? e.author.id;
      je(`/@${C}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, r]);

  const E = N(() => {
    n(i(kC, { post: e, onClose: r }));
  }, [n, r, e]);

  const T = N(
    async (C) => {
      const b = h?.myVote ?? null;
      l(e.id, C, b);
      try {
        const S = await Le.votePoll(e.id, [C]);
        if (S) {
          u(e.id, S);
          return S;
        }
      } catch (S) {
        console.error("[Poll] Failed to vote:", S);

        if (b) {
          l(e.id, b, C);
        }
      }
      return null;
    },
    [e.id, h?.myVote, l, u]
  );

  const k = N(
    async (C) => {
      try {
        const b = await Le.votePoll(e.id, C);
        if (b) {
          u(e.id, b);
          return b;
        }
      } catch (b) {
        console.error("[Poll] Failed to vote multiple:", b);
      }
      return null;
    },
    [e.id, u]
  );

  return {
    liked: d,
    totalLikes: f_likesTotal,
    handleLike: m,
    handleDoubleTap: g,
    handleComment: R,
    handleRepost: E,
    handleReport: _,
    handleEdit: y,
    handleDelete: v,
    handleCopyLink: w,
    handlePollVote: T,
    handlePollVoteMultiple: k,
  };
}
function Tu(e) {
  const t = N(() => {
      te.getState().updatePostLike(e, "love", 1);
    }, [e]);

  const n = N(() => {
    const { postStatsCache: o, applyStatsUpdates: s } = te.getState();
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
    te.getState().updatePostReposted(e, true, 1);
  }, [e]);

  return { handleLike: t, handleComment: n, handleRepost: r };
}
const C1 = "fE2o";
const T1 = "vGeD";
const I1 = "P8rP";
const N1 = "kDwo";
const R1 = "rTTE";
const k1 = "w9x2";
const A1 = "ubEI";
const O1 = "QEtx";
const P1 = "Desf";
const L1 = "ZFgv";
const x1 = "IS9b";
const $1 = "urb6";
const M1 = "v0BK";
const D1 = "mAt2";
const U1 = "wD9l";

const De = {
  post: C1,
  postInner: T1,
  isFeed: I1,
  avatarLink: N1,
  postContent: R1,
  postBody: k1,
  textWrapper: A1,
  text: O1,
  collapsed: P1,
  expandButton: L1,
  originalPost: x1,
  originalPostHeader: $1,
  originalPostTime: M1,
  originalPostText: D1,
  originalPostMedia: U1,
};

function F1(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function B1({ attachments: e, postVs: t, source: n }) {
  const r = Ee(() => Wr(e), [e]);
  return r.length === 0
    ? null
    : i("div", {
        className: De.originalPostMedia,
        children: i(zs, { media: r, postVs: t, source: n }),
      });
}
function H1({ originalPost: e, source: t, showcase: n = false }) {
  const r = F1(e.createdAt);
  const { openModal: o, closeModal: s } = an();

  const {
    liked: a,
    totalLikes: c,
    handleLike: l,
    handleComment: u,
    handleRepost: f,
  } = Cu(e, { openModal: o, closeModal: s });

  const { handleLike: d, handleComment: p, handleRepost: h } = Tu(e.id);
  const m = Ws(e);

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
          i(Fs, { size: 14 }),
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
        i(B1, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(bu, {
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
const V1 = ne(() => Z(() => import("./index-FAS7kX6W.js"), __vite__mapDeps([19, 20])).then(
  e => ({
    default: e.Poll
  })
)
);
function W1(e) {
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
function Wr(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function Iu(e) {
  return e.find(t => t.type === "poll");
}
const j1 = 300;
const z1 = 500;

const q1 = Qr(
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

    const _ = te(he => he.setCurrentPost);

    const y = te(he => he.seedPostStats);

    const v = te(he => he.posts.find(He => He.id === t.id));

    const R = we(he => he.profile);

    F(() => {
      y(t);
    }, [t, y]);
    const E = Ws(t);
    const { isFollowing: T, follow: k, unfollow: C } = cy(t.author.id);
    const b = h && R?.id !== t.author.id ? T : undefined;

    const {
      liked: S,
      totalLikes: O,
      handleLike: I,
      handleDoubleTap: P,
      handleComment: H,
      handleRepost: ie,
      handleReport: de,
      handleEdit: pe,
      handleDelete: se,
      handleCopyLink: q,
      handlePollVote: ee,
      handlePollVoteMultiple: re,
    } = Cu(t, { openModal: g, closeModal: w, onDelete: p });

    const { handleLike: V, handleComment: _e, handleRepost: ge } = Tu(t.id);

    const x = N(() => {
      if (b !== undefined) {
        if (b) {
          g(
                  i(Yy, {
                    displayName: t.author.displayName,
                    onConfirm: C,
                    onClose: w,
                  })
                );
        } else {
          k();
        }
      }
    }, [b, t.author.displayName, k, C, g, w]);

    const D = A(null);
    const j = A(null);
    const Q = A(null);
    const [z, G] = L(j1);
    const [fe, ke] = L(0);
    const Te = fe > z;
    F(
      () => () => {
        if (Q.current) {
          cancelAnimationFrame(Q.current);
          (Q.current = null);
        }
      },
      []
    );

    const oe = N(
        (he) => {
          if (he &&
            h) {
            Q.current && cancelAnimationFrame(Q.current);

            (Q.current = requestAnimationFrame(() => {
              (Q.current = null);
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

      G(He => He + z1);
    }, []);

    p0(t.id, D, c, l, t.vs);
    const ht = t.originalPost?.id;
    F(() => {
      const D_current = D.current;
      if (!D_current) {
        return;
      }
      const He = ht ? [t.id, ht] : t.id;
      Vr.observe(D_current, He);

      return () => Vr.unobserve(D_current);
    }, [t.id, ht]);
    const cn = A(null);
    const kn = A(0);

    const Se = N((he) => {
      cn.current = he.target;
    }, []);

    const pt = N(() => {
      _(v ?? t);
      const He = t.author.username ?? t.author.id;
      je(`/@${He}/post/${t.id}`);
    }, [t, v, _]);

    const Lu = N(
      (he) => {
        const he_target = he.target;
        if (he_target.closest("button") ||
        he_target.closest("a") ||
        he_target.closest("video") ||
        he_target.closest("img")) {
          return;
        }
        if (m) {
          const Ks = Date.now();
          if (Ks - kn.current < 300) {
            (kn.current = 0);
            P();
            return;
          }
          kn.current = Ks;
          return;
        }
        if (cn.current !== he_target) {
          cn.current = null;
          return;
        }
        cn.current = null;
        const Xs = window.getSelection();

        if (!Xs || Xs.toString().length <= 0) {
          pt();
        }
      },
      [m, P, pt]
    );

    const xu = Ee(() => W1(t.author), [t.author]);

    const Gs = Ee(() => Wr(t.attachments), [t.attachments]);

    const Ze = Ee(() => Iu(t.attachments), [t.attachments]);

    const Ys = i("div", {
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
              onFollowBadgeClick: x,
            }),
          }),
        i("div", {
          className: De.postContent,
          children: [
            i(o1, {
              author: xu,
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
                        children: i(Eu, {
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
                Gs.length > 0 &&
                  i(zs, { media: Gs, isFeed: h, postVs: t.vs, source: c }),
                Ze &&
                  i(Ce, {
                    fallback: null,
                    children: i(V1, {
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
                      onVote: ee,
                      onVoteMultiple: re,
                      disabled: Ze.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  i(H1, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                i(bu, {
                  compact: u,
                  emojiOnly: u,
                  flush: u,
                  infiniteLike: u,
                  liked: S,
                  reposted: E.reposted,
                  likesCount: O,
                  repostsCount: E.repostsCount,
                  commentsCount: E.commentsCount,
                  viewsCount: E.viewsCount,
                  dominantEmoji: E.dominantEmoji,
                  onLike: u ? V : I,
                  onRepost: u ? ge : ie,
                  onComment: u ? _e : H,
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
          onClick: Lu,
          children: Ys,
        })
      : i("div", { ref: D, children: Ys });
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

const G1 = "DgxI";
const Y1 = "NjR4";
const X1 = "SxFi";
const K1 = "nwam";
const Z1 = "ohjJ";
const J1 = "wnrG";
const Q1 = "hwHS";
const eb = "oa9Q";
const tb = "zCtk";
const nb = "HZcp";
const rb = "UP9o";
const ob = "UTrI";
const sb = "HUeH";
const ib = "Jn2i";
const ab = "FRbT";
const cb = "NXVK";
const lb = "UAKL";
const ub = "LKKM";
const db = "P814";
const fb = "h1uz";
const hb = "EKWt";
const pb = "P5by";
const mb = "Lffw";
const gb = "hkft";

const le = {
  commentWrapper: G1,
  threadItem: Y1,
  avatarWrapper: X1,
  threadLine: K1,
  commentBody: Z1,
  showMoreBtn: J1,
  avatarPlaceholder: Q1,
  comment: eb,
  small: tb,
  commentTime: nb,
  commentText: rb,
  commentActions: ob,
  commentContent: sb,
  avatarLink: ib,
  authorLink: ab,
  commentHeader: cb,
  moreButton: lb,
  commentHeaderLeft: ub,
  replyMention: db,
  commentMedia: fb,
  reactionWrapper: hb,
  commentAction: pb,
  liked: mb,
  replyButton: gb,
};

const _b = ne(() => Z(() => import("./index-CN7XvCc5.js"), __vite__mapDeps([21, 11, 22])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const yb = Qr((
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
  const y = Xl(a);

  const v = we(b => b.profile?.id);

  const R = t.id === v;
  const E = R || _;
  const T = u === "xs";

  const k = Ee(() => {
    const b = [];

    if (R &&
      h) {
      b.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Ql, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (E &&
      m) {
      b.push({
        id: "delete",
        label: "Удалить",
        icon: i(au, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!R) {
      b.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(tu, { size: 16 }),
        danger: true,
        onClick: () => p(n),
      });
    }

    return b;
  }, [R, E, n, h, m, p]);

  const C = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${le.comment} ${T ? le.small : ""}`,
    children: [
      !w &&
        i("a", {
          href: C,
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
                    href: C,
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
              i(wu, {
                trigger: i(ru, { size: T ? 14 : 16 }),
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
                  i(Ne, {
                    children: [
                      i("a", {
                        href: `/@${g.username}`,
                        className: le.replyMention,
                        children: ["@", g.displayName],
                      }),
                      ", ",
                    ],
                  }),
                r && i(Eu, { text: r, spans: o }),
              ],
            }),
          Wr(s).length > 0 &&
            i("div", {
              className: le.commentMedia,
              children: i(zs, { media: Wr(s) }),
            }),
          s
            .filter(b => b.type === "audio")
            .map(b => i(
            Ce,
            {
              fallback: null,
              children: i(_b, { src: b.url, duration: b.duration }),
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
                    i(Ms, { size: 14, filled: l }),
                    i(Hn, { value: c }),
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

const Nu = Qr((
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
  const v = m === t.id;
  const R = t.stats.replies > y.length;

  const E = [
    { type: "parent", data: t, author: _ },
    ...y.map(T => ({
      type: "reply",
      data: T,

      author: {
        id: T.author.id,
        username: T.author.username,
        avatar: T.author.avatar ?? "",
        displayName: T.author.displayName,
        isVerified: T.author.isVerified,
        pin: T.author.pin,
      }
    })),
  ];

  return i("div", {
    className: `${le.commentWrapper} ${v ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      E.map((T, k) => {
        const b = !(k === E.length - 1 && !w && !R);
        const S = m === T.data.id;
        return i(
          "div",
          {
            "data-comment-id": T.data.id,
            className: `${le.threadItem} ${S ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: le.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${T.author.username ?? T.author.id}`,
                    className: le.avatarLink,
                    children: i(nt, {
                      src: T.author.avatar,
                      alt: T.author.displayName,
                      size: "sm",
                    }),
                  }),
                  b && i("div", { className: le.threadLine }),
                ],
              }),
              i("div", {
                className: le.commentBody,
                children: i(yb, {
                  author: T.author,
                  commentId: T.data.id,
                  text: T.data.text,
                  spans: T.data.spans ?? [],
                  attachments: T.data.attachments ?? [],
                  replyTo: T.data.replyTo,
                  createdAt: T.data.createdAt,
                  reactionsCount: T.data.reactions.total,
                  isReacted: T.data.reactions.myReaction !== null,
                  size: "sm",
                  onLike: T.type === "parent" ? n : () => r(T.data.id),
                  onReply: () => T.type === "parent"
                    ? s(
                        t.id,
                        t.author.username ?? t.author.id,
                        t.author.displayName,
                        t.author.id
                      )
                    : s(
                        t.id,
                        T.data.author.username ?? T.data.author.id,
                        T.data.author.displayName,
                        T.data.author.id,
                        T.data.id
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
          T.data.id
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
                R && i("div", { className: le.threadLine }),
              ],
            }),
            i("div", {
              className: le.commentBody,
              children: i(vu, {
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
      R &&
        !h &&
        i("button", {
          className: le.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - y.length, " ответов"],
        }),
    ],
  });
});

function vb({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = o => o,
}) {
  const o = A(null);
  const [s, a] = L(0);
  const [c, l] = L(0);
  const u = A(new Map());
  const f = A(new Map());
  const d = A(0);

  if (d.current !== e) {
    (d.current = e);
    f.current.clear();
  }

  const p = N(
      (E) => {
        const T = r(E);
        return u.current.get(T) ?? t;
      },
      [r, t]
    );

  const h = N(
    (E) => {
      if (E === 0) {
        return 0;
      }
      const T = f.current.get(E);
      if (T !== undefined) {
        return T;
      }
      let k = 0;
      let C = 0;
      for (let b = E - 1; b >= 0; b--) {
        const S = f.current.get(b);
        if (S !== undefined) {
          (k = b);
          (C = S);
          break;
        }
      }
      for (let b = k; b < E; b++) {
        C += p(b);
      }
      f.current.set(E, C);
      return C;
    },
    [p]
  );

  const m = Ee(() => e === 0 ? 0 : h(e - 1) + p(e - 1), [e, h, p]);

  const { startIndex: g, endIndex: w } = Ee(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let E = 0;
    let T = e - 1;

    while (E < T) {
      const S = Math.floor((E + T) / 2);
      const O = h(S);
      const I = p(S);

      if (O + I < s) {
        (E = S + 1);
      } else {
        (T = S);
      }
    }

    const k = Math.max(0, E - n);
    let C = E;
    let b = h(E) - s;

    while (C < e && b < c + t * n) {
      (b += p(C));
      C++;
    }

    (C = Math.min(e - 1, C + n));
    return { startIndex: k, endIndex: C };
  }, [e, s, c, h, p, n, t]);

  const _ = Ee(() => {
    if (e === 0) {
      return [];
    }
    const E = [];
    for (let T = g; T <= w; T++) {
      E.push({ index: T, key: r(T), start: h(T), size: p(T) });
    }
    return E;
  }, [g, w, r, h, p, e]);

  const y = N(
    (E, T) => {
      if (!E) {
        return;
      }
      const k = r(T);
      const C = E.getBoundingClientRect().height;
      if (C <= 0) {
        return;
      }
      const b = u.current.get(k);

      if ((b === undefined || Math.abs(b - C) > 2)) {
        u.current.set(k, C);
        f.current.clear();
      }
    },
    [r]
  );

  const v = N(() => {
    if (o.current) {
      a(o.current.scrollTop);
    }
  }, []);

  const R = N(
    (E) => {
      if (o.current) {
        o.current.removeEventListener("scroll", v);
      }

      (o.current = E);

      if (E) {
        l(E.clientHeight);
        a(E.scrollTop);
        E.addEventListener("scroll", v, { passive: true });
      }
    },
    [v]
  );

  F(() => {
    if (!o.current) {
      return;
    }
    const E = new ResizeObserver((T) => {
      for (const k of T) {
        l(k.contentRect.height);
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

  return { containerRef: R, virtualItems: _, totalSize: m, measureElement: y };
}
const wb = "lVaM";
const Eb = "VJux";
const Sb = "Jpiq";
const bb = "aNtv";
const Cb = "rGcr";
const Tb = "ol3r";
const Ib = "BWXd";
const Nb = "Vhkd";
const Rb = "HAWa";
const kb = "EbDN";
const Ab = "qkJX";

const Je = {
  comments: wb,
  sortWrapper: Eb,
  sortSelect: Sb,
  commentsList: bb,
  commentItem: Cb,
  empty: Tb,
  loadMoreSentinel: Ib,
  virtualContainer: Nb,
  virtualContent: Rb,
  virtualItem: kb,
  inputWrapper: Ab,
};

const Ob = 120;
function Pb({
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
  const y = A(false);

  const {
    containerRef: v,
    virtualItems: R,
    totalSize: E,
    measureElement: T,
  } = vb({
    itemCount: e.length,
    estimatedItemHeight: Ob,
    overscan: 3,
    getItemKey: C => e[C]?.id ?? C,
  });

  F(() => {
    if (!t || n || R.length === 0) {
      y.current = false;
      return;
    }
    const C = R[R.length - 1]?.index ?? 0;
    const b = e.length - 5;

    if (C >= b && !y.current) {
      (y.current = true);
      r();
    }
  }, [R, e.length, t, n, r]);

  F(() => {
    if (!n) {
      (y.current = false);
    }
  }, [n]);

  const k = N(
    (C, b) => {
      T(C, b);
    },
    [T]
  );
  return i("div", {
    ref: v,
    className: Je.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: Je.virtualContent,
        style: { height: `${E}px` },
        children: R.map((C) => {
          const b = e[C.index];
          return b
            ? i(
                "div",
                {
                  ref: S => k(S, C.index),
                  className: Je.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${C.start}px)`,
                  },
                  children: i(Nu, {
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
                C.key
              )
            : null;
        }),
      }),
      n && i(js, { variant: "medium" }),
    ],
  });
}
const Lb = "DoN9";
const xb = "CA7D";
const $b = "mLGh";
const Io = { wrapper: Lb, popup: xb, closing: $b };

const Mb = ne(() => Z(() => import("./index-1bYLec0_.js"), __vite__mapDeps([23, 24])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const Ka = 280;
const Za = 380;
const No = 8;
const Db = 100;
const Ja = 150;
const Ub = 150;
function qs({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, o] = L(false);
  const [s, a] = L(false);
  const [c, l] = L(null);
  const u = A(null);
  const f = A(null);
  const d = A(null);
  const p = A(null);
  const h = A(null);
  const m = A(null);

  const g = N(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const C = u_current.getBoundingClientRect();

    const {
      innerHeight,
      innerWidth
    } = window;

    const O = innerHeight - C.bottom;
    const I = innerWidth - C.left;
    const C_right = C.right;
    const H = O >= Za + No ? "bottom" : "top";
    const ie = I >= Ka || I > C_right ? "left" : "right";
    let de;
    let pe;

    if (H === "top") {
      (de = C.top - Za - No);
    } else {
      (de = C.bottom + No);
    }

    if (ie === "left") {
      (pe = C.left);
    } else {
      (pe = C.right - Ka);
    }

    l({
      top: de,
      left: pe,
      transformOrigin: `${H === "top" ? "bottom" : "top"} ${
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
      }, Ub));
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
        }, Db));
    }
  };

  const v = () => {
    if (p.current) {
      clearTimeout(p.current);
      (p.current = null);
    }

    (h.current = window.setTimeout(() => {
        _();
      }, Ja));
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

  const R = () => {
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

  const E = () => {
    h.current = window.setTimeout(() => {
      _();
    }, Ja);
  };

  const T = (k) => {
    k.preventDefault();
  };

  return i("div", {
    ref: f,
    className: Io.wrapper,
    onMouseEnter: y,
    onMouseLeave: v,
    onMouseDown: T,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(N_, { size: n }),
      }),
      r &&
        c &&
        Ut(
          i("div", {
            ref: d,
            className: `${Io.popup} ${s ? Io.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: R,
            onMouseLeave: E,
            onMouseDown: T,
            children: i(Ce, {
              fallback: null,
              children: i(Mb, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const Fb = "UBAk";
const Bb = "FW0L";
const Hb = "tVQ9";
const Vb = "o16z";
const Wb = "QdXd";
const jb = "LPU3";
const zb = "b5Oy";
const qb = "X2ME";
const Gb = "PbyA";
const Yb = "N0Kt";
const Xb = "z1rj";
const Kb = "muEB";

const qe = {
  editCommentModal: Fb,
  form: Bb,
  header: Hb,
  title: Vb,
  content: Wb,
  editor: jb,
  actions: zb,
  mediaButtons: qb,
  mediaButton: Gb,
  submitGroup: Yb,
  charCount: Xb,
  error: Kb,
};

const Qa = 2000/* 2e3 */;
function Zb({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = an();

  const o = Pt(E => E.editComment);

  const s = we(E => E.profile);

  const a = bt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: d,
  } = eo(t, n);

  const [p, h] = L(false);
  const m = Qa - c.length;
  const g = m < 0;
  const w = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const y = w || _;

  const v = N(
    (E) => {
      d(E.emoji);
    },
    [d]
  );

  const R = N(async () => {
    if (!(!c.trim() || g || !y || p)) {
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
            i(no, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Комментарий...",
              maxLength: Qa,
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
                i(qs, { onEmojiSelect: v, buttonClassName: qe.mediaButton }),
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
                  onClick: R,
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
const Jb = ne(() => Z(() => import("./index-DKRt0yGY.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function Qb({
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
  const [v, R] = L(null);
  const [E, T] = L(null);
  const k = A(null);
  const { openModal: C } = an();

  const b = Pt(V => V.highlightedCommentId);

  const S = Pt(V => V.clearHighlightedComment);

  const O = Pt(V => V.loadReplies);

  const I = Pt(V => V.deleteComment);

  const P = Pt(V => V.toggleCommentLike);

  c_({
    sentinelRef: k,
    hasMore: r,
    isLoading: n,
    onLoadMore: u,
    rootMargin: "200px",
  });

  F(
    () => () => {
      S();
    },
    [S]
  );

  F(() => {
    if (!b) {
      return;
    }
    let V = false;
    const _e = [];

    const ge = (x) => {
      if (V) {
        return;
      }
      const D = document.querySelector(`[data-comment-id="${b}"]`);
      if (!D) {
        if (x > 0) {
          _e.push(window.setTimeout(() => ge(x - 1), 150));
        } else {
          S();
        }

        return;
      }
      D.scrollIntoView({ behavior: "smooth", block: "center" });
      y(b);
      S();

      _e.push(window.setTimeout(() => y(null), 900));
    };

    ge(40);

    return () => {
      (V = true);

      _e.forEach(x => clearTimeout(x));
    };
  }, [b, S]);

  const H = async (V, _e, ge) => {
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

  const ie = (V, _e, ge, x, D) => {
    w({ commentId: V, username: _e, displayName: ge, userId: x, replyId: D });
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
      R(V);
      try {
        await O(V);
      } finally {
        R(null);
      }
    },
    [O]
  );

  const q = N((V) => {
    T(V);
  }, []);

  const ee = N(
    (V) => {
      let _e = "";
      let ge = [];
      for (const x of e) {
        if (x.id === V) {
          (_e = x.text);
          (ge = x.spans ?? []);
          break;
        }
        const D = x.previewReplies?.find(j => j.id === V);
        if (D) {
          (_e = D.text);
          (ge = D.spans ?? []);
          break;
        }
      }
      C(i(Zb, { commentId: V, initialText: _e, initialSpans: ge }));
    },
    [e, C]
  );

  const re = N(
    (V) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        I(V);
      }
    },
    [I]
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
        ? i(aw, { count: 5 })
        : e.length === 0
        ? i("div", { className: Je.empty, children: "Нет комментариев" })
        : m
        ? i(Pb, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: g,
            flashingCommentId: _,
            loadingRepliesId: v,
            isWallOwner: f,
            onLikeComment: a,
            onLikeReply: pe,
            onStartReply: ie,
            onCancelReply: de,
            onSubmitReply: H,
            onVoiceSend: l,
            onLoadReplies: se,
            onReport: q,
            onEdit: ee,
            onDelete: re,
          })
        : i("div", {
            className: Je.commentsList,
            children: [
              e.map(V => i(
                "div",
                {
                  className: Je.commentItem,
                  children: i(Nu, {
                    comment: V,
                    onLike: () => a(V.id),
                    onLikeReply: pe,
                    replyingTo: g?.commentId === V.id ? g : null,
                    onStartReply: ie,
                    onCancelReply: de,
                    onSubmitReply: H,
                    onVoiceSend: l,
                    onLoadReplies: se,
                    onReport: q,
                    onEdit: ee,
                    onDelete: re,
                    isLoadingReplies: v === V.id,
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
                  children: n && i(js, { variant: "medium" }),
                }),
            ],
          }),
      !p &&
        i("div", {
          className: Je.inputWrapper,
          children: i(vu, {
            onSubmit: (V, _e, ge) => c({ text: V, spans: _e, attachments: ge }),
            onVoiceSend: l,
          }),
        }),
      E &&
        i(Ce, {
          fallback: null,
          children: i(Jb, {
            targetType: "comment",
            targetId: E,
            onClose: () => T(null),
          }),
        }),
    ],
  });
}
const eC = "QjNh";
const tC = "fUWU";
const nC = "izn0";
const rC = "w8tu";
const Sr = { commentsModal: eC, header: tC, title: nC, content: rC };
function oC({ postId: e, onClose: t }) {
  const n = A(null);

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
    Ha(v => ({
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

  const { commentsSort: p, setCommentsSort: h } = Ar(
    Ha(v => ({
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

  const g = N(() => {
    if (a && !s) {
      u(e);
    }
  }, [a, s, u, e]);

  const w = N(
    (v) => {
      f(v);
    },
    [f]
  );

  const _ = N(
    async (v) => {
      await d(e, v);
    },
    [d, e]
  );

  const y = N(
    async (v) => {
      const R = `voice_${Date.now()}.webm`;
      const E = new File([v], R, { type: v.type || "audio/webm" });
      const T = await hn.uploadMedia(E);
      await d(e, { text: "", attachments: [{ mediaId: T.id }] });
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
        children: i(Qb, {
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
const sC = ne(() => Z(() => import("./index-BuRXce-4.js"), __vite__mapDeps([25, 26])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);
function Ru({
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
    } = eo();

  const [u, f] = L(false);
  const [d, p] = L(false);
  const [h, m] = L(false);
  const g = A(0);
  const w = bt();
  const y = Vs()?.subscription?.isActive ?? false;

  const {
    images: v,
    uploadingImages: R,
    isUploading: E,
    hasVideo: T,
    openFilePicker: k,
    removeImage: C,
    addImage: b,
    uploadFiles: S,
    clearAll: O,
    fileInputRef: I,
    handleFileChange: P,
  } = _u(10, y);

  const {
    isPollOpen: H,
    poll: ie,
    togglePoll: de,
    handlePollQuestionChange: pe,
    handlePollOptionChange: se,
    handleAddPollOption: q,
    handleRemovePollOption: ee,
    handleMultipleChoiceToggle: re,
    handleClosePoll: V,
    isPollValid: _e,
    getPollData: ge,
    resetPoll: x,
  } = cw();

  const D = wt.MAX_CHARS - r.length;
  const j = D < 0;
  const Q = H && _e();
  const z = v.length > 0 || R.length > 0;
  const G = r.trim().length > 0 || Q || z;
  const fe = y ? `${os},${ry}` : os;

  const ke = N(async () => {
    if (!(!G || j || E || d)) {
      p(true);
      try {
        const Se = v.map(pt => ({
          mediaId: pt.mediaId,
          url: pt.url
        }));
        await e?.(r, o, Se, ge());
        l();
        O();
        x();
      } catch {
      } finally {
        p(false);
      }
    }
  }, [G, j, E, d, r, o, v, ge, e, l, O, x]);

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
        S(Array.from(pt));
      }
    },
    [S]
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
            i(nu, { size: 32 }),
            i("span", {
              children: y ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      i("div", {
        className: J.whatsNew,
        children: i(no, {
          ref: s,
          value: r,
          spans: o,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: J.editor,
          minHeight: 40,
          maxHeight: wt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: S,
        }),
      }),
      i(yu, { images: v, uploadingImages: R, onRemove: C }),
      i("input", {
        ref: I,
        type: "file",
        accept: fe,
        multiple: !T,
        onChange: P,
        style: { display: "none" },
      }),
      H &&
        i(jw, {
          poll: ie,
          onQuestionChange: pe,
          onOptionChange: se,
          onAddOption: q,
          onRemoveOption: ee,
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
                children: i(Zl, {}),
              }),
              !w &&
                i(qs, { onEmojiSelect: oe, buttonClassName: J.mediaButton }),
              i("button", {
                className: J.mediaButton,
                onClick: () => f(true),
                title: "Нарисовать",
                disabled: T,
                children: i(T_, { size: 20 }),
              }),
              i("button", {
                className: `${J.mediaButton} ${H ? J.active : ""}`,
                onClick: de,
                title: "Добавить опрос",
                children: i(I_, {}),
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
                disabled: !G || j || E || d,
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
          children: i(sC, {
            isOpen: u,
            onClose: () => f(false),
            onSave: Te,
            mode: "post",
          }),
        }),
    ],
  });
}
const iC = "OAIu";
const aC = "L5ME";
const ec = { createPostModal: iC, title: aC };
function cC({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: r } = an();

  const o = we(c => c.profile);

  const s = te(c => c.createPost);

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
    className: ec.createPostModal,
    children: [
      i("h2", { className: ec.title, children: "Создать пост" }),
      i(Ru, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const lC = "cXb2";
const uC = "WY6r";
const dC = "L4R7";
const fC = "oTv1";
const hC = "ILCP";
const pC = "Rj0y";
const mC = "LxyV";
const gC = "QjpT";
const _C = "ON5M";
const yC = "IhxP";

const it = {
  editPostModal: lC,
  form: uC,
  whatsNew: dC,
  editor: fC,
  actions: hC,
  mediaButtons: pC,
  mediaButton: mC,
  submitGroup: gC,
  charCount: _C,
  error: yC,
};

const tc = 5000/* 5e3 */;
function vC({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = an();

  const o = te(E => E.editPost);

  const s = we(E => E.profile);

  const a = bt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: d,
  } = eo(t, n);

  const [p, h] = L(false);
  const m = tc - c.length;
  const g = m < 0;
  const w = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const y = w || _;

  const v = N(
    (E) => {
      d(E.emoji);
    },
    [d]
  );

  const R = N(async () => {
    if (!(!c.trim() || g || !y || p)) {
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
            i(no, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Что нового?",
              maxLength: tc,
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
                i(qs, { onEmojiSelect: v, buttonClassName: it.mediaButton }),
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
                  onClick: R,
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
const wC = "OaMw";
const EC = "Zr78";
const SC = "kMZQ";
const bC = "VFWc";
const CC = "JREz";
const TC = "PONq";
const IC = "m59D";
const NC = "Hble";
const RC = "gTAu";

const gt = {
  repostModal: wC,
  content: EC,
  title: SC,
  inputSection: bC,
  textarea: CC,
  originalPost: TC,
  postHeader: IC,
  postText: NC,
  actions: RC,
};

function kC({ post: e, onClose: t, onSuccess: n }) {
  const [r, o] = L("");
  const [s, a] = L(false);

  const c = we(d => d.profile);

  const l = te(d => d.updatePostReposted);

  const u = te(d => d.prependPost);

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

const AC = () => {
  const e = Vs();
  const t = to();
  const { initialize: n, disconnectSSE: r } = nn();
  const o = Yl();

  const s = $s(S => S.fetchPortal);

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

  const c = Ee(
    () => [
      { id: "feed", label: "Лента", icon: eu, href: "/" },
      { id: "shop", label: "Магаз", icon: iu, href: "/shop" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: ou,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: rs, href: a },
    ],
    [a]
  );

  const [l, u] = L({});
  const [f, d] = L(true);
  const p = A([]);
  const h = A(null);
  const [m] = ar();
  const { openModal: g } = an();

  const w = te(S => S.fetchFeed);

  const _ = te(S => S.isRefreshing);

  const y = lu();
  const v = mu();

  const R = N(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      w(true);
    }
  }, [w]);

  const E = Ee(() => {
    const S = m.url || "/";
    return Bs.some(O => S.startsWith(O));
  }, [m.url]);

  const T = Ee(() => {
    const S = m.url || "/";
    return e?.username
      ? S === `/@${e.username}` || S.startsWith(`/@${e.username}/`)
      : false;
  }, [m.url, e?.username]);

  const k = A(null);

  const C = N((S, O = false) => {
    if (!O && k.current === S) {
      return;
    }
    k.current = S;
    const I = p.current[S];
    const h_current = h.current;
    if (I && h_current) {
      const H = parseFloat(getComputedStyle(h_current).paddingLeft) || 0;

      u({
        width: I.offsetWidth,
        transform: `translateX(${I.offsetLeft - H}px)`,
      });

      d(true);
    }
  }, []);

  F(() => {
    const S = m.url || "/";

    const O = c.findIndex(
      I => S === I.href ||
      S.startsWith(`${I.href}/`) ||
      (I.id === "profile" && T)
    );

    if (O === -1) {
      d(false);
    } else {
      C(O, true);
    }
  }, [m.url, c, T, C]);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }
    const O = h_current.querySelector(`.${Me.active}`);
    if (O) {
      const I = p.current.indexOf(O);

      if (I !== -1) {
        (k.current = null);
        C(I);
      }
    }
  }, []);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }

    const O = () => {
        const P = h_current.querySelector(`.${Me.active}`);
        if (P) {
          const H = p.current.indexOf(P);

          if (H !== -1) {
            C(H, true);
          }
        }
      };

    const I = new ResizeObserver(O);
    I.observe(h_current);
    window.addEventListener("resize", O);

    return () => {
      I.disconnect();
      window.removeEventListener("resize", O);
    };
  }, [C]);

  const b = () => {
    g(i(cC, {}));
  };
  return E
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
              c.map((S, O) => {
                const S_icon = S.icon;
                const P = S.id === "event";
                const H = P && o.active && !!o.url;
                const ie = m.url || "/";

                const pe =
                  ie === S.href ||
                  ie.startsWith(`${S.href}/`) ||
                  (S.id === "profile" && T);

                return i(
                  "a",
                  {
                    href: H ? o.url : S.href,
                    target: H ? "_blank" : undefined,
                    rel: H ? "noopener noreferrer" : undefined,
                    ref: (se) => {
                      (p.current[O] = se);

                      if (se && pe) {
                        C(O);
                      }
                    },
                    className: `${Me.navItem} ${pe ? Me.active : ""}`,
                    onClick: (se) => {
                      if (pe && S.id === "feed") {
                        se.preventDefault();
                        R();
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
                          : i(Ne, {
                              children: [
                                S.id === "feed" && _ ? i(Ds, {}) : i(S_icon, {}),
                                S.id === "notifications" &&
                                  y > 0 &&
                                  i("span", {
                                    className: Me.badge,
                                    children: y > 99 ? "99+" : y,
                                  }),
                                S.id === "shop" &&
                                  v > 0 &&
                                  i("span", {
                                    className: Me.badge,
                                    children: v,
                                  }),
                              ],
                            }),
                      }),
                      i("span", { className: Me.label, children: S.label }),
                    ],
                  },
                  S.id
                );
              }),
            ],
          }),
          t &&
            i("button", {
              className: Me.createButton,
              onClick: b,
              "aria-label": "Создать пост",
              children: i(Us, {}),
            }),
        ],
      });
};

const OC = "M0ZU";
const PC = "TP2Y";
const LC = "H0oM";
const xC = "quwe";
const br = { badge: OC, red: PC, green: LC, blue: xC };
function $C({ type: e }) {
  const t =
    e === "like"
      ? br.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? br.green
      : br.blue;
  return i("div", {
    className: `${br.badge} ${t}`,
    children: [
      e === "follow" && i(Us, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(Jl, { size: 12, filled: true }),
      e === "like" && i(Ms, { size: 12, filled: true }),
      e === "repost" && i(Fs, { size: 12 }),
    ],
  });
}
const MC = "uscT";
const DC = "rqiJ";
const UC = "JRSO";
const FC = "xD0b";
const BC = "vtTJ";
const HC = "KtnL";
const VC = "jvgr";
const WC = "GQD6";
const jC = "GFkL";
const zC = "S217";
const qC = "zTUn";

const Ye = {
  container: MC,
  clearAllButton: DC,
  toastList: UC,
  toast: FC,
  toastLeft: BC,
  toastData: HC,
  title: VC,
  message: WC,
  dragging: jC,
  closeButton: zC,
  belowTabs: qC,
};

const GC = Sn(null);
function YC({ children: e }) {
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

  const a = ey();

  F(() => {
    if (a) {
      const c = ZC(a.type);

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

  return i(GC.Provider, {
    value: { toasts: t, addToast: r, removeToast: o, clearAll: s },
    children: [e, i(XC, { toasts: t, onRemove: o, onClearAll: s })],
  });
}
function XC({ toasts: e, onRemove: t, onClearAll: n }) {
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
          QC,
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
const KC = 80;
function ZC(e) {
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
function JC(e) {
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
function QC({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const o = A(null);
  const [s, a] = L(0);
  const [c, l] = L(false);
  const [u, f] = L(false);
  const d = A(0);
  const p = A(false);

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
      const T = E.clientX - d.current;

      if (Math.abs(T) > 5) {
        (p.current = true);
      }

      a(T);
    },
    [c]
  );

  const g = N(() => {
    if (c) {
      l(false);

      if (Math.abs(s) > KC) {
        f(true);
        a(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!p.current) {
          const E = JC(e);

          if (E) {
            je(E);
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

  const w = (E) => {
    (d.current = E.touches[0].clientX);
    l(true);
  };

  const _ = (E) => {
    if (!c) {
      return;
    }
    const T = E.touches[0].clientX - d.current;
    a(T);
  };

  const y = () => {
    g();
  };

  const v = u || r ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const R = r ? 400 : s;
  return i("div", {
    ref: o,
    className: `${Ye.toast} ${c ? Ye.dragging : ""}`,
    style: {
      transform: `translateX(${R}px)`,
      opacity: v,
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
            badge: i($C, { type: e.notificationType }),
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
        onClick: (E) => {
          E.stopPropagation();
          t(e.id);
        },
        onMouseDown: E => E.stopPropagation(),
        onTouchStart: E => E.stopPropagation(),
        children: i(ut, { size: 16 }),
      }),
    ],
  });
}
const eT = "SvdP";
const tT = "cwr5";
const nT = "pZvu";
const rT = "Gn8D";
const oT = "I4C5";
const sT = "jmCH";
const iT = "nfdn";
const aT = "zYwZ";
const cT = "nSRK";
const lT = "yZFv";

const qt = {
  container: eT,
  toast: tT,
  slideUp: nT,
  leaving: rT,
  fadeOut: oT,
  success: sT,
  icon: iT,
  message: aT,
  closeButton: cT,
  error: lT,
};

const uT = { success: R_, error: b_ };
function dT({ id: e, type: t, message: n, onRemove: r }) {
  const [o, s] = L(false);
  const uT_t = uT[t];

  const c = N(() => {
    s(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return i("div", {
    className: `${qt.toast} ${qt[t]} ${o ? qt.leaving : ""}`,
    children: [
      i("span", { className: qt.icon, children: i(uT_t, { size: 20 }) }),
      i("span", { className: qt.message, children: n }),
      i("button", {
        className: qt.closeButton,
        onClick: c,
        children: i(ut, { size: 14 }),
      }),
    ],
  });
}
function fT() {
  const e = Dr(n => n.toasts);

  const t = Dr(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: qt.container,
        children: e.map(n => i(
          dT,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const hT = "r1TH";
const pT = "VXoB";
const mT = "QZGQ";
const gT = "fpoB";
const Cr = { tabs: hT, indicator: pT, button: mT, active: gT };
function _T({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: o = "",
}) {
  const [s, a] = L(t);
  const c = n !== undefined ? n : s;
  const [l, u] = L({});
  const f = A([]);
  const d = A(null);
  const p = A(false);

  const h = N(() => {
    const _ = f.current[c];
    if (_) {
      const _parentElement = _.parentElement;
      const v = _parentElement ? parseFloat(getComputedStyle(_parentElement).paddingLeft) : 0;
      const R = !p.current;

      u({
        width: _.offsetWidth,
        transform: `translateX(${_.offsetLeft - v}px)`,
        ...(R ? { transition: "none" } : {}),
      });

      if (R) {
        requestAnimationFrame(() => {
          (p.current = true);

          u((E) => {
            const { transition: T, ...k } = E;
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
          ref: (v) => {
            f.current[y] = v;
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
const yT = ne(() => Z(
  () => import("./index-DD8APvRL.js"),
  __vite__mapDeps([27, 28, 6, 5, 29])
).then(e => ({
  default: e.ImageViewer
}))
);
function vT() {
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
  } = zl();
  return e
    ? i(Ce, {
        fallback: null,
        children: i(
          yT,
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
const wT = "xuYy";
const ET = "IuBZ";
const ST = "eGbJ";
const bT = "dxoR";
const Tr = { layout: wT, wrapper: ET, wrapperShop: ST, content: bT };

const CT = ne(() => Z(() => import("./index-Dx7OUJsy.js"), __vite__mapDeps([30, 31])).then(
  e => ({
    default: e.AuthLayout
  })
)
);

const TT = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const IT = [
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

const NT = ["/shop"];

const RT = ({ children: e }) => {
  const t = bt();
  const n = to();
  const r = a_();
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
  const a = TT.includes(o);

  const c = NT.some(f => o === f || o.startsWith(`${f}/`));

  const l = IT.includes(o);
  const u = (n || c) && !l;
  return a
    ? i(Ce, { fallback: null, children: i(CT, { children: e }) })
    : i(i_.Provider, {
        value: { isHidden: r },
        children: i("div", {
          className: Tr.layout,
          children: i("div", {
            className: `${Tr.wrapper} ${c ? Tr.wrapperShop : ""}`,
            children: [
              u && (t ? i(AC, {}) : i(_0, {})),
              u && !t && i(S0, {}),
              i("div", { className: Tr.content, children: e }),
            ],
          }),
        }),
      });
};

const kT = "Yclg";
const AT = "WvX9";
const OT = "Z8tr";
const PT = "JHRt";
const LT = "fOQf";
const xT = "UlYN";
const $T = "vp43";
const MT = "Arnc";
const DT = "RS9g";
const UT = "gbca";
const FT = "UR3f";
const BT = "OkZz";
const HT = "YLyO";
const VT = "c240";
const WT = "AVJf";

const Pe = {
  overlay: kT,
  card: AT,
  imageWrap: OT,
  image: PT,
  body: LT,
  titleRow: xT,
  title: $T,
  badge: MT,
  texts: DT,
  text: UT,
  moreButton: FT,
  buttons: BT,
  button: HT,
  primary: VT,
  secondary: WT,
};

const ku = "seen_announcements";
function Au() {
  try {
    const e = localStorage.getItem(ku);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function jT(e) {
  try {
    const t = Au();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(ku, JSON.stringify(t));
    }
  } catch {}
}
function zT() {
  const e = to();
  const [t, n] = L(null);
  const [r, o] = L(false);

  const s = N(() => {
    o(false);

    n(m => {
      if (m) {
        jT(m.id);
      }

      return null;
    });
  }, []);

  F(() => {
    if (!e) {
      return;
    }
    let m = false;

    oy
      .getAnnouncements()
      .then((g) => {
      if (m) {
        return;
      }
      const w = Au();

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

  return Ut(
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
const nc = 3000/* 3e3 */;
const qT = 500;
const GT = 30000/* 3e4 */;
const rc = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function YT() {
  const e = te(n => n.applyStatsUpdates);

  const t = fu();
  F(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let r = Infinity;
    let o = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > GT;

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
      const h = Vr.getSnapshot();
      if (h.length !== 0) {
        o = true;
        try {
          const m = h.length > 20 ? h.slice(0, 20) : h;
          const g = await Le.getPostsStats(m);

          if (g.length > 0) {
            e(g);
          }
        } catch {
        } finally {
          o = false;
        }
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
            u(nc);
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

    for (const h of rc) {
      window.addEventListener(h, f, { passive: true });
    }
    const d = () => {
      if (!document.hidden) {
        f();
      }
    };
    document.addEventListener("visibilitychange", d);
    const p = Vr.onAppear(() => {
      if (!s && !document.hidden) {
        u(qT);
      }
    });
    u(nc);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", d);
      for (const h of rc) {
        window.removeEventListener(h, f);
      }
      p();
    };
  }, [e, t]);
}

const Ou = () => i(hu, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(ze, {
    onClick: () => je("/"),
    children: "Вернуться на главную",
  }),
});

const XT = "Wpvr";
const KT = "uvXe";
const ZT = "L4TR";
const JT = "idFM";
const QT = "GOwr";
const eI = "iLos";
const tI = "FVHu";
const nI = "QYbP";
const rI = "oSfl";
const oI = "YGQx";
const sI = "iI23";
const iI = "I4Dx";
const aI = "cr0n";
const cI = "bDHx";
const lI = "Wnlq";
const uI = "efAQ";
const dI = "opEv";
const fI = "bNty";
const hI = "dWY6";
const pI = "J5vp";
const mI = "efqi";
const gI = "TKHW";

const B = {
  skeleton: XT,
  inner: KT,
  content: ZT,
  header: JT,
  body: QT,
  actions: eI,
  shimmer: tI,
  avatar: nI,
  name: rI,
  time: oI,
  line: sI,
  w100: iI,
  w92: aI,
  w85: cI,
  w78: lI,
  w65: uI,
  w50: dI,
  w40: fI,
  media: hI,
  mediaTall: pI,
  pill: mI,
  list: gI,
};

function _I(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: B.body,
          children: i("div", { className: `${B.shimmer} ${B.line} ${B.w65}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: B.body,
          children: [
            i("div", { className: `${B.shimmer} ${B.line} ${B.w100}` }),
            i("div", { className: `${B.shimmer} ${B.line} ${B.w78}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: B.body,
          children: [
            i("div", { className: `${B.shimmer} ${B.line} ${B.w100}` }),
            i("div", { className: `${B.shimmer} ${B.line} ${B.w92}` }),
            i("div", { className: `${B.shimmer} ${B.line} ${B.w85}` }),
            i("div", { className: `${B.shimmer} ${B.line} ${B.w50}` }),
          ],
        });
      }
    case "media":
      {
        return i("div", {
          className: B.body,
          children: [
            i("div", { className: `${B.shimmer} ${B.line} ${B.w92}` }),
            i("div", { className: `${B.shimmer} ${B.line} ${B.w40}` }),
            i("div", { className: `${B.shimmer} ${B.media}` }),
          ],
        });
      }
    case "mediaTall":
      {
        return i("div", {
          className: B.body,
          children: [
            i("div", { className: `${B.shimmer} ${B.line} ${B.w78}` }),
            i("div", { className: `${B.shimmer} ${B.mediaTall}` }),
          ],
        });
      }
  }
}
function Pu({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("article", {
    className: B.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: B.inner,
      children: [
        i("div", { className: `${B.shimmer} ${B.avatar}` }),
        i("div", {
          className: B.content,
          children: [
            i("div", {
              className: B.header,
              children: [
                i("div", { className: `${B.shimmer} ${B.name}` }),
                i("div", { className: `${B.shimmer} ${B.time}` }),
              ],
            }),
            _I(e),
            i("div", {
              className: B.actions,
              children: [
                i("div", { className: `${B.shimmer} ${B.pill}` }),
                i("div", { className: `${B.shimmer} ${B.pill}` }),
                i("div", { className: `${B.shimmer} ${B.pill}` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const oc = ["medium", "media", "short", "long", "mediaTall"];
function yI({ count: e = 4 }) {
  return i("div", {
    className: B.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(Pu, { variant: oc[n % oc.length], delayMs: n * 120 }, n)
    ),
  });
}
const vI = "hg5g";
const wI = "wjFc";
const EI = "Xdwc";
const Ro = { virtualFeed: vI, virtualContent: wI, virtualItem: EI };
function SI({
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
  const f = A(null);
  const d = A(false);
  const [p, h] = L(null);
  const [m, g] = L(window.innerWidth < 1174);

  const w = te(b => b.highlightedPostId);

  const _ = te(b => b.clearHighlightedPost);

  F(() => {
    const b = () => g(window.innerWidth < 1174);
    window.addEventListener("resize", b);

    return () => window.removeEventListener("resize", b);
  }, []);
  const y = m ? 0 : c;

  const v = N(
    (b) => {
      const e_b = e[b];
      if (!e_b) {
        return b;
      }
      const O = e_b.attachments?.[0]?.id ?? "";
      return `${e_b.id}-${O}`;
    },
    [e]
  );

  const {
    virtualItems: R,
    totalSize: E,
    measureElement: T,
    getMeasuredHeights: k,
  } = l_({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: y,
    getItemKey: v,
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

  const C = N(() => {
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
      window.addEventListener("scroll", C, { passive: true });

      return () => window.removeEventListener("scroll", C);
    },
    [C]
  );

  return i("div", {
    ref: f,
    className: Ro.virtualFeed,
    children: [
      i("div", {
        className: Ro.virtualContent,
        style: { height: `${E}px` },
        children: R.map((b) => {
          const S = e[b.index];
          return S
            ? i(
                "div",
                {
                  ref: O => T(O, b.index),
                  className: Ro.virtualItem,
                  style: { transform: `translateY(${b.start}px)` },
                  children: t(S, b.index, S.id === p),
                },
                b.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${y}px` },
          children: i(Pu, { variant: "medium" }),
        }),
    ],
  });
}
const bI = "zDUy";
const CI = "mdkt";
const TI = "Z9zg";
const II = "sezY";
const NI = "gy3u";
const RI = "xIjK";

const fn = {
  page: bI,
  createPostWrapper: CI,
  tabsWrapper: TI,
  searchButton: II,
  error: NI,
  empty: RI,
};

const kI = (e) => {
  const t = te(S => S.posts);

  const n = te(S => S.activeFeed);

  const r = te(S => S.isLoading);

  const o = te(S => S.isLoadingMore);

  const s = te(S => S.hasMore);

  const a = te(S => S.error);

  const c = te(S => S.feedScrollPosition);

  const l = te(S => S.feedMeasuredHeights);

  const u = te(S => S.feedRestoreToken);

  const f = te(S => S.setActiveFeed);

  const d = te(S => S.fetchFeed);

  const p = te(S => S.loadMoreFeed);

  const h = te(S => S.createPost);

  const m = te(S => S.cacheFeedHeights);

  const g = we(S => S.profile);

  const w = we(S => S.status);

  const _ = A(false);

  const y = Ee(() => t.map(S => S.author.id), [t]);

  ay(y);

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

  const v = A(null);
  Dt(() => {
    if (v.current === null) {
      v.current = u;
      return;
    }
    if (v.current === u) {
      return;
    }
    v.current = u;
    const S = c;
    window.scrollTo(0, S);

    requestAnimationFrame(() => window.scrollTo(0, S));
  }, [u, c]);

  const R = N(
      (S) => {
        m(n, S);
      },
      [n, m]
    );

  const E = (S) => {
    const I = ["global", "clan", "following"][S] ?? "global";

    if (I !== n) {
      f(I);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      d(true);
    }
  };

  const T = async (S, O, I, P) => {
    if (g) {
      (await h({
          wallOwnerId: g.id,
          text: S,
          spans: O,
          attachments: I,
          poll: P,
        }));
    }
  };

  const k = N(() => {
    if (s && !o) {
      p();
    }
  }, [s, o, p]);

  const C =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const b = N(
    (S, O, I) => i(q1, { post: S, isHighlighted: I, source: C }, S.id),
    [C]
  );

  return i("div", {
    className: fn.page,
    children: [
      i("div", {
        className: fn.tabsWrapper,
        children: [
          i(_T, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: E,
          }),
          i("a", {
            href: "/search",
            className: fn.searchButton,
            "aria-label": "Поиск",
            children: i(su, {}),
          }),
        ],
      }),
      i("div", {
        className: fn.createPostWrapper,
        children: [
          g && i(nt, { src: g.avatar ?? "", alt: g.displayName, size: "sm" }),
          i(Ru, { onSubmit: T }),
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
        ? i(yI, { count: 4 })
        : t.length === 0
        ? i("div", { className: fn.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            SI,
            {
              posts: t,
              renderPost: b,
              isLoadingMore: o,
              hasMore: s,
              onLoadMore: k,
              estimatedPostHeight: 250,
              overscan: 3,
              initialMeasuredHeights: l,
              onMeasuredHeightsChange: R,
            },
            n
          )
        : null,
    ],
  });
};

const AI = ne(() => Z(
  () => import("./index-D3HiqNCk.js"),
  __vite__mapDeps([32, 28, 14, 33])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

const OI = ne(() => Z(() => import("./index-C3sI-6cW.js"), __vite__mapDeps([34, 6, 35])).then(
  e => ({
    default: e.Hashtag
  })
)
);

const PI = ne(() => Z(
  () => import("./index-BZXa54kP.js"),
  __vite__mapDeps([36, 37, 1, 2, 38])
).then(e => ({
  default: e.Profile
}))
);

const LI = ne(() => Z(() => import("./index-CpnEsoFE.js"), __vite__mapDeps([39, 6, 40])).then(
  e => ({
    default: e.PostPage
  })
)
);

const xI = ne(() => Z(
  () => import("./index-DFscgJ__.js"),
  __vite__mapDeps([41, 4, 37, 42])
).then(e => ({
  default: e.Notifications
}))
);

const $I = ne(() => Z(() => import("./index-DdZbKtMk.js"), __vite__mapDeps([43, 44])).then(
  e => ({
    default: e.Search
  })
)
);

const MI = ne(() => Z(() => import("./index-17blSS6O.js"), __vite__mapDeps([45, 46])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const DI = ne(() => Z(() => import("./index-CEC7l0pE.js"), __vite__mapDeps([47, 6, 48])).then(
  e => ({
    default: e.DeleteAccount
  })
)
);

const UI = ne(() => Z(() => import("./index-CkEO0zLq.js"), __vite__mapDeps([49, 6, 50])).then(
  e => ({
    default: e.Terms
  })
)
);

const FI = ne(() => Z(() => import("./index-C_q3y8dV.js"), __vite__mapDeps([51, 6, 52])).then(
  e => ({
    default: e.Privacy
  })
)
);

const BI = ne(() => Z(() => import("./index-B5mwk_5V.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.Cookies
  })
)
);

const HI = ne(() => Z(
  () => import("./index-DWVhiFd6.js"),
  __vite__mapDeps([55, 6, 3, 56])
).then(e => ({
  default: e.ExternalLink
}))
);

const VI = ne(() => Z(() => import("./index-mXqA_D_a.js"), __vite__mapDeps([57, 6, 58])).then(
  e => ({
    default: e.Support
  })
)
);

const WI = ne(() => Z(() => import("./index-CaqgUs8a.js"), __vite__mapDeps([59, 6, 60])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const jI = ne(() => Z(() => import("./index-DPSDjPg_.js"), __vite__mapDeps([61, 62])).then(
  e => ({
    default: e.Event
  })
)
);

const zI = ne(() => Z(
  () => import("./index-Br_ZXLSB.js"),
  __vite__mapDeps([63, 64, 65, 6])
).then(e => ({
  default: e.SubscriptionTerms
}))
);

const qI = ne(() => Z(
  () => import("./index-0vQdi2bt.js"),
  __vite__mapDeps([66, 64, 65, 6])
).then(e => ({
  default: e.RecurringTerms
}))
);

const GI = ne(() => Z(
  () => import("./index-Dxatl4MB.js"),
  __vite__mapDeps([67, 68, 69, 70, 71, 72, 73])
).then(e => ({
  default: e.Login
}))
);

const YI = ne(() => Z(
  () => import("./index-Uc3Ql2Ua.js"),
  __vite__mapDeps([74, 68, 69, 70, 71, 72, 75])
).then(e => ({
  default: e.Register
}))
);

const XI = ne(() => Z(
  () => import("./index-DeG8gK6Y.js"),
  __vite__mapDeps([76, 68, 69, 72, 77])
).then(e => ({
  default: e.ForgotPassword
}))
);

const KI = ne(() => Z(() => import("./index-biKBsHOn.js"), __vite__mapDeps([78, 72, 79])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const ZI = ne(() => Z(() => import("./index-Xd1oYfKD.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const JI = ne(() => Z(() => import("./index-D8bCVWSE.js"), __vite__mapDeps([80, 81])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const QI = ne(() => Z(() => import("./index-CKhUYz-E.js"), []).then(e => ({
  default: e.Verification
}))
);

function sc(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const eN = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(Ou, {});
  }
  const t = e.slice(1);
  return i(PI, { username: t });
};
function tN() {
  const [e, t] = L(window.location.pathname);

  const n = Vg(o => o.isOpen);

  YT();

  return i(YC, {
    children: i(Ky, {
      children: i(Uv, {
        currentPath: e,
        children: [
          i(vT, {}),
          n && i(Ce, { fallback: null, children: i(AI, {}) }),
          i(fT, {}),
          i(zv, {}),
          i(zT, {}),
          i(RT, {
            children: i(Ce, {
              fallback: null,
              children: i(Wl, {
                onChange: (o) => {
                  const s = e;
                  t(o.url);

                  if (o.url === s) {
                    return;
                  }

                  Wg.getState().markNavigated();
                  const a = te.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = sc(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = o.url === "/";
                  const l = !!sc(o.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(kI, { path: "/" }),
                  i(xI, { path: "/notifications" }),
                  i(GI, { path: "/login" }),
                  i(YI, { path: "/register" }),
                  i(XI, { path: "/forgot-password" }),
                  i(KI, { path: "/reset-password" }),
                  i(ZI, { path: "/verify-email" }),
                  i(UI, { path: "/terms" }),
                  i(FI, { path: "/privacy" }),
                  i(BI, { path: "/cookies" }),
                  i(JI, { path: "/onboarding" }),
                  i($I, { path: "/search" }),
                  i(MI, { path: "/shop/:rest*" }),
                  i(OI, { path: "/hashtag/:name" }),
                  i(HI, { path: "/external" }),
                  i(VI, { path: "/support" }),
                  i(DI, { path: "/delete-account" }),
                  i(WI, { path: "/child-safety" }),
                  i(jI, { path: "/event" }),
                  i(QI, { path: "/verification" }),
                  i(zI, { path: "/subscription-terms" }),
                  i(qI, { path: "/recurring-terms" }),
                  i(LI, { path: "/:username/post/:postId" }),
                  i(eN, { path: "/:slug" }),
                  i(Ou, { default: true }),
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

Ng(document.getElementById("root")).render(
  i(Fl, {
    children: i(Ig, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(tN, {}),
    }),
  })
);
export {
  Ut as $,
  A,
  ze as B,
  is as C,
  wu as D,
  bt as E,
  to as F,
  Yy as G,
  Be as H,
  ru as I,
  cC as J,
  hu as K,
  _T as L,
  sn as M,
  Ru as N,
  Ha as O,
  yI as P,
  Pt as Q,
  Wg as R,
  Ar as S,
  Ee as T,
  cr as U,
  SI as V,
  Qb as W,
  vu as X,
  Ql as Y,
  Jl as Z,
  Dt as __1,
  Vg as a,
  Ms as a0,
  Fs as a1,
  nn as a2,
  lu as a3,
  c_ as a4,
  uu as a5,
  M as a6,
  $ as a7,
  Hs as a8,
  su as a9,
  ay as aA,
  vt as aB,
  cy as aC,
  nN as __1,
  Ur as ab,
  Yl as ac,
  $s as ad,
  U as ae,
  S_ as af,
  Nt as ag,
  xs as ah,
  Oa as ai,
  v_ as aj,
  rt as ak,
  jl as al,
  Xg as am,
  Ol as an,
  ar as ao,
  Rs as ap,
  C_ as aq,
  Pr as ar,
  Ds as as,
  ut as at,
  ou as au,
  rs as av,
  Qr as aw,
  IS as ax,
  mS as ay,
  oy as az,
  te as b,
  q1 as c,
  L as d,
  je as e,
  nt as f,
  A_ as g,
  tu as h,
  Vs as i,
  Ce as j,
  Ne as k,
  Z as l,
  Us as m,
  an as n,
  gr as o,
  Le as p,
  N as q,
  hn as r,
  T_ as s,
  yt as t,
  i as u,
  au as v,
  we as w,
  Ie as x,
  F as y,
  ne as z,
};
