import { d, A, h, q, u, S } from "./index-gHxZkwFX.js";
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
    a.SENTRY_RELEASE = { id: "1.1.4" };
    const h = new a.Error().stack;

    if (h) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[h] = "9ffa0e19-12bd-4546-a6f7-cc7433bdc454";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-9ffa0e19-12bd-4546-a6f7-cc7433bdc454";
    }
  } catch {}
})();
const J = "Y3Sj";
const U = "M40W";
const Q = "nJHT";
const X = "ooiF";
const ee = "Kil3";
const te = "SzBp";
const ne = "oZU9";
const se = "zY4p";
const oe = "EcN3";
const re = "Iaex";
const ce = "pezk";
const ie = "zjKI";
const ae = "xumb";
const de = "uC5E";
const le = "b1fM";
const fe = "YA6E";
const he = "wPSC";
const ue = "RMYG";
const pe = "LZdF";
const me = "rMb5";
const ve = "MwO1";
const be = "qwpK";
const ge = "tS27";
const we = "HhKe";

const t = {
  poll: J,
  disabled: U,
  header: Q,
  title: X,
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
  checkmark: pe,
  checkbox: me,
  checkboxChecked: ve,
  submitBtn: be,
  footer: ge,
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

  const [i, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, N] = d(totalVotes);
  const [j, k] = d(options);
  const [q, y] = d(voted);
  const [S, x] = d(false);
  const [D, z] = d(new Map());
  const p = A(new Map());

  const F = options.map((e) => `${e.id}:${e.votes}`).join(",");

  options(() => {
    k(options);
    N(totalVotes);
    C(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !S) {
      y(true);
    }
  }, [F, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  options(() => {
    if (voted && p.current.size > 0) {
      const e = new Map();

      p.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      z(e);
    }
  }, [voted]);

  const M = d && !S;

  const L = q(
    (e) => {
      if (disabled || M) {
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

      if (!d) {
        N((o) => o + 1);
      }

      u(new Set([e]));
      C(true);
      x(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            T(o);
          }
        });
      }

      A();
    },
    [disabled, M, multipleChoice, i, d, onVote]
  );

  const B = q(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    k((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      N((n) => n + 1);
    }

    C(true);
    x(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          T(n);
        }
      });
    }

    A();
  }, [i, d, onVoteMultiple]);

  const T = (e) => {
    const r = (e.options ?? []).map((n) => ({
      id: n.id,
      text: n.text,
      votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0,
    }));
    k(r);
    N(e.totalVotes ?? 0);

    if (e.votedOptionIds && e.votedOptionIds.length > 0) {
      u(new Set(e.votedOptionIds));
    }
  };

  const A = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      p.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      z(e);

      requestAnimationFrame(() => {
        y(true);
      });
    });
  };

  const R = () => {
    x(true);
    y(false);
  };

  const H = () => {
    x(false);
    y(true);
  };

  const O = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const V = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const I = (e) => {
    e.stopPropagation();
  };

  return u("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: I,
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
        children: j.map((e) => {
          const r = O(e.votes);
          const n = i.has(e.id);
          const o = q ? `${r}%` : "0%";
          const c = D.get(e.id) || p.current.get(e.id)?.offsetWidth || 0;
          return M
            ? u(
                "div",
                {
                  ref: (g) => {
                    if (g) {
                      p.current.set(e.id, g);
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
                  ref: (g) => {
                    if (g) {
                      p.current.set(e.id, g);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => L(e.id),
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
                    onClick: H,
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
