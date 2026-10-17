const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BU-xduJ3.js",
      "assets/index-pkJWso4Q.js",
      "assets/index-ghy-LFIi.css",
      "assets/IconInfo-BvfW0bF0.js",
      "assets/IconNotificationMention-Bq8eBbdh.js",
      "assets/IconChevronRight-DrLOkR92.js",
      "assets/IconChevronLeft-BgCU8yQL.js",
      "assets/index-CxPeQxkh.css",
      "assets/index-Dlffw2_w.js",
      "assets/index-B7408Xg-.css",
      "assets/VoiceInput-BIzjwxtW.js",
      "assets/IconPlay-CEtmniVX.js",
      "assets/VoiceInput-tVugAtxM.css",
      "assets/PostMediaVideo-CLoDgbCE.js",
      "assets/VolumeGlyph-1KeqkCqF.js",
      "assets/PostMediaVideo-dlltnXpG.css",
      "assets/index-LLvfjlFA.js",
      "assets/IconCheckCircle-rB9kTQxX.js",
      "assets/index-DquY43LM.css",
      "assets/index-D-_rvXay.js",
      "assets/index-CaRAmiug.css",
      "assets/index-CScMoIt6.js",
      "assets/index-aNhOuYHX.css",
      "assets/index-DPxzkGGo.js",
      "assets/index-nGa9mHZM.css",
      "assets/index-wOv2vPxt.js",
      "assets/index-BQyMQwmH.css",
      "assets/index-BZNw-HFW.js",
      "assets/useBodyScrollLock-eUieFoLk.js",
      "assets/index-Celpje-b.css",
      "assets/index-Dm11YkXC.js",
      "assets/index-BnfgLNOB.css",
      "assets/index-DGvRM7oP.js",
      "assets/index-DKIBQwDD.css",
      "assets/index-DUOD9kc8.js",
      "assets/index-BbesUGkY.css",
      "assets/index-DdxRxwkb.js",
      "assets/IconCheck-DQAKc0NL.js",
      "assets/index-BjBQpUey.css",
      "assets/index-DCt97vks.js",
      "assets/index-9JV22-hN.css",
      "assets/index-CIJn5F3I.js",
      "assets/index-DlfH7kSl.css",
      "assets/index-Cm3C2vFC.js",
      "assets/index-FFLBW-Sq.css",
      "assets/index-CXVCbAwB.js",
      "assets/index-DoaM4Gek.css",
      "assets/index-SYm0WqIT.js",
      "assets/index-D3BtuRiD.css",
      "assets/index-BeyAhpX0.js",
      "assets/index-BpiBlH8O.css",
      "assets/index-D8VMspIv.js",
      "assets/index-DGkP00nZ.css",
      "assets/index-TGGgyzvv.js",
      "assets/index-CDy3JU7z.css",
      "assets/index-Dyo7rZmY.js",
      "assets/index-BCkSRTqW.css",
      "assets/index-DRN1artt.js",
      "assets/index-CqdQUcpm.css",
      "assets/index-DQeJkQmk.js",
      "assets/index-CzBIhE7Q.css",
      "assets/index-Btru6XXa.js",
      "assets/index-CtQHWK4O.css",
      "assets/index-s1v5m-37.js",
      "assets/index-nOKW2d5t.css",
      "assets/index-DOs6P46-.js",
      "assets/SubscriptionTerms.module-KtJPp7w6.js",
      "assets/SubscriptionTerms-BrY_tXWk.css",
      "assets/index-UNTxIGb4.js",
      "assets/index-BfD9fch_.js",
      "assets/index-BWIgmRuR.js",
      "assets/index-QPvj1c69.css",
      "assets/index-ssfWVecO.js",
      "assets/index-CEBqTSiW.css",
      "assets/IconEyeOff-Cpo2Os17.js",
      "assets/index-BpaJRS0F.css",
      "assets/index-BDjVO9p1.js",
      "assets/index-5ItAM0wk.css",
      "assets/index-C0SYTzBi.js",
      "assets/index-diaLZFsT.css",
      "assets/index-C62LQzmX.js",
      "assets/index-BtbfjkNr.css",
      "assets/index-BQrmX79w.js",
      "assets/index-B3wPFLQx.css",
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
      (e._sentryDebugIds[t] = "e9e6919f-3b4a-4679-8a0c-d46e4bc5ee7c");
      (e._sentryDebugIdIdentifier = "sentry-dbid-e9e6919f-3b4a-4679-8a0c-d46e4bc5ee7c");
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
let Bo;
let te;
let Jl;
let tn;
let Ra;
let eu;
let tu;
let fs;
let yr;
let To;
let nu;
let xi;
let Ys;
let Ks;
let ou;
const Ar = {};
const Lr = [];
const Kf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function At(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function $i(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function bt(e, t, n) {
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
    (a.children = arguments.length > 3 ? Bo.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return Io(e, a, o, r, null);
}
function Io(e, t, n, o, r) {
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
    __v: r ?? ++Jl,
    __i: -1,
    __u: 0,
  };

  if (r == null && te.vnode != null) {
    te.vnode(s);
  }

  return s;
}
function Xf() {
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
      Xs(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Xs(this);
    }
  }
}

function Pn(e, t) {
  if (t == null) {
    return e.__ ? Pn(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? Pn(e) : null;
}
function Qf(e) {
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

    Mi(
      e.__P,
      s,
      e_v,
      e.__n,
      e.__P.namespaceURI,
      32 & e_v.__u ? [e_v___e] : null,
      o,
      e_v___e ?? Pn(e_v),
      !!(32 & e_v.__u),
      r
    );

    (s.__v = e_v.__v);
    (s.__.__k[s.__i] = s);
    cu(o, s, r);
    e_v.__e = null;
    e_v.__ = null;

    if (s.__e != e_v___e) {
      ru(s);
    }
  }
}
function ru(e) {
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    e.__k.some(t => {
      if (t != null && t.__e != null) {
        return (e.__e = e.__c.base = t.__e);
      }
    });

    return ru(e);
  }
}
function Xs(e) {
  if (((!e.__d && (e.__d = true) && tn.push(e) && !Pr.__r++) || Ra != te.debounceRendering)) {
    ((Ra = te.debounceRendering) || eu)(Pr);
  }
}
function Pr() {
  try {
    let e;
    let t = 1;

    while (tn.length) {
      if (tn.length > t) {
        tn.sort(tu);
      }

      (e = tn.shift());
      (t = tn.length);
      Qf(e);
    }
  } finally {
    tn.length = 0;
    Pr.__r = 0;
  }
}
function su(e, t, n, o, r, s, a, c, l, u, f) {
  let p;
  let d;
  let h;
  let m;
  let g;
  let v;
  const _ = (o && o.__k) || Lr;
  const t_length = t.length;
  l = Zf(n, t, _, l, t_length);

  for (p = 0; p < t_length; p++) {
    if ((h = n.__k[p]) != null) {
      (d = (h.__i != -1 && _[h.__i]) || Ar);
      (h.__i = p);
      (v = Mi(e, h, d, r, s, a, c, l, u, f));
      (m = h.__e);

      h.ref &&
        d.ref != h.ref &&
        (d.ref && Di(d.ref, null, h), f.push(h.ref, h.__c || m, h));

      g == null && m != null && (g = m);

      4 & h.__u
        ? ((l = iu(h, l, e)), d.__e && (d.__e = null))
        : typeof h.type == "function" && v !== undefined
        ? (l = v)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = g);
  return l;
}
function Zf(e, t, n, o, r) {
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
            ? (a = e.__k[s] = Io(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = Io(ve, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                Io(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + d);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = Jf(a, n, l, p)) != -1 && (p--, (c = n[u]) && (c.__u |= 2));

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
        c.__e == o && (o = Pn(c));
        uu(c, c);
      }
    }
  }
  return o;
}
function iu(e, t, n) {
  let o;
  let r;
  if (typeof e.type == "function") {
    o = e.__k;

    for (r = 0; o && r < o.length; r++) {
      if (o[r]) {
        (o[r].__ = e);
        (t = iu(o[r], t, n));
      }
    }

    return t;
  }

  if (e.__e != t) {
    t && e.type && !t.parentNode && (t = Pn(e));
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
function Jf(e, t, n, o) {
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
function Aa(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || Kf.test(t) ? n : `${n}px`);
  }
}
function Jo(e, t, n, o, r) {
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
            Aa(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!o || n[t] != o[t]) {
            Aa(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(nu, "$1")));
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
        (n[To] = o[To]);
      } else {
        (n[To] = xi);
        e.addEventListener(t, s ? Ks : Ys, s);
      }
    } else {
      e.removeEventListener(t, s ? Ks : Ys, s);
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
function La(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t[yr] == null) {
        t[yr] = xi++;
      } else if (t[yr] < n[To]) {
        return;
      }
      return n(te.event ? te.event(t) : t);
    }
  };
}
function Mi(e, t, n, o, r, s, a, c, l, u) {
  let f;
  let p;
  let d;
  let h;
  let m;
  let g;
  let v;
  let _;
  let b;
  let y;
  let k;
  let C;
  let E;
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

  if ((f = te.__b)) {
    f(t);
  }

  e: if (typeof t_type == "function") {
    p = a.length;
    try {
      (b = t.props);
      (y = t_type.prototype && t_type.prototype.render);
      (k = (f = t_type.contextType) && o[f.__c]);
      (C = f ? (k ? k.props.value : f.__) : o);

      if (n.__c) {
        (_ = (d = t.__c = n.__c).__ = d.__E);
      } else {
        y
              ? (t.__c = d = new t_type(b, C))
              : ((t.__c = d = new ut(b, C)),
                (d.constructor = t_type),
                (d.render = tp));

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
        d.__s == d.state && (d.__s = At({}, d.__s));
        At(d.__s, t_type.getDerivedStateFromProps(b, d.__s));
      }

      (m = d.props);
      (g = d.state);
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
          d.componentWillReceiveProps(b, C);
        }

        if (t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(b, d.__s, C) === false)) {
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

          Lr.push.apply(d.__h, d._sb);
          (d._sb = []);

          if (d.__h.length) {
            a.push(d);
          }

          (c = Pn(n));
          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(b, d.__s, C);
        }

        if (y &&
          d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(m, g, v);
          });
        }
      }

      (d.context = C);
      (d.props = b);
      (d.__P = e);
      (d.__e = false);
      (E = te.__r);
      (w = 0);

      if (y) {
        (d.state = d.__s);
        (d.__d = false);

        if (E) {
          E(t);
        }

        (f = d.render(d.props, d.state, d.context));
        Lr.push.apply(d.__h, d._sb);
        (d._sb = []);
      } else {
        do {
          (d.__d = false);

          if (E) {
            E(t);
          }

          (f = d.render(d.props, d.state, d.context));
          (d.state = d.__s);
        } while (d.__d && ++w < 25);
      }

      (d.state = d.__s);

      if (d.getChildContext != null) {
        (o = At(At({}, o), d.getChildContext()));
      }

      if (y &&
        !h &&
        d.getSnapshotBeforeUpdate != null) {
        (v = d.getSnapshotBeforeUpdate(m, g));
      }

      (N = f != null && f.type === ve && f.key == null
        ? lu(f.props.children)
        : f);

      (c = su(e, Array_isArray(N) ? N : [N], t, n, o, r, s, a, c, l, u));
      (d.base = t.__e);
      (t.__u &= -161);

      if (d.__h.length) {
        a.push(d);
      }

      if (_) {
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
          for (T = s.length; T--; ) {
            $i(s[T]);
          }
        }
      } else {
        t.__e = n.__e;
      }

      if (t.__k == null) {
        (t.__k = n.__k || []);
      }

      if (!P.then) {
        au(t);
      }

      te.__e(P, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = ep(n.__e, t, n, o, r, s, a, l, u));
    }
  }

  if ((f = te.diffed)) {
    f(t);
  }

  return 128 & t.__u ? undefined : c;
}
function au(e) {
  if (e) {
    e.__c && (e.__c.__e = true);
    e.__k && e.__k.some(au);
  }
}
function cu(e, t, n) {
  for (let o = 0; o < n.length; o++) {
    Di(n[o], n[++o], n[++o]);
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
function lu(e) {
  return typeof e != "object" || e == null || e.__b > 0
    ? e
    : Array_isArray(e)
    ? e.map(lu)
    : e.constructor !== undefined
    ? null
    : At({}, e);
}
function ep(e, t, n, o, r, s, a, c, l) {
  let u;
  let f;
  let p;
  let d;
  let h;
  let m;
  let g;
  let v = n.props || Ar;

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
      : s && Bo.call(e.childNodes));

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
        Jo(e, u, null, h, r);
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
        (g = h);
        break;
      default:
        Jo(e, u, h, v[u], r);
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

      su(
        t.type == "template" ? e.content : e,
        Array_isArray(d) ? d : [d],
        t,
        n,
        o,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r,
        s,
        a,
        s ? s[0] : n.__k && Pn(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          $i(s[u]);
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
          Jo(e, u, m, v[u], r);

      (u = "checked");
      g != null && g != e[u] && Jo(e, u, g, v[u], r);
    }
  }
  return e;
}
function Di(e, t, n) {
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
function uu(e, t, n) {
  let o;
  let r;

  if (te.unmount) {
    te.unmount(e);
  }

  if ((o = e.ref)) {
    if (!o.current || o.current == e.__e) {
      Di(o, null, t);
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
        uu(o[r], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    $i(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function tp(e, t, n) {
  return this.constructor(e, n);
}
function Oo(e, t, n) {
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

  Mi(
    t,
    (e = ((!o && n) || t).__k = bt(ve, null, [e])),
    r || Ar,
    Ar,
    t.namespaceURI,
    !o && n ? [n] : r ? null : t.firstChild ? Bo.call(t.childNodes) : null,
    s,
    !o && n ? n : r ? r.__e : t.firstChild,
    o,
    a
  );

  cu(s, e, a);
  (e.props.children = null);
}
function du(e, t) {
  Oo(e, t, du);
}
function fu(e, t, n) {
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
    (c.children = arguments.length > 3 ? Bo.call(arguments, 2) : n);
  }

  return Io(e.type, c, o || e.key, r || e.ref, null);
}
function to(e) {
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
            Xs(a);
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
  (t.__c = `__cC${ou++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, o) => n.children(o)).contextType = t;

  return t;
}
(Bo = Lr.slice);

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

(Jl = 0);

(ut.prototype.render = ve);
(tn = []);

(eu = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(tu = (e, t) => e.__v.__b - t.__v.__b);

(Pr.__r = 0);
(fs = Math.random().toString(8));
(yr = `__d${fs}`);
(To = `__a${fs}`);
(nu = /(PointerCapture)$|Capture$/i);
(xi = 0);
(Ys = La(false));
(Ks = La(true));
(ou = 0);
let np = 0;
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
    __v: --np,
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
const In = "10.71.0";
function Kr() {
  Xr(fe);
  return fe;
}
function Xr(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || In);
  (t[In] = t[In] || {});
  return t[In];
}
function no(e, t, n = fe) {
  const o = (n.__SENTRY__ = n.__SENTRY__ || {});
  const r = (o[In] = o[In] || {});
  return r[e] || (r[e] = t());
}
const op = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const rp = "Sentry Logger ";
const Or = {};
function oo(e) {
  if (!("console" in fe)) {
    return e();
  }
  const fe_console = fe.console;
  const n = {};
  const o = Object.keys(Or);
  o.forEach((r) => {
    const Or_r = Or[r];
    (n[r] = fe_console[r]);
    (fe_console[r] = Or_r);
  });
  try {
    return e();
  } finally {
    o.forEach((r) => {
      fe_console[r] = n[r];
    });
  }
}
function sp() {
  Fi().enabled = true;
}
function ip() {
  Fi().enabled = false;
}
function pu() {
  return Fi().enabled;
}
function ap(...e) {
  Ui("log", ...e);
}
function cp(...e) {
  Ui("warn", ...e);
}
function lp(...e) {
  Ui("error", ...e);
}
function Ui(e, ...t) {
  if (ee &&
    pu()) {
    oo(() => {
      fe.console[e](`${rp}[${e}]:`, ...t);
    });
  }
}
function Fi() {
  return ee ? no("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const Y = {
    enable: sp,
    disable: ip,
    isEnabled: pu,
    log: ap,
    warn: cp,
    error: lp,
  };

const hu = 50;
const On = "?";
const Pa = /\(error: (.*)\)/;
const Oa = /captureMessage|captureException/;
function mu(...e) {
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

      const u = Pa.test(a_c) ? a_c.replace(Pa, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const f of t) {
          const p = f(u);
          if (p) {
            s.push(p);
            break;
          }
        }
        if (s.length >= hu + r) {
          break;
        }
      }
    }
    return dp(s.slice(r));
  };
}
function up(e) {
  return Array.isArray(e) ? mu(...e) : e;
}
function dp(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(er(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (Oa.test(er(t).function || "")) {
    t.pop();
    Oa.test(er(t).function || "") && t.pop();
  }

  return t
    .slice(0, hu)
    .map(n => ({
    ...n,
    filename: n.filename || er(t).filename,
    function: n.function || On
  }));
}
function er(e) {
  return e[e.length - 1] || {};
}
const ps = "<anonymous>";
function sn(e) {
  try {
    return !e || typeof e != "function" ? ps : e.name || ps;
  } catch {
    return ps;
  }
}
function xa(e) {
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
const Eo = {};
const $a = {};
function $n(e, t) {
  (Eo[e] = Eo[e] || []);
  Eo[e].push(t);

  return () => {
    const Eo_e = Eo[e];
    if (Eo_e) {
      const o = Eo_e.indexOf(t);

      if (o !== -1) {
        Eo_e.splice(o, 1);
      }
    }
  };
}
function Mn(e, t) {
  if (!$a[e]) {
    $a[e] = true;
    try {
      t();
    } catch (n) {
      if (ee) {
        Y.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function Et(e, t) {
  const n = e && Eo[e];
  if (n) {
    for (const o of n) {
      try {
        o(t);
      } catch (r) {
        if (ee) {
          Y.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${sn(o)}
Error:`,
            r
          );
        }
      }
    }
  }
}
let hs = null;
function fp(e) {
  const t = "error";
  $n(t, e);
  Mn(t, pp);
}
function pp(...args) {
  (hs = fe.onerror);

  (fe.onerror = function (e, t, n, o, r) {
    Et("error", { column: o, error: r, line: n, msg: e, url: t });
    return hs ? hs.apply(this, args) : false;
  });

  (fe.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let ms = null;
function hp(e) {
  const t = "unhandledrejection";
  $n(t, e);
  Mn(t, mp);
}
function mp(...args) {
  (ms = fe.onunhandledrejection);

  (fe.onunhandledrejection = function (e) {
    Et("unhandledrejection", e);
    return ms ? ms.apply(this, args) : true;
  });

  (fe.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const gu = Object.prototype.toString;
function Ot(e) {
  switch (gu.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return Hi(e, Error);
      }
  }
}
function ro(e, t) {
  return gu.call(e) === `[object ${t}]`;
}
function _u(e) {
  return ro(e, "ErrorEvent");
}
function Ma(e) {
  return ro(e, "DOMError");
}
function gp(e) {
  return ro(e, "DOMException");
}
function zt(e) {
  return ro(e, "String");
}
function Bi(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function Vo(e) {
  return (
    e === null || Bi(e) || (typeof e != "object" && typeof e != "function")
  );
}
function xo(e) {
  return ro(e, "Object");
}
function Qr(e) {
  return typeof e == "object" && e !== null;
}
function Zr(e) {
  return typeof Event !== "undefined" && Hi(e, Event);
}
function _p(e) {
  return ro(e, "RegExp");
}
function Wo(e) {
  return !!(e?.then && typeof e.then == "function");
}
function Hi(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function vu(e) {
  return typeof Request !== "undefined" && Hi(e, Request);
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
    yu(r, e_t);
  }

  try {
    e[t] = r;
  } catch {
    if (ee) {
      Y.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function an(e, t, n) {
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
function yu(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    an(e, "__sentry_original__", t);
  } catch {}
}
function Vi(e) {
  return e.__sentry_original__;
}
function wu(e) {
  if (Ot(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...Da(e) };
  }
  if (Zr(e)) {
    const { type, target, currentTarget, detail } = e;
    return {
      type: type,
      target: target,
      currentTarget: currentTarget,
      ...(detail ? { detail: detail } : {}),
      ...Da(e),
    };
  }
  return e;
}
function Da(e) {
  return Qr(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function vp(e) {
  const t = Object.keys(wu(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let Fn;
function Jr(e) {
  if (Fn !== undefined) {
    return Fn ? Fn(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = fe;
  return t in n && typeof n[t] == "function"
    ? ((Fn = n[t]), Fn(e))
    : ((Fn = null), e());
}
function xr() {
  return Jr(() => Math.random());
}
function so() {
  return Jr(() => Date.now());
}
const yp = Symbol.for("sentry.skipNormalization");
const wp = Symbol.for("sentry.overrideNormalizationDepth");
function Ep(e) {
  return !!e[yp];
}
function bp(e) {
  const e_wp = e[wp];
  return typeof e_wp == "number" ? e_wp : undefined;
}
let Qs;
function Eu(e) {
  Qs = e;
}
function Vt(e, t = 100, n = Infinity) {
  try {
    return Zs("", e, t, n);
  } catch (o) {
    return { ERROR: `**non-serializable** (${o})` };
  }
}
function bu(e, t = 3, n = 100 * 1024) {
  const o = Vt(e, t);
  return kp(o) > n ? bu(e, t - 1, n) : o;
}
function Zs(e, t, n = Infinity, o = Infinity, r = Np()) {
  const [s, a] = r;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = Su(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (Ep(t)) {
    return t;
  }
  const l = bp(t);
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
      return Zs("", m, u - 1, o, r);
    } catch {}
  }
  const p = Array.isArray(t) ? [] : {};
  let d = 0;
  const h = wu(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (d >= o) {
      p[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (p[m] = Zs(m, h_m, u - 1, o, r));
    d++;
  }
  a(t);
  return p;
}
function Su(e, t) {
  try {
    if (Qs) {
      const o = Qs(t);
      if (o) {
        return o;
      }
    }
    return typeof global !== "undefined" && t === global
      ? "[Global]"
      : typeof t == "number" && !Number.isFinite(t)
      ? `[${t}]`
      : typeof t == "function"
      ? `[Function: ${sn(t)}]`
      : typeof t == "symbol"
      ? `[${String(t)}]`
      : typeof t == "bigint"
      ? `[BigInt: ${String(t)}]`
      : `[object ${Sp(t)}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Sp(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Cp(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function kp(e) {
  return Cp(JSON.stringify(e));
}
function Np() {
  const e = new WeakSet();
  function t(o) {
    return e.has(o) ? true : (e.add(o), false);
  }
  function n(o) {
    e.delete(o);
  }
  return [t, n];
}
function Js(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Ua(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const r of e) {
    if (Vo(r)) {
      n.push(String(r));
    } else if (r instanceof Error) {
      n.push(r.message ? `${r.name}: ${r.message}` : r.name);
    } else {
      n.push(Su(undefined, r));
    }
  }

  return n.join(t);
}
function Ro(e, t, n = false) {
  return zt(e)
    ? _p(t)
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
function jo(e, t = [], n = false) {
  for (const o of t) {
    if (Ro(e, o, n)) {
      return true;
    }
  }
  return false;
}
function Tp() {
  const e = fe;
  return e.crypto || e.msCrypto;
}
let gs;
function Ip() {
  return xr() * 16;
}
function dt(e = Tp()) {
  try {
    if (e?.randomUUID) {
      return Jr(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!gs) {
    (gs = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return gs.replace(/[018]/g, t => (t ^ ((Ip() & 15) >> (t / 4))).toString(16));
}
function Cu(e) {
  return e.exception?.values?.[0];
}
function Sn(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const o = Cu(e);
  return o
    ? o.type && o.value
      ? `${o.type}: ${o.value}`
      : o.type || o.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function ei(e, t, n) {
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
function Rn(e, t) {
  const n = Cu(e);
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
function Fa(e) {
  if (Rp(e)) {
    return true;
  }
  try {
    an(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function Rp(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const ku = 1000/* 1e3 */;
function zo() {
  return so() / ku;
}
function Ap() {
  const { performance } = fe;
  if (!performance?.now || !performance.timeOrigin) {
    return zo;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Jr(() => performance.now())) / ku;
}
let Ba;
function qt() {
  return (Ba ?? (Ba = Ap()))();
}
function Lp(e) {
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
    toJSON: () => Op(n),
  };

  if (e) {
    Xn(n, e);
  }

  return n;
}
function Xn(e, t = {}) {
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
function Pp(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  Xn(e, n);
}
function Op(e) {
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
function qo(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const o = { ...e };
  for (const r in t) {
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      (o[r] = qo(o[r], t[r], n - 1));
    }
  }
  return o;
}
function Ha() {
  return dt();
}
function Nu() {
  return dt().substring(16);
}
function xp(e) {
  try {
    const fe_WeakRef = fe.WeakRef;
    if (typeof fe_WeakRef == "function") {
      return new fe_WeakRef(e);
    }
  } catch {}
  return e;
}
function Tu(e) {
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
const ti = "_sentrySpan";
function Va(e, t) {
  if (t) {
    an(e, ti, xp(t));
  } else {
    delete e[ti];
  }
}
function Wa(e) {
  return Tu(e[ti]);
}
const $p = 100;
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
    (this._propagationContext = { traceId: Ha(), sampleRand: xr() });
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
    Va(t, Wa(this));
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
      Xn(this._session, { user: t });
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
    const o = n instanceof xt ? n.getScopeData() : xo(n) ? t : undefined;

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
    Va(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: Ha(), sampleRand: xr() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const o = typeof n == "number" ? n : $p;
    if (o <= 0) {
      return this;
    }
    const r = {
      timestamp: zo(),
      ...t,
      message: t.message ? Js(t.message, 2048) : t.message,
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
      span: Wa(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = qo(this._sdkProcessingMetadata, t, 2));
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
function Mp() {
  return no("defaultCurrentScope", () => new xt());
}
function Dp() {
  return no("defaultIsolationScope", () => new xt());
}

const ja = e => e instanceof Promise && !e[Iu];

const Iu = Symbol("chained PromiseLike");

const Up = (e, t, n) => {
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
  return ja(o) && ja(e) ? o : Fp(e, o);
};

const Fp = (e, t) => {
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
    Object.assign(t, { [Iu]: true });
  }

  return t;
};

class Bp {
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
    return Wo(o)
      ? Up(
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
function Qn() {
  const e = Kr();
  const t = Xr(e);
  return (t.stack = t.stack || new Bp(Mp(), Dp()));
}
function Hp(e) {
  return Qn().withScope(e);
}
function Vp(e, t) {
  const n = Qn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function za(e) {
  return Qn().withScope(() => e(Qn().getIsolationScope()));
}
function Wp() {
  return {
    withIsolationScope: za,
    withScope: Hp,
    withSetScope: Vp,
    withSetIsolationScope: (e, t) => za(t),
    getCurrentScope: () => Qn().getScope(),
    getIsolationScope: () => Qn().getIsolationScope(),
  };
}
function Wi(e) {
  const t = Xr(e);
  return t.acs ? t.acs : Wp();
}
function jp(e) {
  return (
    typeof e == "object" &&
    e != null &&
    !Array.isArray(e) &&
    Object.keys(e).includes("value")
  );
}
function zp(e, t) {
  const { value, unit } = jp(e) ? e : { value: e, unit: undefined };
  const r = qp(value);
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
function qa(e, t = false) {
  const n = {};
  for (const [o, r] of Object.entries(e ?? {})) {
    const s = zp(r, t);

    if (s) {
      (n[o] = s);
    }
  }
  return n;
}
function qp(e) {
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
  const e = Kr();
  return Wi(e).getCurrentScope();
}
function Mt() {
  const e = Kr();
  return Wi(e).getIsolationScope();
}
function Gp() {
  return no("globalScope", () => new xt());
}
function Ru(...e) {
  const t = Kr();
  const n = Wi(t);
  if (e.length === 2) {
    const [o, r] = e;
    return o ? n.withSetScope(o, r) : n.withScope(r);
  }
  return n.withScope(e[0]);
}
function Be() {
  return $t().getClient();
}
function Yp(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || Nu() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const Kp = "sentry.source";
const Xp = "sentry.sample_rate";
const Qp = "sentry.previous_trace_sample_rate";
const Au = "sentry.op";
const Zp = "sentry.origin";
const Lu = "sentry.profile_id";
const Pu = "sentry.exclusive_time";
const Jp = "gen_ai.conversation.id";
const eh = 0;
const th = 1;
const nh = "_sentryScope";
const oh = "_sentryIsolationScope";
function ni(e) {
  const t = e;
  return { scope: t[nh], isolationScope: Tu(t[oh]) };
}
const Ga = "sentry-";
function rh(e) {
  const t = sh(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((o, [r, s]) => {
    if (r.startsWith(Ga)) {
      const a = r.slice(Ga.length);
      o[a] = s;
    }
    return o;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function sh(e) {
  if (!(!e || (!zt(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const o = Ya(n);

      Object.entries(o).forEach(([r, s]) => {
        t[r] = s;
      });

      return t;
    }, {})
      : Ya(e);
  }
}
function Ya(e) {
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
const ih = /^o(\d+)\./;

const ah =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function ch(e) {
  return e === "http" || e === "https";
}
function io(e, t = false) {
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
function lh(e) {
  const t = ah.exec(e);
  if (!t) {
    oo(() => {
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

  return Ou({
    host: s,
    pass: r,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: o,
  });
}
function Ou(e) {
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
function uh(e) {
  if (!ee) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (Y.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? ch(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (Y.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (Y.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (Y.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function dh(e) {
  return e.match(ih)?.[1];
}
function fh(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let o;

  if (t.orgId) {
    (o = String(t.orgId));
  } else if (host) {
    (o = dh(host));
  }

  return o;
}
function xu(e) {
  const t = typeof e == "string" ? lh(e) : Ou(e);
  if (!(!t || !uh(t))) {
    return t;
  }
}
function ph(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const $u = 1;
function hh(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const r = isRemote ? spanId : es(e).parent_span_id;
  const s = ni(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || Nu() : spanId;
  return { parent_span_id: r, span_id: a, trace_id: traceId };
}
function mh(e) {
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
        sampled: o === $u,
        attributes: s,
        ...r
      })
    );
  }
}
function Xa(e) {
  if (typeof e == "number") {
    return Qa(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return Qa(e.getTime());
  }

  return qt();
}
function Qa(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function es(e) {
  if (yh(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (vh(e)) {
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
      parent_span_id: gh(e),
      start_timestamp: Xa(startTime),
      timestamp: Xa(endTime) || undefined,
      status: Eh(status),
      op: attributes[Au],
      origin: attributes[Zp],
      links: mh(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function gh(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function _h(e) {
  return {
    ...e,
    attributes: qa(e.attributes),
    links: e.links?.map(t => ({
      ...t,
      attributes: qa(t.attributes)
    })),
  };
}
function vh(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function yh(e) {
  return typeof e.getSpanJSON == "function";
}
function wh(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === $u;
}
function Eh(e) {
  if (!(!e || e.code === eh)) {
    return e.code === th ? "ok" : e.message || "internal_error";
  }
}
const bh = "_sentryRootSpan";
const Mu = Sh;
function Sh(e) {
  return e[bh] || e;
}
function Za() {
  if (!Ka) {
    oo(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (Ka = true);
  }
}
function Ja(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = e || Be()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function ec(e) {
  Y.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function tc(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (Nh(n)) {
      if (e.description && Ro(e.description, n)) {
        if (ee) {
          ec(e);
        }

        return true;
      }
      continue;
    }
    const o = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !o) {
      continue;
    }
    const r = n.name ? e.description && Ro(e.description, n.name) : true;
    const s = n.op ? e.op && Ro(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => Ch(e.attributes?.[c], l)
        )
      : true;

    if (r && s && a) {
      if (ee) {
        ec(e);
      }

      return true;
    }
  }
  return false;
}
function Ch(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Ro(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e === t;
}
function kh(e, t) {
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
function Nh(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const Th = Symbol.for("sentry.nonRecordingSpan");
function Ih(e) {
  return !!e && e[Th] === true;
}
const ji = "production";
const Rh = "_frozenDsc";
function Du(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const r = {
    environment: n.environment || ji,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: fh(t),
  };

  t.emit("createDsc", r);
  return r;
}
function Uu(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || Du(n.traceId, e);
}
function Ah(e) {
  const t = Be();
  if (!t) {
    return {};
  }
  const n = Mu(e);

  const {
    data,
    description
  } = es(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[Xp] ?? data[Qp];
  function c(v) {
    if ((typeof a == "number" || typeof a == "string")) {
      (v.sample_rate = `${a}`);
    }

    return v;
  }
  const n_Rh = n[Rh];
  if (n_Rh) {
    return c(n_Rh);
  }
  const u = Ih(n);
  const f = u && n.dropReason === "ignored";
  if (u && (!Ja(t.getOptions()) || f)) {
    const v = ni(n).scope;
    if (v) {
      const _ = { ...Uu(t, v) };

      if (f) {
        (_.sampled = "false");
      }

      return c(_);
    }
  }
  const p = s?.get("sentry.dsc");
  const d = p && rh(p);
  if (d) {
    return c(d);
  }
  const h = Du(e.spanContext().traceId, t);
  const m = data[Kp] ?? data["sentry.segment.name.source"];

  if (m !== "url" && description) {
    (h.transaction = description);
  }

  if (Ja()) {
    (h.sampled = String(wh(n)));

    (h.sample_rand = s?.get("sentry.sample_rand") ??
    ni(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(h);
  t.emit("createDsc", h, n);
  return h;
}
function Lh(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
function ao(e, t = []) {
  return [e, t];
}
function nc(e, t) {
  const [n, o] = e;
  return [n, [...o, t]];
}
function oi(e, t) {
  const [, n] = e;
  for (const o of n) {
    const r = o[0].type;
    if (t(o, r)) {
      return true;
    }
  }
  return false;
}
function Ph(e, t) {
  return oi(e, (n, o) => t.includes(o));
}
function ri(e) {
  const t = Xr(fe);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Oh(e) {
  const [t, n] = e;
  let o = JSON.stringify(t);
  function r(s) {
    if (typeof o == "string") {
      (o = typeof s == "string" ? o + s : [ri(o), s]);
    } else {
      o.push(typeof s == "string" ? ri(s) : s);
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
  return typeof o == "string" ? o : xh(o);
}
function xh(e) {
  const t = e.reduce((r, s) => r + s.length, 0);

  const n = new Uint8Array(t);
  let o = 0;
  for (const r of e) {
    n.set(r, o);
    (o += r.length);
  }
  return n;
}
function $h(e) {
  const t = typeof e.data == "string" ? ri(e.data) : e.data;
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
const Fu = {
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
function Mh(e) {
  return e in Fu;
}
function oc(e) {
  return Mh(e) ? Fu[e] : e;
}
function Bu(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function Dh(e, t, n, o) {
  const r = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date(so()).toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && o && { dsn: io(o) }),
    ...(r && { trace: r }),
  };
}
function Uh(e, t) {
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
function Fh(e, t, n, o) {
  const r = Bu(n);

  const s = {
    sent_at: new Date(so()).toISOString(),
    ...(r && { sdk: r }),
    ...(!!o && t && { dsn: io(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return ao(s, [a]);
}
function Bh(e, t, n, o) {
  const r = Bu(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  Uh(e, n?.sdk);
  const a = Dh(e, r, o, t);
  delete e.sdkProcessingMetadata;
  return ao(a, [[{ type: s }, e]]);
}
function Hh(e) {
  return e.getOptions().traceLifecycle === "stream";
}
function Vh(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  Wh(e, t);

  if (span) {
    qh(e, span);
  }

  Gh(e, fingerprint);
  jh(e, breadcrumbs);
  zh(e, sdkProcessingMetadata);
}
function rc(e, t) {
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
  uo(e, "extra", extra);
  uo(e, "tags", tags);
  uo(e, "attributes", attributes);
  uo(e, "user", user);
  uo(e, "contexts", contexts);
  (e.sdkProcessingMetadata = qo(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function uo(e, t, n) {
  e[t] = qo(e[t], n, 1);
}
function Hu(e, t) {
  const n = Gp().getScopeData();

  if (e) {
    rc(n, e.getScopeData());
  }

  if (t) {
    rc(n, t.getScopeData());
  }

  return n;
}
function Wh(e, t) {
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
function jh(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function zh(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function qh(e, t) {
  (e.contexts = { trace: hh(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: Ah(t),
      ...e.sdkProcessingMetadata,
    });

  const n = Mu(t);
  const o = es(n).description;

  if (o && !e.transaction && e.type === "transaction") {
    (e.transaction = o);
  }
}
function Gh(e, t) {
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
const Yh = "url.full";
function Vu(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([o, r]) => {
    if (r != null && !(o in n)) {
      (n[o] = r);
    }
  });
}
const _s = 0;
const sc = 1;
const ic = 2;
function Go(e) {
  return new $o((t) => {
    t(e);
  });
}
function Wu(e) {
  return new $o((t, n) => {
    n(e);
  });
}
class $o {
  constructor(t) {
    (this._state = _s);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new $o((o, r) => {
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
    return new $o((n, o) => {
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
    if (this._state === _s) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === sc && n[1](this._value);
        this._state === ic && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === _s) {
          if (Wo(a)) {
            a.then(o, r);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const o = (s) => {
      n(sc, s);
    };

    const r = (s) => {
      n(ic, s);
    };

    try {
      t(o, r);
    } catch (s) {
      r(s);
    }
  }
}
function Kh(e, t, n, o = 0) {
  try {
    const r = si(t, n, e, o);
    return Wo(r) ? r : Go(r);
  } catch (r) {
    return Wu(r);
  }
}
function si(e, t, n, o) {
  const n_o = n[o];
  if (!e || !n_o) {
    return e;
  }
  const s = n_o({ ...e }, t);

  if (ee && s === null) {
    Y.log(`Event processor "${n_o.id || "?"}" dropped event`);
  }

  return Wo(s) ? s.then(a => si(a, t, n, o + 1)) : si(s, t, n, o + 1);
}
let dn;
let ac;
let cc;
let Xt;
function Xh(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = fe;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const o = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const r = _debugIds ? Object.keys(_debugIds) : [];
  if (Xt && o.length === ac && r.length === cc) {
    return Xt;
  }
  (ac = o.length);
  (cc = r.length);
  (Xt = {});

  if (!dn) {
    (dn = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const f = dn?.[l];
      if (f && Xt && c_l) {
        (Xt[f[0]] = c_l);

        if (dn) {
          (dn[l] = [f[0], c_l]);
        }
      } else if (c_l) {
        const p = e(l);
        for (let d = p.length - 1; d >= 0; d--) {
          const m = p[d]?.filename;
          if (m && Xt && dn) {
            (Xt[m] = c_l);
            (dn[l] = [m, c_l]);
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
function Qh(e, t, n, o, r, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || dt(),
    timestamp: t.timestamp || zo(),
  };

  const u = n.integrations || e.integrations.map(_ => _.name);

  Zh(l, e);
  tm(l, u);

  if (r) {
    r.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    Jh(l, e.stackParser);
  }

  const f = om(o, n.captureContext);

  if (n.mechanism) {
    Rn(l, n.mechanism);
  }

  const p = r ? r.getEventProcessors() : [];
  const d = Hu(s, f);
  const h = [...(n.attachments || []), ...d.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  Vh(l, d);
  const m = [...p, ...d.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? Go(l) : Kh(m, l, n)).then(
    _ => {
      if (_) {
        em(_);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? nm(_, normalizeDepth, normalizeMaxBreadth) : _;
    }
  );
}
function Zh(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || ji);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = Js(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = Js(c.value, maxValueLength));
      }
    });
  }
}
function Jh(e, t) {
  const n = Xh(t);
  e.exception?.values?.forEach((o) => {
    o.stacktrace?.frames?.forEach((r) => {
      if (r.filename) {
        (r.debug_id = n[r.filename]);
      }
    });
  });
}
function em(e) {
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
function tm(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function nm(e, t, n) {
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
function om(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new xt();
  n.update(t);
  return n;
}
function rm(e) {
  if (e) {
    return sm(e) ? { captureContext: e } : am(e) ? { captureContext: e } : e;
  }
}
function sm(e) {
  return e instanceof xt || typeof e == "function";
}
const im = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function am(e) {
  return Object.keys(e).some(t => im.includes(t));
}
function ju(e, t) {
  return $t().captureException(e, rm(t));
}
function zu(e, t) {
  return $t().captureEvent(e, t);
}
function cm(e, t) {
  Mt().setContext(e, t);
}
function lc(e) {
  Mt().setUser(e);
}
function lm() {
  return Mt().lastEventId();
}
function uc(e) {
  const t = Mt();
  const { user } = Hu(t, $t());
  const { userAgent } = fe.navigator || {};
  const r = Lp({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    Xn(s, { status: "exited" });
  }

  qu();
  t.setSession(r);
  return r;
}
function qu() {
  const e = Mt();
  const n = $t().getSession() || e.getSession();

  if (n) {
    Pp(n);
  }

  Gu();
  e.setSession();
}
function Gu() {
  const e = Mt();
  const t = Be();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function vs(e = false) {
  if (e) {
    qu();
    return;
  }
  Gu();
}
function Yu(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const um = "7";
function Ku(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function dm(e) {
  return `${Ku(e)}${e.projectId}/envelope/`;
}
function fm(e, t) {
  const n = { sentry_version: um };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function pm(e, t, n) {
  return t || `${dm(e)}?${fm(e, n)}`;
}
function hm(e, t) {
  const n = xu(e);
  if (!n) {
    return "";
  }
  const o = `${Ku(n)}embed/error-page/`;
  let r = `dsn=${io(n)}`;
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
const dc = [];
function mm(e) {
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
function gm(e) {
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
  return mm(o);
}
function _m(e, t) {
  const n = {};

  t.forEach((o) => {
    if (o?.beforeSetup) {
      o.beforeSetup(e);
    }
  });

  t.forEach((o) => {
    if (o) {
      Xu(e, o, n);
    }
  });

  return n;
}
function fc(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function Xu(e, t, n) {
  if (n[t.name]) {
    if (ee) {
      Y.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!dc.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    dc.push(t.name);
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
function vm() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function ym() {
  return "npm";
}
function wm() {
  return (!vm() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function zi() {
  return typeof window !== "undefined" && (!wm() || Em());
}
function Em() {
  return fe.process?.type === "renderer";
}
function bm(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(zi() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
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
    (s.dsn = io(o));
  }

  return ao(s, [bm(e, r)]);
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
  e.emit("flushLogs");
  e.sendEnvelope(r);
}
function km(e) {
  return Qu().get(e);
}
function Qu() {
  return no("clientToLogBufferMap", () => new WeakMap());
}
function Nm(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(zi() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Tm(e, t, n, o, r) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && o) {
    (s.dsn = io(o));
  }

  return ao(s, [Nm(e, r)]);
}
function Im(e, t) {
  const n = t ?? Rm(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const o = e.getOptions();

  const r = Tm(
    n,
    o._metadata,
    o.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Zu().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(r);
}
function Rm(e) {
  return Zu().get(e);
}
function Zu() {
  return no("clientToMetricBufferMap", () => new WeakMap());
}
function Am(e) {
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
  return _h(t);
}
function Lm(e, t) {
  if (e.type !== "transaction" ||
  !e.spans?.length ||
  !e.sdkProcessingMetadata?.hasGenAiSpans ||
  t.getOptions().streamGenAiSpans === false ||
  Hh(t)) {
    return;
  }
  const n = [];
  const o = [];
  for (const s of e.spans) {
    if (s.op?.startsWith("gen_ai.")) {
      n.push(Am(s));
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
      ...(zi() && { ingest_settings: { infer_ip: r, infer_user_agent: r } }),
      items: n,
    },
  ];
}
const qi = Symbol.for("SentryBufferFullError");
function Gi(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function o(a) {
    t.delete(a);
  }
  function r(a) {
    if (!n()) {
      return Wu(qi);
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
      return Go(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => Yu(setTimeout(() => u(false), a)))];
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
const Pm = 60 * 1000/* 1e3 */;
function Om(e, t = so()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const o = Date.parse(`${e}`);
  return isNaN(o) ? Pm : o - t;
}
function xm(e, t) {
  return e[t] || e.all || 0;
}
function $m(e, t, n = so()) {
  return xm(e, t) > n;
}
function Mm(e, { statusCode: t, headers: n }, o = so()) {
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
      (r.all = o + Om(a, o));
    } else if (t === 429) {
      (r.all = o + 60 * 1000/* 1e3 */);
    }
  }
  return r;
}
const Ju = 64;
function Dm(e, t, n = Gi(e.bufferSize || Ju)) {
  let o = {};
  const r = a => n.drain(a);
  function s(a) {
    const c = [];

    oi(a, (p, d) => {
      const h = oc(d);

      if ($m(o, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(p);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = ao(a[0], c);

    const u = (p) => {
      if (Ph(l, ["client_report"])) {
        if (ee) {
          Y.warn(
            `Dropping client report. Will not send outcomes (reason: ${p}).`
          );
        }

        return;
      }
      oi(l, (d, h) => {
        e.recordDroppedEvent(p, oc(h));
      });
    };

    const f = () => t({ body: Oh(l) }).then(
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
          (o = Mm(o, p)),
          p),
      (p) => {
        u("network_error");

        if (ee) {
          Y.error("Encountered error running transport request:", p);
        }

        throw p;
      }
    );

    return n.add(f).then(
      p => p,
      (p) => {
        if (p === qi) {
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
function Um(e, t, n) {
  const o = [
    { type: "client_report" },
    { timestamp: zo(), discarded_events: e },
  ];
  return ao(t ? { dsn: t } : {}, [o]);
}
function ed(e) {
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
function Fm(e) {
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
    profile_id: data?.[Lu],
    exclusive_time: data?.[Pu],
    measurements: e.measurements,
    is_segment: true,
  };
}
function Bm(e) {
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
          ...(e.profile_id && { [Lu]: e.profile_id }),
          ...(e.exclusive_time && { [Pu]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const tr = ["forwarded", "-ip", "remote-", "via", "-user"];
function Hm(e) {
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
        cookies: { deny: tr },
        httpHeaders: { request: { deny: tr }, response: { deny: tr } },
        httpBodies: [],
        urlQueryParams: { deny: tr },
        graphQL: { document: true, variables: true },
        genAI: { inputs: false, outputs: false },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7,
      };
}
const Vm = {
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
function Wm(e) {
  const t = e.dataCollection != null ? Vm : Hm(e.sendDefaultPii);
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
const pc = "Not capturing exception because it's already been captured.";
const hc = "Discarded session because of missing or non-string release";
const td = Symbol.for("SentryInternalError");
const nd = Symbol.for("SentryDoNotSendEventError");
const jm = 5000/* 5e3 */;
function wr(e) {
  return { message: e, [td]: true };
}
function ys(e) {
  return { message: e, [nd]: true };
}
function mc(e) {
  return Qr(e) && td in e;
}
function gc(e) {
  return Qr(e) && nd in e;
}
function _c(e, t, n, o, r) {
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
      const u = e.getOptions()._flushInterval ?? jm;

      if (u > 0) {
        (c = true);

        (a = Yu(
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
class zm {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = Gi(t.transportOptions?.bufferSize ?? Ju));
    (this._dataCollection = Wm(t));

    if (t.dsn) {
      (this._dsn = xu(t.dsn));
    } else if (ee) {
      Y.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const o = pm(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: o,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs ?? true);

    if (this._options.enableLogs) {
      _c(this, "afterCaptureLog", "flushLogs", Km, Cm);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      _c(this, "afterCaptureMetric", "flushMetrics", Ym, Im);
    }
  }
  captureException(t, n, o) {
    const r = dt();
    if (Fa(t)) {
      if (ee) {
        Y.log(pc);
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
    const a = Bi(t) ? t : String(t);
    const c = Vo(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, r)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, o) {
    const r = dt();
    if (n?.originalException && Fa(n.originalException)) {
      if (ee) {
        Y.log(pc);
      }

      return r;
    }
    const s = { event_id: r, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = vc(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || o, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    Xn(t, { init: false });
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

    Xu(this, t, this._integrations);

    if (!n) {
      fc(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    const o = Lm(t, this);
    let r = Bh(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      r = nc(r, $h(s));
    }

    if (o) {
      (r = nc(r, o));
    }

    this.sendEnvelope(r).then(s => this.emit("afterSendEvent", t, s));
  }
  sendSession(t) {
    const { release, environment = ji } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (ee) {
          Y.warn(hc);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (ee) {
          Y.warn(hc);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const r = Fh(t, this._dsn, this._options._metadata, this._options.tunnel);
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
    (this._integrations = _m(this, integrations));
    fc(this, integrations);
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
      Xn(t, {
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

    return Qh(s, t, n, o, this, r).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...Yp(o) },
          ...c.contexts,
        });

      const l = Uu(this, o);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, o = $t(), r = Mt()) {
    if (ee &&
      ii(t)) {
      Y.log(`Captured error event \`${ed(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, o, r).then(
      s => s.event_id,
      (s) => {
        if (ee) {
          if (gc(s)) {
            Y.log(s.message);
          } else if (mc(s)) {
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
    const c = od(t);
    const l = ii(t);
    const f = `before send for type \`${t.type || "error"}\``;
    const p = typeof sampleRate === "undefined" ? undefined : ph(sampleRate);
    const d = vc(t.type);
    return this._prepareEvent(t, n, o, r)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", d);
          throw ys("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const g = Gm(this, s, h, n);
        return qm(g, f);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", d);

        if (c) {
          const _ = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", _);
        }

        throw ys(`${f} returned \`null\`, will not send event.`);
      }
      const m = o.getSession() || r.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (l && typeof p == "number" && xr() > p) {
        this.recordDroppedEvent("sample_rate", "error");

        throw ys(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        );
      }

      if (c) {
        const v = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const _ = h.spans ? h.spans.length : 0;
        const b = v - _;

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
        throw gc(h) || mc(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            wr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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

        if (o === qi) {
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

    const n = Um(t, this._options.tunnel && io(this._dsn));
    this.sendEnvelope(n);
  }
}
function vc(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function qm(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Wo(e)) {
    return e.then(
      (o) => {
        if (!xo(o) && o !== null) {
          throw wr(n);
        }
        return o;
      },
      (o) => {
        throw wr(`${t} rejected with ${o}`);
      }
    );
  }
  if (!xo(e) && e !== null) {
    throw wr(n);
  }
  return e;
}
function Gm(e, t, n, o) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !Lh(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (ii(l) && beforeSend) {
    return beforeSend(l, o);
  }
  if (od(l)) {
    if (c || ignoreSpans) {
      const u = Fm(l);
      if (ignoreSpans?.length &&
      tc({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const f = c(u);

        if (f) {
          (l = qo(n, Bm(f)));
        } else {
          Za();
        }
      }
      if (l.spans) {
        const f = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            tc({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            kh(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              f.push(m);
            } else {
              Za();
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
function ii(e) {
  return e.type === undefined;
}
function od(e) {
  return e.type === "transaction";
}
function Ym(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + rd(e.attributes);
}
function Km(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + rd(e.attributes);
}
function rd(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * yc(n[0]));
    } else if (Vo(n)) {
      (t += yc(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function yc(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function Xm(e, t) {
  if (t.debug === true) {
    if (ee) {
      Y.enable();
    } else {
      oo(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  $t().update(t.initialScope);
  const o = new e(t);
  Qm(o);
  o.init();
  return o;
}
function Qm(e) {
  $t().setClient(e);
}
function ws(e) {
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
function Zm(e, t = true) {
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
function Jm(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function sd(e, t, n = [t], o = "npm") {
  const r = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!r.name) {
    (r.name = `sentry.javascript.${t}`);

    (r.packages = n.map(s => ({
      name: `${o}:@sentry/${s}`,
      version: In
    })));

    (r.version = In);
  }
}
const eg = 100;
function xn(e, t) {
  const n = Be();
  const o = Mt();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = eg } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: zo(), ...e };

  const l = beforeBreadcrumb ? oo(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    o.addBreadcrumb(l, maxBreadcrumbs);
  }
}
const tg = "FunctionToString";
const wc = new WeakMap();

const og = () => ({
  name: tg,

  setupOnce() {
    const e = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = Vi(this);
        let o;
        try {
          if (wc.has(Be()) && n !== undefined) {
            (o = n);
          }
        } catch {}
        return e.apply(o ?? this, t);
      };
    } catch {}
  },

  setup(e) {
    wc.set(e, true);
  }
});

const rg = [
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

const sg = "EventFilters";

const ig = (e = {}) => {
  let t;
  return {
    name: sg,
    setup(n) {
      const o = n.getOptions();
      t = Ec(e, o);
    },
    processEvent(n, o, r) {
      if (!t) {
        const s = r.getOptions();
        t = Ec(e, s);
      }
      return cg(n, t) ? null : n;
    },
  };
};

const ag = (e = {}) => ({
  ...ig(e),
  name: "InboundFilters"
});

function Ec(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : rg),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function cg(e, t) {
  if (e.type) {
    if (e.type === "transaction" && ug(e, t.ignoreTransactions)) {
      if (ee) {
        Y.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Sn(e)}`);
      }

      return true;
    }
  } else {
    if (lg(e, t.ignoreErrors)) {
      if (ee) {
        Y.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Sn(e)}`);
      }

      return true;
    }
    if (hg(e)) {
      if (ee) {
        Y.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Sn(e)}`);
      }

      return true;
    }
    if (dg(e, t.denyUrls)) {
      if (ee) {
        Y.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Sn(e)}.
Url: ${$r(e)}`);
      }

      return true;
    }
    if (!fg(e, t.allowUrls)) {
      if (ee) {
        Y.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Sn(e)}.
Url: ${$r(e)}`);
      }

      return true;
    }
  }
  return false;
}
function lg(e, t) {
  return t?.length ? ed(e).some(n => jo(n, t)) : false;
}
function ug(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? jo(e_transaction, t) : false;
}
function dg(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = $r(e);
  return n ? jo(n, t) : false;
}
function fg(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = $r(e);
  return n ? jo(n, t) : true;
}
function pg(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function $r(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        o => o.mechanism?.parent_id === undefined && o.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? pg(n) : null;
  } catch {
    if (ee) {
      Y.error(`Cannot extract url for event ${Sn(e)}`);
    }

    return null;
  }
}
function hg(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function mg(e, t, n, o, r, s) {
  if (!r.exception?.values || !s || !Ot(s.originalException)) {
    return;
  }
  const a =
    r.exception.values.length > 0
      ? r.exception.values[r.exception.values.length - 1]
      : undefined;

  if (a) {
    (r.exception.values = ai(
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
function ai(e, t, n, o, r, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (Ot(o[r])) {
    bc(a, c, o);
    const u = e(t, o[r]);
    const l_length = l.length;
    Sc(u, r, l_length, c);
    (l = ai(e, t, n, o[r], r, [u, ...l], u, l_length));
  }

  if (id(o)) {
    o.errors.forEach((u, f) => {
      if (Ot(u)) {
        bc(a, c, o);
        const p = e(t, u);
        const l_length = l.length;
        Sc(p, `errors[${f}]`, l_length, c);
        (l = ai(e, t, n, u, r, [p, ...l], p, l_length));
      }
    });
  }

  return l;
}
function id(e) {
  return Array.isArray(e.errors);
}
function bc(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(id(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function Sc(e, t, n, o) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: o,
  };
}
function gg(e) {
  return (
    Ot(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function Cc(e) {
  return gg(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
const kc = new Set([]);
function _g(e) {
  const t = "console";
  const n = $n(t, e);
  Mn(t, vg);
  return n;
}
const Nc = new Set();
function vg() {
  if ("console" in fe) {
    op.forEach(e => {
      if (!Nc.has(e) && (e in fe.console)) {
        Nc.add(e);

        rt(fe.console, e, t => {
          (Or[e] = t);

          return (...n) => {
            const [o] = n;
            const Or_e = Or[e];
            const s = kc.size && typeof o == "string" && jo(o, kc);

            if (!s) {
              Et("console", { args: n, level: e });
            }

            if ((!s || (ee && Y.isEnabled()))) {
              Or_e?.apply(fe.console, n);
            }
          };
        });
      }
    });
  }
}
function yg(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const wg = "Dedupe";

const bg = () => {
  let e;
  return {
    name: wg,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (Sg(t, e)) {
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

function Sg(e, t) {
  return t ? !!(Cg(e, t) || kg(e, t)) : false;
}
function Cg(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !cd(e, t) ||
    !ad(e, t)
  );
}
function kg(e, t) {
  const n = Tc(t);
  const o = Tc(e);
  return !(
    !n ||
    !o ||
    n.type !== o.type ||
    n.value !== o.value ||
    !cd(e, t) ||
    !ad(e, t)
  );
}
function ad(e, t) {
  let n = xa(e);
  let o = xa(t);
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
function cd(e, t) {
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
function Tc(e) {
  return e.exception?.values?.[0];
}
const Ng = "ConversationId";

const Ig = () => ({
  name: Ng,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = $t().getScopeData();
      const o = Mt().getScopeData();
      const r = n.conversationId || o.conversationId;
      if (r) {
        const { op: op_1, data, description } = es(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(Jp, r);
      }
    });
  }
});

function ld(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const Mo = fe;
function Rg() {
  return "history" in Mo && !!Mo.history;
}
function Ag() {
  if (!("fetch" in Mo)) {
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
function ci(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function Lg() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!Ag()) {
    return false;
  }
  if (ci(Mo.fetch)) {
    return true;
  }
  let e = false;
  const Mo_document = Mo.document;
  if (Mo_document && typeof Mo_document.createElement == "function") {
    try {
      const n = Mo_document.createElement("iframe");
      (n.hidden = true);
      Mo_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = ci(n.contentWindow.fetch));
      }

      Mo_document.head.removeChild(n);
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
function Pg(e, t) {
  const n = "fetch";
  const o = $n(n, e);

  Mn(n, () => Og(undefined, t));

  return o;
}
function Og(e, t = false) {
  if (!t || Lg()) {
    rt(fe, "fetch", n => (...o) => {
      const r = new Error();
      const { method, url } = xg(o);

      const c = {
        args: o,
        fetchData: { method: method, url: url },
        startTimestamp: qt() * 1000/* 1e3 */,
        virtualError: r,
        headers: $g(o),
      };

      Et("fetch", { ...c });

      return n.apply(fe, o).then(
        async l => {
          Et("fetch", { ...c, endTimestamp: qt() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          Et("fetch", { ...c, endTimestamp: qt() * 1000/* 1e3 */, error: l });

          if (Ot(l) &&
            l.stack === undefined) {
            (l.stack = r.stack);
            an(l, "framesToPop", 1);
          }

          const f =
            Be()?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (f !== false &&
          Ot(l) &&
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
                an(l, "__sentry_fetch_url_host__", h);
              }
            } catch {}
          }
          throw l;
        }
      );
    });
  }
}
function Er(e, t) {
  return Qr(e) && !!e[t];
}
function Ic(e) {
  return typeof e == "string"
    ? e
    : e
    ? Er(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function xg(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, o] = e;
    return {
      url: Ic(n),
      method: Er(o, "method")
        ? String(o.method).toUpperCase()
        : vu(n) && Er(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: Ic(t),
    method: Er(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function $g(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (vu(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const ud = fe;
function Yi() {
  try {
    return ud.document.location.href;
  } catch {
    return "";
  }
}
function Mg(e, t = 5) {
  if (!ud.HTMLElement) {
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
let li = 0;
function dd() {
  return li > 0;
}
function Dg() {
  li++;

  setTimeout(() => {
    li--;
  });
}
function Zn(e, t = {}) {
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
    if (Vi(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const o = function (...r) {
    fe._sentryWrappedDepth = (fe._sentryWrappedDepth || 0) + 1;
    try {
      const s = r.map(a => Zn(a, t));
      return e.apply(this, s);
    } catch (s) {
      Dg();

      Ru((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              ei(c, undefined);
              Rn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: r });
            return c;
          }
        );

        ju(s);
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
  yu(o, e);
  an(e, "__sentry_wrapped__", o);
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
function Rc() {
  const e = Yi();
  const { referrer } = ye.document || {};
  const { userAgent } = ye.navigator || {};
  const o = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: o };
}
function Ki(e, t) {
  const n = ts(e, t);
  const o = { type: Vg(t), value: Wg(t) };

  if (n.length) {
    (o.stacktrace = { frames: n });
  }

  if (o.type === undefined &&
    o.value === "") {
    (o.value = "Unrecoverable error caught");
  }

  return o;
}
function Ug(e, t, n, o) {
  const s = Be()?.getOptions().normalizeDepth;
  const a = Yg(t);
  const c = { __serialized__: bu(t, s) };
  if (a) {
    return { exception: { values: [Ki(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: Zr(t) ? t.constructor.name : o ? "UnhandledRejection" : "Error",
          value: qg(t, { isUnhandledRejection: o }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = ts(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function Es(e, t) {
  return { exception: { values: [Ki(e, t)] } };
}
function ts(e, t) {
  const n = t.stacktrace || t.stack || "";
  const o = Bg(t);
  const r = Hg(t);
  try {
    return e(n, o, r);
  } catch {}
  return [];
}
const Fg = /Minified React error #\d+;/i;
function Bg(e) {
  return e && Fg.test(e.message) ? 1 : 0;
}
function Hg(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function fd(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function Vg(e) {
  const t = e?.name;
  return !t && fd(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function Wg(e) {
  const t = e?.message;
  return fd(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? Cc(t.error)
      : Cc(e)
    : "No error message";
}
function jg(e, t, n, o) {
  const r = n?.syntheticException || undefined;
  const s = Xi(e, t, r, o);
  Rn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return Go(s);
}
function zg(e, t, n = "info", o, r) {
  const s = o?.syntheticException || undefined;
  const a = ui(e, t, s, r);
  (a.level = n);

  if (o?.event_id) {
    (a.event_id = o.event_id);
  }

  return Go(a);
}
function Xi(e, t, n, o, r) {
  let s;
  if (_u(t) && t.error) {
    return Es(e, t.error);
  }
  if (Ma(t) || gp(t)) {
    const a = t;
    if ("stack" in t) {
      s = Es(e, t);
      const c = s.exception?.values?.[0];
      if (o && n && c && !c.stacktrace) {
        const l = ts(e, n);

        if (l.length) {
          (c.stacktrace = { frames: l });
          Rn(s, { synthetic: true });
        }
      }
    } else {
      const c = a.name || (Ma(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = ui(e, l, n, o));
      ei(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (Ot(t)) {
    return Es(e, t);
  }

  if (xo(t) || Zr(t)) {
    (s = Ug(e, t, n, r));
    Rn(s, { synthetic: true });
    return s;
  }

  (s = ui(e, t, n, o));
  ei(s, `${t}`);
  Rn(s, { synthetic: true });
  return s;
}
function ui(e, t, n, o) {
  const r = {};
  if (o && n) {
    const s = ts(e, n);

    if (s.length) {
      (r.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    Rn(r, { synthetic: true });
  }
  if (Bi(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (r.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return r;
  }
  (r.message = t);
  return r;
}
function qg(e, { isUnhandledRejection: t }) {
  const n = vp(e);
  const o = t ? "promise rejection" : "exception";
  return _u(e)
    ? `Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``
    : Zr(e)
    ? `Event \`${Gg(e)}\` (type=${e.type}) captured as ${o}`
    : `Object captured as ${o} with keys: ${n}`;
}
function Gg(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function Yg(e) {
  return Object.values(e).find(Ot);
}
class Kg extends zm {
  constructor(t) {
    const n = Xg(t);
    const o = ye.SENTRY_SDK_SOURCE || ym();
    sd(n, "browser", ["browser"], o);
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
      this.on("beforeSendSession", Jm);
    }
  }
  eventFromException(t, n) {
    return jg(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", o) {
    return zg(
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
function Xg(e) {
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
const Qg = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Pe = fe;
function Ac(e, t, n) {
  if (Pe.document) {
    Pe.addEventListener(e, t, n);
  }
}
function Lc(e, t, n) {
  if (Pe.document) {
    Pe.removeEventListener(e, t, n);
  }
}

const Zg = (e) => {
  return () => {
    if (!t) {
      e();
      (t = true);
    }
  };
};

const Jg = (e) => {
  const t = Pe.requestIdleCallback || Pe.setTimeout;

  if (Pe.document?.visibilityState === "hidden") {
    e();
  } else {
    (e = Zg(e));
    Ac("visibilitychange", e, { once: true, capture: true });
    Ac("pagehide", e, { once: true, capture: true });

    t(() => {
      e();
      Lc("visibilitychange", e, { capture: true });
      Lc("pagehide", e, { capture: true });
    });
  }
};

const e_ = 80;
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
function Zt(e, t, n) {
  const _n_t = _n[t];
  if (_n_t) {
    try {
      return _n_t.call(e, n);
    } catch {}
  }
  const e_t = e[t];
  return typeof e_t == "function" ? e_t.call(e, n) : e_t;
}
function pd(e, t = {}) {
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
    const p = (!Array.isArray(t) && t.maxStringLength) || e_;

    while (n &&
         s++ < o &&
         ((u = t_(n, f)),
         !(u === "html" || (s > 1 && a + r.length * c_length + u.length >= p)))) {
      r.push(u);
      (a += u.length);
      (n = Zt(n, "parentNode"));
    }

    return r.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function t_(e, t) {
  const n = [];
  const o = Zt(e, "tagName");
  if (!o) {
    return "";
  }
  if (typeof HTMLElement !== "undefined" && e instanceof HTMLElement) {
    const s = Zt(e, "dataset");
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
        .filter(s => Zt(e, "getAttribute", s))
        .map(s => [s, Zt(e, "getAttribute", s)])
    : null;
  if (r?.length) {
    r.forEach((s) => {
      n.push(`[${s[0]}="${s[1]}"]`);
    });
  } else {
    const s = Zt(e, "id");

    if (s) {
      n.push(`#${s}`);
    }

    const a = Zt(e, "className");
    if (a && zt(a)) {
      const c = a.split(/\s+/);
      for (const l of c) {
        n.push(`.${l}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const a = Zt(e, "getAttribute", s);

    if (a) {
      n.push(`[${s}="${a}"]`);
    }
  }
  return n.join("");
}
const n_ = 1000/* 1e3 */;
let Pc;
let di;
let fi;
function o_(e) {
  $n("dom", e);
  Mn("dom", r_);
}
function r_() {
  if (!Pe.document) {
    return;
  }
  const e = Et.bind(null, "dom");
  const t = Oc(e, true);
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

            const f = (u[a] = u[a] || { refCount: 0 });
            if (!f.handler) {
              const p = Oc(e);
              (f.handler = p);
              s.call(this, a, p, l);
            }
            f.refCount++;
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
function s_(e) {
  if (e.type !== di) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== fi) {
      return false;
    }
  } catch {}
  return true;
}
function i_(e, t) {
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
function Oc(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const o = a_(n);
    if (i_(n.type, o)) {
      return;
    }
    an(n, "_sentryCaptured", true);

    if (o && !o._sentryId) {
      an(o, "_sentryId", dt());
    }

    const r = n.type === "keypress" ? "input" : n.type;

    if (!s_(n)) {
      e({ event: n, name: r, global: t });
      (di = n.type);
      (fi = o ? o._sentryId : undefined);
    }

    clearTimeout(Pc);

    (Pc = Pe.setTimeout(() => {
      (fi = undefined);
      (di = undefined);
    }, n_));
  };
}
function a_(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let nr;
function hd(e) {
  const t = "history";
  $n(t, e);
  Mn(t, c_);
}
function c_() {
  Pe.addEventListener("popstate", () => {
    const t = Pe.location.href;
    const n = nr;
    (nr = t);

    if (n === t) {
      return;
    }

    Et("history", { from: n, to: t });
  });

  if (!Rg()) {
    return;
  }

  class e {
    constructor(t) {
      return function (...n) {
        const o = n.length > 2 ? n[2] : undefined;
        if (o) {
          const r = nr;
          const s = l_(String(o));
          (nr = s);

          if (r === s) {
            return t.apply(this, n);
          }

          Et("history", { from: r, to: s });
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
function l_(e) {
  try {
    return new URL(e, Pe.location.origin).toString();
  } catch {
    return e;
  }
}
const br = {};
function u_(e) {
  const br_e = br[e];
  if (br_e) {
    return br_e;
  }
  let n = Pe[e];
  if (ci(n)) {
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
      if (Qg) {
        Y.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          r
        );
      }
    }
  }
  return n && (br[e] = n.bind(Pe));
}
function d_(e) {
  br[e] = undefined;
}
const bo = "__sentry_xhr_v3__";
function f_(e) {
  $n("xhr", e);
  Mn("xhr", p_);
}
function p_() {
  if (!Pe.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, o) {
      const r = new Error();
      const s = qt() * 1000/* 1e3 */;
      const a = zt(o[0]) ? o[0].toUpperCase() : undefined;
      const c = h_(o[1]);
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
          const f = {
            endTimestamp: qt() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: r,
          };
          Et("xhr", f);
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
          const f_bo = f[bo];

          if (f_bo && zt(d) && zt(h)) {
            (f_bo.request_headers[d.toLowerCase()] = h);
          }

          return u.apply(f, p);
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
        Et("xhr", s);
        return t.apply(n, o);
      },
    }));
}
function h_(e) {
  if (zt(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
function m_(e) {
  if (typeof Element === "undefined") {
    return false;
  }
  try {
    return e instanceof Element;
  } catch {
    return false;
  }
}
const g_ = 40;
function __(e, t = u_("fetch")) {
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
      d_("fetch");
      throw l;
    } finally {
      (n -= a);
      o--;
    }
  }
  return Dm(e, r, Gi(e.bufferSize || g_));
}
const Jn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const v_ = 30;
const y_ = 50;
function pi(e, t, n, o) {
  const r = { filename: e, function: t === "<anonymous>" ? On : t, in_app: true };

  if (n !== undefined) {
    (r.lineno = n);
  }

  if (o !== undefined) {
    (r.colno = o);
  }

  return r;
}
const w_ = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const E_ =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const b_ = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const S_ = /at (.+?) ?\(data:(.+?),/;

const C_ = (e) => {
  const t = e.match(S_);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = w_.exec(e);
  if (n) {
    const [, r, s, a] = n;
    return pi(r, On, Number(s), Number(a));
  }
  const o = E_.exec(e);
  if (o) {
    if (o[2]?.indexOf("eval") === 0) {
      const c = b_.exec(o[2]);

      if (c) {
        (o[2] = c[1]);
        (o[3] = c[2]);
        (o[4] = c[3]);
      }
    }
    const [s, a] = md(o[1] || On, o[2]);
    return pi(a, s, o[3] ? +o[3] : undefined, o[4] ? +o[4] : undefined);
  }
};

const k_ = [v_, C_];

const N_ =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const T_ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const I_ = (e) => {
  const t = N_.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = T_.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, o] = t;
    let r = t[1] || On;
    ([r, o] = md(r, o));
    return pi(o, r, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const R_ = [y_, I_];
const A_ = [k_, R_];
const L_ = mu(...A_);

const md = (e, t) => {
  const n = e.includes("safari-extension");
  const o = e.includes("safari-web-extension");
  return n || o
    ? [
        e.includes("@") ? e.split("@")[0] : On,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const or = 1024;
const P_ = "Breadcrumbs";

const x_ = (e = {}) => {
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
    name: P_,
    setup(n) {
      if (t.console) {
        _g(D_(n));
      }

      if (t.dom) {
        o_(M_(n, t.dom));
      }

      if (t.xhr) {
        f_(U_(n));
      }

      if (t.fetch) {
        Pg(F_(n));
      }

      if (t.history) {
        hd(B_(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", $_(n));
      }
    },
  };
};

function $_(e) {
  return n => {
    if (Be() === e) {
      xn(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: Sn(n),
        },
        { event: n }
      );
    }
  };
}
function M_(e, t) {
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
      c > or) {
      Jn &&
          Y.warn(
            `\`dom.maxStringLength\` cannot exceed ${or}, but a value of ${c} was configured. Sentry will use ${or} instead.`
          );

      (c = or);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const o_event = o.event;
      const f = H_(o_event) ? o_event.target : o_event;
      (r = pd(f, { keyAttrs: a, maxStringLength: c }));
      (s = Mg(f));
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

    xn(l, { event: o.event, name: o.name, global: o.global });
  };
}
function D_(e) {
  return function (n) {
    if (Be() !== e) {
      return;
    }
    const o = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: yg(n.level),
      message: Ua(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (o.message = `Assertion failed: ${
          Ua(n.args.slice(1), " ") || "console.assert"
        }`);

        (o.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    xn(o, { input: n.args, level: n.level });
  };
}
function U_(e) {
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
    const f = { method: method, url: url, status_code: status_code };
    const p = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const d = { category: "xhr", data: f, type: "http", level: ld(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", d, p);
    xn(d, p);
  };
}
function F_(e) {
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
        xn(a, s);
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
          level: ld(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        xn(l, c);
      }
    }
  };
}
function B_(e) {
  return n => {
    if (Be() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = ws(ye.location.href);
    let a = from ? ws(from) : undefined;
    const c = ws(to_2);

    if (!a?.path) {
      (a = s);
    }

    if (s.protocol === c.protocol && s.host === c.host) {
      (to_2 = c.relative);
    }

    if (s.protocol === a.protocol && s.host === a.host) {
      (from = a.relative);
    }

    xn({ category: "navigation", data: { from: from, to: to_2 } });
  };
}
function H_(e) {
  return !!e && !!e.target;
}

const V_ =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const W_ = "BrowserApiErrors";

const z_ = (e = {}) => {
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
    name: W_,
    setupOnce() {
      if (t.setTimeout) {
        rt(ye, "setTimeout", xc);
      }

      if (t.setInterval) {
        rt(ye, "setInterval", xc);
      }

      if (t.requestAnimationFrame) {
        rt(ye, "requestAnimationFrame", q_);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in ye) {
        rt(XMLHttpRequest.prototype, "send", G_);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : V_).forEach(r => Y_(r, t));
      }
    },
  };
};

function xc(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = Zn(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${sn(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function q_(e) {
  return function (t) {
    return e.apply(this, [
      Zn(t, {
        mechanism: {
          data: { handler: sn(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function G_(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
      if (r in n &&
        typeof n[r] == "function") {
        rt(n, r, s => {
          const a = {
              mechanism: {
                data: { handler: sn(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${r}`,
              },
            };

          const c = Vi(s);

          if (c) {
            (a.mechanism.data.handler = sn(c));
          }

          return Zn(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function Y_(e, t) {
  const o = ye[e]?.prototype;

  if (o?.hasOwnProperty?.("addEventListener")) {
    rt(o, "addEventListener", r => (function(s, a, c) {
      try {
        if (K_(a)) {
          (a.handleEvent = Zn(a.handleEvent, {
              mechanism: {
                data: { handler: sn(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        X_(this, s, a);
      }

      return r.apply(this, [
        s,
        Zn(a, {
          mechanism: {
            data: { handler: sn(a), target: e },
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
function K_(e) {
  return typeof e.handleEvent == "function";
}
function X_(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const Q_ = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof ye.document === "undefined") {
          if (Jn) {
            Y.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        uc({ ignoreDuration: true });
        let n = false;
        Jg(() => {
          if (!n) {
            vs();
            (n = true);
          }
        });
        const o = Mt();
        let r = o.getUser();

        o.addScopeListener((s) => {
          const a = s.getUser();

          if ((r?.id !== a?.id || r?.ip_address !== a?.ip_address)) {
            (r = a);
            n && vs();
          }
        });

        if (t === "route") {
          hd(({ from: s, to: a }) => {
            if (s !== a) {
              uc({ ignoreDuration: true });
              vs();
              (n = true);
            }
          });
        }
      },
    };
  };

const Z_ = "CultureContext";

const ev = () => ({
  name: Z_,

  preprocessEvent(e) {
    const t = $c();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = $c();

    if (t) {
      Vu(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function $c() {
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
const tv = "GlobalHandlers";

const ov = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: tv,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        rv(n);
        Mc("onerror");
      }

      if (t.onunhandledrejection) {
        sv(n);
        Mc("onunhandledrejection");
      }
    },
  };
};

function rv(e) {
  fp((t) => {
    const { stackParser, attachStacktrace } = gd();
    if (Be() !== e || dd()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = cv(Xi(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    zu(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function sv(e) {
  hp((t) => {
    const { stackParser, attachStacktrace } = gd();
    if (Be() !== e || dd()) {
      return;
    }
    const r = iv(t);
    const s = Vo(r) ? av(r) : Xi(stackParser, r, undefined, attachStacktrace, true);
    (s.level = "error");

    zu(s, {
      originalException: r,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function iv(e) {
  if (Vo(e)) {
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
function av(e) {
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
function cv(e, t, n, o) {
  const r = (e.exception = e.exception || {});
  const s = (r.values = r.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: o,
      lineno: n,
      filename: lv(t) ?? Yi(),
      function: On,
      in_app: true,
    });
  }

  return e;
}
function Mc(e) {
  if (Jn) {
    Y.log(`Global Handler attached: ${e}`);
  }
}
function gd() {
  return Be()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function lv(e) {
  if (!(!zt(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${Zm(e, false)}>` : e;
  }
}

const uv = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!ye.navigator && !ye.location && !ye.document) {
      return;
    }
    const t = Rc();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    const t = e.attributes?.[Au];
    if (!ye.navigator && !ye.location && !ye.document) {
      return;
    }
    const n = Rc();
    Vu(e, {
      [Yh]: t !== "http.client" ? n.url : undefined,
      "http.request.header.user_agent": n.headers["User-Agent"],
      "http.request.header.referer": n.headers.Referer,
    });
  }
});

const dv = "cause";
const fv = 5;
const pv = "LinkedErrors";

const mv = (e = {}) => {
  const t = e.limit || fv;
  const n = e.key || dv;
  return {
    name: pv,
    preprocessEvent(o, r, s) {
      const a = s.getOptions();
      mg(Ki, a.stackParser, n, t, o, r);
    },
  };
};

const gv = /^HTML(\w*)Element$/;
function _d(e) {
  if (typeof window !== "undefined" && e === window) {
    return "[Window]";
  }
  if (typeof document !== "undefined" && e === document) {
    return "[Document]";
  }
  if (m_(e)) {
    const t = _v(e);
    if (gv.test(t)) {
      return `[HTMLElement: ${pd(e)}]`;
    }
  }
}
function _v(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function vv() {
  return yv()
    ? (Jn &&
        oo(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function yv() {
  if (typeof ye.window === "undefined") {
    return false;
  }
  const e = ye;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = Yi();
  return !(
    ye === ye.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function wv(e) {
  return [ag(), og(), Ig(), z_(), x_(), ov(), mv(), bg(), uv(), ev(), Q_()];
}
function Ev(e = {}) {
  const t = !e.skipBrowserExtensionCheck && vv();
  let n = e.defaultIntegrations == null ? wv() : e.defaultIntegrations;
  const o = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: up(e.stackParser || L_),
    integrations: gm({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || __,
  };
  Eu(_d);
  return Xm(Kg, o);
}
function Dc(e = {}) {
  const ye_document = ye.document;
  const n = ye_document?.head || ye_document?.body;
  if (!n) {
    if (Jn) {
      Y.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const o = $t();
  const s = Be()?.getDsn();
  if (!s) {
    if (Jn) {
      Y.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...o.getUser(), ...e.user },
      eventId: e.eventId || lm(),
    };

  const c = ye.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = hm(s, a));
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
          ye.removeEventListener("message", f);
        }
      }
    };
    ye.addEventListener("message", f);
  }

  n.appendChild(c);
}
let cn;
let ke;
let bs;
let Uc;
let eo = 0;
const vd = [];
const Le = te;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = Le;

function co(e, t) {
  if (Le.__h) {
    Le.__h(ke, e, eo || t);
  }

  (eo = 0);
  const n = ke.__H || (ke.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function L(e) {
  (eo = 1);
  return Qi(Ed, e);
}
function Qi(e, t, n) {
  const o = co(cn++, 2);
  (o.t = e);

  if (!o.__c &&
    ((o.__ = [
      n ? n(t) : Ed(undefined, t),
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
function U(e, t) {
  const n = co(cn++, 3);

  if (!Le.__s && Ji(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    ke.__H.__h.push(n);
  }
}
function St(e, t) {
  const n = co(cn++, 4);

  if (!Le.__s && Ji(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    ke.__h.push(n);
  }
}
function x(e) {
  (eo = 5);

  return Te(() => ({
    current: e
  }), []);
}
function Zi(e, t, n) {
  (eo = 6);

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
  const n = co(cn++, 7);

  if (Ji(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function I(e, t) {
  (eo = 8);

  return Te(() => e, t);
}
function Yo(e) {
  const t = ke.context[e.__c];
  const n = co(cn++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(ke)), t.props.value) : e.__;
}
function yd(e, t) {
  if (Le.useDebugValue) {
    Le.useDebugValue(t ? t(e) : e);
  }
}
function wd() {
  const e = co(cn++, 11);
  if (!e.__) {
    for (var t = ke.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function bv() {
  for (let e; (e = vd.shift()); ) {
    const e_H = e.__H;
    if (e.__P && e_H) {
      try {
        e_H.__h.some(Sr);
        e_H.__h.some(hi);
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

  (cn = 0);
  const t = (ke = e.__c).__H;

  if (t) {
    if (bs === ke) {
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
      t.__h.some(Sr);
      t.__h.some(hi);
      (t.__h = []);
      (cn = 0);
    }
  }

  (bs = ke);
});

(Le.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((vd.push(e_c) !== 1 && Uc === Le.requestAnimationFrame) ||
          ((Uc = Le.requestAnimationFrame) || Sv)(bv));

    e_c.__H.__.some(n => {
      if (n.u) {
        (n.__H = n.u);
        (n.u = undefined);
      }
    });
  }

  bs = null;
  ke = null;
});

(Le.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.some(Sr);

      (n.__h = n.__h.filter(o => !o.__ || hi(o)));
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
          Sr(o);
        } catch (r) {
          t = r;
        }
      });

    (e_c.__H = undefined);
    t && Le.__e(t, e_c.__v);
  }
});

const zc = typeof requestAnimationFrame == "function";
function Sv(e) {
  let t;

  const n = () => {
    clearTimeout(o);

    if (zc) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var o = setTimeout(n, 35);

  if (zc) {
    (t = requestAnimationFrame(n));
  }
}
function Sr(e) {
  const t = ke;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (ke = t);
}
function hi(e) {
  const t = ke;
  (e.__c = e.__());
  (ke = t);
}
function Ji(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, o) => n !== e[o]);
}
function Ed(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bd(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function mi(e, t) {
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
function Sd(e, t) {
  const n = t();
  const o = L({ t: { __: n, u: t } });
  const r = o[0].t;
  const [, s] = o;

  St(
    () => {
      (r.__ = n);
      (r.u = t);

      if (Ss(r)) {
        s({ t: r });
      }
    },
    [e, n, t]
  );

  U(
    () => {
      if (Ss(r)) {
        s({ t: r });
      }

      return e(() => {
        if (Ss(r)) {
          s({ t: r });
        }
      });
    },
    [e]
  );

  return n;
}
function Ss(e) {
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
function Cd(e) {
  e();
}
function kd(e) {
  return e;
}
function Nd() {
  return [false, Cd];
}
const Td = St;

class gi {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return mi(this.props, e) || mi(this.state, t);
    }
}

function ns(e, t) {
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

    return mi(this.props, r);
  }
  function o(r) {
    (this.shouldComponentUpdate = n);
    return bt(e, r);
  }
  (o.displayName = `Memo(${e.displayName || e.name})`);
  o.__f = true;
  o.prototype.isReactComponent = true;
  (o.type = e);
  return o;
}
((gi.prototype = new ut()).isPureReactComponent = true);

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
const Cv =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Id(e) {
  class t {
    constructor(n) {
      const o = bd({}, n);
      delete o.ref;
      return e(o, n.ref || null);
    }

    static componentWillUnmount() {
      Oo(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = Cv);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const Gc = (e, t) => e == null ? null : wt(wt(e).map(t));

const kv = {
  map: Gc,
  forEach: Gc,
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
function Rd(e, t, n) {
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
    e.__k.map(o => Rd(o, t, n)));
  }

  return e;
}
function Ad(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(o => Ad(o, t, n)));

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
        this.__v.__k[0] = Rd(this.__b, n, (o.__O = o.__P));
      }
      this.__b = null;
    }
    const r = t.__a && bt(ve, null, e.fallback);

    if (r) {
      (r.__u &= -33);
    }

    return [bt(ve, null, t.__a ? null : e.children), r];
  }
}

function Ld(e) {
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
    return r ? bt(r, a) : null;
  }
  (s.displayName = "Lazy");
  (s.__f = true);
  return s;
}

class So {
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
  const r = Ld(o.__v);

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
        o.__v.__k[0] = Ad(u, u.__c.__P, u.__c.__O);
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

const Kc = (e, t, n) => {
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
function Tv(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function Iv(e) {
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

  Oo(bt(Tv, { context: t.context }, e.__v), t.v);
}

export function $(e, t) {
  const n = bt(Iv, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((So.prototype = new ut()).__a = function (e) {
  const t = this;
  const n = Ld(t.__v);
  const o = t.l.get(e);
  o[0]++;

  return r => {
    const s = () => {
      if (t.props.revealOrder) {
        o.push(r);
        Kc(t, e, o);
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

(So.prototype.componentDidUpdate = So.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        Kc(e, n, t);
      });
    });

const Pd =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const Rv =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const Av = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const Lv = /[A-Z0-9]/g;
const Pv = typeof document !== "undefined";

const Ov = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function Od(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Oo(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function xv(e, t, n) {
  du(e, t);

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
let ea;

const $v = {
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
            (Pv && a === "children" && type === "noscript") ||
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
                  Ov(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (Av.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && Rv.test(a)) {
            (a = a.replace(Lv, "-$&").toLowerCase());
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
        Object.defineProperty(r, "className", $v);
      } else if (props.className) {
        (r.class = r.className = props.className);
      }

      (t.props = r);
    })(e);
  }

  (e.$$typeof = Pd);

  if (vnode) {
    vnode(e);
  }
};
te.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (ea = e.__c);
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

  (ea = null);
};

const Mv = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return ea.__n[e.__c].props.value;
        },
        useCallback: I,
        useContext: Yo,
        useDebugValue: yd,
        useDeferredValue: kd,
        useEffect: U,
        useId: wd,
        useImperativeHandle: Zi,
        useInsertionEffect: Td,
        useLayoutEffect: St,
        useMemo: Te,
        useReducer: Qi,
        useRef: x,
        useState: L,
        useSyncExternalStore: Sd,
        useTransition: Nd,
      },
    },
  };

const xd = "18.3.1";
function Dv(e) {
  return bt.bind(null, e);
}
function Ko(e) {
  return !!e && e.$$typeof === Pd;
}
function Uv(e) {
  return Ko(e) && e.type === ve;
}
function Fv(e) {
  return (
    !!e &&
    typeof e.displayName == "string" &&
    e.displayName.indexOf("Memo(") == 0
  );
}
function Bv(e) {
  return Ko(e) ? fu(...arguments) : e;
}
function $d(e) {
  return !!e.__k && (Oo(null, e), true);
}
function Hv(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Vv = (e, t) => e(t);

const Wv = (e, t) => {
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

const jv = Ko;

const Co = {
  useState: L,
  useId: wd,
  useReducer: Qi,
  useEffect: U,
  useLayoutEffect: St,
  useInsertionEffect: Td,
  useTransition: Nd,
  useDeferredValue: kd,
  useSyncExternalStore: Sd,
  startTransition: Cd,
  useRef: x,
  useImperativeHandle: Zi,
  useMemo: Te,
  useCallback: I,
  useContext: Yo,
  useDebugValue: yd,
  version: "18.3.1",
  Children: kv,
  render: Od,
  hydrate: xv,
  unmountComponentAtNode: $d,
  createPortal: $,
  createElement: bt,
  createContext: to,
  createFactory: Dv,
  cloneElement: Bv,
  createRef: Xf,
  Fragment: ve,
  isValidElement: Ko,
  isElement: jv,
  isFragment: Uv,
  isMemo: Fv,
  findDOMNode: Hv,
  Component: ut,
  PureComponent: gi,
  memo: ns,
  forwardRef: Id,
  flushSync: Wv,
  unstable_batchedUpdates: Vv,
  StrictMode: ve,
  Suspense: De,
  SuspenseList: So,
  lazy: ce,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mv,
};

function zv(e) {
  return (
    xo(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function qv(e) {
  const t = { ...e };
  sd(t, "react");
  cm("react", { version: xd });
  const n = Ev(t);
  Eu(Gv);
  return n;
}
function Gv(e) {
  return zv(e) ? "[SyntheticEvent]" : _d(e);
}
function Yv(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function Kv(e, t) {
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
function Xv(e, { componentStack: t }, n) {
  if (Yv(xd) && Ot(e) && t) {
    const o = new Error(e.message);
    (o.name = `React ErrorBoundary ${e.name}`);
    (o.stack = t);
    Kv(e, o);
  }
  return ju(e, n);
}
const Qv = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Cs = { componentStack: null, error: null, eventId: null };
class Zv extends ut {
  constructor(t) {
    super(t);
    (this.state = Cs);
    (this._openFallbackReportDialog = true);
    const n = Be();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (o) => {
        if (!o.type &&
          this._lastEventId &&
          o.event_id === this._lastEventId) {
          Dc({ ...t.dialogOptions, eventId: this._lastEventId });
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

    Ru((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const f = Xv(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, f);
      }

      if (showDialog) {
        (this._lastEventId = f);
        this._openFallbackReportDialog && Dc({ ...dialogOptions, eventId: f });
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
      if (this.state === Cs) {
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

    this.setState(Cs);
  }
  render() {
    const { fallback, children } = this.props;
    const o = this.state;
    if (o.componentStack === null) {
      return typeof children == "function" ? children() : children;
    }
    const r =
      typeof fallback == "function"
        ? bt(fallback, {
            error: o.error,
            componentStack: o.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: o.eventId,
          })
        : fallback;
    return Ko(r)
      ? r
      : (fallback && Qv && Y.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
qv({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function Jv(e) {
  return {
    render(t) {
      Od(t, e);
    },
    unmount() {
      $d(e);
    },
  };
}
const ey = "modulepreload";

const ty = e => `/${e}`;

const el = {};

const se = (t, n, o) => {
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
        (u = ty(u));

        if (u in el) {
          return;
        }

        el[u] = true;
        const f = u.endsWith(".css");
        const p = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${p}`)) {
          return;
        }
        const d = document.createElement("link");
        (d.rel = f ? "stylesheet" : ey);

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

const ny = {};
function rr(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function oy(e, t, n) {
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
  (e = _i(e.replace(r, "")));
  (t = _i(t || ""));
  for (let f = Math.max(e.length, t.length), p = 0; p < f; p++) {
    if (t[p] && t[p].charAt(0) === ":") {
      const d = t[p].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[p].match(/[+*?]+$/) || ny)[0] || "";
      const m = ~h.indexOf("+");
      const g = ~h.indexOf("*");
      const v = e[p] || "";
      if (!v && !g && (!h.includes("?") || m)) {
        o = false;
        break;
      }
      (a[d] = decodeURIComponent(v));

      if (m || g) {
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
function ry(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function sy(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : _i(n.props.path).map(iy).join(""))(e));

  return e.props;
}
function _i(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function iy(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const ay = {};
const An = [];
const Ao = [];
let ot = null;
const ta = { url: na() };
const Md = to(ta);
function os() {
  const e = Yo(Md);
  if (e === ta) {
    const t = L()[1];
    U(() => {
      Ao.push(t);

      return () => Ao.splice(Ao.indexOf(t), 1);
    }, []);
  }
  return [e, Ye];
}
function na() {
  let e;
  return `${(e =
  ot && ot.location
    ? ot.location
    : ot && ot.getCurrentLocation
    ? ot.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : ay).pathname || ""}${e.search || ""}`;
}
function Ye(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let o = An.length; o--; ) {
      if (An[o].canRoute(n)) {
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

  return Dd(e);
}
function Dd(e) {
  let t = false;
  for (let n = 0; n < An.length; n++) {
    if (An[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function cy(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return Ye(t);
    }
  }
}
function ly(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function uy(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (cy(e_target)) {
          return ly(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Ud(e) {
  if (e.history) {
    (ot = e.history);
  }

  (this.state = { url: e.url || na() });
}
rr((Ud.prototype = new ut()), {
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

    if (!tl) {
      (tl = true);

      ot ||
        addEventListener("popstate", () => {
          Dd(na());
        });

      addEventListener("click", uy);
    }

    An.push(this);

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

    An.splice(An.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(sy).sort(ry);

    for (const o of e) {
      const r = oy(t, o.props.path, o.props);
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
      (o = fu(
            c[0],
            rr(rr({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      rr(
        ta,
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
      for (let l = Ao.length; l--; ) {
        Ao[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return bt(Md.Provider, { value: a }, o);
  },
});

const nl = (e) => {
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

const dy = e => e ? nl(e) : nl;

const fy = e => e;

function py(e, t = fy) {
  const n = Co.useSyncExternalStore(
    e.subscribe,
    Co.useCallback(() => t(e.getState()), [e, t]),
    Co.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Co.useDebugValue(n);
  return n;
}

const ol = (e) => {
  const t = dy(e);

  const n = o => py(t, o);

  Object.assign(n, t);
  return n;
};

const et = e => e ? ol(e) : ol;

function oa(e, t) {
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

const vi = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(o) {
              return vi(o)(n);
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
          return vi(o)(n);
        },
      };
    }
  };

const Fd = (e, t) => (n, o, r) => {
  let s = {
      storage: oa(() => window.localStorage),
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
  let m;
  const g = () => {
    let _;
    if (!s_storage) {
      return;
    }
    const b = ++c;
    (a = false);

    l.forEach((k) => {
      let C;
      return k((C = o()) != null ? C : h);
    });

    const y =
      ((_ = s.onRehydrateStorage) == null
        ? undefined
        : _.call(s, (v = o()) != null ? v : h)) || undefined;
    return vi(s_storage.getItem.bind(s_storage))(s.name)
      .then((k) => {
        if (k) {
          if (typeof k.version == "number" && k.version !== s.version) {
            if (s.migrate) {
              const C = s.migrate(k.state, k.version);
              return C instanceof Promise ? C.then(E => [true, E]) : [true, C];
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
      if (b !== c) {
        return;
      }
      const [E, w] = k;
      (m = s.merge(w, (C = o()) != null ? C : h));
      n(m, true);

      if (E) {
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

const Bd = et((e, t) => ({
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

const my = et((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const gy = et((e, t) => ({
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

const _y = 4000/* 4e3 */;

const Mr = et((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const o = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const r = n.duration ?? _y;

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
  success: (e, t) => Mr.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => Mr.getState().addToast({ type: "error", message: e, duration: t }),
};

const vy = {
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

const yy = {
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

const wy = [
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

const Ey = {
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

function Hd(e) {
  return Ey[e] ?? e;
}
function by(e) {
  const yy_e = yy[e];
  if (yy_e) {
    return yy_e;
  }
  for (const { pattern, translate } of wy) {
    const r = e.match(pattern);
    if (r) {
      return translate(r);
    }
  }
  return e;
}
function ra(e, t = "Произошла ошибка") {
  const n = by(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : vy[Hd(e)] ?? n;
}
const Vd = "/api";

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

let Do = null;
const yi = new Set();
function ln() {
  return Do;
}
function Wd(e) {
  if (Do !== e) {
    Do = e;
    for (const t of yi) {
      t(e);
    }
  }
}
function Sy(e) {
  yi.add(e);

  return () => {
    yi.delete(e);
  };
}
function rl() {
  return Do ? { Authorization: `Bearer ${Do}` } : {};
}
let wi = null;
function Cy(e) {
  wi = e;
}
async function ky(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function Dr() {
  return wi
    ? fo ||
        ((fo = ky(wi).finally(() => {
          fo = null;
        })),
        fo)
    : null;
}
async function Ny(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = ln();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const o = await n();
  return o.status !== 401 || !(await Dr()) ? o : n();
}
function Ty(e, t = Date.now()) {
  if (e && /^\d+(\.\d+)?$/.test(e.trim())) {
    const o = Number(e);
    if (Number.isFinite(o)) {
      return Math.max(1, Math.ceil(o));
    }
  }
  const n = e ? Date.parse(e) : NaN;
  return Number.isFinite(n) ? Math.max(1, Math.ceil((n - t) / 1000/* 1e3 */)) : 30;
}
function sl(e, t) {
  const n = e.split("?")[0];
  return `${t}:${n}`;
}
class Iy {
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
    const o = sl(t, n);
    const r = Math.max(this.deadlines.get(o) ?? 0, this.deadlines.get("*") ?? 0);
    return r <= this.now()
      ? (this.deadlines.delete(o), null)
      : this.error(Math.ceil((r - this.now()) / 1000/* 1e3 */));
  }
  observe(t, n, o, r) {
    const s = Ty(t.headers.get("Retry-After"), this.now());
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
      const c = a === "ip_flood" || a === "global_flood" ? "*" : sl(n, o);
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
function il(e) {
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
function Ry(e) {
  let t = il(e);
  return (n) => {
    const o = il(n);
    return o === t ? false : ((t = o), true);
  };
}
function rs(e) {
  const t = Ry(ln());
  return Sy((n) => {
    if (t(n)) {
      e();
    }
  });
}
const vn = new Iy();
rs(() => vn.clear());
function Ay() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const al = Ay();
class jd {
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
      vt.error(ra(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const o = t.startsWith("/") ? t : `/${t}`;
    return `${n}${o}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ...rl() });
    n.set("X-Device-Id", al);
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
    (s.code = Hd(o));
    (s.errors = r);
    (s.name = "ApiError");
    return s;
  }
  async executeRequest(t, n, o, r, s = false) {
    const a = this.buildUrl(n);
    const c = this.buildHeaders(r?.headers);
    const vn_generation = vn.generation;
    const u = new AbortController();
    const f = r?.timeout ?? this.defaultTimeout;

    const p = setTimeout(() => u.abort(), f);

    try {
      const d = vn.blocked(a, t);
      if (d) {
        throw d;
      }

      const m =
          o instanceof ArrayBuffer ||
          (typeof Uint8Array !== "undefined" && o instanceof Uint8Array) ||
          (typeof Blob !== "undefined" && o instanceof Blob)
            ? o
            : o != null
            ? JSON.stringify(o)
            : undefined;

      const g = { ...r };
      delete g.headers;
      delete g.skipErrorToast;
      const v = await fetch(a, {
        method: t,
        body: m,
        signal: u.signal,
        credentials: "include",
        ...g,
        headers: c,
      });
      clearTimeout(p);

      if (v.status === 429) {
        throw vn.observe(v, a, t, vn_generation);
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
      if (v.status === Ze.UNAUTHORIZED && !s && !_ && ln()) {
        if (await Dr()) {
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
    } catch (d) {
      clearTimeout(p);

      if (d instanceof Error) {
        const h = g => !s && !this.isToastSkipped(r?.skipErrorToast, g.status);
        if (d.name === "AbortError") {
          const g = this.createApiError(0, "Request timeout", H.TIMEOUT);

          if (h(g)) {
            this.notifyError(g);
          }

          throw g;
        }
        if (d.name === "ApiError") {
          const g = d;

          if (h(g)) {
            this.notifyError(g);
          }

          throw d;
        }
        const m = this.createApiError(
          0,
          d.message || "Network error",
          H.NETWORK_ERROR
        );

        if (h(m)) {
          this.notifyError(m);
        }

        throw m;
      }

      throw d;
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
    const vn_generation = vn.generation;
    const c = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": al, ...rl() };
    const l = new AbortController();
    const u = o?.timeout ?? this.defaultTimeout;

    const f = setTimeout(() => l.abort(), u);

    try {
      const p = vn.blocked(s, "POST");
      if (p) {
        throw p;
      }
      const d = await fetch(s, {
        method: "POST",
        headers: c,
        body: n,
        signal: l.signal,
        credentials: "include",
      });
      clearTimeout(f);

      if (d.status === 429) {
        throw vn.observe(d, s, "POST", vn_generation);
      }

      if (d.status === Ze.UNAUTHORIZED && !r && ln()) {
        if (await Dr()) {
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
    } catch (p) {
      clearTimeout(f);

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
        const d = this.createApiError(
          0,
          p.message || "Network error",
          H.NETWORK_ERROR
        );

        if (!r) {
          this.notifyError(d);
        }

        throw d;
      }

      throw p;
    }
  }
}
const O = new jd({ baseURL: Vd, timeout: 30000/* 3e4 */ });
const kt = new jd({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const ss = et((e, t) => ({
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

const zd = () => ss(e => e.portal);

const JL = () => ss(e => e.loaded);

const Ly = "/public/events/aliceai";
function qd(e) {
  if (!e.active || !e.url) {
    return false;
  }
  try {
    return new URL(e.url, window.location.origin).pathname.startsWith(`${Ly}/`);
  } catch {
    return false;
  }
}
const Uo = new Set();
let Lo = null;
const Py = 30000/* 3e4 */;
function Oy() {
  if (Lo === null) {
    (Lo = window.setInterval(() => {
        Uo.forEach(e => e());
      }, Py));
  }
}
function xy() {
  if (Lo !== null) {
    clearInterval(Lo);
    (Lo = null);
  }
}
function $y(e) {
  Uo.add(e);

  if (Uo.size === 1) {
    Oy();
  }
}
function My(e) {
  Uo.delete(e);

  if (Uo.size === 0) {
    xy();
  }
}
function ks(e) {
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
function Gd(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const o = n ? t : 0;

  const [r, s] = L(() => n ? ks(new Date(o)) : "");

  U(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(o);
    s(ks(a));
    const c = () => {
      s(ks(a));
    };
    $y(c);

    return () => My(c);
  }, [o, n]);

  return r;
}
const cl = 1174;
function Yt() {
  const [e, t] = L(() => typeof window === "undefined" ? false : window.innerWidth < cl);

  U(() => {
    const n = window.matchMedia(`(max-width: ${cl - 1}px)`);

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
const Dy = to({ isHidden: false });

const Uy = () => {
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

function is(e = "", t = []) {
  const [n, o] = L(e);
  const [r, s] = L(t);
  const a = x(null);

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
function Fy({
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
function By({
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

  const f = () => a ? a.clientHeight : typeof window !== "undefined" ? window.innerHeight : 0;

  const p = x(s ?? new Map());
  const d = x(null);
  const h = x(null);
  const m = x(new Map());
  const g = x(r);
  g.current = r;

  const v = w => p.current.get(r(w)) ?? t;

  const _ = (w) => {
    let N = 0;
    for (let T = 0; T < w; T++) {
      N += v(T) + o;
    }
    return N;
  };

  const b = () => {
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
    const N = f();
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
      T.push({ index: S, key: r(S), start: _(S) });
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
    const T = g.current(N);
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
      if (!d.current) {
        (d.current = requestAnimationFrame(() => {
          (d.current = null);

          l(T => T + 1);
        }));
      }
    };

    w.addEventListener("scroll", N, { passive: true });

    l(T => T + 1);

    return () => {
      w.removeEventListener("scroll", N);

      if (d.current) {
        cancelAnimationFrame(d.current);
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

  const E = I(() => new Map(p.current), []);
  return {
    virtualItems: k(),
    totalSize: b(),
    measureElement: C,
    getMeasuredHeights: E,
  };
}
const Hy = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const ll = "itd:icons:checkedAt";
const Vy = 1800 * 1000/* 1e3 */;
const Ur = new Map();
const Ns = new Map();
const Cr = new Map();

const Wy = e => `${Hy}/${e}.svg`;

const jy = (() => {
  try {
    const e = Number(localStorage.getItem(ll) ?? 0);
    return Date.now() - e < Vy
      ? false
      : (localStorage.setItem(ll, String(Date.now())), true);
  } catch {
    return false;
  }
})();

const zy = e => /^\s*<svg[\s>]/i.test(e) &&
!/<script|<foreignObject|\son[a-z]+\s*=/i.test(e);

const qy = { liked: "--accent-liked" };
const Gy = /fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/;

const Yy = (e, t) => {
  const qy_e = qy[e];
  if (!qy_e || typeof document === "undefined") {
    return;
  }
  const o = Gy.exec(t)?.[1];

  if (o) {
    document.documentElement.style.setProperty(qy_e, o);
  }
};

const Ky = (e, t) => {
  Ur.set(e, t);
  Yy(e, t);

  Cr.get(e)?.forEach(n => n(t));
};

const Xy = (e, t = false) => {
  if (!t) {
    const r = Ur.get(e);
    if (r) {
      return Promise.resolve(r);
    }
    const s = Ns.get(e);
    if (s) {
      return s;
    }
  }
  const n = t ? "reload" : jy ? "no-cache" : "force-cache";

  const o = fetch(Wy(e), { cache: n })
    .then(async (r) => {
      if (!r.ok) {
        return null;
      }
      const s = await r.text();
      return zy(s) ? (Ky(e, s), s) : null;
    })
    .catch(() => null)
    .finally(() => Ns.delete(e));

  Ns.set(e, o);
  return o;
};

const Qy = (e, t) => e.replace(/<svg\b([^>]*)>/i, (n, o) => {
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

const sa = ({ name: e, size: t = 20, className: n }) => {
  const [o, r] = L(() => Ur.get(e) ?? null);
  U(() => {
    r(Ur.get(e) ?? null);
    const a = Cr.get(e) ?? new Set();
    a.add(r);
    Cr.set(e, a);
    Xy(e);

    return () => {
      a.delete(r);

      if (a.size === 0) {
        Cr.delete(e);
      }
    };
  }, [e]);
  const s = typeof t == "number" ? `${t}px` : t;
  return i("span", {
    "data-icon": e,
    "aria-hidden": "true",
    className: n,
    style: { display: "block", width: s, height: s, lineHeight: 0 },
    dangerouslySetInnerHTML: o ? { __html: Qy(o, t) } : undefined,
  });
};

const Zy = ({ size: e = 18 }) => i("svg", {
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

const Jy = ({ size: e = 18 }) => i("svg", {
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

const e0 = ({ size: e = 18 }) => i("svg", {
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

const Yd = ({ size: e = 18 }) => i("svg", {
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

const t0 = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const n0 = ({ size: e = 18 }) => i("svg", {
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

const o0 = ({ size: e = 18 }) => i("svg", {
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

const r0 = ({ size: e = 18 }) => i("svg", {
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

const s0 = ({ size: e = 18 }) => i("svg", {
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

const i0 = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const a0 = ({ size: e = 24 }) => i("svg", {
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

const Kd = ({ size: e = 20 }) => i("svg", {
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

const c0 = ({ size: e = 8 }) => i("svg", {
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

const l0 = ({ size: e = 8 }) => i("svg", {
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

const u0 = () => i("svg", {
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

const Xd = ({ size: e = 20 }) => i(sa, { name: "comment", size: e });

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
    i("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
    }),
    i("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    }),
  ],
});

const d0 = ({ size: e = 24 }) => i("svg", {
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

const Zd = () => i("svg", {
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

const Jd = ({ size: e = 18 }) => i("svg", {
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

const ef = ({ size: e = 24 }) => i("svg", {
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

const ia = ({ filled: e = false, size: t = 20, className: n }) => i(sa, { name: e ? "liked" : "like", size: t, className: n });

const aa = ({ size: e = 24 }) => i("svg", {
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

const f0 = ({ size: e = 24 }) => i("svg", {
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

const tf = ({ size: e = 18 }) => i("svg", {
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

const ca = ({ size: e = 24 }) => i("svg", {
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

const p0 = ({ size: e = 24 }) => i("svg", {
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

const Ei = ({ size: e = 24 }) => i("svg", {
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

const ul = ({ size: e = 18 }) => i("svg", {
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

const la = ({ size: e = 24 }) => i("svg", {
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

const h0 = ({ size: e = 20 }) => i("svg", {
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

const ua = ({ size: e = 20 }) => i(sa, { name: "share", size: e });

const nf = ({ size: e = 24 }) => i("svg", {
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

const of = ({ size: e = 24 }) => i("svg", {
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

const m0 = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const g0 = ({ size: e = 24 }) => i("svg", {
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

const _0 = ({ size: e = 48 }) => i("svg", {
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

const rf = ({ size: e = 18 }) => i("svg", {
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

const v0 = ({ size: e = 16 }) => i("svg", {
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

const y0 = ({ size: e = 20 }) => i("svg", {
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

const w0 = "q7Jd";
const E0 = "VDyc";
const b0 = "Iiby";
const S0 = "Vv7e";
const C0 = "rKJc";
const k0 = "z2h1";
const N0 = "C38s";
const T0 = "eEyj";
const I0 = "Fsup";
const R0 = "w6Z4";
const A0 = "zOS7";
const L0 = "NUyo";
const P0 = "kwak";

const Ve = {
  aside: w0,
  asideBottom: E0,
  logoutButton: b0,
  asideBrand: S0,
  asideBrandVersion: C0,
  nav: k0,
  navItem: N0,
  active: T0,
  iconWrapper: I0,
  portalButton: R0,
  portalActive: A0,
  portalImage: L0,
  badge: P0,
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

const dl = [
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

const da = [
  le.LOGIN,
  le.REGISTER,
  le.FORGOT_PASSWORD,
  le.RESET_PASSWORD,
  le.VERIFY_EMAIL,
  le.ONBOARDING,
];

const O0 = {
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

function fa(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: O0[e.type] ?? "follow",
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

const po = {
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
      return { notifications: c.map(fa), nextCursor: l };
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

const fl = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const x0 = 0.3;
const $0 = 15;
function M0(e) {
  const t = fl[Math.min(e, fl.length - 1)];
  const n = t * x0 * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
function D0(e) {
  const { url, onMessage, onStatusChange } = e;
  let r = null;
  let s = null;
  let a = 0;
  let c = null;
  function l() {
    if (r || s) {
      return;
    }
    if (!ln()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    const f = new AbortController();
    (r = f);

    (async () => {
      try {
        const d = await Ny(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
          },
          signal: f.signal,
        });
        if (f.signal.aborted || r !== f) {
          await d.body?.cancel();
          return;
        }
        if (!d.ok) {
          if (d.status === 401) {
            (r = null);
            onStatusChange("error");
            return;
          }
          throw new Error(`SSE connection failed: ${d.status}`);
        }
        if (!d.body) {
          throw new Error("SSE response has no body");
        }
        (a = 0);
        onStatusChange("connected");

        if (c) {
          c.cancel().catch(() => {});
          (c = null);
        }

        const h = d.body.getReader();
        c = h;
        const m = new TextDecoder();
        let g = "";
        let v = "";
        let _ = [];

        while (true) {
          const { done, value } = await h.read();
          if (done) {
            if (f.signal.aborted || r !== f) {
              return;
            }
            throw new Error("SSE stream closed");
          }
          if (f.signal.aborted || r !== f) {
            return;
          }
          g += m.decode(value, { stream: true });
          const k = g.split(`
`);
          g = k.pop() || "";
          for (const C of k) {
            const E = C.replace(/\r$/, "");
            if (E.startsWith("event:")) {
              v = E.slice(6).replace(/^ /, "");
            } else if (E.startsWith("data:")) {
              _.push(E.slice(5).replace(/^ /, ""));
            } else if (E === "") {
              if (_.length) {
                try {
                  const w = JSON.parse(
                      _.join(`
`)
                    );

                  const N = v || w.type;
                  onMessage(N, w);
                } catch {
                  console.error("SSE message parse error");
                }
              }
              (v = "");
              (_ = []);
            }
          }
        }
      } catch (d) {
        if (f.signal.aborted || r !== f || d.name === "AbortError") {
          return;
        }

        if (c) {
          c.cancel().catch(() => {});
        }

        (c = null);
        (r = null);
        onStatusChange("error");

        if (a >= $0) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );
          return;
        }

        const h = M0(a);
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
const U0 = "/assets/chalk_icon-mgaQZG0s.svg";
const F0 = "/assets/curtain_gathered-C9r-YF7B.png";
const B0 = "/assets/curtain_spread-BNRn2v1V.png";
const H0 = "/assets/curtains_icon-DktWcCFP.svg";
const V0 = "/assets/cushion_fart-CMDuTici.mp3";
const W0 = "/assets/glass_break-dVY7K4gp.wav";
const bi = "/assets/icon-37-WRaw5P7H.svg";
const Si = "/assets/icon2-44-Dv1BiWsO.svg";
const j0 = "/assets/iconsh-DyKtHiQX.svg";
const z0 = "/assets/school_bell-D__r0mih.mp3";
const q0 = "/assets/sticker_5plus-DOjFwL6Q.png";
const G0 = "/assets/sticker_apple-5NwAflFs.png";
const Y0 = "/assets/sticker_bow-9c7EnTly.png";
const K0 = "/assets/sticker_school_03-2EGjbexw.webp";
const X0 = "/assets/sticker_school_04-DH5V9MQf.webp";
const Q0 = "/assets/sticker_school_05-xwkb2oon.webp";
const Z0 = "/assets/sticker_school_06-DQXC4ZRO.webp";
const J0 = "/assets/sticker_school_07-CCPZolQF.webp";
const ew = "/assets/sticker_school_08-Ce8D6oEP.webp";
const tw = "/assets/sticker_school_09-BZQ2O5f3.webp";
const nw = "/assets/sticker_school_10-CmxZNY21.webp";
const ow = "/assets/sticker_school_12-wmL479lE.webp";
const rw = "/assets/sticker_school_13-ByMYsie6.webp";
const sw = "/assets/sticker_school_14-DZtvzIpA.webp";
const iw = "/assets/sticker_school_15-BgTh_9NX.webp";
const aw = "/assets/sticker_school_16-Do43bu8c.webp";
const cw = "/assets/sticker_school_17-BSU7xYJ4.webp";
const lw = "/assets/sticker_school_18-Bf7-nXq4.webp";
const uw = "/assets/sticker_school_19-ul_n3YVs.webp";
const dw = "/assets/sticker_school_20-jjiIUXq1.webp";
const fw = "/assets/sticker_school_21-58wdQpEs.webp";
const pw = "/assets/sticker_school_22-JECzGGuo.webp";
const hw = "/assets/sticker_school_23-BuMgtXwl.webp";
const mw = "/assets/sticker_school_24-CnPPU6Zu.webp";
const gw = "/assets/sticker_school_25-JTb-mSYd.webp";
const _w = "/assets/sticker_school_26-D-SnyQaj.webp";
const vw = "/assets/sticker_school_27-6ffXdqoL.webp";
const yw = "/assets/sticker_school_28-CZD3KsIr.webp";
const ww = "/assets/sticker_school_29-CLYxT5sy.webp";
const Ew = "/assets/sticker_school_30-BxFYZtbi.webp";
const bw = "/assets/sticker_school_31-BVMKrhQS.webp";
const Sw = "/assets/sticker_school_32-C2ha650b.webp";
const Cw = "/assets/sticker_school_33-rvcEWDwh.webp";
const kw = "/assets/sticker_school_46-DS4CbHRm.webp";
const Nw = "/assets/sticker_school_47-DHE3Yp0j.webp";
const Tw = "/assets/sticker_school_alice_mark-CfF7bkcq.webp";
const Iw = "/assets/sticker_school_alice_text-DcPXYUHD.webp";
const Rw = "/assets/sticker_school_photo-DnJFBmUP.webp";
const Aw = "/assets/sticker_school_skull-Cieg1sS4.webp";
const Lw = "/assets/sticker_scrape_1-kIXTTbQP.png";
const Pw = "/assets/sticker_scrape_2-DEG3iIMX.png";
const Ow = "/assets/sticker_scrape_3-BQF48-v6.png";
const xw = "/assets/sticker_star-DCXLHvZd.png";
const $w = "/assets/sticker_tear_2-BNerZgX5.png";
const Mw = "/assets/sticker_tear_3-DBLwz7Xa.png";
const Dw = "/assets/sticker_toad-k--DanVa.png";
const Uw = "/assets/water_stain-CsPqi72P.svg";
const Fw = "/assets/window-D5KYvQsI.png";
const Bw = "/assets/window_broken-D0oHzxbP.png";

const Hw = Object.assign({
  "./assets/chalk_icon.svg": U0,
  "./assets/curtain_gathered.png": F0,
  "./assets/curtain_spread.png": B0,
  "./assets/curtains_icon.svg": H0,
  "./assets/cushion_fart.mp3": V0,
  "./assets/glass_break.wav": W0,
  "./assets/icon-37.svg": bi,
  "./assets/icon2-44.svg": Si,
  "./assets/iconsh.svg": j0,
  "./assets/school_bell.mp3": z0,
  "./assets/sticker_5plus.png": q0,
  "./assets/sticker_apple.png": G0,
  "./assets/sticker_bow.png": Y0,
  "./assets/sticker_school_03.webp": K0,
  "./assets/sticker_school_04.webp": X0,
  "./assets/sticker_school_05.webp": Q0,
  "./assets/sticker_school_06.webp": Z0,
  "./assets/sticker_school_07.webp": J0,
  "./assets/sticker_school_08.webp": ew,
  "./assets/sticker_school_09.webp": tw,
  "./assets/sticker_school_10.webp": nw,
  "./assets/sticker_school_12.webp": ow,
  "./assets/sticker_school_13.webp": rw,
  "./assets/sticker_school_14.webp": sw,
  "./assets/sticker_school_15.webp": iw,
  "./assets/sticker_school_16.webp": aw,
  "./assets/sticker_school_17.webp": cw,
  "./assets/sticker_school_18.webp": lw,
  "./assets/sticker_school_19.webp": uw,
  "./assets/sticker_school_20.webp": dw,
  "./assets/sticker_school_21.webp": fw,
  "./assets/sticker_school_22.webp": pw,
  "./assets/sticker_school_23.webp": hw,
  "./assets/sticker_school_24.webp": mw,
  "./assets/sticker_school_25.webp": gw,
  "./assets/sticker_school_26.webp": _w,
  "./assets/sticker_school_27.webp": vw,
  "./assets/sticker_school_28.webp": yw,
  "./assets/sticker_school_29.webp": ww,
  "./assets/sticker_school_30.webp": Ew,
  "./assets/sticker_school_31.webp": bw,
  "./assets/sticker_school_32.webp": Sw,
  "./assets/sticker_school_33.webp": Cw,
  "./assets/sticker_school_46.webp": kw,
  "./assets/sticker_school_47.webp": Nw,
  "./assets/sticker_school_alice_mark.webp": Tw,
  "./assets/sticker_school_alice_text.webp": Iw,
  "./assets/sticker_school_photo.webp": Rw,
  "./assets/sticker_school_skull.webp": Aw,
  "./assets/sticker_scrape_1.png": Lw,
  "./assets/sticker_scrape_2.png": Pw,
  "./assets/sticker_scrape_3.png": Ow,
  "./assets/sticker_star.png": xw,
  "./assets/sticker_tear_2.png": $w,
  "./assets/sticker_tear_3.png": Mw,
  "./assets/sticker_toad.png": Dw,
  "./assets/water_stain.svg": Uw,
  "./assets/window.png": Fw,
  "./assets/window_broken.png": Bw,
});

const Ln = {};
for (const [e, t] of Object.entries(Hw)) {
  Ln[e.slice(9)] = t;
}

const Vw = e => Ln[`${e}.webp`] ?? Ln[`${e}.svg`] ?? Ln[`${e}.png`] ?? "";

const {
  "glass_break.wav": glass_breakWav,
  "school_bell.mp3": school_bellMp3,
  "cushion_fart.mp3": cushion_fartMp3
} = Ln;

function jw(e, t = 0.65, n = Date.now() + 60000/* 6e4 */) {
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

const pl = {
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

const sr = new Map();
const Ci = new Set();
let Ts;
let Bn = null;
let ko = null;
let kr = 0;
let Ke = 0;
function sf(e, t = true) {
  if (!e.eventId ||
  !e.expiresAt ||
  !Number.isFinite(Date.parse(e.expiresAt)) ||
  Date.parse(e.expiresAt) <= Date.now()) {
    return;
  }
  const n = fa(e);
  const o = We.getState();

  const r = o.notifications.some(a => a.id === e.id);

  let s = Ci.has(e.id);
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
    Ci.add(e.id);
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
      af();
    }
  }
}
function ki(e) {
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
function ho() {
  if (We.getState().isInitialized) {
    ko || Gn.connect();
    Date.now() - kr > 15000/* 15e3 */ && We.getState().fetchUnreadCount();
  }
}

const Gn = D0({
    url: `${Vd}${D.notifications.stream}`,
    onMessage: (e, t) => {
      if (e === "notification.event-ended") {
        ki(t.eventId);
        We.getState().fetchUnreadCount();
        return;
      }
      if (e === "notification.event" && t.type === "alice_task_reminder") {
        sf(t);
        return;
      }
      if (e === "alice.bell") {
        const n = t;
        const o = Date.parse(n.expiresAt ?? "");
        if (n.id && o > Date.now() && !sr.has(n.id)) {
          for (const [r, s] of sr) {
            if (s <= Date.now()) {
              sr.delete(r);
            }
          }
          sr.set(n.id, o);

          if (We.getState().settings?.soundEnabled !== false) {
            jw(school_bellMp3, 0.65, o);
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
        const n = fa(t);
        const o = n.payload.actors[0];

        const r = {
          actorId: o?.id,
          id: n.id,
          type: n.type,
          actorName: o?.displayName || "Пользователь",
          actorUsername: o?.username || "",
          actorAvatar: o?.avatar || "",
          count: n.payload.count,
          message: qw(
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
          af();
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
  ...pl,

  initialize: () => {
    if (t().isInitialized) {
      if (!ko) {
        Gn.connect();
      }

      return;
    }
    e({ isInitialized: true });
    const n = Ke;

    (ko = t()
      .fetchSettings()
      .then(() => {
        if (n === Ke) {
          Gn.connect();
          return t().fetchUnreadCount();
        }
      })
      .finally(() => {
      if (n === Ke) {
        (ko = null);
      }
    }));

    window.addEventListener("focus", ho);
    window.addEventListener("online", ho);
    const o = 300000/* 3e5 */ + Math.random() * 60000/* 6e4 */;
    Ts = setInterval(() => {
      ki();

      if (!document.hidden && Date.now() - kr > o) {
        ho();
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
        const l = await po.getNotifications({ cursor: c, limit: 20 });
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
    if (Bn) {
      return Bn;
    }
    kr = Date.now();
    const n = Ke;

    (Bn = (async () => {
      try {
        const o = await po.getUnreadStatus();
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
              ki(s);
            }
          }

          if (o_eventReminders.latest) {
            sf(o_eventReminders.latest, false);
          }
        }
        e({ unreadCount: o.count });
      } catch {
      } finally {
        if (n === Ke) {
          (Bn = null);
        }
      }
    })());

    return Bn;
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
      await po.markAllAsRead();
    } catch {}
  },

  connectSSE: () => Gn.connect(),
  disconnectSSE: () => Gn.disconnect(),

  fetchSettings: async () => {
    const n = Ke;
    e({ settingsLoading: true });
    try {
      const o = await po.getSettings();
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
      await po.updateSettings(n);
    } catch {
      if (o === Ke) {
        e({ settings: r });
      }
    }
  },

  reset: () => {
    Ke++;
    (ko = null);
    (Bn = null);
    (kr = 0);
    Gn.disconnect();

    if (Ts) {
      clearInterval(Ts);
    }

    window.removeEventListener("focus", ho);
    window.removeEventListener("online", ho);
    Ci.clear();

    window.dispatchEvent(
      new CustomEvent("alice-reminder-expired", { detail: { all: true } })
    );

    e(pl);
  }
}));

const zw = {
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

function qw(e, t, n) {
  const zw_e = zw[e];
  return zw_e ? zw_e(t, n) : "Новое уведомление";
}
function af() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const cf = () => We(e => e.unreadCount);

const Gw = () => We(e => e.lastSseToast);

const Yw = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const Kw = ["video/mp4", "video/webm", "video/quicktime"];
const Ni = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const Xw = ".mp4,.webm,.mov";

const Yn = {
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
    return Yw.includes(e.type);
  },
  isValidVideoType(e) {
    return Kw.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const Qw = {
  async getChangelog() {
    const e = await O.get(D.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await O.get(D.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class pa {
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
function hl(e) {
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
const Jt = new pa(100, 300 * 1000/* 1e3 */);
const Zw = 60 * 1000/* 1e3 */;
setInterval(() => Jt.cleanup(), 120 * 1000/* 1e3 */);
const ir = {
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
    return hl(e);
  },
  async updateProfile(e) {
    return await O.put(D.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = Jt.get(t);

    if (n && Jt.isFresh(t, Zw)) {
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
    return Jt.get(e.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await O.get(D.users.profile(e), {
        skipErrorToast: [Ze.NOT_FOUND],
      });

    const o = hl(n);
    Jt.set(t, o);
    return o;
  },
  invalidateProfileCache(e) {
    Jt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const o = Jt.get(n);

    if (o) {
      Jt.set(n, { ...o, ...t });
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
function ml(e) {
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
let Ti = new Set();
function Jw() {
  if (!Is) {
    (null = setTimeout(async () => {
      Is = null;
      const e = Array.from(Ti);
      Ti.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const o = await Ii.batchFollowStatus(n);
            Wt.getState().setStatuses(o);
          } catch {}
        }
      }
    }, 50));
  }
}
function eE(e) {
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
        Ti.add(c);
      }
      Jw();
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
const yn = new pa(500, 120 * 1000/* 1e3 */);
setInterval(() => yn.cleanup(), 60 * 1000/* 1e3 */);
const Ii = {
  async followUser(e) {
    const t = await O.post(D.users.follow(e), {});
    yn.delete(e);
    Wt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await O.delete(D.users.follow(e));
    yn.delete(e);
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
    return { data: u.map(ml), nextCursor: p };
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
    return { data: u.map(ml), nextCursor: p };
  },
  async blockUser(e) {
    await O.post(D.users.block(e), {});
    yn.delete(e);
  },
  async unblockUser(e) {
    await O.delete(D.users.block(e));
    yn.delete(e);
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

    return (await O.post(D.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    yn.delete(e);
  },
  clearSocialCache() {
    yn.clear();
  },
};
function tE(e) {
  const t = Wt(r => r.statuses[e]);

  const n = I(async () => {
    Wt.getState().setStatus(e, true);
    try {
      await Ii.followUser(e);
    } catch {
      Wt.getState().setStatus(e, false);
    }
  }, [e]);

  const o = I(async () => {
    Wt.getState().setStatus(e, false);
    try {
      await Ii.unfollowUser(e);
    } catch {
      Wt.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: o };
}
const nE = "vZcv";
const oE = "ihGz";
const rE = "ace8";
const sE = "uYK0";
const iE = "uwWR";
const aE = "wrVv";
const cE = "sCj6";
const lE = "JN5M";
const uE = "dJh1";
const dE = "j6Dm";
const fE = "IpfN";
const pE = "ngZL";
const hE = "p1WU";
const mE = "fqQ1";

const Xe = {
  overlay: nE,
  modalWrapper: oE,
  wide: rE,
  modal: sE,
  frameless: iE,
  header: aE,
  title: cE,
  closeButton: lE,
  externalCloseButton: uE,
  mobileOverlay: dE,
  closing: fE,
  bottomSheet: pE,
  dragHandle: hE,
  dragIndicator: mE,
};

const gE = to(null);
const _E = 100;
const vE = 0.5;
function Dn({
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
  const f = x(null);
  const p = x(null);
  const d = x(null);
  const h = Yt();
  const m = x(0);
  const g = x(false);
  const [v, _] = L(false);
  const b = x(0);
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
      d.current = G.target;
    };

  const E = (G) => {
    if (d.current === f.current && G.target === f.current) {
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
    _(true);

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
    if (f.current && G > 0) {
      (f.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - G / 500
          )})`);
    } else if (f.current) {
      (f.current.style.backgroundColor = "");
    }
  };

  const A = (G) => {
    if (!h) {
      return;
    }
    (b.current = G.touches[0].clientY);
    (y.current = Date.now());
    (k.current = G.touches[0].clientY);
    const G_target = G.target;
    if (G_target.closest(`.${Xe.dragHandle}`)) {
      (N.current = true);
      (T.current = true);
      (g.current = true);

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
    const ae = J - b.current;
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
      if (g.current && m.current > 0) {
        if (ae > 0) {
          (m.current = ae);
          P(ae);
          R(ae);
          G.preventDefault();
        } else {
          (m.current = 0);
          (g.current = false);
          P(0);
          R(0);
        }

        return;
      }

      if (ae > 0) {
        g.current ||
            ((g.current = true),
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
    const G = k.current - b.current;
    const J = Date.now() - y.current;
    const ae = G / J;

    if (g.current && (G > _E || ae > vE)) {
      w();
    } else if (m.current > 0) {
      P(0, "transform 0.2s ease-out");
      R(0);
      (m.current = 0);
    }

    (g.current = false);
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
  return i(gE.Provider, {
    value: he,
    children: i("div", {
      ref: f,
      className: `${Xe.overlay} ${h ? Xe.mobileOverlay : ""} ${
        v ? Xe.closing : ""
      }`,
      onMouseDown: C,
      onMouseUp: E,
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
const yE = "NSL0";
const wE = "F4Gs";
const EE = "tOkh";
const bE = "aF04";
const SE = "nr4q";
const CE = "fK84";
const gl = { spinner: yE, spin: wE, xs: EE, sm: bE, md: SE, lg: CE };
function lf({ size: e = "md", className: t }) {
  const n = [gl.spinner, gl[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(aa, {}) });
}
const kE = "gKWp";
const NE = "uTPQ";
const TE = "Idkn";
const IE = "PSbj";
const RE = "GjyL";
const AE = "rvqW";
const LE = "pO4m";
const PE = "AVIQ";
const OE = "WLzn";
const xE = "T5Lh";
const $E = "qG5L";
const ME = "dj8m";

const Hn = {
  button: kE,
  primary: NE,
  secondary: TE,
  ghost: IE,
  accent: RE,
  danger: AE,
  sm: LE,
  md: PE,
  lg: OE,
  fullWidth: xE,
  iconOnly: $E,
  loading: ME,
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
    Hn.button,
    Hn[t],
    Hn[n],
    o && Hn.fullWidth,
    r && Hn.iconOnly,
    s && Hn.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return i("button", {
    type: c,
    className: f,
    disabled: l || s,
    ...u,
    children: s ? i(lf, { size: "sm" }) : e,
  });
}
const DE = "iVLA";
const UE = "eYAO";
const FE = "oM5X";
const BE = "MfBE";
const ar = { content: DE, title: UE, subtitle: FE, actions: BE };
function HE({ displayName: e, onConfirm: t, onClose: n }) {
  return i(Dn, {
    onClose: n,
    showHeader: false,
    children: i("div", {
      className: ar.content,
      children: [
        i("h2", { className: ar.title, children: "Отписаться?" }),
        i("p", {
          className: ar.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            i("strong", { children: e }),
            "?",
          ],
        }),
        i("div", {
          className: ar.actions,
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
const uf = to(null);
let VE = 0;
function WE({ children: e }) {
  const [t, n] = L([]);

  const o = I((a) => {
    const c = `modal-${++VE}`;

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

  return i(uf.Provider, {
    value: { openModal: o, closeModal: r, closeAllModals: s },
    children: [e, t.length > 0 && i(jE, { modals: t })],
  });
}
function jE({ modals: e }) {
  return $(
    i(ve, {
      children: e.map(({ id: t, component: n }) => i(De, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function Kt() {
  const e = Yo(uf);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const zE = "iz6t";
const qE = "xbJQ";
const GE = "WmOi";
const YE = "GMux";
const KE = "MwBy";
const XE = "WcUV";
const QE = "aYMw";
const ZE = "WpTj";
const JE = "rbDh";
const eb = "WgdU";
const tb = "IIKI";
const nb = "zdNx";

const Qt = {
  avatar: zE,
  xs: qE,
  emoji: GE,
  onlineDot: YE,
  sm: KE,
  md: XE,
  lg: QE,
  xl: ZE,
  badge: JE,
  followBadge: eb,
  notFollowing: tb,
  following: nb,
};

function ob(e) {
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
  const l = e ? ob(e) : false;
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
            children: s ? i(l0, { size: 8 }) : i(c0, { size: 8 }),
          })
        : r && i("span", { className: Qt.onlineDot }),
    ],
  });
}
const rb = "OqTT";
const sb = "n9ND";
const ib = "hDKZ";
const ab = "eqhR";
const cb = "aiuf";
const lb = "jQSB";
const ub = "TjeJ";
const db = "l67W";
const fb = "Q6Pk";
const pb = "zZ52";
const hb = "ASrM";
const mb = "EfAD";
const gb = "IXoK";
const _b = "Sky6";
const vb = "S1Oy";
const yb = "iBjV";
const wb = "eMyy";
const Eb = "e4ub";
const bb = "oMmz";
const Sb = "oHO3";
const Cb = "jTvA";
const kb = "vq6Z";
const Nb = "BFuL";
const Tb = "KgPr";

const Re = {
  userName: rb,
  identity: sb,
  badges: ib,
  pinBadge: ab,
  text: cb,
  nukstaGlow: lb,
  xs: ub,
  sm: db,
  md: fb,
  lg: pb,
  nameEnding: hb,
  pinWrapper: mb,
  nickname: gb,
  schoolSilver: _b,
  withNickname: vb,
  trailing: yb,
  plain: wb,
  compact: Eb,
  pinClickable: bb,
  pinTooltip: Sb,
  pinTooltipFadeIn: Cb,
  pinTooltipRow: kb,
  pinTooltipLabel: Nb,
  pinTooltipArrow: Tb,
};

const Gt = et(() => ({
  status: "checking",
  enabled: false
}));

let Vn = null;
let Rs = 0;
let Ri = 0;
function Fr(e = false) {
  if (Vn || (!e && Gt.getState().status !== "checking")) {
    return Vn;
  }
  const t = ++Rs;

  const n = O.get("/v1/event/status", { skipErrorToast: true })
    .then((o) => {
      if (Rs !== t) {
        return;
      }
      const r = o?.enabled === true;
      Gt.setState({ status: r ? "allowed" : "denied", enabled: r });
    })
    .catch(() => {
    if (Rs === t) {
      Gt.setState({ status: "error" });
    }
  })
    .finally(() => {
    if (Vn === n) {
      (Vn = null);
    }
  });

  (Vn = n);
  return n;
}
function cr() {
  if (Gt.getState().status === "error" && Date.now() - Ri >= 15000/* 15e3 */) {
    (Ri = Date.now());
    Fr(true);
  }
}
function df() {
  return Gt.getState().enabled;
}
function Ib() {
  Fr();
}
function Rb(e) {
  let t = Gt.getState().enabled;
  return Gt.subscribe((n) => {
    if (n.enabled !== t) {
      (t = n.enabled);
      e(n.enabled);
    }
  });
}
function Xo() {
  const e = ge(r => r.status);

  const t = Gt(r => r.status);

  const n = Gt(r => r.enabled);

  U(() => {
    Fr();
  }, []);

  U(
    () => {
      window.addEventListener("online", cr);
      window.addEventListener("focus", cr);

      return () => {
        window.removeEventListener("online", cr);
        window.removeEventListener("focus", cr);
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
      (Ri = Date.now());
      Fr(true);
    },
  };
}
const st = new Map();
const Ab = 512;
let As = 0;
let Ls = false;
let lr;
let Nn = 0;
const ff = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function pf() {
  Nn++;
  for (const e of st.values()) {
    (e.value = null);
    (e.deadline = 0);
    (e.refreshAt = 0);
    (e.optimistic = undefined);

    e.listeners.forEach(t => t());
  }
  ha();
}
function Ai() {
  const e = performance.now();
  for (const [t, n] of st) {
    if (!n.listeners.size &&
      (!n.value || n.deadline <= e || st.size > Ab)) {
      st.delete(t);
    }
  }
}
function Br() {
  Nn++;
  for (const e of st.values()) {
    e.refreshAt = 0;
  }
  Li();
}
function _l(e) {
  const e_detail = e.detail;
  if (
    e_detail &&
    typeof e_detail.userId == "string" &&
    ff.test(e_detail.userId) &&
    (e_detail.label === null || (typeof e_detail.label == "string" && e_detail.label.length <= 128))
  ) {
    const n = st.get(e_detail.userId);

    if (n) {
      (n.optimistic = { label: e_detail.label, until: performance.now() + 30000/* 3e4 */ });
      n.listeners.forEach(o => o());
    }
  }
  Br();
}
async function ha() {
  if (Ls || document.hidden || !ln() || !df()) {
    return;
  }
  const e = [...st]
    .filter(([, n]) => n.listeners.size && n.refreshAt <= performance.now())
    .map(([n]) => n);
  if (!e.length) {
    return;
  }
  Ls = true;
  const t = Nn;
  try {
    for (let n = 0; n < e.length; n += 200) {
      const o = e.slice(n, n + 200);
      const r = performance.now();

      const s = await O.get(`/event-nicknames/?ids=${o.join(",")}`, {
        skipErrorToast: true,
      });

      if (t !== Nn) {
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
    for (const n of t === Nn ? e : []) {
      const o = st.get(n);

      if (o) {
        (o.refreshAt = performance.now() + 10000/* 1e4 */);
      }
    }
  } finally {
    (Ls = false);

    if (t !== Nn) {
      ha();
    }
  }
}
function Li() {
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
  ha();
}
function vl() {
  if (!document.hidden) {
    Br();
  }
}
rs(() => {
  pf();
  Ai();
});
Rb(() => pf());
function ma(e) {
  const [, t] = L(0);
  U(() => {
    if (!e || !ff.test(e)) {
      return;
    }
    Ib();
    Ai();
    let o = st.get(e);

    if (!o) {
      (o = { listeners: new Set(), value: null, deadline: 0, refreshAt: 0 });
      st.set(e, o);
    }

    const r = () => t(a => a + 1);
    o.listeners.add(r);
    As++;

    if (!lr) {
      (lr = setInterval(Li, 1000/* 1e3 */));
      document.addEventListener("visibilitychange", vl);
      window.addEventListener("online", Br);
      window.addEventListener("event-nickname-changed", _l);
    }

    const s = setTimeout(Li, 0);
    return () => {
      clearTimeout(s);
      o.listeners.delete(r);
      As--;
      Ai();

      if (!As) {
        clearInterval(lr);
        (lr = undefined);
        document.removeEventListener("visibilitychange", vl);
        window.removeEventListener("online", Br);
        window.removeEventListener("event-nickname-changed", _l);
        Nn++;
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

const Lb = ce(() => se(
  () => import("./index-BU-xduJ3.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
  );

const Pb = { xs: 12, sm: 14, md: 16, lg: 22 };
const Ob = "subscription_nuksta";
function Qo({
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
  const u = ma(e);
  const Pb_c = Pb[c];
  const p = x(null);
  const [d, h] = L(null);
  const [m, g] = L(false);
  const [v, _] = L(null);
  const b = !!a?.url && v === a.url;
  const y = a?.slug === Ob;

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

  const E =
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

  const N = c === "lg" && (r || b) ? /\S+$/u.exec(o) : null;

  const T =
    (r || a) &&
    i("span", {
      className: Re.badges,
      children: [
        r && i(v0, {}),
        a &&
          i("span", {
            ref: p,
            className: `${Re.pinWrapper} ${y ? Re.pinClickable : ""}`,
            style: b ? undefined : { display: "none" },
            onMouseEnter: k,
            onMouseLeave: C,
            onClick: y
              ? (S) => {
              S.stopPropagation();
              S.preventDefault();
              g(true);
            }
              : undefined,
            children: [
              i("img", {
                src: a.url,
                alt: a.name,
                className: Re.pinBadge,
                width: Pb_c,
                height: Pb_c,
                onLoad: () => _(a.url || null),
                onError: () => _(null),
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
            children: N
              ? i(ve, {
                  children: [
                    w(o.slice(0, N.index)),
                    i("span", {
                      className: Re.nameEnding,
                      children: [w(N[0]), T],
                    }),
                    E,
                  ],
                })
              : i(ve, { children: [w(o), T, E] }),
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
          children: i(Lb, { isOpen: true, onClose: () => g(false) }),
        }),
    ],
  });
}
function xb(e) {
  return "accessToken" in e;
}
function $b(e) {
  return "accessToken" in e;
}
const fn = { skipErrorToast: true };

const pn = {
  async register(e) {
    return await kt.post(D.auth.signUp, e, fn);
  },
  async login(e) {
    return await kt.post(D.auth.signIn, e, fn);
  },
  async verifyOtp(e) {
    return await kt.post(D.auth.verifyOtp, e, fn);
  },
  async resendOtp(e) {
    await kt.post(D.auth.resendOtp, e, fn);
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
    return await kt.post(D.auth.forgotPassword, e, fn);
  },
  async resetPassword(e) {
    await kt.post(D.auth.resetPassword, e, fn);
  },
  async changePassword(e) {
    await kt.post(D.auth.changePassword, e, fn);
  },
};

function yl(e) {
  return !$e(e) || e.status === 0 || e.status === 429 || e.status >= 500;
}
function hn(e, t) {
  if (!e) {
    lc(null);
    return;
  }
  lc({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
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

const ge = et()(
  Fd(
    (e, t) => {
      const n = Wd;

      Cy(async () => {
        try {
          const s = await pn.refreshSession();
          n(s.accessToken);
          return s.accessToken;
        } catch (s) {
          if (yl(s)) {
            if (t().status !== "authenticated") {
              e({ status: "service_error" });
            }

            throw s;
          }
          t().reset();
          return null;
        }
      });

      O.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...ur,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await pn.register(r);

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
            const s = await pn.login(r);
            if ($b(s)) {
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
            const l = await pn.verifyOtp({
              email: s || "",
              password: a || "",
              otp: r,
              flowToken: c || "",
            });
            e({ pendingPassword: null });

            if (xb(l)) {
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
              } catch (f) {
                if ($e(f) &&
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
            const u = $e(l) ? l.message : "Verification failed";
            const f = $e(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: f });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail: r, flowToken: s } = t();
          try {
            await pn.resendOtp({ email: r || "", flowToken: s || "" });
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
            await ir.createProfile(r);
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
            await pn.logout();
          } catch {
          } finally {
            n(null);
            e({ ...ur, status: "unauthenticated" });
            hn(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await pn.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...ur, status: "unauthenticated" });
            hn(null, null);
          }
        },
        refreshSession: async () => {
          try {
            return await Dr();
          } catch (r) {
            return yl(r)
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await ir.getMyProfile();
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
          await ir.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await ir.restoreAccount();
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
          e({ ...ur, status: "unauthenticated" });
          hn(null, null);
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: oa(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const hf = () => ge(e => e.status);

const as = () => ge(e => e.profile);

const cs = () => ge(e => e.status === "authenticated");

const Mb = "LJaP";
const Db = "B5Dw";
const Ub = "bTGA";
const Fb = "aQYf";
const Bb = "ItV2";
const Hb = "U1nN";

const Wn = {
  screen: Mb,
  fullscreen: Db,
  image: Ub,
  title: Fb,
  description: Bb,
  action: Hb,
};

const Vb = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const mf = ({ kind: e, title: t, description: n, action: o, fullscreen: r = false }) => i("div", {
  className: `${Wn.screen} ${r ? Wn.fullscreen : ""}`,
  children: [
    i("img", {
      className: Wn.image,
      src: Vb[e],
      alt: "",
      width: 256,
      height: 256,
      "aria-hidden": "true",
    }),
    i("h1", { className: Wn.title, children: t }),
    n && i("p", { className: Wn.description, children: n }),
    o && i("div", { className: Wn.action, children: o }),
  ],
});

function Wb({ children: e, currentPath: t }) {
  const n = hf();

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
    const s = dl.some(a => t.startsWith(a));

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

  const r = dl.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !r)
    ? null
    : n === "service_error"
    ? i(jb, {})
    : n === "account_deleted"
    ? i(zb, {})
    : (n === "unauthenticated" && !r) ||
      (n === "needs_profile" && t !== le.ONBOARDING)
    ? null
    : i(ve, { children: e });
}
function jb() {
  const e = ge(r => r.initialize);

  const [t, n] = L(false);
  return i(mf, {
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
function zb() {
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
const qb = "wZym";
const Gb = "MZ0U";
const Yb = "axVh";
const Kb = "h2lJ";
const dr = { content: qb, icon: Gb, text: Yb, button: Kb };
const wl = "phone-verification-required";
function Xb() {
  const [e, t] = L(false);

  const n = ge(r => r.profile?.id ?? "");

  U(() => {
    const r = () => t(true);
    window.addEventListener(wl, r);

    return () => window.removeEventListener(wl, r);
  }, []);

  if (!e) {
    return null;
  }

  const o = `https://t.me/itd_verification_bot?start=${n}`;
  return i(Dn, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: i("div", {
      className: dr.content,
      children: [
        i("div", { className: dr.icon, children: i(_0, { size: 48 }) }),
        i("p", {
          className: dr.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        i("a", {
          href: o,
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
function gf(e = () => performance.now()) {
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
function Hr(e, t, n = performance.now()) {
  return Date.parse(e.serverTime) + Math.max(0, n - t);
}
function _f(e) {
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
    const f = e.ids();
    if (!f.length) {
      return;
    }
    const p = new Set(f);
    for (const m of n.keys()) {
      if (!p.has(m)) {
        n.delete(m);
      }
    }
    const d = f.filter(m => t() - (n.get(m) ?? -Infinity) >= 15000/* 15e3 */);
    (r = true);
    (a = t());
    const h = c;
    try {
      await e.inventory().catch(() => {});
      for (let m = 0; m < d.length && !(h !== c || e.hidden()); m += 100) {
        const g = d.slice(m, m + 100);
        await e.states(g);

        if (h === c) {
          for (const v of g) {
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
const ls = gf();

const Lt = et(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const It = new Map();
let fr;
let Vr = -Infinity;
let on = 0;
let mo;
function vf(e = true) {
  if (!ln()) {
    Lt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (mo?.generation === on) {
    return mo.promise;
  }
  if (!e && Date.now() - Vr < 15000/* 15e3 */) {
    return Promise.resolve();
  }
  const t = on;

  const n = Promise.resolve()
    .then(async () => {
      try {
        const o = await O.get("/red-pens/inventory", { skipErrorToast: true });

        if (t === on) {
          (Vr = Date.now());
          Lt.setState({ inventory: o.data });
        }
      } catch (o) {
        if (t === on &&
            $e(o) &&
            o.status > 0 &&
            o.status < 500 &&
            o.status !== 429) {
          Lt.setState({ inventory: null });
        }

        throw o;
      }
    })
    .finally(() => {
    if (mo?.promise === n) {
      (mo = undefined);
    }
  });

  (mo = { generation: t, promise: n });
  return n;
}
async function ga(e = [...It.keys()]) {
  if (!e.length) {
    return;
  }
  const t = on;
  const n = performance.now();

  const o = await O.get(`/red-pens/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== on) {
    return;
  }
  if (!o?.data || typeof o.data != "object" || Array.isArray(o.data)) {
    throw new Error("Invalid event state response");
  }

  const r = e
      .map((c) => {
        const l = o.data[c] ?? null;
        return [c, ls.replace(c, l, n)];
      })
      .filter(([c]) => It.has(c));

  const s = Object.fromEntries(r.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(r.map(([c, l]) => [c, l.received]));

  Lt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}

const _a = _f({
    ids: () => [...It.keys()],
    inventory: () => vf(false),
    states: ga,
    hidden: () => document.hidden,
  });

const _a_request = _a.request;
function Qb(e) {
  It.set(e, (It.get(e) ?? 0) + 1);

  if (!fr) {
    (fr = setInterval(_a_request, 15000/* 15e3 */));
    window.addEventListener("focus", _a_request);
    document.addEventListener("visibilitychange", _a_request);
  }

  _a_request();

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
      _a.reset();
      (Vr = -Infinity);
      clearInterval(fr);
      (fr = undefined);
      window.removeEventListener("focus", _a_request);
      document.removeEventListener("visibilitychange", _a_request);
      Lt.setState({ inventory: null });
    }
  };
}
rs(() => {
  on++;
  (Vr = -Infinity);
  _a.reset();
  ls.clear();
  Lt.setState({ posts: {}, received: {}, inventory: null, generation: on });

  if (It.size) {
    _a_request();
  }
});
const us = gf();

const Pt = et(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const Rt = new Map();
let pr;
let Wr = -Infinity;
let rn = 0;
let go;
function yf(e = true) {
  if (!ln()) {
    Pt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (go?.generation === rn) {
    return go.promise;
  }
  if (!e && Date.now() - Wr < 15000/* 15e3 */) {
    return Promise.resolve();
  }
  const t = rn;

  const n = Promise.resolve()
    .then(async () => {
      try {
        const o = await O.get("/correctors/inventory", {
          skipErrorToast: true,
        });

        if (t === rn) {
          (Wr = Date.now());
          Pt.setState({ inventory: o.data });
        }
      } catch (o) {
        if (t === rn &&
            $e(o) &&
            o.status > 0 &&
            o.status < 500 &&
            o.status !== 429) {
          Pt.setState({ inventory: null });
        }

        throw o;
      }
    })
    .finally(() => {
    if (go?.promise === n) {
      (go = undefined);
    }
  });

  (go = { generation: t, promise: n });
  return n;
}
async function va(e = [...Rt.keys()]) {
  if (!e.length) {
    return;
  }
  const t = rn;
  const n = performance.now();

  const o = await O.get(`/correctors/state?ids=${e.join(",")}`, {
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
        return [c, us.replace(c, l, n)];
      })
      .filter(([c]) => Rt.has(c));

  const s = Object.fromEntries(r.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(r.map(([c, l]) => [c, l.received]));

  Pt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}

const ya = _f({
    ids: () => [...Rt.keys()],
    inventory: () => yf(false),
    states: va,
    hidden: () => document.hidden,
  });

const ya_request = ya.request;
function Zb(e) {
  Rt.set(e, (Rt.get(e) ?? 0) + 1);

  if (!pr) {
    (pr = setInterval(ya_request, 15000/* 15e3 */));
    window.addEventListener("focus", ya_request);
    document.addEventListener("visibilitychange", ya_request);
  }

  ya_request();

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
      ya.reset();
      (Wr = -Infinity);
      clearInterval(pr);
      (pr = undefined);
      window.removeEventListener("focus", ya_request);
      document.removeEventListener("visibilitychange", ya_request);
      Pt.setState({ inventory: null });
    }
  };
}
rs(() => {
  rn++;
  (Wr = -Infinity);
  ya.reset();
  us.clear();
  Pt.setState({ posts: {}, received: {}, inventory: null, generation: rn });

  if (Rt.size) {
    ya_request();
  }
});
function _o(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const gt = new pa(50, 300 * 1000/* 1e3 */);
const Jb = 60 * 1000/* 1e3 */;
setInterval(() => gt.cleanup(), 120 * 1000/* 1e3 */);
function e1(e) {
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
function en(e) {
  const t = df();

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
    author: e1(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: f,
    spans: e.spans ?? [],
    corrector: t ? us.receive(e.id, e.corrector) : undefined,
    redPen: t ? ls.receive(e.id, e.redPen) : undefined,
    notebook:
      t && (e.notebook?.style === "grid" || e.notebook?.style === "ruled")
        ? { style: e.notebook.style }
        : undefined,
    attachments: o,
    reactions: { total: r, myReaction: l },
    stats: { views: s, comments: a, reposts: c },
    reposted: u,
    originalPost: e.originalPost ? en(e.originalPost) : null,
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
      return { data: s.data.posts.map(en), nextCursor: _o(s.data) };
    },
    async getPost(e) {
      const t = await O.get(D.posts.single(e));
      return en(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const o = gt.get(n);
        const r = o && o.pinnedPostId === (t.pinnedPostId ?? null);

        if (o && r && gt.isFresh(n, Jb)) {
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
      return { data: s.data.posts.map(en), nextCursor: _o(s.data) };
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
      return en(n);
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
      return { data: s.data.posts.map(en), nextCursor: _o(s.data) };
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
      return { data: s.data.posts.map(en), nextCursor: _o(s.data) };
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
      return { data: s.data.posts.map(en), nextCursor: _o(s.data) };
    },
  };

const t1 = { new: "newest", old: "oldest", popular: "popular" };
function n1(e) {
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
function Pi(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const o = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const r = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: n1(e.author),
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
        ? (e.previewReplies ?? e.replies).map(Pi)
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
      n.set("sort", t1[t.sort]);
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
    return { data: a.map(Pi), nextCursor: c };
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
    return { data: a.map(Pi), nextCursor: c };
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
function Nr(e, t, n) {
  const o = e.originalPost ? Nr(e.originalPost, t, n) : e.originalPost;

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
          error: $e(a) ? ra(a.code, a.message) : "Не удалось загрузить ленту",
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
          posts: m.posts.map(g => g.id === f ? h : g)
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
          c && { ...c, posts: c.posts.map(l => Nr(l, n, o)) },
        ])
      );
      return {
        posts: r.posts.map(a => Nr(a, n, o)),
        currentPost: r.currentPost ? Nr(r.currentPost, n, o) : null,
        feedCache: s,
      };
    });
  },

  reset: () => {
    t().feedMeasuredHeights.clear();

    se(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => i1
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

const Ps = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: ie },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Tr = et()(
  Fd(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: oa(() => localStorage) }
  )
);

const lt = new Map();
const o1 = 60 * 1000/* 1e3 */;
const r1 = 300 * 1000/* 1e3 */;
const El = 20;
const bl = 500;
function s1() {
  const e = Date.now();
  for (const [t, n] of lt.entries()) {
    if (e - n.timestamp > r1) {
      lt.delete(t);
    }
  }
  if (lt.size > El) {
    const t = Array.from(lt.entries()).sort(
      (o, r) => o[1].timestamp - r[1].timestamp
    );
    t.slice(0, t.length - El).forEach(([o]) => lt.delete(o));
  }
}

const nn = et((e, t) => ({
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
        const { usePostsStore: u } = await Promise.resolve().then(() => Ps);
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
    s1();
    const s = Tr.getState().commentsSort;
    const a = n;
    const c = lt.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < o1) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        Nt.getComments(n, { limit: 100, sort: s })
          .then((f) => {
          const f_data = f.data;

          lt.set(a, {
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
    const a = Tr.getState().commentsSort;
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

    let r = o.findIndex(g => g.id === n);

    let s = false;
    let a = -1;
    let c = -1;
    if (r === -1) {
      for (let g = 0; g < o.length; g++) {
        const _ = (o[g].previewReplies ?? []).findIndex(b => b.id === n);
        if (_ !== -1) {
          (s = true);
          (a = g);
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
    const f = l.reactions.total;
    const p = u !== null;
    const d = p ? Math.max(0, f - 1) : f + 1;
    const h = p ? null : "love";
    const m = [...o];
    if (s) {
      const g = [...(m[a].previewReplies ?? [])];
      (g[c] = { ...g[c], reactions: { total: d, myReaction: h } });
      (m[a] = { ...m[a], previewReplies: g });
    } else {
      m[r] = { ...m[r], reactions: { total: d, myReaction: h } };
    }
    e({ comments: m });
    try {
      if (p) {
        await Nt.unlikeComment(n);
      } else {
        await Nt.likeComment(n);
      }
    } catch (g) {
      console.error("Failed to toggle comment like:", g);
      const v = [...t().comments];
      if (s) {
        const _ = v.findIndex(b => b.previewReplies?.some(y => y.id === n)
        );
        if (_ !== -1) {
          const b = v[_].previewReplies.findIndex(y => y.id === n);
          if (b !== -1) {
            const y = [...v[_].previewReplies];
            (y[b] = { ...y[b], reactions: { total: f, myReaction: u } });
            (v[_] = { ...v[_], previewReplies: y });
          }
        }
      } else {
        const _ = v.findIndex(b => b.id === n);

        if (_ !== -1) {
          (v[_] = { ...v[_], reactions: { total: f, myReaction: u } });
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

      const f = ge.getState().profile;
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
            comments: _.comments.map(b => b.id === s
              ? {
                  ...b,
                  previewReplies: [...(b.previewReplies || []), v],
                  stats: { ...b.stats, replies: b.stats.replies + 1 },
                }
              : b
            ),

            highlightedCommentId: u.id
          })
            : _ => ({
            comments: [v, ..._.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: p } = await se(async () => {
          const { usePostsStore: g } = await Promise.resolve().then(() => Ps);
          return { usePostsStore: g };
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

      const h = Tr.getState().commentsSort;
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

    const { usePostsStore: c } = await se(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => Ps);
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

const i1 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: nn },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const jr = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const a1 = 0;
const c1 = 1;
const l1 = 2;
const u1 = 3;
const Sl = 4;
const d1 = 5;
const f1 = 250;
const p1 = 0.5;
const h1 = 30000/* 3e4 */;
const m1 = 2000/* 2e3 */;
const g1 = 20;
const Cl = "dwell_sid";

const _1 = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function v1() {
  try {
    let e = sessionStorage.getItem(Cl);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Cl, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function y1(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= p1 ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class w1 {
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
    (this.sessionId = v1());

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
        { threshold: _1 }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const o of n) {
      window.addEventListener(o, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const o = document.hidden ? l1 : null;
      this.evaluateAll(o);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(c1);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(u1);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), m1);
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
        this.evaluate(c, Sl);
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
      this.evaluate(o, Sl);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < h1 && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const r = !!t_lastEntry && y1(t_lastEntry);
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

      if (u < f1) {
        return;
      }

      const f = n ?? (r ? d1 : a1);
      const p = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const d = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: f, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (d) {
        (h.s = jr[t.source]);
      }

      if (p) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, jr[t.source]);
    }
  }
  enqueue(t, n, o) {
    this.buffer.push(t);

    if (this.buffer.length >= g1) {
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
const kl = new w1();
function E1(e, t, n, o = "", r = undefined) {
  U(() => {
    const t_current = t.current;
    if (!(!t_current || !r)) {
      kl.observe(t_current, e, n, o, r);

      return () => {
        kl.unobserve(t_current);
      };
    }
  }, [e, t, n, o, r]);
}
function wa(e) {
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
const wf = "shop-cart";
function Nl() {
  try {
    const e = localStorage.getItem(wf);
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
function Ef() {
  const [e, t] = L(Nl);

  U(() => {
    const n = (o) => {
      if (o.key === null || o.key === wf) {
        t(Nl());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}

const b1 = ce(() => se(() => import("./index-Dlffw2_w.js"), __vite__mapDeps([8, 9])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const S1 = ce(() => se(
  () => import("./index-BU-xduJ3.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const bf = ({
  href: e,
  icon: t,
  children: n,
  badge: o,
  onActiveClick: r,
  isActive: s = false,
}) => {
  const [a] = os();
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

const hr = e => i(bf, { ...e });

const C1 = () => {
  const e = Xo();
  const [t] = os();

  const n = ie(N => N.fetchFeed);

  const o = ie(N => N.isRefreshing);

  const r = ge(N => N.logout);

  const s = cs();
  const a = as();
  const c = cf();
  const l = Ef();
  const [u, f] = L(false);
  const [p, d] = L(false);
  const h = zd();

  const m = ss(N => N.fetchPortal);

  const g = qd(h);
  const v = !g && h.active && !!h.url;
  const _ = g ? le.ALICE_EVENT : v ? h.url : le.EVENT;
  const b = (t.url || "/").startsWith(le.EVENT);
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

  const E = Te(() => {
    const N = t.url || "/";
    return da.some(T => N.startsWith(T));
  }, [t.url]);

  const w = Te(() => {
    const N = t.url || "/";
    return a?.username
      ? N === `/@${a.username}` || N.startsWith(`/@${a.username}/`)
      : false;
  }, [t.url, a?.username]);

  return E
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
                  i(u0, {}),
                  i("button", {
                    className: Ve.asideBrandVersion,
                    onClick: () => f(true),
                    title: "Что нового",
                    children: ["v", "1.1.2"],
                  }),
                ],
              }),
              i("nav", {
                className: Ve.nav,
                children: [
                  i(hr, {
                    href: "/",
                    icon: o ? i(aa, {}) : i(Zd, {}),
                    onActiveClick: k,
                    children: "Лента",
                  }),
                  i(hr, {
                    href: "/search",
                    icon: i(nf, {}),
                    children: "Поиск",
                  }),
                  i(hr, {
                    href: "/shop",
                    icon: i(of, {}),
                    badge: l,
                    children: "Магаз",
                  }),
                  ((h.active && h.url) || e.status === "allowed") &&
                    i("a", {
                      href: _,
                      target: v ? "_blank" : undefined,
                      rel: v ? "noopener noreferrer" : undefined,
                      className: `${Ve.portalButton} ${
                        h.active ? Ve.portalActive : ""
                      } ${b ? Ve.active : ""}`,
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
                  i(hr, {
                    href: "/notifications",
                    icon: i(ca, {}),
                    badge: c,
                    children: "Уведомления",
                  }),
                  i(bf, {
                    href: y,
                    icon: i(Ei, {}),
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
                        onClick: () => d(true),
                        children: [
                          i("span", { children: "⭐" }),
                          i("span", { children: "ИТД НУКСТА" }),
                        ],
                      }),
                    i("button", {
                      className: Ve.logoutButton,
                      onClick: C,
                      children: [
                        i(f0, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: Ve.logoutButton,
                  href: le.LOGIN,
                  children: [
                    i(Ei, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          u &&
            i(De, {
              fallback: null,
              children: i(b1, { isOpen: u, onClose: () => f(false) }),
            }),
          p &&
            i(De, {
              fallback: null,
              children: i(S1, { isOpen: p, onClose: () => d(false) }),
            }),
        ],
      });
};

const k1 = "I8jG";
const N1 = "LeX1";
const T1 = "LUQL";
const I1 = "K4Sp";
const vo = { sidebar: k1, sidebarContent: N1, sidebarBottom: T1, legalLinks: I1 };

const R1 = () => {
  const [e] = os();
  return Te(() => {
    const n = e.url || "/";
    return da.some(o => n.startsWith(o));
  }, [e.url])
    ? null
    : i("aside", {
        className: vo.sidebar,
        children: [
          i("div", { className: vo.sidebarContent }),
          i("div", {
            className: vo.sidebarBottom,
            children: [
              i("ul", {
                className: vo.legalLinks,
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
                className: vo.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const A1 = "Um6l";
const L1 = "eQW1";
const P1 = "pr0C";
const O1 = "Lttf";
const x1 = "vqYZ";
const $1 = "HqDD";
const M1 = "mYvO";
const D1 = "Knie";
const U1 = "OSVP";
const F1 = "juKE";
const B1 = "yK10";
const H1 = "H6A1";

const Qe = {
  mobileNavigationWrapper: A1,
  navigation: L1,
  indicator: P1,
  indicatorHidden: O1,
  navItem: x1,
  label: $1,
  active: M1,
  createButton: D1,
  iconWrapper: U1,
  portalImage: F1,
  portalImageActive: B1,
  badge: H1,
};

const Tl = e => Symbol.iterator in e;

const Il = e => "entries" in e;

const Rl = (e, t) => {
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

const V1 = (e, t) => {
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

function W1(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : Tl(e) && Tl(t)
    ? Il(e) && Il(t)
      ? Rl(e, t)
      : V1(e, t)
    : Rl(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Al(e) {
  const t = Co.useRef(undefined);
  return (n) => {
    const o = e(n);
    return W1(t.current, o) ? t.current : (t.current = o);
  };
}
const j1 = "Uy4T";
const z1 = "aoJh";
const q1 = "EgTA";
const G1 = "iWRT";
const Y1 = "p83E";
const K1 = "RMEA";
const X1 = "ZcZX";
const Q1 = "G85u";
const Z1 = "HUAn";
const J1 = "iRr7";
const eS = "U9sW";
const tS = "XyRA";
const nS = "LDQa";
const oS = "uaJd";
const rS = "MQWV";
const sS = "H83Q";
const iS = "vwAc";
const aS = "Yk0y";
const cS = "OesM";
const lS = "PJ91";
const uS = "zYmd";
const dS = "tXZx";
const fS = "dfFS";

const re = {
  skeleton: j1,
  comment: z1,
  content: q1,
  header: G1,
  headerLeft: Y1,
  body: K1,
  actions: X1,
  likeBtn: Q1,
  shimmer: Z1,
  avatar: J1,
  more: eS,
  likeIcon: tS,
  name: nS,
  time: oS,
  line: rS,
  w100: sS,
  w85: iS,
  w65: aS,
  w50: cS,
  w40: lS,
  replyLabel: uS,
  likeCount: dS,
  list: fS,
};

function pS(e) {
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
            pS(e),
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
const Ll = ["medium", "short", "long", "medium", "short"];
function hS({ count: e = 4 }) {
  return i("div", {
    className: re.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(Ea, { variant: Ll[n % Ll.length], delayMs: n * 120 }, n)
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

const Os = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function mS() {
  const [e, t] = L(false);
  const [n, o] = L(Os);

  const r = I((m) => {
    if (m.length <= jt.MAX_POLL_QUESTION_LENGTH) {
      o(g => ({
        ...g,
        question: m
      }));
    }
  }, []);

  const s = I((m, g) => {
    if (g.length <= jt.MAX_POLL_OPTION_LENGTH) {
      o(v => ({
        ...v,
        options: v.options.map(_ => _.id === m ? { ..._, text: g } : _)
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
        o(g => ({
          ...g,
          options: g.options.filter(v => v.id !== m)
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
    o(Os);
  }, []);

  const f = I(() => {
    t(m => !m);
  }, []);

  const p = I(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const g = n.options.filter(v => v.text.trim().length > 0);

    return m && g.length >= jt.MIN_POLL_OPTIONS;
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
    o(Os);
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
function Sf(e = 10, t = false) {
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

  const f = n.some(y => y.type === "video") || r.some(y => y.type === "video");

  const p = n.some(y => y.type === "image") || r.some(y => y.type === "image");

  const d = I(() => {
    a.current?.click();
  }, []);

  const h = I(
    async (y) => {
      const k = Yn.isValidVideoType(y);
      const C = Yn.isValidImageType(y);
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
        const A = await Yn.uploadMedia(y);

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
          (B = ra(A.code, A.message));
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
      const E = n.length + r.length;
      const w = e - E;
      if (w <= 0) {
        return;
      }
      Array.from(y_target_files).slice(0, w).forEach(h);
      (y_target.value = "");
    },
    [n.length, r.length, e, h]
  );

  const g = I((y) => {
    o((k) => {
      const C = k.find(E => E.id === y);

      if (C) {
        URL.revokeObjectURL(C.previewUrl);
      }

      return k.filter(E => E.id !== y);
    });

    s((k) => {
      const C = k.find(E => E.id === y);

      if (C) {
        URL.revokeObjectURL(C.previewUrl);
      }

      return k.filter(E => E.id !== y);
    });
  }, []);

  const v = I(
    (y) => {
      const k = y.filter(w => t ? Yn.isValidMediaType(w) : Yn.isValidImageType(w)
      );
      if (k.length === 0) {
        return;
      }
      const C = c.current.length + l.current.length;
      const E = e - C;

      if (E > 0) {
        k.slice(0, E).forEach(h);
      }
    },
    [e, h, t]
  );

  const _ = I(
    async (y) => {
      const [k, C] = y.split(",");
      const E = k.match(/:(.*?);/)?.[1] || "image/png";
      const w = atob(C);
      const N = new Uint8Array(w.length);
      for (let P = 0; P < w.length; P++) {
        N[P] = w.charCodeAt(P);
      }
      const T = new Blob([N], { type: E });
      const S = new File([T], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(S);
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
    removeImage: g,
    addImage: _,
    uploadFiles: v,
    clearAll: b,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const gS = "PyBE";
const _S = "FvSj";
const vS = "eQVS";
const yS = "TWrV";
const wS = "ZrVq";
const ES = "FwtI";
const bS = "rKEI";
const SS = "qNGM";
const CS = "sAQC";
const kS = "mZlN";
const NS = "sNAh";
const TS = "h073";
const IS = "wSmh";
const RS = "goUk";
const AS = "umvM";
const LS = "KuRM";
const PS = "lssH";
const OS = "ASky";
const xS = "cDlU";
const $S = "UauW";
const MS = "Venu";
const DS = "tSl0";
const US = "N0Bw";
const FS = "J9ag";
const BS = "gyhJ";
const HS = "Ebzn";
const VS = "GZbo";
const WS = "o9iU";
const jS = "b7Uf";
const zS = "TRVR";
const qS = "y3b9";
const GS = "QNKF";
const YS = "Vfm2";
const KS = "EgIW";
const XS = "RYIl";
const QS = "wbnO";
const ZS = "ilBt";
const JS = "y3FN";
const eC = "tzIW";
const tC = "dfwJ";
const nC = "vm0j";
const oC = "pDZX";
const rC = "nIaW";
const sC = "jG48";
const iC = "yVUQ";
const aC = "uTzE";
const cC = "ek6x";
const lC = "qM5k";
const uC = "BL9b";
const dC = "PBE4";
const fC = "OPIs";

const j = {
  form: gS,
  notebookGrid: _S,
  notebookRuled: vS,
  editor: yS,
  mediaButton: wS,
  dragActive: ES,
  whatsNew: bS,
  dragOverlay: SS,
  attachments: CS,
  attachmentPreview: kS,
  uploading: NS,
  uploadError: TS,
  videoPreviewWrapper: IS,
  videoPlayIcon: RS,
  uploadOverlay: AS,
  spinner: LS,
  errorOverlay: PS,
  errorText: OS,
  removeAttachment: xS,
  actions: $S,
  mediaButtons: MS,
  submitGroup: DS,
  charCount: US,
  error: FS,
  pollContainer: BS,
  pollHeader: HS,
  pollTitle: VS,
  pollClose: WS,
  pollQuestion: jS,
  pollOptions: zS,
  pollOptionRow: qS,
  pollOption: GS,
  removeOption: YS,
  addOption: KS,
  pollFooter: XS,
  pollToggle: QS,
  active: ZS,
  notebookLabel: JS,
  notebookPicker: eC,
  notebookPickerHeader: tC,
  notebookOptions: nC,
  notebookOptionRow: oC,
  notebookOption: rC,
  notebookOptionActive: sC,
  gridSwatch: iC,
  ruledSwatch: aC,
  notebookBuy: cC,
  notebookUnavailable: lC,
  notebookButton: uC,
  notebookIcon: dC,
  submitError: fC,
};

function Pl({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: j.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: j.videoPlayIcon,
            children: i(i0, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function Cf({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: j.attachments,
        children: [
          e.map(r => i(
            "div",
            {
              className: j.attachmentPreview,
              children: [
                i(Pl, { src: r.previewUrl, type: r.type }),
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
                i(Pl, { src: r.previewUrl, type: r.type }),
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
function pC({
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
          children: [i(la, {}), i("span", { children: "Добавить вариант" })],
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
const hC = "ME5I";
const mC = "QNH0";
const gC = "eKFP";
const _C = "K9MG";
const vC = "GoLJ";
const yC = "dspD";
const wC = "AtYE";
const EC = "AFEn";
const bC = "uDj2";
const SC = "nsQs";
const CC = "Nv3E";
const kC = "KIYY";
const NC = "Gllm";
const TC = "vjqY";
const IC = "X71Z";
const RC = "pJSW";

const Ge = {
  editor: hC,
  empty: mC,
  bold: gC,
  italic: _C,
  underline: vC,
  strike: yC,
  spoiler: wC,
  monospace: EC,
  quote: bC,
  link: SC,
  menu: CC,
  buttons: kC,
  button: NC,
  linkForm: TC,
  linkInput: IC,
  linkSubmit: RC,
};

const zr = {
  bold: Ge.bold,
  italic: Ge.italic,
  underline: Ge.underline,
  strike: Ge.strike,
  spoiler: Ge.spoiler,
  monospace: Ge.monospace,
  quote: Ge.quote,
  link: Ge.link,
};

function xs(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function AC(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function LC(e) {
  return e !== "mention" && e !== "hashtag";
}
function Ol(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const o of t) {
    if (!LC(o.type)) {
      continue;
    }
    const r = zr[o.type];
    const s = o.type === "link" ? ` data-url="${AC(o.url)}"` : "";
    n = `<span class="${r}"${s}>${n}</span>`;
  }
  return n;
}
function PC(e, t, n) {
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
function OC(e, t) {
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
function xC(e) {
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
      for (const [u, f] of Object.entries(zr)) {
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
function $C(e, t) {
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
function MC(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const DC = [
    { type: "bold", icon: Zy, title: "Жирный" },
    { type: "italic", icon: e0, title: "Курсив" },
    { type: "underline", icon: r0, title: "Подчёркнутый" },
    { type: "strike", icon: o0, title: "Зачёркнутый" },
    { type: "spoiler", icon: n0, title: "Спойлер" },
    { type: "monospace", icon: Jy, title: "Моноширинный" },
    { type: "quote", icon: t0, title: "Цитата" },
    { type: "link", icon: Yd, title: "Ссылка" },
  ];

const ds = Id((
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
  const m = x(null);
  const [g, v] = L(false);
  const [_, b] = L({ x: 0, y: 0 });
  const [y, k] = L(false);
  const [C, E] = L("");
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

  Zi(
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
          de = PC(m_current, ue.startContainer, ue.startOffset);
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
      return xs(t);
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
        (K += Ol(xs(me), X));
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
      K += Ol(xs(Z), X);
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
          o(X, OC(n, X));
          return;
        }
        const de = xC(m_current);
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
      b({ x: K, y: de });
      v(true);
    },
    [p]
  );

  const he = I(
    ($) => {
      $.preventDefault();

      if (d && $.clipboardData?.files?.length) {
        const Z = Array.from($.clipboardData.files).filter(me => me.type.startsWith("image/")
        );
        if (Z.length > 0) {
          d(Z);
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
    [ne, d]
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
      if ($.key === "Enter" && !$.shiftKey && f) {
        $.preventDefault();
        f();
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
    [f, p]
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
      (Z.className = zr[$]);

      if ($ === "link" && V) {
        (Z.dataset.url = V);
      }

      const me = $C(X.commonAncestorContainer, zr[$]);
      if (me) {
        MC(me);
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
      E("");
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
    if (!g) {
      return;
    }

    const $ = (K) => {
      if (w.current &&
        !w.current.contains(K.target)) {
        v(false);
        k(false);
        E("");
        (T.current = null);
      }
    };

    const V = () => {
      v(false);
      k(false);
      E("");
      (T.current = null);
    };

    document.addEventListener("mousedown", $);
    window.addEventListener("scroll", V, true);

    return () => {
      document.removeEventListener("mousedown", $);
      window.removeEventListener("scroll", V, true);
    };
  }, [g]);
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
      g &&
        $(
          i("div", {
            ref: w,
            className: Ge.menu,
            style: { left: _.x, top: _.y },
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
                      onInput: $ => E($.target.value),
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
                  children: DC.map(({ type: $, icon: V, title: K }) => i(
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

const UC = "uymy";
const FC = "ABdo";
const BC = "lh4f";
const HC = "l1Us";
const VC = "fUBf";
const WC = "HAnl";
const jC = "t7Tw";
const zC = "KUfM";
const qC = "HOOp";
const GC = "gfPq";
const YC = "yddD";
const KC = "KEJR";
const XC = "ZtSh";
const QC = "XNFO";
const ZC = "qGEf";
const JC = "S9Jw";
const ek = "wni0";
const tk = "GFyY";
const nk = "xbuE";
const ok = "QpZz";
const rk = "cnxC";

const Ae = {
  commentInput: UC,
  replyMode: FC,
  inputRow: BC,
  attachmentStrip: HC,
  circleButton: VC,
  micButton: WC,
  sendButton: jC,
  submitting: zC,
  textareaContainer: qC,
  expanded: GC,
  voiceMode: YC,
  inputWrapper: KC,
  commentCharCount: XC,
  error: QC,
  input: ZC,
  replyHeader: JC,
  replyText: ek,
  replyName: tk,
  replyClose: nk,
  dragActive: ok,
  dragOverlay: rk,
};

const sk = "m8Yy";
const ik = "YjlZ";
const ak = "EMXY";
const $s = { textInput: sk, entering: ik, sendButton: ak };
const ck = 1000/* 1e3 */;
function lk({
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
  const f = ck - e.length;
  const p = f < 0;
  const d = [$s.textInput, s ? $s.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: d,
    children: [
      i("div", {
        className: Ae.inputWrapper,
        children: [
          i(ds, {
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
        className: `${Ae.circleButton} ${Ae.sendButton} ${$s.sendButton} ${
          c ? Ae.submitting : ""
        }`,
        onClick: r,
        disabled: c || l || p,
        children: c ? i(lf, { size: "xs" }) : i(a0, { size: 20 }),
      }),
    ],
  });
}
const uk = ce(() => se(
  () => import("./VoiceInput-BIzjwxtW.js"),
  __vite__mapDeps([10, 11, 12])
).then(e => ({
  default: e.VoiceInput
}))
);
function kf({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: o,
  onCancelReply: r,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = is();
  const [f, p] = L("text");
  const [d, h] = L(false);
  const [m, g] = L(false);
  const [v, _] = L(false);
  const [b, y] = L(false);
  const k = x(false);
  const C = x(null);
  const E = x(0);

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
  } = Sf(4);

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
  const he = f === "voice";
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

    _(true);
    try {
      await e(me, Ie, Se.length > 0 ? Se : undefined);
      u();
      A();
    } catch (ue) {
      console.error("Failed to submit comment:", ue);
    } finally {
      _(false);
    }
  };

  const ae = () => {
    (k.current = true);
    p("voice");
    g(false);
  };

  const W = () => {
    h(true);
  };

  const we = () => {
    h(false);
    p("text");
    g(true);

    if (C.current) {
      clearTimeout(C.current);
    }

    (C.current = window.setTimeout(() => {
      (C.current = null);
      g(false);
    }, 300));
  };

  const oe = I((X) => {
    X.preventDefault();
    X.stopPropagation();
    E.current++;

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
    E.current--;

    if (E.current === 0) {
      y(false);
    }
  }, []);

  const K = I(
    (X) => {
      X.preventDefault();
      X.stopPropagation();
      (E.current = 0);
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
    b ? Ae.dragActive : "",
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
      b &&
        i("div", {
          className: Ae.dragOverlay,
          children: [
            i(ef, { size: 24 }),
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
        !d &&
        ne &&
        i("div", {
          className: Ae.attachmentStrip,
          children: i(Cf, { images: w, uploadingImages: N, onRemove: P }),
        }),
      i("div", {
        className: Ae.inputRow,
        children: [
          i("button", {
            className: Ae.circleButton,
            onClick: he ? W : S,
            children: he ? i(ft, { size: 20 }) : i(Kd, { size: 20 }),
          }),
          i("div", {
            className: Ae.textareaContainer,
            children:
              he || d
                ? i(De, {
                    fallback: null,
                    children: i(uk, {
                      onCancel: W,
                      onSend: t,
                      isExiting: d,
                      onExitComplete: we,
                    }),
                  })
                : i(lk, {
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
            !d &&
            i("button", {
              className: `${Ae.circleButton} ${Ae.micButton}`,
              onClick: ae,
              children: i(s0, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: B,
        type: "file",
        accept: Ni,
        multiple: true,
        onChange: q,
        style: { display: "none" },
      }),
    ],
  });
}
const dk = "mhP0";
const fk = "b3fe";
const pk = "D8A9";
const hk = "UQMf";
const mk = "RJRo";
const gk = "qlui";
const _k = "DolE";

const mn = {
  counter: dk,
  digit: fk,
  prev: pk,
  current: hk,
  animating: mk,
  up: gk,
  down: _k,
};

function vk(e) {
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
function No({ value: e }) {
  const t = vk(e);
  const n = x(e);
  const o = x(t.length);
  const r = x(Date.now());

  const [s, a] = L(() => t
    .split("")
    .map((p, d) => ({
    char: p,
    prevChar: p,
    isAnimating: false,
    key: d
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
    const d = e > n.current ? "up" : "down";
    l(d);
    (n.current = e);
    const h = t.split("");

    const m = s.map(k => k.char);

    const g = Math.max(h.length, m.length);
    const v = m.join("").padStart(g, " ").split("");

    const b = h
      .join("")
      .padStart(g, " ")
      .split("")
      .map((k, C) => {
      const E = v[C] || " ";
      const w = s[C - (g - s.length)];
      return k !== E
        ? (o.current++,
          { char: k, prevChar: E, isAnimating: true, key: o.current })
        : { char: k, prevChar: k, isAnimating: false, key: w?.key ?? C };
    })
      .filter(k => k.char !== " " || k.isAnimating);

    a(b);
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

  const f = c === "up" ? mn.up : c === "down" ? mn.down : "";
  return i("span", {
    className: mn.counter,
    children: s.map(p => p.isAnimating
      ? i(
          "span",
          {
            className: `${mn.digit} ${mn.animating} ${f}`,
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
const yk = "bFBC";
const wk = "GNtO";
const Ek = "E540";
const bk = "Wr72";
const Sk = "tIW7";
const Ck = "rbP6";
const kk = "wzTz";
const Nk = "X9La";
const Tk = "lwcx";

const Ft = {
  dropdownWrapper: yk,
  trigger: wk,
  menu: Ek,
  hidden: bk,
  menuItem: Sk,
  danger: Ck,
  itemIcon: kk,
  itemLabel: Nk,
  divider: Tk,
};

function Nf({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: o = [],
  className: r,
}) {
  const [s, a] = L(false);
  const [c, l] = L(false);
  const [u, f] = L({ top: 0, left: 0 });
  const p = x(null);
  const d = x(null);

  const h = I(() => {
    if (!p.current) {
      return;
    }
    const _ = p.current.getBoundingClientRect();
    const b = d.current?.offsetHeight || 150;
    const y = d.current?.offsetWidth || 160;
    let k = 0;
    let C = 0;

    if (n.startsWith("bottom")) {
      (k = _.bottom + 4);
    } else {
      (k = _.top - b - 4);
    }

    if (n.endsWith("right")) {
      (C = _.right - y);
    } else {
      (C = _.left);
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

    if (k + b > innerHeight) {
      (k = _.top - b - 4);
    }

    if (k < 8) {
      (k = _.bottom + 4);
    }

    f({ top: k, left: C });
    l(true);
  }, [n]);

  const m = I((_) => {
    const _target = _.target;

    if (p.current &&
      !p.current.contains(_target) &&
      d.current &&
      !d.current.contains(_target)) {
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

  const g = (_) => {
    _.stopPropagation();

    if (s) {
      a(false);
      l(false);
    } else {
      a(true);
    }
  };

  const v = (_, b) => {
    _.stopPropagation();
    b.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${Ft.dropdownWrapper} ${r || ""}`,
    children: [
      i("div", { ref: p, className: Ft.trigger, onClick: g, children: e }),
      s &&
        $(
          i("div", {
            ref: d,
            className: `${Ft.menu} ${c ? "" : Ft.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((_, b) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${Ft.menuItem} ${_.danger ? Ft.danger : ""}`,
                    onClick: y => v(y, _),
                    children: [
                      _.icon &&
                        i("span", {
                          className: Ft.itemIcon,
                          children: _.icon,
                        }),
                      i("span", {
                        className: Ft.itemLabel,
                        children: _.label,
                      }),
                    ],
                  }),
                  o.includes(_.id) &&
                    b < t.length - 1 &&
                    i("div", { className: Ft.divider }),
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

const Ik = [
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

const Ir = Ik.map(([e, t]) => {
  const n = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" viewBox="0 0 120 28" preserveAspectRatio="none"><path d="${e}" fill="#fffef7" stroke="#cecbbc" stroke-width=".6" vector-effect="non-scaling-stroke"/><path d="${t}" fill="none" stroke="#e6e2d4" stroke-width=".55"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(n)}`;
});

function Rk(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) {
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  }
  return t >>> 0;
}
function Ak(e) {
  const t = new Map();
  const n = new Set();
  let o = -1;
  for (const r of e) {
    if (t.has(r.id)) {
      continue;
    }

    if (n.size === Ir.length) {
      n.clear();
    }

    let s = Rk(r.id) % Ir.length;

    while (n.has(s) || (!n.size && s === o)) {
      s = (s + 1) % Ir.length;
    }

    t.set(r.id, s);
    n.add(s);
    (o = s);
  }
  return t;
}
const Lk = "FNbI";
const Pk = "VvuU";
const Ok = "Y8nT";
const xk = "fMJR";
const $k = "SEdc";
const Mk = "OWBN";
const Dk = "lely";
const Uk = "qDsn";
const Fk = "tSTv";

const Bt = {
  underline: Lk,
  monospace: Pk,
  quote: Ok,
  spoiler: xk,
  revealed: $k,
  link: Mk,
  mention: Dk,
  hashtag: Uk,
  corrector: Fk,
};

function Bk(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function Hk(e) {
  if (!Bk(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const o = String.fromCharCode(...n);
  const r = btoa(o);
  return `/external?url=${encodeURIComponent(r)}`;
}
function ba({
  text: e,
  spans: t = [],
  className: n = "",
  correctorMarks: o = [],
}) {
  const r = Te(() => Ak(o), [o]);

  const [s, a] = L(new Set());

  const c = Te(() => {
    if (t.length === 0) {
      return [{ text: e, offset: 0, styles: new Set() }];
    }
    const f = [];

    t.forEach((m, g) => {
      f.push({ pos: m.offset, type: "start", span: m, index: g });
      f.push({ pos: m.offset + m.length, type: "end", span: m, index: g });
    });

    f.sort((m, g) => m.pos !== g.pos
      ? m.pos - g.pos
      : m.type !== g.type
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
        const g = e.substring(d, m.pos);
        const v = new Set();
        let _;
        let b;
        let y;

        h.forEach((k) => {
          v.add(k.type);

          if (k.type === "link" && k.url) {
            (_ = k.url);
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
          text: g,
          offset: d,
          styles: v,
          url: _,
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
      const g = [...m].sort((v, _) => v - _);
      f_text = g.slice(0, -1).map((v, _) => {
        const b = f.text.slice(v, g[_ + 1]);

        const y = h.find(C => C.start <= v + f.offset && C.end > v + f.offset);

        const k = y ? r.get(y.id) : 0;
        return y
          ? i(
              "span",
              {
                className: Bt.corrector,
                "data-corrector-mark": true,
                "data-corrector-id": y.id,
                "data-corrector-variant": k,
                style: { backgroundImage: `url("${Ir[k]}")` },
                "aria-label": "Текст замазан дежурным",
                onClick: (C) => {
                  C.preventDefault();
                  C.stopPropagation();
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
      (f_text = i("span", { className: Bt.underline, children: f_text }));
    }

    if (f.styles.has("strike")) {
      (f_text = i("s", { children: f_text }));
    }

    if (f.styles.has("monospace")) {
      (f_text = i("code", { className: Bt.monospace, children: f_text }));
    }

    if (f.styles.has("quote")) {
      (f_text = i("span", { className: Bt.quote, children: f_text }));
    }

    if (f.styles.has("spoiler")) {
      const m = s.has(p);
      f_text = i("span", {
        className: `${Bt.spoiler} ${m ? Bt.revealed : ""}`,
        onClick: g => l(g, p),
        children: f_text,
      });
    }

    if (f.styles.has("link") && f.url) {
      const m = Hk(f.url);
      f_text = i("a", {
        href: m,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Bt.link,
        onClick: g => g.stopPropagation(),
        children: f_text,
      });
    }
    if (f.styles.has("mention") && f.mentionId) {
      const m = `/@${f.mentionId}`;
      f_text = i("a", {
        href: m,
        className: Bt.mention,
        onClick: (g) => {
          g.preventDefault();
          g.stopPropagation();
          Ye(m);
        },
        children: f_text,
      });
    }
    if (f.styles.has("hashtag") && f.hashtag) {
      const m = `/hashtag/${encodeURIComponent(f.hashtag)}`;
      f_text = i("a", {
        href: m,
        className: Bt.hashtag,
        onClick: (g) => {
          g.preventDefault();
          g.stopPropagation();
          Ye(m);
        },
        children: f_text,
      });
    }
    return i("span", { children: f_text }, p);
  };

  return i("span", { className: n, children: c.map((f, p) => u(f, p)) });
}
function Vk(e, t, n) {
  const { isVisible: o, isRevealing: r, onRevealComplete: s } = n;
  const a = x([]);
  const c = x(null);
  const l = x(null);
  const u = x({ width: 0, height: 0 });
  const f = x(1);

  const p = I((g, v) => {
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

  const d = I(
    (g, v) => {
      const _ = Math.floor((g * v) / 600);
      const b = [];
      for (let y = 0; y < _; y++) {
        b.push(p(g, v));
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
    const _ = t_current.getBoundingClientRect();
    if (_.width === 0 || _.height === 0) {
      return;
    }
    const b = window.devicePixelRatio || 1;
    if (u.current.width !== _.width || u.current.height !== _.height) {
      (u.current = { width: _.width, height: _.height });
      (e_current.width = _.width * b);
      (e_current.height = _.height * b);
      (e_current.style.width = `${_.width}px`);
      (e_current.style.height = `${_.height}px`);
      const y = e_current.getContext("2d");

      if (y) {
        y.setTransform(b, 0, 0, b, 0, 0);
        (l.current = y);
      }

      d(_.width, _.height);
    }
  }, [e, t, d]);

  const m = I(() => {
    f.current = 1;
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
    const g = () => {
      const l_current = l.current;
      const { width: _, height: b } = u.current;
      if (!l_current || _ === 0 || b === 0) {
        c.current = requestAnimationFrame(g);
        return;
      }
      if (r && ((f.current -= 0.05), f.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, _, b);

      a.current.forEach((y, k) => {
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
          (y.y = b);
        }

        if (y.y > b) {
          (y.y = 0);
        }

        if (y.life <= 0) {
          a.current[k] = p(_, b);
          return;
        }

        const C = y.life / y.maxLife;
        const E = C < 0.3 ? C / 0.3 : 1;
        const w = y.opacity * E * f.current;
        l_current.beginPath();
        l_current.arc(y.x, y.y, y.size, 0, Math.PI * 2);
        (l_current.fillStyle = `rgba(255, 255, 255, ${w})`);
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
  }, [o, r, p, h, s]);

  return { resetOpacity: m };
}
const Wk = "hnbJ";
const jk = "PNxS";
const zk = "lUfT";
const qk = "KBEX";
const Gk = "S29m";
const yo = { container: Wk, hidden: jk, image: zk, revealing: qk, canvas: Gk };
const xl = 5;
function $l({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: o,
  height: r,
  className: s = "",
  onClick: a,
}) {
  const [c, l] = L(!n);
  const [u, f] = L(false);
  const [p, d] = L(false);
  const h = x(null);
  const m = x(null);
  const g = x(null);
  const v = x(false);

  const { resetOpacity: _ } = Vk(h, m, {
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
          d(S.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    N.observe(m_current);

    return () => {
      N.disconnect();
    };
  }, []);

  const b = (w) => {
    (g.current = { x: w.clientX, y: w.clientY });
    (v.current = false);
  };

  const y = (w) => {
    if (!g.current) {
      return;
    }
    const N = Math.abs(w.clientX - g.current.x);
    const T = Math.abs(w.clientY - g.current.y);

    if ((N > xl || T > xl)) {
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
      _();
    } else if (a) {
      a(w);
    }
  };

  const C = !c && n;
  const E = o && r ? { aspectRatio: `${o} / ${r}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${yo.container} ${s} ${C ? yo.hidden : ""} ${
          u ? yo.revealing : ""
        }`,
        style: E,
        onPointerDown: b,
        onPointerMove: y,
        onClick: k,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: yo.image,
            loading: "lazy",
            width: o,
            height: r,
            draggable: false,
            "data-post-media-image": true,
          }),
          C && i("canvas", { ref: h, className: yo.canvas }),
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
function Yk(e) {
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
function Ms(e, t) {
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
  const f = Math.max(r.left, a);
  const p = Math.max(r.top, c);
  const d = Math.min(r.right, l);
  const h = Math.min(r.bottom, u);
  const m = Math.max(0, d - f);
  const g = Math.max(0, h - p);
  return m <= 0 || g <= 0
    ? null
    : {
        left: f,
        top: p,
        width: m,
        height: g,
        hiddenLeft: f - r.left,
        hiddenTop: p - r.top,
        hiddenRight: r.right - d,
        hiddenBottom: r.bottom - h,
        borderRadius: Yk(o),
      };
}
const Ml = { photo_open: 1, video_progress: 2 };
const Kk = 2000/* 2e3 */;
const Xk = 20;
const Dl = "dwell_sid";
function Qk() {
  try {
    let e = sessionStorage.getItem(Dl);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Dl, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class Zk {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = Qk());
      window.setInterval(() => this.flush(), Kk);
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
    const s = { t: Ml.photo_open, v: t, ai: n };

    if (o !== undefined) {
      (s.mi = o);
    }

    if (r) {
      (s.s = jr[r]);
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
      t: Ml.video_progress,
      v: t,
      ai: n,
      pm: Math.round(o),
      dm: Math.round(r),
    };

    if (s) {
      (a.s = jr[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= Xk) {
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
const Jk = new Zk();
function eN(e, t) {
  return I(
    (n, o) => {
      if (!e || !n) {
        return;
      }
      const r = t === "post_page" || t === "link";
      Jk.trackPhotoOpen(e, n, o, r ? t : undefined);
    },
    [e, t]
  );
}
const tN = "AbL9";
const nN = "XcEj";
const oN = "HbgQ";
const rN = "fTZK";
const sN = "F7LJ";
const iN = "LCa5";
const aN = "q63g";

const He = {
  mediaWrapper: tN,
  isFeed: nN,
  single: oN,
  image: rN,
  singleVideo: sN,
  media: iN,
  dragging: aN,
};

const Ul = ce(() => se(
  () => import("./PostMediaVideo-CLoDgbCE.js"),
  __vite__mapDeps([13, 14, 15])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const cN = 5;
const lN = 0.95;
const Ds = 0.5;
const uN = 650;
const dN = 500;
const fN = 300;
function pN(e, t, n, o) {
  const r = e / t;
  return r > n / o ? Math.min(e, n) : Math.min(t, o) * r;
}
function Sa({ media: e, isFeed: t = false, postVs: n, source: o }) {
  const r = e?.filter(R => R.type === "image") ?? [];

  const s = e?.filter(R => R.type === "video") ?? [];

  const a = x(null);

  const c = Bd(R => R.open);

  const u = Yt() ? fN : dN;
  const f = eN(n, o);
  const p = x(false);
  const d = x(0);
  const h = x(0);
  const m = x(false);
  const g = x(0);
  const v = x(0);
  const _ = x(0);
  const b = x(null);

  const y = () => {
    if (b.current) {
      cancelAnimationFrame(b.current);
      (b.current = null);
    }
  };

  const k = () => {
    const a_current = a.current;
    if (a_current) {
      (_.current *= lN);

      if (Math.abs(_.current) < Ds) {
        y();
        return;
      }

      (a_current.scrollLeft += _.current);
      (b.current = requestAnimationFrame(k));
    }
  };

  const C = (R) => {
    const a_current = a.current;

    if (a_current && r.length + s.length > 1) {
      y();
      (p.current = true);
      a_current.classList.add(He.dragging);
      (d.current = R.clientX);
      (g.current = R.clientX);
      (v.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (_.current = 0);
      R.preventDefault();
    }
  };

  const E = (R) => {
    if (!p.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const B = Date.now();
    const q = R.clientX - d.current;
    const ne = R.clientX - g.current;
    const Q = B - v.current;

    if (Math.abs(q) > cN) {
      (m.current = true);
    }

    if (Q > 0) {
      (_.current = (-ne / Q) * 16);
    }

    (g.current = R.clientX);
    (v.current = B);
    (a_current.scrollLeft = h.current - q);
  };

  const w = () => {
    if (p.current && Math.abs(_.current) > Ds) {
      k();
    }

    (p.current = false);
    a.current?.classList.remove(He.dragging);
  };

  const N = () => {
    if (p.current) {
      Math.abs(_.current) > Ds && k();
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
      f(r_R.id, R);
    }

    const q = A.currentTarget ?? null;
    const ne = Ms(q, a.current);

    const Q = (he) => {
      const a_current = a.current;
      if (!a_current) {
        return he !== R || !q?.isConnected ? null : Ms(q, null);
      }
      const J = a_current.querySelectorAll("[data-post-media-image]")[he];
      return J
        ? (J.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          Ms(J, a_current))
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
              width: `${Math.round(pN(R.width, R.height, uN, u))}px`,
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
            $l,
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
              Ul,
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
      onMouseMove: E,
      onMouseUp: w,
      onMouseLeave: N,
      children: [
        s.map(R => i(
          De,
          {
            fallback: null,
            children: i(Ul, {
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
          $l,
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
function Tf(e, t) {
  Pt(d => d.posts[e]);

  Pt(d => d.generation);

  const [n, o] = L(0);
  const r = us.read(t);
  const s = r?.state;
  const a = r?.received;
  const c = s && a !== undefined ? Hr(s, a) : Infinity;
  const l = !!t;

  U(() => l ? Zb(e) : undefined, [e, l]);

  U(() => {
    if (!s || a === undefined) {
      return;
    }

    const d = () => o(g => g + 1);

    const h = [...s.events, ...s.marks]
      .map(g => Date.parse(g.endsAt))
      .filter(g => g > c);

    const m = h.length
      ? setTimeout(
          d,
          Math.min(2147483647, Math.max(1, Math.min(...h) - Hr(s, a) + 10))
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
const hN = "zTMW";
const mN = "HWf5";
const gN = "xanh";
const _N = "fV9u";
const vN = "ga6A";
const yN = "MHXJ";

const jn = {
  overlay: hN,
  dialog: mN,
  title: gN,
  message: _N,
  actions: vN,
  column: yN,
};

const wN = { default: "primary", cancel: "secondary", destructive: "danger" };
function Ca({
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
      className: jn.overlay,
      onClick: (c) => {
        if (c.target === c.currentTarget && !a) {
          s?.();
        }
      },
      children: i("div", {
        role: "alertdialog",
        "aria-modal": "true",
        className: `${jn.dialog} ${o ?? ""}`,
        children: [
          i("h2", { className: jn.title, children: e }),
          t !== undefined && i("p", { className: jn.message, children: t }),
          i("div", {
            className: `${jn.actions} ${n.length > 2 || r ? jn.column : ""}`,
            children: n.map(c => i(
              Fe,
              {
                variant: wN[c.role ?? "default"],
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
const EN = "rMEe";
const bN = "Me7h";
const SN = "nGnf";
const CN = "xICH";
const kN = "u0Oc";
const NN = "shiV";

const gn = {
  dialog: EN,
  title: bN,
  copy: SN,
  bullets: CN,
  price: kN,
  unavailable: NN,
};

const TN = {
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

function ka({ productId: e, icon: t, onClose: n, postId: o, eventId: r }) {
  const [s, a] = L("loading");
  const [c, l] = L(null);

  const u = I(async () => {
    a("loading");
    try {
      const m =
        (await O.get("/v1/aliceai/shop", { skipErrorToast: true })).items.find(
          g => g.id === e
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

  const d = c ?? TN[e];
  return i(Ca, {
    title: i("span", {
      className: gn.title,
      children: [t, e === "post_notebook" ? "Тетрадка" : d.title],
    }),
    message: i("span", {
      className: gn.copy,
      children: [
        i("span", { children: d.details }),
        d.bullets.length > 0 &&
          i("span", {
            className: gn.bullets,
            children: d.bullets.map(h => i("span", { children: ["— ", h] }, h)
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
const IN = "NOsa";
const RN = "yWlM";
const AN = "YGvg";
const LN = "plu1";
const PN = "W3DO";
const ON = "E2ZF";
const xN = "lmPi";
const $N = "OjNM";
const MN = "wYG1";
const DN = "o1PQ";
const UN = "xpyh";
const FN = "oQsU";
const BN = "oZx4";
const HN = "mrwb";
const VN = "SHW3";

const Me = {
  panel: IN,
  panelBody: RN,
  heading: AN,
  toolHint: LN,
  actionButton: PN,
  preview: ON,
  invalid: xN,
  error: $N,
  signature: MN,
  signatureAction: DN,
  signatureText: UN,
  actor: FN,
  stamp: BN,
  signatureMenu: HN,
  srOnly: VN,
};

function WN({ marks: e, postId: t, userId: n, onClose: o }) {
  const [r, s] = L(false);
  const [a, c] = L(null);
  const [l, u] = L("");

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
          await O.post(
            "/correctors/cancel",
            { postId: t },
            { skipErrorToast: true }
          );

          await va([t]);
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

  d.push({
    label: r ? "Назад" : "Закрыть",
    role: "cancel",
    onClick: () => r ? s(false) : o(),
  });

  return i(Ca, {
    title: "Корректор",
    stackActions: true,
    onDismiss: o,
    actions: d,
    message: i(ve, {
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
function If({ marks: e, postId: t }) {
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
                children: i("img", { src: bi, alt: "" }),
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
                      i(WN, {
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
            i(ka, {
              productId: "duty_corrector",
              icon: i("img", { src: bi, alt: "" }),
              postId: t,
              eventId: e[0].eventId,
              onClose: () => o(false),
            }),
        ],
      })
    : null;
}
function jN(e, t) {
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
      const f = window_visualViewport?.offsetLeft ?? 0;
      const p = window_visualViewport?.offsetTop ?? 0;
      const d = 16;
      const h = getComputedStyle(e_current);

      const m =
        p + Math.max(d, parseFloat(h.getPropertyValue("--safe-top")) || 0);

      let g =
        p +
        u -
        Math.max(d, parseFloat(h.getPropertyValue("--safe-bottom")) || 0);
      for (const N of document.querySelectorAll("nav")) {
        const T = N.getBoundingClientRect();

        if (T.width > l / 2 &&
          T.top > p + u / 2 &&
          T.top < g &&
          T.bottom >= p + u - 120) {
          (g = Math.min(g, T.top - d));
        }
      }
      (e_current.style.width = `${Math.max(1, Math.min(352, l - d * 2))}px`);

      e_current.style.setProperty(
        "--bubble-max-height",
        `${Math.max(80, g - m)}px`
      );

      const v = e_current.getBoundingClientRect();
      const _ = g - t.bottom - d;
      const b = t.top - d - m;
      let y = "below";
      let k = t.bottom + d;

      if (_ < v.height) {
        if (b >= v.height) {
          (y = "above");
          (k = t.top - d - v.height);
        } else if (Math.max(b, _) >= 240) {
          (y = b > _ ? "above" : "below");
          e_current.style.setProperty("--bubble-max-height", `${Math.max(b, _)}px`);

          (k = y === "above"
            ? t.top - d - e_current.getBoundingClientRect().height
            : t.bottom + d);
        } else {
          (y = "floating");
          (k = Math.max(m, Math.min(k, g - v.height)));
        }
      }

      const C = (t.left + t.right) / 2;
      const E = Math.max(f + d, Math.min(C - v.width / 2, f + l - d - v.width));
      const w = Math.max(m, Math.min(k, g - e_current.getBoundingClientRect().height));

      if (Math.abs(w - k) > 1) {
        (y = "floating");
      }

      (e_current.style.left = `${E}px`);
      (e_current.style.top = `${w}px`);

      e_current.style.setProperty(
        "--arrow-x",
        `${Math.max(24, Math.min(C - E, v.width - 24))}px`
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
function Rf(e, t) {
  Lt(m => m.posts[e]);

  Lt(m => m.generation);

  const [n, o] = L(0);
  const r = ls.read(t);
  const s = r?.state;
  const a = r?.received;
  const c = s && a !== undefined ? Hr(s, a) : Infinity;
  const l = !!t;

  U(() => l ? Qb(e) : undefined, [e, l]);

  U(() => {
    if (!s || a === undefined) {
      return;
    }

    const m = () => o(_ => _ + 1);

    const g = [...s.events, ...(s.claims ?? (s.claim ? [s.claim] : []))]
      .map(_ => Date.parse(_.endsAt))
      .filter(_ => _ > c);

    const v = g.length
      ? setTimeout(
          m,
          Math.min(2147483647, Math.max(1, Math.min(...g) - Hr(s, a) + 10))
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
const Af = /^[\p{L}\p{M}]+(?:[-'’][\p{L}\p{M}]+)*$/u;
const Fl = /[\p{L}\p{M}\p{N}_'’-]/u;
const Fo = 10;
const Lf = new Intl.Segmenter("ru", { granularity: "grapheme" });
function zN(e) {
  return [...Lf.segment(e)]
    .slice(0, Fo)
    .map(t => t.segment)
    .join("");
}
function Us(e, t, n) {
  return Af.test(e.slice(t, n))
    ? Fl.test(Array.from(e.slice(0, t)).at(-1) ?? "") ||
      Fl.test(Array.from(e.slice(n))[0] ?? "")
      ? "Выделите слово целиком"
      : ""
    : "Выделите одно слово без пробелов";
}
function Fs(e, t, n = false) {
  return t
    ? Af.test(t)
      ? [...Lf.segment(t)].length > Fo
        ? `Не больше ${Fo} символов`
        : !n && t.normalize("NFC") === e.normalize("NFC")
        ? "Введите другое слово"
        : ""
      : "Введите одно слово без пробелов"
    : "";
}
function Pf(e, t, n) {
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
function qN(e, t) {
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
        const p = Pf(s, f.start, f.end)?.getClientRects()[0];
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
const GN = "peHB";
const YN = "G44d";
const KN = "v8Tr";
const XN = "jTzT";
const QN = "VukV";
const ZN = "konK";
const JN = "eQYu";
const eT = "GZoF";
const tT = "ywv8";
const nT = "ECGc";

const yt = {
  textLayer: GN,
  withCorrections: YN,
  overlay: KN,
  strike: XN,
  handwriting: QN,
  tools: ZN,
  selected: JN,
  replacement: eT,
  penIcon: tT,
  signatureText: nT,
};

function oT({ root: e, corrections: t }) {
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
      const d = document.createElement("canvas");
      const h = d.getContext("2d");
      const m = parseFloat(getComputedStyle(e_current).lineHeight) || 22.5;
      const g = new Map();
      for (const _ of [...t].sort((b, y) => b.start - y.start)) {
        const b = Pf(e_current, _.start, _.end);
        if (!b) {
          continue;
        }
        const y = [...b.getClientRects()].filter(S => S.width > 0);
        if (!y.length) {
          continue;
        }
        const k = 14;
        const [C] = y;
        const E = Math.min(19, Math.max(16, m * 0.8));
        const w = Math.max(-k, C.top - p.top - k);

        const N = {
          id: _.id,
          text: _.replacement,
          left: C.left - p.left,
          top: w,
          font: E,
          strikes: y.map(S => ({
            left: S.left - p.left,
            top: S.top - p.top + S.height * 0.55,
            width: S.width
          })),
        };

        const T = Math.round((C.top - p.top) / m);
        g.set(T, [...(g.get(T) ?? []), N]);
      }
      const v = [];
      for (const _ of g.values()) {
        let b = _[0].font;
        const y = () => _.map(
          E => {
            (h.font = `600 ${b}px EventCaveat`);
            return h.measureText(E.text).width + 4;
          }
        );
        let k = y();

        while (k.reduce((E, w) => E + w, 0) + 4 * (_.length - 1) > p.width &&
             b > 14) {
          (b -= 0.5);
          (k = y());
        }

        let C = 0;
        _.forEach((E, w) => {
          (E.font = b);

          (E.left = Math.max(
              C,
              Math.min(
                E.left + (E.strikes[0].width - k[w]) / 2,
                p.width - k[w]
              )
            ));

          (C = E.left + k[w] + 4);
        });
        for (let E = _.length - 1; E >= 0; E--) {
          _[E].left = Math.max(
            0,
            Math.min(
              _[E].left,
              (E === _.length - 1 ? p.width : _[E + 1].left - 4) - k[E]
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
function rT({ postId: e, claims: t, userId: n, onClose: o }) {
  const [r, s] = L(false);
  const [a, c] = L(null);
  const [l, u] = L("");

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
          await O.post(
            "/red-pens/cancel",
            { postId: e, claimId: f.id },
            { skipErrorToast: true }
          );

          await ga([e]);
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

  d.push({
    label: r ? "Назад" : "Закрыть",
    role: "cancel",
    onClick: () => r ? s(false) : o(),
  });

  return i(Ca, {
    title: "Красная ручка",
    stackActions: true,
    onDismiss: o,
    actions: d,
    message: i(ve, {
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
function Of({ claims: e, visible: t, postId: n }) {
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
                children: i("img", { src: Si, alt: "" }),
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
                      i(rT, {
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
            i(ka, {
              productId: "red_pen",
              icon: i("img", { src: Si, alt: "" }),
              postId: n,
              eventId: e[0].eventId,
              onClose: () => r(false),
            }),
        ],
      });
}
function sT(e, t) {
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
const Bl = new Intl.Segmenter("ru", { granularity: "grapheme" });
const Bs = 3;
function Na({
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
  const f = x(false);
  const p = Tf(e, r);
  const d = Rf(e, s);

  const h = Te(() => sT(p.marks, d.corrections), [p.marks, d.corrections]);

  const m = ge(M => M.profile?.id);

  const g = Pt(M => M.inventory);

  const v = Lt(M => M.inventory);

  const _ = g?.events.find(M => M.id === p.event?.id)?.balance;

  const b = v?.events.find(M => M.id === d.event?.id)?.balance;

  const y = !!t && t === m;
  const k = !!p.event && !y && (_ ?? 0) > 0;
  const C = !!d.event && t !== m && ((b ?? 0) > 0 || !!d.ownClaim);
  const E = a && !!m && (k || C);
  const [w, N] = L(null);
  const [T, S] = L("pen");
  const [P, R] = L("");
  const [A, B] = L("");
  const [q, ne] = L(false);
  const [Q, he] = L(null);
  const [G, J] = L("");
  const [ae, W] = L("");
  const we = !!w && w.actorId === m && (E || q || !!Q);
  const oe = Q?.tool ?? (T === "pen" && C ? "pen" : k ? "corrector" : "pen");
  jN(u, we ? w?.anchor : undefined);

  St(() => {
    let M = false;
    if (
      !w ||
      !P ||
      !l.current ||
      Us(n, w.start, w.end) ||
      Fs(
        w.text,
        P,
        d.corrections.some(Ce => Ce.start === w.start && Ce.end === w.end)
      )
    ) {
      W("");
      return;
    }
    const Ee = () => {
      if (M || !l.current) {
        return;
      }
      const Ce = qN(l.current, [
        ...h.corrections.filter(
          Oe => Oe.start !== w.start || Oe.end !== w.end
        ),
        { start: w.start, end: w.end, replacement: P },
      ]);
      W(Ce ? "" : "Правки не помещаются в строке. Выберите слово короче");
    };
    Ee();
    document.fonts.load("600 14px EventCaveat").then(Ee);
    document.fonts.addEventListener("loadingdone", Ee);

    return () => {
      (M = true);
      document.fonts.removeEventListener("loadingdone", Ee);
    };
  }, [w, P, n, d.corrections, h.corrections]);

  U(() => {
    if (!E) {
      return;
    }
    let M;

    const Ee = () => {
      if (f.current || Q || u.current?.contains(document.activeElement)) {
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
      const un = mt + it.length;
      if (n.slice(mt, un) !== it) {
        return;
      }
      const Ut = je.getBoundingClientRect();

      if (Ut.width) {
        if (w?.start !== mt || w.end !== un || w.actorId !== m) {
          N({
                start: mt,
                end: un,
                text: it,
                count: [...Bl.segment(it)].filter(
                  Un => !/^\s+$/u.test(Un.segment)
                ).length,
                anchor: {
                  left: Ut.left,
                  right: Ut.right,
                  top: Ut.top,
                  bottom: Ut.bottom,
                },
                actorId: m,
                operationId: crypto.randomUUID(),
                penRevision: d.state?.revision,
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
      (M = setTimeout(Ee, 350));
    };

    document.addEventListener("selectionchange", Ce);

    return () => {
      clearTimeout(M);
      document.removeEventListener("selectionchange", Ce);
    };
  }, [E, m, n, d.state, p.state, C, Q, w]);

  U(() => {
    if (!w) {
      return;
    }

    const M = () => {
      if (!f.current && !Q) {
        N(null);
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
    d.corrections.some(
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
        : _ === 0
        ? "У вас пока нет корректоров"
        : ""
      : "Применение временно недоступно"
    : "Ивент завершён";

  const me = d.event
    ? d.event.applicationsEnabled
      ? d.ownClaim && d.ownClaim.used >= Bs
        ? `Вы уже исправили ${Bs} слов`
        : w && Us(n, w.start, w.end)
        ? Us(n, w.start, w.end)
        : X
        ? "Ссылки, упоминания и скрытый текст исправлять нельзя"
        : $
        ? "Выделите весь закрашенный фрагмент"
        : V
        ? "Выделите всё исправленное слово"
        : de
        ? "Это слово уже так исправлено"
        : w
        ? Fs(
            w.text,
            P,
            d.corrections.some(M => M.start === w.start && M.end === w.end)
          )
        : ""
      : "Исправления временно недоступны"
    : "Ивент завершён";

  const Ie = oe === "pen" ? me || ae : Z;

  const Se = w
    ? [...Bl.segment(w.text)]
        .map(M => p.marks.some(
    Ee => Ee.start < w.start + M.index + M.segment.length &&
    Ee.end > w.start + M.index
  ) && !/^\s+$/u.test(M.segment)
    ? "■"
    : M.segment
        )
        .join("")
    : "";

  const ue = () => Promise.allSettled([
    ...(r ? [va([e]), yf()] : []),
    ...(s ? [ga([e]), vf()] : []),
  ]);

  async function ht() {
    if (!w || f.current) {
      return;
    }
    const M = oe === "pen" ? d.event : p.event;
    const Ee = oe === "pen" ? w.penRevision : w.paintRevision;
    if (!Q && (!M || !Ee || Ie || (oe === "pen" && !P))) {
      return;
    }
    const Ce = Q ?? {
      tool: oe,
      body: {
        eventId: M.id,
        postId: e,
        revision: Ee,
        start: w.start,
        end: w.end,
        operationId: w.operationId,
        ...(oe === "pen" ? { replacement: P } : {}),
      },
    };
    (f.current = true);
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
      (f.current = false);
      ne(false);
    }
  }
  const Ct = () => {
    if (!f.current) {
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
            tabIndex: E ? 0 : undefined,
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
              const je = Array.from(Ee.toString())
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
              p.staleText || d.staleText
                ? i("span", { children: "Пост изменился. Обновите страницу" })
                : i(ba, { text: n, spans: o, correctorMarks: h.marks }),
          }),
          h.corrections.length > 0 &&
            i(oT, { root: l, corrections: h.corrections }),
        ],
      }),
      c &&
        i(ve, {
          children: [
            i(If, { marks: p.marks, postId: e }),
            i(Of, {
              claims: d.claims,
              visible: d.corrections.length > 0,
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
                      ? `Одно слово до ${Fo} символов · до ${Bs} правок на пост`
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
                        placeholder: `До ${Fo} символов`,
                        value: P,
                        disabled:
                          q ||
                          !!Q ||
                          (!!me &&
                            me !==
                              Fs(
                                w.text,
                                P,
                                d.corrections.some(
                                  M => M.start === w.start && M.end === w.end
                                )
                              )),
                        autoComplete: "off",
                        onInput: (M) => {
                          R(zN(M.currentTarget.value));
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
                    q || (!Q && (!!Ie || (oe === "pen" ? !P : _ === undefined))),
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

const iT = e => e === "window" ? "layer_window" : e === "stain" ? "splash" : e;

const aT = "alice-profile-changed";
const cT = "alice-sticker-placed";
function nP(e) {
  window.dispatchEvent(new CustomEvent(aT, { detail: e }));
}
function oP(e) {
  window.dispatchEvent(new CustomEvent(cT, { detail: e }));
}
const Oi = "alice-balloon-thrown";
function rP(e) {
  window.dispatchEvent(new CustomEvent(Oi, { detail: e }));
}
function lT(e, t, n) {
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

const uT = e => ({
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

const xf = {
  profileRaw: e => O.get(`/v1/aliceai/profiles/${encodeURIComponent(e)}`, {
    skipErrorToast: true,
  }),
  profile: async e => uT(await xf.profileRaw(e)),
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
      kind: iT(t.kind)
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

const dT = "B0YA";
const fT = "A1N1";
const pT = "jFCW";
const Hs = { layer: dT, stain: fT, arriving: pT };
function hT({ placements: e, anchorKind: t, anchorId: n, className: o = "" }) {
  const [r] = L(Date.now);
  const [s, a] = L([]);
  U(() => {
    const l = [];

    const u = (f) => {
      const f_detail = f.detail;
      const [d] = lT([f_detail], t, n);

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

    window.addEventListener(Oi, u);

    return () => {
      window.removeEventListener(Oi, u);
      l.forEach(window.clearTimeout);
    };
  }, [t, n]);
  const c = [...e, ...s.filter(l => !e.some(u => u.id === l.id))];
  return c.length === 0
    ? null
    : i("div", {
        className: `${Hs.layer} ${o}`,
        "aria-hidden": "true",
        children: c.map(l => i(
          "img",
          {
            "data-alice-water-placement-id": l.id,
            className: `${Hs.stain} ${
              r - Date.parse(l.createdAt) < 3000/* 3e3 */ ? Hs.arriving : ""
            }`,
            src: Vw(l.asset),
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
function mT() {
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
function gT() {
  return i("svg", {
    viewBox: "0 0 40 40",
    "aria-hidden": "true",
    focusable: "false",
    children: i("path", {
      d: "M20 5.5c-3.7 0-6.7 4.3-11.5 12.5C3.8 26 3.5 30.2 7 33c3.4 2.8 22.6 2.8 26 0 3.5-2.8 3.2-7-1.5-15C26.7 9.8 23.7 5.5 20 5.5Z",
    }),
  });
}
function $f({ className: e, disabled: t = false }) {
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
        children: [i(gT, {}), "Тетрадка"],
      }),
      n &&
        i(ka, {
          productId: "post_notebook",
          icon: i(mT, {}),
          onClose: () => o(false),
        }),
    ],
  });
}

const _T = {
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

const mr = new Map();
const Vs = new Set();
async function vT(e, t) {
  if (Vs.has(e)) {
    return;
  }
  const n = mr.get(e) ?? crypto.randomUUID();
  mr.set(e, n);
  Vs.add(e);
  try {
    await xf.recyclePost(e, n);
    mr.delete(e);
    t(e);
    vt.success("Пост сдан и сразу учтён в сборе макулатуры");
  } catch (o) {
    const r = $e(o) ? _T[o.code] : undefined;

    if (r) {
      mr.delete(e);
    }

    vt.error(r ?? "Не получилось сдать пост. Попробуй ещё раз");
  } finally {
    Vs.delete(e);
  }
}
const Mf = 0.5;
const yT = 250;
const wT = 1000/* 1e3 */;
const ET = 50;
const bT = [0, Mf, 1];
const Tn = new Set();
const Rr = new WeakMap();
const Cn = new Map();
const kn = new Map();
const qr = new Set();
const gr = new Set();
let Ws = null;
let Kn = null;
function ST(e) {
  if (qr.size !== 0) {
    gr.add(e);

    Ws === null &&
      (Ws = setTimeout(() => {
      (Ws = null);

      if (gr.size === 0) {
        return;
      }

      const t = Array.from(gr);
      gr.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const o of qr) {
        o(n);
      }
    }, ET));
  }
}
function CT() {
  return (Kn || (typeof IntersectionObserver === "undefined" ? null : ((Kn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Rr.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const o = t.intersectionRatio >= Mf;
            for (const r of n) {
              if (o) {
                const s = kn.get(r);
                if (s !== undefined) {
                  clearTimeout(s);
                  kn.delete(r);
                  continue;
                }
                if (Tn.has(r) || Cn.has(r)) {
                  continue;
                }
                const a = setTimeout(() => {
                  Cn.delete(r);
                  Tn.add(r);
                  ST(r);
                }, yT);
                Cn.set(r, a);
              } else {
                const s = Cn.get(r);

                if (s !== undefined) {
                  clearTimeout(s);
                  Cn.delete(r);
                }

                if (!Tn.has(r) || kn.has(r)) {
                  continue;
                }

                const a = setTimeout(() => {
                  kn.delete(r);
                  Tn.delete(r);
                }, wT);
                kn.set(r, a);
              }
            }
          }
        },
        { threshold: bT }
      )), Kn)));
}

const Gr = {
    observe(e, t) {
      const n = CT();
      if (!n) {
        return;
      }
      const o = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (o.length !== 0) {
        Rr.set(e, o);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!Kn) {
        return;
      }
      const t = Rr.get(e);
      Kn.unobserve(e);
      Rr.delete(e);

      if (!!t) {
        for (const n of t) {
          const o = Cn.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            Cn.delete(n);
          }

          const r = kn.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            kn.delete(n);
          }

          Tn.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(Tn);
    },
    size() {
      return Tn.size;
    },
    onAppear(e) {
      qr.add(e);

      return () => {
        qr.delete(e);
      };
    },
  };

const kT = "tWaB";
const NT = "dadI";
const TT = "ubZX";
const js = { hint: kT, multiline: NT, arrow: TT };
function Po({ text: e, children: t, className: n, multiline: o }) {
  const r = x(null);
  const [s, a] = L(null);

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

  U(() => {
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
            className: `${js.hint} ${o ? js.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: js.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const IT = "ubnY";
const RT = "o12L";
const AT = "rUqr";
const LT = "CZuN";
const PT = "DCL9";
const OT = "Tu7W";
const xT = "cBsY";
const $T = "EkjY";
const MT = "hpCE";
const DT = "INPZ";

const at = {
  header: IT,
  headerMain: RT,
  headerAccessory: AT,
  hasAccessory: LT,
  authorInfo: PT,
  moreDropdown: OT,
  pinnedBadge: xT,
  authorLink: $T,
  time: MT,
  edited: DT,
};

function UT({ size: e = 16 }) {
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
const FT = 2160 * 60 * 60 * 1000/* 1e3 */;

const BT = e => Date.now() - new Date(e).getTime() >= FT;

function HT({
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
  const g = Gd(o);
  const v = ma(n.id);

  const _ = ge(N => N.profile?.id);

  const b = n.id === _;
  const y = 2880 * 60 * 1000/* 1e3 */;
  const k = b && !t && Date.now() - new Date(o).getTime() < y;
  const C = Xo().status === "allowed";
  const E = !!m && b && C && BT(o);

  const w = Te(() => {
    const N = [];

    N.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(Yd, { size: 16 }),
      onClick: () => h?.(s),
    });

    if (k) {
      N.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Qd, { size: 16 }),
        onClick: () => f?.(s),
      });
    }

    if (c) {
      N.push({
        id: "pin",
        label: l ? "Открепить" : "Закрепить",
        icon: i(ul, { size: 16 }),
        onClick: () => d?.(s),
      });
    }

    if (E) {
      N.push({
        id: "waste-paper",
        label: "Сдать в макулатуру",
        icon: i(UT, { size: 16 }),
        onClick: () => m?.(s),
      });
    }

    if ((b || c)) {
      N.push({
        id: "delete",
        label: "Удалить",
        icon: i(rf, { size: 16 }),
        danger: true,
        onClick: () => p?.(s),
      });
    }

    if (!b) {
      N.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(Jd, { size: 16 }),
        danger: true,
        onClick: () => u?.(s),
      });
    }

    return N;
  }, [b, k, E, c, l, s, f, p, d, u, h, m]);

  return i("header", {
    className: at.header,
    children: [
      l &&
        i("div", {
          className: at.pinnedBadge,
          children: [
            i(ul, { size: 14 }),
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
                children: i(Qo, {
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
                          g,
                          r &&
                            i(Po, {
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
                    g,
                    r &&
                      i(Po, {
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
          i(Nf, {
            trigger: i(tf, { size: 18 }),
            items: w,
            position: "bottom-right",
            className: at.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const VT = "qJWE";
const WT = "MCen";
const jT = "CSbi";
const zT = "FIzh";
const qT = "d4yL";
const GT = "CKpJ";
const YT = "v6zk";
const KT = "C1E4";
const XT = "SywX";
const QT = "gS0R";
const ZT = "STEF";
const JT = "BSyN";
const eI = "sp7i";
const tI = "EPIT";
const nI = "uL5o";
const oI = "QJzX";
const rI = "D81B";
const sI = "NFR6";

const xe = {
  actions: VT,
  compact: WT,
  action: jT,
  views: zT,
  flush: qT,
  actionsLeft: GT,
  disabled: YT,
  liked: KT,
  unliked: XT,
  reposted: QT,
  noAnimation: ZT,
  reactionWrapper: JT,
  actionsRight: eI,
  captured: tI,
  capturedEmoji: nI,
  capturedText: oI,
  capturedMobile: rI,
  capturedSolo: sI,
};

function Df({
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
  const g = x(false);
  const v = p ? 17 : 20;
  return i("footer", {
    className: `${xe.actions} ${p ? xe.compact : ""} ${h ? xe.flush : ""}`,
    children: [
      i("div", {
        className: xe.actionsLeft,
        children: [
          i("div", {
            className: xe.reactionWrapper,
            onClick: _ => _.stopPropagation(),
            children: i("button", {
              className: `${xe.action} ${e ? xe.liked : ""} ${
                g.current && !e ? xe.unliked : ""
              } ${!g.current && e ? xe.noAnimation : ""}`,
              onClick: (_) => {
                _.stopPropagation();
                (g.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                i(
                  ia,
                  { filled: e, size: v },
                  m ? `liked-${n}` : e ? "liked" : "not-liked"
                ),
                i(No, { value: n }),
              ],
            }),
          }),
          i("button", {
            className: xe.action,
            onClick: (_) => {
              _.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [i(Xd, { size: v }), i(No, { value: r })],
          }),
          i("button", {
            className: `${xe.action} ${t ? xe.reposted : ""} ${
              f ? xe.disabled : ""
            }`,
            onClick: (_) => {
              _.stopPropagation();

              if (!f) {
                l();
              }
            },
            disabled: f,
            "aria-label": "Репост",
            children: [i(ua, { size: v }), i(No, { value: o })],
          }),
        ],
      }),
      i("div", {
        className: xe.actionsRight,
        children: [
          a &&
            (d
              ? i(Po, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: xe.capturedSolo,
                  children: i("span", {
                    className: xe.capturedEmoji,
                    children: a,
                  }),
                })
              : i(ve, {
                  children: [
                    i(Po, {
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
                    i(Po, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: xe.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: xe.views,
            children: [i(y0, { size: v }), i(No, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const iI = ce(() => se(() => import("./index-LLvfjlFA.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function Uf(e, t) {
  const { openModal: n, closeModal: o, onDelete: r } = t;
  const s = Yt();

  const a = ie(S => S.deletePost);

  const c = ie(S => S.updatePostLike);

  const l = ie(S => S.beginLikeMutation);

  const u = ie(S => S.endLikeMutation);

  const f = ie(S => S.updatePollVote);

  const p = ie(S => S.updatePollData);

  const d = wa(e);
  const h = d.myReaction !== null;
  const d_likesTotal = d.likesTotal;

  const g = Te(() => Bf(e.attachments), [e.attachments]);

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

  const _ = I(() => {
    if (!h) {
      v();
    }
  }, [h, v]);

  const b = I(
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
      n(i(iI, { targetType: "post", targetId: S, onClose: o }));
    },
    [n, o]
  );

  const k = I(
    (S) => {
      n(
        i(c2, {
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

  const E = I(() => {
    if (s) {
      n(i(qR, { postId: e.id, onClose: o }));
    } else {
      const S = e.author.username ?? e.author.id;
      Ye(`/@${S}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, o]);

  const w = I(() => {
    n(i(v2, { post: e, onClose: o }));
  }, [n, o, e]);

  const N = I(
    async (S) => {
      const P = g?.myVote ?? null;
      f(e.id, S, P);
      try {
        const R = await Ue.votePoll(e.id, [S]);
        if (R) {
          p(e.id, R);
          return R;
        }
      } catch (R) {
        console.error("[Poll] Failed to vote:", R);

        if (P) {
          f(e.id, P, S);
        }
      }
      return null;
    },
    [e.id, g?.myVote, f, p]
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
    totalLikes: d_likesTotal,
    handleLike: v,
    handleDoubleTap: _,
    handleComment: E,
    handleRepost: w,
    handleReport: y,
    handleEdit: k,
    handleDelete: C,
    handleCopyLink: b,
    handlePollVote: N,
    handlePollVoteMultiple: T,
  };
}
function Ff(e) {
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
const aI = "UbhJ";
const cI = "Jlnz";
const lI = "dWiD";
const uI = "edIt";
const dI = "vYOP";
const fI = "Ttz2";
const pI = "jel1";
const hI = "VoYR";
const mI = "DELi";
const gI = "Ey7d";
const _I = "XQ3p";
const vI = "RuLl";
const yI = "LFvN";
const wI = "lD4e";
const EI = "sKlj";
const bI = "JS62";
const SI = "aQcr";
const CI = "QrjD";
const kI = "Guvj";
const NI = "fsvZ";

const be = {
  post: aI,
  notebookPost: cI,
  originalNotebook: lI,
  text: uI,
  notebookGrid: dI,
  notebookRuled: fI,
  notebookLabel: pI,
  postInner: hI,
  isFeed: mI,
  postBody: gI,
  avatarLink: _I,
  postContent: vI,
  textWrapper: yI,
  collapsed: wI,
  expandButton: EI,
  originalPost: bI,
  originalPostText: SI,
  originalPostHeader: CI,
  originalPostTime: kI,
  originalPostMedia: NI,
};

function TI(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function II({ attachments: e, postVs: t, source: n }) {
  const o = Te(() => Yr(e), [e]);
  return o.length === 0
    ? null
    : i("div", {
        className: be.originalPostMedia,
        children: i(Sa, { media: o, postVs: t, source: n }),
      });
}
function RI({ originalPost: e, source: t, showcase: n = false }) {
  const o = TI(e.createdAt);
  const { openModal: r, closeModal: s } = Kt();

  const {
    liked: a,
    totalLikes: c,
    handleLike: l,
    handleComment: u,
    handleRepost: f,
  } = Uf(e, { openModal: r, closeModal: s });

  const { handleLike: p, handleComment: d, handleRepost: h } = Ff(e.id);
  const m = wa(e);

  const g = I(
    (v) => {
      v.stopPropagation();

      if (n) {
        return;
      }

      const _ = e.author.username ?? e.author.id;
      Ye(`/@${_}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id, n]
  );

  return i("div", {
    className: `${be.originalPost} ${e.notebook ? be.originalNotebook : ""} ${
      e.notebook?.style === "grid" ? be.notebookGrid : ""
    } ${e.notebook?.style === "ruled" ? be.notebookRuled : ""}`,
    onClick: g,
    children: [
      i("div", {
        className: be.originalPostHeader,
        children: [
          i(ua, { size: 14 }),
          i(pt, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          i(Qo, {
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
      e.notebook && i($f, { className: be.notebookLabel, disabled: n }),
      e.text &&
        i("div", {
          className: be.originalPostText,
          children:
            e.corrector || e.redPen
              ? i(Na, {
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
        i(II, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(Df, {
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
const AI = ce(() => se(() => import("./index-D-_rvXay.js"), __vite__mapDeps([19, 20])).then(
  e => ({
    default: e.Poll
  })
)
);
function LI(e) {
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
function Yr(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function Bf(e) {
  return e.find(t => t.type === "poll");
}
const PI = 300;
const OI = 500;

const xI = ns(
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
    const g = Yt();
    const { openModal: v, closeModal: _ } = Kt();

    const b = ie(F => F.setCurrentPost);

    const y = ie(F => F.removePost);

    const k = ie(F => F.seedPostStats);

    const C = ie(F => F.posts.find(pe => pe.id === t.id));

    const E = ge(F => F.profile);

    const w = Tf(t.id, t.corrector);
    const N = Rf(t.id, t.redPen);
    U(() => {
      k(t);
    }, [t, k]);
    const T = wa(t);
    const { isFollowing: S, follow: P, unfollow: R } = tE(t.author.id);
    const A = m && E?.id !== t.author.id ? S : undefined;

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
    } = Uf(t, { openModal: v, closeModal: _, onDelete: d });

    const { handleLike: V, handleComment: K, handleRepost: de } = Ff(t.id);

    const X = I(() => {
      if (A !== undefined) {
        if (A) {
          v(
                  i(HE, {
                    displayName: t.author.displayName,
                    onConfirm: R,
                    onClose: _,
                  })
                );
        } else {
          P();
        }
      }
    }, [A, t.author.displayName, P, R, v, _]);

    const Z = I(
      (F) => {
        vT(F, (pe) => {
          y(pe);
          d?.(pe);
        });
      },
      [y, d]
    );

    const me = x(null);
    const Ie = x(null);
    const Se = x(null);
    const [ue, ht] = L(PI);
    const [Ct, M] = L(0);
    const Ee = Ct > ue;
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

      ht(pe => pe + OI);
    }, []);

    E1(t.id, me, c, l, t.vs);
    const Ne = t.originalPost?.id;
    U(() => {
      const me_current = me.current;
      if (!me_current) {
        return;
      }
      const pe = Ne ? [t.id, Ne] : t.id;
      Gr.observe(me_current, pe);

      return () => Gr.unobserve(me_current);
    }, [t.id, Ne]);
    const je = x(null);
    const tt = x(0);

    const mt = I((F) => {
      je.current = F.target;
    }, []);

    const it = I(() => {
      b(C ?? t);
      const pe = t.author.username ?? t.author.id;
      Ye(`/@${pe}/post/${t.id}`);
    }, [t, C, b]);

    const un = I(
      (F) => {
        const F_target = F.target;
        if (F_target.closest("button") ||
        F_target.closest("a") ||
        F_target.closest("video") ||
        F_target.closest("img")) {
          return;
        }
        if (g) {
          const lo = Date.now();
          if (lo - tt.current < 300) {
            (tt.current = 0);
            Q();
            return;
          }
          tt.current = lo;
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
      [g, Q, it]
    );

    const Ut = Te(() => LI(t.author), [t.author]);

    const Un = Te(() => Yr(t.attachments), [t.attachments]);

    const nt = Te(() => Bf(t.attachments), [t.attachments]);

    const Zo = i("div", {
      className: `${be.postInner} ${m ? be.isFeed : ""} ${o || ""}`,
      children: [
        m &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: be.avatarLink,
            children: i(pt, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: A,
              onFollowBadgeClick: X,
            }),
          }),
        i("div", {
          className: be.postContent,
          children: [
            i(HT, {
              author: Ut,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !m,
              isOnOwnProfile: r,
              isPinned: s,
              onReport: J,
              onEdit: f ?? ae,
              onDelete: W,
              onPin: p,
              onCopyLink: we,
              onWastePaper: u ? undefined : Z,
              editLocked: w.locked || N.locked,
              accessory: t.notebook
                ? i($f, { className: be.notebookLabel, disabled: u })
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
                        style: m && Ee ? { maxHeight: `${ue}px` } : undefined,
                        children:
                          t.corrector || t.redPen
                            ? i(Na, {
                                postId: t.id,
                                authorId: t.author.id,
                                text: t.text,
                                spans: t.spans,
                                initial: t.corrector,
                                initialRedPen: t.redPen,
                                signature: false,
                                selectable: !Ee && !u,
                              })
                            : i(ba, { text: t.text, spans: t.spans ?? [] }),
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
                Un.length > 0 &&
                  i(Sa, { media: Un, isFeed: m, postVs: t.vs, source: c }),
                nt &&
                  i(De, {
                    fallback: null,
                    children: i(AI, {
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
                  i(RI, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                t.corrector && i(If, { marks: w.marks, postId: t.id }),
                t.redPen &&
                  i(Of, {
                    claims: N.claims,
                    visible: N.corrections.length > 0,
                    postId: t.id,
                  }),
                i(Df, {
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
          className: `${be.post} ${t.notebook ? be.notebookPost : ""} ${
            t.notebook?.style === "grid" ? be.notebookGrid : ""
          } ${t.notebook?.style === "ruled" ? be.notebookRuled : ""} ${
            a ? "flash-highlight" : ""
          }`,
          "data-alice-water-anchor-kind": "post",
          "data-alice-water-anchor-id": t.id,
          onMouseDown: mt,
          onClick: un,
          children: [
            i(hT, { placements: h, anchorKind: "post", anchorId: t.id }),
            Zo,
          ],
        })
      : i("div", {
          ref: me,
          className: `${t.notebook ? be.notebookPost : ""} ${
            t.notebook?.style === "grid" ? be.notebookGrid : ""
          } ${t.notebook?.style === "ruled" ? be.notebookRuled : ""}`,
          children: Zo,
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

const $I = "qRC4";
const MI = "jW4H";
const DI = "OHTD";
const UI = "Nbgz";
const FI = "Ytph";
const BI = "VklM";
const HI = "xmqz";
const VI = "HJeG";
const WI = "oPxt";
const jI = "uPS9";
const zI = "GQ1U";
const qI = "ZhNO";
const GI = "inK5";
const YI = "uQmP";
const KI = "WkhA";
const XI = "vMxG";
const QI = "edsg";
const ZI = "RPUS";
const JI = "iWBc";
const eR = "j57e";
const tR = "wsOQ";
const nR = "JXYw";
const oR = "WPtY";
const rR = "euEK";

const _e = {
  commentWrapper: $I,
  threadItem: MI,
  avatarWrapper: DI,
  threadLine: UI,
  commentBody: FI,
  showMoreBtn: BI,
  avatarPlaceholder: HI,
  comment: VI,
  small: WI,
  commentTime: jI,
  commentText: zI,
  commentActions: qI,
  commentContent: GI,
  avatarLink: YI,
  authorLink: KI,
  commentHeader: XI,
  moreButton: QI,
  commentHeaderLeft: ZI,
  replyMention: JI,
  commentMedia: eR,
  reactionWrapper: tR,
  commentAction: nR,
  liked: oR,
  replyButton: rR,
};

const sR = ce(() => se(() => import("./index-CScMoIt6.js"), __vite__mapDeps([21, 11, 22])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const iR = ns((
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
    replyTo: g,
    hideAvatar: v = false,
    isWallOwner: _ = false,
  }
) => {
  const b = Gd(a);
  const y = ma(t.id);

  const k = ge(S => S.profile?.id);

  const C = t.id === k;
  const E = C || _;
  const w = u === "xs";

  const N = Te(() => {
    const S = [];

    if (C &&
      h) {
      S.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Qd, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (E &&
      m) {
      S.push({
        id: "delete",
        label: "Удалить",
        icon: i(rf, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!C) {
      S.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(Jd, { size: 16 }),
        danger: true,
        onClick: () => d(n),
      });
    }

    return S;
  }, [C, E, n, h, m, d]);

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
                    children: i(Qo, {
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
                            children: b,
                          })
                        : undefined,
                    }),
                  }),
                  !y &&
                    i("span", {
                      className: _e.commentTime,
                      "data-comment-time": true,
                      children: b,
                    }),
                ],
              }),
              i(Nf, {
                trigger: i(tf, { size: w ? 14 : 16 }),
                items: N,
                position: "bottom-right",
                className: _e.moreButton,
              }),
            ],
          }),
          (g || o) &&
            i("div", {
              className: _e.commentText,
              children: [
                g &&
                  i(ve, {
                    children: [
                      i("a", {
                        href: `/@${g.username}`,
                        className: _e.replyMention,
                        children: ["@", g.displayName],
                      }),
                      ", ",
                    ],
                  }),
                o && i(ba, { text: o, spans: r }),
              ],
            }),
          Yr(s).length > 0 &&
            i("div", {
              className: _e.commentMedia,
              children: i(Sa, { media: Yr(s) }),
            }),
          s
            .filter(S => S.type === "audio")
            .map(S => i(
            De,
            {
              fallback: null,
              children: i(sR, { src: S.url, duration: S.duration }),
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
                  onClick: () => f(),
                  children: [
                    i(ia, { size: 14, filled: l }),
                    i(No, { value: c }),
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

const Hf = ns((
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
    isWallOwner: g = false,
  }
) => {
  const v = r?.commentId === t.id;

  const _ = {
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

  const C = [
    { type: "parent", data: t, author: _ },
    ...b.map(E => ({
      type: "reply",
      data: E,

      author: {
        id: E.author.id,
        username: E.author.username,
        avatar: E.author.avatar ?? "",
        displayName: E.author.displayName,
        isVerified: E.author.isVerified,
        pin: E.author.pin,
      }
    })),
  ];

  return i("div", {
    className: `${_e.commentWrapper} ${y ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      C.map((E, w) => {
        const T = !(w === C.length - 1 && !v && !k);
        const S = m === E.data.id;
        return i(
          "div",
          {
            "data-comment-id": E.data.id,
            className: `${_e.threadItem} ${S ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: _e.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${E.author.username ?? E.author.id}`,
                    className: _e.avatarLink,
                    children: i(pt, {
                      src: E.author.avatar,
                      alt: E.author.displayName,
                      size: "sm",
                    }),
                  }),
                  T && i("div", { className: _e.threadLine }),
                ],
              }),
              i("div", {
                className: _e.commentBody,
                children: i(iR, {
                  author: E.author,
                  commentId: E.data.id,
                  text: E.data.text,
                  spans: E.data.spans ?? [],
                  attachments: E.data.attachments ?? [],
                  replyTo: E.data.replyTo,
                  createdAt: E.data.createdAt,
                  reactionsCount: E.data.reactions.total,
                  isReacted: E.data.reactions.myReaction !== null,
                  size: "sm",
                  onLike: E.type === "parent" ? n : () => o(E.data.id),
                  onReply: () => E.type === "parent"
                    ? s(
                        t.id,
                        t.author.username ?? t.author.id,
                        t.author.displayName,
                        t.author.id
                      )
                    : s(
                        t.id,
                        E.data.author.username ?? E.data.author.id,
                        E.data.author.displayName,
                        E.data.author.id,
                        E.data.id
                      ),
                  onReport: f,
                  onEdit: p,
                  onDelete: d,
                  hideAvatar: true,
                  isWallOwner: g,
                }),
              }),
            ],
          },
          E.data.id
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
              children: i(kf, {
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
          children: ["Показать ещё ", t.stats.replies - b.length, " ответов"],
        }),
    ],
  });
});

function aR({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: o = r => r,
}) {
  const r = x(null);
  const [s, a] = L(0);
  const [c, l] = L(0);
  const u = x(new Map());
  const f = x(new Map());
  const p = x(0);

  if (p.current !== e) {
    (p.current = e);
    f.current.clear();
  }

  const d = I(
      (C) => {
        const E = o(C);
        return u.current.get(E) ?? t;
      },
      [o, t]
    );

  const h = I(
    (C) => {
      if (C === 0) {
        return 0;
      }
      const E = f.current.get(C);
      if (E !== undefined) {
        return E;
      }
      let w = 0;
      let N = 0;
      for (let T = C - 1; T >= 0; T--) {
        const S = f.current.get(T);
        if (S !== undefined) {
          (w = T);
          (N = S);
          break;
        }
      }
      for (let T = w; T < C; T++) {
        N += d(T);
      }
      f.current.set(C, N);
      return N;
    },
    [d]
  );

  const m = Te(() => e === 0 ? 0 : h(e - 1) + d(e - 1), [e, h, d]);

  const { startIndex: g, endIndex: v } = Te(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let C = 0;
    let E = e - 1;

    while (C < E) {
      const S = Math.floor((C + E) / 2);
      const P = h(S);
      const R = d(S);

      if (P + R < s) {
        (C = S + 1);
      } else {
        (E = S);
      }
    }

    const w = Math.max(0, C - n);
    let N = C;
    let T = h(C) - s;

    while (N < e && T < c + t * n) {
      (T += d(N));
      N++;
    }

    (N = Math.min(e - 1, N + n));
    return { startIndex: w, endIndex: N };
  }, [e, s, c, h, d, n, t]);

  const _ = Te(() => {
    if (e === 0) {
      return [];
    }
    const C = [];
    for (let E = g; E <= v; E++) {
      C.push({ index: E, key: o(E), start: h(E), size: d(E) });
    }
    return C;
  }, [g, v, o, h, d, e]);

  const b = I(
    (C, E) => {
      if (!C) {
        return;
      }
      const w = o(E);
      const N = C.getBoundingClientRect().height;
      if (N <= 0) {
        return;
      }
      const T = u.current.get(w);

      if ((T === undefined || Math.abs(T - N) > 2)) {
        u.current.set(w, N);
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
    const C = new ResizeObserver((E) => {
      for (const w of E) {
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

  return { containerRef: k, virtualItems: _, totalSize: m, measureElement: b };
}
const cR = "DdqS";
const lR = "a1RR";
const uR = "fvQt";
const dR = "Jjpz";
const fR = "hubg";
const pR = "imh7";
const hR = "C0rs";
const mR = "s4Xs";
const gR = "XMj5";
const _R = "N5VB";
const vR = "ge1L";

const _t = {
  comments: cR,
  sortWrapper: lR,
  sortSelect: uR,
  commentsList: dR,
  commentItem: fR,
  empty: pR,
  loadMoreSentinel: hR,
  virtualContainer: mR,
  virtualContent: gR,
  virtualItem: _R,
  inputWrapper: vR,
};

const yR = 120;
function wR({
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
  onReport: g,
  onEdit: v,
  onDelete: _,
}) {
  const b = x(false);

  const {
    containerRef: y,
    virtualItems: k,
    totalSize: C,
    measureElement: E,
  } = aR({
    itemCount: e.length,
    estimatedItemHeight: yR,
    overscan: 3,
    getItemKey: N => e[N]?.id ?? N,
  });

  U(() => {
    if (!t || n || k.length === 0) {
      b.current = false;
      return;
    }
    const N = k[k.length - 1]?.index ?? 0;
    const T = e.length - 5;

    if (N >= T && !b.current) {
      (b.current = true);
      o();
    }
  }, [k, e.length, t, n, o]);

  U(() => {
    if (!n) {
      (b.current = false);
    }
  }, [n]);

  const w = I(
    (N, T) => {
      E(N, T);
    },
    [E]
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
                  children: i(Hf, {
                    comment: T,
                    onLike: () => l(T.id),
                    onLikeReply: u,
                    replyingTo: r?.commentId === T.id ? r : null,
                    onStartReply: f,
                    onCancelReply: p,
                    onSubmitReply: d,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: g,
                    onEdit: v,
                    onDelete: _,
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
const ER = "LRs2";
const bR = "lOcn";
const SR = "C15A";
const zs = { wrapper: ER, popup: bR, closing: SR };

const CR = ce(() => se(() => import("./index-DPxzkGGo.js"), __vite__mapDeps([23, 24])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const Hl = 280;
const Vl = 380;
const qs = 8;
const kR = 100;
const Wl = 150;
const NR = 150;
function Ta({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [o, r] = L(false);
  const [s, a] = L(false);
  const [c, l] = L(null);
  const u = x(null);
  const f = x(null);
  const p = x(null);
  const d = x(null);
  const h = x(null);
  const m = x(null);

  const g = I(() => {
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
    const B = P >= Vl + qs ? "bottom" : "top";
    const q = R >= Hl || R > N_right ? "left" : "right";
    let ne;
    let Q;

    if (B === "top") {
      (ne = N.top - Vl - qs);
    } else {
      (ne = N.bottom + qs);
    }

    if (q === "left") {
      (Q = N.left);
    } else {
      (Q = N.right - Hl);
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
      g();
      r(true);
    }
  }, [o, s, g]);

  const _ = I(() => {
    if (o && !s) {
      a(true);

      (m.current = window.setTimeout(() => {
        r(false);
        a(false);
      }, NR));
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
        }, kR));
    }
  };

  const y = () => {
    if (d.current) {
      clearTimeout(d.current);
      (d.current = null);
    }

    (h.current = window.setTimeout(() => {
        _();
      }, Wl));
  };

  U(
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

  const C = () => {
    h.current = window.setTimeout(() => {
      _();
    }, Wl);
  };

  const E = (w) => {
    w.preventDefault();
  };

  return i("div", {
    ref: f,
    className: zs.wrapper,
    onMouseEnter: b,
    onMouseLeave: y,
    onMouseDown: E,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(m0, { size: n }),
      }),
      o &&
        c &&
        $(
          i("div", {
            ref: p,
            className: `${zs.popup} ${s ? zs.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: k,
            onMouseLeave: C,
            onMouseDown: E,
            children: i(De, {
              fallback: null,
              children: i(CR, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const TR = "R3Ru";
const IR = "YwKZ";
const RR = "Hlkn";
const AR = "iugP";
const LR = "TfHK";
const PR = "yW1j";
const OR = "ZIik";
const xR = "AoFf";
const $R = "dX5X";
const MR = "x1zW";
const DR = "FUM0";
const UR = "VfhX";

const ct = {
  editCommentModal: TR,
  form: IR,
  header: RR,
  title: AR,
  content: LR,
  editor: PR,
  actions: OR,
  mediaButtons: xR,
  mediaButton: $R,
  submitGroup: MR,
  charCount: DR,
  error: UR,
};

const jl = 2000/* 2e3 */;
function FR({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = Kt();

  const r = nn(C => C.editComment);

  const s = ge(C => C.profile);

  const a = Yt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: p,
  } = is(t, n);

  const [d, h] = L(false);
  const m = jl - c.length;
  const g = m < 0;
  const v = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const b = v || _;

  const y = I(
    (C) => {
      p(C.emoji);
    },
    [p]
  );

  const k = I(async () => {
    if (!(!c.trim() || g || !b || d)) {
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
  }, [c, l, g, b, d, r, e, o]);

  return i(Dn, {
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
            i(ds, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Комментарий...",
              maxLength: jl,
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
                i(Ta, { onEmojiSelect: y, buttonClassName: ct.mediaButton }),
            }),
            i("div", {
              className: ct.submitGroup,
              children: [
                g &&
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
                  disabled: !c.trim() || g || !b || d,
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
const BR = ce(() => se(() => import("./index-LLvfjlFA.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function HR({
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
  const m = Yt() && p === "modal";
  const [g, v] = L(null);
  const [_, b] = L(null);
  const [y, k] = L(null);
  const [C, E] = L(null);
  const w = x(null);
  const { openModal: N } = Kt();

  const T = nn(W => W.highlightedCommentId);

  const S = nn(W => W.clearHighlightedComment);

  const P = nn(W => W.loadReplies);

  const R = nn(W => W.deleteComment);

  const A = nn(W => W.toggleCommentLike);

  Fy({
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
      b(T);
      S();

      we.push(window.setTimeout(() => b(null), 900));
    };

    oe(40);

    return () => {
      (W = true);

      we.forEach($ => clearTimeout($));
    };
  }, [T, S]);

  const B = async (W, we, oe) => {
    if (g) {
      await c({
          text: W,
          spans: we,
          parentId: g.commentId,
          replyToUserId: g.userId,
          replyToInfo: {
            id: g.userId,
            username: g.username,
            displayName: g.displayName,
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
    E(W);
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
      N(i(FR, { commentId: W, initialText: we, initialSpans: oe }));
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
        ? i(hS, { count: 5 })
        : e.length === 0
        ? i("div", { className: _t.empty, children: "Нет комментариев" })
        : m
        ? i(wR, {
            comments: e,
            hasMore: o,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: g,
            flashingCommentId: _,
            loadingRepliesId: y,
            isWallOwner: f,
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
                  children: i(Hf, {
                    comment: W,
                    onLike: () => a(W.id),
                    onLikeReply: Q,
                    replyingTo: g?.commentId === W.id ? g : null,
                    onStartReply: q,
                    onCancelReply: ne,
                    onSubmitReply: B,
                    onVoiceSend: l,
                    onLoadReplies: he,
                    onReport: G,
                    onEdit: J,
                    onDelete: ae,
                    isLoadingReplies: y === W.id,
                    flashingCommentId: _,
                    isWallOwner: f,
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
      !d &&
        i("div", {
          className: _t.inputWrapper,
          children: i(kf, {
            onSubmit: (W, we, oe) => c({ text: W, spans: we, attachments: oe }),
            onVoiceSend: l,
          }),
        }),
      C &&
        i(De, {
          fallback: null,
          children: i(BR, {
            targetType: "comment",
            targetId: C,
            onClose: () => E(null),
          }),
        }),
    ],
  });
}
const VR = "kUZ3";
const WR = "QMZe";
const jR = "zhH3";
const zR = "DBu9";
const _r = { commentsModal: VR, header: WR, title: jR, content: zR };
function qR({ postId: e, onClose: t }) {
  const n = x(null);

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
  } = nn(
    Al(y => ({
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

  const { commentsSort: d, setCommentsSort: h } = Tr(
    Al(y => ({
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

  const g = I(() => {
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

  const _ = I(
    async (y) => {
      await p(e, y);
    },
    [p, e]
  );

  const b = I(
    async (y) => {
      const k = `voice_${Date.now()}.webm`;
      const C = new File([y], k, { type: y.type || "audio/webm" });
      const E = await Yn.uploadMedia(C);
      await p(e, { text: "", attachments: [{ mediaId: E.id }] });
    },
    [p, e]
  );

  return i(Dn, {
    frameless: true,
    onClose: t,
    className: _r.commentsModal,
    children: [
      i("div", {
        className: _r.header,
        children: i("span", { className: _r.title, children: "Комментарии" }),
      }),
      i("div", {
        className: _r.content,
        "data-comments-modal": true,
        children: i(HR, {
          comments: o,
          isLoading: r,
          isLoadingMore: s,
          hasMore: a,
          sort: d,
          onSortChange: m,
          onLikeComment: v,
          onAddComment: _,
          onVoiceSend: b,
          onLoadMore: g,
        }),
      }),
    ],
  });
}

const GR = {
    inventory: async () => (await O.get(D.postNotebooks.inventory, { skipErrorToast: true })).data,
  };

const YR = ce(() => se(() => import("./index-wOv2vPxt.js"), __vite__mapDeps([25, 26])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);

function Vf({
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
    } = is();

  const [u, f] = L(false);
  const [p, d] = L(false);
  const [h, m] = L(false);
  const [g, v] = L(null);
  const [_, b] = L(null);
  const [y, k] = L(false);
  const [C, E] = L("");
  const w = x(null);
  const N = x(0);
  const T = Yt();
  const P = as()?.subscription?.isActive ?? false;
  const R = Xo().status === "allowed";
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
          const Yf = await GR.inventory();

          if (F) {
            v(Yf);
          }
        } catch {
        } finally {
          pe = false;
        }
      }
    };
    ze();
    const lo = y
      ? window.setInterval(() => {
          ze();
        }, 1500)
      : undefined;
    return () => {
      (F = false);

      if (lo !== undefined) {
        window.clearInterval(lo);
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
    } = Sf(10, P);

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
  } = mS();

  const Ct = jt.MAX_CHARS - o.length;
  const M = Ct < 0;
  const Ee = oe && Se();
  const Ce = A.length > 0 || B.length > 0;
  const Oe = o.trim().length > 0 || Ee || Ce;
  const Ne = P ? `${Ni},${Xw}` : Ni;

  const je = I(async () => {
    if (!(!Oe || M || q || p)) {
      d(true);
      E("");
      try {
        const F = A.map(ze => ({
          mediaId: ze.mediaId,
          url: ze.url
        }));

        const pe =
          _ && g
            ? {
                eventId: g.eventId,
                style: _,
                operationId: w.current ?? (w.current = crypto.randomUUID()),
              }
            : undefined;

        await e?.(o, r, F, ue(), pe);
        l();
        ae();
        ht();

        if (_ &&
          g) {
          v(
            ze => ze && {
              ...ze,
              balance: {
                ...ze.balance,
                [_]: Math.max(0, ze.balance[_] - 1),
              },
            }
          );
        }

        b(null);
        k(false);
        (w.current = null);
      } catch (F) {
        E(
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
        d(false);
      }
    }
  }, [Oe, M, q, p, o, r, A, ue, e, l, ae, ht, _, g]);

  const tt = I(
    (F) => {
      if (g?.applicationsEnabled && g.balance[F] >= 1) {
        b(pe => pe === F ? null : F);
        E("");
        (w.current = null);
      }
    },
    [g]
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

  const un = I(
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

  const Un = I((F) => {
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

  const Zo = I(
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
      _ === "grid" ? j.notebookGrid : ""
    } ${_ === "ruled" ? j.notebookRuled : ""}`,
    onDragEnter: Ut,
    onDragOver: Un,
    onDragLeave: nt,
    onDrop: Zo,
    children: [
      h &&
        i("div", {
          className: j.dragOverlay,
          children: [
            i(ef, { size: 32 }),
            i("span", {
              children: P ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      _ &&
        i("div", {
          className: j.notebookLabel,
          children: ["Тетрадка ", _ === "grid" ? "в клетку" : "в линейку"],
        }),
      i("div", {
        className: j.whatsNew,
        children: i(ds, {
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
      i(Cf, { images: A, uploadingImages: B, onRemove: he }),
      i("input", {
        ref: W,
        type: "file",
        accept: Ne,
        multiple: !ne,
        onChange: we,
        style: { display: "none" },
      }),
      oe &&
        i(pC, {
          poll: $,
          onQuestionChange: K,
          onOptionChange: de,
          onAddOption: X,
          onRemoveOption: Z,
          onMultipleChoiceToggle: me,
          onClose: Ie,
        }),
      y &&
        g &&
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
                const pe = g.balance[F];
                const ze = F === "grid" ? "В клетку" : "В линейку";
                return i(
                  "div",
                  {
                    className: j.notebookOptionRow,
                    children: [
                      i("button", {
                        type: "button",
                        className: `${j.notebookOption} ${
                          _ === F ? j.notebookOptionActive : ""
                        }`,
                        disabled: !g.applicationsEnabled || pe < 1,
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
            !g.applicationsEnabled &&
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
                children: i(Kd, {}),
              }),
              !T &&
                i(Ta, { onEmojiSelect: un, buttonClassName: j.mediaButton }),
              i("button", {
                className: j.mediaButton,
                onClick: () => f(true),
                title: "Нарисовать",
                disabled: ne,
                children: i(p0, { size: 20 }),
              }),
              i("button", {
                className: `${j.mediaButton} ${oe ? j.active : ""}`,
                onClick: V,
                title: "Добавить опрос",
                children: i(h0, {}),
              }),
              g &&
                i("button", {
                  type: "button",
                  className: `${j.mediaButton} ${j.notebookButton} ${
                    _ ? j.active : ""
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
          children: i(YR, {
            isOpen: u,
            onClose: () => f(false),
            onSave: it,
            mode: "post",
          }),
        }),
    ],
  });
}
const KR = "k8LF";
const XR = "yvX5";
const zl = { createPostModal: KR, title: XR };
function QR({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: o } = Kt();

  const r = ge(c => c.profile);

  const s = ie(c => c.createPost);

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

  return i(Dn, {
    frameless: true,
    onClose: o,
    className: zl.createPostModal,
    children: [
      i("h2", { className: zl.title, children: "Создать пост" }),
      i(Vf, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const ZR = "IFCB";
const JR = "mcpd";
const e2 = "oXHj";
const t2 = "LMG3";
const n2 = "RCI4";
const o2 = "j7uJ";
const r2 = "udOD";
const s2 = "QCzn";
const i2 = "b6Fx";
const a2 = "YsVr";

const Tt = {
  editPostModal: ZR,
  form: JR,
  whatsNew: e2,
  editor: t2,
  actions: n2,
  mediaButtons: o2,
  mediaButton: r2,
  submitGroup: s2,
  charCount: i2,
  error: a2,
};

const ql = 5000/* 5e3 */;
function c2({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = Kt();

  const r = ie(C => C.editPost);

  const s = ge(C => C.profile);

  const a = Yt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: p,
  } = is(t, n);

  const [d, h] = L(false);
  const m = ql - c.length;
  const g = m < 0;
  const v = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const b = v || _;

  const y = I(
    (C) => {
      p(C.emoji);
    },
    [p]
  );

  const k = I(async () => {
    if (!(!c.trim() || g || !b || d)) {
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
  }, [c, l, g, b, d, r, e, o]);

  return i(Dn, {
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
            i(ds, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Что нового?",
              maxLength: ql,
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
                i(Ta, { onEmojiSelect: y, buttonClassName: Tt.mediaButton }),
            }),
            i("div", {
              className: Tt.submitGroup,
              children: [
                g &&
                  i("span", {
                    className: `${Tt.charCount} ${Tt.error}`,
                    children: m,
                  }),
                i(Fe, {
                  size: "lg",
                  disabled: !c.trim() || g || !b,
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
const l2 = "HHss";
const u2 = "tsXo";
const d2 = "pUlK";
const f2 = "dAhT";
const p2 = "oflj";
const h2 = "S2U4";
const m2 = "PCIa";
const g2 = "TjNB";
const _2 = "wuza";

const Ht = {
  repostModal: l2,
  content: u2,
  title: d2,
  inputSection: f2,
  textarea: p2,
  originalPost: h2,
  postHeader: m2,
  postText: g2,
  actions: _2,
};

function v2({ post: e, onClose: t, onSuccess: n }) {
  const [o, r] = L("");
  const [s, a] = L(false);

  const c = ge(p => p.profile);

  const l = ie(p => p.updatePostReposted);

  const u = ie(p => p.prependPost);

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

  return i(Dn, {
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
                i(Qo, {
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
                  ? i(Na, {
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

const y2 = ({ showCreateButton: e = true }) => {
  const t = Xo();
  const n = as();
  const o = cs();
  const r = zd();

  const s = ss(A => A.fetchPortal);

  const a = qd(r);
  const c = !a && r.active && !!r.url;
  const l = a ? le.ALICE_EVENT : c ? r.url : le.EVENT;
  U(() => {
    s();
  }, [s]);
  const u = n?.username ? `/@${n.username}` : "/profile";

  const f = Te(
    () => [
      { id: "feed", label: "Лента", icon: Zd, href: "/" },
      { id: "shop", label: "Магаз", icon: of, href: "/shop" },
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
        icon: ca,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: Ei, href: u },
    ],
    [u, l, r.active, r.url, t.status]
  );

  const [p, d] = L({});
  const [h, m] = L(true);
  const g = x([]);
  const v = x(null);
  const [_] = os();
  const { openModal: b } = Kt();

  const y = ie(A => A.fetchFeed);

  const k = ie(A => A.isRefreshing);

  const C = cf();
  const E = Ef();

  const w = I(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      y(true);
    }
  }, [y]);

  const N = Te(() => {
    const A = _.url || "/";
    return da.some(B => A.startsWith(B));
  }, [_.url]);

  const T = Te(() => {
    const A = _.url || "/";
    return n?.username
      ? A === `/@${n.username}` || A.startsWith(`/@${n.username}/`)
      : false;
  }, [_.url, n?.username]);

  const S = x(null);

  const P = I((A, B = false) => {
    if (!B && S.current === A) {
      return;
    }
    S.current = A;
    const q = g.current[A];
    const v_current = v.current;
    if (q && v_current) {
      const Q = parseFloat(getComputedStyle(v_current).paddingLeft) || 0;

      d({
        width: q.offsetWidth,
        transform: `translateX(${q.offsetLeft - Q}px)`,
      });

      m(true);
    }
  }, []);

  U(() => {
    const A = _.url || "/";

    const B = f.findIndex((q) => {
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
  }, [_.url, f, T, P]);

  U(() => {
    const v_current = v.current;
    if (!v_current) {
      return;
    }
    const B = v_current.querySelector(`.${Qe.active}`);
    if (B) {
      const q = g.current.indexOf(B);

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
          const Q = g.current.indexOf(ne);

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
    b(i(QR, {}));
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
              f.map((A, B) => {
                const A_icon = A.icon;
                const ne = A.id === "event";
                const Q = ne && c;
                const he = _.url || "/";
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
                      (g.current[B] = W);

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
                                A.id === "feed" && k ? i(aa, {}) : i(A_icon, {}),
                                A.id === "notifications" &&
                                  C > 0 &&
                                  i("span", {
                                    className: Qe.badge,
                                    children: C > 99 ? "99+" : C,
                                  }),
                                A.id === "shop" &&
                                  E > 0 &&
                                  i("span", {
                                    className: Qe.badge,
                                    children: E,
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
              children: i(la, {}),
            }),
        ],
      });
};

const w2 = "sW59";
const E2 = "qYmM";
const b2 = "HxYY";
const S2 = "TAB5";
const C2 = "pXiC";
const wo = { badge: w2, red: E2, green: b2, blue: S2, violet: C2 };
function Wf({ type: e }) {
  const t =
    e === "like"
      ? wo.red
      : e === "bell"
      ? wo.violet
      : ["wall_post", "reply", "repost"].includes(e)
      ? wo.green
      : wo.blue;
  return i("div", {
    className: `${wo.badge} ${t}`,
    children: [
      e === "follow" && i(la, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(Xd, { size: 12, filled: true }),
      e === "like" && i(ia, { size: 12, filled: true }),
      e === "repost" && i(ua, { size: 12 }),
      e === "bell" && i(ca, { size: 12 }),
    ],
  });
}
const k2 = "s5qv";
const N2 = "KONU";
const T2 = "PgoG";
const I2 = "eaEo";
const R2 = "RR2v";
const A2 = "ytz2";
const L2 = "gr42";
const P2 = "h3lv";
const O2 = "Ywge";
const x2 = "LD88";
const $2 = "AxRi";
const M2 = "ow5x";
const D2 = "Mqdr";

const Je = {
  container: k2,
  clearAllButton: N2,
  toastList: T2,
  toast: I2,
  toastLeft: R2,
  toastData: A2,
  title: L2,
  message: P2,
  highlightedUsername: O2,
  dragging: x2,
  closeButton: $2,
  eventReminder: M2,
  belowTabs: D2,
};

const U2 = "RSLd";
const F2 = { avatar: U2 };
function B2() {
  return i(pt, {
    src: "🔔",
    alt: "Напоминание",
    size: "md",
    className: F2.avatar,
    badge: i(Wf, { type: "bell" }),
  });
}
const jf = to(null);
function sP() {
  const e = Yo(jf);
  if (!e) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return e;
}
function H2({ children: e }) {
  const [t, n] = L([]);

  const o = I((c) => {
    const l =
      c.id ?? `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    n(u => [
      ...u.filter(
        f => f.id !== l && (!c.eventId || f.eventId !== c.eventId)
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
        const d = u_detail?.all
          ? []
          : p.filter(
              h => !h.eventId ||
              (h.eventId !== u_detail?.eventId &&
                Date.parse(h.expiresAt ?? "") > Date.now())
            );
        return d.length === p.length ? p : d;
      });
    };
    window.addEventListener("alice-reminder-expired", c);
    const l = (u) => {
      const u_detail = u.detail;
      n((p) => {
        const d = p.filter(h => !h.eventId || u_detail.includes(h.eventId));
        return d.length === p.length ? p : d;
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

  const a = Gw();

  U(() => {
    if (a) {
      const c = j2(a.type);

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

  return i(jf.Provider, {
    value: { toasts: t, addToast: o, removeToast: r, clearAll: s },
    children: [e, i(V2, { toasts: t, onRemove: r, onClearAll: s })],
  });
}
function V2({ toasts: e, onRemove: t, onClearAll: n }) {
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
          z2,
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
const W2 = 80;
function j2(e) {
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
function Gl(e) {
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
function z2({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: o = false,
}) {
  const r = x(null);
  const [s, a] = L(0);
  const [c, l] = L(false);
  const [u, f] = L(false);
  const p = x(0);
  const d = x(0);
  const h = x(false);

  const m = (E) => {
    (p.current = E.clientX);
    (h.current = false);
    l(true);
  };

  const g = I(
    (E) => {
      if (!c) {
        return;
      }
      const w = E.clientX - p.current;

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

      Math.abs(s) > W2
        ? (f(true), a(s > 0 ? 400 : -400), setTimeout(() => t(e.id), 200))
        : a(0);
    }
  }, [c, s, t, e]);

  U(() => {
    if (c) {
      document.addEventListener("mousemove", g);
      document.addEventListener("mouseup", v);

      return () => {
        document.removeEventListener("mousemove", g);
        document.removeEventListener("mouseup", v);
      };
    }
  }, [c, g, v]);

  const _ = (E) => {
    (p.current = E.touches[0].clientX);
    (d.current = E.touches[0].clientY);
    (h.current = false);
    l(true);
  };

  const b = (E) => {
    if (!c) {
      return;
    }
    const w = E.touches[0].clientX - p.current;
    const N = E.touches[0].clientY - d.current;

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
      const E = Gl(e);

      if (E) {
        Ye(E);
        t(e.id);
      }
    },
    onKeyDown: (E) => {
      if ((E.key === "Enter" || E.key === " ")) {
        E.preventDefault();
        Ye(Gl(e) ?? "/notifications");
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
    onTouchStart: _,
    onTouchMove: b,
    onTouchEnd: y,
    children: [
      i("div", {
        className: Je.toastLeft,
        children: [
          e.eventId
            ? i(B2, {})
            : i(pt, {
                src: e.actorAvatar || "",
                badge: i(Wf, { type: e.notificationType }),
              }),
          i("div", {
            className: Je.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: Je.title,
                  children: e.eventId
                    ? i("span", { children: e.actorName })
                    : i(Qo, { userId: e.actorId, name: e.actorName }),
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
        onClick: (E) => {
          E.stopPropagation();
          t(e.id);
        },
        onMouseDown: E => E.stopPropagation(),
        onTouchStart: E => E.stopPropagation(),
        children: i(ft, { size: 16 }),
      }),
    ],
  });
}
const q2 = "K9bk";
const G2 = "zOpM";
const Y2 = "tiQP";
const K2 = "vyFN";
const X2 = "oT65";
const Q2 = "rDQY";
const Z2 = "XC1l";
const J2 = "vRcV";
const eA = "yL3T";
const tA = "pGnM";

const bn = {
  container: q2,
  toast: G2,
  slideUp: Y2,
  leaving: K2,
  fadeOut: X2,
  success: Q2,
  icon: Z2,
  message: J2,
  closeButton: eA,
  error: tA,
};

const nA = { success: g0, error: d0 };
function oA({ id: e, type: t, message: n, onRemove: o }) {
  const [r, s] = L(false);
  const nA_t = nA[t];

  const c = I(() => {
    s(true);

    setTimeout(() => {
      o(e);
    }, 300);
  }, [e, o]);

  return i("div", {
    className: `${bn.toast} ${bn[t]} ${r ? bn.leaving : ""}`,
    children: [
      i("span", { className: bn.icon, children: i(nA_t, { size: 20 }) }),
      i("span", { className: bn.message, children: n }),
      i("button", {
        className: bn.closeButton,
        onClick: c,
        children: i(ft, { size: 14 }),
      }),
    ],
  });
}
function rA() {
  const e = Mr(n => n.toasts);

  const t = Mr(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: bn.container,
        children: e.map(n => i(
          oA,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const sA = "OZDj";
const iA = "frGq";
const aA = "NUh9";
const cA = "zMy0";
const vr = { tabs: sA, indicator: iA, button: aA, active: cA };
function lA({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: o,
  className: r = "",
}) {
  const [s, a] = L(t);
  const c = n !== undefined ? n : s;
  const [l, u] = L({});
  const f = x([]);
  const p = x(null);
  const d = x(false);

  const h = I(() => {
    const _ = f.current[c];
    if (_) {
      const _parentElement = _.parentElement;
      const y = _parentElement ? parseFloat(getComputedStyle(_parentElement).paddingLeft) : 0;
      const k = !d.current;

      u({
        width: _.offsetWidth,
        transform: `translateX(${_.offsetLeft - y}px)`,
        ...(k ? { transition: "none" } : {}),
      });

      if (k) {
        requestAnimationFrame(() => {
          (d.current = true);

          u((C) => {
            const { transition: E, ...w } = C;
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
    const b = new ResizeObserver(() => {
      h();
    });
    b.observe(p_current);

    return () => {
      b.disconnect();
    };
  }, [h]);

  const m = (_) => {
    if (n === undefined) {
      a(_);
    }

    o?.(_, e[_]);
  };

  const g = _ => typeof _ == "string" ? _ : _.label;

  const v = (_, b) => typeof _ == "string" ? `${b}` : _.id;

  return i("div", {
    ref: p,
    className: `${vr.tabs} ${r}`,
    children: [
      i("div", { className: vr.indicator, style: l }),
      e.map((_, b) => i(
        "button",
        {
          ref: (y) => {
            f.current[b] = y;
          },
          onClick: () => m(b),
          className: `${vr.button} ${c === b ? vr.active : ""}`,
          children: g(_),
        },
        v(_, b)
      )
      ),
    ],
  });
}
const uA = ce(() => se(
  () => import("./index-BZNw-HFW.js"),
  __vite__mapDeps([27, 28, 6, 5, 29])
).then(e => ({
  default: e.ImageViewer
}))
);
function dA() {
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
  } = Bd();
  return e
    ? i(De, {
        fallback: null,
        children: i(
          uA,
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
const fA = "B4tA";
const pA = "j72C";
const hA = "qcX0";
const mA = "eumD";
const gA = "zNgI";
const _A = "l9Xp";

const zn = {
  layout: fA,
  layoutEvent: pA,
  wrapper: hA,
  wrapperShop: mA,
  content: gA,
  wrapperEvent: _A,
};

const vA = ce(() => se(() => import("./index-Dm11YkXC.js"), __vite__mapDeps([30, 31])).then(
  e => ({
    default: e.AuthLayout
  })
)
);

const yA = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const wA = [
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

const EA = ["/shop"];

const bA = ({ children: e }) => {
  const t = Yt();
  const n = cs();
  const o = as()?.id;

  const r = We(m => m.initialize);

  const s = We(m => m.reset);

  const a = Uy();
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
    const g = history.pushState.bind(history);
    const v = history.replaceState.bind(history);

    (history.pushState = (..._) => {
      g(..._);
      m();
    });

    (history.replaceState = (..._) => {
      v(..._);
      m();
    });

    return () => {
      window.removeEventListener("popstate", m);
      (history.pushState = g);
      (history.replaceState = v);
    };
  }, []);

  const u = yA.includes(c);
  const f = wA.includes(c);

  const p = EA.some(m => c === m || c.startsWith(`${m}/`));

  const d = c === le.ALICE_EVENT || c.startsWith(`${le.ALICE_EVENT}/`);
  const h = (n || p) && !f;
  return u
    ? i(De, { fallback: null, children: i(vA, { children: e }) })
    : i(Dy.Provider, {
        value: { isHidden: a },
        children: i("div", {
          className: `${zn.layout} ${d ? zn.layoutEvent : ""}`,
          children: i("div", {
            className: `${zn.wrapper} ${p ? zn.wrapperShop : ""} ${
              d ? zn.wrapperEvent : ""
            }`,
            children: [
              h && (t ? i(y2, { showCreateButton: !d }) : i(C1, {})),
              h && !t && i(R1, {}),
              i("div", { className: zn.content, children: e }),
            ],
          }),
        }),
      });
};

function SA() {
  if (!Yl) {
    (Yl = true);

    (window.setNativeAuth = (e) => {
      if (e?.token) {
        Wd(e.token);
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
const CA = "ifIM";
const kA = "Bwlq";
const NA = "r29l";
const TA = "vsIx";
const IA = "DYzW";
const RA = "ufzx";
const AA = "KH0k";
const LA = "hMz0";
const PA = "G85B";
const OA = "HaHe";
const xA = "OTeL";
const $A = "URqX";
const MA = "tYK0";
const DA = "une8";
const UA = "THGO";

const qe = {
  overlay: CA,
  card: kA,
  imageWrap: NA,
  image: TA,
  body: IA,
  titleRow: RA,
  title: AA,
  badge: LA,
  texts: PA,
  text: OA,
  moreButton: xA,
  buttons: $A,
  button: MA,
  primary: DA,
  secondary: UA,
};

const zf = "seen_announcements";
function qf() {
  try {
    const e = localStorage.getItem(zf);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function FA(e) {
  try {
    const t = qf();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(zf, JSON.stringify(t));
    }
  } catch {}
}
function BA() {
  const e = cs();
  const [t, n] = L(null);
  const [o, r] = L(false);

  const s = I(() => {
    r(false);

    n(m => {
      if (m) {
        FA(m.id);
      }

      return null;
    });
  }, []);

  U(() => {
    if (!e) {
      return;
    }
    let m = false;

    Qw.getAnnouncements()
      .then((g) => {
      if (m) {
        return;
      }
      const v = qf();

      const _ = g.find(b => b?.id && !v.includes(b.id));

      if (_) {
        n(_);
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
    title: f,
    description: p,
    additional_text: d,
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
        "aria-label": f,
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
                  i("h2", { className: qe.title, children: f }),
                  u && i("span", { className: qe.badge, children: u }),
                ],
              }),
              (p || d) &&
                i("div", {
                  className: qe.texts,
                  children: [
                    p && i("p", { className: qe.text, children: p }),
                    d &&
                      (o
                        ? i("p", { className: qe.text, children: d })
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
                  children: h.map((m, g) => i(
                    "button",
                    {
                      type: "button",
                      className: `${qe.button} ${
                        m.style === "secondary" ? qe.secondary : qe.primary
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
const Kl = 3000/* 3e3 */;
const HA = 500;
const VA = 30000/* 3e4 */;
const Xl = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function WA() {
  const e = ie(n => n.applyStatsUpdates);

  const t = hf();
  U(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let o = Infinity;
    let r = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > VA;

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
      const h = Gr.getSnapshot();
      if (h.length === 0) {
        return;
      }
      r = true;
      const m = Date.now();
      try {
        const g = h.length > 20 ? h.slice(0, 20) : h;
        const v = await Ue.getPostsStats(g);

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
            u(Kl);
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

    for (const h of Xl) {
      window.addEventListener(h, f, { passive: true });
    }
    const p = () => {
      if (!document.hidden) {
        f();
      }
    };
    document.addEventListener("visibilitychange", p);
    const d = Gr.onAppear(() => {
      if (!s && !document.hidden) {
        u(HA);
      }
    });
    u(Kl);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", p);
      for (const h of Xl) {
        window.removeEventListener(h, f);
      }
      d();
    };
  }, [e, t]);
}

const Ia = () => i(mf, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(Fe, {
    onClick: () => Ye("/"),
    children: "Вернуться на главную",
  }),
});

const jA = "KgZU";
const zA = "FdwP";
const qA = "z2Ab";
const GA = "GDO7";
const YA = "Rkxd";
const KA = "c8JV";
const XA = "p3j6";
const QA = "iPxs";
const ZA = "PZa3";
const JA = "OFMy";
const eL = "KcP4";
const tL = "Wdki";
const nL = "Uaub";
const oL = "ZA4L";
const rL = "e1mJ";
const sL = "Psro";
const iL = "SCyh";
const aL = "A1P1";
const cL = "JvHm";
const lL = "Tqi8";
const uL = "AmmB";
const dL = "qNlV";

const z = {
  skeleton: jA,
  inner: zA,
  content: qA,
  header: GA,
  body: YA,
  actions: KA,
  shimmer: XA,
  avatar: QA,
  name: ZA,
  time: JA,
  line: eL,
  w100: tL,
  w92: nL,
  w85: oL,
  w78: rL,
  w65: sL,
  w50: iL,
  w40: aL,
  media: cL,
  mediaTall: lL,
  pill: uL,
  list: dL,
};

function fL(e) {
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
function Gf({ variant: e = "medium", delayMs: t = 0 }) {
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
            fL(e),
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
const Ql = ["medium", "media", "short", "long", "mediaTall"];
function pL({ count: e = 4 }) {
  return i("div", {
    className: z.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(Gf, { variant: Ql[n % Ql.length], delayMs: n * 120 }, n)
    ),
  });
}
const hL = "r0xf";
const mL = "cEh4";
const gL = "OSrc";
const Gs = { virtualFeed: hL, virtualContent: mL, virtualItem: gL };
function _L({
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
  const f = x(null);
  const p = x(false);
  const [d, h] = L(null);
  const [m, g] = L(window.innerWidth < 1174);

  const v = ie(T => T.highlightedPostId);

  const _ = ie(T => T.clearHighlightedPost);

  U(() => {
    const T = () => g(window.innerWidth < 1174);
    window.addEventListener("resize", T);

    return () => window.removeEventListener("resize", T);
  }, []);
  const b = m ? 0 : c;

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
    measureElement: E,
    getMeasuredHeights: w,
  } = By({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: b,
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
    f.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const T = setTimeout(() => {
      h(v);
      _();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(T);
  }, [v, _]);

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
    ref: f,
    className: Gs.virtualFeed,
    children: [
      i("div", {
        className: Gs.virtualContent,
        style: { height: `${C}px` },
        children: k.map((T) => {
          const S = e[T.index];
          return S
            ? i(
                "div",
                {
                  ref: P => E(P, T.index),
                  className: Gs.virtualItem,
                  style: { transform: `translateY(${T.start}px)` },
                  children: t(S, T.index, S.id === d),
                },
                T.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${b}px` },
          children: i(Gf, { variant: "medium" }),
        }),
    ],
  });
}
const vL = "Sehq";
const yL = "b96B";
const wL = "n12t";
const EL = "wZQ1";
const bL = "G4w2";
const SL = "QRP0";

const qn = {
  page: vL,
  createPostWrapper: yL,
  tabsWrapper: wL,
  searchButton: EL,
  error: bL,
  empty: SL,
};

const CL = (e) => {
  const t = ie(S => S.posts);

  const n = ie(S => S.activeFeed);

  const o = ie(S => S.isLoading);

  const r = ie(S => S.isLoadingMore);

  const s = ie(S => S.hasMore);

  const a = ie(S => S.error);

  const c = ie(S => S.feedScrollPosition);

  const l = ie(S => S.feedMeasuredHeights);

  const u = ie(S => S.feedRestoreToken);

  const f = ie(S => S.setActiveFeed);

  const p = ie(S => S.fetchFeed);

  const d = ie(S => S.loadMoreFeed);

  const h = ie(S => S.createPost);

  const m = ie(S => S.cacheFeedHeights);

  const g = ge(S => S.profile);

  const v = ge(S => S.status);

  const _ = x(false);

  const b = Te(() => t.map(S => S.author.id), [t]);

  eE(b);

  U(() => {
    if (v === "authenticated" && t.length === 0 && !o) {
      p();
    }
  }, [n, v]);

  St(() => {
    if (!_.current) {
      if (t.length !== 0) {
        (_.current = true);

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
      f(R);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      p(true);
    }
  };

  const E = async (S, P, R, A, B) => {
    if (g) {
      (await h({
          wallOwnerId: g.id,
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
      d();
    }
  }, [s, r, d]);

  const N =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const T = I(
    (S, P, R) => i(xI, { post: S, isHighlighted: R, source: N }, S.id),
    [N]
  );

  return i("div", {
    className: qn.page,
    children: [
      i("div", {
        className: qn.tabsWrapper,
        children: [
          i(lA, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: C,
          }),
          i("a", {
            href: "/search",
            className: qn.searchButton,
            "aria-label": "Поиск",
            children: i(nf, {}),
          }),
        ],
      }),
      i("div", {
        className: qn.createPostWrapper,
        children: [
          g && i(pt, { src: g.avatar ?? "", alt: g.displayName, size: "sm" }),
          i(Vf, { onSubmit: E }),
        ],
      }),
      a
        ? i("div", {
            className: qn.error,
            children: [
              i("p", { children: a }),
              i("button", { onClick: () => p(), children: "Повторить" }),
            ],
          })
        : o && t.length === 0
        ? i(pL, { count: 4 })
        : t.length === 0
        ? i("div", { className: qn.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            _L,
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

const kL = ce(() => se(
  () => import("./index-DGvRM7oP.js"),
  __vite__mapDeps([32, 28, 14, 33])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

SA();

const NL = ce(() => se(() => import("./index-DUOD9kc8.js"), __vite__mapDeps([34, 6, 35])).then(
  e => ({
    default: e.Hashtag
  })
)
  );

const TL = ce(() => se(
  () => import("./index-DdxRxwkb.js"),
  __vite__mapDeps([36, 37, 6, 1, 2, 38])
).then(e => ({
  default: e.Profile
}))
);

const IL = ce(() => se(() => import("./index-DCt97vks.js"), __vite__mapDeps([39, 6, 40])).then(
  e => ({
    default: e.PostPage
  })
)
);

const RL = ce(() => se(
  () => import("./index-CIJn5F3I.js"),
  __vite__mapDeps([41, 4, 37, 42])
).then(e => ({
  default: e.Notifications
}))
);

const AL = ce(() => se(() => import("./index-Cm3C2vFC.js"), __vite__mapDeps([43, 44])).then(
  e => ({
    default: e.Search
  })
)
);

const LL = ce(() => se(() => import("./index-CXVCbAwB.js"), __vite__mapDeps([45, 46])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const PL = ce(() => se(() => import("./index-SYm0WqIT.js"), __vite__mapDeps([47, 48])).then(
  e => ({
    default: e.EventFrame
  })
)
);

function OL({ children: e }) {
  const t = Xo();
  return t.status === "denied"
    ? i(Ia, {})
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

const xL = ce(() => se(() => import("./index-BeyAhpX0.js"), __vite__mapDeps([49, 6, 50])).then(
  e => ({
    default: e.DeleteAccount
  })
)
  );

const $L = ce(() => se(() => import("./index-D8VMspIv.js"), __vite__mapDeps([51, 6, 52])).then(
  e => ({
    default: e.Terms
  })
)
);

const ML = ce(() => se(() => import("./index-TGGgyzvv.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.Privacy
  })
)
);

const DL = ce(() => se(() => import("./index-Dyo7rZmY.js"), __vite__mapDeps([55, 6, 56])).then(
  e => ({
    default: e.Cookies
  })
)
);

const UL = ce(() => se(
  () => import("./index-DRN1artt.js"),
  __vite__mapDeps([57, 6, 3, 58])
).then(e => ({
  default: e.ExternalLink
}))
);

const FL = ce(() => se(() => import("./index-DQeJkQmk.js"), __vite__mapDeps([59, 6, 60])).then(
  e => ({
    default: e.Support
  })
)
);

const BL = ce(() => se(() => import("./index-Btru6XXa.js"), __vite__mapDeps([61, 6, 62])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const HL = ce(() => se(() => import("./index-s1v5m-37.js"), __vite__mapDeps([63, 64])).then(
  e => ({
    default: e.Event
  })
)
);

const VL = ce(() => se(
  () => import("./index-DOs6P46-.js"),
  __vite__mapDeps([65, 66, 67, 6])
).then(e => ({
  default: e.SubscriptionTerms
}))
);

const WL = ce(() => se(
  () => import("./index-UNTxIGb4.js"),
  __vite__mapDeps([68, 66, 67, 6])
).then(e => ({
  default: e.RecurringTerms
}))
);

const jL = ce(() => se(
  () => import("./index-BfD9fch_.js"),
  __vite__mapDeps([69, 70, 71, 72, 73, 74, 75])
).then(e => ({
  default: e.Login
}))
);

const zL = ce(() => se(
  () => import("./index-BDjVO9p1.js"),
  __vite__mapDeps([76, 70, 71, 72, 73, 74, 77])
).then(e => ({
  default: e.Register
}))
);

const qL = ce(() => se(
  () => import("./index-C0SYTzBi.js"),
  __vite__mapDeps([78, 70, 71, 74, 79])
).then(e => ({
  default: e.ForgotPassword
}))
);

const GL = ce(() => se(() => import("./index-C62LQzmX.js"), __vite__mapDeps([80, 74, 81])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const YL = ce(() => se(() => import("./index-2cRgVlej.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const KL = ce(() => se(() => import("./index-BQrmX79w.js"), __vite__mapDeps([82, 83])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const XL = ce(() => se(() => import("./index-B3uKQ-Y8.js"), []).then(e => ({
  default: e.Verification
}))
);

function Zl(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const QL = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(Ia, {});
  }
  const t = e.slice(1);
  return i(TL, { username: t });
};
function ZL() {
  const [e, t] = L(window.location.pathname);

  const n = my(r => r.isOpen);

  WA();

  return i(H2, {
    children: i(WE, {
      children: i(Wb, {
        currentPath: e,
        children: [
          i(dA, {}),
          n && i(De, { fallback: null, children: i(kL, {}) }),
          i(rA, {}),
          i(Xb, {}),
          i(BA, {}),
          i(bA, {
            children: i(De, {
              fallback: null,
              children: i(Ud, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url === s) {
                    return;
                  }

                  gy.getState().markNavigated();
                  const a = ie.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = Zl(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = r.url === "/";
                  const l = !!Zl(r.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(CL, { path: "/" }),
                  i(RL, { path: "/notifications" }),
                  i(jL, { path: "/login" }),
                  i(zL, { path: "/register" }),
                  i(qL, { path: "/forgot-password" }),
                  i(GL, { path: "/reset-password" }),
                  i(YL, { path: "/verify-email" }),
                  i($L, { path: "/terms" }),
                  i(ML, { path: "/privacy" }),
                  i(DL, { path: "/cookies" }),
                  i(KL, { path: "/onboarding" }),
                  i(AL, { path: "/search" }),
                  i(LL, { path: "/shop/:rest*" }),
                  i(OL, {
                    path: "/event/alice-ai/:rest*",
                    children: i(PL, {}),
                  }),
                  i(NL, { path: "/hashtag/:name" }),
                  i(UL, { path: "/external" }),
                  i(FL, { path: "/support" }),
                  i(xL, { path: "/delete-account" }),
                  i(BL, { path: "/child-safety" }),
                  i(HL, { path: "/event" }),
                  i(XL, { path: "/verification" }),
                  i(VL, { path: "/subscription-terms" }),
                  i(WL, { path: "/recurring-terms" }),
                  i(IL, { path: "/:username/post/:postId" }),
                  i(QL, { path: "/:slug" }),
                  i(Ia, { default: true }),
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

Jv(document.getElementById("root")).render(
  i(ve, {
    children: i(Zv, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(ZL, {}),
    }),
  })
);
export {
  $ as $,
  x as A,
  Fe as B,
  Kt as C,
  Nf as D,
  nP as E,
  j0 as F,
  ft as G,
  oP as H,
  tf as I,
  rP as J,
  $e as K,
  Ca as L,
  Dn as M,
  Xo as N,
  ir as O,
  pL as P,
  Yn as Q,
  p0 as R,
  ve as S,
  rf as T,
  hT as U,
  _L as V,
  lT as W,
  Qo as X,
  ge as Y,
  Ze as Z,
  St as __1,
  my as a,
  Ii as a0,
  Yt as a1,
  cs as a2,
  HE as a3,
  QR as a4,
  Te as a5,
  mf as a6,
  lA as a7,
  Vf as a8,
  Al as a9,
  Dr as aA,
  H as aB,
  u0 as aC,
  pn as aD,
  ra as aE,
  wl as aF,
  a0 as aG,
  et as aH,
  Fd as aI,
  by as aJ,
  Id as aK,
  os as aL,
  Zi as aM,
  f0 as aN,
  Po as aO,
  aa as aP,
  ca as aQ,
  Ei as aR,
  ns as aS,
  Jk as aT,
  Vk as aU,
  Qw as aV,
  eE as aW,
  Wt as aX,
  tE as aY,
  nn as aa,
  gy as ab,
  Tr as ac,
  HR as ad,
  kf as ae,
  B2 as af,
  Qd as ag,
  Xd as ah,
  ia as ai,
  ua as aj,
  We as ak,
  cf as al,
  Fy as am,
  lf as an,
  O as ao,
  D as ap,
  pa as aq,
  nf as ar,
  Sy as as,
  ln as at,
  zd as au,
  JL as av,
  ss as aw,
  qd as ax,
  le as ay,
  Ly as az,
  ie as b,
  xI as c,
  L as d,
  Ye as e,
  pt as f,
  v0 as g,
  U as h,
  Jd as i,
  as as j,
  De as k,
  se as l,
  la as m,
  Vw as n,
  sP as o,
  Ue as p,
  I as q,
  xf as r,
  aT as s,
  cT as t,
  i as u,
  jw as v,
  cushion_fartMp3 as w,
  glass_breakWav as x,
  vt as y,
  ce as z,
};
