import { d, A, h, q, u, S } from "./index-4cbec7521f6a.js";
const Z = "Mt78";
const J = "W0pC";
const _ = "CX4f";
const I = "Yx0R";
const ee = "kP6x";
const te = "MOIh";
const ne = "cq93";
const se = "lZGM";
const oe = "mp2G";
const re = "wiNr";
const ce = "DyXF";
const ie = "XBQO";
const ae = "Fgaz";
const le = "Ax09";
const de = "NwvI";
const he = "oapC";
const fe = "tEve";
const me = "hrLN";
const ue = "EutF";
const pe = "jUwM";
const ve = "O198";
const Ne = "r1oX";
const ge = "gFVm";
const ke = "nz0y";

const t = {
  poll: Z,
  disabled: J,
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
  optionProgressSimple: me,
  checkmark: ue,
  checkbox: pe,
  checkboxChecked: ve,
  submitBtn: Ne,
  footer: ge,
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

  const [$, N] = d(totalVotes);
  const [V, g] = d(options);
  const [X, k] = d(voted);
  const [w, x] = d(false);
  const [j, B] = d(new Map());
  const f = A(new Map());

  const L = options.map((e) => `${e.id}:${e.votes}`).join(",");

  h(() => {
    g(options);
    N(totalVotes);
    S(voted);

    if (selectedOptionIds.length > 0) {
      h(new Set(selectedOptionIds));
    } else {
      h(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !w) {
      k(true);
    }
  }, [L, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  h(() => {
    if (voted && f.current.size > 0) {
      const e = new Map();

      f.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      B(e);
    }
  }, [voted]);

  const y = a && !w;

  const G = title(
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

      g((o) =>
        o.map((c) =>
          c.id === e
            ? { ...c, votes: c.votes + 1 }
            : c.id === r
            ? { ...c, votes: Math.max(0, c.votes - 1) }
            : c
        )
      );

      if (!a) {
        N((o) => o + 1);
      }

      h(new Set([e]));
      S(true);
      x(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            A(o);
          }
        });
      }

      F();
    },
    [disabled, y, multipleChoice, i, a, onVote]
  );

  const z = title(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    g((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!a) {
      N((n) => n + 1);
    }

    S(true);
    x(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          A(n);
        }
      });
    }

    F();
  }, [i, a, onVoteMultiple]);

  const A = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    g(r);
    N(e.totalVotes ?? 0);

    if (e.votedOptionIds && e.votedOptionIds.length > 0) {
      h(new Set(e.votedOptionIds));
    }
  };

  const F = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      f.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      B(e);

      requestAnimationFrame(() => {
        k(true);
      });
    });
  };

  const R = () => {
    x(true);
    k(false);
  };

  const D = () => {
    x(false);
    k(true);
  };

  const H = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const K = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const Q = (e) => {
    e.stopPropagation();
  };

  return selectedOptionIds("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: Q,
    children: [
      selectedOptionIds("div", {
        className: t.header,
        children: [
          selectedOptionIds("span", { className: t.title, children: title }),
          a &&
            selectedOptionIds("div", {
              className: t.meta,
              children: selectedOptionIds("span", {
                className: t.voteCount,
                children: K($),
              }),
            }),
        ],
      }),
      selectedOptionIds("div", {
        className: t.options,
        children: V.map((e) => {
          const r = H(e.votes);
          const n = i.has(e.id);
          const o = X ? `${r}%` : "0%";
          const c = j.get(e.id) || f.current.get(e.id)?.offsetWidth || 0;
          return y
            ? selectedOptionIds(
                "div",
                {
                  ref: (v) => {
                    if (v) {
                      f.current.set(e.id, v);
                    }
                  },
                  className: `${t.option} ${t.voted} ${n ? t.selected : ""}`,
                  children: [
                    selectedOptionIds("div", {
                      className: t.optionContent,
                      children: [
                        selectedOptionIds("span", {
                          className: t.optionText,
                          children: [
                            n &&
                              selectedOptionIds("span", {
                                className: t.checkmark,
                                children: "✓ ",
                              }),
                            e.text,
                          ],
                        }),
                        selectedOptionIds("span", {
                          className: t.optionPercent,
                          children: [r, "%"],
                        }),
                      ],
                    }),
                    n &&
                      selectedOptionIds("div", {
                        className: t.optionProgressWrapper,
                        style: { width: o },
                        children: [
                          selectedOptionIds("div", {
                            className: t.optionProgress,
                          }),
                          selectedOptionIds("div", {
                            className: t.optionContentInverted,
                            style: { width: `${c}px` },
                            children: [
                              selectedOptionIds("span", {
                                className: t.optionText,
                                children: [
                                  selectedOptionIds("span", {
                                    className: t.checkmark,
                                    children: "✓ ",
                                  }),
                                  e.text,
                                ],
                              }),
                              selectedOptionIds("span", {
                                className: t.optionPercent,
                                children: [r, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !n &&
                      selectedOptionIds("div", {
                        className: t.optionProgressSimple,
                        style: { width: o },
                      }),
                  ],
                },
                e.id
              )
            : selectedOptionIds(
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
                  onClick: () => G(e.id),
                  children: selectedOptionIds("div", {
                    className: t.optionContent,
                    children: [
                      multipleChoice &&
                        selectedOptionIds("span", {
                          className: `${t.checkbox} ${
                            n ? t.checkboxChecked : ""
                          }`,
                          children: n && "✓",
                        }),
                      selectedOptionIds("span", {
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
        !w &&
        selectedOptionIds("button", {
          className: t.submitBtn,
          onClick: z,
          type: "button",
          children: "Проголосовать",
        }),
      a &&
        selectedOptionIds("div", {
          className: t.footer,
          children: w
            ? selectedOptionIds(S, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    selectedOptionIds("button", {
                      className: t.submitBtn,
                      onClick: z,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  selectedOptionIds("button", {
                    className: t.revoteBtn,
                    onClick: D,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : selectedOptionIds("button", {
                className: t.revoteBtn,
                onClick: R,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
