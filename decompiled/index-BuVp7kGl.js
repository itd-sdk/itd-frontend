const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-8ixBUN-Y.js",
      "assets/index-DQ916_Ei.js",
      "assets/index-BZyiI5Yk.css",
      "assets/IconInfo-9sBeblGW.js",
      "assets/IconNotificationMention-D1ojYJLj.js",
      "assets/IconChevronRight-COaeB8C6.js",
      "assets/IconChevronLeft-7q6BtY14.js",
      "assets/index-CJt4nRXv.css",
      "assets/index-CLMQ9LQi.js",
      "assets/index-CxN1kIOT.css",
      "assets/VoiceInput-Ddy6e0qp.js",
      "assets/IconPlay-DBiiuvrx.js",
      "assets/VoiceInput-Rgz_XQoL.css",
      "assets/PostMediaVideo-DwPRV6qd.js",
      "assets/VolumeGlyph-gMJg_mOP.js",
      "assets/PostMediaVideo-Cuj-ngA2.css",
      "assets/index-DTLaGq8q.js",
      "assets/IconCheckCircle-4L9NAj9I.js",
      "assets/index-DcRFnjuy.css",
      "assets/index-BTNCulA7.js",
      "assets/index-BapWCBTP.css",
      "assets/index-DGh0mns_.js",
      "assets/index-BtvCqzrk.css",
      "assets/index-CSAhhQIK.js",
      "assets/index-BTDutcIM.css",
      "assets/index-D7a-9YNe.js",
      "assets/index-DKB4tmOx.css",
      "assets/index-szYu8RBU.js",
      "assets/useBodyScrollLock-POjDBOSl.js",
      "assets/index-BOwZHX9j.css",
      "assets/index-CoBxZpUs.js",
      "assets/index-DjMz5Q-2.css",
      "assets/index-BzPqsVhM.js",
      "assets/index-o_crwGhL.css",
      "assets/index-CVosOiNZ.js",
      "assets/index-m5NMzwTK.css",
      "assets/index-DxnK381R.js",
      "assets/IconCheck-D5SbcBpX.js",
      "assets/index-Bx3CxdPI.css",
      "assets/index-BNgSn4yg.js",
      "assets/index-BEMPLBNC.css",
      "assets/index-8qfneaPU.js",
      "assets/index-yyivAcfn.css",
      "assets/index-BoS-Elbb.js",
      "assets/index-DxONoTjF.css",
      "assets/index-D_nuIs6E.js",
      "assets/index-Cg1V1VyH.css",
      "assets/index-CWcHpZby.js",
      "assets/index-nS7ZIaxA.css",
      "assets/index-C97w_qyu.js",
      "assets/index-D3D2K4JI.css",
      "assets/index-BW151EL-.js",
      "assets/index-CCEFS9Zb.css",
      "assets/index-COANf7wY.js",
      "assets/index-D8yOsjDL.css",
      "assets/index-CINonMXn.js",
      "assets/index-49l3JHSn.css",
      "assets/index-D519U2X1.js",
      "assets/index-Czl7Cq0e.css",
      "assets/index-Cayg2nTg.js",
      "assets/index-BXCpS3IQ.css",
      "assets/index-DCrcvMV2.js",
      "assets/index-D_yFP7V0.css",
      "assets/index-DEIDpgXR.js",
      "assets/index-DP6VK3yr.css",
      "assets/index-Bv4tkihk.js",
      "assets/SubscriptionTerms.module--FJzv8QP.js",
      "assets/SubscriptionTerms-BiEzglvp.css",
      "assets/index-D2YwGnyM.js",
      "assets/index-CYXx6T-p.js",
      "assets/index-9BixCiVZ.js",
      "assets/index-nyxafbeq.css",
      "assets/index-BFkLWxDC.js",
      "assets/index-iH_D0nue.css",
      "assets/IconEyeOff-BHy0L5gs.js",
      "assets/index-D4sAegxY.css",
      "assets/index-D7oO8wvs.js",
      "assets/index-213GDz-N.css",
      "assets/index-gyKgP97q.js",
      "assets/index-BaXQ5Sxz.css",
      "assets/index-BR7wRYIu.js",
      "assets/index-DTe6abah.css",
      "assets/index-ChMjcaAi.js",
      "assets/index-QPEVKls0.css",
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
      (e._sentryDebugIds[t] = "e7425205-51ee-4620-a323-6a57c317549d");
      (e._sentryDebugIdIdentifier = "sentry-dbid-e7425205-51ee-4620-a323-6a57c317549d");
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
let Do;
let oe;
let ql;
let on;
let ka;
let Yl;
let Gl;
let as;
let vr;
let Co;
let Kl;
let Pi;
let qs;
let Ys;
let Xl;
const Ir = {};
const Rr = [];
const Df = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function It(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Li(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function yt(e, t, n) {
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
    (a.children = arguments.length > 3 ? Do.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return ko(e, a, o, r, null);
}
function ko(e, t, n, o, r) {
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
    __v: r ?? ++ql,
    __i: -1,
    __u: 0,
  };

  if (r == null && oe.vnode != null) {
    oe.vnode(s);
  }

  return s;
}
function Uf() {
  return { current: null };
}
function ye(e) {
  return e.children;
}

class ct {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  setState(e, t) {
    let n;

    (n = this.__s != null && this.__s != this.state
      ? this.__s
      : (this.__s = It({}, this.state)));

    if (typeof e == "function") {
      (e = e(It({}, n), this.props));
    }

    if (e) {
      It(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      Gs(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Gs(this);
    }
  }
}

function An(e, t) {
  if (t == null) {
    return e.__ ? An(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? An(e) : null;
}
function Ff(e) {
  if (e.__P && e.__d) {
    const e_v = e.__v;
    const e_v___e = e_v.__e;
    const o = [];
    const r = [];
    const s = It({}, e_v);
    (s.__v = e_v.__v + 1);

    if (oe.vnode) {
      oe.vnode(s);
    }

    Oi(
      e.__P,
      s,
      e_v,
      e.__n,
      e.__P.namespaceURI,
      32 & e_v.__u ? [e_v___e] : null,
      o,
      e_v___e ?? An(e_v),
      !!(32 & e_v.__u),
      r
    );

    (s.__v = e_v.__v);
    (s.__.__k[s.__i] = s);
    tu(o, s, r);
    e_v.__e = null;
    e_v.__ = null;

    if (s.__e != e_v___e) {
      Ql(s);
    }
  }
}
function Ql(e) {
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    e.__k.some(t => {
      if (t != null && t.__e != null) {
        return (e.__e = e.__c.base = t.__e);
      }
    });

    return Ql(e);
  }
}
function Gs(e) {
  if (((!e.__d && (e.__d = true) && on.push(e) && !Ar.__r++) || ka != oe.debounceRendering)) {
    ((ka = oe.debounceRendering) || Yl)(Ar);
  }
}
function Ar() {
  try {
    let e;
    let t = 1;

    while (on.length) {
      if (on.length > t) {
        on.sort(Gl);
      }

      (e = on.shift());
      (t = on.length);
      Ff(e);
    }
  } finally {
    on.length = 0;
    Ar.__r = 0;
  }
}
function Zl(e, t, n, o, r, s, a, c, l, u, f) {
  let p;
  let d;
  let h;
  let m;
  let _;
  let v;
  const g = (o && o.__k) || Rr;
  const t_length = t.length;
  l = Bf(n, t, g, l, t_length);

  for (p = 0; p < t_length; p++) {
    if ((h = n.__k[p]) != null) {
      (d = (h.__i != -1 && g[h.__i]) || Ir);
      (h.__i = p);
      (v = Oi(e, h, d, r, s, a, c, l, u, f));
      (m = h.__e);

      h.ref &&
        d.ref != h.ref &&
        (d.ref && $i(d.ref, null, h), f.push(h.ref, h.__c || m, h));

      _ == null && m != null && (_ = m);

      4 & h.__u
        ? ((l = Jl(h, l, e)), d.__e && (d.__e = null))
        : typeof h.type == "function" && v !== undefined
        ? (l = v)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = _);
  return l;
}
function Bf(e, t, n, o, r) {
  let s;
  let a;
  let c;
  let l;
  let u;
  const n_length = n.length;
  let p = n_length;
  let d = 0;
  e.__k = new Array(r);

  for (s = 0; s < r; s++) {
    if ((a = t[s]) != null && typeof a != "boolean" && typeof a != "function") {
      typeof a == "string" ||
          typeof a == "number" ||
          typeof a == "bigint" ||
          a.constructor == String
            ? (a = e.__k[s] = ko(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = ko(ye, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                ko(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + d);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = Hf(a, n, l, p)) != -1 && (p--, (c = n[u]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (u == -1 && (r > n_length ? d-- : r < n_length && d++),
          typeof a.type != "function" && (a.__u |= 4))
        : u != l &&
          (u == l - 1
            ? d--
            : u == l + 1
            ? d++
            : (u > l ? d-- : d++, (a.__u |= 4)));
    } else {
      (e.__k[s] = null);
    }
  }

  if (p) {
    for (s = 0; s < n_length; s++) {
      if ((c = n[s]) != null &&
        (2 & c.__u) == 0) {
        c.__e == o && (o = An(c));
        ou(c, c);
      }
    }
  }
  return o;
}
function Jl(e, t, n) {
  let o;
  let r;
  if (typeof e.type == "function") {
    o = e.__k;

    for (r = 0; o && r < o.length; r++) {
      if (o[r]) {
        (o[r].__ = e);
        (t = Jl(o[r], t, n));
      }
    }

    return t;
  }

  if (e.__e != t) {
    t && e.type && !t.parentNode && (t = An(e));
    (t = n.insertBefore(e.__e, t || null));
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function _t(e, t) {
  (t = t || []);

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some(n => {
              _t(n, t);
            });
    } else {
      t.push(e);
    }
  }

  return t;
}
function Hf(e, t, n, o) {
  let r;
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
  if (o > (f ? 1 : 0)) {
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
function Na(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || Df.test(t) ? n : `${n}px`);
  }
}
function Xo(e, t, n, o, r) {
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
            Na(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!o || n[t] != o[t]) {
            Na(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(Kl, "$1")));
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
        (n[Co] = o[Co]);
      } else {
        (n[Co] = Pi);
        e.addEventListener(t, s ? Ys : qs, s);
      }
    } else {
      e.removeEventListener(t, s ? Ys : qs, s);
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
function Ta(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t[vr] == null) {
        t[vr] = Pi++;
      } else if (t[vr] < n[Co]) {
        return;
      }
      return n(oe.event ? oe.event(t) : t);
    }
  };
}
function Oi(e, t, n, o, r, s, a, c, l, u) {
  let f;
  let p;
  let d;
  let h;
  let m;
  let _;
  let v;
  let g;
  let b;
  let y;
  let k;
  let S;
  let C;
  let w;
  let T;
  let N;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    (l = !!(32 & n.__u));
    (s = [(c = t.__e = n.__e)]);
  }

  if ((f = oe.__b)) {
    f(t);
  }

  e: if (typeof t_type == "function") {
    p = a.length;
    try {
      (b = t.props);
      (y = t_type.prototype && t_type.prototype.render);
      (k = (f = t_type.contextType) && o[f.__c]);
      (S = f ? (k ? k.props.value : f.__) : o);

      if (n.__c) {
        (g = (d = t.__c = n.__c).__ = d.__E);
      } else {
        y
              ? (t.__c = d = new t_type(b, S))
              : ((t.__c = d = new ct(b, S)),
                (d.constructor = t_type),
                (d.render = Wf));

        k && k.sub(d);
        d.state || (d.state = {});
        (d.__n = o);
        (h = d.__d = true);
        (d.__h = []);
        (d._sb = []);
      }

      if (y && d.__s == null) {
        (d.__s = d.state);
      }

      if (y &&
        t_type.getDerivedStateFromProps != null) {
        d.__s == d.state && (d.__s = It({}, d.__s));
        It(d.__s, t_type.getDerivedStateFromProps(b, d.__s));
      }

      (m = d.props);
      (_ = d.state);
      (d.__v = t);

      if (h) {
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
            b !== m &&
            d.componentWillReceiveProps != null) {
          d.componentWillReceiveProps(b, S);
        }

        if (t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(b, d.__s, S) === false)) {
          if (t.__v != n.__v) {
            (d.props = b);
            (d.state = d.__s);
            (d.__d = false);
          }

          (t.__e = n.__e);
          (t.__k = n.__k);

          t.__k.some(P => {
            if (P) {
              (P.__ = t);
            }
          });

          Rr.push.apply(d.__h, d._sb);
          (d._sb = []);

          if (d.__h.length) {
            a.push(d);
          }

          (c = An(n));
          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(b, d.__s, S);
        }

        if (y &&
          d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(m, _, v);
          });
        }
      }

      (d.context = S);
      (d.props = b);
      (d.__P = e);
      (d.__e = false);
      (C = oe.__r);
      (w = 0);

      if (y) {
        (d.state = d.__s);
        (d.__d = false);

        if (C) {
          C(t);
        }

        (f = d.render(d.props, d.state, d.context));
        Rr.push.apply(d.__h, d._sb);
        (d._sb = []);
      } else {
        do {
          (d.__d = false);

          if (C) {
            C(t);
          }

          (f = d.render(d.props, d.state, d.context));
          (d.state = d.__s);
        } while (d.__d && ++w < 25);
      }

      (d.state = d.__s);

      if (d.getChildContext != null) {
        (o = It(It({}, o), d.getChildContext()));
      }

      if (y &&
        !h &&
        d.getSnapshotBeforeUpdate != null) {
        (v = d.getSnapshotBeforeUpdate(m, _));
      }

      (T = f != null && f.type === ye && f.key == null
        ? nu(f.props.children)
        : f);

      (c = Zl(e, Array_isArray(T) ? T : [T], t, n, o, r, s, a, c, l, u));
      (d.base = t.__e);
      (t.__u &= -161);

      if (d.__h.length) {
        a.push(d);
      }

      if (g) {
        (d.__E = d.__ = null);
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
          for (N = s.length; N--; ) {
            Li(s[N]);
          }
        }
      } else {
        t.__e = n.__e;
      }

      if (t.__k == null) {
        (t.__k = n.__k || []);
      }

      if (!P.then) {
        eu(t);
      }

      oe.__e(P, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = Vf(n.__e, t, n, o, r, s, a, l, u));
    }
  }

  if ((f = oe.diffed)) {
    f(t);
  }

  return 128 & t.__u ? undefined : c;
}
function eu(e) {
  if (e) {
    e.__c && (e.__c.__e = true);
    e.__k && e.__k.some(eu);
  }
}
function tu(e, t, n) {
  for (let o = 0; o < n.length; o++) {
    $i(n[o], n[++o], n[++o]);
  }

  if (oe.__c) {
    oe.__c(t, e);
  }

  e.some(r => {
    try {
      (e = r.__h);
      (r.__h = []);

      e.some(s => {
        s.call(r);
      });
    } catch (s) {
      oe.__e(s, r.__v);
    }
  });
}
function nu(e) {
  return typeof e != "object" || e == null || e.__b > 0
    ? e
    : Array_isArray(e)
    ? e.map(nu)
    : e.constructor !== undefined
    ? null
    : It({}, e);
}
function Vf(e, t, n, o, r, s, a, c, l) {
  let u;
  let f;
  let p;
  let d;
  let h;
  let m;
  let _;
  let v = n.props || Ir;

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
      : s && Do.call(e.childNodes));

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
        Xo(e, u, null, h, r);
      }
    }
    for (u in props) {
      (h = props[u]);

      switch (u) {
      case "children":
        (d = h);
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
        Xo(e, u, h, v[u], r);
        break;
      }
    }
    if (f) {
      if (!c && (!p || f.__html != p.__html && f.__html != e.innerHTML)) {
        (e.innerHTML = f.__html);
      }

      (t.__k = []);
    } else {
      if (p) {
        (e.innerHTML = "");
      }

      Zl(
        t.type == "template" ? e.content : e,
        Array_isArray(d) ? d : [d],
        t,
        n,
        o,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r,
        s,
        a,
        s ? s[0] : n.__k && An(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          Li(s[u]);
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
          Xo(e, u, m, v[u], r);

      (u = "checked");
      _ != null && _ != e[u] && Xo(e, u, _, v[u], r);
    }
  }
  return e;
}
function $i(e, t, n) {
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
    oe.__e(r, n);
  }
}
function ou(e, t, n) {
  let o;
  let r;

  if (oe.unmount) {
    oe.unmount(e);
  }

  if ((o = e.ref)) {
    if (!o.current || o.current == e.__e) {
      $i(o, null, t);
    }
  }

  if ((o = e.__c) != null) {
    if (o.componentWillUnmount) {
      try {
        o.componentWillUnmount();
      } catch (s) {
        oe.__e(s, t);
      }
    }
    o.base = null;
    o.__P = null;
    o.__n = null;
  }

  if ((o = e.__k)) {
    for (r = 0; r < o.length; r++) {
      if (o[r]) {
        ou(o[r], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    Li(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Wf(e, t, n) {
  return this.constructor(e, n);
}
function Ao(e, t, n) {
  let o;
  let r;
  let s;
  let a;

  if (t == document) {
    (t = document.documentElement);
  }

  if (oe.__) {
    oe.__(e, t);
  }

  (r = (o = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (a = []);

  Oi(
    t,
    (e = ((!o && n) || t).__k = yt(ye, null, [e])),
    r || Ir,
    Ir,
    t.namespaceURI,
    !o && n ? [n] : r ? null : t.firstChild ? Do.call(t.childNodes) : null,
    s,
    !o && n ? n : r ? r.__e : t.firstChild,
    o,
    a
  );

  tu(s, e, a);
  (e.props.children = null);
}
function ru(e, t) {
  Ao(e, t, ru);
}
function su(e, t, n) {
  let o;
  let r;
  let s;
  let a;
  const c = It({}, e.props);

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
    (c.children = arguments.length > 3 ? Do.call(arguments, 2) : n);
  }

  return ko(e.type, c, o || e.key, r || e.ref, null);
}
function Jn(e) {
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
            Gs(a);
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
  (t.__c = `__cC${Xl++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, o) => n.children(o)).contextType = t;

  return t;
}
(Do = Rr.slice);

(oe = {
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

(ql = 0);

(ct.prototype.render = ye);
(on = []);

(Yl = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(Gl = (e, t) => e.__v.__b - t.__v.__b);

(Ar.__r = 0);
(as = Math.random().toString(8));
(vr = `__d${as}`);
(Co = `__a${as}`);
(Kl = /(PointerCapture)$|Capture$/i);
(Pi = 0);
(qs = Ta(false));
(Ys = Ta(true));
(Xl = 0);
let jf = 0;
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
    __v: --jf,
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

  if (oe.vnode) {
    oe.vnode(u);
  }

  return u;
}
const ne = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const pe = globalThis;
const Nn = "10.71.0";
function jr() {
  zr(pe);
  return pe;
}
function zr(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || Nn);
  (t[Nn] = t[Nn] || {});
  return t[Nn];
}
function eo(e, t, n = pe) {
  const o = (n.__SENTRY__ = n.__SENTRY__ || {});
  const r = (o[Nn] = o[Nn] || {});
  return r[e] || (r[e] = t());
}
const zf = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const qf = "Sentry Logger ";
const Pr = {};
function to(e) {
  if (!("console" in pe)) {
    return e();
  }
  const pe_console = pe.console;
  const n = {};
  const o = Object.keys(Pr);
  o.forEach((r) => {
    const Pr_r = Pr[r];
    (n[r] = pe_console[r]);
    (pe_console[r] = Pr_r);
  });
  try {
    return e();
  } finally {
    o.forEach((r) => {
      pe_console[r] = n[r];
    });
  }
}
function Yf() {
  Mi().enabled = true;
}
function Gf() {
  Mi().enabled = false;
}
function iu() {
  return Mi().enabled;
}
function Kf(...e) {
  xi("log", ...e);
}
function Xf(...e) {
  xi("warn", ...e);
}
function Qf(...e) {
  xi("error", ...e);
}
function xi(e, ...t) {
  if (ne &&
    iu()) {
    to(() => {
      pe.console[e](`${qf}[${e}]:`, ...t);
    });
  }
}
function Mi() {
  return ne ? eo("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const G = {
    enable: Yf,
    disable: Gf,
    isEnabled: iu,
    log: Kf,
    warn: Xf,
    error: Qf,
  };

const au = 50;
const Pn = "?";
const Ia = /\(error: (.*)\)/;
const Ra = /captureMessage|captureException/;
function cu(...e) {
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

      const u = Ia.test(a_c) ? a_c.replace(Ia, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const f of t) {
          const p = f(u);
          if (p) {
            s.push(p);
            break;
          }
        }
        if (s.length >= au + r) {
          break;
        }
      }
    }
    return Jf(s.slice(r));
  };
}
function Zf(e) {
  return Array.isArray(e) ? cu(...e) : e;
}
function Jf(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(Qo(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (Ra.test(Qo(t).function || "")) {
    t.pop();
    Ra.test(Qo(t).function || "") && t.pop();
  }

  return t
    .slice(0, au)
    .map(n => ({
    ...n,
    filename: n.filename || Qo(t).filename,
    function: n.function || Pn
  }));
}
function Qo(e) {
  return e[e.length - 1] || {};
}
const cs = "<anonymous>";
function an(e) {
  try {
    return !e || typeof e != "function" ? cs : e.name || cs;
  } catch {
    return cs;
  }
}
function Aa(e) {
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
const yo = {};
const Pa = {};
function On(e, t) {
  (yo[e] = yo[e] || []);
  yo[e].push(t);

  return () => {
    const yo_e = yo[e];
    if (yo_e) {
      const o = yo_e.indexOf(t);

      if (o !== -1) {
        yo_e.splice(o, 1);
      }
    }
  };
}
function $n(e, t) {
  if (!Pa[e]) {
    Pa[e] = true;
    try {
      t();
    } catch (n) {
      if (ne) {
        G.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function vt(e, t) {
  const n = e && yo[e];
  if (n) {
    for (const o of n) {
      try {
        o(t);
      } catch (r) {
        if (ne) {
          G.error(
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
let ls = null;
function ep(e) {
  const t = "error";
  On(t, e);
  $n(t, tp);
}
function tp(...args) {
  (ls = pe.onerror);

  (pe.onerror = function (e, t, n, o, r) {
    vt("error", { column: o, error: r, line: n, msg: e, url: t });
    return ls ? ls.apply(this, args) : false;
  });

  (pe.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let us = null;
function np(e) {
  const t = "unhandledrejection";
  On(t, e);
  $n(t, op);
}
function op(...args) {
  (us = pe.onunhandledrejection);

  (pe.onunhandledrejection = function (e) {
    vt("unhandledrejection", e);
    return us ? us.apply(this, args) : true;
  });

  (pe.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const lu = Object.prototype.toString;
function Pt(e) {
  switch (lu.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return Ui(e, Error);
      }
  }
}
function no(e, t) {
  return lu.call(e) === `[object ${t}]`;
}
function uu(e) {
  return no(e, "ErrorEvent");
}
function La(e) {
  return no(e, "DOMError");
}
function rp(e) {
  return no(e, "DOMException");
}
function zt(e) {
  return no(e, "String");
}
function Di(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function Fo(e) {
  return (
    e === null || Di(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Po(e) {
  return no(e, "Object");
}
function qr(e) {
  return typeof e == "object" && e !== null;
}
function Yr(e) {
  return typeof Event !== "undefined" && Ui(e, Event);
}
function sp(e) {
  return no(e, "RegExp");
}
function Bo(e) {
  return !!(e?.then && typeof e.then == "function");
}
function Ui(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function du(e) {
  return typeof Request !== "undefined" && Ui(e, Request);
}
function nt(e, t, n) {
  if (!(t in e)) {
    return;
  }
  const e_t = e[t];
  if (typeof e_t != "function") {
    return;
  }
  const r = n(e_t);

  if (typeof r == "function") {
    fu(r, e_t);
  }

  try {
    e[t] = r;
  } catch {
    if (ne) {
      G.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function cn(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (ne) {
      G.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function fu(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    cn(e, "__sentry_original__", t);
  } catch {}
}
function Fi(e) {
  return e.__sentry_original__;
}
function pu(e) {
  if (Pt(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...Oa(e) };
  }
  if (Yr(e)) {
    const { type, target, currentTarget, detail } = e;
    return {
      type: type,
      target: target,
      currentTarget: currentTarget,
      ...(detail ? { detail: detail } : {}),
      ...Oa(e),
    };
  }
  return e;
}
function Oa(e) {
  return qr(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function ip(e) {
  const t = Object.keys(pu(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let Dn;
function Gr(e) {
  if (Dn !== undefined) {
    return Dn ? Dn(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = pe;
  return t in n && typeof n[t] == "function"
    ? ((Dn = n[t]), Dn(e))
    : ((Dn = null), e());
}
function Lr() {
  return Gr(() => Math.random());
}
function oo() {
  return Gr(() => Date.now());
}
const ap = Symbol.for("sentry.skipNormalization");
const cp = Symbol.for("sentry.overrideNormalizationDepth");
function lp(e) {
  return !!e[ap];
}
function up(e) {
  const e_cp = e[cp];
  return typeof e_cp == "number" ? e_cp : undefined;
}
let Ks;
function hu(e) {
  Ks = e;
}
function Bt(e, t = 100, n = Infinity) {
  try {
    return Xs("", e, t, n);
  } catch (o) {
    return { ERROR: `**non-serializable** (${o})` };
  }
}
function mu(e, t = 3, n = 100 * 1024) {
  const o = Bt(e, t);
  return pp(o) > n ? mu(e, t - 1, n) : o;
}
function Xs(e, t, n = Infinity, o = Infinity, r = hp()) {
  const [s, a] = r;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = gu(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (lp(t)) {
    return t;
  }
  const l = up(t);
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
      return Xs("", m, u - 1, o, r);
    } catch {}
  }
  const p = Array.isArray(t) ? [] : {};
  let d = 0;
  const h = pu(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (d >= o) {
      p[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (p[m] = Xs(m, h_m, u - 1, o, r));
    d++;
  }
  a(t);
  return p;
}
function gu(e, t) {
  try {
    if (Ks) {
      const o = Ks(t);
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
      : `[object ${dp(t)}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function dp(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function fp(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function pp(e) {
  return fp(JSON.stringify(e));
}
function hp() {
  const e = new WeakSet();
  function t(o) {
    return e.has(o) ? true : (e.add(o), false);
  }
  function n(o) {
    e.delete(o);
  }
  return [t, n];
}
function Qs(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function $a(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const r of e) {
    if (Fo(r)) {
      n.push(String(r));
    } else if (r instanceof Error) {
      n.push(r.message ? `${r.name}: ${r.message}` : r.name);
    } else {
      n.push(gu(undefined, r));
    }
  }

  return n.join(t);
}
function No(e, t, n = false) {
  return zt(e)
    ? sp(t)
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
function Ho(e, t = [], n = false) {
  for (const o of t) {
    if (No(e, o, n)) {
      return true;
    }
  }
  return false;
}
function mp() {
  const e = pe;
  return e.crypto || e.msCrypto;
}
let ds;
function gp() {
  return Lr() * 16;
}
function lt(e = mp()) {
  try {
    if (e?.randomUUID) {
      return Gr(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!ds) {
    (ds = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return ds.replace(/[018]/g, t => (t ^ ((gp() & 15) >> (t / 4))).toString(16));
}
function _u(e) {
  return e.exception?.values?.[0];
}
function En(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const o = _u(e);
  return o
    ? o.type && o.value
      ? `${o.type}: ${o.value}`
      : o.type || o.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function Zs(e, t, n) {
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
function Tn(e, t) {
  const n = _u(e);
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
function xa(e) {
  if (_p(e)) {
    return true;
  }
  try {
    cn(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function _p(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const vu = 1000/* 1e3 */;
function Vo() {
  return oo() / vu;
}
function vp() {
  const { performance } = pe;
  if (!performance?.now || !performance.timeOrigin) {
    return Vo;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Gr(() => performance.now())) / vu;
}
let Ma;
function qt() {
  return (Ma ?? (Ma = vp()))();
}
function yp(e) {
  const t = qt();

  const n = {
    sid: lt(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => Ep(n),
  };

  if (e) {
    Gn(n, e);
  }

  return n;
}
function Gn(e, t = {}) {
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
    (e.sid = t.sid.length === 32 ? t.sid : lt());
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
function wp(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  Gn(e, n);
}
function Ep(e) {
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
function Wo(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const o = { ...e };
  for (const r in t) {
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      (o[r] = Wo(o[r], t[r], n - 1));
    }
  }
  return o;
}
function Da() {
  return lt();
}
function yu() {
  return lt().substring(16);
}
function bp(e) {
  try {
    const pe_WeakRef = pe.WeakRef;
    if (typeof pe_WeakRef == "function") {
      return new pe_WeakRef(e);
    }
  } catch {}
  return e;
}
function wu(e) {
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
const Js = "_sentrySpan";
function Ua(e, t) {
  if (t) {
    cn(e, Js, bp(t));
  } else {
    delete e[Js];
  }
}
function Fa(e) {
  return wu(e[Js]);
}
const Sp = 100;
class Lt {
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
    (this._propagationContext = { traceId: Da(), sampleRand: Lr() });
  }
  clone() {
    const t = new Lt();
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
    Ua(t, Fa(this));
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
      Gn(this._session, { user: t });
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
    const o = n instanceof Lt ? n.getScopeData() : Po(n) ? t : undefined;

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
    Ua(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: Da(), sampleRand: Lr() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const o = typeof n == "number" ? n : Sp;
    if (o <= 0) {
      return this;
    }
    const r = {
      timestamp: Vo(),
      ...t,
      message: t.message ? Qs(t.message, 2048) : t.message,
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
      span: Fa(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = Wo(this._sdkProcessingMetadata, t, 2));
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
    const o = n?.event_id || lt();
    if (!this._client) {
      if (ne) {
        G.warn("No client configured on scope - will not capture exception!");
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
    const r = o?.event_id || lt();
    if (!this._client) {
      if (ne) {
        G.warn("No client configured on scope - will not capture message!");
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
    const o = t.event_id || n?.event_id || lt();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: o }, this), o)
      : (ne &&
          G.warn("No client configured on scope - will not capture event!"),
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
function Cp() {
  return eo("defaultCurrentScope", () => new Lt());
}
function kp() {
  return eo("defaultIsolationScope", () => new Lt());
}

const Ba = e => e instanceof Promise && !e[Eu];

const Eu = Symbol("chained PromiseLike");

const Np = (e, t, n) => {
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
  return Ba(o) && Ba(e) ? o : Tp(e, o);
};

const Tp = (e, t) => {
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
    Object.assign(t, { [Eu]: true });
  }

  return t;
};

class Ip {
  constructor(t, n) {
    let o;

    if (t) {
      (o = t);
    } else {
      (o = new Lt());
    }

    let r;

    if (n) {
      (r = n);
    } else {
      (r = new Lt());
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
    return Bo(o)
      ? Np(
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
function Kn() {
  const e = jr();
  const t = zr(e);
  return (t.stack = t.stack || new Ip(Cp(), kp()));
}
function Rp(e) {
  return Kn().withScope(e);
}
function Ap(e, t) {
  const n = Kn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function Ha(e) {
  return Kn().withScope(() => e(Kn().getIsolationScope()));
}
function Pp() {
  return {
    withIsolationScope: Ha,
    withScope: Rp,
    withSetScope: Ap,
    withSetIsolationScope: (e, t) => Ha(t),
    getCurrentScope: () => Kn().getScope(),
    getIsolationScope: () => Kn().getIsolationScope(),
  };
}
function Bi(e) {
  const t = zr(e);
  return t.acs ? t.acs : Pp();
}
function Lp(e) {
  return (
    typeof e == "object" &&
    e != null &&
    !Array.isArray(e) &&
    Object.keys(e).includes("value")
  );
}
function Op(e, t) {
  const { value, unit } = Lp(e) ? e : { value: e, unit: undefined };
  const r = $p(value);
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
function Va(e, t = false) {
  const n = {};
  for (const [o, r] of Object.entries(e ?? {})) {
    const s = Op(r, t);

    if (s) {
      (n[o] = s);
    }
  }
  return n;
}
function $p(e) {
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
function Ot() {
  const e = jr();
  return Bi(e).getCurrentScope();
}
function $t() {
  const e = jr();
  return Bi(e).getIsolationScope();
}
function xp() {
  return eo("globalScope", () => new Lt());
}
function bu(...e) {
  const t = jr();
  const n = Bi(t);
  if (e.length === 2) {
    const [o, r] = e;
    return o ? n.withSetScope(o, r) : n.withScope(r);
  }
  return n.withScope(e[0]);
}
function Be() {
  return Ot().getClient();
}
function Mp(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || yu() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const Dp = "sentry.source";
const Up = "sentry.sample_rate";
const Fp = "sentry.previous_trace_sample_rate";
const Su = "sentry.op";
const Bp = "sentry.origin";
const Cu = "sentry.profile_id";
const ku = "sentry.exclusive_time";
const Hp = "gen_ai.conversation.id";
const Vp = 0;
const Wp = 1;
const jp = "_sentryScope";
const zp = "_sentryIsolationScope";
function ei(e) {
  const t = e;
  return { scope: t[jp], isolationScope: wu(t[zp]) };
}
const Wa = "sentry-";
function qp(e) {
  const t = Yp(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((o, [r, s]) => {
    if (r.startsWith(Wa)) {
      const a = r.slice(Wa.length);
      o[a] = s;
    }
    return o;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function Yp(e) {
  if (!(!e || (!zt(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const o = ja(n);

      Object.entries(o).forEach(([r, s]) => {
        t[r] = s;
      });

      return t;
    }, {})
      : ja(e);
  }
}
function ja(e) {
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
const Gp = /^o(\d+)\./;

const Kp =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function Xp(e) {
  return e === "http" || e === "https";
}
function ro(e, t = false) {
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
function Qp(e) {
  const t = Kp.exec(e);
  if (!t) {
    to(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, o, r = "", s = "", a = "", c = ""] = t.slice(1);
  let l = "";
  let u = c;
  const f = u.split("/");

  if (f.length > 1) {
    (l = f.slice(0, -1).join("/"));
    (u = f.pop());
  }

  if (u) {
    const p = u.match(/^\d+/);

    if (p) {
      (u = p[0]);
    }
  }

  return Nu({
    host: s,
    pass: r,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: o,
  });
}
function Nu(e) {
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
function Zp(e) {
  if (!ne) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (G.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? Xp(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (G.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (G.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (G.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function Jp(e) {
  return e.match(Gp)?.[1];
}
function eh(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let o;

  if (t.orgId) {
    (o = String(t.orgId));
  } else if (host) {
    (o = Jp(host));
  }

  return o;
}
function Tu(e) {
  const t = typeof e == "string" ? Qp(e) : Nu(e);
  if (!(!t || !Zp(t))) {
    return t;
  }
}
function th(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const Iu = 1;
function nh(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const r = isRemote ? spanId : Kr(e).parent_span_id;
  const s = ei(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || yu() : spanId;
  return { parent_span_id: r, span_id: a, trace_id: traceId };
}
function oh(e) {
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
        sampled: o === Iu,
        attributes: s,
        ...r
      })
    );
  }
}
function qa(e) {
  if (typeof e == "number") {
    return Ya(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return Ya(e.getTime());
  }

  return qt();
}
function Ya(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function Kr(e) {
  if (ah(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (ih(e)) {
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
      parent_span_id: rh(e),
      start_timestamp: qa(startTime),
      timestamp: qa(endTime) || undefined,
      status: lh(status),
      op: attributes[Su],
      origin: attributes[Bp],
      links: oh(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function rh(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function sh(e) {
  return {
    ...e,
    attributes: Va(e.attributes),
    links: e.links?.map(t => ({
      ...t,
      attributes: Va(t.attributes)
    })),
  };
}
function ih(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function ah(e) {
  return typeof e.getSpanJSON == "function";
}
function ch(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === Iu;
}
function lh(e) {
  if (!(!e || e.code === Vp)) {
    return e.code === Wp ? "ok" : e.message || "internal_error";
  }
}
const uh = "_sentryRootSpan";
const Ru = dh;
function dh(e) {
  return e[uh] || e;
}
function Ga() {
  if (!za) {
    to(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (za = true);
  }
}
function Ka(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = e || Be()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function Xa(e) {
  G.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function Qa(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (hh(n)) {
      if (e.description && No(e.description, n)) {
        if (ne) {
          Xa(e);
        }

        return true;
      }
      continue;
    }
    const o = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !o) {
      continue;
    }
    const r = n.name ? e.description && No(e.description, n.name) : true;
    const s = n.op ? e.op && No(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => fh(e.attributes?.[c], l)
        )
      : true;

    if (r && s && a) {
      if (ne) {
        Xa(e);
      }

      return true;
    }
  }
  return false;
}
function fh(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? No(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e === t;
}
function ph(e, t) {
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
function hh(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const mh = Symbol.for("sentry.nonRecordingSpan");
function gh(e) {
  return !!e && e[mh] === true;
}
const Hi = "production";
const _h = "_frozenDsc";
function Au(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const r = {
    environment: n.environment || Hi,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: eh(t),
  };

  t.emit("createDsc", r);
  return r;
}
function Pu(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || Au(n.traceId, e);
}
function vh(e) {
  const t = Be();
  if (!t) {
    return {};
  }
  const n = Ru(e);

  const {
    data,
    description
  } = Kr(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[Up] ?? data[Fp];
  function c(v) {
    if ((typeof a == "number" || typeof a == "string")) {
      (v.sample_rate = `${a}`);
    }

    return v;
  }
  const n_h = n[_h];
  if (n_h) {
    return c(n_h);
  }
  const u = gh(n);
  const f = u && n.dropReason === "ignored";
  if (u && (!Ka(t.getOptions()) || f)) {
    const v = ei(n).scope;
    if (v) {
      const g = { ...Pu(t, v) };

      if (f) {
        (g.sampled = "false");
      }

      return c(g);
    }
  }
  const p = s?.get("sentry.dsc");
  const d = p && qp(p);
  if (d) {
    return c(d);
  }
  const h = Au(e.spanContext().traceId, t);
  const m = data[Dp] ?? data["sentry.segment.name.source"];

  if (m !== "url" && description) {
    (h.transaction = description);
  }

  if (Ka()) {
    (h.sampled = String(ch(n)));

    (h.sample_rand = s?.get("sentry.sample_rand") ??
    ei(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(h);
  t.emit("createDsc", h, n);
  return h;
}
function yh(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
function so(e, t = []) {
  return [e, t];
}
function Za(e, t) {
  const [n, o] = e;
  return [n, [...o, t]];
}
function ti(e, t) {
  const [, n] = e;
  for (const o of n) {
    const r = o[0].type;
    if (t(o, r)) {
      return true;
    }
  }
  return false;
}
function wh(e, t) {
  return ti(e, (n, o) => t.includes(o));
}
function ni(e) {
  const t = zr(pe);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Eh(e) {
  const [t, n] = e;
  let o = JSON.stringify(t);
  function r(s) {
    if (typeof o == "string") {
      (o = typeof s == "string" ? o + s : [ni(o), s]);
    } else {
      o.push(typeof s == "string" ? ni(s) : s);
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
        l = JSON.stringify(Bt(c));
      }
      r(l);
    }
  }
  return typeof o == "string" ? o : bh(o);
}
function bh(e) {
  const t = e.reduce((r, s) => r + s.length, 0);

  const n = new Uint8Array(t);
  let o = 0;
  for (const r of e) {
    n.set(r, o);
    (o += r.length);
  }
  return n;
}
function Sh(e) {
  const t = typeof e.data == "string" ? ni(e.data) : e.data;
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
const Lu = {
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
function Ch(e) {
  return e in Lu;
}
function Ja(e) {
  return Ch(e) ? Lu[e] : e;
}
function Ou(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function kh(e, t, n, o) {
  const r = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date(oo()).toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && o && { dsn: ro(o) }),
    ...(r && { trace: r }),
  };
}
function Nh(e, t) {
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
function Th(e, t, n, o) {
  const r = Ou(n);

  const s = {
    sent_at: new Date(oo()).toISOString(),
    ...(r && { sdk: r }),
    ...(!!o && t && { dsn: ro(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return so(s, [a]);
}
function Ih(e, t, n, o) {
  const r = Ou(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  Nh(e, n?.sdk);
  const a = kh(e, r, o, t);
  delete e.sdkProcessingMetadata;
  return so(a, [[{ type: s }, e]]);
}
function Rh(e) {
  return e.getOptions().traceLifecycle === "stream";
}
function Ah(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  Ph(e, t);

  if (span) {
    $h(e, span);
  }

  xh(e, fingerprint);
  Lh(e, breadcrumbs);
  Oh(e, sdkProcessingMetadata);
}
function ec(e, t) {
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
  co(e, "extra", extra);
  co(e, "tags", tags);
  co(e, "attributes", attributes);
  co(e, "user", user);
  co(e, "contexts", contexts);
  (e.sdkProcessingMetadata = Wo(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function co(e, t, n) {
  e[t] = Wo(e[t], n, 1);
}
function $u(e, t) {
  const n = xp().getScopeData();

  if (e) {
    ec(n, e.getScopeData());
  }

  if (t) {
    ec(n, t.getScopeData());
  }

  return n;
}
function Ph(e, t) {
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
function Lh(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function Oh(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function $h(e, t) {
  (e.contexts = { trace: nh(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: vh(t),
      ...e.sdkProcessingMetadata,
    });

  const n = Ru(t);
  const o = Kr(n).description;

  if (o && !e.transaction && e.type === "transaction") {
    (e.transaction = o);
  }
}
function xh(e, t) {
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
const Mh = "url.full";
function xu(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([o, r]) => {
    if (r != null && !(o in n)) {
      (n[o] = r);
    }
  });
}
const fs = 0;
const tc = 1;
const nc = 2;
function jo(e) {
  return new Lo((t) => {
    t(e);
  });
}
function Mu(e) {
  return new Lo((t, n) => {
    n(e);
  });
}
class Lo {
  constructor(t) {
    (this._state = fs);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new Lo((o, r) => {
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
    return new Lo((n, o) => {
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
    if (this._state === fs) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === tc && n[1](this._value);
        this._state === nc && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === fs) {
          if (Bo(a)) {
            a.then(o, r);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const o = (s) => {
      n(tc, s);
    };

    const r = (s) => {
      n(nc, s);
    };

    try {
      t(o, r);
    } catch (s) {
      r(s);
    }
  }
}
function Dh(e, t, n, o = 0) {
  try {
    const r = oi(t, n, e, o);
    return Bo(r) ? r : jo(r);
  } catch (r) {
    return Mu(r);
  }
}
function oi(e, t, n, o) {
  const n_o = n[o];
  if (!e || !n_o) {
    return e;
  }
  const s = n_o({ ...e }, t);

  if (ne && s === null) {
    G.log(`Event processor "${n_o.id || "?"}" dropped event`);
  }

  return Bo(s) ? s.then(a => oi(a, t, n, o + 1)) : oi(s, t, n, o + 1);
}
let fn;
let oc;
let rc;
let Xt;
function Uh(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = pe;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const o = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const r = _debugIds ? Object.keys(_debugIds) : [];
  if (Xt && o.length === oc && r.length === rc) {
    return Xt;
  }
  (oc = o.length);
  (rc = r.length);
  (Xt = {});

  if (!fn) {
    (fn = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const f = fn?.[l];
      if (f && Xt && c_l) {
        (Xt[f[0]] = c_l);

        if (fn) {
          (fn[l] = [f[0], c_l]);
        }
      } else if (c_l) {
        const p = e(l);
        for (let d = p.length - 1; d >= 0; d--) {
          const m = p[d]?.filename;
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
function Fh(e, t, n, o, r, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || lt(),
    timestamp: t.timestamp || Vo(),
  };

  const u = n.integrations || e.integrations.map(g => g.name);

  Bh(l, e);
  Wh(l, u);

  if (r) {
    r.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    Hh(l, e.stackParser);
  }

  const f = zh(o, n.captureContext);

  if (n.mechanism) {
    Tn(l, n.mechanism);
  }

  const p = r ? r.getEventProcessors() : [];
  const d = $u(s, f);
  const h = [...(n.attachments || []), ...d.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  Ah(l, d);
  const m = [...p, ...d.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? jo(l) : Dh(m, l, n)).then(
    g => {
      if (g) {
        Vh(g);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? jh(g, normalizeDepth, normalizeMaxBreadth) : g;
    }
  );
}
function Bh(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || Hi);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = Qs(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = Qs(c.value, maxValueLength));
      }
    });
  }
}
function Hh(e, t) {
  const n = Uh(t);
  e.exception?.values?.forEach((o) => {
    o.stacktrace?.frames?.forEach((r) => {
      if (r.filename) {
        (r.debug_id = n[r.filename]);
      }
    });
  });
}
function Vh(e) {
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
function Wh(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function jh(e, t, n) {
  if (!e) {
    return null;
  }
  const o = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(r => ({
        ...r,
        ...(r.data && { data: Bt(r.data, t, n) })
      })),
    }),
    ...(e.user && { user: Bt(e.user, t, n) }),
    ...(e.contexts && { contexts: Bt(e.contexts, t, n) }),
    ...(e.extra && { extra: Bt(e.extra, t, n) }),
  };

  if (e.contexts?.trace &&
    o.contexts) {
    (o.contexts.trace = e.contexts.trace);

    e.contexts.trace.data &&
      (o.contexts.trace.data = Bt(e.contexts.trace.data, t, n));
  }

  if (e.spans) {
    (o.spans = e.spans.map(r => ({
      ...r,
      ...(r.data && { data: Bt(r.data, t, n) })
    })));
  }

  if (e.contexts?.flags &&
    o.contexts) {
    (o.contexts.flags = Bt(e.contexts.flags, 3, n));
  }

  return o;
}
function zh(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new Lt();
  n.update(t);
  return n;
}
function qh(e) {
  if (e) {
    return Yh(e) ? { captureContext: e } : Kh(e) ? { captureContext: e } : e;
  }
}
function Yh(e) {
  return e instanceof Lt || typeof e == "function";
}
const Gh = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function Kh(e) {
  return Object.keys(e).some(t => Gh.includes(t));
}
function Du(e, t) {
  return Ot().captureException(e, qh(t));
}
function Uu(e, t) {
  return Ot().captureEvent(e, t);
}
function Xh(e, t) {
  $t().setContext(e, t);
}
function sc(e) {
  $t().setUser(e);
}
function Qh() {
  return $t().lastEventId();
}
function ic(e) {
  const t = $t();
  const { user } = $u(t, Ot());
  const { userAgent } = pe.navigator || {};
  const r = yp({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    Gn(s, { status: "exited" });
  }

  Fu();
  t.setSession(r);
  return r;
}
function Fu() {
  const e = $t();
  const n = Ot().getSession() || e.getSession();

  if (n) {
    wp(n);
  }

  Bu();
  e.setSession();
}
function Bu() {
  const e = $t();
  const t = Be();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function ps(e = false) {
  if (e) {
    Fu();
    return;
  }
  Bu();
}
function Hu(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const Zh = "7";
function Vu(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function Jh(e) {
  return `${Vu(e)}${e.projectId}/envelope/`;
}
function em(e, t) {
  const n = { sentry_version: Zh };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function tm(e, t, n) {
  return t || `${Jh(e)}?${em(e, n)}`;
}
function nm(e, t) {
  const n = Tu(e);
  if (!n) {
    return "";
  }
  const o = `${Vu(n)}embed/error-page/`;
  let r = `dsn=${ro(n)}`;
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
const ac = [];
function om(e) {
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
function rm(e) {
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
  return om(o);
}
function sm(e, t) {
  const n = {};

  t.forEach((o) => {
    if (o?.beforeSetup) {
      o.beforeSetup(e);
    }
  });

  t.forEach((o) => {
    if (o) {
      Wu(e, o, n);
    }
  });

  return n;
}
function cc(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function Wu(e, t, n) {
  if (n[t.name]) {
    if (ne) {
      G.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!ac.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    ac.push(t.name);
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

  if (ne) {
    G.log(`Integration installed: ${t.name}`);
  }
}
function im() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function am() {
  return "npm";
}
function cm() {
  return (!im() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function Vi() {
  return typeof window !== "undefined" && (!cm() || lm());
}
function lm() {
  return pe.process?.type === "renderer";
}
function um(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(Vi() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function dm(e, t, n, o, r) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && o) {
    (s.dsn = ro(o));
  }

  return so(s, [um(e, r)]);
}
function fm(e, t) {
  const n = t ?? pm(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const o = e.getOptions();

  const r = dm(
    n,
    o._metadata,
    o.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  ju().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(r);
}
function pm(e) {
  return ju().get(e);
}
function ju() {
  return eo("clientToLogBufferMap", () => new WeakMap());
}
function hm(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(Vi() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function mm(e, t, n, o, r) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && o) {
    (s.dsn = ro(o));
  }

  return so(s, [hm(e, r)]);
}
function gm(e, t) {
  const n = t ?? _m(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const o = e.getOptions();

  const r = mm(
    n,
    o._metadata,
    o.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  zu().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(r);
}
function _m(e) {
  return zu().get(e);
}
function zu() {
  return eo("clientToMetricBufferMap", () => new WeakMap());
}
function vm(e) {
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
  return sh(t);
}
function ym(e, t) {
  if (e.type !== "transaction" ||
  !e.spans?.length ||
  !e.sdkProcessingMetadata?.hasGenAiSpans ||
  t.getOptions().streamGenAiSpans === false ||
  Rh(t)) {
    return;
  }
  const n = [];
  const o = [];
  for (const s of e.spans) {
    if (s.op?.startsWith("gen_ai.")) {
      n.push(vm(s));
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
      ...(Vi() && { ingest_settings: { infer_ip: r, infer_user_agent: r } }),
      items: n,
    },
  ];
}
const Wi = Symbol.for("SentryBufferFullError");
function ji(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function o(a) {
    t.delete(a);
  }
  function r(a) {
    if (!n()) {
      return Mu(Wi);
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
      return jo(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => Hu(setTimeout(() => u(false), a)))];
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
const wm = 60 * 1000/* 1e3 */;
function Em(e, t = oo()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const o = Date.parse(`${e}`);
  return isNaN(o) ? wm : o - t;
}
function bm(e, t) {
  return e[t] || e.all || 0;
}
function Sm(e, t, n = oo()) {
  return bm(e, t) > n;
}
function Cm(e, { statusCode: t, headers: n }, o = oo()) {
  const r = { ...e };
  const s = n?.["x-sentry-rate-limits"];
  const a = n?.["retry-after"];
  if (s) {
    for (const c of s.trim().split(",")) {
      const [l, u, , , f] = c.split(":", 5);
      const p = parseInt(l, 10);
      const d = (isNaN(p) ? 60 : p) * 1000/* 1e3 */;
      if (!u) {
        r.all = o + d;
      } else {
        for (const h of u.split(";")) {
          if (h === "metric_bucket") {
            if ((!f || f.split(";").includes("custom"))) {
              (r[h] = o + d);
            }
          } else {
            (r[h] = o + d);
          }
        }
      }
    }
  } else {
    if (a) {
      (r.all = o + Em(a, o));
    } else if (t === 429) {
      (r.all = o + 60 * 1000/* 1e3 */);
    }
  }
  return r;
}
const qu = 64;
function km(e, t, n = ji(e.bufferSize || qu)) {
  let o = {};
  const r = a => n.drain(a);
  function s(a) {
    const c = [];

    ti(a, (p, d) => {
      const h = Ja(d);

      if (Sm(o, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(p);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = so(a[0], c);

    const u = (p) => {
      if (wh(l, ["client_report"])) {
        if (ne) {
          G.warn(
            `Dropping client report. Will not send outcomes (reason: ${p}).`
          );
        }

        return;
      }
      ti(l, (d, h) => {
        e.recordDroppedEvent(p, Ja(h));
      });
    };

    const f = () => t({ body: Eh(l) }).then(
      p => p.statusCode === 413
        ? (ne &&
            G.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          p)
        : (ne &&
            p.statusCode !== undefined &&
            (p.statusCode < 200 || p.statusCode >= 300) &&
            G.warn(
              `Sentry responded with status code ${p.statusCode} to sent event.`
            ),
          (o = Cm(o, p)),
          p),
      (p) => {
        u("network_error");

        if (ne) {
          G.error("Encountered error running transport request:", p);
        }

        throw p;
      }
    );

    return n.add(f).then(
      p => p,
      (p) => {
        if (p === Wi) {
          if (ne) {
            G.error("Skipped sending event because buffer is full.");
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
function Nm(e, t, n) {
  const o = [
    { type: "client_report" },
    { timestamp: Vo(), discarded_events: e },
  ];
  return so(t ? { dsn: t } : {}, [o]);
}
function Yu(e) {
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
function Tm(e) {
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
    profile_id: data?.[Cu],
    exclusive_time: data?.[ku],
    measurements: e.measurements,
    is_segment: true,
  };
}
function Im(e) {
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
          ...(e.profile_id && { [Cu]: e.profile_id }),
          ...(e.exclusive_time && { [ku]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const Zo = ["forwarded", "-ip", "remote-", "via", "-user"];
function Rm(e) {
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
        cookies: { deny: Zo },
        httpHeaders: { request: { deny: Zo }, response: { deny: Zo } },
        httpBodies: [],
        urlQueryParams: { deny: Zo },
        graphQL: { document: true, variables: true },
        genAI: { inputs: false, outputs: false },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7,
      };
}
const Am = {
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
function Pm(e) {
  const t = e.dataCollection != null ? Am : Rm(e.sendDefaultPii);
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
const lc = "Not capturing exception because it's already been captured.";
const uc = "Discarded session because of missing or non-string release";
const Gu = Symbol.for("SentryInternalError");
const Ku = Symbol.for("SentryDoNotSendEventError");
const Lm = 5000/* 5e3 */;
function yr(e) {
  return { message: e, [Gu]: true };
}
function hs(e) {
  return { message: e, [Ku]: true };
}
function dc(e) {
  return qr(e) && Gu in e;
}
function fc(e) {
  return qr(e) && Ku in e;
}
function pc(e, t, n, o, r) {
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
      const u = e.getOptions()._flushInterval ?? Lm;

      if (u > 0) {
        (c = true);

        (a = Hu(
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
class Om {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = ji(t.transportOptions?.bufferSize ?? qu));
    (this._dataCollection = Pm(t));

    if (t.dsn) {
      (this._dsn = Tu(t.dsn));
    } else if (ne) {
      G.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const o = tm(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: o,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs ?? true);

    if (this._options.enableLogs) {
      pc(this, "afterCaptureLog", "flushLogs", Dm, fm);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      pc(this, "afterCaptureMetric", "flushMetrics", Mm, gm);
    }
  }
  captureException(t, n, o) {
    const r = lt();
    if (xa(t)) {
      if (ne) {
        G.log(lc);
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
    const s = { event_id: lt(), ...o };
    const a = Di(t) ? t : String(t);
    const c = Fo(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, r)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, o) {
    const r = lt();
    if (n?.originalException && xa(n.originalException)) {
      if (ne) {
        G.log(lc);
      }

      return r;
    }
    const s = { event_id: r, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = hc(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || o, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    Gn(t, { init: false });
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

    Wu(this, t, this._integrations);

    if (!n) {
      cc(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    const o = ym(t, this);
    let r = Ih(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      r = Za(r, Sh(s));
    }

    if (o) {
      (r = Za(r, o));
    }

    this.sendEnvelope(r).then(s => this.emit("afterSendEvent", t, s));
  }
  sendSession(t) {
    const { release, environment = Hi } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (ne) {
          G.warn(uc);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (ne) {
          G.warn(uc);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const r = Th(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(r);
  }
  recordDroppedEvent(t, n, o = 1) {
    if (this._options.sendClientReports) {
      const r = `${t}:${n}`;

      if (ne) {
        G.log(`Recording outcome: "${r}"${o > 1 ? ` (${o} times)` : ""}`);
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
        if (ne) {
          G.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (ne) {
      G.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = sm(this, integrations));
    cc(this, integrations);
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
      Gn(t, {
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

    return Fh(s, t, n, o, this, r).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...Mp(o) },
          ...c.contexts,
        });

      const l = Pu(this, o);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, o = Ot(), r = $t()) {
    if (ne &&
      ri(t)) {
      G.log(`Captured error event \`${Yu(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, o, r).then(
      s => s.event_id,
      (s) => {
        if (ne) {
          if (fc(s)) {
            G.log(s.message);
          } else if (dc(s)) {
            G.warn(s.message);
          } else {
            G.warn(s);
          }
        }
      }
    );
  }
  _processEvent(t, n, o, r) {
    const s = this.getOptions();
    const { sampleRate } = s;
    const c = Xu(t);
    const l = ri(t);
    const f = `before send for type \`${t.type || "error"}\``;
    const p = typeof sampleRate === "undefined" ? undefined : th(sampleRate);
    const d = hc(t.type);
    return this._prepareEvent(t, n, o, r)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", d);
          throw hs("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const _ = xm(this, s, h, n);
        return $m(_, f);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", d);

        if (c) {
          const g = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", g);
        }

        throw hs(`${f} returned \`null\`, will not send event.`);
      }
      const m = o.getSession() || r.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (l && typeof p == "number" && Lr() > p) {
        this.recordDroppedEvent("sample_rate", "error");

        throw hs(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        );
      }

      if (c) {
        const v = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const g = h.spans ? h.spans.length : 0;
        const b = v - g;

        if (b > 0) {
          this.recordDroppedEvent("before_send", "span", b);
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
        throw fc(h) || dc(h)
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

        if (o === Wi) {
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
    if (ne) {
      G.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (ne) {
        G.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (ne) {
        G.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (ne) {
      G.log("Sending outcomes:", t);
    }

    const n = Nm(t, this._options.tunnel && ro(this._dsn));
    this.sendEnvelope(n);
  }
}
function hc(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function $m(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Bo(e)) {
    return e.then(
      (o) => {
        if (!Po(o) && o !== null) {
          throw yr(n);
        }
        return o;
      },
      (o) => {
        throw yr(`${t} rejected with ${o}`);
      }
    );
  }
  if (!Po(e) && e !== null) {
    throw yr(n);
  }
  return e;
}
function xm(e, t, n, o) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !yh(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (ri(l) && beforeSend) {
    return beforeSend(l, o);
  }
  if (Xu(l)) {
    if (c || ignoreSpans) {
      const u = Tm(l);
      if (ignoreSpans?.length &&
      Qa({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const f = c(u);

        if (f) {
          (l = Wo(n, Im(f)));
        } else {
          Ga();
        }
      }
      if (l.spans) {
        const f = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            Qa({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            ph(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              f.push(m);
            } else {
              Ga();
              f.push(h);
            }
          } else {
            f.push(h);
          }
        }
        const d = l.spans.length - f.length;

        if (d) {
          e.recordDroppedEvent("before_send", "span", d);
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
      return beforeSendTransaction(l, o);
    }
  }
  return l;
}
function ri(e) {
  return e.type === undefined;
}
function Xu(e) {
  return e.type === "transaction";
}
function Mm(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + Qu(e.attributes);
}
function Dm(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + Qu(e.attributes);
}
function Qu(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * mc(n[0]));
    } else if (Fo(n)) {
      (t += mc(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function mc(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function Um(e, t) {
  if (t.debug === true) {
    if (ne) {
      G.enable();
    } else {
      to(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  Ot().update(t.initialScope);
  const o = new e(t);
  Fm(o);
  o.init();
  return o;
}
function Fm(e) {
  Ot().setClient(e);
}
function ms(e) {
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
function Bm(e, t = true) {
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
function Hm(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function Zu(e, t, n = [t], o = "npm") {
  const r = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!r.name) {
    (r.name = `sentry.javascript.${t}`);

    (r.packages = n.map(s => ({
      name: `${o}:@sentry/${s}`,
      version: Nn
    })));

    (r.version = Nn);
  }
}
const Vm = 100;
function Ln(e, t) {
  const n = Be();
  const o = $t();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = Vm } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: Vo(), ...e };

  const l = beforeBreadcrumb ? to(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    o.addBreadcrumb(l, maxBreadcrumbs);
  }
}
const Wm = "FunctionToString";
const gc = new WeakMap();

const zm = () => ({
  name: Wm,

  setupOnce() {
    const e = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = Fi(this);
        let o;
        try {
          if (gc.has(Be()) && n !== undefined) {
            (o = n);
          }
        } catch {}
        return e.apply(o ?? this, t);
      };
    } catch {}
  },

  setup(e) {
    gc.set(e, true);
  }
});

const qm = [
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

const Ym = "EventFilters";

const Gm = (e = {}) => {
  let t;
  return {
    name: Ym,
    setup(n) {
      const o = n.getOptions();
      t = _c(e, o);
    },
    processEvent(n, o, r) {
      if (!t) {
        const s = r.getOptions();
        t = _c(e, s);
      }
      return Xm(n, t) ? null : n;
    },
  };
};

const Km = (e = {}) => ({
  ...Gm(e),
  name: "InboundFilters"
});

function _c(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : qm),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function Xm(e, t) {
  if (e.type) {
    if (e.type === "transaction" && Zm(e, t.ignoreTransactions)) {
      if (ne) {
        G.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${En(e)}`);
      }

      return true;
    }
  } else {
    if (Qm(e, t.ignoreErrors)) {
      if (ne) {
        G.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${En(e)}`);
      }

      return true;
    }
    if (ng(e)) {
      if (ne) {
        G.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${En(e)}`);
      }

      return true;
    }
    if (Jm(e, t.denyUrls)) {
      if (ne) {
        G.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${En(e)}.
Url: ${Or(e)}`);
      }

      return true;
    }
    if (!eg(e, t.allowUrls)) {
      if (ne) {
        G.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${En(e)}.
Url: ${Or(e)}`);
      }

      return true;
    }
  }
  return false;
}
function Qm(e, t) {
  return t?.length ? Yu(e).some(n => Ho(n, t)) : false;
}
function Zm(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? Ho(e_transaction, t) : false;
}
function Jm(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = Or(e);
  return n ? Ho(n, t) : false;
}
function eg(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = Or(e);
  return n ? Ho(n, t) : true;
}
function tg(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function Or(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        o => o.mechanism?.parent_id === undefined && o.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? tg(n) : null;
  } catch {
    if (ne) {
      G.error(`Cannot extract url for event ${En(e)}`);
    }

    return null;
  }
}
function ng(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function og(e, t, n, o, r, s) {
  if (!r.exception?.values || !s || !Pt(s.originalException)) {
    return;
  }
  const a =
    r.exception.values.length > 0
      ? r.exception.values[r.exception.values.length - 1]
      : undefined;

  if (a) {
    (r.exception.values = si(
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
function si(e, t, n, o, r, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (Pt(o[r])) {
    vc(a, c, o);
    const u = e(t, o[r]);
    const l_length = l.length;
    yc(u, r, l_length, c);
    (l = si(e, t, n, o[r], r, [u, ...l], u, l_length));
  }

  if (Ju(o)) {
    o.errors.forEach((u, f) => {
      if (Pt(u)) {
        vc(a, c, o);
        const p = e(t, u);
        const l_length = l.length;
        yc(p, `errors[${f}]`, l_length, c);
        (l = si(e, t, n, u, r, [p, ...l], p, l_length));
      }
    });
  }

  return l;
}
function Ju(e) {
  return Array.isArray(e.errors);
}
function vc(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(Ju(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function yc(e, t, n, o) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: o,
  };
}
function rg(e) {
  return (
    Pt(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function wc(e) {
  return rg(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
const Ec = new Set([]);
function sg(e) {
  const t = "console";
  const n = On(t, e);
  $n(t, ig);
  return n;
}
const bc = new Set();
function ig() {
  if ("console" in pe) {
    zf.forEach(e => {
      if (!bc.has(e) && (e in pe.console)) {
        bc.add(e);

        nt(pe.console, e, t => {
          (Pr[e] = t);

          return (...n) => {
            const [o] = n;
            const Pr_e = Pr[e];
            const s = Ec.size && typeof o == "string" && Ho(o, Ec);

            if (!s) {
              vt("console", { args: n, level: e });
            }

            if ((!s || (ne && G.isEnabled()))) {
              Pr_e?.apply(pe.console, n);
            }
          };
        });
      }
    });
  }
}
function ag(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const cg = "Dedupe";

const ug = () => {
  let e;
  return {
    name: cg,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (dg(t, e)) {
          if (ne) {
            G.warn(
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

function dg(e, t) {
  return t ? !!(fg(e, t) || pg(e, t)) : false;
}
function fg(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !td(e, t) ||
    !ed(e, t)
  );
}
function pg(e, t) {
  const n = Sc(t);
  const o = Sc(e);
  return !(
    !n ||
    !o ||
    n.type !== o.type ||
    n.value !== o.value ||
    !td(e, t) ||
    !ed(e, t)
  );
}
function ed(e, t) {
  let n = Aa(e);
  let o = Aa(t);
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
function td(e, t) {
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
function Sc(e) {
  return e.exception?.values?.[0];
}
const hg = "ConversationId";

const gg = () => ({
  name: hg,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = Ot().getScopeData();
      const o = $t().getScopeData();
      const r = n.conversationId || o.conversationId;
      if (r) {
        const { op: op_1, data, description } = Kr(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(Hp, r);
      }
    });
  }
});

function nd(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const Oo = pe;
function _g() {
  return "history" in Oo && !!Oo.history;
}
function vg() {
  if (!("fetch" in Oo)) {
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
function ii(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function yg() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!vg()) {
    return false;
  }
  if (ii(Oo.fetch)) {
    return true;
  }
  let e = false;
  const Oo_document = Oo.document;
  if (Oo_document && typeof Oo_document.createElement == "function") {
    try {
      const n = Oo_document.createElement("iframe");
      (n.hidden = true);
      Oo_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = ii(n.contentWindow.fetch));
      }

      Oo_document.head.removeChild(n);
    } catch (n) {
      if (ne) {
        G.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function wg(e, t) {
  const n = "fetch";
  const o = On(n, e);

  $n(n, () => Eg(undefined, t));

  return o;
}
function Eg(e, t = false) {
  if (!t || yg()) {
    nt(pe, "fetch", n => (...o) => {
      const r = new Error();
      const { method, url } = bg(o);

      const c = {
        args: o,
        fetchData: { method: method, url: url },
        startTimestamp: qt() * 1000/* 1e3 */,
        virtualError: r,
        headers: Sg(o),
      };

      vt("fetch", { ...c });

      return n.apply(pe, o).then(
        async l => {
          vt("fetch", { ...c, endTimestamp: qt() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          vt("fetch", { ...c, endTimestamp: qt() * 1000/* 1e3 */, error: l });

          if (Pt(l) &&
            l.stack === undefined) {
            (l.stack = r.stack);
            cn(l, "framesToPop", 1);
          }

          const f =
            Be()?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (f !== false &&
          Pt(l) &&
          l.name === "TypeError" &&
          (l.message === "Failed to fetch" ||
            l.message === "Load failed" ||
            l.message ===
              "NetworkError when attempting to fetch resource.")) {
            try {
              const h = new URL(c.fetchData.url).host;

              if (f === "always") {
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
  return qr(e) && !!e[t];
}
function Cc(e) {
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
function bg(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, o] = e;
    return {
      url: Cc(n),
      method: wr(o, "method")
        ? String(o.method).toUpperCase()
        : du(n) && wr(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: Cc(t),
    method: wr(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function Sg(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (du(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const od = pe;
function zi() {
  try {
    return od.document.location.href;
  } catch {
    return "";
  }
}
function Cg(e, t = 5) {
  if (!od.HTMLElement) {
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
const we = pe;
let ai = 0;
function rd() {
  return ai > 0;
}
function kg() {
  ai++;

  setTimeout(() => {
    ai--;
  });
}
function Xn(e, t = {}) {
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
    if (Fi(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const o = function (...r) {
    pe._sentryWrappedDepth = (pe._sentryWrappedDepth || 0) + 1;
    try {
      const s = r.map(a => Xn(a, t));
      return e.apply(this, s);
    } catch (s) {
      kg();

      bu((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              Zs(c, undefined);
              Tn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: r });
            return c;
          }
        );

        Du(s);
      });

      throw s;
    } finally {
      pe._sentryWrappedDepth = (pe._sentryWrappedDepth || 0) - 1;
    }
  };
  try {
    for (const r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        (o[r] = e[r]);
      }
    }
  } catch {}
  fu(o, e);
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
function kc() {
  const e = zi();
  const { referrer } = we.document || {};
  const { userAgent } = we.navigator || {};
  const o = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: o };
}
function qi(e, t) {
  const n = Xr(e, t);
  const o = { type: Ag(t), value: Pg(t) };

  if (n.length) {
    (o.stacktrace = { frames: n });
  }

  if (o.type === undefined &&
    o.value === "") {
    (o.value = "Unrecoverable error caught");
  }

  return o;
}
function Ng(e, t, n, o) {
  const s = Be()?.getOptions().normalizeDepth;
  const a = Mg(t);
  const c = { __serialized__: mu(t, s) };
  if (a) {
    return { exception: { values: [qi(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: Yr(t) ? t.constructor.name : o ? "UnhandledRejection" : "Error",
          value: $g(t, { isUnhandledRejection: o }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = Xr(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function gs(e, t) {
  return { exception: { values: [qi(e, t)] } };
}
function Xr(e, t) {
  const n = t.stacktrace || t.stack || "";
  const o = Ig(t);
  const r = Rg(t);
  try {
    return e(n, o, r);
  } catch {}
  return [];
}
const Tg = /Minified React error #\d+;/i;
function Ig(e) {
  return e && Tg.test(e.message) ? 1 : 0;
}
function Rg(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function sd(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function Ag(e) {
  const t = e?.name;
  return !t && sd(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function Pg(e) {
  const t = e?.message;
  return sd(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? wc(t.error)
      : wc(e)
    : "No error message";
}
function Lg(e, t, n, o) {
  const r = n?.syntheticException || undefined;
  const s = Yi(e, t, r, o);
  Tn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return jo(s);
}
function Og(e, t, n = "info", o, r) {
  const s = o?.syntheticException || undefined;
  const a = ci(e, t, s, r);
  (a.level = n);

  if (o?.event_id) {
    (a.event_id = o.event_id);
  }

  return jo(a);
}
function Yi(e, t, n, o, r) {
  let s;
  if (uu(t) && t.error) {
    return gs(e, t.error);
  }
  if (La(t) || rp(t)) {
    const a = t;
    if ("stack" in t) {
      s = gs(e, t);
      const c = s.exception?.values?.[0];
      if (o && n && c && !c.stacktrace) {
        const l = Xr(e, n);

        if (l.length) {
          (c.stacktrace = { frames: l });
          Tn(s, { synthetic: true });
        }
      }
    } else {
      const c = a.name || (La(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = ci(e, l, n, o));
      Zs(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (Pt(t)) {
    return gs(e, t);
  }

  if (Po(t) || Yr(t)) {
    (s = Ng(e, t, n, r));
    Tn(s, { synthetic: true });
    return s;
  }

  (s = ci(e, t, n, o));
  Zs(s, `${t}`);
  Tn(s, { synthetic: true });
  return s;
}
function ci(e, t, n, o) {
  const r = {};
  if (o && n) {
    const s = Xr(e, n);

    if (s.length) {
      (r.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    Tn(r, { synthetic: true });
  }
  if (Di(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (r.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return r;
  }
  (r.message = t);
  return r;
}
function $g(e, { isUnhandledRejection: t }) {
  const n = ip(e);
  const o = t ? "promise rejection" : "exception";
  return uu(e)
    ? `Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``
    : Yr(e)
    ? `Event \`${xg(e)}\` (type=${e.type}) captured as ${o}`
    : `Object captured as ${o} with keys: ${n}`;
}
function xg(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function Mg(e) {
  return Object.values(e).find(Pt);
}
class Dg extends Om {
  constructor(t) {
    const n = Ug(t);
    const o = we.SENTRY_SDK_SOURCE || am();
    Zu(n, "browser", ["browser"], o);
    super(n);
    const { userInfo } = this.getDataCollectionOptions();

    if (n._metadata?.sdk) {
      (n._metadata.sdk.settings = {
          infer_ip: userInfo ? "auto" : "never",
          ...n._metadata.sdk.settings,
        });
    }

    const { sendClientReports } = this._options;

    if (we.document) {
      we.document.addEventListener("visibilitychange", () => {
        if (we.document.visibilityState === "hidden") {
          sendClientReports && this._flushOutcomes();

          queueMicrotask(() => {
            this.flush();
          });
        }
      });
    }

    if (userInfo) {
      this.on("beforeSendSession", Hm);
    }
  }
  eventFromException(t, n) {
    return Lg(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", o) {
    return Og(
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
function Ug(e) {
  return {
    release:
      typeof __SENTRY_RELEASE__ == "string"
        ? __SENTRY_RELEASE__
        : we.SENTRY_RELEASE?.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...e,
  };
}
const Fg = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Le = pe;
function Nc(e, t, n) {
  if (Le.document) {
    Le.addEventListener(e, t, n);
  }
}
function Tc(e, t, n) {
  if (Le.document) {
    Le.removeEventListener(e, t, n);
  }
}

const Bg = (e) => {
  return () => {
    if (!t) {
      e();
      (t = true);
    }
  };
};

const Hg = (e) => {
  const t = Le.requestIdleCallback || Le.setTimeout;

  if (Le.document?.visibilityState === "hidden") {
    e();
  } else {
    (e = Bg(e));
    Nc("visibilitychange", e, { once: true, capture: true });
    Nc("pagehide", e, { once: true, capture: true });

    t(() => {
      e();
      Tc("visibilitychange", e, { capture: true });
      Tc("pagehide", e, { capture: true });
    });
  }
};

const Vg = 80;
const vn = {};
try {
  if (typeof Node !== "undefined") {
    (vn.parentNode = Object.getOwnPropertyDescriptor(
        Node.prototype,
        "parentNode"
      ).get);
  }

  if (typeof Element !== "undefined") {
    (vn.tagName = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "tagName"
      ).get);

    (vn.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get);

    (vn.className = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "className"
      ).get);

    (vn.getAttribute = Element.prototype.getAttribute);
  }

  if (typeof HTMLElement !== "undefined") {
    (vn.dataset = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "dataset"
      ).get);
  }
} catch {}
function en(e, t, n) {
  const vn_t = vn[t];
  if (vn_t) {
    try {
      return vn_t.call(e, n);
    } catch {}
  }
  const e_t = e[t];
  return typeof e_t == "function" ? e_t.call(e, n) : e_t;
}
function id(e, t = {}) {
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
    const f = Array.isArray(t) ? t : t.keyAttrs;
    const p = (!Array.isArray(t) && t.maxStringLength) || Vg;

    while (n &&
         s++ < o &&
         ((u = Wg(n, f)),
         !(u === "html" || (s > 1 && a + r.length * c_length + u.length >= p)))) {
      r.push(u);
      (a += u.length);
      (n = en(n, "parentNode"));
    }

    return r.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function Wg(e, t) {
  const n = [];
  const o = en(e, "tagName");
  if (!o) {
    return "";
  }
  if (typeof HTMLElement !== "undefined" && e instanceof HTMLElement) {
    const s = en(e, "dataset");
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
        .filter(s => en(e, "getAttribute", s))
        .map(s => [s, en(e, "getAttribute", s)])
    : null;
  if (r?.length) {
    r.forEach((s) => {
      n.push(`[${s[0]}="${s[1]}"]`);
    });
  } else {
    const s = en(e, "id");

    if (s) {
      n.push(`#${s}`);
    }

    const a = en(e, "className");
    if (a && zt(a)) {
      const c = a.split(/\s+/);
      for (const l of c) {
        n.push(`.${l}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const a = en(e, "getAttribute", s);

    if (a) {
      n.push(`[${s}="${a}"]`);
    }
  }
  return n.join("");
}
const jg = 1000/* 1e3 */;
let Ic;
let li;
let ui;
function zg(e) {
  On("dom", e);
  $n("dom", qg);
}
function qg() {
  if (!Le.document) {
    return;
  }
  const e = vt.bind(null, "dom");
  const t = Rc(e, true);
  Le.document.addEventListener("click", t, false);
  Le.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const r = Le[n]?.prototype;

    if (r?.hasOwnProperty?.("addEventListener")) {
      nt(r, "addEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const f = (u[a] = u[a] || { refCount: 0 });
            if (!f.handler) {
              const p = Rc(e);
              (f.handler = p);
              s.call(this, a, p, l);
            }
            f.refCount++;
          } catch {}
        }
        return s.call(this, a, c, l);
      }));

      nt(r, "removeEventListener", s => (function(a, c, l) {
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
function Yg(e) {
  if (e.type !== li) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== ui) {
      return false;
    }
  } catch {}
  return true;
}
function Gg(e, t) {
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
function Rc(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const o = Kg(n);
    if (Gg(n.type, o)) {
      return;
    }
    cn(n, "_sentryCaptured", true);

    if (o && !o._sentryId) {
      cn(o, "_sentryId", lt());
    }

    const r = n.type === "keypress" ? "input" : n.type;

    if (!Yg(n)) {
      e({ event: n, name: r, global: t });
      (li = n.type);
      (ui = o ? o._sentryId : undefined);
    }

    clearTimeout(Ic);

    (Ic = Le.setTimeout(() => {
      (ui = undefined);
      (li = undefined);
    }, jg));
  };
}
function Kg(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let Jo;
function ad(e) {
  const t = "history";
  On(t, e);
  $n(t, Xg);
}
function Xg() {
  Le.addEventListener("popstate", () => {
    const t = Le.location.href;
    const n = Jo;
    (Jo = t);

    if (n === t) {
      return;
    }

    vt("history", { from: n, to: t });
  });

  if (!_g()) {
    return;
  }

  class e {
    constructor(t) {
      return function (...n) {
        const o = n.length > 2 ? n[2] : undefined;
        if (o) {
          const r = Jo;
          const s = Qg(String(o));
          (Jo = s);

          if (r === s) {
            return t.apply(this, n);
          }

          vt("history", { from: r, to: s });
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

  nt(Le.history, "pushState", e);
  nt(Le.history, "replaceState", e);
}
function Qg(e) {
  try {
    return new URL(e, Le.location.origin).toString();
  } catch {
    return e;
  }
}
const Er = {};
function Zg(e) {
  const Er_e = Er[e];
  if (Er_e) {
    return Er_e;
  }
  let n = Le[e];
  if (ii(n)) {
    return (Er[e] = n.bind(Le));
  }
  const {
    document
  } = Le;
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
      if (Fg) {
        G.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          r
        );
      }
    }
  }
  return n && (Er[e] = n.bind(Le));
}
function Jg(e) {
  Er[e] = undefined;
}
const wo = "__sentry_xhr_v3__";
function e_(e) {
  On("xhr", e);
  $n("xhr", t_);
}
function t_() {
  if (!Le.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, o) {
      const r = new Error();
      const s = qt() * 1000/* 1e3 */;
      const a = zt(o[0]) ? o[0].toUpperCase() : undefined;
      const c = n_(o[1]);
      if (!a || !c) {
        return t.apply(n, o);
      }
      (n[wo] = { method: a, url: c, request_headers: {} });

      if (a === "POST" &&
        c.match(/sentry_key/)) {
        (n.__sentry_own_request__ = true);
      }

      const l = () => {
        const n_wo = n[wo];
        if (n_wo && n.readyState === 4) {
          try {
            n_wo.status_code = n.status;
          } catch {}
          const f = {
            endTimestamp: qt() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: r,
          };
          vt("xhr", f);
          n.removeEventListener("readystatechange", l);
        }
      };

      if ("onreadystatechange" in n && typeof n.onreadystatechange == "function") {
        (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(u, f, p) {
                l();
                return u.apply(f, p);
              },
            }));
      } else {
        n.addEventListener("readystatechange", l);
      }

      (n.setRequestHeader = new Proxy(n.setRequestHeader, {
        apply(u, f, p) {
          const [d, h] = p;
          const f_wo = f[wo];

          if (f_wo && zt(d) && zt(h)) {
            (f_wo.request_headers[d.toLowerCase()] = h);
          }

          return u.apply(f, p);
        },
      }));

      return t.apply(n, o);
    },
  }));

  (XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
      apply(t, n, o) {
        const n_wo = n[wo];
        if (!n_wo) {
          return t.apply(n, o);
        }

        if (o[0] !== undefined) {
          (n_wo.body = o[0]);
        }

        const s = { startTimestamp: qt() * 1000/* 1e3 */, xhr: n };
        vt("xhr", s);
        return t.apply(n, o);
      },
    }));
}
function n_(e) {
  if (zt(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
function o_(e) {
  if (typeof Element === "undefined") {
    return false;
  }
  try {
    return e instanceof Element;
  } catch {
    return false;
  }
}
const r_ = 40;
function s_(e, t = Zg("fetch")) {
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
      Jg("fetch");
      throw l;
    } finally {
      (n -= a);
      o--;
    }
  }
  return km(e, r, ji(e.bufferSize || r_));
}
const Qn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const i_ = 30;
const a_ = 50;
function di(e, t, n, o) {
  const r = { filename: e, function: t === "<anonymous>" ? Pn : t, in_app: true };

  if (n !== undefined) {
    (r.lineno = n);
  }

  if (o !== undefined) {
    (r.colno = o);
  }

  return r;
}
const c_ = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const l_ =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const u_ = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const d_ = /at (.+?) ?\(data:(.+?),/;

const f_ = (e) => {
  const t = e.match(d_);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = c_.exec(e);
  if (n) {
    const [, r, s, a] = n;
    return di(r, Pn, Number(s), Number(a));
  }
  const o = l_.exec(e);
  if (o) {
    if (o[2]?.indexOf("eval") === 0) {
      const c = u_.exec(o[2]);

      if (c) {
        (o[2] = c[1]);
        (o[3] = c[2]);
        (o[4] = c[3]);
      }
    }
    const [s, a] = cd(o[1] || Pn, o[2]);
    return di(a, s, o[3] ? +o[3] : undefined, o[4] ? +o[4] : undefined);
  }
};

const p_ = [i_, f_];

const h_ =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const m_ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const g_ = (e) => {
  const t = h_.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = m_.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, o] = t;
    let r = t[1] || Pn;
    ([r, o] = cd(r, o));
    return di(o, r, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const __ = [a_, g_];
const v_ = [p_, __];
const y_ = cu(...v_);

const cd = (e, t) => {
  const n = e.includes("safari-extension");
  const o = e.includes("safari-web-extension");
  return n || o
    ? [
        e.includes("@") ? e.split("@")[0] : Pn,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const er = 1024;
const w_ = "Breadcrumbs";

const b_ = (e = {}) => {
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
    name: w_,
    setup(n) {
      if (t.console) {
        sg(k_(n));
      }

      if (t.dom) {
        zg(C_(n, t.dom));
      }

      if (t.xhr) {
        e_(N_(n));
      }

      if (t.fetch) {
        wg(T_(n));
      }

      if (t.history) {
        ad(I_(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", S_(n));
      }
    },
  };
};

function S_(e) {
  return n => {
    if (Be() === e) {
      Ln(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: En(n),
        },
        { event: n }
      );
    }
  };
}
function C_(e, t) {
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
      c > er) {
      Qn &&
          G.warn(
            `\`dom.maxStringLength\` cannot exceed ${er}, but a value of ${c} was configured. Sentry will use ${er} instead.`
          );

      (c = er);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const o_event = o.event;
      const f = R_(o_event) ? o_event.target : o_event;
      (r = id(f, { keyAttrs: a, maxStringLength: c }));
      (s = Cg(f));
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
function k_(e) {
  return function (n) {
    if (Be() !== e) {
      return;
    }
    const o = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: ag(n.level),
      message: $a(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (o.message = `Assertion failed: ${
          $a(n.args.slice(1), " ") || "console.assert"
        }`);

        (o.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    Ln(o, { input: n.args, level: n.level });
  };
}
function N_(e) {
  return n => {
    if (Be() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    const s = n.xhr[wo];
    if (!startTimestamp || !endTimestamp || !s) {
      return;
    }
    const { method, url, status_code, body } = s;
    const f = { method: method, url: url, status_code: status_code };
    const p = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const d = { category: "xhr", data: f, type: "http", level: nd(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", d, p);
    Ln(d, p);
  };
}
function T_(e) {
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
          level: nd(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        Ln(l, c);
      }
    }
  };
}
function I_(e) {
  return n => {
    if (Be() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = ms(we.location.href);
    let a = from ? ms(from) : undefined;
    const c = ms(to_2);

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
function R_(e) {
  return !!e && !!e.target;
}

const A_ =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const P_ = "BrowserApiErrors";

const O_ = (e = {}) => {
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
    name: P_,
    setupOnce() {
      if (t.setTimeout) {
        nt(we, "setTimeout", Ac);
      }

      if (t.setInterval) {
        nt(we, "setInterval", Ac);
      }

      if (t.requestAnimationFrame) {
        nt(we, "requestAnimationFrame", $_);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in we) {
        nt(XMLHttpRequest.prototype, "send", x_);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : A_).forEach(r => M_(r, t));
      }
    },
  };
};

function Ac(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = Xn(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${an(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function $_(e) {
  return function (t) {
    return e.apply(this, [
      Xn(t, {
        mechanism: {
          data: { handler: an(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function x_(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
      if (r in n &&
        typeof n[r] == "function") {
        nt(n, r, s => {
          const a = {
              mechanism: {
                data: { handler: an(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${r}`,
              },
            };

          const c = Fi(s);

          if (c) {
            (a.mechanism.data.handler = an(c));
          }

          return Xn(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function M_(e, t) {
  const o = we[e]?.prototype;

  if (o?.hasOwnProperty?.("addEventListener")) {
    nt(o, "addEventListener", r => (function(s, a, c) {
      try {
        if (D_(a)) {
          (a.handleEvent = Xn(a.handleEvent, {
              mechanism: {
                data: { handler: an(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        U_(this, s, a);
      }

      return r.apply(this, [
        s,
        Xn(a, {
          mechanism: {
            data: { handler: an(a), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    nt(o, "removeEventListener", r => (function(s, a, c) {
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
function D_(e) {
  return typeof e.handleEvent == "function";
}
function U_(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const F_ = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof we.document === "undefined") {
          if (Qn) {
            G.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        ic({ ignoreDuration: true });
        let n = false;
        Hg(() => {
          if (!n) {
            ps();
            (n = true);
          }
        });
        const o = $t();
        let r = o.getUser();

        o.addScopeListener((s) => {
          const a = s.getUser();

          if ((r?.id !== a?.id || r?.ip_address !== a?.ip_address)) {
            (r = a);
            n && ps();
          }
        });

        if (t === "route") {
          ad(({ from: s, to: a }) => {
            if (s !== a) {
              ic({ ignoreDuration: true });
              ps();
              (n = true);
            }
          });
        }
      },
    };
  };

const B_ = "CultureContext";

const V_ = () => ({
  name: B_,

  preprocessEvent(e) {
    const t = Pc();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = Pc();

    if (t) {
      xu(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function Pc() {
  try {
    const we_Intl = we.Intl;
    if (!we_Intl) {
      return;
    }
    const t = we_Intl.DateTimeFormat().resolvedOptions();
    return { locale: t.locale, timezone: t.timeZone, calendar: t.calendar };
  } catch {
    return;
  }
}
const W_ = "GlobalHandlers";

const z_ = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: W_,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        q_(n);
        Lc("onerror");
      }

      if (t.onunhandledrejection) {
        Y_(n);
        Lc("onunhandledrejection");
      }
    },
  };
};

function q_(e) {
  ep((t) => {
    const { stackParser, attachStacktrace } = ld();
    if (Be() !== e || rd()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = X_(Yi(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    Uu(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function Y_(e) {
  np((t) => {
    const { stackParser, attachStacktrace } = ld();
    if (Be() !== e || rd()) {
      return;
    }
    const r = G_(t);
    const s = Fo(r) ? K_(r) : Yi(stackParser, r, undefined, attachStacktrace, true);
    (s.level = "error");

    Uu(s, {
      originalException: r,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function G_(e) {
  if (Fo(e)) {
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
function K_(e) {
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
function X_(e, t, n, o) {
  const r = (e.exception = e.exception || {});
  const s = (r.values = r.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: o,
      lineno: n,
      filename: Q_(t) ?? zi(),
      function: Pn,
      in_app: true,
    });
  }

  return e;
}
function Lc(e) {
  if (Qn) {
    G.log(`Global Handler attached: ${e}`);
  }
}
function ld() {
  return Be()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function Q_(e) {
  if (!(!zt(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${Bm(e, false)}>` : e;
  }
}

const Z_ = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!we.navigator && !we.location && !we.document) {
      return;
    }
    const t = kc();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    const t = e.attributes?.[Su];
    if (!we.navigator && !we.location && !we.document) {
      return;
    }
    const n = kc();
    xu(e, {
      [Mh]: t !== "http.client" ? n.url : undefined,
      "http.request.header.user_agent": n.headers["User-Agent"],
      "http.request.header.referer": n.headers.Referer,
    });
  }
});

const J_ = "cause";
const ev = 5;
const tv = "LinkedErrors";

const ov = (e = {}) => {
  const t = e.limit || ev;
  const n = e.key || J_;
  return {
    name: tv,
    preprocessEvent(o, r, s) {
      const a = s.getOptions();
      og(qi, a.stackParser, n, t, o, r);
    },
  };
};

const rv = /^HTML(\w*)Element$/;
function ud(e) {
  if (typeof window !== "undefined" && e === window) {
    return "[Window]";
  }
  if (typeof document !== "undefined" && e === document) {
    return "[Document]";
  }
  if (o_(e)) {
    const t = sv(e);
    if (rv.test(t)) {
      return `[HTMLElement: ${id(e)}]`;
    }
  }
}
function sv(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function iv() {
  return av()
    ? (Qn &&
        to(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function av() {
  if (typeof we.window === "undefined") {
    return false;
  }
  const e = we;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = zi();
  return !(
    we === we.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function cv(e) {
  return [Km(), zm(), gg(), O_(), b_(), z_(), ov(), ug(), Z_(), V_(), F_()];
}
function lv(e = {}) {
  const t = !e.skipBrowserExtensionCheck && iv();
  let n = e.defaultIntegrations == null ? cv() : e.defaultIntegrations;
  const o = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: Zf(e.stackParser || y_),
    integrations: rm({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || s_,
  };
  hu(ud);
  return Um(Dg, o);
}
function Oc(e = {}) {
  const we_document = we.document;
  const n = we_document?.head || we_document?.body;
  if (!n) {
    if (Qn) {
      G.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const o = Ot();
  const s = Be()?.getDsn();
  if (!s) {
    if (Qn) {
      G.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...o.getUser(), ...e.user },
      eventId: e.eventId || Qh(),
    };

  const c = we.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = nm(s, a));
  const { onLoad, onClose } = a;

  if (onLoad) {
    (c.onload = onLoad);
  }

  if (onClose) {
    const f = (p) => {
      if (p.data === "__sentry_reportdialog_closed__") {
        try {
          onClose();
        } finally {
          we.removeEventListener("message", f);
        }
      }
    };
    we.addEventListener("message", f);
  }

  n.appendChild(c);
}
let ln;
let ke;
let _s;
let $c;
let Zn = 0;
const dd = [];
const Pe = oe;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = Pe;

function io(e, t) {
  if (Pe.__h) {
    Pe.__h(ke, e, Zn || t);
  }

  (Zn = 0);
  const n = ke.__H || (ke.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function A(e) {
  (Zn = 1);
  return Gi(hd, e);
}
function Gi(e, t, n) {
  const o = io(ln++, 2);
  (o.t = e);

  if (!o.__c &&
    ((o.__ = [
      n ? n(t) : hd(undefined, t),
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
      let f = false;
      let p = o.__c.props !== c;

      o.__c.__H.__.some(h => {
          if (h.__N) {
            f = true;
            const m = h.__[0];
            (h.__ = h.__N);
            (h.__N = undefined);

            if (m !== h.__[0]) {
              (p = true);
            }
          }
        });

      if (shouldComponentUpdate) {
        const d = shouldComponentUpdate.call(this, c, l, u);
        return f ? d || p : d;
      }

      return !f || p;
    };
    ke.__f = true;

    var {
      shouldComponentUpdate,
      componentWillUpdate
    } = ke;

    (ke.componentWillUpdate = function (c, l, u) {
      if (this.__e) {
        const f = shouldComponentUpdate;
        (shouldComponentUpdate = undefined);
        r(c, l, u);
        (shouldComponentUpdate = f);
      }

      if (componentWillUpdate) {
        componentWillUpdate.call(this, c, l, u);
      }
    });

    (ke.shouldComponentUpdate = r);
  }

  return o.__N || o.__;
}
function D(e, t) {
  const n = io(ln++, 3);

  if (!Pe.__s && Xi(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    ke.__H.__h.push(n);
  }
}
function wt(e, t) {
  const n = io(ln++, 4);

  if (!Pe.__s && Xi(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    ke.__h.push(n);
  }
}
function O(e) {
  (Zn = 5);

  return Te(() => ({
    current: e
  }), []);
}
function Ki(e, t, n) {
  (Zn = 6);

  wt(
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
  const n = io(ln++, 7);

  if (Xi(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function I(e, t) {
  (Zn = 8);

  return Te(() => e, t);
}
function zo(e) {
  const t = ke.context[e.__c];
  const n = io(ln++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(ke)), t.props.value) : e.__;
}
function fd(e, t) {
  if (Pe.useDebugValue) {
    Pe.useDebugValue(t ? t(e) : e);
  }
}
function pd() {
  const e = io(ln++, 11);
  if (!e.__) {
    for (var t = ke.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function uv() {
  for (let e; (e = dd.shift()); ) {
    const e_H = e.__H;
    if (e.__P && e_H) {
      try {
        e_H.__h.some(br);
        e_H.__h.some(fi);
        (e_H.__h = []);
      } catch (n) {
        (e_H.__h = []);
        Pe.__e(n, e.__v);
      }
    }
  }
}

(Pe.__b = e => {
  (ke = null);

  if (__b) {
    __b(e);
  }
});

(Pe.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    (e.__m = t.__k.__m);
  }

  if (__1) {
    __1(e, t);
  }
});

(Pe.__r = e => {
  if (__r) {
    __r(e);
  }

  (ln = 0);
  const t = (ke = e.__c).__H;

  if (t) {
    if (_s === ke) {
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
      t.__h.some(br);
      t.__h.some(fi);
      (t.__h = []);
      (ln = 0);
    }
  }

  (_s = ke);
});

(Pe.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((dd.push(e_c) !== 1 && $c === Pe.requestAnimationFrame) ||
          (($c = Pe.requestAnimationFrame) || dv)(uv));

    e_c.__H.__.some(n => {
      if (n.u) {
        (n.__H = n.u);
        (n.u = undefined);
      }
    });
  }

  _s = null;
  ke = null;
});

(Pe.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.some(br);

      (n.__h = n.__h.filter(o => !o.__ || fi(o)));
    } catch (o) {
      t.some(r => {
        if (r.__h) {
          (r.__h = []);
        }
      });

      (t = []);
      Pe.__e(o, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
});

(Pe.unmount = e => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__.some(o => {
        try {
          br(o);
        } catch (r) {
          t = r;
        }
      });

    (e_c.__H = undefined);
    t && Pe.__e(t, e_c.__v);
  }
});

const Hc = typeof requestAnimationFrame == "function";
function dv(e) {
  let t;

  const n = () => {
    clearTimeout(o);

    if (Hc) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var o = setTimeout(n, 35);

  if (Hc) {
    (t = requestAnimationFrame(n));
  }
}
function br(e) {
  const t = ke;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (ke = t);
}
function fi(e) {
  const t = ke;
  (e.__c = e.__());
  (ke = t);
}
function Xi(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, o) => n !== e[o]);
}
function hd(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function md(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function pi(e, t) {
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
function gd(e, t) {
  const n = t();
  const o = A({ t: { __: n, u: t } });
  const r = o[0].t;
  const [, s] = o;

  wt(
    () => {
      (r.__ = n);
      (r.u = t);

      if (vs(r)) {
        s({ t: r });
      }
    },
    [e, n, t]
  );

  D(
    () => {
      if (vs(r)) {
        s({ t: r });
      }

      return e(() => {
        if (vs(r)) {
          s({ t: r });
        }
      });
    },
    [e]
  );

  return n;
}
function vs(e) {
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
function _d(e) {
  e();
}
function vd(e) {
  return e;
}
function yd() {
  return [false, _d];
}
const wd = wt;

class hi {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return pi(this.props, e) || pi(this.state, t);
    }
}

function Qr(e, t) {
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

    return pi(this.props, r);
  }
  function o(r) {
    (this.shouldComponentUpdate = n);
    return yt(e, r);
  }
  (o.displayName = `Memo(${e.displayName || e.name})`);
  o.__f = true;
  o.prototype.isReactComponent = true;
  (o.type = e);
  return o;
}
((hi.prototype = new ct()).isPureReactComponent = true);

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
const fv =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Ed(e) {
  class t {
    constructor(n) {
      const o = md({}, n);
      delete o.ref;
      return e(o, n.ref || null);
    }

    static componentWillUnmount() {
      Ao(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = fv);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const Wc = (e, t) => e == null ? null : _t(_t(e).map(t));

const pv = {
  map: Wc,
  forEach: Wc,
  count(e) {
    return e ? _t(e).length : 0;
  },
  only(e) {
    const t = _t(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: _t,
};

oe.__e = (e, t, n, o) => {
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
function bd(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(o => {
      if (typeof o.__c == "function") {
        o.__c();
      }
    }),
        (e.__c.__H = null));

    (e = md({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(o => bd(o, t, n)));
  }

  return e;
}
function Sd(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(o => Sd(o, t, n)));

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
        this.__v.__k[0] = bd(this.__b, n, (o.__O = o.__P));
      }
      this.__b = null;
    }
    const r = t.__a && yt(ye, null, e.fallback);

    if (r) {
      (r.__u &= -33);
    }

    return [yt(ye, null, t.__a ? null : e.children), r];
  }
}

function Cd(e) {
  const t = e.__ && e.__.__c;
  return t && t.__a && t.__a(e);
}
function le(e) {
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
    return r ? yt(r, a) : null;
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
    const t = _t(e.children);

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

((De.prototype = new ct()).__c = function (e, t) {
  const t_c = t.__c;
  const o = this;

  if (o.o == null) {
    (o.o = []);
  }

  o.o.push(t_c);
  const r = Cd(o.__v);

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
        o.__v.__k[0] = Sd(u, u.__c.__P, u.__c.__O);
      }
      let f;
      for (o.setState({ __a: (o.__b = null) }); (f = o.o.pop()); ) {
        (f.__P = t_c___P);
        f.forceUpdate();
      }
    }
  };

  if (!o.__u++ && 32 & t.__u) {
    o.setState({ __a: (o.__b = o.__v.__k[0]) });
  }

  e.then(a, a);
});

const zc = (e, t, n) => {
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
function mv(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function gv(e) {
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

  Ao(yt(mv, { context: t.context }, e.__v), t.v);
}

export function $(e, t) {
  const n = yt(gv, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((Eo.prototype = new ct()).__a = function (e) {
  const t = this;
  const n = Cd(t.__v);
  const o = t.l.get(e);
  o[0]++;

  return r => {
    const s = () => {
      if (t.props.revealOrder) {
        o.push(r);
        zc(t, e, o);
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
        zc(e, n, t);
      });
    });

const kd =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const _v =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const vv = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const yv = /[A-Z0-9]/g;
const wv = typeof document !== "undefined";

const Ev = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function Nd(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Ao(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function bv(e, t, n) {
  ru(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
(ct.prototype.isReactComponent = true);

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach(e => {
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

oe.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.nativeEvent = e);
  return e.nativeEvent;
};
let Qi;

const Sv = {
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

      const r = {};
      const s = !type.includes("-");
      for (let a in props) {
        let props_a = props[a];
        if (
          !(
            (a === "value" && "defaultValue" in props && props_a == null) ||
            (wv && a === "children" && type === "noscript") ||
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
                  Ev(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (vv.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && _v.test(a)) {
            (a = a.replace(yv, "-$&").toLowerCase());
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
            (r.value = _t(props.children).forEach(u => {
              u.props.selected = r.value.includes(u.props.value);
            }));

        r.defaultValue != null &&
          (r.value = _t(props.children).forEach(u => {
            u.props.selected = r.multiple
              ? r.defaultValue.includes(u.props.value)
              : r.defaultValue == u.props.value;
          }));
      }

      if (props.class && !props.className) {
        (r.class = props.class);
        Object.defineProperty(r, "className", Sv);
      } else if (props.className) {
        (r.class = r.className = props.className);
      }

      (t.props = r);
    })(e);
  }

  (e.$$typeof = kd);

  if (vnode) {
    vnode(e);
  }
};
oe.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (Qi = e.__c);
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

  (Qi = null);
};

const Cv = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return Qi.__n[e.__c].props.value;
        },
        useCallback: I,
        useContext: zo,
        useDebugValue: fd,
        useDeferredValue: vd,
        useEffect: D,
        useId: pd,
        useImperativeHandle: Ki,
        useInsertionEffect: wd,
        useLayoutEffect: wt,
        useMemo: Te,
        useReducer: Gi,
        useRef: O,
        useState: A,
        useSyncExternalStore: gd,
        useTransition: yd,
      },
    },
  };

const Td = "18.3.1";
function kv(e) {
  return yt.bind(null, e);
}
function qo(e) {
  return !!e && e.$$typeof === kd;
}
function Nv(e) {
  return qo(e) && e.type === ye;
}
function Tv(e) {
  return (
    !!e &&
    typeof e.displayName == "string" &&
    e.displayName.indexOf("Memo(") == 0
  );
}
function Iv(e) {
  return qo(e) ? su(...arguments) : e;
}
function Id(e) {
  return !!e.__k && (Ao(null, e), true);
}
function Rv(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Av = (e, t) => e(t);

const Pv = (e, t) => {
  let n;
  const oe_debounceRendering = oe.debounceRendering;
  oe.debounceRendering = s => {
    n = s;
  };
  try {
    const r = e(t);

    if (n) {
      n();
    }

    return r;
  } finally {
    oe.debounceRendering = oe_debounceRendering;
  }
};

const Lv = qo;

const bo = {
  useState: A,
  useId: pd,
  useReducer: Gi,
  useEffect: D,
  useLayoutEffect: wt,
  useInsertionEffect: wd,
  useTransition: yd,
  useDeferredValue: vd,
  useSyncExternalStore: gd,
  startTransition: _d,
  useRef: O,
  useImperativeHandle: Ki,
  useMemo: Te,
  useCallback: I,
  useContext: zo,
  useDebugValue: fd,
  version: "18.3.1",
  Children: pv,
  render: Nd,
  hydrate: bv,
  unmountComponentAtNode: Id,
  createPortal: $,
  createElement: yt,
  createContext: Jn,
  createFactory: kv,
  cloneElement: Iv,
  createRef: Uf,
  Fragment: ye,
  isValidElement: qo,
  isElement: Lv,
  isFragment: Nv,
  isMemo: Tv,
  findDOMNode: Rv,
  Component: ct,
  PureComponent: hi,
  memo: Qr,
  forwardRef: Ed,
  flushSync: Pv,
  unstable_batchedUpdates: Av,
  StrictMode: ye,
  Suspense: De,
  SuspenseList: Eo,
  lazy: le,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Cv,
};

function Ov(e) {
  return (
    Po(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function $v(e) {
  const t = { ...e };
  Zu(t, "react");
  Xh("react", { version: Td });
  const n = lv(t);
  hu(xv);
  return n;
}
function xv(e) {
  return Ov(e) ? "[SyntheticEvent]" : ud(e);
}
function Mv(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function Dv(e, t) {
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
function Uv(e, { componentStack: t }, n) {
  if (Mv(Td) && Pt(e) && t) {
    const o = new Error(e.message);
    (o.name = `React ErrorBoundary ${e.name}`);
    (o.stack = t);
    Dv(e, o);
  }
  return Du(e, n);
}
const Fv = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const ys = { componentStack: null, error: null, eventId: null };
class Bv extends ct {
  constructor(t) {
    super(t);
    (this.state = ys);
    (this._openFallbackReportDialog = true);
    const n = Be();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (o) => {
        if (!o.type &&
          this._lastEventId &&
          o.event_id === this._lastEventId) {
          Oc({ ...t.dialogOptions, eventId: this._lastEventId });
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

    bu((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const f = Uv(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, f);
      }

      if (showDialog) {
        (this._lastEventId = f);
        this._openFallbackReportDialog && Oc({ ...dialogOptions, eventId: f });
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
      if (this.state === ys) {
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

    this.setState(ys);
  }
  render() {
    const { fallback, children } = this.props;
    const o = this.state;
    if (o.componentStack === null) {
      return typeof children == "function" ? children() : children;
    }
    const r =
      typeof fallback == "function"
        ? yt(fallback, {
            error: o.error,
            componentStack: o.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: o.eventId,
          })
        : fallback;
    return qo(r)
      ? r
      : (fallback && Fv && G.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
$v({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function Hv(e) {
  return {
    render(t) {
      Nd(t, e);
    },
    unmount() {
      Id(e);
    },
  };
}
const Vv = "modulepreload";

const Wv = e => `/${e}`;

const Xc = {};

const ie = (t, n, o) => {
  let r = Promise.resolve();
  if (n && n.length > 0) {
    let l = u => Promise.all(
      u.map(f => Promise.resolve(f).then(
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
        (u = Wv(u));

        if (u in Xc) {
          return;
        }

        Xc[u] = true;
        const f = u.endsWith(".css");
        const p = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${p}`)) {
          return;
        }
        const d = document.createElement("link");
        (d.rel = f ? "stylesheet" : Vv);

        if (!f) {
          (d.as = "script");
        }

        (d.crossOrigin = "");
        (d.href = u);

        if (c) {
          d.setAttribute("nonce", c);
        }

        document.head.appendChild(d);

        if (f) {
          return new Promise((h, m) => {
            d.addEventListener("load", h);

            d.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${u}`))
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

const jv = {};
function tr(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function zv(e, t, n) {
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
  (e = mi(e.replace(r, "")));
  (t = mi(t || ""));
  for (let f = Math.max(e.length, t.length), p = 0; p < f; p++) {
    if (t[p] && t[p].charAt(0) === ":") {
      const d = t[p].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[p].match(/[+*?]+$/) || jv)[0] || "";
      const m = ~h.indexOf("+");
      const _ = ~h.indexOf("*");
      const v = e[p] || "";
      if (!v && !_ && (!h.includes("?") || m)) {
        o = false;
        break;
      }
      (a[d] = decodeURIComponent(v));

      if (m || _) {
        a[d] = e.slice(p).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[p] !== e[p]) {
      o = false;
      break;
    }
  }
  return (n.default === true || o !== false) && a;
}
function qv(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Yv(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : mi(n.props.path).map(Gv).join(""))(e));

  return e.props;
}
function mi(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Gv(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const Kv = {};
const In = [];
const To = [];
let tt = null;
const Zi = { url: Ji() };
const Rd = Jn(Zi);
function Zr() {
  const e = zo(Rd);
  if (e === Zi) {
    const t = A()[1];
    D(() => {
      To.push(t);

      return () => To.splice(To.indexOf(t), 1);
    }, []);
  }
  return [e, Ke];
}
function Ji() {
  let e;
  return `${(e =
  tt && tt.location
    ? tt.location
    : tt && tt.getCurrentLocation
    ? tt.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : Kv).pathname || ""}${e.search || ""}`;
}
function Ke(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let o = In.length; o--; ) {
      if (In[o].canRoute(n)) {
        return true;
      }
    }
    return false;
  })(e)) {
    ((n, o = "push") => {
      if (tt && tt[o]) {
        tt[o](n);
      } else if (typeof history !== "undefined" &&
          history[`${o}State`]) {
        history[`${o}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return Ad(e);
}
function Ad(e) {
  let t = false;
  for (let n = 0; n < In.length; n++) {
    if (In[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function Xv(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return Ke(t);
    }
  }
}
function Qv(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function Zv(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (Xv(e_target)) {
          return Qv(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Pd(e) {
  if (e.history) {
    (tt = e.history);
  }

  (this.state = { url: e.url || Ji() });
}
tr((Pd.prototype = new ct()), {
  shouldComponentUpdate(e) {
    return (e.static !== true ||
    e.url !== this.props.url || e.onChange !== this.props.onChange);
  },
  canRoute(e) {
    const t = _t(this.props.children);
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

    if (!Qc) {
      (Qc = true);

      tt ||
        addEventListener("popstate", () => {
          Ad(Ji());
        });

      addEventListener("click", Zv);
    }

    In.push(this);

    if (tt) {
      (this.u = tt.listen(t => {
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

    In.splice(In.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(Yv).sort(qv);

    for (const o of e) {
      const r = zv(t, o.props.path, o.props);
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
    const c = this.g(_t(e.children), t_url);

    if (c) {
      (o = su(
            c[0],
            tr(tr({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      tr(
        Zi,
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
      for (let l = To.length; l--; ) {
        To[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return yt(Rd.Provider, { value: a }, o);
  },
});

const Zc = (e) => {
  let t;
  const n = new Set();

  const o = (u, f) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const d = t;

      (t = f ?? (typeof p != "object" || p === null)
        ? p
        : Object.assign({}, t, p));

      n.forEach(h => h(t, d));
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

const Jv = e => e ? Zc(e) : Zc;

const ey = e => e;

function ty(e, t = ey) {
  const n = bo.useSyncExternalStore(
    e.subscribe,
    bo.useCallback(() => t(e.getState()), [e, t]),
    bo.useCallback(() => t(e.getInitialState()), [e, t])
  );
  bo.useDebugValue(n);
  return n;
}

const Jc = (e) => {
  const t = Jv(e);

  const n = o => ty(t, o);

  Object.assign(n, t);
  return n;
};

const Qe = e => e ? Jc(e) : Jc;

function ea(e, t) {
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

const gi = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(o) {
              return gi(o)(n);
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
          return gi(o)(n);
        },
      };
    }
  };

const Ld = (e, t) => (n, o, r) => {
  let s = {
      storage: ea(() => window.localStorage),
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
    const b = ++c;
    (a = false);

    l.forEach((k) => {
      let S;
      return k((S = o()) != null ? S : h);
    });

    const y =
      ((g = s.onRehydrateStorage) == null
        ? undefined
        : g.call(s, (v = o()) != null ? v : h)) || undefined;
    return gi(s_storage.getItem.bind(s_storage))(s.name)
      .then((k) => {
        if (k) {
          if (typeof k.version == "number" && k.version !== s.version) {
            if (s.migrate) {
              const S = s.migrate(k.state, k.version);
              return S instanceof Promise ? S.then(C => [true, C]) : [true, S];
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
      let S;
      if (b !== c) {
        return;
      }
      const [C, w] = k;
      (m = s.merge(w, (S = o()) != null ? S : h));
      n(m, true);

      if (C) {
        return p();
      }
    })
      .then(() => {
      if (b === c) {
        y?.(o(), undefined);
        (m = o());
        (a = true);
        u.forEach(k => k(m));
      }
    })
      .catch((k) => {
      if (b === c) {
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

const Od = Qe((e, t) => ({
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

const oy = Qe((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const ry = Qe((e, t) => ({
  navigatedInApp: false,

  markNavigated: () => {
    if (!t().navigatedInApp) {
      e({ navigatedInApp: true });
    }
  }
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

function xe(e) {
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

const sy = 4000/* 4e3 */;

const $r = Qe((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const o = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const r = n.duration ?? sy;

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

const mt = {
  success: (e, t) => $r.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => $r.getState().addToast({ type: "error", message: e, duration: t }),
};

const iy = {
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

const ay = {
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

const cy = [
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

const ly = {
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

function $d(e) {
  return ly[e] ?? e;
}
function uy(e) {
  const ay_e = ay[e];
  if (ay_e) {
    return ay_e;
  }
  for (const { pattern, translate } of cy) {
    const r = e.match(pattern);
    if (r) {
      return translate(r);
    }
  }
  return e;
}
function ta(e, t = "Произошла ошибка") {
  const n = uy(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : iy[$d(e)] ?? n;
}
const xd = "/api";

const U = {
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

let $o = null;
const _i = new Set();
function un() {
  return $o;
}
function Md(e) {
  if ($o !== e) {
    $o = e;
    for (const t of _i) {
      t(e);
    }
  }
}
function dy(e) {
  _i.add(e);

  return () => {
    _i.delete(e);
  };
}
function el() {
  return $o ? { Authorization: `Bearer ${$o}` } : {};
}
let vi = null;
function fy(e) {
  vi = e;
}
async function py(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function yi() {
  return vi
    ? lo ||
        ((lo = py(vi).finally(() => {
          lo = null;
        })),
        lo)
    : null;
}
async function hy(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = un();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const o = await n();
  return o.status !== 401 || !(await yi()) ? o : n();
}
function my() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const tl = my();
class Dd {
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
    if (t.status !== Xe.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        mt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      mt.error(ta(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const o = t.startsWith("/") ? t : `/${t}`;
    return `${n}${o}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ...el() });
    n.set("X-Device-Id", tl);
    return n;
  }
  async handleResponse(t) {
    if (t.status === Xe.NO_CONTENT) {
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
      case Xe.BAD_REQUEST:
        {
          return H.BAD_REQUEST;
        }
      case Xe.UNAUTHORIZED:
        {
          return H.UNAUTHORIZED;
        }
      case Xe.FORBIDDEN:
        {
          return H.ACCESS_DENIED;
        }
      case Xe.NOT_FOUND:
        {
          return H.ENTITY_NOT_FOUND;
        }
      case Xe.CONFLICT:
        {
          return H.ENTITY_ALREADY_EXISTS;
        }
      case Xe.UNPROCESSABLE_ENTITY:
        {
          return H.VALIDATION_ERROR;
        }
      case Xe.TOO_MANY_REQUESTS:
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
    (s.code = $d(o));
    (s.errors = r);
    (s.name = "ApiError");
    return s;
  }
  async executeRequest(t, n, o, r, s = false) {
    const a = this.buildUrl(n);
    const c = this.buildHeaders(r?.headers);
    const l = new AbortController();
    const u = r?.timeout ?? this.defaultTimeout;

    const f = setTimeout(() => l.abort(), u);

    try {
      const d =
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
        body: d,
        signal: l.signal,
        credentials: "include",
        ..._,
        headers: c,
      });

      clearTimeout(f);
      const g =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (v.status === Xe.UNAUTHORIZED && !s && !g && un()) {
        if (await yi()) {
          return this.executeRequest(t, n, o, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Xe.UNAUTHORIZED,
          "Session expired",
          H.UNAUTHORIZED
        );
      }
      return await this.handleResponse(v);
    } catch (p) {
      clearTimeout(f);

      if (p instanceof Error) {
        const d = m => !s && !this.isToastSkipped(r?.skipErrorToast, m.status);
        if (p.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", H.TIMEOUT);

          if (d(m)) {
            this.notifyError(m);
          }

          throw m;
        }
        if (p.name === "ApiError") {
          const m = p;

          if (d(m)) {
            this.notifyError(m);
          }

          throw p;
        }
        const h = this.createApiError(
          0,
          p.message || "Network error",
          H.NETWORK_ERROR
        );

        if (d(h)) {
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
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": tl, ...el() };
    const c = new AbortController();
    const l = o?.timeout ?? this.defaultTimeout;

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

      if (f.status === Xe.UNAUTHORIZED && !r && un()) {
        if (await yi()) {
          return this.uploadFormData(t, n, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Xe.UNAUTHORIZED,
          "Session expired",
          H.UNAUTHORIZED
        );
      }

      return await this.handleResponse(f);
    } catch (f) {
      clearTimeout(u);

      if (f instanceof Error) {
        if (f.name === "AbortError") {
          const d = this.createApiError(0, "Request timeout", H.TIMEOUT);

          if (!r) {
            this.notifyError(d);
          }

          throw d;
        }
        if (f.name === "ApiError") {
          if (!r) {
            this.notifyError(f);
          }

          throw f;
        }
        const p = this.createApiError(
          0,
          f.message || "Network error",
          H.NETWORK_ERROR
        );

        if (!r) {
          this.notifyError(p);
        }

        throw p;
      }

      throw f;
    }
  }
}
const L = new Dd({ baseURL: xd, timeout: 30000/* 3e4 */ });
const St = new Dd({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const Jr = Qe((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const n = await L.get("/v1/portal");
        e({ portal: n, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  }
}));

const Ud = () => Jr(e => e.portal);

const UP = () => Jr(e => e.loaded);

const gy = "/public/events/aliceai";
function Fd(e) {
  if (!e.active || !e.url) {
    return false;
  }
  try {
    return new URL(e.url, window.location.origin).pathname.startsWith(`${gy}/`);
  } catch {
    return false;
  }
}
const xo = new Set();
let Io = null;
const _y = 30000/* 3e4 */;
function vy() {
  if (Io === null) {
    (Io = window.setInterval(() => {
        xo.forEach(e => e());
      }, _y));
  }
}
function yy() {
  if (Io !== null) {
    clearInterval(Io);
    (Io = null);
  }
}
function wy(e) {
  xo.add(e);

  if (xo.size === 1) {
    vy();
  }
}
function Ey(e) {
  xo.delete(e);

  if (xo.size === 0) {
    yy();
  }
}
function ws(e) {
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
function Bd(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const o = n ? t : 0;

  const [r, s] = A(() => n ? ws(new Date(o)) : "");

  D(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(o);
    s(ws(a));
    const c = () => {
      s(ws(a));
    };
    wy(c);

    return () => Ey(c);
  }, [o, n]);

  return r;
}
const nl = 1174;
function Gt() {
  const [e, t] = A(() => typeof window === "undefined" ? false : window.innerWidth < nl);

  D(() => {
    const n = window.matchMedia(`(max-width: ${nl - 1}px)`);

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
const by = Jn({ isHidden: false });

const Sy = () => {
  const [e, t] = A(false);
  const n = O(0);

  D(() => {
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

function es(e = "", t = []) {
  const [n, o] = A(e);
  const [r, s] = A(t);
  const a = O(null);

  const c = I((f, p) => {
    o(f);
    s(p);
  }, []);

  const l = I((f) => {
    a.current?.insertText(f);
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
function Cy({
  sentinelRef: e,
  hasMore: t,
  isLoading: n,
  onLoadMore: o,
  rootMargin: r = "100px",
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
          o();
        }
      },
      { rootMargin: r }
    );
    a.observe(e_current);

    return () => a.disconnect();
  }, [t, n, o, r, e]);
}
function ky({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: o = 0,
  getItemKey: r = l => l,
  initialMeasuredHeights: s,
  scrollElement: a,
  initialScrollTop: c,
}) {
  const [, l] = A(0);

  const u = () => a
    ? Math.max(0, a.scrollTop)
    : c !== undefined
    ? c
    : typeof window !== "undefined"
    ? Math.max(0, window.scrollY)
    : 0;

  const f = () => a ? a.clientHeight : typeof window !== "undefined" ? window.innerHeight : 0;

  const p = O(s ?? new Map());
  const d = O(null);
  const h = O(null);
  const m = O(new Map());
  const _ = O(r);
  _.current = r;

  const v = w => p.current.get(r(w)) ?? t;

  const g = (w) => {
    let T = 0;
    for (let N = 0; N < w; N++) {
      T += v(N) + o;
    }
    return T;
  };

  const b = () => {
    if (e === 0) {
      return 0;
    }
    let w = 0;
    for (let T = 0; T < e; T++) {
      w += v(T);
    }
    (w += Math.max(0, e - 1) * o);
    return w;
  };

  const y = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const w = u();
    const T = f();
    let N = 0;
    let E = 0;
    for (let $ = 0; $ < e; $++) {
      const Y = v($) + o;
      if (E + Y > w) {
        N = $;
        break;
      }
      E += Y;
    }
    let P = N;
    let R = 0;
    for (let $ = N; $ < e && ((R += v($) + o), (P = $), !(R >= T)); $++)
      {}
    return { start: Math.max(0, N - n), end: Math.min(e - 1, P + n) };
  };

  const k = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = y();
    const N = [];
    for (let E = start; E <= end; E++) {
      N.push({ index: E, key: r(E), start: g(E) });
    }
    return N;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((w) => {
      let T = false;
      for (const N of w) {
        const N_target = N.target;
        const P = m.current.get(N_target);
        if (P === undefined) {
          continue;
        }
        const R = N.borderBoxSize && N.borderBoxSize[0];
        const $ = R ? R.blockSize : N_target.getBoundingClientRect().height;

        if ($ > 0 && p.current.get(P) !== $) {
          p.current.set(P, $);
          (T = true);
        }
      }

      if (T) {
        l(N => N + 1);
      }
    }));
  }

  const S = I((w, T) => {
    if (!w) {
      return;
    }
    const N = _.current(T);
    m.current.set(w, N);
    h.current?.observe(w, { box: "border-box" });
    const E = w.getBoundingClientRect().height;

    if (E > 0 && p.current.get(N) !== E) {
      p.current.set(N, E);
      l(P => P + 1);
    }
  }, []);

  wt(() => {
    const w = a ?? window;

    const T = () => {
      if (!d.current) {
        (d.current = requestAnimationFrame(() => {
          (d.current = null);

          l(N => N + 1);
        }));
      }
    };

    w.addEventListener("scroll", T, { passive: true });

    l(N => N + 1);

    return () => {
      w.removeEventListener("scroll", T);

      if (d.current) {
        cancelAnimationFrame(d.current);
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

  const C = I(() => new Map(p.current), []);
  return {
    virtualItems: k(),
    totalSize: b(),
    measureElement: S,
    getMeasuredHeights: C,
  };
}
const Ny = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const ol = "itd:icons:checkedAt";
const Ty = 1800 * 1000/* 1e3 */;
const xr = new Map();
const Es = new Map();
const Sr = new Map();

const Iy = e => `${Ny}/${e}.svg`;

const Ry = (() => {
  try {
    const e = Number(localStorage.getItem(ol) ?? 0);
    return Date.now() - e < Ty
      ? false
      : (localStorage.setItem(ol, String(Date.now())), true);
  } catch {
    return false;
  }
})();

const Ay = e => /^\s*<svg[\s>]/i.test(e) &&
!/<script|<foreignObject|\son[a-z]+\s*=/i.test(e);

const Py = { liked: "--accent-liked" };
const Ly = /fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/;

const Oy = (e, t) => {
  const Py_e = Py[e];
  if (!Py_e || typeof document === "undefined") {
    return;
  }
  const o = Ly.exec(t)?.[1];

  if (o) {
    document.documentElement.style.setProperty(Py_e, o);
  }
};

const $y = (e, t) => {
  xr.set(e, t);
  Oy(e, t);

  Sr.get(e)?.forEach(n => n(t));
};

const xy = (e, t = false) => {
  if (!t) {
    const r = xr.get(e);
    if (r) {
      return Promise.resolve(r);
    }
    const s = Es.get(e);
    if (s) {
      return s;
    }
  }
  const n = t ? "reload" : Ry ? "no-cache" : "force-cache";

  const o = fetch(Iy(e), { cache: n })
    .then(async (r) => {
      if (!r.ok) {
        return null;
      }
      const s = await r.text();
      return Ay(s) ? ($y(e, s), s) : null;
    })
    .catch(() => null)
    .finally(() => Es.delete(e));

  Es.set(e, o);
  return o;
};

const My = (e, t) => e.replace(/<svg\b([^>]*)>/i, (n, o) => {
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

const na = ({ name: e, size: t = 20, className: n }) => {
  const [o, r] = A(() => xr.get(e) ?? null);
  D(() => {
    r(xr.get(e) ?? null);
    const a = Sr.get(e) ?? new Set();
    a.add(r);
    Sr.set(e, a);
    xy(e);

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
    dangerouslySetInnerHTML: o ? { __html: My(o, t) } : undefined,
  });
};

const Dy = ({ size: e = 18 }) => i("svg", {
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

const Uy = ({ size: e = 18 }) => i("svg", {
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

const Fy = ({ size: e = 18 }) => i("svg", {
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

const Hd = ({ size: e = 18 }) => i("svg", {
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

const By = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const Hy = ({ size: e = 18 }) => i("svg", {
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

const Vy = ({ size: e = 18 }) => i("svg", {
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

const Wy = ({ size: e = 18 }) => i("svg", {
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

const jy = ({ size: e = 18 }) => i("svg", {
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

const zy = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const qy = ({ size: e = 24 }) => i("svg", {
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

const Vd = ({ size: e = 20 }) => i("svg", {
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

const Yy = ({ size: e = 8 }) => i("svg", {
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

const Gy = ({ size: e = 8 }) => i("svg", {
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

const Ky = () => i("svg", {
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

const Wd = ({ size: e = 20 }) => i(na, { name: "comment", size: e });

const jd = ({ size: e = 18 }) => i("svg", {
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

const Xy = ({ size: e = 24 }) => i("svg", {
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

const zd = () => i("svg", {
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

const qd = ({ size: e = 18 }) => i("svg", {
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

const Yd = ({ size: e = 24 }) => i("svg", {
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

const oa = ({ filled: e = false, size: t = 20, className: n }) => i(na, { name: e ? "liked" : "like", size: t, className: n });

const ra = ({ size: e = 24 }) => i("svg", {
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

const Qy = ({ size: e = 24 }) => i("svg", {
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

const Gd = ({ size: e = 18 }) => i("svg", {
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

const sa = ({ size: e = 24 }) => i("svg", {
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

const Zy = ({ size: e = 24 }) => i("svg", {
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

const wi = ({ size: e = 24 }) => i("svg", {
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

const rl = ({ size: e = 18 }) => i("svg", {
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

const ia = ({ size: e = 24 }) => i("svg", {
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

const Jy = ({ size: e = 20 }) => i("svg", {
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

const aa = ({ size: e = 20 }) => i(na, { name: "share", size: e });

const Kd = ({ size: e = 24 }) => i("svg", {
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

const Xd = ({ size: e = 24 }) => i("svg", {
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

const e0 = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const t0 = ({ size: e = 24 }) => i("svg", {
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

const n0 = ({ size: e = 48 }) => i("svg", {
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

const Qd = ({ size: e = 18 }) => i("svg", {
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

const o0 = ({ size: e = 16 }) => i("svg", {
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

const r0 = ({ size: e = 20 }) => i("svg", {
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

const s0 = "YhZn";
const i0 = "us1l";
const a0 = "JLLd";
const c0 = "yJEY";
const l0 = "t3b0";
const u0 = "CoCW";
const d0 = "LEIN";
const f0 = "znfK";
const p0 = "FB4n";
const h0 = "lag7";
const m0 = "nmAY";
const g0 = "vfEc";
const _0 = "pUFJ";

const Ve = {
  aside: s0,
  asideBottom: i0,
  logoutButton: a0,
  asideBrand: c0,
  asideBrandVersion: l0,
  nav: u0,
  navItem: d0,
  active: f0,
  iconWrapper: p0,
  portalButton: h0,
  portalActive: m0,
  portalImage: g0,
  badge: _0,
};

const ue = {
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

const sl = [
  ue.SHOP,
  ue.LOGIN,
  ue.REGISTER,
  ue.FORGOT_PASSWORD,
  ue.RESET_PASSWORD,
  ue.VERIFY_EMAIL,
  ue.TERMS,
  ue.PRIVACY,
  ue.COOKIES,
  ue.EXTERNAL,
  ue.SUPPORT,
  ue.CHILD_SAFETY,
  ue.SUBSCRIPTION_TERMS,
];

const ca = [
  ue.LOGIN,
  ue.REGISTER,
  ue.FORGOT_PASSWORD,
  ue.RESET_PASSWORD,
  ue.VERIFY_EMAIL,
  ue.ONBOARDING,
];

const v0 = {
  like: "post_reaction",
  comment_like: "comment_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  wall_post: "wall_post",
};

function Zd(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: v0[e.type] ?? "follow",
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

const uo = {
    async getNotifications(e = {}) {
      const t = new URLSearchParams();
      const n = e.limit ?? 20;
      t.set("limit", n.toString());
      const o = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

      if (o > 0) {
        t.set("offset", o.toString());
      }

      const r = t.toString();
      const s = `${U.notifications.list}${r ? `?${r}` : ""}`;
      const a = await L.get(s);
      const c = a.notifications ?? [];
      const l = a.hasMore ? String(o + c.length) : null;
      return { notifications: c.map(Zd), nextCursor: l };
    },
    async getUnreadCount() {
      return (await L.get(U.notifications.count)).count;
    },
    async markAllAsRead() {
      await L.post(U.notifications.markAllRead);
    },
    async getSettings() {
      const e = await L.get(U.notifications.settings);
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

      await L.put(U.notifications.settings, t);
    },
  };

const il = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const y0 = 0.3;
const w0 = 15;
function E0(e) {
  const t = il[Math.min(e, il.length - 1)];
  const n = t * y0 * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let Qt = null;
let nr = null;
let fo = 0;
let pn = null;
function b0(e) {
  const { url, onMessage, onStatusChange } = e;
  function r() {
    if (Qt) {
      return;
    }
    if (!un()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    (Qt = new AbortController());

    (async () => {
      try {
        const c = await hy(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
          },
          signal: Qt?.signal,
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
        (fo = 0);
        onStatusChange("connected");

        if (pn) {
          pn.cancel().catch(() => {});
          (pn = null);
        }

        const l = c.body.getReader();
        pn = l;
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
          let _ = "";
          for (const v of h) {
            if (v.startsWith("event: ")) {
              m = v.slice(7);
            } else if (v.startsWith("data: ")) {
              _ = v.slice(6);
            } else if (v === "" && _) {
              try {
                const g = JSON.parse(_);
                const b = m || g.type;
                onMessage(b, g);
              } catch (g) {
                console.error("SSE message parse error:", g, _);
              }
              (m = "");
              (_ = "");
            }
          }
        }
      } catch (c) {
        if (c.name === "AbortError") {
          return;
        }
        onStatusChange("error");

        if (fo >= w0) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          (Qt = null);
          return;
        }

        const l = E0(fo);
        fo++;

        (nr = setTimeout(() => {
          (Qt = null);
          r();
        }, l));
      }
    })();
  }
  function s() {
    if (nr) {
      clearTimeout(nr);
      (nr = null);
    }

    if (pn) {
      pn.cancel().catch(() => {});
      (pn = null);
    }

    if (Qt) {
      Qt.abort();
      (Qt = null);
    }

    (fo = 0);
    onStatusChange("disconnected");
  }
  return { connect: r, disconnect: s };
}
const S0 = "/assets/chalk_icon-D6lU3ica.svg";
const C0 = "/assets/curtain_gathered-C9r-YF7B.png";
const k0 = "/assets/curtain_spread-BNRn2v1V.png";
const N0 = "/assets/curtains_icon-d6IVj7Uz.svg";
const T0 = "/assets/cushion_fart-CMDuTici.mp3";
const I0 = "/assets/glass_break-dVY7K4gp.wav";
const Ei = "/assets/icon-37-CNQcYznR.svg";
const bi = "/assets/icon2-44-BljxXBI-.svg";
const R0 = "/assets/iconsh-B7n-__fE.svg";
const A0 = "/assets/school_bell-D__r0mih.mp3";
const P0 = "/assets/sticker_5plus-DOjFwL6Q.png";
const L0 = "/assets/sticker_apple-5NwAflFs.png";
const O0 = "/assets/sticker_bow-9c7EnTly.png";
const $0 = "/assets/sticker_school_03-2EGjbexw.webp";
const x0 = "/assets/sticker_school_04-DH5V9MQf.webp";
const M0 = "/assets/sticker_school_05-xwkb2oon.webp";
const D0 = "/assets/sticker_school_06-DQXC4ZRO.webp";
const U0 = "/assets/sticker_school_07-CCPZolQF.webp";
const F0 = "/assets/sticker_school_08-Ce8D6oEP.webp";
const B0 = "/assets/sticker_school_09-BZQ2O5f3.webp";
const H0 = "/assets/sticker_school_10-CmxZNY21.webp";
const V0 = "/assets/sticker_school_12-wmL479lE.webp";
const W0 = "/assets/sticker_school_13-ByMYsie6.webp";
const j0 = "/assets/sticker_school_14-DZtvzIpA.webp";
const z0 = "/assets/sticker_school_15-BgTh_9NX.webp";
const q0 = "/assets/sticker_school_16-Do43bu8c.webp";
const Y0 = "/assets/sticker_school_17-BSU7xYJ4.webp";
const G0 = "/assets/sticker_school_18-Bf7-nXq4.webp";
const K0 = "/assets/sticker_school_19-ul_n3YVs.webp";
const X0 = "/assets/sticker_school_20-jjiIUXq1.webp";
const Q0 = "/assets/sticker_school_21-58wdQpEs.webp";
const Z0 = "/assets/sticker_school_22-JECzGGuo.webp";
const J0 = "/assets/sticker_school_23-BuMgtXwl.webp";
const ew = "/assets/sticker_school_24-CnPPU6Zu.webp";
const tw = "/assets/sticker_school_25-JTb-mSYd.webp";
const nw = "/assets/sticker_school_26-D-SnyQaj.webp";
const ow = "/assets/sticker_school_27-6ffXdqoL.webp";
const rw = "/assets/sticker_school_28-CZD3KsIr.webp";
const sw = "/assets/sticker_school_29-CLYxT5sy.webp";
const iw = "/assets/sticker_school_30-BxFYZtbi.webp";
const aw = "/assets/sticker_school_31-BVMKrhQS.webp";
const cw = "/assets/sticker_school_32-C2ha650b.webp";
const lw = "/assets/sticker_school_33-rvcEWDwh.webp";
const uw = "/assets/sticker_school_46-DS4CbHRm.webp";
const dw = "/assets/sticker_school_47-DHE3Yp0j.webp";
const fw = "/assets/sticker_school_alice_mark-CfF7bkcq.webp";
const pw = "/assets/sticker_school_alice_text-DcPXYUHD.webp";
const hw = "/assets/sticker_school_photo-DnJFBmUP.webp";
const mw = "/assets/sticker_school_skull-Cieg1sS4.webp";
const gw = "/assets/sticker_scrape_1-kIXTTbQP.png";
const _w = "/assets/sticker_scrape_2-DEG3iIMX.png";
const vw = "/assets/sticker_scrape_3-BQF48-v6.png";
const yw = "/assets/sticker_star-DCXLHvZd.png";
const ww = "/assets/sticker_tear_2-BNerZgX5.png";
const Ew = "/assets/sticker_tear_3-DBLwz7Xa.png";
const bw = "/assets/sticker_toad-k--DanVa.png";
const Sw = "/assets/water_stain-CUu1kwL2.svg";
const Cw = "/assets/window-D5KYvQsI.png";
const kw = "/assets/window_broken-D0oHzxbP.png";

const Nw = Object.assign({
  "./assets/chalk_icon.svg": S0,
  "./assets/curtain_gathered.png": C0,
  "./assets/curtain_spread.png": k0,
  "./assets/curtains_icon.svg": N0,
  "./assets/cushion_fart.mp3": T0,
  "./assets/glass_break.wav": I0,
  "./assets/icon-37.svg": Ei,
  "./assets/icon2-44.svg": bi,
  "./assets/iconsh.svg": R0,
  "./assets/school_bell.mp3": A0,
  "./assets/sticker_5plus.png": P0,
  "./assets/sticker_apple.png": L0,
  "./assets/sticker_bow.png": O0,
  "./assets/sticker_school_03.webp": $0,
  "./assets/sticker_school_04.webp": x0,
  "./assets/sticker_school_05.webp": M0,
  "./assets/sticker_school_06.webp": D0,
  "./assets/sticker_school_07.webp": U0,
  "./assets/sticker_school_08.webp": F0,
  "./assets/sticker_school_09.webp": B0,
  "./assets/sticker_school_10.webp": H0,
  "./assets/sticker_school_12.webp": V0,
  "./assets/sticker_school_13.webp": W0,
  "./assets/sticker_school_14.webp": j0,
  "./assets/sticker_school_15.webp": z0,
  "./assets/sticker_school_16.webp": q0,
  "./assets/sticker_school_17.webp": Y0,
  "./assets/sticker_school_18.webp": G0,
  "./assets/sticker_school_19.webp": K0,
  "./assets/sticker_school_20.webp": X0,
  "./assets/sticker_school_21.webp": Q0,
  "./assets/sticker_school_22.webp": Z0,
  "./assets/sticker_school_23.webp": J0,
  "./assets/sticker_school_24.webp": ew,
  "./assets/sticker_school_25.webp": tw,
  "./assets/sticker_school_26.webp": nw,
  "./assets/sticker_school_27.webp": ow,
  "./assets/sticker_school_28.webp": rw,
  "./assets/sticker_school_29.webp": sw,
  "./assets/sticker_school_30.webp": iw,
  "./assets/sticker_school_31.webp": aw,
  "./assets/sticker_school_32.webp": cw,
  "./assets/sticker_school_33.webp": lw,
  "./assets/sticker_school_46.webp": uw,
  "./assets/sticker_school_47.webp": dw,
  "./assets/sticker_school_alice_mark.webp": fw,
  "./assets/sticker_school_alice_text.webp": pw,
  "./assets/sticker_school_photo.webp": hw,
  "./assets/sticker_school_skull.webp": mw,
  "./assets/sticker_scrape_1.png": gw,
  "./assets/sticker_scrape_2.png": _w,
  "./assets/sticker_scrape_3.png": vw,
  "./assets/sticker_star.png": yw,
  "./assets/sticker_tear_2.png": ww,
  "./assets/sticker_tear_3.png": Ew,
  "./assets/sticker_toad.png": bw,
  "./assets/water_stain.svg": Sw,
  "./assets/window.png": Cw,
  "./assets/window_broken.png": kw,
});

const Rn = {};
for (const [e, t] of Object.entries(Nw)) {
  Rn[e.slice(9)] = t;
}

const Tw = e => Rn[`${e}.webp`] ?? Rn[`${e}.svg`] ?? Rn[`${e}.png`] ?? "";

const {
  "glass_break.wav": glass_breakWav,
  "school_bell.mp3": school_bellMp3,
  "cushion_fart.mp3": cushion_fartMp3
} = Rn;

function Rw(e, t = 0.65, n = Date.now() + 60000/* 6e4 */) {
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

const al = {
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

const or = new Map();

const rr = b0({
  url: `${xd}${U.notifications.stream}`,
  onMessage: (e, t) => {
    if (e === "alice.bell") {
      const n = t;
      const o = Date.parse(n.expiresAt ?? "");
      if (n.id && o > Date.now() && !or.has(n.id)) {
        for (const [r, s] of or) {
          if (s <= Date.now()) {
            or.delete(r);
          }
        }
        or.set(n.id, o);

        if (sn.getState().settings?.soundEnabled !== false) {
          Rw(school_bellMp3, 0.65, o);
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
      const n = Zd(t);
      const o = n.payload.actors[0];

      const r = {
        actorId: o?.id,
        id: n.id,
        type: n.type,
        actorName: o?.displayName || "Пользователь",
        actorUsername: o?.username || "",
        actorAvatar: o?.avatar || "",
        count: n.payload.count,
        message: Pw(
          n.type,
          o?.displayName || "Пользователь",
          n.payload.count
        ),
        entityId: n.entityId,
        parentEntityId: n.parentEntityId,
      };

      sn.setState(s => ({
        notifications: [n, ...s.notifications],
        unreadCount: s.unreadCount + 1,
        lastSseToast: r
      }));

      if (t.sound) {
        Lw();
      }
    }
  },
  onStatusChange: (e) => {
    sn.setState({
      sseStatus: e,
      error: e === "error" ? "SSE connection error" : null,
    });
  },
});

const sn = Qe()((e, t) => ({
  ...al,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      rr.connect();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status, nextCursor, notifications } = t();
    if (status !== "loading" && !(!n && nextCursor === null && notifications.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const a = n ? undefined : nextCursor ?? undefined;
        const c = await uo.getNotifications({ cursor: a, limit: 20 });
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
      const n = await uo.getUnreadCount();
      e({ unreadCount: n });
    } catch {}
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
      await uo.markAllAsRead();
    } catch {}
  },

  connectSSE: () => rr.connect(),
  disconnectSSE: () => rr.disconnect(),

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await uo.getSettings();
      e({ settings: n, settingsLoading: false });
    } catch {
      e({ settingsLoading: false });
    }
  },

  updateSettings: async (n) => {
    const { settings: o } = t();
    if (o) {
      const r = {
        webEnabled: n.webEnabled ?? o.webEnabled,
        soundEnabled: n.soundEnabled ?? o.soundEnabled,
        preferences: { ...o.preferences, ...n.preferences },
      };
      e({ settings: r });
    }
    try {
      await uo.updateSettings(n);
    } catch {
      e({ settings: o });
    }
  },

  reset: () => {
    rr.disconnect();
    e(al);
  }
}));

const Aw = {
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

function Pw(e, t, n) {
  const Aw_e = Aw[e];
  return Aw_e ? Aw_e(t, n) : "Новое уведомление";
}
function Lw() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const Jd = () => sn(e => e.unreadCount);

const Ow = () => sn(e => e.lastSseToast);

const $w = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const xw = ["video/mp4", "video/webm", "video/quicktime"];
const Si = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const Mw = ".mp4,.webm,.mov";

const qn = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await L.uploadFormData(U.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async uploadAvatar(e) {
    const t = new FormData();
    t.append("file", e);
    return L.uploadFormData(U.files.uploadAvatar, t, { timeout: 120 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await L.delete(U.files.delete(e));
  },
  isValidImageType(e) {
    return $w.includes(e.type);
  },
  isValidVideoType(e) {
    return xw.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const Dw = {
  async getChangelog() {
    const e = await L.get(U.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await L.get(U.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class la {
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
function cl(e) {
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
const tn = new la(100, 300 * 1000/* 1e3 */);
const Uw = 60 * 1000/* 1e3 */;
setInterval(() => tn.cleanup(), 120 * 1000/* 1e3 */);
const sr = {
  async checkUsername(e) {
    return (
      await L.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await L.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await L.get(U.users.me);
    return cl(e);
  },
  async updateProfile(e) {
    return await L.put(U.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = tn.get(t);

    if (n && tn.isFresh(t, Uw)) {
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
    return tn.get(e.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await L.get(U.users.profile(e), {
        skipErrorToast: [Xe.NOT_FOUND],
      });

    const o = cl(n);
    tn.set(t, o);
    return o;
  },
  invalidateProfileCache(e) {
    tn.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const o = tn.get(n);

    if (o) {
      tn.set(n, { ...o, ...t });
    }
  },
  async followUser(e) {
    await L.post(U.users.follow(e), {});
  },
  async unfollowUser(e) {
    await L.delete(U.users.follow(e));
  },
  async pinPost(e) {
    await L.post(U.posts.pin(e));
  },
  async unpinPost(e) {
    await L.delete(U.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await L.get(U.users.privacy);
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

    await L.put(U.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await L.get(U.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await L.post(U.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await L.get(U.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await L.put(U.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await L.delete(U.users.setPin);
  },
  async deleteAccount() {
    await L.delete(U.users.deleteAccount);
  },
  async restoreAccount() {
    await L.post(U.users.restoreAccount);
  },
};
function ll(e) {
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
const Ht = Qe(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(o => ({
    statuses: { ...o.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let Ci = new Set();
function Fw() {
  if (!bs) {
    (null = setTimeout(async () => {
      bs = null;
      const e = Array.from(Ci);
      Ci.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const o = await ki.batchFollowStatus(n);
            Ht.getState().setStatuses(o);
          } catch {}
        }
      }
    }, 50));
  }
}
function Bw(e) {
  const t = ge(s => s.profile?.id);

  const n = Ht(s => s.statuses);

  const o = O("");

  D(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === o.current || a === "")) {
      o.current = a;
      for (const c of s) {
        Ci.add(c);
      }
      Fw();
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
const yn = new la(500, 120 * 1000/* 1e3 */);
setInterval(() => yn.cleanup(), 60 * 1000/* 1e3 */);
const ki = {
  async followUser(e) {
    const t = await L.post(U.users.follow(e), {});
    yn.delete(e);
    Ht.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await L.delete(U.users.follow(e));
    yn.delete(e);
    Ht.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const o = t.limit ?? 20;
    n.set("limit", o.toString());
    const r = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", r.toString());
    const s = n.toString();
    const a = `${U.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await L.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const p = l.pagination?.hasMore ?? false ? String(r + 1) : null;
    return { data: u.map(ll), nextCursor: p };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const o = t.limit ?? 20;
    n.set("limit", o.toString());
    const r = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", r.toString());
    const s = n.toString();
    const a = `${U.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await L.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const p = l.pagination?.hasMore ?? false ? String(r + 1) : null;
    return { data: u.map(ll), nextCursor: p };
  },
  async blockUser(e) {
    await L.post(U.users.block(e), {});
    yn.delete(e);
  },
  async unblockUser(e) {
    await L.delete(U.users.block(e));
    yn.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const o = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", o.toString());
    const r = t.toString();
    const s = `${U.users.blocked}${r ? `?${r}` : ""}`;
    const a = await L.get(s);
    const c = a.data ?? a;
    let l = [];

    if (Array.isArray(c.users)) {
      (l = c.users);
    } else if (Array.isArray(c)) {
      (l = c);
    }

    const u = l.map((d) => {
        const h = d.user ?? d;
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
    const p = f ? String(o + 1) : null;
    return { users: u, nextCursor: p, hasMore: f };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await L.post(U.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    yn.delete(e);
  },
  clearSocialCache() {
    yn.clear();
  },
};
function Hw(e) {
  const t = Ht(r => r.statuses[e]);

  const n = I(async () => {
    Ht.getState().setStatus(e, true);
    try {
      await ki.followUser(e);
    } catch {
      Ht.getState().setStatus(e, false);
    }
  }, [e]);

  const o = I(async () => {
    Ht.getState().setStatus(e, false);
    try {
      await ki.unfollowUser(e);
    } catch {
      Ht.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: o };
}
const Vw = "e0fV";
const Ww = "Qtot";
const jw = "BMCu";
const zw = "aJ5J";
const qw = "CJyN";
const Yw = "kFL4";
const Gw = "doy5";
const Kw = "pz7l";
const Xw = "DMBO";
const Qw = "yOoK";
const Zw = "GIkw";
const Jw = "xzrW";
const eE = "VAQ0";
const tE = "LkUD";

const Ye = {
  overlay: Vw,
  modalWrapper: Ww,
  wide: jw,
  modal: zw,
  frameless: qw,
  header: Yw,
  title: Gw,
  closeButton: Kw,
  externalCloseButton: Xw,
  mobileOverlay: Qw,
  closing: Zw,
  bottomSheet: Jw,
  dragHandle: eE,
  dragIndicator: tE,
};

const nE = Jn(null);
const oE = 100;
const rE = 0.5;
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
  const f = O(null);
  const p = O(null);
  const d = O(null);
  const h = Gt();
  const m = O(0);
  const _ = O(false);
  const [v, g] = A(false);
  const b = O(0);
  const y = O(0);
  const k = O(0);
  D(() => {
    const W = (ce) => {
        if (ce.key === "Escape") {
          if (u && !u()) {
            return;
          }
          t();
        }
      };

    const ee = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", W);

    return () => {
      document.removeEventListener("keydown", W);
      (document.documentElement.style.overflow = ee);
    };
  }, [t]);

  const S = (W) => {
      d.current = W.target;
    };

  const C = (W) => {
    if (d.current === f.current && W.target === f.current) {
      if (h) {
        w();
      } else {
        if (u && !u()) {
          return;
        }
        t();
      }
    }
    d.current = null;
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

  const T = O(false);
  const N = O(false);

  const E = (W) => {
    let ee = W;

    while (ee && ee !== p.current) {
      const q = window.getComputedStyle(ee).overflowY;
      if ((q === "auto" || q === "scroll") &&
      ee.scrollHeight > ee.clientHeight) {
        return ee;
      }
      ee = ee.parentElement;
    }

    return null;
  };

  const P = (W, ee) => {
    if (p.current) {
      (p.current.style.transform = W > 0 ? `translateY(${W}px)` : "");
      (p.current.style.transition = ee || "");
    }
  };

  const R = (W) => {
    if (f.current && W > 0) {
      (f.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - W / 500
          )})`);
    } else if (f.current) {
      (f.current.style.backgroundColor = "");
    }
  };

  const $ = (W) => {
    if (!h) {
      return;
    }
    (b.current = W.touches[0].clientY);
    (y.current = Date.now());
    (k.current = W.touches[0].clientY);
    const W_target = W.target;
    if (W_target.closest(`.${Ye.dragHandle}`)) {
      (T.current = true);
      (N.current = true);
      (_.current = true);

      if (p.current) {
        (p.current.style.transition = "none");
      }

      return;
    }
    (T.current = false);

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
    const Q = E(W_target);
    N.current = !Q || Q.scrollTop === 0;
  };

  const Y = (W) => {
    if (!h) {
      return;
    }
    const ee = W.touches[0].clientY;
    const ce = ee - b.current;
    (k.current = ee);

    if (T.current) {
      if (ce > 0) {
        (m.current = ce);
        P(ce);
        R(ce);
        W.preventDefault();
      }

      return;
    }

    if (N.current) {
      if (_.current && m.current > 0) {
        if (ce > 0) {
          (m.current = ce);
          P(ce);
          R(ce);
          W.preventDefault();
        } else {
          (m.current = 0);
          (_.current = false);
          P(0);
          R(0);
        }

        return;
      }

      if (ce > 0) {
        _.current ||
            ((_.current = true),
            p.current && (p.current.style.transition = "none"));

        (m.current = ce);
        P(ce);
        R(ce);
        W.preventDefault();
      }
    }
  };

  const F = () => {
    if (!h) {
      return;
    }
    const W = k.current - b.current;
    const ee = Date.now() - y.current;
    const ce = W / ee;

    if (_.current && (W > oE || ce > rE)) {
      w();
    } else if (m.current > 0) {
      P(0, "transform 0.2s ease-out");
      R(0);
      (m.current = 0);
    }

    (_.current = false);
    (T.current = false);
    (N.current = false);
  };

  const K = (() => {
    if (h && v) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const se = { onClose: t, isMobile: h, isClosing: v, handleClose: w };
  return i(nE.Provider, {
    value: se,
    children: i("div", {
      ref: f,
      className: `${Ye.overlay} ${h ? Ye.mobileOverlay : ""} ${
        v ? Ye.closing : ""
      }`,
      onMouseDown: S,
      onMouseUp: C,
      children: i("div", {
        ref: p,
        className: `${Ye.modalWrapper} ${l === "wide" ? Ye.wide : ""} ${
          h ? Ye.bottomSheet : ""
        }`,
        style: K,
        onTouchStart: $,
        onTouchMove: Y,
        onTouchEnd: F,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: Ye.externalCloseButton,
              onClick: (W) => {
                W.stopPropagation();
                t();
              },
              children: i(ut, { size: 24 }),
            }),
          h &&
            i("div", {
              className: Ye.dragHandle,
              children: i("div", { className: Ye.dragIndicator }),
            }),
          i("div", {
            className: `${Ye.modal} ${s ? Ye.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                o &&
                !h &&
                i("div", {
                  className: Ye.header,
                  children: [
                    i("span", { className: Ye.title, children: n }),
                    r &&
                      i("button", {
                        type: "button",
                        className: Ye.closeButton,
                        onClick: (W) => {
                          W.stopPropagation();
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
const sE = "Dwn8";
const iE = "bP4t";
const aE = "vYzW";
const cE = "OnBZ";
const lE = "BqTn";
const uE = "vxDp";
const ul = { spinner: sE, spin: iE, xs: aE, sm: cE, md: lE, lg: uE };
function ef({ size: e = "md", className: t }) {
  const n = [ul.spinner, ul[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(ra, {}) });
}
const dE = "sZWc";
const fE = "WZBy";
const pE = "Favh";
const hE = "VH54";
const mE = "CaOl";
const gE = "Pio8";
const _E = "PfRd";
const vE = "jt3w";
const yE = "D8Bu";
const wE = "Qxfv";
const EE = "e9uc";
const bE = "qm35";

const Un = {
  button: dE,
  primary: fE,
  secondary: pE,
  ghost: hE,
  accent: mE,
  danger: gE,
  sm: _E,
  md: vE,
  lg: yE,
  fullWidth: wE,
  iconOnly: EE,
  loading: bE,
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
  const f = [
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
    className: f,
    disabled: l || s,
    ...u,
    children: s ? i(ef, { size: "sm" }) : e,
  });
}
const SE = "PMs8";
const CE = "gnrE";
const kE = "aWy2";
const NE = "XjKH";
const ir = { content: SE, title: CE, subtitle: kE, actions: NE };
function TE({ displayName: e, onConfirm: t, onClose: n }) {
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
const tf = Jn(null);
let IE = 0;
function RE({ children: e }) {
  const [t, n] = A([]);

  const o = I((a) => {
    const c = `modal-${++IE}`;

    n(l => [...l, { id: c, component: a }]);

    return c;
  }, []);

  const r = I((a) => {
    n(c => a ? c.filter(l => l.id !== a) : c.slice(0, -1));
  }, []);

  const s = I(() => {
    n([]);
  }, []);

  D(() => {
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

  return i(tf.Provider, {
    value: { openModal: o, closeModal: r, closeAllModals: s },
    children: [e, t.length > 0 && i(AE, { modals: t })],
  });
}
function AE({ modals: e }) {
  return $(
    i(ye, {
      children: e.map(({ id: t, component: n }) => i(De, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function Kt() {
  const e = zo(tf);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const PE = "AHmE";
const LE = "bz5w";
const OE = "Txbz";
const $E = "Aa8s";
const xE = "Pykz";
const ME = "xQe8";
const DE = "AeON";
const UE = "wb9P";
const FE = "DnRC";
const BE = "RvRI";
const HE = "wWzr";
const VE = "Brx6";

const Zt = {
  avatar: PE,
  xs: LE,
  emoji: OE,
  onlineDot: $E,
  sm: xE,
  md: ME,
  lg: DE,
  xl: UE,
  badge: FE,
  followBadge: BE,
  notFollowing: HE,
  following: VE,
};

function WE(e) {
  return (
    e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/")
  );
}
function Et({
  src: e,
  alt: t,
  size: n = "md",
  badge: o,
  online: r,
  followBadge: s,
  onFollowBadgeClick: a,
  className: c,
}) {
  const l = e ? WE(e) : false;
  return i("div", {
    className: `${Zt.avatar} ${Zt[n]} ${c || ""}`,
    children: [
      l && e
        ? i("img", { src: e, alt: t || "" })
        : i("span", { className: Zt.emoji, children: e || "👤" }),
      o && i("div", { className: Zt.badge, children: o }),
      s !== undefined
        ? i("button", {
            type: "button",
            className: `${Zt.followBadge} ${
              s ? Zt.following : Zt.notFollowing
            }`,
            onClick: (u) => {
              u.preventDefault();
              u.stopPropagation();
              a?.(u);
            },
            children: s ? i(Gy, { size: 8 }) : i(Yy, { size: 8 }),
          })
        : r && i("span", { className: Zt.onlineDot }),
    ],
  });
}
const jE = "whG5";
const zE = "vEog";
const qE = "mGro";
const YE = "P8ad";
const GE = "yXCf";
const KE = "pZaL";
const XE = "CfOg";
const QE = "Pzl7";
const ZE = "jvGo";
const JE = "CzVI";
const eb = "rnHB";
const tb = "YdhY";
const nb = "FN9h";
const ob = "mlNB";
const rb = "dwet";
const sb = "TR3T";
const ib = "A66U";
const ab = "HrbN";
const cb = "L4ug";
const lb = "SCIq";
const ub = "o4zV";
const db = "ZIQO";
const fb = "UeIt";
const pb = "o9Cq";

const Re = {
  userName: jE,
  identity: zE,
  badges: qE,
  pinBadge: YE,
  text: GE,
  nukstaGlow: KE,
  xs: XE,
  sm: QE,
  md: ZE,
  lg: JE,
  nameEnding: eb,
  pinWrapper: tb,
  nickname: nb,
  schoolSilver: ob,
  withNickname: rb,
  trailing: sb,
  plain: ib,
  compact: ab,
  pinClickable: cb,
  pinTooltip: lb,
  pinTooltipFadeIn: ub,
  pinTooltipRow: db,
  pinTooltipLabel: fb,
  pinTooltipArrow: pb,
};

function dl(e) {
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
function hb(e) {
  let t = dl(e);
  return (n) => {
    const o = dl(n);
    return o === t ? false : ((t = o), true);
  };
}
function ua(e) {
  const t = hb(un());
  return dy((n) => {
    if (t(n)) {
      e();
    }
  });
}
const Yt = Qe(() => ({
  status: "checking",
  enabled: false
}));
let Fn = null;
let Ss = 0;
let Ni = 0;
function Mr(e = false) {
  if (Fn || (!e && Yt.getState().status !== "checking")) {
    return Fn;
  }
  const t = ++Ss;

  const n = L.get("/v1/event/status", { skipErrorToast: true })
    .then((o) => {
      if (Ss !== t) {
        return;
      }
      const r = o?.enabled === true;
      Yt.setState({ status: r ? "allowed" : "denied", enabled: r });
    })
    .catch(() => {
    if (Ss === t) {
      Yt.setState({ status: "error" });
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
  if (Yt.getState().status === "error" && Date.now() - Ni >= 15000/* 15e3 */) {
    (Ni = Date.now());
    Mr(true);
  }
}
function nf() {
  return Yt.getState().enabled;
}
function mb() {
  Mr();
}
function gb(e) {
  let t = Yt.getState().enabled;
  return Yt.subscribe((n) => {
    if (n.enabled !== t) {
      (t = n.enabled);
      e(n.enabled);
    }
  });
}
function Yo() {
  const e = ge(r => r.status);

  const t = Yt(r => r.status);

  const n = Yt(r => r.enabled);

  D(() => {
    Mr();
  }, []);

  D(
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
      (Ni = Date.now());
      Mr(true);
    },
  };
}
const ot = new Map();
const _b = 512;
let Cs = 0;
let ks = false;
let cr;
let Cn = 0;
const of = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function rf() {
  Cn++;
  for (const e of ot.values()) {
    (e.value = null);
    (e.deadline = 0);
    (e.refreshAt = 0);
    (e.optimistic = undefined);

    e.listeners.forEach(t => t());
  }
  da();
}
function Ti() {
  const e = performance.now();
  for (const [t, n] of ot) {
    if (!n.listeners.size &&
      (!n.value || n.deadline <= e || ot.size > _b)) {
      ot.delete(t);
    }
  }
}
function Dr() {
  Cn++;
  for (const e of ot.values()) {
    e.refreshAt = 0;
  }
  Ii();
}
function fl(e) {
  const e_detail = e.detail;
  if (
    e_detail &&
    typeof e_detail.userId == "string" &&
    of.test(e_detail.userId) &&
    (e_detail.label === null || (typeof e_detail.label == "string" && e_detail.label.length <= 128))
  ) {
    const n = ot.get(e_detail.userId);

    if (n) {
      (n.optimistic = { label: e_detail.label, until: performance.now() + 30000/* 3e4 */ });
      n.listeners.forEach(o => o());
    }
  }
  Dr();
}
async function da() {
  if (ks || document.hidden || !un() || !nf()) {
    return;
  }
  const e = [...ot]
    .filter(([, n]) => n.listeners.size && n.refreshAt <= performance.now())
    .map(([n]) => n);
  if (!e.length) {
    return;
  }
  ks = true;
  const t = Cn;
  try {
    for (let n = 0; n < e.length; n += 200) {
      const o = e.slice(n, n + 200);
      const r = performance.now();

      const s = await L.get(`/event-nicknames/?ids=${o.join(",")}`, {
        skipErrorToast: true,
      });

      if (t !== Cn) {
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
        const u = ot.get(l);
        if (!u) {
          continue;
        }
        const f = s.data[l];
        if (
          u.optimistic &&
          performance.now() < u.optimistic.until &&
          (f?.label ?? null) !== u.optimistic.label
        ) {
          u.refreshAt = r + 1000/* 1e3 */;
          continue;
        }
        u.optimistic = undefined;
        const p = f ? Date.parse(f.expiresAt) - a : 0;

        (u.value = f &&
        typeof f.label == "string" &&
        f.label.length <= 128 &&
        Number.isFinite(p) &&
        p > 0
          ? f
          : null);

        (u.deadline = r + (Number.isFinite(p) ? Math.max(0, p) : 0));
        (u.refreshAt = r + Math.max(5000/* 5e3 */, Math.min(30000/* 3e4 */, Number.isFinite(c) ? c / 2 : 5000/* 5e3 */)));

        u.listeners.forEach(d => d());
      }
    }
  } catch {
    for (const n of t === Cn ? e : []) {
      const o = ot.get(n);

      if (o) {
        (o.refreshAt = performance.now() + 10000/* 1e4 */);
      }
    }
  } finally {
    (ks = false);

    if (t !== Cn) {
      da();
    }
  }
}
function Ii() {
  for (const e of ot.values()) {
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
  da();
}
function pl() {
  if (!document.hidden) {
    Dr();
  }
}
ua(() => {
  rf();
  Ti();
});
gb(() => rf());
function fa(e) {
  const [, t] = A(0);
  D(() => {
    if (!e || !of.test(e)) {
      return;
    }
    mb();
    Ti();
    let o = ot.get(e);

    if (!o) {
      (o = { listeners: new Set(), value: null, deadline: 0, refreshAt: 0 });
      ot.set(e, o);
    }

    const r = () => t(a => a + 1);
    o.listeners.add(r);
    Cs++;

    if (!cr) {
      (cr = setInterval(Ii, 1000/* 1e3 */));
      document.addEventListener("visibilitychange", pl);
      window.addEventListener("online", Dr);
      window.addEventListener("event-nickname-changed", fl);
    }

    const s = setTimeout(Ii, 0);
    return () => {
      clearTimeout(s);
      o.listeners.delete(r);
      Cs--;
      Ti();

      if (!Cs) {
        clearInterval(cr);
        (cr = undefined);
        document.removeEventListener("visibilitychange", pl);
        window.removeEventListener("online", Dr);
        window.removeEventListener("event-nickname-changed", fl);
        Cn++;
      }
    };
  }, [e]);
  const n = e ? ot.get(e) : undefined;
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

const vb = le(() => ie(
  () => import("./index-8ixBUN-Y.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
  );

const yb = { xs: 12, sm: 14, md: 16, lg: 22 };
const wb = "subscription_nuksta";
function Go({
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
  const u = fa(e);
  const yb_c = yb[c];
  const p = O(null);
  const [d, h] = A(null);
  const [m, _] = A(false);
  const [v, g] = A(null);
  const b = !!a?.url && v === a.url;
  const y = a?.slug === wb;

  const k = I(() => {
    if (!p.current) {
      return;
    }
    const E = p.current.getBoundingClientRect();
    h({ x: E.left + E.width / 2, y: E.top });
  }, []);

  const S = I(() => {
    h(null);
  }, []);

  const C =
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

  const w = E => s
    ? i("span", {
        className: Re.nukstaGlow,
        children: i("span", { className: Re.text, children: E }),
      })
    : i("span", { className: Re.text, children: E });

  const T = c === "lg" && (r || b) ? /\S+$/u.exec(o) : null;

  const N =
    (r || a) &&
    i("span", {
      className: Re.badges,
      children: [
        r && i(o0, {}),
        a &&
          i("span", {
            ref: p,
            className: `${Re.pinWrapper} ${y ? Re.pinClickable : ""}`,
            style: b ? undefined : { display: "none" },
            onMouseEnter: k,
            onMouseLeave: S,
            onClick: y
              ? (E) => {
              E.stopPropagation();
              E.preventDefault();
              _(true);
            }
              : undefined,
            children: [
              i("img", {
                src: a.url,
                alt: a.name,
                className: Re.pinBadge,
                width: yb_c,
                height: yb_c,
                onLoad: () => g(a.url || null),
                onError: () => g(null),
              }),
              d &&
                $(
                  i("div", {
                    className: Re.pinTooltip,
                    style: { left: `${d.x}px`, top: `${d.y}px` },
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
            children: T
              ? i(ye, {
                  children: [
                    w(o.slice(0, T.index)),
                    i("span", {
                      className: Re.nameEnding,
                      children: [w(T[0]), N],
                    }),
                    C,
                  ],
                })
              : i(ye, { children: [w(o), N, C] }),
          })
        : i(ye, { children: [w(o), N] }),
      n &&
        i("span", {
          className: Re.trailing,
          onClick: (E) => {
            E.preventDefault();
            E.stopPropagation();
          },
          children: n,
        }),
      m &&
        i(De, {
          fallback: null,
          children: i(vb, { isOpen: true, onClose: () => _(false) }),
        }),
    ],
  });
}
function Eb(e) {
  return "accessToken" in e;
}
function bb(e) {
  return "accessToken" in e;
}
const hn = { skipErrorToast: true };

const Jt = {
  async register(e) {
    return await St.post(U.auth.signUp, e, hn);
  },
  async login(e) {
    return await St.post(U.auth.signIn, e, hn);
  },
  async verifyOtp(e) {
    return await St.post(U.auth.verifyOtp, e, hn);
  },
  async resendOtp(e) {
    await St.post(U.auth.resendOtp, e, hn);
  },
  async refreshSession() {
    return await St.post(U.auth.refresh);
  },
  async logout() {
    await St.post(U.auth.logout);
  },
  async logoutAll() {
    await St.post(`${U.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await St.post(U.auth.forgotPassword, e, hn);
  },
  async resetPassword(e) {
    await St.post(U.auth.resetPassword, e, hn);
  },
  async changePassword(e) {
    await St.post(U.auth.changePassword, e, hn);
  },
};

function mn(e, t) {
  if (!e) {
    sc(null);
    return;
  }
  sc({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
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

const ge = Qe()(
  Ld(
    (e, t) => {
      const n = Md;

      fy(async () => {
        try {
          const s = await Jt.refreshSession();
          n(s.accessToken);
          return s.accessToken;
        } catch (s) {
          return xe(s) && s.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      L.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...lr,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Jt.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
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
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Jt.login(r);
            if (bb(s)) {
              n(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: r.email,
                    });

                  mn(t().profile, r.email);
                }
              } catch (c) {
                if (xe(c) &&
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
            const a = xe(s) ? s.message : "Login failed";
            const c = xe(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail: s, pendingPassword: a, flowToken: c } = t();
          try {
            const l = await Jt.verifyOtp({
              email: s || "",
              password: a || "",
              otp: r,
              flowToken: c || "",
            });
            e({ pendingPassword: null });

            if (Eb(l)) {
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

                  mn(t().profile, u);
                }
              } catch (f) {
                if (xe(f) &&
                (f.code === H.ENTITY_NOT_FOUND || f.status === 404)) {
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
            const u = xe(l) ? l.message : "Verification failed";
            const f = xe(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: f });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail: r, flowToken: s } = t();
          try {
            await Jt.resendOtp({ email: r || "", flowToken: s || "" });
          } catch (a) {
            const c = xe(a) ? a.message : "Failed to resend code";
            const l = xe(a) ? a.code : null;
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
            mn(t().profile, t().email);
          } catch (s) {
            const a = xe(s) ? s.message : "Failed to create profile";
            const c = xe(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        logout: async () => {
          try {
            await Jt.logout();
          } catch {
          } finally {
            n(null);
            e({ ...lr, status: "unauthenticated" });
            mn(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await Jt.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...lr, status: "unauthenticated" });
            mn(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const r = await Jt.refreshSession();
            n(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return xe(r) && r.status >= 500
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
                mn(t().profile, t().email);
              }
            } catch (a) {
              if (xe(a) &&
              (a.code === H.ENTITY_NOT_FOUND || a.status === 404)) {
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
          mn(null, null);
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: ea(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const sf = () => ge(e => e.status);

const pa = () => ge(e => e.profile);

const ts = () => ge(e => e.status === "authenticated");

const Sb = "vFsO";
const Cb = "IGpC";
const kb = "arqZ";
const Nb = "Qiay";
const Tb = "c3CK";
const Ib = "tAPK";

const Bn = {
  screen: Sb,
  fullscreen: Cb,
  image: kb,
  title: Nb,
  description: Tb,
  action: Ib,
};

const Rb = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const af = ({ kind: e, title: t, description: n, action: o, fullscreen: r = false }) => i("div", {
  className: `${Bn.screen} ${r ? Bn.fullscreen : ""}`,
  children: [
    i("img", {
      className: Bn.image,
      src: Rb[e],
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

function Ab({ children: e, currentPath: t }) {
  const n = sf();

  const o = ge(s => s.initialize);

  D(() => {
    if (n === "idle") {
      o();
    }
  }, [n, o]);

  D(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const s = sl.some(a => t.startsWith(a));

    if (n === "unauthenticated" && !s) {
      if (!Ke(ue.LOGIN)) {
        window.location.replace(ue.LOGIN);
      }
    } else if (n === "needs_profile" && t !== ue.ONBOARDING) {
      if (!Ke(ue.ONBOARDING)) {
        window.location.replace(ue.ONBOARDING);
      }
    } else if (n === "authenticated" &&
        (t === ue.LOGIN || t === ue.REGISTER || t === ue.ONBOARDING)) {
      Ke(ue.HOME);
    }
  }, [n, t]);

  const r = sl.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !r)
    ? null
    : n === "service_error"
    ? i(Pb, {})
    : n === "account_deleted"
    ? i(Lb, {})
    : (n === "unauthenticated" && !r) ||
      (n === "needs_profile" && t !== ue.ONBOARDING)
    ? null
    : i(ye, { children: e });
}
function Pb() {
  const e = ge(r => r.initialize);

  const [t, n] = A(false);
  return i(af, {
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
function Lb() {
  const e = ge(l => l.canRestore);

  const t = ge(l => l.restoreDeadline);

  const n = ge(l => l.restoreAccount);

  const o = ge(l => l.logout);

  const [r, s] = A(false);

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
          ? i(ye, {
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
          : i(ye, {
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
const Ob = "fGva";
const $b = "IlaE";
const xb = "FWx3";
const Mb = "vBWO";
const ur = { content: Ob, icon: $b, text: xb, button: Mb };
const hl = "phone-verification-required";
function Db() {
  const [e, t] = A(false);

  const n = ge(r => r.profile?.id ?? "");

  D(() => {
    const r = () => t(true);
    window.addEventListener(hl, r);

    return () => window.removeEventListener(hl, r);
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
        i("div", { className: ur.icon, children: i(n0, { size: 48 }) }),
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
function cf(e = () => performance.now()) {
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
function Ur(e, t, n = performance.now()) {
  return Date.parse(e.serverTime) + Math.max(0, n - t);
}
const ns = cf();

const Rt = Qe(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const Nt = new Map();
let dr;
let Ts;
let Wt = 0;
let po;
function ha() {
  if (!un()) {
    Rt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (po?.generation === Wt) {
    return po.promise;
  }
  const e = Wt;

  const t = Promise.resolve()
    .then(async () => {
      try {
        const n = await L.get("/red-pens/inventory", { skipErrorToast: true });

        if (e === Wt) {
          Rt.setState({ inventory: n.data });
        }
      } catch (n) {
        if (e === Wt) {
          Rt.setState({ inventory: null });
        }

        throw n;
      }
    })
    .finally(() => {
    if (po?.promise === t) {
      (po = undefined);
    }
  });

  (po = { generation: e, promise: t });
  return t;
}
async function os(e = [...Nt.keys()]) {
  if (!e.length) {
    return;
  }
  const t = Wt;
  const n = performance.now();

  const o = await L.get(`/red-pens/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== Wt) {
    return;
  }
  if (!o?.data || typeof o.data != "object" || Array.isArray(o.data)) {
    throw new Error("Invalid event state response");
  }

  const r = e
      .filter(c => Nt.has(c))
      .map((c) => {
        const l = o.data[c] ?? null;
        return [c, ns.replace(c, l, n)];
      });

  const s = Object.fromEntries(r.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(r.map(([c, l]) => [c, l.received]));

  Rt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}
function Hn() {
  if (document.hidden || Ts) {
    return;
  }
  const e = [...Nt.keys()];
  Ts = Promise.all([
    ha(),
    (async () => {
      for (let t = 0; t < e.length; t += 100) {
        await os(e.slice(t, t + 100));
      }
    })(),
  ])
    .then(() => {})
    .catch(() => {})
    .finally(() => {
      Ts = undefined;
    });
}
function Ub(e) {
  Nt.set(e, (Nt.get(e) ?? 0) + 1);

  if (!dr) {
    (dr = setInterval(Hn, 15000/* 15e3 */));
    window.addEventListener("focus", Hn);
    document.addEventListener("visibilitychange", Hn);
  }

  if (!Ns) {
    (Ns = true);

    queueMicrotask(() => {
      (Ns = false);
      Hn();
    });
  }

  return () => {
    const t = (Nt.get(e) ?? 1) - 1;

    if (t) {
      Nt.set(e, t);
    } else {
      Nt.delete(e);

      Rt.setState((n) => {
        const o = { ...n.posts };
        const r = { ...n.received };
        delete o[e];
        delete r[e];
        return { posts: o, received: r };
      });
    }

    if (!Nt.size) {
      clearInterval(dr);
      (dr = undefined);
      window.removeEventListener("focus", Hn);
      document.removeEventListener("visibilitychange", Hn);
      Wt++;
      Rt.setState({ inventory: null });
    }
  };
}
ua(() => {
  Wt++;
  ns.clear();
  Rt.setState({ posts: {}, received: {}, inventory: null, generation: Wt });

  if (Nt.size) {
    os().catch(() => {});
    ha().catch(() => {});
  }
});
const rs = cf();

const At = Qe(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const Tt = new Map();
let fr;
let Rs;
let jt = 0;
let ho;
function ma() {
  if (!un()) {
    At.setState({ inventory: null });
    return Promise.resolve();
  }
  if (ho?.generation === jt) {
    return ho.promise;
  }
  const e = jt;

  const t = Promise.resolve()
    .then(async () => {
      try {
        const n = await L.get("/correctors/inventory", {
          skipErrorToast: true,
        });

        if (e === jt) {
          At.setState({ inventory: n.data });
        }
      } catch (n) {
        if (e === jt) {
          At.setState({ inventory: null });
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
async function ss(e = [...Tt.keys()]) {
  if (!e.length) {
    return;
  }
  const t = jt;
  const n = performance.now();

  const o = await L.get(`/correctors/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== jt) {
    return;
  }
  if (!o?.data || typeof o.data != "object" || Array.isArray(o.data)) {
    throw new Error("Invalid event state response");
  }

  const r = e
      .filter(c => Tt.has(c))
      .map((c) => {
        const l = o.data[c] ?? null;
        return [c, rs.replace(c, l, n)];
      });

  const s = Object.fromEntries(r.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(r.map(([c, l]) => [c, l.received]));

  At.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}
function Vn() {
  if (document.hidden || Rs) {
    return;
  }
  const e = [...Tt.keys()];
  Rs = Promise.all([
    ma(),
    (async () => {
      for (let t = 0; t < e.length; t += 100) {
        await ss(e.slice(t, t + 100));
      }
    })(),
  ])
    .then(() => {})
    .catch(() => {})
    .finally(() => {
      Rs = undefined;
    });
}
function Fb(e) {
  Tt.set(e, (Tt.get(e) ?? 0) + 1);

  if (!fr) {
    (fr = setInterval(Vn, 15000/* 15e3 */));
    window.addEventListener("focus", Vn);
    document.addEventListener("visibilitychange", Vn);
  }

  if (!Is) {
    (Is = true);

    queueMicrotask(() => {
      (Is = false);
      Vn();
    });
  }

  return () => {
    const t = (Tt.get(e) ?? 1) - 1;

    if (t) {
      Tt.set(e, t);
    } else {
      Tt.delete(e);

      At.setState((n) => {
        const o = { ...n.posts };
        const r = { ...n.received };
        delete o[e];
        delete r[e];
        return { posts: o, received: r };
      });
    }

    if (!Tt.size) {
      clearInterval(fr);
      (fr = undefined);
      window.removeEventListener("focus", Vn);
      document.removeEventListener("visibilitychange", Vn);
      jt++;
      At.setState({ inventory: null });
    }
  };
}
ua(() => {
  jt++;
  rs.clear();
  At.setState({ posts: {}, received: {}, inventory: null, generation: jt });

  if (Tt.size) {
    ss().catch(() => {});
    ma().catch(() => {});
  }
});
function mo(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const pt = new la(50, 300 * 1000/* 1e3 */);
const Bb = 60 * 1000/* 1e3 */;
setInterval(() => pt.cleanup(), 120 * 1000/* 1e3 */);
function Hb(e) {
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
function nn(e) {
  const t = nf();

  const o = (e.attachments ?? []).map((p) => {
    if (p.type === "poll") {
      const d = p;

      const h = d.options.map(m => ({
        id: m.id,
        text: m.text,
        votes: m.votesCount ?? m.voteCount ?? m.votes ?? 0
      }));

      return {
        ...p,
        options: h,
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
    return p;
  });

  if (e.poll && !o.some(p => p.type === "poll")) {
    const e_poll = e.poll;

    const d = {
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

    o.push(d);
  }
  const r = e.stats?.reactions ?? e.likesCount ?? 0;
  const s = e.stats?.views ?? e.viewsCount ?? 0;
  const a = e.stats?.comments ?? e.commentsCount ?? 0;
  const c = e.stats?.reposts ?? e.repostsCount ?? 0;
  const l = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const u = e.viewerStatus?.isReposted ?? e.isReposted ?? false;
  const f = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: Hb(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: f,
    spans: e.spans ?? [],
    corrector: t ? rs.receive(e.id, e.corrector) : undefined,
    redPen: t ? ns.receive(e.id, e.redPen) : undefined,
    notebook:
      t && (e.notebook?.style === "grid" || e.notebook?.style === "ruled")
        ? { style: e.notebook.style }
        : undefined,
    attachments: o,
    reactions: { total: r, myReaction: l },
    stats: { views: s, comments: a, reposts: c },
    reposted: u,
    originalPost: e.originalPost ? nn(e.originalPost) : null,
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
      const r = `${U.posts.list}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(nn), nextCursor: mo(s.data) };
    },
    async getPost(e) {
      const t = await L.get(U.posts.single(e));
      return nn(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const o = pt.get(n);
        const r = o && o.pinnedPostId === (t.pinnedPostId ?? null);

        if (o && r && pt.isFresh(n, Bb)) {
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
      const n = pt.get(e);
      return !n || n.pinnedPostId !== (t ?? null)
        ? null
        : { data: n.posts, nextCursor: n.nextCursor };
    },
    async _fetchAndCacheWall(e, t, n) {
      const o = await this._fetchWall(e, t);

      pt.set(n, {
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
      const r = `${U.posts.byUser(e)}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(nn), nextCursor: mo(s.data) };
    },
    invalidateWallCache(e) {
      pt.delete(e);
    },
    invalidateAllWallCaches() {
      pt.clear();
    },
    updatePostInWallCache(e, t, n) {
      const o = pt.get(e);
      if (o) {
        const r = o.posts.map(s => s.id === t ? { ...s, ...n } : s);
        pt.set(e, { ...o, posts: r });
      }
    },
    removePostFromWallCache(e, t) {
      const n = pt.get(e);
      if (n) {
        const o = n.posts.filter(r => r.id !== t);
        pt.set(e, { ...n, posts: o });
      }
    },
    async likePost(e) {
      return await L.post(U.posts.like(e));
    },
    async unlikePost(e) {
      return await L.delete(U.posts.like(e));
    },
    async createPost(e) {
      return await L.post(U.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
        notebook: e.notebook,
      });
    },
    async createRepost(e, t) {
      const n = await L.post(U.posts.repost(e), { content: t });
      return nn(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await L.post(`${U.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await L.put(U.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await L.delete(U.posts.delete(e));
    },
    async restorePost(e) {
      await L.post(U.posts.restore(e));
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
      const r = `${U.posts.byUser(e)}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(nn), nextCursor: mo(s.data) };
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
      const r = `${U.posts.likedByUser(e)}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(nn), nextCursor: mo(s.data) };
    },
    async pinPost(e) {
      await L.post(U.posts.pin(e));
    },
    async unpinPost(e) {
      await L.delete(U.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await L.post(U.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await L.delete(U.posts.repost(e));
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
      const r = `${U.hashtags.posts(e)}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(nn), nextCursor: mo(s.data) };
    },
  };

const Vb = { new: "newest", old: "oldest", popular: "popular" };
function Wb(e) {
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
function Ri(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const o = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const r = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: Wb(e.author),
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
        ? (e.previewReplies ?? e.replies).map(Ri)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}
const Ct = {
  async getComments(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.sort) {
      n.set("sort", Vb[t.sort]);
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const o = n.toString();
    const r = `${U.posts.comments(e)}${o ? `?${o}` : ""}`;
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
    return { data: a.map(Ri), nextCursor: c };
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
    const r = `${U.comments.replies(e)}${o ? `?${o}` : ""}`;
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
    return { data: a.map(Ri), nextCursor: c };
  },
  async createComment(e, t, n, o, r) {
    return await L.post(U.posts.comments(e), {
      content: t,
      attachmentIds: r?.map(s => s.mediaId),
    });
  },
  async createReply(e, t, n, o, r) {
    return await L.post(U.comments.replies(e), {
      content: t,
      replyToUserId: o,
      attachmentIds: r?.map(s => s.mediaId),
    });
  },
  async editComment(e, t, n) {
    await L.patch(U.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await L.delete(U.comments.delete(e));
  },
  async likeComment(e) {
    await L.post(U.comments.like(e));
  },
  async unlikeComment(e) {
    await L.delete(U.comments.like(e));
  },
};
function Cr(e, t, n) {
  const o = e.originalPost ? Cr(e.originalPost, t, n) : e.originalPost;

  const r =
    e.author.id === t && e.author.avatar !== n
      ? { ...e.author, avatar: n }
      : e.author;

  return r !== e.author || o !== e.originalPost
    ? { ...e, author: r, originalPost: o }
    : e;
}

const ae = Qe((e, t) => ({
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
          error: xe(a) ? ta(a.code, a.message) : "Не удалось загрузить ленту",
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

      const { id: f } = await Ue.createPost({
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

      const d = {
        id: f,
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
        posts: [d, ...h.posts],
        highlightedPostId: f
      }));

      Ue.invalidateWallCache(n);
      try {
        const h = await Ue.getPost(f);
        e(m => ({
          posts: m.posts.map(_ => _.id === f ? h : _)
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
      const f = c.get(u.id);
      const p = u.originalPost ? l(u.originalPost) : u.originalPost;
      return !f && p === u.originalPost
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
            originalPost: p,
          };
    };

    e((u) => {
      const f = { ...u.postStatsCache };
      for (const p of n) {
        const d = f[p.id];

        if (d) {
          (f[p.id] = {
              ...d,
              likesTotal: a(p.id) ? d.likesTotal : p.likesCount,
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
        postStatsCache: f,
        _lastStatsBatch: n.map(p => a(p.id)
          ? { ...p, likesCount: f[p.id]?.likesTotal ?? p.likesCount }
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

      const f = r ? 0 : 1;

      const p = {
        ...l,
        options: u,
        totalVotes: (l.totalVotes ?? 0) + f,
        myVote: o,
      };

      const d = [...a.attachments];
      (d[c] = p);
      return { ...a, attachments: d };
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
          c && { ...c, posts: c.posts.map(l => Cr(l, n, o)) },
        ])
      );
      return {
        posts: r.posts.map(a => Cr(a, n, o)),
        currentPost: r.currentPost ? Cr(r.currentPost, n, o) : null,
        feedCache: s,
      };
    });
  },

  reset: () => {
    t().feedMeasuredHeights.clear();

    ie(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => Yb
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

const As = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: ae },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const kr = Qe()(
  Ld(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: ea(() => localStorage) }
  )
);

const at = new Map();
const jb = 60 * 1000/* 1e3 */;
const zb = 300 * 1000/* 1e3 */;
const ml = 20;
const gl = 500;
function qb() {
  const e = Date.now();
  for (const [t, n] of at.entries()) {
    if (e - n.timestamp > zb) {
      at.delete(t);
    }
  }
  if (at.size > ml) {
    const t = Array.from(at.entries()).sort(
      (o, r) => o[1].timestamp - r[1].timestamp
    );
    t.slice(0, t.length - ml).forEach(([o]) => at.delete(o));
  }
}

const rn = Qe((e, t) => ({
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
    const { usePostsStore: o } = await ie(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => As);
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
    qb();
    const s = kr.getState().commentsSort;
    const a = n;
    const c = at.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < jb) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        Ct.getComments(n, { limit: 100, sort: s })
          .then((f) => {
          const f_data = f.data;

          at.set(a, {
            comments: f_data,
            hasMore: f.nextCursor !== null,
            nextCursor: f.nextCursor,
            timestamp: Date.now(),
            sort: s,
          });

          e(d => d.comments.length > 0 && d.comments[0]?.postId === n
            ? {
                comments: f_data,
                commentsNextCursor: f.nextCursor,
                commentsHasMore: f.nextCursor !== null,
              }
            : d
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
      const u = await Ct.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      at.set(a, {
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
    const a = kr.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await Ct.getComments(n, {
        limit: 100,
        sort: a,
        cursor: s ?? undefined,
      });
      e((l) => {
        const u = [...l.comments, ...c.data];
        return {
          comments: u.length > gl ? u.slice(-gl) : u,
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
        const g = (o[_].previewReplies ?? []).findIndex(b => b.id === n);
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
    const f = l.reactions.total;
    const p = u !== null;
    const d = p ? Math.max(0, f - 1) : f + 1;
    const h = p ? null : "love";
    const m = [...o];
    if (s) {
      const _ = [...(m[a].previewReplies ?? [])];
      (_[c] = { ..._[c], reactions: { total: d, myReaction: h } });
      (m[a] = { ...m[a], previewReplies: _ });
    } else {
      m[r] = { ...m[r], reactions: { total: d, myReaction: h } };
    }
    e({ comments: m });
    try {
      if (p) {
        await Ct.unlikeComment(n);
      } else {
        await Ct.likeComment(n);
      }
    } catch (_) {
      console.error("Failed to toggle comment like:", _);
      const v = [...t().comments];
      if (s) {
        const g = v.findIndex(b => b.previewReplies?.some(y => y.id === n)
        );
        if (g !== -1) {
          const b = v[g].previewReplies.findIndex(y => y.id === n);
          if (b !== -1) {
            const y = [...v[g].previewReplies];
            (y[b] = { ...y[b], reactions: { total: f, myReaction: u } });
            (v[g] = { ...v[g], previewReplies: y });
          }
        }
      } else {
        const g = v.findIndex(b => b.id === n);

        if (g !== -1) {
          (v[g] = { ...v[g], reactions: { total: f, myReaction: u } });
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
          ? await Ct.createReply(s, o, r, c, a)
          : await Ct.createComment(n, o, r, undefined, a);

      const f = ge.getState().profile;
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

        const v = {
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
            comments: g.comments.map(b => b.id === s
              ? {
                  ...b,
                  previewReplies: [...(b.previewReplies || []), v],
                  stats: { ...b.stats, replies: b.stats.replies + 1 },
                }
              : b
            ),

            highlightedCommentId: u.id
          })
            : g => ({
            comments: [v, ...g.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: p } = await ie(async () => {
          const { usePostsStore: _ } = await Promise.resolve().then(() => As);
          return { usePostsStore: _ };
        }, undefined);

      const d = p.getState();

      if (d.currentPost &&
        d.currentPost.id === n) {
        p.setState({
          currentPost: {
            ...d.currentPost,
            stats: {
              ...d.currentPost.stats,
              comments: d.currentPost.stats.comments + 1,
            },
          },
        });
      }

      const h = kr.getState().commentsSort;
      const m = at.get(n);

      if (m) {
        at.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        at.set(n, {
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
        const s = await Ct.getReplies(n, { limit: 100 });
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
          previewReplies: u.previewReplies.map(f => f.id === n
            ? {
                ...f,
                text: o,
                spans: r ?? f.spans,
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
      await Ct.editComment(n, o, r);
    } catch (l) {
      console.error("Failed to edit comment:", l);
      e({ comments: c });
      throw l;
    }
  },

  deleteComment: async (n) => {
    const { comments: o } = t();

    const r = o.some(u => u.id === n);

    const s = o.find(u => u.previewReplies?.some(f => f.id === n));

    const a = o;

    if (r) {
      e({ comments: o.filter(u => u.id !== n) });
    } else if (s) {
      e({
        comments: o.map(u => u.id === s.id
          ? {
              ...u,
              previewReplies: u.previewReplies?.filter(f => f.id !== n),
              stats: { ...u.stats, replies: u.stats.replies - 1 },
            }
          : u
        ),
      });
    }

    const { usePostsStore: c } = await ie(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => As);
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
      await Ct.deleteComment(n);
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
    at.clear();

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

const Yb = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: rn },
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

const Gb = 0;
const Kb = 1;
const Xb = 2;
const Qb = 3;
const _l = 4;
const Zb = 5;
const Jb = 250;
const e1 = 0.5;
const t1 = 30000/* 3e4 */;
const n1 = 2000/* 2e3 */;
const o1 = 20;
const vl = "dwell_sid";

const r1 = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function s1() {
  try {
    let e = sessionStorage.getItem(vl);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(vl, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function i1(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= e1 ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class a1 {
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
    (this.sessionId = s1());

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
        { threshold: r1 }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const o of n) {
      window.addEventListener(o, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const o = document.hidden ? Xb : null;
      this.evaluateAll(o);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(Kb);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(Qb);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), n1);
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
        this.evaluate(c, _l);
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
      this.evaluate(o, _l);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < t1 && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const r = !!t_lastEntry && i1(t_lastEntry);
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

      if (u < Jb) {
        return;
      }

      const f = n ?? (r ? Zb : Gb);
      const p = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const d = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, $: c, r: f, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (d) {
        (h.s = Fr[t.source]);
      }

      if (p) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, Fr[t.source]);
    }
  }
  enqueue(t, n, o) {
    this.buffer.push(t);

    if (this.buffer.length >= o1) {
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
    L.post(U.posts.dwellLog, o, { headers: r }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    L.post(
      U.posts.dwellLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const yl = new a1();
function c1(e, t, n, o = "", r = undefined) {
  D(() => {
    const t_current = t.current;
    if (!(!t_current || !r)) {
      yl.observe(t_current, e, n, o, r);

      return () => {
        yl.unobserve(t_current);
      };
    }
  }, [e, t, n, o, r]);
}
function ga(e) {
  const t = ae(n => n.postStatsCache[e.id]);
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
const lf = "shop-cart";
function wl() {
  try {
    const e = localStorage.getItem(lf);
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
function uf() {
  const [e, t] = A(wl);

  D(() => {
    const n = (o) => {
      if (o.key === null || o.key === lf) {
        t(wl());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}

const l1 = le(() => ie(() => import("./index-CLMQ9LQi.js"), __vite__mapDeps([8, 9])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const u1 = le(() => ie(
  () => import("./index-8ixBUN-Y.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const df = ({
  href: e,
  icon: t,
  children: n,
  badge: o,
  onActiveClick: r,
  isActive: s = false,
}) => {
  const [a] = Zr();
  const c = a.url || "/";
  const u = c === e || c.startsWith(`${e}/`) || s;
  return i("a", {
    href: e,
    className: `${Ve.navItem} ${u ? Ve.active : ""}`,
    onClick: (f) => {
      if (u && r) {
        f.preventDefault();
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

const pr = e => i(df, { ...e });

const d1 = () => {
  const e = Yo();
  const [t] = Zr();

  const n = ae(E => E.fetchFeed);

  const o = ae(E => E.isRefreshing);

  const r = ge(E => E.logout);

  const s = ts();
  const a = pa();
  const c = Jd();
  const l = uf();
  const { initialize: u, disconnectSSE: f } = sn();
  const [p, d] = A(false);
  const [h, m] = A(false);
  const _ = Ud();

  const v = Jr(E => E.fetchPortal);

  const g = Fd(_);
  const b = !g && _.active && !!_.url;
  const y = g ? ue.ALICE_EVENT : b ? _.url : ue.EVENT;
  const k = (t.url || "/").startsWith(ue.EVENT);
  const S = a?.username ? `/@${a.username}` : "/profile";

  D(
    () => {
      if (s) {
        u();
      }

      return () => {
        f();
      };
    },
    [s, u, f]
  );

  D(() => {
    v();
  }, [v]);

  const C = I(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      n(true);
    }
  }, [n]);

  const w = I(() => {
    r();
  }, [r]);

  const T = Te(() => {
    const E = t.url || "/";
    return ca.some(P => E.startsWith(P));
  }, [t.url]);

  const N = Te(() => {
    const E = t.url || "/";
    return a?.username
      ? E === `/@${a.username}` || E.startsWith(`/@${a.username}/`)
      : false;
  }, [t.url, a?.username]);

  return T
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
                  i(Ky, {}),
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
                    icon: o ? i(ra, {}) : i(zd, {}),
                    onActiveClick: C,
                    children: "Лента",
                  }),
                  i(pr, {
                    href: "/search",
                    icon: i(Kd, {}),
                    children: "Поиск",
                  }),
                  i(pr, {
                    href: "/shop",
                    icon: i(Xd, {}),
                    badge: l,
                    children: "Магаз",
                  }),
                  ((_.active && _.url) || e.status === "allowed") &&
                    i("a", {
                      href: y,
                      target: b ? "_blank" : undefined,
                      rel: b ? "noopener noreferrer" : undefined,
                      className: `${Ve.portalButton} ${
                        _.active ? Ve.portalActive : ""
                      } ${k ? Ve.active : ""}`,
                      title: "Ивент",
                      children: [
                        i("img", {
                          src: _.active
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
                    icon: i(sa, {}),
                    badge: c,
                    children: "Уведомления",
                  }),
                  i(df, {
                    href: S,
                    icon: i(wi, {}),
                    isActive: N,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: Ve.asideBottom,
            children: s
              ? i(ye, {
                  children: [
                    !a?.subscription?.isActive &&
                      i("button", {
                        className: Ve.logoutButton,
                        onClick: () => m(true),
                        children: [
                          i("span", { children: "⭐" }),
                          i("span", { children: "ИТД НУКСТА" }),
                        ],
                      }),
                    i("button", {
                      className: Ve.logoutButton,
                      onClick: w,
                      children: [
                        i(Qy, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: Ve.logoutButton,
                  href: ue.LOGIN,
                  children: [
                    i(wi, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          p &&
            i(De, {
              fallback: null,
              children: i(l1, { isOpen: p, onClose: () => d(false) }),
            }),
          h &&
            i(De, {
              fallback: null,
              children: i(u1, { isOpen: h, onClose: () => m(false) }),
            }),
        ],
      });
};

const f1 = "h4YQ";
const p1 = "tiL6";
const h1 = "ZnUv";
const m1 = "Kfkp";
const go = { sidebar: f1, sidebarContent: p1, sidebarBottom: h1, legalLinks: m1 };

const g1 = () => {
  const [e] = Zr();
  return Te(() => {
    const n = e.url || "/";
    return ca.some(o => n.startsWith(o));
  }, [e.url])
    ? null
    : i("aside", {
        className: go.sidebar,
        children: [
          i("div", { className: go.sidebarContent }),
          i("div", {
            className: go.sidebarBottom,
            children: [
              i("ul", {
                className: go.legalLinks,
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
                className: go.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const _1 = "fJ2w";
const v1 = "sBNy";
const y1 = "x7IK";
const w1 = "IDXl";
const E1 = "nDjo";
const b1 = "wjbL";
const S1 = "qXIa";
const C1 = "zyJp";
const k1 = "DB3E";
const N1 = "rIA4";
const T1 = "eEPM";
const I1 = "ger5";

const Ge = {
  mobileNavigationWrapper: _1,
  navigation: v1,
  indicator: y1,
  indicatorHidden: w1,
  navItem: E1,
  label: b1,
  active: S1,
  createButton: C1,
  iconWrapper: k1,
  portalImage: N1,
  portalImageActive: T1,
  badge: I1,
};

const El = e => Symbol.iterator in e;

const bl = e => "entries" in e;

const Sl = (e, t) => {
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

const R1 = (e, t) => {
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

function A1(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : El(e) && El(t)
    ? bl(e) && bl(t)
      ? Sl(e, t)
      : R1(e, t)
    : Sl(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Cl(e) {
  const t = bo.useRef(undefined);
  return (n) => {
    const o = e(n);
    return A1(t.current, o) ? t.current : (t.current = o);
  };
}
const P1 = "BewY";
const L1 = "mbwy";
const O1 = "qrxu";
const $1 = "n1IA";
const x1 = "pyAo";
const M1 = "ZGu7";
const D1 = "wmcZ";
const U1 = "fSnW";
const F1 = "KstP";
const B1 = "jtnU";
const H1 = "AxwB";
const V1 = "cp1L";
const W1 = "DY8r";
const j1 = "aluV";
const z1 = "dB1X";
const q1 = "qso5";
const Y1 = "q7JU";
const G1 = "IAHy";
const K1 = "MZj8";
const X1 = "S02Y";
const Q1 = "obDx";
const Z1 = "nHCT";
const J1 = "FkBI";

const re = {
  skeleton: P1,
  comment: L1,
  content: O1,
  header: $1,
  headerLeft: x1,
  body: M1,
  actions: D1,
  likeBtn: U1,
  shimmer: F1,
  avatar: B1,
  more: H1,
  likeIcon: V1,
  name: W1,
  time: j1,
  line: z1,
  w100: q1,
  w85: Y1,
  w65: G1,
  w50: K1,
  w40: X1,
  replyLabel: Q1,
  likeCount: Z1,
  list: J1,
};

function eS(e) {
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
function _a({ variant: e = "medium", delayMs: t = 0 }) {
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
            eS(e),
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
const kl = ["medium", "short", "long", "medium", "short"];
function tS({ count: e = 4 }) {
  return i("div", {
    className: re.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(_a, { variant: kl[n % kl.length], delayMs: n * 120 }, n)
    ),
  });
}

const Vt = {
    MAX_CHARS: 1000/* 1e3 */,
    MIN_POLL_OPTIONS: 2,
    MAX_POLL_OPTIONS: 10,
    MAX_POLL_QUESTION_LENGTH: 200,
    MAX_POLL_OPTION_LENGTH: 100,
    MAX_TEXTAREA_HEIGHT: 400,
  };

const Ps = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function nS() {
  const [e, t] = A(false);
  const [n, o] = A(Ps);

  const r = I((m) => {
    if (m.length <= Vt.MAX_POLL_QUESTION_LENGTH) {
      o(_ => ({
        ..._,
        question: m
      }));
    }
  }, []);

  const s = I((m, _) => {
    if (_.length <= Vt.MAX_POLL_OPTION_LENGTH) {
      o(v => ({
        ...v,
        options: v.options.map(g => g.id === m ? { ...g, text: _ } : g)
      }));
    }
  }, []);

  const a = I(() => {
    if (n.options.length < Vt.MAX_POLL_OPTIONS) {
      o(m => ({
        ...m,
        options: [...m.options, { id: Date.now().toString(), text: "" }]
      }));
    }
  }, [n.options.length]);

  const c = I(
    (m) => {
      if (n.options.length > Vt.MIN_POLL_OPTIONS) {
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
    o(Ps);
  }, []);

  const f = I(() => {
    t(m => !m);
  }, []);

  const p = I(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const _ = n.options.filter(v => v.text.trim().length > 0);

    return m && _.length >= Vt.MIN_POLL_OPTIONS;
  }, [e, n]);

  const d = I(() => {
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
    o(Ps);
  }, []);

  return {
    isPollOpen: e,
    poll: n,
    togglePoll: f,
    handlePollQuestionChange: r,
    handlePollOptionChange: s,
    handleAddPollOption: a,
    handleRemovePollOption: c,
    handleMultipleChoiceToggle: l,
    handleClosePoll: u,
    isPollValid: p,
    getPollData: d,
    resetPoll: h,
  };
}
function ff(e = 10, t = false) {
  const [n, o] = A([]);
  const [r, s] = A([]);
  const a = O(null);
  const c = O(n);
  const l = O(r);
  (c.current = n);
  (l.current = r);

  D(
    () => () => {
      c.current.forEach(y => URL.revokeObjectURL(y.previewUrl));

      l.current.forEach(y => URL.revokeObjectURL(y.previewUrl));
    },
    []
  );

  const u = r.length > 0;

  const f = n.some(y => y.type === "video") || r.some(y => y.type === "video");

  const p = n.some(y => y.type === "image") || r.some(y => y.type === "image");

  const d = I(() => {
    a.current?.click();
  }, []);

  const h = I(
    async (y) => {
      const k = qn.isValidVideoType(y);
      const S = qn.isValidImageType(y);
      if (k && !t) {
        mt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!S && !k) {
        mt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const T =
        c_current.some($ => $.type === "video") ||
        l_current.some($ => $.type === "video");

      const N =
        c_current.some($ => $.type === "image") ||
        l_current.some($ => $.type === "image");

      if (k && N) {
        mt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (S && T) {
        mt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (k && T) {
        mt.error("Можно загрузить только 1 видео");
        return;
      }
      const E = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const P = URL.createObjectURL(y);
      const R = k ? "video" : "image";
      s($ => [
        ...$,
        { id: E, file: y, previewUrl: P, progress: 0, type: R },
      ]);
      try {
        const $ = await qn.uploadMedia(y);

        s(Y => Y.filter(F => F.id !== E));

        o(Y => [
          ...Y,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: $.id,
            url: $.url,
            previewUrl: P,
            type: R,
          },
        ]);
      } catch ($) {
        let Y = "Ошибка загрузки";

        if (xe($)) {
          (Y = ta($.code, $.message));
        } else if ($ instanceof Error) {
          (Y = $.message);
        }

        mt.error(Y);

        s(F => F.filter(X => X.id !== E));

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
      const C = n.length + r.length;
      const w = e - C;
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
      const S = k.find(C => C.id === y);

      if (S) {
        URL.revokeObjectURL(S.previewUrl);
      }

      return k.filter(C => C.id !== y);
    });

    s((k) => {
      const S = k.find(C => C.id === y);

      if (S) {
        URL.revokeObjectURL(S.previewUrl);
      }

      return k.filter(C => C.id !== y);
    });
  }, []);

  const v = I(
    (y) => {
      const k = y.filter(w => t ? qn.isValidMediaType(w) : qn.isValidImageType(w)
      );
      if (k.length === 0) {
        return;
      }
      const S = c.current.length + l.current.length;
      const C = e - S;

      if (C > 0) {
        k.slice(0, C).forEach(h);
      }
    },
    [e, h, t]
  );

  const g = I(
    async (y) => {
      const [k, S] = y.split(",");
      const C = k.match(/:(.*?);/)?.[1] || "image/png";
      const w = atob(S);
      const T = new Uint8Array(w.length);
      for (let P = 0; P < w.length; P++) {
        T[P] = w.charCodeAt(P);
      }
      const N = new Blob([T], { type: C });
      const E = new File([N], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(E);
    },
    [h]
  );

  const b = I(() => {
    n.forEach(y => URL.revokeObjectURL(y.previewUrl));

    r.forEach(y => URL.revokeObjectURL(y.previewUrl));

    o([]);
    s([]);
  }, [n, r]);

  return {
    images: n,
    uploadingImages: r,
    isUploading: u,
    hasVideo: f,
    hasImages: p,
    openFilePicker: d,
    removeImage: _,
    addImage: g,
    uploadFiles: v,
    clearAll: b,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const oS = "ZT6S";
const rS = "zLCU";
const sS = "tlAa";
const iS = "FoMs";
const aS = "N82I";
const cS = "JjBg";
const lS = "NWm3";
const uS = "uxS7";
const dS = "Pid6";
const fS = "p3En";
const pS = "atbn";
const hS = "WByH";
const mS = "oSNp";
const gS = "yL1x";
const _S = "z02g";
const vS = "P1lC";
const yS = "F5xq";
const wS = "vHpm";
const ES = "GxXL";
const bS = "iAag";
const SS = "J8TS";
const CS = "NLyv";
const kS = "TbL4";
const NS = "SRLh";
const TS = "D00W";
const IS = "NePD";
const RS = "WjDM";
const AS = "NJHO";
const PS = "JtBp";
const LS = "GMqZ";
const OS = "Kacc";
const $S = "i2Ws";
const xS = "AzvH";
const MS = "UEy6";
const DS = "Zec8";
const US = "gOql";
const FS = "kYFP";
const BS = "GOYA";
const HS = "dotO";
const VS = "XqTb";
const WS = "AHTF";
const jS = "WLUa";
const zS = "PqkN";
const qS = "QV7s";
const YS = "gNWT";
const GS = "lBiD";
const KS = "hzdP";
const XS = "ZWbq";
const QS = "WZhj";
const ZS = "mJ2E";
const JS = "rwir";

const j = {
  form: oS,
  notebookGrid: rS,
  notebookRuled: sS,
  editor: iS,
  mediaButton: aS,
  dragActive: cS,
  whatsNew: lS,
  dragOverlay: uS,
  attachments: dS,
  attachmentPreview: fS,
  uploading: pS,
  uploadError: hS,
  videoPreviewWrapper: mS,
  videoPlayIcon: gS,
  uploadOverlay: _S,
  spinner: vS,
  errorOverlay: yS,
  errorText: wS,
  removeAttachment: ES,
  actions: bS,
  mediaButtons: SS,
  submitGroup: CS,
  charCount: kS,
  error: NS,
  pollContainer: TS,
  pollHeader: IS,
  pollTitle: RS,
  pollClose: AS,
  pollQuestion: PS,
  pollOptions: LS,
  pollOptionRow: OS,
  pollOption: $S,
  removeOption: xS,
  addOption: MS,
  pollFooter: DS,
  pollToggle: US,
  active: FS,
  notebookLabel: BS,
  notebookPicker: HS,
  notebookPickerHeader: VS,
  notebookOptions: WS,
  notebookOptionRow: jS,
  notebookOption: zS,
  notebookOptionActive: qS,
  gridSwatch: YS,
  ruledSwatch: GS,
  notebookBuy: KS,
  notebookUnavailable: XS,
  notebookButton: QS,
  notebookIcon: ZS,
  submitError: JS,
};

function Nl({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: j.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: j.videoPlayIcon,
            children: i(zy, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function pf({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: j.attachments,
        children: [
          e.map(r => i(
            "div",
            {
              className: j.attachmentPreview,
              children: [
                i(Nl, { src: r.previewUrl, type: r.type }),
                i("button", {
                  className: j.removeAttachment,
                  onClick: () => n(r.id),
                  children: i(ut, {}),
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
                i(Nl, { src: r.previewUrl, type: r.type }),
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
                  children: i(ut, {}),
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
function eC({
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
            children: i(ut, {}),
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
              e.options.length > Vt.MIN_POLL_OPTIONS &&
                i("button", {
                  className: j.removeOption,
                  onClick: () => r(c.id),
                  children: i(ut, {}),
                }),
            ],
          },
          c.id
        )
        ),
      }),
      e.options.length < Vt.MAX_POLL_OPTIONS &&
        i("button", {
          className: j.addOption,
          onClick: o,
          children: [i(ia, {}), i("span", { children: "Добавить вариант" })],
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
const tC = "vEzC";
const nC = "xHyf";
const oC = "SExq";
const rC = "e31H";
const sC = "UUrO";
const iC = "dw2w";
const aC = "KQH4";
const cC = "Q4Mu";
const lC = "SCyy";
const uC = "PZXq";
const dC = "IbnE";
const fC = "eA3x";
const pC = "w1VO";
const hC = "GtZo";
const mC = "VqVC";
const gC = "pEgJ";

const qe = {
  editor: tC,
  empty: nC,
  bold: oC,
  italic: rC,
  underline: sC,
  strike: iC,
  spoiler: aC,
  monospace: cC,
  quote: lC,
  link: uC,
  menu: dC,
  buttons: fC,
  button: pC,
  linkForm: hC,
  linkInput: mC,
  linkSubmit: gC,
};

const Br = {
  bold: qe.bold,
  italic: qe.italic,
  underline: qe.underline,
  strike: qe.strike,
  spoiler: qe.spoiler,
  monospace: qe.monospace,
  quote: qe.quote,
  link: qe.link,
};

function Ls(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function _C(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function vC(e) {
  return e !== "mention" && e !== "hashtag";
}
function Tl(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const o of t) {
    if (!vC(o.type)) {
      continue;
    }
    const r = Br[o.type];
    const s = o.type === "link" ? ` data-url="${_C(o.url)}"` : "";
    n = `<span class="${r}"${s}>${n}</span>`;
  }
  return n;
}
function yC(e, t, n) {
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
function wC(e, t) {
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
function EC(e) {
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
      for (const [u, f] of Object.entries(Br)) {
        if (s.classList.contains(f)) {
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
function bC(e, t) {
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
function SC(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const CC = [
    { type: "bold", icon: Dy, title: "Жирный" },
    { type: "italic", icon: Fy, title: "Курсив" },
    { type: "underline", icon: Wy, title: "Подчёркнутый" },
    { type: "strike", icon: Vy, title: "Зачёркнутый" },
    { type: "spoiler", icon: Hy, title: "Спойлер" },
    { type: "monospace", icon: Uy, title: "Моноширинный" },
    { type: "quote", icon: By, title: "Цитата" },
    { type: "link", icon: Hd, title: "Ссылка" },
  ];

const is = Ed((
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
    onSubmit: f,
    disableFormatting: p = false,
    onImagePaste: d,
  },
  h
) => {
  const m = O(null);
  const [_, v] = A(false);
  const [g, b] = A({ x: 0, y: 0 });
  const [y, k] = A(false);
  const [S, C] = A("");
  const w = O(null);
  const T = O(null);
  const N = O(null);
  const E = O(false);
  const P = O(false);
  const R = O(t);
  const $ = O(n);
  const Y = O(o);

  D(() => {
    (R.current = t);
    ($.current = n);
    (Y.current = o);
  }, [t, n, o]);

  Ki(
    h,
    () => ({
      insertText: (x) => {
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
          const de = Z.getRangeAt(0);
          fe = yC(m_current, de.startContainer, de.startOffset);
        }
        const R_current = R.current;
        const $_current = $.current;
        const me = R_current.slice(0, fe) + x + R_current.slice(fe);

        const Ie = $_current.map(de => de.offset >= fe
          ? { ...de, offset: de.offset + x.length }
          : de.offset + de.length > fe
          ? { ...de, length: de.length + x.length }
          : de
        );

        (P.current = true);
        (R.current = me);
        ($.current = Ie);
        const Se = document.createTextNode(x);
        if (Z.rangeCount > 0) {
          const de = Z.getRangeAt(0);
          de.deleteContents();
          de.insertNode(Se);
          de.setStartAfter(Se);
          de.setEndAfter(Se);
          Z.removeAllRanges();
          Z.addRange(de);
        }
        Y.current(me, Ie);
      },

      focus: () => {
        m.current?.focus();
      }
    }),
    []
  );

  const F = I(() => {
    if (!t) {
      return "";
    }
    if (n.length === 0) {
      return Ls(t);
    }

    const x = [...n].sort((te, me) => te.offset - me.offset);

    const V = [];
    for (const te of x) {
      V.push({ pos: te.offset, type: "start", span: te });
      V.push({ pos: te.offset + te.length, type: "end", span: te });
    }
    V.sort((te, me) => te.pos !== me.pos
      ? te.pos - me.pos
      : te.type !== me.type
      ? te.type === "end"
        ? -1
        : 1
      : 0
    );
    let Z = "";
    let fe = 0;
    const J = [];
    for (const te of V) {
      if (te.pos > fe) {
        const me = t.substring(fe, te.pos);
        (Z += Tl(Ls(me), J));
        (fe = te.pos);
      }
      if (te.type === "start") {
        J.push(te.span);
      } else {
        const me = J.indexOf(te.span);

        if (me !== -1) {
          J.splice(me, 1);
        }
      }
    }
    if (fe < t.length) {
      const te = t.substring(fe);
      Z += Tl(Ls(te), J);
    }
    return Z || "<br>";
  }, [t, n]);

  D(() => {
    if (P.current) {
      P.current = false;
      return;
    }
    const m_current = m.current;
    if (!m_current || (document.activeElement === m_current && t !== "")) {
      return;
    }
    const V = F();

    if (m_current.innerHTML !== V) {
      (m_current.innerHTML = V);
    }
  }, [F, t]);

  D(() => {
    if (a && m.current) {
      const m_current = m.current;
      m_current.focus();

      if (m_current.childNodes.length > 0) {
        const V = window.getSelection();
        if (V) {
          const Z = document.createRange();
          Z.selectNodeContents(m_current);
          Z.collapse(false);
          V.removeAllRanges();
          V.addRange(Z);
        }
      }
    }
  }, [a]);

  D(() => {
    if (y && T.current) {
      T.current.focus();
    }
  }, [y]);

  const X = I(
      (x) => {
        if (E.current) {
          return;
        }
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        if (x?.data === " ") {
          const J = window.getSelection();
          if (J && J.rangeCount > 0) {
            const me = J.getRangeAt(0).startContainer;
            let Ie = null;
            let Se = me;

            while (Se && Se !== m_current) {
              if (Se.nodeType === Node.ELEMENT_NODE) {
                const de = Se;
                if (de.tagName === "SPAN" && de.className) {
                  Ie = de;
                  break;
                }
              }
              Se = Se.parentNode;
            }

            if (Ie) {
              const de = Ie.textContent || "";
              if (de.endsWith(" ")) {
                Ie.textContent = de.slice(0, -1);
                const dt = document.createTextNode(" ");
                Ie.parentNode?.insertBefore(dt, Ie.nextSibling);
                const bt = document.createRange();
                bt.setStartAfter(dt);
                bt.setEndAfter(dt);
                J.removeAllRanges();
                J.addRange(bt);
              }
            }
          }
        }
        const Z = m_current.innerText.replace(/\n$/, "");
        if (Z.length > s) {
          const J = Z.substring(0, s);
          (P.current = true);
          o(J, wC(n, J));
          return;
        }
        const fe = EC(m_current);
        (P.current = true);
        o(Z, fe);
      },
      [s, o, n]
    );

  const K = I(
    (x) => {
      if (p) {
        return;
      }
      const V = window.getSelection();
      if (!V || V.isCollapsed) {
        return;
      }
      x.preventDefault();
      (N.current = V.getRangeAt(0).cloneRange());

      const Z = Math.max(
          10,
          Math.min(x.clientX - 150, window.innerWidth - 310)
        );

      const fe = Math.max(10, x.clientY - 50);
      b({ x: Z, y: fe });
      v(true);
    },
    [p]
  );

  const se = I(
    (x) => {
      x.preventDefault();

      if (d && x.clipboardData?.files?.length) {
        const te = Array.from(x.clipboardData.files).filter(me => me.type.startsWith("image/")
        );
        if (te.length > 0) {
          d(te);
          return;
        }
      }

      const V = x.clipboardData?.getData("text/plain") || "";
      if (!V) {
        return;
      }
      const Z = window.getSelection();
      if (!Z || !Z.rangeCount) {
        return;
      }
      const fe = Z.getRangeAt(0);
      fe.deleteContents();
      const J = document.createTextNode(V);
      fe.insertNode(J);
      fe.setStartAfter(J);
      fe.setEndAfter(J);
      Z.removeAllRanges();
      Z.addRange(fe);
      X();
    },
    [X, d]
  );

  const W = I(() => {
    const m_current = m.current;
    if (m_current && !R.current) {
      const V = window.getSelection();
      if (V) {
        const Z = document.createRange();
        Z.setStart(m_current, 0);
        Z.collapse(true);
        V.removeAllRanges();
        V.addRange(Z);
      }
    }
  }, []);

  const ee = I(
    (x) => {
      if (x.key === "Enter" && !x.shiftKey && f) {
        x.preventDefault();
        f();
        return;
      }
      if (!p && (x.ctrlKey || x.metaKey)) {
        let V = null;
        switch (x.key.toLowerCase()) {
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
          x.preventDefault();
          ce(V);
        }
      }
    },
    [f, p]
  );

  const ce = I(
    (x, V) => {
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
      const J = fe.getRangeAt(0);
      const te = document.createElement("span");
      (te.className = Br[x]);

      if (x === "link" && V) {
        (te.dataset.url = V);
      }

      const me = bC(J.commonAncestorContainer, Br[x]);
      if (me) {
        SC(me);
      } else {
        try {
          J.surroundContents(te);
        } catch {
          const Ie = J.extractContents();
          te.appendChild(Ie);
          J.insertNode(te);
        }
      }
      X();
      v(false);
      k(false);
      C("");
      (N.current = null);
      m_current.focus();
    },
    [X]
  );

  const q = I(
    (x) => {
      if (x === "link") {
        k(true);
      } else {
        ce(x);
      }
    },
    [ce]
  );

  const _e = I(
    (x) => {
      x.preventDefault();

      if (S.trim()) {
        ce("link", S.trim());
      }
    },
    [ce, S]
  );

  D(() => {
    if (!_) {
      return;
    }

    const x = (Z) => {
      if (w.current &&
        !w.current.contains(Z.target)) {
        v(false);
        k(false);
        C("");
        (N.current = null);
      }
    };

    const V = () => {
      v(false);
      k(false);
      C("");
      (N.current = null);
    };

    document.addEventListener("mousedown", x);
    window.addEventListener("scroll", V, true);

    return () => {
      document.removeEventListener("mousedown", x);
      window.removeEventListener("scroll", V, true);
    };
  }, [_]);
  const Q = !t;
  return i(ye, {
    children: [
      i("div", {
        ref: m,
        className: `${qe.editor} ${c} ${Q ? qe.empty : ""}`,
        contentEditable: true,
        "data-placeholder": r,
        onInput: x => X(x),
        onFocus: W,
        onPaste: se,
        onContextMenu: K,
        onKeyDown: ee,
        onCompositionStart: () => {
          E.current = true;
        },
        onCompositionEnd: () => {
          (E.current = false);
          X();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      _ &&
        $(
          i("div", {
            ref: w,
            className: qe.menu,
            style: { left: g.x, top: g.y },
            children: y
              ? i("form", {
                  className: qe.linkForm,
                  onSubmit: _e,
                  children: [
                    i("input", {
                      ref: T,
                      type: "url",
                      className: qe.linkInput,
                      placeholder: "https://...",
                      value: S,
                      onInput: x => C(x.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: qe.linkSubmit,
                      disabled: !S.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: qe.buttons,
                  children: CC.map(({ type: x, icon: V, title: Z }) => i(
                    "button",
                    {
                      type: "button",
                      className: qe.button,
                      onClick: () => q(x),
                      title: Z,
                      children: i(V, { size: 16 }),
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

const kC = "VkjV";
const NC = "DZRk";
const TC = "z8On";
const IC = "A2NF";
const RC = "KFqr";
const AC = "UFt9";
const PC = "zdgU";
const LC = "aTXK";
const OC = "P2eb";
const $C = "YoJY";
const xC = "okpI";
const MC = "V0Wl";
const DC = "fWyc";
const UC = "Oxv3";
const FC = "Y5tP";
const BC = "VekA";
const HC = "fJzi";
const VC = "fCYE";
const WC = "loMj";
const jC = "sstH";
const zC = "H8Ju";

const Ae = {
  commentInput: kC,
  replyMode: NC,
  inputRow: TC,
  attachmentStrip: IC,
  circleButton: RC,
  micButton: AC,
  sendButton: PC,
  submitting: LC,
  textareaContainer: OC,
  expanded: $C,
  voiceMode: xC,
  inputWrapper: MC,
  commentCharCount: DC,
  error: UC,
  input: FC,
  replyHeader: BC,
  replyText: HC,
  replyName: VC,
  replyClose: WC,
  dragActive: jC,
  dragOverlay: zC,
};

const qC = "bEw7";
const YC = "peKV";
const GC = "Lz0E";
const Os = { textInput: qC, entering: YC, sendButton: GC };
const KC = 1000/* 1e3 */;
function XC({
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
  const f = KC - e.length;
  const p = f < 0;
  const d = [Os.textInput, s ? Os.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: d,
    children: [
      i("div", {
        className: Ae.inputWrapper,
        children: [
          i(is, {
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
              children: f,
            }),
        ],
      }),
      i("button", {
        className: `${Ae.circleButton} ${Ae.sendButton} ${Os.sendButton} ${
          c ? Ae.submitting : ""
        }`,
        onClick: r,
        disabled: c || l || p,
        children: c ? i(ef, { size: "xs" }) : i(qy, { size: 20 }),
      }),
    ],
  });
}
const QC = le(() => ie(
  () => import("./VoiceInput-Ddy6e0qp.js"),
  __vite__mapDeps([10, 11, 12])
).then(e => ({
  default: e.VoiceInput
}))
);
function hf({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: o,
  onCancelReply: r,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = es();
  const [f, p] = A("text");
  const [d, h] = A(false);
  const [m, _] = A(false);
  const [v, g] = A(false);
  const [b, y] = A(false);
  const k = O(false);
  const S = O(null);
  const C = O(0);

  const {
    images: w,
    uploadingImages: T,
    isUploading: N,
    openFilePicker: E,
    removeImage: P,
    uploadFiles: R,
    clearAll: $,
    fileInputRef: Y,
    handleFileChange: F,
  } = ff(4);

  D(
    () => () => {
      if (S.current) {
        clearTimeout(S.current);
      }
    },
    []
  );
  const X = w.length > 0 || T.length > 0;
  const K = a.length > 0 || v || X;
  const se = f === "voice";
  const W = 1000/* 1e3 */;

  const ee = async () => {
    const J = a.trim().length > 0;
    const te = w.length > 0;
    if ((!J && !te) || v || N || a.length > W) {
      return;
    }
    const me = a.trim();
    const Ie = [...c];

    const Se = w.map(de => ({
      mediaId: de.mediaId
    }));

    g(true);
    try {
      await e(me, Ie, Se.length > 0 ? Se : undefined);
      u();
      $();
    } catch (de) {
      console.error("Failed to submit comment:", de);
    } finally {
      g(false);
    }
  };

  const ce = () => {
    (k.current = true);
    p("voice");
    _(false);
  };

  const q = () => {
    h(true);
  };

  const _e = () => {
    h(false);
    p("text");
    _(true);

    if (S.current) {
      clearTimeout(S.current);
    }

    (S.current = window.setTimeout(() => {
      (S.current = null);
      _(false);
    }, 300));
  };

  const Q = I((J) => {
    J.preventDefault();
    J.stopPropagation();
    C.current++;

    if (J.dataTransfer?.types.includes("Files")) {
      y(true);
    }
  }, []);

  const x = I((J) => {
    J.preventDefault();
    J.stopPropagation();
  }, []);

  const V = I((J) => {
    J.preventDefault();
    J.stopPropagation();
    C.current--;

    if (C.current === 0) {
      y(false);
    }
  }, []);

  const Z = I(
    (J) => {
      J.preventDefault();
      J.stopPropagation();
      (C.current = 0);
      y(false);
      const te = J.dataTransfer?.files;

      if (te && te.length > 0) {
        R(Array.from(te));
      }
    },
    [R]
  );

  const fe = [
    Ae.commentInput,
    K ? Ae.expanded : "",
    se ? Ae.voiceMode : "",
    o ? Ae.replyMode : "",
    b ? Ae.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return i("div", {
    className: fe,
    onDragEnter: Q,
    onDragOver: x,
    onDragLeave: V,
    onDrop: Z,
    children: [
      b &&
        i("div", {
          className: Ae.dragOverlay,
          children: [
            i(Yd, { size: 24 }),
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
              children: i(ut, { size: 16 }),
            }),
          ],
        }),
      !se &&
        !d &&
        X &&
        i("div", {
          className: Ae.attachmentStrip,
          children: i(pf, { images: w, uploadingImages: T, onRemove: P }),
        }),
      i("div", {
        className: Ae.inputRow,
        children: [
          i("button", {
            className: Ae.circleButton,
            onClick: se ? q : E,
            children: se ? i(ut, { size: 20 }) : i(Vd, { size: 20 }),
          }),
          i("div", {
            className: Ae.textareaContainer,
            children:
              se || d
                ? i(De, {
                    fallback: null,
                    children: i(QC, {
                      onCancel: q,
                      onSend: t,
                      isExiting: d,
                      onExitComplete: _e,
                    }),
                  })
                : i(XC, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: ee,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: v,
                    sendDisabled: N,
                    onImagePaste: R,
                  }),
          }),
          !se &&
            !d &&
            i("button", {
              className: `${Ae.circleButton} ${Ae.micButton}`,
              onClick: ce,
              children: i(jy, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: Y,
        type: "file",
        accept: Si,
        multiple: true,
        onChange: F,
        style: { display: "none" },
      }),
    ],
  });
}
const ZC = "ZVPT";
const JC = "OAVJ";
const ek = "TKT1";
const tk = "znVh";
const nk = "EG3O";
const ok = "EHtD";
const rk = "yTOn";

const gn = {
  counter: ZC,
  digit: JC,
  prev: ek,
  current: tk,
  animating: nk,
  up: ok,
  down: rk,
};

function sk(e) {
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
function So({ value: e }) {
  const t = sk(e);
  const n = O(e);
  const o = O(t.length);
  const r = O(Date.now());

  const [s, a] = A(() => t
    .split("")
    .map((p, d) => ({
    char: p,
    prevChar: p,
    isAnimating: false,
    key: d
  }))
  );

  const [c, l] = A(null);

  D(() => {
    if (Date.now() - r.current < 100) {
      n.current = e;
      return;
    }
    if (e === n.current) {
      return;
    }
    const d = e > n.current ? "up" : "down";
    l(d);
    (n.current = e);
    const h = t.split("");

    const m = s.map(k => k.char);

    const _ = Math.max(h.length, m.length);
    const v = m.join("").padStart(_, " ").split("");

    const b = h
      .join("")
      .padStart(_, " ")
      .split("")
      .map((k, S) => {
      const C = v[S] || " ";
      const w = s[S - (_ - s.length)];
      return k !== C
        ? (o.current++,
          { char: k, prevChar: C, isAnimating: true, key: o.current })
        : { char: k, prevChar: k, isAnimating: false, key: w?.key ?? S };
    })
      .filter(k => k.char !== " " || k.isAnimating);

    a(b);
    const y = setTimeout(() => {
      a(k => k.map(S => ({
        ...S,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(y);
  }, [e]);

  if (!s.some(p => p.isAnimating)) {
    return i("span", { children: t });
  }

  const f = c === "up" ? gn.up : c === "down" ? gn.down : "";
  return i("span", {
    className: gn.counter,
    children: s.map(p => p.isAnimating
      ? i(
          "span",
          {
            className: `${gn.digit} ${gn.animating} ${f}`,
            children: [
              i("span", { className: gn.prev, children: p.prevChar }),
              i("span", { className: gn.current, children: p.char }),
            ],
          },
          p.key
        )
      : i("span", { children: p.char }, p.key)
    ),
  });
}
const ik = "esgy";
const ak = "lNpq";
const ck = "Y8VD";
const lk = "kORl";
const uk = "RFAm";
const dk = "tCV6";
const fk = "ae7s";
const pk = "WlY6";
const hk = "lDp6";

const Dt = {
  dropdownWrapper: ik,
  trigger: ak,
  menu: ck,
  hidden: lk,
  menuItem: uk,
  danger: dk,
  itemIcon: fk,
  itemLabel: pk,
  divider: hk,
};

function mf({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: o = [],
  className: r,
}) {
  const [s, a] = A(false);
  const [c, l] = A(false);
  const [u, f] = A({ top: 0, left: 0 });
  const p = O(null);
  const d = O(null);

  const h = I(() => {
    if (!p.current) {
      return;
    }
    const g = p.current.getBoundingClientRect();
    const b = d.current?.offsetHeight || 150;
    const y = d.current?.offsetWidth || 160;
    let k = 0;
    let S = 0;

    if (n.startsWith("bottom")) {
      (k = g.bottom + 4);
    } else {
      (k = g.top - b - 4);
    }

    if (n.endsWith("right")) {
      (S = g.right - y);
    } else {
      (S = g.left);
    }

    const {
      innerWidth,
      innerHeight
    } = window;

    if (S + y > innerWidth) {
      (S = innerWidth - y - 8);
    }

    if (S < 8) {
      (S = 8);
    }

    if (k + b > innerHeight) {
      (k = g.top - b - 4);
    }

    if (k < 8) {
      (k = g.bottom + 4);
    }

    f({ top: k, left: S });
    l(true);
  }, [n]);

  const m = I((g) => {
    const g_target = g.target;

    if (p.current &&
      !p.current.contains(g_target) &&
      d.current &&
      !d.current.contains(g_target)) {
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

  const _ = (g) => {
    g.stopPropagation();

    if (s) {
      a(false);
      l(false);
    } else {
      a(true);
    }
  };

  const v = (g, b) => {
    g.stopPropagation();
    b.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${Dt.dropdownWrapper} ${r || ""}`,
    children: [
      i("div", { ref: p, className: Dt.trigger, onClick: _, children: e }),
      s &&
        $(
          i("div", {
            ref: d,
            className: `${Dt.menu} ${c ? "" : Dt.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((g, b) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${Dt.menuItem} ${g.danger ? Dt.danger : ""}`,
                    onClick: y => v(y, g),
                    children: [
                      g.icon &&
                        i("span", {
                          className: Dt.itemIcon,
                          children: g.icon,
                        }),
                      i("span", {
                        className: Dt.itemLabel,
                        children: g.label,
                      }),
                    ],
                  }),
                  o.includes(g.id) &&
                    b < t.length - 1 &&
                    i("div", { className: Dt.divider }),
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

const mk = [
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

const Nr = mk.map(([e, t]) => {
  const n = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" viewBox="0 0 120 28" preserveAspectRatio="none"><path d="${e}" fill="#fffef7" stroke="#cecbbc" stroke-width=".6" vector-effect="non-scaling-stroke"/><path d="${t}" fill="none" stroke="#e6e2d4" stroke-width=".55"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(n)}`;
});

function gk(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) {
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  }
  return t >>> 0;
}
function _k(e) {
  const t = new Map();
  const n = new Set();
  let o = -1;
  for (const r of e) {
    if (t.has(r.id)) {
      continue;
    }

    if (n.size === Nr.length) {
      n.clear();
    }

    let s = gk(r.id) % Nr.length;

    while (n.has(s) || (!n.size && s === o)) {
      s = (s + 1) % Nr.length;
    }

    t.set(r.id, s);
    n.add(s);
    (o = s);
  }
  return t;
}
const vk = "tWSr";
const yk = "C02X";
const wk = "dAal";
const Ek = "fDLC";
const bk = "sYa6";
const Sk = "OvY5";
const Ck = "tgxj";
const kk = "ftdN";
const Nk = "EwwR";

const Ut = {
  underline: vk,
  monospace: yk,
  quote: wk,
  spoiler: Ek,
  revealed: bk,
  link: Sk,
  mention: Ck,
  hashtag: kk,
  corrector: Nk,
};

function Tk(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function Ik(e) {
  if (!Tk(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const o = String.fromCharCode(...n);
  const r = btoa(o);
  return `/external?url=${encodeURIComponent(r)}`;
}
function va({
  text: e,
  spans: t = [],
  className: n = "",
  correctorMarks: o = [],
}) {
  const r = Te(() => _k(o), [o]);

  const [s, a] = A(new Set());

  const c = Te(() => {
    if (t.length === 0) {
      return [{ text: e, offset: 0, styles: new Set() }];
    }
    const f = [];

    t.forEach((m, _) => {
      f.push({ pos: m.offset, type: "start", span: m, index: _ });
      f.push({ pos: m.offset + m.length, type: "end", span: m, index: _ });
    });

    f.sort((m, _) => m.pos !== _.pos
      ? m.pos - _.pos
      : m.type !== _.type
      ? m.type === "end"
        ? -1
        : 1
      : 0
    );

    const p = [];
    let d = 0;
    const h = new Map();
    for (const m of f) {
      if (m.pos > d) {
        const _ = e.substring(d, m.pos);
        const v = new Set();
        let g;
        let b;
        let y;

        h.forEach((k) => {
          v.add(k.type);

          if (k.type === "link" && k.url) {
            (g = k.url);
          }

          if (k.type === "mention" &&
            (k.username || k.id)) {
            (b = k.username || k.id);
          }

          if (k.type === "hashtag" && k.tag) {
            (y = k.tag);
          }
        });

        p.push({
          text: _,
          offset: d,
          styles: v,
          url: g,
          mentionId: b,
          hashtag: y,
        });
      }

      if (m.type === "start") {
        h.set(m.index, m.span);
      } else {
        h.delete(m.index);
      }

      (d = m.pos);
    }

    if (d < e.length) {
      p.push({ text: e.substring(d), offset: d, styles: new Set() });
    }

    return p;
  }, [e, t]);

  const l = (f, p) => {
    f.stopPropagation();

    a((d) => {
      const h = new Set(d);

      if (h.has(p)) {
        h.delete(p);
      } else {
        h.add(p);
      }

      return h;
    });
  };

  const u = (f, p) => {
    let f_text = f.text;
    const h = o.filter(
      m => m.start < f.offset + f.text.length && m.end > f.offset
    );
    if (h.length) {
      const m = new Set([0, f.text.length]);
      for (const v of h) {
        m.add(Math.max(0, v.start - f.offset));
        m.add(Math.min(f.text.length, v.end - f.offset));
      }
      const _ = [...m].sort((v, g) => v - g);
      f_text = _.slice(0, -1).map((v, g) => {
        const b = f.text.slice(v, _[g + 1]);

        const y = h.find(S => S.start <= v + f.offset && S.end > v + f.offset);

        const k = y ? r.get(y.id) : 0;
        return y
          ? i(
              "span",
              {
                className: Ut.corrector,
                "data-corrector-mark": true,
                "data-corrector-id": y.id,
                "data-corrector-variant": k,
                style: { backgroundImage: `url("${Nr[k]}")` },
                "aria-label": "Текст замазан дежурным",
                onClick: (S) => {
                  S.preventDefault();
                  S.stopPropagation();
                },
                children: i("span", { "aria-hidden": "true", children: b }),
              },
              v
            )
          : b;
      });
    }

    if (f.styles.has("bold")) {
      (f_text = i("strong", { children: f_text }));
    }

    if (f.styles.has("italic")) {
      (f_text = i("em", { children: f_text }));
    }

    if (f.styles.has("underline")) {
      (f_text = i("span", { className: Ut.underline, children: f_text }));
    }

    if (f.styles.has("strike")) {
      (f_text = i("s", { children: f_text }));
    }

    if (f.styles.has("monospace")) {
      (f_text = i("code", { className: Ut.monospace, children: f_text }));
    }

    if (f.styles.has("quote")) {
      (f_text = i("span", { className: Ut.quote, children: f_text }));
    }

    if (f.styles.has("spoiler")) {
      const m = s.has(p);
      f_text = i("span", {
        className: `${Ut.spoiler} ${m ? Ut.revealed : ""}`,
        onClick: _ => l(_, p),
        children: f_text,
      });
    }

    if (f.styles.has("link") && f.url) {
      const m = Ik(f.url);
      f_text = i("a", {
        href: m,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Ut.link,
        onClick: _ => _.stopPropagation(),
        children: f_text,
      });
    }
    if (f.styles.has("mention") && f.mentionId) {
      const m = `/@${f.mentionId}`;
      f_text = i("a", {
        href: m,
        className: Ut.mention,
        onClick: (_) => {
          _.preventDefault();
          _.stopPropagation();
          Ke(m);
        },
        children: f_text,
      });
    }
    if (f.styles.has("hashtag") && f.hashtag) {
      const m = `/hashtag/${encodeURIComponent(f.hashtag)}`;
      f_text = i("a", {
        href: m,
        className: Ut.hashtag,
        onClick: (_) => {
          _.preventDefault();
          _.stopPropagation();
          Ke(m);
        },
        children: f_text,
      });
    }
    return i("span", { children: f_text }, p);
  };

  return i("span", { className: n, children: c.map((f, p) => u(f, p)) });
}
function Rk(e, t, n) {
  const { isVisible: o, isRevealing: r, onRevealComplete: s } = n;
  const a = O([]);
  const c = O(null);
  const l = O(null);
  const u = O({ width: 0, height: 0 });
  const f = O(1);

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

  const d = I(
    (_, v) => {
      const g = Math.floor((_ * v) / 600);
      const b = [];
      for (let y = 0; y < g; y++) {
        b.push(p(_, v));
      }
      a.current = b;
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
    const b = window.devicePixelRatio || 1;
    if (u.current.width !== g.width || u.current.height !== g.height) {
      (u.current = { width: g.width, height: g.height });
      (e_current.width = g.width * b);
      (e_current.height = g.height * b);
      (e_current.style.width = `${g.width}px`);
      (e_current.style.height = `${g.height}px`);
      const y = e_current.getContext("2d");

      if (y) {
        y.setTransform(b, 0, 0, b, 0, 0);
        (l.current = y);
      }

      d(g.width, g.height);
    }
  }, [e, t, d]);

  const m = I(() => {
    f.current = 1;
  }, []);

  D(() => {
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
      const { width: g, height: b } = u.current;
      if (!l_current || g === 0 || b === 0) {
        c.current = requestAnimationFrame(_);
        return;
      }
      if (r && ((f.current -= 0.05), f.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, g, b);

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
          (y.y = b);
        }

        if (y.y > b) {
          (y.y = 0);
        }

        if (y.life <= 0) {
          a.current[k] = p(g, b);
          return;
        }

        const S = y.life / y.maxLife;
        const C = S < 0.3 ? S / 0.3 : 1;
        const w = y.opacity * C * f.current;
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
const Ak = "WrQS";
const Pk = "rONP";
const Lk = "GWkn";
const Ok = "XpBf";
const $k = "gd1J";
const _o = { container: Ak, hidden: Pk, image: Lk, revealing: Ok, canvas: $k };
const Il = 5;
function Rl({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: o,
  height: r,
  className: s = "",
  onClick: a,
}) {
  const [c, l] = A(!n);
  const [u, f] = A(false);
  const [p, d] = A(false);
  const h = O(null);
  const m = O(null);
  const _ = O(null);
  const v = O(false);

  const { resetOpacity: g } = Rk(h, m, {
    isVisible: p && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  D(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const T = new IntersectionObserver(
      (N) => {
        N.forEach((E) => {
          d(E.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    T.observe(m_current);

    return () => {
      T.disconnect();
    };
  }, []);

  const b = (w) => {
    (_.current = { x: w.clientX, y: w.clientY });
    (v.current = false);
  };

  const y = (w) => {
    if (!_.current) {
      return;
    }
    const T = Math.abs(w.clientX - _.current.x);
    const N = Math.abs(w.clientY - _.current.y);

    if ((T > Il || N > Il)) {
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
      f(true);
      g();
    } else if (a) {
      a(w);
    }
  };

  const S = !c && n;
  const C = o && r ? { aspectRatio: `${o} / ${r}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${_o.container} ${s} ${S ? _o.hidden : ""} ${
          u ? _o.revealing : ""
        }`,
        style: C,
        onPointerDown: b,
        onPointerMove: y,
        onClick: k,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: _o.image,
            loading: "lazy",
            width: o,
            height: r,
            draggable: false,
            "data-post-media-image": true,
          }),
          S && i("canvas", { ref: h, className: _o.canvas }),
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
function xk(e) {
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
function $s(e, t) {
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
  const f = Math.max(r.left, a);
  const p = Math.max(r.top, c);
  const d = Math.min(r.right, l);
  const h = Math.min(r.bottom, u);
  const m = Math.max(0, d - f);
  const _ = Math.max(0, h - p);
  return m <= 0 || _ <= 0
    ? null
    : {
        left: f,
        top: p,
        width: m,
        height: _,
        hiddenLeft: f - r.left,
        hiddenTop: p - r.top,
        hiddenRight: r.right - d,
        hiddenBottom: r.bottom - h,
        borderRadius: xk(o),
      };
}
const Al = { photo_open: 1, video_progress: 2 };
const Mk = 2000/* 2e3 */;
const Dk = 20;
const Pl = "dwell_sid";
function Uk() {
  try {
    let e = sessionStorage.getItem(Pl);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Pl, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class Fk {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = Uk());
      window.setInterval(() => this.flush(), Mk);
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
    const s = { t: Al.photo_open, v: t, ai: n };

    if (o !== undefined) {
      (s.mi = o);
    }

    if (r) {
      (s.s = Fr[r]);
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
      t: Al.video_progress,
      v: t,
      ai: n,
      pm: Math.round(o),
      dm: Math.round(r),
    };

    if (s) {
      (a.s = Fr[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= Dk) {
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
    L.post(U.posts.interactionLog, o, { headers: r }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    L.post(
      U.posts.interactionLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const Bk = new Fk();
function Hk(e, t) {
  return I(
    (n, o) => {
      if (!e || !n) {
        return;
      }
      const r = t === "post_page" || t === "link";
      Bk.trackPhotoOpen(e, n, o, r ? t : undefined);
    },
    [e, t]
  );
}
const Vk = "DHdE";
const Wk = "Pw4g";
const jk = "a82W";
const zk = "QHUm";
const qk = "BmMu";
const Yk = "JX4e";
const Gk = "jUYV";

const He = {
  mediaWrapper: Vk,
  isFeed: Wk,
  single: jk,
  image: zk,
  singleVideo: qk,
  media: Yk,
  dragging: Gk,
};

const Ll = le(() => ie(
  () => import("./PostMediaVideo-DwPRV6qd.js"),
  __vite__mapDeps([13, 14, 15])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const Kk = 5;
const Xk = 0.95;
const xs = 0.5;
const Qk = 650;
const Zk = 500;
const Jk = 300;
function eN(e, t, n, o) {
  const r = e / t;
  return r > n / o ? Math.min(e, n) : Math.min(t, o) * r;
}
function ya({ media: e, isFeed: t = false, postVs: n, source: o }) {
  const r = e?.filter(R => R.type === "image") ?? [];

  const s = e?.filter(R => R.type === "video") ?? [];

  const a = O(null);

  const c = Od(R => R.open);

  const u = Gt() ? Jk : Zk;
  const f = Hk(n, o);
  const p = O(false);
  const d = O(0);
  const h = O(0);
  const m = O(false);
  const _ = O(0);
  const v = O(0);
  const g = O(0);
  const b = O(null);

  const y = () => {
    if (b.current) {
      cancelAnimationFrame(b.current);
      (b.current = null);
    }
  };

  const k = () => {
    const a_current = a.current;
    if (a_current) {
      (g.current *= Xk);

      if (Math.abs(g.current) < xs) {
        y();
        return;
      }

      (a_current.scrollLeft += g.current);
      (b.current = requestAnimationFrame(k));
    }
  };

  const S = (R) => {
    const a_current = a.current;

    if (a_current && r.length + s.length > 1) {
      y();
      (p.current = true);
      a_current.classList.add(He.dragging);
      (d.current = R.clientX);
      (_.current = R.clientX);
      (v.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (g.current = 0);
      R.preventDefault();
    }
  };

  const C = (R) => {
    if (!p.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const Y = Date.now();
    const F = R.clientX - d.current;
    const X = R.clientX - _.current;
    const K = Y - v.current;

    if (Math.abs(F) > Kk) {
      (m.current = true);
    }

    if (K > 0) {
      (g.current = (-X / K) * 16);
    }

    (_.current = R.clientX);
    (v.current = Y);
    (a_current.scrollLeft = h.current - F);
  };

  const w = () => {
    if (p.current && Math.abs(g.current) > xs) {
      k();
    }

    (p.current = false);
    a.current?.classList.remove(He.dragging);
  };

  const T = () => {
    if (p.current) {
      Math.abs(g.current) > xs && k();
      (p.current = false);
      a.current?.classList.remove(He.dragging);
    }
  };

  D(
    () => () => {
      y();
      a.current?.classList.remove(He.dragging);
    },
    []
  );

  const N = (R, $) => {
    if (m.current) {
      (m.current = false);
      $.stopPropagation();
      return;
    }
    const r_R = r[R];

    if (r_R) {
      f(r_R.id, R);
    }

    const F = $.currentTarget ?? null;
    const X = $s(F, a.current);

    const K = (se) => {
      const a_current = a.current;
      if (!a_current) {
        return se !== R || !F?.isConnected ? null : $s(F, null);
      }
      const ee = a_current.querySelectorAll("[data-post-media-image]")[se];
      return ee
        ? (ee.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          $s(ee, a_current))
        : null;
    };

    c(
      r.map(se => ({
        id: se.id,
        url: se.url,
        width: se.width || 800,
        height: se.height || 600
      })),
      R,
      X,
      K
    );
  };

  const E = (R) => {
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

      const $ =
        R.width && R.height
          ? {
              width: `${Math.round(eN(R.width, R.height, Qk, u))}px`,
              aspectRatio: `${R.width} / ${R.height}`,
            }
          : undefined;

      return i("div", {
        className: `${He.mediaWrapper} ${t ? He.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: He.single,
          style: $,
          onClick: (Y) => {
            Y.stopPropagation();
            N(0, Y);
          },
          children: i(
            Rl,
            {
              src: R.url,
              spoiler: R.spoiler,
              width: R.width,
              height: R.height,
              className: He.image,
              onClick: (Y) => {
                Y.stopPropagation();
                N(0, Y);
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
        onClick: $ => $.stopPropagation(),
        children: i("div", {
          className: He.singleVideo,
          children: i(De, {
            fallback: null,
            children: i(
              Ll,
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
      onClick: E,
      onMouseDown: S,
      onMouseMove: C,
      onMouseUp: w,
      onMouseLeave: T,
      children: [
        s.map(R => i(
          De,
          {
            fallback: null,
            children: i(Ll, {
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
        r.map((R, $) => i(
          Rl,
          {
            src: R.url,
            spoiler: R.spoiler,
            width: R.width,
            height: R.height,
            className: He.image,
            onClick: Y => N($, Y),
          },
          R.id
        )
        ),
      ],
    }),
  });
}
function gf(e, t) {
  At(d => d.posts[e]);

  At(d => d.generation);

  const [n, o] = A(0);
  const r = rs.read(t);
  const s = r?.state;
  const a = r?.received;
  const c = s && a !== undefined ? Ur(s, a) : Infinity;
  const l = !!t;

  D(() => l ? Fb(e) : undefined, [e, l]);

  D(() => {
    if (!s || a === undefined) {
      return;
    }

    const d = () => o(_ => _ + 1);

    const h = [...s.events, ...s.marks]
      .map(_ => Date.parse(_.endsAt))
      .filter(_ => _ > c);

    const m = h.length
      ? setTimeout(
          d,
          Math.min(2147483647, Math.max(1, Math.min(...h) - Ur(s, a) + 10))
        )
      : undefined;

    window.addEventListener("focus", d);

    return () => {
      clearTimeout(m);
      window.removeEventListener("focus", d);
    };
  }, [s, a, n, c]);

  const u = s?.marks.filter(d => Date.parse(d.endsAt) > c) ?? [];

  const f = !!s && !!t && s.revision !== t.revision;

  const p =
    s?.events.find(
      d => Date.parse(d.endsAt) > c && d.applicationsEnabled
    ) ?? s?.events.find(d => Date.parse(d.endsAt) > c);

  return {
    state: s,
    marks: f ? [] : u,
    event: f ? undefined : p,
    locked: u.length > 0,
    staleText: f,
  };
}
const tN = "Ea2y";
const nN = "A2iO";
const oN = "tRzo";
const rN = "Oabd";
const sN = "RZ42";
const iN = "eG2N";

const Wn = {
  overlay: tN,
  dialog: nN,
  title: oN,
  message: rN,
  actions: sN,
  column: iN,
};

const aN = { default: "primary", cancel: "secondary", destructive: "danger" };
function wa({
  title: e,
  message: t,
  actions: n,
  dialogClassName: o,
  stackActions: r = false,
  onDismiss: s,
}) {
  const a = n.some(c => c.loading);

  D(() => {
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
                variant: aN[c.role ?? "default"],
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
const cN = "jm9X";
const lN = "z9yk";
const uN = "YnKg";
const dN = "Tdka";
const fN = "QqXC";
const pN = "FzD5";

const _n = {
  dialog: cN,
  title: lN,
  copy: uN,
  bullets: dN,
  price: fN,
  unavailable: pN,
};

const hN = {
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

function Ea({ productId: e, icon: t, onClose: n, postId: o, eventId: r }) {
  const [s, a] = A("loading");
  const [c, l] = A(null);

  const u = I(async () => {
    a("loading");
    try {
      const m =
        (await L.get("/v1/aliceai/shop", { skipErrorToast: true })).items.find(
          _ => _.id === e
        ) ?? null;
      l(m);
      a(m?.isAvailable ? "available" : "unavailable");
    } catch {
      a("error");
    }
  }, [e]);

  D(() => {
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
                Ke(`/event/alice-ai?${h.toString()}`);
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

  const d = c ?? hN[e];
  return i(wa, {
    title: i("span", {
      className: _n.title,
      children: [t, e === "post_notebook" ? "Тетрадка" : d.title],
    }),
    message: i("span", {
      className: _n.copy,
      children: [
        i("span", { children: d.details }),
        d.bullets.length > 0 &&
          i("span", {
            className: _n.bullets,
            children: d.bullets.map(h => i("span", { children: ["— ", h] }, h)
            ),
          }),
        c &&
          i("span", {
            className: _n.price,
            children: ["Цена: ", c.price, " мелков"],
          }),
        s === "loading" &&
          i("span", { role: "status", children: "Проверяем витрину…" }),
        s === "unavailable" &&
          i("span", {
            role: "status",
            className: _n.unavailable,
            children: "Сейчас купить нельзя.",
          }),
        s === "error" &&
          i("span", {
            role: "alert",
            className: _n.unavailable,
            children: "Не удалось проверить витрину. Попробуй ещё раз.",
          }),
      ],
    }),
    actions: p,
    dialogClassName: _n.dialog,
    onDismiss: n,
  });
}
const mN = "UDSS";
const gN = "IqsP";
const _N = "zOTz";
const vN = "AxX4";
const yN = "lHxv";
const wN = "iouj";
const EN = "YcsY";
const bN = "St6m";
const SN = "ZC3k";
const CN = "QQ1J";
const kN = "SHTM";
const NN = "py4g";
const TN = "f9pa";
const IN = "xwQF";
const RN = "NC9G";

const Me = {
  panel: mN,
  panelBody: gN,
  heading: _N,
  toolHint: vN,
  actionButton: yN,
  preview: wN,
  invalid: EN,
  error: bN,
  signature: SN,
  signatureAction: CN,
  signatureText: kN,
  actor: NN,
  stamp: TN,
  signatureMenu: IN,
  srOnly: RN,
};

function AN({ marks: e, postId: t, userId: n, onClose: o }) {
  const [r, s] = A(false);
  const [a, c] = A(null);
  const [l, u] = A("");

  const f = e.some(h => h.actor.id === n);

  const p = [
    ...new Map(
      e.filter(h => h.actor.id !== n).map(h => [h.actor.id, h])
    ).values(),
  ];

  const d = [];

  if (f) {
    d.push({
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

          await ss([t]);
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
      d.push({
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

  d.push({
    label: r ? "Назад" : "Закрыть",
    role: "cancel",
    onClick: () => r ? s(false) : o(),
  });

  return i(wa, {
    title: "Корректор",
    stackActions: true,
    onDismiss: o,
    actions: d,
    message: i(ye, {
      children: [
        f
          ? r
            ? "Удалить все ваши закрашивания в этом посте? Корректор не вернётся."
            : "Свои закрашивания можно удалить. Потраченный корректор не вернётся."
          : "Выберите, на чью правку пожаловаться.",
        l && i("span", { role: "status", children: [" ", l] }),
      ],
    }),
  });
}
function _f({ marks: e, postId: t }) {
  const [n, o] = A(false);
  const { openModal: r, closeModal: s } = Kt();

  const a = ge(l => l.profile?.id);

  const c = [...new Map(e.map(l => [l.actor.id, l.actor])).values()];

  return c.length
    ? i(ye, {
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
                children: i("img", { src: Ei, alt: "" }),
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
                              onClick: f => f.stopPropagation(),
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
                      i(AN, {
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
            i(Ea, {
              productId: "duty_corrector",
              icon: i("img", { src: Ei, alt: "" }),
              postId: t,
              eventId: e[0].eventId,
              onClose: () => o(false),
            }),
        ],
      })
    : null;
}
function PN(e, t) {
  wt(() => {
    const e_current = e.current;
    if (!e_current || !t) {
      return;
    }
    let o = 0;

    const r = () => {
      const window_visualViewport = window.visualViewport;
      const l = window_visualViewport?.width ?? window.innerWidth;
      const u = window_visualViewport?.height ?? window.innerHeight;
      const f = window_visualViewport?.offsetLeft ?? 0;
      const p = window_visualViewport?.offsetTop ?? 0;
      const d = 16;
      const h = getComputedStyle(e_current);

      const m =
        p + Math.max(d, parseFloat(h.getPropertyValue("--safe-top")) || 0);

      let _ =
        p +
        u -
        Math.max(d, parseFloat(h.getPropertyValue("--safe-bottom")) || 0);
      for (const T of document.querySelectorAll("nav")) {
        const N = T.getBoundingClientRect();

        if (N.width > l / 2 &&
          N.top > p + u / 2 &&
          N.top < _ &&
          N.bottom >= p + u - 120) {
          (_ = Math.min(_, N.top - d));
        }
      }
      (e_current.style.width = `${Math.max(1, Math.min(352, l - d * 2))}px`);

      e_current.style.setProperty(
        "--bubble-max-height",
        `${Math.max(80, _ - m)}px`
      );

      const v = e_current.getBoundingClientRect();
      const g = _ - t.bottom - d;
      const b = t.top - d - m;
      let y = "below";
      let k = t.bottom + d;

      if (g < v.height) {
        if (b >= v.height) {
          (y = "above");
          (k = t.top - d - v.height);
        } else if (Math.max(b, g) >= 240) {
          (y = b > g ? "above" : "below");
          e_current.style.setProperty("--bubble-max-height", `${Math.max(b, g)}px`);

          (k = y === "above"
            ? t.top - d - e_current.getBoundingClientRect().height
            : t.bottom + d);
        } else {
          (y = "floating");
          (k = Math.max(m, Math.min(k, _ - v.height)));
        }
      }

      const S = (t.left + t.right) / 2;
      const C = Math.max(f + d, Math.min(S - v.width / 2, f + l - d - v.width));
      const w = Math.max(m, Math.min(k, _ - e_current.getBoundingClientRect().height));

      if (Math.abs(w - k) > 1) {
        (y = "floating");
      }

      (e_current.style.left = `${C}px`);
      (e_current.style.top = `${w}px`);

      e_current.style.setProperty(
        "--arrow-x",
        `${Math.max(24, Math.min(S - C, v.width - 24))}px`
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
function vf(e, t) {
  Rt(m => m.posts[e]);

  Rt(m => m.generation);

  const [n, o] = A(0);
  const r = ns.read(t);
  const s = r?.state;
  const a = r?.received;
  const c = s && a !== undefined ? Ur(s, a) : Infinity;
  const l = !!t;

  D(() => l ? Ub(e) : undefined, [e, l]);

  D(() => {
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
          Math.min(2147483647, Math.max(1, Math.min(..._) - Ur(s, a) + 10))
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

  const f = u.find(m => m.isOwner) ?? u[0] ?? null;

  const p = u.find(m => m.isOwner) ?? null;

  const d = !!s && !!t && s.revision !== t.revision;

  const h =
    s?.events.find(m => m.id === f?.eventId && Date.parse(m.endsAt) > c) ??
    s?.events.find(m => Date.parse(m.endsAt) > c);

  return {
    state: s,
    claim: f,
    ownClaim: p,
    claims: u,
    corrections: d || !u.length ? [] : s?.corrections ?? [],
    event: d ? undefined : h,
    locked: u.length > 0,
    staleText: d,
  };
}
const yf = /^[\p{L}\p{M}]+(?:[-'’][\p{L}\p{M}]+)*$/u;
const Ol = /[\p{L}\p{M}\p{N}_'’-]/u;
const Mo = 10;
const wf = new Intl.Segmenter("ru", { granularity: "grapheme" });
function LN(e) {
  return [...wf.segment(e)]
    .slice(0, Mo)
    .map(t => t.segment)
    .join("");
}
function Ms(e, t, n) {
  return yf.test(e.slice(t, n))
    ? Ol.test(Array.from(e.slice(0, t)).at(-1) ?? "") ||
      Ol.test(Array.from(e.slice(n))[0] ?? "")
      ? "Выделите слово целиком"
      : ""
    : "Выделите одно слово без пробелов";
}
function Ds(e, t, n = false) {
  return t
    ? yf.test(t)
      ? [...wf.segment(t)].length > Mo
        ? `Не больше ${Mo} символов`
        : !n && t.normalize("NFC") === e.normalize("NFC")
        ? "Введите другое слово"
        : ""
      : "Введите одно слово без пробелов"
    : "";
}
function Ef(e, t, n) {
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
function ON(e, t) {
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
      for (const f of t) {
        const p = Ef(s, f.start, f.end)?.getClientRects()[0];
        if (!p) {
          return false;
        }
        const d = Math.round((p.top - l) / u);
        c.set(d, (c.get(d) ?? 0) + r.measureText(f.replacement).width + 8);
      }
      if ([...c.values()].some(f => f > a - 4)) {
        return false;
      }
    }
    return true;
  } finally {
    s.remove();
  }
}
const $N = "F3U4";
const xN = "qZzA";
const MN = "VLeb";
const DN = "UkFb";
const UN = "O1wu";
const FN = "EgYM";
const BN = "HWpp";
const HN = "AoMp";
const VN = "i7ir";
const WN = "udrb";

const gt = {
  textLayer: $N,
  withCorrections: xN,
  overlay: MN,
  strike: DN,
  handwriting: UN,
  tools: FN,
  selected: BN,
  replacement: HN,
  penIcon: VN,
  signatureText: WN,
};

function jN({ root: e, corrections: t }) {
  const [n, o] = A([]);

  wt(() => {
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
      const d = document.createElement("canvas");
      const h = d.getContext("2d");
      const m = parseFloat(getComputedStyle(e_current).lineHeight) || 22.5;
      const _ = new Map();
      for (const g of [...t].sort((b, y) => b.start - y.start)) {
        const b = Ef(e_current, g.start, g.end);
        if (!b) {
          continue;
        }
        const y = [...b.getClientRects()].filter(E => E.width > 0);
        if (!y.length) {
          continue;
        }
        const k = 14;
        const [S] = y;
        const C = Math.min(19, Math.max(16, m * 0.8));
        const w = Math.max(-k, S.top - p.top - k);

        const T = {
          id: g.id,
          text: g.replacement,
          left: S.left - p.left,
          top: w,
          font: C,
          strikes: y.map(E => ({
            left: E.left - p.left,
            top: E.top - p.top + E.height * 0.55,
            width: E.width
          })),
        };

        const N = Math.round((S.top - p.top) / m);
        _.set(N, [...(_.get(N) ?? []), T]);
      }
      const v = [];
      for (const g of _.values()) {
        let b = g[0].font;
        const y = () => g.map(
          C => {
            (h.font = `600 ${b}px EventCaveat`);
            return h.measureText(C.text).width + 4;
          }
        );
        let k = y();

        while (k.reduce((C, w) => C + w, 0) + 4 * (g.length - 1) > p.width &&
             b > 14) {
          (b -= 0.5);
          (k = y());
        }

        let S = 0;
        g.forEach((C, w) => {
          (C.font = b);

          (C.left = Math.max(
              S,
              Math.min(
                C.left + (C.strikes[0].width - k[w]) / 2,
                p.width - k[w]
              )
            ));

          (S = C.left + k[w] + 4);
        });
        for (let C = g.length - 1; C >= 0; C--) {
          g[C].left = Math.max(
            0,
            Math.min(
              g[C].left,
              (C === g.length - 1 ? p.width : g[C + 1].left - 4) - k[C]
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

    const f = new ResizeObserver(u);
    f.observe(s);
    document.fonts.load("600 22px EventCaveat").then(u);
    document.fonts.ready.then(u);
    document.fonts.addEventListener("loadingdone", u);
    window.addEventListener("resize", u);
    u();

    return () => {
      (c = true);
      cancelAnimationFrame(a);
      f.disconnect();
      window.removeEventListener("resize", u);
      document.fonts.removeEventListener("loadingdone", u);
    };
  }, [e, t]);

  return i("span", {
    className: gt.overlay,
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
              className: gt.strike,
              style: { left: s.left, top: s.top, width: s.width },
              "aria-hidden": "true",
            },
            a
          )
          ),
          i("span", {
            className: gt.handwriting,
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
function zN({ postId: e, claims: t, userId: n, onClose: o }) {
  const [r, s] = A(false);
  const [a, c] = A(null);
  const [l, u] = A("");

  const f = t.find(h => h.actor.id === n);

  const p = t.filter(h => h.actor.id !== n);

  const d = [];

  if (f) {
    d.push({
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
            { postId: e, claimId: f.id },
            { skipErrorToast: true }
          );

          await os([e]);
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
      d.push({
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

  d.push({
    label: r ? "Назад" : "Закрыть",
    role: "cancel",
    onClick: () => r ? s(false) : o(),
  });

  return i(wa, {
    title: "Красная ручка",
    stackActions: true,
    onDismiss: o,
    actions: d,
    message: i(ye, {
      children: [
        r
          ? "Удалить все ваши правки в этом посте? Ручка и использованные слова не вернутся."
          : f
          ? p.length
            ? "Можно удалить свои правки или пожаловаться на чужие."
            : "Свои правки можно удалить. Потраченная ручка не вернётся."
          : "Выберите, на чью правку пожаловаться.",
        l && i("span", { role: "status", children: [" ", l] }),
      ],
    }),
  });
}
function bf({ claims: e, visible: t, postId: n }) {
  const [o, r] = A(false);
  const { openModal: s, closeModal: a } = Kt();

  const c = ge(l => l.profile?.id);

  return !e.length || !t
    ? null
    : i(ye, {
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
                className: gt.penIcon,
                children: i("img", { src: bi, alt: "" }),
              }),
              i("span", {
                className: `${Me.signatureText} ${gt.signatureText}`,
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
                              onClick: f => f.stopPropagation(),
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
                      i(zN, {
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
            i(Ea, {
              productId: "red_pen",
              icon: i("img", { src: bi, alt: "" }),
              postId: n,
              eventId: e[0].eventId,
              onClose: () => r(false),
            }),
        ],
      });
}
function qN(e, t) {
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
const $l = new Intl.Segmenter("ru", { granularity: "grapheme" });
const Us = 3;
function ba({
  postId: e,
  authorId: t,
  text: n,
  spans: o,
  initial: r,
  initialRedPen: s,
  selectable: a = true,
  signature: c = true,
}) {
  const l = O(null);
  const u = O(null);
  const f = O(false);
  const p = gf(e, r);
  const d = vf(e, s);

  const h = Te(() => qN(p.marks, d.corrections), [p.marks, d.corrections]);

  const m = ge(M => M.profile?.id);

  const _ = At(M => M.inventory);

  const v = Rt(M => M.inventory);

  const g = _?.events.find(M => M.id === p.event?.id)?.balance;

  const b = v?.events.find(M => M.id === d.event?.id)?.balance;

  const y = !!t && t === m;
  const k = !!p.event && !y && (g ?? 0) > 0;
  const S = !!d.event && t !== m && ((b ?? 0) > 0 || !!d.ownClaim);
  const C = a && !!m && (k || S);
  const [w, T] = A(null);
  const [N, E] = A("pen");
  const [P, R] = A("");
  const [$, Y] = A("");
  const [F, X] = A(false);
  const [K, se] = A(null);
  const [W, ee] = A("");
  const [ce, q] = A("");
  const _e = !!w && w.actorId === m && (C || F || !!K);
  const Q = K?.tool ?? (N === "pen" && S ? "pen" : k ? "corrector" : "pen");
  PN(u, _e ? w?.anchor : undefined);

  wt(() => {
    let M = false;
    if (
      !w ||
      !P ||
      !l.current ||
      Ms(n, w.start, w.end) ||
      Ds(
        w.text,
        P,
        d.corrections.some(Ce => Ce.start === w.start && Ce.end === w.end)
      )
    ) {
      q("");
      return;
    }
    const Ee = () => {
      if (M || !l.current) {
        return;
      }
      const Ce = ON(l.current, [
        ...h.corrections.filter(
          Oe => Oe.start !== w.start || Oe.end !== w.end
        ),
        { start: w.start, end: w.end, replacement: P },
      ]);
      q(Ce ? "" : "Правки не помещаются в строке. Выберите слово короче");
    };
    Ee();
    document.fonts.load("600 14px EventCaveat").then(Ee);
    document.fonts.addEventListener("loadingdone", Ee);

    return () => {
      (M = true);
      document.fonts.removeEventListener("loadingdone", Ee);
    };
  }, [w, P, n, d.corrections, h.corrections]);

  D(() => {
    if (!C) {
      return;
    }
    let M;

    const Ee = () => {
      if (f.current || K || u.current?.contains(document.activeElement)) {
        return;
      }
      const Oe = window.getSelection();
      const l_current = l.current;
      if (!l_current || !Oe?.rangeCount || Oe.isCollapsed) {
        T(null);
        return;
      }
      const We = Oe.getRangeAt(0);
      if (
        !l_current.contains(We.startContainer) ||
        !l_current.contains(We.endContainer)
      ) {
        T(null);
        return;
      }
      const Ze = We.cloneRange();
      Ze.selectNodeContents(l_current);
      Ze.setEnd(We.startContainer, We.startOffset);
      const ft = Ze.toString().length;
      const rt = We.toString();
      const dn = ft + rt.length;
      if (n.slice(ft, dn) !== rt) {
        return;
      }
      const Mt = We.getBoundingClientRect();

      if (Mt.width) {
        if (w?.start !== ft || w.end !== dn || w.actorId !== m) {
          T({
                start: ft,
                end: dn,
                text: rt,
                count: [...$l.segment(rt)].filter(
                  Mn => !/^\s+$/u.test(Mn.segment)
                ).length,
                anchor: {
                  left: Mt.left,
                  right: Mt.right,
                  top: Mt.top,
                  bottom: Mt.bottom,
                },
                actorId: m,
                operationId: crypto.randomUUID(),
                penRevision: d.state?.revision,
                paintRevision: p.state?.revision,
              });

          E(S ? "pen" : "corrector");
          R("");
          Y("");
          ee("");
        }
      }
    };

    const Ce = () => {
      clearTimeout(M);
      (M = setTimeout(Ee, 350));
    };

    document.addEventListener("selectionchange", Ce);

    return () => {
      clearTimeout(M);
      document.removeEventListener("selectionchange", Ce);
    };
  }, [C, m, n, d.state, p.state, S, K, w]);

  D(() => {
    if (!w) {
      return;
    }

    const M = () => {
      if (!f.current && !K) {
        T(null);
      }
    };

    const Ee = (Ne) => {
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

    document.addEventListener("pointerdown", Ee);
    document.addEventListener("keydown", Ce);
    document.addEventListener("scroll", Oe, true);

    return () => {
      document.removeEventListener("pointerdown", Ee);
      document.removeEventListener("keydown", Ce);
      document.removeEventListener("scroll", Oe, true);
    };
  }, [w, K]);

  const x =
      !!w &&
      p.marks.some(
        M => M.start < w.end &&
        M.end > w.start &&
        (M.start !== w.start || M.end !== w.end)
      );

  const V =
    !!w &&
    d.corrections.some(
      M => M.start < w.end &&
      M.end > w.start &&
      (M.start !== w.start || M.end !== w.end)
    );

  const Z =
    !!w &&
    p.marks.some(
      M => M.actor.id === m && M.start === w.start && M.end === w.end
    );

  const fe =
    !!w &&
    h.corrections.some(
      M => M.start === w.start && M.end === w.end && M.replacement === P
    );

  const J =
    !!w &&
    o?.some(
      M => ["link", "mention", "hashtag", "spoiler"].includes(M.type) &&
      M.offset < w.end &&
      M.offset + M.length > w.start
    );

  const te = p.event
    ? p.event.applicationsEnabled
      ? w && (w.count < 1 || w.count > 10)
        ? "Выберите от 1 до 10 символов без учёта пробелов"
        : p.event.used >= 3
        ? "На этом посте вы уже использовали 3 корректора"
        : Z
        ? "Вы уже закрасили этот фрагмент"
        : x
        ? "Выделите весь закрашенный фрагмент"
        : V
        ? "Выделите всё исправленное слово"
        : g === 0
        ? "У вас пока нет корректоров"
        : ""
      : "Применение временно недоступно"
    : "Ивент завершён";

  const me = d.event
    ? d.event.applicationsEnabled
      ? d.ownClaim && d.ownClaim.used >= Us
        ? `Вы уже исправили ${Us} слов`
        : w && Ms(n, w.start, w.end)
        ? Ms(n, w.start, w.end)
        : J
        ? "Ссылки, упоминания и скрытый текст исправлять нельзя"
        : x
        ? "Выделите весь закрашенный фрагмент"
        : V
        ? "Выделите всё исправленное слово"
        : fe
        ? "Это слово уже так исправлено"
        : w
        ? Ds(
            w.text,
            P,
            d.corrections.some(M => M.start === w.start && M.end === w.end)
          )
        : ""
      : "Исправления временно недоступны"
    : "Ивент завершён";

  const Ie = Q === "pen" ? me || ce : te;

  const Se = w
    ? [...$l.segment(w.text)]
        .map(M => p.marks.some(
    Ee => Ee.start < w.start + M.index + M.segment.length &&
    Ee.end > w.start + M.index
  ) && !/^\s+$/u.test(M.segment)
    ? "■"
    : M.segment
        )
        .join("")
    : "";

  const de = () => Promise.allSettled([
    ...(r ? [ss([e]), ma()] : []),
    ...(s ? [os([e]), ha()] : []),
  ]);

  async function dt() {
    if (!w || f.current) {
      return;
    }
    const M = Q === "pen" ? d.event : p.event;
    const Ee = Q === "pen" ? w.penRevision : w.paintRevision;
    if (!K && (!M || !Ee || Ie || (Q === "pen" && !P))) {
      return;
    }
    const Ce = K ?? {
      tool: Q,
      body: {
        eventId: M.id,
        postId: e,
        revision: Ee,
        start: w.start,
        end: w.end,
        operationId: w.operationId,
        ...(Q === "pen" ? { replacement: P } : {}),
      },
    };
    (f.current = true);
    X(true);
    Y("");
    try {
      await L.post(
        Ce.tool === "pen" ? "/red-pens/apply" : "/correctors/apply",
        Ce.body,
        { skipErrorToast: true }
      );

      se(null);
      ee(Ce.tool === "pen" ? "Слово исправлено" : "Текст закрашен");
      T(null);
      window.getSelection()?.removeAllRanges();
      await de();
    } catch (Oe) {
      const Ne = Oe;
      se(!Ne.status || Ne.status >= 500 ? Ce : null);
      Y(Ne.message || "Не удалось получить ответ. Повторите запрос");
      await de();
    } finally {
      (f.current = false);
      X(false);
    }
  }
  const bt = () => {
    if (!f.current) {
      T(null);
      Y("");
      se(null);
      window.getSelection()?.removeAllRanges();
    }
  };
  return i(ye, {
    children: [
      i("span", {
        className: `${gt.textLayer} ${
          h.corrections.length > 0 ? gt.withCorrections : ""
        }`,
        "data-post-tool-text": true,
        children: [
          i("span", {
            ref: l,
            "data-corrector-text": e,
            "data-corrector-applied": W === "Текст закрашен" || undefined,
            tabIndex: C ? 0 : undefined,
            onCopy: h.marks.length
              ? (M) => {
              const Ee = window.getSelection();
              if (!Ee?.rangeCount || !l.current) {
                return;
              }
              const Ce = Ee.getRangeAt(0);
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
              const We = Array.from(Ee.toString())
                .map((Ze) => {
                const ft = Ne;
                (Ne += Ze.length);

                return h.marks.some(rt => ft >= rt.start && ft < rt.end) &&
                !/\s/u.test(Ze)
                  ? "■"
                  : Ze;
              })
                .join("");
              M.preventDefault();
              M.clipboardData?.setData("text/plain", We);
            }
              : undefined,
            children:
              p.staleText || d.staleText
                ? i("span", { children: "Пост изменился. Обновите страницу" })
                : i(va, { text: n, spans: o, correctorMarks: h.marks }),
          }),
          h.corrections.length > 0 &&
            i(jN, { root: l, corrections: h.corrections }),
        ],
      }),
      c &&
        i(ye, {
          children: [
            i(_f, { marks: p.marks, postId: e }),
            i(bf, {
              claims: d.claims,
              visible: d.corrections.length > 0,
              postId: e,
            }),
          ],
        }),
      W && i("span", { className: Me.srOnly, role: "status", children: W }),
      _e &&
        w &&
        $(
          i("div", {
            ref: u,
            role: "dialog",
            "aria-label": Q === "pen" ? "Красная ручка" : "Закрасить текст",
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
                      children: Q === "pen" ? "Красная ручка" : "Корректор",
                    }),
                    i(Fe, {
                      variant: "secondary",
                      size: "sm",
                      iconOnly: true,
                      "aria-label": "Закрыть",
                      disabled: F,
                      onClick: bt,
                      children: i(ut, { size: 18 }),
                    }),
                  ],
                }),
                i("p", {
                  className: Me.toolHint,
                  children:
                    Q === "pen"
                      ? `Одно слово до ${Mo} символов · до ${Us} правок на пост`
                      : "До 10 символов за одно применение",
                }),
                S &&
                  k &&
                  i("div", {
                    className: gt.tools,
                    "aria-label": "Предметы",
                    children: [
                      i(Fe, {
                        size: "sm",
                        variant: "secondary",
                        className: Q === "pen" ? gt.selected : "",
                        "aria-pressed": Q === "pen",
                        disabled: F || !!K,
                        onClick: () => {
                          E("pen");
                          Y("");
                        },
                        children: "Ручка",
                      }),
                      i(Fe, {
                        size: "sm",
                        variant: "secondary",
                        className: Q === "corrector" ? gt.selected : "",
                        "aria-pressed": Q === "corrector",
                        disabled: F || !!K,
                        onClick: () => {
                          E("corrector");
                          Y("");
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
                    Q === "corrector" &&
                      i("b", {
                        className: w.count > 10 ? Me.invalid : "",
                        children: [w.count, "/10"],
                      }),
                  ],
                }),
                Q === "pen" &&
                  i("label", {
                    className: gt.replacement,
                    children: [
                      "Новое слово",
                      i("input", {
                        "aria-label": "Новое слово",
                        placeholder: `До ${Mo} символов`,
                        value: P,
                        disabled:
                          F ||
                          !!K ||
                          (!!me &&
                            me !==
                              Ds(
                                w.text,
                                P,
                                d.corrections.some(
                                  M => M.start === w.start && M.end === w.end
                                )
                              )),
                        autoComplete: "off",
                        onInput: (M) => {
                          R(LN(M.currentTarget.value));
                          Y("");
                        },
                        onKeyDown: (M) => {
                          if (M.key === "Enter" &&
                            !M.isComposing) {
                            M.preventDefault();
                            dt();
                          }
                        },
                      }),
                    ],
                  }),
                (Ie || $) &&
                  i("p", {
                    className: Me.error,
                    role: "status",
                    children: $ || Ie,
                  }),
                i(Fe, {
                  size: "md",
                  fullWidth: true,
                  className: Me.actionButton,
                  disabled:
                    F || (!K && (!!Ie || (Q === "pen" ? !P : g === undefined))),
                  onClick: dt,
                  children: F
                    ? "Сохраняем…"
                    : K
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

const YN = e => e === "window" ? "layer_window" : e === "stain" ? "splash" : e;

const GN = "alice-profile-changed";
const KN = "alice-sticker-placed";
function HP(e) {
  window.dispatchEvent(new CustomEvent(GN, { detail: e }));
}
function VP(e) {
  window.dispatchEvent(new CustomEvent(KN, { detail: e }));
}
const Ai = "alice-balloon-thrown";
function WP(e) {
  window.dispatchEvent(new CustomEvent(Ai, { detail: e }));
}
function XN(e, t, n) {
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

const QN = e => ({
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

const Sf = {
  profileRaw: e => L.get(`/v1/aliceai/profiles/${encodeURIComponent(e)}`, {
    skipErrorToast: true,
  }),
  profile: async e => QN(await Sf.profileRaw(e)),
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
      kind: YN(t.kind)
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

const ZN = "IrU3";
const JN = "ZJ6T";
const eT = "j9U1";
const Fs = { layer: ZN, stain: JN, arriving: eT };
function tT({ placements: e, anchorKind: t, anchorId: n, className: o = "" }) {
  const [r] = A(Date.now);
  const [s, a] = A([]);
  D(() => {
    const l = [];

    const u = (f) => {
      const f_detail = f.detail;
      const [d] = XN([f_detail], t, n);

      if (d) {
        a(h => h.some(m => m.id === d.id) ? h : [...h, d]);

        l.push(
          window.setTimeout(
            () => a(h => h.filter(m => m.id !== d.id)),
            Math.max(0, Date.parse(f_detail.expiresAt) - Date.now())
          )
        );
      }
    };

    window.addEventListener(Ai, u);

    return () => {
      window.removeEventListener(Ai, u);
      l.forEach(window.clearTimeout);
    };
  }, [t, n]);
  const c = [...e, ...s.filter(l => !e.some(u => u.id === l.id))];
  return c.length === 0
    ? null
    : i("div", {
        className: `${Fs.layer} ${o}`,
        "aria-hidden": "true",
        children: c.map(l => i(
          "img",
          {
            "data-alice-water-placement-id": l.id,
            className: `${Fs.stain} ${
              r - Date.parse(l.createdAt) < 3000/* 3e3 */ ? Fs.arriving : ""
            }`,
            src: Tw(l.asset),
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
function nT() {
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
function oT() {
  return i("svg", {
    viewBox: "0 0 40 40",
    "aria-hidden": "true",
    focusable: "false",
    children: i("path", {
      d: "M20 5.5c-3.7 0-6.7 4.3-11.5 12.5C3.8 26 3.5 30.2 7 33c3.4 2.8 22.6 2.8 26 0 3.5-2.8 3.2-7-1.5-15C26.7 9.8 23.7 5.5 20 5.5Z",
    }),
  });
}
function Cf({ className: e, disabled: t = false }) {
  const [n, o] = A(false);
  return i(ye, {
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
        children: [i(oT, {}), "Тетрадка"],
      }),
      n &&
        i(Ea, {
          productId: "post_notebook",
          icon: i(nT, {}),
          onClose: () => o(false),
        }),
    ],
  });
}

const rT = {
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
const Bs = new Set();
async function sT(e, t) {
  if (Bs.has(e)) {
    return;
  }
  const n = hr.get(e) ?? crypto.randomUUID();
  hr.set(e, n);
  Bs.add(e);
  try {
    await Sf.recyclePost(e, n);
    hr.delete(e);
    t(e);
    mt.success("Пост сдан и сразу учтён в сборе макулатуры");
  } catch (o) {
    const r = xe(o) ? rT[o.code] : undefined;

    if (r) {
      hr.delete(e);
    }

    mt.error(r ?? "Не получилось сдать пост. Попробуй ещё раз");
  } finally {
    Bs.delete(e);
  }
}
const kf = 0.5;
const iT = 250;
const aT = 1000/* 1e3 */;
const cT = 50;
const lT = [0, kf, 1];
const kn = new Set();
const Tr = new WeakMap();
const bn = new Map();
const Sn = new Map();
const Hr = new Set();
const mr = new Set();
let Hs = null;
let Yn = null;
function uT(e) {
  if (Hr.size !== 0) {
    mr.add(e);

    Hs === null &&
      (Hs = setTimeout(() => {
      (Hs = null);

      if (mr.size === 0) {
        return;
      }

      const t = Array.from(mr);
      mr.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const o of Hr) {
        o(n);
      }
    }, cT));
  }
}
function dT() {
  return (Yn || (typeof IntersectionObserver === "undefined" ? null : ((Yn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Tr.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const o = t.intersectionRatio >= kf;
            for (const r of n) {
              if (o) {
                const s = Sn.get(r);
                if (s !== undefined) {
                  clearTimeout(s);
                  Sn.delete(r);
                  continue;
                }
                if (kn.has(r) || bn.has(r)) {
                  continue;
                }
                const a = setTimeout(() => {
                  bn.delete(r);
                  kn.add(r);
                  uT(r);
                }, iT);
                bn.set(r, a);
              } else {
                const s = bn.get(r);

                if (s !== undefined) {
                  clearTimeout(s);
                  bn.delete(r);
                }

                if (!kn.has(r) || Sn.has(r)) {
                  continue;
                }

                const a = setTimeout(() => {
                  Sn.delete(r);
                  kn.delete(r);
                }, aT);
                Sn.set(r, a);
              }
            }
          }
        },
        { threshold: lT }
      )), Yn)));
}

const Vr = {
    observe(e, t) {
      const n = dT();
      if (!n) {
        return;
      }
      const o = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (o.length !== 0) {
        Tr.set(e, o);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!Yn) {
        return;
      }
      const t = Tr.get(e);
      Yn.unobserve(e);
      Tr.delete(e);

      if (!!t) {
        for (const n of t) {
          const o = bn.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            bn.delete(n);
          }

          const r = Sn.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            Sn.delete(n);
          }

          kn.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(kn);
    },
    size() {
      return kn.size;
    },
    onAppear(e) {
      Hr.add(e);

      return () => {
        Hr.delete(e);
      };
    },
  };

const fT = "nNWG";
const pT = "P7Gc";
const hT = "SCsV";
const Vs = { hint: fT, multiline: pT, arrow: hT };
function Ro({ text: e, children: t, className: n, multiline: o }) {
  const r = O(null);
  const [s, a] = A(null);

  const c = I(() => {
    if (!r.current) {
      return;
    }
    const f = r.current.getBoundingClientRect();
    a({ x: f.left + f.width / 2, y: f.top });
  }, []);

  const l = I(() => {
    a(null);
  }, []);

  const u = I(
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

  D(() => {
    if (!s) {
      return;
    }
    const f = (p) => {
      if (r.current && !r.current.contains(p.target)) {
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
            className: `${Vs.hint} ${o ? Vs.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: Vs.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const mT = "YCiR";
const gT = "FJws";
const _T = "laXX";
const vT = "Um0E";
const yT = "DYsh";
const wT = "cWEV";
const ET = "xVx4";
const bT = "xuiI";
const ST = "xtPE";
const CT = "lfPV";

const st = {
  header: mT,
  headerMain: gT,
  headerAccessory: _T,
  hasAccessory: vT,
  authorInfo: yT,
  moreDropdown: wT,
  pinnedBadge: ET,
  authorLink: bT,
  time: ST,
  edited: CT,
};

function kT({ size: e = 16 }) {
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
const NT = 2160 * 60 * 60 * 1000/* 1e3 */;

const TT = e => Date.now() - new Date(e).getTime() >= NT;

function IT({
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
  onEdit: f,
  onDelete: p,
  onPin: d,
  onCopyLink: h,
  onWastePaper: m,
}) {
  const _ = Bd(o);
  const v = fa(n.id);

  const g = ge(T => T.profile?.id);

  const b = n.id === g;
  const y = 2880 * 60 * 1000/* 1e3 */;
  const k = b && !t && Date.now() - new Date(o).getTime() < y;
  const S = Yo().status === "allowed";
  const C = !!m && b && S && TT(o);

  const w = Te(() => {
    const T = [];

    T.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(Hd, { size: 16 }),
      onClick: () => h?.(s),
    });

    if (k) {
      T.push({
        id: "edit",
        label: "Редактировать",
        icon: i(jd, { size: 16 }),
        onClick: () => f?.(s),
      });
    }

    if (c) {
      T.push({
        id: "pin",
        label: l ? "Открепить" : "Закрепить",
        icon: i(rl, { size: 16 }),
        onClick: () => d?.(s),
      });
    }

    if (C) {
      T.push({
        id: "waste-paper",
        label: "Сдать в макулатуру",
        icon: i(kT, { size: 16 }),
        onClick: () => m?.(s),
      });
    }

    if ((b || c)) {
      T.push({
        id: "delete",
        label: "Удалить",
        icon: i(Qd, { size: 16 }),
        danger: true,
        onClick: () => p?.(s),
      });
    }

    if (!b) {
      T.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(qd, { size: 16 }),
        danger: true,
        onClick: () => u?.(s),
      });
    }

    return T;
  }, [b, k, C, c, l, s, f, p, d, u, h, m]);

  return i("header", {
    className: st.header,
    children: [
      l &&
        i("div", {
          className: st.pinnedBadge,
          children: [
            i(rl, { size: 14 }),
            i("span", { children: "Закреплённый пост" }),
          ],
        }),
      i("div", {
        className: `${st.headerMain} ${e ? st.hasAccessory : ""}`,
        children: [
          a &&
            i("a", {
              href: `/@${n.username}`,
              children: i(Et, {
                src: n.avatar,
                alt: n.displayName,
                size: "sm",
                online: n.online,
              }),
            }),
          i("div", {
            className: st.authorInfo,
            children: [
              i("a", {
                href: `/@${n.username}`,
                className: st.authorLink,
                children: i(Go, {
                  userId: n.id,
                  name: n.displayName,
                  verified: n.isVerified,
                  hasNuksta: n.hasNuksta,
                  pin: n.pin,
                  size: "sm",
                  trailing: v
                    ? i("time", {
                        dateTime: o,
                        className: st.time,
                        "data-post-time": true,
                        children: [
                          _,
                          r &&
                            i(Ro, {
                              text: new Date(r).toLocaleString("ru-RU"),
                              children: i("span", {
                                className: st.edited,
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
                  className: st.time,
                  "data-post-time": true,
                  children: [
                    _,
                    r &&
                      i(Ro, {
                        text: new Date(r).toLocaleString("ru-RU"),
                        children: i("span", {
                          className: st.edited,
                          children: " (ред.)",
                        }),
                      }),
                  ],
                }),
            ],
          }),
          e && i("div", { className: st.headerAccessory, children: e }),
          i(mf, {
            trigger: i(Gd, { size: 18 }),
            items: w,
            position: "bottom-right",
            className: st.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const RT = "KOP0";
const AT = "JVbB";
const PT = "hIQn";
const LT = "WAzg";
const OT = "ebP3";
const $T = "eEC6";
const xT = "WZzD";
const MT = "mtPK";
const DT = "k2ky";
const UT = "euvC";
const FT = "HbTE";
const BT = "i9Ya";
const HT = "Giuq";
const VT = "FJBi";
const WT = "XX1n";
const jT = "wywF";
const zT = "fbcb";
const qT = "Xo1B";

const $e = {
  actions: RT,
  compact: AT,
  action: PT,
  views: LT,
  flush: OT,
  actionsLeft: $T,
  disabled: xT,
  liked: MT,
  unliked: DT,
  reposted: UT,
  noAnimation: FT,
  reactionWrapper: BT,
  actionsRight: HT,
  captured: VT,
  capturedEmoji: WT,
  capturedText: jT,
  capturedMobile: zT,
  capturedSolo: qT,
};

function Nf({
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
  disableRepost: f = false,
  compact: p = false,
  emojiOnly: d = false,
  flush: h = false,
  infiniteLike: m = false,
}) {
  const _ = O(false);
  const v = p ? 17 : 20;
  return i("footer", {
    className: `${$e.actions} ${p ? $e.compact : ""} ${h ? $e.flush : ""}`,
    children: [
      i("div", {
        className: $e.actionsLeft,
        children: [
          i("div", {
            className: $e.reactionWrapper,
            onClick: g => g.stopPropagation(),
            children: i("button", {
              className: `${$e.action} ${e ? $e.liked : ""} ${
                _.current && !e ? $e.unliked : ""
              } ${!_.current && e ? $e.noAnimation : ""}`,
              onClick: (g) => {
                g.stopPropagation();
                (_.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                i(
                  oa,
                  { filled: e, size: v },
                  m ? `liked-${n}` : e ? "liked" : "not-liked"
                ),
                i(So, { value: n }),
              ],
            }),
          }),
          i("button", {
            className: $e.action,
            onClick: (g) => {
              g.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [i(Wd, { size: v }), i(So, { value: r })],
          }),
          i("button", {
            className: `${$e.action} ${t ? $e.reposted : ""} ${
              f ? $e.disabled : ""
            }`,
            onClick: (g) => {
              g.stopPropagation();

              if (!f) {
                l();
              }
            },
            disabled: f,
            "aria-label": "Репост",
            children: [i(aa, { size: v }), i(So, { value: o })],
          }),
        ],
      }),
      i("div", {
        className: $e.actionsRight,
        children: [
          a &&
            (d
              ? i(Ro, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: $e.capturedSolo,
                  children: i("span", {
                    className: $e.capturedEmoji,
                    children: a,
                  }),
                })
              : i(ye, {
                  children: [
                    i(Ro, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: $e.captured,
                      children: [
                        i("span", { className: $e.capturedEmoji, children: a }),
                        i("span", {
                          className: $e.capturedText,
                          children: "Пост захвачен",
                        }),
                      ],
                    }),
                    i(Ro, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: $e.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: $e.views,
            children: [i(r0, { size: v }), i(So, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const YT = le(() => ie(() => import("./index-DTLaGq8q.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function Tf(e, t) {
  const { openModal: n, closeModal: o, onDelete: r } = t;
  const s = Gt();

  const a = ae(E => E.deletePost);

  const c = ae(E => E.updatePostLike);

  const l = ae(E => E.beginLikeMutation);

  const u = ae(E => E.endLikeMutation);

  const f = ae(E => E.updatePollVote);

  const p = ae(E => E.updatePollData);

  const d = ga(e);
  const h = d.myReaction !== null;
  const d_likesTotal = d.likesTotal;

  const _ = Te(() => Rf(e.attachments), [e.attachments]);

  const v = I(async () => {
    const E = h;
    const P = E ? -1 : 1;
    c(e.id, E ? null : "love", P);
    l(e.id);
    try {
      const R = E ? await Ue.unlikePost(e.id) : await Ue.likePost(e.id);
      u(e.id, R?.likesCount);
    } catch (R) {
      c(e.id, E ? "love" : null, -P);
      u(e.id);
      console.error("Failed to toggle like:", R);
    }
  }, [e.id, h, c, l, u]);

  const g = I(() => {
    if (!h) {
      v();
    }
  }, [h, v]);

  const b = I(
    (E) => {
      const P = e.author.username ?? e.author.id;
      const R = `${window.location.origin}/@${P}/post/${E}`;
      navigator.clipboard.writeText(R);
      mt.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const y = I(
    (E) => {
      n(i(YT, { targetType: "post", targetId: E, onClose: o }));
    },
    [n, o]
  );

  const k = I(
    (E) => {
      n(
        i(K2, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const S = I(
    async (E) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await a(E);
          r?.(E);
        } catch (P) {
          console.error("Failed to delete post:", P);
        }
      }
    },
    [a, r]
  );

  const C = I(() => {
    if (s) {
      n(i(O2, { postId: e.id, onClose: o }));
    } else {
      const E = e.author.username ?? e.author.id;
      Ke(`/@${E}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, o]);

  const w = I(() => {
    n(i(sR, { post: e, onClose: o }));
  }, [n, o, e]);

  const T = I(
    async (E) => {
      const P = _?.myVote ?? null;
      f(e.id, E, P);
      try {
        const R = await Ue.votePoll(e.id, [E]);
        if (R) {
          p(e.id, R);
          return R;
        }
      } catch (R) {
        console.error("[Poll] Failed to vote:", R);

        if (P) {
          f(e.id, P, E);
        }
      }
      return null;
    },
    [e.id, _?.myVote, f, p]
  );

  const N = I(
    async (E) => {
      try {
        const P = await Ue.votePoll(e.id, E);
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
    totalLikes: d_likesTotal,
    handleLike: v,
    handleDoubleTap: g,
    handleComment: C,
    handleRepost: w,
    handleReport: y,
    handleEdit: k,
    handleDelete: S,
    handleCopyLink: b,
    handlePollVote: T,
    handlePollVoteMultiple: N,
  };
}
function If(e) {
  const t = I(() => {
      ae.getState().updatePostLike(e, "love", 1);
    }, [e]);

  const n = I(() => {
    const { postStatsCache: r, applyStatsUpdates: s } = ae.getState();
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
    ae.getState().updatePostReposted(e, true, 1);
  }, [e]);

  return { handleLike: t, handleComment: n, handleRepost: o };
}
const GT = "ugSq";
const KT = "mtcL";
const XT = "l7z6";
const QT = "hXIF";
const ZT = "LlWc";
const JT = "aEFo";
const eI = "CFc6";
const tI = "NHYE";
const nI = "r7Ov";
const oI = "eYqB";
const rI = "fPLb";
const sI = "xS1E";
const iI = "YiUX";
const aI = "L9Kh";
const cI = "RF7l";
const lI = "j2VH";
const uI = "GKXN";
const dI = "H1EQ";
const fI = "uUCk";
const pI = "bM8W";

const be = {
  post: GT,
  notebookPost: KT,
  originalNotebook: XT,
  text: QT,
  notebookGrid: ZT,
  notebookRuled: JT,
  notebookLabel: eI,
  postInner: tI,
  isFeed: nI,
  postBody: oI,
  avatarLink: rI,
  postContent: sI,
  textWrapper: iI,
  collapsed: aI,
  expandButton: cI,
  originalPost: lI,
  originalPostText: uI,
  originalPostHeader: dI,
  originalPostTime: fI,
  originalPostMedia: pI,
};

function hI(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function mI({ attachments: e, postVs: t, source: n }) {
  const o = Te(() => Wr(e), [e]);
  return o.length === 0
    ? null
    : i("div", {
        className: be.originalPostMedia,
        children: i(ya, { media: o, postVs: t, source: n }),
      });
}
function gI({ originalPost: e, source: t, showcase: n = false }) {
  const o = hI(e.createdAt);
  const { openModal: r, closeModal: s } = Kt();

  const {
    liked: a,
    totalLikes: c,
    handleLike: l,
    handleComment: u,
    handleRepost: f,
  } = Tf(e, { openModal: r, closeModal: s });

  const { handleLike: p, handleComment: d, handleRepost: h } = If(e.id);
  const m = ga(e);

  const _ = I(
    (v) => {
      v.stopPropagation();

      if (n) {
        return;
      }

      const g = e.author.username ?? e.author.id;
      Ke(`/@${g}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id, n]
  );

  return i("div", {
    className: `${be.originalPost} ${e.notebook ? be.originalNotebook : ""} ${
      e.notebook?.style === "grid" ? be.notebookGrid : ""
    } ${e.notebook?.style === "ruled" ? be.notebookRuled : ""}`,
    onClick: _,
    children: [
      i("div", {
        className: be.originalPostHeader,
        children: [
          i(aa, { size: 14 }),
          i(Et, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          i(Go, {
            userId: e.author.id,
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          i("span", { className: be.originalPostTime, children: o }),
        ],
      }),
      e.notebook && i(Cf, { className: be.notebookLabel, disabled: n }),
      e.text &&
        i("div", {
          className: be.originalPostText,
          children:
            e.corrector || e.redPen
              ? i(ba, {
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
        i(mI, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(Nf, {
        liked: a,
        reposted: m.reposted,
        likesCount: c,
        repostsCount: m.repostsCount,
        commentsCount: m.commentsCount,
        viewsCount: m.viewsCount,
        dominantEmoji: m.dominantEmoji,
        onLike: n ? p : l,
        onRepost: n ? h : f,
        onComment: n ? d : u,
        compact: true,
        emojiOnly: n,
        infiniteLike: n,
      }),
    ],
  });
}
const _I = le(() => ie(() => import("./index-BTNCulA7.js"), __vite__mapDeps([19, 20])).then(
  e => ({
    default: e.Poll
  })
)
);
function vI(e) {
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
function Rf(e) {
  return e.find(t => t.type === "poll");
}
const yI = 300;
const wI = 500;

const EI = Qr(
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
      onEdit: f,
      onPin: p,
      onDelete: d,
      aliceWaterStains: h = [],
    }
  ) => {
    const m = n === "feed";
    const _ = Gt();
    const { openModal: v, closeModal: g } = Kt();

    const b = ae(B => B.setCurrentPost);

    const y = ae(B => B.removePost);

    const k = ae(B => B.seedPostStats);

    const S = ae(B => B.posts.find(he => he.id === t.id));

    const C = ge(B => B.profile);

    const w = gf(t.id, t.corrector);
    const T = vf(t.id, t.redPen);
    D(() => {
      k(t);
    }, [t, k]);
    const N = ga(t);
    const { isFollowing: E, follow: P, unfollow: R } = Hw(t.author.id);
    const $ = m && C?.id !== t.author.id ? E : undefined;

    const {
      liked: Y,
      totalLikes: F,
      handleLike: X,
      handleDoubleTap: K,
      handleComment: se,
      handleRepost: W,
      handleReport: ee,
      handleEdit: ce,
      handleDelete: q,
      handleCopyLink: _e,
      handlePollVote: Q,
      handlePollVoteMultiple: x,
    } = Tf(t, { openModal: v, closeModal: g, onDelete: d });

    const { handleLike: V, handleComment: Z, handleRepost: fe } = If(t.id);

    const J = I(() => {
      if ($ !== undefined) {
        if ($) {
          v(
                  i(TE, {
                    displayName: t.author.displayName,
                    onConfirm: R,
                    onClose: g,
                  })
                );
        } else {
          P();
        }
      }
    }, [$, t.author.displayName, P, R, v, g]);

    const te = I(
      (B) => {
        sT(B, (he) => {
          y(he);
          d?.(he);
        });
      },
      [y, d]
    );

    const me = O(null);
    const Ie = O(null);
    const Se = O(null);
    const [de, dt] = A(yI);
    const [bt, M] = A(0);
    const Ee = bt > de;
    D(
      () => () => {
        if (Se.current) {
          cancelAnimationFrame(Se.current);
          (Se.current = null);
        }
      },
      []
    );

    const Ce = I(
        (B) => {
          if (B &&
            m) {
            Se.current && cancelAnimationFrame(Se.current);

            (Se.current = requestAnimationFrame(() => {
              (Se.current = null);
              M(B.scrollHeight);
            }));
          }

          if (Ie) {
            (Ie.current = B);
          }
        },
        [m]
      );

    const Oe = I((B) => {
      B.stopPropagation();

      dt(he => he + wI);
    }, []);

    c1(t.id, me, c, l, t.vs);
    const Ne = t.originalPost?.id;
    D(() => {
      const me_current = me.current;
      if (!me_current) {
        return;
      }
      const he = Ne ? [t.id, Ne] : t.id;
      Vr.observe(me_current, he);

      return () => Vr.unobserve(me_current);
    }, [t.id, Ne]);
    const We = O(null);
    const Ze = O(0);

    const ft = I((B) => {
      We.current = B.target;
    }, []);

    const rt = I(() => {
      b(S ?? t);
      const he = t.author.username ?? t.author.id;
      Ke(`/@${he}/post/${t.id}`);
    }, [t, S, b]);

    const dn = I(
      (B) => {
        const B_target = B.target;
        if (B_target.closest("button") ||
        B_target.closest("a") ||
        B_target.closest("video") ||
        B_target.closest("img")) {
          return;
        }
        if (_) {
          const ao = Date.now();
          if (ao - Ze.current < 300) {
            (Ze.current = 0);
            K();
            return;
          }
          Ze.current = ao;
          return;
        }
        if (We.current !== B_target) {
          We.current = null;
          return;
        }
        We.current = null;
        const je = window.getSelection();

        if (!je || je.toString().length <= 0) {
          rt();
        }
      },
      [_, K, rt]
    );

    const Mt = Te(() => vI(t.author), [t.author]);

    const Mn = Te(() => Wr(t.attachments), [t.attachments]);

    const Je = Te(() => Rf(t.attachments), [t.attachments]);

    const Ko = i("div", {
      className: `${be.postInner} ${m ? be.isFeed : ""} ${o || ""}`,
      children: [
        m &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: be.avatarLink,
            children: i(Et, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: $,
              onFollowBadgeClick: J,
            }),
          }),
        i("div", {
          className: be.postContent,
          children: [
            i(IT, {
              author: Mt,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !m,
              isOnOwnProfile: r,
              isPinned: s,
              onReport: ee,
              onEdit: f ?? ce,
              onDelete: q,
              onPin: p,
              onCopyLink: _e,
              onWastePaper: u ? undefined : te,
              editLocked: w.locked || T.locked,
              accessory: t.notebook
                ? i(Cf, { className: be.notebookLabel, disabled: u })
                : null,
            }),
            i("div", {
              className: be.postBody,
              children: [
                t.text &&
                  i("div", {
                    className: be.textWrapper,
                    children: [
                      i("div", {
                        ref: Ce,
                        className: `${be.text} ${Ee ? be.collapsed : ""}`,
                        style: m && Ee ? { maxHeight: `${de}px` } : undefined,
                        children:
                          t.corrector || t.redPen
                            ? i(ba, {
                                postId: t.id,
                                authorId: t.author.id,
                                text: t.text,
                                spans: t.spans,
                                initial: t.corrector,
                                initialRedPen: t.redPen,
                                signature: false,
                                selectable: !Ee && !u,
                              })
                            : i(va, { text: t.text, spans: t.spans ?? [] }),
                      }),
                      m &&
                        Ee &&
                        i("button", {
                          type: "button",
                          className: be.expandButton,
                          onClick: Oe,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Mn.length > 0 &&
                  i(ya, { media: Mn, isFeed: m, postVs: t.vs, source: c }),
                Je &&
                  i(De, {
                    fallback: null,
                    children: i(_I, {
                      title: Je.question,
                      options: Je.options.map(B => ({
                        id: B.id,
                        text: B.text,
                        votes: B.votes ?? 0
                      })),
                      totalVotes: Je.totalVotes ?? 0,
                      voted:
                        (Je.myVotes ?? []).length > 0 ||
                        (Je.myVote !== undefined && Je.myVote !== null),
                      selectedOptionId: Je.myVote,
                      selectedOptionIds: Je.myVotes ?? [],
                      multipleChoice: Je.multipleChoice ?? false,
                      onVote: Q,
                      onVoteMultiple: x,
                      disabled: Je.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  i(gI, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                t.corrector && i(_f, { marks: w.marks, postId: t.id }),
                t.redPen &&
                  i(bf, {
                    claims: T.claims,
                    visible: T.corrections.length > 0,
                    postId: t.id,
                  }),
                i(Nf, {
                  compact: u,
                  emojiOnly: u,
                  flush: u,
                  infiniteLike: u,
                  liked: Y,
                  reposted: N.reposted,
                  likesCount: F,
                  repostsCount: N.repostsCount,
                  commentsCount: N.commentsCount,
                  viewsCount: N.viewsCount,
                  dominantEmoji: N.dominantEmoji,
                  onLike: u ? V : X,
                  onRepost: u ? fe : W,
                  onComment: u ? Z : se,
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
          className: `${be.post} ${t.notebook ? be.notebookPost : ""} ${
            t.notebook?.style === "grid" ? be.notebookGrid : ""
          } ${t.notebook?.style === "ruled" ? be.notebookRuled : ""} ${
            a ? "flash-highlight" : ""
          }`,
          "data-alice-water-anchor-kind": "post",
          "data-alice-water-anchor-id": t.id,
          onMouseDown: ft,
          onClick: dn,
          children: [
            i(tT, { placements: h, anchorKind: "post", anchorId: t.id }),
            Ko,
          ],
        })
      : i("div", {
          ref: me,
          className: `${t.notebook ? be.notebookPost : ""} ${
            t.notebook?.style === "grid" ? be.notebookGrid : ""
          } ${t.notebook?.style === "ruled" ? be.notebookRuled : ""}`,
          children: Ko,
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

const bI = "P4tb";
const SI = "Ytzz";
const CI = "h18s";
const kI = "wslX";
const NI = "rYlw";
const TI = "Il8P";
const II = "FrIB";
const RI = "T9IH";
const AI = "cPkB";
const PI = "nbAW";
const LI = "Bfe7";
const OI = "iwmY";
const $I = "KogR";
const xI = "inEN";
const MI = "N276";
const DI = "bFjU";
const UI = "od8j";
const FI = "JUtu";
const BI = "IQVg";
const HI = "bZd6";
const VI = "R8UN";
const WI = "uH9M";
const jI = "DPBh";
const zI = "Uupk";

const ve = {
  commentWrapper: bI,
  threadItem: SI,
  avatarWrapper: CI,
  threadLine: kI,
  commentBody: NI,
  showMoreBtn: TI,
  avatarPlaceholder: II,
  comment: RI,
  small: AI,
  commentTime: PI,
  commentText: LI,
  commentActions: OI,
  commentContent: $I,
  avatarLink: xI,
  authorLink: MI,
  commentHeader: DI,
  moreButton: UI,
  commentHeaderLeft: FI,
  replyMention: BI,
  commentMedia: HI,
  reactionWrapper: VI,
  commentAction: WI,
  liked: jI,
  replyButton: zI,
};

const qI = le(() => ie(() => import("./index-DGh0mns_.js"), __vite__mapDeps([21, 11, 22])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const YI = Qr((
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
    onLike: f,
    onReply: p,
    onReport: d,
    onEdit: h,
    onDelete: m,
    replyTo: _,
    hideAvatar: v = false,
    isWallOwner: g = false,
  }
) => {
  const b = Bd(a);
  const y = fa(t.id);

  const k = ge(E => E.profile?.id);

  const S = t.id === k;
  const C = S || g;
  const w = u === "xs";

  const T = Te(() => {
    const E = [];

    if (S &&
      h) {
      E.push({
        id: "edit",
        label: "Редактировать",
        icon: i(jd, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (C &&
      m) {
      E.push({
        id: "delete",
        label: "Удалить",
        icon: i(Qd, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!S) {
      E.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(qd, { size: 16 }),
        danger: true,
        onClick: () => d(n),
      });
    }

    return E;
  }, [S, C, n, h, m, d]);

  const N = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${ve.comment} ${w ? ve.small : ""}`,
    children: [
      !v &&
        i("a", {
          href: N,
          className: ve.avatarLink,
          children: i(Et, { src: t.avatar, alt: t.displayName, size: u }),
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
                    children: i(Go, {
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
                            children: b,
                          })
                        : undefined,
                    }),
                  }),
                  !y &&
                    i("span", {
                      className: ve.commentTime,
                      "data-comment-time": true,
                      children: b,
                    }),
                ],
              }),
              i(mf, {
                trigger: i(Gd, { size: w ? 14 : 16 }),
                items: T,
                position: "bottom-right",
                className: ve.moreButton,
              }),
            ],
          }),
          (_ || o) &&
            i("div", {
              className: ve.commentText,
              children: [
                _ &&
                  i(ye, {
                    children: [
                      i("a", {
                        href: `/@${_.username}`,
                        className: ve.replyMention,
                        children: ["@", _.displayName],
                      }),
                      ", ",
                    ],
                  }),
                o && i(va, { text: o, spans: r }),
              ],
            }),
          Wr(s).length > 0 &&
            i("div", {
              className: ve.commentMedia,
              children: i(ya, { media: Wr(s) }),
            }),
          s
            .filter(E => E.type === "audio")
            .map(E => i(
            De,
            {
              fallback: null,
              children: i(qI, { src: E.url, duration: E.duration }),
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
                  onClick: () => f(),
                  children: [
                    i(oa, { size: 14, filled: l }),
                    i(So, { value: c }),
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

const Af = Qr((
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
    onReport: f,
    onEdit: p,
    onDelete: d,
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

  const b = t.previewReplies ?? [];
  const y = m === t.id;
  const k = t.stats.replies > b.length;

  const S = [
    { type: "parent", data: t, author: g },
    ...b.map(C => ({
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
    className: `${ve.commentWrapper} ${y ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      S.map((C, w) => {
        const N = !(w === S.length - 1 && !v && !k);
        const E = m === C.data.id;
        return i(
          "div",
          {
            "data-comment-id": C.data.id,
            className: `${ve.threadItem} ${E ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: ve.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${C.author.username ?? C.author.id}`,
                    className: ve.avatarLink,
                    children: i(Et, {
                      src: C.author.avatar,
                      alt: C.author.displayName,
                      size: "sm",
                    }),
                  }),
                  N && i("div", { className: ve.threadLine }),
                ],
              }),
              i("div", {
                className: ve.commentBody,
                children: i(YI, {
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
                  onLike: C.type === "parent" ? n : () => o(C.data.id),
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
                  onEdit: p,
                  onDelete: d,
                  hideAvatar: true,
                  isWallOwner: _,
                }),
              }),
            ],
          },
          C.data.id
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
                k && i("div", { className: ve.threadLine }),
              ],
            }),
            i("div", {
              className: ve.commentBody,
              children: i(hf, {
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
          className: ve.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - b.length, " ответов"],
        }),
    ],
  });
});

function GI({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: o = r => r,
}) {
  const r = O(null);
  const [s, a] = A(0);
  const [c, l] = A(0);
  const u = O(new Map());
  const f = O(new Map());
  const p = O(0);

  if (p.current !== e) {
    (p.current = e);
    f.current.clear();
  }

  const d = I(
      (S) => {
        const C = o(S);
        return u.current.get(C) ?? t;
      },
      [o, t]
    );

  const h = I(
    (S) => {
      if (S === 0) {
        return 0;
      }
      const C = f.current.get(S);
      if (C !== undefined) {
        return C;
      }
      let w = 0;
      let T = 0;
      for (let N = S - 1; N >= 0; N--) {
        const E = f.current.get(N);
        if (E !== undefined) {
          (w = N);
          (T = E);
          break;
        }
      }
      for (let N = w; N < S; N++) {
        T += d(N);
      }
      f.current.set(S, T);
      return T;
    },
    [d]
  );

  const m = Te(() => e === 0 ? 0 : h(e - 1) + d(e - 1), [e, h, d]);

  const { startIndex: _, endIndex: v } = Te(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let S = 0;
    let C = e - 1;

    while (S < C) {
      const E = Math.floor((S + C) / 2);
      const P = h(E);
      const R = d(E);

      if (P + R < s) {
        (S = E + 1);
      } else {
        (C = E);
      }
    }

    const w = Math.max(0, S - n);
    let T = S;
    let N = h(S) - s;

    while (T < e && N < c + t * n) {
      (N += d(T));
      T++;
    }

    (T = Math.min(e - 1, T + n));
    return { startIndex: w, endIndex: T };
  }, [e, s, c, h, d, n, t]);

  const g = Te(() => {
    if (e === 0) {
      return [];
    }
    const S = [];
    for (let C = _; C <= v; C++) {
      S.push({ index: C, key: o(C), start: h(C), size: d(C) });
    }
    return S;
  }, [_, v, o, h, d, e]);

  const b = I(
    (S, C) => {
      if (!S) {
        return;
      }
      const w = o(C);
      const T = S.getBoundingClientRect().height;
      if (T <= 0) {
        return;
      }
      const N = u.current.get(w);

      if ((N === undefined || Math.abs(N - T) > 2)) {
        u.current.set(w, T);
        f.current.clear();
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
    (S) => {
      if (r.current) {
        r.current.removeEventListener("scroll", y);
      }

      (r.current = S);

      if (S) {
        l(S.clientHeight);
        a(S.scrollTop);
        S.addEventListener("scroll", y, { passive: true });
      }
    },
    [y]
  );

  D(() => {
    if (!r.current) {
      return;
    }
    const S = new ResizeObserver((C) => {
      for (const w of C) {
        l(w.contentRect.height);
      }
    });
    S.observe(r.current);

    return () => S.disconnect();
  }, []);

  D(
    () => () => {
      if (r.current) {
        r.current.removeEventListener("scroll", y);
      }
    },
    [y]
  );

  return { containerRef: k, virtualItems: g, totalSize: m, measureElement: b };
}
const KI = "G8Fh";
const XI = "au3V";
const QI = "bRqX";
const ZI = "b3v7";
const JI = "uQPD";
const e2 = "YUzc";
const t2 = "UV7o";
const n2 = "K1xQ";
const o2 = "LIAb";
const r2 = "wE0q";
const s2 = "RDme";

const ht = {
  comments: KI,
  sortWrapper: XI,
  sortSelect: QI,
  commentsList: ZI,
  commentItem: JI,
  empty: e2,
  loadMoreSentinel: t2,
  virtualContainer: n2,
  virtualContent: o2,
  virtualItem: r2,
  inputWrapper: s2,
};

const i2 = 120;
function a2({
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
  onStartReply: f,
  onCancelReply: p,
  onSubmitReply: d,
  onVoiceSend: h,
  onLoadReplies: m,
  onReport: _,
  onEdit: v,
  onDelete: g,
}) {
  const b = O(false);

  const {
    containerRef: y,
    virtualItems: k,
    totalSize: S,
    measureElement: C,
  } = GI({
    itemCount: e.length,
    estimatedItemHeight: i2,
    overscan: 3,
    getItemKey: T => e[T]?.id ?? T,
  });

  D(() => {
    if (!t || n || k.length === 0) {
      b.current = false;
      return;
    }
    const T = k[k.length - 1]?.index ?? 0;
    const N = e.length - 5;

    if (T >= N && !b.current) {
      (b.current = true);
      o();
    }
  }, [k, e.length, t, n, o]);

  D(() => {
    if (!n) {
      (b.current = false);
    }
  }, [n]);

  const w = I(
    (T, N) => {
      C(T, N);
    },
    [C]
  );
  return i("div", {
    ref: y,
    className: ht.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: ht.virtualContent,
        style: { height: `${S}px` },
        children: k.map((T) => {
          const N = e[T.index];
          return N
            ? i(
                "div",
                {
                  ref: E => w(E, T.index),
                  className: ht.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${T.start}px)`,
                  },
                  children: i(Af, {
                    comment: N,
                    onLike: () => l(N.id),
                    onLikeReply: u,
                    replyingTo: r?.commentId === N.id ? r : null,
                    onStartReply: f,
                    onCancelReply: p,
                    onSubmitReply: d,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: _,
                    onEdit: v,
                    onDelete: g,
                    isLoadingReplies: a === N.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                T.key
              )
            : null;
        }),
      }),
      n && i(_a, { variant: "medium" }),
    ],
  });
}
const c2 = "OxeV";
const l2 = "xMei";
const u2 = "hTZB";
const Ws = { wrapper: c2, popup: l2, closing: u2 };

const d2 = le(() => ie(() => import("./index-CSAhhQIK.js"), __vite__mapDeps([23, 24])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const xl = 280;
const Ml = 380;
const js = 8;
const f2 = 100;
const Dl = 150;
const p2 = 150;
function Sa({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [o, r] = A(false);
  const [s, a] = A(false);
  const [c, l] = A(null);
  const u = O(null);
  const f = O(null);
  const p = O(null);
  const d = O(null);
  const h = O(null);
  const m = O(null);

  const _ = I(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const T = u_current.getBoundingClientRect();

    const {
      innerHeight,
      innerWidth
    } = window;

    const P = innerHeight - T.bottom;
    const R = innerWidth - T.left;
    const T_right = T.right;
    const Y = P >= Ml + js ? "bottom" : "top";
    const F = R >= xl || R > T_right ? "left" : "right";
    let X;
    let K;

    if (Y === "top") {
      (X = T.top - Ml - js);
    } else {
      (X = T.bottom + js);
    }

    if (F === "left") {
      (K = T.left);
    } else {
      (K = T.right - xl);
    }

    l({
      top: X,
      left: K,
      transformOrigin: `${Y === "top" ? "bottom" : "top"} ${
        F === "left" ? "left" : "right"
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
      }, p2));
    }
  }, [o, s]);

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

    if (!o) {
      (d.current = window.setTimeout(() => {
          v();
        }, f2));
    }
  };

  const y = () => {
    if (d.current) {
      clearTimeout(d.current);
      (d.current = null);
    }

    (h.current = window.setTimeout(() => {
        g();
      }, Dl));
  };

  D(
    () => () => {
      if (d.current) {
        clearTimeout(d.current);
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

  const S = () => {
    h.current = window.setTimeout(() => {
      g();
    }, Dl);
  };

  const C = (w) => {
    w.preventDefault();
  };

  return i("div", {
    ref: f,
    className: Ws.wrapper,
    onMouseEnter: b,
    onMouseLeave: y,
    onMouseDown: C,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(e0, { size: n }),
      }),
      o &&
        c &&
        $(
          i("div", {
            ref: p,
            className: `${Ws.popup} ${s ? Ws.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: k,
            onMouseLeave: S,
            onMouseDown: C,
            children: i(De, {
              fallback: null,
              children: i(d2, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const h2 = "CmVb";
const m2 = "N7Bz";
const g2 = "VEJ8";
const _2 = "qgyU";
const v2 = "WCY7";
const y2 = "FpyA";
const w2 = "PLqK";
const E2 = "LRHV";
const b2 = "kUmZ";
const S2 = "X9QM";
const C2 = "V0zT";
const k2 = "rICB";

const it = {
  editCommentModal: h2,
  form: m2,
  header: g2,
  title: _2,
  content: v2,
  editor: y2,
  actions: w2,
  mediaButtons: E2,
  mediaButton: b2,
  submitGroup: S2,
  charCount: C2,
  error: k2,
};

const Ul = 2000/* 2e3 */;
function N2({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = Kt();

  const r = rn(S => S.editComment);

  const s = ge(S => S.profile);

  const a = Gt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: p,
  } = es(t, n);

  const [d, h] = A(false);
  const m = Ul - c.length;
  const _ = m < 0;
  const v = c !== t;
  const g = JSON.stringify(l) !== JSON.stringify(n);
  const b = v || g;

  const y = I(
    (S) => {
      p(S.emoji);
    },
    [p]
  );

  const k = I(async () => {
    if (!(!c.trim() || _ || !b || d)) {
      h(true);
      try {
        await r(e, c, l);
        o();
      } catch (S) {
        console.error("Failed to update comment:", S);
      } finally {
        h(false);
      }
    }
  }, [c, l, _, b, d, r, e, o]);

  return i(xn, {
    frameless: true,
    onClose: o,
    className: it.editCommentModal,
    children: i("div", {
      className: it.form,
      children: [
        i("div", {
          className: it.header,
          children: i("span", {
            className: it.title,
            children: "Редактирование комментария",
          }),
        }),
        i("div", {
          className: it.content,
          children: [
            i(Et, { src: s?.avatar ?? "", size: "sm" }),
            i(is, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Комментарий...",
              maxLength: Ul,
              autoFocus: true,
              className: it.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
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
                i(Sa, { onEmojiSelect: y, buttonClassName: it.mediaButton }),
            }),
            i("div", {
              className: it.submitGroup,
              children: [
                _ &&
                  i("span", {
                    className: `${it.charCount} ${it.error}`,
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
                  disabled: !c.trim() || _ || !b || d,
                  onClick: k,
                  children: d ? "Сохранение..." : "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const T2 = le(() => ie(() => import("./index-DTLaGq8q.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function I2({
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
  isWallOwner: f = false,
  variant: p = "modal",
  hideInput: d = false,
}) {
  const m = Gt() && p === "modal";
  const [_, v] = A(null);
  const [g, b] = A(null);
  const [y, k] = A(null);
  const [S, C] = A(null);
  const w = O(null);
  const { openModal: T } = Kt();

  const N = rn(q => q.highlightedCommentId);

  const E = rn(q => q.clearHighlightedComment);

  const P = rn(q => q.loadReplies);

  const R = rn(q => q.deleteComment);

  const $ = rn(q => q.toggleCommentLike);

  Cy({
    sentinelRef: w,
    hasMore: o,
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
    const _e = [];

    const Q = (x) => {
      if (q) {
        return;
      }
      const V = document.querySelector(`[data-comment-id="${N}"]`);
      if (!V) {
        if (x > 0) {
          _e.push(window.setTimeout(() => Q(x - 1), 150));
        } else {
          E();
        }

        return;
      }
      V.scrollIntoView({ behavior: "smooth", block: "center" });
      b(N);
      E();

      _e.push(window.setTimeout(() => b(null), 900));
    };

    Q(40);

    return () => {
      (q = true);

      _e.forEach(x => clearTimeout(x));
    };
  }, [N, E]);

  const Y = async (q, _e, Q) => {
    if (_) {
      await c({
          text: q,
          spans: _e,
          parentId: _.commentId,
          replyToUserId: _.userId,
          replyToInfo: {
            id: _.userId,
            username: _.username,
            displayName: _.displayName,
          },
          attachments: Q,
        });

      v(null);
    }
  };

  const F = (q, _e, Q, x, V) => {
    v({ commentId: q, username: _e, displayName: Q, userId: x, replyId: V });
  };

  const X = () => {
    v(null);
  };

  const K = I(
    (q) => {
      $(q);
    },
    [$]
  );

  const se = I(
    async (q) => {
      k(q);
      try {
        await P(q);
      } finally {
        k(null);
      }
    },
    [P]
  );

  const W = I((q) => {
    C(q);
  }, []);

  const ee = I(
    (q) => {
      let _e = "";
      let Q = [];
      for (const x of e) {
        if (x.id === q) {
          (_e = x.text);
          (Q = x.spans ?? []);
          break;
        }
        const V = x.previewReplies?.find(Z => Z.id === q);
        if (V) {
          (_e = V.text);
          (Q = V.spans ?? []);
          break;
        }
      }
      T(i(N2, { commentId: q, initialText: _e, initialSpans: Q }));
    },
    [e, T]
  );

  const ce = I(
    (q) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        R(q);
      }
    },
    [R]
  );

  return i("div", {
    className: ht.comments,
    children: [
      i("div", {
        className: ht.sortWrapper,
        children: i("select", {
          value: r,
          onChange: q => s(q.target.value),
          className: ht.sortSelect,
          children: [
            i("option", { value: "new", children: "Новые" }),
            i("option", { value: "old", children: "Старые" }),
            i("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? i(tS, { count: 5 })
        : e.length === 0
        ? i("div", { className: ht.empty, children: "Нет комментариев" })
        : m
        ? i(a2, {
            comments: e,
            hasMore: o,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: _,
            flashingCommentId: g,
            loadingRepliesId: y,
            isWallOwner: f,
            onLikeComment: a,
            onLikeReply: K,
            onStartReply: F,
            onCancelReply: X,
            onSubmitReply: Y,
            onVoiceSend: l,
            onLoadReplies: se,
            onReport: W,
            onEdit: ee,
            onDelete: ce,
          })
        : i("div", {
            className: ht.commentsList,
            children: [
              e.map(q => i(
                "div",
                {
                  className: ht.commentItem,
                  children: i(Af, {
                    comment: q,
                    onLike: () => a(q.id),
                    onLikeReply: K,
                    replyingTo: _?.commentId === q.id ? _ : null,
                    onStartReply: F,
                    onCancelReply: X,
                    onSubmitReply: Y,
                    onVoiceSend: l,
                    onLoadReplies: se,
                    onReport: W,
                    onEdit: ee,
                    onDelete: ce,
                    isLoadingReplies: y === q.id,
                    flashingCommentId: g,
                    isWallOwner: f,
                  }),
                },
                q.id
              )
              ),
              o &&
                i("div", {
                  ref: w,
                  className: ht.loadMoreSentinel,
                  children: n && i(_a, { variant: "medium" }),
                }),
            ],
          }),
      !d &&
        i("div", {
          className: ht.inputWrapper,
          children: i(hf, {
            onSubmit: (q, _e, Q) => c({ text: q, spans: _e, attachments: Q }),
            onVoiceSend: l,
          }),
        }),
      S &&
        i(De, {
          fallback: null,
          children: i(T2, {
            targetType: "comment",
            targetId: S,
            onClose: () => C(null),
          }),
        }),
    ],
  });
}
const R2 = "PW0C";
const A2 = "bo6e";
const P2 = "uANo";
const L2 = "RaNY";
const gr = { commentsModal: R2, header: A2, title: P2, content: L2 };
function O2({ postId: e, onClose: t }) {
  const n = O(null);

  const {
    comments: o,
    commentsLoading: r,
    commentsLoadingMore: s,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: l,
    loadMoreComments: u,
    toggleCommentLike: f,
    addComment: p,
  } = rn(
    Cl(y => ({
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

  const { commentsSort: d, setCommentsSort: h } = kr(
    Cl(y => ({
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
      f(y);
    },
    [f]
  );

  const g = I(
    async (y) => {
      await p(e, y);
    },
    [p, e]
  );

  const b = I(
    async (y) => {
      const k = `voice_${Date.now()}.webm`;
      const S = new File([y], k, { type: y.type || "audio/webm" });
      const C = await qn.uploadMedia(S);
      await p(e, { text: "", attachments: [{ mediaId: C.id }] });
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
        children: i(I2, {
          comments: o,
          isLoading: r,
          isLoadingMore: s,
          hasMore: a,
          sort: d,
          onSortChange: m,
          onLikeComment: v,
          onAddComment: g,
          onVoiceSend: b,
          onLoadMore: _,
        }),
      }),
    ],
  });
}

const $2 = {
    inventory: async () => (await L.get(U.postNotebooks.inventory, { skipErrorToast: true })).data,
  };

const x2 = le(() => ie(() => import("./index-D7a-9YNe.js"), __vite__mapDeps([25, 26])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);

function Pf({
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
    } = es();

  const [u, f] = A(false);
  const [p, d] = A(false);
  const [h, m] = A(false);
  const [_, v] = A(null);
  const [g, b] = A(null);
  const [y, k] = A(false);
  const [S, C] = A("");
  const w = O(null);
  const T = O(0);
  const N = Gt();
  const P = pa()?.subscription?.isActive ?? false;
  const R = Yo().status === "allowed";
  D(() => {
    if (!R) {
      v(null);
      return;
    }
    let B = true;
    let he = false;
    const je = async () => {
      if (!he) {
        he = true;
        try {
          const Mf = await $2.inventory();

          if (B) {
            v(Mf);
          }
        } catch {
        } finally {
          he = false;
        }
      }
    };
    je();
    const ao = y
      ? window.setInterval(() => {
          je();
        }, 1500)
      : undefined;
    return () => {
      (B = false);

      if (ao !== undefined) {
        window.clearInterval(ao);
      }
    };
  }, [y, R]);

  const {
      images: $,
      uploadingImages: Y,
      isUploading: F,
      hasVideo: X,
      openFilePicker: K,
      removeImage: se,
      addImage: W,
      uploadFiles: ee,
      clearAll: ce,
      fileInputRef: q,
      handleFileChange: _e,
    } = ff(10, P);

  const {
    isPollOpen: Q,
    poll: x,
    togglePoll: V,
    handlePollQuestionChange: Z,
    handlePollOptionChange: fe,
    handleAddPollOption: J,
    handleRemovePollOption: te,
    handleMultipleChoiceToggle: me,
    handleClosePoll: Ie,
    isPollValid: Se,
    getPollData: de,
    resetPoll: dt,
  } = nS();

  const bt = Vt.MAX_CHARS - o.length;
  const M = bt < 0;
  const Ee = Q && Se();
  const Ce = $.length > 0 || Y.length > 0;
  const Oe = o.trim().length > 0 || Ee || Ce;
  const Ne = P ? `${Si},${Mw}` : Si;

  const We = I(async () => {
    if (!(!Oe || M || F || p)) {
      d(true);
      C("");
      try {
        const B = $.map(je => ({
          mediaId: je.mediaId,
          url: je.url
        }));

        const he =
          g && _
            ? {
                eventId: _.eventId,
                style: g,
                operationId: w.current ?? (w.current = crypto.randomUUID()),
              }
            : undefined;

        await e?.(o, r, B, de(), he);
        l();
        ce();
        dt();

        if (g &&
          _) {
          v(
            je => je && {
              ...je,
              balance: {
                ...je.balance,
                [g]: Math.max(0, je.balance[g] - 1),
              },
            }
          );
        }

        b(null);
        k(false);
        (w.current = null);
      } catch (B) {
        C(
          xe(B)
            ? {
                NO_POST_NOTEBOOKS:
                  "Такой тетрадки уже нет в рюкзаке. Выберите другое оформление или купите новое.",
                POST_NOTEBOOK_EVENT_ENDED:
                  "Ивент уже завершён. Пост сохранён в черновике и не был опубликован.",
                POST_NOTEBOOK_PAUSED:
                  "Оформление постов временно недоступно. Пост сохранён в черновике.",
                OPERATION_CONFLICT:
                  "Не удалось безопасно повторить публикацию. Обновите страницу и попробуйте снова.",
              }[B.code] ??
                B.message ??
                "Не удалось опубликовать пост. Попробуйте ещё раз."
            : "Не удалось опубликовать пост. Попробуйте ещё раз."
        );
      } finally {
        d(false);
      }
    }
  }, [Oe, M, F, p, o, r, $, de, e, l, ce, dt, g, _]);

  const Ze = I(
    (B) => {
      if (_?.applicationsEnabled && _.balance[B] >= 1) {
        b(he => he === B ? null : B);
        C("");
        (w.current = null);
      }
    },
    [_]
  );

  const ft = I((B) => {
    const he = window.location.pathname;
    Ke(
      `/event/alice-ai?product=post_notebook&variant=${B}&returnTo=${encodeURIComponent(
        he
      )}`
    );
  }, []);

  const rt = I(
    (B) => {
      W(B);
    },
    [W]
  );

  const dn = I(
    (B) => {
      c(B.emoji);
    },
    [c]
  );

  const Mt = I((B) => {
    B.preventDefault();
    B.stopPropagation();
    T.current++;

    if (B.dataTransfer?.types.includes("Files")) {
      m(true);
    }
  }, []);

  const Mn = I((B) => {
    B.preventDefault();
    B.stopPropagation();
  }, []);

  const Je = I((B) => {
    B.preventDefault();
    B.stopPropagation();
    T.current--;

    if (T.current === 0) {
      m(false);
    }
  }, []);

  const Ko = I(
    (B) => {
      B.preventDefault();
      B.stopPropagation();
      (T.current = 0);
      m(false);
      const he = B.dataTransfer?.files;

      if (he && he.length > 0) {
        ee(Array.from(he));
      }
    },
    [ee]
  );

  return i("div", {
    className: `${j.form} ${h ? j.dragActive : ""} ${
      g === "grid" ? j.notebookGrid : ""
    } ${g === "ruled" ? j.notebookRuled : ""}`,
    onDragEnter: Mt,
    onDragOver: Mn,
    onDragLeave: Je,
    onDrop: Ko,
    children: [
      h &&
        i("div", {
          className: j.dragOverlay,
          children: [
            i(Yd, { size: 32 }),
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
        children: i(is, {
          ref: s,
          value: o,
          spans: r,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: j.editor,
          minHeight: 40,
          maxHeight: Vt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: ee,
        }),
      }),
      i(pf, { images: $, uploadingImages: Y, onRemove: se }),
      i("input", {
        ref: q,
        type: "file",
        accept: Ne,
        multiple: !X,
        onChange: _e,
        style: { display: "none" },
      }),
      Q &&
        i(eC, {
          poll: x,
          onQuestionChange: Z,
          onOptionChange: fe,
          onAddOption: J,
          onRemoveOption: te,
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
                  children: i(ut, { size: 16 }),
                }),
              ],
            }),
            i("p", {
              children:
                "Одно оформление расходуется после успешной публикации.",
            }),
            i("div", {
              className: j.notebookOptions,
              children: ["grid", "ruled"].map((B) => {
                const he = _.balance[B];
                const je = B === "grid" ? "В клетку" : "В линейку";
                return i(
                  "div",
                  {
                    className: j.notebookOptionRow,
                    children: [
                      i("button", {
                        type: "button",
                        className: `${j.notebookOption} ${
                          g === B ? j.notebookOptionActive : ""
                        }`,
                        disabled: !_.applicationsEnabled || he < 1,
                        onClick: () => Ze(B),
                        children: [
                          i("span", {
                            className:
                              B === "grid" ? j.gridSwatch : j.ruledSwatch,
                            "aria-hidden": "true",
                          }),
                          i("span", {
                            children: [
                              i("strong", { children: je }),
                              i("small", { children: ["В рюкзаке: ", he] }),
                            ],
                          }),
                        ],
                      }),
                      he < 1 &&
                        i("button", {
                          type: "button",
                          className: j.notebookBuy,
                          onClick: () => ft(B),
                          children: "Купить",
                        }),
                    ],
                  },
                  B
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
      S && i("p", { className: j.submitError, role: "alert", children: S }),
      i("div", {
        className: j.actions,
        children: [
          i("div", {
            className: j.mediaButtons,
            children: [
              i("button", {
                className: j.mediaButton,
                onClick: K,
                title: P ? "Добавить медиа" : "Добавить изображение",
                children: i(Vd, {}),
              }),
              !N &&
                i(Sa, { onEmojiSelect: dn, buttonClassName: j.mediaButton }),
              i("button", {
                className: j.mediaButton,
                onClick: () => f(true),
                title: "Нарисовать",
                disabled: X,
                children: i(Zy, { size: 20 }),
              }),
              i("button", {
                className: `${j.mediaButton} ${Q ? j.active : ""}`,
                onClick: V,
                title: "Добавить опрос",
                children: i(Jy, {}),
              }),
              _ &&
                i("button", {
                  type: "button",
                  className: `${j.mediaButton} ${j.notebookButton} ${
                    g ? j.active : ""
                  }`,
                  onClick: () => k(B => !B),
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
                  children: bt,
                }),
              i(Fe, {
                size: "lg",
                disabled: !Oe || M || F || p,
                loading: p,
                onClick: We,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        i(De, {
          fallback: null,
          children: i(x2, {
            isOpen: u,
            onClose: () => f(false),
            onSave: rt,
            mode: "post",
          }),
        }),
    ],
  });
}
const M2 = "OkBV";
const D2 = "T3Ah";
const Fl = { createPostModal: M2, title: D2 };
function U2({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: o } = Kt();

  const r = ge(c => c.profile);

  const s = ae(c => c.createPost);

  const a = async (c, l, u, f, p) => {
    if (!r) {
      return;
    }
    const d = e ?? r.id;

    await s({
      wallOwnerId: d,
      text: c,
      spans: l,
      attachments: u,
      poll: f,
      notebook: p,
    });

    await n?.();
    o();
  };

  return i(xn, {
    frameless: true,
    onClose: o,
    className: Fl.createPostModal,
    children: [
      i("h2", { className: Fl.title, children: "Создать пост" }),
      i(Pf, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const F2 = "QDWp";
const B2 = "W4rz";
const H2 = "wlYO";
const V2 = "LAPf";
const W2 = "Iief";
const j2 = "aoOi";
const z2 = "J3AH";
const q2 = "qKXm";
const Y2 = "FGv1";
const G2 = "k3cc";

const kt = {
  editPostModal: F2,
  form: B2,
  whatsNew: H2,
  editor: V2,
  actions: W2,
  mediaButtons: j2,
  mediaButton: z2,
  submitGroup: q2,
  charCount: Y2,
  error: G2,
};

const Bl = 5000/* 5e3 */;
function K2({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = Kt();

  const r = ae(S => S.editPost);

  const s = ge(S => S.profile);

  const a = Gt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: p,
  } = es(t, n);

  const [d, h] = A(false);
  const m = Bl - c.length;
  const _ = m < 0;
  const v = c !== t;
  const g = JSON.stringify(l) !== JSON.stringify(n);
  const b = v || g;

  const y = I(
    (S) => {
      p(S.emoji);
    },
    [p]
  );

  const k = I(async () => {
    if (!(!c.trim() || _ || !b || d)) {
      h(true);
      try {
        await r(e, c, l);
        o();
      } catch (S) {
        console.error("Failed to update post:", S);
      } finally {
        h(false);
      }
    }
  }, [c, l, _, b, d, r, e, o]);

  return i(xn, {
    frameless: true,
    onClose: o,
    className: kt.editPostModal,
    children: i("div", {
      className: kt.form,
      children: [
        i("div", {
          className: kt.whatsNew,
          children: [
            i(Et, { src: s?.avatar ?? "", size: "md" }),
            i(is, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Что нового?",
              maxLength: Bl,
              autoFocus: true,
              className: kt.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        i("div", {
          className: kt.actions,
          children: [
            i("div", {
              className: kt.mediaButtons,
              children:
                !a &&
                i(Sa, { onEmojiSelect: y, buttonClassName: kt.mediaButton }),
            }),
            i("div", {
              className: kt.submitGroup,
              children: [
                _ &&
                  i("span", {
                    className: `${kt.charCount} ${kt.error}`,
                    children: m,
                  }),
                i(Fe, {
                  size: "lg",
                  disabled: !c.trim() || _ || !b,
                  loading: d,
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
const X2 = "Lh5V";
const Q2 = "pkUY";
const Z2 = "yaS6";
const J2 = "yfG5";
const eR = "JKyd";
const tR = "lyAC";
const nR = "csh2";
const oR = "lHHw";
const rR = "hcEj";

const Ft = {
  repostModal: X2,
  content: Q2,
  title: Z2,
  inputSection: J2,
  textarea: eR,
  originalPost: tR,
  postHeader: nR,
  postText: oR,
  actions: rR,
};

function sR({ post: e, onClose: t, onSuccess: n }) {
  const [o, r] = A("");
  const [s, a] = A(false);

  const c = ge(p => p.profile);

  const l = ae(p => p.updatePostReposted);

  const u = ae(p => p.prependPost);

  const f = async () => {
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
    className: Ft.repostModal,
    children: i("div", {
      className: Ft.content,
      children: [
        i("h2", { className: Ft.title, children: "Репост" }),
        i("div", {
          className: Ft.inputSection,
          children: [
            c && i(Et, { src: c.avatar, alt: c.displayName, size: "sm" }),
            i("textarea", {
              className: Ft.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: o,
              onInput: p => r(p.target.value),
              rows: 3,
            }),
          ],
        }),
        i("div", {
          className: Ft.originalPost,
          children: [
            i("div", {
              className: Ft.postHeader,
              children: [
                i(Et, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                i(Go, {
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
              className: Ft.postText,
              children:
                e.corrector || e.redPen
                  ? i(ba, {
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
          className: Ft.actions,
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

const iR = ({ showCreateButton: e = true }) => {
  const t = Yo();
  const n = pa();
  const o = ts();
  const { initialize: r, disconnectSSE: s } = sn();
  const a = Ud();

  const c = Jr(F => F.fetchPortal);

  const l = Fd(a);
  const u = !l && a.active && !!a.url;
  const f = l ? ue.ALICE_EVENT : u ? a.url : ue.EVENT;

  D(
    () => {
      if (o) {
        r();
      }

      return () => {
        s();
      };
    },
    [o, r, s]
  );

  D(() => {
    c();
  }, [c]);

  const p = n?.username ? `/@${n.username}` : "/profile";

  const d = Te(
    () => [
      { id: "feed", label: "Лента", icon: zd, href: "/" },
      { id: "shop", label: "Магаз", icon: Xd, href: "/shop" },
      ...((a.active && a.url) || t.status === "allowed"
        ? [
            {
              id: "event",
              label: "Ивент",
              icon: null,
              href: f,
              match: ue.EVENT,
            },
          ]
        : []),
      {
        id: "notifications",
        label: "Уведы",
        icon: sa,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: wi, href: p },
    ],
    [p, f, a.active, a.url, t.status]
  );

  const [h, m] = A({});
  const [_, v] = A(true);
  const g = O([]);
  const b = O(null);
  const [y] = Zr();
  const { openModal: k } = Kt();

  const S = ae(F => F.fetchFeed);

  const C = ae(F => F.isRefreshing);

  const w = Jd();
  const T = uf();

  const N = I(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      S(true);
    }
  }, [S]);

  const E = Te(() => {
    const F = y.url || "/";
    return ca.some(X => F.startsWith(X));
  }, [y.url]);

  const P = Te(() => {
    const F = y.url || "/";
    return n?.username
      ? F === `/@${n.username}` || F.startsWith(`/@${n.username}/`)
      : false;
  }, [y.url, n?.username]);

  const R = O(null);

  const $ = I((F, X = false) => {
    if (!X && R.current === F) {
      return;
    }
    R.current = F;
    const K = g.current[F];
    const b_current = b.current;
    if (K && b_current) {
      const W = parseFloat(getComputedStyle(b_current).paddingLeft) || 0;

      m({
        width: K.offsetWidth,
        transform: `translateX(${K.offsetLeft - W}px)`,
      });

      v(true);
    }
  }, []);

  D(() => {
    const F = y.url || "/";

    const X = d.findIndex((K) => {
      const se = K.match ?? K.href;
      return (
        F === se || F.startsWith(`${se}/`) || (K.id === "profile" && P)
      );
    });

    if (X === -1) {
      v(false);
    } else {
      $(X, true);
    }
  }, [y.url, d, P, $]);

  D(() => {
    const b_current = b.current;
    if (!b_current) {
      return;
    }
    const X = b_current.querySelector(`.${Ge.active}`);
    if (X) {
      const K = g.current.indexOf(X);

      if (K !== -1) {
        (R.current = null);
        $(K);
      }
    }
  }, [$]);

  D(() => {
    const b_current = b.current;
    if (!b_current) {
      return;
    }

    const X = () => {
        const se = b_current.querySelector(`.${Ge.active}`);
        if (se) {
          const W = g.current.indexOf(se);

          if (W !== -1) {
            $(W, true);
          }
        }
      };

    const K = new ResizeObserver(X);
    K.observe(b_current);
    window.addEventListener("resize", X);

    return () => {
      K.disconnect();
      window.removeEventListener("resize", X);
    };
  }, [$]);

  const Y = () => {
    k(i(U2, {}));
  };
  return E
    ? null
    : i("div", {
        className: Ge.mobileNavigationWrapper,
        children: [
          i("nav", {
            ref: b,
            className: Ge.navigation,
            children: [
              i("div", {
                className: `${Ge.indicator} ${_ ? "" : Ge.indicatorHidden}`,
                style: h,
              }),
              d.map((F, X) => {
                const F_icon = F.icon;
                const se = F.id === "event";
                const W = se && u;
                const ee = y.url || "/";
                const ce = F.match ?? F.href;

                const _e =
                  ee === ce ||
                  ee.startsWith(`${ce}/`) ||
                  (F.id === "profile" && P);

                return i(
                  "a",
                  {
                    href: F.href,
                    target: W ? "_blank" : undefined,
                    rel: W ? "noopener noreferrer" : undefined,
                    ref: (Q) => {
                      (g.current[X] = Q);

                      if (Q && _e) {
                        $(X);
                      }
                    },
                    className: `${Ge.navItem} ${_e ? Ge.active : ""}`,
                    onClick: (Q) => {
                      if (_e && F.id === "feed") {
                        Q.preventDefault();
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
                          : i(ye, {
                              children: [
                                F.id === "feed" && C ? i(ra, {}) : i(F_icon, {}),
                                F.id === "notifications" &&
                                  w > 0 &&
                                  i("span", {
                                    className: Ge.badge,
                                    children: w > 99 ? "99+" : w,
                                  }),
                                F.id === "shop" &&
                                  T > 0 &&
                                  i("span", {
                                    className: Ge.badge,
                                    children: T,
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
          o &&
            e &&
            i("button", {
              className: Ge.createButton,
              onClick: Y,
              "aria-label": "Создать пост",
              children: i(ia, {}),
            }),
        ],
      });
};

const aR = "hEQ5";
const cR = "ZupK";
const lR = "HCjV";
const uR = "EZKM";
const dR = "VZKh";
const vo = { badge: aR, red: cR, green: lR, blue: uR, violet: dR };
function fR({ type: e }) {
  const t =
    e === "like"
      ? vo.red
      : e === "bell"
      ? vo.violet
      : ["wall_post", "reply", "repost"].includes(e)
      ? vo.green
      : vo.blue;
  return i("div", {
    className: `${vo.badge} ${t}`,
    children: [
      e === "follow" && i(ia, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(Wd, { size: 12, filled: true }),
      e === "like" && i(oa, { size: 12, filled: true }),
      e === "repost" && i(aa, { size: 12 }),
      e === "bell" && i(sa, { size: 12 }),
    ],
  });
}
const pR = "a2Ww";
const hR = "skWW";
const mR = "eFuW";
const gR = "bTAo";
const _R = "i4Na";
const vR = "N3Mq";
const yR = "k12Z";
const wR = "jzPN";
const ER = "Fw7t";
const bR = "zeBD";
const SR = "BiYw";
const CR = "qU6J";

const et = {
  container: pR,
  clearAllButton: hR,
  toastList: mR,
  toast: gR,
  toastLeft: _R,
  toastData: vR,
  title: yR,
  message: wR,
  highlightedUsername: ER,
  dragging: bR,
  closeButton: SR,
  belowTabs: CR,
};

const Lf = Jn(null);
function jP() {
  const e = zo(Lf);
  if (!e) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return e;
}
function kR({ children: e }) {
  const [t, n] = A([]);

  const o = I((c) => {
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

  D(() => {
    const c = (l) => {
      const u = l.detail?.buyerUsername;
      o({
        message: u ? "запустил школьный звонок!" : "Прозвенел школьный звонок!",
        highlightedUsername: u,
        notificationType: "bell",
        clickUrl: u ? `/@${encodeURIComponent(u)}` : "/event/alice-ai",
      });
    };
    window.addEventListener("alice-bell-toast", c);

    return () => window.removeEventListener("alice-bell-toast", c);
  }, [o]);
  const a = Ow();

  D(() => {
    if (a) {
      const c = IR(a.type);

      o({
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

      sn.setState({ lastSseToast: null });
    }
  }, [a, o]);

  return i(Lf.Provider, {
    value: { toasts: t, addToast: o, removeToast: r, clearAll: s },
    children: [e, i(NR, { toasts: t, onRemove: r, onClearAll: s })],
  });
}
function NR({ toasts: e, onRemove: t, onClearAll: n }) {
  const [o, r] = A(false);

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
    className: `${et.container} ${s ? et.belowTabs : ""} ym-hide-content`,
    children: [
      i("div", {
        className: `${et.toastList} ${o ? et.clearing : ""}`,
        children: a.map((l, u) => i(
          AR,
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
          className: et.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const TR = 80;
function IR(e) {
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
function RR(e) {
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
function AR({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: o = false,
}) {
  const r = O(null);
  const [s, a] = A(0);
  const [c, l] = A(false);
  const [u, f] = A(false);
  const p = O(0);
  const d = O(false);

  const h = (S) => {
    (p.current = S.clientX);
    (d.current = false);
    l(true);
  };

  const m = I(
    (S) => {
      if (!c) {
        return;
      }
      const C = S.clientX - p.current;

      if (Math.abs(C) > 5) {
        (d.current = true);
      }

      a(C);
    },
    [c]
  );

  const _ = I(() => {
    if (c) {
      l(false);

      if (Math.abs(s) > TR) {
        f(true);
        a(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!d.current) {
          const S = RR(e);

          if (S) {
            Ke(S);
            t(e.id);
          }
        }
      }
    }
  }, [c, s, t, e]);

  D(() => {
    if (c) {
      document.addEventListener("mousemove", m);
      document.addEventListener("mouseup", _);

      return () => {
        document.removeEventListener("mousemove", m);
        document.removeEventListener("mouseup", _);
      };
    }
  }, [c, m, _]);

  const v = (S) => {
    (p.current = S.touches[0].clientX);
    l(true);
  };

  const g = (S) => {
    if (!c) {
      return;
    }
    const C = S.touches[0].clientX - p.current;
    a(C);
  };

  const b = () => {
    _();
  };

  const y = u || o ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const k = o ? 400 : s;
  return i("div", {
    ref: r,
    className: `${et.toast} ${c ? et.dragging : ""}`,
    style: {
      transform: `translateX(${k}px)`,
      opacity: y,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: h,
    onTouchStart: v,
    onTouchMove: g,
    onTouchEnd: b,
    children: [
      i("div", {
        className: et.toastLeft,
        children: [
          i(Et, {
            src: e.actorAvatar || "",
            badge: i(fR, { type: e.notificationType }),
          }),
          i("div", {
            className: et.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: et.title,
                  children: i(Go, { userId: e.actorId, name: e.actorName }),
                }),
              i("p", {
                className: et.message,
                children: [
                  e.highlightedUsername &&
                    i("span", {
                      className: et.highlightedUsername,
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
        className: et.closeButton,
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
const PR = "bSTg";
const LR = "Dtk3";
const OR = "uRL1";
const $R = "Ucvj";
const xR = "TujY";
const MR = "eXPZ";
const DR = "oiRQ";
const UR = "mJkr";
const FR = "ynh6";
const BR = "KrfA";

const wn = {
  container: PR,
  toast: LR,
  slideUp: OR,
  leaving: $R,
  fadeOut: xR,
  success: MR,
  icon: DR,
  message: UR,
  closeButton: FR,
  error: BR,
};

const HR = { success: t0, error: Xy };
function VR({ id: e, type: t, message: n, onRemove: o }) {
  const [r, s] = A(false);
  const HR_t = HR[t];

  const c = I(() => {
    s(true);

    setTimeout(() => {
      o(e);
    }, 300);
  }, [e, o]);

  return i("div", {
    className: `${wn.toast} ${wn[t]} ${r ? wn.leaving : ""}`,
    children: [
      i("span", { className: wn.icon, children: i(HR_t, { size: 20 }) }),
      i("span", { className: wn.message, children: n }),
      i("button", {
        className: wn.closeButton,
        onClick: c,
        children: i(ut, { size: 14 }),
      }),
    ],
  });
}
function WR() {
  const e = $r(n => n.toasts);

  const t = $r(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: wn.container,
        children: e.map(n => i(
          VR,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const jR = "ao0C";
const zR = "yb7o";
const qR = "Q2zJ";
const YR = "WFTX";
const _r = { tabs: jR, indicator: zR, button: qR, active: YR };
function GR({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: o,
  className: r = "",
}) {
  const [s, a] = A(t);
  const c = n !== undefined ? n : s;
  const [l, u] = A({});
  const f = O([]);
  const p = O(null);
  const d = O(false);

  const h = I(() => {
    const g = f.current[c];
    if (g) {
      const g_parentElement = g.parentElement;
      const y = g_parentElement ? parseFloat(getComputedStyle(g_parentElement).paddingLeft) : 0;
      const k = !d.current;

      u({
        width: g.offsetWidth,
        transform: `translateX(${g.offsetLeft - y}px)`,
        ...(k ? { transition: "none" } : {}),
      });

      if (k) {
        requestAnimationFrame(() => {
          (d.current = true);

          u((S) => {
            const { transition: C, ...w } = S;
            return w;
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
    const b = new ResizeObserver(() => {
      h();
    });
    b.observe(p_current);

    return () => {
      b.disconnect();
    };
  }, [h]);

  const m = (g) => {
    if (n === undefined) {
      a(g);
    }

    o?.(g, e[g]);
  };

  const _ = g => typeof g == "string" ? g : g.label;

  const v = (g, b) => typeof g == "string" ? `${b}` : g.id;

  return i("div", {
    ref: p,
    className: `${_r.tabs} ${r}`,
    children: [
      i("div", { className: _r.indicator, style: l }),
      e.map((g, b) => i(
        "button",
        {
          ref: (y) => {
            f.current[b] = y;
          },
          onClick: () => m(b),
          className: `${_r.button} ${c === b ? _r.active : ""}`,
          children: _(g),
        },
        v(g, b)
      )
      ),
    ],
  });
}
const KR = le(() => ie(
  () => import("./index-szYu8RBU.js"),
  __vite__mapDeps([27, 28, 6, 5, 29])
).then(e => ({
  default: e.ImageViewer
}))
);
function XR() {
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
  } = Od();
  return e
    ? i(De, {
        fallback: null,
        children: i(
          KR,
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
const QR = "RSv1";
const ZR = "oixb";
const JR = "qAeG";
const eA = "mn6z";
const tA = "g829";
const nA = "Ot5L";

const jn = {
  layout: QR,
  layoutEvent: ZR,
  wrapper: JR,
  wrapperShop: eA,
  content: tA,
  wrapperEvent: nA,
};

const oA = le(() => ie(() => import("./index-CoBxZpUs.js"), __vite__mapDeps([30, 31])).then(
  e => ({
    default: e.AuthLayout
  })
)
);

const rA = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const sA = [
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

const iA = ["/shop"];

const aA = ({ children: e }) => {
  const t = Gt();
  const n = ts();
  const o = Sy();
  const [r, s] = A(window.location.pathname);
  D(() => {
    const p = () => {
      s(window.location.pathname);
    };
    window.addEventListener("popstate", p);
    const d = history.pushState.bind(history);
    const h = history.replaceState.bind(history);

    (history.pushState = (...m) => {
      d(...m);
      p();
    });

    (history.replaceState = (...m) => {
      h(...m);
      p();
    });

    return () => {
      window.removeEventListener("popstate", p);
      (history.pushState = d);
      (history.replaceState = h);
    };
  }, []);
  const a = rA.includes(r);
  const c = sA.includes(r);

  const l = iA.some(p => r === p || r.startsWith(`${p}/`));

  const u = r === ue.ALICE_EVENT || r.startsWith(`${ue.ALICE_EVENT}/`);
  const f = (n || l) && !c;
  return a
    ? i(De, { fallback: null, children: i(oA, { children: e }) })
    : i(by.Provider, {
        value: { isHidden: o },
        children: i("div", {
          className: `${jn.layout} ${u ? jn.layoutEvent : ""}`,
          children: i("div", {
            className: `${jn.wrapper} ${l ? jn.wrapperShop : ""} ${
              u ? jn.wrapperEvent : ""
            }`,
            children: [
              f && (t ? i(iR, { showCreateButton: !u }) : i(d1, {})),
              f && !t && i(g1, {}),
              i("div", { className: jn.content, children: e }),
            ],
          }),
        }),
      });
};

function cA() {
  if (!Hl) {
    (Hl = true);

    (window.setNativeAuth = (e) => {
      if (e?.token) {
        Md(e.token);
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
const lA = "SnSe";
const uA = "mYeg";
const dA = "Gzcs";
const fA = "rcg8";
const pA = "DgRS";
const hA = "gBrv";
const mA = "LHzO";
const gA = "Anmq";
const _A = "kKrB";
const vA = "YmDa";
const yA = "j5Wt";
const wA = "HLXD";
const EA = "efIP";
const bA = "G7Yr";
const SA = "omi3";

const ze = {
  overlay: lA,
  card: uA,
  imageWrap: dA,
  image: fA,
  body: pA,
  titleRow: hA,
  title: mA,
  badge: gA,
  texts: _A,
  text: vA,
  moreButton: yA,
  buttons: wA,
  button: EA,
  primary: bA,
  secondary: SA,
};

const Of = "seen_announcements";
function $f() {
  try {
    const e = localStorage.getItem(Of);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function CA(e) {
  try {
    const t = $f();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(Of, JSON.stringify(t));
    }
  } catch {}
}
function kA() {
  const e = ts();
  const [t, n] = A(null);
  const [o, r] = A(false);

  const s = I(() => {
    r(false);

    n(m => {
      if (m) {
        CA(m.id);
      }

      return null;
    });
  }, []);

  D(() => {
    if (!e) {
      return;
    }
    let m = false;

    Dw.getAnnouncements()
      .then((_) => {
      if (m) {
        return;
      }
      const v = $f();

      const g = _.find(b => b?.id && !v.includes(b.id));

      if (g) {
        n(g);
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
        Ke(m_action.url);
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
    description: p,
    additional_text: d,
    buttons: h,
  } = t;

  return $(
    i("div", {
      className: ze.overlay,
      onClick: c,
      children: i("div", {
        className: ze.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": f,
        children: [
          l?.url &&
            i("div", {
              className: ze.imageWrap,
              style:
                l.width && l.height
                  ? { aspectRatio: `${l.width} / ${l.height}` }
                  : undefined,
              children: i("img", {
                className: ze.image,
                src: l.url,
                alt: "",
                width: l.width,
                height: l.height,
              }),
            }),
          i("div", {
            className: ze.body,
            children: [
              i("div", {
                className: ze.titleRow,
                children: [
                  i("h2", { className: ze.title, children: f }),
                  u && i("span", { className: ze.badge, children: u }),
                ],
              }),
              (p || d) &&
                i("div", {
                  className: ze.texts,
                  children: [
                    p && i("p", { className: ze.text, children: p }),
                    d &&
                      (o
                        ? i("p", { className: ze.text, children: d })
                        : i("button", {
                            type: "button",
                            className: ze.moreButton,
                            onClick: () => r(true),
                            children: "Подробнее",
                          })),
                  ],
                }),
              !!h?.length &&
                i("div", {
                  className: ze.buttons,
                  children: h.map((m, _) => i(
                    "button",
                    {
                      type: "button",
                      className: `${ze.button} ${
                        m.style === "secondary" ? ze.secondary : ze.primary
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
const Vl = 3000/* 3e3 */;
const NA = 500;
const TA = 30000/* 3e4 */;
const Wl = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function IA() {
  const e = ae(n => n.applyStatsUpdates);

  const t = sf();
  D(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let o = Infinity;
    let r = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > TA;

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
      const h = Vr.getSnapshot();
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
            u(Vl);
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

    for (const h of Wl) {
      window.addEventListener(h, f, { passive: true });
    }
    const p = () => {
      if (!document.hidden) {
        f();
      }
    };
    document.addEventListener("visibilitychange", p);
    const d = Vr.onAppear(() => {
      if (!s && !document.hidden) {
        u(NA);
      }
    });
    u(Vl);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", p);
      for (const h of Wl) {
        window.removeEventListener(h, f);
      }
      d();
    };
  }, [e, t]);
}

const Ca = () => i(af, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(Fe, {
    onClick: () => Ke("/"),
    children: "Вернуться на главную",
  }),
});

const RA = "g1EF";
const AA = "g5VM";
const PA = "IelA";
const LA = "vkB6";
const OA = "LF7J";
const $A = "yA9q";
const xA = "ycyr";
const MA = "iWpC";
const DA = "ZBz0";
const UA = "sjPG";
const FA = "LMkm";
const BA = "sUru";
const HA = "oPmI";
const VA = "geyb";
const WA = "vK1K";
const jA = "HHDw";
const zA = "nPbs";
const qA = "N3AX";
const YA = "f05o";
const GA = "I32t";
const KA = "rEsa";
const XA = "s2O6";

const z = {
  skeleton: RA,
  inner: AA,
  content: PA,
  header: LA,
  body: OA,
  actions: $A,
  shimmer: xA,
  avatar: MA,
  name: DA,
  time: UA,
  line: FA,
  w100: BA,
  w92: HA,
  w85: VA,
  w78: WA,
  w65: jA,
  w50: zA,
  w40: qA,
  media: YA,
  mediaTall: GA,
  pill: KA,
  list: XA,
};

function QA(e) {
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
function xf({ variant: e = "medium", delayMs: t = 0 }) {
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
            QA(e),
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
const jl = ["medium", "media", "short", "long", "mediaTall"];
function ZA({ count: e = 4 }) {
  return i("div", {
    className: z.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(xf, { variant: jl[n % jl.length], delayMs: n * 120 }, n)
    ),
  });
}
const JA = "tGhr";
const eP = "Wius";
const tP = "LYoK";
const zs = { virtualFeed: JA, virtualContent: eP, virtualItem: tP };
function nP({
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
  const f = O(null);
  const p = O(false);
  const [d, h] = A(null);
  const [m, _] = A(window.innerWidth < 1174);

  const v = ae(N => N.highlightedPostId);

  const g = ae(N => N.clearHighlightedPost);

  D(() => {
    const N = () => _(window.innerWidth < 1174);
    window.addEventListener("resize", N);

    return () => window.removeEventListener("resize", N);
  }, []);
  const b = m ? 0 : c;

  const y = I(
    (N) => {
      const e_N = e[N];
      if (!e_N) {
        return N;
      }
      const P = e_N.attachments?.[0]?.id ?? "";
      return `${e_N.id}-${P}`;
    },
    [e]
  );

  const {
    virtualItems: k,
    totalSize: S,
    measureElement: C,
    getMeasuredHeights: w,
  } = ky({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: b,
    getItemKey: y,
    initialMeasuredHeights: l,
  });

  D(
    () => () => {
      if (u) {
        u(w());
      }
    },
    [u, w]
  );

  D(() => {
    if (!v) {
      return;
    }
    f.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const N = setTimeout(() => {
      h(v);
      g();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(N);
  }, [v, g]);

  const T = I(() => {
    if (!r || !o || n) {
      return;
    }
    const N =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (N < 500 && !p.current) {
      (p.current = true);
      r();
    }

    if (N > 600) {
      (p.current = false);
    }
  }, [r, o, n]);

  D(() => {
    if (!n) {
      (p.current = false);
    }
  }, [n]);

  D(
    () => {
      window.addEventListener("scroll", T, { passive: true });

      return () => window.removeEventListener("scroll", T);
    },
    [T]
  );

  return i("div", {
    ref: f,
    className: zs.virtualFeed,
    children: [
      i("div", {
        className: zs.virtualContent,
        style: { height: `${S}px` },
        children: k.map((N) => {
          const E = e[N.index];
          return E
            ? i(
                "div",
                {
                  ref: P => C(P, N.index),
                  className: zs.virtualItem,
                  style: { transform: `translateY(${N.start}px)` },
                  children: t(E, N.index, E.id === d),
                },
                N.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${b}px` },
          children: i(xf, { variant: "medium" }),
        }),
    ],
  });
}
const oP = "ULoO";
const rP = "bnjw";
const sP = "WJxc";
const iP = "Tp6Z";
const aP = "frpe";
const cP = "wWAw";

const zn = {
  page: oP,
  createPostWrapper: rP,
  tabsWrapper: sP,
  searchButton: iP,
  error: aP,
  empty: cP,
};

const lP = (e) => {
  const t = ae(E => E.posts);

  const n = ae(E => E.activeFeed);

  const o = ae(E => E.isLoading);

  const r = ae(E => E.isLoadingMore);

  const s = ae(E => E.hasMore);

  const a = ae(E => E.error);

  const c = ae(E => E.feedScrollPosition);

  const l = ae(E => E.feedMeasuredHeights);

  const u = ae(E => E.feedRestoreToken);

  const f = ae(E => E.setActiveFeed);

  const p = ae(E => E.fetchFeed);

  const d = ae(E => E.loadMoreFeed);

  const h = ae(E => E.createPost);

  const m = ae(E => E.cacheFeedHeights);

  const _ = ge(E => E.profile);

  const v = ge(E => E.status);

  const g = O(false);

  const b = Te(() => t.map(E => E.author.id), [t]);

  Bw(b);

  D(() => {
    if (v === "authenticated" && t.length === 0 && !o) {
      p();
    }
  }, [n, v]);

  wt(() => {
    if (!g.current) {
      if (t.length !== 0) {
        (g.current = true);

        c > 0 &&
          (window.scrollTo(0, c),
          requestAnimationFrame(() => window.scrollTo(0, c)));
      }
    }
  }, [t.length, c]);

  const y = O(null);
  wt(() => {
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

  const k = I(
      (E) => {
        m(n, E);
      },
      [n, m]
    );

  const S = (E) => {
    const R = ["global", "clan", "following"][E] ?? "global";

    if (R !== n) {
      f(R);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      p(true);
    }
  };

  const C = async (E, P, R, $, Y) => {
    if (_) {
      (await h({
          wallOwnerId: _.id,
          text: E,
          spans: P,
          attachments: R,
          poll: $,
          notebook: Y,
        }));
    }
  };

  const w = I(() => {
    if (s && !r) {
      d();
    }
  }, [s, r, d]);

  const T =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const N = I(
    (E, P, R) => i(EI, { post: E, isHighlighted: R, source: T }, E.id),
    [T]
  );

  return i("div", {
    className: zn.page,
    children: [
      i("div", {
        className: zn.tabsWrapper,
        children: [
          i(GR, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: S,
          }),
          i("a", {
            href: "/search",
            className: zn.searchButton,
            "aria-label": "Поиск",
            children: i(Kd, {}),
          }),
        ],
      }),
      i("div", {
        className: zn.createPostWrapper,
        children: [
          _ && i(Et, { src: _.avatar ?? "", alt: _.displayName, size: "sm" }),
          i(Pf, { onSubmit: C }),
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
        ? i(ZA, { count: 4 })
        : t.length === 0
        ? i("div", { className: zn.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            nP,
            {
              posts: t,
              renderPost: N,
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

const uP = le(() => ie(
  () => import("./index-BzPqsVhM.js"),
  __vite__mapDeps([32, 28, 14, 33])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

cA();

const dP = le(() => ie(() => import("./index-CVosOiNZ.js"), __vite__mapDeps([34, 6, 35])).then(
  e => ({
    default: e.Hashtag
  })
)
  );

const fP = le(() => ie(
  () => import("./index-DxnK381R.js"),
  __vite__mapDeps([36, 37, 6, 1, 2, 38])
).then(e => ({
  default: e.Profile
}))
);

const pP = le(() => ie(() => import("./index-BNgSn4yg.js"), __vite__mapDeps([39, 6, 40])).then(
  e => ({
    default: e.PostPage
  })
)
);

const hP = le(() => ie(
  () => import("./index-8qfneaPU.js"),
  __vite__mapDeps([41, 4, 37, 42])
).then(e => ({
  default: e.Notifications
}))
);

const mP = le(() => ie(() => import("./index-BoS-Elbb.js"), __vite__mapDeps([43, 44])).then(
  e => ({
    default: e.Search
  })
)
);

const gP = le(() => ie(() => import("./index-D_nuIs6E.js"), __vite__mapDeps([45, 46])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const _P = le(() => ie(() => import("./index-CWcHpZby.js"), __vite__mapDeps([47, 48])).then(
  e => ({
    default: e.EventFrame
  })
)
);

function vP({ children: e }) {
  const t = Yo();
  return t.status === "denied"
    ? i(Ca, {})
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
    : i(ye, { children: e });
}

const yP = le(() => ie(() => import("./index-C97w_qyu.js"), __vite__mapDeps([49, 6, 50])).then(
  e => ({
    default: e.DeleteAccount
  })
)
  );

const wP = le(() => ie(() => import("./index-BW151EL-.js"), __vite__mapDeps([51, 6, 52])).then(
  e => ({
    default: e.Terms
  })
)
);

const EP = le(() => ie(() => import("./index-COANf7wY.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.Privacy
  })
)
);

const bP = le(() => ie(() => import("./index-CINonMXn.js"), __vite__mapDeps([55, 6, 56])).then(
  e => ({
    default: e.Cookies
  })
)
);

const SP = le(() => ie(
  () => import("./index-D519U2X1.js"),
  __vite__mapDeps([57, 6, 3, 58])
).then(e => ({
  default: e.ExternalLink
}))
);

const CP = le(() => ie(() => import("./index-Cayg2nTg.js"), __vite__mapDeps([59, 6, 60])).then(
  e => ({
    default: e.Support
  })
)
);

const kP = le(() => ie(() => import("./index-DCrcvMV2.js"), __vite__mapDeps([61, 6, 62])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const NP = le(() => ie(() => import("./index-DEIDpgXR.js"), __vite__mapDeps([63, 64])).then(
  e => ({
    default: e.Event
  })
)
);

const TP = le(() => ie(
  () => import("./index-Bv4tkihk.js"),
  __vite__mapDeps([65, 66, 67, 6])
).then(e => ({
  default: e.SubscriptionTerms
}))
);

const IP = le(() => ie(
  () => import("./index-D2YwGnyM.js"),
  __vite__mapDeps([68, 66, 67, 6])
).then(e => ({
  default: e.RecurringTerms
}))
);

const RP = le(() => ie(
  () => import("./index-CYXx6T-p.js"),
  __vite__mapDeps([69, 70, 71, 72, 73, 74, 75])
).then(e => ({
  default: e.Login
}))
);

const AP = le(() => ie(
  () => import("./index-D7oO8wvs.js"),
  __vite__mapDeps([76, 70, 71, 72, 73, 74, 77])
).then(e => ({
  default: e.Register
}))
);

const PP = le(() => ie(
  () => import("./index-gyKgP97q.js"),
  __vite__mapDeps([78, 70, 71, 74, 79])
).then(e => ({
  default: e.ForgotPassword
}))
);

const LP = le(() => ie(() => import("./index-BR7wRYIu.js"), __vite__mapDeps([80, 74, 81])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const OP = le(() => ie(() => import("./index-C9BSqn_s.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const $P = le(() => ie(() => import("./index-ChMjcaAi.js"), __vite__mapDeps([82, 83])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const xP = le(() => ie(() => import("./index-DX7MIlsu.js"), []).then(e => ({
  default: e.Verification
}))
);

function zl(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const MP = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(Ca, {});
  }
  const t = e.slice(1);
  return i(fP, { username: t });
};
function DP() {
  const [e, t] = A(window.location.pathname);

  const n = oy(r => r.isOpen);

  IA();

  return i(kR, {
    children: i(RE, {
      children: i(Ab, {
        currentPath: e,
        children: [
          i(XR, {}),
          n && i(De, { fallback: null, children: i(uP, {}) }),
          i(WR, {}),
          i(Db, {}),
          i(kA, {}),
          i(aA, {
            children: i(De, {
              fallback: null,
              children: i(Pd, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url === s) {
                    return;
                  }

                  ry.getState().markNavigated();
                  const a = ae.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = zl(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = r.url === "/";
                  const l = !!zl(r.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(lP, { path: "/" }),
                  i(hP, { path: "/notifications" }),
                  i(RP, { path: "/login" }),
                  i(AP, { path: "/register" }),
                  i(PP, { path: "/forgot-password" }),
                  i(LP, { path: "/reset-password" }),
                  i(OP, { path: "/verify-email" }),
                  i(wP, { path: "/terms" }),
                  i(EP, { path: "/privacy" }),
                  i(bP, { path: "/cookies" }),
                  i($P, { path: "/onboarding" }),
                  i(mP, { path: "/search" }),
                  i(gP, { path: "/shop/:rest*" }),
                  i(vP, {
                    path: "/event/alice-ai/:rest*",
                    children: i(_P, {}),
                  }),
                  i(dP, { path: "/hashtag/:name" }),
                  i(SP, { path: "/external" }),
                  i(CP, { path: "/support" }),
                  i(yP, { path: "/delete-account" }),
                  i(kP, { path: "/child-safety" }),
                  i(NP, { path: "/event" }),
                  i(xP, { path: "/verification" }),
                  i(TP, { path: "/subscription-terms" }),
                  i(IP, { path: "/recurring-terms" }),
                  i(pP, { path: "/:username/post/:postId" }),
                  i(MP, { path: "/:slug" }),
                  i(Ca, { default: true }),
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

Hv(document.getElementById("root")).render(
  i(ye, {
    children: i(Bv, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(DP, {}),
    }),
  })
);
export {
  $ as $,
  O as A,
  Fe as B,
  Kt as C,
  mf as D,
  HP as E,
  R0 as F,
  ut as G,
  VP as H,
  Gd as I,
  WP as J,
  xe as K,
  wa as L,
  xn as M,
  Yo as N,
  sr as O,
  ZA as P,
  qn as Q,
  Zy as R,
  ye as S,
  Qd as T,
  tT as U,
  nP as V,
  XN as W,
  Go as X,
  ge as Y,
  Xe as Z,
  wt as __1,
  oy as a,
  ki as a0,
  Gt as a1,
  ts as a2,
  TE as a3,
  U2 as a4,
  Te as a5,
  af as a6,
  GR as a7,
  Pf as a8,
  Cl as a9,
  H as aA,
  Ky as aB,
  Jt as aC,
  ta as aD,
  hl as aE,
  qy as aF,
  Qe as aG,
  Ld as aH,
  uy as aI,
  Ed as aJ,
  Zr as aK,
  Ki as aL,
  Qy as aM,
  Ro as aN,
  ra as aO,
  sa as aP,
  wi as aQ,
  Qr as aR,
  Bk as aS,
  Rk as aT,
  Dw as aU,
  Bw as aV,
  Ht as aW,
  Hw as aX,
  rn as aa,
  ry as ab,
  kr as ac,
  I2 as ad,
  hf as ae,
  jd as af,
  Wd as ag,
  oa as ah,
  aa as ai,
  sn as aj,
  Jd as ak,
  Cy as al,
  ef as am,
  L as an,
  U as ao,
  la as ap,
  Kd as aq,
  dy as ar,
  un as as,
  Ud as at,
  UP as au,
  Jr as av,
  Fd as aw,
  ue as ax,
  gy as ay,
  yi as az,
  ae as b,
  EI as c,
  A as d,
  Ke as e,
  Et as f,
  o0 as g,
  D as h,
  qd as i,
  pa as j,
  De as k,
  ie as l,
  ia as m,
  Tw as n,
  jP as o,
  Ue as p,
  I as q,
  Sf as r,
  GN as s,
  KN as t,
  i as u,
  Rw as v,
  cushion_fartMp3 as w,
  glass_breakWav as x,
  mt as y,
  le as z,
};
