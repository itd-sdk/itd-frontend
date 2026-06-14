import { d, y, _, T, A, q, a, a4, m } from "./index-BAlLDjSl.js";
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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "04067659-e2ed-4bef-af64-6cceeb9edaaf";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-04067659-e2ed-4bef-af64-6cceeb9edaaf";
    }
  } catch {}
})();
const H = "bwKU";
const $ = "Ut3D";
const W = "SJXD";
const Z = "p0dD";
const tt = "CUCH";
const et = "LfC9";
const nt = "lKVi";
const st = "udnK";
const ot = "yjjf";
const rt = "cqEj";
const ct = "Pc1V";

const l = {
  picker: H,
  searchFloating: $,
  searchInput: W,
  skinTonePopup: Z,
  skinVariantButton: tt,
  skinVariantImage: et,
  content: nt,
  categoryTitle: st,
  emojiGrid: ot,
  emojiButton: rt,
  noResults: ct,
};

const it = [
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
const B = "emoji-picker-recent";
const j = 32;

const lt = (t) => {
  try {
    return String.fromCodePoint(...t.split("-").map((e) => parseInt(e, 16)));
  } catch {
    return "";
  }
};

const C = (t) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${t.toLowerCase()}.png`;

const L = () => {
  try {
    const t = localStorage.getItem(B);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
};

const ut = (t) => {
  try {
    localStorage.setItem(B, JSON.stringify(t.slice(0, j)));
  } catch {}
};

const dt = (t) => {
  const e = [];
  const s = {};
  for (const [n, u] of Object.entries(t)) {
    s[n] = u.map((o) => {
      const d = Array.isArray(o.s) ? o.s : [o.s];

      const i = {
        unified: o.u,
        short_name: d[0],
        short_names: d,
        category: n,
        skin_variations: o.v,
      };

      e.push(i);
      return i;
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
        const o = await _(() => import("./emoji-data-C6Co3iuI.js"), []);

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
        .slice(0, j)
        .map((i) => t.find((y) => y.unified === i))
        .filter((i) => i !== undefined),
    [e, t]
  );

  const o = q((i) => {
    if (!n.current.includes(i)) {
      n.current.push(i);
    }
  }, []);

  const d = q(() => {
    if (n.current.length === 0) {
      return;
    }
    const i = L();
    const m = [...n.current];
    for (const f of i) {
      if (!m.includes(f)) {
        m.push(f);
      }
    }
    ut(m.slice(0, j));
    s(m.slice(0, j));
    n.current = [];
  }, []);

  return { recentEmojis: u, addRecentEmoji: o, flushRecentEmojis: d };
};

const pt = ({ emoji, onClick }) =>
  a("button", {
    className: l.emojiButton,
    onClick: onClick,
    children: a("img", {
      src: C(emoji.unified),
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

  return a("div", {
    ref: n,
    className: l.skinTonePopup,
    style: { left: popup.x, top: popup.y },
    children: u.map((o) =>
      a(
        "button",
        {
          className: l.skinVariantButton,
          onClick: () => onSelect(o, popup.emoji.short_name),
          children: a("img", {
            src: C(o),
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
  a("div", {
    className: l.emojiGrid,
    children: emojis.map((s) =>
      a(pt, { emoji: s, onClick: (n) => onEmojiClick(s, n) }, s.unified)
    ),
  });

const ht = ({ name, emojis, onEmojiClick, sectionRef }) =>
  a("div", {
    ref: sectionRef,
    className: l.categorySection,
    children: [
      a("div", { className: l.categoryTitle, children: name }),
      a(V, { emojis: emojis, onEmojiClick: onEmojiClick }),
    ],
  });

const yt = ({ value, onChange, placeholder = "Search emojis..." }) =>
  a("div", {
    className: l.searchFloating,
    children: a("input", {
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
  const [i, y] = d("");
  const [m, f] = d(null);
  const U = A(null);
  const N = A(null);
  const G = A({});
  const { all, byCategory, isLoading } = mt();
  const { recentEmojis, addRecentEmoji, flushRecentEmojis } = ft(all);
  y(
    () => () => {
      flushRecentEmojis();
      onClose?.();
    },
    [flushRecentEmojis, onClose]
  );

  const I = T(() => {
    if (!i.trim()) {
      return null;
    }
    const c = i.toLowerCase();
    return all
      .filter(
        (a) =>
          !excludeCategories.includes(a.category) &&
          a.short_names.some((g) => g.toLowerCase().includes(c))
      )
      .slice(0, 100);
  }, [i, all, excludeCategories]);

  const q = T(() => {
    if (o === "apple") {
      const c = [];

      if (recentEmojis.length > 0) {
        c.push({ id: "recent", name: "Recent", emojis: recentEmojis });
      }

      for (const a of it) {
        if (excludeCategories.includes(a)) {
          continue;
        }
        const g = byCategory[a] || [];

        if (g.length !== 0) {
          c.push({ id: a, name: a.split(" & ")[0], emojis: g });
        }
      }
      return c;
    }
    return [];
  }, [o, recentEmojis, byCategory, excludeCategories]);

  const w = q((c, a) => {
    if (O(c).length > 1) {
      const a_currentTarget = a.currentTarget;
      const S = N.current?.getBoundingClientRect();
      const T = a_currentTarget.getBoundingClientRect();
      if (S) {
        const Q = T.left - S.left + T.width / 2;
        const X = T.top - S.top - 60;
        f({ emoji: c, x: Q, y: X });
      }
      return;
    }
    A(c.unified, c.short_name);
  }, []);

  const A = q(
    (c, a) => {
      addRecentEmoji(c);
      f(null);
      onEmojiSelect({ unified: c, emoji: lt(c), name: a, imageUrl: C(c) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const J = () =>
    isLoading
      ? a(a4, {})
      : i && I
      ? I.length === 0
        ? a("div", { className: l.noResults, children: "No emojis found" })
        : a(V, { emojis: I, onEmojiClick: w })
      : a(m, {
          children: q.map((c) =>
            a(
              ht,
              {
                name: c.name,
                emojis: c.emojis,
                onEmojiClick: w,
                sectionRef: (a) => {
                  G.current[c.id] = a;
                },
              },
              c.id
            )
          ),
        });

  return a("div", {
    className: l.picker,
    style: { width: width, height: height },
    ref: N,
    children: [
      m && a(gt, { popup: m, onSelect: A, onClose: () => f(null) }),
      a("div", { className: l.content, ref: U, children: J() }),
      a(yt, { value: i, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
