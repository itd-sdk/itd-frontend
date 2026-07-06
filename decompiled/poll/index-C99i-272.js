import { d, A, y, q, a, m } from "./index-CFv_0Hh6.js";
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
      a._sentryDebugIds[h] = "84daa396-23f0-4ea8-ac1c-0749d020c1b2";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-84daa396-23f0-4ea8-ac1c-0749d020c1b2";
    }
  } catch {}
})();
const U = "t609";
const X = "N281";
const Y = "SfQQ";
const Z = "aFhv";
const ee = "o3Xm";
const te = "gJWE";
const ne = "Pafo";
const se = "yOvA";
const oe = "eGyc";
const re = "Af2H";
const ce = "Jv1H";
const ie = "AB0c";
const ae = "INAp";
const de = "yIKF";
const le = "DMkO";
const fe = "Pn5x";
const he = "RwPt";
const ue = "kEKq";
const me = "Frni";
const pe = "Gx0L";
const ve = "Hl0U";
const ge = "hfm8";
const be = "TMCW";
const Ne = "TVCd";

const t = {
  poll: U,
  disabled: X,
  header: Y,
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
  const [d, S] = d(voted);

  const [i, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, k] = d(totalVotes);
  const [q, w] = d(options);
  const [H, y] = d(voted);
  const [P, x] = d(false);
  const [L, B] = d(new Map());
  const m = onVote(new Map());

  const O = options.map((e) => `${e.id}:${e.votes}`).join(",");

  y(() => {
    w(options);
    k(totalVotes);
    S(voted);

    if (selectedOptionIds.length > 0) {
      u(new Set(selectedOptionIds));
    } else {
      u(selectedOptionId ? new Set([selectedOptionId]) : new Set());
    }

    if (voted && !P) {
      y(true);
    }
  }, [O, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  y(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      B(e);
    }
  }, [voted]);

  const W = d && !P;

  const R = q(
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
        k((o) => o + 1);
      }

      u(new Set([e]));
      S(true);
      x(false);
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
    [disabled, W, multipleChoice, i, d, onVote]
  );

  const E = q(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    w((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      k((n) => n + 1);
    }

    S(true);
    x(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          M(n);
        }
      });
    }

    z();
  }, [i, d, onVoteMultiple]);

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

      B(e);

      requestAnimationFrame(() => {
        y(true);
      });
    });
  };

  const V = () => {
    x(true);
    y(false);
  };

  const K = () => {
    x(false);
    y(true);
  };

  const j = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const G = (e) =>
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
                children: G($),
              }),
            }),
        ],
      }),
      title("div", {
        className: t.options,
        children: q.map((e) => {
          const r = j(e.votes);
          const n = i.has(e.id);
          const o = H ? `${r}%` : "0%";
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
        i.size > 0 &&
        !P &&
        title("button", {
          className: t.submitBtn,
          onClick: E,
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
                    i.size > 0 &&
                    title("button", {
                      className: t.submitBtn,
                      onClick: E,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  title("button", {
                    className: t.revoteBtn,
                    onClick: K,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : title("button", {
                className: t.revoteBtn,
                onClick: V,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
