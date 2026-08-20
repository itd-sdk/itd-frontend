import { d, y, l as l_1, T, A, q, u, a5, T as T_1 } from "./index-DDTOXJaD.js";
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
      t._sentryDebugIds[e] = "5b1fdfbd-489d-496a-ab7f-97d9ef24188f";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-5b1fdfbd-489d-496a-ab7f-97d9ef24188f";
    }
  } catch {}
})();
const z = "jWhA";
const X = "iZxn";
const $ = "cDEV";
const H = "ga1B";
const tt = "ai7F";
const et = "Vsgu";
const nt = "RLJo";
const st = "n1mk";
const ot = "Z4eq";
const rt = "ge7I";
const it = "Wp27";

const l = {
  picker: z,
  searchFloating: X,
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
const L = "emoji-picker-recent";
const j = 32;

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
    localStorage.setItem(L, JSON.stringify(t.slice(0, j)));
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
    s(B());
  }, []);

  const u = T(
    () =>
      e
        .slice(0, j)
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

  const A = isLoading((i, a) => {
    if (O(i).length > 1) {
      const a_currentTarget = a.currentTarget;
      const T = C.current?.getBoundingClientRect();
      const N = a_currentTarget.getBoundingClientRect();
      if (T) {
        const M = N.left - T.left + N.width / 2;
        const Q = N.top - T.top - 60;
        f({ emoji: i, x: M, y: Q });
      }
      return;
    }
    w(i.unified, i.short_name);
  }, []);

  const w = isLoading(
    (i, a) => {
      addRecentEmoji(i);
      f(null);
      onEmojiSelect({ unified: i, emoji: lt(i), name: a, imageUrl: S(i) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const x = () =>
    isLoading
      ? excludeCategories(a5, {})
      : c && I
      ? I.length === 0
        ? excludeCategories("div", {
            className: l.noResults,
            children: "No emojis found",
          })
        : excludeCategories(V, { emojis: I, onEmojiClick: A })
      : excludeCategories(T_1, {
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
          onSelect: w,
          onClose: () => f(null),
        }),
      excludeCategories("div", { className: l.content, ref: G, children: x() }),
      excludeCategories(yt, { value: c, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
