const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-IG9jWvj0.js",
      "assets/index-CTpGM1z1.js",
      "assets/index-Dq5aMN85.css",
      "assets/index-DmKJ6eQK.js",
      "assets/index-HFlVu6AJ.css",
      "assets/IconInfo-CX4HcoRT.js",
      "assets/PhoneAccess.module-BmvgF3ui.js",
      "assets/PhoneAccess-hktQQ4g6.css",
      "assets/IconNotificationMention-C7x9C0uS.js",
      "assets/IconChevronRight-BQQAUGem.js",
      "assets/IconChevronLeft-Bhjo82wQ.js",
      "assets/index-OtSlVhlu.css",
      "assets/index-jdSZMRYQ.js",
      "assets/index-U5u56pFg.css",
      "assets/VoiceInput-DTbP962m.js",
      "assets/IconPlay-C5j1JZ6K.js",
      "assets/VoiceInput-BlxcF0J_.css",
      "assets/PostMediaVideo-CExLc9YI.js",
      "assets/VolumeGlyph-DBDhLeoM.js",
      "assets/PostMediaVideo-9_2Km50i.css",
      "assets/index-XmQeCW1p.js",
      "assets/IconCheckCircle-BI2tW35G.js",
      "assets/index-CkW6vViD.css",
      "assets/index-C14ZC_5R.js",
      "assets/index-Cz7kzhIu.css",
      "assets/index-DQNqsRgW.js",
      "assets/index-CyCvjvNo.css",
      "assets/index-JCEeCEco.js",
      "assets/index--R1SxzV7.css",
      "assets/index-CGa45akZ.js",
      "assets/index-Bd84PZTL.css",
      "assets/index-DQjhJtdW.js",
      "assets/useBodyScrollLock-BkVCA1PT.js",
      "assets/index-DAeFQp_z.css",
      "assets/index-FGA-vBm7.js",
      "assets/index-DJikxctd.css",
      "assets/index-BjPnXLPA.js",
      "assets/index-BadncHic.css",
      "assets/index-VuVgz1VK.js",
      "assets/index-DA2H7eED.css",
      "assets/index-CuUq2RK0.js",
      "assets/IconCheck-CQsVfIr3.js",
      "assets/index-CiMFUsms.css",
      "assets/index-BZnHrnJL.js",
      "assets/index-CnP_J_QY.css",
      "assets/index-DlhosVm5.js",
      "assets/index-DeQSJNa-.css",
      "assets/index-A22X8mJX.js",
      "assets/index-BAS66q0N.css",
      "assets/index-HyWkrGR0.js",
      "assets/index-C25TLy-r.css",
      "assets/index-dDJLp_xc.js",
      "assets/index-BzlL-1Lm.css",
      "assets/index-_I01YQs6.js",
      "assets/index-DwvC0hY5.css",
      "assets/index-hOpxO1pF.js",
      "assets/index-6f-_B7CF.css",
      "assets/index-CojXx-7V.js",
      "assets/index-BGVqOo_L.css",
      "assets/index-DO-T5bse.js",
      "assets/index-CHd_Q-0Z.css",
      "assets/index-uQUjnXVl.js",
      "assets/index-uEKPzfFB.js",
      "assets/index-CiDq3Nyc.js",
      "assets/index-BY2sAC38.css",
      "assets/index-DlH86GaB.js",
      "assets/index-Dgz-Em0i.css",
      "assets/IconEyeOff-B7iRtqfA.js",
      "assets/index-BsYbQbEW.css",
      "assets/index-FQ-y-lvz.js",
      "assets/index-DLdwm8GF.js",
      "assets/index-BrTA94Iq.css",
      "assets/index-DmA1OHwc.js",
      "assets/index-DcFsQnVB.css",
      "assets/index-CEFUrsB6.js",
      "assets/index-DYMeeX3D.css",
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
      (e._sentryDebugIds[t] = "7fd08a97-67da-4c6b-bd34-dda886ae99c2");
      (e._sentryDebugIdIdentifier = "sentry-dbid-7fd08a97-67da-4c6b-bd34-dda886ae99c2");
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
let cr;
let Q;
let xc;
let Dt;
let hi;
let $c;
let Mc;
let yo;
let Mr;
let Qn;
let Dc;
let Cs;
let zo;
let qo;
let Uc;
const zr = {};
const qr = [];
const hd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function lt(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Ns(e) {
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
    (a.children = arguments.length > 3 ? cr.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return Zn(e, a, r, o, null);
}
function Zn(e, t, n, r, o) {
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
    __v: o ?? ++xc,
    __i: -1,
    __u: 0,
  };

  if (o == null && Q.vnode != null) {
    Q.vnode(s);
  }

  return s;
}
function md() {
  return { current: null };
}
function Ie(e) {
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
      : (this.__s = lt({}, this.state)));

    if (typeof e == "function") {
      (e = e(lt({}, n), this.props));
    }

    if (e) {
      lt(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      Go(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Go(this);
    }
  }
}

function cn(e, t) {
  if (t == null) {
    return e.__ ? cn(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? cn(e) : null;
}
function gd(e) {
  if (e.__P && e.__d) {
    const e_v = e.__v;
    const e_v___e = e_v.__e;
    const r = [];
    const o = [];
    const s = lt({}, e_v);
    (s.__v = e_v.__v + 1);

    if (Q.vnode) {
      Q.vnode(s);
    }

    Is(
      e.__P,
      s,
      e_v,
      e.__n,
      e.__P.namespaceURI,
      32 & e_v.__u ? [e_v___e] : null,
      r,
      e_v___e ?? cn(e_v),
      !!(32 & e_v.__u),
      o
    );

    (s.__v = e_v.__v);
    (s.__.__k[s.__i] = s);
    Wc(r, s, o);
    e_v.__e = null;
    e_v.__ = null;

    if (s.__e != e_v___e) {
      Fc(s);
    }
  }
}
function Fc(e) {
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    e.__k.some(t => {
      if (t != null && t.__e != null) {
        return (e.__e = e.__c.base = t.__e);
      }
    });

    return Fc(e);
  }
}
function Go(e) {
  if (((!e.__d && (e.__d = true) && Dt.push(e) && !Gr.__r++) || hi != Q.debounceRendering)) {
    ((hi = Q.debounceRendering) || $c)(Gr);
  }
}
function Gr() {
  try {
    let e;
    let t = 1;

    while (Dt.length) {
      if (Dt.length > t) {
        Dt.sort(Mc);
      }

      (e = Dt.shift());
      (t = Dt.length);
      gd(e);
    }
  } finally {
    Dt.length = 0;
    Gr.__r = 0;
  }
}
function Hc(e, t, n, r, o, s, a, c, l, u, d) {
  let f;
  let p;
  let h;
  let m;
  let y;
  let g;
  const _ = (r && r.__k) || qr;
  const t_length = t.length;
  l = _d(n, t, _, l, t_length);

  for (f = 0; f < t_length; f++) {
    if ((h = n.__k[f]) != null) {
      (p = (h.__i != -1 && _[h.__i]) || zr);
      (h.__i = f);
      (g = Is(e, h, p, o, s, a, c, l, u, d));
      (m = h.__e);

      h.ref &&
        p.ref != h.ref &&
        (p.ref && Ts(p.ref, null, h), d.push(h.ref, h.__c || m, h));

      y == null && m != null && (y = m);

      4 & h.__u
        ? ((l = Bc(h, l, e)), p.__e && (p.__e = null))
        : typeof h.type == "function" && g !== undefined
        ? (l = g)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = y);
  return l;
}
function _d(e, t, n, r, o) {
  let s;
  let a;
  let c;
  let l;
  let u;
  const n_length = n.length;
  let f = n_length;
  let p = 0;
  e.__k = new Array(o);

  for (s = 0; s < o; s++) {
    if ((a = t[s]) != null && typeof a != "boolean" && typeof a != "function") {
      typeof a == "string" ||
          typeof a == "number" ||
          typeof a == "bigint" ||
          a.constructor == String
            ? (a = e.__k[s] = Zn(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = Zn(Ie, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                Zn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + p);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = yd(a, n, l, f)) != -1 && (f--, (c = n[u]) && (c.__u |= 2));

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

  if (f) {
    for (s = 0; s < n_length; s++) {
      if ((c = n[s]) != null &&
        (2 & c.__u) == 0) {
        c.__e == r && (r = cn(c));
        zc(c, c);
      }
    }
  }
  return r;
}
function Bc(e, t, n) {
  let r;
  let o;
  if (typeof e.type == "function") {
    r = e.__k;

    for (o = 0; r && o < r.length; o++) {
      if (r[o]) {
        (r[o].__ = e);
        (t = Bc(r[o], t, n));
      }
    }

    return t;
  }

  if (e.__e != t) {
    t && e.type && !t.parentNode && (t = cn(e));
    (t = n.insertBefore(e.__e, t || null));
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
function yd(e, t, n, r) {
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
function mi(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || hd.test(t) ? n : `${n}px`);
  }
}
function vr(e, t, n, r, o) {
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
            mi(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            mi(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(Dc, "$1")));
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
        (n[Qn] = r[Qn]);
      } else {
        (n[Qn] = Cs);
        e.addEventListener(t, s ? qo : zo, s);
      }
    } else {
      e.removeEventListener(t, s ? qo : zo, s);
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
function gi(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t[Mr] == null) {
        t[Mr] = Cs++;
      } else if (t[Mr] < n[Qn]) {
        return;
      }
      return n(Q.event ? Q.event(t) : t);
    }
  };
}
function Is(e, t, n, r, o, s, a, c, l, u) {
  let d;
  let f;
  let p;
  let h;
  let m;
  let y;
  let g;
  let _;
  let v;
  let S;
  let N;
  let w;
  let b;
  let R;
  let k;
  let C;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    (l = !!(32 & n.__u));
    (s = [(c = t.__e = n.__e)]);
  }

  if ((d = Q.__b)) {
    d(t);
  }

  e: if (typeof t_type == "function") {
    f = a.length;
    try {
      (v = t.props);
      (S = t_type.prototype && t_type.prototype.render);
      (N = (d = t_type.contextType) && r[d.__c]);
      (w = d ? (N ? N.props.value : d.__) : r);

      if (n.__c) {
        (_ = (p = t.__c = n.__c).__ = p.__E);
      } else {
        S
              ? (t.__c = p = new t_type(v, w))
              : ((t.__c = p = new Xe(v, w)),
                (p.constructor = t_type),
                (p.render = Ed));

        N && N.sub(p);
        p.state || (p.state = {});
        (p.__n = r);
        (h = p.__d = true);
        (p.__h = []);
        (p._sb = []);
      }

      if (S && p.__s == null) {
        (p.__s = p.state);
      }

      if (S &&
        t_type.getDerivedStateFromProps != null) {
        p.__s == p.state && (p.__s = lt({}, p.__s));
        lt(p.__s, t_type.getDerivedStateFromProps(v, p.__s));
      }

      (m = p.props);
      (y = p.state);
      (p.__v = t);

      if (h) {
        if (S &&
          t_type.getDerivedStateFromProps == null &&
          p.componentWillMount != null) {
          p.componentWillMount();
        }

        if (S && p.componentDidMount != null) {
          p.__h.push(p.componentDidMount);
        }
      } else {
        if (S &&
            t_type.getDerivedStateFromProps == null &&
            v !== m &&
            p.componentWillReceiveProps != null) {
          p.componentWillReceiveProps(v, w);
        }

        if (t.__v == n.__v ||
          (!p.__e &&
            p.shouldComponentUpdate != null &&
            p.shouldComponentUpdate(v, p.__s, w) === false)) {
          if (t.__v != n.__v) {
            (p.props = v);
            (p.state = p.__s);
            (p.__d = false);
          }

          (t.__e = n.__e);
          (t.__k = n.__k);

          t.__k.some(A => {
            if (A) {
              (A.__ = t);
            }
          });

          qr.push.apply(p.__h, p._sb);
          (p._sb = []);

          if (p.__h.length) {
            a.push(p);
          }

          (c = cn(n));
          break e;
        }

        if (p.componentWillUpdate != null) {
          p.componentWillUpdate(v, p.__s, w);
        }

        if (S &&
          p.componentDidUpdate != null) {
          p.__h.push(() => {
            p.componentDidUpdate(m, y, g);
          });
        }
      }

      (p.context = w);
      (p.props = v);
      (p.__P = e);
      (p.__e = false);
      (b = Q.__r);
      (R = 0);

      if (S) {
        (p.state = p.__s);
        (p.__d = false);

        if (b) {
          b(t);
        }

        (d = p.render(p.props, p.state, p.context));
        qr.push.apply(p.__h, p._sb);
        (p._sb = []);
      } else {
        do {
          (p.__d = false);

          if (b) {
            b(t);
          }

          (d = p.render(p.props, p.state, p.context));
          (p.state = p.__s);
        } while (p.__d && ++R < 25);
      }

      (p.state = p.__s);

      if (p.getChildContext != null) {
        (r = lt(lt({}, r), p.getChildContext()));
      }

      if (S &&
        !h &&
        p.getSnapshotBeforeUpdate != null) {
        (g = p.getSnapshotBeforeUpdate(m, y));
      }

      (k = d != null && d.type === Ie && d.key == null
        ? jc(d.props.children)
        : d);

      (c = Hc(e, Array_isArray(k) ? k : [k], t, n, r, o, s, a, c, l, u));
      (p.base = t.__e);
      (t.__u &= -161);

      if (p.__h.length) {
        a.push(p);
      }

      if (_) {
        (p.__E = p.__ = null);
      }
    } catch (A) {
      (a.length = f);
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
          for (C = s.length; C--; ) {
            Ns(s[C]);
          }
        }
      } else {
        t.__e = n.__e;
      }

      if (t.__k == null) {
        (t.__k = n.__k || []);
      }

      if (!A.then) {
        Vc(t);
      }

      Q.__e(A, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = vd(n.__e, t, n, r, o, s, a, l, u));
    }
  }

  if ((d = Q.diffed)) {
    d(t);
  }

  return 128 & t.__u ? undefined : c;
}
function Vc(e) {
  if (e) {
    e.__c && (e.__c.__e = true);
    e.__k && e.__k.some(Vc);
  }
}
function Wc(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    Ts(n[r], n[++r], n[++r]);
  }

  if (Q.__c) {
    Q.__c(t, e);
  }

  e.some(o => {
    try {
      (e = o.__h);
      (o.__h = []);

      e.some(s => {
        s.call(o);
      });
    } catch (s) {
      Q.__e(s, o.__v);
    }
  });
}
function jc(e) {
  return typeof e != "object" || e == null || e.__b > 0
    ? e
    : Array_isArray(e)
    ? e.map(jc)
    : e.constructor !== undefined
    ? null
    : lt({}, e);
}
function vd(e, t, n, r, o, s, a, c, l) {
  let u;
  let d;
  let f;
  let p;
  let h;
  let m;
  let y;
  let g = n.props || zr;

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
      Q.__m && Q.__m(t, s);
      (c = false);
    }

    (s = null);
  }
  if (type == null) {
    if (g !== props && (!c || e.data != props)) {
      (e.data = props);
    }
  } else {
    (s = type == "textarea" && props.defaultValue != null
      ? null
      : s && cr.call(e.childNodes));

    if (!c && s != null) {
      g = {};

      for (u = 0; u < e.attributes.length; u++) {
        g[(h = e.attributes[u]).name] = h.value;
      }
    }

    for (u in g) {
      (h = g[u]);

      if (u == "dangerouslySetInnerHTML") {
        (f = h);
      } else if (u != "children" && u in props && (u != "value" || "defaultValue" in props) && (u != "checked" || "defaultChecked" in props)) {
        vr(e, u, null, h, o);
      }
    }
    for (u in props) {
      (h = props[u]);

      switch (u) {
      case "children":
        (p = h);
        break;
      case "dangerouslySetInnerHTML":
        (d = h);
        break;
      case "value":
        (m = h);
        break;
      case "checked":
        (y = h);
        break;
      default:
        vr(e, u, h, g[u], o);
        break;
      }
    }
    if (d) {
      if (!c && (!f || d.__html != f.__html && d.__html != e.innerHTML)) {
        (e.innerHTML = d.__html);
      }

      (t.__k = []);
    } else {
      if (f) {
        (e.innerHTML = "");
      }

      Hc(
        t.type == "template" ? e.content : e,
        Array_isArray(p) ? p : [p],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
        s,
        a,
        s ? s[0] : n.__k && cn(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          Ns(s[u]);
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
            (type == "option" && m != g[u])) &&
          vr(e, u, m, g[u], o);

      (u = "checked");
      y != null && y != e[u] && vr(e, u, y, g[u], o);
    }
  }
  return e;
}
function Ts(e, t, n) {
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
    Q.__e(o, n);
  }
}
function zc(e, t, n) {
  let r;
  let o;

  if (Q.unmount) {
    Q.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      Ts(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (s) {
        Q.__e(s, t);
      }
    }
    r.base = null;
    r.__P = null;
    r.__n = null;
  }

  if ((r = e.__k)) {
    for (o = 0; o < r.length; o++) {
      if (r[o]) {
        zc(r[o], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    Ns(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Ed(e, t, n) {
  return this.constructor(e, n);
}
function nr(e, t, n) {
  let r;
  let o;
  let s;
  let a;

  if (t == document) {
    (t = document.documentElement);
  }

  if (Q.__) {
    Q.__(e, t);
  }

  (o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (a = []);

  Is(
    t,
    (e = ((!r && n) || t).__k = nt(Ie, null, [e])),
    o || zr,
    zr,
    t.namespaceURI,
    !r && n ? [n] : o ? null : t.firstChild ? cr.call(t.childNodes) : null,
    s,
    !r && n ? n : o ? o.__e : t.firstChild,
    r,
    a
  );

  Wc(s, e, a);
  (e.props.children = null);
}
function qc(e, t) {
  nr(e, t, qc);
}
function Gc(e, t, n) {
  let r;
  let o;
  let s;
  let a;
  const c = lt({}, e.props);

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
    (c.children = arguments.length > 3 ? cr.call(arguments, 2) : n);
  }

  return Zn(e.type, c, r || e.key, o || e.ref, null);
}
function kn(e) {
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
            Go(a);
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
  (t.__c = `__cC${Uc++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
(cr = qr.slice);

(Q = {
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

(xc = 0);

(Xe.prototype.render = Ie);
(Dt = []);

($c = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(Mc = (e, t) => e.__v.__b - t.__v.__b);

(Gr.__r = 0);
(yo = Math.random().toString(8));
(Mr = `__d${yo}`);
(Qn = `__a${yo}`);
(Dc = /(PointerCapture)$|Capture$/i);
(Cs = 0);
(zo = gi(false));
(qo = gi(true));
(Uc = 0);
let wd = 0;
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
    __v: --wd,
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

  if (Q.vnode) {
    Q.vnode(u);
  }

  return u;
}
const X = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const se = globalThis;
const on = "10.71.0";
function so() {
  io(se);
  return se;
}
function io(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || on);
  (t[on] = t[on] || {});
  return t[on];
}
function An(e, t, n = se) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {});
  const o = (r[on] = r[on] || {});
  return o[e] || (o[e] = t());
}
const Sd = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const bd = "Sentry Logger ";
const Yr = {};
function On(e) {
  if (!("console" in se)) {
    return e();
  }
  const se_console = se.console;
  const n = {};
  const r = Object.keys(Yr);
  r.forEach((o) => {
    const Yr_o = Yr[o];
    (n[o] = se_console[o]);
    (se_console[o] = Yr_o);
  });
  try {
    return e();
  } finally {
    r.forEach((o) => {
      se_console[o] = n[o];
    });
  }
}
function Cd() {
  ks().enabled = true;
}
function Nd() {
  ks().enabled = false;
}
function Yc() {
  return ks().enabled;
}
function Id(...e) {
  Rs("log", ...e);
}
function Td(...e) {
  Rs("warn", ...e);
}
function Rd(...e) {
  Rs("error", ...e);
}
function Rs(e, ...t) {
  if (X &&
    Yc()) {
    On(() => {
      se.console[e](`${bd}[${e}]:`, ...t);
    });
  }
}
function ks() {
  return X ? An("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const q = {
    enable: Cd,
    disable: Nd,
    isEnabled: Yc,
    log: Id,
    warn: Td,
    error: Rd,
  };

const Kc = 50;
const ln = "?";
const _i = /\(error: (.*)\)/;
const yi = /captureMessage|captureException/;
function Xc(...e) {
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

      const u = _i.test(a_c) ? a_c.replace(_i, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const d of t) {
          const f = d(u);
          if (f) {
            s.push(f);
            break;
          }
        }
        if (s.length >= Kc + o) {
          break;
        }
      }
    }
    return Ad(s.slice(o));
  };
}
function kd(e) {
  return Array.isArray(e) ? Xc(...e) : e;
}
function Ad(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(Er(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (yi.test(Er(t).function || "")) {
    t.pop();
    yi.test(Er(t).function || "") && t.pop();
  }

  return t
    .slice(0, Kc)
    .map(n => ({
    ...n,
    filename: n.filename || Er(t).filename,
    function: n.function || ln
  }));
}
function Er(e) {
  return e[e.length - 1] || {};
}
const vo = "<anonymous>";
function Ft(e) {
  try {
    return !e || typeof e != "function" ? vo : e.name || vo;
  } catch {
    return vo;
  }
}
function vi(e) {
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
const qn = {};
const Ei = {};
function fn(e, t) {
  (qn[e] = qn[e] || []);
  qn[e].push(t);

  return () => {
    const qn_e = qn[e];
    if (qn_e) {
      const r = qn_e.indexOf(t);

      if (r !== -1) {
        qn_e.splice(r, 1);
      }
    }
  };
}
function pn(e, t) {
  if (!Ei[e]) {
    Ei[e] = true;
    try {
      t();
    } catch (n) {
      if (X) {
        q.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function tt(e, t) {
  const n = e && qn[e];
  if (n) {
    for (const r of n) {
      try {
        r(t);
      } catch (o) {
        if (X) {
          q.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Ft(r)}
Error:`,
            o
          );
        }
      }
    }
  }
}
let Eo = null;
function Od(e) {
  const t = "error";
  fn(t, e);
  pn(t, Pd);
}
function Pd(...args) {
  (Eo = se.onerror);

  (se.onerror = function (e, t, n, r, o) {
    tt("error", { column: r, error: o, line: n, msg: e, url: t });
    return Eo ? Eo.apply(this, args) : false;
  });

  (se.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let wo = null;
function Ld(e) {
  const t = "unhandledrejection";
  fn(t, e);
  pn(t, xd);
}
function xd(...args) {
  (wo = se.onunhandledrejection);

  (se.onunhandledrejection = function (e) {
    tt("unhandledrejection", e);
    return wo ? wo.apply(this, args) : true;
  });

  (se.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const Qc = Object.prototype.toString;
function dt(e) {
  switch (Qc.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return Os(e, Error);
      }
  }
}
function Pn(e, t) {
  return Qc.call(e) === `[object ${t}]`;
}
function Zc(e) {
  return Pn(e, "ErrorEvent");
}
function wi(e) {
  return Pn(e, "DOMError");
}
function $d(e) {
  return Pn(e, "DOMException");
}
function Ct(e) {
  return Pn(e, "String");
}
function As(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function ur(e) {
  return (
    e === null || As(e) || (typeof e != "object" && typeof e != "function")
  );
}
function rr(e) {
  return Pn(e, "Object");
}
function ao(e) {
  return typeof e == "object" && e !== null;
}
function co(e) {
  return typeof Event !== "undefined" && Os(e, Event);
}
function Md(e) {
  return Pn(e, "RegExp");
}
function dr(e) {
  return !!(e?.then && typeof e.then == "function");
}
function Os(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function Jc(e) {
  return typeof Request !== "undefined" && Os(e, Request);
}
function ze(e, t, n) {
  if (!(t in e)) {
    return;
  }
  const e_t = e[t];
  if (typeof e_t != "function") {
    return;
  }
  const o = n(e_t);

  if (typeof o == "function") {
    el(o, e_t);
  }

  try {
    e[t] = o;
  } catch {
    if (X) {
      q.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function Ht(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (X) {
      q.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function el(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    Ht(e, "__sentry_original__", t);
  } catch {}
}
function Ps(e) {
  return e.__sentry_original__;
}
function tl(e) {
  if (dt(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...Si(e) };
  }
  if (co(e)) {
    const { type, target, currentTarget, detail } = e;
    return {
      type: type,
      target: target,
      currentTarget: currentTarget,
      ...(detail ? { detail: detail } : {}),
      ...Si(e),
    };
  }
  return e;
}
function Si(e) {
  return ao(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function Dd(e) {
  const t = Object.keys(tl(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let _n;
function lo(e) {
  if (_n !== undefined) {
    return _n ? _n(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = se;
  return t in n && typeof n[t] == "function"
    ? ((_n = n[t]), _n(e))
    : ((_n = null), e());
}
function Kr() {
  return lo(() => Math.random());
}
function Ln() {
  return lo(() => Date.now());
}
const Ud = Symbol.for("sentry.skipNormalization");
const Fd = Symbol.for("sentry.overrideNormalizationDepth");
function Hd(e) {
  return !!e[Ud];
}
function Bd(e) {
  const e_Fd = e[Fd];
  return typeof e_Fd == "number" ? e_Fd : undefined;
}
let Yo;
function nl(e) {
  Yo = e;
}
function Et(e, t = 100, n = Infinity) {
  try {
    return Ko("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function rl(e, t = 3, n = 100 * 1024) {
  const r = Et(e, t);
  return jd(r) > n ? rl(e, t - 1, n) : r;
}
function Ko(e, t, n = Infinity, r = Infinity, o = zd()) {
  const [s, a] = o;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = ol(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (Hd(t)) {
    return t;
  }
  const l = Bd(t);
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
      return Ko("", m, u - 1, r, o);
    } catch {}
  }
  const f = Array.isArray(t) ? [] : {};
  let p = 0;
  const h = tl(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (p >= r) {
      f[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (f[m] = Ko(m, h_m, u - 1, r, o));
    p++;
  }
  a(t);
  return f;
}
function ol(e, t) {
  try {
    if (Yo) {
      const r = Yo(t);
      if (r) {
        return r;
      }
    }
    return typeof global !== "undefined" && t === global
      ? "[Global]"
      : typeof t == "number" && !Number.isFinite(t)
      ? `[${t}]`
      : typeof t == "function"
      ? `[Function: ${Ft(t)}]`
      : typeof t == "symbol"
      ? `[${String(t)}]`
      : typeof t == "bigint"
      ? `[BigInt: ${String(t)}]`
      : `[object ${Vd(t)}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Vd(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Wd(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function jd(e) {
  return Wd(JSON.stringify(e));
}
function zd() {
  const e = new WeakSet();
  function t(r) {
    return e.has(r) ? true : (e.add(r), false);
  }
  function n(r) {
    e.delete(r);
  }
  return [t, n];
}
function Xo(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function bi(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const o of e) {
    if (ur(o)) {
      n.push(String(o));
    } else if (o instanceof Error) {
      n.push(o.message ? `${o.name}: ${o.message}` : o.name);
    } else {
      n.push(ol(undefined, o));
    }
  }

  return n.join(t);
}
function Jn(e, t, n = false) {
  return Ct(e)
    ? Md(t)
      ? t.test(e)
      : Ct(t)
      ? n
        ? e === t
        : e.includes(t)
      : typeof t == "function"
      ? t(e)
      : false
    : false;
}
function fr(e, t = [], n = false) {
  for (const r of t) {
    if (Jn(e, r, n)) {
      return true;
    }
  }
  return false;
}
function qd() {
  const e = se;
  return e.crypto || e.msCrypto;
}
let So;
function Gd() {
  return Kr() * 16;
}
function Qe(e = qd()) {
  try {
    if (e?.randomUUID) {
      return lo(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!So) {
    (So = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return So.replace(/[018]/g, t => (t ^ ((Gd() & 15) >> (t / 4))).toString(16));
}
function sl(e) {
  return e.exception?.values?.[0];
}
function en(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const r = sl(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function Qo(e, t, n) {
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
function sn(e, t) {
  const n = sl(e);
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
function Ci(e) {
  if (Yd(e)) {
    return true;
  }
  try {
    Ht(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function Yd(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const il = 1000/* 1e3 */;
function pr() {
  return Ln() / il;
}
function Kd() {
  const { performance } = se;
  if (!performance?.now || !performance.timeOrigin) {
    return pr;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + lo(() => performance.now())) / il;
}
let Ni;
function Nt() {
  return (Ni ?? (Ni = Kd()))();
}
function Xd(e) {
  const t = Nt();

  const n = {
    sid: Qe(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => Zd(n),
  };

  if (e) {
    Cn(n, e);
  }

  return n;
}
function Cn(e, t = {}) {
  if (t.user) {
    !e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address);

    !e.did &&
      !t.did &&
      (e.did = t.user.id || t.user.email || t.user.username);
  }

  (e.timestamp = t.timestamp || Nt());

  if (t.abnormal_mechanism) {
    (e.abnormal_mechanism = t.abnormal_mechanism);
  }

  if (t.ignoreDuration) {
    (e.ignoreDuration = t.ignoreDuration);
  }

  if (t.sid) {
    (e.sid = t.sid.length === 32 ? t.sid : Qe());
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
function Qd(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  Cn(e, n);
}
function Zd(e) {
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
function hr(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const r = { ...e };
  for (const o in t) {
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      (r[o] = hr(r[o], t[o], n - 1));
    }
  }
  return r;
}
function Ii() {
  return Qe();
}
function al() {
  return Qe().substring(16);
}
function Jd(e) {
  try {
    const se_WeakRef = se.WeakRef;
    if (typeof se_WeakRef == "function") {
      return new se_WeakRef(e);
    }
  } catch {}
  return e;
}
function cl(e) {
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
const Zo = "_sentrySpan";
function Ti(e, t) {
  if (t) {
    Ht(e, Zo, Jd(t));
  } else {
    delete e[Zo];
  }
}
function Ri(e) {
  return cl(e[Zo]);
}
const ef = 100;
class ft {
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
    (this._propagationContext = { traceId: Ii(), sampleRand: Kr() });
  }
  clone() {
    const t = new ft();
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
    Ti(t, Ri(this));
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
      Cn(this._session, { user: t });
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
    const r = n instanceof ft ? n.getScopeData() : rr(n) ? t : undefined;

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
    Ti(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: Ii(), sampleRand: Kr() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : ef;
    if (r <= 0) {
      return this;
    }
    const o = {
      timestamp: pr(),
      ...t,
      message: t.message ? Xo(t.message, 2048) : t.message,
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
      span: Ri(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = hr(this._sdkProcessingMetadata, t, 2));
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
    const r = n?.event_id || Qe();
    if (!this._client) {
      if (X) {
        q.warn("No client configured on scope - will not capture exception!");
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
    const o = r?.event_id || Qe();
    if (!this._client) {
      if (X) {
        q.warn("No client configured on scope - will not capture message!");
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
    const r = t.event_id || n?.event_id || Qe();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
      : (X && q.warn("No client configured on scope - will not capture event!"),
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
function tf() {
  return An("defaultCurrentScope", () => new ft());
}
function nf() {
  return An("defaultIsolationScope", () => new ft());
}

const ki = e => e instanceof Promise && !e[ll];

const ll = Symbol("chained PromiseLike");

const rf = (e, t, n) => {
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
  return ki(r) && ki(e) ? r : of(e, r);
};

const of = (e, t) => {
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
    Object.assign(t, { [ll]: true });
  }

  return t;
};

class sf {
  constructor(t, n) {
    let r;

    if (t) {
      (r = t);
    } else {
      (r = new ft());
    }

    let o;

    if (n) {
      (o = n);
    } else {
      (o = new ft());
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
    return dr(r)
      ? rf(
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
function Nn() {
  const e = so();
  const t = io(e);
  return (t.stack = t.stack || new sf(tf(), nf()));
}
function af(e) {
  return Nn().withScope(e);
}
function cf(e, t) {
  const n = Nn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function Ai(e) {
  return Nn().withScope(() => e(Nn().getIsolationScope()));
}
function lf() {
  return {
    withIsolationScope: Ai,
    withScope: af,
    withSetScope: cf,
    withSetIsolationScope: (e, t) => Ai(t),
    getCurrentScope: () => Nn().getScope(),
    getIsolationScope: () => Nn().getIsolationScope(),
  };
}
function Ls(e) {
  const t = io(e);
  return t.acs ? t.acs : lf();
}
function uf(e) {
  return (
    typeof e == "object" &&
    e != null &&
    !Array.isArray(e) &&
    Object.keys(e).includes("value")
  );
}
function df(e, t) {
  const { value, unit } = uf(e) ? e : { value: e, unit: undefined };
  const o = ff(value);
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
function Oi(e, t = false) {
  const n = {};
  for (const [r, o] of Object.entries(e ?? {})) {
    const s = df(o, t);

    if (s) {
      (n[r] = s);
    }
  }
  return n;
}
function ff(e) {
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
function ht() {
  const e = so();
  return Ls(e).getCurrentScope();
}
function mt() {
  const e = so();
  return Ls(e).getIsolationScope();
}
function pf() {
  return An("globalScope", () => new ft());
}
function ul(...e) {
  const t = so();
  const n = Ls(t);
  if (e.length === 2) {
    const [r, o] = e;
    return r ? n.withSetScope(r, o) : n.withScope(o);
  }
  return n.withScope(e[0]);
}
function Ae() {
  return ht().getClient();
}
function hf(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || al() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const mf = "sentry.source";
const gf = "sentry.sample_rate";
const _f = "sentry.previous_trace_sample_rate";
const dl = "sentry.op";
const yf = "sentry.origin";
const fl = "sentry.profile_id";
const pl = "sentry.exclusive_time";
const vf = "gen_ai.conversation.id";
const Ef = 0;
const wf = 1;
const Sf = "_sentryScope";
const bf = "_sentryIsolationScope";
function Jo(e) {
  const t = e;
  return { scope: t[Sf], isolationScope: cl(t[bf]) };
}
const Pi = "sentry-";
function Cf(e) {
  const t = Nf(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((r, [o, s]) => {
    if (o.startsWith(Pi)) {
      const a = o.slice(Pi.length);
      r[a] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function Nf(e) {
  if (!(!e || (!Ct(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const r = Li(n);

      Object.entries(r).forEach(([o, s]) => {
        t[o] = s;
      });

      return t;
    }, {})
      : Li(e);
  }
}
function Li(e) {
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
const If = /^o(\d+)\./;

const Tf =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function Rf(e) {
  return e === "http" || e === "https";
}
function xn(e, t = false) {
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
function kf(e) {
  const t = Tf.exec(e);
  if (!t) {
    On(() => {
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
    const f = u.match(/^\d+/);

    if (f) {
      (u = f[0]);
    }
  }

  return hl({
    host: s,
    pass: o,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r,
  });
}
function hl(e) {
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
function Af(e) {
  if (!X) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (q.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? Rf(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (q.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (q.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (q.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function Of(e) {
  return e.match(If)?.[1];
}
function Pf(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let r;

  if (t.orgId) {
    (r = String(t.orgId));
  } else if (host) {
    (r = Of(host));
  }

  return r;
}
function ml(e) {
  const t = typeof e == "string" ? kf(e) : hl(e);
  if (!(!t || !Af(t))) {
    return t;
  }
}
function Lf(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const gl = 1;
function xf(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const o = isRemote ? spanId : uo(e).parent_span_id;
  const s = Jo(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || al() : spanId;
  return { parent_span_id: o, span_id: a, trace_id: traceId };
}
function $f(e) {
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
        sampled: r === gl,
        attributes: s,
        ...o
      })
    );
  }
}
function $i(e) {
  if (typeof e == "number") {
    return Mi(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return Mi(e.getTime());
  }

  return Nt();
}
function Mi(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function uo(e) {
  if (Ff(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (Uf(e)) {
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
      parent_span_id: Mf(e),
      start_timestamp: $i(startTime),
      timestamp: $i(endTime) || undefined,
      status: Bf(status),
      op: attributes[dl],
      origin: attributes[yf],
      links: $f(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function Mf(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function Df(e) {
  return {
    ...e,
    attributes: Oi(e.attributes),
    links: e.links?.map(t => ({
      ...t,
      attributes: Oi(t.attributes)
    })),
  };
}
function Uf(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Ff(e) {
  return typeof e.getSpanJSON == "function";
}
function Hf(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === gl;
}
function Bf(e) {
  if (!(!e || e.code === Ef)) {
    return e.code === wf ? "ok" : e.message || "internal_error";
  }
}
const Vf = "_sentryRootSpan";
const _l = Wf;
function Wf(e) {
  return e[Vf] || e;
}
function Di() {
  if (!xi) {
    On(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (xi = true);
  }
}
function Ui(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = e || Ae()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function Fi(e) {
  q.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function Hi(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (qf(n)) {
      if (e.description && Jn(e.description, n)) {
        if (X) {
          Fi(e);
        }

        return true;
      }
      continue;
    }
    const r = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !r) {
      continue;
    }
    const o = n.name ? e.description && Jn(e.description, n.name) : true;
    const s = n.op ? e.op && Jn(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => jf(e.attributes?.[c], l)
        )
      : true;

    if (o && s && a) {
      if (X) {
        Fi(e);
      }

      return true;
    }
  }
  return false;
}
function jf(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Jn(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e === t;
}
function zf(e, t) {
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
function qf(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const Gf = Symbol.for("sentry.nonRecordingSpan");
function Yf(e) {
  return !!e && e[Gf] === true;
}
const xs = "production";
const Kf = "_frozenDsc";
function yl(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const o = {
    environment: n.environment || xs,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: Pf(t),
  };

  t.emit("createDsc", o);
  return o;
}
function vl(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || yl(n.traceId, e);
}
function Xf(e) {
  const t = Ae();
  if (!t) {
    return {};
  }
  const n = _l(e);

  const {
    data,
    description
  } = uo(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[gf] ?? data[_f];
  function c(g) {
    if ((typeof a == "number" || typeof a == "string")) {
      (g.sample_rate = `${a}`);
    }

    return g;
  }
  const n_Kf = n[Kf];
  if (n_Kf) {
    return c(n_Kf);
  }
  const u = Yf(n);
  const d = u && n.dropReason === "ignored";
  if (u && (!Ui(t.getOptions()) || d)) {
    const g = Jo(n).scope;
    if (g) {
      const _ = { ...vl(t, g) };

      if (d) {
        (_.sampled = "false");
      }

      return c(_);
    }
  }
  const f = s?.get("sentry.dsc");
  const p = f && Cf(f);
  if (p) {
    return c(p);
  }
  const h = yl(e.spanContext().traceId, t);
  const m = data[mf] ?? data["sentry.segment.name.source"];

  if (m !== "url" && description) {
    (h.transaction = description);
  }

  if (Ui()) {
    (h.sampled = String(Hf(n)));

    (h.sample_rand = s?.get("sentry.sample_rand") ??
    Jo(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(h);
  t.emit("createDsc", h, n);
  return h;
}
function Qf(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
function $n(e, t = []) {
  return [e, t];
}
function Bi(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function es(e, t) {
  const [, n] = e;
  for (const r of n) {
    const o = r[0].type;
    if (t(r, o)) {
      return true;
    }
  }
  return false;
}
function Zf(e, t) {
  return es(e, (n, r) => t.includes(r));
}
function ts(e) {
  const t = io(se);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Jf(e) {
  const [t, n] = e;
  let r = JSON.stringify(t);
  function o(s) {
    if (typeof r == "string") {
      (r = typeof s == "string" ? r + s : [ts(r), s]);
    } else {
      r.push(typeof s == "string" ? ts(s) : s);
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
        l = JSON.stringify(Et(c));
      }
      o(l);
    }
  }
  return typeof r == "string" ? r : ep(r);
}
function ep(e) {
  const t = e.reduce((o, s) => o + s.length, 0);

  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e) {
    n.set(o, r);
    (r += o.length);
  }
  return n;
}
function tp(e) {
  const t = typeof e.data == "string" ? ts(e.data) : e.data;
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
const El = {
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
function np(e) {
  return e in El;
}
function Vi(e) {
  return np(e) ? El[e] : e;
}
function wl(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function rp(e, t, n, r) {
  const o = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date(Ln()).toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: xn(r) }),
    ...(o && { trace: o }),
  };
}
function op(e, t) {
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
function sp(e, t, n, r) {
  const o = wl(n);

  const s = {
    sent_at: new Date(Ln()).toISOString(),
    ...(o && { sdk: o }),
    ...(!!r && t && { dsn: xn(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return $n(s, [a]);
}
function ip(e, t, n, r) {
  const o = wl(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  op(e, n?.sdk);
  const a = rp(e, o, r, t);
  delete e.sdkProcessingMetadata;
  return $n(a, [[{ type: s }, e]]);
}
function ap(e) {
  return e.getOptions().traceLifecycle === "stream";
}
function cp(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  lp(e, t);

  if (span) {
    fp(e, span);
  }

  pp(e, fingerprint);
  up(e, breadcrumbs);
  dp(e, sdkProcessingMetadata);
}
function Wi(e, t) {
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
  Un(e, "extra", extra);
  Un(e, "tags", tags);
  Un(e, "attributes", attributes);
  Un(e, "user", user);
  Un(e, "contexts", contexts);
  (e.sdkProcessingMetadata = hr(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function Un(e, t, n) {
  e[t] = hr(e[t], n, 1);
}
function Sl(e, t) {
  const n = pf().getScopeData();

  if (e) {
    Wi(n, e.getScopeData());
  }

  if (t) {
    Wi(n, t.getScopeData());
  }

  return n;
}
function lp(e, t) {
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
function up(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function dp(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function fp(e, t) {
  (e.contexts = { trace: xf(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: Xf(t),
      ...e.sdkProcessingMetadata,
    });

  const n = _l(t);
  const r = uo(n).description;

  if (r && !e.transaction && e.type === "transaction") {
    (e.transaction = r);
  }
}
function pp(e, t) {
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
const hp = "url.full";
function bl(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([r, o]) => {
    if (o != null && !(r in n)) {
      (n[r] = o);
    }
  });
}
const bo = 0;
const ji = 1;
const zi = 2;
function mr(e) {
  return new or((t) => {
    t(e);
  });
}
function Cl(e) {
  return new or((t, n) => {
    n(e);
  });
}
class or {
  constructor(t) {
    (this._state = bo);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new or((r, o) => {
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
    return new or((n, r) => {
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
    if (this._state === bo) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === ji && n[1](this._value);
        this._state === zi && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === bo) {
          if (dr(a)) {
            a.then(r, o);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const r = (s) => {
      n(ji, s);
    };

    const o = (s) => {
      n(zi, s);
    };

    try {
      t(r, o);
    } catch (s) {
      o(s);
    }
  }
}
function mp(e, t, n, r = 0) {
  try {
    const o = ns(t, n, e, r);
    return dr(o) ? o : mr(o);
  } catch (o) {
    return Cl(o);
  }
}
function ns(e, t, n, r) {
  const n_r = n[r];
  if (!e || !n_r) {
    return e;
  }
  const s = n_r({ ...e }, t);

  if (X && s === null) {
    q.log(`Event processor "${n_r.id || "?"}" dropped event`);
  }

  return dr(s) ? s.then(a => ns(a, t, n, r + 1)) : ns(s, t, n, r + 1);
}
let zt;
let qi;
let Gi;
let Tt;
function gp(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = se;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const r = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const o = _debugIds ? Object.keys(_debugIds) : [];
  if (Tt && r.length === qi && o.length === Gi) {
    return Tt;
  }
  (qi = r.length);
  (Gi = o.length);
  (Tt = {});

  if (!zt) {
    (zt = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const d = zt?.[l];
      if (d && Tt && c_l) {
        (Tt[d[0]] = c_l);

        if (zt) {
          (zt[l] = [d[0], c_l]);
        }
      } else if (c_l) {
        const f = e(l);
        for (let p = f.length - 1; p >= 0; p--) {
          const m = f[p]?.filename;
          if (m && Tt && zt) {
            (Tt[m] = c_l);
            (zt[l] = [m, c_l]);
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
function _p(e, t, n, r, o, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || Qe(),
    timestamp: t.timestamp || pr(),
  };

  const u = n.integrations || e.integrations.map(_ => _.name);

  yp(l, e);
  wp(l, u);

  if (o) {
    o.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    vp(l, e.stackParser);
  }

  const d = bp(r, n.captureContext);

  if (n.mechanism) {
    sn(l, n.mechanism);
  }

  const f = o ? o.getEventProcessors() : [];
  const p = Sl(s, d);
  const h = [...(n.attachments || []), ...p.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  cp(l, p);
  const m = [...f, ...p.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? mr(l) : mp(m, l, n)).then(
    _ => {
      if (_) {
        Ep(_);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? Sp(_, normalizeDepth, normalizeMaxBreadth) : _;
    }
  );
}
function yp(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || xs);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = Xo(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = Xo(c.value, maxValueLength));
      }
    });
  }
}
function vp(e, t) {
  const n = gp(t);
  e.exception?.values?.forEach((r) => {
    r.stacktrace?.frames?.forEach((o) => {
      if (o.filename) {
        (o.debug_id = n[o.filename]);
      }
    });
  });
}
function Ep(e) {
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
function wp(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function Sp(e, t, n) {
  if (!e) {
    return null;
  }
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(o => ({
        ...o,
        ...(o.data && { data: Et(o.data, t, n) })
      })),
    }),
    ...(e.user && { user: Et(e.user, t, n) }),
    ...(e.contexts && { contexts: Et(e.contexts, t, n) }),
    ...(e.extra && { extra: Et(e.extra, t, n) }),
  };

  if (e.contexts?.trace &&
    r.contexts) {
    (r.contexts.trace = e.contexts.trace);

    e.contexts.trace.data &&
      (r.contexts.trace.data = Et(e.contexts.trace.data, t, n));
  }

  if (e.spans) {
    (r.spans = e.spans.map(o => ({
      ...o,
      ...(o.data && { data: Et(o.data, t, n) })
    })));
  }

  if (e.contexts?.flags &&
    r.contexts) {
    (r.contexts.flags = Et(e.contexts.flags, 3, n));
  }

  return r;
}
function bp(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new ft();
  n.update(t);
  return n;
}
function Cp(e) {
  if (e) {
    return Np(e) ? { captureContext: e } : Tp(e) ? { captureContext: e } : e;
  }
}
function Np(e) {
  return e instanceof ft || typeof e == "function";
}
const Ip = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function Tp(e) {
  return Object.keys(e).some(t => Ip.includes(t));
}
function Nl(e, t) {
  return ht().captureException(e, Cp(t));
}
function Il(e, t) {
  return ht().captureEvent(e, t);
}
function Rp(e, t) {
  mt().setContext(e, t);
}
function Yi(e) {
  mt().setUser(e);
}
function kp() {
  return mt().lastEventId();
}
function Ki(e) {
  const t = mt();
  const { user } = Sl(t, ht());
  const { userAgent } = se.navigator || {};
  const o = Xd({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    Cn(s, { status: "exited" });
  }

  Tl();
  t.setSession(o);
  return o;
}
function Tl() {
  const e = mt();
  const n = ht().getSession() || e.getSession();

  if (n) {
    Qd(n);
  }

  Rl();
  e.setSession();
}
function Rl() {
  const e = mt();
  const t = Ae();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function Co(e = false) {
  if (e) {
    Tl();
    return;
  }
  Rl();
}
function kl(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const Ap = "7";
function Al(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function Op(e) {
  return `${Al(e)}${e.projectId}/envelope/`;
}
function Pp(e, t) {
  const n = { sentry_version: Ap };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function Lp(e, t, n) {
  return t || `${Op(e)}?${Pp(e, n)}`;
}
function xp(e, t) {
  const n = ml(e);
  if (!n) {
    return "";
  }
  const r = `${Al(n)}embed/error-page/`;
  let o = `dsn=${xn(n)}`;
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
const Xi = [];
function $p(e) {
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
function Mp(e) {
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
  return $p(r);
}
function Dp(e, t) {
  const n = {};

  t.forEach((r) => {
    if (r?.beforeSetup) {
      r.beforeSetup(e);
    }
  });

  t.forEach((r) => {
    if (r) {
      Ol(e, r, n);
    }
  });

  return n;
}
function Qi(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function Ol(e, t, n) {
  if (n[t.name]) {
    if (X) {
      q.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!Xi.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    Xi.push(t.name);
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
    q.log(`Integration installed: ${t.name}`);
  }
}
function Up() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Fp() {
  return "npm";
}
function Hp() {
  return (!Up() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function $s() {
  return typeof window !== "undefined" && (!Hp() || Bp());
}
function Bp() {
  return se.process?.type === "renderer";
}
function Vp(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...($s() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Wp(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = xn(r));
  }

  return $n(s, [Vp(e, o)]);
}
function jp(e, t) {
  const n = t ?? zp(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();

  const o = Wp(
    n,
    r._metadata,
    r.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Pl().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(o);
}
function zp(e) {
  return Pl().get(e);
}
function Pl() {
  return An("clientToLogBufferMap", () => new WeakMap());
}
function qp(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...($s() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Gp(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = xn(r));
  }

  return $n(s, [qp(e, o)]);
}
function Yp(e, t) {
  const n = t ?? Kp(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();

  const o = Gp(
    n,
    r._metadata,
    r.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Ll().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(o);
}
function Kp(e) {
  return Ll().get(e);
}
function Ll() {
  return An("clientToMetricBufferMap", () => new WeakMap());
}
function Xp(e) {
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
  return Df(t);
}
function Qp(e, t) {
  if (e.type !== "transaction" ||
  !e.spans?.length ||
  !e.sdkProcessingMetadata?.hasGenAiSpans ||
  t.getOptions().streamGenAiSpans === false ||
  ap(t)) {
    return;
  }
  const n = [];
  const r = [];
  for (const s of e.spans) {
    if (s.op?.startsWith("gen_ai.")) {
      n.push(Xp(s));
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
      ...($s() && { ingest_settings: { infer_ip: o, infer_user_agent: o } }),
      items: n,
    },
  ];
}
const Ms = Symbol.for("SentryBufferFullError");
function Ds(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function r(a) {
    t.delete(a);
  }
  function o(a) {
    if (!n()) {
      return Cl(Ms);
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
      return mr(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => kl(setTimeout(() => u(false), a)))];
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
const Zp = 60 * 1000/* 1e3 */;
function Jp(e, t = Ln()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const r = Date.parse(`${e}`);
  return isNaN(r) ? Zp : r - t;
}
function eh(e, t) {
  return e[t] || e.all || 0;
}
function th(e, t, n = Ln()) {
  return eh(e, t) > n;
}
function nh(e, { statusCode: t, headers: n }, r = Ln()) {
  const o = { ...e };
  const s = n?.["x-sentry-rate-limits"];
  const a = n?.["retry-after"];
  if (s) {
    for (const c of s.trim().split(",")) {
      const [l, u, , , d] = c.split(":", 5);
      const f = parseInt(l, 10);
      const p = (isNaN(f) ? 60 : f) * 1000/* 1e3 */;
      if (!u) {
        o.all = r + p;
      } else {
        for (const h of u.split(";")) {
          if (h === "metric_bucket") {
            if ((!d || d.split(";").includes("custom"))) {
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
      (o.all = r + Jp(a, r));
    } else if (t === 429) {
      (o.all = r + 60 * 1000/* 1e3 */);
    }
  }
  return o;
}
const xl = 64;
function rh(e, t, n = Ds(e.bufferSize || xl)) {
  let r = {};
  const o = a => n.drain(a);
  function s(a) {
    const c = [];

    es(a, (f, p) => {
      const h = Vi(p);

      if (th(r, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(f);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = $n(a[0], c);

    const u = (f) => {
      if (Zf(l, ["client_report"])) {
        if (X) {
          q.warn(
            `Dropping client report. Will not send outcomes (reason: ${f}).`
          );
        }

        return;
      }
      es(l, (p, h) => {
        e.recordDroppedEvent(f, Vi(h));
      });
    };

    const d = () => t({ body: Jf(l) }).then(
      f => f.statusCode === 413
        ? (X &&
            q.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          f)
        : (X &&
            f.statusCode !== undefined &&
            (f.statusCode < 200 || f.statusCode >= 300) &&
            q.warn(
              `Sentry responded with status code ${f.statusCode} to sent event.`
            ),
          (r = nh(r, f)),
          f),
      (f) => {
        u("network_error");

        if (X) {
          q.error("Encountered error running transport request:", f);
        }

        throw f;
      }
    );

    return n.add(d).then(
      f => f,
      (f) => {
        if (f === Ms) {
          if (X) {
            q.error("Skipped sending event because buffer is full.");
          }

          u("queue_overflow");
          return Promise.resolve({});
        }
        throw f;
      }
    );
  }
  return { send: s, flush: o };
}
function oh(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: pr(), discarded_events: e },
  ];
  return $n(t ? { dsn: t } : {}, [r]);
}
function $l(e) {
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
function sh(e) {
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
    profile_id: data?.[fl],
    exclusive_time: data?.[pl],
    measurements: e.measurements,
    is_segment: true,
  };
}
function ih(e) {
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
          ...(e.profile_id && { [fl]: e.profile_id }),
          ...(e.exclusive_time && { [pl]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const wr = ["forwarded", "-ip", "remote-", "via", "-user"];
function ah(e) {
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
        cookies: { deny: wr },
        httpHeaders: { request: { deny: wr }, response: { deny: wr } },
        httpBodies: [],
        urlQueryParams: { deny: wr },
        graphQL: { document: true, variables: true },
        genAI: { inputs: false, outputs: false },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7,
      };
}
const ch = {
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
function lh(e) {
  const t = e.dataCollection != null ? ch : ah(e.sendDefaultPii);
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
const Zi = "Not capturing exception because it's already been captured.";
const Ji = "Discarded session because of missing or non-string release";
const Ml = Symbol.for("SentryInternalError");
const Dl = Symbol.for("SentryDoNotSendEventError");
const uh = 5000/* 5e3 */;
function Dr(e) {
  return { message: e, [Ml]: true };
}
function No(e) {
  return { message: e, [Dl]: true };
}
function ea(e) {
  return ao(e) && Ml in e;
}
function ta(e) {
  return ao(e) && Dl in e;
}
function na(e, t, n, r, o) {
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
      const u = e.getOptions()._flushInterval ?? uh;

      if (u > 0) {
        (c = true);

        (a = kl(
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
class dh {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = Ds(t.transportOptions?.bufferSize ?? xl));
    (this._dataCollection = lh(t));

    if (t.dsn) {
      (this._dsn = ml(t.dsn));
    } else if (X) {
      q.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const r = Lp(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: r,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs ?? true);

    if (this._options.enableLogs) {
      na(this, "afterCaptureLog", "flushLogs", mh, jp);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      na(this, "afterCaptureMetric", "flushMetrics", hh, Yp);
    }
  }
  captureException(t, n, r) {
    const o = Qe();
    if (Ci(t)) {
      if (X) {
        q.log(Zi);
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
    const s = { event_id: Qe(), ...r };
    const a = As(t) ? t : String(t);
    const c = ur(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, o)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, r) {
    const o = Qe();
    if (n?.originalException && Ci(n.originalException)) {
      if (X) {
        q.log(Zi);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = ra(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || r, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    Cn(t, { init: false });
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

    Ol(this, t, this._integrations);

    if (!n) {
      Qi(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    const r = Qp(t, this);
    let o = ip(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      o = Bi(o, tp(s));
    }

    if (r) {
      (o = Bi(o, r));
    }

    this.sendEnvelope(o).then(s => this.emit("afterSendEvent", t, s));
  }
  sendSession(t) {
    const { release, environment = xs } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (X) {
          q.warn(Ji);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (X) {
          q.warn(Ji);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const o = sp(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(o);
  }
  recordDroppedEvent(t, n, r = 1) {
    if (this._options.sendClientReports) {
      const o = `${t}:${n}`;

      if (X) {
        q.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`);
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
          q.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (X) {
      q.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = Dp(this, integrations));
    Qi(this, integrations);
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
      Cn(t, {
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

    return _p(s, t, n, r, this, o).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...hf(r) },
          ...c.contexts,
        });

      const l = vl(this, r);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, r = ht(), o = mt()) {
    if (X &&
      rs(t)) {
      q.log(`Captured error event \`${$l(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, r, o).then(
      s => s.event_id,
      (s) => {
        if (X) {
          if (ta(s)) {
            q.log(s.message);
          } else if (ea(s)) {
            q.warn(s.message);
          } else {
            q.warn(s);
          }
        }
      }
    );
  }
  _processEvent(t, n, r, o) {
    const s = this.getOptions();
    const { sampleRate } = s;
    const c = Ul(t);
    const l = rs(t);
    const d = `before send for type \`${t.type || "error"}\``;
    const f = typeof sampleRate === "undefined" ? undefined : Lf(sampleRate);
    const p = ra(t.type);
    return this._prepareEvent(t, n, r, o)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", p);
          throw No("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const y = ph(this, s, h, n);
        return fh(y, d);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", p);

        if (c) {
          const _ = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", _);
        }

        throw No(`${d} returned \`null\`, will not send event.`);
      }
      const m = r.getSession() || o.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (l && typeof f == "number" && Kr() > f) {
        this.recordDroppedEvent("sample_rate", "error");

        throw No(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        );
      }

      if (c) {
        const g = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const _ = h.spans ? h.spans.length : 0;
        const v = g - _;

        if (v > 0) {
          this.recordDroppedEvent("before_send", "span", v);
        }
      }
      const h_transaction_info = h.transaction_info;
      if (c && h_transaction_info && h.transaction !== t.transaction) {
        const g = "custom";
        h.transaction_info = { ...h_transaction_info, source: g };
      }
      this.sendEvent(h, n);
      return h;
    })
      .then(null, (h) => {
        throw ta(h) || ea(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            Dr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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

        if (r === Ms) {
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
      q.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (X) {
        q.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (X) {
        q.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (X) {
      q.log("Sending outcomes:", t);
    }

    const n = oh(t, this._options.tunnel && xn(this._dsn));
    this.sendEnvelope(n);
  }
}
function ra(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function fh(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (dr(e)) {
    return e.then(
      (r) => {
        if (!rr(r) && r !== null) {
          throw Dr(n);
        }
        return r;
      },
      (r) => {
        throw Dr(`${t} rejected with ${r}`);
      }
    );
  }
  if (!rr(e) && e !== null) {
    throw Dr(n);
  }
  return e;
}
function ph(e, t, n, r) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !Qf(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (rs(l) && beforeSend) {
    return beforeSend(l, r);
  }
  if (Ul(l)) {
    if (c || ignoreSpans) {
      const u = sh(l);
      if (ignoreSpans?.length &&
      Hi({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const d = c(u);

        if (d) {
          (l = hr(n, ih(d)));
        } else {
          Di();
        }
      }
      if (l.spans) {
        const d = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            Hi({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            zf(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              d.push(m);
            } else {
              Di();
              d.push(h);
            }
          } else {
            d.push(h);
          }
        }
        const p = l.spans.length - d.length;

        if (p) {
          e.recordDroppedEvent("before_send", "span", p);
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
function rs(e) {
  return e.type === undefined;
}
function Ul(e) {
  return e.type === "transaction";
}
function hh(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + Fl(e.attributes);
}
function mh(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + Fl(e.attributes);
}
function Fl(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * oa(n[0]));
    } else if (ur(n)) {
      (t += oa(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function oa(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function gh(e, t) {
  if (t.debug === true) {
    if (X) {
      q.enable();
    } else {
      On(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  ht().update(t.initialScope);
  const r = new e(t);
  _h(r);
  r.init();
  return r;
}
function _h(e) {
  ht().setClient(e);
}
function Io(e) {
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
function yh(e, t = true) {
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
function vh(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function Hl(e, t, n = [t], r = "npm") {
  const o = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!o.name) {
    (o.name = `sentry.javascript.${t}`);

    (o.packages = n.map(s => ({
      name: `${r}:@sentry/${s}`,
      version: on
    })));

    (o.version = on);
  }
}
const Eh = 100;
function un(e, t) {
  const n = Ae();
  const r = mt();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = Eh } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: pr(), ...e };

  const l = beforeBreadcrumb ? On(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    r.addBreadcrumb(l, maxBreadcrumbs);
  }
}
const wh = "FunctionToString";
const sa = new WeakMap();

const bh = () => ({
  name: wh,

  setupOnce() {
    const e = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = Ps(this);
        let r;
        try {
          if (sa.has(Ae()) && n !== undefined) {
            (r = n);
          }
        } catch {}
        return e.apply(r ?? this, t);
      };
    } catch {}
  },

  setup(e) {
    sa.set(e, true);
  }
});

const Ch = [
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

const Nh = "EventFilters";

const Ih = (e = {}) => {
  let t;
  return {
    name: Nh,
    setup(n) {
      const r = n.getOptions();
      t = ia(e, r);
    },
    processEvent(n, r, o) {
      if (!t) {
        const s = o.getOptions();
        t = ia(e, s);
      }
      return Rh(n, t) ? null : n;
    },
  };
};

const Th = (e = {}) => ({
  ...Ih(e),
  name: "InboundFilters"
});

function ia(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Ch),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function Rh(e, t) {
  if (e.type) {
    if (e.type === "transaction" && Ah(e, t.ignoreTransactions)) {
      if (X) {
        q.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${en(e)}`);
      }

      return true;
    }
  } else {
    if (kh(e, t.ignoreErrors)) {
      if (X) {
        q.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${en(e)}`);
      }

      return true;
    }
    if (xh(e)) {
      if (X) {
        q.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${en(e)}`);
      }

      return true;
    }
    if (Oh(e, t.denyUrls)) {
      if (X) {
        q.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${en(e)}.
Url: ${Xr(e)}`);
      }

      return true;
    }
    if (!Ph(e, t.allowUrls)) {
      if (X) {
        q.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${en(e)}.
Url: ${Xr(e)}`);
      }

      return true;
    }
  }
  return false;
}
function kh(e, t) {
  return t?.length ? $l(e).some(n => fr(n, t)) : false;
}
function Ah(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? fr(e_transaction, t) : false;
}
function Oh(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = Xr(e);
  return n ? fr(n, t) : false;
}
function Ph(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = Xr(e);
  return n ? fr(n, t) : true;
}
function Lh(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function Xr(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        r => r.mechanism?.parent_id === undefined && r.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? Lh(n) : null;
  } catch {
    if (X) {
      q.error(`Cannot extract url for event ${en(e)}`);
    }

    return null;
  }
}
function xh(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function $h(e, t, n, r, o, s) {
  if (!o.exception?.values || !s || !dt(s.originalException)) {
    return;
  }
  const a =
    o.exception.values.length > 0
      ? o.exception.values[o.exception.values.length - 1]
      : undefined;

  if (a) {
    (o.exception.values = os(
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
function os(e, t, n, r, o, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (dt(r[o])) {
    aa(a, c, r);
    const u = e(t, r[o]);
    const l_length = l.length;
    ca(u, o, l_length, c);
    (l = os(e, t, n, r[o], o, [u, ...l], u, l_length));
  }

  if (Bl(r)) {
    r.errors.forEach((u, d) => {
      if (dt(u)) {
        aa(a, c, r);
        const f = e(t, u);
        const l_length = l.length;
        ca(f, `errors[${d}]`, l_length, c);
        (l = os(e, t, n, u, o, [f, ...l], f, l_length));
      }
    });
  }

  return l;
}
function Bl(e) {
  return Array.isArray(e.errors);
}
function aa(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(Bl(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function ca(e, t, n, r) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
function Mh(e) {
  return (
    dt(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function la(e) {
  return Mh(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
const ua = new Set([]);
function Dh(e) {
  const t = "console";
  const n = fn(t, e);
  pn(t, Uh);
  return n;
}
const da = new Set();
function Uh() {
  if ("console" in se) {
    Sd.forEach(e => {
      if (!da.has(e) && (e in se.console)) {
        da.add(e);

        ze(se.console, e, t => {
          (Yr[e] = t);

          return (...n) => {
            const [r] = n;
            const Yr_e = Yr[e];
            const s = ua.size && typeof r == "string" && fr(r, ua);

            if (!s) {
              tt("console", { args: n, level: e });
            }

            if ((!s || (X && q.isEnabled()))) {
              Yr_e?.apply(se.console, n);
            }
          };
        });
      }
    });
  }
}
function Fh(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const Hh = "Dedupe";

const Vh = () => {
  let e;
  return {
    name: Hh,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (Wh(t, e)) {
          if (X) {
            q.warn(
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

function Wh(e, t) {
  return t ? !!(jh(e, t) || zh(e, t)) : false;
}
function jh(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !Wl(e, t) ||
    !Vl(e, t)
  );
}
function zh(e, t) {
  const n = fa(t);
  const r = fa(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Wl(e, t) ||
    !Vl(e, t)
  );
}
function Vl(e, t) {
  let n = vi(e);
  let r = vi(t);
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
function Wl(e, t) {
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
function fa(e) {
  return e.exception?.values?.[0];
}
const qh = "ConversationId";

const Yh = () => ({
  name: qh,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = ht().getScopeData();
      const r = mt().getScopeData();
      const o = n.conversationId || r.conversationId;
      if (o) {
        const { op: op_1, data, description } = uo(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(vf, o);
      }
    });
  }
});

function jl(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const sr = se;
function Kh() {
  return "history" in sr && !!sr.history;
}
function Xh() {
  if (!("fetch" in sr)) {
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
function ss(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function Qh() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!Xh()) {
    return false;
  }
  if (ss(sr.fetch)) {
    return true;
  }
  let e = false;
  const sr_document = sr.document;
  if (sr_document && typeof sr_document.createElement == "function") {
    try {
      const n = sr_document.createElement("iframe");
      (n.hidden = true);
      sr_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = ss(n.contentWindow.fetch));
      }

      sr_document.head.removeChild(n);
    } catch (n) {
      if (X) {
        q.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function Zh(e, t) {
  const n = "fetch";
  const r = fn(n, e);

  pn(n, () => Jh(undefined, t));

  return r;
}
function Jh(e, t = false) {
  if (!t || Qh()) {
    ze(se, "fetch", n => (...r) => {
      const o = new Error();
      const { method, url } = em(r);

      const c = {
        args: r,
        fetchData: { method: method, url: url },
        startTimestamp: Nt() * 1000/* 1e3 */,
        virtualError: o,
        headers: tm(r),
      };

      tt("fetch", { ...c });

      return n.apply(se, r).then(
        async l => {
          tt("fetch", { ...c, endTimestamp: Nt() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          tt("fetch", { ...c, endTimestamp: Nt() * 1000/* 1e3 */, error: l });

          if (dt(l) &&
            l.stack === undefined) {
            (l.stack = o.stack);
            Ht(l, "framesToPop", 1);
          }

          const d =
            Ae()?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (d !== false &&
          dt(l) &&
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
                Ht(l, "__sentry_fetch_url_host__", h);
              }
            } catch {}
          }
          throw l;
        }
      );
    });
  }
}
function Ur(e, t) {
  return ao(e) && !!e[t];
}
function pa(e) {
  return typeof e == "string"
    ? e
    : e
    ? Ur(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function em(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: pa(n),
      method: Ur(r, "method")
        ? String(r.method).toUpperCase()
        : Jc(n) && Ur(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: pa(t),
    method: Ur(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function tm(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (Jc(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const zl = se;
function Us() {
  try {
    return zl.document.location.href;
  } catch {
    return "";
  }
}
function nm(e, t = 5) {
  if (!zl.HTMLElement) {
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
const pe = se;
let is = 0;
function ql() {
  return is > 0;
}
function rm() {
  is++;

  setTimeout(() => {
    is--;
  });
}
function In(e, t = {}) {
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
    if (Ps(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const r = function (...o) {
    se._sentryWrappedDepth = (se._sentryWrappedDepth || 0) + 1;
    try {
      const s = o.map(a => In(a, t));
      return e.apply(this, s);
    } catch (s) {
      rm();

      ul((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              Qo(c, undefined);
              sn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: o });
            return c;
          }
        );

        Nl(s);
      });

      throw s;
    } finally {
      se._sentryWrappedDepth = (se._sentryWrappedDepth || 0) - 1;
    }
  };
  try {
    for (const o in e) {
      if (Object.prototype.hasOwnProperty.call(e, o)) {
        (r[o] = e[o]);
      }
    }
  } catch {}
  el(r, e);
  Ht(e, "__sentry_wrapped__", r);
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
function ha() {
  const e = Us();
  const { referrer } = pe.document || {};
  const { userAgent } = pe.navigator || {};
  const r = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: r };
}
function Fs(e, t) {
  const n = fo(e, t);
  const r = { type: cm(t), value: lm(t) };

  if (n.length) {
    (r.stacktrace = { frames: n });
  }

  if (r.type === undefined &&
    r.value === "") {
    (r.value = "Unrecoverable error caught");
  }

  return r;
}
function om(e, t, n, r) {
  const s = Ae()?.getOptions().normalizeDepth;
  const a = hm(t);
  const c = { __serialized__: rl(t, s) };
  if (a) {
    return { exception: { values: [Fs(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: co(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
          value: fm(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = fo(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function To(e, t) {
  return { exception: { values: [Fs(e, t)] } };
}
function fo(e, t) {
  const n = t.stacktrace || t.stack || "";
  const r = im(t);
  const o = am(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const sm = /Minified React error #\d+;/i;
function im(e) {
  return e && sm.test(e.message) ? 1 : 0;
}
function am(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function Gl(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function cm(e) {
  const t = e?.name;
  return !t && Gl(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function lm(e) {
  const t = e?.message;
  return Gl(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? la(t.error)
      : la(e)
    : "No error message";
}
function um(e, t, n, r) {
  const o = n?.syntheticException || undefined;
  const s = Hs(e, t, o, r);
  sn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return mr(s);
}
function dm(e, t, n = "info", r, o) {
  const s = r?.syntheticException || undefined;
  const a = as(e, t, s, o);
  (a.level = n);

  if (r?.event_id) {
    (a.event_id = r.event_id);
  }

  return mr(a);
}
function Hs(e, t, n, r, o) {
  let s;
  if (Zc(t) && t.error) {
    return To(e, t.error);
  }
  if (wi(t) || $d(t)) {
    const a = t;
    if ("stack" in t) {
      s = To(e, t);
      const c = s.exception?.values?.[0];
      if (r && n && c && !c.stacktrace) {
        const l = fo(e, n);

        if (l.length) {
          (c.stacktrace = { frames: l });
          sn(s, { synthetic: true });
        }
      }
    } else {
      const c = a.name || (wi(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = as(e, l, n, r));
      Qo(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (dt(t)) {
    return To(e, t);
  }

  if (rr(t) || co(t)) {
    (s = om(e, t, n, o));
    sn(s, { synthetic: true });
    return s;
  }

  (s = as(e, t, n, r));
  Qo(s, `${t}`);
  sn(s, { synthetic: true });
  return s;
}
function as(e, t, n, r) {
  const o = {};
  if (r && n) {
    const s = fo(e, n);

    if (s.length) {
      (o.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    sn(o, { synthetic: true });
  }
  if (As(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (o.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return o;
  }
  (o.message = t);
  return o;
}
function fm(e, { isUnhandledRejection: t }) {
  const n = Dd(e);
  const r = t ? "promise rejection" : "exception";
  return Zc(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : co(e)
    ? `Event \`${pm(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function pm(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function hm(e) {
  return Object.values(e).find(dt);
}
class mm extends dh {
  constructor(t) {
    const n = gm(t);
    const r = pe.SENTRY_SDK_SOURCE || Fp();
    Hl(n, "browser", ["browser"], r);
    super(n);
    const { userInfo } = this.getDataCollectionOptions();

    if (n._metadata?.sdk) {
      (n._metadata.sdk.settings = {
          infer_ip: userInfo ? "auto" : "never",
          ...n._metadata.sdk.settings,
        });
    }

    const { sendClientReports } = this._options;

    if (pe.document) {
      pe.document.addEventListener("visibilitychange", () => {
        if (pe.document.visibilityState === "hidden") {
          sendClientReports && this._flushOutcomes();

          queueMicrotask(() => {
            this.flush();
          });
        }
      });
    }

    if (userInfo) {
      this.on("beforeSendSession", vh);
    }
  }
  eventFromException(t, n) {
    return um(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return dm(
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
function gm(e) {
  return {
    release:
      typeof __SENTRY_RELEASE__ == "string"
        ? __SENTRY_RELEASE__
        : pe.SENTRY_RELEASE?.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...e,
  };
}
const _m = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Se = se;
function ma(e, t, n) {
  if (Se.document) {
    Se.addEventListener(e, t, n);
  }
}
function ga(e, t, n) {
  if (Se.document) {
    Se.removeEventListener(e, t, n);
  }
}

const ym = (e) => {
  return () => {
    if (!t) {
      e();
      (t = true);
    }
  };
};

const vm = (e) => {
  const t = Se.requestIdleCallback || Se.setTimeout;

  if (Se.document?.visibilityState === "hidden") {
    e();
  } else {
    (e = ym(e));
    ma("visibilitychange", e, { once: true, capture: true });
    ma("pagehide", e, { once: true, capture: true });

    t(() => {
      e();
      ga("visibilitychange", e, { capture: true });
      ga("pagehide", e, { capture: true });
    });
  }
};

const Em = 80;
const Qt = {};
try {
  if (typeof Node !== "undefined") {
    (Qt.parentNode = Object.getOwnPropertyDescriptor(
        Node.prototype,
        "parentNode"
      ).get);
  }

  if (typeof Element !== "undefined") {
    (Qt.tagName = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "tagName"
      ).get);

    (Qt.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get);

    (Qt.className = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "className"
      ).get);

    (Qt.getAttribute = Element.prototype.getAttribute);
  }

  if (typeof HTMLElement !== "undefined") {
    (Qt.dataset = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "dataset"
      ).get);
  }
} catch {}
function Lt(e, t, n) {
  const Qt_t = Qt[t];
  if (Qt_t) {
    try {
      return Qt_t.call(e, n);
    } catch {}
  }
  const e_t = e[t];
  return typeof e_t == "function" ? e_t.call(e, n) : e_t;
}
function Yl(e, t = {}) {
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
    const f = (!Array.isArray(t) && t.maxStringLength) || Em;

    while (n &&
         s++ < r &&
         ((u = wm(n, d)),
         !(u === "html" || (s > 1 && a + o.length * c_length + u.length >= f)))) {
      o.push(u);
      (a += u.length);
      (n = Lt(n, "parentNode"));
    }

    return o.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function wm(e, t) {
  const n = [];
  const r = Lt(e, "tagName");
  if (!r) {
    return "";
  }
  if (typeof HTMLElement !== "undefined" && e instanceof HTMLElement) {
    const s = Lt(e, "dataset");
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
        .filter(s => Lt(e, "getAttribute", s))
        .map(s => [s, Lt(e, "getAttribute", s)])
    : null;
  if (o?.length) {
    o.forEach((s) => {
      n.push(`[${s[0]}="${s[1]}"]`);
    });
  } else {
    const s = Lt(e, "id");

    if (s) {
      n.push(`#${s}`);
    }

    const a = Lt(e, "className");
    if (a && Ct(a)) {
      const c = a.split(/\s+/);
      for (const l of c) {
        n.push(`.${l}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const a = Lt(e, "getAttribute", s);

    if (a) {
      n.push(`[${s}="${a}"]`);
    }
  }
  return n.join("");
}
const Sm = 1000/* 1e3 */;
let _a;
let cs;
let ls;
function bm(e) {
  fn("dom", e);
  pn("dom", Cm);
}
function Cm() {
  if (!Se.document) {
    return;
  }
  const e = tt.bind(null, "dom");
  const t = ya(e, true);
  Se.document.addEventListener("click", t, false);
  Se.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const o = Se[n]?.prototype;

    if (o?.hasOwnProperty?.("addEventListener")) {
      ze(o, "addEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const d = (u[a] = u[a] || { refCount: 0 });
            if (!d.handler) {
              const f = ya(e);
              (d.handler = f);
              s.call(this, a, f, l);
            }
            d.refCount++;
          } catch {}
        }
        return s.call(this, a, c, l);
      }));

      ze(o, "removeEventListener", s => (function(a, c, l) {
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
function Nm(e) {
  if (e.type !== cs) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== ls) {
      return false;
    }
  } catch {}
  return true;
}
function Im(e, t) {
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
function ya(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = Tm(n);
    if (Im(n.type, r)) {
      return;
    }
    Ht(n, "_sentryCaptured", true);

    if (r && !r._sentryId) {
      Ht(r, "_sentryId", Qe());
    }

    const o = n.type === "keypress" ? "input" : n.type;

    if (!Nm(n)) {
      e({ event: n, name: o, global: t });
      (cs = n.type);
      (ls = r ? r._sentryId : undefined);
    }

    clearTimeout(_a);

    (_a = Se.setTimeout(() => {
      (ls = undefined);
      (cs = undefined);
    }, Sm));
  };
}
function Tm(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let Sr;
function Kl(e) {
  const t = "history";
  fn(t, e);
  pn(t, Rm);
}
function Rm() {
  Se.addEventListener("popstate", () => {
    const t = Se.location.href;
    const n = Sr;
    (Sr = t);

    if (n === t) {
      return;
    }

    tt("history", { from: n, to: t });
  });

  if (!Kh()) {
    return;
  }

  class e {
    constructor(t) {
      return function (...n) {
        const r = n.length > 2 ? n[2] : undefined;
        if (r) {
          const o = Sr;
          const s = km(String(r));
          (Sr = s);

          if (o === s) {
            return t.apply(this, n);
          }

          tt("history", { from: o, to: s });
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

  ze(Se.history, "pushState", e);
  ze(Se.history, "replaceState", e);
}
function km(e) {
  try {
    return new URL(e, Se.location.origin).toString();
  } catch {
    return e;
  }
}
const Fr = {};
function Am(e) {
  const Fr_e = Fr[e];
  if (Fr_e) {
    return Fr_e;
  }
  let n = Se[e];
  if (ss(n)) {
    return (Fr[e] = n.bind(Se));
  }
  const {
    document
  } = Se;
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
      if (_m) {
        q.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          o
        );
      }
    }
  }
  return n && (Fr[e] = n.bind(Se));
}
function Om(e) {
  Fr[e] = undefined;
}
const Gn = "__sentry_xhr_v3__";
function Pm(e) {
  fn("xhr", e);
  pn("xhr", Lm);
}
function Lm() {
  if (!Se.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, r) {
      const o = new Error();
      const s = Nt() * 1000/* 1e3 */;
      const a = Ct(r[0]) ? r[0].toUpperCase() : undefined;
      const c = xm(r[1]);
      if (!a || !c) {
        return t.apply(n, r);
      }
      (n[Gn] = { method: a, url: c, request_headers: {} });

      if (a === "POST" &&
        c.match(/sentry_key/)) {
        (n.__sentry_own_request__ = true);
      }

      const l = () => {
        const n_Gn = n[Gn];
        if (n_Gn && n.readyState === 4) {
          try {
            n_Gn.status_code = n.status;
          } catch {}
          const d = {
            endTimestamp: Nt() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: o,
          };
          tt("xhr", d);
          n.removeEventListener("readystatechange", l);
        }
      };

      if ("onreadystatechange" in n && typeof n.onreadystatechange == "function") {
        (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(u, d, f) {
                l();
                return u.apply(d, f);
              },
            }));
      } else {
        n.addEventListener("readystatechange", l);
      }

      (n.setRequestHeader = new Proxy(n.setRequestHeader, {
        apply(u, d, f) {
          const [p, h] = f;
          const d_Gn = d[Gn];

          if (d_Gn && Ct(p) && Ct(h)) {
            (d_Gn.request_headers[p.toLowerCase()] = h);
          }

          return u.apply(d, f);
        },
      }));

      return t.apply(n, r);
    },
  }));

  (XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
      apply(t, n, r) {
        const n_Gn = n[Gn];
        if (!n_Gn) {
          return t.apply(n, r);
        }

        if (r[0] !== undefined) {
          (n_Gn.body = r[0]);
        }

        const s = { startTimestamp: Nt() * 1000/* 1e3 */, xhr: n };
        tt("xhr", s);
        return t.apply(n, r);
      },
    }));
}
function xm(e) {
  if (Ct(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
function $m(e) {
  if (typeof Element === "undefined") {
    return false;
  }
  try {
    return e instanceof Element;
  } catch {
    return false;
  }
}
const Mm = 40;
function Dm(e, t = Am("fetch")) {
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
      Om("fetch");
      throw l;
    } finally {
      (n -= a);
      r--;
    }
  }
  return rh(e, o, Ds(e.bufferSize || Mm));
}
const Tn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Um = 30;
const Fm = 50;
function us(e, t, n, r) {
  const o = { filename: e, function: t === "<anonymous>" ? ln : t, in_app: true };

  if (n !== undefined) {
    (o.lineno = n);
  }

  if (r !== undefined) {
    (o.colno = r);
  }

  return o;
}
const Hm = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const Bm =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const Vm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const Wm = /at (.+?) ?\(data:(.+?),/;

const jm = (e) => {
  const t = e.match(Wm);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = Hm.exec(e);
  if (n) {
    const [, o, s, a] = n;
    return us(o, ln, Number(s), Number(a));
  }
  const r = Bm.exec(e);
  if (r) {
    if (r[2]?.indexOf("eval") === 0) {
      const c = Vm.exec(r[2]);

      if (c) {
        (r[2] = c[1]);
        (r[3] = c[2]);
        (r[4] = c[3]);
      }
    }
    const [s, a] = Xl(r[1] || ln, r[2]);
    return us(a, s, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};

const zm = [Um, jm];

const qm =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const Gm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const Ym = (e) => {
  const t = qm.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = Gm.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, r] = t;
    let o = t[1] || ln;
    ([o, r] = Xl(o, r));
    return us(r, o, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const Km = [Fm, Ym];
const Xm = [zm, Km];
const Qm = Xc(...Xm);

const Xl = (e, t) => {
  const n = e.includes("safari-extension");
  const r = e.includes("safari-web-extension");
  return n || r
    ? [
        e.includes("@") ? e.split("@")[0] : ln,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const br = 1024;
const Zm = "Breadcrumbs";

const eg = (e = {}) => {
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
    name: Zm,
    setup(n) {
      if (t.console) {
        Dh(rg(n));
      }

      if (t.dom) {
        bm(ng(n, t.dom));
      }

      if (t.xhr) {
        Pm(og(n));
      }

      if (t.fetch) {
        Zh(sg(n));
      }

      if (t.history) {
        Kl(ig(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", tg(n));
      }
    },
  };
};

function tg(e) {
  return n => {
    if (Ae() === e) {
      un(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: en(n),
        },
        { event: n }
      );
    }
  };
}
function ng(e, t) {
  return r => {
    if (Ae() !== e) {
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
      c > br) {
      Tn &&
          q.warn(
            `\`dom.maxStringLength\` cannot exceed ${br}, but a value of ${c} was configured. Sentry will use ${br} instead.`
          );

      (c = br);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const r_event = r.event;
      const d = ag(r_event) ? r_event.target : r_event;
      (o = Yl(d, { keyAttrs: a, maxStringLength: c }));
      (s = nm(d));
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

    un(l, { event: r.event, name: r.name, global: r.global });
  };
}
function rg(e) {
  return function (n) {
    if (Ae() !== e) {
      return;
    }
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: Fh(n.level),
      message: bi(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (r.message = `Assertion failed: ${
          bi(n.args.slice(1), " ") || "console.assert"
        }`);

        (r.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    un(r, { input: n.args, level: n.level });
  };
}
function og(e) {
  return n => {
    if (Ae() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    const s = n.xhr[Gn];
    if (!startTimestamp || !endTimestamp || !s) {
      return;
    }
    const { method, url, status_code, body } = s;
    const d = { method: method, url: url, status_code: status_code };
    const f = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const p = { category: "xhr", data: d, type: "http", level: jl(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", p, f);
    un(p, f);
  };
}
function sg(e) {
  return n => {
    if (Ae() !== e) {
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
        un(a, s);
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
          level: jl(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        un(l, c);
      }
    }
  };
}
function ig(e) {
  return n => {
    if (Ae() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = Io(pe.location.href);
    let a = from ? Io(from) : undefined;
    const c = Io(to_2);

    if (!a?.path) {
      (a = s);
    }

    if (s.protocol === c.protocol && s.host === c.host) {
      (to_2 = c.relative);
    }

    if (s.protocol === a.protocol && s.host === a.host) {
      (from = a.relative);
    }

    un({ category: "navigation", data: { from: from, to: to_2 } });
  };
}
function ag(e) {
  return !!e && !!e.target;
}

const cg =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const lg = "BrowserApiErrors";

const dg = (e = {}) => {
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
    name: lg,
    setupOnce() {
      if (t.setTimeout) {
        ze(pe, "setTimeout", va);
      }

      if (t.setInterval) {
        ze(pe, "setInterval", va);
      }

      if (t.requestAnimationFrame) {
        ze(pe, "requestAnimationFrame", fg);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in pe) {
        ze(XMLHttpRequest.prototype, "send", pg);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : cg).forEach(o => hg(o, t));
      }
    },
  };
};

function va(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = In(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${Ft(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function fg(e) {
  return function (t) {
    return e.apply(this, [
      In(t, {
        mechanism: {
          data: { handler: Ft(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function pg(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((o) => {
      if (o in n &&
        typeof n[o] == "function") {
        ze(n, o, s => {
          const a = {
              mechanism: {
                data: { handler: Ft(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${o}`,
              },
            };

          const c = Ps(s);

          if (c) {
            (a.mechanism.data.handler = Ft(c));
          }

          return In(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function hg(e, t) {
  const r = pe[e]?.prototype;

  if (r?.hasOwnProperty?.("addEventListener")) {
    ze(r, "addEventListener", o => (function(s, a, c) {
      try {
        if (mg(a)) {
          (a.handleEvent = In(a.handleEvent, {
              mechanism: {
                data: { handler: Ft(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        gg(this, s, a);
      }

      return o.apply(this, [
        s,
        In(a, {
          mechanism: {
            data: { handler: Ft(a), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    ze(r, "removeEventListener", o => (function(s, a, c) {
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
function mg(e) {
  return typeof e.handleEvent == "function";
}
function gg(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const _g = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof pe.document === "undefined") {
          if (Tn) {
            q.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        Ki({ ignoreDuration: true });
        let n = false;
        vm(() => {
          if (!n) {
            Co();
            (n = true);
          }
        });
        const r = mt();
        let o = r.getUser();

        r.addScopeListener((s) => {
          const a = s.getUser();

          if ((o?.id !== a?.id || o?.ip_address !== a?.ip_address)) {
            (o = a);
            n && Co();
          }
        });

        if (t === "route") {
          Kl(({ from: s, to: a }) => {
            if (s !== a) {
              Ki({ ignoreDuration: true });
              Co();
              (n = true);
            }
          });
        }
      },
    };
  };

const yg = "CultureContext";

const Eg = () => ({
  name: yg,

  preprocessEvent(e) {
    const t = Ea();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = Ea();

    if (t) {
      bl(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function Ea() {
  try {
    const pe_Intl = pe.Intl;
    if (!pe_Intl) {
      return;
    }
    const t = pe_Intl.DateTimeFormat().resolvedOptions();
    return { locale: t.locale, timezone: t.timeZone, calendar: t.calendar };
  } catch {
    return;
  }
}
const wg = "GlobalHandlers";

const bg = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: wg,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        Cg(n);
        wa("onerror");
      }

      if (t.onunhandledrejection) {
        Ng(n);
        wa("onunhandledrejection");
      }
    },
  };
};

function Cg(e) {
  Od((t) => {
    const { stackParser, attachStacktrace } = Ql();
    if (Ae() !== e || ql()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = Rg(Hs(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    Il(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function Ng(e) {
  Ld((t) => {
    const { stackParser, attachStacktrace } = Ql();
    if (Ae() !== e || ql()) {
      return;
    }
    const o = Ig(t);
    const s = ur(o) ? Tg(o) : Hs(stackParser, o, undefined, attachStacktrace, true);
    (s.level = "error");

    Il(s, {
      originalException: o,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function Ig(e) {
  if (ur(e)) {
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
function Tg(e) {
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
function Rg(e, t, n, r) {
  const o = (e.exception = e.exception || {});
  const s = (o.values = o.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: r,
      lineno: n,
      filename: kg(t) ?? Us(),
      function: ln,
      in_app: true,
    });
  }

  return e;
}
function wa(e) {
  if (Tn) {
    q.log(`Global Handler attached: ${e}`);
  }
}
function Ql() {
  return Ae()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function kg(e) {
  if (!(!Ct(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${yh(e, false)}>` : e;
  }
}

const Ag = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!pe.navigator && !pe.location && !pe.document) {
      return;
    }
    const t = ha();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    const t = e.attributes?.[dl];
    if (!pe.navigator && !pe.location && !pe.document) {
      return;
    }
    const n = ha();
    bl(e, {
      [hp]: t !== "http.client" ? n.url : undefined,
      "http.request.header.user_agent": n.headers["User-Agent"],
      "http.request.header.referer": n.headers.Referer,
    });
  }
});

const Og = "cause";
const Pg = 5;
const Lg = "LinkedErrors";

const $g = (e = {}) => {
  const t = e.limit || Pg;
  const n = e.key || Og;
  return {
    name: Lg,
    preprocessEvent(r, o, s) {
      const a = s.getOptions();
      $h(Fs, a.stackParser, n, t, r, o);
    },
  };
};

const Mg = /^HTML(\w*)Element$/;
function Zl(e) {
  if (typeof window !== "undefined" && e === window) {
    return "[Window]";
  }
  if (typeof document !== "undefined" && e === document) {
    return "[Document]";
  }
  if ($m(e)) {
    const t = Dg(e);
    if (Mg.test(t)) {
      return `[HTMLElement: ${Yl(e)}]`;
    }
  }
}
function Dg(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Ug() {
  return Fg()
    ? (Tn &&
        On(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function Fg() {
  if (typeof pe.window === "undefined") {
    return false;
  }
  const e = pe;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = Us();
  return !(
    pe === pe.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function Hg(e) {
  return [Th(), bh(), Yh(), dg(), eg(), bg(), $g(), Vh(), Ag(), Eg(), _g()];
}
function Bg(e = {}) {
  const t = !e.skipBrowserExtensionCheck && Ug();
  let n = e.defaultIntegrations == null ? Hg() : e.defaultIntegrations;
  const r = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: kd(e.stackParser || Qm),
    integrations: Mp({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || Dm,
  };
  nl(Zl);
  return gh(mm, r);
}
function Sa(e = {}) {
  const pe_document = pe.document;
  const n = pe_document?.head || pe_document?.body;
  if (!n) {
    if (Tn) {
      q.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const r = ht();
  const s = Ae()?.getDsn();
  if (!s) {
    if (Tn) {
      q.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...r.getUser(), ...e.user },
      eventId: e.eventId || kp(),
    };

  const c = pe.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = xp(s, a));
  const { onLoad, onClose } = a;

  if (onLoad) {
    (c.onload = onLoad);
  }

  if (onClose) {
    const d = (f) => {
      if (f.data === "__sentry_reportdialog_closed__") {
        try {
          onClose();
        } finally {
          pe.removeEventListener("message", d);
        }
      }
    };
    pe.addEventListener("message", d);
  }

  n.appendChild(c);
}
let Bt;
let ve;
let Ro;
let ba;
let Rn = 0;
const Jl = [];
const we = Q;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = we;

function Mn(e, t) {
  if (we.__h) {
    we.__h(ve, e, Rn || t);
  }

  (Rn = 0);
  const n = ve.__H || (ve.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function P(e) {
  (Rn = 1);
  return Bs(nu, e);
}
function Bs(e, t, n) {
  const r = Mn(Bt++, 2);
  (r.t = e);

  if (!r.__c &&
    ((r.__ = [
      n ? n(t) : nu(undefined, t),
      c => {
        const l = r.__N ? r.__N[0] : r.__[0];
        const u = r.t(l, c);

        if (l !== u) {
          (r.__N = [u, r.__[1]]);
          r.__c.setState({});
        }
      },
    ]),
    (r.__c = ve),
    !ve.__f)) {
    const o = function (c, l, u) {
      if (!r.__c.__H) {
        return true;
      }
      let d = false;
      let f = r.__c.props !== c;

      r.__c.__H.__.some(h => {
          if (h.__N) {
            d = true;
            const m = h.__[0];
            (h.__ = h.__N);
            (h.__N = undefined);

            if (m !== h.__[0]) {
              (f = true);
            }
          }
        });

      if (shouldComponentUpdate) {
        const p = shouldComponentUpdate.call(this, c, l, u);
        return d ? p || f : p;
      }

      return !d || f;
    };
    ve.__f = true;

    var {
      shouldComponentUpdate,
      componentWillUpdate
    } = ve;

    (ve.componentWillUpdate = function (c, l, u) {
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

    (ve.shouldComponentUpdate = o);
  }

  return r.__N || r.__;
}
function M(e, t) {
  const n = Mn(Bt++, 3);

  if (!we.__s && Ws(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    ve.__H.__h.push(n);
  }
}
function Vt(e, t) {
  const n = Mn(Bt++, 4);

  if (!we.__s && Ws(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    ve.__h.push(n);
  }
}
function O(e) {
  (Rn = 5);

  return be(() => ({
    current: e
  }), []);
}
function Vs(e, t, n) {
  (Rn = 6);

  Vt(
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
function be(e, t) {
  const n = Mn(Bt++, 7);

  if (Ws(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function T(e, t) {
  (Rn = 8);

  return be(() => e, t);
}
function po(e) {
  const t = ve.context[e.__c];
  const n = Mn(Bt++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(ve)), t.props.value) : e.__;
}
function eu(e, t) {
  if (we.useDebugValue) {
    we.useDebugValue(t ? t(e) : e);
  }
}
function tu() {
  const e = Mn(Bt++, 11);
  if (!e.__) {
    for (var t = ve.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function Vg() {
  for (let e; (e = Jl.shift()); ) {
    const e_H = e.__H;
    if (e.__P && e_H) {
      try {
        e_H.__h.some(Hr);
        e_H.__h.some(ds);
        (e_H.__h = []);
      } catch (n) {
        (e_H.__h = []);
        we.__e(n, e.__v);
      }
    }
  }
}

(we.__b = e => {
  (ve = null);

  if (__b) {
    __b(e);
  }
});

(we.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    (e.__m = t.__k.__m);
  }

  if (__1) {
    __1(e, t);
  }
});

(we.__r = e => {
  if (__r) {
    __r(e);
  }

  (Bt = 0);
  const t = (ve = e.__c).__H;

  if (t) {
    if (Ro === ve) {
      (t.__h = []);
      (ve.__h = []);

      t.__.some(n => {
        if (n.__N) {
          (n.__ = n.__N);
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.some(Hr);
      t.__h.some(ds);
      (t.__h = []);
      (Bt = 0);
    }
  }

  (Ro = ve);
});

(we.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((Jl.push(e_c) !== 1 && ba === we.requestAnimationFrame) ||
          ((ba = we.requestAnimationFrame) || Wg)(Vg));

    e_c.__H.__.some(n => {
      if (n.u) {
        (n.__H = n.u);
        (n.u = undefined);
      }
    });
  }

  Ro = null;
  ve = null;
});

(we.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.some(Hr);

      (n.__h = n.__h.filter(r => !r.__ || ds(r)));
    } catch (r) {
      t.some(o => {
        if (o.__h) {
          (o.__h = []);
        }
      });

      (t = []);
      we.__e(r, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
});

(we.unmount = e => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__.some(r => {
        try {
          Hr(r);
        } catch (o) {
          t = o;
        }
      });

    (e_c.__H = undefined);
    t && we.__e(t, e_c.__v);
  }
});

const Aa = typeof requestAnimationFrame == "function";
function Wg(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (Aa) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (Aa) {
    (t = requestAnimationFrame(n));
  }
}
function Hr(e) {
  const t = ve;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (ve = t);
}
function ds(e) {
  const t = ve;
  (e.__c = e.__());
  (ve = t);
}
function Ws(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, r) => n !== e[r]);
}
function nu(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ru(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function fs(e, t) {
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
function ou(e, t) {
  const n = t();
  const r = P({ t: { __: n, u: t } });
  const o = r[0].t;
  const [, s] = r;

  Vt(
    () => {
      (o.__ = n);
      (o.u = t);

      if (ko(o)) {
        s({ t: o });
      }
    },
    [e, n, t]
  );

  M(
    () => {
      if (ko(o)) {
        s({ t: o });
      }

      return e(() => {
        if (ko(o)) {
          s({ t: o });
        }
      });
    },
    [e]
  );

  return n;
}
function ko(e) {
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
function su(e) {
  e();
}
function iu(e) {
  return e;
}
function au() {
  return [false, su];
}
const cu = Vt;

class ps {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return fs(this.props, e) || fs(this.state, t);
    }
}

function ho(e, t) {
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

    return fs(this.props, o);
  }
  function r(o) {
    (this.shouldComponentUpdate = n);
    return nt(e, o);
  }
  (r.displayName = `Memo(${e.displayName || e.name})`);
  r.__f = true;
  r.prototype.isReactComponent = true;
  (r.type = e);
  return r;
}
((ps.prototype = new Xe()).isPureReactComponent = true);

const {
  __b: _b_1,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2
} = Q;

Q.__b = e => {
  if (e.type && e.type.__f && e.ref) {
    (e.props.ref = e.ref);
    (e.ref = null);
  }

  if (_b_1) {
    _b_1(e);
  }
};
const jg =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function lu(e) {
  class t {
    constructor(n) {
      const r = ru({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      nr(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = jg);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const Pa = (e, t) => e == null ? null : et(et(e).map(t));

const zg = {
  map: Pa,
  forEach: Pa,
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

Q.__e = (e, t, n, r) => {
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
function uu(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(r => {
      if (typeof r.__c == "function") {
        r.__c();
      }
    }),
        (e.__c.__H = null));

    (e = ru({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(r => uu(r, t, n)));
  }

  return e;
}
function du(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(r => du(r, t, n)));

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
        this.__v.__k[0] = uu(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const o = t.__a && nt(Ie, null, e.fallback);

    if (o) {
      (o.__u &= -33);
    }

    return [nt(Ie, null, t.__a ? null : e.children), o];
  }
}

function fu(e) {
  const t = e.__ && e.__.__c;
  return t && t.__a && t.__a(e);
}
function ie(e) {
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

class Yn {
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

(Q.unmount = e => {
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

((Te.prototype = new Xe()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    (r.o = []);
  }

  r.o.push(t_c);
  const o = fu(r.__v);

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
        r.__v.__k[0] = du(u, u.__c.__P, u.__c.__O);
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

const xa = (e, t, n) => {
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
function Gg(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function Yg(e) {
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

  nr(nt(Gg, { context: t.context }, e.__v), t.v);
}
function Wt(e, t) {
  const n = nt(Yg, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((Yn.prototype = new Xe()).__a = function (e) {
  const t = this;
  const n = fu(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return o => {
    const s = () => {
      if (t.props.revealOrder) {
        r.push(o);
        xa(t, e, r);
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

(Yn.prototype.componentDidUpdate = Yn.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        xa(e, n, t);
      });
    });

const pu =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const Kg =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const Xg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const Qg = /[A-Z0-9]/g;
const Zg = typeof document !== "undefined";

const Jg = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function hu(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  nr(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function e_(e, t, n) {
  qc(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
(Xe.prototype.isReactComponent = true);

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

Q.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.nativeEvent = e);
  return e.nativeEvent;
};
let js;

const t_ = {
  configurable: true,
  get() {
    return this.class;
  },
};

Q.vnode = e => {
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
            (Zg && a === "children" && type === "noscript") ||
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
                  Jg(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (Xg.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && Kg.test(a)) {
            (a = a.replace(Qg, "-$&").toLowerCase());
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
            (o.value = et(props.children).forEach(u => {
              u.props.selected = o.value.includes(u.props.value);
            }));

        o.defaultValue != null &&
          (o.value = et(props.children).forEach(u => {
            u.props.selected = o.multiple
              ? o.defaultValue.includes(u.props.value)
              : o.defaultValue == u.props.value;
          }));
      }

      if (props.class && !props.className) {
        (o.class = props.class);
        Object.defineProperty(o, "className", t_);
      } else if (props.className) {
        (o.class = o.className = props.className);
      }

      (t.props = o);
    })(e);
  }

  (e.$$typeof = pu);

  if (vnode) {
    vnode(e);
  }
};
Q.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (js = e.__c);
};
Q.diffed = e => {
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

  (js = null);
};

const n_ = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return js.__n[e.__c].props.value;
        },
        useCallback: T,
        useContext: po,
        useDebugValue: eu,
        useDeferredValue: iu,
        useEffect: M,
        useId: tu,
        useImperativeHandle: Vs,
        useInsertionEffect: cu,
        useLayoutEffect: Vt,
        useMemo: be,
        useReducer: Bs,
        useRef: O,
        useState: P,
        useSyncExternalStore: ou,
        useTransition: au,
      },
    },
  };

const mu = "18.3.1";
function r_(e) {
  return nt.bind(null, e);
}
function gr(e) {
  return !!e && e.$$typeof === pu;
}
function o_(e) {
  return gr(e) && e.type === Ie;
}
function s_(e) {
  return (
    !!e &&
    typeof e.displayName == "string" &&
    e.displayName.indexOf("Memo(") == 0
  );
}
function i_(e) {
  return gr(e) ? Gc(...arguments) : e;
}
function gu(e) {
  return !!e.__k && (nr(null, e), true);
}
function a_(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const c_ = (e, t) => e(t);

const l_ = (e, t) => {
  let n;
  const Q_debounceRendering = Q.debounceRendering;
  Q.debounceRendering = s => {
    n = s;
  };
  try {
    const o = e(t);

    if (n) {
      n();
    }

    return o;
  } finally {
    Q.debounceRendering = Q_debounceRendering;
  }
};

const u_ = gr;

const Kn = {
  useState: P,
  useId: tu,
  useReducer: Bs,
  useEffect: M,
  useLayoutEffect: Vt,
  useInsertionEffect: cu,
  useTransition: au,
  useDeferredValue: iu,
  useSyncExternalStore: ou,
  startTransition: su,
  useRef: O,
  useImperativeHandle: Vs,
  useMemo: be,
  useCallback: T,
  useContext: po,
  useDebugValue: eu,
  version: "18.3.1",
  Children: zg,
  render: hu,
  hydrate: e_,
  unmountComponentAtNode: gu,
  createPortal: Wt,
  createElement: nt,
  createContext: kn,
  createFactory: r_,
  cloneElement: i_,
  createRef: md,
  Fragment: Ie,
  isValidElement: gr,
  isElement: u_,
  isFragment: o_,
  isMemo: s_,
  findDOMNode: a_,
  Component: Xe,
  PureComponent: ps,
  memo: ho,
  forwardRef: lu,
  flushSync: l_,
  unstable_batchedUpdates: c_,
  StrictMode: Ie,
  Suspense: Te,
  SuspenseList: Yn,
  lazy: ie,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: n_,
};

function d_(e) {
  return (
    rr(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function f_(e) {
  const t = { ...e };
  Hl(t, "react");
  Rp("react", { version: mu });
  const n = Bg(t);
  nl(p_);
  return n;
}
function p_(e) {
  return d_(e) ? "[SyntheticEvent]" : Zl(e);
}
function h_(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function m_(e, t) {
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
function g_(e, { componentStack: t }, n) {
  if (h_(mu) && dt(e) && t) {
    const r = new Error(e.message);
    (r.name = `React ErrorBoundary ${e.name}`);
    (r.stack = t);
    m_(e, r);
  }
  return Nl(e, n);
}
const __ = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Ao = { componentStack: null, error: null, eventId: null };
class y_ extends Xe {
  constructor(t) {
    super(t);
    (this.state = Ao);
    (this._openFallbackReportDialog = true);
    const n = Ae();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (r) => {
        if (!r.type &&
          this._lastEventId &&
          r.event_id === this._lastEventId) {
          Sa({ ...t.dialogOptions, eventId: this._lastEventId });
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

    ul((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const d = g_(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, d);
      }

      if (showDialog) {
        (this._lastEventId = d);
        this._openFallbackReportDialog && Sa({ ...dialogOptions, eventId: d });
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
      if (this.state === Ao) {
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

    this.setState(Ao);
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
    return gr(o)
      ? o
      : (fallback && __ && q.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
f_({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function v_(e) {
  return {
    render(t) {
      hu(t, e);
    },
    unmount() {
      gu(e);
    },
  };
}
const E_ = "modulepreload";

const w_ = e => `/${e}`;

const Fa = {};

const ne = (t, n, r) => {
  let o = Promise.resolve();
  if (n && n.length > 0) {
    let l = u => Promise.all(
      u.map(d => Promise.resolve(d).then(
        f => ({
          status: "fulfilled",
          value: f
        }),
        f => ({
          status: "rejected",
          reason: f
        })
      )
      )
    );
    document.getElementsByTagName("link");
    const a = document.querySelector("meta[property=csp-nonce]");
    const c = a?.nonce || a?.getAttribute("nonce");
    o = l(
      n.map((u) => {
        (u = w_(u));

        if (u in Fa) {
          return;
        }

        Fa[u] = true;
        const d = u.endsWith(".css");
        const f = d ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${f}`)) {
          return;
        }
        const p = document.createElement("link");
        (p.rel = d ? "stylesheet" : E_);

        if (!d) {
          (p.as = "script");
        }

        (p.crossOrigin = "");
        (p.href = u);

        if (c) {
          p.setAttribute("nonce", c);
        }

        document.head.appendChild(p);

        if (d) {
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

const S_ = {};
function Cr(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function _u(e, t, n) {
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
  (e = hs(e.replace(o, "")));
  (t = hs(t || ""));
  for (let d = Math.max(e.length, t.length), f = 0; f < d; f++) {
    if (t[f] && t[f].charAt(0) === ":") {
      const p = t[f].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[f].match(/[+*?]+$/) || S_)[0] || "";
      const m = ~h.indexOf("+");
      const y = ~h.indexOf("*");
      const g = e[f] || "";
      if (!g && !y && (!h.includes("?") || m)) {
        r = false;
        break;
      }
      (a[p] = decodeURIComponent(g));

      if (m || y) {
        a[p] = e.slice(f).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[f] !== e[f]) {
      r = false;
      break;
    }
  }
  return (n.default === true || r !== false) && a;
}
function b_(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function C_(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : hs(n.props.path).map(N_).join(""))(e));

  return e.props;
}
function hs(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function N_(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const I_ = {};
const an = [];
const er = [];
let je = null;
const zs = { url: qs() };
const yu = kn(zs);
function _r() {
  const e = po(yu);
  if (e === zs) {
    const t = P()[1];
    M(() => {
      er.push(t);

      return () => er.splice(er.indexOf(t), 1);
    }, []);
  }
  return [e, qe];
}
function qs() {
  let e;
  return `${(e =
  je && je.location
    ? je.location
    : je && je.getCurrentLocation
    ? je.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : I_).pathname || ""}${e.search || ""}`;
}
function qe(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let r = an.length; r--; ) {
      if (an[r].canRoute(n)) {
        return true;
      }
    }
    return false;
  })(e)) {
    ((n, r = "push") => {
      if (je && je[r]) {
        je[r](n);
      } else if (typeof history !== "undefined" &&
          history[`${r}State`]) {
        history[`${r}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return vu(e);
}
function vu(e) {
  let t = false;
  for (let n = 0; n < an.length; n++) {
    if (an[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function T_(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return qe(t);
    }
  }
}
function R_(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function k_(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (T_(e_target)) {
          return R_(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Eu(e) {
  if (e.history) {
    (je = e.history);
  }

  (this.state = { url: e.url || qs() });
}
Cr((Eu.prototype = new Xe()), {
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

    if (!Ha) {
      (Ha = true);

      je ||
        addEventListener("popstate", () => {
          vu(qs());
        });

      addEventListener("click", k_);
    }

    an.push(this);

    if (je) {
      (this.u = je.listen(t => {
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

    an.splice(an.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(C_).sort(b_);

    for (const r of e) {
      const o = _u(t, r.props.path, r.props);
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
      (r = Gc(
            c[0],
            Cr(Cr({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      Cr(
        zs,
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
      for (let l = er.length; l--; ) {
        er[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return nt(yu.Provider, { value: a }, r);
  },
});

const Ba = (e) => {
  let t;
  const n = new Set();

  const r = (u, d) => {
    const f = typeof u == "function" ? u(t) : u;
    if (!Object.is(f, t)) {
      const p = t;

      (t = d ?? (typeof f != "object" || f === null)
        ? f
        : Object.assign({}, t, f));

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

const A_ = e => e ? Ba(e) : Ba;

const O_ = e => e;

function P_(e, t = O_) {
  const n = Kn.useSyncExternalStore(
    e.subscribe,
    Kn.useCallback(() => t(e.getState()), [e, t]),
    Kn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Kn.useDebugValue(n);
  return n;
}

const Va = (e) => {
  const t = A_(e);

  const n = r => P_(t, r);

  Object.assign(n, t);
  return n;
};

const ot = e => e ? Va(e) : Va;

function Gs(e, t) {
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

const ms = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return ms(r)(n);
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
          return ms(r)(n);
        },
      };
    }
  };

const wu = (e, t) => (n, r, o) => {
  let s = {
      storage: Gs(() => window.localStorage),
      partialize: g => g,
      version: 0,
      merge: (g, _) => ({
        ..._,
        ...g
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
  o.setState = (g, _) => {
    o_setState(g, _);
    return f();
  };
  const h = e((...g) => {
    n(...g);
    return f();
  }, r, o);
  o.getInitialState = () => h;
  let m;
  const y = () => {
    let _;
    if (!s_storage) {
      return;
    }
    const v = ++c;
    (a = false);

    l.forEach((N) => {
      let w;
      return N((w = r()) != null ? w : h);
    });

    const S =
      ((_ = s.onRehydrateStorage) == null
        ? undefined
        : _.call(s, (g = r()) != null ? g : h)) || undefined;
    return ms(s_storage.getItem.bind(s_storage))(s.name)
      .then((N) => {
        if (N) {
          if (typeof N.version == "number" && N.version !== s.version) {
            if (s.migrate) {
              const w = s.migrate(N.state, N.version);
              return w instanceof Promise ? w.then(b => [true, b]) : [true, w];
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
      let w;
      if (v !== c) {
        return;
      }
      const [b, R] = N;
      (m = s.merge(R, (w = r()) != null ? w : h));
      n(m, true);

      if (b) {
        return f();
      }
    })
      .then(() => {
      if (v === c) {
        S?.(r(), undefined);
        (m = r());
        (a = true);
        u.forEach(N => N(m));
      }
    })
      .catch((N) => {
      if (v === c) {
        S?.(undefined, N);
      }
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
      ++c;
      s_storage?.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => y(),
    hasHydrated: () => a,
    onHydrate: g => {
      l.add(g);

      return () => {
        l.delete(g);
      };
    },
    onFinishHydration: g => {
      u.add(g);

      return () => {
        u.delete(g);
      };
    },
  });

  if (!s.skipHydration) {
    y();
  }

  return m || h;
};

const Su = ot((e, t) => ({
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

const x_ = ot((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const $_ = ot((e, t) => ({
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

function $e(e) {
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

const M_ = 4000/* 4e3 */;

const Qr = ot((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const o = n.duration ?? M_;

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

const wt = {
  success: (e, t) => Qr.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => Qr.getState().addToast({ type: "error", message: e, duration: t }),
};

const D_ = {
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
  [B.ACCOUNT_INVALID_CREDENTIALS]: "Неверный ник Telegram или пароль",
  [B.ACCOUNT_TEMPORARILY_LOCKED]:
    "Аккаунт временно заблокирован. Попробуйте позже",
  [B.ACCOUNT_CURRENT_PASSWORD_INCORRECT]: "Неверный текущий пароль",
  [B.MISSING_FLOW_TOKEN]: "Сессия истекла. Начните заново",
  [B.PROFILE_USERNAME_TAKEN]: "Этот username уже занят",
  [B.PROFILE_USERNAME_RESERVED]: "Этот username зарезервирован системой",
  EMAIL_SIGNUP_DISABLED:
    "Регистрация по почте больше недоступна. Зарегистрируйтесь по номеру телефона.",
};

const U_ = {
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

const F_ = [
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

const H_ = {
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

function bu(e) {
  return H_[e] ?? e;
}
function B_(e) {
  const U_e = U_[e];
  if (U_e) {
    return U_e;
  }
  for (const { pattern, translate } of F_) {
    const o = e.match(pattern);
    if (o) {
      return translate(o);
    }
  }
  return e;
}
function Ys(e, t = "Произошла ошибка") {
  const n = B_(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : D_[bu(e)] ?? n;
}
const Cu = "/api";

const $ = {
  auth: {
    signIn: "/sign-in",
    verifyOtp: "/verify-otp",
    resendOtp: "/resend-otp",
    refresh: "/refresh",
    logout: "/logout",
    changePassword: "/change-password",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    captchaPage: "/captcha/page",
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

let ir = null;
const gs = new Set();
function Zr() {
  return ir;
}
function V_(e) {
  if (ir !== e) {
    ir = e;
    for (const t of gs) {
      t(e);
    }
  }
}
function xR(e) {
  gs.add(e);

  return () => {
    gs.delete(e);
  };
}
function Wa() {
  return ir ? { Authorization: `Bearer ${ir}` } : {};
}
let _s = null;
function W_(e) {
  _s = e;
}
async function j_(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function ys() {
  return _s
    ? Fn ||
        ((Fn = j_(_s).finally(() => {
          Fn = null;
        })),
        Fn)
    : null;
}
async function Nu(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = Zr();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const r = await n();
  return r.status !== 401 || !(await ys()) ? r : n();
}
function z_() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const ja = z_();
class Iu {
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
    if (t.status !== Ve.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        wt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      wt.error(Ys(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${n}${r}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ...Wa() });
    n.set("X-Device-Id", ja);
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
          return B.BAD_REQUEST;
        }
      case Ve.UNAUTHORIZED:
        {
          return B.UNAUTHORIZED;
        }
      case Ve.FORBIDDEN:
        {
          return B.ACCESS_DENIED;
        }
      case Ve.NOT_FOUND:
        {
          return B.ENTITY_NOT_FOUND;
        }
      case Ve.CONFLICT:
        {
          return B.ENTITY_ALREADY_EXISTS;
        }
      case Ve.UNPROCESSABLE_ENTITY:
        {
          return B.VALIDATION_ERROR;
        }
      case Ve.TOO_MANY_REQUESTS:
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
    (s.code = bu(r));
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
      const p =
          r instanceof ArrayBuffer ||
          (typeof Uint8Array !== "undefined" && r instanceof Uint8Array) ||
          (typeof Blob !== "undefined" && r instanceof Blob)
            ? r
            : r != null
            ? JSON.stringify(r)
            : undefined;

      const { headers, skipErrorToast, ...y } = o ?? {};

      const g = await fetch(a, {
        method: t,
        body: p,
        signal: l.signal,
        credentials: "include",
        ...y,
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
      if (g.status === Ve.UNAUTHORIZED && !s && !_ && Zr()) {
        if (await ys()) {
          return this.executeRequest(t, n, r, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ve.UNAUTHORIZED,
          "Session expired",
          B.UNAUTHORIZED
        );
      }
      return await this.handleResponse(g);
    } catch (f) {
      clearTimeout(d);

      if (f instanceof Error) {
        const p = m => !s && !this.isToastSkipped(o?.skipErrorToast, m.status);
        if (f.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", B.TIMEOUT);

          if (p(m)) {
            this.notifyError(m);
          }

          throw m;
        }
        if (f.name === "ApiError") {
          const m = f;

          if (p(m)) {
            this.notifyError(m);
          }

          throw f;
        }
        const h = this.createApiError(
          0,
          f.message || "Network error",
          B.NETWORK_ERROR
        );

        if (p(h)) {
          this.notifyError(h);
        }

        throw h;
      }

      throw f;
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
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": ja, ...Wa() };
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

      if (d.status === Ve.UNAUTHORIZED && !o && Zr()) {
        if (await ys()) {
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ve.UNAUTHORIZED,
          "Session expired",
          B.UNAUTHORIZED
        );
      }

      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(u);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const p = this.createApiError(0, "Request timeout", B.TIMEOUT);

          if (!o) {
            this.notifyError(p);
          }

          throw p;
        }
        if (d.name === "ApiError") {
          if (!o) {
            this.notifyError(d);
          }

          throw d;
        }
        const f = this.createApiError(
          0,
          d.message || "Network error",
          B.NETWORK_ERROR
        );

        if (!o) {
          this.notifyError(f);
        }

        throw f;
      }

      throw d;
    }
  }
}
const U = new Iu({ baseURL: Cu, timeout: 30000/* 3e4 */ });
const at = new Iu({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const Ks = ot((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const n = await U.get("/v1/portal");
        e({ portal: n, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  }
}));

const Tu = () => Ks(e => e.portal);

const ar = new Set();
let tr = null;
const q_ = 30000/* 3e4 */;
function G_() {
  if (tr === null) {
    (tr = window.setInterval(() => {
        ar.forEach(e => e());
      }, q_));
  }
}
function Y_() {
  if (tr !== null) {
    clearInterval(tr);
    (tr = null);
  }
}
function K_(e) {
  ar.add(e);

  if (ar.size === 1) {
    G_();
  }
}
function X_(e) {
  ar.delete(e);

  if (ar.size === 0) {
    Y_();
  }
}
function Oo(e) {
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
function Ru(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [o, s] = P(() => n ? Oo(new Date(r)) : "");

  M(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(r);
    s(Oo(a));
    const c = () => {
      s(Oo(a));
    };
    K_(c);

    return () => X_(c);
  }, [r, n]);

  return o;
}
const za = 1174;
function It() {
  const [e, t] = P(() => typeof window === "undefined" ? false : window.innerWidth < za);

  M(() => {
    const n = window.matchMedia(`(max-width: ${za - 1}px)`);

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
const Q_ = kn({ isHidden: false });

const Z_ = () => {
  const [e, t] = P(false);
  const n = O(0);

  M(() => {
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

function mo(e = "", t = []) {
  const [n, r] = P(e);
  const [o, s] = P(t);
  const a = O(null);

  const c = T((d, f) => {
    r(d);
    s(f);
  }, []);

  const l = T((d) => {
    a.current?.insertText(d);
  }, []);

  const u = T(() => {
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
function J_({
  sentinelRef: e,
  hasMore: t,
  isLoading: n,
  onLoadMore: r,
  rootMargin: o = "100px",
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
          r();
        }
      },
      { rootMargin: o }
    );
    a.observe(e_current);

    return () => a.disconnect();
  }, [t, n, r, o, e]);
}
function ey({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: r = 0,
  getItemKey: o = l => l,
  initialMeasuredHeights: s,
  scrollElement: a,
  initialScrollTop: c,
}) {
  const [, l] = P(0);

  const u = () => a
    ? Math.max(0, a.scrollTop)
    : c !== undefined
    ? c
    : typeof window !== "undefined"
    ? Math.max(0, window.scrollY)
    : 0;

  const d = () => a ? a.clientHeight : typeof window !== "undefined" ? window.innerHeight : 0;

  const f = O(s ?? new Map());
  const p = O(null);
  const h = O(null);
  const m = O(new Map());
  const y = O(o);
  y.current = o;

  const g = R => f.current.get(o(R)) ?? t;

  const _ = (R) => {
    let k = 0;
    for (let C = 0; C < R; C++) {
      k += g(C) + r;
    }
    return k;
  };

  const v = () => {
    if (e === 0) {
      return 0;
    }
    let R = 0;
    for (let k = 0; k < e; k++) {
      R += g(k);
    }
    (R += Math.max(0, e - 1) * r);
    return R;
  };

  const S = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const R = u();
    const k = d();
    let C = 0;
    let E = 0;
    for (let L = 0; L < e; L++) {
      const W = g(L) + r;
      if (E + W > R) {
        C = L;
        break;
      }
      E += W;
    }
    let A = C;
    let I = 0;
    for (let L = C; L < e && ((I += g(L) + r), (A = L), !(I >= k)); L++)
      {}
    return { start: Math.max(0, C - n), end: Math.min(e - 1, A + n) };
  };

  const N = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = S();
    const C = [];
    for (let E = start; E <= end; E++) {
      C.push({ index: E, key: o(E), start: _(E) });
    }
    return C;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((R) => {
      let k = false;
      for (const C of R) {
        const C_target = C.target;
        const A = m.current.get(C_target);
        if (A === undefined) {
          continue;
        }
        const I = C.borderBoxSize && C.borderBoxSize[0];
        const L = I ? I.blockSize : C_target.getBoundingClientRect().height;

        if (L > 0 && f.current.get(A) !== L) {
          f.current.set(A, L);
          (k = true);
        }
      }

      if (k) {
        l(C => C + 1);
      }
    }));
  }

  const w = T((R, k) => {
    if (!R) {
      return;
    }
    const C = y.current(k);
    m.current.set(R, C);
    h.current?.observe(R, { box: "border-box" });
    const E = R.getBoundingClientRect().height;

    if (E > 0 && f.current.get(C) !== E) {
      f.current.set(C, E);
      l(A => A + 1);
    }
  }, []);

  Vt(() => {
    const R = a ?? window;

    const k = () => {
      if (!p.current) {
        (p.current = requestAnimationFrame(() => {
          (p.current = null);

          l(C => C + 1);
        }));
      }
    };

    R.addEventListener("scroll", k, { passive: true });

    l(C => C + 1);

    return () => {
      R.removeEventListener("scroll", k);

      if (p.current) {
        cancelAnimationFrame(p.current);
      }
    };
  }, [a]);

  M(
    () => () => {
      h.current?.disconnect();
      m.current.clear();
    },
    []
  );

  const b = T(() => new Map(f.current), []);
  return {
    virtualItems: N(),
    totalSize: v(),
    measureElement: w,
    getMeasuredHeights: b,
  };
}
const ty = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const qa = "itd:icons:checkedAt";
const ny = 1800 * 1000/* 1e3 */;
const Jr = new Map();
const Po = new Map();
const Br = new Map();

const ry = e => `${ty}/${e}.svg`;

const oy = (() => {
  try {
    const e = Number(localStorage.getItem(qa) ?? 0);
    return Date.now() - e < ny
      ? false
      : (localStorage.setItem(qa, String(Date.now())), true);
  } catch {
    return false;
  }
})();

const sy = e => /^\s*<svg[\s>]/i.test(e) &&
!/<script|<foreignObject|\son[a-z]+\s*=/i.test(e);

const iy = { liked: "--accent-liked" };
const ay = /fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/;

const cy = (e, t) => {
  const iy_e = iy[e];
  if (!iy_e || typeof document === "undefined") {
    return;
  }
  const r = ay.exec(t)?.[1];

  if (r) {
    document.documentElement.style.setProperty(iy_e, r);
  }
};

const ly = (e, t) => {
  Jr.set(e, t);
  cy(e, t);

  Br.get(e)?.forEach(n => n(t));
};

const uy = (e, t = false) => {
  if (!t) {
    const o = Jr.get(e);
    if (o) {
      return Promise.resolve(o);
    }
    const s = Po.get(e);
    if (s) {
      return s;
    }
  }
  const n = t ? "reload" : "no-cache";

  const r = fetch(ry(e), { cache: n })
    .then(async (o) => {
      if (!o.ok) {
        return null;
      }
      const s = await o.text();
      return sy(s) ? (ly(e, s), s) : null;
    })
    .catch(() => null)
    .finally(() => Po.delete(e));

  Po.set(e, r);
  return r;
};

const dy = (e, t) => e.replace(/<svg\b([^>]*)>/i, (n, r) => {
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

const Xs = ({ name: e, size: t = 20, className: n }) => {
  const [r, o] = P(() => Jr.get(e) ?? null);
  M(() => {
    o(Jr.get(e) ?? null);
    const a = Br.get(e) ?? new Set();
    a.add(o);
    Br.set(e, a);
    uy(e);

    return () => {
      a.delete(o);

      if (a.size === 0) {
        Br.delete(e);
      }
    };
  }, [e]);
  const s = typeof t == "number" ? `${t}px` : t;
  return i("span", {
    "data-icon": e,
    "aria-hidden": "true",
    className: n,
    style: { display: "block", width: s, height: s, lineHeight: 0 },
    dangerouslySetInnerHTML: r ? { __html: dy(r, t) } : undefined,
  });
};

const fy = ({ size: e = 18 }) => i("svg", {
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

const py = ({ size: e = 18 }) => i("svg", {
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

const hy = ({ size: e = 18 }) => i("svg", {
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

const ku = ({ size: e = 18 }) => i("svg", {
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

const my = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const gy = ({ size: e = 18 }) => i("svg", {
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

const _y = ({ size: e = 18 }) => i("svg", {
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
    i("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
    i("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
  ],
});

const vy = ({ size: e = 18 }) => i("svg", {
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

const Ey = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const wy = ({ size: e = 24 }) => i("svg", {
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

const Au = ({ size: e = 20 }) => i("svg", {
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

const Sy = ({ size: e = 8 }) => i("svg", {
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

const by = ({ size: e = 8 }) => i("svg", {
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

const Cy = () => i("svg", {
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

const pt = ({ size: e = 24 }) => i("svg", {
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

const Ou = ({ size: e = 20 }) => i(Xs, { name: "comment", size: e });

const Pu = ({ size: e = 18 }) => i("svg", {
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

const Ny = ({ size: e = 24 }) => i("svg", {
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

const Lu = () => i("svg", {
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

const xu = ({ size: e = 18 }) => i("svg", {
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

const $u = ({ size: e = 24 }) => i("svg", {
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

const Qs = ({ filled: e = false, size: t = 20, className: n }) => i(Xs, { name: e ? "liked" : "like", size: t, className: n });

const Zs = ({ size: e = 24 }) => i("svg", {
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

const Iy = ({ size: e = 24 }) => i("svg", {
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

const Mu = ({ size: e = 18 }) => i("svg", {
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

const Du = ({ size: e = 24 }) => i("svg", {
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

const Ty = ({ size: e = 24 }) => i("svg", {
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

const vs = ({ size: e = 24 }) => i("svg", {
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

const Ga = ({ size: e = 18 }) => i("svg", {
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

const Js = ({ size: e = 24 }) => i("svg", {
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

const Ry = ({ size: e = 20 }) => i("svg", {
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

const ei = ({ size: e = 20 }) => i(Xs, { name: "share", size: e });

const Uu = ({ size: e = 24 }) => i("svg", {
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

const Fu = ({ size: e = 24 }) => i("svg", {
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

const ky = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const Ay = ({ size: e = 24 }) => i("svg", {
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

const Hu = ({ size: e = 18 }) => i("svg", {
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

const Oy = ({ size: e = 16 }) => i("svg", {
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

const Py = ({ size: e = 20 }) => i("svg", {
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

function Ly(e) {
  const t = _r()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: _u(t.path || t.url, e.path, {}) !== false,
  });
}
const xy = "uOI4";
const $y = "fs9v";
const My = "qo5x";
const Dy = "ruM7";
const Uy = "G5eX";
const Fy = "fcJ3";
const Hy = "kwmk";
const By = "Bn8w";
const Vy = "G0e6";
const Wy = "aD3U";
const jy = "sN9H";
const zy = "e10Y";
const qy = "g81r";

const Le = {
  aside: xy,
  asideBottom: $y,
  logoutButton: My,
  asideBrand: Dy,
  asideBrandVersion: Uy,
  nav: Fy,
  navItem: Hy,
  active: By,
  iconWrapper: Vy,
  portalButton: Wy,
  portalActive: jy,
  portalImage: zy,
  badge: qy,
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
  LEGAL: "/legal",
  COOKIES: "/cookies",
  EXTERNAL: "/external",
  SUPPORT: "/support",
  CHILD_SAFETY: "/child-safety",
  SHOP: "/shop",
  SUBSCRIPTION_TERMS: "/subscription-terms",
  RECURRING_TERMS: "/recurring-terms",
};

const Ya = [
  ue.SHOP,
  ue.LOGIN,
  ue.REGISTER,
  ue.FORGOT_PASSWORD,
  ue.RESET_PASSWORD,
  ue.VERIFY_EMAIL,
  ue.TERMS,
  ue.PRIVACY,
  ue.LEGAL,
  ue.COOKIES,
  ue.EXTERNAL,
  ue.SUPPORT,
  ue.CHILD_SAFETY,
  ue.SUBSCRIPTION_TERMS,
  ue.RECURRING_TERMS,
];

const ti = [
  ue.LOGIN,
  ue.REGISTER,
  ue.FORGOT_PASSWORD,
  ue.RESET_PASSWORD,
  ue.VERIFY_EMAIL,
  ue.ONBOARDING,
];

const Gy = {
  like: "post_reaction",
  comment_like: "comment_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  wall_post: "wall_post",
};

function Bu(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: Gy[e.type] ?? "follow",
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

const Hn = {
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
      const a = await U.get(s);
      const c = a.notifications ?? [];
      const l = a.hasMore ? String(r + c.length) : null;
      return { notifications: c.map(Bu), nextCursor: l };
    },
    async getUnreadCount() {
      return (await U.get($.notifications.count)).count;
    },
    async markAllAsRead() {
      await U.post($.notifications.markAllRead);
    },
    async getSettings() {
      const e = await U.get($.notifications.settings);
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

      await U.put($.notifications.settings, t);
    },
  };

const Ka = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const Yy = 0.3;
const Ky = 15;
function Xy(e) {
  const t = Ka[Math.min(e, Ka.length - 1)];
  const n = t * Yy * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let Rt = null;
let Nr = null;
let Bn = 0;
let qt = null;
function Qy(e) {
  const { url, onMessage, onStatusChange } = e;
  function o() {
    if (Rt) {
      return;
    }
    if (!Zr()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    (Rt = new AbortController());

    (async () => {
      try {
        const c = await Nu(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
          },
          signal: Rt?.signal,
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
        (Bn = 0);
        onStatusChange("connected");

        if (qt) {
          qt.cancel().catch(() => {});
          (qt = null);
        }

        const l = c.body.getReader();
        qt = l;
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
          let y = "";
          for (const g of h) {
            if (g.startsWith("event: ")) {
              m = g.slice(7);
            } else if (g.startsWith("data: ")) {
              y = g.slice(6);
            } else if (g === "" && y) {
              try {
                const _ = JSON.parse(y);
                const v = m || _.type;
                onMessage(v, _);
              } catch (_) {
                console.error("SSE message parse error:", _, y);
              }
              (m = "");
              (y = "");
            }
          }
        }
      } catch (c) {
        if (c.name === "AbortError") {
          return;
        }
        onStatusChange("error");

        if (Bn >= Ky) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          (Rt = null);
          return;
        }

        const l = Xy(Bn);
        Bn++;

        (Nr = setTimeout(() => {
          (Rt = null);
          o();
        }, l));
      }
    })();
  }
  function s() {
    if (Nr) {
      clearTimeout(Nr);
      (Nr = null);
    }

    if (qt) {
      qt.cancel().catch(() => {});
      (qt = null);
    }

    if (Rt) {
      Rt.abort();
      (Rt = null);
    }

    (Bn = 0);
    onStatusChange("disconnected");
  }
  return { connect: o, disconnect: s };
}

const Xa = {
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

const Ir = Qy({
  url: `${Cu}${$.notifications.stream}`,
  onMessage: (e, t) => {
    if (e === "notification") {
      const n = Bu(t);
      const r = n.payload.actors[0];

      const o = {
        id: n.id,
        type: n.type,
        actorName: r?.displayName || "Пользователь",
        actorUsername: r?.username || "",
        actorAvatar: r?.avatar || "",
        count: n.payload.count,
        message: Jy(
          n.type,
          r?.displayName || "Пользователь",
          n.payload.count
        ),
        entityId: n.entityId,
        parentEntityId: n.parentEntityId,
      };

      dn.setState(s => ({
        notifications: [n, ...s.notifications],
        unreadCount: s.unreadCount + 1,
        lastSseToast: o
      }));

      if (t.sound) {
        ev();
      }
    }
  },
  onStatusChange: (e) => {
    dn.setState({
      sseStatus: e,
      error: e === "error" ? "SSE connection error" : null,
    });
  },
});

const dn = ot()((e, t) => ({
  ...Xa,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      Ir.connect();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status, nextCursor, notifications } = t();
    if (status !== "loading" && !(!n && nextCursor === null && notifications.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const a = n ? undefined : nextCursor ?? undefined;
        const c = await Hn.getNotifications({ cursor: a, limit: 20 });
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
      const n = await Hn.getUnreadCount();
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
      await Hn.markAllAsRead();
    } catch {}
  },

  connectSSE: () => Ir.connect(),
  disconnectSSE: () => Ir.disconnect(),

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await Hn.getSettings();
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
      await Hn.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    Ir.disconnect();
    e(Xa);
  }
}));

const Zy = {
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

function Jy(e, t, n) {
  const Zy_e = Zy[e];
  return Zy_e ? Zy_e(t, n) : "Новое уведомление";
}
function ev() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const Vu = () => dn(e => e.unreadCount);

const tv = () => dn(e => e.lastSseToast);

const nv = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const rv = ["video/mp4", "video/webm", "video/quicktime"];
const Es = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const ov = ".mp4,.webm,.mov";

const Sn = {
  async uploadBannerDrawing(e) {
    return U.post("/files/banner-drawing", e);
  },
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await U.uploadFormData($.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await U.delete($.files.delete(e));
  },
  isValidImageType(e) {
    return nv.includes(e.type);
  },
  isValidVideoType(e) {
    return rv.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const sv = {
  async getChangelog() {
    const e = await U.get($.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await U.get($.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class ni {
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
function Qa(e) {
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
const xt = new ni(100, 300 * 1000/* 1e3 */);
const iv = 60 * 1000/* 1e3 */;
setInterval(() => xt.cleanup(), 120 * 1000/* 1e3 */);
const Tr = {
  async checkUsername(e) {
    return (
      await U.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await U.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await U.get($.users.me);
    return Qa(e);
  },
  async updateProfile(e) {
    return await U.put($.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = xt.get(t);

    if (n && xt.isFresh(t, iv)) {
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
    return xt.get(e.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await U.get($.users.profile(e), {
        skipErrorToast: [Ve.NOT_FOUND],
      });

    const r = Qa(n);
    xt.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    xt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const r = xt.get(n);

    if (r) {
      xt.set(n, { ...r, ...t });
    }
  },
  async followUser(e) {
    await U.post($.users.follow(e), {});
  },
  async unfollowUser(e) {
    await U.delete($.users.follow(e));
  },
  async pinPost(e) {
    await U.post($.posts.pin(e));
  },
  async unpinPost(e) {
    await U.delete($.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await U.get($.users.privacy);
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

    await U.put($.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await U.get($.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await U.post($.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await U.get($.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await U.put($.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await U.delete($.users.setPin);
  },
  async deleteAccount() {
    await U.delete($.users.deleteAccount);
  },
  async restoreAccount() {
    await U.post($.users.restoreAccount);
  },
};
function Za(e) {
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
const St = ot(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(r => ({
    statuses: { ...r.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let ws = new Set();
function av() {
  if (!Lo) {
    (null = setTimeout(async () => {
      Lo = null;
      const e = Array.from(ws);
      ws.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await Ss.batchFollowStatus(n);
            St.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50));
  }
}
function cv(e) {
  const t = ye(s => s.profile?.id);

  const n = St(s => s.statuses);

  const r = O("");

  M(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of s) {
        ws.add(c);
      }
      av();
    }
  }, [e, t]);

  return {
    getStatus: T(
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
const Zt = new ni(500, 120 * 1000/* 1e3 */);
setInterval(() => Zt.cleanup(), 60 * 1000/* 1e3 */);
const Ss = {
  async followUser(e) {
    const t = await U.post($.users.follow(e), {});
    Zt.delete(e);
    St.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await U.delete($.users.follow(e));
    Zt.delete(e);
    St.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const a = `${$.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await U.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const f = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(Za), nextCursor: f };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const a = `${$.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await U.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const f = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(Za), nextCursor: f };
  },
  async blockUser(e) {
    await U.post($.users.block(e), {});
    Zt.delete(e);
  },
  async unblockUser(e) {
    await U.delete($.users.block(e));
    Zt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const o = t.toString();
    const s = `${$.users.blocked}${o ? `?${o}` : ""}`;
    const a = await U.get(s);
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

    const d = c.pagination?.hasMore ?? false;
    const f = d ? String(r + 1) : null;
    return { users: u, nextCursor: f, hasMore: d };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await U.post($.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    Zt.delete(e);
  },
  clearSocialCache() {
    Zt.clear();
  },
};
function lv(e) {
  const t = St(o => o.statuses[e]);

  const n = T(async () => {
    St.getState().setStatus(e, true);
    try {
      await Ss.followUser(e);
    } catch {
      St.getState().setStatus(e, false);
    }
  }, [e]);

  const r = T(async () => {
    St.getState().setStatus(e, false);
    try {
      await Ss.unfollowUser(e);
    } catch {
      St.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: r };
}
const uv = "VkAR";
const dv = "Lu5M";
const fv = "F9L9";
const pv = "GG5R";
const hv = "T4QD";
const mv = "AHyp";
const gv = "MR1s";
const _v = "Frwr";
const yv = "vy0a";
const vv = "kar6";
const Ev = "z7sg";
const wv = "iNFZ";
const Sv = "Ta45";
const bv = "Grho";

const Ue = {
  overlay: uv,
  modalWrapper: dv,
  wide: fv,
  modal: pv,
  frameless: hv,
  header: mv,
  title: gv,
  closeButton: _v,
  externalCloseButton: yv,
  mobileOverlay: vv,
  closing: Ev,
  bottomSheet: wv,
  dragHandle: Sv,
  dragIndicator: bv,
};

const Cv = kn(null);
const Nv = 100;
const Iv = 0.5;
function hn({
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
  const f = O(null);
  const p = O(null);
  const h = It();
  const m = O(0);
  const y = O(false);
  const [g, _] = P(false);
  const v = O(0);
  const S = O(0);
  const N = O(0);
  M(() => {
    const G = (re) => {
        if (re.key === "Escape") {
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

  const w = (G) => {
      p.current = G.target;
    };

  const b = (G) => {
    if (p.current === d.current && G.target === d.current) {
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

  const R = T(() => {
    if (u && !u()) {
      A(0, "transform 0.2s ease-out");
      I(0);
      (m.current = 0);
      return;
    }
    _(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, u]);

  const k = O(false);
  const C = O(false);

  const E = (G) => {
    let J = G;

    while (J && J !== f.current) {
      const j = window.getComputedStyle(J).overflowY;
      if ((j === "auto" || j === "scroll") && J.scrollHeight > J.clientHeight) {
        return J;
      }
      J = J.parentElement;
    }

    return null;
  };

  const A = (G, J) => {
    if (f.current) {
      (f.current.style.transform = G > 0 ? `translateY(${G}px)` : "");
      (f.current.style.transition = J || "");
    }
  };

  const I = (G) => {
    if (d.current && G > 0) {
      (d.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - G / 500
          )})`);
    } else if (d.current) {
      (d.current.style.backgroundColor = "");
    }
  };

  const L = (G) => {
    if (!h) {
      return;
    }
    (v.current = G.touches[0].clientY);
    (S.current = Date.now());
    (N.current = G.touches[0].clientY);
    const G_target = G.target;
    if (G_target.closest(`.${Ue.dragHandle}`)) {
      (k.current = true);
      (C.current = true);
      (y.current = true);

      if (f.current) {
        (f.current.style.transition = "none");
      }

      return;
    }
    (k.current = false);

    if (G_target.closest('button, a, input, textarea, select, video, [role="button"]')) {
      C.current = false;
      return;
    }

    if (G_target.tagName === "CANVAS" || G_target.closest("canvas")) {
      C.current = false;
      return;
    }
    const he = E(G_target);
    C.current = !he || he.scrollTop === 0;
  };

  const W = (G) => {
    if (!h) {
      return;
    }
    const J = G.touches[0].clientY;
    const re = J - v.current;
    (N.current = J);

    if (k.current) {
      if (re > 0) {
        (m.current = re);
        A(re);
        I(re);
        G.preventDefault();
      }

      return;
    }

    if (C.current) {
      if (y.current && m.current > 0) {
        if (re > 0) {
          (m.current = re);
          A(re);
          I(re);
          G.preventDefault();
        } else {
          (m.current = 0);
          (y.current = false);
          A(0);
          I(0);
        }

        return;
      }

      if (re > 0) {
        y.current ||
            ((y.current = true),
            f.current && (f.current.style.transition = "none"));

        (m.current = re);
        A(re);
        I(re);
        G.preventDefault();
      }
    }
  };

  const K = () => {
    if (!h) {
      return;
    }
    const G = N.current - v.current;
    const J = Date.now() - S.current;
    const re = G / J;

    if (y.current && (G > Nv || re > Iv)) {
      R();
    } else if (m.current > 0) {
      A(0, "transform 0.2s ease-out");
      I(0);
      (m.current = 0);
    }

    (y.current = false);
    (k.current = false);
    (C.current = false);
  };

  const me = (() => {
    if (h && g) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const ae = { onClose: t, isMobile: h, isClosing: g, handleClose: R };
  return i(Cv.Provider, {
    value: ae,
    children: i("div", {
      ref: d,
      className: `${Ue.overlay} ${h ? Ue.mobileOverlay : ""} ${
        g ? Ue.closing : ""
      }`,
      onMouseDown: w,
      onMouseUp: b,
      children: i("div", {
        ref: f,
        className: `${Ue.modalWrapper} ${l === "wide" ? Ue.wide : ""} ${
          h ? Ue.bottomSheet : ""
        }`,
        style: me,
        onTouchStart: L,
        onTouchMove: W,
        onTouchEnd: K,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: Ue.externalCloseButton,
              onClick: (G) => {
                G.stopPropagation();
                t();
              },
              children: i(pt, { size: 24 }),
            }),
          h &&
            i("div", {
              className: Ue.dragHandle,
              children: i("div", { className: Ue.dragIndicator }),
            }),
          i("div", {
            className: `${Ue.modal} ${s ? Ue.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                r &&
                !h &&
                i("div", {
                  className: Ue.header,
                  children: [
                    i("span", { className: Ue.title, children: n }),
                    o &&
                      i("button", {
                        type: "button",
                        className: Ue.closeButton,
                        onClick: (G) => {
                          G.stopPropagation();
                          t();
                        },
                        children: i(pt, { size: 16 }),
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
const Tv = "DXpi";
const Rv = "FAAF";
const kv = "nNxU";
const Av = "Nb0s";
const Ov = "zy7A";
const Pv = "SzUN";
const Ja = { spinner: Tv, spin: Rv, xs: kv, sm: Av, md: Ov, lg: Pv };
function ri({ size: e = "md", className: t }) {
  const n = [Ja.spinner, Ja[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(Zs, {}) });
}
const Lv = "GQe0";
const xv = "DjYP";
const $v = "pBkI";
const Mv = "Q7du";
const Dv = "ze1w";
const Uv = "ErfQ";
const Fv = "aVOi";
const Hv = "N45u";
const Bv = "dh2u";
const Vv = "hBwM";
const Wv = "tB8a";
const jv = "W23j";

const yn = {
  button: Lv,
  primary: xv,
  secondary: $v,
  ghost: Mv,
  accent: Dv,
  danger: Uv,
  sm: Fv,
  md: Hv,
  lg: Bv,
  fullWidth: Vv,
  iconOnly: Wv,
  loading: jv,
};

function ke({
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
    yn.button,
    yn[t],
    yn[n],
    r && yn.fullWidth,
    o && yn.iconOnly,
    s && yn.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return i("button", {
    type: c,
    className: d,
    disabled: l || s,
    ...u,
    children: s ? i(ri, { size: "sm" }) : e,
  });
}
const zv = "mu7R";
const qv = "cDFx";
const Gv = "uLHm";
const Yv = "BP9Z";
const Rr = { content: zv, title: qv, subtitle: Gv, actions: Yv };
function Kv({ displayName: e, onConfirm: t, onClose: n }) {
  return i(hn, {
    onClose: n,
    showHeader: false,
    children: i("div", {
      className: Rr.content,
      children: [
        i("h2", { className: Rr.title, children: "Отписаться?" }),
        i("p", {
          className: Rr.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            i("strong", { children: e }),
            "?",
          ],
        }),
        i("div", {
          className: Rr.actions,
          children: [
            i(ke, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            i(ke, {
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
const Wu = kn(null);
let Xv = 0;
function Qv({ children: e }) {
  const [t, n] = P([]);

  const r = T((a) => {
    const c = `modal-${++Xv}`;

    n(l => [...l, { id: c, component: a }]);

    return c;
  }, []);

  const o = T((a) => {
    n(c => a ? c.filter(l => l.id !== a) : c.slice(0, -1));
  }, []);

  const s = T(() => {
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

  return i(Wu.Provider, {
    value: { openModal: r, closeModal: o, closeAllModals: s },
    children: [e, t.length > 0 && i(Zv, { modals: t })],
  });
}
function Zv({ modals: e }) {
  return Wt(
    i(Ie, {
      children: e.map(({ id: t, component: n }) => i(Te, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function mn() {
  const e = po(Wu);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const Jv = "acCC";
const e0 = "GlIQ";
const t0 = "eIV3";
const n0 = "Quax";
const r0 = "SEFW";
const o0 = "TXRa";
const s0 = "xbHf";
const i0 = "R0YO";
const a0 = "QXW9";
const c0 = "EHbb";
const l0 = "Yg0r";
const u0 = "KtIO";

const kt = {
  avatar: Jv,
  xs: e0,
  emoji: t0,
  onlineDot: n0,
  sm: r0,
  md: o0,
  lg: s0,
  xl: i0,
  badge: a0,
  followBadge: c0,
  notFollowing: l0,
  following: u0,
};

function d0(e) {
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
  const l = e ? d0(e) : false;
  return i("div", {
    className: `${kt.avatar} ${kt[n]} ${c || ""}`,
    children: [
      l && e
        ? i("img", { src: e, alt: t || "" })
        : i("span", { className: kt.emoji, children: e || "👤" }),
      r && i("div", { className: kt.badge, children: r }),
      s !== undefined
        ? i("button", {
            type: "button",
            className: `${kt.followBadge} ${
              s ? kt.following : kt.notFollowing
            }`,
            onClick: (u) => {
              u.preventDefault();
              u.stopPropagation();
              a?.(u);
            },
            children: s ? i(by, { size: 8 }) : i(Sy, { size: 8 }),
          })
        : o && i("span", { className: kt.onlineDot }),
    ],
  });
}
const f0 = "OW2Z";
const p0 = "NSv6";
const h0 = "K6Ds";
const m0 = "W2Jg";
const g0 = "EvSo";
const _0 = "VlJh";
const y0 = "Z4Qn";
const v0 = "rG3j";
const E0 = "Eu3p";
const w0 = "AD20";
const S0 = "yQwm";
const b0 = "QbjN";
const C0 = "M3cz";
const N0 = "iyf7";
const I0 = "aXA6";

const Be = {
  userName: f0,
  pinBadge: p0,
  text: h0,
  nukstaGlow: m0,
  xs: g0,
  sm: _0,
  md: y0,
  lg: v0,
  pinWrapper: E0,
  pinClickable: w0,
  pinTooltip: S0,
  pinTooltipFadeIn: b0,
  pinTooltipRow: C0,
  pinTooltipLabel: N0,
  pinTooltipArrow: I0,
};

const T0 = ie(() => ne(
  () => import("./index-IG9jWvj0.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const R0 = { xs: 12, sm: 14, md: 16, lg: 22 };
const k0 = "subscription_nuksta";
function yr({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: o = "md",
  className: s,
}) {
  const R0_o = R0[o];
  const c = O(null);
  const [l, u] = P(null);
  const [d, f] = P(false);
  const p = r?.slug === k0;

  const h = T(() => {
    if (!c.current) {
      return;
    }
    const y = c.current.getBoundingClientRect();
    u({ x: y.left + y.width / 2, y: y.top });
  }, []);

  const m = T(() => {
    u(null);
  }, []);

  return i("span", {
    className: `${Be.userName} ${Be[o]} ${s || ""}`,
    children: [
      n
        ? i("span", {
            className: Be.nukstaGlow,
            children: i("span", { className: Be.text, children: e }),
          })
        : i("span", { className: Be.text, children: e }),
      t && i(Oy, {}),
      r &&
        i("span", {
          ref: c,
          className: `${Be.pinWrapper} ${p ? Be.pinClickable : ""}`,
          onMouseEnter: h,
          onMouseLeave: m,
          onClick: p
            ? (y) => {
            y.stopPropagation();
            y.preventDefault();
            f(true);
          }
            : undefined,
          children: [
            i("img", {
              src: r.url,
              alt: r.name,
              className: Be.pinBadge,
              width: R0_o,
              height: R0_o,
            }),
            l &&
              Wt(
                i("div", {
                  className: Be.pinTooltip,
                  style: { left: `${l.x}px`, top: `${l.y}px` },
                  children: [
                    i("span", {
                      className: Be.pinTooltipRow,
                      children: [
                        i("span", {
                          className: Be.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        r.name,
                      ],
                    }),
                    r.description &&
                      i("span", {
                        className: Be.pinTooltipRow,
                        children: [
                          i("span", {
                            className: Be.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          r.description,
                        ],
                      }),
                    i("span", { className: Be.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
      d &&
        i(Te, {
          fallback: null,
          children: i(T0, { isOpen: true, onClose: () => f(false) }),
        }),
    ],
  });
}
function A0(e) {
  return "accessToken" in e;
}
function O0(e) {
  return "accessToken" in e;
}
const vn = { skipErrorToast: true };

const Gt = {
  async login(e) {
    return await at.post($.auth.signIn, e, vn);
  },
  async verifyOtp(e) {
    return await at.post($.auth.verifyOtp, e, vn);
  },
  async resendOtp(e) {
    await at.post($.auth.resendOtp, e, vn);
  },
  async refreshSession() {
    return await at.post($.auth.refresh);
  },
  async logout() {
    await at.post($.auth.logout);
  },
  async logoutAll() {
    await at.post(`${$.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await at.post($.auth.forgotPassword, e, vn);
  },
  async resetPassword(e) {
    await at.post($.auth.resetPassword, e, vn);
  },
  async changePassword(e) {
    await at.post($.auth.changePassword, e, vn);
  },
};

function ec(e) {
  if (!e || typeof e != "object") {
    throw new Error("Invalid phone delivery");
  }
  const t = e;
  const n = t.delivery && typeof t.delivery == "object" ? t.delivery : null;
  const r = n?.type ?? t.channel;
  const o = r === "missed_call" ? "flashcall" : r;
  const s = n?.codeLength ?? t.codeLength;
  if (!["flashcall", "voice_call", "sms", "push"].includes(String(o)) ||
  !Number.isInteger(s) ||
  Number(s) < 4 ||
  Number(s) > 6 ||
  typeof t.retryIn != "number" ||
  !Number.isFinite(t.retryIn) ||
  t.retryIn < 0) {
    throw new Error("Unsupported phone delivery");
  }
  return {
    channel: o,
    codeLength: Number(s),
    retryIn: t.retryIn,
    nextChannel:
      t.next === "missed_call" ? "flashcall" : t.next ?? t.nextChannel ?? null,
  };
}
class oi extends Error {
  code;
  retryIn;
  constructor(t, n = 0) {
    super(t);
    (this.code = t);
    (this.retryIn = n);
  }
}
function tc(e) {
  const t = e instanceof oi ? e.code : "";
  return (
    {
      INVALID_PHONE: "Проверьте номер телефона и код страны.",
      COUNTRY_NOT_ALLOWED: "Подтверждение в этой стране пока недоступно.",
      PHONE_TAKEN: "Этот номер уже привязан к другому аккаунту.",
      ALREADY_ATTACHED: "К этому аккаунту уже привязан номер телефона.",
      PHONE_SYNC_UNAVAILABLE:
        "Номер подтверждён. Не удалось обновить профиль — попробуйте завершить ещё раз. Новый звонок не нужен.",
      OTP_INVALID: "Цифры не совпали. Проверьте номер входящего звонка.",
      INVALID_OTP_FORMAT: "Введите все цифры кода.",
      OTP_EXPIRED: "Время подтверждения истекло. Запросите новый звонок.",
      OTP_MAX_ATTEMPTS: "Попытки закончились. Запросите новый звонок позже.",
      INVALID_FLOW_TOKEN: "Время подтверждения истекло. Начните заново.",
      DELIVERY_FAILED: "Не удалось позвонить. Попробуйте ещё раз чуть позже.",
      TURNSTILE_VERIFICATION_FAILED: "Пройдите проверку ещё раз.",
      TURNSTILE_TOKEN_MISSING: "Сначала пройдите проверку.",
      TOO_MANY_REQUESTS:
        "Слишком много попыток. Подождите перед повторным запросом.",
      RATE_LIMIT_EXCEEDED:
        "Слишком много попыток. Подождите перед повторным запросом.",
      NO_CHANNEL_AVAILABLE:
        "Повторный звонок пока недоступен. Попробуйте позже.",
      UNAUTHORIZED: "Сессия истекла. Войдите в аккаунт ещё раз.",
    }[t] ||
    "Не удалось выполнить запрос. Проверьте соединение и попробуйте ещё раз."
  );
}
async function Yt(e, t) {
  const n = await Nu(`/api/v1/auth${e}`, {
      method: t ? "POST" : "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      ...(t ? { body: JSON.stringify(t) } : {}),
      signal: AbortSignal.timeout(20000/* 2e4 */),
    });

  const r = await n.json();
  if (!n.ok) {
    const o = r?.error || r;

    const s = Math.max(
      Number(o?.retryIn) || 0,
      Number(o?.retryAfter) || 0,
      Number(n.headers.get("Retry-After")) || 0
    );

    throw new oi(
      o?.code || (n.status === 401 ? "UNAUTHORIZED" : "REQUEST_FAILED"),
      n.status === 429 ? Math.max(s, 30) : s
    );
  }
  return r;
}
const $t = {
  attach: async (e, t) => {
    const n = await Yt("/phone/attach", { phone: e, captcha: t });
    if (typeof n.flowToken != "string" || n.flowToken.length !== 32) {
      throw new Error("Invalid phone flow");
    }
    return { ...ec(n), flowToken: n.flowToken };
  },
  resend: async (e, t) => ec(await Yt("/resend-otp", { phone: e, flowToken: t })),
  verify: (e, t, n) => Yt("/verify-otp", { phone: e, otp: t, flowToken: n }),
  methods: () => Yt("/methods"),
  sync: () => Yt("/phone/sync", {}),
  syncIfAttached: async () => {
    if ((await Yt("/methods")).phone) {
      (await Yt("/phone/sync", {}));
    }
  },
};
function Kt(e, t) {
  if (!e) {
    Yi(null);
    return;
  }
  Yi({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
}

const kr = {
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

const ye = ot()(
  wu(
    (e, t) => {
      const n = V_;

      W_(async () => {
        try {
          const s = await Gt.refreshSession();
          n(s.accessToken);
          return s.accessToken;
        } catch (s) {
          return $e(s) && s.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      U.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...kr,
        login: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Gt.login(o);
            if (O0(s)) {
              n(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: o.email,
                    });

                  Kt(t().profile, o.email);
                }
              } catch (c) {
                if ($e(c) &&
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
            const a = $e(s) ? s.message : "Login failed";
            const c = $e(s) ? s.code : null;
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

            if (A0(l)) {
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

                  Kt(t().profile, u);
                }
              } catch (d) {
                if ($e(d) &&
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
            const u = $e(l) ? l.message : "Verification failed";
            const d = $e(l) ? l.code : null;
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
            const c = $e(a) ? a.message : "Failed to resend code";
            const l = $e(a) ? a.code : null;
            e({ error: c, errorCode: l });
            throw a;
          }
        },
        createProfile: async (o) => {
          e({ error: null, errorCode: null });
          try {
            await Tr.createProfile(o);
            await $t.syncIfAttached().catch(() => {});
            await t().fetchProfile();
            e({ status: "authenticated" });
            Kt(t().profile, t().email);
          } catch (s) {
            const a = $e(s) ? s.message : "Failed to create profile";
            const c = $e(s) ? s.code : null;
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
            e({ ...kr, status: "unauthenticated" });
            Kt(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await Gt.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...kr, status: "unauthenticated" });
            Kt(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const o = await Gt.refreshSession();
            n(o.accessToken);
            return o.accessToken;
          } catch (o) {
            return $e(o) && o.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const o = await Tr.getMyProfile();
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
                Kt(t().profile, t().email);
              }
            } catch (a) {
              if ($e(a) &&
              (a.code === B.ENTITY_NOT_FOUND || a.status === 404)) {
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
          await Tr.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await Tr.restoreAccount();
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
          e({ ...kr, status: "unauthenticated" });
          Kt(null, null);
        },
        setProfile: (o) => {
          e({ profile: o });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Gs(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const ju = () => ye(e => e.status);

const si = () => ye(e => e.profile);

const go = () => ye(e => e.status === "authenticated");

const P0 = "XlcN";
const L0 = "pcrS";
const x0 = "T6oi";
const $0 = "LzeH";
const M0 = "rvNB";
const D0 = "H9kH";

const En = {
  screen: P0,
  fullscreen: L0,
  image: x0,
  title: $0,
  description: M0,
  action: D0,
};

const U0 = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const zu = ({ kind: e, title: t, description: n, action: r, fullscreen: o = false }) => i("div", {
  className: `${En.screen} ${o ? En.fullscreen : ""}`,
  children: [
    i("img", {
      className: En.image,
      src: U0[e],
      alt: "",
      width: 256,
      height: 256,
      "aria-hidden": "true",
    }),
    i("h1", { className: En.title, children: t }),
    n && i("p", { className: En.description, children: n }),
    r && i("div", { className: En.action, children: r }),
  ],
});

function F0({ children: e, currentPath: t }) {
  const n = ju();

  const r = ye(s => s.initialize);

  M(() => {
    if (n === "idle") {
      r();
    }
  }, [n, r]);

  M(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const s = Ya.some(a => t.startsWith(a));

    if (n === "unauthenticated" && !s) {
      if (!qe(ue.LOGIN)) {
        window.location.replace(ue.LOGIN);
      }
    } else if (n === "needs_profile" && t !== ue.ONBOARDING) {
      if (!qe(ue.ONBOARDING)) {
        window.location.replace(ue.ONBOARDING);
      }
    } else if (n === "authenticated" &&
        (t === ue.LOGIN || t === ue.REGISTER || t === ue.ONBOARDING)) {
      qe(ue.HOME);
    }
  }, [n, t]);

  const o = Ya.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !o)
    ? null
    : n === "service_error"
    ? i(H0, {})
    : n === "account_deleted"
    ? i(B0, {})
    : (n === "unauthenticated" && !o) ||
      (n === "needs_profile" && t !== ue.ONBOARDING)
    ? null
    : i(Ie, { children: e });
}
function H0() {
  const e = ye(o => o.initialize);

  const [t, n] = P(false);
  return i(zu, {
    kind: "server",
    fullscreen: true,
    title: "Сервис недоступен",
    description:
      "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
    action: i(ke, {
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
function B0() {
  const e = ye(l => l.canRestore);

  const t = ye(l => l.restoreDeadline);

  const n = ye(l => l.restoreAccount);

  const r = ye(l => l.logout);

  const [o, s] = P(false);

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
                    i(ke, { onClick: c, children: "Восстановить аккаунт" }),
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
                  children: i(ke, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
function V0() {
  return at.get($.auth.captchaPage, { skipErrorToast: true });
}
const W0 = 4096;
function j0({ onVerify: e, onExpire: t, onError: n, theme: r = "light" }) {
  const o = O(null);
  const [s, a] = P(null);
  const [c, l] = P(80);
  const [u, d] = P(false);
  const f = O({ onVerify: e, onExpire: t, onError: n });

  M(() => {
    f.current = { onVerify: e, onExpire: t, onError: n };
  }, [e, t, n]);

  M(() => {
    let h = false;

    V0()
      .then((m) => {
      if (!h) {
        a(m);
      }
    })
      .catch(() => {
      if (!h) {
        f.current.onError?.();
      }
    });

    return () => {
      h = true;
    };
  }, []);

  M(() => {
    if (!s) {
      return;
    }
    const h = new URL(s.url, location.href).origin;

    const m = (y) => {
      if (y.origin !== h || y.source !== o.current?.contentWindow) {
        return;
      }
      let g;
      try {
        g = typeof y.data == "string" ? JSON.parse(y.data) : y.data;
      } catch {
        return;
      }
      switch (g?.type) {
        case "token":
          {
            if (typeof g.token == "string" &&
              g.token &&
              g.token.length <= W0) {
              f.current.onVerify({ provider: s.provider, token: g.token });
            }

            break;
          }
        case "expired":
          {
            f.current.onExpire?.();
            break;
          }
        case "error":
          {
            f.current.onError?.();
            break;
          }
        case "size":
          {
            if (typeof g.height == "number" &&
              Number.isFinite(g.height)) {
              l(Math.max(65, Math.min(320, Math.ceil(g.height))));
            }

            d(true);
            break;
          }
        case "ready":
          {
            d(true);
            break;
          }
      }
    };

    window.addEventListener("message", m);

    return () => window.removeEventListener("message", m);
  }, [s]);

  const p = s ? `${s.url}${s.url.includes("?") ? "&" : "?"}theme=${r}` : null;
  return i("div", {
    style: {
      position: "relative",
      width: 300,
      minHeight: c,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    children: [
      !u && i(ri, { size: "md" }),
      p &&
        i("iframe", {
          ref: o,
          title: "Проверка",
          src: p,
          style: {
            display: "block",
            width: 300,
            height: c,
            border: 0,
            maxWidth: "100%",
            position: u ? "static" : "absolute",
            opacity: u ? 1 : 0,
          },
        }),
    ],
  });
}
const z0 = "fe6U";
const q0 = "rg7z";
const G0 = "CpZA";
const Y0 = "XExl";
const K0 = "bFT7";
const X0 = "i31y";
const Q0 = "L1g1";
const Z0 = "eDhg";
const J0 = "QwhC";

const Vn = {
  code: z0,
  slot: q0,
  glyph: G0,
  settle: Y0,
  focusFrame: K0,
  cursor: X0,
  error: Q0,
  reject: Z0,
  success: J0,
};

function nc({
  value: e,
  length: t,
  onChange: n,
  disabled: r = false,
  status: o = "idle",
  label: s = "Код подтверждения",
}) {
  const [a, c] = P(-1);
  const l = O([]);
  M(() => {
    l.current[0]?.focus();
  }, [t]);

  const u = f => l.current[Math.max(0, Math.min(t - 1, f))]?.focus();

  const d = (f, p) => {
    const h = f.replace(/\D/g, "").slice(0, t);
    if (!h) {
      return;
    }
    const m = h.length === t ? 0 : p;

    const y = Array.from({ length: t }, (g, _) => e[_] || "");

    for (let g = 0; g < h.length && m + g < t; g++) {
      y[m + g] = h[g];
    }
    n(y);
    u(m + h.length);
  };

  return i("div", {
    className: `${Vn.code} ${o === "idle" ? "" : Vn[o]}`,
    role: "group",
    "aria-label": s,
    style: { "--slots": t, "--active": Math.max(a, 0) },
    "data-focused": a >= 0 && !r,
    onBlur: (f) => {
      if (!f.currentTarget.contains(f.relatedTarget)) {
        c(-1);
      }
    },
    children: [
      i("span", { className: Vn.focusFrame, "aria-hidden": "true" }),
      Array.from({ length: t }, (f, p) => i(
        "div",
        {
          className: Vn.slot,
          "data-filled": !!e[p],
          "data-current": a === p,
          children: [
            i("input", {
              ref: (h) => {
                l.current[p] = h;
              },
              type: "text",
              inputMode: "numeric",
              pattern: "[0-9]*",
              autoComplete: p === 0 ? "one-time-code" : "off",
              "aria-label": `Цифра ${p + 1}`,
              "aria-invalid": o === "error",
              disabled: r,
              value: e[p] || "",
              onFocus: (h) => {
                c(p);
                h.currentTarget.select();
              },
              onInput: (h) => {
                const m = h.currentTarget.value.replace(/\D/g, "");
                if (m.length > 1) {
                  d(m, p);
                  return;
                }
                const y = Array.from({ length: t }, (g, _) => e[_] || "");
                (y[p] = m);
                n(y);

                if (m) {
                  u(p + 1);
                }
              },
              onPaste: (h) => {
                h.preventDefault();
                d(h.clipboardData?.getData("text") || "", p);
              },
              onKeyDown: (h) => {
                switch (h.key) {
                case "ArrowLeft":
                  h.preventDefault();
                  u(p - 1);
                  break;
                case "ArrowRight":
                  h.preventDefault();
                  u(p + 1);
                  break;
                case "Home":
                  h.preventDefault();
                  u(0);
                  break;
                case "End":
                  h.preventDefault();
                  u(t - 1);
                  break;
                }
              },
            }),
            i(
              "span",
              {
                className: Vn.glyph,
                "aria-hidden": "true",
                children: e[p] || "",
              },
              e[p] || "empty"
            ),
          ],
        },
        p
      )
      ),
    ],
  });
}
const ut = {
  ru: {
    prefix: "+7",
    name: "Россия",
    length: 10,
    placeholder: "999 123 45 67",
  },
  by: {
    prefix: "+375",
    name: "Беларусь",
    length: 9,
    placeholder: "29 123 45 67",
  },
  kz: {
    prefix: "+7",
    name: "Казахстан",
    length: 10,
    placeholder: "701 123 4567",
  },
  am: { prefix: "+374", name: "Армения", length: 8, placeholder: "77 123456" },
  az: {
    prefix: "+994",
    name: "Азербайджан",
    length: 9,
    placeholder: "50 123 45 67",
  },
  kg: {
    prefix: "+996",
    name: "Кыргызстан",
    length: 9,
    placeholder: "700 123456",
  },
  md: { prefix: "+373", name: "Молдова", length: 8, placeholder: "621 12 345" },
  tj: {
    prefix: "+992",
    name: "Таджикистан",
    length: 9,
    placeholder: "917 12 3456",
  },
  tm: {
    prefix: "+993",
    name: "Туркменистан",
    length: 8,
    placeholder: "66 123456",
  },
  uz: {
    prefix: "+998",
    name: "Узбекистан",
    length: 9,
    placeholder: "90 123 45 67",
  },
  ge: {
    prefix: "+995",
    name: "Грузия",
    length: 9,
    placeholder: "555 12 34 56",
  },
  ua: {
    prefix: "+380",
    name: "Украина",
    length: 9,
    placeholder: "50 123 4567",
  },
};
function rc(e, t) {
  return e === "ru"
    ? /^9\d{9}$/.test(t)
      ? `+7${t}`
      : null
    : e === "by"
    ? /^(?:25|29|33|44)\d{7}$/.test(t)
      ? `+375${t}`
      : null
    : new RegExp(`^\\d{${ut[e].length}}$`).test(t)
    ? ut[e].prefix + t
    : null;
}
function qu(e) {
  return e === "by"
    ? "9 цифр после +375. Код мобильного номера: 25, 29, 33 или 44."
    : e !== "ru"
    ? `${ut[e].length} цифр после ${ut[e].prefix}.`
    : "10 цифр после +7. Мобильный номер начинается с 9.";
}
function eE(e, t) {
  if (!/^[+\d\s()-]*$/.test(e)) {
    return {
      country: t,
      digits: "",
      error: "В номере допустимы только цифры.",
    };
  }
  const n = e.replace(/[\s()-]/g, "");
  let r = t;
  let o = n;
  const s = Object.entries(ut)
    .filter(([, a]) => a.prefix !== "+7")
    .find(([, a]) => n.startsWith(a.prefix));
  if (s) {
    (r = s[0]);
    (o = n.slice(s[1].prefix.length));
  } else if (n.startsWith("+375")) {
    (r = "by");
    (o = n.slice(4));
  } else if (n.startsWith("+7")) {
    (o = n.slice(2));
    (r = /^[67]/.test(o) ? "kz" : "ru");
  } else {
    if (n.startsWith("+")) {
      return { country: r, digits: "", error: "Выберите страну из списка." };
    }

    if (/^375\d{9}$/.test(n)) {
      (r = "by");
      (o = n.slice(3));
    } else if (t === "by" && /^80\d{9}$/.test(n)) {
      (o = n.slice(2));
    } else if ((t === "ru" || t === "kz") &&
        /^[78]\d{10}$/.test(n)) {
      (o = n.slice(1));
    }
  }

  if (/^\d*$/.test(o)) {
    if (o.length > ut[r].length) {
      return { country: r, digits: "", error: `Слишком длинный номер. ${qu(r)}` };
    }

    return { country: r, digits: o, error: "" };
  }

  return { country: r, digits: "", error: "В номере допустимы только цифры." };
}
const tE = "iMC7";
const nE = "IzjC";
const rE = "ATjg";
const oE = "EFnZ";
const sE = "LqO7";
const iE = "eF8K";
const aE = "Z3Ja";
const cE = "bIWv";
const lE = "SHi1";
const uE = "JuPl";
const dE = "qeFm";
const fE = "sVhg";
const pE = "HvgQ";
const hE = "wK1G";
const mE = "DcNe";
const gE = "tyjo";
const _E = "KFgH";
const yE = "gyEF";
const vE = "QeR3";
const EE = "HJdQ";
const wE = "YtsT";
const SE = "iaqs";
const bE = "z5y6";

const fe = {
  modal: tE,
  content: nE,
  symbol: rE,
  ringing: oE,
  heading: sE,
  form: iE,
  label: aE,
  phoneSelect: cE,
  phoneField: lE,
  countryTrigger: uE,
  flag: dE,
  chevron: fE,
  countryMenu: pE,
  countryOption: hE,
  countryName: mE,
  countryPrefix: gE,
  countryCheck: _E,
  phone: yE,
  captcha: vE,
  error: EE,
  hint: wE,
  number: SE,
  resend: bE,
};

function oc({ country: e }) {
  if (e !== "ru" && e !== "by") {
    return i("span", { "aria-hidden": "true", children: e.toUpperCase() });
  }

  if (e === "by") {
    return i("svg", {
          viewBox: "0 0 28 20",
          "aria-hidden": "true",
          children: [
            i("rect", { width: "28", height: "20", rx: "3", fill: "#cf2028" }),
            i("path", { d: "M0 13h28v7H0z", fill: "#078344" }),
            i("path", { d: "M0 0h5v20H0z", fill: "#fff" }),
            i("path", {
              d: "m2.5 1 1.5 2-1.5 2L1 3Zm0 5 1.5 2-1.5 2L1 8Zm0 5 1.5 2-1.5 2L1 13Zm0 5 1.5 2-1.5 2L1 18Z",
              fill: "#cf2028",
            }),
          ],
        });
  }

  return i("svg", {
        viewBox: "0 0 28 20",
        "aria-hidden": "true",
        children: [
          i("rect", { width: "28", height: "20", rx: "3", fill: "#fff" }),
          i("path", { d: "M0 7h28v6H0z", fill: "#2459cf" }),
          i("path", { d: "M0 13h28v7H0z", fill: "#e34551" }),
        ],
      });
}
function CE({ country: e, digits: t, error: n, disabled: r, onChange: o }) {
  const [s, a] = P(false);
  const c = O(null);
  const l = O(null);
  const u = O(null);
  const d = O([]);
  const [f, p] = P([e]);
  M(() => {
    const g = new AbortController();

    fetch("/api/v1/auth/phone/config", {
      signal: g.signal,
      cache: "no-store",
    })
      .then((_) => {
        if (!_.ok) {
          throw new Error("Phone configuration unavailable");
        }
        return _.json();
      })
      .then((_) => {
        const v = _.regions
          .map(S => S.region.toLowerCase())
          .filter(S => Object.hasOwn(ut, S));
        p(v);
      })
      .catch(() => {});

    return () => g.abort();
  }, []);
  const ut_e = ut[e];
  M(() => {
    if (!s) {
      return;
    }
    const g = (_) => {
      if (!c.current?.contains(_.target)) {
        a(false);
      }
    };
    document.addEventListener("pointerdown", g);

    return () => document.removeEventListener("pointerdown", g);
  }, [s]);

  const m = (g) => {
    a(false);

    if (g !== e) {
      o(g, "", "");
    }

    u.current?.focus();
  };

  const y = (g) => {
    const _ = eE(g, e);
    o(_.country, _.digits, _.error);
    return _;
  };

  return i(Ie, {
    children: [
      i("label", {
        className: fe.label,
        htmlFor: "verification-phone",
        children: "Номер телефона",
      }),
      i("div", {
        ref: c,
        className: fe.phoneSelect,
        onKeyDown: (g) => {
          if (s &&
            g.key === "Escape") {
            g.preventDefault();
            g.stopPropagation();
            a(false);
            l.current?.focus();
          }
        },
        children: [
          i("div", {
            className: fe.phoneField,
            "data-invalid": !!n,
            children: [
              i("button", {
                ref: l,
                type: "button",
                className: fe.countryTrigger,
                disabled: r,
                "aria-label": `Код страны: ${ut_e.name} ${ut_e.prefix}`,
                "aria-haspopup": "listbox",
                "aria-expanded": s,
                "aria-controls": "phone-countries",
                onClick: () => a(g => !g),
                onKeyDown: (g) => {
                  if (["ArrowDown", "ArrowUp"].includes(g.key)) {
                    g.preventDefault();
                    a(true);

                    requestAnimationFrame(() => d.current[f.indexOf(e)]?.focus()
                    );
                  }
                },
                children: [
                  i("span", {
                    className: fe.flag,
                    children: i(oc, { country: e }),
                  }),
                  i("span", { children: ut_e.prefix }),
                  i("svg", {
                    className: fe.chevron,
                    viewBox: "0 0 16 16",
                    "aria-hidden": "true",
                    children: i("path", { d: "m4 6 4 4 4-4" }),
                  }),
                ],
              }),
              i("input", {
                ref: u,
                id: "verification-phone",
                type: "tel",
                inputMode: "numeric",
                autoComplete: "tel-national",
                className: fe.phone,
                value: t,
                maxLength: ut_e.length,
                placeholder: ut_e.placeholder,
                disabled: r,
                "aria-invalid": !!n,
                "aria-describedby": n ? "phone-error" : undefined,
                onInput: (g) => {
                  g.currentTarget.value = y(g.currentTarget.value).digits;
                },
                onPaste: (g) => {
                  if (!g.clipboardData) {
                    return;
                  }
                  g.preventDefault();
                  const _ = g.clipboardData.getData("text");
                  const g_currentTarget = g.currentTarget;
                  const S = _.replace(/[\s()-]/g, "");

                  const N =
                    _.trim().startsWith("+") ||
                    /^[78]\d{10}$/.test(S) ||
                    /^375\d{9}$/.test(S);

                  y(
                    N
                      ? _
                      : t.slice(0, g_currentTarget.selectionStart ?? t.length) +
                          _ +
                          t.slice(g_currentTarget.selectionEnd ?? t.length)
                  );
                },
              }),
            ],
          }),
          s &&
            i("div", {
              id: "phone-countries",
              className: fe.countryMenu,
              role: "listbox",
              "aria-label": "Код страны",
              onBlur: (g) => {
                if (!g.currentTarget.contains(g.relatedTarget)) {
                  a(false);
                }
              },
              children: f.map((g, _) => i(
                "button",
                {
                  ref: (v) => {
                    d.current[_] = v;
                  },
                  type: "button",
                  role: "option",
                  "aria-selected": e === g,
                  className: fe.countryOption,
                  onClick: () => m(g),
                  onKeyDown: (v) => {
                    if (
                      ["ArrowDown", "ArrowUp", "Home", "End"].includes(v.key)
                    ) {
                      v.preventDefault();
                      const S =
                        v.key === "Home"
                          ? 0
                          : v.key === "End"
                          ? f.length - 1
                          : (_ + (v.key === "ArrowUp" ? -1 : 1) + f.length) %
                            f.length;
                      d.current[S]?.focus();
                    }
                  },
                  children: [
                    i("span", {
                      className: fe.flag,
                      children: i(oc, { country: g }),
                    }),
                    i("span", {
                      className: fe.countryName,
                      children: ut[g].name,
                    }),
                    i("span", {
                      className: fe.countryPrefix,
                      children: ut[g].prefix,
                    }),
                    i("span", {
                      className: fe.countryCheck,
                      children: e === g ? "✓" : "",
                    }),
                  ],
                },
                g
              )
              ),
            }),
        ],
      }),
    ],
  });
}
function NE({ onClose: e }) {
  const [t, n] = P("ru");
  const [r, o] = P("");
  const [s, a] = P("");
  const [c, l] = P(null);
  const [u, d] = P(0);
  const [f, p] = P(null);
  const [h, m] = P([]);
  const [y, g] = P(false);
  const [_, v] = P("");
  const [S, N] = P(0);
  const [w, b] = P(0);
  const [R, k] = P(false);
  const [C, E] = P(true);
  const [A, I] = P(false);
  const [L, W] = P(false);
  const K = O(true);
  const ce = O(false);

  const me = T(D => l(D), []);

  const ae = T(() => l(null), []);

  M(
    () => {
      (K.current = true);

      $t
        .methods()
        .then(async (D) => {
        if (!K.current || !D.phone) {
          return;
        }
        I(true);
        const H = await $t.sync();

        if (K.current &&
          H.success) {
          k(true);

          ye
            .getState()
            .fetchProfile()
            .catch(() => {});
        }
      })
        .catch((D) => {
        if (K.current) {
          v(tc(D));
        }
      })
        .finally(() => {
        if (K.current) {
          E(false);
        }
      });

      return () => {
        K.current = false;
      };
    },
    []
  );

  M(() => {
    const D = () => b(Math.max(0, Math.ceil((S - Date.now()) / 1000/* 1e3 */)));
    D();
    const H = window.setInterval(D, 1000/* 1e3 */);
    return () => clearInterval(H);
  }, [S]);

  const G = async (D) => {
      if (!ce.current) {
        (ce.current = true);
        g(true);
        v("");
        try {
          await D();
        } catch (H) {
          if (!K.current) {
            return;
          }
          v(tc(H));

          if (H instanceof oi) {
            H.retryIn && N(Date.now() + H.retryIn * 1000/* 1e3 */);

            [
              "OTP_EXPIRED",
              "OTP_MAX_ATTEMPTS",
              "INVALID_FLOW_TOKEN",
            ].includes(H.code) && W(true);
          }
        } finally {
          (ce.current = false);

          if (K.current) {
            g(false);
          }
        }
      }
    };

  const J = (D) => {
    D.preventDefault();
    const H = rc(t, r);
    if (!H || s) {
      v(s || qu(t));
      return;
    }
    if (!c || y || w > 0) {
      return;
    }
    const Y = c;
    l(null);

    G(async () => {
      try {
        const oe = await $t.attach(H, Y);
        if (!K.current) {
          return;
        }
        p({ phone: H, token: oe.flowToken, delivery: oe });
        N(Date.now() + oe.retryIn * 1000/* 1e3 */);
        m(Array(oe.codeLength).fill(""));
        W(false);
      } finally {
        if (K.current) {
          d(oe => oe + 1);
        }
      }
    });
  };

  const re = (D) => {
    D.preventDefault();

    if (!(!f || y || L || h.some(H => !H))) {
      G(async () => {
        if (!(await $t.verify(f.phone, h.join(""), f.token)).success) {
          throw new Error("Attachment was not confirmed");
        }
        if (!K.current) {
          return;
        }
        I(true);

        if (!(await $t.sync()).success) {
          throw new Error("Profile was not confirmed");
        }

        if (K.current) {
          k(true);
          m([]);

          ye
            .getState()
            .fetchProfile()
            .catch(() => {});
        }
      });
    }
  };

  const j = () => {
    if (f && !y && w <= 0 && !L) {
      G(async () => {
        const D = await $t.resend(f.phone, f.token);

        if (K.current) {
          p({ ...f, delivery: D });
          N(Date.now() + D.retryIn * 1000/* 1e3 */);
          m(Array(D.codeLength).fill(""));
        }
      });
    }
  };

  const ge = () => {
    if (!y) {
      p(null);
      m([]);
      v("");
      W(false);
      l(null);
      d(D => D + 1);
    }
  };

  const he = f?.delivery.codeLength ?? 4;
  const x = f?.delivery.channel === "sms";
  const F = f?.delivery.channel === "voice_call";
  const z = f?.delivery.channel === "push";
  return i(hn, {
    onClose: e,
    title: "Подтверждение телефона",
    className: fe.modal,
    children: i("div", {
      className: fe.content,
      children: [
        i("div", {
          className: `${fe.symbol} ${f && !R && !A ? fe.ringing : ""}`,
          "aria-hidden": "true",
          children: R
            ? i("svg", {
                viewBox: "0 0 32 32",
                children: i("path", { d: "m7 16 6 6L25 10" }),
              })
            : i("svg", {
                viewBox: "0 0 32 32",
                children: [
                  i("rect", {
                    x: "9",
                    y: "3",
                    width: "14",
                    height: "26",
                    rx: "4",
                  }),
                  i("path", { d: "M14 7h4M15 25h2M4 11v10M28 11v10" }),
                ],
              }),
        }),
        i("div", {
          className: fe.heading,
          children: [
            i("h2", {
              children: R
                ? "Номер подтверждён"
                : A
                ? "Завершаем подтверждение"
                : f
                ? x
                  ? "Отправили SMS"
                  : z
                  ? "Отправили уведомление"
                  : "Сейчас позвоним"
                : "Ваш номер телефона",
            }),
            i("p", {
              children: R
                ? "Всё готово — теперь можно публиковать посты и общаться."
                : A
                ? "Номер уже привязан к аккаунту. Осталось обновить профиль — новый звонок не нужен."
                : f
                ? x
                  ? "Введите код из сообщения."
                  : F
                  ? "Ответьте на звонок. Робот продиктует код подтверждения."
                  : z
                  ? "Посмотрите код в уведомлении на устройстве, где вы уже вошли в ИТД."
                  : `Отвечать не нужно. Введите последние ${he} цифры номера, с которого поступит звонок.`
                : "Позвоним и сразу сбросим. Подтвердите номер, чтобы публиковать посты, оставлять комментарии и писать в чатах.",
            }),
          ],
        }),
        R
          ? i(ke, { fullWidth: true, size: "lg", onClick: e, children: "Готово" })
          : C
          ? i("p", {
              className: fe.hint,
              role: "status",
              children: "Проверяем номер…",
            })
          : A
          ? i("div", {
              className: fe.form,
              children: [
                f &&
                  h.some(Boolean) &&
                  i(nc, {
                    value: h,
                    length: he,
                    onChange: m,
                    disabled: true,
                    status: "success",
                  }),
                i("p", { className: fe.error, role: "alert", children: _ }),
                i(ke, {
                  fullWidth: true,
                  size: "lg",
                  loading: y,
                  onClick: () => {
                    G(async () => {
                      const D = await $t.sync();

                      if (K.current &&
                        D.success) {
                        k(true);

                        ye
                          .getState()
                          .fetchProfile()
                          .catch(() => {});
                      }
                    });
                  },
                  children: "Завершить подтверждение",
                }),
              ],
            })
          : f
          ? i("form", {
              className: fe.form,
              onSubmit: re,
              children: [
                i("button", {
                  type: "button",
                  className: fe.number,
                  onClick: ge,
                  disabled: y,
                  "aria-label": "Изменить номер телефона",
                  children: [f.phone, " ", i("span", { children: "Изменить" })],
                }),
                i(nc, {
                  value: h,
                  length: he,
                  disabled: y || L,
                  status: _ ? "error" : "idle",
                  label:
                    x || F || z
                      ? "Код подтверждения"
                      : "Последние цифры номера звонящего",
                  onChange: (D) => {
                    m(D);
                    v("");
                  },
                }),
                i("p", { className: fe.error, role: "alert", children: _ }),
                L
                  ? i(ke, {
                      fullWidth: true,
                      size: "lg",
                      onClick: ge,
                      disabled: y,
                      children: "Начать заново",
                    })
                  : i(Ie, {
                      children: [
                        i(ke, {
                          type: "submit",
                          fullWidth: true,
                          size: "lg",
                          loading: y,
                          disabled: h.some(D => !D),
                          children: "Подтвердить номер",
                        }),
                        i("button", {
                          type: "button",
                          className: fe.resend,
                          onClick: j,
                          disabled: y || w > 0,
                          children:
                            w > 0
                              ? `Повторный звонок через ${w} с`
                              : "Позвонить снова",
                        }),
                      ],
                    }),
              ],
            })
          : i("form", {
              className: fe.form,
              onSubmit: J,
              children: [
                i(CE, {
                  country: t,
                  digits: r,
                  error: s || _,
                  disabled: y,
                  onChange: (D, H, Y) => {
                    if (D !== t) {
                      l(null);
                      d(oe => oe + 1);
                    }

                    n(D);
                    o(H);
                    a(Y);
                    v("");
                  },
                }),
                i("div", {
                  className: fe.captcha,
                  children: i(
                    j0,
                    {
                      theme:
                        document.documentElement.getAttribute("data-theme") ===
                        "dark"
                          ? "dark"
                          : "light",
                      onVerify: me,
                      onExpire: ae,
                      onError: ae,
                    },
                    u
                  ),
                }),
                i("p", {
                  className: fe.error,
                  id: "phone-error",
                  role: "alert",
                  children: s || _,
                }),
                i(ke, {
                  type: "submit",
                  fullWidth: true,
                  size: "lg",
                  loading: y,
                  disabled: !c || w > 0 || !!s || !rc(t, r),
                  children:
                    w > 0 ? `Повторить через ${w} с` : "Получить звонок",
                }),
                i("p", {
                  className: fe.hint,
                  children: "Звонок бесплатный. Номер не появится в профиле.",
                }),
              ],
            }),
      ],
    }),
  });
}
const sc = "phone-verification-required";
function IE() {
  const [e, t] = P(false);

  const n = ye(r => r.profile?.id ?? "");

  M(() => {
    const r = () => t(true);
    window.addEventListener(sc, r);

    return () => window.removeEventListener(sc, r);
  }, []);

  return e && n ? i(NE, { onClose: () => t(false) }, n) : null;
}
function Wn(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const ct = new ni(50, 300 * 1000/* 1e3 */);
const TE = 60 * 1000/* 1e3 */;
setInterval(() => ct.cleanup(), 120 * 1000/* 1e3 */);
function RE(e) {
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
function Mt(e) {
  const n = (e.attachments ?? []).map((d) => {
    if (d.type === "poll") {
      const f = d;

      const p = f.options.map(h => ({
        id: h.id,
        text: h.text,
        votes: h.votesCount ?? h.voteCount ?? h.votes ?? 0
      }));

      return {
        ...d,
        options: p,
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
    return d;
  });
  if (e.poll && !n.some(d => d.type === "poll")) {
    const e_poll = e.poll;

    const f = {
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

    n.push(f);
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
    author: RE(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: o, comments: s, reposts: a },
    reposted: l,
    originalPost: e.originalPost ? Mt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
    vs: typeof e.vs == "string" ? e.vs : undefined,
  };
}

const Me = {
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
      const s = await U.get(o);
      return { data: s.data.posts.map(Mt), nextCursor: Wn(s.data) };
    },
    async getPost(e) {
      const t = await U.get($.posts.single(e));
      return Mt(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const r = ct.get(n);
        const o = r && r.pinnedPostId === (t.pinnedPostId ?? null);

        if (r && o && ct.isFresh(n, TE)) {
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
      const n = ct.get(e);
      return !n || n.pinnedPostId !== (t ?? null)
        ? null
        : { data: n.posts, nextCursor: n.nextCursor };
    },
    async _fetchAndCacheWall(e, t, n) {
      const r = await this._fetchWall(e, t);

      ct.set(n, {
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
      const s = await U.get(o);
      return { data: s.data.posts.map(Mt), nextCursor: Wn(s.data) };
    },
    invalidateWallCache(e) {
      ct.delete(e);
    },
    updatePostInWallCache(e, t, n) {
      const r = ct.get(e);
      if (r) {
        const o = r.posts.map(s => s.id === t ? { ...s, ...n } : s);
        ct.set(e, { ...r, posts: o });
      }
    },
    removePostFromWallCache(e, t) {
      const n = ct.get(e);
      if (n) {
        const r = n.posts.filter(o => o.id !== t);
        ct.set(e, { ...n, posts: r });
      }
    },
    async likePost(e) {
      return await U.post($.posts.like(e));
    },
    async unlikePost(e) {
      return await U.delete($.posts.like(e));
    },
    async createPost(e) {
      return await U.post($.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
      });
    },
    async createRepost(e, t) {
      const n = await U.post($.posts.repost(e), { content: t });
      return Mt(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await U.post(`${$.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await U.put($.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await U.delete($.posts.delete(e));
    },
    async restorePost(e) {
      await U.post($.posts.restore(e));
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
      const s = await U.get(o);
      return { data: s.data.posts.map(Mt), nextCursor: Wn(s.data) };
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
      const s = await U.get(o);
      return { data: s.data.posts.map(Mt), nextCursor: Wn(s.data) };
    },
    async pinPost(e) {
      await U.post($.posts.pin(e));
    },
    async unpinPost(e) {
      await U.delete($.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await U.post($.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await U.delete($.posts.repost(e));
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
      const s = await U.get(o);
      return { data: s.data.posts.map(Mt), nextCursor: Wn(s.data) };
    },
  };

const kE = { new: "newest", old: "oldest", popular: "popular" };
function AE(e) {
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
function bs(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const o = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: AE(e.author),
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
        ? (e.previewReplies ?? e.replies).map(bs)
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
        n.set("sort", kE[t.sort]);
      }

      if (t.cursor) {
        n.set("cursor", t.cursor);
      }

      const r = n.toString();
      const o = `${$.posts.comments(e)}${r ? `?${r}` : ""}`;
      const s = await U.get(o);
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
      return { data: a.map(bs), nextCursor: c };
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
      const s = await U.get(o);
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
      return { data: a.map(bs), nextCursor: c };
    },
    async createComment(e, t, n, r, o) {
      return await U.post($.posts.comments(e), {
        content: t,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async createReply(e, t, n, r, o) {
      return await U.post($.comments.replies(e), {
        content: t,
        replyToUserId: r,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async editComment(e, t, n) {
      await U.patch($.comments.edit(e), { content: t });
    },
    async deleteComment(e) {
      await U.delete($.comments.delete(e));
    },
    async likeComment(e) {
      await U.post($.comments.like(e));
    },
    async unlikeComment(e) {
      await U.delete($.comments.like(e));
    },
  };

const te = ot((e, t) => ({
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
        const a = await Me.getFeed(r, { limit: 20 });
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
          error: $e(a) ? Ys(a.code, a.message) : "Не удалось загрузить ленту",
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
        const a = await Me.getFeed(n, { limit: 20, cursor: s ?? undefined });
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
    const c = ye.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const l = s.map(({ mediaId: p }) => p);

      const { id: u } = await Me.createPost({
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

      const d = s.map(({ url: p }, h) => ({
        id: `temp-${h}`,
        url: p,
        type: "image"
      }));

      if (a) {
        d.push({
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

      const f = {
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
        attachments: d,
        reactions: { total: 0, myReaction: null },
        stats: { views: 0, comments: 0, reposts: 0 },
        reposted: false,
        originalPost: null,
        dominantEmoji: null,
        createdAt: new Date().toISOString(),
        editedAt: null,
      };

      e(p => ({
        posts: [f, ...p.posts],
        highlightedPostId: u
      }));

      Me.invalidateWallCache(n);
      try {
        const p = await Me.getPost(u);
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
        const o = await Me.getPost(n);
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
    await Me.editPost(n, { text: r, spans: o });
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
      Me.updatePostInWallCache(l.wallOwnerId, n, {
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
      await Me.deletePost(n);
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
      const f = u.originalPost ? l(u.originalPost) : u.originalPost;
      return !d && f === u.originalPost
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
            originalPost: f,
          };
    };

    e((u) => {
      const d = { ...u.postStatsCache };
      for (const f of n) {
        const p = d[f.id];

        if (p) {
          (d[f.id] = {
              ...p,
              likesTotal: a(f.id) ? p.likesTotal : f.likesCount,
              commentsCount: f.commentsCount,
              repostsCount: f.repostsCount,
              viewsCount: f.viewsCount,
              dominantEmoji: f.dominantEmoji,
            });
        }
      }
      return {
        posts: u.posts.map(l),
        currentPost: u.currentPost ? l(u.currentPost) : u.currentPost,
        postStatsCache: d,
        _lastStatsBatch: n.map(f => a(f.id)
          ? { ...f, likesCount: d[f.id]?.likesTotal ?? f.likesCount }
          : f
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

      const f = {
        ...l,
        options: u,
        totalVotes: (l.totalVotes ?? 0) + d,
        myVote: r,
      };

      const p = [...a.attachments];
      (p[c] = f);
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

    ne(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => xE
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

const xo = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: te },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Vr = ot()(
  wu(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: Gs(() => localStorage) }
  )
);

const Ye = new Map();
const OE = 60 * 1000/* 1e3 */;
const PE = 300 * 1000/* 1e3 */;
const ic = 20;
const ac = 500;
function LE() {
  const e = Date.now();
  for (const [t, n] of Ye.entries()) {
    if (e - n.timestamp > PE) {
      Ye.delete(t);
    }
  }
  if (Ye.size > ic) {
    const t = Array.from(Ye.entries()).sort(
      (r, o) => r[1].timestamp - o[1].timestamp
    );
    t.slice(0, t.length - ic).forEach(([r]) => Ye.delete(r));
  }
}

const Ut = ot((e, t) => ({
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
    const { usePostsStore: r } = await ne(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => xo);
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
    LE();
    const s = Vr.getState().commentsSort;
    const a = n;
    const c = Ye.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < OE) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        st
          .getComments(n, { limit: 100, sort: s })
          .then((d) => {
          const d_data = d.data;

          Ye.set(a, {
            comments: d_data,
            hasMore: d.nextCursor !== null,
            nextCursor: d.nextCursor,
            timestamp: Date.now(),
            sort: s,
          });

          e(p => p.comments.length > 0 && p.comments[0]?.postId === n
            ? {
                comments: d_data,
                commentsNextCursor: d.nextCursor,
                commentsHasMore: d.nextCursor !== null,
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
    const a = Vr.getState().commentsSort;
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
          comments: u.length > ac ? u.slice(-ac) : u,
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

    let o = r.findIndex(y => y.id === n);

    let s = false;
    let a = -1;
    let c = -1;
    if (o === -1) {
      for (let y = 0; y < r.length; y++) {
        const _ = (r[y].previewReplies ?? []).findIndex(v => v.id === n);
        if (_ !== -1) {
          (s = true);
          (a = y);
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
    const f = u !== null;
    const p = f ? Math.max(0, d - 1) : d + 1;
    const h = f ? null : "love";
    const m = [...r];
    if (s) {
      const y = [...(m[a].previewReplies ?? [])];
      (y[c] = { ...y[c], reactions: { total: p, myReaction: h } });
      (m[a] = { ...m[a], previewReplies: y });
    } else {
      m[o] = { ...m[o], reactions: { total: p, myReaction: h } };
    }
    e({ comments: m });
    try {
      if (f) {
        await st.unlikeComment(n);
      } else {
        await st.likeComment(n);
      }
    } catch (y) {
      console.error("Failed to toggle comment like:", y);
      const g = [...t().comments];
      if (s) {
        const _ = g.findIndex(v => v.previewReplies?.some(S => S.id === n)
        );
        if (_ !== -1) {
          const v = g[_].previewReplies.findIndex(S => S.id === n);
          if (v !== -1) {
            const S = [...g[_].previewReplies];
            (S[v] = { ...S[v], reactions: { total: d, myReaction: u } });
            (g[_] = { ...g[_], previewReplies: S });
          }
        }
      } else {
        const _ = g.findIndex(v => v.id === n);

        if (_ !== -1) {
          (g[_] = { ...g[_], reactions: { total: d, myReaction: u } });
        }
      }
      e({ comments: g });
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

      const d = ye.getState().profile;
      if (d) {
        const y = (u.attachments || [])
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

        const g = {
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
          attachments: y,
          replyTo: u.replyTo ?? l ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          s
            ? _ => ({
            comments: _.comments.map(v => v.id === s
              ? {
                  ...v,
                  previewReplies: [...(v.previewReplies || []), g],
                  stats: { ...v.stats, replies: v.stats.replies + 1 },
                }
              : v
            ),

            highlightedCommentId: u.id
          })
            : _ => ({
            comments: [g, ..._.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: f } = await ne(async () => {
          const { usePostsStore: y } = await Promise.resolve().then(() => xo);
          return { usePostsStore: y };
        }, undefined);

      const p = f.getState();

      if (p.currentPost &&
        p.currentPost.id === n) {
        f.setState({
          currentPost: {
            ...p.currentPost,
            stats: {
              ...p.currentPost.stats,
              comments: p.currentPost.stats.comments + 1,
            },
          },
        });
      }

      const h = Vr.getState().commentsSort;
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

    const { usePostsStore: c } = await ne(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => xo);
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

const xE = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Ut },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const eo = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const $E = 0;
const ME = 1;
const DE = 2;
const UE = 3;
const cc = 4;
const FE = 5;
const HE = 250;
const BE = 0.5;
const VE = 30000/* 3e4 */;
const WE = 2000/* 2e3 */;
const jE = 20;
const lc = "dwell_sid";

const zE = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function qE() {
  try {
    let e = sessionStorage.getItem(lc);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(lc, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function GE(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= BE ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class YE {
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
    (this.sessionId = qE());

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
        { threshold: zE }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const r of n) {
      window.addEventListener(r, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const r = document.hidden ? DE : null;
      this.evaluateAll(r);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(ME);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(UE);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), WE);
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
        this.evaluate(c, cc);
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
      this.evaluate(r, cc);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < VE && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const o = !!t_lastEntry && GE(t_lastEntry);
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

      if (u < HE) {
        return;
      }

      const d = n ?? (o ? FE : $E);
      const f = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const p = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: d, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (p) {
        (h.s = eo[t.source]);
      }

      if (f) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, eo[t.source]);
    }
  }
  enqueue(t, n, r) {
    this.buffer.push(t);

    if (this.buffer.length >= jE) {
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
    U.post($.posts.dwellLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    U.post(
      $.posts.dwellLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const uc = new YE();
function KE(e, t, n, r = "", o = undefined) {
  M(() => {
    const t_current = t.current;
    if (!(!t_current || !o)) {
      uc.observe(t_current, e, n, r, o);

      return () => {
        uc.unobserve(t_current);
      };
    }
  }, [e, t, n, r, o]);
}
function ii(e) {
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
const Gu = "shop-cart";
function dc() {
  try {
    const e = localStorage.getItem(Gu);
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
function Yu() {
  const [e, t] = P(dc);

  M(() => {
    const n = (r) => {
      if (r.key === null || r.key === Gu) {
        t(dc());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}

const XE = ie(() => ne(() => import("./index-jdSZMRYQ.js"), __vite__mapDeps([12, 13])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const QE = ie(() => ne(
  () => import("./index-IG9jWvj0.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const Ku = ({
  href: e,
  icon: t,
  children: n,
  badge: r,
  onActiveClick: o,
  isActive: s = false,
}) => {
  const [a] = _r();
  const c = a.url || "/";
  const u = c === e || c.startsWith(`${e}/`) || s;
  return i("a", {
    href: e,
    className: `${Le.navItem} ${u ? Le.active : ""}`,
    onClick: (d) => {
      if (u && o) {
        d.preventDefault();
        o();
      }
    },
    children: [
      i("span", {
        className: Le.iconWrapper,
        children: [
          t,
          r !== undefined &&
            r > 0 &&
            i("span", { className: Le.badge, children: r > 99 ? "99+" : r }),
        ],
      }),
      i("span", { children: n }),
    ],
  });
};

const Ar = e => i(Ku, { ...e });

const ZE = () => {
  const [e] = _r();

  const t = te(w => w.fetchFeed);

  const n = te(w => w.isRefreshing);

  const r = ye(w => w.logout);

  const o = go();
  const s = si();
  const a = Vu();
  const c = Yu();
  const { initialize: l, disconnectSSE: u } = dn();
  const [d, f] = P(false);
  const [p, h] = P(false);
  const m = Tu();

  const y = Ks(w => w.fetchPortal);

  const g = s?.username ? `/@${s.username}` : "/profile";

  M(
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

  M(() => {
    y();
  }, [y]);

  const _ = T(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      t(true);
    }
  }, [t]);

  const v = T(() => {
    r();
  }, [r]);

  const S = be(() => {
    const w = e.url || "/";
    return ti.some(b => w.startsWith(b));
  }, [e.url]);

  const N = be(() => {
    const w = e.url || "/";
    return s?.username
      ? w === `/@${s.username}` || w.startsWith(`/@${s.username}/`)
      : false;
  }, [e.url, s?.username]);

  return S
    ? null
    : i("aside", {
        className: Le.aside,
        children: [
          i("div", {
            className: Le.asideTop,
            children: [
              i("div", {
                className: Le.asideBrand,
                children: [
                  i(Cy, {}),
                  i("button", {
                    className: Le.asideBrandVersion,
                    onClick: () => f(true),
                    title: "Что нового",
                    children: ["v", "1.1.2"],
                  }),
                ],
              }),
              i("nav", {
                className: Le.nav,
                children: [
                  i(Ar, {
                    href: "/",
                    icon: n ? i(Zs, {}) : i(Lu, {}),
                    onActiveClick: _,
                    children: "Лента",
                  }),
                  i(Ar, {
                    href: "/search",
                    icon: i(Uu, {}),
                    children: "Поиск",
                  }),
                  i(Ly, {
                    path: "/event",
                    children: ({ matches: w }) => i("a", {
                      href: m.active && m.url ? m.url : "/event",
                      target: m.active && m.url ? "_blank" : undefined,
                      rel:
                        m.active && m.url ? "noopener noreferrer" : undefined,
                      className: `${Le.portalButton} ${
                        m.active ? Le.portalActive : ""
                      } ${w ? Le.active : ""}`,
                      title: "Ивент",
                      children: [
                        i("img", {
                          src: m.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: Le.portalImage,
                        }),
                        i("span", { children: "Ивент" }),
                      ],
                    }),
                  }),
                  i(Ar, {
                    href: "/notifications",
                    icon: i(Du, {}),
                    badge: a,
                    children: "Уведомления",
                  }),
                  i(Ku, {
                    href: g,
                    icon: i(vs, {}),
                    isActive: N,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: Le.asideBottom,
            children: o
              ? i(Ie, {
                  children: [
                    i("button", {
                      className: Le.logoutButton,
                      onClick: v,
                      children: [
                        i(Iy, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: Le.logoutButton,
                  href: ue.LOGIN,
                  children: [
                    i(vs, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          d &&
            i(Te, {
              fallback: null,
              children: i(XE, { isOpen: d, onClose: () => f(false) }),
            }),
          p &&
            i(Te, {
              fallback: null,
              children: i(QE, { isOpen: p, onClose: () => h(false) }),
            }),
        ],
      });
};

const JE = "RRqZ";
const ew = "vt4s";
const tw = "rIP2";
const nw = "fIZm";
const jn = { sidebar: JE, sidebarContent: ew, sidebarBottom: tw, legalLinks: nw };

const rw = () => {
  const [e] = _r();
  return be(() => {
    const n = e.url || "/";
    return ti.some(r => n.startsWith(r));
  }, [e.url])
    ? null
    : i("aside", {
        className: jn.sidebar,
        children: [
          i("div", { className: jn.sidebarContent }),
          i("div", {
            className: jn.sidebarBottom,
            children: [
              i("ul", {
                className: jn.legalLinks,
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
                className: jn.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const ow = "AyYB";
const sw = "xhYP";
const iw = "HKcM";
const aw = "VVK8";
const cw = "BN3a";
const lw = "pQ5B";
const uw = "E41E";
const dw = "foEs";
const fw = "Uj8s";
const pw = "soTN";
const hw = "CEVG";
const mw = "KTyI";

const Fe = {
  mobileNavigationWrapper: ow,
  navigation: sw,
  indicator: iw,
  indicatorHidden: aw,
  navItem: cw,
  label: lw,
  active: uw,
  createButton: dw,
  iconWrapper: fw,
  portalImage: pw,
  portalImageActive: hw,
  badge: mw,
};

const fc = e => Symbol.iterator in e;

const pc = e => "entries" in e;

const hc = (e, t) => {
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

const gw = (e, t) => {
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

function _w(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : fc(e) && fc(t)
    ? pc(e) && pc(t)
      ? hc(e, t)
      : gw(e, t)
    : hc(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function mc(e) {
  const t = Kn.useRef(undefined);
  return (n) => {
    const r = e(n);
    return _w(t.current, r) ? t.current : (t.current = r);
  };
}
const yw = "kIfq";
const vw = "uWFG";
const Ew = "tJAj";
const ww = "welM";
const Sw = "SUto";
const bw = "Z20m";
const Cw = "F645";
const Nw = "F9mg";
const Iw = "peAV";
const Tw = "AeyK";
const Rw = "r3oH";
const kw = "ay7z";
const Aw = "Gfz9";
const Ow = "yUHg";
const Pw = "MBJK";
const Lw = "Zz0D";
const xw = "lUBj";
const $w = "ZwsN";
const Mw = "Km5s";
const Dw = "Htk4";
const Uw = "sMrf";
const Fw = "U23O";
const Hw = "UoIG";

const Z = {
  skeleton: yw,
  comment: vw,
  content: Ew,
  header: ww,
  headerLeft: Sw,
  body: bw,
  actions: Cw,
  likeBtn: Nw,
  shimmer: Iw,
  avatar: Tw,
  more: Rw,
  likeIcon: kw,
  name: Aw,
  time: Ow,
  line: Pw,
  w100: Lw,
  w85: xw,
  w65: $w,
  w50: Mw,
  w40: Dw,
  replyLabel: Uw,
  likeCount: Fw,
  list: Hw,
};

function Bw(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: Z.body,
          children: i("div", { className: `${Z.shimmer} ${Z.line} ${Z.w50}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: Z.body,
          children: [
            i("div", { className: `${Z.shimmer} ${Z.line} ${Z.w100}` }),
            i("div", { className: `${Z.shimmer} ${Z.line} ${Z.w65}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: Z.body,
          children: [
            i("div", { className: `${Z.shimmer} ${Z.line} ${Z.w100}` }),
            i("div", { className: `${Z.shimmer} ${Z.line} ${Z.w85}` }),
            i("div", { className: `${Z.shimmer} ${Z.line} ${Z.w40}` }),
          ],
        });
      }
  }
}
function ai({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("div", {
    className: Z.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: Z.comment,
      children: [
        i("div", { className: `${Z.shimmer} ${Z.avatar}` }),
        i("div", {
          className: Z.content,
          children: [
            i("div", {
              className: Z.header,
              children: [
                i("div", {
                  className: Z.headerLeft,
                  children: [
                    i("div", { className: `${Z.shimmer} ${Z.name}` }),
                    i("div", { className: `${Z.shimmer} ${Z.time}` }),
                  ],
                }),
                i("div", { className: `${Z.shimmer} ${Z.more}` }),
              ],
            }),
            Bw(e),
            i("div", {
              className: Z.actions,
              children: [
                i("div", { className: `${Z.shimmer} ${Z.replyLabel}` }),
                i("div", {
                  className: Z.likeBtn,
                  children: [
                    i("div", { className: `${Z.shimmer} ${Z.likeIcon}` }),
                    i("div", { className: `${Z.shimmer} ${Z.likeCount}` }),
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
const gc = ["medium", "short", "long", "medium", "short"];
function Vw({ count: e = 4 }) {
  return i("div", {
    className: Z.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(ai, { variant: gc[n % gc.length], delayMs: n * 120 }, n)
    ),
  });
}

const bt = {
    MAX_CHARS: 1000/* 1e3 */,
    MIN_POLL_OPTIONS: 2,
    MAX_POLL_OPTIONS: 10,
    MAX_POLL_QUESTION_LENGTH: 200,
    MAX_POLL_OPTION_LENGTH: 100,
    MAX_TEXTAREA_HEIGHT: 400,
  };

const $o = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function Ww() {
  const [e, t] = P(false);
  const [n, r] = P($o);

  const o = T((m) => {
    if (m.length <= bt.MAX_POLL_QUESTION_LENGTH) {
      r(y => ({
        ...y,
        question: m
      }));
    }
  }, []);

  const s = T((m, y) => {
    if (y.length <= bt.MAX_POLL_OPTION_LENGTH) {
      r(g => ({
        ...g,
        options: g.options.map(_ => _.id === m ? { ..._, text: y } : _)
      }));
    }
  }, []);

  const a = T(() => {
    if (n.options.length < bt.MAX_POLL_OPTIONS) {
      r(m => ({
        ...m,
        options: [...m.options, { id: Date.now().toString(), text: "" }]
      }));
    }
  }, [n.options.length]);

  const c = T(
    (m) => {
      if (n.options.length > bt.MIN_POLL_OPTIONS) {
        r(y => ({
          ...y,
          options: y.options.filter(g => g.id !== m)
        }));
      }
    },
    [n.options.length]
  );

  const l = T(() => {
    r(m => ({
      ...m,
      multipleChoice: !m.multipleChoice
    }));
  }, []);

  const u = T(() => {
    t(false);
    r($o);
  }, []);

  const d = T(() => {
    t(m => !m);
  }, []);

  const f = T(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const y = n.options.filter(g => g.text.trim().length > 0);

    return m && y.length >= bt.MIN_POLL_OPTIONS;
  }, [e, n]);

  const p = T(() => {
    if (!(!e || !f())) {
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
  }, [e, f, n]);

  const h = T(() => {
    t(false);
    r($o);
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
    isPollValid: f,
    getPollData: p,
    resetPoll: h,
  };
}
function Xu(e = 10, t = false) {
  const [n, r] = P([]);
  const [o, s] = P([]);
  const a = O(null);
  const c = O(n);
  const l = O(o);
  (c.current = n);
  (l.current = o);

  M(
    () => () => {
      c.current.forEach(S => URL.revokeObjectURL(S.previewUrl));

      l.current.forEach(S => URL.revokeObjectURL(S.previewUrl));
    },
    []
  );

  const u = o.length > 0;

  const d = n.some(S => S.type === "video") || o.some(S => S.type === "video");

  const f = n.some(S => S.type === "image") || o.some(S => S.type === "image");

  const p = T(() => {
    a.current?.click();
  }, []);

  const h = T(
    async (S) => {
      const N = Sn.isValidVideoType(S);
      const w = Sn.isValidImageType(S);
      if (N && !t) {
        wt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!w && !N) {
        wt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const k =
        c_current.some(L => L.type === "video") ||
        l_current.some(L => L.type === "video");

      const C =
        c_current.some(L => L.type === "image") ||
        l_current.some(L => L.type === "image");

      if (N && C) {
        wt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (w && k) {
        wt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (N && k) {
        wt.error("Можно загрузить только 1 видео");
        return;
      }
      const E = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const A = URL.createObjectURL(S);
      const I = N ? "video" : "image";
      s(L => [
        ...L,
        { id: E, file: S, previewUrl: A, progress: 0, type: I },
      ]);
      try {
        const L = await Sn.uploadMedia(S);

        s(W => W.filter(K => K.id !== E));

        r(W => [
          ...W,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: L.id,
            url: L.url,
            previewUrl: A,
            type: I,
          },
        ]);
      } catch (L) {
        let W = "Ошибка загрузки";

        if ($e(L)) {
          (W = Ys(L.code, L.message));
        } else if (L instanceof Error) {
          (W = L.message);
        }

        wt.error(W);

        s(K => K.filter(ce => ce.id !== E));

        URL.revokeObjectURL(A);
      }
    },
    [t]
  );

  const m = T(
    (S) => {
      const S_target = S.target;
      const S_target_files = S_target.files;
      if (!S_target_files || S_target_files.length === 0) {
        return;
      }
      const b = n.length + o.length;
      const R = e - b;
      if (R <= 0) {
        return;
      }
      Array.from(S_target_files).slice(0, R).forEach(h);
      (S_target.value = "");
    },
    [n.length, o.length, e, h]
  );

  const y = T((S) => {
    r((N) => {
      const w = N.find(b => b.id === S);

      if (w) {
        URL.revokeObjectURL(w.previewUrl);
      }

      return N.filter(b => b.id !== S);
    });

    s((N) => {
      const w = N.find(b => b.id === S);

      if (w) {
        URL.revokeObjectURL(w.previewUrl);
      }

      return N.filter(b => b.id !== S);
    });
  }, []);

  const g = T(
    (S) => {
      const N = S.filter(R => t ? Sn.isValidMediaType(R) : Sn.isValidImageType(R)
      );
      if (N.length === 0) {
        return;
      }
      const w = c.current.length + l.current.length;
      const b = e - w;

      if (b > 0) {
        N.slice(0, b).forEach(h);
      }
    },
    [e, h, t]
  );

  const _ = T(
    async (S) => {
      const [N, w] = S.split(",");
      const b = N.match(/:(.*?);/)?.[1] || "image/png";
      const R = atob(w);
      const k = new Uint8Array(R.length);
      for (let A = 0; A < R.length; A++) {
        k[A] = R.charCodeAt(A);
      }
      const C = new Blob([k], { type: b });
      const E = new File([C], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(E);
    },
    [h]
  );

  const v = T(() => {
    n.forEach(S => URL.revokeObjectURL(S.previewUrl));

    o.forEach(S => URL.revokeObjectURL(S.previewUrl));

    r([]);
    s([]);
  }, [n, o]);

  return {
    images: n,
    uploadingImages: o,
    isUploading: u,
    hasVideo: d,
    hasImages: f,
    openFilePicker: p,
    removeImage: y,
    addImage: _,
    uploadFiles: g,
    clearAll: v,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const jw = "eg1p";
const zw = "PSpL";
const qw = "QiVg";
const Gw = "zczD";
const Yw = "jfNA";
const Kw = "RKei";
const Xw = "mvr8";
const Qw = "B7x4";
const Zw = "qvj2";
const Jw = "IVzo";
const eS = "MFmJ";
const tS = "txHY";
const nS = "V5mP";
const rS = "lsrE";
const oS = "C0mN";
const sS = "cHqS";
const iS = "o5OB";
const aS = "Pahr";
const cS = "qkyT";
const lS = "jbgD";
const uS = "Z4Lt";
const dS = "jnx9";
const fS = "QQ4F";
const pS = "jJDa";
const hS = "k36e";
const mS = "HgW8";
const gS = "G3rM";
const _S = "IQp8";
const yS = "G5VW";
const vS = "YDjf";
const ES = "frnn";
const wS = "HIgW";
const SS = "Pw5j";
const bS = "VoQv";
const CS = "WY7h";

const ee = {
  form: jw,
  dragActive: zw,
  whatsNew: qw,
  editor: Gw,
  dragOverlay: Yw,
  attachments: Kw,
  attachmentPreview: Xw,
  uploading: Qw,
  uploadError: Zw,
  videoPreviewWrapper: Jw,
  videoPlayIcon: eS,
  uploadOverlay: tS,
  spinner: nS,
  errorOverlay: rS,
  errorText: oS,
  removeAttachment: sS,
  actions: iS,
  mediaButtons: aS,
  mediaButton: cS,
  submitGroup: lS,
  charCount: uS,
  error: dS,
  pollContainer: fS,
  pollHeader: pS,
  pollTitle: hS,
  pollClose: mS,
  pollQuestion: gS,
  pollOptions: _S,
  pollOptionRow: yS,
  pollOption: vS,
  removeOption: ES,
  addOption: wS,
  pollFooter: SS,
  pollToggle: bS,
  active: CS,
};

function _c({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: ee.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: ee.videoPlayIcon,
            children: i(Ey, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function Qu({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: ee.attachments,
        children: [
          e.map(o => i(
            "div",
            {
              className: ee.attachmentPreview,
              children: [
                i(_c, { src: o.previewUrl, type: o.type }),
                i("button", {
                  className: ee.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(pt, {}),
                }),
              ],
            },
            o.id
          )
          ),
          t.map(o => i(
            "div",
            {
              className: `${ee.attachmentPreview} ${
                o.error ? ee.uploadError : ee.uploading
              }`,
              children: [
                i(_c, { src: o.previewUrl, type: o.type }),
                !o.error &&
                  i("div", {
                    className: ee.uploadOverlay,
                    children: i("div", { className: ee.spinner }),
                  }),
                o.error &&
                  i("div", {
                    className: ee.errorOverlay,
                    children: i("span", {
                      className: ee.errorText,
                      children: o.error,
                    }),
                  }),
                i("button", {
                  className: ee.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(pt, {}),
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
function NS({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: r,
  onRemoveOption: o,
  onMultipleChoiceToggle: s,
  onClose: a,
}) {
  return i("div", {
    className: ee.pollContainer,
    children: [
      i("div", {
        className: ee.pollHeader,
        children: [
          i("span", { className: ee.pollTitle, children: "Опрос" }),
          i("button", {
            className: ee.pollClose,
            onClick: a,
            children: i(pt, {}),
          }),
        ],
      }),
      i("input", {
        type: "text",
        className: ee.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: c => t(c.target.value),
      }),
      i("div", {
        className: ee.pollOptions,
        children: e.options.map((c, l) => i(
          "div",
          {
            className: ee.pollOptionRow,
            children: [
              i("input", {
                type: "text",
                className: ee.pollOption,
                placeholder: `Вариант ${l + 1}`,
                value: c.text,
                maxLength: 50,
                onInput: u => n(c.id, u.target.value),
              }),
              e.options.length > bt.MIN_POLL_OPTIONS &&
                i("button", {
                  className: ee.removeOption,
                  onClick: () => o(c.id),
                  children: i(pt, {}),
                }),
            ],
          },
          c.id
        )
        ),
      }),
      e.options.length < bt.MAX_POLL_OPTIONS &&
        i("button", {
          className: ee.addOption,
          onClick: r,
          children: [i(Js, {}), i("span", { children: "Добавить вариант" })],
        }),
      i("div", {
        className: ee.pollFooter,
        children: i("label", {
          className: ee.pollToggle,
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
const IS = "ORmY";
const TS = "suij";
const RS = "Ll9V";
const kS = "tioX";
const AS = "zvmO";
const OS = "I9dA";
const PS = "Iu1f";
const LS = "ErvJ";
const xS = "TWQ6";
const $S = "U0cc";
const MS = "bgku";
const DS = "BUsY";
const US = "SRKu";
const FS = "KALW";
const HS = "ghu7";
const BS = "Pxia";

const De = {
  editor: IS,
  empty: TS,
  bold: RS,
  italic: kS,
  underline: AS,
  strike: OS,
  spoiler: PS,
  monospace: LS,
  quote: xS,
  link: $S,
  menu: MS,
  buttons: DS,
  button: US,
  linkForm: FS,
  linkInput: HS,
  linkSubmit: BS,
};

const to = {
  bold: De.bold,
  italic: De.italic,
  underline: De.underline,
  strike: De.strike,
  spoiler: De.spoiler,
  monospace: De.monospace,
  quote: De.quote,
  link: De.link,
};

function Mo(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function VS(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function WS(e) {
  return e !== "mention" && e !== "hashtag";
}
function yc(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!WS(r.type)) {
      continue;
    }
    const o = to[r.type];
    const s = r.type === "link" ? ` data-url="${VS(r.url)}"` : "";
    n = `<span class="${o}"${s}>${n}</span>`;
  }
  return n;
}
function jS(e, t, n) {
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
function zS(e, t) {
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
function qS(e) {
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
      for (const [u, d] of Object.entries(to)) {
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
function GS(e, t) {
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
function YS(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const KS = [
    { type: "bold", icon: fy, title: "Жирный" },
    { type: "italic", icon: hy, title: "Курсив" },
    { type: "underline", icon: yy, title: "Подчёркнутый" },
    { type: "strike", icon: _y, title: "Зачёркнутый" },
    { type: "spoiler", icon: gy, title: "Спойлер" },
    { type: "monospace", icon: py, title: "Моноширинный" },
    { type: "quote", icon: my, title: "Цитата" },
    { type: "link", icon: ku, title: "Ссылка" },
  ];

const _o = lu((
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
    disableFormatting: f = false,
    onImagePaste: p,
  },
  h
) => {
  const m = O(null);
  const [y, g] = P(false);
  const [_, v] = P({ x: 0, y: 0 });
  const [S, N] = P(false);
  const [w, b] = P("");
  const R = O(null);
  const k = O(null);
  const C = O(null);
  const E = O(false);
  const A = O(false);
  const I = O(t);
  const L = O(n);
  const W = O(r);

  M(() => {
    (I.current = t);
    (L.current = n);
    (W.current = r);
  }, [t, n, r]);

  Vs(
    h,
    () => ({
      insertText: (x) => {
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        m_current.focus();
        const z = window.getSelection();
        if (!z) {
          return;
        }
        let D = 0;
        if (z.rangeCount > 0) {
          const le = z.getRangeAt(0);
          D = jS(m_current, le.startContainer, le.startOffset);
        }
        const I_current = I.current;
        const L_current = L.current;
        const oe = I_current.slice(0, D) + x + I_current.slice(D);

        const Oe = L_current.map(le => le.offset >= D
          ? { ...le, offset: le.offset + x.length }
          : le.offset + le.length > D
          ? { ...le, length: le.length + x.length }
          : le
        );

        (A.current = true);
        (I.current = oe);
        (L.current = Oe);
        const Re = document.createTextNode(x);
        if (z.rangeCount > 0) {
          const le = z.getRangeAt(0);
          le.deleteContents();
          le.insertNode(Re);
          le.setStartAfter(Re);
          le.setEndAfter(Re);
          z.removeAllRanges();
          z.addRange(le);
        }
        W.current(oe, Oe);
      },

      focus: () => {
        m.current?.focus();
      }
    }),
    []
  );

  const K = T(() => {
    if (!t) {
      return "";
    }
    if (n.length === 0) {
      return Mo(t);
    }

    const x = [...n].sort((Y, oe) => Y.offset - oe.offset);

    const F = [];
    for (const Y of x) {
      F.push({ pos: Y.offset, type: "start", span: Y });
      F.push({ pos: Y.offset + Y.length, type: "end", span: Y });
    }
    F.sort((Y, oe) => Y.pos !== oe.pos
      ? Y.pos - oe.pos
      : Y.type !== oe.type
      ? Y.type === "end"
        ? -1
        : 1
      : 0
    );
    let z = "";
    let D = 0;
    const H = [];
    for (const Y of F) {
      if (Y.pos > D) {
        const oe = t.substring(D, Y.pos);
        (z += yc(Mo(oe), H));
        (D = Y.pos);
      }
      if (Y.type === "start") {
        H.push(Y.span);
      } else {
        const oe = H.indexOf(Y.span);

        if (oe !== -1) {
          H.splice(oe, 1);
        }
      }
    }
    if (D < t.length) {
      const Y = t.substring(D);
      z += yc(Mo(Y), H);
    }
    return z || "<br>";
  }, [t, n]);

  M(() => {
    if (A.current) {
      A.current = false;
      return;
    }
    const m_current = m.current;
    if (!m_current || (document.activeElement === m_current && t !== "")) {
      return;
    }
    const F = K();

    if (m_current.innerHTML !== F) {
      (m_current.innerHTML = F);
    }
  }, [K, t]);

  M(() => {
    if (a && m.current) {
      const m_current = m.current;
      m_current.focus();

      if (m_current.childNodes.length > 0) {
        const F = window.getSelection();
        if (F) {
          const z = document.createRange();
          z.selectNodeContents(m_current);
          z.collapse(false);
          F.removeAllRanges();
          F.addRange(z);
        }
      }
    }
  }, [a]);

  M(() => {
    if (S && k.current) {
      k.current.focus();
    }
  }, [S]);

  const ce = T(
      (x) => {
        if (E.current) {
          return;
        }
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        if (x?.data === " ") {
          const H = window.getSelection();
          if (H && H.rangeCount > 0) {
            const oe = H.getRangeAt(0).startContainer;
            let Oe = null;
            let Re = oe;

            while (Re && Re !== m_current) {
              if (Re.nodeType === Node.ELEMENT_NODE) {
                const le = Re;
                if (le.tagName === "SPAN" && le.className) {
                  Oe = le;
                  break;
                }
              }
              Re = Re.parentNode;
            }

            if (Oe) {
              const le = Oe.textContent || "";
              if (le.endsWith(" ")) {
                Oe.textContent = le.slice(0, -1);
                const jt = document.createTextNode(" ");
                Oe.parentNode?.insertBefore(jt, Oe.nextSibling);
                const gt = document.createRange();
                gt.setStartAfter(jt);
                gt.setEndAfter(jt);
                H.removeAllRanges();
                H.addRange(gt);
              }
            }
          }
        }
        const z = m_current.innerText.replace(/\n$/, "");
        if (z.length > s) {
          const H = z.substring(0, s);
          (A.current = true);
          r(H, zS(n, H));
          return;
        }
        const D = qS(m_current);
        (A.current = true);
        r(z, D);
      },
      [s, r, n]
    );

  const me = T(
    (x) => {
      if (f) {
        return;
      }
      const F = window.getSelection();
      if (!F || F.isCollapsed) {
        return;
      }
      x.preventDefault();
      (C.current = F.getRangeAt(0).cloneRange());

      const z = Math.max(
          10,
          Math.min(x.clientX - 150, window.innerWidth - 310)
        );

      const D = Math.max(10, x.clientY - 50);
      v({ x: z, y: D });
      g(true);
    },
    [f]
  );

  const ae = T(
    (x) => {
      x.preventDefault();

      if (p && x.clipboardData?.files?.length) {
        const Y = Array.from(x.clipboardData.files).filter(oe => oe.type.startsWith("image/")
        );
        if (Y.length > 0) {
          p(Y);
          return;
        }
      }

      const F = x.clipboardData?.getData("text/plain") || "";
      if (!F) {
        return;
      }
      const z = window.getSelection();
      if (!z || !z.rangeCount) {
        return;
      }
      const D = z.getRangeAt(0);
      D.deleteContents();
      const H = document.createTextNode(F);
      D.insertNode(H);
      D.setStartAfter(H);
      D.setEndAfter(H);
      z.removeAllRanges();
      z.addRange(D);
      ce();
    },
    [ce, p]
  );

  const G = T(() => {
    const m_current = m.current;
    if (m_current && !I.current) {
      const F = window.getSelection();
      if (F) {
        const z = document.createRange();
        z.setStart(m_current, 0);
        z.collapse(true);
        F.removeAllRanges();
        F.addRange(z);
      }
    }
  }, []);

  const J = T(
    (x) => {
      if (x.key === "Enter" && !x.shiftKey && d) {
        x.preventDefault();
        d();
        return;
      }
      if (!f && (x.ctrlKey || x.metaKey)) {
        let F = null;
        switch (x.key.toLowerCase()) {
          case "b":
            {
              F = "bold";
              break;
            }
          case "i":
            {
              F = "italic";
              break;
            }
          case "u":
            {
              F = "underline";
              break;
            }
        }

        if (F) {
          x.preventDefault();
          re(F);
        }
      }
    },
    [d, f]
  );

  const re = T(
    (x, F) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const D = window.getSelection();
      if (!D ||
      (C.current && (D.removeAllRanges(), D.addRange(C.current)),
      D.isCollapsed)) {
        return;
      }
      const H = D.getRangeAt(0);
      const Y = document.createElement("span");
      (Y.className = to[x]);

      if (x === "link" && F) {
        (Y.dataset.url = F);
      }

      const oe = GS(H.commonAncestorContainer, to[x]);
      if (oe) {
        YS(oe);
      } else {
        try {
          H.surroundContents(Y);
        } catch {
          const Oe = H.extractContents();
          Y.appendChild(Oe);
          H.insertNode(Y);
        }
      }
      ce();
      g(false);
      N(false);
      b("");
      (C.current = null);
      m_current.focus();
    },
    [ce]
  );

  const j = T(
    (x) => {
      if (x === "link") {
        N(true);
      } else {
        re(x);
      }
    },
    [re]
  );

  const ge = T(
    (x) => {
      x.preventDefault();

      if (w.trim()) {
        re("link", w.trim());
      }
    },
    [re, w]
  );

  M(() => {
    if (!y) {
      return;
    }

    const x = (z) => {
      if (R.current &&
        !R.current.contains(z.target)) {
        g(false);
        N(false);
        b("");
        (C.current = null);
      }
    };

    const F = () => {
      g(false);
      N(false);
      b("");
      (C.current = null);
    };

    document.addEventListener("mousedown", x);
    window.addEventListener("scroll", F, true);

    return () => {
      document.removeEventListener("mousedown", x);
      window.removeEventListener("scroll", F, true);
    };
  }, [y]);
  const he = !t;
  return i(Ie, {
    children: [
      i("div", {
        ref: m,
        className: `${De.editor} ${c} ${he ? De.empty : ""}`,
        contentEditable: true,
        "data-placeholder": o,
        onInput: x => ce(x),
        onFocus: G,
        onPaste: ae,
        onContextMenu: me,
        onKeyDown: J,
        onCompositionStart: () => {
          E.current = true;
        },
        onCompositionEnd: () => {
          (E.current = false);
          ce();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      y &&
        Wt(
          i("div", {
            ref: R,
            className: De.menu,
            style: { left: _.x, top: _.y },
            children: S
              ? i("form", {
                  className: De.linkForm,
                  onSubmit: ge,
                  children: [
                    i("input", {
                      ref: k,
                      type: "url",
                      className: De.linkInput,
                      placeholder: "https://...",
                      value: w,
                      onInput: x => b(x.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: De.linkSubmit,
                      disabled: !w.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: De.buttons,
                  children: KS.map(({ type: x, icon: F, title: z }) => i(
                    "button",
                    {
                      type: "button",
                      className: De.button,
                      onClick: () => j(x),
                      title: z,
                      children: i(F, { size: 16 }),
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

const XS = "jTM0";
const QS = "Hu46";
const ZS = "Tapk";
const JS = "Td4Y";
const eb = "onDs";
const tb = "kx4p";
const nb = "oX4F";
const rb = "OMM0";
const ob = "Ffbn";
const sb = "VmEY";
const ib = "sAt3";
const ab = "kLpU";
const cb = "Viqn";
const lb = "DuyD";
const ub = "iigO";
const db = "mXPD";
const fb = "QcUG";
const pb = "DwG8";
const hb = "ploH";
const mb = "q2Lv";
const gb = "kAeb";

const Ee = {
  commentInput: XS,
  replyMode: QS,
  inputRow: ZS,
  attachmentStrip: JS,
  circleButton: eb,
  micButton: tb,
  sendButton: nb,
  submitting: rb,
  textareaContainer: ob,
  expanded: sb,
  voiceMode: ib,
  inputWrapper: ab,
  commentCharCount: cb,
  error: lb,
  input: ub,
  replyHeader: db,
  replyText: fb,
  replyName: pb,
  replyClose: hb,
  dragActive: mb,
  dragOverlay: gb,
};

const _b = "XZye";
const yb = "deKc";
const vb = "qucJ";
const Do = { textInput: _b, entering: yb, sendButton: vb };
const Eb = 1000/* 1e3 */;
function wb({
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
  const d = Eb - e.length;
  const f = d < 0;
  const p = [Do.textInput, s ? Do.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: p,
    children: [
      i("div", {
        className: Ee.inputWrapper,
        children: [
          i(_o, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: r,
            autoFocus: a,
            className: Ee.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: f ? undefined : o,
            disableFormatting: true,
            onImagePaste: u,
          }),
          f &&
            i("span", {
              className: `${Ee.commentCharCount} ${Ee.error}`,
              children: d,
            }),
        ],
      }),
      i("button", {
        className: `${Ee.circleButton} ${Ee.sendButton} ${Do.sendButton} ${
          c ? Ee.submitting : ""
        }`,
        onClick: o,
        disabled: c || l || f,
        children: c ? i(ri, { size: "xs" }) : i(wy, { size: 20 }),
      }),
    ],
  });
}
const Sb = ie(() => ne(
  () => import("./VoiceInput-DTbP962m.js"),
  __vite__mapDeps([14, 15, 16])
).then(e => ({
  default: e.VoiceInput
}))
);
function Zu({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: o,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = mo();
  const [d, f] = P("text");
  const [p, h] = P(false);
  const [m, y] = P(false);
  const [g, _] = P(false);
  const [v, S] = P(false);
  const N = O(false);
  const w = O(null);
  const b = O(0);

  const {
    images: R,
    uploadingImages: k,
    isUploading: C,
    openFilePicker: E,
    removeImage: A,
    uploadFiles: I,
    clearAll: L,
    fileInputRef: W,
    handleFileChange: K,
  } = Xu(4);

  M(
    () => () => {
      if (w.current) {
        clearTimeout(w.current);
      }
    },
    []
  );
  const ce = R.length > 0 || k.length > 0;
  const me = a.length > 0 || g || ce;
  const ae = d === "voice";
  const G = 1000/* 1e3 */;

  const J = async () => {
    const H = a.trim().length > 0;
    const Y = R.length > 0;
    if ((!H && !Y) || g || C || a.length > G) {
      return;
    }
    const oe = a.trim();
    const Oe = [...c];

    const Re = R.map(le => ({
      mediaId: le.mediaId
    }));

    _(true);
    try {
      await e(oe, Oe, Re.length > 0 ? Re : undefined);
      u();
      L();
    } catch (le) {
      console.error("Failed to submit comment:", le);
    } finally {
      _(false);
    }
  };

  const re = () => {
    (N.current = true);
    f("voice");
    y(false);
  };

  const j = () => {
    h(true);
  };

  const ge = () => {
    h(false);
    f("text");
    y(true);

    if (w.current) {
      clearTimeout(w.current);
    }

    (w.current = window.setTimeout(() => {
      (w.current = null);
      y(false);
    }, 300));
  };

  const he = T((H) => {
    H.preventDefault();
    H.stopPropagation();
    b.current++;

    if (H.dataTransfer?.types.includes("Files")) {
      S(true);
    }
  }, []);

  const x = T((H) => {
    H.preventDefault();
    H.stopPropagation();
  }, []);

  const F = T((H) => {
    H.preventDefault();
    H.stopPropagation();
    b.current--;

    if (b.current === 0) {
      S(false);
    }
  }, []);

  const z = T(
    (H) => {
      H.preventDefault();
      H.stopPropagation();
      (b.current = 0);
      S(false);
      const Y = H.dataTransfer?.files;

      if (Y && Y.length > 0) {
        I(Array.from(Y));
      }
    },
    [I]
  );

  const D = [
    Ee.commentInput,
    me ? Ee.expanded : "",
    ae ? Ee.voiceMode : "",
    r ? Ee.replyMode : "",
    v ? Ee.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return i("div", {
    className: D,
    onDragEnter: he,
    onDragOver: x,
    onDragLeave: F,
    onDrop: z,
    children: [
      v &&
        i("div", {
          className: Ee.dragOverlay,
          children: [
            i($u, { size: 24 }),
            i("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        i("div", {
          className: Ee.replyHeader,
          children: [
            i("span", {
              className: Ee.replyText,
              children: [
                "Ответ для ",
                i("span", { className: Ee.replyName, children: r.authorName }),
              ],
            }),
            i("button", {
              className: Ee.replyClose,
              onClick: o,
              children: i(pt, { size: 16 }),
            }),
          ],
        }),
      !ae &&
        !p &&
        ce &&
        i("div", {
          className: Ee.attachmentStrip,
          children: i(Qu, { images: R, uploadingImages: k, onRemove: A }),
        }),
      i("div", {
        className: Ee.inputRow,
        children: [
          i("button", {
            className: Ee.circleButton,
            onClick: ae ? j : E,
            children: ae ? i(pt, { size: 20 }) : i(Au, { size: 20 }),
          }),
          i("div", {
            className: Ee.textareaContainer,
            children:
              ae || p
                ? i(Te, {
                    fallback: null,
                    children: i(Sb, {
                      onCancel: j,
                      onSend: t,
                      isExiting: p,
                      onExitComplete: ge,
                    }),
                  })
                : i(wb, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: J,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: g,
                    sendDisabled: C,
                    onImagePaste: I,
                  }),
          }),
          !ae &&
            !p &&
            i("button", {
              className: `${Ee.circleButton} ${Ee.micButton}`,
              onClick: re,
              children: i(vy, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: W,
        type: "file",
        accept: Es,
        multiple: true,
        onChange: K,
        style: { display: "none" },
      }),
    ],
  });
}
const bb = "Teke";
const Cb = "ytXD";
const Nb = "N2SU";
const Ib = "kaum";
const Tb = "eHRy";
const Rb = "gblb";
const kb = "VLIY";

const Xt = {
  counter: bb,
  digit: Cb,
  prev: Nb,
  current: Ib,
  animating: Tb,
  up: Rb,
  down: kb,
};

function Ab(e) {
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
function Xn({ value: e }) {
  const t = Ab(e);
  const n = O(e);
  const r = O(t.length);
  const o = O(Date.now());

  const [s, a] = P(() => t
    .split("")
    .map((f, p) => ({
    char: f,
    prevChar: f,
    isAnimating: false,
    key: p
  }))
  );

  const [c, l] = P(null);

  M(() => {
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

    const m = s.map(N => N.char);

    const y = Math.max(h.length, m.length);
    const g = m.join("").padStart(y, " ").split("");

    const v = h
      .join("")
      .padStart(y, " ")
      .split("")
      .map((N, w) => {
      const b = g[w] || " ";
      const R = s[w - (y - s.length)];
      return N !== b
        ? (r.current++,
          { char: N, prevChar: b, isAnimating: true, key: r.current })
        : { char: N, prevChar: N, isAnimating: false, key: R?.key ?? w };
    })
      .filter(N => N.char !== " " || N.isAnimating);

    a(v);
    const S = setTimeout(() => {
      a(N => N.map(w => ({
        ...w,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(S);
  }, [e]);

  if (!s.some(f => f.isAnimating)) {
    return i("span", { children: t });
  }

  const d = c === "up" ? Xt.up : c === "down" ? Xt.down : "";
  return i("span", {
    className: Xt.counter,
    children: s.map(f => f.isAnimating
      ? i(
          "span",
          {
            className: `${Xt.digit} ${Xt.animating} ${d}`,
            children: [
              i("span", { className: Xt.prev, children: f.prevChar }),
              i("span", { className: Xt.current, children: f.char }),
            ],
          },
          f.key
        )
      : i("span", { children: f.char }, f.key)
    ),
  });
}
const Ob = "AKUB";
const Pb = "DtKP";
const Lb = "PdOb";
const xb = "eR6z";
const $b = "FBgf";
const Mb = "WHwB";
const Db = "uUIO";
const Ub = "mCKt";
const Fb = "W2Nb";

const yt = {
  dropdownWrapper: Ob,
  trigger: Pb,
  menu: Lb,
  hidden: xb,
  menuItem: $b,
  danger: Mb,
  itemIcon: Db,
  itemLabel: Ub,
  divider: Fb,
};

function Ju({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: o,
}) {
  const [s, a] = P(false);
  const [c, l] = P(false);
  const [u, d] = P({ top: 0, left: 0 });
  const f = O(null);
  const p = O(null);

  const h = T(() => {
    if (!f.current) {
      return;
    }
    const _ = f.current.getBoundingClientRect();
    const v = p.current?.offsetHeight || 150;
    const S = p.current?.offsetWidth || 160;
    let N = 0;
    let w = 0;

    if (n.startsWith("bottom")) {
      (N = _.bottom + 4);
    } else {
      (N = _.top - v - 4);
    }

    if (n.endsWith("right")) {
      (w = _.right - S);
    } else {
      (w = _.left);
    }

    const {
      innerWidth,
      innerHeight
    } = window;

    if (w + S > innerWidth) {
      (w = innerWidth - S - 8);
    }

    if (w < 8) {
      (w = 8);
    }

    if (N + v > innerHeight) {
      (N = _.top - v - 4);
    }

    if (N < 8) {
      (N = _.bottom + 4);
    }

    d({ top: N, left: w });
    l(true);
  }, [n]);

  const m = T((_) => {
    const _target = _.target;

    if (f.current &&
      !f.current.contains(_target) &&
      p.current &&
      !p.current.contains(_target)) {
      a(false);
      l(false);
    }
  }, []);

  M(() => {
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

  const y = (_) => {
    _.stopPropagation();

    if (s) {
      a(false);
      l(false);
    } else {
      a(true);
    }
  };

  const g = (_, v) => {
    _.stopPropagation();
    v.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${yt.dropdownWrapper} ${o || ""}`,
    children: [
      i("div", { ref: f, className: yt.trigger, onClick: y, children: e }),
      s &&
        Wt(
          i("div", {
            ref: p,
            className: `${yt.menu} ${c ? "" : yt.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((_, v) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${yt.menuItem} ${_.danger ? yt.danger : ""}`,
                    onClick: S => g(S, _),
                    children: [
                      _.icon &&
                        i("span", {
                          className: yt.itemIcon,
                          children: _.icon,
                        }),
                      i("span", {
                        className: yt.itemLabel,
                        children: _.label,
                      }),
                    ],
                  }),
                  r.includes(_.id) &&
                    v < t.length - 1 &&
                    i("div", { className: yt.divider }),
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
const Hb = "N50z";
const Bb = "XYg6";
const Vb = "XSsT";
const Wb = "tSeB";
const jb = "DDER";
const zb = "eVG7";
const qb = "Ni3p";
const Gb = "Razo";

const At = {
  underline: Hb,
  monospace: Bb,
  quote: Vb,
  spoiler: Wb,
  revealed: jb,
  link: zb,
  mention: qb,
  hashtag: Gb,
};

function Yb(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function Kb(e) {
  if (!Yb(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const o = btoa(r);
  return `/external?url=${encodeURIComponent(o)}`;
}
function ed({ text: e, spans: t = [], className: n = "" }) {
  const [r, o] = P(new Set());

  const s = be(() => {
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
    let d = 0;
    const f = new Map();
    for (const p of l) {
      if (p.pos > d) {
        const h = e.substring(d, p.pos);
        const m = new Set();
        let y;
        let g;
        let _;

        f.forEach((v) => {
          m.add(v.type);

          if (v.type === "link" && v.url) {
            (y = v.url);
          }

          if (v.type === "mention" &&
            (v.username || v.id)) {
            (g = v.username || v.id);
          }

          if (v.type === "hashtag" && v.tag) {
            (_ = v.tag);
          }
        });

        u.push({ text: h, styles: m, url: y, mentionId: g, hashtag: _ });
      }

      if (p.type === "start") {
        f.set(p.index, p.span);
      } else {
        f.delete(p.index);
      }

      (d = p.pos);
    }

    if (d < e.length) {
      u.push({ text: e.substring(d), styles: new Set() });
    }

    return u;
  }, [e, t]);

  const a = (l, u) => {
    l.stopPropagation();

    o((d) => {
      const f = new Set(d);

      if (f.has(u)) {
        f.delete(u);
      } else {
        f.add(u);
      }

      return f;
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
      (l_text = i("span", { className: At.underline, children: l_text }));
    }

    if (l.styles.has("strike")) {
      (l_text = i("s", { children: l_text }));
    }

    if (l.styles.has("monospace")) {
      (l_text = i("code", { className: At.monospace, children: l_text }));
    }

    if (l.styles.has("quote")) {
      (l_text = i("span", { className: At.quote, children: l_text }));
    }

    if (l.styles.has("spoiler")) {
      const f = r.has(u);
      l_text = i("span", {
        className: `${At.spoiler} ${f ? At.revealed : ""}`,
        onClick: p => a(p, u),
        children: l_text,
      });
    }

    if (l.styles.has("link") && l.url) {
      const f = Kb(l.url);
      l_text = i("a", {
        href: f,
        target: "_blank",
        rel: "noopener noreferrer",
        className: At.link,
        onClick: p => p.stopPropagation(),
        children: l_text,
      });
    }
    if (l.styles.has("mention") && l.mentionId) {
      const f = `/@${l.mentionId}`;
      l_text = i("a", {
        href: f,
        className: At.mention,
        onClick: (p) => {
          p.preventDefault();
          p.stopPropagation();
          qe(f);
        },
        children: l_text,
      });
    }
    if (l.styles.has("hashtag") && l.hashtag) {
      const f = `/hashtag/${encodeURIComponent(l.hashtag)}`;
      l_text = i("a", {
        href: f,
        className: At.hashtag,
        onClick: (p) => {
          p.preventDefault();
          p.stopPropagation();
          qe(f);
        },
        children: l_text,
      });
    }
    return i("span", { children: l_text }, u);
  };

  return i("span", { className: n, children: s.map((l, u) => c(l, u)) });
}
function Xb(e, t, n) {
  const { isVisible: r, isRevealing: o, onRevealComplete: s } = n;
  const a = O([]);
  const c = O(null);
  const l = O(null);
  const u = O({ width: 0, height: 0 });
  const d = O(1);

  const f = T((y, g) => {
    const _ = Math.random() * 80 + 60;
    return {
      x: Math.random() * y,
      y: Math.random() * g,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * _,
      maxLife: _,
    };
  }, []);

  const p = T(
    (y, g) => {
      const _ = Math.floor((y * g) / 600);
      const v = [];
      for (let S = 0; S < _; S++) {
        v.push(f(y, g));
      }
      a.current = v;
    },
    [f]
  );

  const h = T(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const _ = t_current.getBoundingClientRect();
    if (_.width === 0 || _.height === 0) {
      return;
    }
    const v = window.devicePixelRatio || 1;
    if (u.current.width !== _.width || u.current.height !== _.height) {
      (u.current = { width: _.width, height: _.height });
      (e_current.width = _.width * v);
      (e_current.height = _.height * v);
      (e_current.style.width = `${_.width}px`);
      (e_current.style.height = `${_.height}px`);
      const S = e_current.getContext("2d");

      if (S) {
        S.setTransform(v, 0, 0, v, 0, 0);
        (l.current = S);
      }

      p(_.width, _.height);
    }
  }, [e, t, p]);

  const m = T(() => {
    d.current = 1;
  }, []);

  M(() => {
    if (!r) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        (c.current = null);
      }

      return;
    }
    h();
    const y = () => {
      const l_current = l.current;
      const { width: _, height: v } = u.current;
      if (!l_current || _ === 0 || v === 0) {
        c.current = requestAnimationFrame(y);
        return;
      }
      if (o && ((d.current -= 0.05), d.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, _, v);

      a.current.forEach((S, N) => {
        (S.x += S.speedX);
        (S.y += S.speedY);
        S.life--;

        if (S.x < 0) {
          (S.x = _);
        }

        if (S.x > _) {
          (S.x = 0);
        }

        if (S.y < 0) {
          (S.y = v);
        }

        if (S.y > v) {
          (S.y = 0);
        }

        if (S.life <= 0) {
          a.current[N] = f(_, v);
          return;
        }

        const w = S.life / S.maxLife;
        const b = w < 0.3 ? w / 0.3 : 1;
        const R = S.opacity * b * d.current;
        l_current.beginPath();
        l_current.arc(S.x, S.y, S.size, 0, Math.PI * 2);
        (l_current.fillStyle = `rgba(255, 255, 255, ${R})`);
        l_current.fill();
      });

      (c.current = requestAnimationFrame(y));
    };
    (c.current = requestAnimationFrame(y));
    window.addEventListener("resize", h);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", h);
    };
  }, [r, o, f, h, s]);

  return { resetOpacity: m };
}
const Qb = "ybFL";
const Zb = "tKbI";
const Jb = "jyln";
const e1 = "bEBj";
const t1 = "mI7O";
const zn = { container: Qb, hidden: Zb, image: Jb, revealing: e1, canvas: t1 };
const vc = 5;
function Ec({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: r,
  height: o,
  className: s = "",
  onClick: a,
}) {
  const [c, l] = P(!n);
  const [u, d] = P(false);
  const [f, p] = P(false);
  const h = O(null);
  const m = O(null);
  const y = O(null);
  const g = O(false);

  const { resetOpacity: _ } = Xb(h, m, {
    isVisible: f && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  M(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const k = new IntersectionObserver(
      (C) => {
        C.forEach((E) => {
          p(E.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    k.observe(m_current);

    return () => {
      k.disconnect();
    };
  }, []);

  const v = (R) => {
    (y.current = { x: R.clientX, y: R.clientY });
    (g.current = false);
  };

  const S = (R) => {
    if (!y.current) {
      return;
    }
    const k = Math.abs(R.clientX - y.current.x);
    const C = Math.abs(R.clientY - y.current.y);

    if ((k > vc || C > vc)) {
      (g.current = true);
    }
  };

  const N = (R) => {
    if (g.current) {
      (g.current = false);
      R.stopPropagation();
      return;
    }

    if (!c && !u && n) {
      R.stopPropagation();
      d(true);
      _();
    } else if (a) {
      a(R);
    }
  };

  const w = !c && n;
  const b = r && o ? { aspectRatio: `${r} / ${o}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${zn.container} ${s} ${w ? zn.hidden : ""} ${
          u ? zn.revealing : ""
        }`,
        style: b,
        onPointerDown: v,
        onPointerMove: S,
        onClick: N,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: zn.image,
            loading: "lazy",
            width: r,
            height: o,
            draggable: false,
            "data-post-media-image": true,
          }),
          w && i("canvas", { ref: h, className: zn.canvas }),
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
function n1(e) {
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
function Uo(e, t) {
  const r =
      (e
        ? [
            ...(e.matches("img") ? [e] : []),
            ...Array.from(e.querySelectorAll("img")),
          ]
        : []
      ).find((g) => {
        const _ = g.getBoundingClientRect();
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
  const f = Math.max(o.top, c);
  const p = Math.min(o.right, l);
  const h = Math.min(o.bottom, u);
  const m = Math.max(0, p - d);
  const y = Math.max(0, h - f);
  return m <= 0 || y <= 0
    ? null
    : {
        left: d,
        top: f,
        width: m,
        height: y,
        hiddenLeft: d - o.left,
        hiddenTop: f - o.top,
        hiddenRight: o.right - p,
        hiddenBottom: o.bottom - h,
        borderRadius: n1(r),
      };
}
const wc = { photo_open: 1, video_progress: 2 };
const r1 = 2000/* 2e3 */;
const o1 = 20;
const Sc = "dwell_sid";
function s1() {
  try {
    let e = sessionStorage.getItem(Sc);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Sc, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class i1 {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = s1());
      window.setInterval(() => this.flush(), r1);
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
    const s = { t: wc.photo_open, v: t, ai: n };

    if (r !== undefined) {
      (s.mi = r);
    }

    if (o) {
      (s.s = eo[o]);
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
      t: wc.video_progress,
      v: t,
      ai: n,
      pm: Math.round(r),
      dm: Math.round(o),
    };

    if (s) {
      (a.s = eo[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
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
    U.post($.posts.interactionLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    U.post(
      $.posts.interactionLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const a1 = new i1();
function c1(e, t) {
  return T(
    (n, r) => {
      if (!e || !n) {
        return;
      }
      const o = t === "post_page" || t === "link";
      a1.trackPhotoOpen(e, n, r, o ? t : undefined);
    },
    [e, t]
  );
}
const l1 = "qaQo";
const u1 = "oHYy";
const d1 = "SJtC";
const f1 = "lxtx";
const p1 = "fwMN";
const h1 = "Lkoz";
const m1 = "XtNQ";

const Pe = {
  mediaWrapper: l1,
  isFeed: u1,
  single: d1,
  image: f1,
  singleVideo: p1,
  media: h1,
  dragging: m1,
};

const bc = ie(() => ne(
  () => import("./PostMediaVideo-CExLc9YI.js"),
  __vite__mapDeps([17, 18, 19])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const g1 = 5;
const _1 = 0.95;
const Fo = 0.5;
const y1 = 650;
const v1 = 500;
const E1 = 300;
function w1(e, t, n, r) {
  const o = e / t;
  return o > n / r ? Math.min(e, n) : Math.min(t, r) * o;
}
function ci({ media: e, isFeed: t = false, postVs: n, source: r }) {
  const o = e?.filter(I => I.type === "image") ?? [];

  const s = e?.filter(I => I.type === "video") ?? [];

  const a = O(null);

  const c = Su(I => I.open);

  const u = It() ? E1 : v1;
  const d = c1(n, r);
  const f = O(false);
  const p = O(0);
  const h = O(0);
  const m = O(false);
  const y = O(0);
  const g = O(0);
  const _ = O(0);
  const v = O(null);

  const S = () => {
    if (v.current) {
      cancelAnimationFrame(v.current);
      (v.current = null);
    }
  };

  const N = () => {
    const a_current = a.current;
    if (a_current) {
      (_.current *= _1);

      if (Math.abs(_.current) < Fo) {
        S();
        return;
      }

      (a_current.scrollLeft += _.current);
      (v.current = requestAnimationFrame(N));
    }
  };

  const w = (I) => {
    const a_current = a.current;

    if (a_current && o.length + s.length > 1) {
      S();
      (f.current = true);
      a_current.classList.add(Pe.dragging);
      (p.current = I.clientX);
      (y.current = I.clientX);
      (g.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (_.current = 0);
      I.preventDefault();
    }
  };

  const b = (I) => {
    if (!f.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const W = Date.now();
    const K = I.clientX - p.current;
    const ce = I.clientX - y.current;
    const me = W - g.current;

    if (Math.abs(K) > g1) {
      (m.current = true);
    }

    if (me > 0) {
      (_.current = (-ce / me) * 16);
    }

    (y.current = I.clientX);
    (g.current = W);
    (a_current.scrollLeft = h.current - K);
  };

  const R = () => {
    if (f.current && Math.abs(_.current) > Fo) {
      N();
    }

    (f.current = false);
    a.current?.classList.remove(Pe.dragging);
  };

  const k = () => {
    if (f.current) {
      Math.abs(_.current) > Fo && N();
      (f.current = false);
      a.current?.classList.remove(Pe.dragging);
    }
  };

  M(
    () => () => {
      S();
      a.current?.classList.remove(Pe.dragging);
    },
    []
  );

  const C = (I, L) => {
    if (m.current) {
      (m.current = false);
      L.stopPropagation();
      return;
    }
    const o_I = o[I];

    if (o_I) {
      d(o_I.id, I);
    }

    const K = L.currentTarget ?? null;
    const ce = Uo(K, a.current);

    const me = (ae) => {
      const a_current = a.current;
      if (!a_current) {
        return ae !== I || !K?.isConnected ? null : Uo(K, null);
      }
      const J = a_current.querySelectorAll("[data-post-media-image]")[ae];
      return J
        ? (J.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          Uo(J, a_current))
        : null;
    };

    c(
      o.map(ae => ({
        id: ae.id,
        url: ae.url,
        width: ae.width || 800,
        height: ae.height || 600
      })),
      I,
      ce,
      me
    );
  };

  const E = (I) => {
    I.stopPropagation();
    (m.current = false);
  };

  if (o.length === 0 && s.length === 0) {
    return null;
  }
  const A = o.length + s.length;
  if (A === 1) {
    if (o.length === 1) {
      const [I] = o;

      const L =
        I.width && I.height
          ? {
              width: `${Math.round(w1(I.width, I.height, y1, u))}px`,
              aspectRatio: `${I.width} / ${I.height}`,
            }
          : undefined;

      return i("div", {
        className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: Pe.single,
          style: L,
          onClick: (W) => {
            W.stopPropagation();
            C(0, W);
          },
          children: i(
            Ec,
            {
              src: I.url,
              spoiler: I.spoiler,
              width: I.width,
              height: I.height,
              className: Pe.image,
              onClick: (W) => {
                W.stopPropagation();
                C(0, W);
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
        className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
        "data-count": 1,
        onClick: L => L.stopPropagation(),
        children: i("div", {
          className: Pe.singleVideo,
          children: i(Te, {
            fallback: null,
            children: i(
              bc,
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
    className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
    "data-count": A,
    children: i("div", {
      ref: a,
      className: `${Pe.media} ${t ? Pe.isFeed : ""}`,
      "data-count": A,
      onClick: E,
      onMouseDown: w,
      onMouseMove: b,
      onMouseUp: R,
      onMouseLeave: k,
      children: [
        s.map(I => i(
          Te,
          {
            fallback: null,
            children: i(bc, {
              src: I.url,
              spoiler: I.spoiler,
              width: I.width,
              height: I.height,
              duration: I.duration,
              className: Pe.image,
              postVs: n,
              source: r,
              attachmentId: I.id,
            }),
          },
          I.id
        )
        ),
        o.map((I, L) => i(
          Ec,
          {
            src: I.url,
            spoiler: I.spoiler,
            width: I.width,
            height: I.height,
            className: Pe.image,
            onClick: W => C(L, W),
          },
          I.id
        )
        ),
      ],
    }),
  });
}
const td = 0.5;
const S1 = 250;
const b1 = 1000/* 1e3 */;
const C1 = 50;
const N1 = [0, td, 1];
const rn = new Set();
const Wr = new WeakMap();
const tn = new Map();
const nn = new Map();
const no = new Set();
const Or = new Set();
let Ho = null;
let bn = null;
function I1(e) {
  if (no.size !== 0) {
    Or.add(e);

    Ho === null &&
      (Ho = setTimeout(() => {
      (Ho = null);

      if (Or.size === 0) {
        return;
      }

      const t = Array.from(Or);
      Or.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const r of no) {
        r(n);
      }
    }, C1));
  }
}
function T1() {
  return (bn || (typeof IntersectionObserver === "undefined" ? null : ((bn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Wr.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const r = t.intersectionRatio >= td;
            for (const o of n) {
              if (r) {
                const s = nn.get(o);
                if (s !== undefined) {
                  clearTimeout(s);
                  nn.delete(o);
                  continue;
                }
                if (rn.has(o) || tn.has(o)) {
                  continue;
                }
                const a = setTimeout(() => {
                  tn.delete(o);
                  rn.add(o);
                  I1(o);
                }, S1);
                tn.set(o, a);
              } else {
                const s = tn.get(o);

                if (s !== undefined) {
                  clearTimeout(s);
                  tn.delete(o);
                }

                if (!rn.has(o) || nn.has(o)) {
                  continue;
                }

                const a = setTimeout(() => {
                  nn.delete(o);
                  rn.delete(o);
                }, b1);
                nn.set(o, a);
              }
            }
          }
        },
        { threshold: N1 }
      )), bn)));
}

const ro = {
    observe(e, t) {
      const n = T1();
      if (!n) {
        return;
      }
      const r = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (r.length !== 0) {
        Wr.set(e, r);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!bn) {
        return;
      }
      const t = Wr.get(e);
      bn.unobserve(e);
      Wr.delete(e);

      if (!!t) {
        for (const n of t) {
          const r = tn.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            tn.delete(n);
          }

          const o = nn.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            nn.delete(n);
          }

          rn.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(rn);
    },
    size() {
      return rn.size;
    },
    onAppear(e) {
      no.add(e);

      return () => {
        no.delete(e);
      };
    },
  };

const R1 = "yf6D";
const k1 = "zqeF";
const A1 = "lVG2";
const Bo = { hint: R1, multiline: k1, arrow: A1 };
function jr({ text: e, children: t, className: n, multiline: r }) {
  const o = O(null);
  const [s, a] = P(null);

  const c = T(() => {
    if (!o.current) {
      return;
    }
    const d = o.current.getBoundingClientRect();
    a({ x: d.left + d.width / 2, y: d.top });
  }, []);

  const l = T(() => {
    a(null);
  }, []);

  const u = T(
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
    const d = (f) => {
      if (o.current && !o.current.contains(f.target)) {
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
        Wt(
          i("div", {
            className: `${Bo.hint} ${r ? Bo.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: Bo.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const O1 = "JYl0";
const P1 = "D7SG";
const L1 = "z2Cy";
const x1 = "dfT2";
const $1 = "L03P";
const M1 = "SEg6";
const D1 = "Cj0H";
const U1 = "lNzI";

const Ot = {
  header: O1,
  headerMain: P1,
  moreDropdown: L1,
  pinnedBadge: x1,
  authorInfo: $1,
  authorLink: M1,
  time: D1,
  edited: U1,
};

function F1({
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
  onPin: d,
  onCopyLink: f,
}) {
  const p = Ru(t);

  const h = ye(v => v.profile?.id);

  const m = e.id === h;
  const y = 2880 * 60 * 1000/* 1e3 */;
  const g = m && Date.now() - new Date(t).getTime() < y;

  const _ = be(() => {
    const v = [];

    v.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(ku, { size: 16 }),
      onClick: () => f?.(r),
    });

    if (g) {
      v.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Pu, { size: 16 }),
        onClick: () => l?.(r),
      });
    }

    if (s) {
      v.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: i(Ga, { size: 16 }),
        onClick: () => d?.(r),
      });
    }

    if ((m || s)) {
      v.push({
        id: "delete",
        label: "Удалить",
        icon: i(Hu, { size: 16 }),
        danger: true,
        onClick: () => u?.(r),
      });
    }

    if (!m) {
      v.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(xu, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return v;
  }, [m, g, s, a, r, l, u, d, c, f]);

  return i("header", {
    className: Ot.header,
    children: [
      a &&
        i("div", {
          className: Ot.pinnedBadge,
          children: [
            i(Ga, { size: 14 }),
            i("span", { children: "Закреплённый пост" }),
          ],
        }),
      i("div", {
        className: Ot.headerMain,
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
            className: Ot.authorInfo,
            children: [
              i("a", {
                href: `/@${e.username}`,
                className: Ot.authorLink,
                children: i(yr, {
                  name: e.displayName,
                  verified: e.isVerified,
                  hasNuksta: e.hasNuksta,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              i("time", {
                dateTime: t,
                className: Ot.time,
                children: [
                  p,
                  n &&
                    i(jr, {
                      text: new Date(n).toLocaleString("ru-RU"),
                      children: i("span", {
                        className: Ot.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          i(Ju, {
            trigger: i(Mu, { size: 18 }),
            items: _,
            position: "bottom-right",
            className: Ot.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const H1 = "knNy";
const B1 = "NXeQ";
const V1 = "r9ta";
const W1 = "gXNd";
const j1 = "Jbhf";
const z1 = "ZIuo";
const q1 = "NrBD";
const G1 = "sENQ";
const Y1 = "x21F";
const K1 = "e9vP";
const X1 = "Y0YK";
const Q1 = "Yjc8";
const Z1 = "JxU7";
const J1 = "wVnX";
const eC = "EMfv";
const tC = "k1Px";
const nC = "gHNu";
const rC = "Dn9x";

const Ne = {
  actions: H1,
  compact: B1,
  action: V1,
  views: W1,
  flush: j1,
  actionsLeft: z1,
  disabled: q1,
  liked: G1,
  unliked: Y1,
  reposted: K1,
  noAnimation: X1,
  reactionWrapper: Q1,
  actionsRight: Z1,
  captured: J1,
  capturedEmoji: eC,
  capturedText: tC,
  capturedMobile: nC,
  capturedSolo: rC,
};

function nd({
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
  compact: f = false,
  emojiOnly: p = false,
  flush: h = false,
  infiniteLike: m = false,
}) {
  const y = O(false);
  const g = f ? 17 : 20;
  return i("footer", {
    className: `${Ne.actions} ${f ? Ne.compact : ""} ${h ? Ne.flush : ""}`,
    children: [
      i("div", {
        className: Ne.actionsLeft,
        children: [
          i("div", {
            className: Ne.reactionWrapper,
            onClick: _ => _.stopPropagation(),
            children: i("button", {
              className: `${Ne.action} ${e ? Ne.liked : ""} ${
                y.current && !e ? Ne.unliked : ""
              } ${!y.current && e ? Ne.noAnimation : ""}`,
              onClick: (_) => {
                _.stopPropagation();
                (y.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                i(
                  Qs,
                  { filled: e, size: g },
                  m ? `liked-${n}` : e ? "liked" : "not-liked"
                ),
                i(Xn, { value: n }),
              ],
            }),
          }),
          i("button", {
            className: Ne.action,
            onClick: (_) => {
              _.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [i(Ou, { size: g }), i(Xn, { value: o })],
          }),
          i("button", {
            className: `${Ne.action} ${t ? Ne.reposted : ""} ${
              d ? Ne.disabled : ""
            }`,
            onClick: (_) => {
              _.stopPropagation();

              if (!d) {
                l();
              }
            },
            disabled: d,
            "aria-label": "Репост",
            children: [i(ei, { size: g }), i(Xn, { value: r })],
          }),
        ],
      }),
      i("div", {
        className: Ne.actionsRight,
        children: [
          a &&
            (p
              ? i(jr, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ne.capturedSolo,
                  children: i("span", {
                    className: Ne.capturedEmoji,
                    children: a,
                  }),
                })
              : i(Ie, {
                  children: [
                    i(jr, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: Ne.captured,
                      children: [
                        i("span", { className: Ne.capturedEmoji, children: a }),
                        i("span", {
                          className: Ne.capturedText,
                          children: "Пост захвачен",
                        }),
                      ],
                    }),
                    i(jr, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: Ne.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: Ne.views,
            children: [i(Py, { size: g }), i(Xn, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const oC = ie(() => ne(() => import("./index-XmQeCW1p.js"), __vite__mapDeps([20, 21, 22])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function rd(e, t) {
  const { openModal: n, closeModal: r, onDelete: o } = t;
  const s = It();

  const a = te(E => E.deletePost);

  const c = te(E => E.updatePostLike);

  const l = te(E => E.beginLikeMutation);

  const u = te(E => E.endLikeMutation);

  const d = te(E => E.updatePollVote);

  const f = te(E => E.updatePollData);

  const p = ii(e);
  const h = p.myReaction !== null;
  const p_likesTotal = p.likesTotal;

  const y = be(() => sd(e.attachments), [e.attachments]);

  const g = T(async () => {
    const E = h;
    const A = E ? -1 : 1;
    c(e.id, E ? null : "love", A);
    l(e.id);
    try {
      const I = E ? await Me.unlikePost(e.id) : await Me.likePost(e.id);
      u(e.id, I?.likesCount);
    } catch (I) {
      c(e.id, E ? "love" : null, -A);
      u(e.id);
      console.error("Failed to toggle like:", I);
    }
  }, [e.id, h, c, l, u]);

  const _ = T(() => {
    if (!h) {
      g();
    }
  }, [h, g]);

  const v = T(
    (E) => {
      const A = e.author.username ?? e.author.id;
      const I = `${window.location.origin}/@${A}/post/${E}`;
      navigator.clipboard.writeText(I);
      wt.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const S = T(
    (E) => {
      n(i(oC, { targetType: "post", targetId: E, onClose: r }));
    },
    [n, r]
  );

  const N = T(
    (E) => {
      n(
        i(eI, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const w = T(
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

  const b = T(() => {
    if (s) {
      n(i(FN, { postId: e.id, onClose: r }));
    } else {
      const E = e.author.username ?? e.author.id;
      qe(`/@${E}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, r]);

  const R = T(() => {
    n(i(uI, { post: e, onClose: r }));
  }, [n, r, e]);

  const k = T(
    async (E) => {
      const A = y?.myVote ?? null;
      d(e.id, E, A);
      try {
        const I = await Me.votePoll(e.id, [E]);
        if (I) {
          f(e.id, I);
          return I;
        }
      } catch (I) {
        console.error("[Poll] Failed to vote:", I);

        if (A) {
          d(e.id, A, E);
        }
      }
      return null;
    },
    [e.id, y?.myVote, d, f]
  );

  const C = T(
    async (E) => {
      try {
        const A = await Me.votePoll(e.id, E);
        if (A) {
          f(e.id, A);
          return A;
        }
      } catch (A) {
        console.error("[Poll] Failed to vote multiple:", A);
      }
      return null;
    },
    [e.id, f]
  );

  return {
    liked: h,
    totalLikes: p_likesTotal,
    handleLike: g,
    handleDoubleTap: _,
    handleComment: b,
    handleRepost: R,
    handleReport: S,
    handleEdit: N,
    handleDelete: w,
    handleCopyLink: v,
    handlePollVote: k,
    handlePollVoteMultiple: C,
  };
}
function od(e) {
  const t = T(() => {
      te.getState().updatePostLike(e, "love", 1);
    }, [e]);

  const n = T(() => {
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

  const r = T(() => {
    te.getState().updatePostReposted(e, true, 1);
  }, [e]);

  return { handleLike: t, handleComment: n, handleRepost: r };
}
const sC = "SxLS";
const iC = "kj9l";
const aC = "k2sr";
const cC = "VGox";
const lC = "ndtR";
const uC = "QYMw";
const dC = "MWJt";
const fC = "fObc";
const pC = "RrjE";
const hC = "d8xp";
const mC = "Nje8";
const gC = "I6bc";
const _C = "lF9W";
const yC = "pBxx";
const vC = "p5iu";

const He = {
  post: sC,
  postInner: iC,
  isFeed: aC,
  avatarLink: cC,
  postContent: lC,
  postBody: uC,
  textWrapper: dC,
  text: fC,
  collapsed: pC,
  expandButton: hC,
  originalPost: mC,
  originalPostHeader: gC,
  originalPostTime: _C,
  originalPostText: yC,
  originalPostMedia: vC,
};

function EC(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function wC({ attachments: e, postVs: t, source: n }) {
  const r = be(() => oo(e), [e]);
  return r.length === 0
    ? null
    : i("div", {
        className: He.originalPostMedia,
        children: i(ci, { media: r, postVs: t, source: n }),
      });
}
function SC({ originalPost: e, source: t, showcase: n = false }) {
  const r = EC(e.createdAt);
  const { openModal: o, closeModal: s } = mn();

  const {
    liked: a,
    totalLikes: c,
    handleLike: l,
    handleComment: u,
    handleRepost: d,
  } = rd(e, { openModal: o, closeModal: s });

  const { handleLike: f, handleComment: p, handleRepost: h } = od(e.id);
  const m = ii(e);

  const y = T(
    (g) => {
      g.stopPropagation();

      if (n) {
        return;
      }

      const _ = e.author.username ?? e.author.id;
      qe(`/@${_}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id, n]
  );

  return i("div", {
    className: He.originalPost,
    onClick: y,
    children: [
      i("div", {
        className: He.originalPostHeader,
        children: [
          i(ei, { size: 14 }),
          i(rt, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          i(yr, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          i("span", { className: He.originalPostTime, children: r }),
        ],
      }),
      e.text && i("div", { className: He.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        i(wC, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(nd, {
        liked: a,
        reposted: m.reposted,
        likesCount: c,
        repostsCount: m.repostsCount,
        commentsCount: m.commentsCount,
        viewsCount: m.viewsCount,
        dominantEmoji: m.dominantEmoji,
        onLike: n ? f : l,
        onRepost: n ? h : d,
        onComment: n ? p : u,
        compact: true,
        emojiOnly: n,
        infiniteLike: n,
      }),
    ],
  });
}
const bC = ie(() => ne(() => import("./index-C14ZC_5R.js"), __vite__mapDeps([23, 24])).then(
  e => ({
    default: e.Poll
  })
)
);
function CC(e) {
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
function oo(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function sd(e) {
  return e.find(t => t.type === "poll");
}
const NC = 300;
const IC = 500;

const TC = ho(
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
      onPin: f,
      onDelete: p,
    }
  ) => {
    const h = n === "feed";
    const m = It();
    const { openModal: y, closeModal: g } = mn();

    const _ = te(_e => _e.setCurrentPost);

    const v = te(_e => _e.seedPostStats);

    const S = te(_e => _e.posts.find(We => We.id === t.id));

    const N = ye(_e => _e.profile);

    M(() => {
      v(t);
    }, [t, v]);
    const w = ii(t);
    const { isFollowing: b, follow: R, unfollow: k } = lv(t.author.id);
    const C = h && N?.id !== t.author.id ? b : undefined;

    const {
      liked: E,
      totalLikes: A,
      handleLike: I,
      handleDoubleTap: L,
      handleComment: W,
      handleRepost: K,
      handleReport: ce,
      handleEdit: me,
      handleDelete: ae,
      handleCopyLink: G,
      handlePollVote: J,
      handlePollVoteMultiple: re,
    } = rd(t, { openModal: y, closeModal: g, onDelete: p });

    const { handleLike: j, handleComment: ge, handleRepost: he } = od(t.id);

    const x = T(() => {
      if (C !== undefined) {
        if (C) {
          y(
                  i(Kv, {
                    displayName: t.author.displayName,
                    onConfirm: k,
                    onClose: g,
                  })
                );
        } else {
          R();
        }
      }
    }, [C, t.author.displayName, R, k, y, g]);

    const F = O(null);
    const z = O(null);
    const D = O(null);
    const [H, Y] = P(NC);
    const [oe, Oe] = P(0);
    const Re = oe > H;
    M(
      () => () => {
        if (D.current) {
          cancelAnimationFrame(D.current);
          (D.current = null);
        }
      },
      []
    );

    const le = T(
        (_e) => {
          if (_e &&
            h) {
            D.current && cancelAnimationFrame(D.current);

            (D.current = requestAnimationFrame(() => {
              (D.current = null);
              Oe(_e.scrollHeight);
            }));
          }

          if (z) {
            (z.current = _e);
          }
        },
        [h]
      );

    const jt = T((_e) => {
      _e.stopPropagation();

      Y(We => We + IC);
    }, []);

    KE(t.id, F, c, l, t.vs);
    const gt = t.originalPost?.id;
    M(() => {
      const F_current = F.current;
      if (!F_current) {
        return;
      }
      const We = gt ? [t.id, gt] : t.id;
      ro.observe(F_current, We);

      return () => ro.unobserve(F_current);
    }, [t.id, gt]);
    const gn = O(null);
    const Dn = O(0);

    const Ce = T((_e) => {
      gn.current = _e.target;
    }, []);

    const _t = T(() => {
      _(S ?? t);
      const We = t.author.username ?? t.author.id;
      qe(`/@${We}/post/${t.id}`);
    }, [t, S, _]);

    const fd = T(
      (_e) => {
        const _e_target = _e.target;
        if (_e_target.closest("button") ||
        _e_target.closest("a") ||
        _e_target.closest("video") ||
        _e_target.closest("img")) {
          return;
        }
        if (m) {
          const pi = Date.now();
          if (pi - Dn.current < 300) {
            (Dn.current = 0);
            L();
            return;
          }
          Dn.current = pi;
          return;
        }
        if (gn.current !== _e_target) {
          gn.current = null;
          return;
        }
        gn.current = null;
        const fi = window.getSelection();

        if (!fi || fi.toString().length <= 0) {
          _t();
        }
      },
      [m, L, _t]
    );

    const pd = be(() => CC(t.author), [t.author]);

    const ui = be(() => oo(t.attachments), [t.attachments]);

    const Ze = be(() => sd(t.attachments), [t.attachments]);

    const di = i("div", {
      className: `${He.postInner} ${h ? He.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: He.avatarLink,
            children: i(rt, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: C,
              onFollowBadgeClick: x,
            }),
          }),
        i("div", {
          className: He.postContent,
          children: [
            i(F1, {
              author: pd,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: o,
              isPinned: s,
              onReport: ce,
              onEdit: d ?? me,
              onDelete: ae,
              onPin: f,
              onCopyLink: G,
            }),
            i("div", {
              className: He.postBody,
              children: [
                t.text &&
                  i("div", {
                    className: He.textWrapper,
                    children: [
                      i("div", {
                        ref: le,
                        className: `${He.text} ${Re ? He.collapsed : ""}`,
                        style: h && Re ? { maxHeight: `${H}px` } : undefined,
                        children: i(ed, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        Re &&
                        i("button", {
                          type: "button",
                          className: He.expandButton,
                          onClick: jt,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                ui.length > 0 &&
                  i(ci, { media: ui, isFeed: h, postVs: t.vs, source: c }),
                Ze &&
                  i(Te, {
                    fallback: null,
                    children: i(bC, {
                      title: Ze.question,
                      options: Ze.options.map(_e => ({
                        id: _e.id,
                        text: _e.text,
                        votes: _e.votes ?? 0
                      })),
                      totalVotes: Ze.totalVotes ?? 0,
                      voted:
                        (Ze.myVotes ?? []).length > 0 ||
                        (Ze.myVote !== undefined && Ze.myVote !== null),
                      selectedOptionId: Ze.myVote,
                      selectedOptionIds: Ze.myVotes ?? [],
                      multipleChoice: Ze.multipleChoice ?? false,
                      onVote: J,
                      onVoteMultiple: re,
                      disabled: Ze.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  i(SC, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                i(nd, {
                  compact: u,
                  emojiOnly: u,
                  flush: u,
                  infiniteLike: u,
                  liked: E,
                  reposted: w.reposted,
                  likesCount: A,
                  repostsCount: w.repostsCount,
                  commentsCount: w.commentsCount,
                  viewsCount: w.viewsCount,
                  dominantEmoji: w.dominantEmoji,
                  onLike: u ? j : I,
                  onRepost: u ? he : K,
                  onComment: u ? ge : W,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? i("article", {
          ref: F,
          className: `${He.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: Ce,
          onClick: fd,
          children: di,
        })
      : i("div", { ref: F, children: di });
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

const RC = "TPru";
const kC = "FSn1";
const AC = "n1xF";
const OC = "PAGm";
const PC = "XvER";
const LC = "exWh";
const xC = "l7cj";
const $C = "LrnT";
const MC = "n1VU";
const DC = "eGKN";
const UC = "LwQQ";
const FC = "J6ZE";
const HC = "Cdqz";
const BC = "SBOp";
const VC = "YHRL";
const WC = "PVx3";
const jC = "V5oY";
const zC = "LdXw";
const qC = "s9iJ";
const GC = "Lbm2";
const YC = "yovS";
const KC = "bQFl";
const XC = "uZ0b";
const QC = "hrUJ";

const de = {
  commentWrapper: RC,
  threadItem: kC,
  avatarWrapper: AC,
  threadLine: OC,
  commentBody: PC,
  showMoreBtn: LC,
  avatarPlaceholder: xC,
  comment: $C,
  small: MC,
  commentTime: DC,
  commentText: UC,
  commentActions: FC,
  commentContent: HC,
  avatarLink: BC,
  authorLink: VC,
  commentHeader: WC,
  moreButton: jC,
  commentHeaderLeft: zC,
  replyMention: qC,
  commentMedia: GC,
  reactionWrapper: YC,
  commentAction: KC,
  liked: XC,
  replyButton: QC,
};

const ZC = ie(() => ne(() => import("./index-DQNqsRgW.js"), __vite__mapDeps([25, 15, 26])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const JC = ho((
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
    onReply: f,
    onReport: p,
    onEdit: h,
    onDelete: m,
    replyTo: y,
    hideAvatar: g = false,
    isWallOwner: _ = false,
  }
) => {
  const v = Ru(a);

  const S = ye(C => C.profile?.id);

  const N = t.id === S;
  const w = N || _;
  const b = u === "xs";

  const R = be(() => {
    const C = [];

    if (N &&
      h) {
      C.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Pu, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (w &&
      m) {
      C.push({
        id: "delete",
        label: "Удалить",
        icon: i(Hu, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!N) {
      C.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(xu, { size: 16 }),
        danger: true,
        onClick: () => p(n),
      });
    }

    return C;
  }, [N, w, n, h, m, p]);

  const k = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${de.comment} ${b ? de.small : ""}`,
    children: [
      !g &&
        i("a", {
          href: k,
          className: de.avatarLink,
          children: i(rt, { src: t.avatar, alt: t.displayName, size: u }),
        }),
      i("div", {
        className: de.commentContent,
        children: [
          i("div", {
            className: de.commentHeader,
            children: [
              i("div", {
                className: de.commentHeaderLeft,
                children: [
                  i("a", {
                    href: k,
                    className: de.authorLink,
                    children: i(yr, {
                      name: t.displayName,
                      verified: t.isVerified,
                      hasNuksta: t.hasNuksta,
                      pin: t.pin,
                      size: u,
                    }),
                  }),
                  i("span", { className: de.commentTime, children: v }),
                ],
              }),
              i(Ju, {
                trigger: i(Mu, { size: b ? 14 : 16 }),
                items: R,
                position: "bottom-right",
                className: de.moreButton,
              }),
            ],
          }),
          (y || r) &&
            i("div", {
              className: de.commentText,
              children: [
                y &&
                  i(Ie, {
                    children: [
                      i("a", {
                        href: `/@${y.username}`,
                        className: de.replyMention,
                        children: ["@", y.displayName],
                      }),
                      ", ",
                    ],
                  }),
                r && i(ed, { text: r, spans: o }),
              ],
            }),
          oo(s).length > 0 &&
            i("div", {
              className: de.commentMedia,
              children: i(ci, { media: oo(s) }),
            }),
          s
            .filter(C => C.type === "audio")
            .map(C => i(
            Te,
            {
              fallback: null,
              children: i(ZC, { src: C.url, duration: C.duration }),
            },
            C.id
          )
            ),
          i("div", {
            className: de.commentActions,
            children: [
              i("button", {
                className: de.replyButton,
                onClick: f,
                children: "Ответить",
              }),
              i("div", {
                className: de.reactionWrapper,
                children: i("button", {
                  className: `${de.commentAction} ${l ? de.liked : ""}`,
                  onClick: () => d(),
                  children: [
                    i(Qs, { size: 14, filled: l }),
                    i(Xn, { value: c }),
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

const id = ho((
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
    onEdit: f,
    onDelete: p,
    isLoadingReplies: h = false,
    flashingCommentId: m,
    isWallOwner: y = false,
  }
) => {
  const g = o?.commentId === t.id;

  const _ = {
    id: t.author.id,
    username: t.author.username,
    avatar: t.author.avatar ?? "",
    displayName: t.author.displayName,
    isVerified: t.author.isVerified,
    pin: t.author.pin,
  };

  const v = t.previewReplies ?? [];
  const S = m === t.id;
  const N = t.stats.replies > v.length;

  const w = [
    { type: "parent", data: t, author: _ },
    ...v.map(b => ({
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
    className: `${de.commentWrapper} ${S ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      w.map((b, R) => {
        const C = !(R === w.length - 1 && !g && !N);
        const E = m === b.data.id;
        return i(
          "div",
          {
            "data-comment-id": b.data.id,
            className: `${de.threadItem} ${E ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: de.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${b.author.username ?? b.author.id}`,
                    className: de.avatarLink,
                    children: i(rt, {
                      src: b.author.avatar,
                      alt: b.author.displayName,
                      size: "sm",
                    }),
                  }),
                  C && i("div", { className: de.threadLine }),
                ],
              }),
              i("div", {
                className: de.commentBody,
                children: i(JC, {
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
                  onEdit: f,
                  onDelete: p,
                  hideAvatar: true,
                  isWallOwner: y,
                }),
              }),
            ],
          },
          b.data.id
        );
      }),
      g &&
        i("div", {
          className: de.threadItem,
          children: [
            i("div", {
              className: de.avatarWrapper,
              children: [
                i("div", { className: de.avatarPlaceholder }),
                N && i("div", { className: de.threadLine }),
              ],
            }),
            i("div", {
              className: de.commentBody,
              children: i(Zu, {
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
      N &&
        !h &&
        i("button", {
          className: de.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - v.length, " ответов"],
        }),
    ],
  });
});

function eN({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = o => o,
}) {
  const o = O(null);
  const [s, a] = P(0);
  const [c, l] = P(0);
  const u = O(new Map());
  const d = O(new Map());
  const f = O(0);

  if (f.current !== e) {
    (f.current = e);
    d.current.clear();
  }

  const p = T(
      (w) => {
        const b = r(w);
        return u.current.get(b) ?? t;
      },
      [r, t]
    );

  const h = T(
    (w) => {
      if (w === 0) {
        return 0;
      }
      const b = d.current.get(w);
      if (b !== undefined) {
        return b;
      }
      let R = 0;
      let k = 0;
      for (let C = w - 1; C >= 0; C--) {
        const E = d.current.get(C);
        if (E !== undefined) {
          (R = C);
          (k = E);
          break;
        }
      }
      for (let C = R; C < w; C++) {
        k += p(C);
      }
      d.current.set(w, k);
      return k;
    },
    [p]
  );

  const m = be(() => e === 0 ? 0 : h(e - 1) + p(e - 1), [e, h, p]);

  const { startIndex: y, endIndex: g } = be(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let w = 0;
    let b = e - 1;

    while (w < b) {
      const E = Math.floor((w + b) / 2);
      const A = h(E);
      const I = p(E);

      if (A + I < s) {
        (w = E + 1);
      } else {
        (b = E);
      }
    }

    const R = Math.max(0, w - n);
    let k = w;
    let C = h(w) - s;

    while (k < e && C < c + t * n) {
      (C += p(k));
      k++;
    }

    (k = Math.min(e - 1, k + n));
    return { startIndex: R, endIndex: k };
  }, [e, s, c, h, p, n, t]);

  const _ = be(() => {
    if (e === 0) {
      return [];
    }
    const w = [];
    for (let b = y; b <= g; b++) {
      w.push({ index: b, key: r(b), start: h(b), size: p(b) });
    }
    return w;
  }, [y, g, r, h, p, e]);

  const v = T(
    (w, b) => {
      if (!w) {
        return;
      }
      const R = r(b);
      const k = w.getBoundingClientRect().height;
      if (k <= 0) {
        return;
      }
      const C = u.current.get(R);

      if ((C === undefined || Math.abs(C - k) > 2)) {
        u.current.set(R, k);
        d.current.clear();
      }
    },
    [r]
  );

  const S = T(() => {
    if (o.current) {
      a(o.current.scrollTop);
    }
  }, []);

  const N = T(
    (w) => {
      if (o.current) {
        o.current.removeEventListener("scroll", S);
      }

      (o.current = w);

      if (w) {
        l(w.clientHeight);
        a(w.scrollTop);
        w.addEventListener("scroll", S, { passive: true });
      }
    },
    [S]
  );

  M(() => {
    if (!o.current) {
      return;
    }
    const w = new ResizeObserver((b) => {
      for (const R of b) {
        l(R.contentRect.height);
      }
    });
    w.observe(o.current);

    return () => w.disconnect();
  }, []);

  M(
    () => () => {
      if (o.current) {
        o.current.removeEventListener("scroll", S);
      }
    },
    [S]
  );

  return { containerRef: N, virtualItems: _, totalSize: m, measureElement: v };
}
const tN = "JaW1";
const nN = "sobw";
const rN = "ecnI";
const oN = "Kqa1";
const sN = "vosn";
const iN = "VFUz";
const aN = "Y6hp";
const cN = "zNLg";
const lN = "Y5cn";
const uN = "HGE1";
const dN = "w9Vy";

const Je = {
  comments: tN,
  sortWrapper: nN,
  sortSelect: rN,
  commentsList: oN,
  commentItem: sN,
  empty: iN,
  loadMoreSentinel: aN,
  virtualContainer: cN,
  virtualContent: lN,
  virtualItem: uN,
  inputWrapper: dN,
};

const fN = 120;
function pN({
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
  onCancelReply: f,
  onSubmitReply: p,
  onVoiceSend: h,
  onLoadReplies: m,
  onReport: y,
  onEdit: g,
  onDelete: _,
}) {
  const v = O(false);

  const {
    containerRef: S,
    virtualItems: N,
    totalSize: w,
    measureElement: b,
  } = eN({
    itemCount: e.length,
    estimatedItemHeight: fN,
    overscan: 3,
    getItemKey: k => e[k]?.id ?? k,
  });

  M(() => {
    if (!t || n || N.length === 0) {
      v.current = false;
      return;
    }
    const k = N[N.length - 1]?.index ?? 0;
    const C = e.length - 5;

    if (k >= C && !v.current) {
      (v.current = true);
      r();
    }
  }, [N, e.length, t, n, r]);

  M(() => {
    if (!n) {
      (v.current = false);
    }
  }, [n]);

  const R = T(
    (k, C) => {
      b(k, C);
    },
    [b]
  );
  return i("div", {
    ref: S,
    className: Je.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: Je.virtualContent,
        style: { height: `${w}px` },
        children: N.map((k) => {
          const C = e[k.index];
          return C
            ? i(
                "div",
                {
                  ref: E => R(E, k.index),
                  className: Je.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${k.start}px)`,
                  },
                  children: i(id, {
                    comment: C,
                    onLike: () => l(C.id),
                    onLikeReply: u,
                    replyingTo: o?.commentId === C.id ? o : null,
                    onStartReply: d,
                    onCancelReply: f,
                    onSubmitReply: p,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: y,
                    onEdit: g,
                    onDelete: _,
                    isLoadingReplies: a === C.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                k.key
              )
            : null;
        }),
      }),
      n && i(ai, { variant: "medium" }),
    ],
  });
}
const hN = "buXZ";
const mN = "iCxL";
const gN = "GlGi";
const Vo = { wrapper: hN, popup: mN, closing: gN };

const _N = ie(() => ne(() => import("./index-JCEeCEco.js"), __vite__mapDeps([27, 28])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const Cc = 280;
const Nc = 380;
const Wo = 8;
const yN = 100;
const Ic = 150;
const vN = 150;
function li({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, o] = P(false);
  const [s, a] = P(false);
  const [c, l] = P(null);
  const u = O(null);
  const d = O(null);
  const f = O(null);
  const p = O(null);
  const h = O(null);
  const m = O(null);

  const y = T(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const k = u_current.getBoundingClientRect();

    const {
      innerHeight,
      innerWidth
    } = window;

    const A = innerHeight - k.bottom;
    const I = innerWidth - k.left;
    const k_right = k.right;
    const W = A >= Nc + Wo ? "bottom" : "top";
    const K = I >= Cc || I > k_right ? "left" : "right";
    let ce;
    let me;

    if (W === "top") {
      (ce = k.top - Nc - Wo);
    } else {
      (ce = k.bottom + Wo);
    }

    if (K === "left") {
      (me = k.left);
    } else {
      (me = k.right - Cc);
    }

    l({
      top: ce,
      left: me,
      transformOrigin: `${W === "top" ? "bottom" : "top"} ${
        K === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const g = T(() => {
    if (!r && !s) {
      y();
      o(true);
    }
  }, [r, s, y]);

  const _ = T(() => {
    if (r && !s) {
      a(true);

      (m.current = window.setTimeout(() => {
        o(false);
        a(false);
      }, vN));
    }
  }, [r, s]);

  const v = () => {
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
          g();
        }, yN));
    }
  };

  const S = () => {
    if (p.current) {
      clearTimeout(p.current);
      (p.current = null);
    }

    (h.current = window.setTimeout(() => {
        _();
      }, Ic));
  };

  M(
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

  const N = () => {
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

  const w = () => {
    h.current = window.setTimeout(() => {
      _();
    }, Ic);
  };

  const b = (R) => {
    R.preventDefault();
  };

  return i("div", {
    ref: d,
    className: Vo.wrapper,
    onMouseEnter: v,
    onMouseLeave: S,
    onMouseDown: b,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(ky, { size: n }),
      }),
      r &&
        c &&
        Wt(
          i("div", {
            ref: f,
            className: `${Vo.popup} ${s ? Vo.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: N,
            onMouseLeave: w,
            onMouseDown: b,
            children: i(Te, {
              fallback: null,
              children: i(_N, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const EN = "oiFC";
const wN = "nlHC";
const SN = "Sd4L";
const bN = "EBZu";
const CN = "LIlR";
const NN = "DRsQ";
const IN = "lpWz";
const TN = "tqfn";
const RN = "Hkxh";
const kN = "oPpE";
const AN = "wWvf";
const ON = "xl3n";

const Ge = {
  editCommentModal: EN,
  form: wN,
  header: SN,
  title: bN,
  content: CN,
  editor: NN,
  actions: IN,
  mediaButtons: TN,
  mediaButton: RN,
  submitGroup: kN,
  charCount: AN,
  error: ON,
};

const Tc = 2000/* 2e3 */;
function PN({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = mn();

  const o = Ut(w => w.editComment);

  const s = ye(w => w.profile);

  const a = It();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: f,
  } = mo(t, n);

  const [p, h] = P(false);
  const m = Tc - c.length;
  const y = m < 0;
  const g = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const v = g || _;

  const S = T(
    (w) => {
      f(w.emoji);
    },
    [f]
  );

  const N = T(async () => {
    if (!(!c.trim() || y || !v || p)) {
      h(true);
      try {
        await o(e, c, l);
        r();
      } catch (w) {
        console.error("Failed to update comment:", w);
      } finally {
        h(false);
      }
    }
  }, [c, l, y, v, p, o, e, r]);

  return i(hn, {
    frameless: true,
    onClose: r,
    className: Ge.editCommentModal,
    children: i("div", {
      className: Ge.form,
      children: [
        i("div", {
          className: Ge.header,
          children: i("span", {
            className: Ge.title,
            children: "Редактирование комментария",
          }),
        }),
        i("div", {
          className: Ge.content,
          children: [
            i(rt, { src: s?.avatar ?? "", size: "sm" }),
            i(_o, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Комментарий...",
              maxLength: Tc,
              autoFocus: true,
              className: Ge.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        i("div", {
          className: Ge.actions,
          children: [
            i("div", {
              className: Ge.mediaButtons,
              children:
                !a &&
                i(li, { onEmojiSelect: S, buttonClassName: Ge.mediaButton }),
            }),
            i("div", {
              className: Ge.submitGroup,
              children: [
                y &&
                  i("span", {
                    className: `${Ge.charCount} ${Ge.error}`,
                    children: m,
                  }),
                i(ke, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                i(ke, {
                  size: "md",
                  disabled: !c.trim() || y || !v || p,
                  onClick: N,
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
const LN = ie(() => ne(() => import("./index-XmQeCW1p.js"), __vite__mapDeps([20, 21, 22])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function xN({
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
  variant: f = "modal",
  hideInput: p = false,
}) {
  const m = It() && f === "modal";
  const [y, g] = P(null);
  const [_, v] = P(null);
  const [S, N] = P(null);
  const [w, b] = P(null);
  const R = O(null);
  const { openModal: k } = mn();

  const C = Ut(j => j.highlightedCommentId);

  const E = Ut(j => j.clearHighlightedComment);

  const A = Ut(j => j.loadReplies);

  const I = Ut(j => j.deleteComment);

  const L = Ut(j => j.toggleCommentLike);

  J_({
    sentinelRef: R,
    hasMore: r,
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
    let j = false;
    const ge = [];

    const he = (x) => {
      if (j) {
        return;
      }
      const F = document.querySelector(`[data-comment-id="${C}"]`);
      if (!F) {
        if (x > 0) {
          ge.push(window.setTimeout(() => he(x - 1), 150));
        } else {
          E();
        }

        return;
      }
      F.scrollIntoView({ behavior: "smooth", block: "center" });
      v(C);
      E();

      ge.push(window.setTimeout(() => v(null), 900));
    };

    he(40);

    return () => {
      (j = true);

      ge.forEach(x => clearTimeout(x));
    };
  }, [C, E]);

  const W = async (j, ge, he) => {
    if (y) {
      await c({
          text: j,
          spans: ge,
          parentId: y.commentId,
          replyToUserId: y.userId,
          replyToInfo: {
            id: y.userId,
            username: y.username,
            displayName: y.displayName,
          },
          attachments: he,
        });

      g(null);
    }
  };

  const K = (j, ge, he, x, F) => {
    g({ commentId: j, username: ge, displayName: he, userId: x, replyId: F });
  };

  const ce = () => {
    g(null);
  };

  const me = T(
    (j) => {
      L(j);
    },
    [L]
  );

  const ae = T(
    async (j) => {
      N(j);
      try {
        await A(j);
      } finally {
        N(null);
      }
    },
    [A]
  );

  const G = T((j) => {
    b(j);
  }, []);

  const J = T(
    (j) => {
      let ge = "";
      let he = [];
      for (const x of e) {
        if (x.id === j) {
          (ge = x.text);
          (he = x.spans ?? []);
          break;
        }
        const F = x.previewReplies?.find(z => z.id === j);
        if (F) {
          (ge = F.text);
          (he = F.spans ?? []);
          break;
        }
      }
      k(i(PN, { commentId: j, initialText: ge, initialSpans: he }));
    },
    [e, k]
  );

  const re = T(
    (j) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        I(j);
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
          onChange: j => s(j.target.value),
          className: Je.sortSelect,
          children: [
            i("option", { value: "new", children: "Новые" }),
            i("option", { value: "old", children: "Старые" }),
            i("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? i(Vw, { count: 5 })
        : e.length === 0
        ? i("div", { className: Je.empty, children: "Нет комментариев" })
        : m
        ? i(pN, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: y,
            flashingCommentId: _,
            loadingRepliesId: S,
            isWallOwner: d,
            onLikeComment: a,
            onLikeReply: me,
            onStartReply: K,
            onCancelReply: ce,
            onSubmitReply: W,
            onVoiceSend: l,
            onLoadReplies: ae,
            onReport: G,
            onEdit: J,
            onDelete: re,
          })
        : i("div", {
            className: Je.commentsList,
            children: [
              e.map(j => i(
                "div",
                {
                  className: Je.commentItem,
                  children: i(id, {
                    comment: j,
                    onLike: () => a(j.id),
                    onLikeReply: me,
                    replyingTo: y?.commentId === j.id ? y : null,
                    onStartReply: K,
                    onCancelReply: ce,
                    onSubmitReply: W,
                    onVoiceSend: l,
                    onLoadReplies: ae,
                    onReport: G,
                    onEdit: J,
                    onDelete: re,
                    isLoadingReplies: S === j.id,
                    flashingCommentId: _,
                    isWallOwner: d,
                  }),
                },
                j.id
              )
              ),
              r &&
                i("div", {
                  ref: R,
                  className: Je.loadMoreSentinel,
                  children: n && i(ai, { variant: "medium" }),
                }),
            ],
          }),
      !p &&
        i("div", {
          className: Je.inputWrapper,
          children: i(Zu, {
            onSubmit: (j, ge, he) => c({ text: j, spans: ge, attachments: he }),
            onVoiceSend: l,
          }),
        }),
      w &&
        i(Te, {
          fallback: null,
          children: i(LN, {
            targetType: "comment",
            targetId: w,
            onClose: () => b(null),
          }),
        }),
    ],
  });
}
const $N = "tzwB";
const MN = "ci8g";
const DN = "nhyH";
const UN = "rrsr";
const Pr = { commentsModal: $N, header: MN, title: DN, content: UN };
function FN({ postId: e, onClose: t }) {
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
    addComment: f,
  } = Ut(
    mc(S => ({
      comments: S.comments,
      commentsLoading: S.commentsLoading,
      commentsLoadingMore: S.commentsLoadingMore,
      commentsHasMore: S.commentsHasMore,
      clearComments: S.clearComments,
      fetchComments: S.fetchComments,
      loadMoreComments: S.loadMoreComments,
      toggleCommentLike: S.toggleCommentLike,
      addComment: S.addComment
    }))
  );

  const { commentsSort: p, setCommentsSort: h } = Vr(
    mc(S => ({
      commentsSort: S.commentsSort,
      setCommentsSort: S.setCommentsSort
    }))
  );

  if (n.current !== e) {
    (n.current = e);
    c();
  }

  M(() => {
    l(e);
  }, [e, l]);

  const m = T(
      (S) => {
        h(S);
        l(e);
      },
      [h, l, e]
    );

  const y = T(() => {
    if (a && !s) {
      u(e);
    }
  }, [a, s, u, e]);

  const g = T(
    (S) => {
      d(S);
    },
    [d]
  );

  const _ = T(
    async (S) => {
      await f(e, S);
    },
    [f, e]
  );

  const v = T(
    async (S) => {
      const N = `voice_${Date.now()}.webm`;
      const w = new File([S], N, { type: S.type || "audio/webm" });
      const b = await Sn.uploadMedia(w);
      await f(e, { text: "", attachments: [{ mediaId: b.id }] });
    },
    [f, e]
  );

  return i(hn, {
    frameless: true,
    onClose: t,
    className: Pr.commentsModal,
    children: [
      i("div", {
        className: Pr.header,
        children: i("span", { className: Pr.title, children: "Комментарии" }),
      }),
      i("div", {
        className: Pr.content,
        "data-comments-modal": true,
        children: i(xN, {
          comments: r,
          isLoading: o,
          isLoadingMore: s,
          hasMore: a,
          sort: p,
          onSortChange: m,
          onLikeComment: g,
          onAddComment: _,
          onVoiceSend: v,
          onLoadMore: y,
        }),
      }),
    ],
  });
}
const HN = ie(() => ne(() => import("./index-CGa45akZ.js"), __vite__mapDeps([29, 30])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);
function ad({
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
    } = mo();

  const [u, d] = P(false);
  const [f, p] = P(false);
  const [h, m] = P(false);
  const y = O(0);
  const g = It();
  const v = si()?.subscription?.isActive ?? false;

  const {
    images: S,
    uploadingImages: N,
    isUploading: w,
    hasVideo: b,
    openFilePicker: R,
    removeImage: k,
    addImage: C,
    uploadFiles: E,
    clearAll: A,
    fileInputRef: I,
    handleFileChange: L,
  } = Xu(10, v);

  const {
    isPollOpen: W,
    poll: K,
    togglePoll: ce,
    handlePollQuestionChange: me,
    handlePollOptionChange: ae,
    handleAddPollOption: G,
    handleRemovePollOption: J,
    handleMultipleChoiceToggle: re,
    handleClosePoll: j,
    isPollValid: ge,
    getPollData: he,
    resetPoll: x,
  } = Ww();

  const F = bt.MAX_CHARS - r.length;
  const z = F < 0;
  const D = W && ge();
  const H = S.length > 0 || N.length > 0;
  const Y = r.trim().length > 0 || D || H;
  const oe = v ? `${Es},${ov}` : Es;

  const Oe = T(async () => {
    if (!(!Y || z || w || f)) {
      p(true);
      try {
        const Ce = S.map(_t => ({
          mediaId: _t.mediaId,
          url: _t.url
        }));
        await e?.(r, o, Ce, he());
        l();
        A();
        x();
      } catch {
      } finally {
        p(false);
      }
    }
  }, [Y, z, w, f, r, o, S, he, e, l, A, x]);

  const Re = T(
    (Ce) => {
      C(Ce);
    },
    [C]
  );

  const le = T(
    (Ce) => {
      c(Ce.emoji);
    },
    [c]
  );

  const jt = T((Ce) => {
    Ce.preventDefault();
    Ce.stopPropagation();
    y.current++;

    if (Ce.dataTransfer?.types.includes("Files")) {
      m(true);
    }
  }, []);

  const gt = T((Ce) => {
    Ce.preventDefault();
    Ce.stopPropagation();
  }, []);

  const gn = T((Ce) => {
    Ce.preventDefault();
    Ce.stopPropagation();
    y.current--;

    if (y.current === 0) {
      m(false);
    }
  }, []);

  const Dn = T(
    (Ce) => {
      Ce.preventDefault();
      Ce.stopPropagation();
      (y.current = 0);
      m(false);
      const _t = Ce.dataTransfer?.files;

      if (_t && _t.length > 0) {
        E(Array.from(_t));
      }
    },
    [E]
  );

  return i("div", {
    className: `${ee.form} ${h ? ee.dragActive : ""}`,
    onDragEnter: jt,
    onDragOver: gt,
    onDragLeave: gn,
    onDrop: Dn,
    children: [
      h &&
        i("div", {
          className: ee.dragOverlay,
          children: [
            i($u, { size: 32 }),
            i("span", {
              children: v ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      i("div", {
        className: ee.whatsNew,
        children: i(_o, {
          ref: s,
          value: r,
          spans: o,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: ee.editor,
          minHeight: 40,
          maxHeight: bt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: E,
        }),
      }),
      i(Qu, { images: S, uploadingImages: N, onRemove: k }),
      i("input", {
        ref: I,
        type: "file",
        accept: oe,
        multiple: !b,
        onChange: L,
        style: { display: "none" },
      }),
      W &&
        i(NS, {
          poll: K,
          onQuestionChange: me,
          onOptionChange: ae,
          onAddOption: G,
          onRemoveOption: J,
          onMultipleChoiceToggle: re,
          onClose: j,
        }),
      i("div", {
        className: ee.actions,
        children: [
          i("div", {
            className: ee.mediaButtons,
            children: [
              i("button", {
                className: ee.mediaButton,
                onClick: R,
                title: v ? "Добавить медиа" : "Добавить изображение",
                children: i(Au, {}),
              }),
              !g &&
                i(li, { onEmojiSelect: le, buttonClassName: ee.mediaButton }),
              i("button", {
                className: ee.mediaButton,
                onClick: () => d(true),
                title: "Нарисовать",
                disabled: b,
                children: i(Ty, { size: 20 }),
              }),
              i("button", {
                className: `${ee.mediaButton} ${W ? ee.active : ""}`,
                onClick: ce,
                title: "Добавить опрос",
                children: i(Ry, {}),
              }),
            ],
          }),
          i("div", {
            className: ee.submitGroup,
            children: [
              z &&
                i("span", {
                  className: `${ee.charCount} ${ee.error}`,
                  children: F,
                }),
              i(ke, {
                size: "lg",
                disabled: !Y || z || w || f,
                loading: f,
                onClick: Oe,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        i(Te, {
          fallback: null,
          children: i(HN, {
            isOpen: u,
            onClose: () => d(false),
            onSave: Re,
            mode: "post",
          }),
        }),
    ],
  });
}
const BN = "khOD";
const VN = "pzz4";
const Rc = { createPostModal: BN, title: VN };
function WN({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: r } = mn();

  const o = ye(c => c.profile);

  const s = te(c => c.createPost);

  const a = async (c, l, u, d) => {
    if (!o) {
      return;
    }
    const f = e ?? o.id;
    await s({ wallOwnerId: f, text: c, spans: l, attachments: u, poll: d });
    await n?.();
    r();
  };

  return i(hn, {
    frameless: true,
    onClose: r,
    className: Rc.createPostModal,
    children: [
      i("h2", { className: Rc.title, children: "Создать пост" }),
      i(ad, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const jN = "KQH5";
const zN = "VyS1";
const qN = "Tl3p";
const GN = "K9c6";
const YN = "Fnme";
const KN = "C9fk";
const XN = "qSVA";
const QN = "B8t4";
const ZN = "tqUZ";
const JN = "evvZ";

const it = {
  editPostModal: jN,
  form: zN,
  whatsNew: qN,
  editor: GN,
  actions: YN,
  mediaButtons: KN,
  mediaButton: XN,
  submitGroup: QN,
  charCount: ZN,
  error: JN,
};

const kc = 5000/* 5e3 */;
function eI({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = mn();

  const o = te(w => w.editPost);

  const s = ye(w => w.profile);

  const a = It();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: f,
  } = mo(t, n);

  const [p, h] = P(false);
  const m = kc - c.length;
  const y = m < 0;
  const g = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const v = g || _;

  const S = T(
    (w) => {
      f(w.emoji);
    },
    [f]
  );

  const N = T(async () => {
    if (!(!c.trim() || y || !v || p)) {
      h(true);
      try {
        await o(e, c, l);
        r();
      } catch (w) {
        console.error("Failed to update post:", w);
      } finally {
        h(false);
      }
    }
  }, [c, l, y, v, p, o, e, r]);

  return i(hn, {
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
            i(_o, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Что нового?",
              maxLength: kc,
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
                i(li, { onEmojiSelect: S, buttonClassName: it.mediaButton }),
            }),
            i("div", {
              className: it.submitGroup,
              children: [
                y &&
                  i("span", {
                    className: `${it.charCount} ${it.error}`,
                    children: m,
                  }),
                i(ke, {
                  size: "lg",
                  disabled: !c.trim() || y || !v,
                  loading: p,
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
const tI = "RCy5";
const nI = "RIZs";
const rI = "cp3l";
const oI = "d6rZ";
const sI = "EVcB";
const iI = "pFuX";
const aI = "vL0Q";
const cI = "ljR5";
const lI = "u4Rx";

const vt = {
  repostModal: tI,
  content: nI,
  title: rI,
  inputSection: oI,
  textarea: sI,
  originalPost: iI,
  postHeader: aI,
  postText: cI,
  actions: lI,
};

function uI({ post: e, onClose: t, onSuccess: n }) {
  const [r, o] = P("");
  const [s, a] = P(false);

  const c = ye(f => f.profile);

  const l = te(f => f.updatePostReposted);

  const u = te(f => f.prependPost);

  const d = async () => {
    a(true);
    try {
      const f = await Me.createRepost(e.id, r.trim() || undefined);
      l(e.id, true, e.reposted ? 0 : 1);
      u(f);

      if (c?.username) {
        Me.invalidateWallCache(c.username);
      }

      n?.();
      t();
    } catch (f) {
      console.error("Failed to create repost:", f);
    } finally {
      a(false);
    }
  };

  return i(hn, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: vt.repostModal,
    children: i("div", {
      className: vt.content,
      children: [
        i("h2", { className: vt.title, children: "Репост" }),
        i("div", {
          className: vt.inputSection,
          children: [
            c && i(rt, { src: c.avatar, alt: c.displayName, size: "sm" }),
            i("textarea", {
              className: vt.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: f => o(f.target.value),
              rows: 3,
            }),
          ],
        }),
        i("div", {
          className: vt.originalPost,
          children: [
            i("div", {
              className: vt.postHeader,
              children: [
                i(rt, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                i(yr, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            i("p", { className: vt.postText, children: e.text }),
          ],
        }),
        i("div", {
          className: vt.actions,
          children: [
            i(ke, {
              variant: "secondary",
              onClick: (f) => {
                f.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            i(ke, {
              variant: "primary",
              onClick: (f) => {
                f.stopPropagation();
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

const dI = () => {
  const e = si();
  const t = go();
  const { initialize: n, disconnectSSE: r } = dn();
  const o = Tu();

  const s = Ks(E => E.fetchPortal);

  M(
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

  M(() => {
    s();
  }, [s]);

  const a = e?.username ? `/@${e.username}` : "/profile";

  const c = be(
    () => [
      { id: "feed", label: "Лента", icon: Lu, href: "/" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: Du,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: vs, href: a },
    ],
    [a]
  );

  const [l, u] = P({});
  const [d, f] = P(true);
  const p = O([]);
  const h = O(null);
  const [m] = _r();
  const { openModal: y } = mn();

  const g = te(E => E.fetchFeed);

  const _ = te(E => E.isRefreshing);

  const v = Vu();
  const S = Yu();

  const N = T(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      g(true);
    }
  }, [g]);

  const w = be(() => {
    const E = m.url || "/";
    return ti.some(A => E.startsWith(A));
  }, [m.url]);

  const b = be(() => {
    const E = m.url || "/";
    return e?.username
      ? E === `/@${e.username}` || E.startsWith(`/@${e.username}/`)
      : false;
  }, [m.url, e?.username]);

  const R = O(null);

  const k = T((E, A = false) => {
    if (!A && R.current === E) {
      return;
    }
    R.current = E;
    const I = p.current[E];
    const h_current = h.current;
    if (I && h_current) {
      const W = parseFloat(getComputedStyle(h_current).paddingLeft) || 0;

      u({
        width: I.offsetWidth,
        transform: `translateX(${I.offsetLeft - W}px)`,
      });

      f(true);
    }
  }, []);

  M(() => {
    const E = m.url || "/";

    const A = c.findIndex(
      I => E === I.href ||
      E.startsWith(`${I.href}/`) ||
      (I.id === "profile" && b)
    );

    if (A === -1) {
      f(false);
    } else {
      k(A, true);
    }
  }, [m.url, c, b, k]);

  M(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }
    const A = h_current.querySelector(`.${Fe.active}`);
    if (A) {
      const I = p.current.indexOf(A);

      if (I !== -1) {
        (R.current = null);
        k(I);
      }
    }
  }, []);

  M(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }

    const A = () => {
        const L = h_current.querySelector(`.${Fe.active}`);
        if (L) {
          const W = p.current.indexOf(L);

          if (W !== -1) {
            k(W, true);
          }
        }
      };

    const I = new ResizeObserver(A);
    I.observe(h_current);
    window.addEventListener("resize", A);

    return () => {
      I.disconnect();
      window.removeEventListener("resize", A);
    };
  }, [k]);

  const C = () => {
    y(i(WN, {}));
  };
  return w
    ? null
    : i("div", {
        className: Fe.mobileNavigationWrapper,
        children: [
          i("nav", {
            ref: h,
            className: Fe.navigation,
            children: [
              i("div", {
                className: `${Fe.indicator} ${d ? "" : Fe.indicatorHidden}`,
                style: l,
              }),
              c.map((E, A) => {
                const E_icon = E.icon;
                const L = E.id === "event";
                const W = L && o.active && !!o.url;
                const K = m.url || "/";

                const me =
                  K === E.href ||
                  K.startsWith(`${E.href}/`) ||
                  (E.id === "profile" && b);

                return i(
                  "a",
                  {
                    href: W ? o.url : E.href,
                    target: W ? "_blank" : undefined,
                    rel: W ? "noopener noreferrer" : undefined,
                    ref: (ae) => {
                      (p.current[A] = ae);

                      if (ae && me) {
                        k(A);
                      }
                    },
                    className: `${Fe.navItem} ${me ? Fe.active : ""}`,
                    onClick: (ae) => {
                      if (me && E.id === "feed") {
                        ae.preventDefault();
                        N();
                      }
                    },
                    children: [
                      i("span", {
                        className: Fe.iconWrapper,
                        children: L
                          ? i("img", {
                              src: o.active
                                ? "/assets/portal/portal-active.gif"
                                : "/assets/portal/portal-inactive.png",
                              alt: "Ивент",
                              className: `${Fe.portalImage} ${
                                o.active ? Fe.portalImageActive : ""
                              }`,
                            })
                          : i(Ie, {
                              children: [
                                E.id === "feed" && _ ? i(Zs, {}) : i(E_icon, {}),
                                E.id === "notifications" &&
                                  v > 0 &&
                                  i("span", {
                                    className: Fe.badge,
                                    children: v > 99 ? "99+" : v,
                                  }),
                                E.id === "shop" &&
                                  S > 0 &&
                                  i("span", {
                                    className: Fe.badge,
                                    children: S,
                                  }),
                              ],
                            }),
                      }),
                      i("span", { className: Fe.label, children: E.label }),
                    ],
                  },
                  E.id
                );
              }),
            ],
          }),
          t &&
            i("button", {
              className: Fe.createButton,
              onClick: C,
              "aria-label": "Создать пост",
              children: i(Js, {}),
            }),
        ],
      });
};

const fI = "QN2b";
const pI = "aqge";
const hI = "B7vt";
const mI = "UgFG";
const Lr = { badge: fI, red: pI, green: hI, blue: mI };
function gI({ type: e }) {
  const t =
    e === "like"
      ? Lr.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? Lr.green
      : Lr.blue;
  return i("div", {
    className: `${Lr.badge} ${t}`,
    children: [
      e === "follow" && i(Js, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(Ou, { size: 12, filled: true }),
      e === "like" && i(Qs, { size: 12, filled: true }),
      e === "repost" && i(ei, { size: 12 }),
    ],
  });
}
const _I = "KJQ8";
const yI = "Oq1t";
const vI = "i7US";
const EI = "dSY7";
const wI = "w7yy";
const SI = "NWlV";
const bI = "AohX";
const CI = "BFCN";
const NI = "Thfk";
const II = "Kya5";
const TI = "qbbF";

const Ke = {
  container: _I,
  clearAllButton: yI,
  toastList: vI,
  toast: EI,
  toastLeft: wI,
  toastData: SI,
  title: bI,
  message: CI,
  dragging: NI,
  closeButton: II,
  belowTabs: TI,
};

const RI = kn(null);
function kI({ children: e }) {
  const [t, n] = P([]);

  const r = T((c) => {
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

  const o = T((c) => {
    n(l => l.filter(u => u.id !== c));
  }, []);

  const s = T(() => {
    n([]);
  }, []);

  const a = tv();

  M(() => {
    if (a) {
      const c = PI(a.type);

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

      dn.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return i(RI.Provider, {
    value: { toasts: t, addToast: r, removeToast: o, clearAll: s },
    children: [e, i(AI, { toasts: t, onRemove: o, onClearAll: s })],
  });
}
function AI({ toasts: e, onRemove: t, onClearAll: n }) {
  const [r, o] = P(false);

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
    className: `${Ke.container} ${s ? Ke.belowTabs : ""} ym-hide-content`,
    children: [
      i("div", {
        className: `${Ke.toastList} ${r ? Ke.clearing : ""}`,
        children: a.map((l, u) => i(
          xI,
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
        i(ke, {
          className: Ke.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const OI = 80;
function PI(e) {
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
function LI(e) {
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
function xI({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const o = O(null);
  const [s, a] = P(0);
  const [c, l] = P(false);
  const [u, d] = P(false);
  const f = O(0);
  const p = O(false);

  const h = (w) => {
    (f.current = w.clientX);
    (p.current = false);
    l(true);
  };

  const m = T(
    (w) => {
      if (!c) {
        return;
      }
      const b = w.clientX - f.current;

      if (Math.abs(b) > 5) {
        (p.current = true);
      }

      a(b);
    },
    [c]
  );

  const y = T(() => {
    if (c) {
      l(false);

      if (Math.abs(s) > OI) {
        d(true);
        a(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!p.current) {
          const w = LI(e);

          if (w) {
            qe(w);
            t(e.id);
          }
        }
      }
    }
  }, [c, s, t, e]);

  M(() => {
    if (c) {
      document.addEventListener("mousemove", m);
      document.addEventListener("mouseup", y);

      return () => {
        document.removeEventListener("mousemove", m);
        document.removeEventListener("mouseup", y);
      };
    }
  }, [c, m, y]);

  const g = (w) => {
    (f.current = w.touches[0].clientX);
    l(true);
  };

  const _ = (w) => {
    if (!c) {
      return;
    }
    const b = w.touches[0].clientX - f.current;
    a(b);
  };

  const v = () => {
    y();
  };

  const S = u || r ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const N = r ? 400 : s;
  return i("div", {
    ref: o,
    className: `${Ke.toast} ${c ? Ke.dragging : ""}`,
    style: {
      transform: `translateX(${N}px)`,
      opacity: S,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: h,
    onTouchStart: g,
    onTouchMove: _,
    onTouchEnd: v,
    children: [
      i("div", {
        className: Ke.toastLeft,
        children: [
          i(rt, {
            src: e.actorAvatar || "",
            badge: i(gI, { type: e.notificationType }),
          }),
          i("div", {
            className: Ke.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: Ke.title,
                  children: i(yr, { name: e.actorName }),
                }),
              i("p", { className: Ke.message, children: e.message }),
            ],
          }),
        ],
      }),
      i("button", {
        className: Ke.closeButton,
        onClick: (w) => {
          w.stopPropagation();
          t(e.id);
        },
        onMouseDown: w => w.stopPropagation(),
        onTouchStart: w => w.stopPropagation(),
        children: i(pt, { size: 16 }),
      }),
    ],
  });
}
const $I = "KXnm";
const MI = "BgNI";
const DI = "ZNJR";
const UI = "QBSo";
const FI = "qOye";
const HI = "NmBy";
const BI = "Jtsq";
const VI = "krI2";
const WI = "XTy7";
const jI = "qvDS";

const Jt = {
  container: $I,
  toast: MI,
  slideUp: DI,
  leaving: UI,
  fadeOut: FI,
  success: HI,
  icon: BI,
  message: VI,
  closeButton: WI,
  error: jI,
};

const zI = { success: Ay, error: Ny };
function qI({ id: e, type: t, message: n, onRemove: r }) {
  const [o, s] = P(false);
  const zI_t = zI[t];

  const c = T(() => {
    s(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return i("div", {
    className: `${Jt.toast} ${Jt[t]} ${o ? Jt.leaving : ""}`,
    children: [
      i("span", { className: Jt.icon, children: i(zI_t, { size: 20 }) }),
      i("span", { className: Jt.message, children: n }),
      i("button", {
        className: Jt.closeButton,
        onClick: c,
        children: i(pt, { size: 14 }),
      }),
    ],
  });
}
function GI() {
  const e = Qr(n => n.toasts);

  const t = Qr(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: Jt.container,
        children: e.map(n => i(
          qI,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const YI = "gSRh";
const KI = "ebXQ";
const XI = "BUq7";
const QI = "jJar";
const xr = { tabs: YI, indicator: KI, button: XI, active: QI };
function ZI({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: o = "",
}) {
  const [s, a] = P(t);
  const c = n !== undefined ? n : s;
  const [l, u] = P({});
  const d = O([]);
  const f = O(null);
  const p = O(false);

  const h = T(() => {
    const _ = d.current[c];
    if (_) {
      const _parentElement = _.parentElement;
      const S = _parentElement ? parseFloat(getComputedStyle(_parentElement).paddingLeft) : 0;
      const N = !p.current;

      u({
        width: _.offsetWidth,
        transform: `translateX(${_.offsetLeft - S}px)`,
        ...(N ? { transition: "none" } : {}),
      });

      if (N) {
        requestAnimationFrame(() => {
          (p.current = true);

          u((w) => {
            const { transition: b, ...R } = w;
            return R;
          });
        });
      }
    }
  }, [c]);

  M(() => {
    h();
  }, [h]);

  M(() => {
    const f_current = f.current;
    if (!f_current) {
      return;
    }
    const v = new ResizeObserver(() => {
      h();
    });
    v.observe(f_current);

    return () => {
      v.disconnect();
    };
  }, [h]);

  const m = (_) => {
    if (n === undefined) {
      a(_);
    }

    r?.(_, e[_]);
  };

  const y = _ => typeof _ == "string" ? _ : _.label;

  const g = (_, v) => typeof _ == "string" ? `${v}` : _.id;

  return i("div", {
    ref: f,
    className: `${xr.tabs} ${o}`,
    children: [
      i("div", { className: xr.indicator, style: l }),
      e.map((_, v) => i(
        "button",
        {
          ref: (S) => {
            d.current[v] = S;
          },
          onClick: () => m(v),
          className: `${xr.button} ${c === v ? xr.active : ""}`,
          children: y(_),
        },
        g(_, v)
      )
      ),
    ],
  });
}
const JI = ie(() => ne(
  () => import("./index-DQjhJtdW.js"),
  __vite__mapDeps([31, 32, 10, 9, 33])
).then(e => ({
  default: e.ImageViewer
}))
);
function eT() {
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
  } = Su();
  return e
    ? i(Te, {
        fallback: null,
        children: i(
          JI,
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
const tT = "d2Jt";
const nT = "ZPS4";
const rT = "htCo";
const oT = "LHxV";
const $r = { layout: tT, wrapper: nT, wrapperShop: rT, content: oT };

const sT = ie(() => ne(() => import("./index-FGA-vBm7.js"), __vite__mapDeps([34, 35])).then(
  e => ({
    default: e.AuthLayout
  })
)
);

const iT = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const aT = [
  "/legal",
  "/terms",
  "/privacy",
  "/cookies",
  "/child-safety",
  "/subscription-terms",
  "/recurring-terms",
];

const cT = [...aT, "/external", "/support", "/delete-account"];
const lT = ["/shop"];

const uT = ({ children: e }) => {
  const t = It();
  const n = go();
  const r = Z_();
  const [o, s] = P(window.location.pathname);
  M(() => {
    const d = () => {
      s(window.location.pathname);
    };
    window.addEventListener("popstate", d);
    const f = history.pushState.bind(history);
    const p = history.replaceState.bind(history);

    (history.pushState = (...h) => {
      f(...h);
      d();
    });

    (history.replaceState = (...h) => {
      p(...h);
      d();
    });

    return () => {
      window.removeEventListener("popstate", d);
      (history.pushState = f);
      (history.replaceState = p);
    };
  }, []);
  const a = iT.includes(o);

  const c = lT.some(d => o === d || o.startsWith(`${d}/`));

  const l = cT.some(d => o === d || o.startsWith(`${d}/`));

  const u = (n || c) && !l;
  return a
    ? i(Te, { fallback: null, children: i(sT, { children: e }) })
    : i(Q_.Provider, {
        value: { isHidden: r },
        children: i("div", {
          className: $r.layout,
          children: i("div", {
            className: `${$r.wrapper} ${c ? $r.wrapperShop : ""}`,
            children: [
              u && (t ? i(dI, {}) : i(ZE, {})),
              u && !t && i(rw, {}),
              i("div", { className: $r.content, children: e }),
            ],
          }),
        }),
      });
};

const dT = "Gk8O";
const fT = "hQTq";
const pT = "Xu6L";
const hT = "Uphn";
const mT = "QgDP";
const gT = "RDAg";
const _T = "om4C";
const yT = "gQgO";
const vT = "hz3T";
const ET = "n5gy";
const wT = "RKnI";
const ST = "YQvx";
const bT = "Lye1";
const CT = "jJ2l";
const NT = "FOuG";

const xe = {
  overlay: dT,
  card: fT,
  imageWrap: pT,
  image: hT,
  body: mT,
  titleRow: gT,
  title: _T,
  badge: yT,
  texts: vT,
  text: ET,
  moreButton: wT,
  buttons: ST,
  button: bT,
  primary: CT,
  secondary: NT,
};

const cd = "seen_announcements";
function ld() {
  try {
    const e = localStorage.getItem(cd);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function IT(e) {
  try {
    const t = ld();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(cd, JSON.stringify(t));
    }
  } catch {}
}
function TT() {
  const e = go();
  const [t, n] = P(null);
  const [r, o] = P(false);

  const s = T(() => {
    o(false);

    n(m => {
      if (m) {
        IT(m.id);
      }

      return null;
    });
  }, []);

  M(() => {
    if (!e) {
      return;
    }
    let m = false;

    sv
      .getAnnouncements()
      .then((y) => {
      if (m) {
        return;
      }
      const g = ld();

      const _ = y.find(v => v?.id && !g.includes(v.id));

      if (_) {
        n(_);
      }
    })
      .catch(() => {});

    return () => {
      m = true;
    };
  }, [e]);

  M(() => {
    if (!t) {
      return;
    }

    const m = (g) => {
      if (g.key === "Escape") {
        s();
      }
    };

    const y = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", m);

    return () => {
      (document.documentElement.style.overflow = y);
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
        qe(m_action.url);
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
    description: f,
    additional_text: p,
    buttons: h,
  } = t;

  return Wt(
    i("div", {
      className: xe.overlay,
      onClick: c,
      children: i("div", {
        className: xe.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": d,
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
                  i("h2", { className: xe.title, children: d }),
                  u && i("span", { className: xe.badge, children: u }),
                ],
              }),
              (f || p) &&
                i("div", {
                  className: xe.texts,
                  children: [
                    f && i("p", { className: xe.text, children: f }),
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
                  children: h.map((m, y) => i(
                    "button",
                    {
                      type: "button",
                      className: `${xe.button} ${
                        m.style === "secondary" ? xe.secondary : xe.primary
                      }`,
                      onClick: () => a(m),
                      children: m.title,
                    },
                    y
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
const Ac = 3000/* 3e3 */;
const RT = 500;
const kT = 30000/* 3e4 */;
const Oc = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function AT() {
  const e = te(n => n.applyStatsUpdates);

  const t = ju();
  M(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let r = Infinity;
    let o = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > kT;

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
      const h = ro.getSnapshot();
      if (h.length === 0) {
        return;
      }
      o = true;
      const m = Date.now();
      try {
        const y = h.length > 20 ? h.slice(0, 20) : h;
        const g = await Me.getPostsStats(y);

        if (g.length > 0) {
          e(g, m);
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
            u(Ac);
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

    for (const h of Oc) {
      window.addEventListener(h, d, { passive: true });
    }
    const f = () => {
      if (!document.hidden) {
        d();
      }
    };
    document.addEventListener("visibilitychange", f);
    const p = ro.onAppear(() => {
      if (!s && !document.hidden) {
        u(RT);
      }
    });
    u(Ac);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", f);
      for (const h of Oc) {
        window.removeEventListener(h, d);
      }
      p();
    };
  }, [e, t]);
}

const ud = () => i(zu, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(ke, {
    onClick: () => qe("/"),
    children: "Вернуться на главную",
  }),
});

const OT = "q3Qh";
const PT = "ZSjv";
const LT = "ta8W";
const xT = "W68h";
const $T = "EtNp";
const MT = "IcBe";
const DT = "pvMu";
const UT = "Yz6P";
const FT = "x43P";
const HT = "iTMo";
const BT = "aIT3";
const VT = "gnIT";
const WT = "wTva";
const jT = "lhbd";
const zT = "B9Nq";
const qT = "kfI0";
const GT = "ikHJ";
const YT = "FEuc";
const KT = "v4Hx";
const XT = "M50V";
const QT = "Fniq";
const ZT = "FwpK";

const V = {
  skeleton: OT,
  inner: PT,
  content: LT,
  header: xT,
  body: $T,
  actions: MT,
  shimmer: DT,
  avatar: UT,
  name: FT,
  time: HT,
  line: BT,
  w100: VT,
  w92: WT,
  w85: jT,
  w78: zT,
  w65: qT,
  w50: GT,
  w40: YT,
  media: KT,
  mediaTall: XT,
  pill: QT,
  list: ZT,
};

function JT(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: V.body,
          children: i("div", { className: `${V.shimmer} ${V.line} ${V.w65}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: V.body,
          children: [
            i("div", { className: `${V.shimmer} ${V.line} ${V.w100}` }),
            i("div", { className: `${V.shimmer} ${V.line} ${V.w78}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: V.body,
          children: [
            i("div", { className: `${V.shimmer} ${V.line} ${V.w100}` }),
            i("div", { className: `${V.shimmer} ${V.line} ${V.w92}` }),
            i("div", { className: `${V.shimmer} ${V.line} ${V.w85}` }),
            i("div", { className: `${V.shimmer} ${V.line} ${V.w50}` }),
          ],
        });
      }
    case "media":
      {
        return i("div", {
          className: V.body,
          children: [
            i("div", { className: `${V.shimmer} ${V.line} ${V.w92}` }),
            i("div", { className: `${V.shimmer} ${V.line} ${V.w40}` }),
            i("div", { className: `${V.shimmer} ${V.media}` }),
          ],
        });
      }
    case "mediaTall":
      {
        return i("div", {
          className: V.body,
          children: [
            i("div", { className: `${V.shimmer} ${V.line} ${V.w78}` }),
            i("div", { className: `${V.shimmer} ${V.mediaTall}` }),
          ],
        });
      }
  }
}
function dd({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("article", {
    className: V.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: V.inner,
      children: [
        i("div", { className: `${V.shimmer} ${V.avatar}` }),
        i("div", {
          className: V.content,
          children: [
            i("div", {
              className: V.header,
              children: [
                i("div", { className: `${V.shimmer} ${V.name}` }),
                i("div", { className: `${V.shimmer} ${V.time}` }),
              ],
            }),
            JT(e),
            i("div", {
              className: V.actions,
              children: [
                i("div", { className: `${V.shimmer} ${V.pill}` }),
                i("div", { className: `${V.shimmer} ${V.pill}` }),
                i("div", { className: `${V.shimmer} ${V.pill}` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Pc = ["medium", "media", "short", "long", "mediaTall"];
function eR({ count: e = 4 }) {
  return i("div", {
    className: V.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(dd, { variant: Pc[n % Pc.length], delayMs: n * 120 }, n)
    ),
  });
}
const tR = "fE6L";
const nR = "x6wK";
const rR = "GYLF";
const jo = { virtualFeed: tR, virtualContent: nR, virtualItem: rR };
function oR({
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
  const f = O(false);
  const [p, h] = P(null);
  const [m, y] = P(window.innerWidth < 1174);

  const g = te(C => C.highlightedPostId);

  const _ = te(C => C.clearHighlightedPost);

  M(() => {
    const C = () => y(window.innerWidth < 1174);
    window.addEventListener("resize", C);

    return () => window.removeEventListener("resize", C);
  }, []);
  const v = m ? 0 : c;

  const S = T(
    (C) => {
      const e_C = e[C];
      if (!e_C) {
        return C;
      }
      const A = e_C.attachments?.[0]?.id ?? "";
      return `${e_C.id}-${A}`;
    },
    [e]
  );

  const {
    virtualItems: N,
    totalSize: w,
    measureElement: b,
    getMeasuredHeights: R,
  } = ey({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: v,
    getItemKey: S,
    initialMeasuredHeights: l,
  });

  M(
    () => () => {
      if (u) {
        u(R());
      }
    },
    [u, R]
  );

  M(() => {
    if (!g) {
      return;
    }
    d.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const C = setTimeout(() => {
      h(g);
      _();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(C);
  }, [g, _]);

  const k = T(() => {
    if (!o || !r || n) {
      return;
    }
    const C =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (C < 500 && !f.current) {
      (f.current = true);
      o();
    }

    if (C > 600) {
      (f.current = false);
    }
  }, [o, r, n]);

  M(() => {
    if (!n) {
      (f.current = false);
    }
  }, [n]);

  M(
    () => {
      window.addEventListener("scroll", k, { passive: true });

      return () => window.removeEventListener("scroll", k);
    },
    [k]
  );

  return i("div", {
    ref: d,
    className: jo.virtualFeed,
    children: [
      i("div", {
        className: jo.virtualContent,
        style: { height: `${w}px` },
        children: N.map((C) => {
          const E = e[C.index];
          return E
            ? i(
                "div",
                {
                  ref: A => b(A, C.index),
                  className: jo.virtualItem,
                  style: { transform: `translateY(${C.start}px)` },
                  children: t(E, C.index, E.id === p),
                },
                C.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${v}px` },
          children: i(dd, { variant: "medium" }),
        }),
    ],
  });
}
const sR = "xErr";
const iR = "NGm6";
const aR = "c9vE";
const cR = "AX1M";
const lR = "SzQa";
const uR = "sKJm";

const wn = {
  page: sR,
  createPostWrapper: iR,
  tabsWrapper: aR,
  searchButton: cR,
  error: lR,
  empty: uR,
};

const dR = (e) => {
  const t = te(E => E.posts);

  const n = te(E => E.activeFeed);

  const r = te(E => E.isLoading);

  const o = te(E => E.isLoadingMore);

  const s = te(E => E.hasMore);

  const a = te(E => E.error);

  const c = te(E => E.feedScrollPosition);

  const l = te(E => E.feedMeasuredHeights);

  const u = te(E => E.feedRestoreToken);

  const d = te(E => E.setActiveFeed);

  const f = te(E => E.fetchFeed);

  const p = te(E => E.loadMoreFeed);

  const h = te(E => E.createPost);

  const m = te(E => E.cacheFeedHeights);

  const y = ye(E => E.profile);

  const g = ye(E => E.status);

  const _ = O(false);

  const v = be(() => t.map(E => E.author.id), [t]);

  cv(v);

  M(() => {
    if (g === "authenticated" && t.length === 0 && !r) {
      f();
    }
  }, [n, g]);

  Vt(() => {
    if (!_.current) {
      if (t.length !== 0) {
        (_.current = true);

        c > 0 &&
          (window.scrollTo(0, c),
          requestAnimationFrame(() => window.scrollTo(0, c)));
      }
    }
  }, [t.length, c]);

  const S = O(null);
  Vt(() => {
    if (S.current === null) {
      S.current = u;
      return;
    }
    if (S.current === u) {
      return;
    }
    S.current = u;
    const E = c;
    window.scrollTo(0, E);

    requestAnimationFrame(() => window.scrollTo(0, E));
  }, [u, c]);

  const N = T(
      (E) => {
        m(n, E);
      },
      [n, m]
    );

  const w = (E) => {
    const I = ["global", "clan", "following"][E] ?? "global";

    if (I !== n) {
      d(I);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      f(true);
    }
  };

  const b = async (E, A, I, L) => {
    if (y) {
      (await h({
          wallOwnerId: y.id,
          text: E,
          spans: A,
          attachments: I,
          poll: L,
        }));
    }
  };

  const R = T(() => {
    if (s && !o) {
      p();
    }
  }, [s, o, p]);

  const k =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const C = T(
    (E, A, I) => i(TC, { post: E, isHighlighted: I, source: k }, E.id),
    [k]
  );

  return i("div", {
    className: wn.page,
    children: [
      i("div", {
        className: wn.tabsWrapper,
        children: [
          i(ZI, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: w,
          }),
          i("a", {
            href: "/search",
            className: wn.searchButton,
            "aria-label": "Поиск",
            children: i(Uu, {}),
          }),
        ],
      }),
      i("div", {
        className: wn.createPostWrapper,
        children: [
          y && i(rt, { src: y.avatar ?? "", alt: y.displayName, size: "sm" }),
          i(ad, { onSubmit: b }),
        ],
      }),
      a
        ? i("div", {
            className: wn.error,
            children: [
              i("p", { children: a }),
              i("button", { onClick: () => f(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? i(eR, { count: 4 })
        : t.length === 0
        ? i("div", { className: wn.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            oR,
            {
              posts: t,
              renderPost: C,
              isLoadingMore: o,
              hasMore: s,
              onLoadMore: R,
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

const fR = ie(() => ne(
  () => import("./index-BjPnXLPA.js"),
  __vite__mapDeps([36, 32, 18, 37])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

const pR = ie(() => ne(() => import("./index-VuVgz1VK.js"), __vite__mapDeps([38, 10, 39])).then(
  e => ({
    default: e.Hashtag
  })
)
);

const hR = ie(() => ne(
  () => import("./index-CuUq2RK0.js"),
  __vite__mapDeps([40, 41, 3, 4, 42])
).then(e => ({
  default: e.Profile
}))
);

const mR = ie(() => ne(() => import("./index-BZnHrnJL.js"), __vite__mapDeps([43, 10, 44])).then(
  e => ({
    default: e.PostPage
  })
)
);

const gR = ie(() => ne(
  () => import("./index-DlhosVm5.js"),
  __vite__mapDeps([45, 8, 41, 46])
).then(e => ({
  default: e.Notifications
}))
);

const _R = ie(() => ne(() => import("./index-A22X8mJX.js"), __vite__mapDeps([47, 48])).then(
  e => ({
    default: e.Search
  })
)
);

const yR = ie(() => ne(() => import("./index-HyWkrGR0.js"), __vite__mapDeps([49, 50])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const vR = ie(() => ne(() => import("./index-dDJLp_xc.js"), __vite__mapDeps([51, 10, 52])).then(
  e => ({
    default: e.DeleteAccount
  })
)
);

const ER = ie(() => ne(() => import("./index-_I01YQs6.js"), __vite__mapDeps([53, 10, 54])).then(
  e => ({
    default: e.LegalDocumentsPage
  })
)
);

const Pt = ie(() => ne(() => import("./index-_I01YQs6.js"), __vite__mapDeps([53, 10, 54])).then(
  e => ({
    default: e.LegalDocumentPage
  })
)
);

const wR = ie(() => ne(() => import("./index-_I01YQs6.js"), __vite__mapDeps([53, 10, 54])).then(
  e => ({
    default: e.LegalHistoryPage
  })
)
);

const SR = ie(() => ne(
  () => import("./index-hOpxO1pF.js"),
  __vite__mapDeps([55, 10, 5, 56])
).then(e => ({
  default: e.ExternalLink
}))
);

const bR = ie(() => ne(() => import("./index-CojXx-7V.js"), __vite__mapDeps([57, 10, 58])).then(
  e => ({
    default: e.Support
  })
)
);

const CR = ie(() => ne(() => import("./index-DO-T5bse.js"), __vite__mapDeps([59, 60])).then(
  e => ({
    default: e.Event
  })
)
);

const NR = ie(() => ne(
  () => import("./index-uQUjnXVl.js"),
  __vite__mapDeps([61, 62, 63, 64, 1, 2, 6, 7, 65, 66, 67, 68])
).then(e => ({
  default: e.Login
}))
);

const IR = ie(() => ne(
  () => import("./index-FQ-y-lvz.js"),
  __vite__mapDeps([69, 62, 63, 64, 1, 2, 6, 7])
).then(e => ({
  default: e.Register
}))
);

const TR = ie(() => ne(
  () => import("./index-DLdwm8GF.js"),
  __vite__mapDeps([70, 63, 64, 1, 2, 65, 66, 67, 71])
).then(e => ({
  default: e.ForgotPassword
}))
);

const RR = ie(() => ne(
  () => import("./index-DmA1OHwc.js"),
  __vite__mapDeps([72, 1, 2, 67, 73])
).then(e => ({
  default: e.ResetPassword
}))
);

const kR = ie(() => ne(() => import("./index-Cb-hc1YU.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const AR = ie(() => ne(() => import("./index-CEFUrsB6.js"), __vite__mapDeps([74, 75])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const OR = ie(() => ne(() => import("./index-bYkFwFCE.js"), []).then(e => ({
  default: e.Verification
}))
);

function Lc(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const PR = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(ud, {});
  }
  const t = e.slice(1);
  return i(hR, { username: t });
};
function LR() {
  const [e, t] = P(window.location.pathname);

  const n = x_(o => o.isOpen);

  AT();

  return i(kI, {
    children: i(Qv, {
      children: i(F0, {
        currentPath: e,
        children: [
          i(eT, {}),
          n && i(Te, { fallback: null, children: i(fR, {}) }),
          i(GI, {}),
          i(IE, {}),
          i(TT, {}),
          i(uT, {
            children: i(Te, {
              fallback: null,
              children: i(Eu, {
                onChange: (o) => {
                  const s = e;
                  t(o.url);

                  if (o.url === s) {
                    return;
                  }

                  $_.getState().markNavigated();
                  const a = te.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = Lc(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = o.url === "/";
                  const l = !!Lc(o.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(dR, { path: "/" }),
                  i(gR, { path: "/notifications" }),
                  i(NR, { path: "/login" }),
                  i(IR, { path: "/register" }),
                  i(TR, { path: "/forgot-password" }),
                  i(RR, { path: "/reset-password" }),
                  i(kR, { path: "/verify-email" }),
                  i(ER, { path: "/legal" }),
                  i(wR, { path: "/legal/:slug/history" }),
                  i(Pt, { path: "/legal/:slug/versions/:version" }),
                  i(Pt, { path: "/legal/:slug" }),
                  i(Pt, { path: "/terms", slug: "terms" }),
                  i(Pt, { path: "/privacy", slug: "privacy" }),
                  i(Pt, { path: "/cookies", slug: "cookies" }),
                  i(AR, { path: "/onboarding" }),
                  i(_R, { path: "/search" }),
                  i(pR, { path: "/hashtag/:name" }),
                  i(SR, { path: "/external" }),
                  i(bR, { path: "/support" }),
                  i(vR, { path: "/delete-account" }),
                  i(Pt, { path: "/child-safety", slug: "child-safety" }),
                  i(CR, { path: "/event" }),
                  i(OR, { path: "/verification" }),
                  i(Pt, {
                    path: "/subscription-terms",
                    slug: "subscription-terms",
                  }),
                  i(Pt, {
                    path: "/recurring-terms",
                    slug: "recurring-terms",
                  }),
                  i(mR, { path: "/:username/post/:postId" }),
                  i(PR, { path: "/:slug" }),
                  i(ud, { default: true }),
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

v_(document.getElementById("root")).render(
  i(Ie, {
    children: i(y_, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(LR, {}),
    }),
  })
);
export {
  Wt as $,
  O as A,
  ke as B,
  It as C,
  Ju as D,
  go as E,
  Kv as F,
  WN as G,
  Ve as H,
  Mu as I,
  zu as J,
  ZI as K,
  ad as L,
  hn as M,
  mc as N,
  Ut as O,
  eR as P,
  $_ as Q,
  Vr as R,
  Ie as S,
  be as T,
  yr as U,
  oR as V,
  xN as W,
  Zu as X,
  Pu as Y,
  Ou as Z,
  Vt as __1,
  x_ as a,
  Qs as a0,
  ei as a1,
  dn as a2,
  Vu as a3,
  J_ as a4,
  ri as a5,
  U as a6,
  $ as a7,
  ni as a8,
  Uu as a9,
  Wa as aA,
  ys as aB,
  NE as aC,
  Zs as aD,
  pt as aE,
  Du as aF,
  vs as aG,
  Nu as aH,
  ue as aI,
  ho as aJ,
  a1 as aK,
  Xb as aL,
  sv as aM,
  cv as aN,
  St as aO,
  lv as aP,
  xR as aa,
  Zr as ab,
  Tu as ac,
  Ks as ad,
  B as ae,
  Cy as af,
  oi as ag,
  rc as ah,
  CE as ai,
  nc as aj,
  tc as ak,
  $t as al,
  Gt as am,
  j0 as an,
  Ys as ao,
  sc as ap,
  wy as aq,
  ot as ar,
  wu as as,
  B_ as at,
  lu as au,
  _r as av,
  Vs as aw,
  Iy as ax,
  jr as ay,
  ec as az,
  te as b,
  TC as c,
  P as d,
  qe as e,
  rt as f,
  Oy as g,
  M as h,
  xu as i,
  si as j,
  Te as k,
  ne as l,
  Js as m,
  mn as n,
  Tr as o,
  Me as p,
  T as q,
  Sn as r,
  Ty as s,
  wt as t,
  i as u,
  Hu as v,
  ye as w,
  $e as x,
  Ss as y,
  ie as z,
};
