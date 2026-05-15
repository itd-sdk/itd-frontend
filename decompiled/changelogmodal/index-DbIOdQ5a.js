import { a4, a5, d, y as y_1, $, a, M as M_1 } from "./index-7xRaK15k.js";
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
    const t = new e.Error().stack;

    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "611eec8f-53d4-4985-8175-45bfec72ca47";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-611eec8f-53d4-4985-8175-45bfec72ca47";
    }
  } catch {}
})();

const y = {
  async getChangelog() {
    const e = await a4.get(a5.platform.changelog);
    return e.data ?? e;
  },
};

const N = "ZHBm";
const b = "VRVk";
const E = "Minm";
const I = "gdMF";
const w = "XBwP";
const C = "QD4A";
const D = "OgdJ";
const _ = "ZImW";
const M = "nJE6";
const A = "Eqfy";
const H = "yi1D";

const s = {
  changelog: N,
  entry: b,
  entryHeader: E,
  version: I,
  date: w,
  changes: C,
  change: D,
  singleChange: _,
  note: M,
  loading: A,
  divider: H,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [c, o] = d([]);
  const [r, d] = d(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let n = false;

    y.getChangelog()
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
              : c.map((n, l) =>
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
                        l < c.length - 1 && a("div", { className: s.divider }),
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
