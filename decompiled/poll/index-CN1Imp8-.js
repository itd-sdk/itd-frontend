import { d, A, y, q, a, m } from "./index-DuQT229k.js";
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
      a._sentryDebugIds[h] = "aba79fca-f4a8-42fe-9521-de3a94c3582b";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-aba79fca-f4a8-42fe-9521-de3a94c3582b";
    }
  } catch {}
})();
const I = "D1z0";
const J = "gXdH";
const Q = "I8uv";
const U = "qxpZ";
const ee = "XYbC";
const te = "Dei8";
const ne = "TgS2";
const se = "Rbpn";
const oe = "zCCH";
const re = "PMqn";
const ce = "ehWj";
const ie = "H6BS";
const ae = "GHxu";
const le = "pOC7";
const de = "zBSj";
const fe = "zHl3";
const he = "wjaK";
const ue = "CxD6";
const me = "fL81";
const pe = "KYqZ";
const ve = "rclv";
const ge = "r7ym";
const be = "sSNC";
const Ne = "AFeJ";

const t = {
  poll: I,
  disabled: J,
  header: Q,
  title: U,
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
  const [l, P] = voted(voted);

  const [i, u] = voted(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = voted(totalVotes);
  const [j, k] = voted(options);
  const [_, y] = voted(voted);
  const [C, x] = voted(false);
  const [L, T] = voted(new Map());
  const m = A(new Map());

  const R = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    k(options);
    w(totalVotes);
    P(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !C) {
      y(true);
    }
  }, [R, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      T(e);
    }
  }, [voted]);

  const W = l && !C;

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
        w((o) => o + 1);
      }

      u(new Set([e]));
      P(true);
      x(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            D(o);
          }
        });
      }

      E();
    },
    [disabled, W, multipleChoice, i, l, onVote]
  );

  const A = q(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    k((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!l) {
      w((n) => n + 1);
    }

    P(true);
    x(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          D(n);
        }
      });
    }

    E();
  }, [i, l, onVoteMultiple]);

  const D = (e) => {
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

  const E = () => {
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

  const K = () => {
    x(true);
    y(false);
  };

  const O = () => {
    x(false);
    y(true);
  };

  const V = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const Y = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const X = (e) => {
    e.stopPropagation();
  };

  return title("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: X,
    children: [
      title("div", {
        className: t.header,
        children: [
          title("span", { className: t.title, children: title }),
          l &&
            title("div", {
              className: t.meta,
              children: title("span", {
                className: t.voteCount,
                children: Y($),
              }),
            }),
        ],
      }),
      title("div", {
        className: t.options,
        children: j.map((e) => {
          const r = V(e.votes);
          const n = i.has(e.id);
          const o = _ ? `${r}%` : "0%";
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
        !l &&
        i.size > 0 &&
        !C &&
        title("button", {
          className: t.submitBtn,
          onClick: A,
          type: "button",
          children: "Проголосовать",
        }),
      l &&
        title("div", {
          className: t.footer,
          children: C
            ? title(m, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    title("button", {
                      className: t.submitBtn,
                      onClick: A,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  title("button", {
                    className: t.revoteBtn,
                    onClick: O,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : title("button", {
                className: t.revoteBtn,
                onClick: K,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
