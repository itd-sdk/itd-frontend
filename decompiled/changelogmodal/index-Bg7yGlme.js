import { d, h, w as w_1, v, w_1 as w_1_1, M as M_1 } from "./index-CR_1arh8.js";
(() => {
  try {
    const s =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    s.SENTRY_RELEASE = { id: "1.1.2" };
    const d = new s.Error().stack;

    if (d) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[d] = "b4677d39-a4fd-403a-973a-d3c7c929e2c4";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-b4677d39-a4fd-403a-973a-d3c7c929e2c4";
    }
  } catch {}
})();
const b = "q7q0";
const p = "MAIt";
const N = "FBGX";
const y = "vHGk";
const w = "g2fq";
const E = "r70S";
const I = "S7hK";
const C = "Mgdi";
const D = "zYnH";
const H = "ee9D";
const M = "r2gg";

const a = {
  changelog: b,
  entry: p,
  entryHeader: N,
  version: y,
  date: w,
  changes: E,
  change: I,
  singleChange: C,
  note: D,
  loading: H,
  divider: M,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [c, o] = onClose([]);
  const [r, l] = onClose(true);

  h(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    w_1
      .getChangelog()
      .then((t) => {
        if (!e) {
          o(t);
          l(false);
        }
      })
      .catch(() => {
        if (!e) {
          l(false);
        }
      });

    return () => {
      e = true;
    };
  }, [isOpen]);

  return isOpen
    ? v(
        w_1_1(M_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: w_1_1("div", {
            className: a.changelog,
            children: r
              ? w_1_1("div", { className: a.loading, children: "Загрузка..." })
              : c.map((e, t) =>
                  w_1_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        w_1_1("div", {
                          className: a.entryHeader,
                          children: [
                            w_1_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            w_1_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? w_1_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : w_1_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                w_1_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          w_1_1("p", { className: a.note, children: e.note }),
                        t < c.length - 1 &&
                          w_1_1("div", { className: a.divider }),
                      ],
                    },
                    e.version
                  )
                ),
          }),
        }),
        document.body
      )
    : null;
}

export { ChangelogModal as ChangelogModal, ChangelogModal as default };
