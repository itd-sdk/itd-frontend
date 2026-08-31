import { d, A as h_1, l as l_1, T, A, q, u, a5, S } from "./index-ORJLmKGS.js";
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
    t.SENTRY_RELEASE = { id: "1.1.3" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "ba41a633-3dcf-48ef-9441-1b0c3ae64dcc";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-ba41a633-3dcf-48ef-9441-1b0c3ae64dcc";
    }
  } catch {}
})();
const H = "SVca";
const W = "m59l";
const $ = "pzoV";
const Z = "K2zG";
const tt = "Yz0M";
const et = "pHaU";
const nt = "LW6J";
const st = "e7OU";
const ot = "kp1R";
const ct = "IssC";
const rt = "eEgX";

const l = {
  picker: H,
  searchFloating: W,
  searchInput: $,
  skinTonePopup: Z,
  skinVariantButton: tt,
  skinVariantImage: et,
  content: nt,
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
const B = "emoji-picker-recent";
const j = 32;

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

  h_1(() => {
    if (E) {
      return;
    }
    (async () => {
      try {
        const o = await l_1(() => import("./emoji-data-B4ma8jdc.js"), []);

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
  h_1(() => {
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

  const I = T(() => {
    if (!i.trim()) {
      return null;
    }
    const r = i.toLowerCase();
    return all
      .filter(
        (a) =>
          !excludeCategories.includes(a.category) &&
          a.short_names.some((g) => g.toLowerCase().includes(r))
      )
      .slice(0, 100);
  }, [i, all, excludeCategories]);

  const J = T(() => {
    if (o === "apple") {
      const r = [];

      if (recentEmojis.length > 0) {
        r.push({ id: "recent", name: "Recent", emojis: recentEmojis });
      }

      for (const a of it) {
        if (excludeCategories.includes(a)) {
          continue;
        }
        const g = byCategory[a] || [];

        if (g.length !== 0) {
          r.push({ id: a, name: a.split(" & ")[0], emojis: g });
        }
      }
      return r;
    }
    return [];
  }, [o, recentEmojis, byCategory, excludeCategories]);

  const w = q((r, a) => {
    if (O(r).length > 1) {
      const a_currentTarget = a.currentTarget;
      const S = C.current?.getBoundingClientRect();
      const T = a_currentTarget.getBoundingClientRect();
      if (S) {
        const Y = T.left - S.left + T.width / 2;
        const q = T.top - S.top - 60;
        f({ emoji: r, x: Y, y: q });
      }
      return;
    }
    A(r.unified, r.short_name);
  }, []);

  const A = q(
    (r, a) => {
      addRecentEmoji(r);
      f(null);
      onEmojiSelect({ unified: r, emoji: lt(r), name: a, imageUrl: N(r) });
    },
    [onEmojiSelect, addRecentEmoji]
  );

  const K = () =>
    isLoading
      ? excludeCategories(a5, {})
      : i && I
      ? I.length === 0
        ? excludeCategories("div", {
            className: l.noResults,
            children: "No emojis found",
          })
        : excludeCategories(V, { emojis: I, onEmojiClick: w })
      : excludeCategories(S, {
          children: J.map((r) =>
            excludeCategories(
              ht,
              {
                name: r.name,
                emojis: r.emojis,
                onEmojiClick: w,
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
    ref: C,
    children: [
      m &&
        excludeCategories(gt, {
          popup: m,
          onSelect: A,
          onClose: () => f(null),
        }),
      excludeCategories("div", { className: l.content, ref: G, children: K() }),
      excludeCategories(yt, { value: i, onChange: y }),
    ],
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
