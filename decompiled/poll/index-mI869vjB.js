import { d, A, y, q, u, k } from "./index-DDTOXJaD.js";
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
      a._sentryDebugIds[f] = "2add77a5-e746-448a-be55-264845c9eace";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-2add77a5-e746-448a-be55-264845c9eace";
    }
  } catch {}
})();
const U = "OhsI";
const J = "rabw";
const X = "E3aH";
const Z = "JK5p";
const ee = "PWAG";
const te = "lU0Y";
const ne = "Y0dG";
const se = "DtHj";
const oe = "V1QX";
const re = "xpAf";
const ce = "R6xI";
const ie = "mqBd";
const ae = "mlrj";
const de = "y6TD";
const le = "AtOW";
const he = "AYcW";
const fe = "dpLB";
const ue = "BO2l";
const me = "mUWa";
const pe = "RA6q";
const ve = "QcIl";
const ge = "jyu5";
const be = "LNKq";
const Ne = "La5q";

const t = {
  poll: U,
  disabled: J,
  header: X,
  title: Z,
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
  const [d, S] = d(voted);

  const [i, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = d(totalVotes);
  const [z, y] = d(options);
  const [O, k] = d(voted);
  const [x, P] = d(false);
  const [R, T] = d(new Map());
  const m = onVote(new Map());

  const _ = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    y(options);
    w(totalVotes);
    S(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !x) {
      k(true);
    }
  }, [_, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      T(e);
    }
  }, [voted]);

  const W = d && !x;

  const V = q(
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
      S(true);
      P(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            q(o);
          }
        });
      }

      D();
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

    S(true);
    P(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          q(n);
        }
      });
    }

    D();
  }, [i, d, onVoteMultiple]);

  const q = (e) => {
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

  const D = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      T(e);

      requestAnimationFrame(() => {
        k(true);
      });
    });
  };

  const Y = () => {
    P(true);
    k(false);
  };

  const H = () => {
    P(false);
    k(true);
  };

  const I = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const K = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const F = (e) => {
    e.stopPropagation();
  };

  return u("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: F,
    children: [
      u("div", {
        className: t.header,
        children: [
          u("span", { className: t.title, children: title }),
          d &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: K($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: z.map((e) => {
          const r = I(e.votes);
          const n = i.has(e.id);
          const o = O ? `${r}%` : "0%";
          const c = R.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return W
            ? u(
                "div",
                {
                  ref: (b) => {
                    if (b) {
                      m.current.set(e.id, b);
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
                  ref: (b) => {
                    if (b) {
                      m.current.set(e.id, b);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => V(e.id),
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
        i.size > 0 &&
        !x &&
        u("button", {
          className: t.submitBtn,
          onClick: E,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        u("div", {
          className: t.footer,
          children: x
            ? u(k, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: E,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  u("button", {
                    className: t.revoteBtn,
                    onClick: H,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : u("button", {
                className: t.revoteBtn,
                onClick: Y,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
