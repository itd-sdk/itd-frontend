import { d, A, h, q, u, S } from "./index-AoERIL5v.js";
const Y = "u7tU";
const Z = "lqQP";
const _ = "et0G";
const I = "K0u1";
const ee = "RrKw";
const te = "CgRC";
const ne = "DTmM";
const se = "Enya";
const oe = "T3sH";
const re = "W6dS";
const ce = "cVL9";
const ie = "OscK";
const ae = "nyEb";
const le = "d3nT";
const de = "ukEp";
const he = "saND";
const fe = "u2Oj";
const ue = "gf2I";
const me = "S4a1";
const pe = "rPm0";
const ve = "PcqI";
const ge = "JJj6";
const Ne = "uQu1";
const ke = "VJKk";

const t = {
  poll: Y,
  disabled: Z,
  header: _,
  title: I,
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
  optionText: he,
  optionPercent: fe,
  optionProgressSimple: ue,
  checkmark: me,
  checkbox: pe,
  checkboxChecked: ve,
  submitBtn: ge,
  footer: Ne,
  revoteBtn: ke,
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
  const [a, S] = d(voted);

  const [i, h] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, g] = d(totalVotes);
  const [j, N] = d(options);
  const [O, k] = d(voted);
  const [P, w] = d(false);
  const [J, T] = d(new Map());
  const f = A(new Map());

  const L = options.map((e) => `${e.id}:${e.votes}`).join(",");

  h(() => {
    N(options);
    g(totalVotes);
    S(voted);

    if (selectedOptionIds.length > 0) {
      h(new Set(selectedOptionIds));
    } else {
      h(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !P) {
      k(true);
    }
  }, [L, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  h(() => {
    if (voted && f.current.size > 0) {
      const e = new Map();

      f.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      T(e);
    }
  }, [voted]);

  const y = a && !P;

  const R = q(
    (e) => {
      if (disabled || y) {
        return;
      }
      if (multipleChoice) {
        h((o) => {
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

      N((o) =>
        o.map((c) =>
          c.id === e
            ? { ...c, votes: c.votes + 1 }
            : c.id === r
            ? { ...c, votes: Math.max(0, c.votes - 1) }
            : c
        )
      );

      if (!a) {
        g((o) => o + 1);
      }

      h(new Set([e]));
      S(true);
      w(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            A(o);
          }
        });
      }

      q();
    },
    [disabled, y, multipleChoice, i, a, onVote]
  );

  const M = q(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    N((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!a) {
      g((n) => n + 1);
    }

    S(true);
    w(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          A(n);
        }
      });
    }

    q();
  }, [i, a, onVoteMultiple]);

  const A = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    N(r);
    g(e.totalVotes ?? 0);

    if (e.votedOptionIds && e.votedOptionIds.length > 0) {
      h(new Set(e.votedOptionIds));
    }
  };

  const q = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      f.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      T(e);

      requestAnimationFrame(() => {
        k(true);
      });
    });
  };

  const D = () => {
    w(true);
    k(false);
  };

  const F = () => {
    w(false);
    k(true);
  };

  const H = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const Q = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const G = (e) => {
    e.stopPropagation();
  };

  return selectedOptionId("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: G,
    children: [
      selectedOptionId("div", {
        className: t.header,
        children: [
          selectedOptionId("span", { className: t.title, children: title }),
          a &&
            selectedOptionId("div", {
              className: t.meta,
              children: selectedOptionId("span", {
                className: t.voteCount,
                children: Q($),
              }),
            }),
        ],
      }),
      selectedOptionId("div", {
        className: t.options,
        children: j.map((e) => {
          const r = H(e.votes);
          const n = i.has(e.id);
          const o = O ? `${r}%` : "0%";
          const c = J.get(e.id) || f.current.get(e.id)?.offsetWidth || 0;
          return y
            ? selectedOptionId(
                "div",
                {
                  ref: (v) => {
                    if (v) {
                      f.current.set(e.id, v);
                    }
                  },
                  className: `${t.option} ${t.voted} ${n ? t.selected : ""}`,
                  children: [
                    selectedOptionId("div", {
                      className: t.optionContent,
                      children: [
                        selectedOptionId("span", {
                          className: t.optionText,
                          children: [
                            n &&
                              selectedOptionId("span", {
                                className: t.checkmark,
                                children: "✓ ",
                              }),
                            e.text,
                          ],
                        }),
                        selectedOptionId("span", {
                          className: t.optionPercent,
                          children: [r, "%"],
                        }),
                      ],
                    }),
                    n &&
                      selectedOptionId("div", {
                        className: t.optionProgressWrapper,
                        style: { width: o },
                        children: [
                          selectedOptionId("div", {
                            className: t.optionProgress,
                          }),
                          selectedOptionId("div", {
                            className: t.optionContentInverted,
                            style: { width: `${c}px` },
                            children: [
                              selectedOptionId("span", {
                                className: t.optionText,
                                children: [
                                  selectedOptionId("span", {
                                    className: t.checkmark,
                                    children: "✓ ",
                                  }),
                                  e.text,
                                ],
                              }),
                              selectedOptionId("span", {
                                className: t.optionPercent,
                                children: [r, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !n &&
                      selectedOptionId("div", {
                        className: t.optionProgressSimple,
                        style: { width: o },
                      }),
                  ],
                },
                e.id
              )
            : selectedOptionId(
                "div",
                {
                  ref: (v) => {
                    if (v) {
                      f.current.set(e.id, v);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => R(e.id),
                  children: selectedOptionId("div", {
                    className: t.optionContent,
                    children: [
                      multipleChoice &&
                        selectedOptionId("span", {
                          className: `${t.checkbox} ${
                            n ? t.checkboxChecked : ""
                          }`,
                          children: n && "✓",
                        }),
                      selectedOptionId("span", {
                        className: t.optionText,
                        children: e.text,
                      }),
                    ],
                  }),
                },
                e.id
              );
        }),
      }),
      multipleChoice &&
        !a &&
        i.size > 0 &&
        !P &&
        selectedOptionId("button", {
          className: t.submitBtn,
          onClick: M,
          type: "button",
          children: "Проголосовать",
        }),
      a &&
        selectedOptionId("div", {
          className: t.footer,
          children: P
            ? selectedOptionId(S, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    selectedOptionId("button", {
                      className: t.submitBtn,
                      onClick: M,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  selectedOptionId("button", {
                    className: t.revoteBtn,
                    onClick: F,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : selectedOptionId("button", {
                className: t.revoteBtn,
                onClick: D,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
