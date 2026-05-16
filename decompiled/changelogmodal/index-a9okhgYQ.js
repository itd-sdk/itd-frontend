import { a4, a5, d, y as y_1, $, a, M as M_1 } from "./index-BCnJB3wz.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.1" };
    const c = new e.Error().stack;

    if (c) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[c] = "ccc40615-8d73-4a2a-939f-c1ee0a783fcc";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-ccc40615-8d73-4a2a-939f-c1ee0a783fcc";
    }
  } catch {}
})();

const p = {
  async getChangelog() {
    const e = await a4.get(a5.platform.changelog);
    return e.data ?? e;
  },
};

const b = "MzEY";
const y = "KHAb";
const C = "hJxG";
const E = "USi6";
const I = "dHBA";
const w = "YZCf";
const _ = "Mjbi";
const A = "Xo1n";
const D = "PNP6";
const H = "Nfe7";
const M = "XklR";

const s = {
  changelog: b,
  entry: y,
  entryHeader: C,
  version: E,
  date: I,
  changes: w,
  change: _,
  singleChange: A,
  note: D,
  loading: H,
  divider: M,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [t, o] = d([]);
  const [r, d] = d(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let n = false;

    p.getChangelog()
      .then((l) => {
        if (!n) {
          o(l);
          d(false);
        }
      })
      .catch(() => {
        if (!n) {
          d(false);
        }
      });

    return () => {
      n = true;
    };
  }, [isOpen]);

  return isOpen
    ? $(
        a(M_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: a("div", {
            className: s.changelog,
            children: r
              ? a("div", { className: s.loading, children: "Загрузка..." })
              : t.map((n, l) =>
                  a(
                    "div",
                    {
                      className: s.entry,
                      children: [
                        a("div", {
                          className: s.entryHeader,
                          children: [
                            a("span", {
                              className: s.version,
                              children: ["v", n.version],
                            }),
                            a("span", {
                              className: s.date,
                              children: n.date,
                            }),
                          ],
                        }),
                        n.changes.length === 1 && !n.changes[0].startsWith("•")
                          ? a("p", {
                              className: s.singleChange,
                              children: n.changes[0],
                            })
                          : a("ul", {
                              className: s.changes,
                              children: n.changes.map((g, h) =>
                                a("li", { className: s.change, children: g }, h)
                              ),
                            }),
                        n.note &&
                          a("p", { className: s.note, children: n.note }),
                        l < t.length - 1 && a("div", { className: s.divider }),
                      ],
                    },
                    n.version
                  )
                ),
          }),
        }),
        document.body
      )
    : null;
}

export { ChangelogModal as ChangelogModal, ChangelogModal as default };
