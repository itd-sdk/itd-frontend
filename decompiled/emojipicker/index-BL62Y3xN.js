import { d, y, _, T, A, q, a, S, l as l_1 } from "./index-DDCL-vHK.js";
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
    t.SENTRY_RELEASE = { id: "1.1.0" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "9ec0a52d-f77b-4997-9ea4-2fdac5290a41";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-9ec0a52d-f77b-4997-9ea4-2fdac5290a41";
    }
  } catch {}
})();
const Z = "wY1Z";
const $ = "mRsC";
const H = "OoRd";
const W = "XTrB";
const tt = "Cqwc";
const et = "tLM7";
const nt = "PQ2T";
const st = "DGVI";
const ot = "O60S";
const rt = "Rxgc";
const ct = "xRfs";

const l = {
  picker: Z,
  searchFloating: $,
  searchInput: H,
  skinTonePopup: W,
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
const L = "emoji-picker-recent";
const R = 32;

const lt = (t) => {
  try {
    return String.fromCodePoint(...t.split("-").map((e) => parseInt(e, 16)));
  } catch {
    return "";
  }
};

const N = (t) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${t.toLowerCase()}.png`;

const B = () => {
  try {
    const t = localStorage.getItem(L);
    return t ? JSON.parse(t) : [];
  } catch {
    return [];
  }
};

const ut = (t) => {
  try {
    localStorage.setItem(L, JSON.stringify(t.slice(0, R)));
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
        const o = await _(() => import("./emoji-data-uEeLNYk3.js"), []);

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
    s(B());
  }, []);

  const u = T(
    () =>
      e
        .slice(0, R)
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
    ut(m.slice(0, R));
    s(m.slice(0, R));
    n.current = [];
  }, []);

  return { recentEmojis: u, addRecentEmoji: o, flushRecentEmojis: d };
};

const pt = ({ emoji, onClick }) =>
  a("button", {
    className: l.emojiButton,
    onClick: onClick,
    children: a("img", {
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

  const I = recentEmojis(() => {
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

  const x = recentEmojis(() => {
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

  const w = isLoading((c, a) => {
    if (O(c).length > 1) {
      const a_currentTarget = a.currentTarget;
      const S = C.current?.getBoundingClientRect();
      const b = a_currentTarget.getBoundingClientRect();
      if (S) {
        const Y = b.left - S.left + b.width / 2;
        const J = b.top - S.top - 60;
        f({ emoji: c, x: Y, y: J });
      }
      return;
    }
    A(c.unified, c.short_name);
  }, []);

  const A = isLoading(
    (c, a) => {
      addRecentEmoji(c);
      f(null);
      onEmojiSelect({ unified: c, emoji: lt(c), name: a, imageUrl: N(c) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const M = () =>
    isLoading
      ? a(S, {})
      : i && I
      ? I.length === 0
        ? a("div", { className: l.noResults, children: "No emojis found" })
        : a(V, { emojis: I, onEmojiClick: w })
      : a(l_1, {
          children: x.map((c) =>
            a(
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

  return a("div", {
    className: l.picker,
    style: { width: width, height: height },
    ref: C,
    children: [
      m && a(gt, { popup: m, onSelect: A, onClose: () => f(null) }),
      a("div", { className: l.content, ref: G, children: M() }),
      a(yt, { value: i, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
