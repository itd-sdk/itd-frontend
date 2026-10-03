import { d, A, d as d_1, q, u, S } from "./index-DK2L49XD.js";
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
    const f = new a.Error().stack;

    if (f) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[f] = "4ba378ed-348d-45d5-960e-168cbd562ef6";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-4ba378ed-348d-45d5-960e-168cbd562ef6";
    }
  } catch {}
})();
const H = "d08J";
const I = "AWwU";
const G = "fOwI";
const Q = "Kebk";
const ee = "oe90";
const te = "wDzz";
const ne = "hP1p";
const se = "bZre";
const oe = "o1N1";
const re = "Pr3C";
const ie = "kXiT";
const ce = "iACM";
const ae = "NnPT";
const de = "Xaqh";
const le = "MVLC";
const he = "bOXy";
const fe = "d1JV";
const ue = "slfp";
const me = "e76J";
const pe = "r6U0";
const ve = "rYWZ";
const be = "Bl3i";
const ge = "TkKj";
const we = "RfSV";

const t = {
  poll: H,
  disabled: I,
  header: G,
  title: Q,
  meta: ee,
  voteCount: te,
  options: ne,
  option: se,
  votingOption: oe,
  preselected: re,
  optionContent: ie,
  voted: ce,
  optionProgressWrapper: ae,
  optionProgress: de,
  optionContentInverted: le,
  optionText: he,
  optionPercent: fe,
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
  const [d, x] = d(voted);

  const [c, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, N] = d(totalVotes);
  const [q, k] = d(options);
  const [L, y] = d(voted);
  const [P, C] = d(false);
  const [O, B] = d(new Map());
  const m = onVoteMultiple(new Map());

  const R = options.map((e) => `${e.id}:${e.votes}`).join(",");

  d_1(() => {
    k(options);
    N(totalVotes);
    x(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !P) {
      y(true);
    }
  }, [R, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  d_1(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      B(e);
    }
  }, [voted]);

  const W = d && !P;

  const j = q(
    (e) => {
      if (disabled || W) {
        return;
      }
      if (multipleChoice) {
        u((o) => {
          const i = new Set(o);

          if (i.has(e)) {
            i.delete(e);
          } else {
            i.add(e);
          }

          return i;
        });
        return;
      }
      const r = c.size > 0 ? Array.from(c)[0] : null;

      k((o) =>
        o.map((i) =>
          i.id === e
            ? { ...i, votes: i.votes + 1 }
            : i.id === r
            ? { ...i, votes: Math.max(0, i.votes - 1) }
            : i
        )
      );

      if (!d) {
        N((o) => o + 1);
      }

      u(new Set([e]));
      x(true);
      C(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            z(o);
          }
        });
      }

      E();
    },
    [disabled, W, multipleChoice, c, d, onVote]
  );

  const M = q(() => {
    if (c.size === 0) {
      return;
    }
    const e = Array.from(c);

    k((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      N((n) => n + 1);
    }

    x(true);
    C(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          z(n);
        }
      });
    }

    E();
  }, [c, d, onVoteMultiple]);

  const z = (e) => {
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

  const E = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      B(e);

      requestAnimationFrame(() => {
        y(true);
      });
    });
  };

  const J = () => {
    C(true);
    y(false);
  };

  const K = () => {
    C(false);
    y(true);
  };

  const X = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const F = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const U = (e) => {
    e.stopPropagation();
  };

  return u("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: U,
    children: [
      u("div", {
        className: t.header,
        children: [
          u("span", { className: t.title, children: title }),
          d &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: F($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: q.map((e) => {
          const r = X(e.votes);
          const n = c.has(e.id);
          const o = L ? `${r}%` : "0%";
          const i = O.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return W
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
                            style: { width: `${i}px` },
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
                  onClick: () => j(e.id),
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
        !d &&
        c.size > 0 &&
        !P &&
        u("button", {
          className: t.submitBtn,
          onClick: M,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        u("div", {
          className: t.footer,
          children: P
            ? u(disabled, {
                children: [
                  multipleChoice &&
                    c.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: M,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  u("button", {
                    className: t.revoteBtn,
                    onClick: K,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : u("button", {
                className: t.revoteBtn,
                onClick: J,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
