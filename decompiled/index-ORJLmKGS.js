const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-lzNvgGHU.js",
      "assets/index-CmuqV3_6.js",
      "assets/index-cK0-My4J.css",
      "assets/IconInfo-Bhfbazay.js",
      "assets/IconNotificationMention-ChaAPqP3.js",
      "assets/IconChevronRight-D5bRqvrU.js",
      "assets/IconChevronLeft-DN-Go-1D.js",
      "assets/index-CBLsyWL9.css",
      "assets/index-BH_wQQ8B.js",
      "assets/index-Dz4RaaVO.css",
      "assets/VoiceInput-0h4byGEy.js",
      "assets/IconPlay-D4hSN_pq.js",
      "assets/VoiceInput-xv2kf7J5.css",
      "assets/PostMediaVideo-BTl-29FP.js",
      "assets/VolumeGlyph-6cXmdbhe.js",
      "assets/PostMediaVideo-vhnyF54J.css",
      "assets/index-GHe7oXQU.js",
      "assets/IconCheckCircle-DW3tPpgG.js",
      "assets/index-B1t4O7uH.css",
      "assets/index-BjVfyt_o.js",
      "assets/index-K75vGKXI.css",
      "assets/index-BbKHTh5_.js",
      "assets/index-Boe4_9RX.css",
      "assets/index-C-OxYsLf.js",
      "assets/index-ayk3XpHd.css",
      "assets/index-DkZUUn1q.js",
      "assets/index-DEwEfQGV.css",
      "assets/index-WuGwTTWy.js",
      "assets/useBodyScrollLock-DaWiuPw0.js",
      "assets/index-Bnh16OUg.css",
      "assets/index-CT10ELoC.js",
      "assets/index-CWrdrCa6.css",
      "assets/index-DaFxy5X6.js",
      "assets/index-BxLCKv9-.css",
      "assets/index-B_zL1Mgm.js",
      "assets/index-D0cCIq9U.css",
      "assets/index-BW0CoCgB.js",
      "assets/IconCheck-CYVc9MSb.js",
      "assets/index-C8P14-ux.css",
      "assets/index-De6fWqMN.js",
      "assets/index-DcXhblxj.css",
      "assets/index-CuJvIvma.js",
      "assets/index-DYK9nEUP.css",
      "assets/index-Buz7B90_.js",
      "assets/index-DDFoc2X3.css",
      "assets/index-uE6hqPQR.js",
      "assets/index-CJOUROTw.css",
      "assets/index-6zHdvCsV.js",
      "assets/index-Ce2xnLMP.css",
      "assets/index-BzDgdwnx.js",
      "assets/index-DyWPO8f7.css",
      "assets/index-ta05HFEf.js",
      "assets/index-Cw4xu89q.css",
      "assets/index-BUp-cGL-.js",
      "assets/index-DpMeDBDR.css",
      "assets/index-q8DZabih.js",
      "assets/index-CSvZOyeP.css",
      "assets/index-BvxD4fJe.js",
      "assets/index-D-fLtR1K.css",
      "assets/index-4cpwWnqm.js",
      "assets/index-gEWoAfSF.css",
      "assets/index-CMt_cbJo.js",
      "assets/index-Cp15kXwI.css",
      "assets/index-Q-8GSvnu.js",
      "assets/SubscriptionTerms.module-nR_Wzpg9.js",
      "assets/SubscriptionTerms-DSqoyBvc.css",
      "assets/index-COAWSwKm.js",
      "assets/index-CsU9j320.js",
      "assets/index-DqoxCUqS.js",
      "assets/index-Br4OoRuO.css",
      "assets/index-UGby2vlZ.js",
      "assets/index-gA_OsDpj.css",
      "assets/IconEyeOff-DYJifF4N.js",
      "assets/index-az1wP6E5.css",
      "assets/index-CDap2TfC.js",
      "assets/index-Dup3sNzP.css",
      "assets/index-p2TRO_Wx.js",
      "assets/index-BI4_LVG-.css",
      "assets/index-CMJEHcvQ.js",
      "assets/index-yXUSM9Of.css",
      "assets/index--ElkdjvW.js",
      "assets/index-BJZNb6kh.css",
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
    e.SENTRY_RELEASE = { id: "1.1.3" };
    const t = new e.Error().stack;

    if (t) {
      (e._sentryDebugIds = e._sentryDebugIds || {});
      (e._sentryDebugIds[t] = "a1cc93ea-c33f-4e75-9034-cc7e5c0c1a8f");
      (e._sentryDebugIdIdentifier = "sentry-dbid-a1cc93ea-c33f-4e75-9034-cc7e5c0c1a8f");
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
let nr;
let X;
let Sc;
let xt;
let ai;
let bc;
let Cc;
let po;
let Or;
let zn;
let Ic;
let vs;
let Bo;
let Ho;
let Tc;
const Br = {};
const Hr = [];
const td = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function ct(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Es(e) {
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
    (a.children = arguments.length > 3 ? nr.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return qn(e, a, r, o, null);
}
function qn(e, t, n, r, o) {
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
    __v: o ?? ++Sc,
    __i: -1,
    __u: 0,
  };

  if (o == null && X.vnode != null) {
    X.vnode(s);
  }

  return s;
}
function nd() {
  return { current: null };
}
function Re(e) {
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
      Vo(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Vo(this);
    }
  }
}

function rn(e, t) {
  if (t == null) {
    return e.__ ? rn(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? rn(e) : null;
}
function rd(e) {
  if (e.__P && e.__d) {
    const e_v = e.__v;
    const e_v___e = e_v.__e;
    const r = [];
    const o = [];
    const s = ct({}, e_v);
    (s.__v = e_v.__v + 1);

    if (X.vnode) {
      X.vnode(s);
    }

    ws(
      e.__P,
      s,
      e_v,
      e.__n,
      e.__P.namespaceURI,
      32 & e_v.__u ? [e_v___e] : null,
      r,
      e_v___e ?? rn(e_v),
      !!(32 & e_v.__u),
      o
    );

    (s.__v = e_v.__v);
    (s.__.__k[s.__i] = s);
    Oc(r, s, o);
    e_v.__e = null;
    e_v.__ = null;

    if (s.__e != e_v___e) {
      Nc(s);
    }
  }
}
function Nc(e) {
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    e.__k.some(t => {
      if (t != null && t.__e != null) {
        return (e.__e = e.__c.base = t.__e);
      }
    });

    return Nc(e);
  }
}
function Vo(e) {
  if (((!e.__d && (e.__d = true) && xt.push(e) && !Vr.__r++) || ai != X.debounceRendering)) {
    ((ai = X.debounceRendering) || bc)(Vr);
  }
}
function Vr() {
  try {
    let e;
    let t = 1;

    while (xt.length) {
      if (xt.length > t) {
        xt.sort(Cc);
      }

      (e = xt.shift());
      (t = xt.length);
      rd(e);
    }
  } finally {
    xt.length = 0;
    Vr.__r = 0;
  }
}
function Rc(e, t, n, r, o, s, a, c, l, u, d) {
  let f;
  let p;
  let h;
  let m;
  let _;
  let y;
  const g = (r && r.__k) || Hr;
  const t_length = t.length;
  l = od(n, t, g, l, t_length);

  for (f = 0; f < t_length; f++) {
    if ((h = n.__k[f]) != null) {
      (p = (h.__i != -1 && g[h.__i]) || Br);
      (h.__i = f);
      (y = ws(e, h, p, o, s, a, c, l, u, d));
      (m = h.__e);

      h.ref &&
        p.ref != h.ref &&
        (p.ref && Ss(p.ref, null, h), d.push(h.ref, h.__c || m, h));

      _ == null && m != null && (_ = m);

      4 & h.__u
        ? ((l = kc(h, l, e)), p.__e && (p.__e = null))
        : typeof h.type == "function" && y !== undefined
        ? (l = y)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = _);
  return l;
}
function od(e, t, n, r, o) {
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
            ? (a = e.__k[s] = qn(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = qn(Re, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                qn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + p);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = sd(a, n, l, f)) != -1 && (f--, (c = n[u]) && (c.__u |= 2));

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
        c.__e == r && (r = rn(c));
        Lc(c, c);
      }
    }
  }
  return r;
}
function kc(e, t, n) {
  let r;
  let o;
  if (typeof e.type == "function") {
    r = e.__k;

    for (o = 0; r && o < r.length; o++) {
      if (r[o]) {
        (r[o].__ = e);
        (t = kc(r[o], t, n));
      }
    }

    return t;
  }

  if (e.__e != t) {
    t && e.type && !t.parentNode && (t = rn(e));
    (t = n.insertBefore(e.__e, t || null));
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function Je(e, t) {
  (t = t || []);

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some(n => {
              Je(n, t);
            });
    } else {
      t.push(e);
    }
  }

  return t;
}
function sd(e, t, n, r) {
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
function ci(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || td.test(t) ? n : `${n}px`);
  }
}
function pr(e, t, n, r, o) {
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
            ci(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            ci(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(Ic, "$1")));
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
        (n[zn] = r[zn]);
      } else {
        (n[zn] = vs);
        e.addEventListener(t, s ? Ho : Bo, s);
      }
    } else {
      e.removeEventListener(t, s ? Ho : Bo, s);
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
function li(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t[Or] == null) {
        t[Or] = vs++;
      } else if (t[Or] < n[zn]) {
        return;
      }
      return n(X.event ? X.event(t) : t);
    }
  };
}
function ws(e, t, n, r, o, s, a, c, l, u) {
  let d;
  let f;
  let p;
  let h;
  let m;
  let _;
  let y;
  let g;
  let E;
  let S;
  let I;
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

  if ((d = X.__b)) {
    d(t);
  }

  e: if (typeof t_type == "function") {
    f = a.length;
    try {
      (E = t.props);
      (S = t_type.prototype && t_type.prototype.render);
      (I = (d = t_type.contextType) && r[d.__c]);
      (w = d ? (I ? I.props.value : d.__) : r);

      if (n.__c) {
        (g = (p = t.__c = n.__c).__ = p.__E);
      } else {
        S
              ? (t.__c = p = new t_type(E, w))
              : ((t.__c = p = new Xe(E, w)),
                (p.constructor = t_type),
                (p.render = ad));

        I && I.sub(p);
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
        p.__s == p.state && (p.__s = ct({}, p.__s));
        ct(p.__s, t_type.getDerivedStateFromProps(E, p.__s));
      }

      (m = p.props);
      (_ = p.state);
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
            E !== m &&
            p.componentWillReceiveProps != null) {
          p.componentWillReceiveProps(E, w);
        }

        if (t.__v == n.__v ||
          (!p.__e &&
            p.shouldComponentUpdate != null &&
            p.shouldComponentUpdate(E, p.__s, w) === false)) {
          if (t.__v != n.__v) {
            (p.props = E);
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

          Hr.push.apply(p.__h, p._sb);
          (p._sb = []);

          if (p.__h.length) {
            a.push(p);
          }

          (c = rn(n));
          break e;
        }

        if (p.componentWillUpdate != null) {
          p.componentWillUpdate(E, p.__s, w);
        }

        if (S &&
          p.componentDidUpdate != null) {
          p.__h.push(() => {
            p.componentDidUpdate(m, _, y);
          });
        }
      }

      (p.context = w);
      (p.props = E);
      (p.__P = e);
      (p.__e = false);
      (b = X.__r);
      (R = 0);

      if (S) {
        (p.state = p.__s);
        (p.__d = false);

        if (b) {
          b(t);
        }

        (d = p.render(p.props, p.state, p.context));
        Hr.push.apply(p.__h, p._sb);
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
        (r = ct(ct({}, r), p.getChildContext()));
      }

      if (S &&
        !h &&
        p.getSnapshotBeforeUpdate != null) {
        (y = p.getSnapshotBeforeUpdate(m, _));
      }

      (k = d != null && d.type === Re && d.key == null
        ? Pc(d.props.children)
        : d);

      (c = Rc(e, Array_isArray(k) ? k : [k], t, n, r, o, s, a, c, l, u));
      (p.base = t.__e);
      (t.__u &= -161);

      if (p.__h.length) {
        a.push(p);
      }

      if (g) {
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
            Es(s[C]);
          }
        }
      } else {
        t.__e = n.__e;
      }

      if (t.__k == null) {
        (t.__k = n.__k || []);
      }

      if (!A.then) {
        Ac(t);
      }

      X.__e(A, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = id(n.__e, t, n, r, o, s, a, l, u));
    }
  }

  if ((d = X.diffed)) {
    d(t);
  }

  return 128 & t.__u ? undefined : c;
}
function Ac(e) {
  if (e) {
    e.__c && (e.__c.__e = true);
    e.__k && e.__k.some(Ac);
  }
}
function Oc(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    Ss(n[r], n[++r], n[++r]);
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
function Pc(e) {
  return typeof e != "object" || e == null || e.__b > 0
    ? e
    : Array_isArray(e)
    ? e.map(Pc)
    : e.constructor !== undefined
    ? null
    : ct({}, e);
}
function id(e, t, n, r, o, s, a, c, l) {
  let u;
  let d;
  let f;
  let p;
  let h;
  let m;
  let _;
  let y = n.props || Br;

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
    if (y !== props && (!c || e.data != props)) {
      (e.data = props);
    }
  } else {
    (s = type == "textarea" && props.defaultValue != null
      ? null
      : s && nr.call(e.childNodes));

    if (!c && s != null) {
      y = {};

      for (u = 0; u < e.attributes.length; u++) {
        y[(h = e.attributes[u]).name] = h.value;
      }
    }

    for (u in y) {
      (h = y[u]);

      if (u == "dangerouslySetInnerHTML") {
        (f = h);
      } else if (u != "children" && u in props && (u != "value" || "defaultValue" in props) && (u != "checked" || "defaultChecked" in props)) {
        pr(e, u, null, h, o);
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
        (_ = h);
        break;
      default:
        pr(e, u, h, y[u], o);
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

      Rc(
        t.type == "template" ? e.content : e,
        Array_isArray(p) ? p : [p],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
        s,
        a,
        s ? s[0] : n.__k && rn(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          Es(s[u]);
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
            (type == "option" && m != y[u])) &&
          pr(e, u, m, y[u], o);

      (u = "checked");
      _ != null && _ != e[u] && pr(e, u, _, y[u], o);
    }
  }
  return e;
}
function Ss(e, t, n) {
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
function Lc(e, t, n) {
  let r;
  let o;

  if (X.unmount) {
    X.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      Ss(r, null, t);
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
    r.__n = null;
  }

  if ((r = e.__k)) {
    for (o = 0; o < r.length; o++) {
      if (r[o]) {
        Lc(r[o], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    Es(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function ad(e, t, n) {
  return this.constructor(e, n);
}
function Kn(e, t, n) {
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

  ws(
    t,
    (e = ((!r && n) || t).__k = tt(Re, null, [e])),
    o || Br,
    Br,
    t.namespaceURI,
    !r && n ? [n] : o ? null : t.firstChild ? nr.call(t.childNodes) : null,
    s,
    !r && n ? n : o ? o.__e : t.firstChild,
    r,
    a
  );

  Oc(s, e, a);
  (e.props.children = null);
}
function $c(e, t) {
  Kn(e, t, $c);
}
function xc(e, t, n) {
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
    (c.children = arguments.length > 3 ? nr.call(arguments, 2) : n);
  }

  return qn(e.type, c, r || e.key, o || e.ref, null);
}
function Cn(e) {
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
            Vo(a);
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
  (t.__c = `__cC${Tc++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
(nr = Hr.slice);

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

(Sc = 0);

(Xe.prototype.render = Re);
(xt = []);

(bc = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(Cc = (e, t) => e.__v.__b - t.__v.__b);

(Vr.__r = 0);
(po = Math.random().toString(8));
(Or = `__d${po}`);
(zn = `__a${po}`);
(Ic = /(PointerCapture)$|Capture$/i);
(vs = 0);
(Bo = li(false));
(Ho = li(true));
(Tc = 0);
let cd = 0;
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
    __v: --cd,
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
const Y = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const re = globalThis;
const en = "10.71.0";
function eo() {
  to(re);
  return re;
}
function to(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || en);
  (t[en] = t[en] || {});
  return t[en];
}
function In(e, t, n = re) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {});
  const o = (r[en] = r[en] || {});
  return o[e] || (o[e] = t());
}
const ld = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const ud = "Sentry Logger ";
const Wr = {};
function Tn(e) {
  if (!("console" in re)) {
    return e();
  }
  const re_console = re.console;
  const n = {};
  const r = Object.keys(Wr);
  r.forEach((o) => {
    const Wr_o = Wr[o];
    (n[o] = re_console[o]);
    (re_console[o] = Wr_o);
  });
  try {
    return e();
  } finally {
    r.forEach((o) => {
      re_console[o] = n[o];
    });
  }
}
function dd() {
  Cs().enabled = true;
}
function fd() {
  Cs().enabled = false;
}
function Mc() {
  return Cs().enabled;
}
function pd(...e) {
  bs("log", ...e);
}
function hd(...e) {
  bs("warn", ...e);
}
function md(...e) {
  bs("error", ...e);
}
function bs(e, ...t) {
  if (Y &&
    Mc()) {
    Tn(() => {
      re.console[e](`${ud}[${e}]:`, ...t);
    });
  }
}
function Cs() {
  return Y ? In("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const H = {
    enable: dd,
    disable: fd,
    isEnabled: Mc,
    log: pd,
    warn: hd,
    error: md,
  };

const Dc = 50;
const on = "?";
const ui = /\(error: (.*)\)/;
const di = /captureMessage|captureException/;
function Uc(...e) {
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

      const u = ui.test(a_c) ? a_c.replace(ui, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const d of t) {
          const f = d(u);
          if (f) {
            s.push(f);
            break;
          }
        }
        if (s.length >= Dc + o) {
          break;
        }
      }
    }
    return _d(s.slice(o));
  };
}
function gd(e) {
  return Array.isArray(e) ? Uc(...e) : e;
}
function _d(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(hr(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (di.test(hr(t).function || "")) {
    t.pop();
    di.test(hr(t).function || "") && t.pop();
  }

  return t
    .slice(0, Dc)
    .map(n => ({
    ...n,
    filename: n.filename || hr(t).filename,
    function: n.function || on
  }));
}
function hr(e) {
  return e[e.length - 1] || {};
}
const ho = "<anonymous>";
function Dt(e) {
  try {
    return !e || typeof e != "function" ? ho : e.name || ho;
  } catch {
    return ho;
  }
}
function fi(e) {
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
const Bn = {};
const pi = {};
function cn(e, t) {
  (Bn[e] = Bn[e] || []);
  Bn[e].push(t);

  return () => {
    const Bn_e = Bn[e];
    if (Bn_e) {
      const r = Bn_e.indexOf(t);

      if (r !== -1) {
        Bn_e.splice(r, 1);
      }
    }
  };
}
function ln(e, t) {
  if (!pi[e]) {
    pi[e] = true;
    try {
      t();
    } catch (n) {
      if (Y) {
        H.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function et(e, t) {
  const n = e && Bn[e];
  if (n) {
    for (const r of n) {
      try {
        r(t);
      } catch (o) {
        if (Y) {
          H.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Dt(r)}
Error:`,
            o
          );
        }
      }
    }
  }
}
let mo = null;
function yd(e) {
  const t = "error";
  cn(t, e);
  ln(t, vd);
}
function vd(...args) {
  (mo = re.onerror);

  (re.onerror = function (e, t, n, r, o) {
    et("error", { column: r, error: o, line: n, msg: e, url: t });
    return mo ? mo.apply(this, args) : false;
  });

  (re.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let go = null;
function Ed(e) {
  const t = "unhandledrejection";
  cn(t, e);
  ln(t, wd);
}
function wd(...args) {
  (go = re.onunhandledrejection);

  (re.onunhandledrejection = function (e) {
    et("unhandledrejection", e);
    return go ? go.apply(this, args) : true;
  });

  (re.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const Fc = Object.prototype.toString;
function lt(e) {
  switch (Fc.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return Ts(e, Error);
      }
  }
}
function Nn(e, t) {
  return Fc.call(e) === `[object ${t}]`;
}
function Bc(e) {
  return Nn(e, "ErrorEvent");
}
function hi(e) {
  return Nn(e, "DOMError");
}
function Sd(e) {
  return Nn(e, "DOMException");
}
function St(e) {
  return Nn(e, "String");
}
function Is(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function or(e) {
  return (
    e === null || Is(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Zn(e) {
  return Nn(e, "Object");
}
function no(e) {
  return typeof e == "object" && e !== null;
}
function ro(e) {
  return typeof Event !== "undefined" && Ts(e, Event);
}
function bd(e) {
  return Nn(e, "RegExp");
}
function sr(e) {
  return !!(e?.then && typeof e.then == "function");
}
function Ts(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function Hc(e) {
  return typeof Request !== "undefined" && Ts(e, Request);
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
    Vc(o, e_t);
  }

  try {
    e[t] = o;
  } catch {
    if (Y) {
      H.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function Ut(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (Y) {
      H.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function Vc(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    Ut(e, "__sentry_original__", t);
  } catch {}
}
function Ns(e) {
  return e.__sentry_original__;
}
function Wc(e) {
  if (lt(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...mi(e) };
  }
  if (ro(e)) {
    const { type, target, currentTarget, detail } = e;
    return {
      type: type,
      target: target,
      currentTarget: currentTarget,
      ...(detail ? { detail: detail } : {}),
      ...mi(e),
    };
  }
  return e;
}
function mi(e) {
  return no(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function Cd(e) {
  const t = Object.keys(Wc(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let pn;
function oo(e) {
  if (pn !== undefined) {
    return pn ? pn(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = re;
  return t in n && typeof n[t] == "function"
    ? ((pn = n[t]), pn(e))
    : ((pn = null), e());
}
function jr() {
  return oo(() => Math.random());
}
function Rn() {
  return oo(() => Date.now());
}
const Id = Symbol.for("sentry.skipNormalization");
const Td = Symbol.for("sentry.overrideNormalizationDepth");
function Nd(e) {
  return !!e[Id];
}
function Rd(e) {
  const e_Td = e[Td];
  return typeof e_Td == "number" ? e_Td : undefined;
}
let Wo;
function jc(e) {
  Wo = e;
}
function yt(e, t = 100, n = Infinity) {
  try {
    return jo("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function zc(e, t = 3, n = 100 * 1024) {
  const r = yt(e, t);
  return Od(r) > n ? zc(e, t - 1, n) : r;
}
function jo(e, t, n = Infinity, r = Infinity, o = Pd()) {
  const [s, a] = o;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = qc(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (Nd(t)) {
    return t;
  }
  const l = Rd(t);
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
      return jo("", m, u - 1, r, o);
    } catch {}
  }
  const f = Array.isArray(t) ? [] : {};
  let p = 0;
  const h = Wc(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (p >= r) {
      f[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (f[m] = jo(m, h_m, u - 1, r, o));
    p++;
  }
  a(t);
  return f;
}
function qc(e, t) {
  try {
    if (Wo) {
      const r = Wo(t);
      if (r) {
        return r;
      }
    }
    return typeof global !== "undefined" && t === global
      ? "[Global]"
      : typeof t == "number" && !Number.isFinite(t)
      ? `[${t}]`
      : typeof t == "function"
      ? `[Function: ${Dt(t)}]`
      : typeof t == "symbol"
      ? `[${String(t)}]`
      : typeof t == "bigint"
      ? `[BigInt: ${String(t)}]`
      : `[object ${kd(t)}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function kd(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Ad(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Od(e) {
  return Ad(JSON.stringify(e));
}
function Pd() {
  const e = new WeakSet();
  function t(r) {
    return e.has(r) ? true : (e.add(r), false);
  }
  function n(r) {
    e.delete(r);
  }
  return [t, n];
}
function zo(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function gi(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const o of e) {
    if (or(o)) {
      n.push(String(o));
    } else if (o instanceof Error) {
      n.push(o.message ? `${o.name}: ${o.message}` : o.name);
    } else {
      n.push(qc(undefined, o));
    }
  }

  return n.join(t);
}
function Gn(e, t, n = false) {
  return St(e)
    ? bd(t)
      ? t.test(e)
      : St(t)
      ? n
        ? e === t
        : e.includes(t)
      : typeof t == "function"
      ? t(e)
      : false
    : false;
}
function ir(e, t = [], n = false) {
  for (const r of t) {
    if (Gn(e, r, n)) {
      return true;
    }
  }
  return false;
}
function Ld() {
  const e = re;
  return e.crypto || e.msCrypto;
}
let _o;
function $d() {
  return jr() * 16;
}
function Ke(e = Ld()) {
  try {
    if (e?.randomUUID) {
      return oo(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!_o) {
    (_o = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return _o.replace(/[018]/g, t => (t ^ (($d() & 15) >> (t / 4))).toString(16));
}
function Gc(e) {
  return e.exception?.values?.[0];
}
function Kt(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const r = Gc(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function qo(e, t, n) {
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
function tn(e, t) {
  const n = Gc(e);
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
function _i(e) {
  if (xd(e)) {
    return true;
  }
  try {
    Ut(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function xd(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const Yc = 1000/* 1e3 */;
function ar() {
  return Rn() / Yc;
}
function Md() {
  const { performance } = re;
  if (!performance?.now || !performance.timeOrigin) {
    return ar;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + oo(() => performance.now())) / Yc;
}
let yi;
function bt() {
  return (yi ?? (yi = Md()))();
}
function Dd(e) {
  const t = bt();

  const n = {
    sid: Ke(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => Fd(n),
  };

  if (e) {
    vn(n, e);
  }

  return n;
}
function vn(e, t = {}) {
  if (t.user) {
    !e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address);

    !e.did &&
      !t.did &&
      (e.did = t.user.id || t.user.email || t.user.username);
  }

  (e.timestamp = t.timestamp || bt());

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
function Ud(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  vn(e, n);
}
function Fd(e) {
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
function cr(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const r = { ...e };
  for (const o in t) {
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      (r[o] = cr(r[o], t[o], n - 1));
    }
  }
  return r;
}
function vi() {
  return Ke();
}
function Xc() {
  return Ke().substring(16);
}
function Bd(e) {
  try {
    const re_WeakRef = re.WeakRef;
    if (typeof re_WeakRef == "function") {
      return new re_WeakRef(e);
    }
  } catch {}
  return e;
}
function Kc(e) {
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
const Go = "_sentrySpan";
function Ei(e, t) {
  if (t) {
    Ut(e, Go, Bd(t));
  } else {
    delete e[Go];
  }
}
function wi(e) {
  return Kc(e[Go]);
}
const Hd = 100;
class ut {
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
    (this._propagationContext = { traceId: vi(), sampleRand: jr() });
  }
  clone() {
    const t = new ut();
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
    Ei(t, wi(this));
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
      vn(this._session, { user: t });
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
    const r = n instanceof ut ? n.getScopeData() : Zn(n) ? t : undefined;

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
    Ei(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: vi(), sampleRand: jr() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : Hd;
    if (r <= 0) {
      return this;
    }
    const o = {
      timestamp: ar(),
      ...t,
      message: t.message ? zo(t.message, 2048) : t.message,
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
      span: wi(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = cr(this._sdkProcessingMetadata, t, 2));
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
      if (Y) {
        H.warn("No client configured on scope - will not capture exception!");
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
      if (Y) {
        H.warn("No client configured on scope - will not capture message!");
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
      : (Y && H.warn("No client configured on scope - will not capture event!"),
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
function Vd() {
  return In("defaultCurrentScope", () => new ut());
}
function Wd() {
  return In("defaultIsolationScope", () => new ut());
}

const Si = e => e instanceof Promise && !e[Zc];

const Zc = Symbol("chained PromiseLike");

const jd = (e, t, n) => {
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
  return Si(r) && Si(e) ? r : zd(e, r);
};

const zd = (e, t) => {
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
    Object.assign(t, { [Zc]: true });
  }

  return t;
};

class qd {
  constructor(t, n) {
    let r;

    if (t) {
      (r = t);
    } else {
      (r = new ut());
    }

    let o;

    if (n) {
      (o = n);
    } else {
      (o = new ut());
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
    return sr(r)
      ? jd(
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
function En() {
  const e = eo();
  const t = to(e);
  return (t.stack = t.stack || new qd(Vd(), Wd()));
}
function Gd(e) {
  return En().withScope(e);
}
function Yd(e, t) {
  const n = En();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function bi(e) {
  return En().withScope(() => e(En().getIsolationScope()));
}
function Xd() {
  return {
    withIsolationScope: bi,
    withScope: Gd,
    withSetScope: Yd,
    withSetIsolationScope: (e, t) => bi(t),
    getCurrentScope: () => En().getScope(),
    getIsolationScope: () => En().getIsolationScope(),
  };
}
function Rs(e) {
  const t = to(e);
  return t.acs ? t.acs : Xd();
}
function Kd(e) {
  return (
    typeof e == "object" &&
    e != null &&
    !Array.isArray(e) &&
    Object.keys(e).includes("value")
  );
}
function Zd(e, t) {
  const { value, unit } = Kd(e) ? e : { value: e, unit: undefined };
  const o = Qd(value);
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
function Ci(e, t = false) {
  const n = {};
  for (const [r, o] of Object.entries(e ?? {})) {
    const s = Zd(o, t);

    if (s) {
      (n[r] = s);
    }
  }
  return n;
}
function Qd(e) {
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
function ft() {
  const e = eo();
  return Rs(e).getCurrentScope();
}
function pt() {
  const e = eo();
  return Rs(e).getIsolationScope();
}
function Jd() {
  return In("globalScope", () => new ut());
}
function Qc(...e) {
  const t = eo();
  const n = Rs(t);
  if (e.length === 2) {
    const [r, o] = e;
    return r ? n.withSetScope(r, o) : n.withScope(o);
  }
  return n.withScope(e[0]);
}
function ke() {
  return ft().getClient();
}
function ef(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || Xc() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const tf = "sentry.source";
const nf = "sentry.sample_rate";
const rf = "sentry.previous_trace_sample_rate";
const Jc = "sentry.op";
const of = "sentry.origin";
const el = "sentry.profile_id";
const tl = "sentry.exclusive_time";
const sf = "gen_ai.conversation.id";
const af = 0;
const cf = 1;
const lf = "_sentryScope";
const uf = "_sentryIsolationScope";
function Yo(e) {
  const t = e;
  return { scope: t[lf], isolationScope: Kc(t[uf]) };
}
const Ii = "sentry-";
function df(e) {
  const t = ff(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((r, [o, s]) => {
    if (o.startsWith(Ii)) {
      const a = o.slice(Ii.length);
      r[a] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function ff(e) {
  if (!(!e || (!St(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const r = Ti(n);

      Object.entries(r).forEach(([o, s]) => {
        t[o] = s;
      });

      return t;
    }, {})
      : Ti(e);
  }
}
function Ti(e) {
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
const pf = /^o(\d+)\./;

const hf =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function mf(e) {
  return e === "http" || e === "https";
}
function kn(e, t = false) {
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
function gf(e) {
  const t = hf.exec(e);
  if (!t) {
    Tn(() => {
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

  return nl({
    host: s,
    pass: o,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r,
  });
}
function nl(e) {
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
function _f(e) {
  if (!Y) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (H.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? mf(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (H.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (H.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (H.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function yf(e) {
  return e.match(pf)?.[1];
}
function vf(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let r;

  if (t.orgId) {
    (r = String(t.orgId));
  } else if (host) {
    (r = yf(host));
  }

  return r;
}
function rl(e) {
  const t = typeof e == "string" ? gf(e) : nl(e);
  if (!(!t || !_f(t))) {
    return t;
  }
}
function Ef(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const ol = 1;
function wf(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const o = isRemote ? spanId : so(e).parent_span_id;
  const s = Yo(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || Xc() : spanId;
  return { parent_span_id: o, span_id: a, trace_id: traceId };
}
function Sf(e) {
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
        sampled: r === ol,
        attributes: s,
        ...o
      })
    );
  }
}
function Ri(e) {
  if (typeof e == "number") {
    return ki(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return ki(e.getTime());
  }

  return bt();
}
function ki(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function so(e) {
  if (Tf(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (If(e)) {
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
      parent_span_id: bf(e),
      start_timestamp: Ri(startTime),
      timestamp: Ri(endTime) || undefined,
      status: Rf(status),
      op: attributes[Jc],
      origin: attributes[of],
      links: Sf(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function bf(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function Cf(e) {
  return {
    ...e,
    attributes: Ci(e.attributes),
    links: e.links?.map(t => ({
      ...t,
      attributes: Ci(t.attributes)
    })),
  };
}
function If(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Tf(e) {
  return typeof e.getSpanJSON == "function";
}
function Nf(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === ol;
}
function Rf(e) {
  if (!(!e || e.code === af)) {
    return e.code === cf ? "ok" : e.message || "internal_error";
  }
}
const kf = "_sentryRootSpan";
const sl = Af;
function Af(e) {
  return e[kf] || e;
}
function Ai() {
  if (!Ni) {
    Tn(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (Ni = true);
  }
}
function Oi(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = e || ke()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function Pi(e) {
  H.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function Li(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (Lf(n)) {
      if (e.description && Gn(e.description, n)) {
        if (Y) {
          Pi(e);
        }

        return true;
      }
      continue;
    }
    const r = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !r) {
      continue;
    }
    const o = n.name ? e.description && Gn(e.description, n.name) : true;
    const s = n.op ? e.op && Gn(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => Of(e.attributes?.[c], l)
        )
      : true;

    if (o && s && a) {
      if (Y) {
        Pi(e);
      }

      return true;
    }
  }
  return false;
}
function Of(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Gn(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e === t;
}
function Pf(e, t) {
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
function Lf(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const $f = Symbol.for("sentry.nonRecordingSpan");
function xf(e) {
  return !!e && e[$f] === true;
}
const ks = "production";
const Mf = "_frozenDsc";
function il(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const o = {
    environment: n.environment || ks,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: vf(t),
  };

  t.emit("createDsc", o);
  return o;
}
function al(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || il(n.traceId, e);
}
function Df(e) {
  const t = ke();
  if (!t) {
    return {};
  }
  const n = sl(e);

  const {
    data,
    description
  } = so(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[nf] ?? data[rf];
  function c(y) {
    if ((typeof a == "number" || typeof a == "string")) {
      (y.sample_rate = `${a}`);
    }

    return y;
  }
  const n_Mf = n[Mf];
  if (n_Mf) {
    return c(n_Mf);
  }
  const u = xf(n);
  const d = u && n.dropReason === "ignored";
  if (u && (!Oi(t.getOptions()) || d)) {
    const y = Yo(n).scope;
    if (y) {
      const g = { ...al(t, y) };

      if (d) {
        (g.sampled = "false");
      }

      return c(g);
    }
  }
  const f = s?.get("sentry.dsc");
  const p = f && df(f);
  if (p) {
    return c(p);
  }
  const h = il(e.spanContext().traceId, t);
  const m = data[tf] ?? data["sentry.segment.name.source"];

  if (m !== "url" && description) {
    (h.transaction = description);
  }

  if (Oi()) {
    (h.sampled = String(Nf(n)));

    (h.sample_rand = s?.get("sentry.sample_rand") ??
    Yo(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(h);
  t.emit("createDsc", h, n);
  return h;
}
function Uf(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
function An(e, t = []) {
  return [e, t];
}
function $i(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function Xo(e, t) {
  const [, n] = e;
  for (const r of n) {
    const o = r[0].type;
    if (t(r, o)) {
      return true;
    }
  }
  return false;
}
function Ff(e, t) {
  return Xo(e, (n, r) => t.includes(r));
}
function Ko(e) {
  const t = to(re);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Bf(e) {
  const [t, n] = e;
  let r = JSON.stringify(t);
  function o(s) {
    if (typeof r == "string") {
      (r = typeof s == "string" ? r + s : [Ko(r), s]);
    } else {
      r.push(typeof s == "string" ? Ko(s) : s);
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
        l = JSON.stringify(yt(c));
      }
      o(l);
    }
  }
  return typeof r == "string" ? r : Hf(r);
}
function Hf(e) {
  const t = e.reduce((o, s) => o + s.length, 0);

  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e) {
    n.set(o, r);
    (r += o.length);
  }
  return n;
}
function Vf(e) {
  const t = typeof e.data == "string" ? Ko(e.data) : e.data;
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
const cl = {
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
function Wf(e) {
  return e in cl;
}
function xi(e) {
  return Wf(e) ? cl[e] : e;
}
function ll(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function jf(e, t, n, r) {
  const o = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date(Rn()).toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: kn(r) }),
    ...(o && { trace: o }),
  };
}
function zf(e, t) {
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
function qf(e, t, n, r) {
  const o = ll(n);

  const s = {
    sent_at: new Date(Rn()).toISOString(),
    ...(o && { sdk: o }),
    ...(!!r && t && { dsn: kn(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return An(s, [a]);
}
function Gf(e, t, n, r) {
  const o = ll(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  zf(e, n?.sdk);
  const a = jf(e, o, r, t);
  delete e.sdkProcessingMetadata;
  return An(a, [[{ type: s }, e]]);
}
function Yf(e) {
  return e.getOptions().traceLifecycle === "stream";
}
function Xf(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  Kf(e, t);

  if (span) {
    Jf(e, span);
  }

  ep(e, fingerprint);
  Zf(e, breadcrumbs);
  Qf(e, sdkProcessingMetadata);
}
function Mi(e, t) {
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
  Ln(e, "extra", extra);
  Ln(e, "tags", tags);
  Ln(e, "attributes", attributes);
  Ln(e, "user", user);
  Ln(e, "contexts", contexts);
  (e.sdkProcessingMetadata = cr(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function Ln(e, t, n) {
  e[t] = cr(e[t], n, 1);
}
function ul(e, t) {
  const n = Jd().getScopeData();

  if (e) {
    Mi(n, e.getScopeData());
  }

  if (t) {
    Mi(n, t.getScopeData());
  }

  return n;
}
function Kf(e, t) {
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
function Zf(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function Qf(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function Jf(e, t) {
  (e.contexts = { trace: wf(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: Df(t),
      ...e.sdkProcessingMetadata,
    });

  const n = sl(t);
  const r = so(n).description;

  if (r && !e.transaction && e.type === "transaction") {
    (e.transaction = r);
  }
}
function ep(e, t) {
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
const tp = "url.full";
function dl(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([r, o]) => {
    if (o != null && !(r in n)) {
      (n[r] = o);
    }
  });
}
const yo = 0;
const Di = 1;
const Ui = 2;
function lr(e) {
  return new Qn((t) => {
    t(e);
  });
}
function fl(e) {
  return new Qn((t, n) => {
    n(e);
  });
}
class Qn {
  constructor(t) {
    (this._state = yo);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new Qn((r, o) => {
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
    return new Qn((n, r) => {
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
    if (this._state === yo) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === Di && n[1](this._value);
        this._state === Ui && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === yo) {
          if (sr(a)) {
            a.then(r, o);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const r = (s) => {
      n(Di, s);
    };

    const o = (s) => {
      n(Ui, s);
    };

    try {
      t(r, o);
    } catch (s) {
      o(s);
    }
  }
}
function np(e, t, n, r = 0) {
  try {
    const o = Zo(t, n, e, r);
    return sr(o) ? o : lr(o);
  } catch (o) {
    return fl(o);
  }
}
function Zo(e, t, n, r) {
  const n_r = n[r];
  if (!e || !n_r) {
    return e;
  }
  const s = n_r({ ...e }, t);

  if (Y && s === null) {
    H.log(`Event processor "${n_r.id || "?"}" dropped event`);
  }

  return sr(s) ? s.then(a => Zo(a, t, n, r + 1)) : Zo(s, t, n, r + 1);
}
let Wt;
let Fi;
let Bi;
let It;
function rp(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = re;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const r = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const o = _debugIds ? Object.keys(_debugIds) : [];
  if (It && r.length === Fi && o.length === Bi) {
    return It;
  }
  (Fi = r.length);
  (Bi = o.length);
  (It = {});

  if (!Wt) {
    (Wt = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const d = Wt?.[l];
      if (d && It && c_l) {
        (It[d[0]] = c_l);

        if (Wt) {
          (Wt[l] = [d[0], c_l]);
        }
      } else if (c_l) {
        const f = e(l);
        for (let p = f.length - 1; p >= 0; p--) {
          const m = f[p]?.filename;
          if (m && It && Wt) {
            (It[m] = c_l);
            (Wt[l] = [m, c_l]);
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

  return It;
}
function op(e, t, n, r, o, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || Ke(),
    timestamp: t.timestamp || ar(),
  };

  const u = n.integrations || e.integrations.map(g => g.name);

  sp(l, e);
  cp(l, u);

  if (o) {
    o.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    ip(l, e.stackParser);
  }

  const d = up(r, n.captureContext);

  if (n.mechanism) {
    tn(l, n.mechanism);
  }

  const f = o ? o.getEventProcessors() : [];
  const p = ul(s, d);
  const h = [...(n.attachments || []), ...p.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  Xf(l, p);
  const m = [...f, ...p.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? lr(l) : np(m, l, n)).then(
    g => {
      if (g) {
        ap(g);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? lp(g, normalizeDepth, normalizeMaxBreadth) : g;
    }
  );
}
function sp(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || ks);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = zo(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = zo(c.value, maxValueLength));
      }
    });
  }
}
function ip(e, t) {
  const n = rp(t);
  e.exception?.values?.forEach((r) => {
    r.stacktrace?.frames?.forEach((o) => {
      if (o.filename) {
        (o.debug_id = n[o.filename]);
      }
    });
  });
}
function ap(e) {
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
function cp(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function lp(e, t, n) {
  if (!e) {
    return null;
  }
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(o => ({
        ...o,
        ...(o.data && { data: yt(o.data, t, n) })
      })),
    }),
    ...(e.user && { user: yt(e.user, t, n) }),
    ...(e.contexts && { contexts: yt(e.contexts, t, n) }),
    ...(e.extra && { extra: yt(e.extra, t, n) }),
  };

  if (e.contexts?.trace &&
    r.contexts) {
    (r.contexts.trace = e.contexts.trace);

    e.contexts.trace.data &&
      (r.contexts.trace.data = yt(e.contexts.trace.data, t, n));
  }

  if (e.spans) {
    (r.spans = e.spans.map(o => ({
      ...o,
      ...(o.data && { data: yt(o.data, t, n) })
    })));
  }

  if (e.contexts?.flags &&
    r.contexts) {
    (r.contexts.flags = yt(e.contexts.flags, 3, n));
  }

  return r;
}
function up(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new ut();
  n.update(t);
  return n;
}
function dp(e) {
  if (e) {
    return fp(e) ? { captureContext: e } : hp(e) ? { captureContext: e } : e;
  }
}
function fp(e) {
  return e instanceof ut || typeof e == "function";
}
const pp = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function hp(e) {
  return Object.keys(e).some(t => pp.includes(t));
}
function pl(e, t) {
  return ft().captureException(e, dp(t));
}
function hl(e, t) {
  return ft().captureEvent(e, t);
}
function mp(e, t) {
  pt().setContext(e, t);
}
function Hi(e) {
  pt().setUser(e);
}
function gp() {
  return pt().lastEventId();
}
function Vi(e) {
  const t = pt();
  const { user } = ul(t, ft());
  const { userAgent } = re.navigator || {};
  const o = Dd({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    vn(s, { status: "exited" });
  }

  ml();
  t.setSession(o);
  return o;
}
function ml() {
  const e = pt();
  const n = ft().getSession() || e.getSession();

  if (n) {
    Ud(n);
  }

  gl();
  e.setSession();
}
function gl() {
  const e = pt();
  const t = ke();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function vo(e = false) {
  if (e) {
    ml();
    return;
  }
  gl();
}
function _l(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const _p = "7";
function yl(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function yp(e) {
  return `${yl(e)}${e.projectId}/envelope/`;
}
function vp(e, t) {
  const n = { sentry_version: _p };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function Ep(e, t, n) {
  return t || `${yp(e)}?${vp(e, n)}`;
}
function wp(e, t) {
  const n = rl(e);
  if (!n) {
    return "";
  }
  const r = `${yl(n)}embed/error-page/`;
  let o = `dsn=${kn(n)}`;
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
const Wi = [];
function Sp(e) {
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
function bp(e) {
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
  return Sp(r);
}
function Cp(e, t) {
  const n = {};

  t.forEach((r) => {
    if (r?.beforeSetup) {
      r.beforeSetup(e);
    }
  });

  t.forEach((r) => {
    if (r) {
      vl(e, r, n);
    }
  });

  return n;
}
function ji(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function vl(e, t, n) {
  if (n[t.name]) {
    if (Y) {
      H.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!Wi.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    Wi.push(t.name);
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

  if (Y) {
    H.log(`Integration installed: ${t.name}`);
  }
}
function Ip() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Tp() {
  return "npm";
}
function Np() {
  return (!Ip() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function As() {
  return typeof window !== "undefined" && (!Np() || Rp());
}
function Rp() {
  return re.process?.type === "renderer";
}
function kp(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(As() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Ap(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = kn(r));
  }

  return An(s, [kp(e, o)]);
}
function Op(e, t) {
  const n = t ?? Pp(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();

  const o = Ap(
    n,
    r._metadata,
    r.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  El().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(o);
}
function Pp(e) {
  return El().get(e);
}
function El() {
  return In("clientToLogBufferMap", () => new WeakMap());
}
function Lp(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(As() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function $p(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = kn(r));
  }

  return An(s, [Lp(e, o)]);
}
function xp(e, t) {
  const n = t ?? Mp(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();

  const o = $p(
    n,
    r._metadata,
    r.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  wl().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(o);
}
function Mp(e) {
  return wl().get(e);
}
function wl() {
  return In("clientToMetricBufferMap", () => new WeakMap());
}
function Dp(e) {
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
  return Cf(t);
}
function Up(e, t) {
  if (e.type !== "transaction" ||
  !e.spans?.length ||
  !e.sdkProcessingMetadata?.hasGenAiSpans ||
  t.getOptions().streamGenAiSpans === false ||
  Yf(t)) {
    return;
  }
  const n = [];
  const r = [];
  for (const s of e.spans) {
    if (s.op?.startsWith("gen_ai.")) {
      n.push(Dp(s));
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
      ...(As() && { ingest_settings: { infer_ip: o, infer_user_agent: o } }),
      items: n,
    },
  ];
}
const Os = Symbol.for("SentryBufferFullError");
function Ps(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function r(a) {
    t.delete(a);
  }
  function o(a) {
    if (!n()) {
      return fl(Os);
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
      return lr(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => _l(setTimeout(() => u(false), a)))];
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
const Fp = 60 * 1000/* 1e3 */;
function Bp(e, t = Rn()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const r = Date.parse(`${e}`);
  return isNaN(r) ? Fp : r - t;
}
function Hp(e, t) {
  return e[t] || e.all || 0;
}
function Vp(e, t, n = Rn()) {
  return Hp(e, t) > n;
}
function Wp(e, { statusCode: t, headers: n }, r = Rn()) {
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
      (o.all = r + Bp(a, r));
    } else if (t === 429) {
      (o.all = r + 60 * 1000/* 1e3 */);
    }
  }
  return o;
}
const Sl = 64;
function jp(e, t, n = Ps(e.bufferSize || Sl)) {
  let r = {};
  const o = a => n.drain(a);
  function s(a) {
    const c = [];

    Xo(a, (f, p) => {
      const h = xi(p);

      if (Vp(r, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(f);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = An(a[0], c);

    const u = (f) => {
      if (Ff(l, ["client_report"])) {
        if (Y) {
          H.warn(
            `Dropping client report. Will not send outcomes (reason: ${f}).`
          );
        }

        return;
      }
      Xo(l, (p, h) => {
        e.recordDroppedEvent(f, xi(h));
      });
    };

    const d = () => t({ body: Bf(l) }).then(
      f => f.statusCode === 413
        ? (Y &&
            H.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          f)
        : (Y &&
            f.statusCode !== undefined &&
            (f.statusCode < 200 || f.statusCode >= 300) &&
            H.warn(
              `Sentry responded with status code ${f.statusCode} to sent event.`
            ),
          (r = Wp(r, f)),
          f),
      (f) => {
        u("network_error");

        if (Y) {
          H.error("Encountered error running transport request:", f);
        }

        throw f;
      }
    );

    return n.add(d).then(
      f => f,
      (f) => {
        if (f === Os) {
          if (Y) {
            H.error("Skipped sending event because buffer is full.");
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
function zp(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: ar(), discarded_events: e },
  ];
  return An(t ? { dsn: t } : {}, [r]);
}
function bl(e) {
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
function qp(e) {
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
    profile_id: data?.[el],
    exclusive_time: data?.[tl],
    measurements: e.measurements,
    is_segment: true,
  };
}
function Gp(e) {
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
          ...(e.profile_id && { [el]: e.profile_id }),
          ...(e.exclusive_time && { [tl]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const mr = ["forwarded", "-ip", "remote-", "via", "-user"];
function Yp(e) {
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
        cookies: { deny: mr },
        httpHeaders: { request: { deny: mr }, response: { deny: mr } },
        httpBodies: [],
        urlQueryParams: { deny: mr },
        graphQL: { document: true, variables: true },
        genAI: { inputs: false, outputs: false },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7,
      };
}
const Xp = {
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
function Kp(e) {
  const t = e.dataCollection != null ? Xp : Yp(e.sendDefaultPii);
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
const zi = "Not capturing exception because it's already been captured.";
const qi = "Discarded session because of missing or non-string release";
const Cl = Symbol.for("SentryInternalError");
const Il = Symbol.for("SentryDoNotSendEventError");
const Zp = 5000/* 5e3 */;
function Pr(e) {
  return { message: e, [Cl]: true };
}
function Eo(e) {
  return { message: e, [Il]: true };
}
function Gi(e) {
  return no(e) && Cl in e;
}
function Yi(e) {
  return no(e) && Il in e;
}
function Xi(e, t, n, r, o) {
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
      const u = e.getOptions()._flushInterval ?? Zp;

      if (u > 0) {
        (c = true);

        (a = _l(
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
class Qp {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = Ps(t.transportOptions?.bufferSize ?? Sl));
    (this._dataCollection = Kp(t));

    if (t.dsn) {
      (this._dsn = rl(t.dsn));
    } else if (Y) {
      H.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const r = Ep(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: r,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs ?? true);

    if (this._options.enableLogs) {
      Xi(this, "afterCaptureLog", "flushLogs", nh, Op);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      Xi(this, "afterCaptureMetric", "flushMetrics", th, xp);
    }
  }
  captureException(t, n, r) {
    const o = Ke();
    if (_i(t)) {
      if (Y) {
        H.log(zi);
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
    const a = Is(t) ? t : String(t);
    const c = or(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, o)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, r) {
    const o = Ke();
    if (n?.originalException && _i(n.originalException)) {
      if (Y) {
        H.log(zi);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = Ki(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || r, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    vn(t, { init: false });
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

    vl(this, t, this._integrations);

    if (!n) {
      ji(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    const r = Up(t, this);
    let o = Gf(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      o = $i(o, Vf(s));
    }

    if (r) {
      (o = $i(o, r));
    }

    this.sendEnvelope(o).then(s => this.emit("afterSendEvent", t, s));
  }
  sendSession(t) {
    const { release, environment = ks } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (Y) {
          H.warn(qi);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (Y) {
          H.warn(qi);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const o = qf(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(o);
  }
  recordDroppedEvent(t, n, r = 1) {
    if (this._options.sendClientReports) {
      const o = `${t}:${n}`;

      if (Y) {
        H.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`);
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
        if (Y) {
          H.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (Y) {
      H.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = Cp(this, integrations));
    ji(this, integrations);
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
      vn(t, {
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

    return op(s, t, n, r, this, o).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...ef(r) },
          ...c.contexts,
        });

      const l = al(this, r);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, r = ft(), o = pt()) {
    if (Y &&
      Qo(t)) {
      H.log(`Captured error event \`${bl(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, r, o).then(
      s => s.event_id,
      (s) => {
        if (Y) {
          if (Yi(s)) {
            H.log(s.message);
          } else if (Gi(s)) {
            H.warn(s.message);
          } else {
            H.warn(s);
          }
        }
      }
    );
  }
  _processEvent(t, n, r, o) {
    const s = this.getOptions();
    const { sampleRate } = s;
    const c = Tl(t);
    const l = Qo(t);
    const d = `before send for type \`${t.type || "error"}\``;
    const f = typeof sampleRate === "undefined" ? undefined : Ef(sampleRate);
    const p = Ki(t.type);
    return this._prepareEvent(t, n, r, o)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", p);
          throw Eo("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const _ = eh(this, s, h, n);
        return Jp(_, d);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", p);

        if (c) {
          const g = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", g);
        }

        throw Eo(`${d} returned \`null\`, will not send event.`);
      }
      const m = r.getSession() || o.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (l && typeof f == "number" && jr() > f) {
        this.recordDroppedEvent("sample_rate", "error");

        throw Eo(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        );
      }

      if (c) {
        const y = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const g = h.spans ? h.spans.length : 0;
        const E = y - g;

        if (E > 0) {
          this.recordDroppedEvent("before_send", "span", E);
        }
      }
      const h_transaction_info = h.transaction_info;
      if (c && h_transaction_info && h.transaction !== t.transaction) {
        const y = "custom";
        h.transaction_info = { ...h_transaction_info, source: y };
      }
      this.sendEvent(h, n);
      return h;
    })
      .then(null, (h) => {
        throw Yi(h) || Gi(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            Pr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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

        if (r === Os) {
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
    if (Y) {
      H.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (Y) {
        H.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (Y) {
        H.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (Y) {
      H.log("Sending outcomes:", t);
    }

    const n = zp(t, this._options.tunnel && kn(this._dsn));
    this.sendEnvelope(n);
  }
}
function Ki(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function Jp(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (sr(e)) {
    return e.then(
      (r) => {
        if (!Zn(r) && r !== null) {
          throw Pr(n);
        }
        return r;
      },
      (r) => {
        throw Pr(`${t} rejected with ${r}`);
      }
    );
  }
  if (!Zn(e) && e !== null) {
    throw Pr(n);
  }
  return e;
}
function eh(e, t, n, r) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !Uf(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (Qo(l) && beforeSend) {
    return beforeSend(l, r);
  }
  if (Tl(l)) {
    if (c || ignoreSpans) {
      const u = qp(l);
      if (ignoreSpans?.length &&
      Li({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const d = c(u);

        if (d) {
          (l = cr(n, Gp(d)));
        } else {
          Ai();
        }
      }
      if (l.spans) {
        const d = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            Li({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            Pf(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              d.push(m);
            } else {
              Ai();
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
function Qo(e) {
  return e.type === undefined;
}
function Tl(e) {
  return e.type === "transaction";
}
function th(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + Nl(e.attributes);
}
function nh(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + Nl(e.attributes);
}
function Nl(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * Zi(n[0]));
    } else if (or(n)) {
      (t += Zi(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function Zi(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function rh(e, t) {
  if (t.debug === true) {
    if (Y) {
      H.enable();
    } else {
      Tn(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  ft().update(t.initialScope);
  const r = new e(t);
  oh(r);
  r.init();
  return r;
}
function oh(e) {
  ft().setClient(e);
}
function wo(e) {
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
function sh(e, t = true) {
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
function ih(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function Rl(e, t, n = [t], r = "npm") {
  const o = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!o.name) {
    (o.name = `sentry.javascript.${t}`);

    (o.packages = n.map(s => ({
      name: `${r}:@sentry/${s}`,
      version: en
    })));

    (o.version = en);
  }
}
const ah = 100;
function sn(e, t) {
  const n = ke();
  const r = pt();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = ah } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: ar(), ...e };

  const l = beforeBreadcrumb ? Tn(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    r.addBreadcrumb(l, maxBreadcrumbs);
  }
}
const ch = "FunctionToString";
const Qi = new WeakMap();

const uh = () => ({
  name: ch,

  setupOnce() {
    const e = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = Ns(this);
        let r;
        try {
          if (Qi.has(ke()) && n !== undefined) {
            (r = n);
          }
        } catch {}
        return e.apply(r ?? this, t);
      };
    } catch {}
  },

  setup(e) {
    Qi.set(e, true);
  }
});

const dh = [
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

const fh = "EventFilters";

const ph = (e = {}) => {
  let t;
  return {
    name: fh,
    setup(n) {
      const r = n.getOptions();
      t = Ji(e, r);
    },
    processEvent(n, r, o) {
      if (!t) {
        const s = o.getOptions();
        t = Ji(e, s);
      }
      return mh(n, t) ? null : n;
    },
  };
};

const hh = (e = {}) => ({
  ...ph(e),
  name: "InboundFilters"
});

function Ji(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : dh),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function mh(e, t) {
  if (e.type) {
    if (e.type === "transaction" && _h(e, t.ignoreTransactions)) {
      if (Y) {
        H.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Kt(e)}`);
      }

      return true;
    }
  } else {
    if (gh(e, t.ignoreErrors)) {
      if (Y) {
        H.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Kt(e)}`);
      }

      return true;
    }
    if (wh(e)) {
      if (Y) {
        H.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Kt(e)}`);
      }

      return true;
    }
    if (yh(e, t.denyUrls)) {
      if (Y) {
        H.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Kt(e)}.
Url: ${zr(e)}`);
      }

      return true;
    }
    if (!vh(e, t.allowUrls)) {
      if (Y) {
        H.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Kt(e)}.
Url: ${zr(e)}`);
      }

      return true;
    }
  }
  return false;
}
function gh(e, t) {
  return t?.length ? bl(e).some(n => ir(n, t)) : false;
}
function _h(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? ir(e_transaction, t) : false;
}
function yh(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = zr(e);
  return n ? ir(n, t) : false;
}
function vh(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = zr(e);
  return n ? ir(n, t) : true;
}
function Eh(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function zr(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        r => r.mechanism?.parent_id === undefined && r.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? Eh(n) : null;
  } catch {
    if (Y) {
      H.error(`Cannot extract url for event ${Kt(e)}`);
    }

    return null;
  }
}
function wh(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function Sh(e, t, n, r, o, s) {
  if (!o.exception?.values || !s || !lt(s.originalException)) {
    return;
  }
  const a =
    o.exception.values.length > 0
      ? o.exception.values[o.exception.values.length - 1]
      : undefined;

  if (a) {
    (o.exception.values = Jo(
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
function Jo(e, t, n, r, o, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (lt(r[o])) {
    ea(a, c, r);
    const u = e(t, r[o]);
    const l_length = l.length;
    ta(u, o, l_length, c);
    (l = Jo(e, t, n, r[o], o, [u, ...l], u, l_length));
  }

  if (kl(r)) {
    r.errors.forEach((u, d) => {
      if (lt(u)) {
        ea(a, c, r);
        const f = e(t, u);
        const l_length = l.length;
        ta(f, `errors[${d}]`, l_length, c);
        (l = Jo(e, t, n, u, o, [f, ...l], f, l_length));
      }
    });
  }

  return l;
}
function kl(e) {
  return Array.isArray(e.errors);
}
function ea(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(kl(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function ta(e, t, n, r) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
function bh(e) {
  return (
    lt(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function na(e) {
  return bh(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
const ra = new Set([]);
function Ch(e) {
  const t = "console";
  const n = cn(t, e);
  ln(t, Ih);
  return n;
}
const oa = new Set();
function Ih() {
  if ("console" in re) {
    ld.forEach(e => {
      if (!oa.has(e) && (e in re.console)) {
        oa.add(e);

        We(re.console, e, t => {
          (Wr[e] = t);

          return (...n) => {
            const [r] = n;
            const Wr_e = Wr[e];
            const s = ra.size && typeof r == "string" && ir(r, ra);

            if (!s) {
              et("console", { args: n, level: e });
            }

            if ((!s || (Y && H.isEnabled()))) {
              Wr_e?.apply(re.console, n);
            }
          };
        });
      }
    });
  }
}
function Th(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const Nh = "Dedupe";

const kh = () => {
  let e;
  return {
    name: Nh,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (Ah(t, e)) {
          if (Y) {
            H.warn(
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

function Ah(e, t) {
  return t ? !!(Oh(e, t) || Ph(e, t)) : false;
}
function Oh(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !Ol(e, t) ||
    !Al(e, t)
  );
}
function Ph(e, t) {
  const n = sa(t);
  const r = sa(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Ol(e, t) ||
    !Al(e, t)
  );
}
function Al(e, t) {
  let n = fi(e);
  let r = fi(t);
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
function Ol(e, t) {
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
function sa(e) {
  return e.exception?.values?.[0];
}
const Lh = "ConversationId";

const xh = () => ({
  name: Lh,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = ft().getScopeData();
      const r = pt().getScopeData();
      const o = n.conversationId || r.conversationId;
      if (o) {
        const { op: op_1, data, description } = so(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(sf, o);
      }
    });
  }
});

function Pl(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const Jn = re;
function Mh() {
  return "history" in Jn && !!Jn.history;
}
function Dh() {
  if (!("fetch" in Jn)) {
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
function es(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function Uh() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!Dh()) {
    return false;
  }
  if (es(Jn.fetch)) {
    return true;
  }
  let e = false;
  const Jn_document = Jn.document;
  if (Jn_document && typeof Jn_document.createElement == "function") {
    try {
      const n = Jn_document.createElement("iframe");
      (n.hidden = true);
      Jn_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = es(n.contentWindow.fetch));
      }

      Jn_document.head.removeChild(n);
    } catch (n) {
      if (Y) {
        H.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function Fh(e, t) {
  const n = "fetch";
  const r = cn(n, e);

  ln(n, () => Bh(undefined, t));

  return r;
}
function Bh(e, t = false) {
  if (!t || Uh()) {
    We(re, "fetch", n => (...r) => {
      const o = new Error();
      const { method, url } = Hh(r);

      const c = {
        args: r,
        fetchData: { method: method, url: url },
        startTimestamp: bt() * 1000/* 1e3 */,
        virtualError: o,
        headers: Vh(r),
      };

      et("fetch", { ...c });

      return n.apply(re, r).then(
        async l => {
          et("fetch", { ...c, endTimestamp: bt() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          et("fetch", { ...c, endTimestamp: bt() * 1000/* 1e3 */, error: l });

          if (lt(l) &&
            l.stack === undefined) {
            (l.stack = o.stack);
            Ut(l, "framesToPop", 1);
          }

          const d =
            ke()?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (d !== false &&
          lt(l) &&
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
                Ut(l, "__sentry_fetch_url_host__", h);
              }
            } catch {}
          }
          throw l;
        }
      );
    });
  }
}
function Lr(e, t) {
  return no(e) && !!e[t];
}
function ia(e) {
  return typeof e == "string"
    ? e
    : e
    ? Lr(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function Hh(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: ia(n),
      method: Lr(r, "method")
        ? String(r.method).toUpperCase()
        : Hc(n) && Lr(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: ia(t),
    method: Lr(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function Vh(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (Hc(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const Ll = re;
function Ls() {
  try {
    return Ll.document.location.href;
  } catch {
    return "";
  }
}
function Wh(e, t = 5) {
  if (!Ll.HTMLElement) {
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
const ue = re;
let ts = 0;
function $l() {
  return ts > 0;
}
function jh() {
  ts++;

  setTimeout(() => {
    ts--;
  });
}
function wn(e, t = {}) {
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
    if (Ns(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const r = function (...o) {
    re._sentryWrappedDepth = (re._sentryWrappedDepth || 0) + 1;
    try {
      const s = o.map(a => wn(a, t));
      return e.apply(this, s);
    } catch (s) {
      jh();

      Qc((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              qo(c, undefined);
              tn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: o });
            return c;
          }
        );

        pl(s);
      });

      throw s;
    } finally {
      re._sentryWrappedDepth = (re._sentryWrappedDepth || 0) - 1;
    }
  };
  try {
    for (const o in e) {
      if (Object.prototype.hasOwnProperty.call(e, o)) {
        (r[o] = e[o]);
      }
    }
  } catch {}
  Vc(r, e);
  Ut(e, "__sentry_wrapped__", r);
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
function aa() {
  const e = Ls();
  const { referrer } = ue.document || {};
  const { userAgent } = ue.navigator || {};
  const r = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: r };
}
function $s(e, t) {
  const n = io(e, t);
  const r = { type: Xh(t), value: Kh(t) };

  if (n.length) {
    (r.stacktrace = { frames: n });
  }

  if (r.type === undefined &&
    r.value === "") {
    (r.value = "Unrecoverable error caught");
  }

  return r;
}
function zh(e, t, n, r) {
  const s = ke()?.getOptions().normalizeDepth;
  const a = tm(t);
  const c = { __serialized__: zc(t, s) };
  if (a) {
    return { exception: { values: [$s(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: ro(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
          value: Jh(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = io(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function So(e, t) {
  return { exception: { values: [$s(e, t)] } };
}
function io(e, t) {
  const n = t.stacktrace || t.stack || "";
  const r = Gh(t);
  const o = Yh(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const qh = /Minified React error #\d+;/i;
function Gh(e) {
  return e && qh.test(e.message) ? 1 : 0;
}
function Yh(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function xl(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function Xh(e) {
  const t = e?.name;
  return !t && xl(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function Kh(e) {
  const t = e?.message;
  return xl(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? na(t.error)
      : na(e)
    : "No error message";
}
function Zh(e, t, n, r) {
  const o = n?.syntheticException || undefined;
  const s = xs(e, t, o, r);
  tn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return lr(s);
}
function Qh(e, t, n = "info", r, o) {
  const s = r?.syntheticException || undefined;
  const a = ns(e, t, s, o);
  (a.level = n);

  if (r?.event_id) {
    (a.event_id = r.event_id);
  }

  return lr(a);
}
function xs(e, t, n, r, o) {
  let s;
  if (Bc(t) && t.error) {
    return So(e, t.error);
  }
  if (hi(t) || Sd(t)) {
    const a = t;
    if ("stack" in t) {
      s = So(e, t);
      const c = s.exception?.values?.[0];
      if (r && n && c && !c.stacktrace) {
        const l = io(e, n);

        if (l.length) {
          (c.stacktrace = { frames: l });
          tn(s, { synthetic: true });
        }
      }
    } else {
      const c = a.name || (hi(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = ns(e, l, n, r));
      qo(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (lt(t)) {
    return So(e, t);
  }

  if (Zn(t) || ro(t)) {
    (s = zh(e, t, n, o));
    tn(s, { synthetic: true });
    return s;
  }

  (s = ns(e, t, n, r));
  qo(s, `${t}`);
  tn(s, { synthetic: true });
  return s;
}
function ns(e, t, n, r) {
  const o = {};
  if (r && n) {
    const s = io(e, n);

    if (s.length) {
      (o.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    tn(o, { synthetic: true });
  }
  if (Is(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (o.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return o;
  }
  (o.message = t);
  return o;
}
function Jh(e, { isUnhandledRejection: t }) {
  const n = Cd(e);
  const r = t ? "promise rejection" : "exception";
  return Bc(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : ro(e)
    ? `Event \`${em(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function em(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function tm(e) {
  return Object.values(e).find(lt);
}
class nm extends Qp {
  constructor(t) {
    const n = rm(t);
    const r = ue.SENTRY_SDK_SOURCE || Tp();
    Rl(n, "browser", ["browser"], r);
    super(n);
    const { userInfo } = this.getDataCollectionOptions();

    if (n._metadata?.sdk) {
      (n._metadata.sdk.settings = {
          infer_ip: userInfo ? "auto" : "never",
          ...n._metadata.sdk.settings,
        });
    }

    const { sendClientReports } = this._options;

    if (ue.document) {
      ue.document.addEventListener("visibilitychange", () => {
        if (ue.document.visibilityState === "hidden") {
          sendClientReports && this._flushOutcomes();

          queueMicrotask(() => {
            this.flush();
          });
        }
      });
    }

    if (userInfo) {
      this.on("beforeSendSession", ih);
    }
  }
  eventFromException(t, n) {
    return Zh(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return Qh(
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
function rm(e) {
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
const om = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const we = re;
function ca(e, t, n) {
  if (we.document) {
    we.addEventListener(e, t, n);
  }
}
function la(e, t, n) {
  if (we.document) {
    we.removeEventListener(e, t, n);
  }
}

const sm = (e) => {
  return () => {
    if (!t) {
      e();
      (t = true);
    }
  };
};

const im = (e) => {
  const t = we.requestIdleCallback || we.setTimeout;

  if (we.document?.visibilityState === "hidden") {
    e();
  } else {
    (e = sm(e));
    ca("visibilitychange", e, { once: true, capture: true });
    ca("pagehide", e, { once: true, capture: true });

    t(() => {
      e();
      la("visibilitychange", e, { capture: true });
      la("pagehide", e, { capture: true });
    });
  }
};

const am = 80;
const Gt = {};
try {
  if (typeof Node !== "undefined") {
    (Gt.parentNode = Object.getOwnPropertyDescriptor(
        Node.prototype,
        "parentNode"
      ).get);
  }

  if (typeof Element !== "undefined") {
    (Gt.tagName = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "tagName"
      ).get);

    (Gt.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get);

    (Gt.className = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "className"
      ).get);

    (Gt.getAttribute = Element.prototype.getAttribute);
  }

  if (typeof HTMLElement !== "undefined") {
    (Gt.dataset = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "dataset"
      ).get);
  }
} catch {}
function Pt(e, t, n) {
  const Gt_t = Gt[t];
  if (Gt_t) {
    try {
      return Gt_t.call(e, n);
    } catch {}
  }
  const e_t = e[t];
  return typeof e_t == "function" ? e_t.call(e, n) : e_t;
}
function Ml(e, t = {}) {
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
    const f = (!Array.isArray(t) && t.maxStringLength) || am;

    while (n &&
         s++ < r &&
         ((u = cm(n, d)),
         !(u === "html" || (s > 1 && a + o.length * c_length + u.length >= f)))) {
      o.push(u);
      (a += u.length);
      (n = Pt(n, "parentNode"));
    }

    return o.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function cm(e, t) {
  const n = [];
  const r = Pt(e, "tagName");
  if (!r) {
    return "";
  }
  if (typeof HTMLElement !== "undefined" && e instanceof HTMLElement) {
    const s = Pt(e, "dataset");
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
        .filter(s => Pt(e, "getAttribute", s))
        .map(s => [s, Pt(e, "getAttribute", s)])
    : null;
  if (o?.length) {
    o.forEach((s) => {
      n.push(`[${s[0]}="${s[1]}"]`);
    });
  } else {
    const s = Pt(e, "id");

    if (s) {
      n.push(`#${s}`);
    }

    const a = Pt(e, "className");
    if (a && St(a)) {
      const c = a.split(/\s+/);
      for (const l of c) {
        n.push(`.${l}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const a = Pt(e, "getAttribute", s);

    if (a) {
      n.push(`[${s}="${a}"]`);
    }
  }
  return n.join("");
}
const lm = 1000/* 1e3 */;
let ua;
let rs;
let os;
function um(e) {
  cn("dom", e);
  ln("dom", dm);
}
function dm() {
  if (!we.document) {
    return;
  }
  const e = et.bind(null, "dom");
  const t = da(e, true);
  we.document.addEventListener("click", t, false);
  we.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const o = we[n]?.prototype;

    if (o?.hasOwnProperty?.("addEventListener")) {
      We(o, "addEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const d = (u[a] = u[a] || { refCount: 0 });
            if (!d.handler) {
              const f = da(e);
              (d.handler = f);
              s.call(this, a, f, l);
            }
            d.refCount++;
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
function fm(e) {
  if (e.type !== rs) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== os) {
      return false;
    }
  } catch {}
  return true;
}
function pm(e, t) {
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
function da(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = hm(n);
    if (pm(n.type, r)) {
      return;
    }
    Ut(n, "_sentryCaptured", true);

    if (r && !r._sentryId) {
      Ut(r, "_sentryId", Ke());
    }

    const o = n.type === "keypress" ? "input" : n.type;

    if (!fm(n)) {
      e({ event: n, name: o, global: t });
      (rs = n.type);
      (os = r ? r._sentryId : undefined);
    }

    clearTimeout(ua);

    (ua = we.setTimeout(() => {
      (os = undefined);
      (rs = undefined);
    }, lm));
  };
}
function hm(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let gr;
function Dl(e) {
  const t = "history";
  cn(t, e);
  ln(t, mm);
}
function mm() {
  we.addEventListener("popstate", () => {
    const t = we.location.href;
    const n = gr;
    (gr = t);

    if (n === t) {
      return;
    }

    et("history", { from: n, to: t });
  });

  if (!Mh()) {
    return;
  }

  class e {
    constructor(t) {
      return function (...n) {
        const r = n.length > 2 ? n[2] : undefined;
        if (r) {
          const o = gr;
          const s = gm(String(r));
          (gr = s);

          if (o === s) {
            return t.apply(this, n);
          }

          et("history", { from: o, to: s });
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

  We(we.history, "pushState", e);
  We(we.history, "replaceState", e);
}
function gm(e) {
  try {
    return new URL(e, we.location.origin).toString();
  } catch {
    return e;
  }
}
const $r = {};
function _m(e) {
  const $r_e = $r[e];
  if ($r_e) {
    return $r_e;
  }
  let n = we[e];
  if (es(n)) {
    return ($r[e] = n.bind(we));
  }
  const {
    document
  } = we;
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
      if (om) {
        H.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          o
        );
      }
    }
  }
  return n && ($r[e] = n.bind(we));
}
function ym(e) {
  $r[e] = undefined;
}
const Hn = "__sentry_xhr_v3__";
function vm(e) {
  cn("xhr", e);
  ln("xhr", Em);
}
function Em() {
  if (!we.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, r) {
      const o = new Error();
      const s = bt() * 1000/* 1e3 */;
      const a = St(r[0]) ? r[0].toUpperCase() : undefined;
      const c = wm(r[1]);
      if (!a || !c) {
        return t.apply(n, r);
      }
      (n[Hn] = { method: a, url: c, request_headers: {} });

      if (a === "POST" &&
        c.match(/sentry_key/)) {
        (n.__sentry_own_request__ = true);
      }

      const l = () => {
        const n_Hn = n[Hn];
        if (n_Hn && n.readyState === 4) {
          try {
            n_Hn.status_code = n.status;
          } catch {}
          const d = {
            endTimestamp: bt() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: o,
          };
          et("xhr", d);
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
          const d_Hn = d[Hn];

          if (d_Hn && St(p) && St(h)) {
            (d_Hn.request_headers[p.toLowerCase()] = h);
          }

          return u.apply(d, f);
        },
      }));

      return t.apply(n, r);
    },
  }));

  (XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
      apply(t, n, r) {
        const n_Hn = n[Hn];
        if (!n_Hn) {
          return t.apply(n, r);
        }

        if (r[0] !== undefined) {
          (n_Hn.body = r[0]);
        }

        const s = { startTimestamp: bt() * 1000/* 1e3 */, xhr: n };
        et("xhr", s);
        return t.apply(n, r);
      },
    }));
}
function wm(e) {
  if (St(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
function Sm(e) {
  if (typeof Element === "undefined") {
    return false;
  }
  try {
    return e instanceof Element;
  } catch {
    return false;
  }
}
const bm = 40;
function Cm(e, t = _m("fetch")) {
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
      ym("fetch");
      throw l;
    } finally {
      (n -= a);
      r--;
    }
  }
  return jp(e, o, Ps(e.bufferSize || bm));
}
const Sn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Im = 30;
const Tm = 50;
function ss(e, t, n, r) {
  const o = { filename: e, function: t === "<anonymous>" ? on : t, in_app: true };

  if (n !== undefined) {
    (o.lineno = n);
  }

  if (r !== undefined) {
    (o.colno = r);
  }

  return o;
}
const Nm = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const Rm =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const km = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const Am = /at (.+?) ?\(data:(.+?),/;

const Om = (e) => {
  const t = e.match(Am);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = Nm.exec(e);
  if (n) {
    const [, o, s, a] = n;
    return ss(o, on, Number(s), Number(a));
  }
  const r = Rm.exec(e);
  if (r) {
    if (r[2]?.indexOf("eval") === 0) {
      const c = km.exec(r[2]);

      if (c) {
        (r[2] = c[1]);
        (r[3] = c[2]);
        (r[4] = c[3]);
      }
    }
    const [s, a] = Ul(r[1] || on, r[2]);
    return ss(a, s, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};

const Pm = [Im, Om];

const Lm =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const $m = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const xm = (e) => {
  const t = Lm.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = $m.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, r] = t;
    let o = t[1] || on;
    ([o, r] = Ul(o, r));
    return ss(r, o, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const Mm = [Tm, xm];
const Dm = [Pm, Mm];
const Um = Uc(...Dm);

const Ul = (e, t) => {
  const n = e.includes("safari-extension");
  const r = e.includes("safari-web-extension");
  return n || r
    ? [
        e.includes("@") ? e.split("@")[0] : on,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const _r = 1024;
const Fm = "Breadcrumbs";

const Hm = (e = {}) => {
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
    name: Fm,
    setup(n) {
      if (t.console) {
        Ch(jm(n));
      }

      if (t.dom) {
        um(Wm(n, t.dom));
      }

      if (t.xhr) {
        vm(zm(n));
      }

      if (t.fetch) {
        Fh(qm(n));
      }

      if (t.history) {
        Dl(Gm(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", Vm(n));
      }
    },
  };
};

function Vm(e) {
  return n => {
    if (ke() === e) {
      sn(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: Kt(n),
        },
        { event: n }
      );
    }
  };
}
function Wm(e, t) {
  return r => {
    if (ke() !== e) {
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
      c > _r) {
      Sn &&
          H.warn(
            `\`dom.maxStringLength\` cannot exceed ${_r}, but a value of ${c} was configured. Sentry will use ${_r} instead.`
          );

      (c = _r);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const r_event = r.event;
      const d = Ym(r_event) ? r_event.target : r_event;
      (o = Ml(d, { keyAttrs: a, maxStringLength: c }));
      (s = Wh(d));
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

    sn(l, { event: r.event, name: r.name, global: r.global });
  };
}
function jm(e) {
  return function (n) {
    if (ke() !== e) {
      return;
    }
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: Th(n.level),
      message: gi(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (r.message = `Assertion failed: ${
          gi(n.args.slice(1), " ") || "console.assert"
        }`);

        (r.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    sn(r, { input: n.args, level: n.level });
  };
}
function zm(e) {
  return n => {
    if (ke() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    const s = n.xhr[Hn];
    if (!startTimestamp || !endTimestamp || !s) {
      return;
    }
    const { method, url, status_code, body } = s;
    const d = { method: method, url: url, status_code: status_code };
    const f = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const p = { category: "xhr", data: d, type: "http", level: Pl(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", p, f);
    sn(p, f);
  };
}
function qm(e) {
  return n => {
    if (ke() !== e) {
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
        sn(a, s);
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
          level: Pl(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        sn(l, c);
      }
    }
  };
}
function Gm(e) {
  return n => {
    if (ke() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = wo(ue.location.href);
    let a = from ? wo(from) : undefined;
    const c = wo(to_2);

    if (!a?.path) {
      (a = s);
    }

    if (s.protocol === c.protocol && s.host === c.host) {
      (to_2 = c.relative);
    }

    if (s.protocol === a.protocol && s.host === a.host) {
      (from = a.relative);
    }

    sn({ category: "navigation", data: { from: from, to: to_2 } });
  };
}
function Ym(e) {
  return !!e && !!e.target;
}

const Xm =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const Km = "BrowserApiErrors";

const Qm = (e = {}) => {
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
    name: Km,
    setupOnce() {
      if (t.setTimeout) {
        We(ue, "setTimeout", fa);
      }

      if (t.setInterval) {
        We(ue, "setInterval", fa);
      }

      if (t.requestAnimationFrame) {
        We(ue, "requestAnimationFrame", Jm);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in ue) {
        We(XMLHttpRequest.prototype, "send", eg);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : Xm).forEach(o => tg(o, t));
      }
    },
  };
};

function fa(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = wn(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${Dt(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function Jm(e) {
  return function (t) {
    return e.apply(this, [
      wn(t, {
        mechanism: {
          data: { handler: Dt(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function eg(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((o) => {
      if (o in n &&
        typeof n[o] == "function") {
        We(n, o, s => {
          const a = {
              mechanism: {
                data: { handler: Dt(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${o}`,
              },
            };

          const c = Ns(s);

          if (c) {
            (a.mechanism.data.handler = Dt(c));
          }

          return wn(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function tg(e, t) {
  const r = ue[e]?.prototype;

  if (r?.hasOwnProperty?.("addEventListener")) {
    We(r, "addEventListener", o => (function(s, a, c) {
      try {
        if (ng(a)) {
          (a.handleEvent = wn(a.handleEvent, {
              mechanism: {
                data: { handler: Dt(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        rg(this, s, a);
      }

      return o.apply(this, [
        s,
        wn(a, {
          mechanism: {
            data: { handler: Dt(a), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    We(r, "removeEventListener", o => (function(s, a, c) {
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
function ng(e) {
  return typeof e.handleEvent == "function";
}
function rg(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const og = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof ue.document === "undefined") {
          if (Sn) {
            H.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        Vi({ ignoreDuration: true });
        let n = false;
        im(() => {
          if (!n) {
            vo();
            (n = true);
          }
        });
        const r = pt();
        let o = r.getUser();

        r.addScopeListener((s) => {
          const a = s.getUser();

          if ((o?.id !== a?.id || o?.ip_address !== a?.ip_address)) {
            (o = a);
            n && vo();
          }
        });

        if (t === "route") {
          Dl(({ from: s, to: a }) => {
            if (s !== a) {
              Vi({ ignoreDuration: true });
              vo();
              (n = true);
            }
          });
        }
      },
    };
  };

const sg = "CultureContext";

const ag = () => ({
  name: sg,

  preprocessEvent(e) {
    const t = pa();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = pa();

    if (t) {
      dl(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function pa() {
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
const cg = "GlobalHandlers";

const ug = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: cg,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        dg(n);
        ha("onerror");
      }

      if (t.onunhandledrejection) {
        fg(n);
        ha("onunhandledrejection");
      }
    },
  };
};

function dg(e) {
  yd((t) => {
    const { stackParser, attachStacktrace } = Fl();
    if (ke() !== e || $l()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = mg(xs(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    hl(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function fg(e) {
  Ed((t) => {
    const { stackParser, attachStacktrace } = Fl();
    if (ke() !== e || $l()) {
      return;
    }
    const o = pg(t);
    const s = or(o) ? hg(o) : xs(stackParser, o, undefined, attachStacktrace, true);
    (s.level = "error");

    hl(s, {
      originalException: o,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function pg(e) {
  if (or(e)) {
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
function hg(e) {
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
function mg(e, t, n, r) {
  const o = (e.exception = e.exception || {});
  const s = (o.values = o.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: r,
      lineno: n,
      filename: gg(t) ?? Ls(),
      function: on,
      in_app: true,
    });
  }

  return e;
}
function ha(e) {
  if (Sn) {
    H.log(`Global Handler attached: ${e}`);
  }
}
function Fl() {
  return ke()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function gg(e) {
  if (!(!St(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${sh(e, false)}>` : e;
  }
}

const _g = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = aa();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    const t = e.attributes?.[Jc];
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const n = aa();
    dl(e, {
      [tp]: t !== "http.client" ? n.url : undefined,
      "http.request.header.user_agent": n.headers["User-Agent"],
      "http.request.header.referer": n.headers.Referer,
    });
  }
});

const yg = "cause";
const vg = 5;
const Eg = "LinkedErrors";

const Sg = (e = {}) => {
  const t = e.limit || vg;
  const n = e.key || yg;
  return {
    name: Eg,
    preprocessEvent(r, o, s) {
      const a = s.getOptions();
      Sh($s, a.stackParser, n, t, r, o);
    },
  };
};

const bg = /^HTML(\w*)Element$/;
function Bl(e) {
  if (typeof window !== "undefined" && e === window) {
    return "[Window]";
  }
  if (typeof document !== "undefined" && e === document) {
    return "[Document]";
  }
  if (Sm(e)) {
    const t = Cg(e);
    if (bg.test(t)) {
      return `[HTMLElement: ${Ml(e)}]`;
    }
  }
}
function Cg(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Ig() {
  return Tg()
    ? (Sn &&
        Tn(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function Tg() {
  if (typeof ue.window === "undefined") {
    return false;
  }
  const e = ue;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = Ls();
  return !(
    ue === ue.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function Ng(e) {
  return [hh(), uh(), xh(), Qm(), Hm(), ug(), Sg(), kh(), _g(), ag(), og()];
}
function Rg(e = {}) {
  const t = !e.skipBrowserExtensionCheck && Ig();
  let n = e.defaultIntegrations == null ? Ng() : e.defaultIntegrations;
  const r = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: gd(e.stackParser || Um),
    integrations: bp({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || Cm,
  };
  jc(Bl);
  return rh(nm, r);
}
function ma(e = {}) {
  const ue_document = ue.document;
  const n = ue_document?.head || ue_document?.body;
  if (!n) {
    if (Sn) {
      H.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const r = ft();
  const s = ke()?.getDsn();
  if (!s) {
    if (Sn) {
      H.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...r.getUser(), ...e.user },
      eventId: e.eventId || gp(),
    };

  const c = ue.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = wp(s, a));
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
          ue.removeEventListener("message", d);
        }
      }
    };
    ue.addEventListener("message", d);
  }

  n.appendChild(c);
}
let Ft;
let me;
let bo;
let ga;
let bn = 0;
const Hl = [];
const ve = X;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = ve;

function On(e, t) {
  if (ve.__h) {
    ve.__h(me, e, bn || t);
  }

  (bn = 0);
  const n = me.__H || (me.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function L(e) {
  (bn = 1);
  return Ms(jl, e);
}
function Ms(e, t, n) {
  const r = On(Ft++, 2);
  (r.t = e);

  if (!r.__c &&
    ((r.__ = [
      n ? n(t) : jl(undefined, t),
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
    me.__f = true;

    var {
      shouldComponentUpdate,
      componentWillUpdate
    } = me;

    (me.componentWillUpdate = function (c, l, u) {
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

    (me.shouldComponentUpdate = o);
  }

  return r.__N || r.__;
}
function F(e, t) {
  const n = On(Ft++, 3);

  if (!ve.__s && Us(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    me.__H.__h.push(n);
  }
}
function Bt(e, t) {
  const n = On(Ft++, 4);

  if (!ve.__s && Us(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    me.__h.push(n);
  }
}
function O(e) {
  (bn = 5);

  return Se(() => ({
    current: e
  }), []);
}
function Ds(e, t, n) {
  (bn = 6);

  Bt(
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
  const n = On(Ft++, 7);

  if (Us(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function N(e, t) {
  (bn = 8);

  return Se(() => e, t);
}
function ao(e) {
  const t = me.context[e.__c];
  const n = On(Ft++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(me)), t.props.value) : e.__;
}
function Vl(e, t) {
  if (ve.useDebugValue) {
    ve.useDebugValue(t ? t(e) : e);
  }
}
function Wl() {
  const e = On(Ft++, 11);
  if (!e.__) {
    for (var t = me.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function kg() {
  for (let e; (e = Hl.shift()); ) {
    const e_H = e.__H;
    if (e.__P && e_H) {
      try {
        e_H.__h.some(xr);
        e_H.__h.some(is);
        (e_H.__h = []);
      } catch (n) {
        (e_H.__h = []);
        ve.__e(n, e.__v);
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

  (Ft = 0);
  const t = (me = e.__c).__H;

  if (t) {
    if (bo === me) {
      (t.__h = []);
      (me.__h = []);

      t.__.some(n => {
        if (n.__N) {
          (n.__ = n.__N);
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.some(xr);
      t.__h.some(is);
      (t.__h = []);
      (Ft = 0);
    }
  }

  (bo = me);
});

(ve.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((Hl.push(e_c) !== 1 && ga === ve.requestAnimationFrame) ||
          ((ga = ve.requestAnimationFrame) || Ag)(kg));

    e_c.__H.__.some(n => {
      if (n.u) {
        (n.__H = n.u);
        (n.u = undefined);
      }
    });
  }

  bo = null;
  me = null;
});

(ve.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.some(xr);

      (n.__h = n.__h.filter(r => !r.__ || is(r)));
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
    e_c.__H.__.some(r => {
        try {
          xr(r);
        } catch (o) {
          t = o;
        }
      });

    (e_c.__H = undefined);
    t && ve.__e(t, e_c.__v);
  }
});

const ba = typeof requestAnimationFrame == "function";
function Ag(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (ba) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (ba) {
    (t = requestAnimationFrame(n));
  }
}
function xr(e) {
  const t = me;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (me = t);
}
function is(e) {
  const t = me;
  (e.__c = e.__());
  (me = t);
}
function Us(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, r) => n !== e[r]);
}
function jl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zl(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function as(e, t) {
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
function ql(e, t) {
  const n = t();
  const r = L({ t: { __: n, u: t } });
  const o = r[0].t;
  const [, s] = r;

  Bt(
    () => {
      (o.__ = n);
      (o.u = t);

      if (Co(o)) {
        s({ t: o });
      }
    },
    [e, n, t]
  );

  F(
    () => {
      if (Co(o)) {
        s({ t: o });
      }

      return e(() => {
        if (Co(o)) {
          s({ t: o });
        }
      });
    },
    [e]
  );

  return n;
}
function Co(e) {
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
function Gl(e) {
  e();
}
function Yl(e) {
  return e;
}
function Xl() {
  return [false, Gl];
}
const Kl = Bt;

class cs {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return as(this.props, e) || as(this.state, t);
    }
}

function co(e, t) {
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

    return as(this.props, o);
  }
  function r(o) {
    (this.shouldComponentUpdate = n);
    return tt(e, o);
  }
  (r.displayName = `Memo(${e.displayName || e.name})`);
  r.__f = true;
  r.prototype.isReactComponent = true;
  (r.type = e);
  return r;
}
((cs.prototype = new Xe()).isPureReactComponent = true);

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
const Og =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Zl(e) {
  class t {
    constructor(n) {
      const r = zl({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      Kn(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = Og);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const Ia = (e, t) => e == null ? null : Je(Je(e).map(t));

const Pg = {
  map: Ia,
  forEach: Ia,
  count(e) {
    return e ? Je(e).length : 0;
  },
  only(e) {
    const t = Je(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: Je,
};

X.__e = (e, t, n, r) => {
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
function Ql(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(r => {
      if (typeof r.__c == "function") {
        r.__c();
      }
    }),
        (e.__c.__H = null));

    (e = zl({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(r => Ql(r, t, n)));
  }

  return e;
}
function Jl(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(r => Jl(r, t, n)));

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
        this.__v.__k[0] = Ql(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const o = t.__a && tt(Re, null, e.fallback);

    if (o) {
      (o.__u &= -33);
    }

    return [tt(Re, null, t.__a ? null : e.children), o];
  }
}

function eu(e) {
  const t = e.__ && e.__.__c;
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

class Vn {
  constructor() {
    (this.i = null);
    (this.l = null);
  }

  render(e) {
    (this.i = null);
    (this.l = new Map());
    const t = Je(e.children);

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

((Ie.prototype = new Xe()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    (r.o = []);
  }

  r.o.push(t_c);
  const o = eu(r.__v);

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
        r.__v.__k[0] = Jl(u, u.__c.__P, u.__c.__O);
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

const Na = (e, t, n) => {
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
function $g(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function xg(e) {
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

  Kn(tt($g, { context: t.context }, e.__v), t.v);
}

export function $(e, t) {
  const n = tt(xg, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((Vn.prototype = new Xe()).__a = function (e) {
  const t = this;
  const n = eu(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return o => {
    const s = () => {
      if (t.props.revealOrder) {
        r.push(o);
        Na(t, e, r);
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

(Vn.prototype.componentDidUpdate = Vn.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        Na(e, n, t);
      });
    });

const tu =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const Mg =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const Dg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const Ug = /[A-Z0-9]/g;
const Fg = typeof document !== "undefined";

const Bg = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function nu(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Kn(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function Hg(e, t, n) {
  $c(e, t);

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

X.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.nativeEvent = e);
  return e.nativeEvent;
};
let Fs;

const Vg = {
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
            (Fg && a === "children" && type === "noscript") ||
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
                  Bg(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (Dg.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && Mg.test(a)) {
            (a = a.replace(Ug, "-$&").toLowerCase());
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
            (o.value = Je(props.children).forEach(u => {
              u.props.selected = o.value.includes(u.props.value);
            }));

        o.defaultValue != null &&
          (o.value = Je(props.children).forEach(u => {
            u.props.selected = o.multiple
              ? o.defaultValue.includes(u.props.value)
              : o.defaultValue == u.props.value;
          }));
      }

      if (props.class && !props.className) {
        (o.class = props.class);
        Object.defineProperty(o, "className", Vg);
      } else if (props.className) {
        (o.class = o.className = props.className);
      }

      (t.props = o);
    })(e);
  }

  (e.$$typeof = tu);

  if (vnode) {
    vnode(e);
  }
};
X.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (Fs = e.__c);
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

  (Fs = null);
};

const Wg = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return Fs.__n[e.__c].props.value;
        },
        useCallback: N,
        useContext: ao,
        useDebugValue: Vl,
        useDeferredValue: Yl,
        useEffect: F,
        useId: Wl,
        useImperativeHandle: Ds,
        useInsertionEffect: Kl,
        useLayoutEffect: Bt,
        useMemo: Se,
        useReducer: Ms,
        useRef: O,
        useState: L,
        useSyncExternalStore: ql,
        useTransition: Xl,
      },
    },
  };

const ru = "18.3.1";
function jg(e) {
  return tt.bind(null, e);
}
function ur(e) {
  return !!e && e.$$typeof === tu;
}
function zg(e) {
  return ur(e) && e.type === Re;
}
function qg(e) {
  return (
    !!e &&
    typeof e.displayName == "string" &&
    e.displayName.indexOf("Memo(") == 0
  );
}
function Gg(e) {
  return ur(e) ? xc(...arguments) : e;
}
function ou(e) {
  return !!e.__k && (Kn(null, e), true);
}
function Yg(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Xg = (e, t) => e(t);

const Kg = (e, t) => {
  let n;
  const X_debounceRendering = X.debounceRendering;
  X.debounceRendering = s => {
    n = s;
  };
  try {
    const o = e(t);

    if (n) {
      n();
    }

    return o;
  } finally {
    X.debounceRendering = X_debounceRendering;
  }
};

const Zg = ur;

const Wn = {
  useState: L,
  useId: Wl,
  useReducer: Ms,
  useEffect: F,
  useLayoutEffect: Bt,
  useInsertionEffect: Kl,
  useTransition: Xl,
  useDeferredValue: Yl,
  useSyncExternalStore: ql,
  startTransition: Gl,
  useRef: O,
  useImperativeHandle: Ds,
  useMemo: Se,
  useCallback: N,
  useContext: ao,
  useDebugValue: Vl,
  version: "18.3.1",
  Children: Pg,
  render: nu,
  hydrate: Hg,
  unmountComponentAtNode: ou,
  createPortal: $,
  createElement: tt,
  createContext: Cn,
  createFactory: jg,
  cloneElement: Gg,
  createRef: nd,
  Fragment: Re,
  isValidElement: ur,
  isElement: Zg,
  isFragment: zg,
  isMemo: qg,
  findDOMNode: Yg,
  Component: Xe,
  PureComponent: cs,
  memo: co,
  forwardRef: Zl,
  flushSync: Kg,
  unstable_batchedUpdates: Xg,
  StrictMode: Re,
  Suspense: Ie,
  SuspenseList: Vn,
  lazy: ne,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Wg,
};

function Qg(e) {
  return (
    Zn(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function Jg(e) {
  const t = { ...e };
  Rl(t, "react");
  mp("react", { version: ru });
  const n = Rg(t);
  jc(e_);
  return n;
}
function e_(e) {
  return Qg(e) ? "[SyntheticEvent]" : Bl(e);
}
function t_(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function n_(e, t) {
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
function r_(e, { componentStack: t }, n) {
  if (t_(ru) && lt(e) && t) {
    const r = new Error(e.message);
    (r.name = `React ErrorBoundary ${e.name}`);
    (r.stack = t);
    n_(e, r);
  }
  return pl(e, n);
}
const o_ = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Io = { componentStack: null, error: null, eventId: null };
class s_ extends Xe {
  constructor(t) {
    super(t);
    (this.state = Io);
    (this._openFallbackReportDialog = true);
    const n = ke();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (r) => {
        if (!r.type &&
          this._lastEventId &&
          r.event_id === this._lastEventId) {
          ma({ ...t.dialogOptions, eventId: this._lastEventId });
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

    Qc((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const d = r_(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, d);
      }

      if (showDialog) {
        (this._lastEventId = d);
        this._openFallbackReportDialog && ma({ ...dialogOptions, eventId: d });
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
      if (this.state === Io) {
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

    this.setState(Io);
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
    return ur(o)
      ? o
      : (fallback && o_ && H.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
Jg({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.3",
});
function i_(e) {
  return {
    render(t) {
      nu(t, e);
    },
    unmount() {
      ou(e);
    },
  };
}
const a_ = "modulepreload";

const c_ = e => `/${e}`;

const Pa = {};

const Z = (t, n, r) => {
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
        (u = c_(u));

        if (u in Pa) {
          return;
        }

        Pa[u] = true;
        const d = u.endsWith(".css");
        const f = d ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${f}`)) {
          return;
        }
        const p = document.createElement("link");
        (p.rel = d ? "stylesheet" : a_);

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

const l_ = {};
function yr(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function su(e, t, n) {
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
  (e = ls(e.replace(o, "")));
  (t = ls(t || ""));
  for (let d = Math.max(e.length, t.length), f = 0; f < d; f++) {
    if (t[f] && t[f].charAt(0) === ":") {
      const p = t[f].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[f].match(/[+*?]+$/) || l_)[0] || "";
      const m = ~h.indexOf("+");
      const _ = ~h.indexOf("*");
      const y = e[f] || "";
      if (!y && !_ && (!h.includes("?") || m)) {
        r = false;
        break;
      }
      (a[p] = decodeURIComponent(y));

      if (m || _) {
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
function u_(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function d_(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : ls(n.props.path).map(f_).join(""))(e));

  return e.props;
}
function ls(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function f_(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const p_ = {};
const nn = [];
const Yn = [];
let Ve = null;
const Bs = { url: Hs() };
const iu = Cn(Bs);
function dr() {
  const e = ao(iu);
  if (e === Bs) {
    const t = L()[1];
    F(() => {
      Yn.push(t);

      return () => Yn.splice(Yn.indexOf(t), 1);
    }, []);
  }
  return [e, je];
}
function Hs() {
  let e;
  return `${(e =
  Ve && Ve.location
    ? Ve.location
    : Ve && Ve.getCurrentLocation
    ? Ve.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : p_).pathname || ""}${e.search || ""}`;
}
function je(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let r = nn.length; r--; ) {
      if (nn[r].canRoute(n)) {
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

  return au(e);
}
function au(e) {
  let t = false;
  for (let n = 0; n < nn.length; n++) {
    if (nn[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function h_(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return je(t);
    }
  }
}
function m_(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function g_(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (h_(e_target)) {
          return m_(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function cu(e) {
  if (e.history) {
    (Ve = e.history);
  }

  (this.state = { url: e.url || Hs() });
}
yr((cu.prototype = new Xe()), {
  shouldComponentUpdate(e) {
    return (e.static !== true ||
    e.url !== this.props.url || e.onChange !== this.props.onChange);
  },
  canRoute(e) {
    const t = Je(this.props.children);
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

    if (!La) {
      (La = true);

      Ve ||
        addEventListener("popstate", () => {
          au(Hs());
        });

      addEventListener("click", g_);
    }

    nn.push(this);

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

    nn.splice(nn.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(d_).sort(u_);

    for (const r of e) {
      const o = su(t, r.props.path, r.props);
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
    const c = this.g(Je(e.children), t_url);

    if (c) {
      (r = xc(
            c[0],
            yr(yr({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      yr(
        Bs,
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
      for (let l = Yn.length; l--; ) {
        Yn[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return tt(iu.Provider, { value: a }, r);
  },
});

const $a = (e) => {
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

const __ = e => e ? $a(e) : $a;

const y_ = e => e;

function v_(e, t = y_) {
  const n = Wn.useSyncExternalStore(
    e.subscribe,
    Wn.useCallback(() => t(e.getState()), [e, t]),
    Wn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Wn.useDebugValue(n);
  return n;
}

const xa = (e) => {
  const t = __(e);

  const n = r => v_(t, r);

  Object.assign(n, t);
  return n;
};

const rt = e => e ? xa(e) : xa;

function Vs(e, t) {
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

const us = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return us(r)(n);
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
          return us(r)(n);
        },
      };
    }
  };

const lu = (e, t) => (n, r, o) => {
  let s = {
      storage: Vs(() => window.localStorage),
      partialize: y => y,
      version: 0,
      merge: (y, g) => ({
        ...g,
        ...y
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
      (...y) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        );

        n(...y);
      },
      r,
      o
    );
  }

  const f = () => {
      const y = s.partialize({ ...r() });
      return s_storage.setItem(s.name, { state: y, version: s.version });
    };

  const o_setState = o.setState;
  o.setState = (y, g) => {
    o_setState(y, g);
    return f();
  };
  const h = e((...y) => {
    n(...y);
    return f();
  }, r, o);
  o.getInitialState = () => h;
  let m;
  const _ = () => {
    let g;
    if (!s_storage) {
      return;
    }
    const E = ++c;
    (a = false);

    l.forEach((I) => {
      let w;
      return I((w = r()) != null ? w : h);
    });

    const S =
      ((g = s.onRehydrateStorage) == null
        ? undefined
        : g.call(s, (y = r()) != null ? y : h)) || undefined;
    return us(s_storage.getItem.bind(s_storage))(s.name)
      .then((I) => {
        if (I) {
          if (typeof I.version == "number" && I.version !== s.version) {
            if (s.migrate) {
              const w = s.migrate(I.state, I.version);
              return w instanceof Promise ? w.then(b => [true, b]) : [true, w];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, I.state];
          }
        }
        return [false, undefined];
      })
      .then((I) => {
      let w;
      if (E !== c) {
        return;
      }
      const [b, R] = I;
      (m = s.merge(R, (w = r()) != null ? w : h));
      n(m, true);

      if (b) {
        return f();
      }
    })
      .then(() => {
      if (E === c) {
        S?.(r(), undefined);
        (m = r());
        (a = true);
        u.forEach(I => I(m));
      }
    })
      .catch((I) => {
      if (E === c) {
        S?.(undefined, I);
      }
    });
  };

  (o.persist = {
    setOptions: (y) => {
      (s = { ...s, ...y });

      if (y.storage) {
        (s_storage = y.storage);
      }
    },
    clearStorage: () => {
      ++c;
      s_storage?.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => _(),
    hasHydrated: () => a,
    onHydrate: y => {
      l.add(y);

      return () => {
        l.delete(y);
      };
    },
    onFinishHydration: y => {
      u.add(y);

      return () => {
        u.delete(y);
      };
    },
  });

  if (!s.skipHydration) {
    _();
  }

  return m || h;
};

const uu = rt((e, t) => ({
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

const w_ = rt((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const S_ = rt((e, t) => ({
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

function Ne(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}

const D = {
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

const b_ = 4000/* 4e3 */;

const qr = rt((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const o = n.duration ?? b_;

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

const vt = {
  success: (e, t) => qr.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => qr.getState().addToast({ type: "error", message: e, duration: t }),
};

const C_ = {
  [D.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [D.FILE_TOO_LARGE]: "Файл слишком большой",
  [D.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [D.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [D.VIDEO_REQUIRES_VERIFICATION]:
    "Видео — только для верифицированных пользователей",
  [D.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [D.UNAUTHORIZED]: "Требуется авторизация",
  [D.ACCESS_DENIED]: "Доступ запрещён",
  [D.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [D.TIMEOUT]: "Превышено время ожидания",
  [D.VALIDATION_ERROR]: "Проверьте правильность введённых данных",
  [D.ENTITY_NOT_FOUND]: "Запрошенные данные не найдены",
  [D.ENTITY_ALREADY_EXISTS]: "Такая запись уже существует",
  [D.CAPTCHA_FAILED]: "Проверка captcha не пройдена. Попробуйте снова",
  [D.OTP_INVALID]: "Неверный код. Попробуйте снова",
  [D.ACCOUNT_DEACTIVATED]: "Аккаунт деактивирован",
  [D.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED]:
    "Почта этого домена не поддерживается",
  [D.ACCOUNT_INVALID_CREDENTIALS]: "Неверный email или пароль",
  [D.ACCOUNT_TEMPORARILY_LOCKED]:
    "Аккаунт временно заблокирован. Попробуйте позже",
  [D.ACCOUNT_CURRENT_PASSWORD_INCORRECT]: "Неверный текущий пароль",
  [D.MISSING_FLOW_TOKEN]: "Сессия истекла. Начните заново",
  [D.PROFILE_USERNAME_TAKEN]: "Этот username уже занят",
  [D.PROFILE_USERNAME_RESERVED]: "Этот username зарезервирован системой",
};

const I_ = {
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

const T_ = [
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

const N_ = {
  INVALID_EMAIL: D.VALIDATION_ERROR,
  INVALID_PASSWORD: D.VALIDATION_ERROR,
  EMAIL_DOMAIN_NOT_ALLOWED: D.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED,
  CONFLICT: D.ENTITY_ALREADY_EXISTS,
  INVALID_CREDENTIALS: D.ACCOUNT_INVALID_CREDENTIALS,
  USER_INACTIVE: D.ACCOUNT_DEACTIVATED,
  INTEGRITY_CHECK_FAILED: D.CAPTCHA_FAILED,
  TURNSTILE_TOKEN_MISSING: D.CAPTCHA_FAILED,
  TURNSTILE_API_ERROR: D.CAPTCHA_FAILED,
  TURNSTILE_ERROR: D.CAPTCHA_FAILED,
  TURNSTILE_VERIFICATION_FAILED: D.CAPTCHA_FAILED,
  INVALID_FLOW_TOKEN: D.MISSING_FLOW_TOKEN,
  NO_PENDING_OTP: D.MISSING_FLOW_TOKEN,
  INVALID_OTP_FORMAT: D.OTP_INVALID,
  ACCOUNT_NOT_FOUND: D.ENTITY_NOT_FOUND,
  CURRENT_PASSWORD_INCORRECT: D.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  INVALID_OLD_PASSWORD: D.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  USERNAME_TAKEN: D.PROFILE_USERNAME_TAKEN,
  USERNAME_RESERVED: D.PROFILE_USERNAME_RESERVED,
  PROFILE_NOT_FOUND: D.ENTITY_NOT_FOUND,
  USER_NOT_FOUND: D.ENTITY_NOT_FOUND,
  FILE_NOT_FOUND: D.ENTITY_NOT_FOUND,
  NOT_FOUND: D.ENTITY_NOT_FOUND,
  FORBIDDEN: D.ACCESS_DENIED,
  TOO_MANY_REQUESTS: D.RATE_LIMIT_EXCEEDED,
};

function du(e) {
  return N_[e] ?? e;
}
function R_(e) {
  const I_e = I_[e];
  if (I_e) {
    return I_e;
  }
  for (const { pattern, translate } of T_) {
    const o = e.match(pattern);
    if (o) {
      return translate(o);
    }
  }
  return e;
}
function Ws(e, t = "Произошла ошибка") {
  const n = R_(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : C_[du(e)] ?? n;
}
const fu = "/api";

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
    captchaProvider: "/captcha/provider",
    qrStart: "/qr/start",
    qrStream: "/qr/stream",
    qrClaim: "/qr/claim",
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

let er = null;
const ds = new Set();
function Gr() {
  return er;
}
function k_(e) {
  if (er !== e) {
    er = e;
    for (const t of ds) {
      t(e);
    }
  }
}
function qN(e) {
  ds.add(e);

  return () => {
    ds.delete(e);
  };
}
function Ma() {
  return er ? { Authorization: `Bearer ${er}` } : {};
}
let fs = null;
function A_(e) {
  fs = e;
}
async function O_(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function ps() {
  return fs
    ? $n ||
        (($n = O_(fs).finally(() => {
          $n = null;
        })),
        $n)
    : null;
}
async function P_(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = Gr();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const r = await n();
  return r.status !== 401 || !(await ps()) ? r : n();
}
function L_() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const Da = L_();
class pu {
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
        vt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      vt.error(Ws(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${n}${r}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ...Ma() });
    n.set("X-Device-Id", Da);
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
          return D.BAD_REQUEST;
        }
      case Be.UNAUTHORIZED:
        {
          return D.UNAUTHORIZED;
        }
      case Be.FORBIDDEN:
        {
          return D.ACCESS_DENIED;
        }
      case Be.NOT_FOUND:
        {
          return D.ENTITY_NOT_FOUND;
        }
      case Be.CONFLICT:
        {
          return D.ENTITY_ALREADY_EXISTS;
        }
      case Be.UNPROCESSABLE_ENTITY:
        {
          return D.VALIDATION_ERROR;
        }
      case Be.TOO_MANY_REQUESTS:
        {
          return D.RATE_LIMIT_EXCEEDED;
        }
      default:
        {
          return D.UNKNOWN_ERROR;
        }
    }
  }
  createApiError(t, n, r, o) {
    const s = new Error(n);
    (s.status = t);
    (s.code = du(r));
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

      const { headers, skipErrorToast, ..._ } = o ?? {};

      const y = await fetch(a, {
        method: t,
        body: p,
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
      if (y.status === Be.UNAUTHORIZED && !s && !g && Gr()) {
        if (await ps()) {
          return this.executeRequest(t, n, r, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Be.UNAUTHORIZED,
          "Session expired",
          D.UNAUTHORIZED
        );
      }
      return await this.handleResponse(y);
    } catch (f) {
      clearTimeout(d);

      if (f instanceof Error) {
        const p = m => !s && !this.isToastSkipped(o?.skipErrorToast, m.status);
        if (f.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", D.TIMEOUT);

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
          D.NETWORK_ERROR
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
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": Da, ...Ma() };
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

      if (d.status === Be.UNAUTHORIZED && !o && Gr()) {
        if (await ps()) {
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Be.UNAUTHORIZED,
          "Session expired",
          D.UNAUTHORIZED
        );
      }

      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(u);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const p = this.createApiError(0, "Request timeout", D.TIMEOUT);

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
          D.NETWORK_ERROR
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
const M = new pu({ baseURL: fu, timeout: 30000/* 3e4 */ });
const ot = new pu({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const js = rt((e, t) => ({
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

const hu = () => js(e => e.portal);

const tr = new Set();
let Xn = null;
const $_ = 30000/* 3e4 */;
function x_() {
  if (Xn === null) {
    (Xn = window.setInterval(() => {
        tr.forEach(e => e());
      }, $_));
  }
}
function M_() {
  if (Xn !== null) {
    clearInterval(Xn);
    (Xn = null);
  }
}
function D_(e) {
  tr.add(e);

  if (tr.size === 1) {
    x_();
  }
}
function U_(e) {
  tr.delete(e);

  if (tr.size === 0) {
    M_();
  }
}
function To(e) {
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
function mu(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [o, s] = L(() => n ? To(new Date(r)) : "");

  F(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(r);
    s(To(a));
    const c = () => {
      s(To(a));
    };
    D_(c);

    return () => U_(c);
  }, [r, n]);

  return o;
}
const Ua = 1174;
function Ct() {
  const [e, t] = L(() => typeof window === "undefined" ? false : window.innerWidth < Ua);

  F(() => {
    const n = window.matchMedia(`(max-width: ${Ua - 1}px)`);

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
const F_ = Cn({ isHidden: false });

const B_ = () => {
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

function lo(e = "", t = []) {
  const [n, r] = L(e);
  const [o, s] = L(t);
  const a = O(null);

  const c = N((d, f) => {
    r(d);
    s(f);
  }, []);

  const l = N((d) => {
    a.current?.insertText(d);
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
function H_({
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
function V_({
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

  const f = O(s ?? new Map());
  const p = O(null);
  const h = O(null);
  const m = O(new Map());
  const _ = O(o);
  _.current = o;

  const y = R => f.current.get(o(R)) ?? t;

  const g = (R) => {
    let k = 0;
    for (let C = 0; C < R; C++) {
      k += y(C) + r;
    }
    return k;
  };

  const E = () => {
    if (e === 0) {
      return 0;
    }
    let R = 0;
    for (let k = 0; k < e; k++) {
      R += y(k);
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
    let v = 0;
    for (let P = 0; P < e; P++) {
      const V = y(P) + r;
      if (v + V > R) {
        C = P;
        break;
      }
      v += V;
    }
    let A = C;
    let T = 0;
    for (let P = C; P < e && ((T += y(P) + r), (A = P), !(T >= k)); P++)
      {}
    return { start: Math.max(0, C - n), end: Math.min(e - 1, A + n) };
  };

  const I = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = S();
    const C = [];
    for (let v = start; v <= end; v++) {
      C.push({ index: v, key: o(v), start: g(v) });
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
        const T = C.borderBoxSize && C.borderBoxSize[0];
        const P = T ? T.blockSize : C_target.getBoundingClientRect().height;

        if (P > 0 && f.current.get(A) !== P) {
          f.current.set(A, P);
          (k = true);
        }
      }

      if (k) {
        l(C => C + 1);
      }
    }));
  }

  const w = N((R, k) => {
    if (!R) {
      return;
    }
    const C = _.current(k);
    m.current.set(R, C);
    h.current?.observe(R, { box: "border-box" });
    const v = R.getBoundingClientRect().height;

    if (v > 0 && f.current.get(C) !== v) {
      f.current.set(C, v);
      l(A => A + 1);
    }
  }, []);

  Bt(() => {
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

  F(
    () => () => {
      h.current?.disconnect();
      m.current.clear();
    },
    []
  );

  const b = N(() => new Map(f.current), []);
  return {
    virtualItems: I(),
    totalSize: E(),
    measureElement: w,
    getMeasuredHeights: b,
  };
}
const W_ = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const Fa = "itd:icons:checkedAt";
const j_ = 1800 * 1000/* 1e3 */;
const Yr = new Map();
const No = new Map();
const Mr = new Map();

const z_ = e => `${W_}/${e}.svg`;

const q_ = (() => {
  try {
    const e = Number(localStorage.getItem(Fa) ?? 0);
    return Date.now() - e < j_
      ? false
      : (localStorage.setItem(Fa, String(Date.now())), true);
  } catch {
    return false;
  }
})();

const G_ = e => /^\s*<svg[\s>]/i.test(e) &&
!/<script|<foreignObject|\son[a-z]+\s*=/i.test(e);

const Y_ = { liked: "--accent-liked" };
const X_ = /fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/;

const K_ = (e, t) => {
  const Y_e = Y_[e];
  if (!Y_e || typeof document === "undefined") {
    return;
  }
  const r = X_.exec(t)?.[1];

  if (r) {
    document.documentElement.style.setProperty(Y_e, r);
  }
};

const Z_ = (e, t) => {
  Yr.set(e, t);
  K_(e, t);

  Mr.get(e)?.forEach(n => n(t));
};

const Q_ = (e, t = false) => {
  if (!t) {
    const o = Yr.get(e);
    if (o) {
      return Promise.resolve(o);
    }
    const s = No.get(e);
    if (s) {
      return s;
    }
  }
  const n = t ? "reload" : q_ ? "no-cache" : "force-cache";

  const r = fetch(z_(e), { cache: n })
    .then(async (o) => {
      if (!o.ok) {
        return null;
      }
      const s = await o.text();
      return G_(s) ? (Z_(e, s), s) : null;
    })
    .catch(() => null)
    .finally(() => No.delete(e));

  No.set(e, r);
  return r;
};

const J_ = (e, t) => e.replace(/<svg\b([^>]*)>/i, (n, r) => {
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

const zs = ({ name: e, size: t = 20, className: n }) => {
  const [r, o] = L(() => Yr.get(e) ?? null);
  F(() => {
    o(Yr.get(e) ?? null);
    const a = Mr.get(e) ?? new Set();
    a.add(o);
    Mr.set(e, a);
    Q_(e);

    return () => {
      a.delete(o);

      if (a.size === 0) {
        Mr.delete(e);
      }
    };
  }, [e]);
  const s = typeof t == "number" ? `${t}px` : t;
  return i("span", {
    "data-icon": e,
    "aria-hidden": "true",
    className: n,
    style: { display: "block", width: s, height: s, lineHeight: 0 },
    dangerouslySetInnerHTML: r ? { __html: J_(r, t) } : undefined,
  });
};

const ey = ({ size: e = 18 }) => i("svg", {
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

const ty = ({ size: e = 18 }) => i("svg", {
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

const ny = ({ size: e = 18 }) => i("svg", {
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

const gu = ({ size: e = 18 }) => i("svg", {
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

const ry = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const oy = ({ size: e = 18 }) => i("svg", {
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

const sy = ({ size: e = 18 }) => i("svg", {
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

const iy = ({ size: e = 18 }) => i("svg", {
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

const ay = ({ size: e = 18 }) => i("svg", {
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

const cy = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const ly = ({ size: e = 24 }) => i("svg", {
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

const _u = ({ size: e = 20 }) => i("svg", {
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

const uy = ({ size: e = 8 }) => i("svg", {
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

const dy = ({ size: e = 8 }) => i("svg", {
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

const fy = () => i("svg", {
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

const dt = ({ size: e = 24 }) => i("svg", {
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

const yu = ({ size: e = 20 }) => i(zs, { name: "comment", size: e });

const vu = ({ size: e = 18 }) => i("svg", {
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

const py = ({ size: e = 24 }) => i("svg", {
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

const Eu = () => i("svg", {
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

const wu = ({ size: e = 18 }) => i("svg", {
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

const Su = ({ size: e = 24 }) => i("svg", {
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

const qs = ({ filled: e = false, size: t = 20, className: n }) => i(zs, { name: e ? "liked" : "like", size: t, className: n });

const Gs = ({ size: e = 24 }) => i("svg", {
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

const hy = ({ size: e = 24 }) => i("svg", {
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

const bu = ({ size: e = 18 }) => i("svg", {
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

const Cu = ({ size: e = 24 }) => i("svg", {
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

const my = ({ size: e = 24 }) => i("svg", {
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

const hs = ({ size: e = 24 }) => i("svg", {
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

const Ba = ({ size: e = 18 }) => i("svg", {
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

const Ys = ({ size: e = 24 }) => i("svg", {
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

const gy = ({ size: e = 20 }) => i("svg", {
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

const Xs = ({ size: e = 20 }) => i(zs, { name: "share", size: e });

const Iu = ({ size: e = 24 }) => i("svg", {
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

const Tu = ({ size: e = 24 }) => i("svg", {
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

const _y = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const yy = ({ size: e = 24 }) => i("svg", {
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

const vy = ({ size: e = 48 }) => i("svg", {
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

const Nu = ({ size: e = 18 }) => i("svg", {
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

const Ey = ({ size: e = 16 }) => i("svg", {
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

const wy = ({ size: e = 20 }) => i("svg", {
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

function Sy(e) {
  const t = dr()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: su(t.path || t.url, e.path, {}) !== false,
  });
}
const by = "UsuX";
const Cy = "LUSw";
const Iy = "urCH";
const Ty = "eWP3";
const Ny = "c3Tj";
const Ry = "KHio";
const ky = "G3A4";
const Ay = "ZnnM";
const Oy = "EWBZ";
const Py = "onxH";
const Ly = "Zstb";
const $y = "zhAj";
const xy = "ixmc";

const Pe = {
  aside: by,
  asideBottom: Cy,
  logoutButton: Iy,
  asideBrand: Ty,
  asideBrandVersion: Ny,
  nav: Ry,
  navItem: ky,
  active: Ay,
  iconWrapper: Oy,
  portalButton: Py,
  portalActive: Ly,
  portalImage: $y,
  badge: xy,
};

const ce = {
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

const Ha = [
  ce.SHOP,
  ce.LOGIN,
  ce.REGISTER,
  ce.FORGOT_PASSWORD,
  ce.RESET_PASSWORD,
  ce.VERIFY_EMAIL,
  ce.TERMS,
  ce.PRIVACY,
  ce.COOKIES,
  ce.EXTERNAL,
  ce.SUPPORT,
  ce.CHILD_SAFETY,
  ce.SUBSCRIPTION_TERMS,
];

const Ks = [
  ce.LOGIN,
  ce.REGISTER,
  ce.FORGOT_PASSWORD,
  ce.RESET_PASSWORD,
  ce.VERIFY_EMAIL,
  ce.ONBOARDING,
];

const My = {
  like: "post_reaction",
  comment_like: "comment_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  wall_post: "wall_post",
};

function Ru(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: My[e.type] ?? "follow",
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

const xn = {
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
      return { notifications: c.map(Ru), nextCursor: l };
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

const Va = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const Dy = 0.3;
const Uy = 15;
function Fy(e) {
  const t = Va[Math.min(e, Va.length - 1)];
  const n = t * Dy * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let Tt = null;
let vr = null;
let Mn = 0;
let jt = null;
function By(e) {
  const { url, onMessage, onStatusChange } = e;
  function o() {
    if (Tt) {
      return;
    }
    if (!Gr()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    (Tt = new AbortController());

    (async () => {
      try {
        const c = await P_(url, {
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
        (Mn = 0);
        onStatusChange("connected");

        if (jt) {
          jt.cancel().catch(() => {});
          (jt = null);
        }

        const l = c.body.getReader();
        jt = l;
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
          let _ = "";
          for (const y of h) {
            if (y.startsWith("event: ")) {
              m = y.slice(7);
            } else if (y.startsWith("data: ")) {
              _ = y.slice(6);
            } else if (y === "" && _) {
              try {
                const g = JSON.parse(_);
                const E = m || g.type;
                onMessage(E, g);
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

        if (Mn >= Uy) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          (Tt = null);
          return;
        }

        const l = Fy(Mn);
        Mn++;

        (vr = setTimeout(() => {
          (Tt = null);
          o();
        }, l));
      }
    })();
  }
  function s() {
    if (vr) {
      clearTimeout(vr);
      (vr = null);
    }

    if (jt) {
      jt.cancel().catch(() => {});
      (jt = null);
    }

    if (Tt) {
      Tt.abort();
      (Tt = null);
    }

    (Mn = 0);
    onStatusChange("disconnected");
  }
  return { connect: o, disconnect: s };
}

const Wa = {
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

const Er = By({
  url: `${fu}${x.notifications.stream}`,
  onMessage: (e, t) => {
    if (e === "notification") {
      const n = Ru(t);
      const r = n.payload.actors[0];

      const o = {
        id: n.id,
        type: n.type,
        actorName: r?.displayName || "Пользователь",
        actorUsername: r?.username || "",
        actorAvatar: r?.avatar || "",
        count: n.payload.count,
        message: Vy(
          n.type,
          r?.displayName || "Пользователь",
          n.payload.count
        ),
        entityId: n.entityId,
        parentEntityId: n.parentEntityId,
      };

      an.setState(s => ({
        notifications: [n, ...s.notifications],
        unreadCount: s.unreadCount + 1,
        lastSseToast: o
      }));

      if (t.sound) {
        Wy();
      }
    }
  },
  onStatusChange: (e) => {
    an.setState({
      sseStatus: e,
      error: e === "error" ? "SSE connection error" : null,
    });
  },
});

const an = rt()((e, t) => ({
  ...Wa,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      Er.connect();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status, nextCursor, notifications } = t();
    if (status !== "loading" && !(!n && nextCursor === null && notifications.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const a = n ? undefined : nextCursor ?? undefined;
        const c = await xn.getNotifications({ cursor: a, limit: 20 });
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
      const n = await xn.getUnreadCount();
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
      await xn.markAllAsRead();
    } catch {}
  },

  connectSSE: () => Er.connect(),
  disconnectSSE: () => Er.disconnect(),

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await xn.getSettings();
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
      await xn.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    Er.disconnect();
    e(Wa);
  }
}));

const Hy = {
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

function Vy(e, t, n) {
  const Hy_e = Hy[e];
  return Hy_e ? Hy_e(t, n) : "Новое уведомление";
}
function Wy() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const ku = () => an(e => e.unreadCount);

const jy = () => an(e => e.lastSseToast);

const zy = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const qy = ["video/mp4", "video/webm", "video/quicktime"];
const ms = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const Gy = ".mp4,.webm,.mov";

const _n = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await M.uploadFormData(x.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await M.delete(x.files.delete(e));
  },
  isValidImageType(e) {
    return zy.includes(e.type);
  },
  isValidVideoType(e) {
    return qy.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const Yy = {
  async getChangelog() {
    const e = await M.get(x.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await M.get(x.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class Zs {
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
function ja(e) {
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
const Lt = new Zs(100, 300 * 1000/* 1e3 */);
const Xy = 60 * 1000/* 1e3 */;
setInterval(() => Lt.cleanup(), 120 * 1000/* 1e3 */);
const wr = {
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
    return ja(e);
  },
  async updateProfile(e) {
    return await M.put(x.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = Lt.get(t);

    if (n && Lt.isFresh(t, Xy)) {
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
    return Lt.get(e.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await M.get(x.users.profile(e), {
        skipErrorToast: [Be.NOT_FOUND],
      });

    const r = ja(n);
    Lt.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    Lt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const r = Lt.get(n);

    if (r) {
      Lt.set(n, { ...r, ...t });
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
function za(e) {
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
const Et = rt(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(r => ({
    statuses: { ...r.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let gs = new Set();
function Ky() {
  if (!Ro) {
    (null = setTimeout(async () => {
      Ro = null;
      const e = Array.from(gs);
      gs.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await _s.batchFollowStatus(n);
            Et.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50));
  }
}
function Zy(e) {
  const t = Ee(s => s.profile?.id);

  const n = Et(s => s.statuses);

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
        gs.add(c);
      }
      Ky();
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
const Yt = new Zs(500, 120 * 1000/* 1e3 */);
setInterval(() => Yt.cleanup(), 60 * 1000/* 1e3 */);
const _s = {
  async followUser(e) {
    const t = await M.post(x.users.follow(e), {});
    Yt.delete(e);
    Et.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await M.delete(x.users.follow(e));
    Yt.delete(e);
    Et.getState().setStatus(e, false);
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
    const f = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(za), nextCursor: f };
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
    const f = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(za), nextCursor: f };
  },
  async blockUser(e) {
    await M.post(x.users.block(e), {});
    Yt.delete(e);
  },
  async unblockUser(e) {
    await M.delete(x.users.block(e));
    Yt.delete(e);
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

    const d = c.pagination?.hasMore ?? false;
    const f = d ? String(r + 1) : null;
    return { users: u, nextCursor: f, hasMore: d };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await M.post(x.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    Yt.delete(e);
  },
  clearSocialCache() {
    Yt.clear();
  },
};
function Qy(e) {
  const t = Et(o => o.statuses[e]);

  const n = N(async () => {
    Et.getState().setStatus(e, true);
    try {
      await _s.followUser(e);
    } catch {
      Et.getState().setStatus(e, false);
    }
  }, [e]);

  const r = N(async () => {
    Et.getState().setStatus(e, false);
    try {
      await _s.unfollowUser(e);
    } catch {
      Et.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: r };
}
const Jy = "xc5P";
const ev = "WaEQ";
const tv = "JFW6";
const nv = "j42j";
const rv = "uXIY";
const ov = "OAm0";
const sv = "Js43";
const iv = "b3wa";
const av = "egNz";
const cv = "O6tL";
const lv = "wQOP";
const uv = "IY5s";
const dv = "hvCp";
const fv = "arxs";

const Me = {
  overlay: Jy,
  modalWrapper: ev,
  wide: tv,
  modal: nv,
  frameless: rv,
  header: ov,
  title: sv,
  closeButton: iv,
  externalCloseButton: av,
  mobileOverlay: cv,
  closing: lv,
  bottomSheet: uv,
  dragHandle: dv,
  dragIndicator: fv,
};

const pv = Cn(null);
const hv = 100;
const mv = 0.5;
function un({
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
  const h = Ct();
  const m = O(0);
  const _ = O(false);
  const [y, g] = L(false);
  const E = O(0);
  const S = O(0);
  const I = O(0);
  F(() => {
    const q = (oe) => {
        if (oe.key === "Escape") {
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

  const w = (q) => {
      p.current = q.target;
    };

  const b = (q) => {
    if (p.current === d.current && q.target === d.current) {
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
      T(0);
      (m.current = 0);
      return;
    }
    g(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, u]);

  const k = O(false);
  const C = O(false);

  const v = (q) => {
    let te = q;

    while (te && te !== f.current) {
      const W = window.getComputedStyle(te).overflowY;
      if ((W === "auto" || W === "scroll") &&
      te.scrollHeight > te.clientHeight) {
        return te;
      }
      te = te.parentElement;
    }

    return null;
  };

  const A = (q, te) => {
    if (f.current) {
      (f.current.style.transform = q > 0 ? `translateY(${q}px)` : "");
      (f.current.style.transition = te || "");
    }
  };

  const T = (q) => {
    if (d.current && q > 0) {
      (d.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - q / 500
          )})`);
    } else if (d.current) {
      (d.current.style.backgroundColor = "");
    }
  };

  const P = (q) => {
    if (!h) {
      return;
    }
    (E.current = q.touches[0].clientY);
    (S.current = Date.now());
    (I.current = q.touches[0].clientY);
    const q_target = q.target;
    if (q_target.closest(`.${Me.dragHandle}`)) {
      (k.current = true);
      (C.current = true);
      (_.current = true);

      if (f.current) {
        (f.current.style.transition = "none");
      }

      return;
    }
    (k.current = false);

    if (q_target.closest(
      'button, a, input, textarea, select, video, [role="button"]'
    )) {
      C.current = false;
      return;
    }

    if (q_target.tagName === "CANVAS" || q_target.closest("canvas")) {
      C.current = false;
      return;
    }
    const ge = v(q_target);
    C.current = !ge || ge.scrollTop === 0;
  };

  const V = (q) => {
    if (!h) {
      return;
    }
    const te = q.touches[0].clientY;
    const oe = te - E.current;
    (I.current = te);

    if (k.current) {
      if (oe > 0) {
        (m.current = oe);
        A(oe);
        T(oe);
        q.preventDefault();
      }

      return;
    }

    if (C.current) {
      if (_.current && m.current > 0) {
        if (oe > 0) {
          (m.current = oe);
          A(oe);
          T(oe);
          q.preventDefault();
        } else {
          (m.current = 0);
          (_.current = false);
          A(0);
          T(0);
        }

        return;
      }

      if (oe > 0) {
        _.current ||
            ((_.current = true),
            f.current && (f.current.style.transition = "none"));

        (m.current = oe);
        A(oe);
        T(oe);
        q.preventDefault();
      }
    }
  };

  const ae = () => {
    if (!h) {
      return;
    }
    const q = I.current - E.current;
    const te = Date.now() - S.current;
    const oe = q / te;

    if (_.current && (q > hv || oe > mv)) {
      R();
    } else if (m.current > 0) {
      A(0, "transform 0.2s ease-out");
      T(0);
      (m.current = 0);
    }

    (_.current = false);
    (k.current = false);
    (C.current = false);
  };

  const he = (() => {
    if (h && y) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const ie = { onClose: t, isMobile: h, isClosing: y, handleClose: R };
  return i(pv.Provider, {
    value: ie,
    children: i("div", {
      ref: d,
      className: `${Me.overlay} ${h ? Me.mobileOverlay : ""} ${
        y ? Me.closing : ""
      }`,
      onMouseDown: w,
      onMouseUp: b,
      children: i("div", {
        ref: f,
        className: `${Me.modalWrapper} ${l === "wide" ? Me.wide : ""} ${
          h ? Me.bottomSheet : ""
        }`,
        style: he,
        onTouchStart: P,
        onTouchMove: V,
        onTouchEnd: ae,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: Me.externalCloseButton,
              onClick: (q) => {
                q.stopPropagation();
                t();
              },
              children: i(dt, { size: 24 }),
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
                        onClick: (q) => {
                          q.stopPropagation();
                          t();
                        },
                        children: i(dt, { size: 16 }),
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
const gv = "pQ72";
const _v = "GNvg";
const yv = "WUUY";
const vv = "Of6d";
const Ev = "ogZA";
const wv = "O9Nx";
const qa = { spinner: gv, spin: _v, xs: yv, sm: vv, md: Ev, lg: wv };
function Au({ size: e = "md", className: t }) {
  const n = [qa.spinner, qa[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(Gs, {}) });
}
const Sv = "uyVd";
const bv = "rqvB";
const Cv = "WF6t";
const Iv = "IV5j";
const Tv = "dL9O";
const Nv = "dzIE";
const Rv = "rSyX";
const kv = "RAUh";
const Av = "DZJi";
const Ov = "Nt0R";
const Pv = "J14u";
const Lv = "F3Ud";

const hn = {
  button: Sv,
  primary: bv,
  secondary: Cv,
  ghost: Iv,
  accent: Tv,
  danger: Nv,
  sm: Rv,
  md: kv,
  lg: Av,
  fullWidth: Ov,
  iconOnly: Pv,
  loading: Lv,
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
  const d = [
    hn.button,
    hn[t],
    hn[n],
    r && hn.fullWidth,
    o && hn.iconOnly,
    s && hn.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return i("button", {
    type: c,
    className: d,
    disabled: l || s,
    ...u,
    children: s ? i(Au, { size: "sm" }) : e,
  });
}
const $v = "t76D";
const xv = "uEUh";
const Mv = "z3mC";
const Dv = "HMyv";
const Sr = { content: $v, title: xv, subtitle: Mv, actions: Dv };
function Uv({ displayName: e, onConfirm: t, onClose: n }) {
  return i(un, {
    onClose: n,
    showHeader: false,
    children: i("div", {
      className: Sr.content,
      children: [
        i("h2", { className: Sr.title, children: "Отписаться?" }),
        i("p", {
          className: Sr.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            i("strong", { children: e }),
            "?",
          ],
        }),
        i("div", {
          className: Sr.actions,
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
const Ou = Cn(null);
let Fv = 0;
function Bv({ children: e }) {
  const [t, n] = L([]);

  const r = N((a) => {
    const c = `modal-${++Fv}`;

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

  return i(Ou.Provider, {
    value: { openModal: r, closeModal: o, closeAllModals: s },
    children: [e, t.length > 0 && i(Hv, { modals: t })],
  });
}
function Hv({ modals: e }) {
  return $(
    i(Re, {
      children: e.map(({ id: t, component: n }) => i(Ie, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function dn() {
  const e = ao(Ou);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const Vv = "EXO8";
const Wv = "PTr6";
const jv = "iLdb";
const zv = "UVih";
const qv = "DvnO";
const Gv = "w0j6";
const Yv = "tVQU";
const Xv = "Kyj2";
const Kv = "jqSs";
const Zv = "y1nN";
const Qv = "KbMB";
const Jv = "cHUB";

const Nt = {
  avatar: Vv,
  xs: Wv,
  emoji: jv,
  onlineDot: zv,
  sm: qv,
  md: Gv,
  lg: Yv,
  xl: Xv,
  badge: Kv,
  followBadge: Zv,
  notFollowing: Qv,
  following: Jv,
};

function e0(e) {
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
  const l = e ? e0(e) : false;
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
            children: s ? i(dy, { size: 8 }) : i(uy, { size: 8 }),
          })
        : o && i("span", { className: Nt.onlineDot }),
    ],
  });
}
const t0 = "M1Ss";
const n0 = "MU3E";
const r0 = "xkyp";
const o0 = "gpK9";
const s0 = "hW9e";
const i0 = "cuyV";
const a0 = "XVi3";
const c0 = "ycuo";
const l0 = "glOl";
const u0 = "qdtc";
const d0 = "T2sE";
const f0 = "c8RA";
const p0 = "zDLu";
const h0 = "HgU2";
const m0 = "GtbF";

const Fe = {
  userName: t0,
  pinBadge: n0,
  text: r0,
  nukstaGlow: o0,
  xs: s0,
  sm: i0,
  md: a0,
  lg: c0,
  pinWrapper: l0,
  pinClickable: u0,
  pinTooltip: d0,
  pinTooltipFadeIn: f0,
  pinTooltipRow: p0,
  pinTooltipLabel: h0,
  pinTooltipArrow: m0,
};

const g0 = ne(() => Z(
  () => import("./index-lzNvgGHU.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const _0 = { xs: 12, sm: 14, md: 16, lg: 22 };
const y0 = "subscription_nuksta";
function fr({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: o = "md",
  className: s,
}) {
  const _0_o = _0[o];
  const c = O(null);
  const [l, u] = L(null);
  const [d, f] = L(false);
  const p = r?.slug === y0;

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

  return i("span", {
    className: `${Fe.userName} ${Fe[o]} ${s || ""}`,
    children: [
      n
        ? i("span", {
            className: Fe.nukstaGlow,
            children: i("span", { className: Fe.text, children: e }),
          })
        : i("span", { className: Fe.text, children: e }),
      t && i(Ey, {}),
      r &&
        i("span", {
          ref: c,
          className: `${Fe.pinWrapper} ${p ? Fe.pinClickable : ""}`,
          onMouseEnter: h,
          onMouseLeave: m,
          onClick: p
            ? (_) => {
            _.stopPropagation();
            _.preventDefault();
            f(true);
          }
            : undefined,
          children: [
            i("img", {
              src: r.url,
              alt: r.name,
              className: Fe.pinBadge,
              width: _0_o,
              height: _0_o,
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
      d &&
        i(Ie, {
          fallback: null,
          children: i(g0, { isOpen: true, onClose: () => f(false) }),
        }),
    ],
  });
}
function v0(e) {
  return "accessToken" in e;
}
function E0(e) {
  return "accessToken" in e;
}
const zt = { skipErrorToast: true };

const Rt = {
  async register(e) {
    return await ot.post(x.auth.signUp, e, zt);
  },
  async login(e) {
    return await ot.post(x.auth.signIn, e, zt);
  },
  async verifyOtp(e) {
    return await ot.post(x.auth.verifyOtp, e, zt);
  },
  async resendOtp(e) {
    await ot.post(x.auth.resendOtp, e, zt);
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
    return await ot.post(x.auth.forgotPassword, e, zt);
  },
  async resetPassword(e) {
    await ot.post(x.auth.resetPassword, e, zt);
  },
  async changePassword(e) {
    await ot.post(x.auth.changePassword, e, zt);
  },
};

function kt(e, t) {
  if (!e) {
    Hi(null);
    return;
  }
  Hi({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
}

const br = {
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
  lu(
    (e, t) => {
      const n = k_;

      A_(async () => {
        try {
          const s = await Rt.refreshSession();
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
        ...br,
        register: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Rt.register(o);

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
        adoptSession: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          n(o);
          try {
            await t().fetchProfile();

            if (t().status !== "account_deleted") {
              e({ status: "authenticated", pendingEmail: null });
              kt(t().profile, t().email);
            }
          } catch (s) {
            if (Ne(s) &&
            (s.code === D.ENTITY_NOT_FOUND || s.status === 404)) {
              e({ status: "needs_profile", pendingEmail: null });
            } else {
              e({ status: "unauthenticated" });
              throw s;
            }
          }
        },
        login: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Rt.login(o);
            if (E0(s)) {
              n(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: o.email,
                    });

                  kt(t().profile, o.email);
                }
              } catch (c) {
                if (Ne(c) &&
                (c.code === D.ENTITY_NOT_FOUND || c.status === 404)) {
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
            const l = await Rt.verifyOtp({
              email: s || "",
              password: a || "",
              otp: o,
              flowToken: c || "",
            });
            e({ pendingPassword: null });

            if (v0(l)) {
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

                  kt(t().profile, u);
                }
              } catch (d) {
                if (Ne(d) &&
                (d.code === D.ENTITY_NOT_FOUND || d.status === 404)) {
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
            const u = Ne(l) ? l.message : "Verification failed";
            const d = Ne(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: d });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail: o, flowToken: s } = t();
          try {
            await Rt.resendOtp({ email: o || "", flowToken: s || "" });
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
            await wr.createProfile(o);
            await t().fetchProfile();
            e({ status: "authenticated" });
            kt(t().profile, t().email);
          } catch (s) {
            const a = Ne(s) ? s.message : "Failed to create profile";
            const c = Ne(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        logout: async () => {
          try {
            await Rt.logout();
          } catch {
          } finally {
            n(null);
            e({ ...br, status: "unauthenticated" });
            kt(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await Rt.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...br, status: "unauthenticated" });
            kt(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const o = await Rt.refreshSession();
            n(o.accessToken);
            return o.accessToken;
          } catch (o) {
            return Ne(o) && o.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const o = await wr.getMyProfile();
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
                kt(t().profile, t().email);
              }
            } catch (a) {
              if (Ne(a) &&
              (a.code === D.ENTITY_NOT_FOUND || a.status === 404)) {
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
          await wr.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await wr.restoreAccount();
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
          e({ ...br, status: "unauthenticated" });
          kt(null, null);
        },
        setProfile: (o) => {
          e({ profile: o });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Vs(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const Pu = () => Ee(e => e.status);

const Qs = () => Ee(e => e.profile);

const uo = () => Ee(e => e.status === "authenticated");

const w0 = "ITVL";
const S0 = "zl3b";
const b0 = "evVZ";
const C0 = "mSE3";
const I0 = "H9Qs";
const T0 = "R4MD";

const mn = {
  screen: w0,
  fullscreen: S0,
  image: b0,
  title: C0,
  description: I0,
  action: T0,
};

const N0 = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const Lu = ({ kind: e, title: t, description: n, action: r, fullscreen: o = false }) => i("div", {
  className: `${mn.screen} ${o ? mn.fullscreen : ""}`,
  children: [
    i("img", {
      className: mn.image,
      src: N0[e],
      alt: "",
      width: 256,
      height: 256,
      "aria-hidden": "true",
    }),
    i("h1", { className: mn.title, children: t }),
    n && i("p", { className: mn.description, children: n }),
    r && i("div", { className: mn.action, children: r }),
  ],
});

function R0({ children: e, currentPath: t }) {
  const n = Pu();

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
    const s = Ha.some(a => t.startsWith(a));

    if (n === "unauthenticated" && !s) {
      if (!je(ce.LOGIN)) {
        window.location.replace(ce.LOGIN);
      }
    } else if (n === "needs_profile" && t !== ce.ONBOARDING) {
      if (!je(ce.ONBOARDING)) {
        window.location.replace(ce.ONBOARDING);
      }
    } else if (n === "authenticated" &&
        (t === ce.LOGIN || t === ce.REGISTER || t === ce.ONBOARDING)) {
      je(ce.HOME);
    }
  }, [n, t]);

  const o = Ha.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !o)
    ? null
    : n === "service_error"
    ? i(k0, {})
    : n === "account_deleted"
    ? i(A0, {})
    : (n === "unauthenticated" && !o) ||
      (n === "needs_profile" && t !== ce.ONBOARDING)
    ? null
    : i(Re, { children: e });
}
function k0() {
  const e = Ee(o => o.initialize);

  const [t, n] = L(false);
  return i(Lu, {
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
function A0() {
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
          ? i(Re, {
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
          : i(Re, {
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
const O0 = "vMQm";
const P0 = "eACu";
const L0 = "Cq82";
const $0 = "jvA8";
const Cr = { content: O0, icon: P0, text: L0, button: $0 };
const Ga = "phone-verification-required";
function x0() {
  const [e, t] = L(false);

  const n = Ee(o => o.profile?.id ?? "");

  F(() => {
    const o = () => t(true);
    window.addEventListener(Ga, o);

    return () => window.removeEventListener(Ga, o);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${n}`;
  return i(un, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: i("div", {
      className: Cr.content,
      children: [
        i("div", { className: Cr.icon, children: i(vy, { size: 48 }) }),
        i("p", {
          className: Cr.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        i("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: Cr.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
function Dn(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const at = new Zs(50, 300 * 1000/* 1e3 */);
const M0 = 60 * 1000/* 1e3 */;
setInterval(() => at.cleanup(), 120 * 1000/* 1e3 */);
function D0(e) {
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
function $t(e) {
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
    author: D0(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: o, comments: s, reposts: a },
    reposted: l,
    originalPost: e.originalPost ? $t(e.originalPost) : null,
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
      const o = `${x.posts.list}${r ? `?${r}` : ""}`;
      const s = await M.get(o);
      return { data: s.data.posts.map($t), nextCursor: Dn(s.data) };
    },
    async getPost(e) {
      const t = await M.get(x.posts.single(e));
      return $t(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const r = at.get(n);
        const o = r && r.pinnedPostId === (t.pinnedPostId ?? null);

        if (r && o && at.isFresh(n, M0)) {
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
      return { data: s.data.posts.map($t), nextCursor: Dn(s.data) };
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
      return $t(n);
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
      return { data: s.data.posts.map($t), nextCursor: Dn(s.data) };
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
      return { data: s.data.posts.map($t), nextCursor: Dn(s.data) };
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
      return { data: s.data.posts.map($t), nextCursor: Dn(s.data) };
    },
  };

const U0 = { new: "newest", old: "oldest", popular: "popular" };
function F0(e) {
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
function ys(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const o = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: F0(e.author),
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
        ? (e.previewReplies ?? e.replies).map(ys)
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
        n.set("sort", U0[t.sort]);
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
      return { data: a.map(ys), nextCursor: c };
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
      return { data: a.map(ys), nextCursor: c };
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

const J = rt((e, t) => ({
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
          error: Ne(a) ? Ws(a.code, a.message) : "Не удалось загрузить ленту",
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
    const c = Ee.getState().profile;
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

    Z(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => W0
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

const ko = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: J },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Dr = rt()(
  lu(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: Vs(() => localStorage) }
  )
);

const Ge = new Map();
const B0 = 60 * 1000/* 1e3 */;
const H0 = 300 * 1000/* 1e3 */;
const Ya = 20;
const Xa = 500;
function V0() {
  const e = Date.now();
  for (const [t, n] of Ge.entries()) {
    if (e - n.timestamp > H0) {
      Ge.delete(t);
    }
  }
  if (Ge.size > Ya) {
    const t = Array.from(Ge.entries()).sort(
      (r, o) => r[1].timestamp - o[1].timestamp
    );
    t.slice(0, t.length - Ya).forEach(([r]) => Ge.delete(r));
  }
}

const Mt = rt((e, t) => ({
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
        const { usePostsStore: u } = await Promise.resolve().then(() => ko);
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
    V0();
    const s = Dr.getState().commentsSort;
    const a = n;
    const c = Ge.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < B0) {
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

          Ge.set(a, {
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
    const a = Dr.getState().commentsSort;
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
          comments: u.length > Xa ? u.slice(-Xa) : u,
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
    let a = -1;
    let c = -1;
    if (o === -1) {
      for (let _ = 0; _ < r.length; _++) {
        const g = (r[_].previewReplies ?? []).findIndex(E => E.id === n);
        if (g !== -1) {
          (s = true);
          (a = _);
          (c = g);
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
      const _ = [...(m[a].previewReplies ?? [])];
      (_[c] = { ..._[c], reactions: { total: p, myReaction: h } });
      (m[a] = { ...m[a], previewReplies: _ });
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
    } catch (_) {
      console.error("Failed to toggle comment like:", _);
      const y = [...t().comments];
      if (s) {
        const g = y.findIndex(E => E.previewReplies?.some(S => S.id === n)
        );
        if (g !== -1) {
          const E = y[g].previewReplies.findIndex(S => S.id === n);
          if (E !== -1) {
            const S = [...y[g].previewReplies];
            (S[E] = { ...S[E], reactions: { total: d, myReaction: u } });
            (y[g] = { ...y[g], previewReplies: S });
          }
        }
      } else {
        const g = y.findIndex(E => E.id === n);

        if (g !== -1) {
          (y[g] = { ...y[g], reactions: { total: d, myReaction: u } });
        }
      }
      e({ comments: y });
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

      const d = Ee.getState().profile;
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

        const y = {
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
                  previewReplies: [...(E.previewReplies || []), y],
                  stats: { ...E.stats, replies: E.stats.replies + 1 },
                }
              : E
            ),

            highlightedCommentId: u.id
          })
            : g => ({
            comments: [y, ...g.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: f } = await Z(async () => {
          const { usePostsStore: _ } = await Promise.resolve().then(() => ko);
          return { usePostsStore: _ };
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

      const h = Dr.getState().commentsSort;
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

    const { usePostsStore: c } = await Z(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => ko);
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

const W0 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Mt },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Xr = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const j0 = 0;
const z0 = 1;
const q0 = 2;
const G0 = 3;
const Ka = 4;
const Y0 = 5;
const X0 = 250;
const K0 = 0.5;
const Z0 = 30000/* 3e4 */;
const Q0 = 2000/* 2e3 */;
const J0 = 20;
const Za = "dwell_sid";

const eE = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function tE() {
  try {
    let e = sessionStorage.getItem(Za);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Za, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function nE(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= K0 ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class rE {
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
    (this.sessionId = tE());

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
        { threshold: eE }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const r of n) {
      window.addEventListener(r, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const r = document.hidden ? q0 : null;
      this.evaluateAll(r);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(z0);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(G0);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), Q0);
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
        this.evaluate(c, Ka);
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
      this.evaluate(r, Ka);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < Z0 && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const o = !!t_lastEntry && nE(t_lastEntry);
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

      if (u < X0) {
        return;
      }

      const d = n ?? (o ? Y0 : j0);
      const f = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const p = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: d, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (p) {
        (h.s = Xr[t.source]);
      }

      if (f) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, Xr[t.source]);
    }
  }
  enqueue(t, n, r) {
    this.buffer.push(t);

    if (this.buffer.length >= J0) {
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
const Qa = new rE();
function oE(e, t, n, r = "", o = undefined) {
  F(() => {
    const t_current = t.current;
    if (!(!t_current || !o)) {
      Qa.observe(t_current, e, n, r, o);

      return () => {
        Qa.unobserve(t_current);
      };
    }
  }, [e, t, n, r, o]);
}
function Js(e) {
  const t = J(n => n.postStatsCache[e.id]);
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
const $u = "shop-cart";
function Ja() {
  try {
    const e = localStorage.getItem($u);
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
function xu() {
  const [e, t] = L(Ja);

  F(() => {
    const n = (r) => {
      if (r.key === null || r.key === $u) {
        t(Ja());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}

const sE = ne(() => Z(() => import("./index-BH_wQQ8B.js"), __vite__mapDeps([8, 9])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const iE = ne(() => Z(
  () => import("./index-lzNvgGHU.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const Mu = ({
  href: e,
  icon: t,
  children: n,
  badge: r,
  onActiveClick: o,
  isActive: s = false,
}) => {
  const [a] = dr();
  const c = a.url || "/";
  const u = c === e || c.startsWith(`${e}/`) || s;
  return i("a", {
    href: e,
    className: `${Pe.navItem} ${u ? Pe.active : ""}`,
    onClick: (d) => {
      if (u && o) {
        d.preventDefault();
        o();
      }
    },
    children: [
      i("span", {
        className: Pe.iconWrapper,
        children: [
          t,
          r !== undefined &&
            r > 0 &&
            i("span", { className: Pe.badge, children: r > 99 ? "99+" : r }),
        ],
      }),
      i("span", { children: n }),
    ],
  });
};

const Ir = e => i(Mu, { ...e });

const aE = () => {
  const [e] = dr();

  const t = J(w => w.fetchFeed);

  const n = J(w => w.isRefreshing);

  const r = Ee(w => w.logout);

  const o = uo();
  const s = Qs();
  const a = ku();
  const c = xu();
  const { initialize: l, disconnectSSE: u } = an();
  const [d, f] = L(false);
  const [p, h] = L(false);
  const m = hu();

  const _ = js(w => w.fetchPortal);

  const y = s?.username ? `/@${s.username}` : "/profile";

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
    _();
  }, [_]);

  const g = N(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      t(true);
    }
  }, [t]);

  const E = N(() => {
    r();
  }, [r]);

  const S = Se(() => {
    const w = e.url || "/";
    return Ks.some(b => w.startsWith(b));
  }, [e.url]);

  const I = Se(() => {
    const w = e.url || "/";
    return s?.username
      ? w === `/@${s.username}` || w.startsWith(`/@${s.username}/`)
      : false;
  }, [e.url, s?.username]);

  return S
    ? null
    : i("aside", {
        className: Pe.aside,
        children: [
          i("div", {
            className: Pe.asideTop,
            children: [
              i("div", {
                className: Pe.asideBrand,
                children: [
                  i(fy, {}),
                  i("button", {
                    className: Pe.asideBrandVersion,
                    onClick: () => f(true),
                    title: "Что нового",
                    children: ["v", "1.1.3"],
                  }),
                ],
              }),
              i("nav", {
                className: Pe.nav,
                children: [
                  i(Ir, {
                    href: "/",
                    icon: n ? i(Gs, {}) : i(Eu, {}),
                    onActiveClick: g,
                    children: "Лента",
                  }),
                  i(Ir, {
                    href: "/search",
                    icon: i(Iu, {}),
                    children: "Поиск",
                  }),
                  i(Ir, {
                    href: "/shop",
                    icon: i(Tu, {}),
                    badge: c,
                    children: "Магаз",
                  }),
                  i(Sy, {
                    path: "/event",
                    children: ({ matches: w }) => i("a", {
                      href: m.active && m.url ? m.url : "/event",
                      target: m.active && m.url ? "_blank" : undefined,
                      rel:
                        m.active && m.url ? "noopener noreferrer" : undefined,
                      className: `${Pe.portalButton} ${
                        m.active ? Pe.portalActive : ""
                      } ${w ? Pe.active : ""}`,
                      title: "Ивент",
                      children: [
                        i("img", {
                          src: m.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: Pe.portalImage,
                        }),
                        i("span", { children: "Ивент" }),
                      ],
                    }),
                  }),
                  i(Ir, {
                    href: "/notifications",
                    icon: i(Cu, {}),
                    badge: a,
                    children: "Уведомления",
                  }),
                  i(Mu, {
                    href: y,
                    icon: i(hs, {}),
                    isActive: I,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: Pe.asideBottom,
            children: o
              ? i(Re, {
                  children: [
                    !s?.subscription?.isActive &&
                      i("button", {
                        className: Pe.logoutButton,
                        onClick: () => h(true),
                        children: [
                          i("span", { children: "⭐" }),
                          i("span", { children: "ИТД НУКСТА" }),
                        ],
                      }),
                    i("button", {
                      className: Pe.logoutButton,
                      onClick: E,
                      children: [
                        i(hy, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: Pe.logoutButton,
                  href: ce.LOGIN,
                  children: [
                    i(hs, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          d &&
            i(Ie, {
              fallback: null,
              children: i(sE, { isOpen: d, onClose: () => f(false) }),
            }),
          p &&
            i(Ie, {
              fallback: null,
              children: i(iE, { isOpen: p, onClose: () => h(false) }),
            }),
        ],
      });
};

const cE = "czvw";
const lE = "jsQV";
const uE = "OySu";
const dE = "AGFC";
const Un = { sidebar: cE, sidebarContent: lE, sidebarBottom: uE, legalLinks: dE };

const fE = () => {
  const [e] = dr();
  return Se(() => {
    const n = e.url || "/";
    return Ks.some(r => n.startsWith(r));
  }, [e.url])
    ? null
    : i("aside", {
        className: Un.sidebar,
        children: [
          i("div", { className: Un.sidebarContent }),
          i("div", {
            className: Un.sidebarBottom,
            children: [
              i("ul", {
                className: Un.legalLinks,
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
                className: Un.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const pE = "Nsaf";
const hE = "m4Rb";
const mE = "nEzu";
const gE = "ATyv";
const _E = "wFOO";
const yE = "kWjd";
const vE = "iYtC";
const EE = "AEE4";
const wE = "LHOj";
const SE = "jKUd";
const bE = "OsWL";
const CE = "mxXS";

const De = {
  mobileNavigationWrapper: pE,
  navigation: hE,
  indicator: mE,
  indicatorHidden: gE,
  navItem: _E,
  label: yE,
  active: vE,
  createButton: EE,
  iconWrapper: wE,
  portalImage: SE,
  portalImageActive: bE,
  badge: CE,
};

const ec = e => Symbol.iterator in e;

const tc = e => "entries" in e;

const nc = (e, t) => {
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

const IE = (e, t) => {
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

function TE(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : ec(e) && ec(t)
    ? tc(e) && tc(t)
      ? nc(e, t)
      : IE(e, t)
    : nc(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function rc(e) {
  const t = Wn.useRef(undefined);
  return (n) => {
    const r = e(n);
    return TE(t.current, r) ? t.current : (t.current = r);
  };
}
const NE = "ORjs";
const RE = "pxmH";
const kE = "Kmdl";
const AE = "Z4qi";
const OE = "VcGh";
const PE = "w7I4";
const LE = "Qyiz";
const $E = "UCw6";
const xE = "WcIK";
const ME = "v8Qj";
const DE = "JEGZ";
const UE = "aOAp";
const FE = "ez4w";
const BE = "JvfZ";
const HE = "ShWY";
const VE = "V1DV";
const WE = "PCGd";
const jE = "FoUE";
const zE = "BKZ0";
const qE = "WVRd";
const GE = "E2NZ";
const YE = "R8V6";
const XE = "Eedl";

const K = {
  skeleton: NE,
  comment: RE,
  content: kE,
  header: AE,
  headerLeft: OE,
  body: PE,
  actions: LE,
  likeBtn: $E,
  shimmer: xE,
  avatar: ME,
  more: DE,
  likeIcon: UE,
  name: FE,
  time: BE,
  line: HE,
  w100: VE,
  w85: WE,
  w65: jE,
  w50: zE,
  w40: qE,
  replyLabel: GE,
  likeCount: YE,
  list: XE,
};

function KE(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: K.body,
          children: i("div", { className: `${K.shimmer} ${K.line} ${K.w50}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: K.body,
          children: [
            i("div", { className: `${K.shimmer} ${K.line} ${K.w100}` }),
            i("div", { className: `${K.shimmer} ${K.line} ${K.w65}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: K.body,
          children: [
            i("div", { className: `${K.shimmer} ${K.line} ${K.w100}` }),
            i("div", { className: `${K.shimmer} ${K.line} ${K.w85}` }),
            i("div", { className: `${K.shimmer} ${K.line} ${K.w40}` }),
          ],
        });
      }
  }
}
function ei({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("div", {
    className: K.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: K.comment,
      children: [
        i("div", { className: `${K.shimmer} ${K.avatar}` }),
        i("div", {
          className: K.content,
          children: [
            i("div", {
              className: K.header,
              children: [
                i("div", {
                  className: K.headerLeft,
                  children: [
                    i("div", { className: `${K.shimmer} ${K.name}` }),
                    i("div", { className: `${K.shimmer} ${K.time}` }),
                  ],
                }),
                i("div", { className: `${K.shimmer} ${K.more}` }),
              ],
            }),
            KE(e),
            i("div", {
              className: K.actions,
              children: [
                i("div", { className: `${K.shimmer} ${K.replyLabel}` }),
                i("div", {
                  className: K.likeBtn,
                  children: [
                    i("div", { className: `${K.shimmer} ${K.likeIcon}` }),
                    i("div", { className: `${K.shimmer} ${K.likeCount}` }),
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
const oc = ["medium", "short", "long", "medium", "short"];
function ZE({ count: e = 4 }) {
  return i("div", {
    className: K.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(ei, { variant: oc[n % oc.length], delayMs: n * 120 }, n)
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

const Ao = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function QE() {
  const [e, t] = L(false);
  const [n, r] = L(Ao);

  const o = N((m) => {
    if (m.length <= wt.MAX_POLL_QUESTION_LENGTH) {
      r(_ => ({
        ..._,
        question: m
      }));
    }
  }, []);

  const s = N((m, _) => {
    if (_.length <= wt.MAX_POLL_OPTION_LENGTH) {
      r(y => ({
        ...y,
        options: y.options.map(g => g.id === m ? { ...g, text: _ } : g)
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
        r(_ => ({
          ..._,
          options: _.options.filter(y => y.id !== m)
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
    r(Ao);
  }, []);

  const d = N(() => {
    t(m => !m);
  }, []);

  const f = N(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const _ = n.options.filter(y => y.text.trim().length > 0);

    return m && _.length >= wt.MIN_POLL_OPTIONS;
  }, [e, n]);

  const p = N(() => {
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

  const h = N(() => {
    t(false);
    r(Ao);
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
function Du(e = 10, t = false) {
  const [n, r] = L([]);
  const [o, s] = L([]);
  const a = O(null);
  const c = O(n);
  const l = O(o);
  (c.current = n);
  (l.current = o);

  F(
    () => () => {
      c.current.forEach(S => URL.revokeObjectURL(S.previewUrl));

      l.current.forEach(S => URL.revokeObjectURL(S.previewUrl));
    },
    []
  );

  const u = o.length > 0;

  const d = n.some(S => S.type === "video") || o.some(S => S.type === "video");

  const f = n.some(S => S.type === "image") || o.some(S => S.type === "image");

  const p = N(() => {
    a.current?.click();
  }, []);

  const h = N(
    async (S) => {
      const I = _n.isValidVideoType(S);
      const w = _n.isValidImageType(S);
      if (I && !t) {
        vt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!w && !I) {
        vt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const k =
        c_current.some(P => P.type === "video") ||
        l_current.some(P => P.type === "video");

      const C =
        c_current.some(P => P.type === "image") ||
        l_current.some(P => P.type === "image");

      if (I && C) {
        vt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (w && k) {
        vt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (I && k) {
        vt.error("Можно загрузить только 1 видео");
        return;
      }
      const v = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const A = URL.createObjectURL(S);
      const T = I ? "video" : "image";
      s(P => [
        ...P,
        { id: v, file: S, previewUrl: A, progress: 0, type: T },
      ]);
      try {
        const P = await _n.uploadMedia(S);

        s(V => V.filter(ae => ae.id !== v));

        r(V => [
          ...V,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: P.id,
            url: P.url,
            previewUrl: A,
            type: T,
          },
        ]);
      } catch (P) {
        let V = "Ошибка загрузки";

        if (Ne(P)) {
          (V = Ws(P.code, P.message));
        } else if (P instanceof Error) {
          (V = P.message);
        }

        vt.error(V);

        s(ae => ae.filter(de => de.id !== v));

        URL.revokeObjectURL(A);
      }
    },
    [t]
  );

  const m = N(
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

  const _ = N((S) => {
    r((I) => {
      const w = I.find(b => b.id === S);

      if (w) {
        URL.revokeObjectURL(w.previewUrl);
      }

      return I.filter(b => b.id !== S);
    });

    s((I) => {
      const w = I.find(b => b.id === S);

      if (w) {
        URL.revokeObjectURL(w.previewUrl);
      }

      return I.filter(b => b.id !== S);
    });
  }, []);

  const y = N(
    (S) => {
      const I = S.filter(R => t ? _n.isValidMediaType(R) : _n.isValidImageType(R)
      );
      if (I.length === 0) {
        return;
      }
      const w = c.current.length + l.current.length;
      const b = e - w;

      if (b > 0) {
        I.slice(0, b).forEach(h);
      }
    },
    [e, h, t]
  );

  const g = N(
    async (S) => {
      const [I, w] = S.split(",");
      const b = I.match(/:(.*?);/)?.[1] || "image/png";
      const R = atob(w);
      const k = new Uint8Array(R.length);
      for (let A = 0; A < R.length; A++) {
        k[A] = R.charCodeAt(A);
      }
      const C = new Blob([k], { type: b });
      const v = new File([C], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(v);
    },
    [h]
  );

  const E = N(() => {
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
    removeImage: _,
    addImage: g,
    uploadFiles: y,
    clearAll: E,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const JE = "djqU";
const ew = "XCQn";
const tw = "ccvJ";
const nw = "aEJD";
const rw = "wt4o";
const ow = "YN2u";
const sw = "UPba";
const iw = "sKkZ";
const aw = "ZIJQ";
const cw = "wHF2";
const lw = "IHQ8";
const uw = "nVak";
const dw = "Jd5m";
const fw = "Udsx";
const pw = "m3uu";
const hw = "clrX";
const mw = "uJkj";
const gw = "v4fY";
const _w = "Hokg";
const yw = "ss2K";
const vw = "V8Hx";
const Ew = "iHjB";
const ww = "yQ34";
const Sw = "itgf";
const bw = "gQZr";
const Cw = "AubP";
const Iw = "SsAI";
const Tw = "ZcJM";
const Nw = "DQ0L";
const Rw = "C0eI";
const kw = "rjGI";
const Aw = "BhCa";
const Ow = "d4TB";
const Pw = "iXdz";
const Lw = "U4vP";

const Q = {
  form: JE,
  dragActive: ew,
  whatsNew: tw,
  editor: nw,
  dragOverlay: rw,
  attachments: ow,
  attachmentPreview: sw,
  uploading: iw,
  uploadError: aw,
  videoPreviewWrapper: cw,
  videoPlayIcon: lw,
  uploadOverlay: uw,
  spinner: dw,
  errorOverlay: fw,
  errorText: pw,
  removeAttachment: hw,
  actions: mw,
  mediaButtons: gw,
  mediaButton: _w,
  submitGroup: yw,
  charCount: vw,
  error: Ew,
  pollContainer: ww,
  pollHeader: Sw,
  pollTitle: bw,
  pollClose: Cw,
  pollQuestion: Iw,
  pollOptions: Tw,
  pollOptionRow: Nw,
  pollOption: Rw,
  removeOption: kw,
  addOption: Aw,
  pollFooter: Ow,
  pollToggle: Pw,
  active: Lw,
};

function sc({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: Q.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: Q.videoPlayIcon,
            children: i(cy, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function Uu({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: Q.attachments,
        children: [
          e.map(o => i(
            "div",
            {
              className: Q.attachmentPreview,
              children: [
                i(sc, { src: o.previewUrl, type: o.type }),
                i("button", {
                  className: Q.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(dt, {}),
                }),
              ],
            },
            o.id
          )
          ),
          t.map(o => i(
            "div",
            {
              className: `${Q.attachmentPreview} ${
                o.error ? Q.uploadError : Q.uploading
              }`,
              children: [
                i(sc, { src: o.previewUrl, type: o.type }),
                !o.error &&
                  i("div", {
                    className: Q.uploadOverlay,
                    children: i("div", { className: Q.spinner }),
                  }),
                o.error &&
                  i("div", {
                    className: Q.errorOverlay,
                    children: i("span", {
                      className: Q.errorText,
                      children: o.error,
                    }),
                  }),
                i("button", {
                  className: Q.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(dt, {}),
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
function $w({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: r,
  onRemoveOption: o,
  onMultipleChoiceToggle: s,
  onClose: a,
}) {
  return i("div", {
    className: Q.pollContainer,
    children: [
      i("div", {
        className: Q.pollHeader,
        children: [
          i("span", { className: Q.pollTitle, children: "Опрос" }),
          i("button", {
            className: Q.pollClose,
            onClick: a,
            children: i(dt, {}),
          }),
        ],
      }),
      i("input", {
        type: "text",
        className: Q.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: c => t(c.target.value),
      }),
      i("div", {
        className: Q.pollOptions,
        children: e.options.map((c, l) => i(
          "div",
          {
            className: Q.pollOptionRow,
            children: [
              i("input", {
                type: "text",
                className: Q.pollOption,
                placeholder: `Вариант ${l + 1}`,
                value: c.text,
                maxLength: 50,
                onInput: u => n(c.id, u.target.value),
              }),
              e.options.length > wt.MIN_POLL_OPTIONS &&
                i("button", {
                  className: Q.removeOption,
                  onClick: () => o(c.id),
                  children: i(dt, {}),
                }),
            ],
          },
          c.id
        )
        ),
      }),
      e.options.length < wt.MAX_POLL_OPTIONS &&
        i("button", {
          className: Q.addOption,
          onClick: r,
          children: [i(Ys, {}), i("span", { children: "Добавить вариант" })],
        }),
      i("div", {
        className: Q.pollFooter,
        children: i("label", {
          className: Q.pollToggle,
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
const xw = "hjEv";
const Mw = "EciX";
const Dw = "ZB1F";
const Uw = "BwHt";
const Fw = "jVp5";
const Bw = "hhPS";
const Hw = "s1El";
const Vw = "nOgP";
const Ww = "oS5y";
const jw = "triI";
const zw = "GRBb";
const qw = "vHLn";
const Gw = "su2r";
const Yw = "qIgL";
const Xw = "DDfq";
const Kw = "UBf9";

const xe = {
  editor: xw,
  empty: Mw,
  bold: Dw,
  italic: Uw,
  underline: Fw,
  strike: Bw,
  spoiler: Hw,
  monospace: Vw,
  quote: Ww,
  link: jw,
  menu: zw,
  buttons: qw,
  button: Gw,
  linkForm: Yw,
  linkInput: Xw,
  linkSubmit: Kw,
};

const Kr = {
  bold: xe.bold,
  italic: xe.italic,
  underline: xe.underline,
  strike: xe.strike,
  spoiler: xe.spoiler,
  monospace: xe.monospace,
  quote: xe.quote,
  link: xe.link,
};

function Oo(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function Zw(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Qw(e) {
  return e !== "mention" && e !== "hashtag";
}
function ic(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!Qw(r.type)) {
      continue;
    }
    const o = Kr[r.type];
    const s = r.type === "link" ? ` data-url="${Zw(r.url)}"` : "";
    n = `<span class="${o}"${s}>${n}</span>`;
  }
  return n;
}
function Jw(e, t, n) {
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
function eS(e, t) {
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
function tS(e) {
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
      for (const [u, d] of Object.entries(Kr)) {
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
function nS(e, t) {
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
function rS(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const oS = [
    { type: "bold", icon: ey, title: "Жирный" },
    { type: "italic", icon: ny, title: "Курсив" },
    { type: "underline", icon: iy, title: "Подчёркнутый" },
    { type: "strike", icon: sy, title: "Зачёркнутый" },
    { type: "spoiler", icon: oy, title: "Спойлер" },
    { type: "monospace", icon: ty, title: "Моноширинный" },
    { type: "quote", icon: ry, title: "Цитата" },
    { type: "link", icon: gu, title: "Ссылка" },
  ];

const fo = Zl((
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
  const [_, y] = L(false);
  const [g, E] = L({ x: 0, y: 0 });
  const [S, I] = L(false);
  const [w, b] = L("");
  const R = O(null);
  const k = O(null);
  const C = O(null);
  const v = O(false);
  const A = O(false);
  const T = O(t);
  const P = O(n);
  const V = O(r);

  F(() => {
    (T.current = t);
    (P.current = n);
    (V.current = r);
  }, [t, n, r]);

  Ds(
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
          const se = j.getRangeAt(0);
          ee = Jw(m_current, se.startContainer, se.startOffset);
        }
        const T_current = T.current;
        const P_current = P.current;
        const fe = T_current.slice(0, ee) + $ + T_current.slice(ee);

        const Ae = P_current.map(se => se.offset >= ee
          ? { ...se, offset: se.offset + $.length }
          : se.offset + se.length > ee
          ? { ...se, length: se.length + $.length }
          : se
        );

        (A.current = true);
        (T.current = fe);
        (P.current = Ae);
        const Te = document.createTextNode($);
        if (j.rangeCount > 0) {
          const se = j.getRangeAt(0);
          se.deleteContents();
          se.insertNode(Te);
          se.setStartAfter(Te);
          se.setEndAfter(Te);
          j.removeAllRanges();
          j.addRange(se);
        }
        V.current(fe, Ae);
      },

      focus: () => {
        m.current?.focus();
      }
    }),
    []
  );

  const ae = N(() => {
    if (!t) {
      return "";
    }
    if (n.length === 0) {
      return Oo(t);
    }

    const $ = [...n].sort((G, fe) => G.offset - fe.offset);

    const U = [];
    for (const G of $) {
      U.push({ pos: G.offset, type: "start", span: G });
      U.push({ pos: G.offset + G.length, type: "end", span: G });
    }
    U.sort((G, fe) => G.pos !== fe.pos
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
    for (const G of U) {
      if (G.pos > ee) {
        const fe = t.substring(ee, G.pos);
        (j += ic(Oo(fe), z));
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
      j += ic(Oo(G), z);
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
    const U = ae();

    if (m_current.innerHTML !== U) {
      (m_current.innerHTML = U);
    }
  }, [ae, t]);

  F(() => {
    if (a && m.current) {
      const m_current = m.current;
      m_current.focus();

      if (m_current.childNodes.length > 0) {
        const U = window.getSelection();
        if (U) {
          const j = document.createRange();
          j.selectNodeContents(m_current);
          j.collapse(false);
          U.removeAllRanges();
          U.addRange(j);
        }
      }
    }
  }, [a]);

  F(() => {
    if (S && k.current) {
      k.current.focus();
    }
  }, [S]);

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
            let Ae = null;
            let Te = fe;

            while (Te && Te !== m_current) {
              if (Te.nodeType === Node.ELEMENT_NODE) {
                const se = Te;
                if (se.tagName === "SPAN" && se.className) {
                  Ae = se;
                  break;
                }
              }
              Te = Te.parentNode;
            }

            if (Ae) {
              const se = Ae.textContent || "";
              if (se.endsWith(" ")) {
                Ae.textContent = se.slice(0, -1);
                const Vt = document.createTextNode(" ");
                Ae.parentNode?.insertBefore(Vt, Ae.nextSibling);
                const ht = document.createRange();
                ht.setStartAfter(Vt);
                ht.setEndAfter(Vt);
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
          r(z, eS(n, z));
          return;
        }
        const ee = tS(m_current);
        (A.current = true);
        r(j, ee);
      },
      [s, r, n]
    );

  const he = N(
    ($) => {
      if (f) {
        return;
      }
      const U = window.getSelection();
      if (!U || U.isCollapsed) {
        return;
      }
      $.preventDefault();
      (C.current = U.getRangeAt(0).cloneRange());

      const j = Math.max(
          10,
          Math.min($.clientX - 150, window.innerWidth - 310)
        );

      const ee = Math.max(10, $.clientY - 50);
      E({ x: j, y: ee });
      y(true);
    },
    [f]
  );

  const ie = N(
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

      const U = $.clipboardData?.getData("text/plain") || "";
      if (!U) {
        return;
      }
      const j = window.getSelection();
      if (!j || !j.rangeCount) {
        return;
      }
      const ee = j.getRangeAt(0);
      ee.deleteContents();
      const z = document.createTextNode(U);
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
      const U = window.getSelection();
      if (U) {
        const j = document.createRange();
        j.setStart(m_current, 0);
        j.collapse(true);
        U.removeAllRanges();
        U.addRange(j);
      }
    }
  }, []);

  const te = N(
    ($) => {
      if ($.key === "Enter" && !$.shiftKey && d) {
        $.preventDefault();
        d();
        return;
      }
      if (!f && ($.ctrlKey || $.metaKey)) {
        let U = null;
        switch ($.key.toLowerCase()) {
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
          $.preventDefault();
          oe(U);
        }
      }
    },
    [d, f]
  );

  const oe = N(
    ($, U) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const ee = window.getSelection();
      if (!ee ||
      (C.current && (ee.removeAllRanges(), ee.addRange(C.current)),
      ee.isCollapsed)) {
        return;
      }
      const z = ee.getRangeAt(0);
      const G = document.createElement("span");
      (G.className = Kr[$]);

      if ($ === "link" && U) {
        (G.dataset.url = U);
      }

      const fe = nS(z.commonAncestorContainer, Kr[$]);
      if (fe) {
        rS(fe);
      } else {
        try {
          z.surroundContents(G);
        } catch {
          const Ae = z.extractContents();
          G.appendChild(Ae);
          z.insertNode(G);
        }
      }
      de();
      y(false);
      I(false);
      b("");
      (C.current = null);
      m_current.focus();
    },
    [de]
  );

  const W = N(
    ($) => {
      if ($ === "link") {
        I(true);
      } else {
        oe($);
      }
    },
    [oe]
  );

  const _e = N(
    ($) => {
      $.preventDefault();

      if (w.trim()) {
        oe("link", w.trim());
      }
    },
    [oe, w]
  );

  F(() => {
    if (!_) {
      return;
    }

    const $ = (j) => {
      if (R.current &&
        !R.current.contains(j.target)) {
        y(false);
        I(false);
        b("");
        (C.current = null);
      }
    };

    const U = () => {
      y(false);
      I(false);
      b("");
      (C.current = null);
    };

    document.addEventListener("mousedown", $);
    window.addEventListener("scroll", U, true);

    return () => {
      document.removeEventListener("mousedown", $);
      window.removeEventListener("scroll", U, true);
    };
  }, [_]);
  const ge = !t;
  return i(Re, {
    children: [
      i("div", {
        ref: m,
        className: `${xe.editor} ${c} ${ge ? xe.empty : ""}`,
        contentEditable: true,
        "data-placeholder": o,
        onInput: $ => de($),
        onFocus: q,
        onPaste: ie,
        onContextMenu: he,
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
      _ &&
        $(
          i("div", {
            ref: R,
            className: xe.menu,
            style: { left: g.x, top: g.y },
            children: S
              ? i("form", {
                  className: xe.linkForm,
                  onSubmit: _e,
                  children: [
                    i("input", {
                      ref: k,
                      type: "url",
                      className: xe.linkInput,
                      placeholder: "https://...",
                      value: w,
                      onInput: $ => b($.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: xe.linkSubmit,
                      disabled: !w.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: xe.buttons,
                  children: oS.map(({ type: $, icon: U, title: j }) => i(
                    "button",
                    {
                      type: "button",
                      className: xe.button,
                      onClick: () => W($),
                      title: j,
                      children: i(U, { size: 16 }),
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

const sS = "bgow";
const iS = "Cq5C";
const aS = "urS3";
const cS = "TGNk";
const lS = "sMFP";
const uS = "CSxZ";
const dS = "Mtq2";
const fS = "Lvpc";
const pS = "Ii3q";
const hS = "Jde0";
const mS = "GmdE";
const gS = "C8Wf";
const _S = "f2VF";
const yS = "NqrL";
const vS = "p1jH";
const ES = "eoBN";
const wS = "AO3H";
const SS = "JaWV";
const bS = "C98g";
const CS = "j7L9";
const IS = "XNoj";

const ye = {
  commentInput: sS,
  replyMode: iS,
  inputRow: aS,
  attachmentStrip: cS,
  circleButton: lS,
  micButton: uS,
  sendButton: dS,
  submitting: fS,
  textareaContainer: pS,
  expanded: hS,
  voiceMode: mS,
  inputWrapper: gS,
  commentCharCount: _S,
  error: yS,
  input: vS,
  replyHeader: ES,
  replyText: wS,
  replyName: SS,
  replyClose: bS,
  dragActive: CS,
  dragOverlay: IS,
};

const TS = "Amt4";
const NS = "s3OS";
const RS = "WLxq";
const Po = { textInput: TS, entering: NS, sendButton: RS };
const kS = 1000/* 1e3 */;
function AS({
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
  const d = kS - e.length;
  const f = d < 0;
  const p = [Po.textInput, s ? Po.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: p,
    children: [
      i("div", {
        className: ye.inputWrapper,
        children: [
          i(fo, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: r,
            autoFocus: a,
            className: ye.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: f ? undefined : o,
            disableFormatting: true,
            onImagePaste: u,
          }),
          f &&
            i("span", {
              className: `${ye.commentCharCount} ${ye.error}`,
              children: d,
            }),
        ],
      }),
      i("button", {
        className: `${ye.circleButton} ${ye.sendButton} ${Po.sendButton} ${
          c ? ye.submitting : ""
        }`,
        onClick: o,
        disabled: c || l || f,
        children: c ? i(Au, { size: "xs" }) : i(ly, { size: 20 }),
      }),
    ],
  });
}
const OS = ne(() => Z(
  () => import("./VoiceInput-0h4byGEy.js"),
  __vite__mapDeps([10, 11, 12])
).then(e => ({
  default: e.VoiceInput
}))
);
function Fu({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: o,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = lo();
  const [d, f] = L("text");
  const [p, h] = L(false);
  const [m, _] = L(false);
  const [y, g] = L(false);
  const [E, S] = L(false);
  const I = O(false);
  const w = O(null);
  const b = O(0);

  const {
    images: R,
    uploadingImages: k,
    isUploading: C,
    openFilePicker: v,
    removeImage: A,
    uploadFiles: T,
    clearAll: P,
    fileInputRef: V,
    handleFileChange: ae,
  } = Du(4);

  F(
    () => () => {
      if (w.current) {
        clearTimeout(w.current);
      }
    },
    []
  );
  const de = R.length > 0 || k.length > 0;
  const he = a.length > 0 || y || de;
  const ie = d === "voice";
  const q = 1000/* 1e3 */;

  const te = async () => {
    const z = a.trim().length > 0;
    const G = R.length > 0;
    if ((!z && !G) || y || C || a.length > q) {
      return;
    }
    const fe = a.trim();
    const Ae = [...c];

    const Te = R.map(se => ({
      mediaId: se.mediaId
    }));

    g(true);
    try {
      await e(fe, Ae, Te.length > 0 ? Te : undefined);
      u();
      P();
    } catch (se) {
      console.error("Failed to submit comment:", se);
    } finally {
      g(false);
    }
  };

  const oe = () => {
    (I.current = true);
    f("voice");
    _(false);
  };

  const W = () => {
    h(true);
  };

  const _e = () => {
    h(false);
    f("text");
    _(true);

    if (w.current) {
      clearTimeout(w.current);
    }

    (w.current = window.setTimeout(() => {
      (w.current = null);
      _(false);
    }, 300));
  };

  const ge = N((z) => {
    z.preventDefault();
    z.stopPropagation();
    b.current++;

    if (z.dataTransfer?.types.includes("Files")) {
      S(true);
    }
  }, []);

  const $ = N((z) => {
    z.preventDefault();
    z.stopPropagation();
  }, []);

  const U = N((z) => {
    z.preventDefault();
    z.stopPropagation();
    b.current--;

    if (b.current === 0) {
      S(false);
    }
  }, []);

  const j = N(
    (z) => {
      z.preventDefault();
      z.stopPropagation();
      (b.current = 0);
      S(false);
      const G = z.dataTransfer?.files;

      if (G && G.length > 0) {
        T(Array.from(G));
      }
    },
    [T]
  );

  const ee = [
    ye.commentInput,
    he ? ye.expanded : "",
    ie ? ye.voiceMode : "",
    r ? ye.replyMode : "",
    E ? ye.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return i("div", {
    className: ee,
    onDragEnter: ge,
    onDragOver: $,
    onDragLeave: U,
    onDrop: j,
    children: [
      E &&
        i("div", {
          className: ye.dragOverlay,
          children: [
            i(Su, { size: 24 }),
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
              children: i(dt, { size: 16 }),
            }),
          ],
        }),
      !ie &&
        !p &&
        de &&
        i("div", {
          className: ye.attachmentStrip,
          children: i(Uu, { images: R, uploadingImages: k, onRemove: A }),
        }),
      i("div", {
        className: ye.inputRow,
        children: [
          i("button", {
            className: ye.circleButton,
            onClick: ie ? W : v,
            children: ie ? i(dt, { size: 20 }) : i(_u, { size: 20 }),
          }),
          i("div", {
            className: ye.textareaContainer,
            children:
              ie || p
                ? i(Ie, {
                    fallback: null,
                    children: i(OS, {
                      onCancel: W,
                      onSend: t,
                      isExiting: p,
                      onExitComplete: _e,
                    }),
                  })
                : i(AS, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: te,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: y,
                    sendDisabled: C,
                    onImagePaste: T,
                  }),
          }),
          !ie &&
            !p &&
            i("button", {
              className: `${ye.circleButton} ${ye.micButton}`,
              onClick: oe,
              children: i(ay, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: V,
        type: "file",
        accept: ms,
        multiple: true,
        onChange: ae,
        style: { display: "none" },
      }),
    ],
  });
}
const PS = "gsZl";
const LS = "wMte";
const $S = "h8E7";
const xS = "NbjR";
const MS = "cCVx";
const DS = "ChPW";
const US = "IJeq";

const qt = {
  counter: PS,
  digit: LS,
  prev: $S,
  current: xS,
  animating: MS,
  up: DS,
  down: US,
};

function FS(e) {
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
function jn({ value: e }) {
  const t = FS(e);
  const n = O(e);
  const r = O(t.length);
  const o = O(Date.now());

  const [s, a] = L(() => t
    .split("")
    .map((f, p) => ({
    char: f,
    prevChar: f,
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
    const y = m.join("").padStart(_, " ").split("");

    const E = h
      .join("")
      .padStart(_, " ")
      .split("")
      .map((I, w) => {
      const b = y[w] || " ";
      const R = s[w - (_ - s.length)];
      return I !== b
        ? (r.current++,
          { char: I, prevChar: b, isAnimating: true, key: r.current })
        : { char: I, prevChar: I, isAnimating: false, key: R?.key ?? w };
    })
      .filter(I => I.char !== " " || I.isAnimating);

    a(E);
    const S = setTimeout(() => {
      a(I => I.map(w => ({
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

  const d = c === "up" ? qt.up : c === "down" ? qt.down : "";
  return i("span", {
    className: qt.counter,
    children: s.map(f => f.isAnimating
      ? i(
          "span",
          {
            className: `${qt.digit} ${qt.animating} ${d}`,
            children: [
              i("span", { className: qt.prev, children: f.prevChar }),
              i("span", { className: qt.current, children: f.char }),
            ],
          },
          f.key
        )
      : i("span", { children: f.char }, f.key)
    ),
  });
}
const BS = "Cdf6";
const HS = "Yd6j";
const VS = "caFK";
const WS = "TNWO";
const jS = "LBjS";
const zS = "Yx1f";
const qS = "fsAP";
const GS = "B2lI";
const YS = "akI1";

const gt = {
  dropdownWrapper: BS,
  trigger: HS,
  menu: VS,
  hidden: WS,
  menuItem: jS,
  danger: zS,
  itemIcon: qS,
  itemLabel: GS,
  divider: YS,
};

function Bu({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: o,
}) {
  const [s, a] = L(false);
  const [c, l] = L(false);
  const [u, d] = L({ top: 0, left: 0 });
  const f = O(null);
  const p = O(null);

  const h = N(() => {
    if (!f.current) {
      return;
    }
    const g = f.current.getBoundingClientRect();
    const E = p.current?.offsetHeight || 150;
    const S = p.current?.offsetWidth || 160;
    let I = 0;
    let w = 0;

    if (n.startsWith("bottom")) {
      (I = g.bottom + 4);
    } else {
      (I = g.top - E - 4);
    }

    if (n.endsWith("right")) {
      (w = g.right - S);
    } else {
      (w = g.left);
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

    if (I + E > innerHeight) {
      (I = g.top - E - 4);
    }

    if (I < 8) {
      (I = g.bottom + 4);
    }

    d({ top: I, left: w });
    l(true);
  }, [n]);

  const m = N((g) => {
    const g_target = g.target;

    if (f.current &&
      !f.current.contains(g_target) &&
      p.current &&
      !p.current.contains(g_target)) {
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

  const _ = (g) => {
    g.stopPropagation();

    if (s) {
      a(false);
      l(false);
    } else {
      a(true);
    }
  };

  const y = (g, E) => {
    g.stopPropagation();
    E.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${gt.dropdownWrapper} ${o || ""}`,
    children: [
      i("div", { ref: f, className: gt.trigger, onClick: _, children: e }),
      s &&
        $(
          i("div", {
            ref: p,
            className: `${gt.menu} ${c ? "" : gt.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((g, E) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${gt.menuItem} ${g.danger ? gt.danger : ""}`,
                    onClick: S => y(S, g),
                    children: [
                      g.icon &&
                        i("span", {
                          className: gt.itemIcon,
                          children: g.icon,
                        }),
                      i("span", {
                        className: gt.itemLabel,
                        children: g.label,
                      }),
                    ],
                  }),
                  r.includes(g.id) &&
                    E < t.length - 1 &&
                    i("div", { className: gt.divider }),
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
const XS = "qM8S";
const KS = "fk1r";
const ZS = "YnjG";
const QS = "DuO0";
const JS = "IaiN";
const eb = "Mhwn";
const tb = "D86A";
const nb = "WfzV";

const At = {
  underline: XS,
  monospace: KS,
  quote: ZS,
  spoiler: QS,
  revealed: JS,
  link: eb,
  mention: tb,
  hashtag: nb,
};

function rb(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function ob(e) {
  if (!rb(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const o = btoa(r);
  return `/external?url=${encodeURIComponent(o)}`;
}
function Hu({ text: e, spans: t = [], className: n = "" }) {
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
    let d = 0;
    const f = new Map();
    for (const p of l) {
      if (p.pos > d) {
        const h = e.substring(d, p.pos);
        const m = new Set();
        let _;
        let y;
        let g;

        f.forEach((E) => {
          m.add(E.type);

          if (E.type === "link" && E.url) {
            (_ = E.url);
          }

          if (E.type === "mention" &&
            (E.username || E.id)) {
            (y = E.username || E.id);
          }

          if (E.type === "hashtag" && E.tag) {
            (g = E.tag);
          }
        });

        u.push({ text: h, styles: m, url: _, mentionId: y, hashtag: g });
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
      const f = ob(l.url);
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
          je(f);
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
          je(f);
        },
        children: l_text,
      });
    }
    return i("span", { children: l_text }, u);
  };

  return i("span", { className: n, children: s.map((l, u) => c(l, u)) });
}
function sb(e, t, n) {
  const { isVisible: r, isRevealing: o, onRevealComplete: s } = n;
  const a = O([]);
  const c = O(null);
  const l = O(null);
  const u = O({ width: 0, height: 0 });
  const d = O(1);

  const f = N((_, y) => {
    const g = Math.random() * 80 + 60;
    return {
      x: Math.random() * _,
      y: Math.random() * y,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * g,
      maxLife: g,
    };
  }, []);

  const p = N(
    (_, y) => {
      const g = Math.floor((_ * y) / 600);
      const E = [];
      for (let S = 0; S < g; S++) {
        E.push(f(_, y));
      }
      a.current = E;
    },
    [f]
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
    const E = window.devicePixelRatio || 1;
    if (u.current.width !== g.width || u.current.height !== g.height) {
      (u.current = { width: g.width, height: g.height });
      (e_current.width = g.width * E);
      (e_current.height = g.height * E);
      (e_current.style.width = `${g.width}px`);
      (e_current.style.height = `${g.height}px`);
      const S = e_current.getContext("2d");

      if (S) {
        S.setTransform(E, 0, 0, E, 0, 0);
        (l.current = S);
      }

      p(g.width, g.height);
    }
  }, [e, t, p]);

  const m = N(() => {
    d.current = 1;
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
      const { width: g, height: E } = u.current;
      if (!l_current || g === 0 || E === 0) {
        c.current = requestAnimationFrame(_);
        return;
      }
      if (o && ((d.current -= 0.05), d.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, g, E);

      a.current.forEach((S, I) => {
        (S.x += S.speedX);
        (S.y += S.speedY);
        S.life--;

        if (S.x < 0) {
          (S.x = g);
        }

        if (S.x > g) {
          (S.x = 0);
        }

        if (S.y < 0) {
          (S.y = E);
        }

        if (S.y > E) {
          (S.y = 0);
        }

        if (S.life <= 0) {
          a.current[I] = f(g, E);
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
  }, [r, o, f, h, s]);

  return { resetOpacity: m };
}
const ib = "Dzbf";
const ab = "KlsF";
const cb = "JCCs";
const lb = "swMA";
const ub = "UyW7";
const Fn = { container: ib, hidden: ab, image: cb, revealing: lb, canvas: ub };
const ac = 5;
function cc({
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
  const [f, p] = L(false);
  const h = O(null);
  const m = O(null);
  const _ = O(null);
  const y = O(false);

  const { resetOpacity: g } = sb(h, m, {
    isVisible: f && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  F(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const k = new IntersectionObserver(
      (C) => {
        C.forEach((v) => {
          p(v.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    k.observe(m_current);

    return () => {
      k.disconnect();
    };
  }, []);

  const E = (R) => {
    (_.current = { x: R.clientX, y: R.clientY });
    (y.current = false);
  };

  const S = (R) => {
    if (!_.current) {
      return;
    }
    const k = Math.abs(R.clientX - _.current.x);
    const C = Math.abs(R.clientY - _.current.y);

    if ((k > ac || C > ac)) {
      (y.current = true);
    }
  };

  const I = (R) => {
    if (y.current) {
      (y.current = false);
      R.stopPropagation();
      return;
    }

    if (!c && !u && n) {
      R.stopPropagation();
      d(true);
      g();
    } else if (a) {
      a(R);
    }
  };

  const w = !c && n;
  const b = r && o ? { aspectRatio: `${r} / ${o}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${Fn.container} ${s} ${w ? Fn.hidden : ""} ${
          u ? Fn.revealing : ""
        }`,
        style: b,
        onPointerDown: E,
        onPointerMove: S,
        onClick: I,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: Fn.image,
            loading: "lazy",
            width: r,
            height: o,
            draggable: false,
            "data-post-media-image": true,
          }),
          w && i("canvas", { ref: h, className: Fn.canvas }),
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
function db(e) {
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
function Lo(e, t) {
  const r =
      (e
        ? [
            ...(e.matches("img") ? [e] : []),
            ...Array.from(e.querySelectorAll("img")),
          ]
        : []
      ).find((y) => {
        const g = y.getBoundingClientRect();
        return g.width > 0 && g.height > 0;
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
  const _ = Math.max(0, h - f);
  return m <= 0 || _ <= 0
    ? null
    : {
        left: d,
        top: f,
        width: m,
        height: _,
        hiddenLeft: d - o.left,
        hiddenTop: f - o.top,
        hiddenRight: o.right - p,
        hiddenBottom: o.bottom - h,
        borderRadius: db(r),
      };
}
const lc = { photo_open: 1, video_progress: 2 };
const fb = 2000/* 2e3 */;
const pb = 20;
const uc = "dwell_sid";
function hb() {
  try {
    let e = sessionStorage.getItem(uc);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(uc, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class mb {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = hb());
      window.setInterval(() => this.flush(), fb);
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
    const s = { t: lc.photo_open, v: t, ai: n };

    if (r !== undefined) {
      (s.mi = r);
    }

    if (o) {
      (s.s = Xr[o]);
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
      t: lc.video_progress,
      v: t,
      ai: n,
      pm: Math.round(r),
      dm: Math.round(o),
    };

    if (s) {
      (a.s = Xr[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= pb) {
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
const gb = new mb();
function _b(e, t) {
  return N(
    (n, r) => {
      if (!e || !n) {
        return;
      }
      const o = t === "post_page" || t === "link";
      gb.trackPhotoOpen(e, n, r, o ? t : undefined);
    },
    [e, t]
  );
}
const yb = "MC0v";
const vb = "G35C";
const Eb = "Qbqb";
const wb = "QJXh";
const Sb = "BmIE";
const bb = "NDCl";
const Cb = "dTQq";

const Oe = {
  mediaWrapper: yb,
  isFeed: vb,
  single: Eb,
  image: wb,
  singleVideo: Sb,
  media: bb,
  dragging: Cb,
};

const dc = ne(() => Z(
  () => import("./PostMediaVideo-BTl-29FP.js"),
  __vite__mapDeps([13, 14, 15])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const Ib = 5;
const Tb = 0.95;
const $o = 0.5;
const Nb = 650;
const Rb = 500;
const kb = 300;
function Ab(e, t, n, r) {
  const o = e / t;
  return o > n / r ? Math.min(e, n) : Math.min(t, r) * o;
}
function ti({ media: e, isFeed: t = false, postVs: n, source: r }) {
  const o = e?.filter(T => T.type === "image") ?? [];

  const s = e?.filter(T => T.type === "video") ?? [];

  const a = O(null);

  const c = uu(T => T.open);

  const u = Ct() ? kb : Rb;
  const d = _b(n, r);
  const f = O(false);
  const p = O(0);
  const h = O(0);
  const m = O(false);
  const _ = O(0);
  const y = O(0);
  const g = O(0);
  const E = O(null);

  const S = () => {
    if (E.current) {
      cancelAnimationFrame(E.current);
      (E.current = null);
    }
  };

  const I = () => {
    const a_current = a.current;
    if (a_current) {
      (g.current *= Tb);

      if (Math.abs(g.current) < $o) {
        S();
        return;
      }

      (a_current.scrollLeft += g.current);
      (E.current = requestAnimationFrame(I));
    }
  };

  const w = (T) => {
    const a_current = a.current;

    if (a_current && o.length + s.length > 1) {
      S();
      (f.current = true);
      a_current.classList.add(Oe.dragging);
      (p.current = T.clientX);
      (_.current = T.clientX);
      (y.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (g.current = 0);
      T.preventDefault();
    }
  };

  const b = (T) => {
    if (!f.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const V = Date.now();
    const ae = T.clientX - p.current;
    const de = T.clientX - _.current;
    const he = V - y.current;

    if (Math.abs(ae) > Ib) {
      (m.current = true);
    }

    if (he > 0) {
      (g.current = (-de / he) * 16);
    }

    (_.current = T.clientX);
    (y.current = V);
    (a_current.scrollLeft = h.current - ae);
  };

  const R = () => {
    if (f.current && Math.abs(g.current) > $o) {
      I();
    }

    (f.current = false);
    a.current?.classList.remove(Oe.dragging);
  };

  const k = () => {
    if (f.current) {
      Math.abs(g.current) > $o && I();
      (f.current = false);
      a.current?.classList.remove(Oe.dragging);
    }
  };

  F(
    () => () => {
      S();
      a.current?.classList.remove(Oe.dragging);
    },
    []
  );

  const C = (T, P) => {
    if (m.current) {
      (m.current = false);
      P.stopPropagation();
      return;
    }
    const o_T = o[T];

    if (o_T) {
      d(o_T.id, T);
    }

    const ae = P.currentTarget ?? null;
    const de = Lo(ae, a.current);

    const he = (ie) => {
      const a_current = a.current;
      if (!a_current) {
        return ie !== T || !ae?.isConnected ? null : Lo(ae, null);
      }
      const te = a_current.querySelectorAll("[data-post-media-image]")[ie];
      return te
        ? (te.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          Lo(te, a_current))
        : null;
    };

    c(
      o.map(ie => ({
        id: ie.id,
        url: ie.url,
        width: ie.width || 800,
        height: ie.height || 600
      })),
      T,
      de,
      he
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
              width: `${Math.round(Ab(T.width, T.height, Nb, u))}px`,
              aspectRatio: `${T.width} / ${T.height}`,
            }
          : undefined;

      return i("div", {
        className: `${Oe.mediaWrapper} ${t ? Oe.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: Oe.single,
          style: P,
          onClick: (V) => {
            V.stopPropagation();
            C(0, V);
          },
          children: i(
            cc,
            {
              src: T.url,
              spoiler: T.spoiler,
              width: T.width,
              height: T.height,
              className: Oe.image,
              onClick: (V) => {
                V.stopPropagation();
                C(0, V);
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
        className: `${Oe.mediaWrapper} ${t ? Oe.isFeed : ""}`,
        "data-count": 1,
        onClick: P => P.stopPropagation(),
        children: i("div", {
          className: Oe.singleVideo,
          children: i(Ie, {
            fallback: null,
            children: i(
              dc,
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
    className: `${Oe.mediaWrapper} ${t ? Oe.isFeed : ""}`,
    "data-count": A,
    children: i("div", {
      ref: a,
      className: `${Oe.media} ${t ? Oe.isFeed : ""}`,
      "data-count": A,
      onClick: v,
      onMouseDown: w,
      onMouseMove: b,
      onMouseUp: R,
      onMouseLeave: k,
      children: [
        s.map(T => i(
          Ie,
          {
            fallback: null,
            children: i(dc, {
              src: T.url,
              spoiler: T.spoiler,
              width: T.width,
              height: T.height,
              duration: T.duration,
              className: Oe.image,
              postVs: n,
              source: r,
              attachmentId: T.id,
            }),
          },
          T.id
        )
        ),
        o.map((T, P) => i(
          cc,
          {
            src: T.url,
            spoiler: T.spoiler,
            width: T.width,
            height: T.height,
            className: Oe.image,
            onClick: V => C(P, V),
          },
          T.id
        )
        ),
      ],
    }),
  });
}
const Vu = 0.5;
const Ob = 250;
const Pb = 1000/* 1e3 */;
const Lb = 50;
const $b = [0, Vu, 1];
const Jt = new Set();
const Ur = new WeakMap();
const Zt = new Map();
const Qt = new Map();
const Zr = new Set();
const Tr = new Set();
let xo = null;
let yn = null;
function xb(e) {
  if (Zr.size !== 0) {
    Tr.add(e);

    xo === null &&
      (xo = setTimeout(() => {
      (xo = null);

      if (Tr.size === 0) {
        return;
      }

      const t = Array.from(Tr);
      Tr.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const r of Zr) {
        r(n);
      }
    }, Lb));
  }
}
function Mb() {
  return (yn || (typeof IntersectionObserver === "undefined" ? null : ((yn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Ur.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const r = t.intersectionRatio >= Vu;
            for (const o of n) {
              if (r) {
                const s = Qt.get(o);
                if (s !== undefined) {
                  clearTimeout(s);
                  Qt.delete(o);
                  continue;
                }
                if (Jt.has(o) || Zt.has(o)) {
                  continue;
                }
                const a = setTimeout(() => {
                  Zt.delete(o);
                  Jt.add(o);
                  xb(o);
                }, Ob);
                Zt.set(o, a);
              } else {
                const s = Zt.get(o);

                if (s !== undefined) {
                  clearTimeout(s);
                  Zt.delete(o);
                }

                if (!Jt.has(o) || Qt.has(o)) {
                  continue;
                }

                const a = setTimeout(() => {
                  Qt.delete(o);
                  Jt.delete(o);
                }, Pb);
                Qt.set(o, a);
              }
            }
          }
        },
        { threshold: $b }
      )), yn)));
}

const Qr = {
    observe(e, t) {
      const n = Mb();
      if (!n) {
        return;
      }
      const r = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (r.length !== 0) {
        Ur.set(e, r);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!yn) {
        return;
      }
      const t = Ur.get(e);
      yn.unobserve(e);
      Ur.delete(e);

      if (!!t) {
        for (const n of t) {
          const r = Zt.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            Zt.delete(n);
          }

          const o = Qt.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            Qt.delete(n);
          }

          Jt.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(Jt);
    },
    size() {
      return Jt.size;
    },
    onAppear(e) {
      Zr.add(e);

      return () => {
        Zr.delete(e);
      };
    },
  };

const Db = "qX87";
const Ub = "bZaf";
const Fb = "zzvf";
const Mo = { hint: Db, multiline: Ub, arrow: Fb };
function Fr({ text: e, children: t, className: n, multiline: r }) {
  const o = O(null);
  const [s, a] = L(null);

  const c = N(() => {
    if (!o.current) {
      return;
    }
    const d = o.current.getBoundingClientRect();
    a({ x: d.left + d.width / 2, y: d.top });
  }, []);

  const l = N(() => {
    a(null);
  }, []);

  const u = N(
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

  F(() => {
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
        $(
          i("div", {
            className: `${Mo.hint} ${r ? Mo.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: Mo.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const Bb = "NNka";
const Hb = "jH6i";
const Vb = "d9jQ";
const Wb = "ImRH";
const jb = "pxLe";
const zb = "JhTK";
const qb = "l2Wl";
const Gb = "idaf";

const Ot = {
  header: Bb,
  headerMain: Hb,
  moreDropdown: Vb,
  pinnedBadge: Wb,
  authorInfo: jb,
  authorLink: zb,
  time: qb,
  edited: Gb,
};

function Yb({
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
  const p = mu(t);

  const h = Ee(E => E.profile?.id);

  const m = e.id === h;
  const _ = 2880 * 60 * 1000/* 1e3 */;
  const y = m && Date.now() - new Date(t).getTime() < _;

  const g = Se(() => {
    const E = [];

    E.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(gu, { size: 16 }),
      onClick: () => f?.(r),
    });

    if (y) {
      E.push({
        id: "edit",
        label: "Редактировать",
        icon: i(vu, { size: 16 }),
        onClick: () => l?.(r),
      });
    }

    if (s) {
      E.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: i(Ba, { size: 16 }),
        onClick: () => d?.(r),
      });
    }

    if ((m || s)) {
      E.push({
        id: "delete",
        label: "Удалить",
        icon: i(Nu, { size: 16 }),
        danger: true,
        onClick: () => u?.(r),
      });
    }

    if (!m) {
      E.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(wu, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return E;
  }, [m, y, s, a, r, l, u, d, c, f]);

  return i("header", {
    className: Ot.header,
    children: [
      a &&
        i("div", {
          className: Ot.pinnedBadge,
          children: [
            i(Ba, { size: 14 }),
            i("span", { children: "Закреплённый пост" }),
          ],
        }),
      i("div", {
        className: Ot.headerMain,
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
            className: Ot.authorInfo,
            children: [
              i("a", {
                href: `/@${e.username}`,
                className: Ot.authorLink,
                children: i(fr, {
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
                    i(Fr, {
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
          i(Bu, {
            trigger: i(bu, { size: 18 }),
            items: g,
            position: "bottom-right",
            className: Ot.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const Xb = "XFmy";
const Kb = "lYxe";
const Zb = "wEmP";
const Qb = "Diwl";
const Jb = "Xr3Y";
const e1 = "IiXY";
const t1 = "TZ0I";
const n1 = "JAu3";
const r1 = "KRQR";
const o1 = "BKZd";
const s1 = "yaWs";
const i1 = "qs9S";
const a1 = "UZky";
const c1 = "ruHR";
const l1 = "Gl2k";
const u1 = "QGxE";
const d1 = "DMim";
const f1 = "KNeQ";

const Ce = {
  actions: Xb,
  compact: Kb,
  action: Zb,
  views: Qb,
  flush: Jb,
  actionsLeft: e1,
  disabled: t1,
  liked: n1,
  unliked: r1,
  reposted: o1,
  noAnimation: s1,
  reactionWrapper: i1,
  actionsRight: a1,
  captured: c1,
  capturedEmoji: l1,
  capturedText: u1,
  capturedMobile: d1,
  capturedSolo: f1,
};

function Wu({
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
  const _ = O(false);
  const y = f ? 17 : 20;
  return i("footer", {
    className: `${Ce.actions} ${f ? Ce.compact : ""} ${h ? Ce.flush : ""}`,
    children: [
      i("div", {
        className: Ce.actionsLeft,
        children: [
          i("div", {
            className: Ce.reactionWrapper,
            onClick: g => g.stopPropagation(),
            children: i("button", {
              className: `${Ce.action} ${e ? Ce.liked : ""} ${
                _.current && !e ? Ce.unliked : ""
              } ${!_.current && e ? Ce.noAnimation : ""}`,
              onClick: (g) => {
                g.stopPropagation();
                (_.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                i(
                  qs,
                  { filled: e, size: y },
                  m ? `liked-${n}` : e ? "liked" : "not-liked"
                ),
                i(jn, { value: n }),
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
            children: [i(yu, { size: y }), i(jn, { value: o })],
          }),
          i("button", {
            className: `${Ce.action} ${t ? Ce.reposted : ""} ${
              d ? Ce.disabled : ""
            }`,
            onClick: (g) => {
              g.stopPropagation();

              if (!d) {
                l();
              }
            },
            disabled: d,
            "aria-label": "Репост",
            children: [i(Xs, { size: y }), i(jn, { value: r })],
          }),
        ],
      }),
      i("div", {
        className: Ce.actionsRight,
        children: [
          a &&
            (p
              ? i(Fr, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ce.capturedSolo,
                  children: i("span", {
                    className: Ce.capturedEmoji,
                    children: a,
                  }),
                })
              : i(Re, {
                  children: [
                    i(Fr, {
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
                    i(Fr, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: Ce.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: Ce.views,
            children: [i(wy, { size: y }), i(jn, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const p1 = ne(() => Z(() => import("./index-GHe7oXQU.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function ju(e, t) {
  const { openModal: n, closeModal: r, onDelete: o } = t;
  const s = Ct();

  const a = J(v => v.deletePost);

  const c = J(v => v.updatePostLike);

  const l = J(v => v.beginLikeMutation);

  const u = J(v => v.endLikeMutation);

  const d = J(v => v.updatePollVote);

  const f = J(v => v.updatePollData);

  const p = Js(e);
  const h = p.myReaction !== null;
  const p_likesTotal = p.likesTotal;

  const _ = Se(() => qu(e.attachments), [e.attachments]);

  const y = N(async () => {
    const v = h;
    const A = v ? -1 : 1;
    c(e.id, v ? null : "love", A);
    l(e.id);
    try {
      const T = v ? await $e.unlikePost(e.id) : await $e.likePost(e.id);
      u(e.id, T?.likesCount);
    } catch (T) {
      c(e.id, v ? "love" : null, -A);
      u(e.id);
      console.error("Failed to toggle like:", T);
    }
  }, [e.id, h, c, l, u]);

  const g = N(() => {
    if (!h) {
      y();
    }
  }, [h, y]);

  const E = N(
    (v) => {
      const A = e.author.username ?? e.author.id;
      const T = `${window.location.origin}/@${A}/post/${v}`;
      navigator.clipboard.writeText(T);
      vt.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const S = N(
    (v) => {
      n(i(p1, { targetType: "post", targetId: v, onClose: r }));
    },
    [n, r]
  );

  const I = N(
    (v) => {
      n(
        i(lI, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const w = N(
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

  const b = N(() => {
    if (s) {
      n(i(YC, { postId: e.id, onClose: r }));
    } else {
      const v = e.author.username ?? e.author.id;
      je(`/@${v}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, r]);

  const R = N(() => {
    n(i(vI, { post: e, onClose: r }));
  }, [n, r, e]);

  const k = N(
    async (v) => {
      const A = _?.myVote ?? null;
      d(e.id, v, A);
      try {
        const T = await $e.votePoll(e.id, [v]);
        if (T) {
          f(e.id, T);
          return T;
        }
      } catch (T) {
        console.error("[Poll] Failed to vote:", T);

        if (A) {
          d(e.id, A, v);
        }
      }
      return null;
    },
    [e.id, _?.myVote, d, f]
  );

  const C = N(
    async (v) => {
      try {
        const A = await $e.votePoll(e.id, v);
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
    handleLike: y,
    handleDoubleTap: g,
    handleComment: b,
    handleRepost: R,
    handleReport: S,
    handleEdit: I,
    handleDelete: w,
    handleCopyLink: E,
    handlePollVote: k,
    handlePollVoteMultiple: C,
  };
}
function zu(e) {
  const t = N(() => {
      J.getState().updatePostLike(e, "love", 1);
    }, [e]);

  const n = N(() => {
    const { postStatsCache: o, applyStatsUpdates: s } = J.getState();
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
    J.getState().updatePostReposted(e, true, 1);
  }, [e]);

  return { handleLike: t, handleComment: n, handleRepost: r };
}
const h1 = "s5Mc";
const m1 = "cqb6";
const g1 = "JkaK";
const _1 = "y39P";
const y1 = "UIbn";
const v1 = "a18F";
const E1 = "Xs0m";
const w1 = "l7wo";
const S1 = "OGOV";
const b1 = "GaFG";
const C1 = "m3lH";
const I1 = "dn3S";
const T1 = "MRDx";
const N1 = "cfW0";
const R1 = "z2ya";

const Ue = {
  post: h1,
  postInner: m1,
  isFeed: g1,
  avatarLink: _1,
  postContent: y1,
  postBody: v1,
  textWrapper: E1,
  text: w1,
  collapsed: S1,
  expandButton: b1,
  originalPost: C1,
  originalPostHeader: I1,
  originalPostTime: T1,
  originalPostText: N1,
  originalPostMedia: R1,
};

function k1(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function A1({ attachments: e, postVs: t, source: n }) {
  const r = Se(() => Jr(e), [e]);
  return r.length === 0
    ? null
    : i("div", {
        className: Ue.originalPostMedia,
        children: i(ti, { media: r, postVs: t, source: n }),
      });
}
function O1({ originalPost: e, source: t, showcase: n = false }) {
  const r = k1(e.createdAt);
  const { openModal: o, closeModal: s } = dn();

  const {
    liked: a,
    totalLikes: c,
    handleLike: l,
    handleComment: u,
    handleRepost: d,
  } = ju(e, { openModal: o, closeModal: s });

  const { handleLike: f, handleComment: p, handleRepost: h } = zu(e.id);
  const m = Js(e);

  const _ = N(
    (y) => {
      y.stopPropagation();

      if (n) {
        return;
      }

      const g = e.author.username ?? e.author.id;
      je(`/@${g}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id, n]
  );

  return i("div", {
    className: Ue.originalPost,
    onClick: _,
    children: [
      i("div", {
        className: Ue.originalPostHeader,
        children: [
          i(Xs, { size: 14 }),
          i(nt, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          i(fr, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          i("span", { className: Ue.originalPostTime, children: r }),
        ],
      }),
      e.text && i("div", { className: Ue.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        i(A1, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(Wu, {
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
const P1 = ne(() => Z(() => import("./index-BjVfyt_o.js"), __vite__mapDeps([19, 20])).then(
  e => ({
    default: e.Poll
  })
)
);
function L1(e) {
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
function Jr(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function qu(e) {
  return e.find(t => t.type === "poll");
}
const $1 = 300;
const x1 = 500;

const M1 = co(
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
    const m = Ct();
    const { openModal: _, closeModal: y } = dn();

    const g = J(pe => pe.setCurrentPost);

    const E = J(pe => pe.seedPostStats);

    const S = J(pe => pe.posts.find(He => He.id === t.id));

    const I = Ee(pe => pe.profile);

    F(() => {
      E(t);
    }, [t, E]);
    const w = Js(t);
    const { isFollowing: b, follow: R, unfollow: k } = Qy(t.author.id);
    const C = h && I?.id !== t.author.id ? b : undefined;

    const {
      liked: v,
      totalLikes: A,
      handleLike: T,
      handleDoubleTap: P,
      handleComment: V,
      handleRepost: ae,
      handleReport: de,
      handleEdit: he,
      handleDelete: ie,
      handleCopyLink: q,
      handlePollVote: te,
      handlePollVoteMultiple: oe,
    } = ju(t, { openModal: _, closeModal: y, onDelete: p });

    const { handleLike: W, handleComment: _e, handleRepost: ge } = zu(t.id);

    const $ = N(() => {
      if (C !== undefined) {
        if (C) {
          _(
                  i(Uv, {
                    displayName: t.author.displayName,
                    onConfirm: k,
                    onClose: y,
                  })
                );
        } else {
          R();
        }
      }
    }, [C, t.author.displayName, R, k, _, y]);

    const U = O(null);
    const j = O(null);
    const ee = O(null);
    const [z, G] = L($1);
    const [fe, Ae] = L(0);
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

    const se = N(
        (pe) => {
          if (pe &&
            h) {
            ee.current && cancelAnimationFrame(ee.current);

            (ee.current = requestAnimationFrame(() => {
              (ee.current = null);
              Ae(pe.scrollHeight);
            }));
          }

          if (j) {
            (j.current = pe);
          }
        },
        [h]
      );

    const Vt = N((pe) => {
      pe.stopPropagation();

      G(He => He + x1);
    }, []);

    oE(t.id, U, c, l, t.vs);
    const ht = t.originalPost?.id;
    F(() => {
      const U_current = U.current;
      if (!U_current) {
        return;
      }
      const He = ht ? [t.id, ht] : t.id;
      Qr.observe(U_current, He);

      return () => Qr.unobserve(U_current);
    }, [t.id, ht]);
    const fn = O(null);
    const Pn = O(0);

    const be = N((pe) => {
      fn.current = pe.target;
    }, []);

    const mt = N(() => {
      g(S ?? t);
      const He = t.author.username ?? t.author.id;
      je(`/@${He}/post/${t.id}`);
    }, [t, S, g]);

    const Ju = N(
      (pe) => {
        const pe_target = pe.target;
        if (pe_target.closest("button") ||
        pe_target.closest("a") ||
        pe_target.closest("video") ||
        pe_target.closest("img")) {
          return;
        }
        if (m) {
          const ii = Date.now();
          if (ii - Pn.current < 300) {
            (Pn.current = 0);
            P();
            return;
          }
          Pn.current = ii;
          return;
        }
        if (fn.current !== pe_target) {
          fn.current = null;
          return;
        }
        fn.current = null;
        const si = window.getSelection();

        if (!si || si.toString().length <= 0) {
          mt();
        }
      },
      [m, P, mt]
    );

    const ed = Se(() => L1(t.author), [t.author]);

    const ri = Se(() => Jr(t.attachments), [t.attachments]);

    const Ze = Se(() => qu(t.attachments), [t.attachments]);

    const oi = i("div", {
      className: `${Ue.postInner} ${h ? Ue.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: Ue.avatarLink,
            children: i(nt, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: C,
              onFollowBadgeClick: $,
            }),
          }),
        i("div", {
          className: Ue.postContent,
          children: [
            i(Yb, {
              author: ed,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: o,
              isPinned: s,
              onReport: de,
              onEdit: d ?? he,
              onDelete: ie,
              onPin: f,
              onCopyLink: q,
            }),
            i("div", {
              className: Ue.postBody,
              children: [
                t.text &&
                  i("div", {
                    className: Ue.textWrapper,
                    children: [
                      i("div", {
                        ref: se,
                        className: `${Ue.text} ${Te ? Ue.collapsed : ""}`,
                        style: h && Te ? { maxHeight: `${z}px` } : undefined,
                        children: i(Hu, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        Te &&
                        i("button", {
                          type: "button",
                          className: Ue.expandButton,
                          onClick: Vt,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                ri.length > 0 &&
                  i(ti, { media: ri, isFeed: h, postVs: t.vs, source: c }),
                Ze &&
                  i(Ie, {
                    fallback: null,
                    children: i(P1, {
                      title: Ze.question,
                      options: Ze.options.map(pe => ({
                        id: pe.id,
                        text: pe.text,
                        votes: pe.votes ?? 0
                      })),
                      totalVotes: Ze.totalVotes ?? 0,
                      voted:
                        (Ze.myVotes ?? []).length > 0 ||
                        (Ze.myVote !== undefined && Ze.myVote !== null),
                      selectedOptionId: Ze.myVote,
                      selectedOptionIds: Ze.myVotes ?? [],
                      multipleChoice: Ze.multipleChoice ?? false,
                      onVote: te,
                      onVoteMultiple: oe,
                      disabled: Ze.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  i(O1, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                i(Wu, {
                  compact: u,
                  emojiOnly: u,
                  flush: u,
                  infiniteLike: u,
                  liked: v,
                  reposted: w.reposted,
                  likesCount: A,
                  repostsCount: w.repostsCount,
                  commentsCount: w.commentsCount,
                  viewsCount: w.viewsCount,
                  dominantEmoji: w.dominantEmoji,
                  onLike: u ? W : T,
                  onRepost: u ? ge : ae,
                  onComment: u ? _e : V,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? i("article", {
          ref: U,
          className: `${Ue.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: be,
          onClick: Ju,
          children: oi,
        })
      : i("div", { ref: U, children: oi });
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

const D1 = "CS52";
const U1 = "xfuP";
const F1 = "KIMK";
const B1 = "GpOJ";
const H1 = "ynnp";
const V1 = "pO9o";
const W1 = "kCAc";
const j1 = "Tpxl";
const z1 = "R4gZ";
const q1 = "gsyX";
const G1 = "uOCN";
const Y1 = "Z4G8";
const X1 = "Wym8";
const K1 = "EHAB";
const Z1 = "LYSO";
const Q1 = "VPfZ";
const J1 = "IEdw";
const eC = "CBX6";
const tC = "Kjwi";
const nC = "wNmC";
const rC = "XJe5";
const oC = "nwER";
const sC = "j4WA";
const iC = "aMWx";

const le = {
  commentWrapper: D1,
  threadItem: U1,
  avatarWrapper: F1,
  threadLine: B1,
  commentBody: H1,
  showMoreBtn: V1,
  avatarPlaceholder: W1,
  comment: j1,
  small: z1,
  commentTime: q1,
  commentText: G1,
  commentActions: Y1,
  commentContent: X1,
  avatarLink: K1,
  authorLink: Z1,
  commentHeader: Q1,
  moreButton: J1,
  commentHeaderLeft: eC,
  replyMention: tC,
  commentMedia: nC,
  reactionWrapper: rC,
  commentAction: oC,
  liked: sC,
  replyButton: iC,
};

const aC = ne(() => Z(() => import("./index-BbKHTh5_.js"), __vite__mapDeps([21, 11, 22])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const cC = co((
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
    replyTo: _,
    hideAvatar: y = false,
    isWallOwner: g = false,
  }
) => {
  const E = mu(a);

  const S = Ee(C => C.profile?.id);

  const I = t.id === S;
  const w = I || g;
  const b = u === "xs";

  const R = Se(() => {
    const C = [];

    if (I &&
      h) {
      C.push({
        id: "edit",
        label: "Редактировать",
        icon: i(vu, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (w &&
      m) {
      C.push({
        id: "delete",
        label: "Удалить",
        icon: i(Nu, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!I) {
      C.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(wu, { size: 16 }),
        danger: true,
        onClick: () => p(n),
      });
    }

    return C;
  }, [I, w, n, h, m, p]);

  const k = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${le.comment} ${b ? le.small : ""}`,
    children: [
      !y &&
        i("a", {
          href: k,
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
                    href: k,
                    className: le.authorLink,
                    children: i(fr, {
                      name: t.displayName,
                      verified: t.isVerified,
                      hasNuksta: t.hasNuksta,
                      pin: t.pin,
                      size: u,
                    }),
                  }),
                  i("span", { className: le.commentTime, children: E }),
                ],
              }),
              i(Bu, {
                trigger: i(bu, { size: b ? 14 : 16 }),
                items: R,
                position: "bottom-right",
                className: le.moreButton,
              }),
            ],
          }),
          (_ || r) &&
            i("div", {
              className: le.commentText,
              children: [
                _ &&
                  i(Re, {
                    children: [
                      i("a", {
                        href: `/@${_.username}`,
                        className: le.replyMention,
                        children: ["@", _.displayName],
                      }),
                      ", ",
                    ],
                  }),
                r && i(Hu, { text: r, spans: o }),
              ],
            }),
          Jr(s).length > 0 &&
            i("div", {
              className: le.commentMedia,
              children: i(ti, { media: Jr(s) }),
            }),
          s
            .filter(C => C.type === "audio")
            .map(C => i(
            Ie,
            {
              fallback: null,
              children: i(aC, { src: C.url, duration: C.duration }),
            },
            C.id
          )
            ),
          i("div", {
            className: le.commentActions,
            children: [
              i("button", {
                className: le.replyButton,
                onClick: f,
                children: "Ответить",
              }),
              i("div", {
                className: le.reactionWrapper,
                children: i("button", {
                  className: `${le.commentAction} ${l ? le.liked : ""}`,
                  onClick: () => d(),
                  children: [
                    i(qs, { size: 14, filled: l }),
                    i(jn, { value: c }),
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

const Gu = co((
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
    isWallOwner: _ = false,
  }
) => {
  const y = o?.commentId === t.id;

  const g = {
    id: t.author.id,
    username: t.author.username,
    avatar: t.author.avatar ?? "",
    displayName: t.author.displayName,
    isVerified: t.author.isVerified,
    pin: t.author.pin,
  };

  const E = t.previewReplies ?? [];
  const S = m === t.id;
  const I = t.stats.replies > E.length;

  const w = [
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
    className: `${le.commentWrapper} ${S ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      w.map((b, R) => {
        const C = !(R === w.length - 1 && !y && !I);
        const v = m === b.data.id;
        return i(
          "div",
          {
            "data-comment-id": b.data.id,
            className: `${le.threadItem} ${v ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: le.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${b.author.username ?? b.author.id}`,
                    className: le.avatarLink,
                    children: i(nt, {
                      src: b.author.avatar,
                      alt: b.author.displayName,
                      size: "sm",
                    }),
                  }),
                  C && i("div", { className: le.threadLine }),
                ],
              }),
              i("div", {
                className: le.commentBody,
                children: i(cC, {
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
                  isWallOwner: _,
                }),
              }),
            ],
          },
          b.data.id
        );
      }),
      y &&
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
              children: i(Fu, {
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
          children: ["Показать ещё ", t.stats.replies - E.length, " ответов"],
        }),
    ],
  });
});

function lC({
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
  const f = O(0);

  if (f.current !== e) {
    (f.current = e);
    d.current.clear();
  }

  const p = N(
      (w) => {
        const b = r(w);
        return u.current.get(b) ?? t;
      },
      [r, t]
    );

  const h = N(
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
        const v = d.current.get(C);
        if (v !== undefined) {
          (R = C);
          (k = v);
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

  const m = Se(() => e === 0 ? 0 : h(e - 1) + p(e - 1), [e, h, p]);

  const { startIndex: _, endIndex: y } = Se(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let w = 0;
    let b = e - 1;

    while (w < b) {
      const v = Math.floor((w + b) / 2);
      const A = h(v);
      const T = p(v);

      if (A + T < s) {
        (w = v + 1);
      } else {
        (b = v);
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

  const g = Se(() => {
    if (e === 0) {
      return [];
    }
    const w = [];
    for (let b = _; b <= y; b++) {
      w.push({ index: b, key: r(b), start: h(b), size: p(b) });
    }
    return w;
  }, [_, y, r, h, p, e]);

  const E = N(
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

  const S = N(() => {
    if (o.current) {
      a(o.current.scrollTop);
    }
  }, []);

  const I = N(
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

  F(() => {
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

  F(
    () => () => {
      if (o.current) {
        o.current.removeEventListener("scroll", S);
      }
    },
    [S]
  );

  return { containerRef: I, virtualItems: g, totalSize: m, measureElement: E };
}
const uC = "wFks";
const dC = "O2Qc";
const fC = "gkUp";
const pC = "VKsf";
const hC = "ATFw";
const mC = "Juxe";
const gC = "vkAw";
const _C = "iO74";
const yC = "nTRB";
const vC = "WKDT";
const EC = "W3tf";

const Qe = {
  comments: uC,
  sortWrapper: dC,
  sortSelect: fC,
  commentsList: pC,
  commentItem: hC,
  empty: mC,
  loadMoreSentinel: gC,
  virtualContainer: _C,
  virtualContent: yC,
  virtualItem: vC,
  inputWrapper: EC,
};

const wC = 120;
function SC({
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
  onReport: _,
  onEdit: y,
  onDelete: g,
}) {
  const E = O(false);

  const {
    containerRef: S,
    virtualItems: I,
    totalSize: w,
    measureElement: b,
  } = lC({
    itemCount: e.length,
    estimatedItemHeight: wC,
    overscan: 3,
    getItemKey: k => e[k]?.id ?? k,
  });

  F(() => {
    if (!t || n || I.length === 0) {
      E.current = false;
      return;
    }
    const k = I[I.length - 1]?.index ?? 0;
    const C = e.length - 5;

    if (k >= C && !E.current) {
      (E.current = true);
      r();
    }
  }, [I, e.length, t, n, r]);

  F(() => {
    if (!n) {
      (E.current = false);
    }
  }, [n]);

  const R = N(
    (k, C) => {
      b(k, C);
    },
    [b]
  );
  return i("div", {
    ref: S,
    className: Qe.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: Qe.virtualContent,
        style: { height: `${w}px` },
        children: I.map((k) => {
          const C = e[k.index];
          return C
            ? i(
                "div",
                {
                  ref: v => R(v, k.index),
                  className: Qe.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${k.start}px)`,
                  },
                  children: i(Gu, {
                    comment: C,
                    onLike: () => l(C.id),
                    onLikeReply: u,
                    replyingTo: o?.commentId === C.id ? o : null,
                    onStartReply: d,
                    onCancelReply: f,
                    onSubmitReply: p,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: _,
                    onEdit: y,
                    onDelete: g,
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
      n && i(ei, { variant: "medium" }),
    ],
  });
}
const bC = "XLhf";
const CC = "VcvF";
const IC = "bNDe";
const Do = { wrapper: bC, popup: CC, closing: IC };

const TC = ne(() => Z(() => import("./index-C-OxYsLf.js"), __vite__mapDeps([23, 24])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const fc = 280;
const pc = 380;
const Uo = 8;
const NC = 100;
const hc = 150;
const RC = 150;
function ni({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, o] = L(false);
  const [s, a] = L(false);
  const [c, l] = L(null);
  const u = O(null);
  const d = O(null);
  const f = O(null);
  const p = O(null);
  const h = O(null);
  const m = O(null);

  const _ = N(() => {
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
    const T = innerWidth - k.left;
    const k_right = k.right;
    const V = A >= pc + Uo ? "bottom" : "top";
    const ae = T >= fc || T > k_right ? "left" : "right";
    let de;
    let he;

    if (V === "top") {
      (de = k.top - pc - Uo);
    } else {
      (de = k.bottom + Uo);
    }

    if (ae === "left") {
      (he = k.left);
    } else {
      (he = k.right - fc);
    }

    l({
      top: de,
      left: he,
      transformOrigin: `${V === "top" ? "bottom" : "top"} ${
        ae === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const y = N(() => {
    if (!r && !s) {
      _();
      o(true);
    }
  }, [r, s, _]);

  const g = N(() => {
    if (r && !s) {
      a(true);

      (m.current = window.setTimeout(() => {
        o(false);
        a(false);
      }, RC));
    }
  }, [r, s]);

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

    if (!r) {
      (p.current = window.setTimeout(() => {
          y();
        }, NC));
    }
  };

  const S = () => {
    if (p.current) {
      clearTimeout(p.current);
      (p.current = null);
    }

    (h.current = window.setTimeout(() => {
        g();
      }, hc));
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

  const w = () => {
    h.current = window.setTimeout(() => {
      g();
    }, hc);
  };

  const b = (R) => {
    R.preventDefault();
  };

  return i("div", {
    ref: d,
    className: Do.wrapper,
    onMouseEnter: E,
    onMouseLeave: S,
    onMouseDown: b,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(_y, { size: n }),
      }),
      r &&
        c &&
        $(
          i("div", {
            ref: f,
            className: `${Do.popup} ${s ? Do.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: I,
            onMouseLeave: w,
            onMouseDown: b,
            children: i(Ie, {
              fallback: null,
              children: i(TC, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const kC = "rSz8";
const AC = "qcUh";
const OC = "Qouv";
const PC = "Ti15";
const LC = "G4lU";
const $C = "ZEFK";
const xC = "OZkX";
const MC = "ky1J";
const DC = "t4hL";
const UC = "sloU";
const FC = "REPd";
const BC = "XBqA";

const qe = {
  editCommentModal: kC,
  form: AC,
  header: OC,
  title: PC,
  content: LC,
  editor: $C,
  actions: xC,
  mediaButtons: MC,
  mediaButton: DC,
  submitGroup: UC,
  charCount: FC,
  error: BC,
};

const mc = 2000/* 2e3 */;
function HC({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = dn();

  const o = Mt(w => w.editComment);

  const s = Ee(w => w.profile);

  const a = Ct();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: f,
  } = lo(t, n);

  const [p, h] = L(false);
  const m = mc - c.length;
  const _ = m < 0;
  const y = c !== t;
  const g = JSON.stringify(l) !== JSON.stringify(n);
  const E = y || g;

  const S = N(
    (w) => {
      f(w.emoji);
    },
    [f]
  );

  const I = N(async () => {
    if (!(!c.trim() || _ || !E || p)) {
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
  }, [c, l, _, E, p, o, e, r]);

  return i(un, {
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
            i(fo, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Комментарий...",
              maxLength: mc,
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
                i(ni, { onEmojiSelect: S, buttonClassName: qe.mediaButton }),
            }),
            i("div", {
              className: qe.submitGroup,
              children: [
                _ &&
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
                  disabled: !c.trim() || _ || !E || p,
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
const VC = ne(() => Z(() => import("./index-GHe7oXQU.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function WC({
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
  const m = Ct() && f === "modal";
  const [_, y] = L(null);
  const [g, E] = L(null);
  const [S, I] = L(null);
  const [w, b] = L(null);
  const R = O(null);
  const { openModal: k } = dn();

  const C = Mt(W => W.highlightedCommentId);

  const v = Mt(W => W.clearHighlightedComment);

  const A = Mt(W => W.loadReplies);

  const T = Mt(W => W.deleteComment);

  const P = Mt(W => W.toggleCommentLike);

  H_({
    sentinelRef: R,
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
    if (!C) {
      return;
    }
    let W = false;
    const _e = [];

    const ge = ($) => {
      if (W) {
        return;
      }
      const U = document.querySelector(`[data-comment-id="${C}"]`);
      if (!U) {
        if ($ > 0) {
          _e.push(window.setTimeout(() => ge($ - 1), 150));
        } else {
          v();
        }

        return;
      }
      U.scrollIntoView({ behavior: "smooth", block: "center" });
      E(C);
      v();

      _e.push(window.setTimeout(() => E(null), 900));
    };

    ge(40);

    return () => {
      (W = true);

      _e.forEach($ => clearTimeout($));
    };
  }, [C, v]);

  const V = async (W, _e, ge) => {
    if (_) {
      await c({
          text: W,
          spans: _e,
          parentId: _.commentId,
          replyToUserId: _.userId,
          replyToInfo: {
            id: _.userId,
            username: _.username,
            displayName: _.displayName,
          },
          attachments: ge,
        });

      y(null);
    }
  };

  const ae = (W, _e, ge, $, U) => {
    y({ commentId: W, username: _e, displayName: ge, userId: $, replyId: U });
  };

  const de = () => {
    y(null);
  };

  const he = N(
    (W) => {
      P(W);
    },
    [P]
  );

  const ie = N(
    async (W) => {
      I(W);
      try {
        await A(W);
      } finally {
        I(null);
      }
    },
    [A]
  );

  const q = N((W) => {
    b(W);
  }, []);

  const te = N(
    (W) => {
      let _e = "";
      let ge = [];
      for (const $ of e) {
        if ($.id === W) {
          (_e = $.text);
          (ge = $.spans ?? []);
          break;
        }
        const U = $.previewReplies?.find(j => j.id === W);
        if (U) {
          (_e = U.text);
          (ge = U.spans ?? []);
          break;
        }
      }
      k(i(HC, { commentId: W, initialText: _e, initialSpans: ge }));
    },
    [e, k]
  );

  const oe = N(
    (W) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        T(W);
      }
    },
    [T]
  );

  return i("div", {
    className: Qe.comments,
    children: [
      i("div", {
        className: Qe.sortWrapper,
        children: i("select", {
          value: o,
          onChange: W => s(W.target.value),
          className: Qe.sortSelect,
          children: [
            i("option", { value: "new", children: "Новые" }),
            i("option", { value: "old", children: "Старые" }),
            i("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? i(ZE, { count: 5 })
        : e.length === 0
        ? i("div", { className: Qe.empty, children: "Нет комментариев" })
        : m
        ? i(SC, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: _,
            flashingCommentId: g,
            loadingRepliesId: S,
            isWallOwner: d,
            onLikeComment: a,
            onLikeReply: he,
            onStartReply: ae,
            onCancelReply: de,
            onSubmitReply: V,
            onVoiceSend: l,
            onLoadReplies: ie,
            onReport: q,
            onEdit: te,
            onDelete: oe,
          })
        : i("div", {
            className: Qe.commentsList,
            children: [
              e.map(W => i(
                "div",
                {
                  className: Qe.commentItem,
                  children: i(Gu, {
                    comment: W,
                    onLike: () => a(W.id),
                    onLikeReply: he,
                    replyingTo: _?.commentId === W.id ? _ : null,
                    onStartReply: ae,
                    onCancelReply: de,
                    onSubmitReply: V,
                    onVoiceSend: l,
                    onLoadReplies: ie,
                    onReport: q,
                    onEdit: te,
                    onDelete: oe,
                    isLoadingReplies: S === W.id,
                    flashingCommentId: g,
                    isWallOwner: d,
                  }),
                },
                W.id
              )
              ),
              r &&
                i("div", {
                  ref: R,
                  className: Qe.loadMoreSentinel,
                  children: n && i(ei, { variant: "medium" }),
                }),
            ],
          }),
      !p &&
        i("div", {
          className: Qe.inputWrapper,
          children: i(Fu, {
            onSubmit: (W, _e, ge) => c({ text: W, spans: _e, attachments: ge }),
            onVoiceSend: l,
          }),
        }),
      w &&
        i(Ie, {
          fallback: null,
          children: i(VC, {
            targetType: "comment",
            targetId: w,
            onClose: () => b(null),
          }),
        }),
    ],
  });
}
const jC = "kG05";
const zC = "k20W";
const qC = "hKC8";
const GC = "GH7r";
const Nr = { commentsModal: jC, header: zC, title: qC, content: GC };
function YC({ postId: e, onClose: t }) {
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
  } = Mt(
    rc(S => ({
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

  const { commentsSort: p, setCommentsSort: h } = Dr(
    rc(S => ({
      commentsSort: S.commentsSort,
      setCommentsSort: S.setCommentsSort
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
      (S) => {
        h(S);
        l(e);
      },
      [h, l, e]
    );

  const _ = N(() => {
    if (a && !s) {
      u(e);
    }
  }, [a, s, u, e]);

  const y = N(
    (S) => {
      d(S);
    },
    [d]
  );

  const g = N(
    async (S) => {
      await f(e, S);
    },
    [f, e]
  );

  const E = N(
    async (S) => {
      const I = `voice_${Date.now()}.webm`;
      const w = new File([S], I, { type: S.type || "audio/webm" });
      const b = await _n.uploadMedia(w);
      await f(e, { text: "", attachments: [{ mediaId: b.id }] });
    },
    [f, e]
  );

  return i(un, {
    frameless: true,
    onClose: t,
    className: Nr.commentsModal,
    children: [
      i("div", {
        className: Nr.header,
        children: i("span", { className: Nr.title, children: "Комментарии" }),
      }),
      i("div", {
        className: Nr.content,
        "data-comments-modal": true,
        children: i(WC, {
          comments: r,
          isLoading: o,
          isLoadingMore: s,
          hasMore: a,
          sort: p,
          onSortChange: m,
          onLikeComment: y,
          onAddComment: g,
          onVoiceSend: E,
          onLoadMore: _,
        }),
      }),
    ],
  });
}
const XC = ne(() => Z(() => import("./index-DkZUUn1q.js"), __vite__mapDeps([25, 26])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);
function Yu({
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
    } = lo();

  const [u, d] = L(false);
  const [f, p] = L(false);
  const [h, m] = L(false);
  const _ = O(0);
  const y = Ct();
  const E = Qs()?.subscription?.isActive ?? false;

  const {
    images: S,
    uploadingImages: I,
    isUploading: w,
    hasVideo: b,
    openFilePicker: R,
    removeImage: k,
    addImage: C,
    uploadFiles: v,
    clearAll: A,
    fileInputRef: T,
    handleFileChange: P,
  } = Du(10, E);

  const {
    isPollOpen: V,
    poll: ae,
    togglePoll: de,
    handlePollQuestionChange: he,
    handlePollOptionChange: ie,
    handleAddPollOption: q,
    handleRemovePollOption: te,
    handleMultipleChoiceToggle: oe,
    handleClosePoll: W,
    isPollValid: _e,
    getPollData: ge,
    resetPoll: $,
  } = QE();

  const U = wt.MAX_CHARS - r.length;
  const j = U < 0;
  const ee = V && _e();
  const z = S.length > 0 || I.length > 0;
  const G = r.trim().length > 0 || ee || z;
  const fe = E ? `${ms},${Gy}` : ms;

  const Ae = N(async () => {
    if (!(!G || j || w || f)) {
      p(true);
      try {
        const be = S.map(mt => ({
          mediaId: mt.mediaId,
          url: mt.url
        }));
        await e?.(r, o, be, ge());
        l();
        A();
        $();
      } catch {
      } finally {
        p(false);
      }
    }
  }, [G, j, w, f, r, o, S, ge, e, l, A, $]);

  const Te = N(
    (be) => {
      C(be);
    },
    [C]
  );

  const se = N(
    (be) => {
      c(be.emoji);
    },
    [c]
  );

  const Vt = N((be) => {
    be.preventDefault();
    be.stopPropagation();
    _.current++;

    if (be.dataTransfer?.types.includes("Files")) {
      m(true);
    }
  }, []);

  const ht = N((be) => {
    be.preventDefault();
    be.stopPropagation();
  }, []);

  const fn = N((be) => {
    be.preventDefault();
    be.stopPropagation();
    _.current--;

    if (_.current === 0) {
      m(false);
    }
  }, []);

  const Pn = N(
    (be) => {
      be.preventDefault();
      be.stopPropagation();
      (_.current = 0);
      m(false);
      const mt = be.dataTransfer?.files;

      if (mt && mt.length > 0) {
        v(Array.from(mt));
      }
    },
    [v]
  );

  return i("div", {
    className: `${Q.form} ${h ? Q.dragActive : ""}`,
    onDragEnter: Vt,
    onDragOver: ht,
    onDragLeave: fn,
    onDrop: Pn,
    children: [
      h &&
        i("div", {
          className: Q.dragOverlay,
          children: [
            i(Su, { size: 32 }),
            i("span", {
              children: E ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      i("div", {
        className: Q.whatsNew,
        children: i(fo, {
          ref: s,
          value: r,
          spans: o,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: Q.editor,
          minHeight: 40,
          maxHeight: wt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: v,
        }),
      }),
      i(Uu, { images: S, uploadingImages: I, onRemove: k }),
      i("input", {
        ref: T,
        type: "file",
        accept: fe,
        multiple: !b,
        onChange: P,
        style: { display: "none" },
      }),
      V &&
        i($w, {
          poll: ae,
          onQuestionChange: he,
          onOptionChange: ie,
          onAddOption: q,
          onRemoveOption: te,
          onMultipleChoiceToggle: oe,
          onClose: W,
        }),
      i("div", {
        className: Q.actions,
        children: [
          i("div", {
            className: Q.mediaButtons,
            children: [
              i("button", {
                className: Q.mediaButton,
                onClick: R,
                title: E ? "Добавить медиа" : "Добавить изображение",
                children: i(_u, {}),
              }),
              !y &&
                i(ni, { onEmojiSelect: se, buttonClassName: Q.mediaButton }),
              i("button", {
                className: Q.mediaButton,
                onClick: () => d(true),
                title: "Нарисовать",
                disabled: b,
                children: i(my, { size: 20 }),
              }),
              i("button", {
                className: `${Q.mediaButton} ${V ? Q.active : ""}`,
                onClick: de,
                title: "Добавить опрос",
                children: i(gy, {}),
              }),
            ],
          }),
          i("div", {
            className: Q.submitGroup,
            children: [
              j &&
                i("span", {
                  className: `${Q.charCount} ${Q.error}`,
                  children: U,
                }),
              i(ze, {
                size: "lg",
                disabled: !G || j || w || f,
                loading: f,
                onClick: Ae,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        i(Ie, {
          fallback: null,
          children: i(XC, {
            isOpen: u,
            onClose: () => d(false),
            onSave: Te,
            mode: "post",
          }),
        }),
    ],
  });
}
const KC = "H5mg";
const ZC = "Pyxk";
const gc = { createPostModal: KC, title: ZC };
function QC({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: r } = dn();

  const o = Ee(c => c.profile);

  const s = J(c => c.createPost);

  const a = async (c, l, u, d) => {
    if (!o) {
      return;
    }
    const f = e ?? o.id;
    await s({ wallOwnerId: f, text: c, spans: l, attachments: u, poll: d });
    await n?.();
    r();
  };

  return i(un, {
    frameless: true,
    onClose: r,
    className: gc.createPostModal,
    children: [
      i("h2", { className: gc.title, children: "Создать пост" }),
      i(Yu, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const JC = "nKzs";
const eI = "BoFr";
const tI = "Lvy8";
const nI = "rvyq";
const rI = "fjPg";
const oI = "CRt2";
const sI = "jFha";
const iI = "bdTF";
const aI = "giH7";
const cI = "DSTj";

const it = {
  editPostModal: JC,
  form: eI,
  whatsNew: tI,
  editor: nI,
  actions: rI,
  mediaButtons: oI,
  mediaButton: sI,
  submitGroup: iI,
  charCount: aI,
  error: cI,
};

const _c = 5000/* 5e3 */;
function lI({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = dn();

  const o = J(w => w.editPost);

  const s = Ee(w => w.profile);

  const a = Ct();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: f,
  } = lo(t, n);

  const [p, h] = L(false);
  const m = _c - c.length;
  const _ = m < 0;
  const y = c !== t;
  const g = JSON.stringify(l) !== JSON.stringify(n);
  const E = y || g;

  const S = N(
    (w) => {
      f(w.emoji);
    },
    [f]
  );

  const I = N(async () => {
    if (!(!c.trim() || _ || !E || p)) {
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
  }, [c, l, _, E, p, o, e, r]);

  return i(un, {
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
            i(fo, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Что нового?",
              maxLength: _c,
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
                i(ni, { onEmojiSelect: S, buttonClassName: it.mediaButton }),
            }),
            i("div", {
              className: it.submitGroup,
              children: [
                _ &&
                  i("span", {
                    className: `${it.charCount} ${it.error}`,
                    children: m,
                  }),
                i(ze, {
                  size: "lg",
                  disabled: !c.trim() || _ || !E,
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
const uI = "BRZg";
const dI = "eKZ9";
const fI = "tXPn";
const pI = "k4XP";
const hI = "ViIM";
const mI = "eDdw";
const gI = "SXDX";
const _I = "ZFOF";
const yI = "ufLk";

const _t = {
  repostModal: uI,
  content: dI,
  title: fI,
  inputSection: pI,
  textarea: hI,
  originalPost: mI,
  postHeader: gI,
  postText: _I,
  actions: yI,
};

function vI({ post: e, onClose: t, onSuccess: n }) {
  const [r, o] = L("");
  const [s, a] = L(false);

  const c = Ee(f => f.profile);

  const l = J(f => f.updatePostReposted);

  const u = J(f => f.prependPost);

  const d = async () => {
    a(true);
    try {
      const f = await $e.createRepost(e.id, r.trim() || undefined);
      l(e.id, true, e.reposted ? 0 : 1);
      u(f);

      if (c?.username) {
        $e.invalidateWallCache(c.username);
      }

      n?.();
      t();
    } catch (f) {
      console.error("Failed to create repost:", f);
    } finally {
      a(false);
    }
  };

  return i(un, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: _t.repostModal,
    children: i("div", {
      className: _t.content,
      children: [
        i("h2", { className: _t.title, children: "Репост" }),
        i("div", {
          className: _t.inputSection,
          children: [
            c && i(nt, { src: c.avatar, alt: c.displayName, size: "sm" }),
            i("textarea", {
              className: _t.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: f => o(f.target.value),
              rows: 3,
            }),
          ],
        }),
        i("div", {
          className: _t.originalPost,
          children: [
            i("div", {
              className: _t.postHeader,
              children: [
                i(nt, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                i(fr, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            i("p", { className: _t.postText, children: e.text }),
          ],
        }),
        i("div", {
          className: _t.actions,
          children: [
            i(ze, {
              variant: "secondary",
              onClick: (f) => {
                f.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            i(ze, {
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

const EI = () => {
  const e = Qs();
  const t = uo();
  const { initialize: n, disconnectSSE: r } = an();
  const o = hu();

  const s = js(v => v.fetchPortal);

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
      { id: "feed", label: "Лента", icon: Eu, href: "/" },
      { id: "shop", label: "Магаз", icon: Tu, href: "/shop" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: Cu,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: hs, href: a },
    ],
    [a]
  );

  const [l, u] = L({});
  const [d, f] = L(true);
  const p = O([]);
  const h = O(null);
  const [m] = dr();
  const { openModal: _ } = dn();

  const y = J(v => v.fetchFeed);

  const g = J(v => v.isRefreshing);

  const E = ku();
  const S = xu();

  const I = N(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      y(true);
    }
  }, [y]);

  const w = Se(() => {
    const v = m.url || "/";
    return Ks.some(A => v.startsWith(A));
  }, [m.url]);

  const b = Se(() => {
    const v = m.url || "/";
    return e?.username
      ? v === `/@${e.username}` || v.startsWith(`/@${e.username}/`)
      : false;
  }, [m.url, e?.username]);

  const R = O(null);

  const k = N((v, A = false) => {
    if (!A && R.current === v) {
      return;
    }
    R.current = v;
    const T = p.current[v];
    const h_current = h.current;
    if (T && h_current) {
      const V = parseFloat(getComputedStyle(h_current).paddingLeft) || 0;

      u({
        width: T.offsetWidth,
        transform: `translateX(${T.offsetLeft - V}px)`,
      });

      f(true);
    }
  }, []);

  F(() => {
    const v = m.url || "/";

    const A = c.findIndex(
      T => v === T.href ||
      v.startsWith(`${T.href}/`) ||
      (T.id === "profile" && b)
    );

    if (A === -1) {
      f(false);
    } else {
      k(A, true);
    }
  }, [m.url, c, b, k]);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }
    const A = h_current.querySelector(`.${De.active}`);
    if (A) {
      const T = p.current.indexOf(A);

      if (T !== -1) {
        (R.current = null);
        k(T);
      }
    }
  }, []);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }

    const A = () => {
        const P = h_current.querySelector(`.${De.active}`);
        if (P) {
          const V = p.current.indexOf(P);

          if (V !== -1) {
            k(V, true);
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
  }, [k]);

  const C = () => {
    _(i(QC, {}));
  };
  return w
    ? null
    : i("div", {
        className: De.mobileNavigationWrapper,
        children: [
          i("nav", {
            ref: h,
            className: De.navigation,
            children: [
              i("div", {
                className: `${De.indicator} ${d ? "" : De.indicatorHidden}`,
                style: l,
              }),
              c.map((v, A) => {
                const v_icon = v.icon;
                const P = v.id === "event";
                const V = P && o.active && !!o.url;
                const ae = m.url || "/";

                const he =
                  ae === v.href ||
                  ae.startsWith(`${v.href}/`) ||
                  (v.id === "profile" && b);

                return i(
                  "a",
                  {
                    href: V ? o.url : v.href,
                    target: V ? "_blank" : undefined,
                    rel: V ? "noopener noreferrer" : undefined,
                    ref: (ie) => {
                      (p.current[A] = ie);

                      if (ie && he) {
                        k(A);
                      }
                    },
                    className: `${De.navItem} ${he ? De.active : ""}`,
                    onClick: (ie) => {
                      if (he && v.id === "feed") {
                        ie.preventDefault();
                        I();
                      }
                    },
                    children: [
                      i("span", {
                        className: De.iconWrapper,
                        children: P
                          ? i("img", {
                              src: o.active
                                ? "/assets/portal/portal-active.gif"
                                : "/assets/portal/portal-inactive.png",
                              alt: "Ивент",
                              className: `${De.portalImage} ${
                                o.active ? De.portalImageActive : ""
                              }`,
                            })
                          : i(Re, {
                              children: [
                                v.id === "feed" && g ? i(Gs, {}) : i(v_icon, {}),
                                v.id === "notifications" &&
                                  E > 0 &&
                                  i("span", {
                                    className: De.badge,
                                    children: E > 99 ? "99+" : E,
                                  }),
                                v.id === "shop" &&
                                  S > 0 &&
                                  i("span", {
                                    className: De.badge,
                                    children: S,
                                  }),
                              ],
                            }),
                      }),
                      i("span", { className: De.label, children: v.label }),
                    ],
                  },
                  v.id
                );
              }),
            ],
          }),
          t &&
            i("button", {
              className: De.createButton,
              onClick: C,
              "aria-label": "Создать пост",
              children: i(Ys, {}),
            }),
        ],
      });
};

const wI = "Ida3";
const SI = "RBYm";
const bI = "JFYL";
const CI = "tgx4";
const Rr = { badge: wI, red: SI, green: bI, blue: CI };
function II({ type: e }) {
  const t =
    e === "like"
      ? Rr.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? Rr.green
      : Rr.blue;
  return i("div", {
    className: `${Rr.badge} ${t}`,
    children: [
      e === "follow" && i(Ys, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(yu, { size: 12, filled: true }),
      e === "like" && i(qs, { size: 12, filled: true }),
      e === "repost" && i(Xs, { size: 12 }),
    ],
  });
}
const TI = "u5xz";
const NI = "MEK1";
const RI = "U6hG";
const kI = "CT8f";
const AI = "xZmX";
const OI = "AIeE";
const PI = "u09O";
const LI = "wTTX";
const $I = "w08q";
const xI = "aCS8";
const MI = "sbkz";

const Ye = {
  container: TI,
  clearAllButton: NI,
  toastList: RI,
  toast: kI,
  toastLeft: AI,
  toastData: OI,
  title: PI,
  message: LI,
  dragging: $I,
  closeButton: xI,
  belowTabs: MI,
};

const DI = Cn(null);
function UI({ children: e }) {
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

  const a = jy();

  F(() => {
    if (a) {
      const c = HI(a.type);

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

      an.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return i(DI.Provider, {
    value: { toasts: t, addToast: r, removeToast: o, clearAll: s },
    children: [e, i(FI, { toasts: t, onRemove: o, onClearAll: s })],
  });
}
function FI({ toasts: e, onRemove: t, onClearAll: n }) {
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
          WI,
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
const BI = 80;
function HI(e) {
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
function VI(e) {
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
function WI({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const o = O(null);
  const [s, a] = L(0);
  const [c, l] = L(false);
  const [u, d] = L(false);
  const f = O(0);
  const p = O(false);

  const h = (w) => {
    (f.current = w.clientX);
    (p.current = false);
    l(true);
  };

  const m = N(
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

  const _ = N(() => {
    if (c) {
      l(false);

      if (Math.abs(s) > BI) {
        d(true);
        a(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!p.current) {
          const w = VI(e);

          if (w) {
            je(w);
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

  const y = (w) => {
    (f.current = w.touches[0].clientX);
    l(true);
  };

  const g = (w) => {
    if (!c) {
      return;
    }
    const b = w.touches[0].clientX - f.current;
    a(b);
  };

  const E = () => {
    _();
  };

  const S = u || r ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const I = r ? 400 : s;
  return i("div", {
    ref: o,
    className: `${Ye.toast} ${c ? Ye.dragging : ""}`,
    style: {
      transform: `translateX(${I}px)`,
      opacity: S,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: h,
    onTouchStart: y,
    onTouchMove: g,
    onTouchEnd: E,
    children: [
      i("div", {
        className: Ye.toastLeft,
        children: [
          i(nt, {
            src: e.actorAvatar || "",
            badge: i(II, { type: e.notificationType }),
          }),
          i("div", {
            className: Ye.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: Ye.title,
                  children: i(fr, { name: e.actorName }),
                }),
              i("p", { className: Ye.message, children: e.message }),
            ],
          }),
        ],
      }),
      i("button", {
        className: Ye.closeButton,
        onClick: (w) => {
          w.stopPropagation();
          t(e.id);
        },
        onMouseDown: w => w.stopPropagation(),
        onTouchStart: w => w.stopPropagation(),
        children: i(dt, { size: 16 }),
      }),
    ],
  });
}
const jI = "Ooer";
const zI = "l9HW";
const qI = "uhSb";
const GI = "jNZv";
const YI = "m5JJ";
const XI = "cfaZ";
const KI = "EeqI";
const ZI = "PN9F";
const QI = "YOds";
const JI = "SonC";

const Xt = {
  container: jI,
  toast: zI,
  slideUp: qI,
  leaving: GI,
  fadeOut: YI,
  success: XI,
  icon: KI,
  message: ZI,
  closeButton: QI,
  error: JI,
};

const eT = { success: yy, error: py };
function tT({ id: e, type: t, message: n, onRemove: r }) {
  const [o, s] = L(false);
  const eT_t = eT[t];

  const c = N(() => {
    s(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return i("div", {
    className: `${Xt.toast} ${Xt[t]} ${o ? Xt.leaving : ""}`,
    children: [
      i("span", { className: Xt.icon, children: i(eT_t, { size: 20 }) }),
      i("span", { className: Xt.message, children: n }),
      i("button", {
        className: Xt.closeButton,
        onClick: c,
        children: i(dt, { size: 14 }),
      }),
    ],
  });
}
function nT() {
  const e = qr(n => n.toasts);

  const t = qr(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: Xt.container,
        children: e.map(n => i(
          tT,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const rT = "LtSs";
const oT = "sNgr";
const sT = "LrlV";
const iT = "abER";
const kr = { tabs: rT, indicator: oT, button: sT, active: iT };
function aT({
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
  const f = O(null);
  const p = O(false);

  const h = N(() => {
    const g = d.current[c];
    if (g) {
      const g_parentElement = g.parentElement;
      const S = g_parentElement ? parseFloat(getComputedStyle(g_parentElement).paddingLeft) : 0;
      const I = !p.current;

      u({
        width: g.offsetWidth,
        transform: `translateX(${g.offsetLeft - S}px)`,
        ...(I ? { transition: "none" } : {}),
      });

      if (I) {
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

  F(() => {
    h();
  }, [h]);

  F(() => {
    const f_current = f.current;
    if (!f_current) {
      return;
    }
    const E = new ResizeObserver(() => {
      h();
    });
    E.observe(f_current);

    return () => {
      E.disconnect();
    };
  }, [h]);

  const m = (g) => {
    if (n === undefined) {
      a(g);
    }

    r?.(g, e[g]);
  };

  const _ = g => typeof g == "string" ? g : g.label;

  const y = (g, E) => typeof g == "string" ? `${E}` : g.id;

  return i("div", {
    ref: f,
    className: `${kr.tabs} ${o}`,
    children: [
      i("div", { className: kr.indicator, style: l }),
      e.map((g, E) => i(
        "button",
        {
          ref: (S) => {
            d.current[E] = S;
          },
          onClick: () => m(E),
          className: `${kr.button} ${c === E ? kr.active : ""}`,
          children: _(g),
        },
        y(g, E)
      )
      ),
    ],
  });
}
const cT = ne(() => Z(
  () => import("./index-WuGwTTWy.js"),
  __vite__mapDeps([27, 28, 6, 5, 29])
).then(e => ({
  default: e.ImageViewer
}))
);
function lT() {
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
  } = uu();
  return e
    ? i(Ie, {
        fallback: null,
        children: i(
          cT,
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
const uT = "Qhtl";
const dT = "p53g";
const fT = "ScTA";
const pT = "i9Ou";
const Ar = { layout: uT, wrapper: dT, wrapperShop: fT, content: pT };

const hT = ne(() => Z(() => import("./index-CT10ELoC.js"), __vite__mapDeps([30, 31])).then(
  e => ({
    default: e.AuthLayout
  })
)
);

const mT = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const gT = [
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

const _T = ["/shop"];

const yT = ({ children: e, currentPath: t }) => {
  const n = Ct();
  const r = uo();
  const o = B_();
  const s = mT.includes(t);

  const a = _T.some(u => t === u || t.startsWith(`${u}/`));

  const c = gT.includes(t);
  const l = (r || a) && !c;
  return s
    ? i(Ie, { fallback: null, children: i(hT, { children: e }) })
    : i(F_.Provider, {
        value: { isHidden: o },
        children: i("div", {
          className: Ar.layout,
          children: i("div", {
            className: `${Ar.wrapper} ${a ? Ar.wrapperShop : ""}`,
            children: [
              l && (n ? i(EI, {}) : i(aE, {})),
              l && !n && i(fE, {}),
              i("div", { className: Ar.content, children: e }),
            ],
          }),
        }),
      });
};

const vT = "QBem";
const ET = "YGLi";
const wT = "xgcY";
const ST = "XrEP";
const bT = "NHOp";
const CT = "F98h";
const IT = "yz1r";
const TT = "fdqj";
const NT = "ao1j";
const RT = "rpr0";
const kT = "PxB9";
const AT = "ip2Q";
const OT = "br28";
const PT = "uvfn";
const LT = "l7FP";

const Le = {
  overlay: vT,
  card: ET,
  imageWrap: wT,
  image: ST,
  body: bT,
  titleRow: CT,
  title: IT,
  badge: TT,
  texts: NT,
  text: RT,
  moreButton: kT,
  buttons: AT,
  button: OT,
  primary: PT,
  secondary: LT,
};

const Xu = "seen_announcements";
function Ku() {
  try {
    const e = localStorage.getItem(Xu);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function $T(e) {
  try {
    const t = Ku();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(Xu, JSON.stringify(t));
    }
  } catch {}
}
function xT() {
  const e = uo();
  const [t, n] = L(null);
  const [r, o] = L(false);

  const s = N(() => {
    o(false);

    n(m => {
      if (m) {
        $T(m.id);
      }

      return null;
    });
  }, []);

  F(() => {
    if (!e) {
      return;
    }
    let m = false;

    Yy.getAnnouncements()
      .then((_) => {
      if (m) {
        return;
      }
      const y = Ku();

      const g = _.find(E => E?.id && !y.includes(E.id));

      if (g) {
        n(g);
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

    const m = (y) => {
      if (y.key === "Escape") {
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
    description: f,
    additional_text: p,
    buttons: h,
  } = t;

  return $(
    i("div", {
      className: Le.overlay,
      onClick: c,
      children: i("div", {
        className: Le.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": d,
        children: [
          l?.url &&
            i("div", {
              className: Le.imageWrap,
              style:
                l.width && l.height
                  ? { aspectRatio: `${l.width} / ${l.height}` }
                  : undefined,
              children: i("img", {
                className: Le.image,
                src: l.url,
                alt: "",
                width: l.width,
                height: l.height,
              }),
            }),
          i("div", {
            className: Le.body,
            children: [
              i("div", {
                className: Le.titleRow,
                children: [
                  i("h2", { className: Le.title, children: d }),
                  u && i("span", { className: Le.badge, children: u }),
                ],
              }),
              (f || p) &&
                i("div", {
                  className: Le.texts,
                  children: [
                    f && i("p", { className: Le.text, children: f }),
                    p &&
                      (r
                        ? i("p", { className: Le.text, children: p })
                        : i("button", {
                            type: "button",
                            className: Le.moreButton,
                            onClick: () => o(true),
                            children: "Подробнее",
                          })),
                  ],
                }),
              !!h?.length &&
                i("div", {
                  className: Le.buttons,
                  children: h.map((m, _) => i(
                    "button",
                    {
                      type: "button",
                      className: `${Le.button} ${
                        m.style === "secondary" ? Le.secondary : Le.primary
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
const yc = 3000/* 3e3 */;
const MT = 500;
const DT = 30000/* 3e4 */;
const vc = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function UT() {
  const e = J(n => n.applyStatsUpdates);

  const t = Pu();
  F(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let r = Infinity;
    let o = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > DT;

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
      const h = Qr.getSnapshot();
      if (h.length === 0) {
        return;
      }
      o = true;
      const m = Date.now();
      try {
        const _ = h.length > 20 ? h.slice(0, 20) : h;
        const y = await $e.getPostsStats(_);

        if (y.length > 0) {
          e(y, m);
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
            u(yc);
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

    for (const h of vc) {
      window.addEventListener(h, d, { passive: true });
    }
    const f = () => {
      if (!document.hidden) {
        d();
      }
    };
    document.addEventListener("visibilitychange", f);
    const p = Qr.onAppear(() => {
      if (!s && !document.hidden) {
        u(MT);
      }
    });
    u(yc);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", f);
      for (const h of vc) {
        window.removeEventListener(h, d);
      }
      p();
    };
  }, [e, t]);
}

const Zu = () => i(Lu, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(ze, {
    onClick: () => je("/"),
    children: "Вернуться на главную",
  }),
});

const FT = "KUln";
const BT = "K8Jd";
const HT = "G1b3";
const VT = "BzPL";
const WT = "Yfcc";
const jT = "jzZF";
const zT = "Lst7";
const qT = "vRC0";
const GT = "wJYc";
const YT = "hUcv";
const XT = "W6A6";
const KT = "qoMr";
const ZT = "WeoW";
const QT = "ONDX";
const JT = "fkXz";
const eN = "kV9u";
const tN = "frXa";
const nN = "IJpt";
const rN = "f9g0";
const oN = "c3MC";
const sN = "RtxT";
const iN = "om8U";

const B = {
  skeleton: FT,
  inner: BT,
  content: HT,
  header: VT,
  body: WT,
  actions: jT,
  shimmer: zT,
  avatar: qT,
  name: GT,
  time: YT,
  line: XT,
  w100: KT,
  w92: ZT,
  w85: QT,
  w78: JT,
  w65: eN,
  w50: tN,
  w40: nN,
  media: rN,
  mediaTall: oN,
  pill: sN,
  list: iN,
};

function aN(e) {
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
function Qu({ variant: e = "medium", delayMs: t = 0 }) {
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
            aN(e),
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
const Ec = ["medium", "media", "short", "long", "mediaTall"];
function cN({ count: e = 4 }) {
  return i("div", {
    className: B.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(Qu, { variant: Ec[n % Ec.length], delayMs: n * 120 }, n)
    ),
  });
}
const lN = "ifju";
const uN = "Z6AB";
const dN = "jzGH";
const Fo = { virtualFeed: lN, virtualContent: uN, virtualItem: dN };
function fN({
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
  const [p, h] = L(null);
  const [m, _] = L(window.innerWidth < 1174);

  const y = J(C => C.highlightedPostId);

  const g = J(C => C.clearHighlightedPost);

  F(() => {
    const C = () => _(window.innerWidth < 1174);
    window.addEventListener("resize", C);

    return () => window.removeEventListener("resize", C);
  }, []);
  const E = m ? 0 : c;

  const S = N(
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
    virtualItems: I,
    totalSize: w,
    measureElement: b,
    getMeasuredHeights: R,
  } = V_({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: E,
    getItemKey: S,
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
    if (!y) {
      return;
    }
    d.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const C = setTimeout(() => {
      h(y);
      g();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(C);
  }, [y, g]);

  const k = N(() => {
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

  F(() => {
    if (!n) {
      (f.current = false);
    }
  }, [n]);

  F(
    () => {
      window.addEventListener("scroll", k, { passive: true });

      return () => window.removeEventListener("scroll", k);
    },
    [k]
  );

  return i("div", {
    ref: d,
    className: Fo.virtualFeed,
    children: [
      i("div", {
        className: Fo.virtualContent,
        style: { height: `${w}px` },
        children: I.map((C) => {
          const v = e[C.index];
          return v
            ? i(
                "div",
                {
                  ref: A => b(A, C.index),
                  className: Fo.virtualItem,
                  style: { transform: `translateY(${C.start}px)` },
                  children: t(v, C.index, v.id === p),
                },
                C.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${E}px` },
          children: i(Qu, { variant: "medium" }),
        }),
    ],
  });
}
const pN = "AgB2";
const hN = "oHwA";
const mN = "kmU6";
const gN = "BKAY";
const _N = "DkPv";
const yN = "HVwz";

const gn = {
  page: pN,
  createPostWrapper: hN,
  tabsWrapper: mN,
  searchButton: gN,
  error: _N,
  empty: yN,
};

const vN = (e) => {
  const t = J(v => v.posts);

  const n = J(v => v.activeFeed);

  const r = J(v => v.isLoading);

  const o = J(v => v.isLoadingMore);

  const s = J(v => v.hasMore);

  const a = J(v => v.error);

  const c = J(v => v.feedScrollPosition);

  const l = J(v => v.feedMeasuredHeights);

  const u = J(v => v.feedRestoreToken);

  const d = J(v => v.setActiveFeed);

  const f = J(v => v.fetchFeed);

  const p = J(v => v.loadMoreFeed);

  const h = J(v => v.createPost);

  const m = J(v => v.cacheFeedHeights);

  const _ = Ee(v => v.profile);

  const y = Ee(v => v.status);

  const g = O(false);

  const E = Se(() => t.map(v => v.author.id), [t]);

  Zy(E);

  F(() => {
    if (y === "authenticated" && t.length === 0 && !r) {
      f();
    }
  }, [n, y]);

  Bt(() => {
    if (!g.current) {
      if (t.length !== 0) {
        (g.current = true);

        c > 0 &&
          (window.scrollTo(0, c),
          requestAnimationFrame(() => window.scrollTo(0, c)));
      }
    }
  }, [t.length, c]);

  const S = O(null);
  Bt(() => {
    if (S.current === null) {
      S.current = u;
      return;
    }
    if (S.current === u) {
      return;
    }
    S.current = u;
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

  const w = (v) => {
    const T = ["global", "clan", "following"][v] ?? "global";

    if (T !== n) {
      d(T);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      f(true);
    }
  };

  const b = async (v, A, T, P) => {
    if (_) {
      (await h({
          wallOwnerId: _.id,
          text: v,
          spans: A,
          attachments: T,
          poll: P,
        }));
    }
  };

  const R = N(() => {
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

  const C = N(
    (v, A, T) => i(M1, { post: v, isHighlighted: T, source: k }, v.id),
    [k]
  );

  return i("div", {
    className: gn.page,
    children: [
      i("div", {
        className: gn.tabsWrapper,
        children: [
          i(aT, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: w,
          }),
          i("a", {
            href: "/search",
            className: gn.searchButton,
            "aria-label": "Поиск",
            children: i(Iu, {}),
          }),
        ],
      }),
      i("div", {
        className: gn.createPostWrapper,
        children: [
          _ && i(nt, { src: _.avatar ?? "", alt: _.displayName, size: "sm" }),
          i(Yu, { onSubmit: b }),
        ],
      }),
      a
        ? i("div", {
            className: gn.error,
            children: [
              i("p", { children: a }),
              i("button", { onClick: () => f(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? i(cN, { count: 4 })
        : t.length === 0
        ? i("div", { className: gn.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            fN,
            {
              posts: t,
              renderPost: C,
              isLoadingMore: o,
              hasMore: s,
              onLoadMore: R,
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

const EN = ne(() => Z(
  () => import("./index-DaFxy5X6.js"),
  __vite__mapDeps([32, 28, 14, 33])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

const wN = ne(() => Z(() => import("./index-B_zL1Mgm.js"), __vite__mapDeps([34, 6, 35])).then(
  e => ({
    default: e.Hashtag
  })
)
);

const SN = ne(() => Z(
  () => import("./index-BW0CoCgB.js"),
  __vite__mapDeps([36, 37, 1, 2, 38])
).then(e => ({
  default: e.Profile
}))
);

const bN = ne(() => Z(() => import("./index-De6fWqMN.js"), __vite__mapDeps([39, 6, 40])).then(
  e => ({
    default: e.PostPage
  })
)
);

const CN = ne(() => Z(
  () => import("./index-CuJvIvma.js"),
  __vite__mapDeps([41, 4, 37, 42])
).then(e => ({
  default: e.Notifications
}))
);

const IN = ne(() => Z(() => import("./index-Buz7B90_.js"), __vite__mapDeps([43, 44])).then(
  e => ({
    default: e.Search
  })
)
);

const TN = ne(() => Z(() => import("./index-uE6hqPQR.js"), __vite__mapDeps([45, 46])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const NN = ne(() => Z(() => import("./index-6zHdvCsV.js"), __vite__mapDeps([47, 6, 48])).then(
  e => ({
    default: e.DeleteAccount
  })
)
);

const RN = ne(() => Z(() => import("./index-BzDgdwnx.js"), __vite__mapDeps([49, 6, 50])).then(
  e => ({
    default: e.Terms
  })
)
);

const kN = ne(() => Z(() => import("./index-ta05HFEf.js"), __vite__mapDeps([51, 6, 52])).then(
  e => ({
    default: e.Privacy
  })
)
);

const AN = ne(() => Z(() => import("./index-BUp-cGL-.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.Cookies
  })
)
);

const ON = ne(() => Z(
  () => import("./index-q8DZabih.js"),
  __vite__mapDeps([55, 6, 3, 56])
).then(e => ({
  default: e.ExternalLink
}))
);

const PN = ne(() => Z(() => import("./index-BvxD4fJe.js"), __vite__mapDeps([57, 6, 58])).then(
  e => ({
    default: e.Support
  })
)
);

const LN = ne(() => Z(() => import("./index-4cpwWnqm.js"), __vite__mapDeps([59, 6, 60])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const $N = ne(() => Z(() => import("./index-CMt_cbJo.js"), __vite__mapDeps([61, 62])).then(
  e => ({
    default: e.Event
  })
)
);

const xN = ne(() => Z(
  () => import("./index-Q-8GSvnu.js"),
  __vite__mapDeps([63, 64, 65, 6])
).then(e => ({
  default: e.SubscriptionTerms
}))
);

const MN = ne(() => Z(
  () => import("./index-COAWSwKm.js"),
  __vite__mapDeps([66, 64, 65, 6])
).then(e => ({
  default: e.RecurringTerms
}))
);

const DN = ne(() => Z(
  () => import("./index-CsU9j320.js"),
  __vite__mapDeps([67, 68, 69, 70, 71, 72, 73])
).then(e => ({
  default: e.Login
}))
);

const UN = ne(() => Z(
  () => import("./index-CDap2TfC.js"),
  __vite__mapDeps([74, 68, 69, 70, 71, 72, 75])
).then(e => ({
  default: e.Register
}))
);

const FN = ne(() => Z(
  () => import("./index-p2TRO_Wx.js"),
  __vite__mapDeps([76, 68, 69, 72, 77])
).then(e => ({
  default: e.ForgotPassword
}))
);

const BN = ne(() => Z(() => import("./index-CMJEHcvQ.js"), __vite__mapDeps([78, 72, 79])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const HN = ne(() => Z(() => import("./index-D8xubuRF.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const VN = ne(() => Z(() => import("./index--ElkdjvW.js"), __vite__mapDeps([80, 81])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const WN = ne(() => Z(() => import("./index-CRS6O0Qo.js"), []).then(e => ({
  default: e.Verification
}))
);

function wc(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const jN = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(Zu, {});
  }
  const t = e.slice(1);
  return i(SN, { username: t });
};
function zN() {
  const [e, t] = L(window.location.pathname);

  const n = w_(o => o.isOpen);

  UT();

  return i(UI, {
    children: i(Bv, {
      children: i(R0, {
        currentPath: e,
        children: [
          i(lT, {}),
          n && i(Ie, { fallback: null, children: i(EN, {}) }),
          i(nT, {}),
          i(x0, {}),
          i(xT, {}),
          i(yT, {
            currentPath: e,
            children: i(Ie, {
              fallback: null,
              children: i(cu, {
                onChange: (o) => {
                  const s = e;
                  t(o.url);

                  if (o.url === s) {
                    return;
                  }

                  S_.getState().markNavigated();
                  const a = J.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = wc(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = o.url === "/";
                  const l = !!wc(o.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(vN, { path: "/" }),
                  i(CN, { path: "/notifications" }),
                  i(DN, { path: "/login" }),
                  i(UN, { path: "/register" }),
                  i(FN, { path: "/forgot-password" }),
                  i(BN, { path: "/reset-password" }),
                  i(HN, { path: "/verify-email" }),
                  i(RN, { path: "/terms" }),
                  i(kN, { path: "/privacy" }),
                  i(AN, { path: "/cookies" }),
                  i(VN, { path: "/onboarding" }),
                  i(IN, { path: "/search" }),
                  i(TN, { path: "/shop/:rest*" }),
                  i(wN, { path: "/hashtag/:name" }),
                  i(ON, { path: "/external" }),
                  i(PN, { path: "/support" }),
                  i(NN, { path: "/delete-account" }),
                  i(LN, { path: "/child-safety" }),
                  i($N, { path: "/event" }),
                  i(WN, { path: "/verification" }),
                  i(xN, { path: "/subscription-terms" }),
                  i(MN, { path: "/recurring-terms" }),
                  i(bN, { path: "/:username/post/:postId" }),
                  i(jN, { path: "/:slug" }),
                  i(Zu, { default: true }),
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

i_(document.getElementById("root")).render(
  i(Re, {
    children: i(s_, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(zN, {}),
    }),
  })
);
export {
  $ as $,
  O as A,
  ze as B,
  Ct as C,
  Bu as D,
  uo as E,
  Uv as F,
  QC as G,
  Be as H,
  bu as I,
  Lu as J,
  aT as K,
  Yu as L,
  un as M,
  rc as N,
  Mt as O,
  cN as P,
  S_ as Q,
  Dr as R,
  Re as S,
  Se as T,
  fr as U,
  fN as V,
  WC as W,
  Fu as X,
  vu as Y,
  yu as Z,
  Bt as __1,
  w_ as a,
  qs as a0,
  Xs as a1,
  an as a2,
  ku as a3,
  H_ as a4,
  Au as a5,
  M as a6,
  x as a7,
  Zs as a8,
  Iu as a9,
  Yy as aA,
  Zy as aB,
  Et as aC,
  Qy as aD,
  qN as aa,
  Gr as ab,
  hu as ac,
  js as ad,
  D as ae,
  fy as af,
  Rt as ag,
  ot as ah,
  Ws as ai,
  Ga as aj,
  ly as ak,
  rt as al,
  lu as am,
  R_ as an,
  Zl as ao,
  dr as ap,
  Ds as aq,
  hy as ar,
  Fr as as,
  Gs as at,
  dt as au,
  Cu as av,
  hs as aw,
  co as ax,
  gb as ay,
  sb as az,
  J as b,
  M1 as c,
  L as d,
  je as e,
  nt as f,
  Ey as g,
  F as h,
  wu as i,
  Qs as j,
  Ie as k,
  Z as l,
  Ys as m,
  dn as n,
  wr as o,
  $e as p,
  N as q,
  _n as r,
  my as s,
  vt as t,
  i as u,
  Nu as v,
  Ee as w,
  Ne as x,
  _s as y,
  ne as z,
};
