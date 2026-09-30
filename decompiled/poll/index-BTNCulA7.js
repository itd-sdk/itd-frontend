import { d, A, h, q, u, S } from "./index-BuVp7kGl.js";
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
      a._sentryDebugIds[h] = "d5158793-c834-4091-8e8f-7f73e81f3102";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-d5158793-c834-4091-8e8f-7f73e81f3102";
    }
  } catch {}
})();
const Y = "enFv";
const Q = "LAvE";
const I = "kTsu";
const Z = "w1Ce";
const ee = "uTUu";
const te = "w9jn";
const ne = "yHGe";
const se = "YcDX";
const oe = "pjVy";
const re = "yh2u";
const ce = "fq3g";
const ie = "u4lS";
const ae = "eSQs";
const de = "miXN";
const le = "uK2J";
const fe = "dKOa";
const he = "NGvq";
const ue = "TxSb";
const me = "JhEW";
const pe = "a1Fy";
const ve = "fU9d";
const ge = "AkTK";
const be = "ScvF";
const Ne = "MC6G";

const t = {
  poll: Y,
  disabled: Q,
  header: I,
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
  const [d, P] = d(voted);

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
  const [S, x] = d(false);
  const [K, E] = d(new Map());
  const m = onVoteMultiple(new Map());

  const L = options.map((e) => `${e.id}:${e.votes}`).join(",");

  options(() => {
    y(options);
    w(totalVotes);
    P(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !S) {
      k(true);
    }
  }, [L, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  options(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      E(e);
    }
  }, [voted]);

  const T = d && !S;

  const V = q(
    (e) => {
      if (disabled || T) {
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
      P(true);
      x(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            M(o);
          }
        });
      }

      q();
    },
    [disabled, T, multipleChoice, i, d, onVote]
  );

  const B = q(() => {
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

    P(true);
    x(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          M(n);
        }
      });
    }

    q();
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

  const q = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      E(e);

      requestAnimationFrame(() => {
        k(true);
      });
    });
  };

  const G = () => {
    x(true);
    k(false);
  };

  const O = () => {
    x(false);
    k(true);
  };

  const R = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const H = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const J = (e) => {
    e.stopPropagation();
  };

  return u("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: J,
    children: [
      u("div", {
        className: t.header,
        children: [
          u("span", { className: t.title, children: title }),
          d &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: H($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: _.map((e) => {
          const r = R(e.votes);
          const n = i.has(e.id);
          const o = j ? `${r}%` : "0%";
          const c = K.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return T
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
        !S &&
        u("button", {
          className: t.submitBtn,
          onClick: B,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        u("div", {
          className: t.footer,
          children: S
            ? u(S, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: B,
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
                onClick: G,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
