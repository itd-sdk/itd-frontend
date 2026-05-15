import { d, y, _, T, A as A_1, q, a, a3, m } from "./index-7xRaK15k.js";
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
      t._sentryDebugIds[e] = "24456e24-55b9-407a-9c3a-5a0c8230320e";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-24456e24-55b9-407a-9c3a-5a0c8230320e";
    }
  } catch {}
})();
const z = "HNj6";
const X = "Gic4";
const $ = "cNWB";
const Z = "teBL";
const tt = "d78V";
const et = "Wy2q";
const nt = "SwMN";
const st = "vQ0H";
const ot = "QTC6";
const rt = "LF3D";
const ct = "PlvN";

const l = {
  picker: z,
  searchFloating: X,
  searchInput: $,
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
const A = "emoji-picker-recent";
const j = 32;

const lt = (t) => {
  try {
    return String.fromCodePoint(...t.split("-").map((e) => parseInt(e, 16)));
  } catch {
    return "";
  }
};

const b = (t) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${t.toLowerCase()}.png`;

const L = () => {
  try {
    const t = localStorage.getItem(A);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
};

const ut = (t) => {
  try {
    localStorage.setItem(A, JSON.stringify(t.slice(0, j)));
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
  const n = A_1([]);
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
      src: b(emoji.unified),
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
  const n = A_1(null);
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
            src: b(o),
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
  const G = A_1(null);
  const C = A_1(null);
  const Q = A_1({});
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
      const I = C.current?.getBoundingClientRect();
      const S = a_currentTarget.getBoundingClientRect();
      if (I) {
        const J = S.left - I.left + S.width / 2;
        const K = S.top - I.top - 60;
        f({ emoji: c, x: J, y: K });
      }
      return;
    }
    B(c.unified, c.short_name);
  }, []);

  const B = q(
    (c, a) => {
      addRecentEmoji(c);
      f(null);
      onEmojiSelect({ unified: c, emoji: lt(c), name: a, imageUrl: b(c) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const M = () =>
    isLoading
      ? a(a3, {})
      : i && T
      ? T.length === 0
        ? a("div", { className: l.noResults, children: "No emojis found" })
        : a(V, { emojis: T, onEmojiClick: w })
      : a(m, {
          children: q.map((c) =>
            a(
              ht,
              {
                name: c.name,
                emojis: c.emojis,
                onEmojiClick: w,
                sectionRef: (a) => {
                  Q.current[c.id] = a;
                },
              },
              c.id
            )
          ),
        });

  return a("div", {
    className: l.picker,
    style: { width: width, height: height },
    ref: C,
    children: [
      m && a(gt, { popup: m, onSelect: B, onClose: () => f(null) }),
      a("div", { className: l.content, ref: G, children: M() }),
      a(yt, { value: i, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
