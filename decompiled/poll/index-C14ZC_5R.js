import { d, A, h, q, u, S } from "./index-dnACTU3c.js";
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
      a._sentryDebugIds[h] = "de71913c-39f4-4d0e-bbfb-a9a7b03bb95a";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-de71913c-39f4-4d0e-bbfb-a9a7b03bb95a";
    }
  } catch {}
})();
const Q = "gtjg";
const U = "uoPp";
const X = "AGeF";
const Z = "HHuS";
const ee = "LCcS";
const te = "p1yl";
const ne = "IQu4";
const se = "PSko";
const oe = "Tr0t";
const re = "xhRL";
const ie = "lKsi";
const ce = "wNej";
const ae = "OuAJ";
const de = "VCH1";
const le = "Pz07";
const fe = "ET9v";
const he = "G7dg";
const ue = "r5uF";
const me = "b50r";
const pe = "RfYs";
const ve = "ea13";
const be = "iDuP";
const ge = "qgdR";
const Ne = "RVum";

const t = {
  poll: Q,
  disabled: U,
  header: X,
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
  optionText: fe,
  optionPercent: he,
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
  const [d, C] = d(voted);

  const [c, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = d(totalVotes);
  const [V, k] = d(options);
  const [_, y] = d(voted);
  const [P, S] = d(false);
  const [j, B] = d(new Map());
  const m = onVoteMultiple(new Map());

  const q = options.map((e) => `${e.id}:${e.votes}`).join(",");

  options(() => {
    k(options);
    w(totalVotes);
    C(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !P) {
      y(true);
    }
  }, [q, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  options(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      B(e);
    }
  }, [voted]);

  const T = d && !P;

  const F = q(
    (e) => {
      if (disabled || T) {
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
        w((o) => o + 1);
      }

      u(new Set([e]));
      C(true);
      S(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            R(o);
          }
        });
      }

      z();
    },
    [disabled, T, multipleChoice, c, d, onVote]
  );

  const E = q(() => {
    if (c.size === 0) {
      return;
    }
    const e = Array.from(c);

    k((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      w((n) => n + 1);
    }

    C(true);
    S(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          R(n);
        }
      });
    }

    z();
  }, [c, d, onVoteMultiple]);

  const R = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    k(r);
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

      B(e);

      requestAnimationFrame(() => {
        y(true);
      });
    });
  };

  const H = () => {
    S(true);
    y(false);
  };

  const O = () => {
    S(false);
    y(true);
  };

  const G = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

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
          d &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: K($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: V.map((e) => {
          const r = G(e.votes);
          const n = c.has(e.id);
          const o = _ ? `${r}%` : "0%";
          const i = j.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
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
                  onClick: () => F(e.id),
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
          onClick: E,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        u("div", {
          className: t.footer,
          children: P
            ? u(S, {
                children: [
                  multipleChoice &&
                    c.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: E,
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
                onClick: H,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
