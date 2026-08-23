import { d, A, y, y as y_1, u, k } from "./index-pEgBAsWz.js";
(() => {
  try {
    const a =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "1.1.2" };
    const h = new a.Error().stack;

    if (h) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[h] = "8cb6b02c-1e9d-4f22-aa63-fcf0d580e444";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-8cb6b02c-1e9d-4f22-aa63-fcf0d580e444";
    }
  } catch {}
})();
const G = "qHCQ";
const I = "QKht";
const X = "BiLr";
const J = "YQm0";
const ee = "p9c1";
const te = "I29b";
const ne = "SlEw";
const se = "YHbB";
const oe = "HHZh";
const re = "cFsD";
const ce = "feAT";
const ie = "UVeM";
const ae = "RTEL";
const le = "cw43";
const de = "UzGn";
const fe = "sOnl";
const he = "wtRl";
const ue = "fNSc";
const me = "S3CS";
const pe = "lrNe";
const ve = "SYai";
const be = "efPW";
const ge = "SCoq";
const we = "ZXTh";

const t = {
  poll: G,
  disabled: I,
  header: X,
  title: J,
  meta: ee,
  voteCount: te,
  options: ne,
  option: se,
  votingOption: oe,
  preselected: re,
  optionContent: ce,
  voted: ie,
  optionProgressWrapper: ae,
  optionProgress: le,
  optionContentInverted: de,
  optionText: fe,
  optionPercent: he,
  optionProgressSimple: ue,
  checkmark: me,
  checkbox: pe,
  checkboxChecked: ve,
  submitBtn: be,
  footer: ge,
  revoteBtn: we,
};

export function Poll({
  title,
  options,
  totalVotes,
  voted = false,
  selectedOptionId = null,
  selectedOptionIds = [],
  multipleChoice = false,
  onVote,
  onVoteMultiple,
  className,
  disabled = false,
}) {
  const [l, x] = voted(voted);

  const [i, u] = voted(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, N] = voted(totalVotes);
  const [L, k] = voted(options);
  const [R, y] = voted(voted);
  const [S, C] = voted(false);
  const [_, E] = voted(new Map());
  const m = A(new Map());

  const V = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    k(options);
    N(totalVotes);
    x(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !S) {
      y(true);
    }
  }, [V, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      E(e);
    }
  }, [voted]);

  const T = l && !S;

  const Y = y_1(
    (e) => {
      if (disabled || T) {
        return;
      }
      if (multipleChoice) {
        u((o) => {
          const c = new Set(o);

          if (c.has(e)) {
            c.delete(e);
          } else {
            c.add(e);
          }

          return c;
        });
        return;
      }
      const r = i.size > 0 ? Array.from(i)[0] : null;

      k((o) =>
        o.map((c) =>
          c.id === e
            ? { ...c, votes: c.votes + 1 }
            : c.id === r
            ? { ...c, votes: Math.max(0, c.votes - 1) }
            : c
        )
      );

      if (!l) {
        N((o) => o + 1);
      }

      u(new Set([e]));
      x(true);
      C(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            M(o);
          }
        });
      }

      z();
    },
    [disabled, T, multipleChoice, i, l, onVote]
  );

  const A = y_1(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    k((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!l) {
      N((n) => n + 1);
    }

    x(true);
    C(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          M(n);
        }
      });
    }

    z();
  }, [i, l, onVoteMultiple]);

  const M = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    k(r);
    N(e.totalVotes ?? 0);

    if (e.votedOptionIds && e.votedOptionIds.length > 0) {
      u(new Set(e.votedOptionIds));
    }
  };

  const z = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      E(e);

      requestAnimationFrame(() => {
        y(true);
      });
    });
  };

  const F = () => {
    C(true);
    y(false);
  };

  const O = () => {
    C(false);
    y(true);
  };

  const Q = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const j = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const K = (e) => {
    e.stopPropagation();
  };

  return u("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: K,
    children: [
      u("div", {
        className: t.header,
        children: [
          u("span", { className: t.title, children: title }),
          l &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: j($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: L.map((e) => {
          const r = Q(e.votes);
          const n = i.has(e.id);
          const o = R ? `${r}%` : "0%";
          const c = _.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return T
            ? u(
                "div",
                {
                  ref: (g) => {
                    if (g) {
                      m.current.set(e.id, g);
                    }
                  },
                  className: `${t.option} ${t.voted} ${n ? t.selected : ""}`,
                  children: [
                    u("div", {
                      className: t.optionContent,
                      children: [
                        u("span", {
                          className: t.optionText,
                          children: [
                            n &&
                              u("span", {
                                className: t.checkmark,
                                children: "✓ ",
                              }),
                            e.text,
                          ],
                        }),
                        u("span", {
                          className: t.optionPercent,
                          children: [r, "%"],
                        }),
                      ],
                    }),
                    n &&
                      u("div", {
                        className: t.optionProgressWrapper,
                        style: { width: o },
                        children: [
                          u("div", { className: t.optionProgress }),
                          u("div", {
                            className: t.optionContentInverted,
                            style: { width: `${c}px` },
                            children: [
                              u("span", {
                                className: t.optionText,
                                children: [
                                  u("span", {
                                    className: t.checkmark,
                                    children: "✓ ",
                                  }),
                                  e.text,
                                ],
                              }),
                              u("span", {
                                className: t.optionPercent,
                                children: [r, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !n &&
                      u("div", {
                        className: t.optionProgressSimple,
                        style: { width: o },
                      }),
                  ],
                },
                e.id
              )
            : u(
                "div",
                {
                  ref: (g) => {
                    if (g) {
                      m.current.set(e.id, g);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => Y(e.id),
                  children: u("div", {
                    className: t.optionContent,
                    children: [
                      multipleChoice &&
                        u("span", {
                          className: `${t.checkbox} ${
                            n ? t.checkboxChecked : ""
                          }`,
                          children: n && "✓",
                        }),
                      u("span", { className: t.optionText, children: e.text }),
                    ],
                  }),
                },
                e.id
              );
        }),
      }),
      multipleChoice &&
        !l &&
        i.size > 0 &&
        !S &&
        u("button", {
          className: t.submitBtn,
          onClick: A,
          type: "button",
          children: "Проголосовать",
        }),
      l &&
        u("div", {
          className: t.footer,
          children: S
            ? u(k, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: A,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  u("button", {
                    className: t.revoteBtn,
                    onClick: O,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : u("button", {
                className: t.revoteBtn,
                onClick: F,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
