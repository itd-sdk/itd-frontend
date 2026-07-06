const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DXx_nwTn.js",
      "assets/index-D9cNzDlo.js",
      "assets/index-tRFVbUdK.css",
      "assets/IconInfo-_boABZd-.js",
      "assets/IconNotificationMention-BbO7CDVK.js",
      "assets/IconChevronRight-DH-EtvDX.js",
      "assets/IconChevronLeft-DRcQfgI5.js",
      "assets/index-CA0pzfdy.css",
      "assets/index-C4ZZPQNv.js",
      "assets/index-DrzkZXrI.css",
      "assets/VoiceInput-Dnml3SFK.js",
      "assets/IconPlay-DNSvFYwZ.js",
      "assets/VoiceInput-CO6X6phF.css",
      "assets/PostMediaVideo-DHMxId4n.js",
      "assets/PostMediaVideo-vxOo5Ok4.css",
      "assets/index-xYJ4tMmW.js",
      "assets/IconCheckCircle-BeRqMAqi.js",
      "assets/index-StvHTWwP.css",
      "assets/index-C99i-272.js",
      "assets/index-aqf_AZsF.css",
      "assets/index-Dk5sg23j.js",
      "assets/index-CMnV-aWs.css",
      "assets/index-BbgcGRkQ.js",
      "assets/index-DvVlrLyS.css",
      "assets/index-CGawjVOk.js",
      "assets/index-CHDka_ff.css",
      "assets/index-Dl99RBw0.js",
      "assets/index-BfmcMQ1o.css",
      "assets/index-DT-f2tuG.js",
      "assets/index-q-rAMSda.css",
      "assets/index-C2qnO_6f.js",
      "assets/index-C6KLu92v.css",
      "assets/index-CluPQp2X.js",
      "assets/IconCheck-BbDhNxWH.js",
      "assets/index-CYh4j8f9.css",
      "assets/index-BUUHr-FV.js",
      "assets/index-2lQifkzY.css",
      "assets/index-DE4FdqnP.js",
      "assets/index-BHvMq8zc.css",
      "assets/index-C8YF_OKo.js",
      "assets/index-CVRsQb_S.css",
      "assets/index-BrkCNBgk.js",
      "assets/index-_p3NsA4B.css",
      "assets/index-Bx2FWgzU.js",
      "assets/index-Cv4WV6v3.css",
      "assets/index-DQCZ4FFs.js",
      "assets/index-9N1g7ki3.css",
      "assets/index-flUhwj3W.js",
      "assets/index-DFTglfvo.css",
      "assets/index-BEgdYSvq.js",
      "assets/index-Bns7tNGv.css",
      "assets/index-BTbFyhkx.js",
      "assets/index-DTepf5GU.css",
      "assets/index-B51Gn7e_.js",
      "assets/index-F7LtWQPJ.css",
      "assets/index-CMgxuzzP.js",
      "assets/index-CuglwJpG.css",
      "assets/index-ByDNRuFi.js",
      "assets/SubscriptionTerms.module-BQ66_Bhe.js",
      "assets/SubscriptionTerms-euaNJJ5d.css",
      "assets/index-e2wKVIJR.js",
      "assets/index-DD3IqBBI.js",
      "assets/index-DL9gK-0-.js",
      "assets/index-fPzJv4Zd.css",
      "assets/index-Doon_v0g.js",
      "assets/index-DsqLA6uD.css",
      "assets/IconEyeOff-C3SWTYTF.js",
      "assets/index-DPvyHqXq.css",
      "assets/index-DinOv07X.js",
      "assets/index-BJkBQ5vj.css",
      "assets/index-By-I6xJi.js",
      "assets/index-DEZL2CiZ.css",
      "assets/index-BOpDC7be.js",
      "assets/index-B-GTwSZw.css",
      "assets/index-Mgk12XLN.js",
      "assets/index-Dd7t92s-.css",
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
      (e._sentryDebugIds[t] = "59e9a264-68ae-49d7-b89e-b0c618c31066");
      (e._sentryDebugIdIdentifier = "sentry-dbid-59e9a264-68ae-49d7-b89e-b0c618c31066");
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
let Gn;
let Z;
let qa;
let Gt;
let Us;
let Ga;
let Ya;
let Xa;
let Ko;
let Eo;
let So;
let Ka;
const Hn = {};
const Za = [];
const hu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function at(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Zo(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function nt(e, t, n) {
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
    (a.children = arguments.length > 3 ? Gn.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return Dn(e, a, r, o, null);
}
function Dn(e, t, n, r, o) {
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
    __v: o ?? ++qa,
    __i: -1,
    __u: 0,
  };

  if (o == null && Z.vnode != null) {
    Z.vnode(s);
  }

  return s;
}
function pu() {
  return { current: null };
}
function ke(e) {
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
      : (this.__s = at({}, this.state)));

    if (typeof e == "function") {
      (e = e(at({}, n), this.props));
    }

    if (e) {
      at(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      bo(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      bo(this);
    }
  }
}

function hn(e, t) {
  if (t == null) {
    return e.__ ? hn(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? hn(e) : null;
}
function Ja(e) {
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

    return Ja(e);
  }
}
function bo(e) {
  if (((!e.__d && (e.__d = true) && Gt.push(e) && !Cr.__r++) || Us != Z.debounceRendering)) {
    ((Us = Z.debounceRendering) || Ga)(Cr);
  }
}
function Cr() {
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
      Gt.sort(Ya);
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
        (((n = at({}, r)).__v = r.__v + 1),
        Z.vnode && Z.vnode(n),
        Jo(
          t.__P,
          n,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [o] : null,
          s,
          o ?? hn(r),
          !!(32 & r.__u),
          a
        ),
        (n.__v = r.__v),
        (n.__.__k[n.__i] = n),
        tc(s, n, a),
        (r.__e = r.__ = null),
        n.__e != o && Ja(n));
    }
  }

  Cr.__r = 0;
}
function Qa(e, t, n, r, o, s, a, c, l, u, f) {
  let d;
  let p;
  let h;
  let m;
  let g;
  let E;
  let _;
  const y = (r && r.__k) || Za;
  const t_length = t.length;
  l = mu(n, t, y, l, t_length);

  for (d = 0; d < t_length; d++) {
    if ((h = n.__k[d]) != null) {
      (p = h.__i == -1 ? Hn : y[h.__i] || Hn);
      (h.__i = d);
      (E = Jo(e, h, p, o, s, a, c, l, u, f));
      (m = h.__e);

      h.ref &&
        p.ref != h.ref &&
        (p.ref && Qo(p.ref, null, h), f.push(h.ref, h.__c || m, h));

      g == null && m != null && (g = m);

      (_ = !!(4 & h.__u)) || p.__k === h.__k
        ? (l = ec(h, l, e, _))
        : typeof h.type == "function" && E !== undefined
        ? (l = E)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = g);
  return l;
}
function mu(e, t, n, r, o) {
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
            ? (a = e.__k[s] = Dn(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = Dn(ke, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                Dn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + p);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = gu(a, n, l, d)) != -1 && (d--, (c = n[u]) && (c.__u |= 2));

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
        c.__e == r && (r = hn(c));
        rc(c, c);
      }
    }
  }
  return r;
}
function ec(e, t, n, r) {
  let o;
  let s;
  if (typeof e.type == "function") {
    o = e.__k;

    for (s = 0; o && s < o.length; s++) {
      if (o[s]) {
        (o[s].__ = e);
        (t = ec(o[s], t, n, r));
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
        (t && e.type && !t.parentNode && (t = hn(e)),
        n.insertBefore(e.__e, t || null));

    (t = e.__e);
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function et(e, t) {
  (t = t || []);

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some(n => {
              et(n, t);
            });
    } else {
      t.push(e);
    }
  }

  return t;
}
function gu(e, t, n, r) {
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
function Fs(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || hu.test(t) ? n : `${n}px`);
  }
}
function rr(e, t, n, r, o) {
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
            Fs(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            Fs(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(Xa, "$1")));
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
        (n.u = Ko);
        e.addEventListener(t, s ? So : Eo, s);
      }
    } else {
      e.removeEventListener(t, s ? So : Eo, s);
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
function Bs(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t.t == null) {
        t.t = Ko++;
      } else if (t.t < n.u) {
        return;
      }
      return n(Z.event ? Z.event(t) : t);
    }
  };
}
function Jo(e, t, n, r, o, s, a, c, l, u) {
  let f;
  let d;
  let p;
  let h;
  let m;
  let g;
  let E;
  let _;
  let y;
  let v;
  let b;
  let S;
  let T;
  let R;
  let I;
  let w;
  let C;
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
      (_ = t.props);
      (y = "prototype" in t_type && t_type.prototype.render);
      (v = (f = t_type.contextType) && r[f.__c]);
      (b = f ? (v ? v.props.value : f.__) : r);

      if (n.__c) {
        (E = (d = t.__c = n.__c).__ = d.__E);
      } else {
        y
              ? (t.__c = d = new t_type(_, b))
              : ((t.__c = d = new Ke(_, b)),
                (d.constructor = t_type),
                (d.render = yu));

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
        d.__s == d.state && (d.__s = at({}, d.__s));
        at(d.__s, t_type.getDerivedStateFromProps(_, d.__s));
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
          d.componentWillReceiveProps(_, b);
        }

        if (t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(_, d.__s, b) === false)) {
          if (t.__v != n.__v) {
            (d.props = _);
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
          d.componentWillUpdate(_, d.__s, b);
        }

        if (y &&
          d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(h, m, g);
          });
        }
      }

      (d.context = b);
      (d.props = _);
      (d.__P = e);
      (d.__e = false);
      (T = Z.__r);
      (R = 0);

      if (y) {
        d.state = d.__s;
        d.__d = false;

        if (T) {
          T(t);
        }

        f = d.render(d.props, d.state, d.context);

        for (I = 0; I < d._sb.length; I++) {
          d.__h.push(d._sb[I]);
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
        } while (d.__d && ++R < 25);
      }

      (d.state = d.__s);

      if (d.getChildContext != null) {
        (r = at(at({}, r), d.getChildContext()));
      }

      if (y &&
        !p &&
        d.getSnapshotBeforeUpdate != null) {
        (g = d.getSnapshotBeforeUpdate(h, m));
      }

      (w = f);

      if (f != null &&
        f.type === ke &&
        f.key == null) {
        (w = nc(f.props.children));
      }

      (c = Qa(e, Array_isArray(w) ? w : [w], t, n, r, o, s, a, c, l, u));
      (d.base = t.__e);
      (t.__u &= -161);

      if (d.__h.length) {
        a.push(d);
      }

      if (E) {
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
          for (C = s.length; C--; ) {
            Zo(s[C]);
          }
          Co(t);
        }
      } else {
        (t.__e = n.__e);
        (t.__k = n.__k);

        if (!k.then) {
          Co(t);
        }
      }

      Z.__e(k, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = _u(n.__e, t, n, r, o, s, a, l, u));
    }
  }

  if ((f = Z.diffed)) {
    f(t);
  }

  return 128 & t.__u ? undefined : c;
}
function Co(e) {
  if (e && e.__c) {
    (e.__c.__e = true);
  }

  if (e && e.__k) {
    e.__k.forEach(Co);
  }
}
function tc(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    Qo(n[r], n[++r], n[++r]);
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
function nc(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(nc)
    : at({}, e);
}
function _u(e, t, n, r, o, s, a, c, l) {
  let u;
  let f;
  let d;
  let p;
  let h;
  let m;
  let g;
  let E = n.props || Hn;

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
    if (E !== props && (!c || e.data != props)) {
      (e.data = props);
    }
  } else {
    (s = s && Gn.call(e.childNodes));

    if (!c && s != null) {
      E = {};

      for (u = 0; u < e.attributes.length; u++) {
        E[(h = e.attributes[u]).name] = h.value;
      }
    }

    for (u in E) {
      (h = E[u]);

      if (u != "children") {
        if (u == "dangerouslySetInnerHTML") {
          d = h;
        } else if (!(u in props)) {
          if ((u == "value" && "defaultValue" in props) ||
          (u == "checked" && "defaultChecked" in props)) {
            continue;
          }
          rr(e, u, null, h, o);
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
        rr(e, u, h, E[u], o);
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

      Qa(
        t.type == "template" ? e.content : e,
        Array_isArray(p) ? p : [p],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
        s,
        a,
        s ? s[0] : n.__k && hn(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          Zo(s[u]);
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
            (type == "option" && m != E[u])) &&
          rr(e, u, m, E[u], o);

      (u = "checked");
      g != null && g != e[u] && rr(e, u, g, E[u], o);
    }
  }
  return e;
}
function Qo(e, t, n) {
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
function rc(e, t, n) {
  let r;
  let o;

  if (Z.unmount) {
    Z.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      Qo(r, null, t);
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
        rc(r[o], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    Zo(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function yu(e, t, n) {
  return this.constructor(e, n);
}
function Vn(e, t, n) {
  let r;
  let o;
  let s;
  let a;

  if (t == document) {
    (t = document.documentElement);
  }

  if (Z.__) {
    Z.__(e, t);
  }

  (o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (a = []);

  Jo(
    t,
    (e = ((!r && n) || t).__k = nt(ke, null, [e])),
    o || Hn,
    Hn,
    t.namespaceURI,
    !r && n ? [n] : o ? null : t.firstChild ? Gn.call(t.childNodes) : null,
    s,
    !r && n ? n : o ? o.__e : t.firstChild,
    r,
    a
  );

  tc(s, e, a);
}
function oc(e, t) {
  Vn(e, t, oc);
}
function sc(e, t, n) {
  let r;
  let o;
  let s;
  let a;
  const c = at({}, e.props);

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
    (c.children = arguments.length > 3 ? Gn.call(arguments, 2) : n);
  }

  return Dn(e.type, c, r || e.key, o || e.ref, null);
}
function wn(e) {
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
            bo(a);
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
  (t.__c = `__cC${Ka++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
(Gn = Za.slice);

(Z = {
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

(qa = 0);

(Ke.prototype.render = ke);
(Gt = []);

(Ga = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(Ya = (e, t) => e.__v.__b - t.__v.__b);

(Cr.__r = 0);
(Xa = /(PointerCapture)$|Capture$/i);
(Ko = 0);
(Eo = Bs(false));
(So = Bs(true));
(Ka = 0);
let vu = 0;
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
    __v: --vu,
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

  if (Z.vnode) {
    Z.vnode(u);
  }

  return u;
}
const K = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const ie = globalThis;
const Jt = "10.52.0";
function $r() {
  Lr(ie);
  return ie;
}
function Lr(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || Jt);
  (t[Jt] = t[Jt] || {});
  return t[Jt];
}
function En(e, t, n = ie) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {});
  const o = (r[Jt] = r[Jt] || {});
  return o[e] || (o[e] = t());
}
const wu = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const Eu = "Sentry Logger ";
const Tr = {};
function Sn(e) {
  if (!("console" in ie)) {
    return e();
  }
  const ie_console = ie.console;
  const n = {};
  const r = Object.keys(Tr);
  r.forEach((o) => {
    const Tr_o = Tr[o];
    (n[o] = ie_console[o]);
    (ie_console[o] = Tr_o);
  });
  try {
    return e();
  } finally {
    r.forEach((o) => {
      ie_console[o] = n[o];
    });
  }
}
function Su() {
  ts().enabled = true;
}
function bu() {
  ts().enabled = false;
}
function ic() {
  return ts().enabled;
}
function Cu(...e) {
  es("log", ...e);
}
function Tu(...e) {
  es("warn", ...e);
}
function Iu(...e) {
  es("error", ...e);
}
function es(e, ...t) {
  if (K &&
    ic()) {
    Sn(() => {
      ie.console[e](`${Eu}[${e}]:`, ...t);
    });
  }
}
function ts() {
  return K ? En("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const V = {
    enable: Su,
    disable: bu,
    isEnabled: ic,
    log: Cu,
    warn: Tu,
    error: Iu,
  };

const ac = 50;
const en = "?";
const Hs = /\(error: (.*)\)/;
const Vs = /captureMessage|captureException/;
function cc(...e) {
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

      const u = Hs.test(a_c) ? a_c.replace(Hs, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const f of t) {
          const d = f(u);
          if (d) {
            s.push(d);
            break;
          }
        }
        if (s.length >= ac + o) {
          break;
        }
      }
    }
    return ku(s.slice(o));
  };
}
function Nu(e) {
  return Array.isArray(e) ? cc(...e) : e;
}
function ku(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(or(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (Vs.test(or(t).function || "")) {
    t.pop();
    Vs.test(or(t).function || "") && t.pop();
  }

  return t
    .slice(0, ac)
    .map(n => ({
    ...n,
    filename: n.filename || or(t).filename,
    function: n.function || en
  }));
}
function or(e) {
  return e[e.length - 1] || {};
}
const Yr = "<anonymous>";
function xt(e) {
  try {
    return !e || typeof e != "function" ? Yr : e.name || Yr;
  } catch {
    return Yr;
  }
}
function Ws(e) {
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
function lc(e) {
  return "__v_isVNode" in e && e.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
}
const xn = {};
const js = {};
function nn(e, t) {
  (xn[e] = xn[e] || []);
  xn[e].push(t);

  return () => {
    const xn_e = xn[e];
    if (xn_e) {
      const r = xn_e.indexOf(t);

      if (r !== -1) {
        xn_e.splice(r, 1);
      }
    }
  };
}
function rn(e, t) {
  if (!js[e]) {
    js[e] = true;
    try {
      t();
    } catch (n) {
      if (K) {
        V.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function tt(e, t) {
  const n = e && xn[e];
  if (n) {
    for (const r of n) {
      try {
        r(t);
      } catch (o) {
        if (K) {
          V.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${xt(r)}
Error:`,
            o
          );
        }
      }
    }
  }
}
let Xr = null;
function Ru(e) {
  const t = "error";
  nn(t, e);
  rn(t, Pu);
}
function Pu(...args) {
  (Xr = ie.onerror);

  (ie.onerror = function (e, t, n, r, o) {
    tt("error", { column: r, error: o, line: n, msg: e, url: t });
    return Xr ? Xr.apply(this, args) : false;
  });

  (ie.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let Kr = null;
function Au(e) {
  const t = "unhandledrejection";
  nn(t, e);
  rn(t, xu);
}
function xu(...args) {
  (Kr = ie.onunhandledrejection);

  (ie.onunhandledrejection = function (e) {
    tt("unhandledrejection", e);
    return Kr ? Kr.apply(this, args) : true;
  });

  (ie.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const uc = Object.prototype.toString;
function Xn(e) {
  switch (uc.call(e)) {
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
function bn(e, t) {
  return uc.call(e) === `[object ${t}]`;
}
function dc(e) {
  return bn(e, "ErrorEvent");
}
function zs(e) {
  return bn(e, "DOMError");
}
function Ou(e) {
  return bn(e, "DOMException");
}
function Et(e) {
  return bn(e, "String");
}
function ns(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function Mr(e) {
  return (
    e === null || ns(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Wn(e) {
  return bn(e, "Object");
}
function Dr(e) {
  return typeof Event !== "undefined" && Ot(e, Event);
}
function $u(e) {
  return typeof Element !== "undefined" && Ot(e, Element);
}
function Lu(e) {
  return bn(e, "RegExp");
}
function Kn(e) {
  return !!(e?.then && typeof e.then == "function");
}
function Mu(e) {
  return (
    Wn(e) &&
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
function fc(e) {
  return !!(
    typeof e == "object" &&
    e !== null &&
    (e.__isVue || e._isVue || e.__v_isVNode)
  );
}
function hc(e) {
  return typeof Request !== "undefined" && Ot(e, Request);
}
const rs = ie;
const Du = 80;
function pc(e, t = {}) {
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
    const d = (!Array.isArray(t) && t.maxStringLength) || Du;

    while (n &&
         s++ < r &&
         ((u = Uu(n, f)),
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
function Uu(e, t) {
  const n = e;
  const r = [];
  if (!n?.tagName) {
    return "";
  }
  if (rs.HTMLElement && n instanceof HTMLElement && n.dataset) {
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
function os() {
  try {
    return rs.document.location.href;
  } catch {
    return "";
  }
}
function Fu(e, t = 5) {
  if (!rs.HTMLElement) {
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
    mc(o, e_t);
  }

  try {
    e[t] = o;
  } catch {
    if (K) {
      V.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function $t(e, t, n) {
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
function mc(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    $t(e, "__sentry_original__", t);
  } catch {}
}
function ss(e) {
  return e.__sentry_original__;
}
function gc(e) {
  if (Xn(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...Gs(e) };
  }
  if (Dr(e)) {
    const t = {
      type: e.type,
      target: qs(e.target),
      currentTarget: qs(e.currentTarget),
      ...Gs(e),
    };

    if (typeof CustomEvent !== "undefined" && Ot(e, CustomEvent)) {
      (t.detail = e.detail);
    }

    return t;
  } else {
    return e;
  }
}
function qs(e) {
  try {
    return $u(e) ? pc(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function Gs(e) {
  return typeof e == "object" && e !== null
    ? Object.fromEntries(Object.entries(e))
    : {};
}
function Bu(e) {
  const t = Object.keys(gc(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let cn;
function Ur(e) {
  if (cn !== undefined) {
    return cn ? cn(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = ie;
  return t in n && typeof n[t] == "function"
    ? ((cn = n[t]), cn(e))
    : ((cn = null), e());
}
function Ir() {
  return Ur(() => Math.random());
}
function Fr() {
  return Ur(() => Date.now());
}
function To(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Ys(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const o of e) {
    try {
      if (fc(o)) {
        n.push(lc(o));
      } else {
        n.push(String(o));
      }
    } catch {
      n.push("[value cannot be serialized]");
    }
  }

  return n.join(t);
}
function Un(e, t, n = false) {
  return Et(e)
    ? Lu(t)
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
function Br(e, t = [], n = false) {
  return t.some(r => Un(e, r, n));
}
function Hu() {
  const e = ie;
  return e.crypto || e.msCrypto;
}
let Zr;
function Vu() {
  return Ir() * 16;
}
function Ze(e = Hu()) {
  try {
    if (e?.randomUUID) {
      return Ur(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!Zr) {
    (Zr = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return Zr.replace(/[018]/g, t => (t ^ ((Vu() & 15) >> (t / 4))).toString(16));
}
function _c(e) {
  return e.exception?.values?.[0];
}
function Yt(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const r = _c(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function Io(e, t, n) {
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
function pn(e, t) {
  const n = _c(e);
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
function Xs(e) {
  if (Wu(e)) {
    return true;
  }
  try {
    $t(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function Wu(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const yc = 1000/* 1e3 */;
function Zn() {
  return Fr() / yc;
}
function ju() {
  const { performance } = ie;
  if (!performance?.now || !performance.timeOrigin) {
    return Zn;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Ur(() => performance.now())) / yc;
}
let Ks;
function St() {
  return (Ks ?? (Ks = ju()))();
}
function zu(e) {
  const t = St();

  const n = {
    sid: Ze(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => Gu(n),
  };

  if (e) {
    mn(n, e);
  }

  return n;
}
function mn(e, t = {}) {
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
    (e.sid = t.sid.length === 32 ? t.sid : Ze());
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
function qu(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  mn(e, n);
}
function Gu(e) {
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
function Jn(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const r = { ...e };
  for (const o in t) {
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      (r[o] = Jn(r[o], t[o], n - 1));
    }
  }
  return r;
}
function Zs() {
  return Ze();
}
function vc() {
  return Ze().substring(16);
}
const No = "_sentrySpan";
function Js(e, t) {
  if (t) {
    $t(e, No, t);
  } else {
    delete e[No];
  }
}
function Qs(e) {
  return e[No];
}
const Yu = 100;
class ct {
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
    (this._propagationContext = { traceId: Zs(), sampleRand: Ir() });
  }
  clone() {
    const t = new ct();
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
    Js(t, Qs(this));
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
      mn(this._session, { user: t });
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
    const r = n instanceof ct ? n.getScopeData() : Wn(n) ? t : undefined;

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
    Js(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: Zs(), sampleRand: Ir() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : Yu;
    if (r <= 0) {
      return this;
    }
    const o = {
      timestamp: Zn(),
      ...t,
      message: t.message ? To(t.message, 2048) : t.message,
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
      span: Qs(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = Jn(this._sdkProcessingMetadata, t, 2));
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
    const r = n?.event_id || Ze();
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
    const o = r?.event_id || Ze();
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
    const r = t.event_id || n?.event_id || Ze();
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
function Xu() {
  return En("defaultCurrentScope", () => new ct());
}
function Ku() {
  return En("defaultIsolationScope", () => new ct());
}

const ei = e => e instanceof Promise && !e[wc];

const wc = Symbol("chained PromiseLike");

const Zu = (e, t, n) => {
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
  return ei(r) && ei(e) ? r : Ju(e, r);
};

const Ju = (e, t) => {
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
    Object.assign(t, { [wc]: true });
  }

  return t;
};

class Qu {
  constructor(t, n) {
    let r;

    if (t) {
      (r = t);
    } else {
      (r = new ct());
    }

    let o;

    if (n) {
      (o = n);
    } else {
      (o = new ct());
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
    return Kn(r)
      ? Zu(
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
function gn() {
  const e = $r();
  const t = Lr(e);
  return (t.stack = t.stack || new Qu(Xu(), Ku()));
}
function ed(e) {
  return gn().withScope(e);
}
function td(e, t) {
  const n = gn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function ti(e) {
  return gn().withScope(() => e(gn().getIsolationScope()));
}
function nd() {
  return {
    withIsolationScope: ti,
    withScope: ed,
    withSetScope: td,
    withSetIsolationScope: (e, t) => ti(t),
    getCurrentScope: () => gn().getScope(),
    getIsolationScope: () => gn().getIsolationScope(),
  };
}
function is(e) {
  const t = Lr(e);
  return t.acs ? t.acs : nd();
}
function ut() {
  const e = $r();
  return is(e).getCurrentScope();
}
function dt() {
  const e = $r();
  return is(e).getIsolationScope();
}
function rd() {
  return En("globalScope", () => new ct());
}
function as(...e) {
  const t = $r();
  const n = is(t);
  if (e.length === 2) {
    const [r, o] = e;
    return r ? n.withSetScope(r, o) : n.withScope(o);
  }
  return n.withScope(e[0]);
}
function Re() {
  return ut().getClient();
}
function od(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || vc() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const sd = "sentry.source";
const id = "sentry.sample_rate";
const ad = "sentry.previous_trace_sample_rate";
const cd = "sentry.op";
const ld = "sentry.origin";
const Ec = "sentry.profile_id";
const Sc = "sentry.exclusive_time";
const ud = "gen_ai.conversation.id";
const dd = 0;
const fd = 1;
function hd(e) {
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
const pd = "_sentryScope";
const md = "_sentryIsolationScope";
function bc(e) {
  const t = e;
  return { scope: t[pd], isolationScope: hd(t[md]) };
}
const ni = "sentry-";
function gd(e) {
  const t = _d(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((r, [o, s]) => {
    if (o.startsWith(ni)) {
      const a = o.slice(ni.length);
      r[a] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function _d(e) {
  if (!(!e || (!Et(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const r = ri(n);

      Object.entries(r).forEach(([o, s]) => {
        t[o] = s;
      });

      return t;
    }, {})
      : ri(e);
  }
}
function ri(e) {
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
const yd = /^o(\d+)\./;

const vd =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function wd(e) {
  return e === "http" || e === "https";
}
function Cn(e, t = false) {
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
function Ed(e) {
  const t = vd.exec(e);
  if (!t) {
    Sn(() => {
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

  return Cc({
    host: s,
    pass: o,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r,
  });
}
function Cc(e) {
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
function Sd(e) {
  if (!K) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (V.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? wd(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (V.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (V.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (V.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function bd(e) {
  return e.match(yd)?.[1];
}
function Cd(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let r;

  if (t.orgId) {
    (r = String(t.orgId));
  } else if (host) {
    (r = bd(host));
  }

  return r;
}
function Tc(e) {
  const t = typeof e == "string" ? Ed(e) : Cc(e);
  if (!(!t || !Sd(t))) {
    return t;
  }
}
function Td(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const Ic = 1;
function Id(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const o = isRemote ? spanId : Hr(e).parent_span_id;
  const s = bc(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || vc() : spanId;
  return { parent_span_id: o, span_id: a, trace_id: traceId };
}
function Nd(e) {
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
        sampled: r === Ic,
        attributes: s,
        ...o
      })
    );
  }
}
function si(e) {
  if (typeof e == "number") {
    return ii(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return ii(e.getTime());
  }

  return St();
}
function ii(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function Hr(e) {
  if (Pd(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (Rd(e)) {
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
      parent_span_id: kd(e),
      start_timestamp: si(startTime),
      timestamp: si(endTime) || undefined,
      status: xd(status),
      op: attributes[cd],
      origin: attributes[ld],
      links: Nd(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function kd(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function Rd(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Pd(e) {
  return typeof e.getSpanJSON == "function";
}
function Ad(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === Ic;
}
function xd(e) {
  if (!(!e || e.code === dd)) {
    return e.code === fd ? "ok" : e.message || "internal_error";
  }
}
const Od = "_sentryRootSpan";
const Nc = $d;
function $d(e) {
  return e[Od] || e;
}
function ai() {
  if (!oi) {
    Sn(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (oi = true);
  }
}
function Ld(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = Re()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function ci(e) {
  V.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function li(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (Ud(n)) {
      if (e.description && Un(e.description, n)) {
        if (K) {
          ci(e);
        }

        return true;
      }
      continue;
    }
    const r = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !r) {
      continue;
    }
    const o = n.name ? e.description && Un(e.description, n.name) : true;
    const s = n.op ? e.op && Un(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => Md(e.attributes?.[c], l)
        )
      : true;

    if (o && s && a) {
      if (K) {
        ci(e);
      }

      return true;
    }
  }
  return false;
}
function Md(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Un(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e === t;
}
function Dd(e, t) {
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
function Ud(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const cs = "production";
const Fd = "_frozenDsc";
function kc(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const o = {
    environment: n.environment || cs,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: Cd(t),
  };

  t.emit("createDsc", o);
  return o;
}
function Bd(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || kc(n.traceId, e);
}
function Hd(e) {
  const t = Re();
  if (!t) {
    return {};
  }
  const n = Nc(e);

  const {
    data,
    description
  } = Hr(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[id] ?? data[ad];
  function c(m) {
    if ((typeof a == "number" || typeof a == "string")) {
      (m.sample_rate = `${a}`);
    }

    return m;
  }
  const n_Fd = n[Fd];
  if (n_Fd) {
    return c(n_Fd);
  }
  const u = s?.get("sentry.dsc");
  const f = u && gd(u);
  if (f) {
    return c(f);
  }
  const d = kc(e.spanContext().traceId, t);
  const p = data[sd] ?? data["sentry.span.source"];

  if (p !== "url" && description) {
    (d.transaction = description);
  }

  if (Ld()) {
    (d.sampled = String(Ad(n)));

    (d.sample_rand = s?.get("sentry.sample_rand") ??
    bc(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(d);
  t.emit("createDsc", d, n);
  return d;
}
function Vd(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
const Wd = Symbol.for("sentry.skipNormalization");
const jd = Symbol.for("sentry.overrideNormalizationDepth");
function zd(e) {
  return !!e[Wd];
}
function qd(e) {
  const e_jd = e[jd];
  return typeof e_jd == "number" ? e_jd : undefined;
}
function _t(e, t = 100, n = Infinity) {
  try {
    return ko("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function Rc(e, t = 3, n = 100 * 1024) {
  const r = _t(e, t);
  return Kd(r) > n ? Rc(e, t - 1, n) : r;
}
function ko(e, t, n = Infinity, r = Infinity, o = Zd()) {
  const [s, a] = o;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = Gd(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (zd(t)) {
    return t;
  }
  const l = qd(t);
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
      return ko("", m, u - 1, r, o);
    } catch {}
  }
  const d = Array.isArray(t) ? [] : {};
  let p = 0;
  const h = gc(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (p >= r) {
      d[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (d[m] = ko(m, h_m, u - 1, r, o));
    p++;
  }
  a(t);
  return d;
}
function Gd(e, t) {
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
    if (fc(t)) {
      return lc(t);
    }
    if (Mu(t)) {
      return "[SyntheticEvent]";
    }
    if (typeof t == "number" && !Number.isFinite(t)) {
      return `[${t}]`;
    }
    if (typeof t == "function") {
      return `[Function: ${xt(t)}]`;
    }
    if (typeof t == "symbol") {
      return `[${String(t)}]`;
    }
    if (typeof t == "bigint") {
      return `[BigInt: ${String(t)}]`;
    }
    const n = Yd(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Yd(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Xd(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Kd(e) {
  return Xd(JSON.stringify(e));
}
function Zd() {
  const e = new WeakSet();
  function t(r) {
    return e.has(r) ? true : (e.add(r), false);
  }
  function n(r) {
    e.delete(r);
  }
  return [t, n];
}
function Tn(e, t = []) {
  return [e, t];
}
function Jd(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function Ro(e, t) {
  const [, n] = e;
  for (const r of n) {
    const o = r[0].type;
    if (t(r, o)) {
      return true;
    }
  }
  return false;
}
function Qd(e, t) {
  return Ro(e, (n, r) => t.includes(r));
}
function Po(e) {
  const t = Lr(ie);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function ef(e) {
  const [t, n] = e;
  let r = JSON.stringify(t);
  function o(s) {
    if (typeof r == "string") {
      (r = typeof s == "string" ? r + s : [Po(r), s]);
    } else {
      r.push(typeof s == "string" ? Po(s) : s);
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
  return typeof r == "string" ? r : tf(r);
}
function tf(e) {
  const t = e.reduce((o, s) => o + s.length, 0);

  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e) {
    n.set(o, r);
    (r += o.length);
  }
  return n;
}
function nf(e) {
  const t = typeof e.data == "string" ? Po(e.data) : e.data;
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
const Pc = {
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
function rf(e) {
  return e in Pc;
}
function ui(e) {
  return rf(e) ? Pc[e] : e;
}
function Ac(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function of(e, t, n, r) {
  const o = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: Cn(r) }),
    ...(o && { trace: o }),
  };
}
function sf(e, t) {
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
function af(e, t, n, r) {
  const o = Ac(n);

  const s = {
    sent_at: new Date().toISOString(),
    ...(o && { sdk: o }),
    ...(!!r && t && { dsn: Cn(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return Tn(s, [a]);
}
function cf(e, t, n, r) {
  const o = Ac(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  sf(e, n?.sdk);
  const a = of(e, o, r, t);
  delete e.sdkProcessingMetadata;
  return Tn(a, [[{ type: s }, e]]);
}
function lf(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  uf(e, t);

  if (span) {
    hf(e, span);
  }

  pf(e, fingerprint);
  df(e, breadcrumbs);
  ff(e, sdkProcessingMetadata);
}
function di(e, t) {
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
  Nn(e, "extra", extra);
  Nn(e, "tags", tags);
  Nn(e, "attributes", attributes);
  Nn(e, "user", user);
  Nn(e, "contexts", contexts);
  (e.sdkProcessingMetadata = Jn(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function Nn(e, t, n) {
  e[t] = Jn(e[t], n, 1);
}
function xc(e, t) {
  const n = rd().getScopeData();

  if (e) {
    di(n, e.getScopeData());
  }

  if (t) {
    di(n, t.getScopeData());
  }

  return n;
}
function uf(e, t) {
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
function df(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function ff(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function hf(e, t) {
  (e.contexts = { trace: Id(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: Hd(t),
      ...e.sdkProcessingMetadata,
    });

  const n = Nc(t);
  const r = Hr(n).description;

  if (r && !e.transaction && e.type === "transaction") {
    (e.transaction = r);
  }
}
function pf(e, t) {
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
function Jr(e) {
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
function mf(e, t = true) {
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
function Oc(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([r, o]) => {
    if (o != null && !(r in n)) {
      (n[r] = o);
    }
  });
}
const Qr = 0;
const fi = 1;
const hi = 2;
function Qn(e) {
  return new jn((t) => {
    t(e);
  });
}
function ls(e) {
  return new jn((t, n) => {
    n(e);
  });
}
class jn {
  constructor(t) {
    (this._state = Qr);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new jn((r, o) => {
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
    return new jn((n, r) => {
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
    if (this._state === Qr) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === fi && n[1](this._value);
        this._state === hi && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === Qr) {
          if (Kn(a)) {
            a.then(r, o);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const r = (s) => {
      n(fi, s);
    };

    const o = (s) => {
      n(hi, s);
    };

    try {
      t(r, o);
    } catch (s) {
      o(s);
    }
  }
}
function gf(e, t, n, r = 0) {
  try {
    const o = Ao(t, n, e, r);
    return Kn(o) ? o : Qn(o);
  } catch (o) {
    return ls(o);
  }
}
function Ao(e, t, n, r) {
  const n_r = n[r];
  if (!e || !n_r) {
    return e;
  }
  const s = n_r({ ...e }, t);

  if (K && s === null) {
    V.log(`Event processor "${n_r.id || "?"}" dropped event`);
  }

  return Kn(s) ? s.then(a => Ao(a, t, n, r + 1)) : Ao(s, t, n, r + 1);
}
let Ut;
let pi;
let mi;
let Tt;
function _f(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = ie;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const r = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const o = _debugIds ? Object.keys(_debugIds) : [];
  if (Tt && r.length === pi && o.length === mi) {
    return Tt;
  }
  (pi = r.length);
  (mi = o.length);
  (Tt = {});

  if (!Ut) {
    (Ut = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const f = Ut?.[l];
      if (f && Tt && c_l) {
        (Tt[f[0]] = c_l);

        if (Ut) {
          (Ut[l] = [f[0], c_l]);
        }
      } else if (c_l) {
        const d = e(l);
        for (let p = d.length - 1; p >= 0; p--) {
          const m = d[p]?.filename;
          if (m && Tt && Ut) {
            (Tt[m] = c_l);
            (Ut[l] = [m, c_l]);
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

  return Tt;
}
function yf(e, t, n, r, o, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || Ze(),
    timestamp: t.timestamp || Zn(),
  };

  const u = n.integrations || e.integrations.map(_ => _.name);

  vf(l, e);
  Sf(l, u);

  if (o) {
    o.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    wf(l, e.stackParser);
  }

  const f = Cf(r, n.captureContext);

  if (n.mechanism) {
    pn(l, n.mechanism);
  }

  const d = o ? o.getEventProcessors() : [];
  const p = xc(s, f);
  const h = [...(n.attachments || []), ...p.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  lf(l, p);
  const m = [...d, ...p.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? Qn(l) : gf(m, l, n)).then(
    _ => {
      if (_) {
        Ef(_);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? bf(_, normalizeDepth, normalizeMaxBreadth) : _;
    }
  );
}
function vf(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || cs);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = To(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = To(c.value, maxValueLength));
      }
    });
  }
}
function wf(e, t) {
  const n = _f(t);
  e.exception?.values?.forEach((r) => {
    r.stacktrace?.frames?.forEach((o) => {
      if (o.filename) {
        (o.debug_id = n[o.filename]);
      }
    });
  });
}
function Ef(e) {
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
function Sf(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function bf(e, t, n) {
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
function Cf(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new ct();
  n.update(t);
  return n;
}
function Tf(e) {
  if (e) {
    return If(e) ? { captureContext: e } : kf(e) ? { captureContext: e } : e;
  }
}
function If(e) {
  return e instanceof ct || typeof e == "function";
}
const Nf = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function kf(e) {
  return Object.keys(e).some(t => Nf.includes(t));
}
function $c(e, t) {
  return ut().captureException(e, Tf(t));
}
function Lc(e, t) {
  return ut().captureEvent(e, t);
}
function Rf(e, t) {
  dt().setContext(e, t);
}
function gi(e) {
  dt().setUser(e);
}
function Pf() {
  return dt().lastEventId();
}
function _i(e) {
  const t = dt();
  const { user } = xc(t, ut());
  const { userAgent } = ie.navigator || {};
  const o = zu({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    mn(s, { status: "exited" });
  }

  Mc();
  t.setSession(o);
  return o;
}
function Mc() {
  const e = dt();
  const n = ut().getSession() || e.getSession();

  if (n) {
    qu(n);
  }

  Dc();
  e.setSession();
}
function Dc() {
  const e = dt();
  const t = Re();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function eo(e = false) {
  if (e) {
    Mc();
    return;
  }
  Dc();
}
const Af = "7";
function Uc(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function xf(e) {
  return `${Uc(e)}${e.projectId}/envelope/`;
}
function Of(e, t) {
  const n = { sentry_version: Af };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function $f(e, t, n) {
  return t || `${xf(e)}?${Of(e, n)}`;
}
function Lf(e, t) {
  const n = Tc(e);
  if (!n) {
    return "";
  }
  const r = `${Uc(n)}embed/error-page/`;
  let o = `dsn=${Cn(n)}`;
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
const yi = [];
function Mf(e) {
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
function Df(e) {
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
  return Mf(r);
}
function Uf(e, t) {
  const n = {};

  t.forEach((r) => {
    if (r?.beforeSetup) {
      r.beforeSetup(e);
    }
  });

  t.forEach((r) => {
    if (r) {
      Fc(e, r, n);
    }
  });

  return n;
}
function vi(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function Fc(e, t, n) {
  if (n[t.name]) {
    if (K) {
      V.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!yi.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    yi.push(t.name);
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
    V.log(`Integration installed: ${t.name}`);
  }
}
function Ff() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Bf() {
  return "npm";
}
function Hf() {
  return (!Ff() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function Bc() {
  return typeof window !== "undefined" && (!Hf() || Vf());
}
function Vf() {
  return ie.process?.type === "renderer";
}
function Wf(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(Bc() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
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
    (s.dsn = Cn(r));
  }

  return Tn(s, [Wf(e, o)]);
}
function xo(e, t) {
  const n = t ?? zf(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();
  const o = jf(n, r._metadata, r.tunnel, e.getDsn(), r.sendDefaultPii);
  Hc().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(o);
}
function zf(e) {
  return Hc().get(e);
}
function Hc() {
  return En("clientToLogBufferMap", () => new WeakMap());
}
function qf(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(Bc() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Gf(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = Cn(r));
  }

  return Tn(s, [qf(e, o)]);
}
function Vc(e, t) {
  const n = t ?? Yf(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();
  const o = Gf(n, r._metadata, r.tunnel, e.getDsn(), r.sendDefaultPii);
  Wc().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(o);
}
function Yf(e) {
  return Wc().get(e);
}
function Wc() {
  return En("clientToMetricBufferMap", () => new WeakMap());
}
function jc(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const us = Symbol.for("SentryBufferFullError");
function ds(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function r(a) {
    t.delete(a);
  }
  function o(a) {
    if (!n()) {
      return ls(us);
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
      return Qn(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => jc(setTimeout(() => u(false), a)))];
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
const Xf = 60 * 1000/* 1e3 */;
function Kf(e, t = Fr()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const r = Date.parse(`${e}`);
  return isNaN(r) ? Xf : r - t;
}
function Zf(e, t) {
  return e[t] || e.all || 0;
}
function Jf(e, t, n = Fr()) {
  return Zf(e, t) > n;
}
function Qf(e, { statusCode: t, headers: n }, r = Fr()) {
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
      (o.all = r + Kf(a, r));
    } else if (t === 429) {
      (o.all = r + 60 * 1000/* 1e3 */);
    }
  }
  return o;
}
const zc = 64;
function eh(e, t, n = ds(e.bufferSize || zc)) {
  let r = {};
  const o = a => n.drain(a);
  function s(a) {
    const c = [];

    Ro(a, (d, p) => {
      const h = ui(p);

      if (Jf(r, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(d);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = Tn(a[0], c);

    const u = (d) => {
      if (Qd(l, ["client_report"])) {
        if (K) {
          V.warn(
            `Dropping client report. Will not send outcomes (reason: ${d}).`
          );
        }

        return;
      }
      Ro(l, (p, h) => {
        e.recordDroppedEvent(d, ui(h));
      });
    };

    const f = () => t({ body: ef(l) }).then(
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
          (r = Qf(r, d)),
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
        if (d === us) {
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
function th(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: Zn(), discarded_events: e },
  ];
  return Tn(t ? { dsn: t } : {}, [r]);
}
function qc(e) {
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
function nh(e) {
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
    profile_id: data?.[Ec],
    exclusive_time: data?.[Sc],
    measurements: e.measurements,
    is_segment: true,
  };
}
function rh(e) {
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
          ...(e.profile_id && { [Ec]: e.profile_id }),
          ...(e.exclusive_time && { [Sc]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const wi = "Not capturing exception because it's already been captured.";
const Ei = "Discarded session because of missing or non-string release";
const Gc = Symbol.for("SentryInternalError");
const Yc = Symbol.for("SentryDoNotSendEventError");
const oh = 5000/* 5e3 */;
function _r(e) {
  return { message: e, [Gc]: true };
}
function to(e) {
  return { message: e, [Yc]: true };
}
function Si(e) {
  return !!e && typeof e == "object" && Gc in e;
}
function bi(e) {
  return !!e && typeof e == "object" && Yc in e;
}
function Ci(e, t, n, r, o) {
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

      (a = jc(
            setTimeout(() => {
              o(e);
            }, oh)
          ));
    }
  });

  e.on("flush", () => {
    o(e);
  });
}
class sh {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = ds(t.transportOptions?.bufferSize ?? zc));

    if (t.dsn) {
      (this._dsn = Tc(t.dsn));
    } else if (K) {
      V.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const r = $f(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: r,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs);

    if (this._options.enableLogs) {
      Ci(this, "afterCaptureLog", "flushLogs", lh, xo);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      Ci(this, "afterCaptureMetric", "flushMetrics", ch, Vc);
    }
  }
  captureException(t, n, r) {
    const o = Ze();
    if (Xs(t)) {
      if (K) {
        V.log(wi);
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
    const s = { event_id: Ze(), ...r };
    const a = ns(t) ? t : String(t);
    const c = Mr(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, o)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, r) {
    const o = Ze();
    if (n?.originalException && Xs(n.originalException)) {
      if (K) {
        V.log(wi);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = Ti(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || r, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    mn(t, { init: false });
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
    xo(this);
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

    Fc(this, t, this._integrations);

    if (!n) {
      vi(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = cf(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const o of n.attachments || []) {
      r = Jd(r, nf(o));
    }
    this.sendEnvelope(r).then(o => this.emit("afterSendEvent", t, o));
  }
  sendSession(t) {
    const { release, environment = cs } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (K) {
          V.warn(Ei);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (K) {
          V.warn(Ei);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const o = af(t, this._dsn, this._options._metadata, this._options.tunnel);
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
    (this._integrations = Uf(this, integrations));
    vi(this, integrations);
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
      mn(t, {
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

    return yf(s, t, n, r, this, o).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...od(r) },
          ...c.contexts,
        });

      const l = Bd(this, r);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, r = ut(), o = dt()) {
    if (K &&
      Oo(t)) {
      V.log(`Captured error event \`${qc(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, r, o).then(
      s => s.event_id,
      (s) => {
        if (K) {
          if (bi(s)) {
            V.log(s.message);
          } else if (Si(s)) {
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
    const c = Xc(t);
    const l = Oo(t);
    const f = `before send for type \`${t.type || "error"}\``;
    const d = typeof sampleRate === "undefined" ? undefined : Td(sampleRate);
    if (l && typeof d == "number" && Ir() > d) {
      this.recordDroppedEvent("sample_rate", "error");

      return ls(
        to(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        )
      );
    }
    const p = Ti(t.type);
    return this._prepareEvent(t, n, r, o)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", p);
          throw to("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const g = ah(this, s, h, n);
        return ih(g, f);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", p);

        if (c) {
          const _ = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", _);
        }

        throw to(`${f} returned \`null\`, will not send event.`);
      }
      const m = r.getSession() || o.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (c) {
        const E = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const _ = h.spans ? h.spans.length : 0;
        const y = E - _;

        if (y > 0) {
          this.recordDroppedEvent("before_send", "span", y);
        }
      }

      const h_transaction_info = h.transaction_info;
      if (c && h_transaction_info && h.transaction !== t.transaction) {
        const E = "custom";
        h.transaction_info = { ...h_transaction_info, source: E };
      }
      this.sendEvent(h, n);
      return h;
    })
      .then(null, (h) => {
        throw bi(h) || Si(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            _r(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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

        if (r === us) {
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

    const n = th(t, this._options.tunnel && Cn(this._dsn));
    this.sendEnvelope(n);
  }
}
function Ti(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function ih(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Kn(e)) {
    return e.then(
      (r) => {
        if (!Wn(r) && r !== null) {
          throw _r(n);
        }
        return r;
      },
      (r) => {
        throw _r(`${t} rejected with ${r}`);
      }
    );
  }
  if (!Wn(e) && e !== null) {
    throw _r(n);
  }
  return e;
}
function ah(e, t, n, r) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !Vd(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (Oo(l) && beforeSend) {
    return beforeSend(l, r);
  }
  if (Xc(l)) {
    if (c || ignoreSpans) {
      const u = nh(l);
      if (ignoreSpans?.length &&
      li({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const f = c(u);

        if (f) {
          (l = Jn(n, rh(f)));
        } else {
          ai();
        }
      }
      if (l.spans) {
        const f = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            li({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            Dd(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              f.push(m);
            } else {
              ai();
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
function Oo(e) {
  return e.type === undefined;
}
function Xc(e) {
  return e.type === "transaction";
}
function ch(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + Kc(e.attributes);
}
function lh(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + Kc(e.attributes);
}
function Kc(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * Ii(n[0]));
    } else if (Mr(n)) {
      (t += Ii(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function Ii(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function uh(e) {
  return (
    Xn(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function Ni(e) {
  return uh(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
function dh(e, t) {
  if (t.debug === true) {
    if (K) {
      V.enable();
    } else {
      Sn(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  ut().update(t.initialScope);
  const r = new e(t);
  fh(r);
  r.init();
  return r;
}
function fh(e) {
  ut().setClient(e);
}
function hh(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function Zc(e, t, n = [t], r = "npm") {
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
const ph = 100;
function tn(e, t) {
  const n = Re();
  const r = dt();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = ph } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: Zn(), ...e };

  const l = beforeBreadcrumb ? Sn(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    r.addBreadcrumb(l, maxBreadcrumbs);
  }
}
let ki;
const mh = "FunctionToString";
const Ri = new WeakMap();

const _h = () => ({
  name: mh,

  setupOnce() {
    ki = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...e) {
        const t = ss(this);
        const n = Ri.has(Re()) && t !== undefined ? t : this;
        return ki.apply(n, e);
      };
    } catch {}
  },

  setup(e) {
    Ri.set(e, true);
  }
});

const yh = [
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

const vh = "EventFilters";

const wh = (e = {}) => {
  let t;
  return {
    name: vh,
    setup(n) {
      const r = n.getOptions();
      t = Pi(e, r);
    },
    processEvent(n, r, o) {
      if (!t) {
        const s = o.getOptions();
        t = Pi(e, s);
      }
      return Sh(n, t) ? null : n;
    },
  };
};

const Eh = (e = {}) => ({
  ...wh(e),
  name: "InboundFilters"
});

function Pi(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : yh),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function Sh(e, t) {
  if (e.type) {
    if (e.type === "transaction" && Ch(e, t.ignoreTransactions)) {
      if (K) {
        V.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Yt(e)}`);
      }

      return true;
    }
  } else {
    if (bh(e, t.ignoreErrors)) {
      if (K) {
        V.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Yt(e)}`);
      }

      return true;
    }
    if (kh(e)) {
      if (K) {
        V.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Yt(e)}`);
      }

      return true;
    }
    if (Th(e, t.denyUrls)) {
      if (K) {
        V.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Yt(e)}.
Url: ${Nr(e)}`);
      }

      return true;
    }
    if (!Ih(e, t.allowUrls)) {
      if (K) {
        V.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Yt(e)}.
Url: ${Nr(e)}`);
      }

      return true;
    }
  }
  return false;
}
function bh(e, t) {
  return t?.length ? qc(e).some(n => Br(n, t)) : false;
}
function Ch(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? Br(e_transaction, t) : false;
}
function Th(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = Nr(e);
  return n ? Br(n, t) : false;
}
function Ih(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = Nr(e);
  return n ? Br(n, t) : true;
}
function Nh(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function Nr(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        r => r.mechanism?.parent_id === undefined && r.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? Nh(n) : null;
  } catch {
    if (K) {
      V.error(`Cannot extract url for event ${Yt(e)}`);
    }

    return null;
  }
}
function kh(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function Rh(e, t, n, r, o, s) {
  if (!o.exception?.values || !s || !Ot(s.originalException, Error)) {
    return;
  }
  const a =
    o.exception.values.length > 0
      ? o.exception.values[o.exception.values.length - 1]
      : undefined;

  if (a) {
    (o.exception.values = $o(
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
function $o(e, t, n, r, o, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (Ot(r[o], Error)) {
    Ai(a, c, r);
    const u = e(t, r[o]);
    const l_length = l.length;
    xi(u, o, l_length, c);
    (l = $o(e, t, n, r[o], o, [u, ...l], u, l_length));
  }

  if (Jc(r)) {
    r.errors.forEach((u, f) => {
      if (Ot(u, Error)) {
        Ai(a, c, r);
        const d = e(t, u);
        const l_length = l.length;
        xi(d, `errors[${f}]`, l_length, c);
        (l = $o(e, t, n, u, o, [d, ...l], d, l_length));
      }
    });
  }

  return l;
}
function Jc(e) {
  return Array.isArray(e.errors);
}
function Ai(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(Jc(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function xi(e, t, n, r) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
function Ph(e) {
  const t = "console";
  const n = nn(t, e);
  rn(t, Ah);
  return n;
}
function Ah() {
  if ("console" in ie) {
    wu.forEach(e => {
      if (e in ie.console) {
        je(ie.console, e, t => {
          (Tr[e] = t);

          return (...n) => {
            tt("console", { args: n, level: e });
            Tr[e]?.apply(ie.console, n);
          };
        });
      }
    });
  }
}
function xh(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const Oh = "Dedupe";

const Lh = () => {
  let e;
  return {
    name: Oh,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (Mh(t, e)) {
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

function Mh(e, t) {
  return t ? !!(Dh(e, t) || Uh(e, t)) : false;
}
function Dh(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !el(e, t) ||
    !Qc(e, t)
  );
}
function Uh(e, t) {
  const n = Oi(t);
  const r = Oi(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !el(e, t) ||
    !Qc(e, t)
  );
}
function Qc(e, t) {
  let n = Ws(e);
  let r = Ws(t);
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
function el(e, t) {
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
function Oi(e) {
  return e.exception?.values?.[0];
}
const Fh = "ConversationId";

const Hh = () => ({
  name: Fh,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = ut().getScopeData();
      const r = dt().getScopeData();
      const o = n.conversationId || r.conversationId;
      if (o) {
        const { op: op_1, data, description } = Hr(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(ud, o);
      }
    });
  }
});

function tl(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const zn = ie;
function Vh() {
  return "history" in zn && !!zn.history;
}
function Wh() {
  if (!("fetch" in zn)) {
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
function Lo(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function jh() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!Wh()) {
    return false;
  }
  if (Lo(zn.fetch)) {
    return true;
  }
  let e = false;
  const zn_document = zn.document;
  if (zn_document && typeof zn_document.createElement == "function") {
    try {
      const n = zn_document.createElement("iframe");
      (n.hidden = true);
      zn_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = Lo(n.contentWindow.fetch));
      }

      zn_document.head.removeChild(n);
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
function zh(e, t) {
  const n = "fetch";
  const r = nn(n, e);

  rn(n, () => qh(undefined, t));

  return r;
}
function qh(e, t = false) {
  if (!t || jh()) {
    je(ie, "fetch", n => (...r) => {
      const o = new Error();
      const { method, url } = Gh(r);

      const c = {
        args: r,
        fetchData: { method: method, url: url },
        startTimestamp: St() * 1000/* 1e3 */,
        virtualError: o,
        headers: Yh(r),
      };

      tt("fetch", { ...c });

      return n.apply(ie, r).then(
        async l => {
          tt("fetch", { ...c, endTimestamp: St() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          tt("fetch", { ...c, endTimestamp: St() * 1000/* 1e3 */, error: l });

          if (Xn(l) &&
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
function yr(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function $i(e) {
  return typeof e == "string"
    ? e
    : e
    ? yr(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function Gh(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: $i(n),
      method: yr(r, "method")
        ? String(r.method).toUpperCase()
        : hc(n) && yr(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: $i(t),
    method: yr(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function Yh(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (hc(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const ue = ie;
let Mo = 0;
function nl() {
  return Mo > 0;
}
function Xh() {
  Mo++;

  setTimeout(() => {
    Mo--;
  });
}
function _n(e, t = {}) {
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
    if (ss(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const r = function (...o) {
    try {
      const s = o.map(a => _n(a, t));
      return e.apply(this, s);
    } catch (s) {
      Xh();

      as((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              Io(c, undefined);
              pn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: o });
            return c;
          }
        );

        $c(s);
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
  mc(r, e);
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
function Li() {
  const e = os();
  const { referrer } = ue.document || {};
  const { userAgent } = ue.navigator || {};
  const r = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: r };
}
function fs(e, t) {
  const n = hs(e, t);
  const r = { type: ep(t), value: tp(t) };

  if (n.length) {
    (r.stacktrace = { frames: n });
  }

  if (r.type === undefined &&
    r.value === "") {
    (r.value = "Unrecoverable error caught");
  }

  return r;
}
function Kh(e, t, n, r) {
  const s = Re()?.getOptions().normalizeDepth;
  const a = ip(t);
  const c = { __serialized__: Rc(t, s) };
  if (a) {
    return { exception: { values: [fs(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: Dr(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
          value: op(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = hs(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function no(e, t) {
  return { exception: { values: [fs(e, t)] } };
}
function hs(e, t) {
  const n = t.stacktrace || t.stack || "";
  const r = Jh(t);
  const o = Qh(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const Zh = /Minified React error #\d+;/i;
function Jh(e) {
  return e && Zh.test(e.message) ? 1 : 0;
}
function Qh(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function rl(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function ep(e) {
  const t = e?.name;
  return !t && rl(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function tp(e) {
  const t = e?.message;
  return rl(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? Ni(t.error)
      : Ni(e)
    : "No error message";
}
function np(e, t, n, r) {
  const o = n?.syntheticException || undefined;
  const s = ps(e, t, o, r);
  pn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return Qn(s);
}
function rp(e, t, n = "info", r, o) {
  const s = r?.syntheticException || undefined;
  const a = Do(e, t, s, o);
  (a.level = n);

  if (r?.event_id) {
    (a.event_id = r.event_id);
  }

  return Qn(a);
}
function ps(e, t, n, r, o) {
  let s;
  if (dc(t) && t.error) {
    return no(e, t.error);
  }
  if (zs(t) || Ou(t)) {
    const a = t;
    if ("stack" in t) {
      s = no(e, t);
    } else {
      const c = a.name || (zs(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = Do(e, l, n, r));
      Io(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (Xn(t)) {
    return no(e, t);
  }

  if (Wn(t) || Dr(t)) {
    (s = Kh(e, t, n, o));
    pn(s, { synthetic: true });
    return s;
  }

  (s = Do(e, t, n, r));
  Io(s, `${t}`);
  pn(s, { synthetic: true });
  return s;
}
function Do(e, t, n, r) {
  const o = {};
  if (r && n) {
    const s = hs(e, n);

    if (s.length) {
      (o.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    pn(o, { synthetic: true });
  }
  if (ns(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (o.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return o;
  }
  (o.message = t);
  return o;
}
function op(e, { isUnhandledRejection: t }) {
  const n = Bu(e);
  const r = t ? "promise rejection" : "exception";
  return dc(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : Dr(e)
    ? `Event \`${sp(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function sp(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function ip(e) {
  return Object.values(e).find(t => t instanceof Error);
}
class ap extends sh {
  constructor(t) {
    const n = cp(t);
    const r = ue.SENTRY_SDK_SOURCE || Bf();
    Zc(n, "browser", ["browser"], r);

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
          enableLogs && xo(this);
          u && Vc(this);
        }
      });
    }

    if (sendDefaultPii) {
      this.on("beforeSendSession", hh);
    }
  }
  eventFromException(t, n) {
    return np(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return rp(
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
function cp(e) {
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
const lp = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Ue = ie;
const up = 1000/* 1e3 */;
let Mi;
let Uo;
let Fo;
function dp(e) {
  nn("dom", e);
  rn("dom", fp);
}
function fp() {
  if (!Ue.document) {
    return;
  }
  const e = tt.bind(null, "dom");
  const t = Di(e, true);
  Ue.document.addEventListener("click", t, false);
  Ue.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const o = Ue[n]?.prototype;

    if (o?.hasOwnProperty?.("addEventListener")) {
      je(o, "addEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const f = (u[a] = u[a] || { refCount: 0 });
            if (!f.handler) {
              const d = Di(e);
              (f.handler = d);
              s.call(this, a, d, l);
            }
            f.refCount++;
          } catch {}
        }
        return s.call(this, a, c, l);
      }));

      je(o, "removeEventListener", s => (function(a, c, l) {
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
function hp(e) {
  if (e.type !== Uo) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== Fo) {
      return false;
    }
  } catch {}
  return true;
}
function pp(e, t) {
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
function Di(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = mp(n);
    if (pp(n.type, r)) {
      return;
    }
    $t(n, "_sentryCaptured", true);

    if (r && !r._sentryId) {
      $t(r, "_sentryId", Ze());
    }

    const o = n.type === "keypress" ? "input" : n.type;

    if (!hp(n)) {
      e({ event: n, name: o, global: t });
      (Uo = n.type);
      (Fo = r ? r._sentryId : undefined);
    }

    clearTimeout(Mi);

    (Mi = Ue.setTimeout(() => {
      (Fo = undefined);
      (Uo = undefined);
    }, up));
  };
}
function mp(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let sr;
function ol(e) {
  const t = "history";
  nn(t, e);
  rn(t, gp);
}
function gp() {
  Ue.addEventListener("popstate", () => {
    const t = Ue.location.href;
    const n = sr;
    (sr = t);

    if (n === t) {
      return;
    }

    tt("history", { from: n, to: t });
  });

  if (!Vh()) {
    return;
  }

  function e(t) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : undefined;
      if (r) {
        const o = sr;
        const s = _p(String(r));
        (sr = s);

        if (o === s) {
          return t.apply(this, n);
        }

        tt("history", { from: o, to: s });
      }
      return t.apply(this, n);
    };
  }
  je(Ue.history, "pushState", e);
  je(Ue.history, "replaceState", e);
}
function _p(e) {
  try {
    return new URL(e, Ue.location.origin).toString();
  } catch {
    return e;
  }
}
const vr = {};
function yp(e) {
  const vr_e = vr[e];
  if (vr_e) {
    return vr_e;
  }
  let n = Ue[e];
  if (Lo(n)) {
    return (vr[e] = n.bind(Ue));
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
      if (lp) {
        V.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          o
        );
      }
    }
  }
  return n && (vr[e] = n.bind(Ue));
}
function vp(e) {
  vr[e] = undefined;
}
const On = "__sentry_xhr_v3__";
function wp(e) {
  nn("xhr", e);
  rn("xhr", Ep);
}
function Ep() {
  if (!Ue.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, r) {
      const o = new Error();
      const s = St() * 1000/* 1e3 */;
      const a = Et(r[0]) ? r[0].toUpperCase() : undefined;
      const c = Sp(r[1]);
      if (!a || !c) {
        return t.apply(n, r);
      }
      (n[On] = { method: a, url: c, request_headers: {} });

      if (a === "POST" &&
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
            endTimestamp: St() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: o,
          };
          tt("xhr", f);
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

          if (f_On && Et(p) && Et(h)) {
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

        const s = { startTimestamp: St() * 1000/* 1e3 */, xhr: n };
        tt("xhr", s);
        return t.apply(n, r);
      },
    }));
}
function Sp(e) {
  if (Et(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
const bp = 40;
function Cp(e, t = yp("fetch")) {
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
      vp("fetch");
      throw l;
    } finally {
      (n -= a);
      r--;
    }
  }
  return eh(e, o, ds(e.bufferSize || bp));
}
const yn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Tp = 30;
const Ip = 50;
function Bo(e, t, n, r) {
  const o = { filename: e, function: t === "<anonymous>" ? en : t, in_app: true };

  if (n !== undefined) {
    (o.lineno = n);
  }

  if (r !== undefined) {
    (o.colno = r);
  }

  return o;
}
const Np = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const kp =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const Rp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const Pp = /at (.+?) ?\(data:(.+?),/;

const Ap = (e) => {
  const t = e.match(Pp);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = Np.exec(e);
  if (n) {
    const [, o, s, a] = n;
    return Bo(o, en, Number(s), Number(a));
  }
  const r = kp.exec(e);
  if (r) {
    if (r[2]?.indexOf("eval") === 0) {
      const c = Rp.exec(r[2]);

      if (c) {
        (r[2] = c[1]);
        (r[3] = c[2]);
        (r[4] = c[3]);
      }
    }
    const [s, a] = sl(r[1] || en, r[2]);
    return Bo(a, s, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};

const xp = [Tp, Ap];

const Op =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const $p = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const Lp = (e) => {
  const t = Op.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = $p.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, r] = t;
    let o = t[1] || en;
    ([o, r] = sl(o, r));
    return Bo(r, o, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const Mp = [Ip, Lp];
const Dp = [xp, Mp];
const Up = cc(...Dp);

const sl = (e, t) => {
  const n = e.includes("safari-extension");
  const r = e.includes("safari-web-extension");
  return n || r
    ? [
        e.includes("@") ? e.split("@")[0] : en,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const ir = 1024;
const Fp = "Breadcrumbs";

const Hp = (e = {}) => {
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
    name: Fp,
    setup(n) {
      if (t.console) {
        Ph(jp(n));
      }

      if (t.dom) {
        dp(Wp(n, t.dom));
      }

      if (t.xhr) {
        wp(zp(n));
      }

      if (t.fetch) {
        zh(qp(n));
      }

      if (t.history) {
        ol(Gp(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", Vp(n));
      }
    },
  };
};

function Vp(e) {
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
function Wp(e, t) {
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
      c > ir) {
      yn &&
          V.warn(
            `\`dom.maxStringLength\` cannot exceed ${ir}, but a value of ${c} was configured. Sentry will use ${ir} instead.`
          );

      (c = ir);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const r_event = r.event;
      const f = Yp(r_event) ? r_event.target : r_event;
      (o = pc(f, { keyAttrs: a, maxStringLength: c }));
      (s = Fu(f));
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
function jp(e) {
  return function (n) {
    if (Re() !== e) {
      return;
    }
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: xh(n.level),
      message: Ys(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (r.message = `Assertion failed: ${
          Ys(n.args.slice(1), " ") || "console.assert"
        }`);

        (r.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    tn(r, { input: n.args, level: n.level });
  };
}
function zp(e) {
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
    const p = { category: "xhr", data: f, type: "http", level: tl(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", p, d);
    tn(p, d);
  };
}
function qp(e) {
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
          level: tl(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        tn(l, c);
      }
    }
  };
}
function Gp(e) {
  return n => {
    if (Re() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = Jr(ue.location.href);
    let a = from ? Jr(from) : undefined;
    const c = Jr(to_2);

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
function Yp(e) {
  return !!e && !!e.target;
}

const Xp =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const Kp = "BrowserApiErrors";

const Jp = (e = {}) => {
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
    name: Kp,
    setupOnce() {
      if (t.setTimeout) {
        je(ue, "setTimeout", Ui);
      }

      if (t.setInterval) {
        je(ue, "setInterval", Ui);
      }

      if (t.requestAnimationFrame) {
        je(ue, "requestAnimationFrame", Qp);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in ue) {
        je(XMLHttpRequest.prototype, "send", em);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : Xp).forEach(o => tm(o, t));
      }
    },
  };
};

function Ui(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = _n(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${xt(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function Qp(e) {
  return function (t) {
    return e.apply(this, [
      _n(t, {
        mechanism: {
          data: { handler: xt(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function em(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((o) => {
      if (o in n &&
        typeof n[o] == "function") {
        je(n, o, s => {
          const a = {
              mechanism: {
                data: { handler: xt(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${o}`,
              },
            };

          const c = ss(s);

          if (c) {
            (a.mechanism.data.handler = xt(c));
          }

          return _n(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function tm(e, t) {
  const r = ue[e]?.prototype;

  if (r?.hasOwnProperty?.("addEventListener")) {
    je(r, "addEventListener", o => (function(s, a, c) {
      try {
        if (nm(a)) {
          (a.handleEvent = _n(a.handleEvent, {
              mechanism: {
                data: { handler: xt(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        rm(this, s, a);
      }

      return o.apply(this, [
        s,
        _n(a, {
          mechanism: {
            data: { handler: xt(a), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    je(r, "removeEventListener", o => (function(s, a, c) {
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
function nm(e) {
  return typeof e.handleEvent == "function";
}
function rm(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const om = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof ue.document === "undefined") {
          if (yn) {
            V.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        _i({ ignoreDuration: true });
        eo();
        const n = dt();
        let r = n.getUser();

        n.addScopeListener((o) => {
          const s = o.getUser();

          if ((r?.id !== s?.id || r?.ip_address !== s?.ip_address)) {
            eo();
            (r = s);
          }
        });

        if (t === "route") {
          ol(({ from: o, to: s }) => {
            if (o !== s) {
              _i({ ignoreDuration: true });
              eo();
            }
          });
        }
      },
    };
  };

const sm = "CultureContext";

const am = () => ({
  name: sm,

  preprocessEvent(e) {
    const t = Fi();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = Fi();

    if (t) {
      Oc(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function Fi() {
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
const cm = "GlobalHandlers";

const um = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: cm,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        dm(n);
        Bi("onerror");
      }

      if (t.onunhandledrejection) {
        fm(n);
        Bi("onunhandledrejection");
      }
    },
  };
};

function dm(e) {
  Ru((t) => {
    const { stackParser, attachStacktrace } = il();
    if (Re() !== e || nl()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = mm(ps(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    Lc(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function fm(e) {
  Au((t) => {
    const { stackParser, attachStacktrace } = il();
    if (Re() !== e || nl()) {
      return;
    }
    const o = hm(t);
    const s = Mr(o) ? pm(o) : ps(stackParser, o, undefined, attachStacktrace, true);
    (s.level = "error");

    Lc(s, {
      originalException: o,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function hm(e) {
  if (Mr(e)) {
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
function pm(e) {
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
function mm(e, t, n, r) {
  const o = (e.exception = e.exception || {});
  const s = (o.values = o.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: r,
      lineno: n,
      filename: gm(t) ?? os(),
      function: en,
      in_app: true,
    });
  }

  return e;
}
function Bi(e) {
  if (yn) {
    V.log(`Global Handler attached: ${e}`);
  }
}
function il() {
  return Re()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function gm(e) {
  if (!(!Et(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${mf(e, false)}>` : e;
  }
}

const _m = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = Li();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = Li();
    Oc(e, {
      "url.full": t.url || undefined,
      "http.request.header.user_agent": t.headers["User-Agent"],
      "http.request.header.referer": t.headers.Referer,
    });
  }
});

const ym = "cause";
const vm = 5;
const wm = "LinkedErrors";

const Sm = (e = {}) => {
  const t = e.limit || vm;
  const n = e.key || ym;
  return {
    name: wm,
    preprocessEvent(r, o, s) {
      const a = s.getOptions();
      Rh(fs, a.stackParser, n, t, r, o);
    },
  };
};

function bm() {
  return Cm()
    ? (yn &&
        Sn(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function Cm() {
  if (typeof ue.window === "undefined") {
    return false;
  }
  const e = ue;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = os();
  return !(
    ue === ue.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function Tm(e) {
  return [Eh(), _h(), Hh(), Jp(), Hp(), um(), Sm(), Lh(), _m(), am(), om()];
}
function Im(e = {}) {
  const t = !e.skipBrowserExtensionCheck && bm();
  let n = e.defaultIntegrations == null ? Tm() : e.defaultIntegrations;
  const r = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: Nu(e.stackParser || Up),
    integrations: Df({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || Cp,
  };
  return dh(ap, r);
}
function Hi(e = {}) {
  const ue_document = ue.document;
  const n = ue_document?.head || ue_document?.body;
  if (!n) {
    if (yn) {
      V.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const r = ut();
  const s = Re()?.getDsn();
  if (!s) {
    if (yn) {
      V.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...r.getUser(), ...e.user },
      eventId: e.eventId || Pf(),
    };

  const c = ue.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = Lf(s, a));
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
let Lt;
let _e;
let ro;
let Vi;
let vn = 0;
const al = [];
const ve = Z;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = ve;

function In(e, t) {
  if (ve.__h) {
    ve.__h(_e, e, vn || t);
  }

  (vn = 0);
  const n = _e.__H || (_e.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function $(e) {
  (vn = 1);
  return ms(ul, e);
}
function ms(e, t, n) {
  const r = In(Lt++, 2);
  (r.t = e);

  if (!r.__c &&
    ((r.__ = [
      n ? n(t) : ul(undefined, t),
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
  const n = In(Lt++, 3);

  if (!ve.__s && _s(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    _e.__H.__h.push(n);
  }
}
function on(e, t) {
  const n = In(Lt++, 4);

  if (!ve.__s && _s(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    _e.__h.push(n);
  }
}
function P(e) {
  (vn = 5);

  return Se(() => ({
    current: e
  }), []);
}
function gs(e, t, n) {
  (vn = 6);

  on(
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
  const n = In(Lt++, 7);

  if (_s(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function N(e, t) {
  (vn = 8);

  return Se(() => e, t);
}
function Vr(e) {
  const t = _e.context[e.__c];
  const n = In(Lt++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(_e)), t.props.value) : e.__;
}
function cl(e, t) {
  if (ve.useDebugValue) {
    ve.useDebugValue(t ? t(e) : e);
  }
}
function ll() {
  const e = In(Lt++, 11);
  if (!e.__) {
    for (var t = _e.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function Nm() {
  for (let e; (e = al.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(wr);
        e.__H.__h.forEach(Ho);
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
    if (ro === _e) {
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
      t.__h.forEach(wr);
      t.__h.forEach(Ho);
      (t.__h = []);
      (Lt = 0);
    }
  }

  (ro = _e);
});

(ve.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((al.push(e_c) !== 1 && Vi === ve.requestAnimationFrame) ||
          ((Vi = ve.requestAnimationFrame) || km)(Nm));

    e_c.__H.__.forEach(n => {
      if (n.u) {
        (n.__H = n.u);
      }

      (n.u = undefined);
    });
  }

  ro = null;
  _e = null;
});

(ve.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.forEach(wr);

      (n.__h = n.__h.filter(r => !r.__ || Ho(r)));
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
          wr(r);
        } catch (o) {
          t = o;
        }
      });

    (e_c.__H = undefined);
    t && ve.__e(t, e_c.__v);
  }
});

const Xi = typeof requestAnimationFrame == "function";
function km(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (Xi) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (Xi) {
    (t = requestAnimationFrame(n));
  }
}
function wr(e) {
  const t = _e;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (_e = t);
}
function Ho(e) {
  const t = _e;
  (e.__c = e.__());
  (_e = t);
}
function _s(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, r) => n !== e[r]);
}
function ul(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function dl(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Vo(e, t) {
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
function fl(e, t) {
  const n = t();
  const r = $({ t: { __: n, u: t } });
  const o = r[0].t;
  const [, s] = r;

  on(
    () => {
      (o.__ = n);
      (o.u = t);

      if (oo(o)) {
        s({ t: o });
      }
    },
    [e, n, t]
  );

  F(
    () => {
      if (oo(o)) {
        s({ t: o });
      }

      return e(() => {
        if (oo(o)) {
          s({ t: o });
        }
      });
    },
    [e]
  );

  return n;
}
function oo(e) {
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
function hl(e) {
  e();
}
function pl(e) {
  return e;
}
function ml() {
  return [false, hl];
}
const gl = on;

class Wo {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return Vo(this.props, e) || Vo(this.state, t);
    }
}

function Wr(e, t) {
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

    return Vo(this.props, o);
  }
  function r(o) {
    (this.shouldComponentUpdate = n);
    return nt(e, o);
  }
  (r.displayName = `Memo(${e.displayName || e.name})`);
  (r.prototype.isReactComponent = true);
  (r.__f = true);
  (r.type = e);
  return r;
}
((Wo.prototype = new Ke()).isPureReactComponent = true);

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
const Rm =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function _l(e) {
  class t {
    constructor(n) {
      const r = dl({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      Vn(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = Rm);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const Zi = (e, t) => e == null ? null : et(et(e).map(t));

const Pm = {
  map: Zi,
  forEach: Zi,
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
function yl(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(r => {
      if (typeof r.__c == "function") {
        r.__c();
      }
    }),
        (e.__c.__H = null));

    (e = dl({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(r => yl(r, t, n)));
  }

  return e;
}
function vl(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(r => vl(r, t, n)));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class Ie {
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
        this.__v.__k[0] = yl(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const o = t.__a && nt(ke, null, e.fallback);

    if (o) {
      (o.__u &= -33);
    }

    return [nt(ke, null, t.__a ? null : e.children), o];
  }
}

function wl(e) {
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
    return o ? nt(o, a) : null;
  }
  (s.displayName = "Lazy");
  (s.__f = true);
  return s;
}

class $n {
  constructor() {
    (this.i = null);
    (this.l = null);
  }

  render(e) {
    (this.i = null);
    (this.l = new Map());
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

((Ie.prototype = new Ke()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    (r.o = []);
  }

  r.o.push(t_c);
  const o = wl(r.__v);

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
        r.__v.__k[0] = vl(l, l.__c.__P, l.__c.__O);
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

const Qi = (e, t, n) => {
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
function xm(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function Om(e) {
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

  Vn(nt(xm, { context: t.context }, e.__v), t.v);
}
function Mt(e, t) {
  const n = nt(Om, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

(($n.prototype = new Ke()).__a = function (e) {
  const t = this;
  const n = wl(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return o => {
    const s = () => {
      if (t.props.revealOrder) {
        r.push(o);
        Qi(t, e, r);
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

($n.prototype.componentDidUpdate = $n.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        Qi(e, n, t);
      });
    });

const El =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const $m =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const Lm = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const Mm = /[A-Z0-9]/g;
const Dm = typeof document !== "undefined";

const Um = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function Sl(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Vn(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function Fm(e, t, n) {
  oc(e, t);

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

function Bm() {}
function Hm() {
  return this.cancelBubble;
}
function Vm() {
  return this.defaultPrevented;
}
Z.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.persist = Bm);
  (e.isPropagationStopped = Hm);
  (e.isDefaultPrevented = Vm);
  (e.nativeEvent = e);
  return e.nativeEvent;
};
let ys;

const Wm = {
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
      for (let a in props) {
        let props_a = props[a];
        if (
          !(
            (a === "value" && "defaultValue" in props && props_a == null) ||
            (Dm && a === "children" && type === "noscript") ||
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
                  Um(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (Lm.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && $m.test(a)) {
            (a = a.replace(Mm, "-$&").toLowerCase());
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
        (o.value = et(props.children).forEach(u => {
            u.props.selected = o.value.includes(u.props.value);
          }));
      }

      if (type == "select" &&
        o.defaultValue != null) {
        (o.value = et(props.children).forEach(u => {
            u.props.selected = o.multiple
              ? o.defaultValue.includes(u.props.value)
              : o.defaultValue == u.props.value;
          }));
      }

      if (props.class && !props.className) {
        (o.class = props.class);
        Object.defineProperty(o, "className", Wm);
      } else if (((props.className && !props.class) || (props.class && props.className))) {
        (o.class = o.className = props.className);
      }

      (t.props = o);
    })(e);
  }

  (e.$$typeof = El);

  if (vnode) {
    vnode(e);
  }
};
Z.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (ys = e.__c);
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

  (ys = null);
};

const jm = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return ys.__n[e.__c].props.value;
        },
        useCallback: N,
        useContext: Vr,
        useDebugValue: cl,
        useDeferredValue: pl,
        useEffect: F,
        useId: ll,
        useImperativeHandle: gs,
        useInsertionEffect: gl,
        useLayoutEffect: on,
        useMemo: Se,
        useReducer: ms,
        useRef: P,
        useState: $,
        useSyncExternalStore: fl,
        useTransition: ml,
      },
    },
  };

const bl = "18.3.1";
function zm(e) {
  return nt.bind(null, e);
}
function er(e) {
  return !!e && e.$$typeof === El;
}
function qm(e) {
  return er(e) && e.type === ke;
}
function Gm(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function Ym(e) {
  return er(e) ? sc(...arguments) : e;
}
function Cl(e) {
  return !!e.__k && (Vn(null, e), true);
}
function Xm(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Km = (e, t) => e(t);

const Zm = (e, t) => e(t);

const Tl = ke;
const Jm = er;

const Ln = {
  useState: $,
  useId: ll,
  useReducer: ms,
  useEffect: F,
  useLayoutEffect: on,
  useInsertionEffect: gl,
  useTransition: ml,
  useDeferredValue: pl,
  useSyncExternalStore: fl,
  startTransition: hl,
  useRef: P,
  useImperativeHandle: gs,
  useMemo: Se,
  useCallback: N,
  useContext: Vr,
  useDebugValue: cl,
  version: "18.3.1",
  Children: Pm,
  render: Sl,
  hydrate: Fm,
  unmountComponentAtNode: Cl,
  createPortal: Mt,
  createElement: nt,
  createContext: wn,
  createFactory: zm,
  cloneElement: Ym,
  createRef: pu,
  Fragment: ke,
  isValidElement: er,
  isElement: Jm,
  isFragment: qm,
  isMemo: Gm,
  findDOMNode: Xm,
  Component: Ke,
  PureComponent: Wo,
  memo: Wr,
  forwardRef: _l,
  flushSync: Zm,
  unstable_batchedUpdates: Km,
  StrictMode: Tl,
  Suspense: Ie,
  SuspenseList: $n,
  lazy: ne,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: jm,
};

function Qm(e) {
  const t = { ...e };
  Zc(t, "react");
  Rf("react", { version: bl });
  return Im(t);
}
function eg(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function tg(e, t) {
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
function ng(e, { componentStack: t }, n) {
  if (eg(bl) && Xn(e) && t) {
    const r = new Error(e.message);
    (r.name = `React ErrorBoundary ${e.name}`);
    (r.stack = t);
    tg(e, r);
  }
  return as(r => {
    r.setContext("react", { componentStack: t });
    return $c(e, n);
  });
}
const rg = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const so = { componentStack: null, error: null, eventId: null };
class og extends Ke {
  constructor(t) {
    super(t);
    (this.state = so);
    (this._openFallbackReportDialog = true);
    const n = Re();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (r) => {
        if (!r.type &&
          this._lastEventId &&
          r.event_id === this._lastEventId) {
          Hi({ ...t.dialogOptions, eventId: this._lastEventId });
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

    as((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const f = ng(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, f);
      }

      if (showDialog) {
        (this._lastEventId = f);
        this._openFallbackReportDialog && Hi({ ...dialogOptions, eventId: f });
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
      if (this.state === so) {
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

    this.setState(so);
  }
  render() {
    const { fallback, children } = this.props;
    const r = this.state;
    if (r.componentStack === null) {
      return typeof children == "function" ? children() : children;
    }
    const o =
      typeof fallback == "function"
        ? nt(fallback, {
            error: r.error,
            componentStack: r.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: r.eventId,
          })
        : fallback;
    return er(o)
      ? o
      : (fallback && rg && V.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
Qm({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function sg(e) {
  return {
    render(t) {
      Sl(t, e);
    },
    unmount() {
      Cl(e);
    },
  };
}
const ig = "modulepreload";

const ag = e => `/${e}`;

const oa = {};

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
    const a = document.querySelector("meta[property=csp-nonce]");
    const c = a?.nonce || a?.getAttribute("nonce");
    o = l(
      n.map((u) => {
        (u = ag(u));

        if (u in oa) {
          return;
        }

        oa[u] = true;
        const f = u.endsWith(".css");
        const d = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${d}`)) {
          return;
        }
        const p = document.createElement("link");
        (p.rel = f ? "stylesheet" : ig);

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

const cg = {};
function ar(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Il(e, t, n) {
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
  (e = jo(e.replace(o, "")));
  (t = jo(t || ""));
  for (let f = Math.max(e.length, t.length), d = 0; d < f; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const p = t[d].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[d].match(/[+*?]+$/) || cg)[0] || "";
      const m = ~h.indexOf("+");
      const g = ~h.indexOf("*");
      const E = e[d] || "";
      if (!E && !g && (!h.includes("?") || m)) {
        r = false;
        break;
      }
      (a[p] = decodeURIComponent(E));

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
function lg(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function ug(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : jo(n.props.path).map(dg).join(""))(e));

  return e.props;
}
function jo(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function dg(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const fg = {};
const Qt = [];
const Fn = [];
let We = null;
const vs = { url: ws() };
const Nl = wn(vs);
function tr() {
  const e = Vr(Nl);
  if (e === vs) {
    const t = $()[1];
    F(() => {
      Fn.push(t);

      return () => Fn.splice(Fn.indexOf(t), 1);
    }, []);
  }
  return [e, ze];
}
function ws() {
  let e;
  return `${(e =
  We && We.location
    ? We.location
    : We && We.getCurrentLocation
    ? We.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : fg).pathname || ""}${e.search || ""}`;
}
function ze(e, t = false) {
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
      if (We && We[r]) {
        We[r](n);
      } else if (typeof history !== "undefined" &&
          history[`${r}State`]) {
        history[`${r}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return kl(e);
}
function kl(e) {
  let t = false;
  for (let n = 0; n < Qt.length; n++) {
    if (Qt[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function hg(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return ze(t);
    }
  }
}
function pg(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function mg(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (hg(e_target)) {
          return pg(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Rl(e) {
  if (e.history) {
    (We = e.history);
  }

  (this.state = { url: e.url || ws() });
}
ar((Rl.prototype = new Ke()), {
  shouldComponentUpdate(e) {
    return (e.static !== true ||
    e.url !== this.props.url || e.onChange !== this.props.onChange);
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

    if (!sa) {
      (sa = true);

      We ||
        addEventListener("popstate", () => {
          kl(ws());
        });

      addEventListener("click", mg);
    }

    Qt.push(this);

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

    Qt.splice(Qt.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(ug).sort(lg);

    for (const r of e) {
      const o = Il(t, r.props.path, r.props);
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
    const c = this.g(et(e.children), t_url);

    if (c) {
      (r = sc(
            c[0],
            ar(ar({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      ar(
        vs,
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
      for (let l = Fn.length; l--; ) {
        Fn[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return nt(Nl.Provider, { value: a }, r);
  },
});

const ia = (e) => {
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

const gg = e => e ? ia(e) : ia;

const _g = e => e;

function yg(e, t = _g) {
  const n = Ln.useSyncExternalStore(
    e.subscribe,
    Ln.useCallback(() => t(e.getState()), [e, t]),
    Ln.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Ln.useDebugValue(n);
  return n;
}

const aa = (e) => {
  const t = gg(e);

  const n = r => yg(t, r);

  Object.assign(n, t);
  return n;
};

const ot = e => e ? aa(e) : aa;

function Es(e, t) {
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

const zo = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return zo(r)(n);
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
          return zo(r)(n);
        },
      };
    }
  };

const Pl = (e, t) => (n, r, o) => {
  let s = {
      storage: Es(() => localStorage),
      partialize: g => g,
      version: 0,
      merge: (g, E) => ({
        ...E,
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
  o.setState = (g, E) => {
    o_setState(g, E);
    return f();
  };
  const p = e((...g) => {
    n(...g);
    return f();
  }, r, o);
  o.getInitialState = () => p;
  let h;
  const m = () => {
    let E;
    if (!s_storage) {
      return;
    }
    (a = false);

    c.forEach((y) => {
      let v;
      return y((v = r()) != null ? v : p);
    });

    const _ =
      ((E = s.onRehydrateStorage) == null
        ? undefined
        : E.call(s, (g = r()) != null ? g : p)) || undefined;
    return zo(s_storage.getItem.bind(s_storage))(s.name)
      .then((y) => {
        if (y) {
          if (typeof y.version == "number" && y.version !== s.version) {
            if (s.migrate) {
              const v = s.migrate(y.state, y.version);
              return v instanceof Promise ? v.then(b => [true, b]) : [true, v];
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
      const [b, S] = y;
      (h = s.merge(S, (v = r()) != null ? v : p));
      n(h, true);

      if (b) {
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

const Al = ot(e => ({
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

const wg = ot(e => ({
  isOpen: false,
  url: null,
  open: t => e({ isOpen: true, url: t }),
  close: () => e({ isOpen: false, url: null })
}));

const Eg = ot((e, t) => ({
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

function Ae(e) {
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

const Sg = 4000/* 4e3 */;

const kr = ot((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const o = n.duration ?? Sg;

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
  success: (e, t) => kr.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => kr.getState().addToast({ type: "error", message: e, duration: t }),
};

function bg() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const ca = bg();
class xl {
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
        yt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      yt.error(t.message || "Произошла ошибка");
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

    n.set("X-Device-Id", ca);
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

      const { headers, ...m } = o ?? {};

      const g = await fetch(a, {
        method: t,
        body: p,
        signal: l.signal,
        credentials: "include",
        ...m,
        headers: c,
      });

      clearTimeout(f);
      const E =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (g.status === Ve.UNAUTHORIZED && !s && !E && this.accessToken) {
        const _ = await this.refreshAccessToken();
        if (_) {
          this.setAccessToken(_);
          return this.executeRequest(t, n, r, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ve.UNAUTHORIZED,
          "Session expired",
          le.UNAUTHORIZED
        );
      }
      return await this.handleResponse(g);
    } catch (d) {
      clearTimeout(f);

      if (d instanceof Error) {
        const p = !s;
        if (d.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", le.TIMEOUT);

          if (p) {
            this.notifyError(m);
          }

          throw m;
        }
        if (d.name === "ApiError") {
          if (p) {
            this.notifyError(d);
          }

          throw d;
        }
        const h = this.createApiError(
          0,
          d.message || "Network error",
          le.NETWORK_ERROR
        );

        if (p) {
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
  async head(t, n) {
    const r = this.buildUrl(t);
    const o = this.buildHeaders(n?.headers);
    const s = new AbortController();
    const a = n?.timeout ?? this.defaultTimeout;

    const c = setTimeout(() => s.abort(), a);

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
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": ca };

    if (this.accessToken) {
      (a.Authorization = `Bearer ${this.accessToken}`);
    }

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
const M = new xl({ baseURL: "/api", timeout: 30000/* 3e4 */ });
const Ge = new xl({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const Ss = ot((e, t) => ({
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

const Ol = () => Ss(e => e.portal);

const qn = new Set();
let Bn = null;
const Cg = 30000/* 3e4 */;
function Tg() {
  if (Bn === null) {
    (Bn = window.setInterval(() => {
        qn.forEach(e => e());
      }, Cg));
  }
}
function Ig() {
  if (Bn !== null) {
    clearInterval(Bn);
    (Bn = null);
  }
}
function Ng(e) {
  qn.add(e);

  if (qn.size === 1) {
    Tg();
  }
}
function kg(e) {
  qn.delete(e);

  if (qn.size === 0) {
    Ig();
  }
}
function io(e) {
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
function $l(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [o, s] = $(() => n ? io(new Date(r)) : "");

  F(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(r);
    s(io(a));
    const c = () => {
      s(io(a));
    };
    Ng(c);

    return () => kg(c);
  }, [r, n]);

  return o;
}
const la = 1174;
function bt() {
  const [e, t] = $(() => typeof window === "undefined" ? false : window.innerWidth < la);

  F(() => {
    const n = window.matchMedia(`(max-width: ${la - 1}px)`);

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
const Rg = wn({ isHidden: false });

const Pg = () => {
  const [e, t] = $(false);
  const n = P(0);

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

function jr(e = "", t = []) {
  const [n, r] = $(e);
  const [o, s] = $(t);
  const a = P(null);

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
function Ag({
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
function xg({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: r = 0,
  getItemKey: o = l => l,
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

  const f = () => a ? a.clientHeight : typeof window !== "undefined" ? window.innerHeight : 0;

  const d = P(s ?? new Map());
  const p = P(null);
  const h = P(null);
  const m = P(new Map());
  const g = P(o);
  g.current = o;

  const E = R => d.current.get(o(R)) ?? t;

  const _ = (R) => {
    let I = 0;
    for (let w = 0; w < R; w++) {
      I += E(w) + r;
    }
    return I;
  };

  const y = () => {
    if (e === 0) {
      return 0;
    }
    let R = 0;
    for (let I = 0; I < e; I++) {
      R += E(I);
    }
    (R += Math.max(0, e - 1) * r);
    return R;
  };

  const v = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const R = u();
    const I = f();
    let w = 0;
    let C = 0;
    for (let O = 0; O < e; O++) {
      const q = E(O) + r;
      if (C + q > R) {
        w = O;
        break;
      }
      C += q;
    }
    let A = w;
    let k = 0;
    for (let O = w; O < e && ((k += E(O) + r), (A = O), !(k >= I)); O++)
      {}
    return { start: Math.max(0, w - n), end: Math.min(e - 1, A + n) };
  };

  const b = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = v();
    const w = [];
    for (let C = start; C <= end; C++) {
      w.push({ index: C, key: o(C), start: _(C) });
    }
    return w;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((R) => {
      let I = false;
      for (const w of R) {
        const w_target = w.target;
        const A = m.current.get(w_target);
        if (A === undefined) {
          continue;
        }
        const k = w.borderBoxSize && w.borderBoxSize[0];
        const O = k ? k.blockSize : w_target.getBoundingClientRect().height;

        if (O > 0 && d.current.get(A) !== O) {
          d.current.set(A, O);
          (I = true);
        }
      }

      if (I) {
        l(w => w + 1);
      }
    }));
  }

  const S = N((R, I) => {
    if (!R) {
      return;
    }
    const w = g.current(I);
    m.current.set(R, w);
    h.current?.observe(R);
    const C = R.getBoundingClientRect().height;

    if (C > 0 && d.current.get(w) !== C) {
      d.current.set(w, C);
      l(A => A + 1);
    }
  }, []);

  on(() => {
    const R = a ?? window;

    const I = () => {
      if (!p.current) {
        (p.current = requestAnimationFrame(() => {
          (p.current = null);

          l(w => w + 1);
        }));
      }
    };

    R.addEventListener("scroll", I, { passive: true });

    l(w => w + 1);

    return () => {
      R.removeEventListener("scroll", I);

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
    virtualItems: b(),
    totalSize: y(),
    measureElement: S,
    getMeasuredHeights: T,
  };
}

const Og = ({ size: e = 18 }) => i("svg", {
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

const $g = ({ size: e = 18 }) => i("svg", {
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

const Lg = ({ size: e = 18 }) => i("svg", {
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

const Ll = ({ size: e = 18 }) => i("svg", {
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

const Mg = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const Dg = ({ size: e = 18 }) => i("svg", {
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

const Ug = ({ size: e = 18 }) => i("svg", {
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

const Fg = ({ size: e = 18 }) => i("svg", {
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

const Bg = ({ size: e = 18 }) => i("svg", {
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

const Hg = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const Vg = ({ size: e = 24 }) => i("svg", {
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

const Ml = ({ size: e = 20 }) => i("svg", {
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

const Wg = ({ size: e = 8 }) => i("svg", {
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

const jg = ({ size: e = 8 }) => i("svg", {
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

const zg = () => i("svg", {
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

const lt = ({ size: e = 24 }) => i("svg", {
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

const Dl = ({ filled: e = false, size: t = 20 }) => i("svg", {
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

const Ul = ({ size: e = 18 }) => i("svg", {
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

const qg = ({ size: e = 24 }) => i("svg", {
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

const Fl = () => i("svg", {
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

const Bl = ({ size: e = 18 }) => i("svg", {
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

const Hl = ({ size: e = 24 }) => i("svg", {
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

const bs = ({ filled: e = false, size: t = 20, className: n }) => i("svg", {
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

const Cs = ({ size: e = 24 }) => i("svg", {
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

const Gg = ({ size: e = 24 }) => i("svg", {
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

const Vl = ({ size: e = 18 }) => i("svg", {
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

const Wl = ({ size: e = 24 }) => i("svg", {
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

const Yg = ({ size: e = 24 }) => i("svg", {
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

const jl = ({ size: e = 24 }) => i("svg", {
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

const ua = ({ size: e = 18 }) => i("svg", {
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

const Ts = ({ size: e = 24 }) => i("svg", {
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

const Xg = ({ size: e = 20 }) => i("svg", {
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

const Is = ({ size: e = 20 }) => i("svg", {
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

const zl = ({ size: e = 24 }) => i("svg", {
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

const Kg = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const Zg = ({ size: e = 24 }) => i("svg", {
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

const Jg = ({ size: e = 48 }) => i("svg", {
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

const ql = ({ size: e = 18 }) => i("svg", {
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

const Qg = ({ size: e = 16 }) => i("svg", {
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

const e_ = ({ size: e = 20 }) => i("svg", {
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

function t_(e) {
  const t = tr()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: Il(t.path || t.url, e.path, {}) !== false,
  });
}
const n_ = "vbgu";
const r_ = "wZa5";
const o_ = "bO1s";
const s_ = "pQzg";
const i_ = "jt9Y";
const a_ = "ZAvi";
const c_ = "Q3iP";
const l_ = "imPU";
const u_ = "J02V";
const d_ = "mGMw";
const f_ = "kDRE";
const h_ = "KYn9";
const p_ = "RQ3f";

const Oe = {
  aside: n_,
  asideBottom: r_,
  logoutButton: o_,
  asideBrand: s_,
  asideBrandVersion: i_,
  nav: a_,
  navItem: c_,
  active: l_,
  iconWrapper: u_,
  portalButton: d_,
  portalActive: f_,
  portalImage: h_,
  badge: p_,
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

const da = [
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

const Ns = [
  ge.LOGIN,
  ge.REGISTER,
  ge.FORGOT_PASSWORD,
  ge.RESET_PASSWORD,
  ge.VERIFY_EMAIL,
  ge.ONBOARDING,
];

const L = {
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

const m_ = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const g_ = ["video/mp4", "video/webm", "video/quicktime"];
const qo = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const __ = ".mp4,.webm,.mov";

const dn = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await M.uploadFormData(L.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await M.delete(L.files.delete(e));
  },
  isValidImageType(e) {
    return m_.includes(e.type);
  },
  isValidVideoType(e) {
    return g_.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const y_ = {
  async getChangelog() {
    const e = await M.get(L.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await M.get(L.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

const v_ = {
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

function w_(e, t = "Произошла ошибка") {
  return e ? v_[e] ?? t : t;
}
class ks {
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
function fa(e) {
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
const jt = new ks(100, 300 * 1000/* 1e3 */);
const E_ = 60 * 1000/* 1e3 */;
setInterval(() => jt.cleanup(), 120 * 1000/* 1e3 */);
const cr = {
  async checkUsername(e) {
    return (
      await M.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await M.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await M.get(L.users.me);
    return fa(e);
  },
  async updateProfile(e) {
    return await M.put(L.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = jt.get(t);

    if (n && jt.isFresh(t, E_)) {
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
    const n = await M.get(L.users.profile(e));
    const r = fa(n);
    jt.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    jt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const r = jt.get(n);

    if (r) {
      jt.set(n, { ...r, ...t });
    }
  },
  async followUser(e) {
    await M.post(L.users.follow(e), {});
  },
  async unfollowUser(e) {
    await M.delete(L.users.follow(e));
  },
  async pinPost(e) {
    await M.post(L.posts.pin(e));
  },
  async unpinPost(e) {
    await M.delete(L.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await M.get(L.users.privacy);
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

    await M.put(L.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await M.get(L.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await M.post(L.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await M.get(L.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await M.put(L.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await M.delete(L.users.setPin);
  },
  async deleteAccount() {
    await M.delete(L.users.deleteAccount);
  },
  async restoreAccount() {
    await M.post(L.users.restoreAccount);
  },
};
function ha(e) {
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
const vt = ot(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(r => ({
    statuses: { ...r.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let Go = new Set();
let ao = null;
function S_() {
  if (!ao) {
    (null = setTimeout(async () => {
      ao = null;
      const e = Array.from(Go);
      Go.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await Yo.batchFollowStatus(n);
            vt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50));
  }
}
function b_(e) {
  const t = we(s => s.profile?.id);

  const n = vt(s => s.statuses);

  const r = P("");

  F(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of s) {
        Go.add(c);
      }
      S_();
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
const zt = new ks(500, 120 * 1000/* 1e3 */);
setInterval(() => zt.cleanup(), 60 * 1000/* 1e3 */);
const Yo = {
  async followUser(e) {
    const t = await M.post(L.users.follow(e), {});
    zt.delete(e);
    vt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await M.delete(L.users.follow(e));
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
    const a = `${L.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await M.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const d = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(ha), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const a = `${L.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await M.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const d = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(ha), nextCursor: d };
  },
  async blockUser(e) {
    await M.post(L.users.block(e), {});
    zt.delete(e);
  },
  async unblockUser(e) {
    await M.delete(L.users.block(e));
    zt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const o = t.toString();
    const s = `${L.users.blocked}${o ? `?${o}` : ""}`;
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

    return (await M.post(L.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    zt.delete(e);
  },
  clearSocialCache() {
    zt.clear();
  },
};
function C_(e) {
  const t = vt(o => o.statuses[e]);

  const n = N(async () => {
    vt.getState().setStatus(e, true);
    try {
      await Yo.followUser(e);
    } catch {
      vt.getState().setStatus(e, false);
    }
  }, [e]);

  const r = N(async () => {
    vt.getState().setStatus(e, false);
    try {
      await Yo.unfollowUser(e);
    } catch {
      vt.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: r };
}
const T_ = "T3sh";
const I_ = "rLje";
const N_ = "O26V";
const k_ = "v1R4";
const R_ = "YmlN";
const P_ = "wMlV";
const A_ = "EHYm";
const x_ = "F3L7";
const O_ = "WsZv";
const $_ = "d3Db";
const L_ = "La7L";
const M_ = "BilD";
const D_ = "fuv6";
const U_ = "cizX";

const Me = {
  overlay: T_,
  modalWrapper: I_,
  wide: N_,
  modal: k_,
  frameless: R_,
  header: P_,
  title: A_,
  closeButton: x_,
  externalCloseButton: O_,
  mobileOverlay: $_,
  closing: L_,
  bottomSheet: M_,
  dragHandle: D_,
  dragIndicator: U_,
};

const F_ = wn(null);
const B_ = 100;
const H_ = 0.5;
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
  const f = P(null);
  const d = P(null);
  const p = P(null);
  const h = bt();
  const m = P(0);
  const g = P(false);
  const [E, _] = $(false);
  const y = P(0);
  const v = P(0);
  const b = P(0);
  F(() => {
    const G = (W) => {
        if (W.key === "Escape") {
          if (u && !u()) {
            return;
          }
          t();
        }
      };

    const ee = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", G);

    return () => {
      document.removeEventListener("keydown", G);
      (document.documentElement.style.overflow = ee);
    };
  }, [t]);

  const S = (G) => {
      p.current = G.target;
    };

  const T = (G) => {
    if (p.current === f.current && G.target === f.current) {
      if (h) {
        R();
      } else {
        if (u && !u()) {
          return;
        }
        t();
      }
    }
    p.current = null;
  };

  const R = N(() => {
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

  const I = P(false);
  const w = P(false);

  const C = (G) => {
    let ee = G;

    while (ee && ee !== d.current) {
      const D = window.getComputedStyle(ee).overflowY;
      if ((D === "auto" || D === "scroll") &&
      ee.scrollHeight > ee.clientHeight) {
        return ee;
      }
      ee = ee.parentElement;
    }

    return null;
  };

  const A = (G, ee) => {
    if (d.current) {
      (d.current.style.transform = G > 0 ? `translateY(${G}px)` : "");
      (d.current.style.transition = ee || "");
    }
  };

  const k = (G) => {
    if (f.current && G > 0) {
      (f.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - G / 500
          )})`);
    } else if (f.current) {
      (f.current.style.backgroundColor = "");
    }
  };

  const O = (G) => {
    if (!h) {
      return;
    }
    (y.current = G.touches[0].clientY);
    (v.current = Date.now());
    (b.current = G.touches[0].clientY);
    const G_target = G.target;
    if (G_target.closest(`.${Me.dragHandle}`)) {
      (I.current = true);
      (w.current = true);
      (g.current = true);

      if (d.current) {
        (d.current.style.transition = "none");
      }

      return;
    }
    (I.current = false);

    if (G_target.closest(
      'button, a, input, textarea, select, video, [role="button"]'
    )) {
      w.current = false;
      return;
    }

    if (G_target.tagName === "CANVAS" || G_target.closest("canvas")) {
      w.current = false;
      return;
    }
    const Y = C(G_target);
    w.current = !Y || Y.scrollTop === 0;
  };

  const q = (G) => {
    if (!h) {
      return;
    }
    const ee = G.touches[0].clientY;
    const W = ee - y.current;
    (b.current = ee);

    if (I.current) {
      if (W > 0) {
        (m.current = W);
        A(W);
        k(W);
        G.preventDefault();
      }

      return;
    }

    if (w.current) {
      if (g.current && m.current > 0) {
        if (W > 0) {
          (m.current = W);
          A(W);
          k(W);
          G.preventDefault();
        } else {
          (m.current = 0);
          (g.current = false);
          A(0);
          k(0);
        }

        return;
      }

      if (W > 0) {
        g.current ||
            ((g.current = true),
            d.current && (d.current.style.transition = "none"));

        (m.current = W);
        A(W);
        k(W);
        G.preventDefault();
      }
    }
  };

  const he = () => {
    if (!h) {
      return;
    }
    const G = b.current - y.current;
    const ee = Date.now() - v.current;
    const W = G / ee;

    if (g.current && (G > B_ || W > H_)) {
      R();
    } else if (m.current > 0) {
      A(0, "transform 0.2s ease-out");
      k(0);
      (m.current = 0);
    }

    (g.current = false);
    (I.current = false);
    (w.current = false);
  };

  const pe = (() => {
    if (h && E) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const de = { onClose: t, isMobile: h, isClosing: E, handleClose: R };
  return i(F_.Provider, {
    value: de,
    children: i("div", {
      ref: f,
      className: `${Me.overlay} ${h ? Me.mobileOverlay : ""} ${
        E ? Me.closing : ""
      }`,
      onMouseDown: S,
      onMouseUp: T,
      children: i("div", {
        ref: d,
        className: `${Me.modalWrapper} ${l === "wide" ? Me.wide : ""} ${
          h ? Me.bottomSheet : ""
        }`,
        style: pe,
        onTouchStart: O,
        onTouchMove: q,
        onTouchEnd: he,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: Me.externalCloseButton,
              onClick: (G) => {
                G.stopPropagation();
                t();
              },
              children: i(lt, { size: 24 }),
            }),
          h &&
            i("div", {
              className: Me.dragHandle,
              children: i("div", { className: Me.dragIndicator }),
            }),
          i("div", {
            className: `${Me.modal} ${s ? Me.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                r &&
                !h &&
                i("div", {
                  className: Me.header,
                  children: [
                    i("span", { className: Me.title, children: n }),
                    o &&
                      i("button", {
                        type: "button",
                        className: Me.closeButton,
                        onClick: (G) => {
                          G.stopPropagation();
                          t();
                        },
                        children: i(lt, { size: 16 }),
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
const V_ = "SvkR";
const W_ = "myoF";
const j_ = "sAlV";
const z_ = "hxGj";
const q_ = "VMCF";
const G_ = "aEGQ";
const pa = { spinner: V_, spin: W_, xs: j_, sm: z_, md: q_, lg: G_ };
function Gl({ size: e = "md", className: t }) {
  const n = [pa.spinner, pa[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(Cs, {}) });
}
const Y_ = "K8mm";
const X_ = "n18k";
const K_ = "P5LL";
const Z_ = "ydez";
const J_ = "UWbn";
const Q_ = "egGd";
const ey = "sRfX";
const ty = "iHTy";
const ny = "oonE";
const ry = "Mc5J";
const oy = "VsaH";
const sy = "n0Zb";

const ln = {
  button: Y_,
  primary: X_,
  secondary: K_,
  ghost: Z_,
  accent: J_,
  danger: Q_,
  sm: ey,
  md: ty,
  lg: ny,
  fullWidth: ry,
  iconOnly: oy,
  loading: sy,
};

function Je({
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
    ln.button,
    ln[t],
    ln[n],
    r && ln.fullWidth,
    o && ln.iconOnly,
    s && ln.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return i("button", {
    type: c,
    className: f,
    disabled: l || s,
    ...u,
    children: s ? i(Gl, { size: "sm" }) : e,
  });
}
const iy = "XTlK";
const ay = "bES6";
const cy = "adLC";
const ly = "rYwl";
const lr = { content: iy, title: ay, subtitle: cy, actions: ly };
function uy({ displayName: e, onConfirm: t, onClose: n }) {
  return i(sn, {
    onClose: n,
    showHeader: false,
    children: i("div", {
      className: lr.content,
      children: [
        i("h2", { className: lr.title, children: "Отписаться?" }),
        i("p", {
          className: lr.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            i("strong", { children: e }),
            "?",
          ],
        }),
        i("div", {
          className: lr.actions,
          children: [
            i(Je, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            i(Je, {
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
const Yl = wn(null);
let dy = 0;
function fy({ children: e }) {
  const [t, n] = $([]);

  const r = N((a) => {
    const c = `modal-${++dy}`;

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

  return i(Yl.Provider, {
    value: { openModal: r, closeModal: o, closeAllModals: s },
    children: [e, t.length > 0 && i(hy, { modals: t })],
  });
}
function hy({ modals: e }) {
  return Mt(
    i(ke, {
      children: e.map(({ id: t, component: n }) => i(Ie, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function an() {
  const e = Vr(Yl);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const py = "SDlM";
const my = "Iqed";
const gy = "oFIv";
const _y = "oeM8";
const yy = "ulWC";
const vy = "if4c";
const wy = "pYM8";
const Ey = "SONX";
const Sy = "hntk";
const by = "ccYm";
const Cy = "FB4g";
const Ty = "StQQ";

const It = {
  avatar: py,
  xs: my,
  emoji: gy,
  onlineDot: _y,
  sm: yy,
  md: vy,
  lg: wy,
  xl: Ey,
  badge: Sy,
  followBadge: by,
  notFollowing: Cy,
  following: Ty,
};

function Iy(e) {
  return (
    e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/")
  );
}
function rt({
  src: e,
  alt: t,
  size: n = "md",
  badge: r,
  online: o,
  followBadge: s,
  onFollowBadgeClick: a,
  className: c,
}) {
  const l = e ? Iy(e) : false;
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
            children: s ? i(jg, { size: 8 }) : i(Wg, { size: 8 }),
          })
        : o && i("span", { className: It.onlineDot }),
    ],
  });
}
const Ny = "Abz7";
const ky = "rYwb";
const Ry = "aNFc";
const Py = "qcEI";
const Ay = "uMMn";
const xy = "tGyd";
const Oy = "pTnF";
const $y = "USfG";
const Ly = "JYBC";
const My = "hpJX";
const Dy = "CcuN";
const Uy = "JDbs";
const Fy = "Zer1";
const By = "itfp";
const Hy = "t7k2";

const Fe = {
  userName: Ny,
  pinBadge: ky,
  text: Ry,
  nukstaGlow: Py,
  xs: Ay,
  sm: xy,
  md: Oy,
  lg: $y,
  pinWrapper: Ly,
  pinClickable: My,
  pinTooltip: Dy,
  pinTooltipFadeIn: Uy,
  pinTooltipRow: Fy,
  pinTooltipLabel: By,
  pinTooltipArrow: Hy,
};

const Vy = ne(() => Q(
  () => import("./index-DXx_nwTn.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const Wy = { xs: 12, sm: 14, md: 16, lg: 22 };
const jy = "subscription_nuksta";
function nr({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: o = "md",
  className: s,
}) {
  const Wy_o = Wy[o];
  const c = P(null);
  const [l, u] = $(null);
  const [f, d] = $(false);
  const p = r?.slug === jy;

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
      t && i(Qg, {}),
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
              width: Wy_o,
              height: Wy_o,
            }),
            l &&
              Mt(
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
        i(Ie, {
          fallback: null,
          children: i(Vy, { isOpen: true, onClose: () => d(false) }),
        }),
    ],
  });
}
function zy(e) {
  return "accessToken" in e;
}
function qy(e) {
  return "accessToken" in e;
}
const mt = {
  async register(e) {
    return await Ge.post(L.auth.signUp, e);
  },
  async login(e) {
    return await Ge.post(L.auth.signIn, e);
  },
  async verifyOtp(e) {
    return await Ge.post(L.auth.verifyOtp, e);
  },
  async resendOtp(e) {
    await Ge.post(L.auth.resendOtp, e);
  },
  async refreshSession() {
    return await Ge.post(L.auth.refresh);
  },
  async logout() {
    await Ge.post(L.auth.logout);
  },
  async logoutAll() {
    await Ge.post(`${L.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await Ge.post(L.auth.forgotPassword, e);
  },
  async resetPassword(e) {
    await Ge.post(L.auth.resetPassword, e);
  },
  async changePassword(e) {
    await Ge.post(L.auth.changePassword, e);
  },
};
function Ft(e, t) {
  if (!e) {
    gi(null);
    return;
  }
  gi({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
}

const ur = {
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

const we = ot()(
  Pl(
    (e, t) => {
      const n = (o) => {
        M.setAccessToken(o);
        Ge.setAccessToken(o);
      };

      (() => {
        const o = async () => {
          try {
            const s = await mt.refreshSession();
            n(s.accessToken);
            return s.accessToken;
          } catch (s) {
            return Ae(s) && s.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        };
        M.setRefreshTokenCallback(o);

        M.setOnUnauthorizedCallback(() => {
          if (t().status !== "service_error") {
            t().reset();
          }
        });
      })();

      return {
        ...ur,
        register: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await mt.register(o);

            e({
              status: "needs_verification",
              pendingEmail: o.email,
              pendingPassword: o.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const a = Ae(s) ? s.message : "Registration failed";
            const c = Ae(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        login: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await mt.login(o);
            if (qy(s)) {
              n(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: o.email,
                    });

                  Ft(t().profile, o.email);
                }
              } catch (c) {
                if (Ae(c) &&
                (c.code === le.ENTITY_NOT_FOUND || c.status === 404)) {
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
            const a = Ae(s) ? s.message : "Login failed";
            const c = Ae(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        verifyOtp: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const l = await mt.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: o,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (zy(l)) {
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

                  Ft(t().profile, u);
                }
              } catch (f) {
                if (Ae(f) &&
                (f.code === le.ENTITY_NOT_FOUND || f.status === 404)) {
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
            const u = Ae(l) ? l.message : "Verification failed";
            const f = Ae(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: f });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await mt.resendOtp({ email: pendingEmail || "", flowToken: flowToken || "" });
          } catch (a) {
            const c = Ae(a) ? a.message : "Failed to resend code";
            const l = Ae(a) ? a.code : null;
            e({ error: c, errorCode: l });
            throw a;
          }
        },
        createProfile: async (o) => {
          e({ error: null, errorCode: null });
          try {
            await cr.createProfile(o);
            await t().fetchProfile();
            e({ status: "authenticated" });
            Ft(t().profile, t().email);
          } catch (s) {
            const a = Ae(s) ? s.message : "Failed to create profile";
            const c = Ae(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        logout: async () => {
          try {
            await mt.logout();
          } catch {
          } finally {
            n(null);
            e({ ...ur, status: "unauthenticated" });
            Ft(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await mt.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...ur, status: "unauthenticated" });
            Ft(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const o = await mt.refreshSession();
            n(o.accessToken);
            return o.accessToken;
          } catch (o) {
            return Ae(o) && o.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const o = await cr.getMyProfile();
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
                Ft(t().profile, t().email);
              }
            } catch (a) {
              if (Ae(a) &&
              (a.code === le.ENTITY_NOT_FOUND || a.status === 404)) {
                e({ status: "needs_profile" });
              } else {
                throw a;
              }
            }
          } catch (s) {
            if (Ae(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await cr.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await cr.restoreAccount();
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
          e({ ...ur, status: "unauthenticated" });
          Ft(null, null);
        },
        setProfile: (o) => {
          e({ profile: o });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Es(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const Gy = () => we(e => e.status);

const Rs = () => we(e => e.profile);

const Ps = () => we(e => e.status === "authenticated");

function Yy({ children: e, currentPath: t }) {
  const n = Gy();

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
    const s = da.some(a => t.startsWith(a));

    if (n === "unauthenticated" && !s) {
      ze(ge.LOGIN);
    } else if (n === "needs_profile" && t !== ge.ONBOARDING) {
      ze(ge.ONBOARDING);
    } else if (n === "authenticated" &&
        (t === ge.LOGIN || t === ge.REGISTER || t === ge.ONBOARDING)) {
      ze(ge.HOME);
    }
  }, [n, t]);

  const o = da.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !o)
    ? null
    : n === "service_error"
    ? i(Xy, {})
    : n === "account_deleted"
    ? i(Ky, {})
    : i(ke, { children: e });
}
function Xy() {
  const e = we(o => o.initialize);

  const [t, n] = $(false);
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
          children: "Сервис недоступен",
        }),
        i("p", {
          style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.5,
          },
          children:
            "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
        }),
        i("div", {
          style: { marginTop: "8px" },
          children: i(Je, {
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
function Ky() {
  const e = we(l => l.canRestore);

  const t = we(l => l.restoreDeadline);

  const n = we(l => l.restoreAccount);

  const r = we(l => l.logout);

  const [o, s] = $(false);

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
          ? i(ke, {
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
                    i(Je, { onClick: c, children: "Восстановить аккаунт" }),
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
          : i(ke, {
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
                  children: i(Je, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
const Zy = "KAeQ";
const Jy = "G4Wt";
const Qy = "tQKi";
const ev = "SYVU";
const dr = { content: Zy, icon: Jy, text: Qy, button: ev };
const ma = "phone-verification-required";
function tv() {
  const [e, t] = $(false);

  const n = we(o => o.profile?.id ?? "");

  F(() => {
    const o = () => t(true);
    window.addEventListener(ma, o);

    return () => window.removeEventListener(ma, o);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${n}`;
  return i(sn, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: i("div", {
      className: dr.content,
      children: [
        i("div", { className: dr.icon, children: i(Jg, { size: 48 }) }),
        i("p", {
          className: dr.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        i("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: dr.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const nv = {
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
function Xl(e) {
  const t = nv[e.type] ?? "follow";
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

const Bt = {
    async getNotifications(e = {}) {
      const t = new URLSearchParams();
      const n = e.limit ?? 20;
      t.set("limit", n.toString());
      const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

      if (r > 0) {
        t.set("offset", r.toString());
      }

      const o = t.toString();
      const s = `${L.notifications.list}${o ? `?${o}` : ""}`;
      const a = await M.get(s);
      const c = a.notifications ?? a.data ?? [];
      const u = a.hasMore ?? false ? String(r + c.length) : null;
      return { notifications: c.map(Xl), nextCursor: u };
    },
    async getUnreadCount() {
      return (await M.get(L.notifications.count)).count;
    },
    async markAsRead(e) {
      if (e.length === 1) {
        const r = await M.post(L.notifications.markRead(e[0]));
        return { markedCount: r.markedCount ?? r.marked ?? 1 };
      }
      const t = 20;
      let n = 0;
      for (let r = 0; r < e.length; r += t) {
        const o = e.slice(r, r + t);
        const s = await M.post(L.notifications.markReadBatch, { ids: o });
        n += s.markedCount ?? s.marked ?? o.length;
      }
      return { markedCount: n };
    },
    async markAllAsRead() {
      const e = await M.post(L.notifications.markAllRead);
      return { markedCount: e.markedCount ?? e.marked ?? 0 };
    },
    async getSettings() {
      const e = await M.get(L.notifications.settings);
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

      await M.put(L.notifications.settings, t);
    },
  };

const ga = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const rv = 0.3;
const ov = 15;
function _a(e) {
  const t = ga[Math.min(e, ga.length - 1)];
  const n = t * rv * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let ft = null;
let kn = null;
let Ht = 0;
let Vt = null;
function sv(e) {
  const {
    url,
    getToken,
    onRefreshToken,
    onMessage,
    onStatusChange: s,
  } = e;
  function a() {
    if (ft) {
      return;
    }
    const l = getToken();
    if (!l) {
      s("error");
      return;
    }
    s("connecting");
    (ft = new AbortController());

    (async () => {
      try {
        const f = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${l}`,
            "Cache-Control": "no-cache",
          },
          signal: ft?.signal,
        });
        if (!f.ok) {
          if (f.status === 401) {
            try {
              await onRefreshToken();
              (ft = null);
              const m = _a(Ht);
              Ht++;
              (kn = setTimeout(a, m));
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
        (Ht = 0);
        s("connected");

        if (Vt) {
          Vt.cancel().catch(() => {});
          (Vt = null);
        }

        const d = f.body.getReader();
        Vt = d;
        const p = new TextDecoder();
        let h = "";

        while (true) {
          const { done: m, value: g } = await d.read();
          if (m) {
            break;
          }
          h += p.decode(g, { stream: true });
          const E = h.split(`
`);
          h = E.pop() || "";
          let _ = "";
          let y = "";
          for (const v of E) {
            if (v.startsWith("event: ")) {
              _ = v.slice(7);
            } else if (v.startsWith("data: ")) {
              y = v.slice(6);
            } else if (v === "" && y) {
              try {
                const b = JSON.parse(y);
                const S = _ || b.type;
                onMessage(S, b);
              } catch (b) {
                console.error("SSE message parse error:", b, y);
              }
              (_ = "");
              (y = "");
            }
          }
        }
      } catch (f) {
        if (f.name === "AbortError") {
          return;
        }
        s("error");

        if (Ht >= ov) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          (ft = null);
          return;
        }

        const d = _a(Ht);
        Ht++;

        (kn = setTimeout(() => {
          (ft = null);
          a();
        }, d));
      }
    })();
  }
  function c() {
    if (kn) {
      clearTimeout(kn);
      (kn = null);
    }

    if (Vt) {
      Vt.cancel().catch(() => {});
      (Vt = null);
    }

    if (ft) {
      ft.abort();
      (ft = null);
    }

    (Ht = 0);
    s("disconnected");
  }
  return { connect: a, disconnect: c };
}
const ya = {
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
function iv(e) {
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
  return Xl(t);
}

const fr = sv({
    url: "/api/notifications/stream",
    getToken: () => M.getAccessToken(),
    onRefreshToken: async () => {
      const e = await mt.refreshSession();
      M.setAccessToken(e.accessToken);
      Ge.setAccessToken(e.accessToken);
      return e.accessToken;
    },
    onMessage: (e, t) => {
      if (e === "notification") {
        const n = t.payload ?? t;
        const r = iv(n);
        const o = r.payload.actors[0];

        const s = {
          id: r.id,
          type: r.type,
          actorName: o?.displayName || "Пользователь",
          actorUsername: o?.username || "",
          actorAvatar: o?.avatar || "",
          count: r.payload.count,
          message: cv(
            r.type,
            o?.displayName || "Пользователь",
            r.payload.count
          ),
          clickUrl: r.payload.clickUrl,
          entityId: r.entityId,
          parentEntityId: r.parentEntityId,
        };

        At.setState(a => ({
          notifications: [r, ...a.notifications],
          unreadCount: t.unreadCount ?? a.unreadCount,
          lastSseToast: s
        }));

        if (t.sound) {
          lv();
        }
      } else {
        if (e === "unread_count") {
          At.setState({ unreadCount: t.payload?.count ?? 0 });
        }
      }
    },
    onStatusChange: (e) => {
      At.setState({
        sseStatus: e,
        error: e === "error" ? "SSE connection error" : null,
      });
    },
  });

const At = ot()((e, t) => ({
  ...ya,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      fr.connect();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status: r, nextCursor: o, notifications: s } = t();
    if (r !== "loading" && !(!n && o === null && s.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const a = n ? undefined : o ?? undefined;
        const c = await Bt.getNotifications({ cursor: a, limit: 20 });
        e({
          notifications: n ? c.notifications : [...s, ...c.notifications],
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
      const n = await Bt.getUnreadCount();
      e({ unreadCount: n });
    } catch {}
  },

  markAsRead: async (n) => {
    if (n.length === 0) {
      return;
    }
    const r = t();

    const o = n.filter((s) => {
      const a = r.notifications.find(c => c.id === s);
      return a && !a.isRead;
    });

    e(s => ({
      notifications: s.notifications.map(a => n.includes(a.id) ? { ...a, isRead: true } : a
      ),

      unreadCount: Math.max(0, s.unreadCount - o.length)
    }));
    try {
      await Bt.markAsRead(n);
    } catch {}
  },

  markAsReadSilent: async (n) => {
    if (n.length !== 0) {
      e(r => ({
        unreadCount: Math.max(0, r.unreadCount - n.length)
      }));
      try {
        await Bt.markAsRead(n);
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
      await Bt.markAllAsRead();
    } catch {}
  },

  connectSSE: () => fr.connect(),
  disconnectSSE: () => fr.disconnect(),

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await Bt.getSettings();
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
      await Bt.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    fr.disconnect();
    e(ya);
  }
}));

const av = {
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

function cv(e, t, n) {
  const av_e = av[e];
  return av_e ? av_e(t, n) : "Новое уведомление";
}
function lv() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const Kl = () => At(e => e.unreadCount);

const uv = () => At(e => e.lastSseToast);

function Rn(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const gt = new ks(50, 300 * 1000/* 1e3 */);
const dv = 60 * 1000/* 1e3 */;
setInterval(() => gt.cleanup(), 120 * 1000/* 1e3 */);
function fv(e) {
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
function Rt(e) {
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
    author: fv(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: o, comments: s, reposts: a },
    reposted: l,
    originalPost: e.originalPost ? Rt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
    vs: typeof e.vs == "string" ? e.vs : undefined,
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
      const o = `${L.posts.list}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Rt), nextCursor: Rn(s.data) };
    },
    async getPost(e) {
      const t = await M.get(L.posts.single(e));
      return Rt(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const r = gt.get(n);
        const o = r && r.pinnedPostId === (t.pinnedPostId ?? null);

        if (r && o && gt.isFresh(n, dv)) {
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
      const o = `${L.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Rt), nextCursor: Rn(s.data) };
    },
    invalidateWallCache(e) {
      gt.delete(e);
    },
    updatePostInWallCache(e, t, n) {
      const r = gt.get(e);
      if (r) {
        const o = r.posts.map(s => s.id === t ? { ...s, ...n } : s);
        gt.set(e, { ...r, posts: o });
      }
    },
    removePostFromWallCache(e, t) {
      const n = gt.get(e);
      if (n) {
        const r = n.posts.filter(o => o.id !== t);
        gt.set(e, { ...n, posts: r });
      }
    },
    async likePost(e) {
      await M.post(L.posts.like(e));
    },
    async unlikePost(e) {
      await M.delete(L.posts.like(e));
    },
    async createPost(e) {
      return await M.post(L.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
      });
    },
    async createRepost(e, t) {
      const n = await M.post(L.posts.repost(e), { content: t });
      return Rt(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await M.post(`${L.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await M.put(L.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await M.delete(L.posts.delete(e));
    },
    async restorePost(e) {
      await M.post(L.posts.restore(e));
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
      const o = `${L.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Rt), nextCursor: Rn(s.data) };
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
      const o = `${L.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Rt), nextCursor: Rn(s.data) };
    },
    async pinPost(e) {
      await M.post(L.posts.pin(e));
    },
    async unpinPost(e) {
      await M.delete(L.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await M.post(L.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await M.delete(L.posts.repost(e));
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
      const o = `${L.hashtags.posts(e)}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map(Rt), nextCursor: Rn(s.data) };
    },
  };

const hv = { new: "newest", old: "oldest", popular: "popular" };
function pv(e) {
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
function Xo(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const o = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: pv(e.author),
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
        ? (e.previewReplies ?? e.replies).map(Xo)
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
        n.set("sort", hv[t.sort]);
      }

      if (t.cursor) {
        n.set("cursor", t.cursor);
      }

      const r = n.toString();
      const o = `${L.posts.comments(e)}${r ? `?${r}` : ""}`;
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
      return { data: a.map(Xo), nextCursor: c };
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
      const o = `${L.comments.replies(e)}${r ? `?${r}` : ""}`;
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
      return { data: a.map(Xo), nextCursor: c };
    },
    async createComment(e, t, n, r, o) {
      return await M.post(L.posts.comments(e), {
        content: t,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async createReply(e, t, n, r, o) {
      return await M.post(L.comments.replies(e), {
        content: t,
        replyToUserId: r,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async editComment(e, t, n) {
      await M.patch(L.comments.edit(e), { content: t });
    },
    async deleteComment(e) {
      await M.delete(L.comments.delete(e));
    },
    async likeComment(e) {
      await M.post(L.comments.like(e));
    },
    async unlikeComment(e) {
      await M.delete(L.comments.like(e));
    },
  };

const re = ot((e, t) => ({
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
        const a = await $e.getFeed(r, { limit: 20 });
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
    const {
      activeFeed: n,
      isLoadingMore: r,
      hasMore: o,
      nextCursor: s,
    } = t();
    if (!(r || !o)) {
      e({ isLoadingMore: true });
      try {
        const a = await $e.getFeed(n, { limit: 20, cursor: s ?? undefined });
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

      const { id: u } = await $e.createPost({
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

      $e.invalidateWallCache(n);
      try {
        const p = await $e.getPost(u);
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
        const o = await $e.getPost(n);
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
    await $e.editPost(n, { text: r, spans: o });
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
      $e.updatePostInWallCache(l.wallOwnerId, n, {
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
      await $e.deletePost(n);
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

    Q(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => yv
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

const co = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: re },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Er = ot()(
  Pl(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: Es(() => localStorage) }
  )
);

const Ye = new Map();
const mv = 60 * 1000/* 1e3 */;
const gv = 300 * 1000/* 1e3 */;
const va = 20;
const wa = 500;
function _v() {
  const e = Date.now();
  for (const [t, n] of Ye.entries()) {
    if (e - n.timestamp > gv) {
      Ye.delete(t);
    }
  }
  if (Ye.size > va) {
    const t = Array.from(Ye.entries()).sort(
      (r, o) => r[1].timestamp - o[1].timestamp
    );
    t.slice(0, t.length - va).forEach(([r]) => Ye.delete(r));
  }
}

const Pt = ot((e, t) => ({
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
        const { usePostsStore: u } = await Promise.resolve().then(() => co);
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
    _v();
    const s = Er.getState().commentsSort;
    const a = n;
    const c = Ye.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < mv) {
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

          Ye.set(a, {
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

      Ye.set(a, {
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
    const a = Er.getState().commentsSort;
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
          comments: u.length > wa ? u.slice(-wa) : u,
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
      const E = [...t().comments];
      if (s) {
        const _ = E.findIndex(y => y.previewReplies?.some(v => v.id === n)
        );
        if (_ !== -1) {
          const y = E[_].previewReplies.findIndex(v => v.id === n);
          if (y !== -1) {
            const v = [...E[_].previewReplies];
            (v[y] = { ...v[y], reactions: { total: f, myReaction: u } });
            (E[_] = { ...E[_], previewReplies: v });
          }
        }
      } else {
        const _ = E.findIndex(y => y.id === n);

        if (_ !== -1) {
          (E[_] = { ...E[_], reactions: { total: f, myReaction: u } });
        }
      }
      e({ comments: E });
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

        const E = {
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
                  previewReplies: [...(y.previewReplies || []), E],
                  stats: { ...y.stats, replies: y.stats.replies + 1 },
                }
              : y
            ),

            highlightedCommentId: u.id
          })
            : _ => ({
            comments: [E, ..._.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: d } = await Q(async () => {
          const { usePostsStore: g } = await Promise.resolve().then(() => co);
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

      const h = Er.getState().commentsSort;
      const m = Ye.get(n);

      if (m) {
        Ye.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        Ye.set(n, {
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

    const { usePostsStore: c } = await Q(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => co);
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
    Ye.clear();

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

const yv = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Pt },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Rr = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const vv = 0;
const wv = 1;
const Ev = 2;
const Sv = 3;
const Ea = 4;
const bv = 5;
const Cv = 250;
const Tv = 0.5;
const Iv = 30000/* 3e4 */;
const Nv = 2000/* 2e3 */;
const kv = 20;
const Sa = "dwell_sid";

const Rv = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function Pv() {
  try {
    let e = sessionStorage.getItem(Sa);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Sa, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function Av(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= Tv ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class xv {
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
    (this.sessionId = Pv());

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
        { threshold: Rv }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const r of n) {
      window.addEventListener(r, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const r = document.hidden ? Ev : null;
      this.evaluateAll(r);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(wv);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(Sv);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), Nv);
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
        this.evaluate(c, Ea);
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
      this.evaluate(r, Ea);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < Iv && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const o = !!t_lastEntry && Av(t_lastEntry);
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

      if (u < Cv) {
        return;
      }

      const f = n ?? (o ? bv : vv);
      const d = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const p = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: f, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (p) {
        (h.s = Rr[t.source]);
      }

      if (d) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, Rr[t.source]);
    }
  }
  enqueue(t, n, r) {
    this.buffer.push(t);

    if (this.buffer.length >= kv) {
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
    M.post(L.posts.dwellLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    M.post(
      L.posts.dwellLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const ba = new xv();
function Ov(e, t, n, r = "", o = undefined) {
  F(() => {
    const t_current = t.current;
    if (!(!t_current || !o)) {
      ba.observe(t_current, e, n, r, o);

      return () => {
        ba.unobserve(t_current);
      };
    }
  }, [e, t, n, r, o]);
}
function As(e) {
  const t = re(n => n.postStatsCache[e.id]);
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

const $v = ne(() => Q(() => import("./index-C4ZZPQNv.js"), __vite__mapDeps([8, 9])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const Lv = ne(() => Q(
  () => import("./index-DXx_nwTn.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const Zl = ({
  href: e,
  icon: t,
  children: n,
  badge: r,
  onActiveClick: o,
  isActive: s = false,
}) => {
  const [a] = tr();
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

const lo = e => i(Zl, { ...e });

const Mv = () => {
  const [e] = tr();

  const t = re(b => b.fetchFeed);

  const n = re(b => b.isRefreshing);

  const r = we(b => b.logout);

  const o = Ps();
  const s = Rs();
  const a = Kl();
  const { initialize: c, disconnectSSE: l } = At();
  const [u, f] = $(false);
  const [d, p] = $(false);
  const h = Ol();

  const m = Ss(b => b.fetchPortal);

  const g = s?.username ? `/@${s.username}` : "/profile";

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

  const E = N(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      t(true);
    }
  }, [t]);

  const _ = N(() => {
    r();
  }, [r]);

  const y = Se(() => {
    const b = e.url || "/";
    return Ns.some(S => b.startsWith(S));
  }, [e.url]);

  const v = Se(() => {
    const b = e.url || "/";
    return s?.username
      ? b === `/@${s.username}` || b.startsWith(`/@${s.username}/`)
      : false;
  }, [e.url, s?.username]);

  return y
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
                  i(zg, {}),
                  i("button", {
                    className: Oe.asideBrandVersion,
                    onClick: () => f(true),
                    title: "Что нового",
                    children: ["v", "1.1.2"],
                  }),
                ],
              }),
              i("nav", {
                className: Oe.nav,
                children: [
                  i(lo, {
                    href: "/",
                    icon: n ? i(Cs, {}) : i(Fl, {}),
                    onActiveClick: E,
                    children: "Лента",
                  }),
                  i(lo, {
                    href: "/search",
                    icon: i(zl, {}),
                    children: "Поиск",
                  }),
                  i(t_, {
                    path: "/event",
                    children: ({ matches: b }) => i("a", {
                      href: h.active && h.url ? h.url : "/event",
                      target: h.active && h.url ? "_blank" : undefined,
                      rel:
                        h.active && h.url ? "noopener noreferrer" : undefined,
                      className: `${Oe.portalButton} ${
                        h.active ? Oe.portalActive : ""
                      } ${b ? Oe.active : ""}`,
                      title: "Ивент",
                      children: [
                        i("img", {
                          src: h.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: Oe.portalImage,
                        }),
                        i("span", { children: "Ивент" }),
                      ],
                    }),
                  }),
                  i(lo, {
                    href: "/notifications",
                    icon: i(Wl, {}),
                    badge: a,
                    children: "Уведомления",
                  }),
                  i(Zl, {
                    href: g,
                    icon: i(jl, {}),
                    isActive: v,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: Oe.asideBottom,
            children: [
              !s?.subscription?.isActive &&
                i("button", {
                  className: Oe.logoutButton,
                  onClick: () => p(true),
                  children: [
                    i("span", { children: "⭐" }),
                    i("span", { children: "ИТД НУКСТА" }),
                  ],
                }),
              i("button", {
                className: Oe.logoutButton,
                onClick: _,
                children: [
                  i(Gg, { size: 20 }),
                  i("span", { children: "Выйти" }),
                ],
              }),
            ],
          }),
          u &&
            i(Ie, {
              fallback: null,
              children: i($v, { isOpen: u, onClose: () => f(false) }),
            }),
          d &&
            i(Ie, {
              fallback: null,
              children: i(Lv, { isOpen: d, onClose: () => p(false) }),
            }),
        ],
      });
};

const Dv = "NwCL";
const Uv = "ZKYr";
const Fv = "fvYw";
const Bv = "MEJX";
const Pn = { sidebar: Dv, sidebarContent: Uv, sidebarBottom: Fv, legalLinks: Bv };

const Hv = () => {
  const [e] = tr();
  return Se(() => {
    const n = e.url || "/";
    return Ns.some(r => n.startsWith(r));
  }, [e.url])
    ? null
    : i("aside", {
        className: Pn.sidebar,
        children: [
          i("div", { className: Pn.sidebarContent }),
          i("div", {
            className: Pn.sidebarBottom,
            children: [
              i("ul", {
                className: Pn.legalLinks,
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
                className: Pn.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const Vv = "Olaj";
const Wv = "Xlfx";
const jv = "vAwQ";
const zv = "bus1";
const qv = "yJ1N";
const Gv = "wF2i";
const Yv = "lheU";
const Xv = "Mkpo";
const Kv = "orK2";
const Zv = "vIaL";
const Jv = "mYRR";
const Qv = "qPDr";

const Be = {
  mobileNavigationWrapper: Vv,
  navigation: Wv,
  indicator: jv,
  indicatorHidden: zv,
  navItem: qv,
  label: Gv,
  active: Yv,
  createButton: Xv,
  iconWrapper: Kv,
  portalImage: Zv,
  portalImageActive: Jv,
  badge: Qv,
};

const Ca = e => Symbol.iterator in e;

const Ta = e => "entries" in e;

const Ia = (e, t) => {
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

const e0 = (e, t) => {
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

function t0(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : Ca(e) && Ca(t)
    ? Ta(e) && Ta(t)
      ? Ia(e, t)
      : e0(e, t)
    : Ia(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Na(e) {
  const t = Ln.useRef(undefined);
  return (n) => {
    const r = e(n);
    return t0(t.current, r) ? t.current : (t.current = r);
  };
}
const n0 = "LL3F";
const r0 = "oStC";
const o0 = "ekat";
const s0 = "Qy6e";
const i0 = "REJH";
const a0 = "FOdg";
const c0 = "GdQM";
const l0 = "b3zL";
const u0 = "igEr";
const d0 = "Jq4M";
const f0 = "TRxm";
const h0 = "EruP";
const p0 = "aj9z";
const m0 = "VaNO";
const g0 = "CXES";
const _0 = "kdS8";
const y0 = "fJzL";
const v0 = "beE6";
const w0 = "fXg9";
const E0 = "U3DQ";
const S0 = "S3aq";
const b0 = "YRfW";
const C0 = "dR9i";

const X = {
  skeleton: n0,
  comment: r0,
  content: o0,
  header: s0,
  headerLeft: i0,
  body: a0,
  actions: c0,
  likeBtn: l0,
  shimmer: u0,
  avatar: d0,
  more: f0,
  likeIcon: h0,
  name: p0,
  time: m0,
  line: g0,
  w100: _0,
  w85: y0,
  w65: v0,
  w50: w0,
  w40: E0,
  replyLabel: S0,
  likeCount: b0,
  list: C0,
};

function T0(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: X.body,
          children: i("div", { className: `${X.shimmer} ${X.line} ${X.w50}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: X.body,
          children: [
            i("div", { className: `${X.shimmer} ${X.line} ${X.w100}` }),
            i("div", { className: `${X.shimmer} ${X.line} ${X.w65}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: X.body,
          children: [
            i("div", { className: `${X.shimmer} ${X.line} ${X.w100}` }),
            i("div", { className: `${X.shimmer} ${X.line} ${X.w85}` }),
            i("div", { className: `${X.shimmer} ${X.line} ${X.w40}` }),
          ],
        });
      }
  }
}
function xs({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("div", {
    className: X.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: X.comment,
      children: [
        i("div", { className: `${X.shimmer} ${X.avatar}` }),
        i("div", {
          className: X.content,
          children: [
            i("div", {
              className: X.header,
              children: [
                i("div", {
                  className: X.headerLeft,
                  children: [
                    i("div", { className: `${X.shimmer} ${X.name}` }),
                    i("div", { className: `${X.shimmer} ${X.time}` }),
                  ],
                }),
                i("div", { className: `${X.shimmer} ${X.more}` }),
              ],
            }),
            T0(e),
            i("div", {
              className: X.actions,
              children: [
                i("div", { className: `${X.shimmer} ${X.replyLabel}` }),
                i("div", {
                  className: X.likeBtn,
                  children: [
                    i("div", { className: `${X.shimmer} ${X.likeIcon}` }),
                    i("div", { className: `${X.shimmer} ${X.likeCount}` }),
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
const ka = ["medium", "short", "long", "medium", "short"];
function I0({ count: e = 4 }) {
  return i("div", {
    className: X.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(xs, { variant: ka[n % ka.length], delayMs: n * 120 }, n)
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

const uo = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function N0() {
  const [e, t] = $(false);
  const [n, r] = $(uo);

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
      r(E => ({
        ...E,
        options: E.options.map(_ => _.id === m ? { ..._, text: g } : _)
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
          options: g.options.filter(E => E.id !== m)
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
    r(uo);
  }, []);

  const f = N(() => {
    t(m => !m);
  }, []);

  const d = N(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const g = n.options.filter(E => E.text.trim().length > 0);

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
    r(uo);
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
function Jl(e = 10, t = false) {
  const [n, r] = $([]);
  const [o, s] = $([]);
  const a = P(null);
  const c = P(n);
  const l = P(o);
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
      const b = dn.isValidVideoType(v);
      const S = dn.isValidImageType(v);
      if (b && !t) {
        yt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!S && !b) {
        yt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const I =
        c_current.some(O => O.type === "video") ||
        l_current.some(O => O.type === "video");

      const w =
        c_current.some(O => O.type === "image") ||
        l_current.some(O => O.type === "image");

      if (b && w) {
        yt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (S && I) {
        yt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (b && I) {
        yt.error("Можно загрузить только 1 видео");
        return;
      }
      const C = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const A = URL.createObjectURL(v);
      const k = b ? "video" : "image";
      s(O => [
        ...O,
        { id: C, file: v, previewUrl: A, progress: 0, type: k },
      ]);
      try {
        const O = await dn.uploadMedia(v);

        s(q => q.filter(he => he.id !== C));

        r(q => [
          ...q,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: O.id,
            url: O.url,
            previewUrl: A,
            type: k,
          },
        ]);
      } catch (O) {
        let q = "Ошибка загрузки";

        if (Ae(O)) {
          (q = w_(O.code, O.message));
        } else if (O instanceof Error) {
          (q = O.message);
        }

        yt.error(q);

        s(he => he.filter(se => se.id !== C));

        URL.revokeObjectURL(A);
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
      const R = e - T;
      if (R <= 0) {
        return;
      }
      Array.from(v_target_files).slice(0, R).forEach(h);
      (v_target.value = "");
    },
    [n.length, o.length, e, h]
  );

  const g = N((v) => {
    r((b) => {
      const S = b.find(T => T.id === v);

      if (S) {
        URL.revokeObjectURL(S.previewUrl);
      }

      return b.filter(T => T.id !== v);
    });

    s((b) => {
      const S = b.find(T => T.id === v);

      if (S) {
        URL.revokeObjectURL(S.previewUrl);
      }

      return b.filter(T => T.id !== v);
    });
  }, []);

  const E = N(
    (v) => {
      const b = v.filter(R => t ? dn.isValidMediaType(R) : dn.isValidImageType(R)
      );
      if (b.length === 0) {
        return;
      }
      const S = c.current.length + l.current.length;
      const T = e - S;

      if (T > 0) {
        b.slice(0, T).forEach(h);
      }
    },
    [e, h, t]
  );

  const _ = N(
    async (v) => {
      const [b, S] = v.split(",");
      const T = b.match(/:(.*?);/)?.[1] || "image/png";
      const R = atob(S);
      const I = new Uint8Array(R.length);
      for (let A = 0; A < R.length; A++) {
        I[A] = R.charCodeAt(A);
      }
      const w = new Blob([I], { type: T });
      const C = new File([w], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(C);
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
    uploadFiles: E,
    clearAll: y,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const k0 = "HiIj";
const R0 = "KUtC";
const P0 = "KbQc";
const A0 = "RC0x";
const x0 = "I8xB";
const O0 = "LQqG";
const $0 = "qmMQ";
const L0 = "GTwF";
const M0 = "dFeV";
const D0 = "aM3T";
const U0 = "zssi";
const F0 = "piXR";
const B0 = "ReM9";
const H0 = "Ob1A";
const V0 = "lzFs";
const W0 = "bd9G";
const j0 = "F0zR";
const z0 = "jlgD";
const q0 = "scJE";
const G0 = "tllf";
const Y0 = "yzro";
const X0 = "nU8K";
const K0 = "aZWV";
const Z0 = "QiDs";
const J0 = "XbX6";
const Q0 = "rMyS";
const ew = "G6d1";
const tw = "f2e8";
const nw = "zn5B";
const rw = "jHAa";
const ow = "B4vv";
const sw = "cuM4";
const iw = "DynK";
const aw = "W6Cp";
const cw = "xMje";

const J = {
  form: k0,
  dragActive: R0,
  whatsNew: P0,
  editor: A0,
  dragOverlay: x0,
  attachments: O0,
  attachmentPreview: $0,
  uploading: L0,
  uploadError: M0,
  videoPreviewWrapper: D0,
  videoPlayIcon: U0,
  uploadOverlay: F0,
  spinner: B0,
  errorOverlay: H0,
  errorText: V0,
  removeAttachment: W0,
  actions: j0,
  mediaButtons: z0,
  mediaButton: q0,
  submitGroup: G0,
  charCount: Y0,
  error: X0,
  pollContainer: K0,
  pollHeader: Z0,
  pollTitle: J0,
  pollClose: Q0,
  pollQuestion: ew,
  pollOptions: tw,
  pollOptionRow: nw,
  pollOption: rw,
  removeOption: ow,
  addOption: sw,
  pollFooter: iw,
  pollToggle: aw,
  active: cw,
};

function Ra({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: J.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: J.videoPlayIcon,
            children: i(Hg, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function Ql({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: J.attachments,
        children: [
          e.map(o => i(
            "div",
            {
              className: J.attachmentPreview,
              children: [
                i(Ra, { src: o.previewUrl, type: o.type }),
                i("button", {
                  className: J.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(lt, {}),
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
                i(Ra, { src: o.previewUrl, type: o.type }),
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
                  children: i(lt, {}),
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
function lw({
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
            children: i(lt, {}),
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
                  children: i(lt, {}),
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
          children: [i(Ts, {}), i("span", { children: "Добавить вариант" })],
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
const uw = "HpKp";
const dw = "gIZl";
const fw = "tuNE";
const hw = "VboU";
const pw = "YBXT";
const mw = "DfgA";
const gw = "aBxp";
const _w = "BB8O";
const yw = "SzAl";
const vw = "ohNe";
const ww = "lw9u";
const Ew = "zkq0";
const Sw = "yM5v";
const bw = "Hq9F";
const Cw = "Ctx6";
const Tw = "SHFa";

const Le = {
  editor: uw,
  empty: dw,
  bold: fw,
  italic: hw,
  underline: pw,
  strike: mw,
  spoiler: gw,
  monospace: _w,
  quote: yw,
  link: vw,
  menu: ww,
  buttons: Ew,
  button: Sw,
  linkForm: bw,
  linkInput: Cw,
  linkSubmit: Tw,
};

const Pr = {
  bold: Le.bold,
  italic: Le.italic,
  underline: Le.underline,
  strike: Le.strike,
  spoiler: Le.spoiler,
  monospace: Le.monospace,
  quote: Le.quote,
  link: Le.link,
};

function fo(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function Iw(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Nw(e) {
  return e !== "mention" && e !== "hashtag";
}
function Pa(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!Nw(r.type)) {
      continue;
    }
    const o = Pr[r.type];
    const s = r.type === "link" ? ` data-url="${Iw(r.url)}"` : "";
    n = `<span class="${o}"${s}>${n}</span>`;
  }
  return n;
}
function kw(e, t, n) {
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
function Rw(e, t) {
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
function Pw(e) {
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
      for (const [u, f] of Object.entries(Pr)) {
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
function Aw(e, t) {
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
function xw(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const Ow = [
    { type: "bold", icon: Og, title: "Жирный" },
    { type: "italic", icon: Lg, title: "Курсив" },
    { type: "underline", icon: Fg, title: "Подчёркнутый" },
    { type: "strike", icon: Ug, title: "Зачёркнутый" },
    { type: "spoiler", icon: Dg, title: "Спойлер" },
    { type: "monospace", icon: $g, title: "Моноширинный" },
    { type: "quote", icon: Mg, title: "Цитата" },
    { type: "link", icon: Ll, title: "Ссылка" },
  ];

const zr = _l((
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
  const m = P(null);
  const [g, E] = $(false);
  const [_, y] = $({ x: 0, y: 0 });
  const [v, b] = $(false);
  const [S, T] = $("");
  const R = P(null);
  const I = P(null);
  const w = P(null);
  const C = P(false);
  const A = P(false);
  const k = P(t);
  const O = P(n);
  const q = P(r);

  F(() => {
    (k.current = t);
    (O.current = n);
    (q.current = r);
  }, [t, n, r]);

  gs(
    h,
    () => ({
      insertText: (x) => {
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
          const oe = H.getRangeAt(0);
          te = kw(m_current, oe.startContainer, oe.startOffset);
        }
        const k_current = k.current;
        const O_current = O.current;
        const ae = k_current.slice(0, te) + x + k_current.slice(te);

        const Te = O_current.map(oe => oe.offset >= te
          ? { ...oe, offset: oe.offset + x.length }
          : oe.offset + oe.length > te
          ? { ...oe, length: oe.length + x.length }
          : oe
        );

        (A.current = true);
        (k.current = ae);
        (O.current = Te);
        const be = document.createTextNode(x);
        if (H.rangeCount > 0) {
          const oe = H.getRangeAt(0);
          oe.deleteContents();
          oe.insertNode(be);
          oe.setStartAfter(be);
          oe.setEndAfter(be);
          H.removeAllRanges();
          H.addRange(oe);
        }
        q.current(ae, Te);
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
      return fo(t);
    }

    const x = [...n].sort((z, ae) => z.offset - ae.offset);

    const U = [];
    for (const z of x) {
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
        (H += Pa(fo(ae), j));
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
      H += Pa(fo(z), j);
    }
    return H || "<br>";
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
    const U = he();

    if (m_current.innerHTML !== U) {
      (m_current.innerHTML = U);
    }
  }, [he, t]);

  F(() => {
    if (a && m.current) {
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
  }, [a]);

  F(() => {
    if (v && I.current) {
      I.current.focus();
    }
  }, [v]);

  const se = N(
      (x) => {
        if (C.current) {
          return;
        }
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        if (x?.data === " ") {
          const j = window.getSelection();
          if (j && j.rangeCount > 0) {
            const ae = j.getRangeAt(0).startContainer;
            let Te = null;
            let be = ae;

            while (be && be !== m_current) {
              if (be.nodeType === Node.ELEMENT_NODE) {
                const oe = be;
                if (oe.tagName === "SPAN" && oe.className) {
                  Te = oe;
                  break;
                }
              }
              be = be.parentNode;
            }

            if (Te) {
              const oe = Te.textContent || "";
              if (oe.endsWith(" ")) {
                Te.textContent = oe.slice(0, -1);
                const Dt = document.createTextNode(" ");
                Te.parentNode?.insertBefore(Dt, Te.nextSibling);
                const Ct = document.createRange();
                Ct.setStartAfter(Dt);
                Ct.setEndAfter(Dt);
                j.removeAllRanges();
                j.addRange(Ct);
              }
            }
          }
        }
        const H = m_current.innerText.replace(/\n$/, "");
        if (H.length > s) {
          const j = H.substring(0, s);
          (A.current = true);
          r(j, Rw(n, j));
          return;
        }
        const te = Pw(m_current);
        (A.current = true);
        r(H, te);
      },
      [s, r, n]
    );

  const pe = N(
    (x) => {
      if (d) {
        return;
      }
      const U = window.getSelection();
      if (!U || U.isCollapsed) {
        return;
      }
      x.preventDefault();
      (w.current = U.getRangeAt(0).cloneRange());

      const H = Math.max(
          10,
          Math.min(x.clientX - 150, window.innerWidth - 310)
        );

      const te = Math.max(10, x.clientY - 50);
      y({ x: H, y: te });
      E(true);
    },
    [d]
  );

  const de = N(
    (x) => {
      x.preventDefault();

      if (p && x.clipboardData?.files?.length) {
        const z = Array.from(x.clipboardData.files).filter(ae => ae.type.startsWith("image/")
        );
        if (z.length > 0) {
          p(z);
          return;
        }
      }

      const U = x.clipboardData?.getData("text/plain") || "";
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

  const G = N(() => {
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
    (x) => {
      if (x.key === "Enter" && !x.shiftKey && f) {
        x.preventDefault();
        f();
        return;
      }
      if (!d && (x.ctrlKey || x.metaKey)) {
        let U = null;
        switch (x.key.toLowerCase()) {
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
          x.preventDefault();
          W(U);
        }
      }
    },
    [f, d]
  );

  const W = N(
    (x, U) => {
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
      (z.className = Pr[x]);

      if (x === "link" && U) {
        (z.dataset.url = U);
      }

      const ae = Aw(j.commonAncestorContainer, Pr[x]);
      if (ae) {
        xw(ae);
      } else {
        try {
          j.surroundContents(z);
        } catch {
          const Te = j.extractContents();
          z.appendChild(Te);
          j.insertNode(z);
        }
      }
      se();
      E(false);
      b(false);
      T("");
      (w.current = null);
      m_current.focus();
    },
    [se]
  );

  const D = N(
    (x) => {
      if (x === "link") {
        b(true);
      } else {
        W(x);
      }
    },
    [W]
  );

  const fe = N(
    (x) => {
      x.preventDefault();

      if (S.trim()) {
        W("link", S.trim());
      }
    },
    [W, S]
  );

  F(() => {
    if (!g) {
      return;
    }

    const x = (H) => {
      if (R.current &&
        !R.current.contains(H.target)) {
        E(false);
        b(false);
        T("");
        (w.current = null);
      }
    };

    const U = () => {
      E(false);
      b(false);
      T("");
      (w.current = null);
    };

    document.addEventListener("mousedown", x);
    window.addEventListener("scroll", U, true);

    return () => {
      document.removeEventListener("mousedown", x);
      window.removeEventListener("scroll", U, true);
    };
  }, [g]);
  const Y = !t;
  return i(ke, {
    children: [
      i("div", {
        ref: m,
        className: `${Le.editor} ${c} ${Y ? Le.empty : ""}`,
        contentEditable: true,
        "data-placeholder": o,
        onInput: x => se(x),
        onFocus: G,
        onPaste: de,
        onContextMenu: pe,
        onKeyDown: ee,
        onCompositionStart: () => {
          C.current = true;
        },
        onCompositionEnd: () => {
          (C.current = false);
          se();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      g &&
        Mt(
          i("div", {
            ref: R,
            className: Le.menu,
            style: { left: _.x, top: _.y },
            children: v
              ? i("form", {
                  className: Le.linkForm,
                  onSubmit: fe,
                  children: [
                    i("input", {
                      ref: I,
                      type: "url",
                      className: Le.linkInput,
                      placeholder: "https://...",
                      value: S,
                      onInput: x => T(x.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: Le.linkSubmit,
                      disabled: !S.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: Le.buttons,
                  children: Ow.map(({ type: x, icon: U, title: H }) => i(
                    "button",
                    {
                      type: "button",
                      className: Le.button,
                      onClick: () => D(x),
                      title: H,
                      children: i(U, { size: 16 }),
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

const $w = "asCL";
const Lw = "M0co";
const Mw = "wubQ";
const Dw = "vAcb";
const Uw = "CnKO";
const Fw = "vuDG";
const Bw = "SRkf";
const Hw = "sTdA";
const Vw = "uGxN";
const Ww = "lgjP";
const jw = "S90J";
const zw = "uzPW";
const qw = "XA9C";
const Gw = "ysxK";
const Yw = "KDLX";
const Xw = "l9oC";
const Kw = "T6o7";
const Zw = "MXQj";
const Jw = "jbMW";
const Qw = "Rske";
const eE = "MNOX";

const ye = {
  commentInput: $w,
  replyMode: Lw,
  inputRow: Mw,
  attachmentStrip: Dw,
  circleButton: Uw,
  micButton: Fw,
  sendButton: Bw,
  submitting: Hw,
  textareaContainer: Vw,
  expanded: Ww,
  voiceMode: jw,
  inputWrapper: zw,
  commentCharCount: qw,
  error: Gw,
  input: Yw,
  replyHeader: Xw,
  replyText: Kw,
  replyName: Zw,
  replyClose: Jw,
  dragActive: Qw,
  dragOverlay: eE,
};

const tE = "Prv3";
const nE = "LBcU";
const rE = "Xj4F";
const ho = { textInput: tE, entering: nE, sendButton: rE };
const oE = 1000/* 1e3 */;
function sE({
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
  const f = oE - e.length;
  const d = f < 0;
  const p = [ho.textInput, s ? ho.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: p,
    children: [
      i("div", {
        className: ye.inputWrapper,
        children: [
          i(zr, {
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
        className: `${ye.circleButton} ${ye.sendButton} ${ho.sendButton} ${
          c ? ye.submitting : ""
        }`,
        onClick: o,
        disabled: c || l || d,
        children: c ? i(Gl, { size: "xs" }) : i(Vg, { size: 20 }),
      }),
    ],
  });
}
const iE = ne(() => Q(
  () => import("./VoiceInput-Dnml3SFK.js"),
  __vite__mapDeps([10, 11, 12])
).then(e => ({
  default: e.VoiceInput
}))
);
function eu({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: o,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = jr();
  const [f, d] = $("text");
  const [p, h] = $(false);
  const [m, g] = $(false);
  const [E, _] = $(false);
  const [y, v] = $(false);
  const b = P(false);
  const S = P(null);
  const T = P(0);

  const {
    images: R,
    uploadingImages: I,
    isUploading: w,
    openFilePicker: C,
    removeImage: A,
    uploadFiles: k,
    clearAll: O,
    fileInputRef: q,
    handleFileChange: he,
  } = Jl(4);

  F(
    () => () => {
      if (S.current) {
        clearTimeout(S.current);
      }
    },
    []
  );
  const se = R.length > 0 || I.length > 0;
  const pe = a.length > 0 || E || se;
  const de = f === "voice";
  const G = 1000/* 1e3 */;

  const ee = async () => {
    const j = a.trim().length > 0;
    const z = R.length > 0;
    if ((!j && !z) || E || w || a.length > G) {
      return;
    }
    const ae = a.trim();
    const Te = [...c];

    const be = R.map(oe => ({
      mediaId: oe.mediaId
    }));

    _(true);
    try {
      await e(ae, Te, be.length > 0 ? be : undefined);
      u();
      O();
    } catch (oe) {
      console.error("Failed to submit comment:", oe);
    } finally {
      _(false);
    }
  };

  const W = () => {
    (b.current = true);
    d("voice");
    g(false);
  };

  const D = () => {
    h(true);
  };

  const fe = () => {
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

  const Y = N((j) => {
    j.preventDefault();
    j.stopPropagation();
    T.current++;

    if (j.dataTransfer?.types.includes("Files")) {
      v(true);
    }
  }, []);

  const x = N((j) => {
    j.preventDefault();
    j.stopPropagation();
  }, []);

  const U = N((j) => {
    j.preventDefault();
    j.stopPropagation();
    T.current--;

    if (T.current === 0) {
      v(false);
    }
  }, []);

  const H = N(
    (j) => {
      j.preventDefault();
      j.stopPropagation();
      (T.current = 0);
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

  return i("div", {
    className: te,
    onDragEnter: Y,
    onDragOver: x,
    onDragLeave: U,
    onDrop: H,
    children: [
      y &&
        i("div", {
          className: ye.dragOverlay,
          children: [
            i(Hl, { size: 24 }),
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
              children: i(lt, { size: 16 }),
            }),
          ],
        }),
      !de &&
        !p &&
        se &&
        i("div", {
          className: ye.attachmentStrip,
          children: i(Ql, { images: R, uploadingImages: I, onRemove: A }),
        }),
      i("div", {
        className: ye.inputRow,
        children: [
          i("button", {
            className: ye.circleButton,
            onClick: de ? D : C,
            children: de ? i(lt, { size: 20 }) : i(Ml, { size: 20 }),
          }),
          i("div", {
            className: ye.textareaContainer,
            children:
              de || p
                ? i(Ie, {
                    fallback: null,
                    children: i(iE, {
                      onCancel: D,
                      onSend: t,
                      isExiting: p,
                      onExitComplete: fe,
                    }),
                  })
                : i(sE, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: ee,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: E,
                    sendDisabled: w,
                    onImagePaste: k,
                  }),
          }),
          !de &&
            !p &&
            i("button", {
              className: `${ye.circleButton} ${ye.micButton}`,
              onClick: W,
              children: i(Bg, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: q,
        type: "file",
        accept: qo,
        multiple: true,
        onChange: he,
        style: { display: "none" },
      }),
    ],
  });
}
const aE = "MSYu";
const cE = "mFi3";
const lE = "TBEH";
const uE = "ylz4";
const dE = "nSFt";
const fE = "D0a2";
const hE = "LiSv";

const Wt = {
  counter: aE,
  digit: cE,
  prev: lE,
  current: uE,
  animating: dE,
  up: fE,
  down: hE,
};

function pE(e) {
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
function Mn({ value: e }) {
  const t = pE(e);
  const n = P(e);
  const r = P(t.length);
  const o = P(Date.now());

  const [s, a] = $(() => t
    .split("")
    .map((d, p) => ({
    char: d,
    prevChar: d,
    isAnimating: false,
    key: p
  }))
  );

  const [c, l] = $(null);

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

    const m = s.map(b => b.char);

    const g = Math.max(h.length, m.length);
    const E = m.join("").padStart(g, " ").split("");

    const y = h
      .join("")
      .padStart(g, " ")
      .split("")
      .map((b, S) => {
      const T = E[S] || " ";
      const R = s[S - (g - s.length)];
      return b !== T
        ? (r.current++,
          { char: b, prevChar: T, isAnimating: true, key: r.current })
        : { char: b, prevChar: b, isAnimating: false, key: R?.key ?? S };
    })
      .filter(b => b.char !== " " || b.isAnimating);

    a(y);
    const v = setTimeout(() => {
      a(b => b.map(S => ({
        ...S,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(v);
  }, [e]);

  if (!s.some(d => d.isAnimating)) {
    return i("span", { children: t });
  }

  const f = c === "up" ? Wt.up : c === "down" ? Wt.down : "";
  return i("span", {
    className: Wt.counter,
    children: s.map(d => d.isAnimating
      ? i(
          "span",
          {
            className: `${Wt.digit} ${Wt.animating} ${f}`,
            children: [
              i("span", { className: Wt.prev, children: d.prevChar }),
              i("span", { className: Wt.current, children: d.char }),
            ],
          },
          d.key
        )
      : i("span", { children: d.char }, d.key)
    ),
  });
}
const mE = "AtVR";
const gE = "ws1a";
const _E = "OHAh";
const yE = "ZQh4";
const vE = "EQd8";
const wE = "EyPE";
const EE = "VZ7p";
const SE = "erBu";
const bE = "NUrh";

const ht = {
  dropdownWrapper: mE,
  trigger: gE,
  menu: _E,
  hidden: yE,
  menuItem: vE,
  danger: wE,
  itemIcon: EE,
  itemLabel: SE,
  divider: bE,
};

function tu({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: o,
}) {
  const [s, a] = $(false);
  const [c, l] = $(false);
  const [u, f] = $({ top: 0, left: 0 });
  const d = P(null);
  const p = P(null);

  const h = N(() => {
    if (!d.current) {
      return;
    }
    const _ = d.current.getBoundingClientRect();
    const y = p.current?.offsetHeight || 150;
    const v = p.current?.offsetWidth || 160;
    let b = 0;
    let S = 0;

    if (n.startsWith("bottom")) {
      (b = _.bottom + 4);
    } else {
      (b = _.top - y - 4);
    }

    if (n.endsWith("right")) {
      (S = _.right - v);
    } else {
      (S = _.left);
    }

    const {
      innerWidth,
      innerHeight
    } = window;

    if (S + v > innerWidth) {
      (S = innerWidth - v - 8);
    }

    if (S < 8) {
      (S = 8);
    }

    if (b + y > innerHeight) {
      (b = _.top - y - 4);
    }

    if (b < 8) {
      (b = _.bottom + 4);
    }

    f({ top: b, left: S });
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

  const E = (_, y) => {
    _.stopPropagation();
    y.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${ht.dropdownWrapper} ${o || ""}`,
    children: [
      i("div", { ref: d, className: ht.trigger, onClick: g, children: e }),
      s &&
        Mt(
          i("div", {
            ref: p,
            className: `${ht.menu} ${c ? "" : ht.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((_, y) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${ht.menuItem} ${_.danger ? ht.danger : ""}`,
                    onClick: v => E(v, _),
                    children: [
                      _.icon &&
                        i("span", {
                          className: ht.itemIcon,
                          children: _.icon,
                        }),
                      i("span", {
                        className: ht.itemLabel,
                        children: _.label,
                      }),
                    ],
                  }),
                  r.includes(_.id) &&
                    y < t.length - 1 &&
                    i("div", { className: ht.divider }),
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
const CE = "bvyz";
const TE = "qBhn";
const IE = "Pei3";
const NE = "hCGo";
const kE = "Povs";
const RE = "Bm3u";
const PE = "yLb4";
const AE = "LAIj";

const Nt = {
  underline: CE,
  monospace: TE,
  quote: IE,
  spoiler: NE,
  revealed: kE,
  link: RE,
  mention: PE,
  hashtag: AE,
};

function xE(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function OE(e) {
  if (!xE(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const o = btoa(r);
  return `/external?url=${encodeURIComponent(o)}`;
}
function nu({ text: e, spans: t = [], className: n = "" }) {
  const [r, o] = $(new Set());

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
        let g;
        let E;
        let _;

        d.forEach((y) => {
          m.add(y.type);

          if (y.type === "link" && y.url) {
            (g = y.url);
          }

          if (y.type === "mention" &&
            (y.username || y.id)) {
            (E = y.username || y.id);
          }

          if (y.type === "hashtag" && y.tag) {
            (_ = y.tag);
          }
        });

        u.push({ text: h, styles: m, url: g, mentionId: E, hashtag: _ });
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
      (l_text = i("span", { className: Nt.underline, children: l_text }));
    }

    if (l.styles.has("strike")) {
      (l_text = i("s", { children: l_text }));
    }

    if (l.styles.has("monospace")) {
      (l_text = i("code", { className: Nt.monospace, children: l_text }));
    }

    if (l.styles.has("quote")) {
      (l_text = i("span", { className: Nt.quote, children: l_text }));
    }

    if (l.styles.has("spoiler")) {
      const d = r.has(u);
      l_text = i("span", {
        className: `${Nt.spoiler} ${d ? Nt.revealed : ""}`,
        onClick: p => a(p, u),
        children: l_text,
      });
    }

    if (l.styles.has("link") && l.url) {
      const d = OE(l.url);
      l_text = i("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Nt.link,
        onClick: p => p.stopPropagation(),
        children: l_text,
      });
    }
    if (l.styles.has("mention") && l.mentionId) {
      const d = `/@${l.mentionId}`;
      l_text = i("a", {
        href: d,
        className: Nt.mention,
        onClick: (p) => {
          p.preventDefault();
          p.stopPropagation();
          ze(d);
        },
        children: l_text,
      });
    }
    if (l.styles.has("hashtag") && l.hashtag) {
      const d = `/hashtag/${encodeURIComponent(l.hashtag)}`;
      l_text = i("a", {
        href: d,
        className: Nt.hashtag,
        onClick: (p) => {
          p.preventDefault();
          p.stopPropagation();
          ze(d);
        },
        children: l_text,
      });
    }
    return i("span", { children: l_text }, u);
  };

  return i("span", { className: n, children: s.map((l, u) => c(l, u)) });
}
function $E(e, t, n) {
  const { isVisible: r, isRevealing: o, onRevealComplete: s } = n;
  const a = P([]);
  const c = P(null);
  const l = P(null);
  const u = P({ width: 0, height: 0 });
  const f = P(1);

  const d = N((g, E) => {
    const _ = Math.random() * 80 + 60;
    return {
      x: Math.random() * g,
      y: Math.random() * E,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * _,
      maxLife: _,
    };
  }, []);

  const p = N(
    (g, E) => {
      const _ = Math.floor((g * E) / 600);
      const y = [];
      for (let v = 0; v < _; v++) {
        y.push(d(g, E));
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

      a.current.forEach((v, b) => {
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
          a.current[b] = d(_, y);
          return;
        }

        const S = v.life / v.maxLife;
        const T = S < 0.3 ? S / 0.3 : 1;
        const R = v.opacity * T * f.current;
        l_current.beginPath();
        l_current.arc(v.x, v.y, v.size, 0, Math.PI * 2);
        (l_current.fillStyle = `rgba(255, 255, 255, ${R})`);
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
const LE = "hIy8";
const ME = "TYv8";
const DE = "BCs2";
const UE = "Ww29";
const FE = "qXDy";
const An = { container: LE, hidden: ME, image: DE, revealing: UE, canvas: FE };
const Aa = 5;
function xa({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: r,
  height: o,
  className: s = "",
  onClick: a,
}) {
  const [c, l] = $(!n);
  const [u, f] = $(false);
  const [d, p] = $(false);
  const h = P(null);
  const m = P(null);
  const g = P(null);
  const E = P(false);

  const { resetOpacity: _ } = $E(h, m, {
    isVisible: d && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  F(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const I = new IntersectionObserver(
      (w) => {
        w.forEach((C) => {
          p(C.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    I.observe(m_current);

    return () => {
      I.disconnect();
    };
  }, []);

  const y = (R) => {
    (g.current = { x: R.clientX, y: R.clientY });
    (E.current = false);
  };

  const v = (R) => {
    if (!g.current) {
      return;
    }
    const I = Math.abs(R.clientX - g.current.x);
    const w = Math.abs(R.clientY - g.current.y);

    if ((I > Aa || w > Aa)) {
      (E.current = true);
    }
  };

  const b = (R) => {
    if (E.current) {
      (E.current = false);
      R.stopPropagation();
      return;
    }

    if (!c && !u && n) {
      R.stopPropagation();
      f(true);
      _();
    } else if (a) {
      a(R);
    }
  };

  const S = !c && n;
  const T = r && o ? { aspectRatio: `${r} / ${o}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${An.container} ${s} ${S ? An.hidden : ""} ${
          u ? An.revealing : ""
        }`,
        style: T,
        onPointerDown: y,
        onPointerMove: v,
        onClick: b,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: An.image,
            loading: "lazy",
            width: r,
            height: o,
            draggable: false,
          }),
          S && i("canvas", { ref: h, className: An.canvas }),
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
      });
}
const Oa = { photo_open: 1, video_progress: 2 };
const BE = 2000/* 2e3 */;
const HE = 20;
const $a = "dwell_sid";
function VE() {
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
class WE {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = VE());
      window.setInterval(() => this.flush(), BE);
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
    const s = { t: Oa.photo_open, v: t, ai: n };

    if (r !== undefined) {
      (s.mi = r);
    }

    if (o) {
      (s.s = Rr[o]);
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
      t: Oa.video_progress,
      v: t,
      ai: n,
      pm: Math.round(r),
      dm: Math.round(o),
    };

    if (s) {
      (a.s = Rr[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= HE) {
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
    M.post(L.posts.interactionLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    M.post(
      L.posts.interactionLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const jE = new WE();
function zE(e, t) {
  return N(
    (n, r) => {
      if (!e || !n) {
        return;
      }
      const o = t === "post_page" || t === "link";
      jE.trackPhotoOpen(e, n, r, o ? t : undefined);
    },
    [e, t]
  );
}
const qE = "I338";
const GE = "YKkH";
const YE = "Yi4Z";
const XE = "MwaJ";
const KE = "IluI";
const ZE = "bic9";
const JE = "Wid7";

const Pe = {
  mediaWrapper: qE,
  isFeed: GE,
  single: YE,
  image: XE,
  singleVideo: KE,
  media: ZE,
  dragging: JE,
};

const La = ne(() => Q(
  () => import("./PostMediaVideo-DHMxId4n.js"),
  __vite__mapDeps([13, 14])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const QE = 5;
const eS = 0.95;
const po = 0.5;
const tS = 650;
const nS = 500;
const rS = 300;
function oS(e, t, n, r) {
  const o = e / t;
  return o > n / r ? Math.min(e, n) : Math.min(t, r) * o;
}
function Os({ media: e, isFeed: t = false, postVs: n, source: r }) {
  const o = e?.filter(k => k.type === "image") ?? [];

  const s = e?.filter(k => k.type === "video") ?? [];

  const a = P(null);

  const c = Al(k => k.open);

  const u = bt() ? rS : nS;
  const f = zE(n, r);
  const d = P(false);
  const p = P(0);
  const h = P(0);
  const m = P(false);
  const g = P(0);
  const E = P(0);
  const _ = P(0);
  const y = P(null);

  const v = () => {
    if (y.current) {
      cancelAnimationFrame(y.current);
      (y.current = null);
    }
  };

  const b = () => {
    const a_current = a.current;
    if (a_current) {
      (_.current *= eS);

      if (Math.abs(_.current) < po) {
        v();
        return;
      }

      (a_current.scrollLeft += _.current);
      (y.current = requestAnimationFrame(b));
    }
  };

  const S = (k) => {
    const a_current = a.current;

    if (a_current && o.length + s.length > 1) {
      v();
      (d.current = true);
      a_current.classList.add(Pe.dragging);
      (p.current = k.clientX);
      (g.current = k.clientX);
      (E.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (_.current = 0);
      k.preventDefault();
    }
  };

  const T = (k) => {
    if (!d.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const q = Date.now();
    const he = k.clientX - p.current;
    const se = k.clientX - g.current;
    const pe = q - E.current;

    if (Math.abs(he) > QE) {
      (m.current = true);
    }

    if (pe > 0) {
      (_.current = (-se / pe) * 16);
    }

    (g.current = k.clientX);
    (E.current = q);
    (a_current.scrollLeft = h.current - he);
  };

  const R = () => {
    if (d.current && Math.abs(_.current) > po) {
      b();
    }

    (d.current = false);
    a.current?.classList.remove(Pe.dragging);
  };

  const I = () => {
    if (d.current) {
      Math.abs(_.current) > po && b();
      (d.current = false);
      a.current?.classList.remove(Pe.dragging);
    }
  };

  F(
    () => () => {
      v();
      a.current?.classList.remove(Pe.dragging);
    },
    []
  );

  const w = (k, O) => {
    if (m.current) {
      (m.current = false);
      O.stopPropagation();
      return;
    }
    const o_k = o[k];

    if (o_k) {
      f(o_k.id, k);
    }

    const he = (W) => {
      let D = W;
      let fe = 0;

      while (D && fe < 4) {
        const Y = window.getComputedStyle(D).borderRadius;
        if (Y && Y !== "0px" && Y !== "0%") {
          return Y;
        }
        (D = D.parentElement);
        fe++;
      }

      return "0px";
    };

    const se = O.currentTarget ?? null;
    const pe = se?.querySelector("img") ?? se;
    const de = pe?.getBoundingClientRect();
    let G = null;
    if (de) {
      const W = a.current?.getBoundingClientRect();
      const D = Math.max(0, W ? W.left : 0);
      const fe = Math.max(0, W ? W.top : 0);

      const Y = Math.min(
        typeof window !== "undefined" ? window.innerWidth : Infinity,
        W ? W.right : Infinity
      );

      const x = Math.min(
        typeof window !== "undefined" ? window.innerHeight : Infinity,
        W ? W.bottom : Infinity
      );

      const U = Math.max(de.left, D);
      const H = Math.max(de.top, fe);
      const te = Math.min(de.right, Y);
      const j = Math.min(de.bottom, x);
      const z = Math.max(0, te - U);
      const ae = Math.max(0, j - H);

      if (z > 0 &&
        ae > 0) {
        (G = {
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
      const a_current = a.current;
      if (!a_current) {
        return null;
      }
      const Y = a_current.querySelectorAll("img")[W];
      if (!Y) {
        return null;
      }
      Y.scrollIntoView({
        behavior: "instant",
        inline: "center",
        block: "nearest",
      });
      const x = Y.getBoundingClientRect();
      return {
        left: x.left,
        top: x.top,
        width: x.width,
        height: x.height,
        borderRadius: he(Y),
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
      G,
      ee
    );
  };

  const C = (k) => {
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

      const O =
        k.width && k.height
          ? {
              width: `${Math.round(oS(k.width, k.height, tS, u))}px`,
              aspectRatio: `${k.width} / ${k.height}`,
            }
          : undefined;

      return i("div", {
        className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: Pe.single,
          style: O,
          onClick: (q) => {
            q.stopPropagation();
            w(0, q);
          },
          children: i(
            xa,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              className: Pe.image,
              onClick: (q) => {
                q.stopPropagation();
                w(0, q);
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
        className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
        "data-count": 1,
        onClick: O => O.stopPropagation(),
        children: i("div", {
          className: Pe.singleVideo,
          children: i(Ie, {
            fallback: null,
            children: i(
              La,
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
    className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
    "data-count": A,
    children: i("div", {
      ref: a,
      className: `${Pe.media} ${t ? Pe.isFeed : ""}`,
      "data-count": A,
      onClick: C,
      onMouseDown: S,
      onMouseMove: T,
      onMouseUp: R,
      onMouseLeave: I,
      children: [
        s.map(k => i(
          Ie,
          {
            fallback: null,
            children: i(La, {
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
        o.map((k, O) => i(
          xa,
          {
            src: k.url,
            spoiler: k.spoiler,
            width: k.width,
            height: k.height,
            className: Pe.image,
            onClick: q => w(O, q),
          },
          k.id
        )
        ),
      ],
    }),
  });
}
const ru = 0.5;
const sS = 250;
const iS = 1000/* 1e3 */;
const aS = 50;
const cS = [0, ru, 1];
const Zt = new Set();
const Sr = new WeakMap();
const Xt = new Map();
const Kt = new Map();
const Ar = new Set();
const hr = new Set();
let mo = null;
let fn = null;
function lS(e) {
  if (Ar.size !== 0) {
    hr.add(e);

    mo === null &&
      (mo = setTimeout(() => {
      (mo = null);

      if (hr.size === 0) {
        return;
      }

      const t = Array.from(hr);
      hr.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const r of Ar) {
        r(n);
      }
    }, aS));
  }
}
function uS() {
  return (fn || (typeof IntersectionObserver === "undefined" ? null : ((fn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Sr.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const r = t.intersectionRatio >= ru;
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
                  lS(o);
                }, sS);
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
                }, iS);
                Kt.set(o, a);
              }
            }
          }
        },
        { threshold: cS }
      )), fn)));
}

const xr = {
    observe(e, t) {
      const n = uS();
      if (!n) {
        return;
      }
      const r = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (r.length !== 0) {
        Sr.set(e, r);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!fn) {
        return;
      }
      const t = Sr.get(e);
      fn.unobserve(e);
      Sr.delete(e);

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
      Ar.add(e);

      return () => {
        Ar.delete(e);
      };
    },
  };

const dS = "Hz43";
const fS = "DOyv";
const hS = "tR2R";
const go = { hint: dS, multiline: fS, arrow: hS };
function br({ text: e, children: t, className: n, multiline: r }) {
  const o = P(null);
  const [s, a] = $(null);

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
        Mt(
          i("div", {
            className: `${go.hint} ${r ? go.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: go.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const pS = "SI9W";
const mS = "tqsB";
const gS = "f89f";
const _S = "YUwn";
const yS = "ITLr";
const vS = "m4Xl";
const wS = "oUK3";
const ES = "V4Fr";

const kt = {
  header: pS,
  headerMain: mS,
  moreDropdown: gS,
  pinnedBadge: _S,
  authorInfo: yS,
  authorLink: vS,
  time: wS,
  edited: ES,
};

function SS({
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
  const p = $l(t);

  const h = we(y => y.profile?.id);

  const m = e.id === h;
  const g = 2880 * 60 * 1000/* 1e3 */;
  const E = m && Date.now() - new Date(t).getTime() < g;

  const _ = Se(() => {
    const y = [];

    y.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(Ll, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (E) {
      y.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Ul, { size: 16 }),
        onClick: () => l?.(r),
      });
    }

    if (s) {
      y.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: i(ua, { size: 16 }),
        onClick: () => f?.(r),
      });
    }

    if ((m || s)) {
      y.push({
        id: "delete",
        label: "Удалить",
        icon: i(ql, { size: 16 }),
        danger: true,
        onClick: () => u?.(r),
      });
    }

    if (!m) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(Bl, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return y;
  }, [m, E, s, a, r, l, u, f, c, d]);

  return i("header", {
    className: kt.header,
    children: [
      a &&
        i("div", {
          className: kt.pinnedBadge,
          children: [
            i(ua, { size: 14 }),
            i("span", { children: "Закреплённый пост" }),
          ],
        }),
      i("div", {
        className: kt.headerMain,
        children: [
          o &&
            i("a", {
              href: `/@${e.username}`,
              children: i(rt, {
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
                children: i(nr, {
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
                    i(br, {
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
          i(tu, {
            trigger: i(Vl, { size: 18 }),
            items: _,
            position: "bottom-right",
            className: kt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const bS = "ipEX";
const CS = "UXQJ";
const TS = "a9fk";
const IS = "z3Py";
const NS = "dI2R";
const kS = "sNtM";
const RS = "QNrC";
const PS = "gCsI";
const AS = "fik7";
const xS = "C4aH";
const OS = "tWLv";
const $S = "m3ei";
const LS = "tz7M";
const MS = "Brjv";
const DS = "dSpj";
const US = "uxeM";
const FS = "GY3L";

const Ce = {
  actions: bS,
  compact: CS,
  action: TS,
  views: IS,
  actionsLeft: NS,
  disabled: kS,
  liked: RS,
  unliked: PS,
  reposted: AS,
  noAnimation: xS,
  reactionWrapper: OS,
  actionsRight: $S,
  captured: LS,
  capturedEmoji: MS,
  capturedText: DS,
  capturedMobile: US,
  capturedSolo: FS,
};

function ou({
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
}) {
  const h = P(false);
  const m = d ? 17 : 20;
  return i("footer", {
    className: `${Ce.actions} ${d ? Ce.compact : ""}`,
    children: [
      i("div", {
        className: Ce.actionsLeft,
        children: [
          i("div", {
            className: Ce.reactionWrapper,
            onClick: g => g.stopPropagation(),
            children: i("button", {
              className: `${Ce.action} ${e ? Ce.liked : ""} ${
                h.current && !e ? Ce.unliked : ""
              } ${!h.current && e ? Ce.noAnimation : ""}`,
              onClick: (g) => {
                g.stopPropagation();
                (h.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                i(bs, { filled: e, size: m }, e ? "liked" : "not-liked"),
                i(Mn, { value: n }),
              ],
            }),
          }),
          i("button", {
            className: Ce.action,
            onClick: (g) => {
              g.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [i(Dl, { size: m }), i(Mn, { value: o })],
          }),
          i("button", {
            className: `${Ce.action} ${t ? Ce.reposted : ""} ${
              f ? Ce.disabled : ""
            }`,
            onClick: (g) => {
              g.stopPropagation();

              if (!f) {
                l();
              }
            },
            disabled: f,
            "aria-label": "Репост",
            children: [i(Is, { size: m }), i(Mn, { value: r })],
          }),
        ],
      }),
      i("div", {
        className: Ce.actionsRight,
        children: [
          a &&
            (p
              ? i(br, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ce.capturedSolo,
                  children: i("span", {
                    className: Ce.capturedEmoji,
                    children: a,
                  }),
                })
              : i(ke, {
                  children: [
                    i(br, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: Ce.captured,
                      children: [
                        i("span", { className: Ce.capturedEmoji, children: a }),
                        i("span", {
                          className: Ce.capturedText,
                          children: "Пост захвачен",
                        }),
                      ],
                    }),
                    i(br, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: Ce.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: Ce.views,
            children: [i(e_, { size: m }), i(Mn, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const BS = ne(() => Q(() => import("./index-xYJ4tMmW.js"), __vite__mapDeps([15, 16, 17])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function su(e, t) {
  const { openModal: n, closeModal: r, onDelete: o } = t;
  const s = bt();

  const a = re(I => I.deletePost);

  const c = re(I => I.updatePostLike);

  const l = re(I => I.updatePollVote);

  const u = re(I => I.updatePollData);

  const f = As(e);
  const d = f.myReaction !== null;
  const f_likesTotal = f.likesTotal;

  const h = Se(() => iu(e.attachments), [e.attachments]);

  const m = N(async () => {
    const I = d;
    const w = I ? -1 : 1;
    c(e.id, I ? null : "love", w);
    try {
      if (I) {
        await $e.unlikePost(e.id);
      } else {
        await $e.likePost(e.id);
      }
    } catch (C) {
      c(e.id, I ? "love" : null, -w);
      console.error("Failed to toggle like:", C);
    }
  }, [e.id, d, c]);

  const g = N(() => {
    if (!d) {
      m();
    }
  }, [d, m]);

  const E = N(
    (I) => {
      const w = e.author.username ?? e.author.id;
      const C = `${window.location.origin}/@${w}/post/${I}`;
      navigator.clipboard.writeText(C);
      yt.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const _ = N(
    (I) => {
      n(i(BS, { targetType: "post", targetId: I, onClose: r }));
    },
    [n, r]
  );

  const y = N(
    (I) => {
      n(
        i(Mb, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const v = N(
    async (I) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await a(I);
          o?.(I);
        } catch (w) {
          console.error("Failed to delete post:", w);
        }
      }
    },
    [a, o]
  );

  const b = N(() => {
    if (s) {
      n(i(Eb, { postId: e.id, onClose: r }));
    } else {
      const I = e.author.username ?? e.author.id;
      ze(`/@${I}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, r]);

  const S = N(() => {
    n(i(qb, { post: e, onClose: r }));
  }, [n, r, e]);

  const T = N(
    async (I) => {
      const w = h?.myVote ?? null;
      l(e.id, I, w);
      try {
        const C = await $e.votePoll(e.id, [I]);
        if (C) {
          u(e.id, C);
          return C;
        }
      } catch (C) {
        console.error("[Poll] Failed to vote:", C);

        if (w) {
          l(e.id, w, I);
        }
      }
      return null;
    },
    [e.id, h?.myVote, l, u]
  );

  const R = N(
    async (I) => {
      try {
        const w = await $e.votePoll(e.id, I);
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
    handleDoubleTap: g,
    handleComment: b,
    handleRepost: S,
    handleReport: _,
    handleEdit: y,
    handleDelete: v,
    handleCopyLink: E,
    handlePollVote: T,
    handlePollVoteMultiple: R,
  };
}
const HS = "s8tv";
const VS = "j22F";
const WS = "Isao";
const jS = "UktV";
const zS = "GIkR";
const qS = "Igvs";
const GS = "ME7W";
const YS = "ap2k";
const XS = "YeqC";
const KS = "pt2v";
const ZS = "Cu41";
const JS = "KMyd";
const QS = "n7A3";
const e1 = "dINM";
const t1 = "KTb0";

const De = {
  post: HS,
  postInner: VS,
  isFeed: WS,
  avatarLink: jS,
  postContent: zS,
  postBody: qS,
  textWrapper: GS,
  text: YS,
  collapsed: XS,
  expandButton: KS,
  originalPost: ZS,
  originalPostHeader: JS,
  originalPostTime: QS,
  originalPostText: e1,
  originalPostMedia: t1,
};

function n1(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function r1({ attachments: e, postVs: t, source: n }) {
  const r = Se(() => Or(e), [e]);
  return r.length === 0
    ? null
    : i("div", {
        className: De.originalPostMedia,
        children: i(Os, { media: r, postVs: t, source: n }),
      });
}
function o1({ originalPost: e, source: t }) {
  const n = n1(e.createdAt);
  const { openModal: r, closeModal: o } = an();

  const {
    liked: s,
    totalLikes: a,
    handleLike: c,
    handleComment: l,
    handleRepost: u,
  } = su(e, { openModal: r, closeModal: o });

  const f = As(e);

  const d = N(
    (p) => {
      p.stopPropagation();
      const h = e.author.username ?? e.author.id;
      ze(`/@${h}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return i("div", {
    className: De.originalPost,
    onClick: d,
    children: [
      i("div", {
        className: De.originalPostHeader,
        children: [
          i(Is, { size: 14 }),
          i(rt, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          i(nr, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          i("span", { className: De.originalPostTime, children: n }),
        ],
      }),
      e.text && i("div", { className: De.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        i(r1, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(ou, {
        liked: s,
        reposted: f.reposted,
        likesCount: a,
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
const s1 = ne(() => Q(() => import("./index-C99i-272.js"), __vite__mapDeps([18, 19])).then(
  e => ({
    default: e.Poll
  })
)
);
function i1(e) {
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
function Or(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function iu(e) {
  return e.find(t => t.type === "poll");
}
const a1 = 300;
const c1 = 500;

const l1 = Wr(
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
      onEdit: u,
      onPin: f,
      onDelete: d,
    }
  ) => {
    const p = n === "feed";
    const h = bt();
    const { openModal: m, closeModal: g } = an();

    const E = re(me => me.setCurrentPost);

    const _ = re(me => me.seedPostStats);

    const y = re(me => me.posts.find(He => He.id === t.id));

    const v = we(me => me.profile);

    F(() => {
      _(t);
    }, [t, _]);
    const b = As(t);
    const { isFollowing: S, follow: T, unfollow: R } = C_(t.author.id);
    const I = p && v?.id !== t.author.id ? S : undefined;

    const {
      liked: w,
      totalLikes: C,
      handleLike: A,
      handleDoubleTap: k,
      handleComment: O,
      handleRepost: q,
      handleReport: he,
      handleEdit: se,
      handleDelete: pe,
      handleCopyLink: de,
      handlePollVote: G,
      handlePollVoteMultiple: ee,
    } = su(t, { openModal: m, closeModal: g, onDelete: d });

    const W = N(() => {
      if (I !== undefined) {
        if (I) {
          m(
                  i(uy, {
                    displayName: t.author.displayName,
                    onConfirm: R,
                    onClose: g,
                  })
                );
        } else {
          T();
        }
      }
    }, [I, t.author.displayName, T, R, m, g]);

    const D = P(null);
    const fe = P(null);
    const Y = P(null);
    const [x, U] = $(a1);
    const [H, te] = $(0);
    const j = H > x;
    F(
      () => () => {
        if (Y.current) {
          cancelAnimationFrame(Y.current);
          (Y.current = null);
        }
      },
      []
    );

    const z = N(
        (me) => {
          if (me &&
            p) {
            Y.current && cancelAnimationFrame(Y.current);

            (Y.current = requestAnimationFrame(() => {
              (Y.current = null);
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

      U(He => He + c1);
    }, []);

    Ov(t.id, D, c, l, t.vs);
    const Te = t.originalPost?.id;
    F(() => {
      const D_current = D.current;
      if (!D_current) {
        return;
      }
      const He = Te ? [t.id, Te] : t.id;
      xr.observe(D_current, He);

      return () => xr.unobserve(D_current);
    }, [t.id, Te]);
    const be = P(null);
    const oe = P(0);

    const Dt = N((me) => {
      be.current = me.target;
    }, []);

    const Ct = N(() => {
      E(y ?? t);
      const He = t.author.username ?? t.author.id;
      ze(`/@${He}/post/${t.id}`);
    }, [t, y, E]);

    const qr = N(
      (me) => {
        const me_target = me.target;
        if (me_target.closest("button") ||
        me_target.closest("a") ||
        me_target.closest("video") ||
        me_target.closest("img")) {
          return;
        }
        if (h) {
          const Ds = Date.now();
          if (Ds - oe.current < 300) {
            (oe.current = 0);
            k();
            return;
          }
          oe.current = Ds;
          return;
        }
        if (be.current !== me_target) {
          be.current = null;
          return;
        }
        be.current = null;
        const Ms = window.getSelection();

        if (!Ms || Ms.toString().length <= 0) {
          Ct();
        }
      },
      [h, k, Ct]
    );

    const Gr = Se(() => i1(t.author), [t.author]);

    const Ee = Se(() => Or(t.attachments), [t.attachments]);

    const Ne = Se(() => iu(t.attachments), [t.attachments]);

    const Ls = i("div", {
      className: `${De.postInner} ${p ? De.isFeed : ""} ${r || ""}`,
      children: [
        p &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: De.avatarLink,
            children: i(rt, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: I,
              onFollowBadgeClick: W,
            }),
          }),
        i("div", {
          className: De.postContent,
          children: [
            i(SS, {
              author: Gr,
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
            i("div", {
              className: De.postBody,
              children: [
                t.text &&
                  i("div", {
                    className: De.textWrapper,
                    children: [
                      i("div", {
                        ref: z,
                        className: `${De.text} ${j ? De.collapsed : ""}`,
                        style: p && j ? { maxHeight: `${x}px` } : undefined,
                        children: i(nu, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      p &&
                        j &&
                        i("button", {
                          type: "button",
                          className: De.expandButton,
                          onClick: ae,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Ee.length > 0 &&
                  i(Os, { media: Ee, isFeed: p, postVs: t.vs, source: c }),
                Ne &&
                  i(Ie, {
                    fallback: null,
                    children: i(s1, {
                      title: Ne.question,
                      options: Ne.options.map(me => ({
                        id: me.id,
                        text: me.text,
                        votes: me.votes ?? 0
                      })),
                      totalVotes: Ne.totalVotes ?? 0,
                      voted:
                        (Ne.myVotes ?? []).length > 0 ||
                        (Ne.myVote !== undefined && Ne.myVote !== null),
                      selectedOptionId: Ne.myVote,
                      selectedOptionIds: Ne.myVotes ?? [],
                      multipleChoice: Ne.multipleChoice ?? false,
                      onVote: G,
                      onVoteMultiple: ee,
                      disabled: Ne.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  i(o1, { originalPost: t.originalPost, source: c }),
                i(ou, {
                  liked: w,
                  reposted: b.reposted,
                  likesCount: C,
                  repostsCount: b.repostsCount,
                  commentsCount: b.commentsCount,
                  viewsCount: b.viewsCount,
                  dominantEmoji: b.dominantEmoji,
                  onLike: A,
                  onRepost: q,
                  onComment: O,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return p
      ? i("article", {
          ref: D,
          className: `${De.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: Dt,
          onClick: qr,
          children: Ls,
        })
      : i("div", { ref: D, children: Ls });
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

const u1 = "wbR2";
const d1 = "hAAa";
const f1 = "Ikit";
const h1 = "ZBdH";
const p1 = "qFCM";
const m1 = "AHbD";
const g1 = "EgoK";
const _1 = "S6uX";
const y1 = "z7D1";
const v1 = "FhwQ";
const w1 = "PPfU";
const E1 = "uB0x";
const S1 = "ywa9";
const b1 = "qmoz";
const C1 = "ke2X";
const T1 = "A8TD";
const I1 = "DEOk";
const N1 = "VtID";
const k1 = "f5ES";
const R1 = "GVzu";
const P1 = "kLNv";
const A1 = "duIs";
const x1 = "llYC";
const O1 = "xfWy";

const ce = {
  commentWrapper: u1,
  threadItem: d1,
  avatarWrapper: f1,
  threadLine: h1,
  commentBody: p1,
  showMoreBtn: m1,
  avatarPlaceholder: g1,
  comment: _1,
  small: y1,
  commentTime: v1,
  commentText: w1,
  commentActions: E1,
  commentContent: S1,
  avatarLink: b1,
  authorLink: C1,
  commentHeader: T1,
  moreButton: I1,
  commentHeaderLeft: N1,
  replyMention: k1,
  commentMedia: R1,
  reactionWrapper: P1,
  commentAction: A1,
  liked: x1,
  replyButton: O1,
};

const $1 = ne(() => Q(() => import("./index-Dk5sg23j.js"), __vite__mapDeps([20, 11, 21])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const L1 = Wr((
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
    hideAvatar: E = false,
    isWallOwner: _ = false,
  }
) => {
  const y = $l(a);

  const v = we(w => w.profile?.id);

  const b = t.id === v;
  const S = b || _;
  const T = u === "xs";

  const R = Se(() => {
    const w = [];

    if (b &&
      h) {
      w.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Ul, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (S &&
      m) {
      w.push({
        id: "delete",
        label: "Удалить",
        icon: i(ql, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!b) {
      w.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(Bl, { size: 16 }),
        danger: true,
        onClick: () => p(n),
      });
    }

    return w;
  }, [b, S, n, h, m, p]);

  const I = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${ce.comment} ${T ? ce.small : ""}`,
    children: [
      !E &&
        i("a", {
          href: I,
          className: ce.avatarLink,
          children: i(rt, { src: t.avatar, alt: t.displayName, size: u }),
        }),
      i("div", {
        className: ce.commentContent,
        children: [
          i("div", {
            className: ce.commentHeader,
            children: [
              i("div", {
                className: ce.commentHeaderLeft,
                children: [
                  i("a", {
                    href: I,
                    className: ce.authorLink,
                    children: i(nr, {
                      name: t.displayName,
                      verified: t.isVerified,
                      hasNuksta: t.hasNuksta,
                      pin: t.pin,
                      size: u,
                    }),
                  }),
                  i("span", { className: ce.commentTime, children: y }),
                ],
              }),
              i(tu, {
                trigger: i(Vl, { size: T ? 14 : 16 }),
                items: R,
                position: "bottom-right",
                className: ce.moreButton,
              }),
            ],
          }),
          (g || r) &&
            i("div", {
              className: ce.commentText,
              children: [
                g &&
                  i(ke, {
                    children: [
                      i("a", {
                        href: `/@${g.username}`,
                        className: ce.replyMention,
                        children: ["@", g.displayName],
                      }),
                      ", ",
                    ],
                  }),
                r && i(nu, { text: r, spans: o }),
              ],
            }),
          Or(s).length > 0 &&
            i("div", {
              className: ce.commentMedia,
              children: i(Os, { media: Or(s) }),
            }),
          s
            .filter(w => w.type === "audio")
            .map(w => i(
            Ie,
            {
              fallback: null,
              children: i($1, { src: w.url, duration: w.duration }),
            },
            w.id
          )
            ),
          i("div", {
            className: ce.commentActions,
            children: [
              i("button", {
                className: ce.replyButton,
                onClick: d,
                children: "Ответить",
              }),
              i("div", {
                className: ce.reactionWrapper,
                children: i("button", {
                  className: `${ce.commentAction} ${l ? ce.liked : ""}`,
                  onClick: () => f(),
                  children: [
                    i(bs, { size: 14, filled: l }),
                    i(Mn, { value: c }),
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

const au = Wr((
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
  const E = o?.commentId === t.id;

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
  const b = t.stats.replies > y.length;

  const S = [
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
    className: `${ce.commentWrapper} ${v ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      S.map((T, R) => {
        const w = !(R === S.length - 1 && !E && !b);
        const C = m === T.data.id;
        return i(
          "div",
          {
            "data-comment-id": T.data.id,
            className: `${ce.threadItem} ${C ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: ce.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${T.author.username ?? T.author.id}`,
                    className: ce.avatarLink,
                    children: i(rt, {
                      src: T.author.avatar,
                      alt: T.author.displayName,
                      size: "sm",
                    }),
                  }),
                  w && i("div", { className: ce.threadLine }),
                ],
              }),
              i("div", {
                className: ce.commentBody,
                children: i(L1, {
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
      E &&
        i("div", {
          className: ce.threadItem,
          children: [
            i("div", {
              className: ce.avatarWrapper,
              children: [
                i("div", { className: ce.avatarPlaceholder }),
                b && i("div", { className: ce.threadLine }),
              ],
            }),
            i("div", {
              className: ce.commentBody,
              children: i(eu, {
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
      b &&
        !h &&
        i("button", {
          className: ce.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - y.length, " ответов"],
        }),
    ],
  });
});

function M1({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = o => o,
}) {
  const o = P(null);
  const [s, a] = $(0);
  const [c, l] = $(0);
  const u = P(new Map());
  const f = P(new Map());
  const d = P(0);

  if (d.current !== e) {
    (d.current = e);
    f.current.clear();
  }

  const p = N(
      (S) => {
        const T = r(S);
        return u.current.get(T) ?? t;
      },
      [r, t]
    );

  const h = N(
    (S) => {
      if (S === 0) {
        return 0;
      }
      const T = f.current.get(S);
      if (T !== undefined) {
        return T;
      }
      let R = 0;
      let I = 0;
      for (let w = S - 1; w >= 0; w--) {
        const C = f.current.get(w);
        if (C !== undefined) {
          (R = w);
          (I = C);
          break;
        }
      }
      for (let w = R; w < S; w++) {
        I += p(w);
      }
      f.current.set(S, I);
      return I;
    },
    [p]
  );

  const m = Se(() => e === 0 ? 0 : h(e - 1) + p(e - 1), [e, h, p]);

  const { startIndex: g, endIndex: E } = Se(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let S = 0;
    let T = e - 1;

    while (S < T) {
      const C = Math.floor((S + T) / 2);
      const A = h(C);
      const k = p(C);

      if (A + k < s) {
        (S = C + 1);
      } else {
        (T = C);
      }
    }

    const R = Math.max(0, S - n);
    let I = S;
    let w = h(S) - s;

    while (I < e && w < c + t * n) {
      (w += p(I));
      I++;
    }

    (I = Math.min(e - 1, I + n));
    return { startIndex: R, endIndex: I };
  }, [e, s, c, h, p, n, t]);

  const _ = Se(() => {
    if (e === 0) {
      return [];
    }
    const S = [];
    for (let T = g; T <= E; T++) {
      S.push({ index: T, key: r(T), start: h(T), size: p(T) });
    }
    return S;
  }, [g, E, r, h, p, e]);

  const y = N(
    (S, T) => {
      if (!S) {
        return;
      }
      const R = r(T);
      const I = S.getBoundingClientRect().height;
      if (I <= 0) {
        return;
      }
      const w = u.current.get(R);

      if ((w === undefined || Math.abs(w - I) > 2)) {
        u.current.set(R, I);
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

  const b = N(
    (S) => {
      if (o.current) {
        o.current.removeEventListener("scroll", v);
      }

      (o.current = S);

      if (S) {
        l(S.clientHeight);
        a(S.scrollTop);
        S.addEventListener("scroll", v, { passive: true });
      }
    },
    [v]
  );

  F(() => {
    if (!o.current) {
      return;
    }
    const S = new ResizeObserver((T) => {
      for (const R of T) {
        l(R.contentRect.height);
      }
    });
    S.observe(o.current);

    return () => S.disconnect();
  }, []);

  F(
    () => () => {
      if (o.current) {
        o.current.removeEventListener("scroll", v);
      }
    },
    [v]
  );

  return { containerRef: b, virtualItems: _, totalSize: m, measureElement: y };
}
const D1 = "Ozr7";
const U1 = "nbCv";
const F1 = "r0EL";
const B1 = "HnKk";
const H1 = "Z8G4";
const V1 = "qOSk";
const W1 = "p5fc";
const j1 = "Rt0l";
const z1 = "xOWE";
const q1 = "rWIa";
const G1 = "E2uV";

const Qe = {
  comments: D1,
  sortWrapper: U1,
  sortSelect: F1,
  commentsList: B1,
  commentItem: H1,
  empty: V1,
  loadMoreSentinel: W1,
  virtualContainer: j1,
  virtualContent: z1,
  virtualItem: q1,
  inputWrapper: G1,
};

const Y1 = 120;
function X1({
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
  onEdit: E,
  onDelete: _,
}) {
  const y = P(false);

  const {
    containerRef: v,
    virtualItems: b,
    totalSize: S,
    measureElement: T,
  } = M1({
    itemCount: e.length,
    estimatedItemHeight: Y1,
    overscan: 3,
    getItemKey: I => e[I]?.id ?? I,
  });

  F(() => {
    if (!t || n || b.length === 0) {
      y.current = false;
      return;
    }
    const I = b[b.length - 1]?.index ?? 0;
    const w = e.length - 5;

    if (I >= w && !y.current) {
      (y.current = true);
      r();
    }
  }, [b, e.length, t, n, r]);

  F(() => {
    if (!n) {
      (y.current = false);
    }
  }, [n]);

  const R = N(
    (I, w) => {
      T(I, w);
    },
    [T]
  );
  return i("div", {
    ref: v,
    className: Qe.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: Qe.virtualContent,
        style: { height: `${S}px` },
        children: b.map((I) => {
          const w = e[I.index];
          return w
            ? i(
                "div",
                {
                  ref: C => R(C, I.index),
                  className: Qe.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${I.start}px)`,
                  },
                  children: i(au, {
                    comment: w,
                    onLike: () => l(w.id),
                    onLikeReply: u,
                    replyingTo: o?.commentId === w.id ? o : null,
                    onStartReply: f,
                    onCancelReply: d,
                    onSubmitReply: p,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: g,
                    onEdit: E,
                    onDelete: _,
                    isLoadingReplies: a === w.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                I.key
              )
            : null;
        }),
      }),
      n && i(xs, { variant: "medium" }),
    ],
  });
}
const K1 = "W2er";
const Z1 = "sjeD";
const J1 = "OsWj";
const _o = { wrapper: K1, popup: Z1, closing: J1 };

const Q1 = ne(() => Q(() => import("./index-BbgcGRkQ.js"), __vite__mapDeps([22, 23])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const Ma = 280;
const Da = 380;
const yo = 8;
const eb = 100;
const Ua = 150;
const tb = 150;
function $s({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, o] = $(false);
  const [s, a] = $(false);
  const [c, l] = $(null);
  const u = P(null);
  const f = P(null);
  const d = P(null);
  const p = P(null);
  const h = P(null);
  const m = P(null);

  const g = N(() => {
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
    const q = A >= Da + yo ? "bottom" : "top";
    const he = k >= Ma || k > I_right ? "left" : "right";
    let se;
    let pe;

    if (q === "top") {
      (se = I.top - Da - yo);
    } else {
      (se = I.bottom + yo);
    }

    if (he === "left") {
      (pe = I.left);
    } else {
      (pe = I.right - Ma);
    }

    l({
      top: se,
      left: pe,
      transformOrigin: `${q === "top" ? "bottom" : "top"} ${
        he === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const E = N(() => {
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
      }, tb));
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
          E();
        }, eb));
    }
  };

  const v = () => {
    if (p.current) {
      clearTimeout(p.current);
      (p.current = null);
    }

    (h.current = window.setTimeout(() => {
        _();
      }, Ua));
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

  const b = () => {
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
    }, Ua);
  };

  const T = (R) => {
    R.preventDefault();
  };

  return i("div", {
    ref: f,
    className: _o.wrapper,
    onMouseEnter: y,
    onMouseLeave: v,
    onMouseDown: T,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(Kg, { size: n }),
      }),
      r &&
        c &&
        Mt(
          i("div", {
            ref: d,
            className: `${_o.popup} ${s ? _o.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: b,
            onMouseLeave: S,
            onMouseDown: T,
            children: i(Ie, {
              fallback: null,
              children: i(Q1, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const nb = "WcY2";
const rb = "eWTu";
const ob = "Y4jd";
const sb = "CvbH";
const ib = "wbKk";
const ab = "ZhF0";
const cb = "FrDe";
const lb = "ksgM";
const ub = "xdKe";
const db = "lMbe";
const fb = "Q8OK";
const hb = "nffW";

const qe = {
  editCommentModal: nb,
  form: rb,
  header: ob,
  title: sb,
  content: ib,
  editor: ab,
  actions: cb,
  mediaButtons: lb,
  mediaButton: ub,
  submitGroup: db,
  charCount: fb,
  error: hb,
};

const Fa = 2000/* 2e3 */;
function pb({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = an();

  const o = Pt(S => S.editComment);

  const s = we(S => S.profile);

  const a = bt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: d,
  } = jr(t, n);

  const [p, h] = $(false);
  const m = Fa - c.length;
  const g = m < 0;
  const E = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const y = E || _;

  const v = N(
    (S) => {
      d(S.emoji);
    },
    [d]
  );

  const b = N(async () => {
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
            i(rt, { src: s?.avatar ?? "", size: "sm" }),
            i(zr, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Комментарий...",
              maxLength: Fa,
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
                i($s, { onEmojiSelect: v, buttonClassName: qe.mediaButton }),
            }),
            i("div", {
              className: qe.submitGroup,
              children: [
                g &&
                  i("span", {
                    className: `${qe.charCount} ${qe.error}`,
                    children: m,
                  }),
                i(Je, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                i(Je, {
                  size: "md",
                  disabled: !c.trim() || g || !y || p,
                  onClick: b,
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
const mb = ne(() => Q(() => import("./index-xYJ4tMmW.js"), __vite__mapDeps([15, 16, 17])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function gb({
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
  const [g, E] = $(null);
  const [_, y] = $(null);
  const [v, b] = $(null);
  const [S, T] = $(null);
  const R = P(null);
  const { openModal: I } = an();

  const w = Pt(D => D.highlightedCommentId);

  const C = Pt(D => D.clearHighlightedComment);

  const A = Pt(D => D.loadReplies);

  const k = Pt(D => D.deleteComment);

  const O = Pt(D => D.toggleCommentLike);

  Ag({
    sentinelRef: R,
    hasMore: r,
    isLoading: n,
    onLoadMore: u,
    rootMargin: "200px",
  });

  F(() => {
    if (!w) {
      return;
    }
    const D =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (D) {
      D.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const Y = document.querySelector("[data-comments-section]");

      if (Y) {
        Y.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const fe = window.setTimeout(() => {
      y(w);
      C();
      const Y = window.setTimeout(() => {
        y(null);
      }, 600);
      return () => clearTimeout(Y);
    }, 300);
    return () => clearTimeout(fe);
  }, [w, C]);

  const q = async (D, fe, Y) => {
    if (g) {
      await c({
          text: D,
          spans: fe,
          parentId: g.commentId,
          replyToUserId: g.userId,
          replyToInfo: {
            id: g.userId,
            username: g.username,
            displayName: g.displayName,
          },
          attachments: Y,
        });

      E(null);
    }
  };

  const he = (D, fe, Y, x, U) => {
    E({ commentId: D, username: fe, displayName: Y, userId: x, replyId: U });
  };

  const se = () => {
    E(null);
  };

  const pe = N(
    (D) => {
      O(D);
    },
    [O]
  );

  const de = N(
    async (D) => {
      b(D);
      try {
        await A(D);
      } finally {
        b(null);
      }
    },
    [A]
  );

  const G = N((D) => {
    T(D);
  }, []);

  const ee = N(
    (D) => {
      let fe = "";
      let Y = [];
      for (const x of e) {
        if (x.id === D) {
          (fe = x.text);
          (Y = x.spans ?? []);
          break;
        }
        const U = x.previewReplies?.find(H => H.id === D);
        if (U) {
          (fe = U.text);
          (Y = U.spans ?? []);
          break;
        }
      }
      I(i(pb, { commentId: D, initialText: fe, initialSpans: Y }));
    },
    [e, I]
  );

  const W = N(
    (D) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        k(D);
      }
    },
    [k]
  );

  return i("div", {
    className: Qe.comments,
    children: [
      i("div", {
        className: Qe.sortWrapper,
        children: i("select", {
          value: o,
          onChange: D => s(D.target.value),
          className: Qe.sortSelect,
          children: [
            i("option", { value: "new", children: "Новые" }),
            i("option", { value: "old", children: "Старые" }),
            i("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? i(I0, { count: 5 })
        : e.length === 0
        ? i("div", { className: Qe.empty, children: "Нет комментариев" })
        : m
        ? i(X1, {
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
            onStartReply: he,
            onCancelReply: se,
            onSubmitReply: q,
            onVoiceSend: l,
            onLoadReplies: de,
            onReport: G,
            onEdit: ee,
            onDelete: W,
          })
        : i("div", {
            className: Qe.commentsList,
            children: [
              e.map(D => i(
                "div",
                {
                  className: Qe.commentItem,
                  children: i(au, {
                    comment: D,
                    onLike: () => a(D.id),
                    onLikeReply: pe,
                    replyingTo: g?.commentId === D.id ? g : null,
                    onStartReply: he,
                    onCancelReply: se,
                    onSubmitReply: q,
                    onVoiceSend: l,
                    onLoadReplies: de,
                    onReport: G,
                    onEdit: ee,
                    onDelete: W,
                    isLoadingReplies: v === D.id,
                    flashingCommentId: _,
                    isWallOwner: f,
                  }),
                },
                D.id
              )
              ),
              r &&
                i("div", {
                  ref: R,
                  className: Qe.loadMoreSentinel,
                  children: n && i(xs, { variant: "medium" }),
                }),
            ],
          }),
      !p &&
        i("div", {
          className: Qe.inputWrapper,
          children: i(eu, {
            onSubmit: (D, fe, Y) => c({ text: D, spans: fe, attachments: Y }),
            onVoiceSend: l,
          }),
        }),
      S &&
        i(Ie, {
          fallback: null,
          children: i(mb, {
            targetType: "comment",
            targetId: S,
            onClose: () => T(null),
          }),
        }),
    ],
  });
}
const _b = "TM1Y";
const yb = "ed1U";
const vb = "sUde";
const wb = "dj7G";
const pr = { commentsModal: _b, header: yb, title: vb, content: wb };
function Eb({ postId: e, onClose: t }) {
  const n = P(null);

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
    Na(v => ({
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

  const { commentsSort: p, setCommentsSort: h } = Er(
    Na(v => ({
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

  const E = N(
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
      const b = `voice_${Date.now()}.webm`;
      const S = new File([v], b, { type: v.type || "audio/webm" });
      const T = await dn.uploadMedia(S);
      await d(e, { text: "", attachments: [{ mediaId: T.id }] });
    },
    [d, e]
  );

  return i(sn, {
    frameless: true,
    onClose: t,
    className: pr.commentsModal,
    children: [
      i("div", {
        className: pr.header,
        children: i("span", { className: pr.title, children: "Комментарии" }),
      }),
      i("div", {
        className: pr.content,
        "data-comments-modal": true,
        children: i(gb, {
          comments: r,
          isLoading: o,
          isLoadingMore: s,
          hasMore: a,
          sort: p,
          onSortChange: m,
          onLikeComment: E,
          onAddComment: _,
          onVoiceSend: y,
          onLoadMore: g,
        }),
      }),
    ],
  });
}
const Sb = ne(() => Q(() => import("./index-CGawjVOk.js"), __vite__mapDeps([24, 25])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);
function cu({
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
    } = jr();

  const [u, f] = $(false);
  const [d, p] = $(false);
  const [h, m] = $(false);
  const g = P(0);
  const E = bt();
  const y = Rs()?.subscription?.isActive ?? false;

  const {
    images: v,
    uploadingImages: b,
    isUploading: S,
    hasVideo: T,
    openFilePicker: R,
    removeImage: I,
    addImage: w,
    uploadFiles: C,
    clearAll: A,
    fileInputRef: k,
    handleFileChange: O,
  } = Jl(10, y);

  const {
    isPollOpen: q,
    poll: he,
    togglePoll: se,
    handlePollQuestionChange: pe,
    handlePollOptionChange: de,
    handleAddPollOption: G,
    handleRemovePollOption: ee,
    handleMultipleChoiceToggle: W,
    handleClosePoll: D,
    isPollValid: fe,
    getPollData: Y,
    resetPoll: x,
  } = N0();

  const U = wt.MAX_CHARS - r.length;
  const H = U < 0;
  const te = q && fe();
  const j = v.length > 0 || b.length > 0;
  const z = r.trim().length > 0 || te || j;
  const ae = y ? `${qo},${__}` : qo;

  const Te = N(async () => {
    if (!(!z || H || S || d)) {
      p(true);
      try {
        const Ee = v.map(Ne => ({
          mediaId: Ne.mediaId,
          url: Ne.url
        }));
        await e?.(r, o, Ee, Y());
        l();
        A();
        x();
      } catch {
      } finally {
        p(false);
      }
    }
  }, [z, H, S, d, r, o, v, Y, e, l, A, x]);

  const be = N(
    (Ee) => {
      w(Ee);
    },
    [w]
  );

  const oe = N(
    (Ee) => {
      c(Ee.emoji);
    },
    [c]
  );

  const Dt = N((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
    g.current++;

    if (Ee.dataTransfer?.types.includes("Files")) {
      m(true);
    }
  }, []);

  const Ct = N((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
  }, []);

  const qr = N((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
    g.current--;

    if (g.current === 0) {
      m(false);
    }
  }, []);

  const Gr = N(
    (Ee) => {
      Ee.preventDefault();
      Ee.stopPropagation();
      (g.current = 0);
      m(false);
      const Ne = Ee.dataTransfer?.files;

      if (Ne && Ne.length > 0) {
        C(Array.from(Ne));
      }
    },
    [C]
  );

  return i("div", {
    className: `${J.form} ${h ? J.dragActive : ""}`,
    onDragEnter: Dt,
    onDragOver: Ct,
    onDragLeave: qr,
    onDrop: Gr,
    children: [
      h &&
        i("div", {
          className: J.dragOverlay,
          children: [
            i(Hl, { size: 32 }),
            i("span", {
              children: y ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      i("div", {
        className: J.whatsNew,
        children: i(zr, {
          ref: s,
          value: r,
          spans: o,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: J.editor,
          minHeight: 40,
          maxHeight: wt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: C,
        }),
      }),
      i(Ql, { images: v, uploadingImages: b, onRemove: I }),
      i("input", {
        ref: k,
        type: "file",
        accept: ae,
        multiple: !T,
        onChange: O,
        style: { display: "none" },
      }),
      q &&
        i(lw, {
          poll: he,
          onQuestionChange: pe,
          onOptionChange: de,
          onAddOption: G,
          onRemoveOption: ee,
          onMultipleChoiceToggle: W,
          onClose: D,
        }),
      i("div", {
        className: J.actions,
        children: [
          i("div", {
            className: J.mediaButtons,
            children: [
              i("button", {
                className: J.mediaButton,
                onClick: R,
                title: y ? "Добавить медиа" : "Добавить изображение",
                children: i(Ml, {}),
              }),
              !E &&
                i($s, { onEmojiSelect: oe, buttonClassName: J.mediaButton }),
              i("button", {
                className: J.mediaButton,
                onClick: () => f(true),
                title: "Нарисовать",
                disabled: T,
                children: i(Yg, { size: 20 }),
              }),
              i("button", {
                className: `${J.mediaButton} ${q ? J.active : ""}`,
                onClick: se,
                title: "Добавить опрос",
                children: i(Xg, {}),
              }),
            ],
          }),
          i("div", {
            className: J.submitGroup,
            children: [
              H &&
                i("span", {
                  className: `${J.charCount} ${J.error}`,
                  children: U,
                }),
              i(Je, {
                size: "lg",
                disabled: !z || H || S || d,
                loading: d,
                onClick: Te,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        i(Ie, {
          fallback: null,
          children: i(Sb, {
            isOpen: u,
            onClose: () => f(false),
            onSave: be,
            mode: "post",
          }),
        }),
    ],
  });
}
const bb = "hEmV";
const Cb = "I29X";
const Ba = { createPostModal: bb, title: Cb };
function Tb({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: r } = an();

  const o = we(c => c.profile);

  const s = re(c => c.createPost);

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
    className: Ba.createPostModal,
    children: [
      i("h2", { className: Ba.title, children: "Создать пост" }),
      i(cu, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const Ib = "JPJw";
const Nb = "gYWd";
const kb = "FQm1";
const Rb = "IAfc";
const Pb = "QYnq";
const Ab = "yv9w";
const xb = "JVSW";
const Ob = "mmo7";
const $b = "vZcU";
const Lb = "IGXI";

const it = {
  editPostModal: Ib,
  form: Nb,
  whatsNew: kb,
  editor: Rb,
  actions: Pb,
  mediaButtons: Ab,
  mediaButton: xb,
  submitGroup: Ob,
  charCount: $b,
  error: Lb,
};

const Ha = 5000/* 5e3 */;
function Mb({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = an();

  const o = re(S => S.editPost);

  const s = we(S => S.profile);

  const a = bt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: d,
  } = jr(t, n);

  const [p, h] = $(false);
  const m = Ha - c.length;
  const g = m < 0;
  const E = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const y = E || _;

  const v = N(
    (S) => {
      d(S.emoji);
    },
    [d]
  );

  const b = N(async () => {
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
            i(rt, { src: s?.avatar ?? "", size: "md" }),
            i(zr, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Что нового?",
              maxLength: Ha,
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
                i($s, { onEmojiSelect: v, buttonClassName: it.mediaButton }),
            }),
            i("div", {
              className: it.submitGroup,
              children: [
                g &&
                  i("span", {
                    className: `${it.charCount} ${it.error}`,
                    children: m,
                  }),
                i(Je, {
                  size: "lg",
                  disabled: !c.trim() || g || !y,
                  loading: p,
                  onClick: b,
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
const Db = "uf3Q";
const Ub = "IsbG";
const Fb = "f7VK";
const Bb = "AyZP";
const Hb = "hEId";
const Vb = "fWwm";
const Wb = "XbCU";
const jb = "cyuY";
const zb = "RNp4";

const pt = {
  repostModal: Db,
  content: Ub,
  title: Fb,
  inputSection: Bb,
  textarea: Hb,
  originalPost: Vb,
  postHeader: Wb,
  postText: jb,
  actions: zb,
};

function qb({ post: e, onClose: t, onSuccess: n }) {
  const [r, o] = $("");
  const [s, a] = $(false);

  const c = we(d => d.profile);

  const l = re(d => d.updatePostReposted);

  const u = re(d => d.prependPost);

  const f = async () => {
    a(true);
    try {
      const d = await $e.createRepost(e.id, r.trim() || undefined);
      l(e.id, true, e.reposted ? 0 : 1);
      u(d);

      if (c?.username) {
        $e.invalidateWallCache(c.username);
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
    className: pt.repostModal,
    children: i("div", {
      className: pt.content,
      children: [
        i("h2", { className: pt.title, children: "Репост" }),
        i("div", {
          className: pt.inputSection,
          children: [
            c && i(rt, { src: c.avatar, alt: c.displayName, size: "sm" }),
            i("textarea", {
              className: pt.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: d => o(d.target.value),
              rows: 3,
            }),
          ],
        }),
        i("div", {
          className: pt.originalPost,
          children: [
            i("div", {
              className: pt.postHeader,
              children: [
                i(rt, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                i(nr, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            i("p", { className: pt.postText, children: e.text }),
          ],
        }),
        i("div", {
          className: pt.actions,
          children: [
            i(Je, {
              variant: "secondary",
              onClick: (d) => {
                d.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            i(Je, {
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

const Gb = () => {
  const e = Rs();
  const t = Ps();
  const { initialize: n, disconnectSSE: r } = At();
  const o = Ol();

  const s = Ss(w => w.fetchPortal);

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

  const c = Se(
    () => [
      { id: "feed", label: "Лента", icon: Fl, href: "/" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: Wl,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: jl, href: a },
    ],
    [a]
  );

  const [l, u] = $({});
  const [f, d] = $(true);
  const p = P([]);
  const h = P(null);
  const [m] = tr();
  const { openModal: g } = an();

  const E = re(w => w.fetchFeed);

  const _ = re(w => w.isRefreshing);

  const y = Kl();

  const v = N(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      E(true);
    }
  }, [E]);

  const b = Se(() => {
    const w = m.url || "/";
    return Ns.some(C => w.startsWith(C));
  }, [m.url]);

  const S = Se(() => {
    const w = m.url || "/";
    return e?.username
      ? w === `/@${e.username}` || w.startsWith(`/@${e.username}/`)
      : false;
  }, [m.url, e?.username]);

  const T = P(null);

  const R = N((w, C = false) => {
    if (!C && T.current === w) {
      return;
    }
    T.current = w;
    const A = p.current[w];
    const h_current = h.current;
    if (A && h_current) {
      const O = parseFloat(getComputedStyle(h_current).paddingLeft) || 0;

      u({
        width: A.offsetWidth,
        transform: `translateX(${A.offsetLeft - O}px)`,
      });

      d(true);
    }
  }, []);

  F(() => {
    const w = m.url || "/";

    const C = c.findIndex(
      A => w === A.href ||
      w.startsWith(`${A.href}/`) ||
      (A.id === "profile" && S)
    );

    if (C === -1) {
      d(false);
    } else {
      R(C, true);
    }
  }, [m.url, c, S, R]);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }
    const C = h_current.querySelector(`.${Be.active}`);
    if (C) {
      const A = p.current.indexOf(C);

      if (A !== -1) {
        (T.current = null);
        R(A);
      }
    }
  }, []);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }

    const C = () => {
        const k = h_current.querySelector(`.${Be.active}`);
        if (k) {
          const O = p.current.indexOf(k);

          if (O !== -1) {
            R(O, true);
          }
        }
      };

    const A = new ResizeObserver(C);
    A.observe(h_current);
    window.addEventListener("resize", C);

    return () => {
      A.disconnect();
      window.removeEventListener("resize", C);
    };
  }, [R]);

  const I = () => {
    g(i(Tb, {}));
  };
  return b
    ? null
    : i("div", {
        className: Be.mobileNavigationWrapper,
        children: [
          i("nav", {
            ref: h,
            className: Be.navigation,
            children: [
              i("div", {
                className: `${Be.indicator} ${f ? "" : Be.indicatorHidden}`,
                style: l,
              }),
              c.map((w, C) => {
                const w_icon = w.icon;
                const k = w.id === "event";
                const O = k && o.active && !!o.url;
                const q = m.url || "/";

                const se =
                  q === w.href ||
                  q.startsWith(`${w.href}/`) ||
                  (w.id === "profile" && S);

                return i(
                  "a",
                  {
                    href: O ? o.url : w.href,
                    target: O ? "_blank" : undefined,
                    rel: O ? "noopener noreferrer" : undefined,
                    ref: (pe) => {
                      (p.current[C] = pe);

                      if (pe && se) {
                        R(C);
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
                      i("span", {
                        className: Be.iconWrapper,
                        children: k
                          ? i("img", {
                              src: o.active
                                ? "/assets/portal/portal-active.gif"
                                : "/assets/portal/portal-inactive.png",
                              alt: "Ивент",
                              className: `${Be.portalImage} ${
                                o.active ? Be.portalImageActive : ""
                              }`,
                            })
                          : i(ke, {
                              children: [
                                w.id === "feed" && _ ? i(Cs, {}) : i(w_icon, {}),
                                w.id === "notifications" &&
                                  y > 0 &&
                                  i("span", {
                                    className: Be.badge,
                                    children: y > 99 ? "99+" : y,
                                  }),
                              ],
                            }),
                      }),
                      i("span", { className: Be.label, children: w.label }),
                    ],
                  },
                  w.id
                );
              }),
            ],
          }),
          i("button", {
            className: Be.createButton,
            onClick: I,
            "aria-label": "Создать пост",
            children: i(Ts, {}),
          }),
        ],
      });
};

const Yb = "PqrJ";
const Xb = "G8Bu";
const Kb = "k4n7";
const Zb = "ptWa";
const mr = { badge: Yb, red: Xb, green: Kb, blue: Zb };
function Jb({ type: e }) {
  const t =
    e === "like"
      ? mr.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? mr.green
      : mr.blue;
  return i("div", {
    className: `${mr.badge} ${t}`,
    children: [
      e === "follow" && i(Ts, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(Dl, { size: 12, filled: true }),
      e === "like" && i(bs, { size: 12, filled: true }),
      e === "repost" && i(Is, { size: 12 }),
    ],
  });
}
const Qb = "tPsO";
const eC = "fQzC";
const tC = "eN5L";
const nC = "cnoE";
const rC = "nlAB";
const oC = "iZAB";
const sC = "obnd";
const iC = "MC8H";
const aC = "QGDW";
const cC = "nx1t";
const lC = "sf2i";

const Xe = {
  container: Qb,
  clearAllButton: eC,
  toastList: tC,
  toast: nC,
  toastLeft: rC,
  toastData: oC,
  title: sC,
  message: iC,
  dragging: aC,
  closeButton: cC,
  belowTabs: lC,
};

const uC = wn(null);
function dC({ children: e }) {
  const [t, n] = $([]);

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

  const a = uv();

  F(() => {
    if (a) {
      const c = pC(a.type);

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

      At.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return i(uC.Provider, {
    value: { toasts: t, addToast: r, removeToast: o, clearAll: s },
    children: [e, i(fC, { toasts: t, onRemove: o, onClearAll: s })],
  });
}
function fC({ toasts: e, onRemove: t, onClearAll: n }) {
  const [r, o] = $(false);

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
    className: `${Xe.container} ${s ? Xe.belowTabs : ""} ym-hide-content`,
    children: [
      i("div", {
        className: `${Xe.toastList} ${r ? Xe.clearing : ""}`,
        children: a.map((l, u) => i(
          gC,
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
        i(Je, {
          className: Xe.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const hC = 80;
function pC(e) {
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
function mC(e) {
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
function gC({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const o = P(null);
  const [s, a] = $(0);
  const [c, l] = $(false);
  const [u, f] = $(false);
  const d = P(0);
  const p = P(false);

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
      const T = S.clientX - d.current;

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

      if (Math.abs(s) > hC) {
        f(true);
        a(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!p.current) {
          const S = mC(e);

          if (S) {
            ze(S);
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

  const E = (S) => {
    (d.current = S.touches[0].clientX);
    l(true);
  };

  const _ = (S) => {
    if (!c) {
      return;
    }
    const T = S.touches[0].clientX - d.current;
    a(T);
  };

  const y = () => {
    g();
  };

  const v = u || r ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const b = r ? 400 : s;
  return i("div", {
    ref: o,
    className: `${Xe.toast} ${c ? Xe.dragging : ""}`,
    style: {
      transform: `translateX(${b}px)`,
      opacity: v,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: h,
    onTouchStart: E,
    onTouchMove: _,
    onTouchEnd: y,
    children: [
      i("div", {
        className: Xe.toastLeft,
        children: [
          i(rt, {
            src: e.actorAvatar || "",
            badge: i(Jb, { type: e.notificationType }),
          }),
          i("div", {
            className: Xe.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: Xe.title,
                  children: i(nr, { name: e.actorName }),
                }),
              i("p", { className: Xe.message, children: e.message }),
            ],
          }),
        ],
      }),
      i("button", {
        className: Xe.closeButton,
        onClick: (S) => {
          S.stopPropagation();
          t(e.id);
        },
        onMouseDown: S => S.stopPropagation(),
        onTouchStart: S => S.stopPropagation(),
        children: i(lt, { size: 16 }),
      }),
    ],
  });
}
const _C = "LYSP";
const yC = "EVMy";
const vC = "hcbR";
const wC = "Sjq3";
const EC = "G32M";
const SC = "GXt6";
const bC = "Pt2q";
const CC = "IfWK";
const TC = "CZbP";
const IC = "i9nS";

const qt = {
  container: _C,
  toast: yC,
  slideUp: vC,
  leaving: wC,
  fadeOut: EC,
  success: SC,
  icon: bC,
  message: CC,
  closeButton: TC,
  error: IC,
};

const NC = { success: Zg, error: qg };
function kC({ id: e, type: t, message: n, onRemove: r }) {
  const [o, s] = $(false);
  const NC_t = NC[t];

  const c = N(() => {
    s(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return i("div", {
    className: `${qt.toast} ${qt[t]} ${o ? qt.leaving : ""}`,
    children: [
      i("span", { className: qt.icon, children: i(NC_t, { size: 20 }) }),
      i("span", { className: qt.message, children: n }),
      i("button", {
        className: qt.closeButton,
        onClick: c,
        children: i(lt, { size: 14 }),
      }),
    ],
  });
}
function RC() {
  const e = kr(n => n.toasts);

  const t = kr(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: qt.container,
        children: e.map(n => i(
          kC,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const PC = "ll9c";
const AC = "Rzam";
const xC = "C10m";
const OC = "mz61";
const gr = { tabs: PC, indicator: AC, button: xC, active: OC };
function $C({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: o = "",
}) {
  const [s, a] = $(t);
  const c = n !== undefined ? n : s;
  const [l, u] = $({});
  const f = P([]);
  const d = P(null);
  const p = P(false);

  const h = N(() => {
    const _ = f.current[c];
    if (_) {
      const _parentElement = _.parentElement;
      const v = _parentElement ? parseFloat(getComputedStyle(_parentElement).paddingLeft) : 0;
      const b = !p.current;

      u({
        width: _.offsetWidth,
        transform: `translateX(${_.offsetLeft - v}px)`,
        ...(b ? { transition: "none" } : {}),
      });

      if (b) {
        requestAnimationFrame(() => {
          (p.current = true);

          u((S) => {
            const { transition: T, ...R } = S;
            return R;
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

  const E = (_, y) => typeof _ == "string" ? `${y}` : _.id;

  return i("div", {
    ref: d,
    className: `${gr.tabs} ${o}`,
    children: [
      i("div", { className: gr.indicator, style: l }),
      e.map((_, y) => i(
        "button",
        {
          ref: (v) => {
            f.current[y] = v;
          },
          onClick: () => m(y),
          className: `${gr.button} ${c === y ? gr.active : ""}`,
          children: g(_),
        },
        E(_, y)
      )
      ),
    ],
  });
}
const LC = ne(() => Q(() => import("./index-Dl99RBw0.js"), __vite__mapDeps([26, 6, 5, 27])).then(
  e => ({
    default: e.ImageViewer
  })
)
);
function MC() {
  const {
    isOpen: e,
    images: t,
    initialIndex: n,
    sourceRect: r,
    resolveSourceRect: o,
    close: s,
  } = Al();
  return e
    ? i(Ie, {
        fallback: null,
        children: i(LC, {
          images: t,
          initialIndex: n,
          sourceRect: r,
          resolveSourceRect: o,
          onClose: s,
        }),
      })
    : null;
}
const DC = "LaDp";
const UC = "et1q";
const FC = "wNhG";
const vo = { layout: DC, wrapper: UC, content: FC };
const BC = ["/login", "/register", "/forgot-password", "/verify-email"];

const HC = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/support",
  "/delete-account",
  "/child-safety",
];

const VC = ({ children: e }) => {
  const t = bt();
  const n = Pg();
  const [r, o] = $(window.location.pathname);
  F(() => {
    const c = () => {
      o(window.location.pathname);
    };
    window.addEventListener("popstate", c);
    const l = history.pushState.bind(history);
    const u = history.replaceState.bind(history);

    (history.pushState = (...f) => {
      l(...f);
      c();
    });

    (history.replaceState = (...f) => {
      u(...f);
      c();
    });

    return () => {
      window.removeEventListener("popstate", c);
      (history.pushState = l);
      (history.replaceState = u);
    };
  }, []);
  const s = BC.includes(r);
  const a = HC.includes(r);
  return s
    ? i(ke, { children: e })
    : i(Rg.Provider, {
        value: { isHidden: n },
        children: i("div", {
          className: vo.layout,
          children: i("div", {
            className: vo.wrapper,
            children: [
              !a && (t ? i(Gb, {}) : i(Mv, {})),
              !a && !t && i(Hv, {}),
              i("div", { className: vo.content, children: e }),
            ],
          }),
        }),
      });
};

const WC = "aNqv";
const jC = "y5Pd";
const zC = "AIG6";
const qC = "i3uo";
const GC = "q97V";
const YC = "hYfv";
const XC = "CsbO";
const KC = "aH2c";
const ZC = "ZVPG";
const JC = "il60";
const QC = "Ov89";
const eT = "nnLW";
const tT = "DhZ3";
const nT = "sI5a";
const rT = "utk0";

const xe = {
  overlay: WC,
  card: jC,
  imageWrap: zC,
  image: qC,
  body: GC,
  titleRow: YC,
  title: XC,
  badge: KC,
  texts: ZC,
  text: JC,
  moreButton: QC,
  buttons: eT,
  button: tT,
  primary: nT,
  secondary: rT,
};

const lu = "seen_announcements";
function uu() {
  try {
    const e = localStorage.getItem(lu);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function oT(e) {
  try {
    const t = uu();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(lu, JSON.stringify(t));
    }
  } catch {}
}
function sT() {
  const e = Ps();
  const [t, n] = $(null);
  const [r, o] = $(false);

  const s = N(() => {
    o(false);

    n(m => {
      if (m) {
        oT(m.id);
      }

      return null;
    });
  }, []);

  F(() => {
    if (!e) {
      return;
    }
    let m = false;

    y_
      .getAnnouncements()
      .then((g) => {
      if (m) {
        return;
      }
      const E = uu();

      const _ = g.find(y => y?.id && !E.includes(y.id));

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

    const m = (E) => {
      if (E.key === "Escape") {
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
        ze(m_action.url);
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

  return Mt(
    i("div", {
      className: xe.overlay,
      onClick: c,
      children: i("div", {
        className: xe.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": f,
        children: [
          l?.url &&
            i("div", {
              className: xe.imageWrap,
              style:
                l.width && l.height
                  ? { aspectRatio: `${l.width} / ${l.height}` }
                  : undefined,
              children: i("img", {
                className: xe.image,
                src: l.url,
                alt: "",
                width: l.width,
                height: l.height,
              }),
            }),
          i("div", {
            className: xe.body,
            children: [
              i("div", {
                className: xe.titleRow,
                children: [
                  i("h2", { className: xe.title, children: f }),
                  u && i("span", { className: xe.badge, children: u }),
                ],
              }),
              (d || p) &&
                i("div", {
                  className: xe.texts,
                  children: [
                    d && i("p", { className: xe.text, children: d }),
                    p &&
                      (r
                        ? i("p", { className: xe.text, children: p })
                        : i("button", {
                            type: "button",
                            className: xe.moreButton,
                            onClick: () => o(true),
                            children: "Подробнее",
                          })),
                  ],
                }),
              !!h?.length &&
                i("div", {
                  className: xe.buttons,
                  children: h.map((m, g) => i(
                    "button",
                    {
                      type: "button",
                      className: `${xe.button} ${
                        m.style === "secondary" ? xe.secondary : xe.primary
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
const Va = 3000/* 3e3 */;
const iT = 500;
const aT = 30000/* 3e4 */;
const Wa = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function cT() {
  const e = re(t => t.applyStatsUpdates);
  F(() => {
    let t = null;
    let n = Infinity;
    let r = false;
    let o = false;
    let s = Date.now();

    const a = () => Date.now() - s > aT;

    const c = async () => {
      if (r || (typeof document !== "undefined" && document.hidden)) {
        return;
      }
      if (a()) {
        (o = true);

        if (t !== null) {
          clearTimeout(t);
          (t = null);
        }

        (n = Infinity);
        return;
      }
      const p = xr.getSnapshot();
      if (p.length !== 0) {
        r = true;
        try {
          const h = p.length > 20 ? p.slice(0, 20) : p;
          const m = await $e.getPostsStats(h);

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
            l(Va);
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

    for (const p of Wa) {
      window.addEventListener(p, u, { passive: true });
    }
    const f = () => {
      if (!document.hidden) {
        u();
      }
    };
    document.addEventListener("visibilitychange", f);
    const d = xr.onAppear(() => {
      if (!o && !document.hidden) {
        l(iT);
      }
    });
    l(Va);

    return () => {
      if (t !== null) {
        clearTimeout(t);
      }

      document.removeEventListener("visibilitychange", f);
      for (const p of Wa) {
        window.removeEventListener(p, u);
      }
      d();
    };
  }, [e]);
}

const du = e => {
  ze("/", true);
  return null;
};

const lT = "NGBx";
const uT = "zI7S";
const dT = "zO9N";
const fT = "vE7I";
const hT = "OPkK";
const pT = "T6hV";
const mT = "IDlU";
const gT = "nj9Q";
const _T = "sGYf";
const yT = "MwKT";
const vT = "Bmt7";
const wT = "IhxY";
const ET = "XJDr";
const ST = "iYWJ";
const bT = "ald3";
const CT = "zo8T";
const TT = "b6Qg";
const IT = "lm5k";
const NT = "oAG7";
const kT = "r5Fd";
const RT = "k0SU";
const PT = "Uppj";

const B = {
  skeleton: lT,
  inner: uT,
  content: dT,
  header: fT,
  body: hT,
  actions: pT,
  shimmer: mT,
  avatar: gT,
  name: _T,
  time: yT,
  line: vT,
  w100: wT,
  w92: ET,
  w85: ST,
  w78: bT,
  w65: CT,
  w50: TT,
  w40: IT,
  media: NT,
  mediaTall: kT,
  pill: RT,
  list: PT,
};

function AT(e) {
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
function fu({ variant: e = "medium", delayMs: t = 0 }) {
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
            AT(e),
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
const ja = ["medium", "media", "short", "long", "mediaTall"];
function xT({ count: e = 4 }) {
  return i("div", {
    className: B.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(fu, { variant: ja[n % ja.length], delayMs: n * 120 }, n)
    ),
  });
}
const OT = "giP0";
const $T = "ctgk";
const LT = "k9fA";
const wo = { virtualFeed: OT, virtualContent: $T, virtualItem: LT };
function MT({
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
  const f = P(null);
  const d = P(false);
  const [p, h] = $(null);
  const [m, g] = $(window.innerWidth < 1174);

  const E = re(w => w.highlightedPostId);

  const _ = re(w => w.clearHighlightedPost);

  F(() => {
    const w = () => g(window.innerWidth < 1174);
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
      const A = e_w.attachments?.[0]?.id ?? "";
      return `${e_w.id}-${A}`;
    },
    [e]
  );

  const {
    virtualItems: b,
    totalSize: S,
    measureElement: T,
    getMeasuredHeights: R,
  } = xg({
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
        u(R());
      }
    },
    [u, R]
  );

  F(() => {
    if (!E) {
      return;
    }
    f.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const w = setTimeout(() => {
      h(E);
      _();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(w);
  }, [E, _]);

  const I = N(() => {
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
      window.addEventListener("scroll", I, { passive: true });

      return () => window.removeEventListener("scroll", I);
    },
    [I]
  );

  return i("div", {
    ref: f,
    className: wo.virtualFeed,
    children: [
      i("div", {
        className: wo.virtualContent,
        style: { height: `${S}px` },
        children: b.map((w) => {
          const C = e[w.index];
          return C
            ? i(
                "div",
                {
                  ref: A => T(A, w.index),
                  className: wo.virtualItem,
                  style: { transform: `translateY(${w.start}px)` },
                  children: t(C, w.index, C.id === p),
                },
                w.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${y}px` },
          children: i(fu, { variant: "medium" }),
        }),
    ],
  });
}
const DT = "ayWA";
const UT = "iq6R";
const FT = "KOWW";
const BT = "jlPe";
const HT = "aCpy";
const VT = "RBKF";

const un = {
  page: DT,
  createPostWrapper: UT,
  tabsWrapper: FT,
  searchButton: BT,
  error: HT,
  empty: VT,
};

const WT = (e) => {
  const t = re(C => C.posts);

  const n = re(C => C.activeFeed);

  const r = re(C => C.isLoading);

  const o = re(C => C.isLoadingMore);

  const s = re(C => C.hasMore);

  const a = re(C => C.error);

  const c = re(C => C.feedScrollPosition);

  const l = re(C => C.feedMeasuredHeights);

  const u = re(C => C.feedRestoreToken);

  const f = re(C => C.setActiveFeed);

  const d = re(C => C.fetchFeed);

  const p = re(C => C.loadMoreFeed);

  const h = re(C => C.createPost);

  const m = re(C => C.cacheFeedHeights);

  const g = we(C => C.profile);

  const E = we(C => C.status);

  const _ = P(false);

  const y = Se(() => t.map(C => C.author.id), [t]);

  b_(y);

  F(() => {
    if (E === "authenticated" && t.length === 0 && !r) {
      d();
    }
  }, [n, E]);

  F(() => {
    if (!_.current) {
      if (t.length !== 0) {
        (_.current = true);

        c > 0 &&
          requestAnimationFrame(() => {
            window.scrollTo(0, c);
          });
      }
    }
  }, [t.length, c]);

  const v = P(null);
  on(() => {
    if (v.current === null) {
      v.current = u;
      return;
    }
    if (v.current === u) {
      return;
    }
    v.current = u;
    const C = c;
    window.scrollTo(0, C);

    requestAnimationFrame(() => window.scrollTo(0, C));
  }, [u, c]);

  const b = N(
      (C) => {
        m(n, C);
      },
      [n, m]
    );

  const S = (C) => {
    const k = ["global", "clan", "following"][C] ?? "global";

    if (k !== n) {
      f(k);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      d(true);
    }
  };

  const T = async (C, A, k, O) => {
    if (g) {
      (await h({
          wallOwnerId: g.id,
          text: C,
          spans: A,
          attachments: k,
          poll: O,
        }));
    }
  };

  const R = N(() => {
    if (s && !o) {
      p();
    }
  }, [s, o, p]);

  const I =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const w = N(
    (C, A, k) => i(l1, { post: C, isHighlighted: k, source: I }, C.id),
    [I]
  );

  return i("div", {
    className: un.page,
    children: [
      i("div", {
        className: un.tabsWrapper,
        children: [
          i($C, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: S,
          }),
          i("a", {
            href: "/search",
            className: un.searchButton,
            "aria-label": "Поиск",
            children: i(zl, {}),
          }),
        ],
      }),
      i("div", {
        className: un.createPostWrapper,
        children: [
          g && i(rt, { src: g.avatar ?? "", alt: g.displayName, size: "sm" }),
          i(cu, { onSubmit: T }),
        ],
      }),
      a
        ? i("div", {
            className: un.error,
            children: [
              i("p", { children: a }),
              i("button", { onClick: () => d(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? i(xT, { count: 4 })
        : t.length === 0
        ? i("div", { className: un.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            MT,
            {
              posts: t,
              renderPost: w,
              isLoadingMore: o,
              hasMore: s,
              onLoadMore: R,
              estimatedPostHeight: 250,
              overscan: 3,
              initialMeasuredHeights: l,
              onMeasuredHeightsChange: b,
            },
            n
          )
        : null,
    ],
  });
};

const jT = ne(() => Q(() => import("./index-DT-f2tuG.js"), __vite__mapDeps([28, 29])).then(
  e => ({
    default: e.GlobalVideoPlayer
  })
)
);

const zT = ne(() => Q(() => import("./index-C2qnO_6f.js"), __vite__mapDeps([30, 6, 31])).then(
  e => ({
    default: e.Hashtag
  })
)
);

const qT = ne(() => Q(() => import("./index-CluPQp2X.js"), __vite__mapDeps([32, 33, 34])).then(
  e => ({
    default: e.Profile
  })
)
);

const GT = ne(() => Q(() => import("./index-BUUHr-FV.js"), __vite__mapDeps([35, 6, 36])).then(
  e => ({
    default: e.PostPage
  })
)
);

const YT = ne(() => Q(
  () => import("./index-DE4FdqnP.js"),
  __vite__mapDeps([37, 4, 33, 38])
).then(e => ({
  default: e.Notifications
}))
);

const XT = ne(() => Q(() => import("./index-C8YF_OKo.js"), __vite__mapDeps([39, 40])).then(
  e => ({
    default: e.Search
  })
)
);

const KT = ne(() => Q(() => import("./index-BrkCNBgk.js"), __vite__mapDeps([41, 6, 42])).then(
  e => ({
    default: e.DeleteAccount
  })
)
);

const ZT = ne(() => Q(() => import("./index-Bx2FWgzU.js"), __vite__mapDeps([43, 6, 44])).then(
  e => ({
    default: e.Terms
  })
)
);

const JT = ne(() => Q(() => import("./index-DQCZ4FFs.js"), __vite__mapDeps([45, 6, 46])).then(
  e => ({
    default: e.Privacy
  })
)
);

const QT = ne(() => Q(() => import("./index-flUhwj3W.js"), __vite__mapDeps([47, 6, 48])).then(
  e => ({
    default: e.Cookies
  })
)
);

const eI = ne(() => Q(
  () => import("./index-BEgdYSvq.js"),
  __vite__mapDeps([49, 6, 3, 50])
).then(e => ({
  default: e.ExternalLink
}))
);

const tI = ne(() => Q(() => import("./index-BTbFyhkx.js"), __vite__mapDeps([51, 6, 52])).then(
  e => ({
    default: e.Support
  })
)
);

const nI = ne(() => Q(() => import("./index-B51Gn7e_.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const rI = ne(() => Q(() => import("./index-CMgxuzzP.js"), __vite__mapDeps([55, 56])).then(
  e => ({
    default: e.Event
  })
)
);

const oI = ne(() => Q(
  () => import("./index-ByDNRuFi.js"),
  __vite__mapDeps([57, 58, 59, 6])
).then(e => ({
  default: e.SubscriptionTerms
}))
);

const sI = ne(() => Q(
  () => import("./index-e2wKVIJR.js"),
  __vite__mapDeps([60, 58, 59, 6])
).then(e => ({
  default: e.RecurringTerms
}))
);

const iI = ne(() => Q(
  () => import("./index-DD3IqBBI.js"),
  __vite__mapDeps([61, 62, 63, 64, 65, 66, 67])
).then(e => ({
  default: e.Login
}))
);

const aI = ne(() => Q(
  () => import("./index-DinOv07X.js"),
  __vite__mapDeps([68, 62, 63, 64, 65, 66, 69])
).then(e => ({
  default: e.Register
}))
);

const cI = ne(() => Q(
  () => import("./index-By-I6xJi.js"),
  __vite__mapDeps([70, 62, 63, 66, 71])
).then(e => ({
  default: e.ForgotPassword
}))
);

const lI = ne(() => Q(() => import("./index-BOpDC7be.js"), __vite__mapDeps([72, 66, 73])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const uI = ne(() => Q(() => import("./index-BrrnC9mn.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const dI = ne(() => Q(() => import("./index-Mgk12XLN.js"), __vite__mapDeps([74, 75])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const fI = ne(() => Q(() => import("./index-Cu7lNSYE.js"), []).then(e => ({
  default: e.Verification
}))
);

function za(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const hI = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(du, {});
  }
  const t = e.slice(1);
  return i(qT, { username: t });
};
function pI() {
  const [e, t] = $(window.location.pathname);

  const n = wg(o => o.isOpen);

  cT();

  return i(dC, {
    children: i(fy, {
      children: i(Yy, {
        currentPath: e,
        children: [
          i(MC, {}),
          n && i(Ie, { fallback: null, children: i(jT, {}) }),
          i(RC, {}),
          i(tv, {}),
          i(sT, {}),
          i(VC, {
            children: i(Ie, {
              fallback: null,
              children: i(Rl, {
                onChange: (o) => {
                  const s = e;
                  t(o.url);

                  if (o.url === s) {
                    return;
                  }

                  Eg.getState().markNavigated();
                  const a = re.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = za(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = o.url === "/";
                  const l = !!za(o.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(WT, { path: "/" }),
                  i(YT, { path: "/notifications" }),
                  i(iI, { path: "/login" }),
                  i(aI, { path: "/register" }),
                  i(cI, { path: "/forgot-password" }),
                  i(lI, { path: "/reset-password" }),
                  i(uI, { path: "/verify-email" }),
                  i(ZT, { path: "/terms" }),
                  i(JT, { path: "/privacy" }),
                  i(QT, { path: "/cookies" }),
                  i(dI, { path: "/onboarding" }),
                  i(XT, { path: "/search" }),
                  i(zT, { path: "/hashtag/:name" }),
                  i(eI, { path: "/external" }),
                  i(tI, { path: "/support" }),
                  i(KT, { path: "/delete-account" }),
                  i(nI, { path: "/child-safety" }),
                  i(rI, { path: "/event" }),
                  i(fI, { path: "/verification" }),
                  i(oI, { path: "/subscription-terms" }),
                  i(sI, { path: "/recurring-terms" }),
                  i(GT, { path: "/:username/post/:postId" }),
                  i(hI, { path: "/:slug" }),
                  i(du, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
sg(document.getElementById("root")).render(
  i(Tl, {
    children: i(og, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(pI, {}),
    }),
  })
);
export {
  Mt as $,
  P as A,
  Je as B,
  Yo as C,
  tu as D,
  bt as E,
  Ps as F,
  uy as G,
  Tb as H,
  lt as I,
  on as J,
  $C as K,
  cu as L,
  sn as M,
  Na as N,
  Pt as O,
  xT as P,
  Eg as Q,
  Er as R,
  gb as S,
  Se as T,
  nr as U,
  MT as V,
  eu as W,
  Ul as X,
  Dl as Y,
  bs as Z,
  Q as __1,
  i as a,
  Is as a0,
  At as a1,
  Kl as a2,
  Ag as a3,
  Gl as a4,
  M as a5,
  L as a6,
  ks as a7,
  zl as a8,
  Ol as a9,
  Ss as aa,
  Ae as ab,
  le as ac,
  zg as ad,
  mt as ae,
  ma as af,
  Vg as ag,
  ot as ah,
  Pl as ai,
  _l as aj,
  tr as ak,
  gs as al,
  Gg as am,
  br as an,
  Cs as ao,
  Wl as ap,
  jl as aq,
  Wr as ar,
  jE as as,
  $E as at,
  y_ as au,
  b_ as av,
  vt as aw,
  C_ as ax,
  Hg as b,
  re as c,
  $ as d,
  l1 as e,
  ze as f,
  rt as g,
  Vl as h,
  Qg as i,
  Bl as j,
  Rs as k,
  Ie as l,
  ke as m,
  Ts as n,
  an as o,
  $e as p,
  N as q,
  cr as r,
  dn as s,
  yt as t,
  wg as u,
  Yg as v,
  ql as w,
  we as x,
  F as y,
  ne as z,
};
