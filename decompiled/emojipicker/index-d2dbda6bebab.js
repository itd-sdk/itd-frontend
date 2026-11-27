import {
  d,
  h,
  bg,
  a6,
  A as A_1,
  bI as q_1,
  bH,
  bI,
  u,
  ah,
  S,
} from "./index-4a2211963806.js";

const ot = "jIb5";
const it = "bMMm";
const rt = "ITtk";
const at = "RKkN";
const ct = "OXqt";
const lt = "O0eS";
const ut = "xFqT";
const mt = "V3jN";
const dt = "qytG";
const ht = "yRUW";
const ft = "VuBG";
const pt = "B0HS";

const m = {
  picker: ot,
  nativeEmoji: it,
  searchFloating: rt,
  searchInput: at,
  skinTonePopup: ct,
  skinVariantButton: lt,
  skinVariantImage: ut,
  content: mt,
  categoryTitle: dt,
  emojiGrid: ht,
  emojiButton: ft,
  noResults: pt,
};

const gt = [
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

const yt = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const x = "emoji-picker-recent";
const j = 32;

const N = (t) => {
  try {
    return String.fromCodePoint(...t.split("-").map((e) => parseInt(e, 16)));
  } catch {
    return "";
  }
};

const P = (t) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${t.toLowerCase()}.png`;

const K = (t) => (t ? `${x}:${encodeURIComponent(t)}` : x);

const U = (t) => {
  try {
    const e = localStorage.getItem(K(t));
    const n = e ? JSON.parse(e) : [];
    return Array.isArray(n)
      ? n
          .filter(
            (o) =>
              typeof o == "string" &&
              /^[0-9a-f]{1,6}(?:-[0-9a-f]{1,6}){0,15}$/i.test(o)
          )
          .slice(0, j)
      : [];
  } catch {
    return [];
  }
};

const Et = (t, e) => {
  try {
    localStorage.setItem(K(e), JSON.stringify(t.slice(0, j)));
  } catch {}
};

const vt = (t, e) => {
  const n = [];
  const o = {};
  for (const [i, d] of Object.entries(t)) {
    o[i] = d.map((r) => {
      const u = Array.isArray(r.s) ? r.s : [r.s];

      const c = {
        unified: r.u,
        short_name: e[r.u]?.[0] ?? u[0],
        short_names: [...u, ...(e[r.u] ?? [])],
        category: i,
        skin_variations: r.v,
      };

      n.push(c);
      return c;
    });
  }
  return { all: n, byCategory: o };
};

let k = null;

const jt = () => {
  const [t, e] = d(k);
  const [n, o] = d(!k);

  h(() => {
    if (k) {
      return;
    }
    (async () => {
      try {
        const [d, r] = await Promise.all([
          bg(() => import("./emoji-data-DrtcpqC0.js"), []),
          bg(() => import("./emoji-ru-C3Oi2iH3.js"), []),
        ]);

        const u = vt(d.default, r.default);
        k = u;
        e(u);
      } catch (d) {
        console.error("Failed to load emoji data:", d);
      } finally {
        o(false);
      }
    })();
  }, []);

  return a6(
    () => ({
      all: t?.all ?? [],
      byCategory: t?.byCategory ?? {},
      isLoading: n,
    }),
    [t, n]
  );
};

const kt = (t, e) => {
  const [n, o] = d([]);
  const i = A_1({ scope: e, items: [] });
  h(() => {
    o(U(e));
  }, [e]);

  const d = a6(
    () =>
      n
        .slice(0, j)
        .map((c) => {
          const h = t.find(
            (f) =>
              f.unified === c ||
              Object.values(f.skin_variations ?? {}).includes(c)
          );
          return (
            h &&
            (h.unified === c
              ? h
              : { ...h, unified: c, skin_variations: undefined })
          );
        })
        .filter((c) => c !== undefined),
    [n, t]
  );

  const r = q_1(
    (c) => {
      if (i.current.scope !== e) {
        i.current = { scope: e, items: [] };
      }

      if (!i.current.items.includes(c)) {
        i.current.items.unshift(c);
      }
    },
    [e]
  );

  const u = q_1(() => {
    if (i.current.scope !== e || i.current.items.length === 0) {
      return;
    }
    const c = U(e);
    const f = [...i.current.items];
    for (const y of c) {
      if (!f.includes(y)) {
        f.push(y);
      }
    }
    Et(f.slice(0, j), e);
    o(f.slice(0, j));
    i.current = { scope: e, items: [] };
  }, [e]);

  return { recentEmojis: d, addRecentEmoji: r, flushRecentEmojis: u };
};

const A = bH(false);

const Rt = ({ emoji, onClick }) => {
  const n = bI(A);
  return u("button", {
    type: "button",
    className: m.emojiButton,
    onClick: onClick,
    "aria-label": emoji.short_name,
    title: emoji.short_name,
    children: n
      ? u("span", {
          className: m.nativeEmoji,
          "aria-hidden": "true",
          children: N(emoji.unified),
        })
      : u("img", {
          src: P(emoji.unified),
          alt: emoji.short_name,
          loading: "lazy",
        }),
  });
};

const $ = (t) => {
  const e = [t.unified];
  if (t.skin_variations) {
    for (const n of yt.slice(1)) {
      const o = t.skin_variations[n];

      if (o) {
        e.push(o);
      }
    }
  }
  return e;
};

const _t = ({ popup, onSelect, onClose }) => {
  const o = bI(A);
  const i = A_1(null);
  const d = $(popup.emoji);

  h(() => {
    const r = (u) => {
      if (i.current && !i.current.contains(u.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", r);

    return () => document.removeEventListener("mousedown", r);
  }, [onClose]);

  return u("div", {
    ref: i,
    className: m.skinTonePopup,
    style: { left: popup.x, top: popup.y },
    children: d.map((r, u) =>
      u(
        "button",
        {
          type: "button",
          "aria-label": [
            "Без оттенка кожи",
            "Светлый тон кожи",
            "Умеренно светлый тон кожи",
            "Средний тон кожи",
            "Умеренно тёмный тон кожи",
            "Тёмный тон кожи",
          ][u],
          className: m.skinVariantButton,
          onClick: () => onSelect(r, popup.emoji.short_name),
          children: o
            ? u("span", {
                className: m.nativeEmoji,
                "aria-hidden": "true",
                children: N(r),
              })
            : u("img", {
                src: P(r),
                alt: "",
                className: m.skinVariantImage,
              }),
        },
        r
      )
    ),
  });
};

const X = ({ emojis, onEmojiClick }) =>
  u("div", {
    className: m.emojiGrid,
    children: emojis.map((n) =>
      u(Rt, { emoji: n, onClick: (o) => onEmojiClick(n, o) }, n.unified)
    ),
  });

const Nt = ({ name, emojis, onEmojiClick, sectionRef }) =>
  u("div", {
    ref: sectionRef,
    className: m.categorySection,
    children: [
      u("div", { className: m.categoryTitle, children: name }),
      u(X, { emojis: emojis, onEmojiClick: onEmojiClick }),
    ],
  });

const bt = ({ value, onChange, placeholder = "Поиск эмодзи" }) =>
  u("div", {
    className: m.searchFloating,
    children: u("input", {
      type: "text",
      className: m.searchInput,
      placeholder: placeholder,
      "aria-label": placeholder,
      value: value,
      onInput: (o) => onChange(o.target.value),
    }),
  });

const St = {
  "Smileys & Emotion": "Смайлы и эмоции",
  "People & Body": "Люди и жесты",
  "Animals & Nature": "Животные и природа",
  "Food & Drink": "Еда и напитки",
  "Travel & Places": "Путешествия",
  Activities: "Занятия",
  Objects: "Предметы",
  Symbols: "Символы",
  Flags: "Флаги",
};

export const EmojiPicker = ({
  onEmojiSelect,
  onClose,
  width = 280,
  height = 380,
  excludeCategories = [],
  native = false,
  recentScope,
}) => {
  const [u, c] = native("apple");
  const [h, f] = native("");
  const [y, S] = native(null);
  const H = A_1(null);
  const O = A_1(null);
  const J = A_1({});
  const { all, byCategory, isLoading } = jt();
  const { recentEmojis, addRecentEmoji, flushRecentEmojis } = kt(
    all,
    recentScope
  );
  h(
    () => () => {
      flushRecentEmojis();
      onClose?.();
    },
    [flushRecentEmojis, onClose]
  );

  const C = a6(() => {
    if (!h.trim()) {
      return null;
    }
    const a = h.toLowerCase();
    return all
      .filter(
        (l) =>
          !excludeCategories.includes(l.category) &&
          (l.short_names.some((p) => p.toLowerCase().includes(a)) ||
            N(l.unified).includes(a))
      )
      .slice(0, 100);
  }, [h, all, excludeCategories]);

  const W = a6(() => {
    if (u === "apple") {
      const a = [];

      if (recentEmojis.length > 0) {
        a.push({ id: "recent", name: "Недавние", emojis: recentEmojis });
      }

      for (const l of gt) {
        if (excludeCategories.includes(l)) {
          continue;
        }
        const p = byCategory[l] || [];

        if (p.length !== 0) {
          a.push({ id: l, name: St[l] ?? l, emojis: p });
        }
      }
      return a;
    }
    return [];
  }, [u, recentEmojis, byCategory, excludeCategories]);

  const V = q_1((a, l) => {
    const p = $(a);
    if (p.length > 1) {
      const l_currentTarget = l.currentTarget;
      const E = O.current?.getBoundingClientRect();
      const F = l_currentTarget.getBoundingClientRect();
      if (E) {
        const G = p.length * 36 + (p.length - 1) * 4 + 16;

        const Z = Math.max(
          G / 2 + 4,
          Math.min(E.width - G / 2 - 4, F.left - E.left + F.width / 2)
        );

        const tt = Math.max(4, Math.min(E.height - 56, F.top - E.top - 60));
        S({ emoji: a, x: Z, y: tt });
      }
      return;
    }
    w(a.unified, a.short_name);
  }, []);

  const w = q_1(
    (a, l) => {
      addRecentEmoji(a);
      S(null);
      onEmojiSelect({
        unified: a,
        emoji: N(a),
        name: l,
        imageUrl: native ? "" : P(a),
      });
    },
    [onEmojiSelect, addRecentEmoji, native]
  );

  const z = () =>
    isLoading
      ? u(ah, {})
      : h && C
      ? C.length === 0
        ? u("div", {
            className: m.noResults,
            children: "Ничего не найдено",
          })
        : u(X, { emojis: C, onEmojiClick: V })
      : u(S, {
          children: W.map((a) =>
            u(
              Nt,
              {
                name: a.name,
                emojis: a.emojis,
                onEmojiClick: V,
                sectionRef: (l) => {
                  J.current[a.id] = l;
                },
              },
              a.id
            )
          ),
        });

  return u(A.Provider, {
    value: native,
    children: u("div", {
      className: m.picker,
      role: "dialog",
      "aria-label": "Выбор эмодзи",
      style: { width: width, height: height },
      ref: O,
      children: [
        y && u(_t, { popup: y, onSelect: w, onClose: () => S(null) }),
        u("div", { className: m.content, ref: H, children: z() }),
        u(bt, { value: h, onChange: f }),
      ],
    }),
  });
};

export { EmojiPicker as EmojiPicker, EmojiPicker as default };
