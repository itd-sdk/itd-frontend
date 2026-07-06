import { d, y as y_1, au, $, a as a_1, M as M_1 } from "./index-CFv_0Hh6.js";
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
    const c = new s.Error().stack;

    if (c) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[c] = "5fb951dc-5ecd-4dcc-8293-fdc1eee9afb5";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-5fb951dc-5ecd-4dcc-8293-fdc1eee9afb5";
    }
  } catch {}
})();
const p = "AEhp";
const b = "LRmY";
const N = "WMuD";
const y = "Z84g";
const E = "ssBV";
const D = "PfMP";
const w = "iUGT";
const C = "Opgr";
const I = "pmHO";
const M = "WtEm";
const _ = "Di8L";

const a = {
  changelog: p,
  entry: b,
  entryHeader: N,
  version: y,
  date: E,
  changes: D,
  change: w,
  singleChange: C,
  note: I,
  loading: M,
  divider: _,
};

export function ChangelogModal({ isOpen, onClose }) {
  const [d, o] = d([]);
  const [r, l] = d(true);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    let e = false;

    au.getChangelog()
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
    ? $(
        a_1(M_1, {
          onClose: onClose,
          title: "Что нового",
          size: "default",
          children: a_1("div", {
            className: a.changelog,
            children: r
              ? a_1("div", { className: a.loading, children: "Загрузка..." })
              : d.map((e, t) =>
                  a_1(
                    "div",
                    {
                      className: a.entry,
                      children: [
                        a_1("div", {
                          className: a.entryHeader,
                          children: [
                            a_1("span", {
                              className: a.version,
                              children: ["v", e.version],
                            }),
                            a_1("span", {
                              className: a.date,
                              children: e.date,
                            }),
                          ],
                        }),
                        e.changes.length === 1 && !e.changes[0].startsWith("•")
                          ? a_1("p", {
                              className: a.singleChange,
                              children: e.changes[0],
                            })
                          : a_1("ul", {
                              className: a.changes,
                              children: e.changes.map((g, h) =>
                                a_1(
                                  "li",
                                  { className: a.change, children: g },
                                  h
                                )
                              ),
                            }),
                        e.note &&
                          a_1("p", { className: a.note, children: e.note }),
                        t < d.length - 1 &&
                          a_1("div", { className: a.divider }),
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
