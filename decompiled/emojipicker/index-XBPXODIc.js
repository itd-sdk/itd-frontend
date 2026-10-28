import { d, h, af, T, A as A_1, q, u, O, S } from "./index-AoERIL5v.js";
const W = "Yq7e";
const $ = "M7Fy";
const H = "G0X8";
const Z = "WCmL";
const tt = "ojB8";
const nt = "JTD7";
const et = "u0bO";
const st = "jvmm";
const ot = "Cdta";
const ct = "PiMU";
const rt = "FzXX";

const l = {
  picker: W,
  searchFloating: $,
  searchInput: H,
  skinTonePopup: Z,
  skinVariantButton: tt,
  skinVariantImage: nt,
  content: et,
  categoryTitle: st,
  emojiGrid: ot,
  emojiButton: ct,
  noResults: rt,
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
const L = "emoji-picker-recent";
const E = 32;

const lt = (t) => {
  try {
    return String.fromCodePoint(...t.split("-").map((n) => parseInt(n, 16)));
  } catch {
    return "";
  }
};

const F = (t) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${t.toLowerCase()}.png`;

const A = () => {
  try {
    const t = localStorage.getItem(L);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
};

const ut = (t) => {
  try {
    localStorage.setItem(L, JSON.stringify(t.slice(0, E)));
  } catch {}
};

const mt = (t) => {
  const n = [];
  const s = {};
  for (const [e, u] of Object.entries(t)) {
    s[e] = u.map((o) => {
      const m = Array.isArray(o.s) ? o.s : [o.s];

      const i = {
        unified: o.u,
        short_name: m[0],
        short_names: m,
        category: e,
        skin_variations: o.v,
      };

      n.push(i);
      return i;
    });
  }
  return { all: n, byCategory: s };
};

let j = null;

const dt = () => {
  const [t, n] = d(j);
  const [s, e] = d(!j);

  h(() => {
    if (j) {
      return;
    }
    (async () => {
      try {
        const o = await af(() => import("./emoji-data-DrtcpqC0.js"), []);

        const m = mt(o.default);
        j = m;
        n(m);
      } catch (o) {
        console.error("Failed to load emoji data:", o);
      } finally {
        e(false);
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

const pt = (t) => {
  const [n, s] = d([]);
  const e = A_1([]);
  h(() => {
    s(A());
  }, []);

  const u = T(
    () =>
      n
        .slice(0, E)
        .map((i) => t.find((y) => y.unified === i))
        .filter((i) => i !== undefined),
    [n, t]
  );

  const o = q((i) => {
    if (!e.current.includes(i)) {
      e.current.push(i);
    }
  }, []);

  const m = q(() => {
    if (e.current.length === 0) {
      return;
    }
    const i = A();
    const d = [...e.current];
    for (const p of i) {
      if (!d.includes(p)) {
        d.push(p);
      }
    }
    ut(d.slice(0, E));
    s(d.slice(0, E));
    e.current = [];
  }, []);

  return { recentEmojis: u, addRecentEmoji: o, flushRecentEmojis: m };
};

const ft = ({ emoji, onClick }) =>
  u("button", {
    className: l.emojiButton,
    onClick: onClick,
    children: u("img", {
      src: F(emoji.unified),
      alt: emoji.short_name,
      loading: "lazy",
    }),
  });

const V = (t) => {
  const n = [t.unified];
  if (t.skin_variations) {
    for (const s of at.slice(1)) {
      const e = t.skin_variations[s];

      if (e) {
        n.push(e);
      }
    }
  }
  return n;
};

const ht = ({ popup, onSelect, onClose }) => {
  const e = A_1(null);
  const u = V(popup.emoji);

  h(() => {
    const o = (m) => {
      if (e.current && !e.current.contains(m.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", o);

    return () => document.removeEventListener("mousedown", o);
  }, [onClose]);

  return u("div", {
    ref: e,
    className: l.skinTonePopup,
    style: { left: popup.x, top: popup.y },
    children: u.map((o) =>
      u(
        "button",
        {
          className: l.skinVariantButton,
          onClick: () => onSelect(o, popup.emoji.short_name),
          children: u("img", {
            src: F(o),
            alt: "",
            className: l.skinVariantImage,
          }),
        },
        o
      )
    ),
  });
};

const w = ({ emojis, onEmojiClick }) =>
  u("div", {
    className: l.emojiGrid,
    children: emojis.map((s) =>
      u(ft, { emoji: s, onClick: (e) => onEmojiClick(s, e) }, s.unified)
    ),
  });

const gt = ({ name, emojis, onEmojiClick, sectionRef }) =>
  u("div", {
    ref: sectionRef,
    className: l.categorySection,
    children: [
      u("div", { className: l.categoryTitle, children: name }),
      u(w, { emojis: emojis, onEmojiClick: onEmojiClick }),
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
      onInput: (e) => onChange(e.target.value),
    }),
  });

export const EmojiPicker = ({
  onEmojiSelect,
  onClose,
  width = 280,
  height = 380,
  excludeCategories = [],
}) => {
  const [o, m] = d("apple");
  const [i, y] = d("");
  const [d, p] = d(null);
  const G = A_1(null);
  const I = A_1(null);
  const U = A_1({});
  const { all, byCategory, isLoading } = dt();
  const { recentEmojis, addRecentEmoji, flushRecentEmojis } = pt(all);
  h(
    () => () => {
      flushRecentEmojis();
      onClose?.();
    },
    [flushRecentEmojis, onClose]
  );

  const N = T(() => {
    if (!i.trim()) {
      return null;
    }
    const r = i.toLowerCase();
    return all
      .filter(
        (a) =>
          !excludeCategories.includes(a.category) &&
          a.short_names.some((h) => h.toLowerCase().includes(r))
      )
      .slice(0, 100);
  }, [i, all, excludeCategories]);

  const X = T(() => {
    if (o === "apple") {
      const r = [];

      if (recentEmojis.length > 0) {
        r.push({ id: "recent", name: "Recent", emojis: recentEmojis });
      }

      for (const a of it) {
        if (excludeCategories.includes(a)) {
          continue;
        }
        const h = byCategory[a] || [];

        if (h.length !== 0) {
          r.push({ id: a, name: a.split(" & ")[0], emojis: h });
        }
      }
      return r;
    }
    return [];
  }, [o, recentEmojis, byCategory, excludeCategories]);

  const D = q((r, a) => {
    if (V(r).length > 1) {
      const a_currentTarget = a.currentTarget;
      const S = I.current?.getBoundingClientRect();
      const T = a_currentTarget.getBoundingClientRect();
      if (S) {
        const z = T.left - S.left + T.width / 2;
        const K = T.top - S.top - 60;
        p({ emoji: r, x: z, y: K });
      }
      return;
    }
    O(r.unified, r.short_name);
  }, []);

  const O = q(
    (r, a) => {
      addRecentEmoji(r);
      p(null);
      onEmojiSelect({ unified: r, emoji: lt(r), name: a, imageUrl: F(r) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const q = () =>
    isLoading
      ? excludeCategories(O, {})
      : i && N
      ? N.length === 0
        ? excludeCategories("div", {
            className: l.noResults,
            children: "No emojis found",
          })
        : excludeCategories(w, { emojis: N, onEmojiClick: D })
      : excludeCategories(S, {
          children: X.map((r) =>
            excludeCategories(
              gt,
              {
                name: r.name,
                emojis: r.emojis,
                onEmojiClick: D,
                sectionRef: (a) => {
                  U.current[r.id] = a;
                },
              },
              r.id
            )
          ),
        });

  return excludeCategories("div", {
    className: l.picker,
    style: { width: width, height: height },
    ref: I,
    children: [
      d &&
        excludeCategories(ht, {
          popup: d,
          onSelect: O,
          onClose: () => p(null),
        }),
      excludeCategories("div", { className: l.content, ref: G, children: q() }),
      excludeCategories(yt, { value: i, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
