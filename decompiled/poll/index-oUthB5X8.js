import { d, A, y, y as y_1, a, m } from "./index-BewGW5_v.js";
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
      a._sentryDebugIds[h] = "1c03af1e-718d-47c1-8a62-0dede9c4a0a7";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-1c03af1e-718d-47c1-8a62-0dede9c4a0a7";
    }
  } catch {}
})();
const X = "nDdS";
const Z = "PVSg";
const J = "zhts";
const Q = "Mf9G";
const ee = "tlqE";
const te = "LX5k";
const ne = "YUZC";
const se = "uEce";
const oe = "kO8z";
const re = "Nf18";
const ce = "KLHT";
const ie = "estE";
const ae = "Fwnk";
const de = "as0k";
const le = "hCf7";
const fe = "eEiF";
const he = "BC0j";
const ue = "Sbqx";
const me = "CNzW";
const pe = "W9Hq";
const ve = "O1Ra";
const ge = "KSxk";
const ke = "xPgU";
const be = "I2zB";

const t = {
  poll: X,
  disabled: Z,
  header: J,
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
  optionText: fe,
  optionPercent: he,
  optionProgressSimple: ue,
  checkmark: me,
  checkbox: pe,
  checkboxChecked: ve,
  submitBtn: ge,
  footer: ke,
  revoteBtn: be,
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

  const [$, N] = d(totalVotes);
  const [_, w] = d(options);
  const [F, y] = d(voted);
  const [x, C] = d(false);
  const [O, z] = d(new Map());
  const m = A(new Map());

  const R = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    w(options);
    N(totalVotes);
    S(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !x) {
      y(true);
    }
  }, [R, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      z(e);
    }
  }, [voted]);

  const W = d && !x;

  const V = y_1(
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

      w((o) =>
        o.map((c) =>
          c.id === e
            ? { ...c, votes: c.votes + 1 }
            : c.id === r
            ? { ...c, votes: Math.max(0, c.votes - 1) }
            : c
        )
      );

      if (!d) {
        N((o) => o + 1);
      }

      u(new Set([e]));
      S(true);
      C(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            A(o);
          }
        });
      }

      M();
    },
    [disabled, W, multipleChoice, i, d, onVote]
  );

  const T = y_1(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    w((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      N((n) => n + 1);
    }

    S(true);
    C(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          A(n);
        }
      });
    }

    M();
  }, [i, d, onVoteMultiple]);

  const A = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    w(r);
    N(e.totalVotes ?? 0);

    if (e.votedOptionIds && e.votedOptionIds.length > 0) {
      u(new Set(e.votedOptionIds));
    }
  };

  const M = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      z(e);

      requestAnimationFrame(() => {
        y(true);
      });
    });
  };

  const j = () => {
    C(true);
    y(false);
  };

  const H = () => {
    C(false);
    y(true);
  };

  const K = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const U = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const Y = (e) => {
    e.stopPropagation();
  };

  return title("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: Y,
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
                children: U($),
              }),
            }),
        ],
      }),
      title("div", {
        className: t.options,
        children: _.map((e) => {
          const r = K(e.votes);
          const n = i.has(e.id);
          const o = F ? `${r}%` : "0%";
          const c = O.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return W
            ? title(
                "div",
                {
                  ref: (k) => {
                    if (k) {
                      m.current.set(e.id, k);
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
                  ref: (k) => {
                    if (k) {
                      m.current.set(e.id, k);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => V(e.id),
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
        !x &&
        title("button", {
          className: t.submitBtn,
          onClick: T,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        title("div", {
          className: t.footer,
          children: x
            ? title(m, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    title("button", {
                      className: t.submitBtn,
                      onClick: T,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  title("button", {
                    className: t.revoteBtn,
                    onClick: H,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : title("button", {
                className: t.revoteBtn,
                onClick: j,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
