import { a2, a3, d, y as y_1, $, a, M as M_1 } from "./index-DDCL-vHK.js";
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
    e.SENTRY_RELEASE = { id: "1.1.0" };
    const t = new e.Error().stack;

    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "f1965f73-1ed2-4e4b-9750-8b6f2f3d2b79";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-f1965f73-1ed2-4e4b-9750-8b6f2f3d2b79";
    }
  } catch {}
})();

const N = {
  async getChangelog() {
    const e = await a2.get(a3.platform.changelog);
    return e.data ?? e;
  },
};

const p = "k60N";
const y = "nXet";
const w = "Yu6b";
const C = "tojB";
const E = "YrQN";
const I = "kQB6";
const _ = "wX0K";
const k = "FAMl";
const D = "RsVa";
const A = "OOkk";
const M = "BaeQ";

const s = {
  changelog: p,
  entry: y,
  entryHeader: w,
  version: C,
  date: E,
  changes: I,
  change: _,
  singleChange: k,
  note: D,
  loading: A,
  divider: M,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [l, i] = d([]);
  const [r, c] = d(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let n = false;

    N.getChangelog()
      .then((d) => {
        if (!n) {
          i(d);
          c(false);
        }
      })
      .catch(() => {
        if (!n) {
          c(false);
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
              : l.map((n, d) =>
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
                        d < l.length - 1 && a("div", { className: s.divider }),
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
