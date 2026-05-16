import { d, A, y, q, a, m } from "./index-BCnJB3wz.js";
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
    const h = new a.Error().stack;

    if (h) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[h] = "db06143b-754b-47bb-8717-9329ef32f9fc";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-db06143b-754b-47bb-8717-9329ef32f9fc";
    }
  } catch {}
})();
const G = "gMVB";
const J = "xmdJ";
const K = "HFPt";
const Y = "yX7p";
const ee = "Ivrs";
const te = "ZB2N";
const ne = "lbra";
const se = "QmZG";
const oe = "zLaC";
const re = "dNeR";
const ie = "LXbI";
const ce = "EU0U";
const ae = "HsUa";
const de = "AtQB";
const le = "qhLe";
const fe = "SCob";
const he = "ml2o";
const ue = "Ow0I";
const me = "ijZz";
const pe = "dF3Q";
const ve = "SUPQ";
const be = "C1LN";
const ge = "VrZ9";
const Ne = "p3cD";

const t = {
  poll: G,
  disabled: J,
  header: K,
  title: Y,
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
  const [d, S] = d(voted);

  const [c, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = d(totalVotes);
  const [_, k] = d(options);
  const [q, y] = d(voted);
  const [P, C] = d(false);
  const [F, E] = d(new Map());
  const m = onVoteMultiple(new Map());

  const Q = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    k(options);
    w(totalVotes);
    S(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !P) {
      y(true);
    }
  }, [Q, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      E(e);
    }
  }, [voted]);

  const B = d && !P;

  const R = q(
    (e) => {
      if (disabled || B) {
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
      S(true);
      C(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            z(o);
          }
        });
      }

      L();
    },
    [disabled, B, multipleChoice, c, d, onVote]
  );

  const T = q(() => {
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

    S(true);
    C(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          z(n);
        }
      });
    }

    L();
  }, [c, d, onVoteMultiple]);

  const z = (e) => {
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

  const L = () => {
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

  const U = () => {
    C(true);
    y(false);
  };

  const Z = () => {
    C(false);
    y(true);
  };

  const j = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const H = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const I = (e) => {
    e.stopPropagation();
  };

  return title("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: I,
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
                children: H($),
              }),
            }),
        ],
      }),
      title("div", {
        className: t.options,
        children: _.map((e) => {
          const r = j(e.votes);
          const n = c.has(e.id);
          const o = q ? `${r}%` : "0%";
          const i = F.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return B
            ? title(
                "div",
                {
                  ref: (g) => {
                    if (g) {
                      m.current.set(e.id, g);
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
                            style: { width: `${i}px` },
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
                  ref: (g) => {
                    if (g) {
                      m.current.set(e.id, g);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => R(e.id),
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
        c.size > 0 &&
        !P &&
        title("button", {
          className: t.submitBtn,
          onClick: T,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        title("div", {
          className: t.footer,
          children: P
            ? title(m, {
                children: [
                  multipleChoice &&
                    c.size > 0 &&
                    title("button", {
                      className: t.submitBtn,
                      onClick: T,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  title("button", {
                    className: t.revoteBtn,
                    onClick: Z,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : title("button", {
                className: t.revoteBtn,
                onClick: U,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
