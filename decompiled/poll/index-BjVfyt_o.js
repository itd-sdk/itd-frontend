import { d, A, d as d_1, q, u, S } from "./index-ORJLmKGS.js";
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
    a.SENTRY_RELEASE = { id: "1.1.3" };
    const f = new a.Error().stack;

    if (f) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[f] = "a7eca788-3fa0-4c22-8039-66a697ec6b3c";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-a7eca788-3fa0-4c22-8039-66a697ec6b3c";
    }
  } catch {}
})();
const Q = "VBwy";
const Z = "sXXf";
const I = "Qq8o";
const J = "dewP";
const ee = "pCKP";
const te = "UpGN";
const ne = "OLxt";
const se = "Atkn";
const oe = "XMDW";
const re = "py06";
const ce = "XqVY";
const ie = "vnme";
const ae = "UcgN";
const le = "pUZl";
const de = "lMCj";
const he = "MgdG";
const fe = "SHza";
const ue = "xWjg";
const me = "OXBx";
const pe = "dB2d";
const ve = "xymh";
const ge = "QYNm";
const be = "dV4W";
const Ne = "ll61";

const t = {
  poll: Q,
  disabled: Z,
  header: I,
  title: J,
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
  const [l, S] = voted(voted);

  const [i, u] = voted(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = voted(totalVotes);
  const [X, y] = voted(options);
  const [_, k] = voted(voted);
  const [x, P] = voted(false);
  const [j, A] = voted(new Map());
  const m = A(new Map());

  const L = options.map((e) => `${e.id}:${e.votes}`).join(",");

  d_1(() => {
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
  }, [L, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  d_1(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      A(e);
    }
  }, [voted]);

  const W = l && !x;

  const O = q(
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

      if (!l) {
        w((o) => o + 1);
      }

      u(new Set([e]));
      S(true);
      P(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            E(o);
          }
        });
      }

      z();
    },
    [disabled, W, multipleChoice, i, l, onVote]
  );

  const T = q(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    y((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!l) {
      w((n) => n + 1);
    }

    S(true);
    P(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          E(n);
        }
      });
    }

    z();
  }, [i, l, onVoteMultiple]);

  const E = (e) => {
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

  const R = () => {
    P(true);
    k(false);
  };

  const U = () => {
    P(false);
    k(true);
  };

  const Y = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const F = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const G = (e) => {
    e.stopPropagation();
  };

  return u("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: G,
    children: [
      u("div", {
        className: t.header,
        children: [
          u("span", { className: t.title, children: title }),
          l &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: F($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: X.map((e) => {
          const r = Y(e.votes);
          const n = i.has(e.id);
          const o = _ ? `${r}%` : "0%";
          const c = j.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
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
                  onClick: () => O(e.id),
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
        i.size > 0 &&
        !x &&
        u("button", {
          className: t.submitBtn,
          onClick: T,
          type: "button",
          children: "Проголосовать",
        }),
      l &&
        u("div", {
          className: t.footer,
          children: x
            ? u(S, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: T,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  u("button", {
                    className: t.revoteBtn,
                    onClick: U,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : u("button", {
                className: t.revoteBtn,
                onClick: R,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
