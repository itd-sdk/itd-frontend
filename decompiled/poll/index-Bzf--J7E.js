import { d, A, d as d_1, q, u, S } from "./index-B74jCtUp.js";
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
      a._sentryDebugIds[f] = "bf10b248-54b3-4b02-8989-9b6d4161c430";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-bf10b248-54b3-4b02-8989-9b6d4161c430";
    }
  } catch {}
})();
const I = "JhZ1";
const Q = "nZSE";
const U = "WoPH";
const X = "EEMB";
const ee = "GSkv";
const te = "GA4b";
const ne = "sNyw";
const se = "ETbj";
const oe = "L7tT";
const re = "B8R9";
const ie = "KkZU";
const ce = "Hj9y";
const ae = "l5kk";
const le = "cMFZ";
const de = "W9AW";
const he = "jaRo";
const fe = "WC3V";
const ue = "hIC6";
const me = "ipc9";
const pe = "GePz";
const ve = "YJ8b";
const be = "iK6M";
const ge = "azNw";
const Ne = "rCQY";

const t = {
  poll: I,
  disabled: Q,
  header: U,
  title: X,
  meta: ee,
  voteCount: te,
  options: ne,
  option: se,
  votingOption: oe,
  preselected: re,
  optionContent: ie,
  voted: ce,
  optionProgressWrapper: ae,
  optionProgress: le,
  optionContentInverted: de,
  optionText: he,
  optionPercent: fe,
  optionProgressSimple: ue,
  checkmark: me,
  checkbox: pe,
  checkboxChecked: ve,
  submitBtn: be,
  footer: ge,
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
  const [l, x] = voted(voted);

  const [c, u] = voted(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, k] = voted(totalVotes);
  const [D, w] = voted(options);
  const [L, y] = voted(voted);
  const [P, C] = voted(false);
  const [V, T] = voted(new Map());
  const m = A(new Map());

  const Z = options.map((e) => `${e.id}:${e.votes}`).join(",");

  d_1(() => {
    w(options);
    k(totalVotes);
    x(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !P) {
      y(true);
    }
  }, [Z, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  d_1(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      T(e);
    }
  }, [voted]);

  const W = l && !P;

  const q = q(
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

      w((o) =>
        o.map((i) =>
          i.id === e
            ? { ...i, votes: i.votes + 1 }
            : i.id === r
            ? { ...i, votes: Math.max(0, i.votes - 1) }
            : i
        )
      );

      if (!l) {
        k((o) => o + 1);
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
    [disabled, W, multipleChoice, c, l, onVote]
  );

  const A = q(() => {
    if (c.size === 0) {
      return;
    }
    const e = Array.from(c);

    w((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!l) {
      k((n) => n + 1);
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
  }, [c, l, onVoteMultiple]);

  const M = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    w(r);
    k(e.totalVotes ?? 0);

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

      T(e);

      requestAnimationFrame(() => {
        y(true);
      });
    });
  };

  const F = () => {
    C(true);
    y(false);
  };

  const G = () => {
    C(false);
    y(true);
  };

  const H = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const K = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const Y = (e) => {
    e.stopPropagation();
  };

  return u("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: Y,
    children: [
      u("div", {
        className: t.header,
        children: [
          u("span", { className: t.title, children: title }),
          l &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: K($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: D.map((e) => {
          const r = H(e.votes);
          const n = c.has(e.id);
          const o = L ? `${r}%` : "0%";
          const i = V.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
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
                  onClick: () => q(e.id),
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
        c.size > 0 &&
        !P &&
        u("button", {
          className: t.submitBtn,
          onClick: A,
          type: "button",
          children: "Проголосовать",
        }),
      l &&
        u("div", {
          className: t.footer,
          children: P
            ? u(disabled, {
                children: [
                  multipleChoice &&
                    c.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: A,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  u("button", {
                    className: t.revoteBtn,
                    onClick: G,
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
