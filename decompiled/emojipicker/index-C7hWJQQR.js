import { d, A as h_1, l as l_1, a5, A, q, u, am, S } from "./index-D4QRo1-7.js";
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
      t._sentryDebugIds[e] = "0369e1fa-9619-470e-a349-de055403c944";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-0369e1fa-9619-470e-a349-de055403c944";
    }
  } catch {}
})();
const $ = "B4lV";
const H = "IuhF";
const W = "ObMp";
const Z = "nfvY";
const tt = "s34P";
const et = "bcPU";
const nt = "b51P";
const st = "a7dN";
const ot = "Yfch";
const rt = "Okap";
const ct = "NrDs";

const l = {
  picker: $,
  searchFloating: H,
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
const O = "emoji-picker-recent";
const j = 32;

const lt = (t) => {
  try {
    return String.fromCodePoint(...t.split("-").map((e) => parseInt(e, 16)));
  } catch {
    return "";
  }
};

const T = (t) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${t.toLowerCase()}.png`;

const B = () => {
  try {
    const t = localStorage.getItem(O);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
};

const ut = (t) => {
  try {
    localStorage.setItem(O, JSON.stringify(t.slice(0, j)));
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

  h_1(() => {
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

  return a5(
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
  h_1(() => {
    s(B());
  }, []);

  const u = a5(
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
    const i = B();
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
  u("button", {
    className: l.emojiButton,
    onClick: onClick,
    children: u("img", {
      src: T(emoji.unified),
      alt: emoji.short_name,
      loading: "lazy",
    }),
  });

const L = (t) => {
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
  const u = L(popup.emoji);

  h_1(() => {
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
            src: T(o),
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
  const [i, y] = d("");
  const [m, f] = d(null);
  const G = A(null);
  const C = A(null);
  const U = A({});
  const { all, byCategory, isLoading } = mt();
  const { recentEmojis, addRecentEmoji, flushRecentEmojis } = ft(all);
  h_1(
    () => () => {
      flushRecentEmojis();
      onClose?.();
    },
    [flushRecentEmojis, onClose]
  );

  const N = a5(() => {
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

  const M = a5(() => {
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
    if (L(c).length > 1) {
      const a_currentTarget = a.currentTarget;
      const b = C.current?.getBoundingClientRect();
      const S = a_currentTarget.getBoundingClientRect();
      if (b) {
        const K = S.left - b.left + S.width / 2;
        const Q = S.top - b.top - 60;
        f({ emoji: c, x: K, y: Q });
      }
      return;
    }
    A(c.unified, c.short_name);
  }, []);

  const A = q(
    (c, a) => {
      addRecentEmoji(c);
      f(null);
      onEmojiSelect({ unified: c, emoji: lt(c), name: a, imageUrl: T(c) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const q = () =>
    isLoading
      ? excludeCategories(am, {})
      : i && N
      ? N.length === 0
        ? excludeCategories("div", {
            className: l.noResults,
            children: "No emojis found",
          })
        : excludeCategories(V, { emojis: N, onEmojiClick: w })
      : excludeCategories(S, {
          children: M.map((c) =>
            excludeCategories(
              ht,
              {
                name: c.name,
                emojis: c.emojis,
                onEmojiClick: w,
                sectionRef: (a) => {
                  U.current[c.id] = a;
                },
              },
              c.id
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
          onSelect: A,
          onClose: () => f(null),
        }),
      excludeCategories("div", { className: l.content, ref: G, children: q() }),
      excludeCategories(yt, { value: i, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
