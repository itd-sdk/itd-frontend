import { d, A, y, q, u, k } from "./index-B9FitUXy.js";
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
      a._sentryDebugIds[f] = "42700387-529e-44bd-bd5e-3d6d11e5a7e7";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-42700387-529e-44bd-bd5e-3d6d11e5a7e7";
    }
  } catch {}
})();
const F = "OEsn";
const Q = "Ktwv";
const Z = "awDf";
const G = "J2ny";
const ee = "RVYw";
const te = "IoJD";
const ne = "M3zQ";
const se = "yUm1";
const oe = "ZQUV";
const re = "D2I8";
const ie = "Hur6";
const ce = "vsga";
const ae = "AUSK";
const de = "MvH4";
const le = "yi4z";
const he = "PXPM";
const fe = "PrNb";
const ue = "TMlI";
const me = "RXaa";
const pe = "U8vJ";
const ve = "PzaX";
const ge = "nOZy";
const be = "P4PY";
const we = "daoS";

const t = {
  poll: F,
  disabled: Q,
  header: Z,
  title: G,
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
  const [d, C] = d(voted);

  const [c, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, y] = d(totalVotes);
  const [_, N] = d(options);
  const [O, P] = d(voted);
  const [k, S] = d(false);
  const [U, z] = d(new Map());
  const m = A(new Map());

  const q = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    N(options);
    y(totalVotes);
    C(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !k) {
      P(true);
    }
  }, [q, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      z(e);
    }
  }, [voted]);

  const M = d && !k;

  const H = q(
    (e) => {
      if (disabled || M) {
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

      N((o) =>
        o.map((i) =>
          i.id === e
            ? { ...i, votes: i.votes + 1 }
            : i.id === r
            ? { ...i, votes: Math.max(0, i.votes - 1) }
            : i
        )
      );

      if (!d) {
        y((o) => o + 1);
      }

      u(new Set([e]));
      C(true);
      S(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            B(o);
          }
        });
      }

      E();
    },
    [disabled, M, multipleChoice, c, d, onVote]
  );

  const A = q(() => {
    if (c.size === 0) {
      return;
    }
    const e = Array.from(c);

    N((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      y((n) => n + 1);
    }

    C(true);
    S(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          B(n);
        }
      });
    }

    E();
  }, [c, d, onVoteMultiple]);

  const B = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    N(r);
    y(e.totalVotes ?? 0);

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

      z(e);

      requestAnimationFrame(() => {
        P(true);
      });
    });
  };

  const I = () => {
    S(true);
    P(false);
  };

  const J = () => {
    S(false);
    P(true);
  };

  const K = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const L = (e) =>
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
              children: u("span", { className: t.voteCount, children: L($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: _.map((e) => {
          const r = K(e.votes);
          const n = c.has(e.id);
          const o = O ? `${r}%` : "0%";
          const i = U.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return M
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
                  onClick: () => H(e.id),
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
        !k &&
        u("button", {
          className: t.submitBtn,
          onClick: A,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        u("div", {
          className: t.footer,
          children: k
            ? u(k, {
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
                    onClick: J,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : u("button", {
                className: t.revoteBtn,
                onClick: I,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
