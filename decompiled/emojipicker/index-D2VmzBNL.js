import { d, y, l as l_1, T, A, q, u, a5, k as k_1 } from "./index-pEgBAsWz.js";
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "39b33b9d-47a3-4126-8138-0de8f64bd80b";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-39b33b9d-47a3-4126-8138-0de8f64bd80b";
    }
  } catch {}
})();
const W = "XkV6";
const Z = "A5Ld";
const $ = "styx";
const H = "BCmc";
const tt = "ZYL7";
const et = "vBfO";
const nt = "Du83";
const st = "TrEi";
const ot = "RJO9";
const rt = "fSW2";
const it = "lY0p";

const l = {
  picker: W,
  searchFloating: Z,
  searchInput: $,
  skinTonePopup: H,
  skinVariantButton: tt,
  skinVariantImage: et,
  content: nt,
  categoryTitle: st,
  emojiGrid: ot,
  emojiButton: rt,
  noResults: it,
};

const ct = [
  "Smileys & Emotion",
  "People & Body",
  "Animals & Nature",
  "Food & Drink",
  "Travel & Places",
  "Activities",
  "Objects",
  "Symbols",
  "Flags",
];

const at = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const w = "emoji-picker-recent";
const k = 32;

const lt = (t) => {
  try {
    return String.fromCodePoint(...t.split("-").map((e) => parseInt(e, 16)));
  } catch {
    return "";
  }
};

const N = (t) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${t.toLowerCase()}.png`;

const L = () => {
  try {
    const t = localStorage.getItem(w);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
};

const ut = (t) => {
  try {
    localStorage.setItem(w, JSON.stringify(t.slice(0, k)));
  } catch {}
};

const dt = (t) => {
  const e = [];
  const s = {};
  for (const [n, u] of Object.entries(t)) {
    s[n] = u.map((o) => {
      const d = Array.isArray(o.s) ? o.s : [o.s];

      const c = {
        unified: o.u,
        short_name: d[0],
        short_names: d,
        category: n,
        skin_variations: o.v,
      };

      e.push(c);
      return c;
    });
  }
  return { all: e, byCategory: s };
};

let E = null;

const mt = () => {
  const [t, e] = d(E);
  const [s, n] = d(!E);

  y(() => {
    if (E) {
      return;
    }
    (async () => {
      try {
        const o = await l_1(() => import("./emoji-data-ClSjx_mk.js"), []);

        const d = dt(o.default);
        E = d;
        e(d);
      } catch (o) {
        console.error("Failed to load emoji data:", o);
      } finally {
        n(false);
      }
    })();
  }, []);

  return T(
    () => ({
      all: t?.all ?? [],
      byCategory: t?.byCategory ?? {},
      isLoading: s,
    }),
    [t, s]
  );
};

const ft = (t) => {
  const [e, s] = d([]);
  const n = A([]);
  y(() => {
    s(L());
  }, []);

  const u = T(
    () =>
      e
        .slice(0, k)
        .map((c) => t.find((y) => y.unified === c))
        .filter((c) => c !== undefined),
    [e, t]
  );

  const o = q((c) => {
    if (!n.current.includes(c)) {
      n.current.push(c);
    }
  }, []);

  const d = q(() => {
    if (n.current.length === 0) {
      return;
    }
    const c = L();
    const m = [...n.current];
    for (const f of c) {
      if (!m.includes(f)) {
        m.push(f);
      }
    }
    ut(m.slice(0, k));
    s(m.slice(0, k));
    n.current = [];
  }, []);

  return { recentEmojis: u, addRecentEmoji: o, flushRecentEmojis: d };
};

const pt = ({ emoji, onClick }) =>
  u("button", {
    className: l.emojiButton,
    onClick: onClick,
    children: u("img", {
      src: N(emoji.unified),
      alt: emoji.short_name,
      loading: "lazy",
    }),
  });

const O = (t) => {
  const e = [t.unified];
  if (t.skin_variations) {
    for (const s of at.slice(1)) {
      const n = t.skin_variations[s];

      if (n) {
        e.push(n);
      }
    }
  }
  return e;
};

const gt = ({ popup, onSelect, onClose }) => {
  const n = A(null);
  const u = O(popup.emoji);

  y(() => {
    const o = (d) => {
      if (n.current && !n.current.contains(d.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", o);

    return () => document.removeEventListener("mousedown", o);
  }, [onClose]);

  return u("div", {
    ref: n,
    className: l.skinTonePopup,
    style: { left: popup.x, top: popup.y },
    children: u.map((o) =>
      u(
        "button",
        {
          className: l.skinVariantButton,
          onClick: () => onSelect(o, popup.emoji.short_name),
          children: u("img", {
            src: N(o),
            alt: "",
            className: l.skinVariantImage,
          }),
        },
        o
      )
    ),
  });
};

const V = ({ emojis, onEmojiClick }) =>
  u("div", {
    className: l.emojiGrid,
    children: emojis.map((s) =>
      u(pt, { emoji: s, onClick: (n) => onEmojiClick(s, n) }, s.unified)
    ),
  });

const ht = ({ name, emojis, onEmojiClick, sectionRef }) =>
  u("div", {
    ref: sectionRef,
    className: l.categorySection,
    children: [
      u("div", { className: l.categoryTitle, children: name }),
      u(V, { emojis: emojis, onEmojiClick: onEmojiClick }),
    ],
  });

const yt = ({ value, onChange, placeholder = "Search emojis..." }) =>
  u("div", {
    className: l.searchFloating,
    children: u("input", {
      type: "text",
      className: l.searchInput,
      placeholder: placeholder,
      value: value,
      onInput: (n) => onChange(n.target.value),
    }),
  });

export const EmojiPicker = ({
  onEmojiSelect,
  onClose,
  width = 280,
  height = 380,
  excludeCategories = [],
}) => {
  const [o, d] = d("apple");
  const [c, y] = d("");
  const [m, f] = d(null);
  const G = A(null);
  const C = A(null);
  const U = A({});
  const { all, byCategory, isLoading } = mt();
  const { recentEmojis, addRecentEmoji, flushRecentEmojis } = ft(all);
  y(
    () => () => {
      flushRecentEmojis();
      onClose?.();
    },
    [flushRecentEmojis, onClose]
  );

  const T = T(() => {
    if (!c.trim()) {
      return null;
    }
    const i = c.toLowerCase();
    return all
      .filter(
        (a) =>
          !excludeCategories.includes(a.category) &&
          a.short_names.some((g) => g.toLowerCase().includes(i))
      )
      .slice(0, 100);
  }, [c, all, excludeCategories]);

  const J = T(() => {
    if (o === "apple") {
      const i = [];

      if (recentEmojis.length > 0) {
        i.push({ id: "recent", name: "Recent", emojis: recentEmojis });
      }

      for (const a of ct) {
        if (excludeCategories.includes(a)) {
          continue;
        }
        const g = byCategory[a] || [];

        if (g.length !== 0) {
          i.push({ id: a, name: a.split(" & ")[0], emojis: g });
        }
      }
      return i;
    }
    return [];
  }, [o, recentEmojis, byCategory, excludeCategories]);

  const A = q((i, a) => {
    if (O(i).length > 1) {
      const a_currentTarget = a.currentTarget;
      const I = C.current?.getBoundingClientRect();
      const S = a_currentTarget.getBoundingClientRect();
      if (I) {
        const K = S.left - I.left + S.width / 2;
        const M = S.top - I.top - 60;
        f({ emoji: i, x: K, y: M });
      }
      return;
    }
    B(i.unified, i.short_name);
  }, []);

  const B = q(
    (i, a) => {
      addRecentEmoji(i);
      f(null);
      onEmojiSelect({ unified: i, emoji: lt(i), name: a, imageUrl: N(i) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const q = () =>
    isLoading
      ? excludeCategories(a5, {})
      : c && T
      ? T.length === 0
        ? excludeCategories("div", {
            className: l.noResults,
            children: "No emojis found",
          })
        : excludeCategories(V, { emojis: T, onEmojiClick: A })
      : excludeCategories(k_1, {
          children: J.map((i) =>
            excludeCategories(
              ht,
              {
                name: i.name,
                emojis: i.emojis,
                onEmojiClick: A,
                sectionRef: (a) => {
                  U.current[i.id] = a;
                },
              },
              i.id
            )
          ),
        });

  return excludeCategories("div", {
    className: l.picker,
    style: { width: width, height: height },
    ref: C,
    children: [
      m &&
        excludeCategories(gt, {
          popup: m,
          onSelect: B,
          onClose: () => f(null),
        }),
      excludeCategories("div", { className: l.content, ref: G, children: q() }),
      excludeCategories(yt, { value: c, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
