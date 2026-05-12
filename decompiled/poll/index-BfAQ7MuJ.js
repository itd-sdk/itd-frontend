import { d, A, y, q, a, l } from "./index-DDCL-vHK.js";
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
    a.SENTRY_RELEASE = { id: "1.1.0" };
    const f = new a.Error().stack;

    if (f) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[f] = "782959ba-4130-40c3-bad4-c5ec9ad83b27";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-782959ba-4130-40c3-bad4-c5ec9ad83b27";
    }
  } catch {}
})();
const J = "CJh4";
const U = "TDpV";
const X = "oirR";
const Z = "c7o1";
const ee = "EVWD";
const te = "hqrM";
const ne = "bulw";
const se = "EAwS";
const oe = "Kp0c";
const re = "ojpd";
const ce = "NWgt";
const ie = "NIYr";
const ae = "xbqM";
const le = "QQ7u";
const de = "p930";
const he = "AeTt";
const fe = "lKxY";
const ue = "UCF8";
const pe = "RRCC";
const me = "YG3v";
const ve = "jVty";
const be = "xGQR";
const ge = "cQ0N";
const Ne = "jGsc";

const t = {
  poll: J,
  disabled: U,
  header: X,
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
  optionProgress: le,
  optionContentInverted: de,
  optionText: he,
  optionPercent: fe,
  optionProgressSimple: ue,
  checkmark: pe,
  checkbox: me,
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
  const [l, S] = voted(voted);

  const [i, u] = voted(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = voted(totalVotes);
  const [q, k] = voted(options);
  const [z, y] = voted(voted);
  const [x, C] = voted(false);
  const [_, E] = voted(new Map());
  const p = onVoteMultiple(new Map());

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

    if (voted && !x) {
      y(true);
    }
  }, [Q, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && p.current.size > 0) {
      const e = new Map();

      p.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      E(e);
    }
  }, [voted]);

  const W = l && !x;

  const Y = q(
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
      S(true);
      C(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            M(o);
          }
        });
      }

      R();
    },
    [disabled, W, multipleChoice, i, l, onVote]
  );

  const B = q(() => {
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

    S(true);
    C(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          M(n);
        }
      });
    }

    R();
  }, [i, l, onVoteMultiple]);

  const M = (e) => {
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

  const R = () => {
    requestAnimationFrame(() => {
      const e = new Map();

      p.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      E(e);

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

  const K = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const L = (e) =>
    e === 1 ? "1 голос" : e >= 2 && e <= 4 ? `${e} голоса` : `${e} голосов`;

  const O = (e) => {
    e.stopPropagation();
  };

  return title("div", {
    className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
    onClick: O,
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
                children: L($),
              }),
            }),
        ],
      }),
      title("div", {
        className: t.options,
        children: q.map((e) => {
          const r = K(e.votes);
          const n = i.has(e.id);
          const o = z ? `${r}%` : "0%";
          const c = _.get(e.id) || p.current.get(e.id)?.offsetWidth || 0;
          return W
            ? title(
                "div",
                {
                  ref: (g) => {
                    if (g) {
                      p.current.set(e.id, g);
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
                  ref: (g) => {
                    if (g) {
                      p.current.set(e.id, g);
                    }
                  },
                  className: `${t.option} ${t.votingOption} ${
                    n ? t.preselected : ""
                  }`,
                  onClick: () => Y(e.id),
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
        !x &&
        title("button", {
          className: t.submitBtn,
          onClick: B,
          type: "button",
          children: "Проголосовать",
        }),
      l &&
        title("div", {
          className: t.footer,
          children: x
            ? title(l, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    title("button", {
                      className: t.submitBtn,
                      onClick: B,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  title("button", {
                    className: t.revoteBtn,
                    onClick: G,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : title("button", {
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
