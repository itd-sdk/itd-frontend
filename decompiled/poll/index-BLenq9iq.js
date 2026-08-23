import { d, A, y, q, u, k } from "./index-DBLtLuBZ.js";
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
      a._sentryDebugIds[f] = "45ab0261-3a7e-4913-b372-766db3181921";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-45ab0261-3a7e-4913-b372-766db3181921";
    }
  } catch {}
})();
const O = "KWt3";
const H = "fUSU";
const Q = "YNgE";
const Z = "NJn1";
const ee = "iLGY";
const te = "DjJd";
const ne = "L9TX";
const se = "I7r6";
const oe = "e4dg";
const re = "jyUz";
const ie = "D255";
const ce = "mEn6";
const ae = "Uqpv";
const de = "gmMY";
const le = "y3Xz";
const he = "u34w";
const fe = "CLKM";
const ue = "JGDd";
const me = "jbvt";
const pe = "ijWc";
const ve = "yYuI";
const ge = "FWgm";
const be = "MpcF";
const Ne = "LXz9";

const t = {
  poll: O,
  disabled: H,
  header: Q,
  title: Z,
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

  const [c, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = d(totalVotes);
  const [Y, y] = d(options);
  const [_, k] = d(voted);
  const [P, x] = d(false);
  const [q, T] = d(new Map());
  const m = A(new Map());

  const F = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    y(options);
    w(totalVotes);
    S(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !P) {
      k(true);
    }
  }, [F, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      T(e);
    }
  }, [voted]);

  const W = d && !P;

  const U = q(
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

      y((o) =>
        o.map((i) =>
          i.id === e
            ? { ...i, votes: i.votes + 1 }
            : i.id === r
            ? { ...i, votes: Math.max(0, i.votes - 1) }
            : i
        )
      );

      if (!d) {
        w((o) => o + 1);
      }

      u(new Set([e]));
      S(true);
      x(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            B(o);
          }
        });
      }

      A();
    },
    [disabled, W, multipleChoice, c, d, onVote]
  );

  const z = q(() => {
    if (c.size === 0) {
      return;
    }
    const e = Array.from(c);

    y((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      w((n) => n + 1);
    }

    S(true);
    x(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          B(n);
        }
      });
    }

    A();
  }, [c, d, onVoteMultiple]);

  const B = (e) => {
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

  const A = () => {
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

  const J = () => {
    x(true);
    k(false);
  };

  const K = () => {
    x(false);
    k(true);
  };

  const R = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const V = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const X = (e) => {
    e.stopPropagation();
  };

  return u("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: X,
    children: [
      u("div", {
        className: t.header,
        children: [
          u("span", { className: t.title, children: title }),
          d &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: V($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: Y.map((e) => {
          const r = R(e.votes);
          const n = c.has(e.id);
          const o = _ ? `${r}%` : "0%";
          const i = q.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
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
                  ref: (b) => {
                    if (b) {
                      m.current.set(e.id, b);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => U(e.id),
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
          onClick: z,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        u("div", {
          className: t.footer,
          children: P
            ? u(k, {
                children: [
                  multipleChoice &&
                    c.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: z,
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
