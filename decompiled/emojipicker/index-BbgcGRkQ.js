import { d, y, _, T, A, q, a, a4, m } from "./index-CFv_0Hh6.js";
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
      t._sentryDebugIds[e] = "b55fb8a4-270b-423e-a567-d91df2678112";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-b55fb8a4-270b-423e-a567-d91df2678112";
    }
  } catch {}
})();
const z = "t1YP";
const W = "WYQf";
const Z = "sVIa";
const $ = "QgBe";
const tt = "HDng";
const et = "vHUk";
const nt = "Edap";
const st = "NZkP";
const ot = "jXHg";
const rt = "Xal7";
const it = "uPFM";

const l = {
  picker: z,
  searchFloating: W,
  searchInput: Z,
  skinTonePopup: $,
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
const L = "emoji-picker-recent";
const k = 32;

const lt = (t) => {
  try {
    return String.fromCodePoint(...t.split("-").map((e) => parseInt(e, 16)));
  } catch {
    return "";
  }
};

const S = (t) =>
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
    localStorage.setItem(L, JSON.stringify(t.slice(0, k)));
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
        const o = await _(() => import("./emoji-data-ClSjx_mk.js"), []);

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
    const c = B();
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
  a("button", {
    className: l.emojiButton,
    onClick: onClick,
    children: a("img", {
      src: S(emoji.unified),
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
            src: S(o),
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

  const I = T(() => {
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

  const Y = T(() => {
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

  const w = q((i, a) => {
    if (O(i).length > 1) {
      const a_currentTarget = a.currentTarget;
      const N = C.current?.getBoundingClientRect();
      const T = a_currentTarget.getBoundingClientRect();
      if (N) {
        const X = T.left - N.left + T.width / 2;
        const q = T.top - N.top - 60;
        f({ emoji: i, x: X, y: q });
      }
      return;
    }
    A(i.unified, i.short_name);
  }, []);

  const A = q(
    (i, a) => {
      addRecentEmoji(i);
      f(null);
      onEmojiSelect({ unified: i, emoji: lt(i), name: a, imageUrl: S(i) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const H = () =>
    isLoading
      ? a(a4, {})
      : c && I
      ? I.length === 0
        ? a("div", { className: l.noResults, children: "No emojis found" })
        : a(V, { emojis: I, onEmojiClick: w })
      : a(m, {
          children: Y.map((i) =>
            a(
              ht,
              {
                name: i.name,
                emojis: i.emojis,
                onEmojiClick: w,
                sectionRef: (a) => {
                  U.current[i.id] = a;
                },
              },
              i.id
            )
          ),
        });

  return a("div", {
    className: l.picker,
    style: { width: width, height: height },
    ref: C,
    children: [
      m && a(gt, { popup: m, onSelect: A, onClose: () => f(null) }),
      a("div", { className: l.content, ref: G, children: H() }),
      a(yt, { value: c, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
