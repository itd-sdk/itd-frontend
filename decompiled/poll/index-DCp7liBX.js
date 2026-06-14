import { d, A, y, q, a, m } from "./index-BAlLDjSl.js";
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
    a.SENTRY_RELEASE = { id: "1.1.1" };
    const f = new a.Error().stack;

    if (f) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[f] = "3078aee6-ec84-4c33-991d-a6acd7a74c0b";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-3078aee6-ec84-4c33-991d-a6acd7a74c0b";
    }
  } catch {}
})();
const K = "yHJ6";
const X = "O7It";
const Y = "Nves";
const Q = "b6fN";
const ee = "mc1C";
const te = "ddIW";
const ne = "nDu5";
const se = "S4BS";
const oe = "tDZu";
const re = "ltBT";
const ce = "LnX0";
const ie = "yAVG";
const ae = "shHE";
const de = "FTMP";
const le = "wBVh";
const he = "hySz";
const fe = "bUbW";
const ue = "jq2S";
const me = "vZOr";
const pe = "WzEA";
const ve = "h4nq";
const ge = "NUMj";
const be = "wno2";
const Ne = "GI04";

const t = {
  poll: K,
  disabled: X,
  header: Y,
  title: Q,
  meta: ee,
  voteCount: te,
  options: ne,
  option: se,
  votingOption: oe,
  preselected: re,
  optionContent: ce,
  voted: ie,
  optionProgressWrapper: ae,
  optionProgress: de,
  optionContentInverted: le,
  optionText: he,
  optionPercent: fe,
  optionProgressSimple: ue,
  checkmark: me,
  checkbox: pe,
  checkboxChecked: ve,
  submitBtn: ge,
  footer: be,
  revoteBtn: Ne,
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
  const [d, C] = d(voted);

  const [i, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = d(totalVotes);
  const [_, y] = d(options);
  const [j, k] = d(voted);
  const [S, P] = d(false);
  const [L, A] = d(new Map());
  const m = A(new Map());

  const O = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    y(options);
    w(totalVotes);
    C(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !S) {
      k(true);
    }
  }, [O, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      A(e);
    }
  }, [voted]);

  const W = d && !S;

  const F = q(
    (e) => {
      if (disabled || W) {
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

      y((o) =>
        o.map((c) =>
          c.id === e
            ? { ...c, votes: c.votes + 1 }
            : c.id === r
            ? { ...c, votes: Math.max(0, c.votes - 1) }
            : c
        )
      );

      if (!d) {
        w((o) => o + 1);
      }

      u(new Set([e]));
      C(true);
      P(false);
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
    [disabled, W, multipleChoice, i, d, onVote]
  );

  const E = q(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    y((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      w((n) => n + 1);
    }

    C(true);
    P(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          M(n);
        }
      });
    }

    z();
  }, [i, d, onVoteMultiple]);

  const M = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    y(r);
    w(e.totalVotes ?? 0);

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

      A(e);

      requestAnimationFrame(() => {
        k(true);
      });
    });
  };

  const H = () => {
    P(true);
    k(false);
  };

  const I = () => {
    P(false);
    k(true);
  };

  const R = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const G = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const U = (e) => {
    e.stopPropagation();
  };

  return title("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: U,
    children: [
      title("div", {
        className: t.header,
        children: [
          title("span", { className: t.title, children: title }),
          d &&
            title("div", {
              className: t.meta,
              children: title("span", {
                className: t.voteCount,
                children: G($),
              }),
            }),
        ],
      }),
      title("div", {
        className: t.options,
        children: _.map((e) => {
          const r = R(e.votes);
          const n = i.has(e.id);
          const o = j ? `${r}%` : "0%";
          const c = L.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return W
            ? title(
                "div",
                {
                  ref: (b) => {
                    if (b) {
                      m.current.set(e.id, b);
                    }
                  },
                  className: `${t.option} ${t.voted} ${n ? t.selected : ""}`,
                  children: [
                    title("div", {
                      className: t.optionContent,
                      children: [
                        title("span", {
                          className: t.optionText,
                          children: [
                            n &&
                              title("span", {
                                className: t.checkmark,
                                children: "✓ ",
                              }),
                            e.text,
                          ],
                        }),
                        title("span", {
                          className: t.optionPercent,
                          children: [r, "%"],
                        }),
                      ],
                    }),
                    n &&
                      title("div", {
                        className: t.optionProgressWrapper,
                        style: { width: o },
                        children: [
                          title("div", { className: t.optionProgress }),
                          title("div", {
                            className: t.optionContentInverted,
                            style: { width: `${c}px` },
                            children: [
                              title("span", {
                                className: t.optionText,
                                children: [
                                  title("span", {
                                    className: t.checkmark,
                                    children: "✓ ",
                                  }),
                                  e.text,
                                ],
                              }),
                              title("span", {
                                className: t.optionPercent,
                                children: [r, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !n &&
                      title("div", {
                        className: t.optionProgressSimple,
                        style: { width: o },
                      }),
                  ],
                },
                e.id
              )
            : title(
                "div",
                {
                  ref: (b) => {
                    if (b) {
                      m.current.set(e.id, b);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => F(e.id),
                  children: title("div", {
                    className: t.optionContent,
                    children: [
                      multipleChoice &&
                        title("span", {
                          className: `${t.checkbox} ${
                            n ? t.checkboxChecked : ""
                          }`,
                          children: n && "✓",
                        }),
                      title("span", {
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
        !d &&
        i.size > 0 &&
        !S &&
        title("button", {
          className: t.submitBtn,
          onClick: E,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        title("div", {
          className: t.footer,
          children: S
            ? title(m, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    title("button", {
                      className: t.submitBtn,
                      onClick: E,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  title("button", {
                    className: t.revoteBtn,
                    onClick: I,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : title("button", {
                className: t.revoteBtn,
                onClick: H,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
