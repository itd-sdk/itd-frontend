import { d, A, h, q, u, S } from "./index-D4QRo1-7.js";
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
      a._sentryDebugIds[h] = "cadcc85a-651c-4164-a5c2-d087fecfa186";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-cadcc85a-651c-4164-a5c2-d087fecfa186";
    }
  } catch {}
})();
const Z = "sGks";
const J = "gAvz";
const K = "Oj8j";
const U = "je6O";
const ee = "zIPP";
const te = "LhGW";
const ne = "aAtt";
const se = "xq3c";
const oe = "iOF6";
const re = "qvf2";
const ce = "m8pX";
const ie = "o6ha";
const ae = "Z8il";
const de = "fwD0";
const le = "FXQY";
const fe = "XnN3";
const he = "XPSJ";
const ue = "NXHs";
const me = "s6QZ";
const pe = "xdVN";
const ve = "ClL5";
const ge = "o1Ht";
const Ne = "pfAn";
const be = "kQIp";

const t = {
  poll: Z,
  disabled: J,
  header: K,
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
  optionProgress: de,
  optionContentInverted: le,
  optionText: fe,
  optionPercent: he,
  optionProgressSimple: ue,
  checkmark: me,
  checkbox: pe,
  checkboxChecked: ve,
  submitBtn: ge,
  footer: Ne,
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
  const [d, C] = d(voted);

  const [i, u] = d(() =>
    selectedOptionIds.length > 0
      ? new Set(selectedOptionIds)
      : selectedOptionId
      ? new Set([selectedOptionId])
      : new Set()
  );

  const [$, w] = d(totalVotes);
  const [L, k] = d(options);
  const [O, y] = d(voted);
  const [P, x] = d(false);
  const [X, T] = d(new Map());
  const m = onVote(new Map());

  const _ = options.map((e) => `${e.id}:${e.votes}`).join(",");

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
  }, [_, totalVotes, voted, selectedOptionId, selectedOptionIds.join(",")]);

  options(() => {
    if (voted && m.current.size > 0) {
      const e = new Map();

      m.current.forEach((r, n) => {
        e.set(n, r.offsetWidth);
      });

      T(e);
    }
  }, [voted]);

  const W = d && !P;

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

      if (!d) {
        w((o) => o + 1);
      }

      u(new Set([e]));
      C(true);
      x(false);
      const n = onVote?.(e);

      if (n && typeof n.then == "function") {
        n.then((o) => {
          if (o) {
            E(o);
          }
        });
      }

      M();
    },
    [disabled, W, multipleChoice, i, d, onVote]
  );

  const z = q(() => {
    if (i.size === 0) {
      return;
    }
    const e = Array.from(i);

    k((n) =>
      n.map((o) => (e.includes(o.id) ? { ...o, votes: o.votes + 1 } : o))
    );

    if (!d) {
      w((n) => n + 1);
    }

    C(true);
    x(false);
    const r = onVoteMultiple?.(e);

    if (r && typeof r.then == "function") {
      r.then((n) => {
        if (n) {
          E(n);
        }
      });
    }

    M();
  }, [i, d, onVoteMultiple]);

  const E = (e) => {
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

  const M = () => {
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

  const V = () => {
    x(true);
    y(false);
  };

  const H = () => {
    x(false);
    y(true);
  };

  const Q = (e) => ($ === 0 ? 0 : Math.round((e / $) * 100));

  const R = (e) =>
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
          d &&
            u("div", {
              className: t.meta,
              children: u("span", { className: t.voteCount, children: R($) }),
            }),
        ],
      }),
      u("div", {
        className: t.options,
        children: L.map((e) => {
          const r = Q(e.votes);
          const n = i.has(e.id);
          const o = O ? `${r}%` : "0%";
          const c = X.get(e.id) || m.current.get(e.id)?.offsetWidth || 0;
          return W
            ? u(
                "div",
                {
                  ref: (N) => {
                    if (N) {
                      m.current.set(e.id, N);
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
                  ref: (N) => {
                    if (N) {
                      m.current.set(e.id, N);
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
        i.size > 0 &&
        !P &&
        u("button", {
          className: t.submitBtn,
          onClick: z,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        u("div", {
          className: t.footer,
          children: P
            ? u(disabled, {
                children: [
                  multipleChoice &&
                    i.size > 0 &&
                    u("button", {
                      className: t.submitBtn,
                      onClick: z,
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
                onClick: V,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}

export { Poll as Poll, Poll as default };
